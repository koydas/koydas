// site-kit (ADR-0001): the vendored copy declares a version and a hash, and the tests fail when the files drift from
// them, when the copy drifts from the kit source, or when the React wrapper stops rendering the shared partials.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { cpSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import { PageHead, SiteFooter, SiteHeader } from './site-kit/react/SiteShell';
import { theme } from './theme';

const COPY = resolve(__dirname, 'site-kit');
const SOURCE = resolve(__dirname, '../../site-kit');
const sha = (b: Buffer | string) => createHash('sha256').update(b).digest('hex');
const read = (dir: string, f: string) => readFileSync(join(dir, f));

const HEAD = { eyebrow: 'A & B', title: '<b>"x"</b>', lede: "it's" };
type Rendered = { header: Record<string, string>; footer: Record<string, string>; pagehead: string };
// render.mjs runs in plain Node, as in the static-site builds (not through the test bundler).
function renderWithNode(dir: string): Rendered {
  const script = `import(${JSON.stringify(pathToFileURL(join(dir, 'render.mjs')).href)}).then((k) => {
    const ids = ${JSON.stringify(['portfolio', 'agent-patterns', 'autonomous-dev-loop', 'ai-dev-tools', 'repo-orchestrator'])};
    console.log(JSON.stringify({ header: Object.fromEntries(ids.map((i) => [i, k.renderHeader(i)])), footer: Object.fromEntries(ids.map((i) => [i, k.renderFooter(i)])), pagehead: k.renderPageHead(${JSON.stringify(HEAD)}) }));
  });`;
  return JSON.parse(execFileSync('node', ['-e', script], { encoding: 'utf8' })) as Rendered;
}
type Manifest = { version: string; profile: string; hash: string; files: Record<string, string> };

const copy = JSON.parse(read(COPY, 'KIT.json').toString()) as Manifest;
const nav = JSON.parse(read(COPY, 'nav.json').toString()) as { sites: { id: string; repo: string; url: string }[] };
const ids = nav.sites.map((s) => s.id);
// React serialises empty elements as <path></path>; the partials write <path/>.
const norm = (html: string) => html.replace(/<path ([^>]*?)\/>/g, '<path $1></path>').replace(/>\s+</g, '><').trim();

describe('site-kit copy', () => {
  it('matches the version and hash it declares', () => {
    const actual = Object.fromEntries(Object.keys(copy.files).sort().map((f) => [f, sha(read(COPY, f))]));
    expect(actual).toEqual(copy.files);
    const hash = sha(Object.keys(actual).sort().map((f) => `${f} ${actual[f]}\n`).join(''));
    expect(hash).toBe(copy.hash);
    expect(copy.profile).toBe('react');
  });

  it('is the kit source at the version it declares', () => {
    const kit = JSON.parse(read(SOURCE, 'KIT.json').toString()) as { version: string; profiles: Record<string, { hash: string }> };
    expect(copy.version).toBe(kit.version);
    expect(copy.hash).toBe(kit.profiles.react.hash);
    for (const f of Object.keys(copy.files)) expect(read(COPY, f).equals(read(SOURCE, f)), f).toBe(true);
  });

  it('has a fresh source manifest', () => {
    expect(() => execFileSync('node', [join(SOURCE, 'scripts/kit.mjs'), 'verify'], { stdio: 'pipe' })).not.toThrow();
  });
});

describe('shared shell', () => {
  it('lists the five sites with their repos', () => {
    expect(ids).toEqual(['portfolio', 'agent-patterns', 'autonomous-dev-loop', 'ai-dev-tools', 'repo-orchestrator']);
    for (const s of nav.sites) {
      expect(s.repo).toMatch(/^koydas\/[a-z-]+$/);
      expect(s.url).toBe(`https://koydas.github.io/${s.repo.split('/')[1]}/`);
    }
  });

  it('is plain HTML: no script, no event handler, one current site', () => {
    const kit = renderWithNode(COPY);
    for (const id of ids) {
      for (const html of [kit.header[id], kit.footer[id]]) {
        expect(html).not.toMatch(/<script|\son\w+=|javascript:/i);
        expect(html.match(/aria-current="true"/g)).toHaveLength(1);
        expect(html).toContain(`data-sk-current="${id}"`);
      }
    }
  });

  it.each(ids)('React wrapper renders the same markup as the partials (%s)', (id) => {
    const kit = renderWithNode(COPY);
    expect(norm(renderToStaticMarkup(<SiteHeader current={id} />))).toBe(norm(kit.header[id]));
    expect(norm(renderToStaticMarkup(<SiteFooter current={id} />))).toBe(norm(kit.footer[id]));
  });

  it('renders the page header like the partial, escaped', () => {
    const kit = renderWithNode(COPY);
    expect(norm(renderToStaticMarkup(<PageHead {...HEAD} />))).toBe(norm(kit.pagehead));
  });

  it('is rendered identically by the Python twin used by repo-orchestrator', () => {
    const kit = renderWithNode(COPY);
    const block = execFileSync('node', [join(SOURCE, 'scripts/kit.mjs'), 'print-python'], { encoding: 'utf8' });
    const dir = mkdtempSync(join(tmpdir(), 'sk-'));
    const script = join(dir, 'twin.py');
    writeFileSync(
      script,
      `import html, json, re\n${block}\nids = ${JSON.stringify(ids)}\nprint(json.dumps({i: [sk_header(i), sk_footer(i)] for i in ids}))\nprint(json.dumps(sk_pagehead(${JSON.stringify(HEAD.eyebrow)}, ${JSON.stringify(HEAD.title)}, ${JSON.stringify(HEAD.lede)})))\n`,
    );
    const [rows, head] = execFileSync('python3', ['-I', script], { encoding: 'utf8' }).trim().split('\n');
    const py = JSON.parse(rows) as Record<string, [string, string]>;
    for (const id of ids) expect(py[id]).toEqual([kit.header[id], kit.footer[id]]);
    expect(JSON.parse(head)).toBe(kit.pagehead);
  });
});

