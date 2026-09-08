/**
 * Genereert per functie een pdf van het volledige profiel.
 *
 * Werkwijze: de statische site wordt lokaal geserveerd, Playwright opent de
 * printroute van elke functie en schrijft die naar public/downloads/<taal>/<slug>.pdf.
 * De pdf's staan daarna in de build en worden door de leadgated download
 * uitgeleverd.
 *
 * Gebruik:
 *   npm run build            (bouwt de site, zonder pdf's)
 *   npm run pdf              (genereert de pdf's in public/downloads)
 *   npm run build            (bouwt opnieuw, nu met de pdf's erin)
 *
 * Of in een pijplijn: build, pdf, build. De tweede build kopieert public/ mee.
 *
 * Opties via omgevingsvariabelen:
 *   HSF_PDF_LANGS=nl,en      talen om te genereren (standaard nl,en)
 *   HSF_PDF_LIMIT=10         alleen de eerste N functies, handig om te testen
 *   HSF_PDF_ONLY=accountmanager,controller   alleen deze slugs
 *   HSF_PDF_CONCURRENCY=4    aantal parallelle tabbladen
 *   HSF_PDF_CHROME=/pad/naar/chrome   eigen browserpad
 */
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const OUT = join(ROOT, 'public', 'downloads');
const PORT = Number(process.env.HSF_PDF_PORT ?? 4399);
const LANGS = (process.env.HSF_PDF_LANGS ?? 'nl,en').split(',').map((s) => s.trim()).filter(Boolean);
const LIMIT = process.env.HSF_PDF_LIMIT ? Number(process.env.HSF_PDF_LIMIT) : 0;
const ONLY = process.env.HSF_PDF_ONLY ? new Set(process.env.HSF_PDF_ONLY.split(',').map((s) => s.trim())) : null;
const CONC = Number(process.env.HSF_PDF_CONCURRENCY ?? 4);

const SEG = { nl: { jobs: 'functies', full: 'volledig', prefix: '' },
              en: { jobs: 'jobs', full: 'full', prefix: '/en' } };
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
               '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
               '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.xml': 'application/xml' };

if (!existsSync(DIST)) {
  console.error('dist/ bestaat niet. Voer eerst `npm run build` uit.');
  process.exit(1);
}

const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    const file = join(DIST, p);
    if (!file.startsWith(DIST)) { res.writeHead(403).end(); return; }
    const buf = await readFile(file);
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' }).end(buf);
  } catch { res.writeHead(404).end('not found'); }
});
await new Promise((r) => server.listen(PORT, r));

const fns = JSON.parse(await readFile(join(ROOT, 'src/data/functions-index.json'), 'utf8'));
const meta = JSON.parse(await readFile(join(ROOT, 'src/data/meta.json'), 'utf8'));

const browser = await chromium.launch(
  process.env.HSF_PDF_CHROME ? { executablePath: process.env.HSF_PDF_CHROME } : {}
);

const footer = (lang) => `
  <div style="width:100%;font:8pt Arial;color:#5A6470;padding:0 14mm;display:flex;justify-content:space-between">
    <span>hrmforce &middot; hrmforce.com &middot; ${lang === 'nl' ? 'Skills Framework' : 'Skills Framework'} ${meta.version}</span>
    <span>${lang === 'nl' ? 'pagina' : 'page'} <span class="pageNumber"></span> / <span class="totalPages"></span></span>
  </div>`;

let made = 0, failed = 0;
for (const lang of LANGS) {
  const seg = SEG[lang];
  if (!seg) { console.warn(`taal ${lang} onbekend, overgeslagen`); continue; }
  await mkdir(join(OUT, lang), { recursive: true });
  let list = fns.filter((f) => (ONLY ? ONLY.has(f.slug[lang]) : true));
  if (LIMIT) list = list.slice(0, LIMIT);
  console.log(`[${lang}] ${list.length} profielen`);

  const queue = [...list];
  const workers = Array.from({ length: Math.max(1, CONC) }, async () => {
    const page = await browser.newPage();
    while (queue.length) {
      const f = queue.shift();
      const url = `http://127.0.0.1:${PORT}${seg.prefix}/skills-framework/${seg.jobs}/${f.slug[lang]}/${seg.full}/`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
        await page.emulateMedia({ media: 'print' });
        await page.pdf({
          path: join(OUT, lang, `${f.slug[lang]}.pdf`),
          format: 'A4', printBackground: true,
          margin: { top: '14mm', bottom: '16mm', left: '14mm', right: '14mm' },
          displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: footer(lang),
        });
        made++;
        if (made % 25 === 0) console.log(`  ${made} gereed`);
      } catch (e) {
        failed++;
        console.error(`  FOUT ${f.id} ${f.slug[lang]}: ${e.message}`);
      }
    }
    await page.close();
  });
  await Promise.all(workers);
}

await browser.close();
server.close();
console.log(`klaar: ${made} pdf's gemaakt, ${failed} mislukt. Uitvoer: public/downloads/`);
if (failed) process.exitCode = 1;
