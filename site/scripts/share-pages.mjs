// Static share pages with Open Graph tags for each quiz and analyte, redirecting to the hash route.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const pub = fileURLToPath(new URL('../public/data/', import.meta.url))
const site = 'https://lucylepoidevin.github.io/thewomenshealthrecord2/'
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const pages = []
for (const q of JSON.parse(readFileSync(pub + 'quizzes.json', 'utf8'))) pages.push({ route: `quiz/${q.slug}`, title: q.title, desc: q.dek, img: 'home.png' })
for (const a of JSON.parse(readFileSync(pub + 'analytes.json', 'utf8')).analytes) pages.push({ route: `analyte/${a.id}`, title: `${a.name}: where the reference range came from`, desc: a.contested.summary.replace(/\s*\[[A-Z]+\d+[^\]]*\]/g, '').slice(0, 200), img: 'home.png' })
const html = p => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(p.title)} · Normal for whom?</title>
<meta name="description" content="${esc(p.desc)}"><meta property="og:type" content="article"><meta property="og:site_name" content="Normal for whom?">
<meta property="og:title" content="${esc(p.title)}"><meta property="og:description" content="${esc(p.desc)}"><meta property="og:image" content="${site}share/${p.img}"><meta property="og:url" content="${site}${p.route}/">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(p.title)}"><meta name="twitter:description" content="${esc(p.desc)}"><meta name="twitter:image" content="${site}share/${p.img}">
<meta http-equiv="refresh" content="0; url=${site}#/${p.route}"><link rel="canonical" href="${site}#/${p.route}">
<style>body{font-family:system-ui;background:#FDF2F5;color:#2A1F26;padding:3rem;text-align:center}a{color:#8B1E4B}</style></head>
<body><p>Opening <a href="${site}#/${p.route}">${esc(p.title)}</a>…</p></body></html>`
for (const p of pages) { mkdirSync(`${dist}${p.route}`, { recursive: true }); writeFileSync(`${dist}${p.route}/index.html`, html(p)); console.log('share page', p.route) }
