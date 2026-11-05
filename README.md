# Normal for whom?

Where the reference ranges on a blood test came from, whether a separate threshold exists for women, and where the published evidence says the female range is set wrong. A companion to [The Women's Health Record](https://lucylepoidevin.github.io/thewomenshealthrecord/).

- `site/` — Vite + React + Tailwind site, deployed to GitHub Pages by `.github/workflows/deploy.yml`.
- `research/` — one Markdown file per analyte batch, with the primary sources opened and a JSON block per analyte.
- `pipeline/build_analytes.py` — merges the research JSON into `site/public/data/analytes.json` (aliases, exclusions, groups, scales, citation checks), then applies the edited prose in `pipeline/prose/` and the recorded corrections.
- `pipeline/build_quizzes.py` — writes `site/public/data/quizzes.json`, pulling each answer's source from the analyte table.

```
python3 pipeline/build_analytes.py
python3 pipeline/build_quizzes.py
cd site && npm install && npm run dev
```

Checks, run from `site/` with the dev server on 5181:

- `node scripts/functional-test.mjs` drives every interactive feature in a real browser: the line parser against about 80 pasted lines (units, decimal commas, bracketed intervals, lines that must not be read), manual entry of every test in every unit, every entry for both sexes at three values, citations, test pages, the table, the self-assessment, navigation, unknown addresses and phone width. It also runs against the deployed site with `SITE_BASE=https://lucylepoidevin.github.io/thewomenshealthrecord2/`.
- `node scripts/check-site.mjs` crawls every route at 1280 and 375 px for console errors, failed requests and sideways overflow.
- `python3 pipeline/verify_prose.py pipeline/prose/batch-*.json` confirms that the edited prose holds exactly the numbers and citations of the research text. Deliberate departures are listed, with reasons, in `pipeline/prose/corrections.json`.
- `sh scripts/prose-lint.sh` lists second-person address and question marks in interface text.

The entries have not yet been reviewed by a clinical chemist or haematologist, and the site says so.
