// Render the title block of the home page at card size for the Open Graph image: public/share/home.png
import { chromium } from 'playwright'
const base = process.env.SITE_BASE ?? 'http://localhost:5181/thewomenshealthrecord2/'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.goto(base + '#/', { waitUntil: 'networkidle' })
await page.addStyleTag({ content: 'header nav{display:none} body > #root header{border:0} main > div{padding:40px 72px 0 !important; max-width:none !important} main header{max-width:62rem !important} main h1{font-size:54px !important; line-height:1.14 !important} main .meta{font-size:21px !important; margin-top:22px !important} main section:first-of-type{max-width:62rem !important} main .prose{font-size:23px !important; line-height:1.5 !important} #summary{font-size:19px !important} main h1{font-size:50px !important} main section:first-of-type{margin-top:26px !important} main section:first-of-type ~ *{display:none !important}' })
await page.waitForTimeout(500)
await page.screenshot({ path: 'public/share/home.png', clip: { x: 0, y: 0, width: 1200, height: 630 } })
await browser.close()
console.log('wrote public/share/home.png')
