// Screenshots of the main states at desktop and phone width, for visual review.
//   node scripts/shots.mjs <outdir>     (dev server on 5181, or SITE_BASE=...)
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
const out = process.argv[2] ?? '/tmp/nfw-shots'
mkdirSync(out, { recursive: true })
const base = process.env.SITE_BASE ?? 'http://localhost:5181/thewomenshealthrecord2/'
const browser = await chromium.launch()
for (const [tag, vp] of [['d', { width: 1280, height: 900 }], ['m', { width: 375, height: 812 }]]) {
  const page = await browser.newPage({ viewport: vp, deviceScaleFactor: tag === 'm' ? 2 : 1 })
  const go = async r => { await page.goto(base + '#' + r, { waitUntil: 'networkidle' }); await page.waitForTimeout(400) }
  await go('/')
  await page.screenshot({ path: `${out}/${tag}-home-top.png` })
  await page.fill('#paste', 'Ferritin 22 ng/mL\nHb 11.8 g/dL\nhs-cTnI 20 ng/L\nALT 30 U/L')
  await page.click('[data-testid=read-lines]')
  await page.waitForTimeout(400)
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; document.querySelector('#checker').scrollIntoView({ block: 'start' }) })
  await page.waitForTimeout(200)
  await page.screenshot({ path: `${out}/${tag}-tool.png` })
  const cards = await page.$$('[data-testid=result]')
  await cards[0].screenshot({ path: `${out}/${tag}-entry-ferritin.png` })
  await (await cards[2].$('figure')).screenshot({ path: `${out}/${tag}-fig-troponin.png` })
  await (await cards[3].$('figure')).screenshot({ path: `${out}/${tag}-fig-alt.png` })
  await go('/analytes')
  await page.screenshot({ path: `${out}/${tag}-table.png` })
  await go('/quiz')
  await page.screenshot({ path: `${out}/${tag}-quiz-index.png` })
  const slug = await page.$eval('main a[href^="#/quiz/"]', a => a.getAttribute('href').slice(1))
  await go(slug)
  await page.click('[data-testid=opt-1]')
  await page.waitForTimeout(200)
  await page.screenshot({ path: `${out}/${tag}-quiz-q.png`, fullPage: true })
  for (let i = 0; i < 10; i++) {
    if (i > 0) await page.click('[data-testid=opt-0]')
    await page.click('[data-testid=next]')
    await page.waitForTimeout(60)
  }
  await page.screenshot({ path: `${out}/${tag}-quiz-result.png`, fullPage: true })
  await go('/methods')
  await page.screenshot({ path: `${out}/${tag}-methods.png` })
  await page.close()
}
await browser.close()
console.log('shots in', out)
