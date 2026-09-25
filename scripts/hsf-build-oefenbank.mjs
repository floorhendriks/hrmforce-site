// Bouwt de oefenbanken en schrijft per onderdeel en per taal een bestand.
// Draaien met: npm run hsf:oefenbank
import { mkdir, writeFile } from "node:fs/promises";
import { bouwNumeriek } from "./hsf-oefenbank-numeriek.mjs";

const TALEN = ["nl", "en", "de", "fr", "es", "ro"];
const MAP = "src/data/oefenbank";

const ONDERDELEN = {
  numeriek: { bouw: () => bouwNumeriek(250), gescoord: true },
};

await mkdir(MAP, { recursive: true });
const overzicht = {};
for (const [naam, o] of Object.entries(ONDERDELEN)) {
  const items = o.bouw();
  overzicht[naam] = { aantal: items.length, gescoord: o.gescoord };
  for (const t of TALEN) {
    // per taal alleen wat die taal nodig heeft, scheelt laadtijd op de pagina
    const smal = items.map((i) => ({
      id: i.id, s: i.soort, q: i.q[t], o: i.opties[t], j: i.juist, u: i.uitleg[t],
    }));
    await writeFile(`${MAP}/${naam}.${t}.json`, JSON.stringify(smal), "utf8");
  }
  console.log(`${naam}: ${items.length} items x ${TALEN.length} talen`);
}
await writeFile(`${MAP}/overzicht.json`, JSON.stringify(overzicht, null, 2), "utf8");
