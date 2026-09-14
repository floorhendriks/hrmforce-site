import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const lijst = [
  ['live-home', 'https://website.hrmforce.com/', 2600],
  ['live-assessment', 'https://website.hrmforce.com/assessments/15pf/', 3400],
];
for (const [naam, url, h] of lijst) {
  await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => console.log('nav', e.message));
  await p.setViewportSize({ width: 1280, height: h });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `/tmp/shots/${naam}.png` });
  console.log(naam, 'ok');
}
await b.close();
