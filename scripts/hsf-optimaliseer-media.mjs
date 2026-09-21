// Zet de beelden uit de WordPress-migratie om naar webp op maximaal 1400 pixels
// breed, en vult public/media/wp-content aan met de beelden die alleen in
// src/assets/media stonden. De verwijzingen in de code en in de artikelteksten
// uit Sanity worden bij het bouwen omgezet via src/lib/beeld.js.
//
//   npm run hsf:media              omzetten, originelen laten staan
//   npm run hsf:media -- --wis     omzetten en de jpg/png daarna verwijderen
import { readdir, stat, unlink, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const UPLOADS = "public/media/wp-content/uploads";
const ASSETS = "src/assets/media";
const MAXBREEDTE = 1400;
const wissen = process.argv.includes("--wis");
const isRaster = (f) => /\.(png|jpe?g)$/i.test(f);

async function* loop(dir) {
  if (!existsSync(dir)) return;
  for (const n of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, n.name);
    if (n.isDirectory()) yield* loop(p);
    else yield p;
  }
}

async function naarWebp(bron, doel) {
  await mkdir(path.dirname(doel), { recursive: true });
  const im = sharp(bron);
  const meta = await im.metadata();
  await (meta.width > MAXBREEDTE ? im.resize({ width: MAXBREEDTE }) : im)
    .webp({ quality: 80, effort: 5 })
    .toFile(doel);
  return (await stat(doel)).size;
}

// 1. alles wat al in public/media staat
let n = 0, voor = 0, na = 0, gewist = 0;
for await (const f of loop("public/media/wp-content")) {
  if (!isRaster(f)) continue;
  const doel = f.replace(/\.(png|jpe?g)$/i, ".webp");
  if (!existsSync(doel)) { voor += (await stat(f)).size; na += await naarWebp(f, doel); n++; }
  if (wissen) { await unlink(f); gewist++; }
}

// 2. beelden die alleen in src/assets/media staan, maar waarnaar de site
//    verwijst onder /media/wp-content/uploads/. Die gaven eerder een 404.
let bij = 0;
for await (const f of loop(ASSETS)) {
  if (!isRaster(f) && !/\.webp$/i.test(f)) continue;
  const rel = path.relative(ASSETS, f).replace(/\.(png|jpe?g|webp)$/i, ".webp");
  const doel = path.join(UPLOADS, rel);
  if (existsSync(doel)) continue;
  await naarWebp(f, doel); bij++;
}

console.log(`${n} omgezet${n ? `: ${(voor / 1048576).toFixed(1)} MB -> ${(na / 1048576).toFixed(1)} MB (${Math.round(100 - (100 * na) / voor)}% kleiner)` : ""}`);
console.log(`${bij} ontbrekende beelden aangevuld uit ${ASSETS}`);
if (wissen) console.log(`${gewist} originele jpg/png verwijderd`);
