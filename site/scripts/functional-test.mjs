// Functional test of every interactive feature, driven through the real page.
//   node scripts/functional-test.mjs          (dev server on 5181, or SITE_BASE=...)
// Exits 1 if any check fails. Each check prints PASS or FAIL with what was expected and found.
import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'

const base = (process.env.SITE_BASE ?? 'http://localhost:5181/thewomenshealthrecord2/')
const data = JSON.parse(readFileSync('public/data/analytes.json', 'utf8')).analytes
const quizzes = JSON.parse(readFileSync('public/data/quizzes.json', 'utf8'))
const byId = Object.fromEntries(data.map(a => [a.id, a]))
let pass = 0, fail = 0
const fails = []
const ok = (name, cond, detail = '') => { if (cond) { pass++ } else { fail++; fails.push(`${name}${detail ? '  —  ' + detail : ''}`); console.log('FAIL', name, detail) } }
const close = (a, b, tol = 0.011) => Math.abs(a - b) <= Math.max(tol, Math.abs(b) * 0.002)

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] })
const page = await ctx.newPage()
const errors = []
page.on('console', m => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)) })
page.on('pageerror', e => errors.push('pageerror ' + e.message.slice(0, 200)))
const go = async r => { const url = base + '#' + r; if (page.url() === url) await page.reload({ waitUntil: 'networkidle' }); else await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForTimeout(250) }
const results = () => page.$$eval('[data-testid=result]', els => els.map(e => ({ id: e.dataset.analyte, canonical: parseFloat(e.dataset.canonical), text: e.innerText })))
const paste = async text => { await page.fill('#paste', text); await page.click('[data-testid=read-lines]'); await page.waitForTimeout(150) }
const clear = async () => { const b = await page.$('[data-testid=clear-all]'); if (b) await b.click() }

