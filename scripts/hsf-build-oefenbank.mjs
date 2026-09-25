// Bouwt de oefenbanken en schrijft per onderdeel en per taal een bestand.
// Draaien met: npm run hsf:oefenbank
import { mkdir, writeFile } from "node:fs/promises";
import { bouwCalculation } from "./hsf-oefenbank-calculation.mjs";
import { bouwNumeriek } from "./hsf-oefenbank-numeriek.mjs";
import { bouwVerbaal } from "./hsf-oefenbank-verbaal.mjs";
import { bouwAbstract, bouwRuimtelijk } from "./hsf-oefenbank-figuren.mjs";

const TALEN = ["nl", "en", "de", "fr", "es", "ro"];
const MAP = "src/data/oefenbank";

const ONDERDELEN = {
  numeriek: () => bouwNumeriek(250),
  verbaal: () => bouwVerbaal(250),
  calculation: () => bouwCalculation(250),
  ruimtelijk: () => bouwRuimtelijk(250),
  abstract: () => bouwAbstract(250),
};

await mkdir(MAP, { recursive: true });
const overzicht = {};
for (const [naam, bouw] of Object.entries(ONDERDELEN)) {
  const items = bouw();
  overzicht[naam] = { aantal: items.length };
  for (const t of TALEN) {
    // per taal alleen wat die taal nodig heeft, dat scheelt laadtijd op de pagina
    const smal = items.map((i) => {
      const rec = { id: i.id, s: i.soort, q: i.q[t], o: i.opties[t], j: i.juist, u: i.uitleg[t] };
      if (i.reeks) rec.r = i.reeks;
      if (i.stam) rec.m = i.stam[t];
      if (i.beeld) { rec.b = i.beeld; rec.f = i.soort; }
      return rec;
    });
    await writeFile(`${MAP}/${naam}.${t}.json`, JSON.stringify(smal), "utf8");
  }
  console.log(`${naam}: ${items.length} items x ${TALEN.length} talen`);
}
await writeFile(`${MAP}/overzicht.json`, JSON.stringify(overzicht, null, 2), "utf8");
