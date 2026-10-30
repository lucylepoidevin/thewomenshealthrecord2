# Normal for whom?

Where the reference ranges on a blood test came from, whether a separate threshold exists for women, and where the published evidence says the female range is set wrong. A companion to [The Women's Health Record](https://lucylepoidevin.github.io/thewomenshealthrecord/).

- `site/` — Vite + React + Tailwind site, deployed to GitHub Pages by `.github/workflows/deploy.yml`.
- `research/` — one Markdown file per analyte batch, with the primary sources opened and a JSON block per analyte.
- `pipeline/build_analytes.py` — merges the research JSON into `site/public/data/analytes.json` (aliases, groups, scales, citation checks).
- `pipeline/build_quizzes.py` — writes `site/public/data/quizzes.json`, pulling each answer's source from the analyte table.

```
python3 pipeline/build_analytes.py
python3 pipeline/build_quizzes.py
cd site && npm install && npm run dev
```

Checks: `node scripts/check-site.mjs` (dev server on 5181) crawls every route at 1280 and 375 px; `sh scripts/prose-lint.sh` flags second-person prose.

The entries have not yet been reviewed by a clinical chemist or haematologist, and the site says so.