// ---------- 1. The line parser ----------
await go('/')
// [line, expected analyte id or null when the line must NOT be read, expected value in the table's unit]
const LINES = [
  ['Ferritin 22 ng/mL', 'ferritin', 22],
  ['Serum ferritin: 22 µg/L (15-150)', 'ferritin', 22],
  ['Ferritin (15-150) 22 ng/mL', 'ferritin', 22],
  ['Ferritin\t22\tng/mL\t15-150', 'ferritin', 22],
  ['FERRITIN    22', 'ferritin', 22],
  ['Ferritin 1,234 ng/mL', 'ferritin', 1234],
  ['Ferritin <5 ng/mL', 'ferritin', 5],
  ['Ferritin - 22 ng/mL', 'ferritin', 22],
  ['Ferritin 22 L ng/mL', 'ferritin', 22],
  ['Ferritin 22 mcg/L', 'ferritin', 22],
  ['Ferritin 22 ug/L [15 - 150]', 'ferritin', 22],
  ['Testosterone, total 30 ng/dL', 'testosterone_female', 30],
  ['Hemoglobin 13.2 H g/dL', 'haemoglobin', 13.2],
  ['Hb 11,8 g/dL', 'haemoglobin', 11.8],
  ['Hemoglobin 118 g/L', 'haemoglobin', 11.8],
  ['Haemoglobin 7.3 mmol/L', 'haemoglobin', 11.76],
  ['Hgb 11.8', 'haemoglobin', 11.8],
  ['Haematocrit 0.36 L/L', 'haematocrit', 36],
  ['HCT 36 %', 'haematocrit', 36],
  ['Transferrin saturation 18 %', 'transferrin_saturation', 18],
  ['TSAT 18%', 'transferrin_saturation', 18],
  ['MCV 82 fL', 'mcv', 82],
  ['hs-cTnI 20 ng/L', 'troponin_i_hs_abbott', 20],
  ['Troponin I, high sensitivity 20 pg/mL', 'troponin_i_hs_abbott', 20],
  ['Troponin T 0.012 ng/mL', 'troponin_t_hs_roche', 12],
  ['Creatinine 80 µmol/L', 'creatinine', 0.905],
  ['Creatinine 80 umol/L', 'creatinine', 0.905],
  ['Creatinine 0.9 mg/dL', 'creatinine', 0.9],
  ['NT-proBNP 150 pg/mL', 'nt_probnp', 150],
  ['CK 250 U/L', 'creatine_kinase', 250],
  ['Creatine kinase 250', 'creatine_kinase', 250],
  ['Uric acid 340 µmol/L', 'uric_acid', 5.715],
  ['Urate 0.34 mmol/L', 'uric_acid', 5.715],
  ['ALT 30 U/L', 'alt', 30],
  ['AST 28 IU/L', 'ast', 28],
  ['GGT 45', 'ggt', 45],
  ['Alkaline phosphatase 120 U/L', 'alp', 120],
  ['HbA1c 47 mmol/mol', 'hba1c', 6.452],
  ['A1c 5.9%', 'hba1c', 5.9],
  ['Hemoglobin A1c 5.9 %', 'hba1c', 5.9],
  ['Fasting glucose 5.4 mmol/L', 'glucose_fasting', 97.2],
  ['Glucose, fasting 95 mg/dL', 'glucose_fasting', 95],
  ['Total cholesterol 5.2 mmol/L', 'total_cholesterol', 201.08],
  ['Cholesterol, total 210 mg/dL', 'total_cholesterol', 210],
  ['LDL-C 3.1 mmol/L', 'ldl', 119.88],
  ['LDL cholesterol (calc) 120', 'ldl', 120],
  ['HDL 1.2 mmol/L', 'hdl', 46.4],
  ['HDL cholesterol 45 mg/dL', 'hdl', 45],
  ['Triglycerides 1.5 mmol/L', 'triglycerides', 132.86],
  ['TSH 4.2 mIU/L', 'tsh', 4.2],
  ['TSH 4.2 uIU/mL', 'tsh', 4.2],
  ['Free T4 15 pmol/L', 'ft4', 1.1655],
  ['FT4 1.2 ng/dL', 'ft4', 1.2],
  ['Vitamin D 60 nmol/L', 'vitamin_d', 24],
  ['25-OH Vitamin D 24 ng/mL', 'vitamin_d', 24],
  ['Testosterone 1.2 nmol/L', 'testosterone_female', 34.56],
  ['AMH 12 pmol/L', 'amh', 1.68],
  ['Prolactin 500 mIU/L', 'prolactin', 23.6],
  ['Vitamin B12 250 pg/mL', 'vitamin_b12', 250],
  ['B12 180 pmol/L', 'vitamin_b12', 243.9],
  // Lines that must not be read as one of the table's tests
  ['CRP 5 mg/L', null],
  ['Sodium 140 mmol/L', null],
  ['Ferritin', null],
  ['Non-HDL cholesterol 130 mg/dL', null],
  ['Cholesterol/HDL ratio 3.5', null],
  ['Free testosterone 5 pg/mL', null],
  ['Total T4 8.0 µg/dL', null],
  ['Thyroxine (T4) 8.0 µg/dL', null],
  ['1,25-dihydroxyvitamin D 45 pg/mL', null],
  ['MCH 29 pg', null],
  ['MCHC 33 g/dL', null],
  ['Transferrin 250 mg/dL', null],
  ['Ferritin -5', null],
  ['Urine creatinine 120 mg/dL', null],
  ['Albumin/creatinine ratio 3.2', null],
  ['Dihydrotestosterone 30 ng/dL', null],
  ['Random glucose 140 mg/dL', null],
]
for (const [line, id, value] of LINES) {
  await clear()
  await paste(line)
  const r = await results()
  if (id === null) ok(`parser rejects: ${line}`, r.length === 0, r.length ? `read as ${r[0].id} = ${r[0].canonical}` : '')
  else {
    ok(`parser reads: ${line}`, r.length === 1 && r[0].id === id && close(r[0].canonical, value), r.length ? `got ${r[0].id} = ${r[0].canonical}, expected ${id} = ${value}` : 'nothing read')
  }
}
// several lines at once, with one unreadable: count and note
await clear()
await paste('ALT 30 U/L\nSodium 140\nHDL 45 mg/dL; TSH 4.2')
{ const r = await results(); ok('multi-line paste reads three of four', r.length === 3, `read ${r.length}`)
  const note = await page.$eval('[data-testid=parse-note]', e => e.textContent).catch(() => null)
  ok('unread lines are reported', !!note && /3 of 4/.test(note), String(note)) }
