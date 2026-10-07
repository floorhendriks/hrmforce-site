// Herschreven kenniscentrum-artikelen wegschrijven naar Sanity.
//
// Gebruik, vanuit de projectmap in je Codespace:
//   node kc-schrijf.mjs kc-batch1-nieuw.json                 -> controle, schrijft niets
//   SANITY_WRITE_TOKEN=... node kc-schrijf.mjs kc-batch1-nieuw.json --apply
//
// Het script haalt eerst de huidige versie uit Sanity op en vergelijkt die met
// de nieuwe tekst. Ontbreekt er een link of een afbeelding, dan stopt het en
// wordt er niets weggeschreven.

import fs from "node:fs";
import { createClient } from "@sanity/client";

const file = process.argv[2];
const APPLY = process.argv.includes("--apply");
if (!file || !fs.existsSync(file)) {
  console.error("Geef het bestand met de nieuwe teksten op, bijvoorbeeld: node kc-schrijf.mjs kc-batch1-nieuw.json");
  process.exit(1);
}

const nieuw = JSON.parse(fs.readFileSync(file, "utf8"));
const read = createClient({ projectId: "hqo56w28", dataset: "production", apiVersion: "2024-01-01", useCdn: false });
const ids = nieuw.map((x) => x._id);
const oud = await read.fetch("*[_id in $ids]{_id,path,title,body}", { ids });
const byId = Object.fromEntries(oud.map((x) => [x._id, x]));

const alles = (s, rx) => (String(s || "").match(rx) || []).map((m) => m);
const links = (s) => alles(s, /href="[^"]*"/g).sort();
const beelden = (s) => alles(s, /<img[^>]+src="[^"]*"/g).map((m) => (m.match(/src="[^"]*"/) || [""])[0]).sort();
const tekst = (s) => String(s || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

let fout = 0;
const rapport = [];
for (const n of nieuw) {
  const o = byId[n._id];
  if (!o) { console.error("NIET GEVONDEN in Sanity:", n.path); fout++; continue; }
  const wegL = links(o.body).filter((x) => !links(n.body).includes(x));
  const wegB = beelden(o.body).filter((x) => !beelden(n.body).includes(x));
  const lo = tekst(o.body).length, ln = tekst(n.body).length;
  // Twee links in de bron waren kapot en zijn bewust hersteld: een href die als
  // letterlijke HTML in de tekst stond, en een typefout /roduct/ die een 404 gaf.
  const KAPOT = ['href="/contact/&quot;&gt;servicedesk"', 'href="/roduct/big-fifty-personality/"'];
  const echtWeg = wegL.filter((x) => !KAPOT.includes(x));
  for (const x of wegL) if (KAPOT.includes(x)) console.log("  hersteld (was kapot):", x, "in", n.path);
  if (echtWeg.length) { console.error("LINKS WEG in", n.path, echtWeg.slice(0, 3).join(" ")); fout++; }
  if (wegB.length) { console.error("AFBEELDINGEN WEG in", n.path, wegB.slice(0, 3).join(" ")); fout++; }
  if (ln > lo * 1.05) { console.error("LANGER GEWORDEN:", n.path, lo, "->", ln); fout++; }
  rapport.push(`${String(lo).padStart(6)} -> ${String(ln).padStart(6)}  ${n.path}`);
}
console.log(rapport.join("\n"));
console.log(`\n${nieuw.length} artikelen, ${fout} problemen.`);
if (fout) { console.error("Er is niets weggeschreven."); process.exit(1); }

if (!APPLY) {
  console.log("Controle geslaagd. Draai opnieuw met --apply en een token om weg te schrijven.");
  process.exit(0);
}
let token = process.env.SANITY_WRITE_TOKEN;
if (!token && fs.existsSync(".sanity-token")) token = fs.readFileSync(".sanity-token", "utf8").trim();
if (!token) { console.error("Geen token gevonden. Zet het in .sanity-token of in SANITY_WRITE_TOKEN."); process.exit(1); }
const write = createClient({ projectId: "hqo56w28", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token });

for (let i = 0; i < nieuw.length; i += 10) {
  let tx = write.transaction();
  for (const n of nieuw.slice(i, i + 10)) {
    const set = { body: n.body };
    for (const k of ["title", "metaDescription", "excerpt"]) if (n[k]) set[k] = n[k];
    tx = tx.patch(n._id, { set });
  }
  await tx.commit();
  console.log(`weggeschreven ${Math.min(i + 10, nieuw.length)} / ${nieuw.length}`);
}
console.log("Klaar. Start daarna een nieuwe build, bijvoorbeeld met een lege commit en een push.");
