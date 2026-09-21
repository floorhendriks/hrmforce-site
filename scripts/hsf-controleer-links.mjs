// Loopt alle externe verwijzingen in dist na en meldt welke een foutcode geven.
// Draaien na npm run build:  node scripts/hsf-controleer-links.mjs
// Voeg wat eruit komt toe aan DOOD of VERHUISD in src/data/link-onderhoud.js.
import { readdir } from "node:fs/promises";
import { readFileSync } from "node:fs";
import path from "node:path";

const OVERSLAAN = /youtube\.com|youtu\.be|googletagmanager|google-analytics|cloudflareinsights|fonts\.googleapis|fonts\.gstatic|clarity\.ms|licdn\.com|doubleclick/;
const OK = new Set([200, 301, 302, 303, 307, 308, 403, 405, 429, 999]);
const UA = "Mozilla/5.0 (compatible; hrmforce-linkcheck)";

async function* loop(dir) {
  for (const n of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, n.name);
    if (n.isDirectory()) yield* loop(p);
    else if (n.name.endsWith(".html")) yield p;
  }
}

const links = new Map();
for await (const f of loop("dist")) {
  const h = readFileSync(f, "utf8");
  for (const m of h.matchAll(/(?:href|src)="(https?:\/\/[^"]+)"/g)) {
    const u = m[1];
    if (u.includes("hrmforce.com") || OVERSLAAN.test(u)) continue;
    if (!links.has(u)) links.set(u, f.replace(/^dist/, "").replace(/\/index\.html$/, "/"));
  }
}
console.log(`${links.size} externe verwijzingen gevonden, controleren...`);

async function kijk(url) {
  for (const methode of ["HEAD", "GET"]) {
    try {
      const c = new AbortController();
      const tid = setTimeout(() => c.abort(), 15000);
      const r = await fetch(url, { method: methode, redirect: "follow", signal: c.signal, headers: { "User-Agent": UA } });
      clearTimeout(tid);
      if (r.status !== 405 && r.status !== 501) return r.status;
    } catch { return 0; }
  }
  return 0;
}

const rijen = [...links.entries()];
const stuk = [];
for (let i = 0; i < rijen.length; i += 10) {
  const groep = rijen.slice(i, i + 10);
  const codes = await Promise.all(groep.map(([u]) => kijk(u)));
  codes.forEach((c, j) => { if (c && !OK.has(c)) stuk.push([c, groep[j][0], groep[j][1]]); });
  process.stdout.write(`\r  ${Math.min(i + 10, rijen.length)}/${rijen.length}`);
}
console.log(`\n\n${stuk.length} met een foutcode:\n`);
for (const [c, u, p] of stuk.sort()) console.log(`  ${c}  ${u}\n        op ${p}`);
if (!stuk.length) console.log("  geen");
