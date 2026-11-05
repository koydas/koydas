# ADR-0001: One shared site shell, distributed as a vendored kit

- **Date:** 2026-11-05
- **Status:** Accepted

## Context

Five GitHub Pages sites on one origin (`koydas.github.io`) read as five separate sites:

| Site | Build |
|---|---|
| Portfolio (`koydas/koydas`) | Vite + React 19 + styled-components |
| Agent Patterns (`koydas/agent-patterns`) | Vite + React 19 + plain CSS, prerendered routes |
| Autonomous Dev Loop (`koydas/autonomous-dev-loop`) | static HTML from Node (`scripts/lib/dashboard_ui.mjs`, `eval_site.mjs`, `pipeline_site.mjs`), 700+ pages |
| AI Dev Tools (`koydas/ai-dev-tools`) | static HTML from Node (`scripts/build-dashboard.mjs`) |
| Repo Orchestrator (`koydas/repo-orchestrator`) | static HTML from Python (`dashboard.py`) |

They have different stacks, different palettes (the three dashboards are light/dark with a `#6941f5` accent, the two Vite sites are dark only), no shared top bar, no shared footer, and few links between them. `repo-orchestrator`'s dashboard is a read-only projection of `report.json` with no script and no dependency (ADR-0012, enforced by `tests/test_dashboard.py`), so whatever is shared must work as static HTML and CSS.

## Decision

**A versioned kit in this repo (`site-kit/`), vendored into each repository by a script (option A).** Each repository commits its own copy, declares the kit version and a hash next to it, and tests that its copy matches both.

Kit contents (`site-kit/`): `tokens.css` (palette plus one scale each for spacing, radius, type and focus ring, all `--sk-*`), `shell.css` (top bar, site switcher, footer, page header), `nav.json` (the five sites), `header.html`, `footer.html`, `pagehead.html` (templates with `{{key}}` and one `{{#sites}}` loop), renderers (`render.mjs` for Node, `render.py` for Python, same template language), `react/SiteShell.tsx` for the Vite sites, `KIT.json` (version, per-profile file hashes), `scripts/kit.mjs` (build, verify, sync, check).

Rules of the shell:

1. **No script.** The site switcher and the phone menu are one `<details>`. The bar is sticky (CSS) where it is the only top chrome; on the dashboards it is offset so their own header stays sticky below it.
2. **Always dark.** The shell uses the portfolio palette on every site. The content of the three dashboards keeps its own light/dark theme (decided with the owner).
3. **The current site is marked** with `aria-current="true"` (a site in a set, not a page in a set: `"page"` stays with each site's local navigation).
4. **Local navigation stays local.** The tabs, sidebars and phone tab bars of the dashboards are not replaced; the kit bar sits above them.
5. **Contextual cross-links are written by hand in each site and only where true** (a pattern's "Running in" names the repo; a dashboard section implements the pattern).

Hash: `sha256` over the lines `<path> <sha256(bytes)>\n` of the profile's files, sorted by path. Profiles: `react` (Vite sites), `node` (Node-built sites), `python` (repo-orchestrator: the kit is inlined into `dashboard.py` between `# BEGIN site-kit` and `# END site-kit`, because `tests/test_dashboard.py` allows only `models` and `report` to be imported).

## Drift detection

- **Per repo:** a test recomputes the hashes of the vendored files and compares them to the version and hash the copy declares (`KIT.json`, or `SK_VERSION` / `SK_HASH` in `dashboard.py`). Editing a copy by hand fails it.
- **Between repos:** `.github/workflows/kit-drift.yml` (weekly and manual) reads each repo's declared version and hash from the default branch and fails, with a table, when one differs from `site-kit/KIT.json` here. It writes nothing.
- **Proposal, not implemented:** a repo-orchestrator policy "shared shell = `koydas/koydas` `site-kit/`" (a declared relationship with a named authority) would put this check in the coherence model instead of a workflow. It would be a new milestone (M4+) and needs its own ADR there.

## Alternatives considered

- **B. Runtime include served from the portfolio.** Rejected: it needs a script or a fetch (forbidden for repo-orchestrator's pages), and ties the availability of five sites to one deploy.
- **C. Published npm package.** Rejected: only the two Vite sites can consume it; the Node- and Python-generated sites cannot, and it adds a registry and a release step for 100 lines of CSS.
- **Shell in the content's theme (light/dark).** Rejected for now: it would touch every colour of the three dashboards and 700+ ADL pages. A dark masthead over light content is the smaller change; going dark everywhere stays possible later.

## Consequences

- ✅ Each site builds from its own repository, with no network access at build or run time; a PR to one repo never breaks another site; the PRs merge in any order.
- ✅ repo-orchestrator's dashboard stays scriptless and dependency-free.
- ⚠️ Copies exist. Updating the kit is a PR per repo (`kit.mjs sync`) and the weekly drift check is what tells you which ones are behind.
- ⚠️ The kit is mirrored three ways (HTML templates, JSX, Python). The tests of this repo render all three and compare them; changing a template means changing `SiteShell.tsx` and keeping `render.py` working, or the tests fail.
- ⚠️ `kit-drift.yml` is a scheduled workflow: one small run a week.

## Updating the kit

1. Edit `site-kit/`, bump the version in `site-kit/KIT.json` if the change must reach the sites, run `node site-kit/scripts/kit.mjs build`.
2. `node site-kit/scripts/kit.mjs sync --target <repo>/<dir> --profile react|node`, or `--python <repo>/src/repo_orchestrator/dashboard.py`.
3. Run that repo's checks and open its PR. `kit.mjs check` with the same arguments lists the differences.
