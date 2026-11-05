#!/usr/bin/env node
// Reads the kit version and hash each repo declares on its default branch and compares them to this kit.
// Writes nothing. Exit 1 when a repo is behind, ahead or unreadable. Used by .github/workflows/kit-drift.yml.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const KIT = JSON.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'KIT.json'), 'utf8'));

// repo → where the declaration is and how to read it.
export const TARGETS = [
  { repo: 'koydas/koydas', path: 'site/src/site-kit/KIT.json', profile: 'react', kind: 'json' },
  { repo: 'koydas/agent-patterns', path: 'site/src/site-kit/KIT.json', profile: 'react', kind: 'json' },
  { repo: 'koydas/autonomous-dev-loop', path: 'scripts/lib/site_kit/KIT.json', profile: 'node', kind: 'json' },
  { repo: 'koydas/ai-dev-tools', path: 'scripts/site-kit/KIT.json', profile: 'node', kind: 'json' },
  { repo: 'koydas/repo-orchestrator', path: 'src/repo_orchestrator/dashboard.py', profile: 'python', kind: 'python' },
];

export function declared(text, kind) {
  if (kind === 'json') {
    const j = JSON.parse(text);
    return { version: j.version, hash: j.hash };
  }
  return { version: text.match(/^SK_VERSION = "([^"]+)"/m)?.[1], hash: text.match(/^SK_HASH = "([0-9a-f]{64})"/m)?.[1] };
}

export function compare(target, decl) {
  const want = KIT.profiles[target.profile].hash;
  if (!decl.version || !decl.hash) return 'no declaration found';
  if (decl.version !== KIT.version) return `version ${decl.version}, kit is ${KIT.version}`;
  if (decl.hash !== want) return `hash ${decl.hash.slice(0, 12)}…, kit has ${want.slice(0, 12)}…`;
  return null;
}

async function main() {
  const rows = [];
  for (const t of TARGETS) {
    const url = `https://raw.githubusercontent.com/${t.repo}/HEAD/${t.path}`;
    let problem;
    try {
      const res = await fetch(url, { headers: { 'cache-control': 'no-cache' } });
      problem = res.ok ? compare(t, declared(await res.text(), t.kind)) : res.status === 404 ? 'no kit yet (404)' : `HTTP ${res.status}`;
    } catch (e) {
      problem = `unreadable: ${e.message}`;
    }
    rows.push({ ...t, problem });
  }
  const table = ['| Repo | Profile | Status |', '|---|---|---|', ...rows.map((r) => `| ${r.repo} | ${r.profile} | ${r.problem ?? `✓ ${KIT.version}`} |`)].join('\n');
  console.log(table);
  if (process.env.GITHUB_STEP_SUMMARY) (await import('node:fs')).appendFileSync(process.env.GITHUB_STEP_SUMMARY, table + '\n');
  if (rows.some((r) => r.problem)) process.exit(1);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
