/**
 * Schrijft src/data/downloads-manifest.json: welke functieprofiel-pdf's bestaan er
 * per taal. De site leest dat manifest op buildtijd om te bepalen of de downloadknop
 * naar een pdf wijst of naar de volledige printpagina.
 *
 * De pdf's zelf staan in een R2-bucket en niet in de repo, dus de build kan niet
 * zelf op schijf kijken. Dit script draait direct na het genereren van de pdf's,
 * op de machine waar ze staan.
 *
 * GEBRUIK
 *   node scripts/hsf-build-downloads-manifest.mjs                 # leest public/downloads
 *   node scripts/hsf-build-downloads-manifest.mjs /pad/naar/map   # of een andere map
 */
import { readdir, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = process.argv[2] ? process.argv[2] : join(ROOT, 'public', 'downloads');
const OUT = join(ROOT, 'src', 'data', 'downloads-manifest.json');
const LANGS = ['nl', 'en', 'de', 'fr', 'es', 'ro'];

if (!existsSync(SRC)) {
  console.error(`Map bestaat niet: ${SRC}`);
  process.exit(1);
}

const files = {};
const counts = {};
for (const lang of LANGS) {
  const dir = join(SRC, lang);
  if (!existsSync(dir)) continue;
  const slugs = (await readdir(dir))
    .filter((f) => f.endsWith('.pdf'))
    .map((f) => f.replace(/\.pdf$/, ''))
    .sort();
  if (!slugs.length) continue;
  files[lang] = slugs;
  counts[lang] = slugs.length;
}

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, `${JSON.stringify({ generated: new Date().toISOString().slice(0, 10), counts, files }, null, 0)}\n`);

const total = Object.values(counts).reduce((a, b) => a + b, 0);
console.log(`downloads-manifest.json: ${total} pdf's`);
for (const lang of LANGS) if (counts[lang]) console.log(`  ${lang}: ${counts[lang]}`);