describe('design tokens', () => {
  const css = readFileSync(join(COPY, 'tokens.css'), 'utf8');
  const token = (name: string) => css.match(new RegExp(`--sk-${name}:\\s*([^;]+);`))?.[1].trim();

  it('theme.ts uses the kit palette, radii, spacing and focus ring', () => {
    const c = theme.color;
    expect([c.bg, c.surface, c.surfaceRaised, c.border, c.borderStrong, c.text, c.muted, c.subtle, c.accent, c.accentSoft, c.violet, c.success]).toEqual(
      ['bg', 'surface', 'raised', 'border', 'border-strong', 'text', 'muted', 'subtle', 'accent', 'accent-soft', 'violet', 'success'].map(token),
    );
    expect([theme.radius.sm, theme.radius.md, theme.radius.lg]).toEqual(['sm', 'md', 'lg'].map((n) => token(`radius-${n}`)));
    expect(Object.values(theme.space)).toEqual([1, 2, 3, 4, 5, 6, 7].map((n) => token(`space-${n}`)));
    expect([theme.focus.color, theme.focus.width, theme.focus.offset]).toEqual([token('focus'), token('focus-width'), token('focus-offset')]);
  });
});

describe('drift detection', () => {
  const run = (...args: string[]) => {
    try {
      execFileSync('node', [join(SOURCE, 'scripts/kit.mjs'), ...args], { stdio: 'pipe' });
      return 0;
    } catch (e) {
      return (e as { status: number }).status;
    }
  };

  it('passes on an untouched copy and fails when a vendored file is edited', () => {
    const dir = mkdtempSync(join(tmpdir(), 'sk-copy-'));
    cpSync(COPY, dir, { recursive: true });
    expect(run('check', '--target', dir)).toBe(0);
    writeFileSync(join(dir, 'shell.css'), readFileSync(join(dir, 'shell.css'), 'utf8') + '\n.x{}\n');
    expect(run('check', '--target', dir)).toBe(1);
  });

  it('fails when the declared version or hash is not the kit one', () => {
    const dir = mkdtempSync(join(tmpdir(), 'sk-copy-'));
    cpSync(COPY, dir, { recursive: true });
    const m = JSON.parse(readFileSync(join(dir, 'KIT.json'), 'utf8')) as Manifest;
    writeFileSync(join(dir, 'KIT.json'), JSON.stringify({ ...m, version: '0.0.1' }));
    expect(run('check', '--target', dir)).toBe(1);
  });

  it('reads the declaration of a Python module and of a JSON manifest, and flags a mismatch', () => {
    const script = `import(${JSON.stringify(pathToFileURL(join(SOURCE, 'scripts/drift.mjs')).href)}).then((d) => {
      const kit = JSON.parse(require('node:fs').readFileSync(${JSON.stringify(join(SOURCE, 'KIT.json'))}, 'utf8'));
      const py = 'SK_VERSION = "' + kit.version + '"\\nSK_HASH = "' + kit.profiles.python.hash + '"\\n';
      const okDecl = d.declared(py, 'python');
      console.log(JSON.stringify([d.compare({ profile: 'python' }, okDecl), d.compare({ profile: 'react' }, okDecl), d.compare({ profile: 'python' }, { version: '0.0.1', hash: 'x' }), d.compare({ profile: 'python' }, d.declared('nothing', 'python'))]));
    });`;
    const out = JSON.parse(execFileSync('node', ['-e', script], { encoding: 'utf8' })) as (string | null)[];
    expect(out[0]).toBeNull();
    expect(out[1]).toMatch(/^hash /);
    expect(out[2]).toMatch(/^version 0\.0\.1/);
    expect(out[3]).toBe('no declaration found');
  });
});

describe('failure paths: an unknown site id is rejected the same way by every renderer', () => {
  it('throws from render.mjs (header, footer), the React wrapper and the Python twin', () => {
    const script = `import(${JSON.stringify(pathToFileURL(join(COPY, 'render.mjs')).href)}).then((k) => {
      const out = [];
      for (const f of [k.renderHeader, k.renderFooter]) { try { f('nope'); out.push('no error'); } catch (e) { out.push(e.message); } }
      console.log(JSON.stringify(out));
    });`;
    const js = JSON.parse(execFileSync('node', ['-e', script], { encoding: 'utf8' })) as string[];
    expect(js).toEqual(['site-kit: unknown site "nope"', 'site-kit: unknown site "nope"']);
    expect(() => renderToStaticMarkup(<SiteHeader current="nope" />)).toThrow('site-kit: unknown site "nope"');
    expect(() => renderToStaticMarkup(<SiteFooter current="nope" />)).toThrow('site-kit: unknown site "nope"');

    const block = execFileSync('node', [join(SOURCE, 'scripts/kit.mjs'), 'print-python'], { encoding: 'utf8' });
    const dir = mkdtempSync(join(tmpdir(), 'sk-'));
    const py = join(dir, 'fail.py');
    writeFileSync(py, `import html, json, re\n${block}\nfor f in (sk_header, sk_footer):\n    try:\n        f('nope')\n        print('no error')\n    except KeyError as e:\n        print('KeyError')\n`);
    expect(execFileSync('python3', ['-I', py], { encoding: 'utf8' }).trim().split('\n')).toEqual(['KeyError', 'KeyError']);
  });
});
