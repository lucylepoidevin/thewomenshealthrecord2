// Render the home page header at card size for the Open Graph image: public/share/home.png
import { chromium } from 'playwright'
const base = process.env.SITE_BASE ?? 'http://localhost:5181/thewomenshealthrecord2/'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.goto(base + '#/', { waitUntil: 'networkidle' })
await page.addStyleTag({ content: 'header{display:none} section:first-of-type{padding-top:96px} h1{font-size:64px!important} p{font-size:24px!important;line-height:1.5!important} .max-w-\\[42rem\\]{max-width:60rem!important}' })
await page.waitForTimeout(500)
await page.screenshot({ path: 'public/share/home.png', clip: { x: 0, y: 0, width: 1200, height: 630 } })
await browser.close()
console.log('wrote public/share/home.png')
