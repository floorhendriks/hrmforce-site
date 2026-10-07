// Vier wekelijkse updates herstellen waarvan de tekst niet bij de titel hoort.
// De video in elk artikel klopt wel, die blijft ongemoeid. De verkeerde tekst
// eromheen wordt vervangen door een korte intro die alleen zegt wat de titel en
// de video ook zeggen. Er wordt niets verzonnen.
//
// Draaien vanuit de projectmap in je Codespace:
//   node kc-vier-herstel.mjs            -> laat zien wat er verandert
//   node kc-vier-herstel.mjs --apply    -> schrijft weg naar Sanity
//
// Het token komt uit de omgeving (SANITY_WRITE_TOKEN) of uit .sanity-token.

import fs from "node:fs";
import { createClient } from "@sanity/client";

const APPLY = process.argv.includes("--apply");
const nieuw = JSON.parse(fs.readFileSync("kc-vier-herstel.json", "utf8"));

const read = createClient({ projectId: "hqo56w28", dataset: "production", apiVersion: "2024-01-01", useCdn: false });
const oud = await read.fetch("*[_id in $ids]{_id,path,body}", { ids: nieuw.map((x) => x._id) });
const byId = Object.fromEntries(oud.map((x) => [x._id, x]));

let fout = 0;
for (const n of nieuw) {
  const o = byId[n._id];
  if (!o) { console.error("NIET GEVONDEN:", n.path); fout++; continue; }
  const vidOud = (o.body.match(/src="https:\/\/www\.youtube\.com\/embed\/[^"?]+/) || [""])[0];
  const vidNieuw = (n.body.match(/src="https:\/\/www\.youtube\.com\/embed\/[^"?]+/) || [""])[0];
  if (!vidNieuw || vidOud !== vidNieuw) { console.error("VIDEO WIJKT AF:", n.path); fout++; continue; }
  console.log(`\n${n.path}\n  video blijft: ${vidNieuw.replace('src="', "")}\n  oud ${o.body.length} tekens -> nieuw ${n.body.length} tekens`);
}
console.log(`\n${nieuw.length} artikelen, ${fout} problemen.`);
if (fout) { console.error("Er is niets weggeschreven."); process.exit(1); }

if (!APPLY) {
  console.log("Controle geslaagd. Draai opnieuw met --apply om weg te schrijven.");
  process.exit(0);
}

let token = process.env.SANITY_WRITE_TOKEN;
if (!token && fs.existsSync(".sanity-token")) token = fs.readFileSync(".sanity-token", "utf8").trim();
if (!token) { console.error("Geen token gevonden. Zet SANITY_WRITE_TOKEN of maak .sanity-token."); process.exit(1); }

const write = createClient({ projectId: "hqo56w28", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token });
let tx = write.transaction();
for (const n of nieuw) tx = tx.patch(n._id, { set: { body: n.body } });
await tx.commit();
console.log("Klaar. Start daarna een nieuwe build met een lege commit en een push.");