// remove one, clear all
await page.click('[data-testid=result] [data-testid=remove]'); await page.waitForTimeout(100)
ok('remove deletes one result', (await results()).length === 2)
await clear(); await page.waitForTimeout(100)
ok('clear all empties the list', (await results()).length === 0)
// nothing readable
await paste('hello world')
ok('unreadable paste shows a message and no card', (await results()).length === 0 && !!(await page.$('[data-testid=parse-note]')))

// ---------- 2. Manual entry: every test in every unit ----------
for (const a of data) {
  for (const u of a.units) {
    await clear()
    await page.selectOption('select[aria-label=Test]', a.id)
    await page.selectOption('select[aria-label=Unit]', u.unit)
    await page.fill('input[aria-label=Value]', '10')
    await page.click('[data-testid=add-one]'); await page.waitForTimeout(60)
    const r = await results()
    const want = 10 * u.toCanonical + (u.offset ?? 0)
    ok(`manual add ${a.id} in ${u.unit}`, r.length === 1 && r[0].id === a.id && close(r[0].canonical, want), r.length ? `got ${r[0].canonical}, expected ${want}` : 'no card')
  }
}
// Enter key adds
await clear(); await page.selectOption('select[aria-label=Test]', 'alt'); await page.fill('input[aria-label=Value]', '30'); await page.press('input[aria-label=Value]', 'Enter'); await page.waitForTimeout(80)
ok('Enter in the value box adds the result', (await results()).length === 1)
// non-numeric value is refused
await clear(); await page.fill('input[aria-label=Value]', 'abc'); await page.click('[data-testid=add-one]').catch(() => {}); await page.waitForTimeout(80)
ok('non-numeric value adds nothing', (await results()).length === 0)

