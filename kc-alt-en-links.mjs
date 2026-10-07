// Alt-teksten en ankerteksten in de kenniscentrumartikelen bijwerken.
//
// Wat het doet:
//   - 278 afbeeldingen zonder alt-tekst krijgen er een. Zegt de bestandsnaam
//     iets zinnigs, dan wordt die gebruikt; anders de titel van het artikel.
//   - 20 links met een tekst als "hier", "Klik hier" of "Click here" krijgen
//     een tekst die zegt waar de link heen gaat, in de taal van de pagina.
//
// Draaien vanuit de projectmap in je Codespace:
//   node kc-alt-en-links.mjs            -> laat zien wat er verandert
//   node kc-alt-en-links.mjs --apply    -> schrijft weg naar Sanity
//
// Het token komt uit SANITY_WRITE_TOKEN of uit .sanity-token in de projectmap.

import fs from "node:fs";
import { createClient } from "@sanity/client";

const APPLY = process.argv.includes("--apply");
const nieuw = JSON.parse(fs.readFileSync("kc-alt.json", "utf8"));

const read = createClient({ projectId: "hqo56w28", dataset: "production", apiVersion: "2024-01-01", useCdn: false });
const oud = await read.fetch("*[_id in $ids]{_id,path,body}", { ids: nieuw.map((x) => x._id) });
const byId = Object.fromEntries(oud.map((x) => [x._id, x]));

const tags = (s) => (String(s || "").match(/<[^>]*>/g) || []).length;
const links = (s) => (String(s || "").match(/href="[^"]*"/g) || []).sort().join("|");
const beelden = (s) => (String(s || "").match(/<img[^>]+src="[^"]*"/g) || []).length;
const zonderAlt = (s) => (String(s || "").match(/<img[^>]*>/g) || []).filter((t) => !/alt="[^"]*[^\s"][^"]*"/.test(t)).length;

let fout = 0, altErbij = 0;
for (const n of nieuw) {
  const o = byId[n._id];
  if (!o) { console.error("NIET GEVONDEN:", n.path); fout++; continue; }
  if (links(o.body) !== links(n.body)) { console.error("LINKDOELEN GEWIJZIGD:", n.path); fout++; continue; }
  if (beelden(o.body) !== beelden(n.body)) { console.error("AANTAL AFBEELDINGEN GEWIJZIGD:", n.path); fout++; continue; }
  if (tags(n.body) !== tags(o.body)) { console.error("AANTAL TAGS GEWIJZIGD:", n.path); fout++; continue; }
  altErbij += zonderAlt(o.body) - zonderAlt(n.body);
}
console.log(`${nieuw.length} artikelen, ${altErbij} afbeeldingen krijgen alt-tekst, ${fout} problemen.`);
if (fout) { console.error("Er is niets weggeschreven."); process.exit(1); }

if (!APPLY) {
  console.log("Controle geslaagd. Draai opnieuw met --apply om weg te schrijven.");
  process.exit(0);
}

let token = process.env.SANITY_WRITE_TOKEN;
if (!token && fs.existsSync(".sanity-token")) token = fs.readFileSync(".sanity-token", "utf8").trim();
if (!token) { console.error("Geen token gevonden. Zet SANITY_WRITE_TOKEN of maak .sanity-token."); process.exit(1); }

const write = createClient({ projectId: "hqo56w28", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token });
for (let i = 0; i < nieuw.length; i += 20) {
  let tx = write.transaction();
  for (const n of nieuw.slice(i, i + 20)) tx = tx.patch(n._id, { set: { body: n.body } });
  await tx.commit();
  console.log(`weggeschreven ${Math.min(i + 20, nieuw.length)} / ${nieuw.length}`);
}
console.log("Klaar. Start daarna een nieuwe build met een lege commit en een push.");
