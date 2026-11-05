---
name: site-change
description: Procedure for changing the koydas profile site (site/, Vite + React 19 + TypeScript + styled-components) and keeping README.md profile claims consistent. Use for any edit under site/ or to the profile README.
---

1. **Checks** from `site/` (same as `deploy-site.yml` on PRs touching `site/**`): `npm ci` → `npm run lint` → `npm run typecheck` → `npm test` → `npm run build`.
2. Content lives in `site/src/data`; typed in `site/src/types.ts`; theme tokens in `site/src/theme.ts`. Change data before components; extend tests next to the component (`*.test.tsx`).
3. **Consistency**: figures quoted in `README.md` or the site (ADR counts, test counts, pattern counts, repo list) come from the target repos' own READMEs — verify them there, do not carry them over.
4. Never edit `main`-deployed output by hand; deployment is the workflow's job.
5. **Shared shell**: `site-kit/` is the source of the top bar, footer, page header and tokens used by all five sites (ADR-0001). Never edit `site/src/site-kit/` by hand: change `site-kit/`, run `node site-kit/scripts/kit.mjs build`, then `sync --target site/src/site-kit --profile react`; the tests fail when the copy drifts.