// ---------- 3. Every card, both sexes, at a low, middle and high value ----------
const svgProblems = () => page.$$eval('[data-testid=result] svg', svgs => svgs.flatMap(svg => {
  const w = svg.getBoundingClientRect().width, out = []
  for (const el of svg.querySelectorAll('*')) for (const at of el.attributes) if (/NaN|undefined|Infinity/.test(at.value)) out.push(`${el.tagName}.${at.name}=${at.value}`)
  for (const t of svg.querySelectorAll('text')) { const b = t.getBoundingClientRect(), s = svg.getBoundingClientRect(); if (b.left < s.left - 1 || b.right > s.right + 1) out.push(`text clipped: "${t.textContent}"`) }
  const texts = [...svg.querySelectorAll('text')].map(t => ({ s: t.textContent, b: t.getBoundingClientRect() }))
  for (let i = 0; i < texts.length; i++) for (let j = i + 1; j < texts.length; j++) { const a = texts[i].b, b = texts[j].b; if (a.left < b.right - 2 && b.left < a.right - 2 && a.top < b.bottom - 2 && b.top < a.bottom - 2) out.push(`labels overlap: "${texts[i].s}" / "${texts[j].s}"`) }
  if (w < 200) out.push('svg narrower than 200px')
  return out
}))
for (const sex of ['female', 'male']) {
  await page.check(`input[name=sex][value=${sex}]`)
  for (const a of data) {
    const [lo, hi] = a.scale
    for (const v of [lo + (hi - lo) * 0.05, lo + (hi - lo) * 0.5, hi * 1.5]) {
      await clear()
      await page.selectOption('select[aria-label=Test]', a.id); await page.selectOption('select[aria-label=Unit]', a.canonicalUnit)
      await page.fill('input[aria-label=Value]', String(Number(v.toFixed(3)))); await page.click('[data-testid=add-one]'); await page.waitForTimeout(40)
      const r = await results()
      const text = r[0]?.text ?? ''
      ok(`card text clean: ${a.id} ${sex} ${v.toFixed(2)}`, r.length === 1 && !/NaN|undefined|\bnull\b|\[object/.test(text) && !/\[\?\]/.test(text), text.match(/NaN|undefined|\bnull\b|\[object|\[\?\]/)?.[0] ?? 'no card')
      const pos = await page.$eval('[data-testid=position]', e => e.textContent).catch(() => '')
      const lab = a.labRange[sex] ?? a.labRange.any
      if (lab) {
        const inside = (lab[0] === null || v >= lab[0]) && (lab[1] === null || v <= lab[1])
        const says = (pos.match(/^The value lies (below|within|above) the laboratory reference interval/) ?? [])[1] ?? '?'
        const want = inside ? 'within' : (lab[0] !== null && v < lab[0]) ? 'below' : 'above'
        ok(`position correct: ${a.id} ${sex} ${v.toFixed(2)}`, says === want, `says "${pos.slice(0, 60)}", expected ${want}`)
      }
      const sp = await svgProblems()
      ok(`scale drawn cleanly: ${a.id} ${sex} ${v.toFixed(2)}`, sp.length === 0, sp.slice(0, 3).join(' | '))
    }
  }
}
await page.check('input[name=sex][value=female]')

// ---------- 4. Citations do not break the page (hash router) ----------
await clear(); await paste('Ferritin 22 ng/mL')
{ const before = page.url()
  await page.click('[data-testid=result] sup.cite a'); await page.waitForTimeout(300)
  const stillThere = (await results()).length === 1
  const h1 = await page.$eval('h1', e => e.textContent).catch(() => null)
  ok('clicking a citation keeps the page and its results', stillThere && !!h1 && page.url() === before, `url ${before} -> ${page.url()}, h1 ${h1}, results ${(await results()).length}`)
  await page.waitForTimeout(700)
  const visible = await page.$eval('[data-testid=result] ol li', e => { const r = e.getBoundingClientRect(); return r.top >= 0 && r.bottom <= window.innerHeight })
  ok('clicking a citation scrolls its reference into view', visible) }

// ---------- 5. Test pages ----------
for (const a of data) {
  await go(`/analyte/${a.id}`)
  const h1 = await page.$eval('h1', e => e.textContent).catch(() => null)
  ok(`test page loads: ${a.id}`, !!h1 && (await page.$('[data-testid=result]')) !== null && (await page.$$eval('[data-testid=result] ol li', l => l.length)) === a.sources.length)
}
await go('/analyte/haemoglobin')
await page.fill('input[aria-label=Value]', '118'); await page.selectOption('select[aria-label=Unit]', 'g/L'); await page.waitForTimeout(100)
{ const r = await results(); ok('test page converts units', r.length === 1 && close(r[0].canonical, 11.8), `got ${r[0]?.canonical}`)
  const f = await page.$eval('[data-testid=position]', e => e.textContent)
  await page.check('input[name=sex][value=male]'); await page.waitForTimeout(100)
  const m = await page.$eval('[data-testid=position]', e => e.textContent)
  ok('test page sex switch changes the interval', f !== m, `${f.slice(0, 50)} / ${m.slice(0, 50)}`) }
await go('/analyte/haemoglobin'); await page.click('[data-testid=result] sup.cite a'); await page.waitForTimeout(300)
ok('citation on a test page keeps the page', (await page.$('[data-testid=result]')) !== null && page.url().endsWith('#/analyte/haemoglobin'), page.url())

// ---------- 6. Table of ranges ----------
await go('/analytes')
{ const rows = await page.$$eval('tbody tr', r => r.length); ok('ranges table lists every test', rows === data.length, `${rows} rows`)
  const hrefs = await page.$$eval('tbody tr a', as => as.map(a => a.getAttribute('href')))
  ok('ranges table links to every test page', data.every(a => hrefs.includes(`#/analyte/${a.id}`)))
  const txt = await page.$eval('table', e => e.innerText); ok('ranges table has no empty or broken cells', !/NaN|undefined|null/.test(txt)) }

// ---------- 7. Quiz ----------
for (const q of quizzes) {
  for (const mode of ['right', 'wrong']) {
    await go(`/quiz/${q.slug}`)
    for (let i = 0; i < q.questions.length; i++) {
      const qq = q.questions[i]
      const k = mode === 'right' ? qq.answer : (qq.answer + 1) % qq.options.length
      await page.click(`[data-testid=opt-${k}]`); await page.waitForTimeout(40)
      const fb = await page.$eval('[data-testid=feedback]', e => e.innerText).catch(() => '')
      if (i === 0) ok(`quiz feedback shown (${mode})`, fb.length > 40 && /Reference/.test(fb) && (mode === 'right' ? /^Correct\./.test(fb) : /^Incorrect\. The correct answer is/.test(fb)), fb.slice(0, 60))
      const disabled = await page.$$eval('[data-testid^=opt-]', els => els.every(e => e.disabled))
      if (i === 0) ok(`quiz options lock after an answer (${mode})`, disabled)
      await page.click('[data-testid=next]'); await page.waitForTimeout(40)
    }
    const score = await page.$eval('[data-testid=score]', e => e.textContent)
    const n = parseInt(score)
    ok(`quiz score all ${mode}`, n === (mode === 'right' ? q.questions.length : 0), score)
  }
  await page.click('[data-testid=copy]'); await page.waitForTimeout(200)
  const clip = await page.evaluate(() => navigator.clipboard.readText()).catch(() => '')
  ok('copy result writes the score and link', /Score: 0 of/.test(clip) && clip.includes(`quiz/${q.slug}`), clip)
  const li = await page.$eval('[data-testid=linkedin]', e => e.href)
  ok('LinkedIn link carries the quiz URL', li.includes('linkedin.com/sharing/share-offsite') && decodeURIComponent(li).includes(`/quiz/${q.slug}`), li)
  const rows = await page.$$eval('table.data tbody tr', r => r.length)
  ok('result table lists every question with its reference', rows === q.questions.length, `${rows} rows`)
  await page.click('[data-testid=again]'); await page.waitForTimeout(100)
  ok('again restarts the quiz', (await page.$('[data-testid=opt-0]')) !== null && (await page.$('[data-testid=score]')) === null)
  for (const qq of q.questions) ok(`quiz source is a link: ${qq.id}`, /^https?:\/\//.test(qq.source.url))
}
await go('/quiz')
ok('quiz index lists every quiz', (await page.$$eval('main a[href^="#/quiz/"]', as => new Set(as.map(a => a.getAttribute('href'))).size)) === quizzes.length)

// ---------- 8. Navigation and unknown addresses ----------
await go('/')
const nav = await page.$$eval('header a', as => as.map(a => a.getAttribute('href')))
for (const h of nav) { await go(h.slice(1)); ok(`nav target renders: ${h}`, !!(await page.$('main h1'))) }
await go('/')
for (const h of await page.$$eval('footer a[href^="#/"]', as => as.map(a => a.getAttribute('href')))) { await go(h.slice(1)); ok(`footer target renders: ${h}`, !!(await page.$('main h1'))) }
for (const r of ['/nope', '/analyte/not-a-test', '/quiz/not-a-quiz']) {
  await go(r)
  const txt = await page.$eval('main', e => e.innerText.trim())
  ok(`unknown address shows a message: ${r}`, txt.length > 20, `main text: "${txt.slice(0, 40)}"`)
}
// deep link survives a reload
await go('/analyte/tsh'); await page.reload({ waitUntil: 'networkidle' })
ok('deep link survives reload', /TSH|Thyro/i.test(await page.$eval('h1', e => e.textContent)))

// ---------- 9. Phone width ----------
const phone = await browser.newPage({ viewport: { width: 375, height: 812 } })
await phone.goto(base + '#/', { waitUntil: 'networkidle' })
await phone.fill('#paste', 'Ferritin 22 ng/mL\nHb 11.8 g/dL\nhs-cTnI 20 ng/L\nALT 30\nHDL 45\nTSH 4.2'); await phone.click('[data-testid=read-lines]'); await phone.waitForTimeout(300)
ok('phone: no sideways scroll with six results', await phone.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1))
{ const sp = await phone.$$eval('[data-testid=result] svg', svgs => svgs.flatMap(svg => { const s = svg.getBoundingClientRect(); return [...svg.querySelectorAll('text')].filter(t => { const b = t.getBoundingClientRect(); return b.left < s.left - 1 || b.right > s.right + 1 }).map(t => t.textContent) }))
  ok('phone: no scale label clipped', sp.length === 0, sp.join(' | ')) }
await phone.close()

ok('no console or page errors during the run', errors.length === 0, [...new Set(errors)].slice(0, 3).join(' | '))
await browser.close()
console.log(`\n${pass} passed, ${fail} failed`)
if (fail) { console.log('\nFailures:'); for (const f of fails) console.log(' -', f) }
process.exit(fail ? 1 : 0)
