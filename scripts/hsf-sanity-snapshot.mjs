// Haalt de Sanity-pagina's op die ook in de talen buiten de brontalen worden
// gebouwd en schrijft ze naar src/data/sanity-paginas.js (Nederlands en
// Engels). Het Nederlands is de bron voor de vertaalronde, het Engels dient
// voor het adres van de kleurentest-iframe. Draai dit opnieuw als een van deze
// pagina's in Sanity is aangepast, en daarna de vertaalronde.
//
//   node scripts/hsf-sanity-snapshot.mjs
import { writeFile } from "node:fs/promises";
import { createClient } from "@sanity/client";
import { SANITY_VERTAALDE_PADEN } from "../src/i18n/alleen-brontaal.js";

const client = createClient({ projectId: "hqo56w28", dataset: "production", apiVersion: "2024-01-01", useCdn: false });
const docs = await client.fetch(`*[_type == "article" && defined(path) && defined(body)]{path, title, body, date}`);
const norm = (p) => "/" + String(p || "").replace(/^\/+|\/+$/g, "") + "/";
const opPad = new Map(docs.map((d) => [norm(d.path), d]));
const uit = {};
for (const pad of SANITY_VERTAALDE_PADEN) {
  const nl = opPad.get(pad), en = opPad.get("/en" + pad);
  if (!nl || !en) throw new Error("Niet gevonden in Sanity: " + pad);
  uit[pad] = { date: nl.date || null, title: { nl: nl.title, en: en.title }, body: { nl: nl.body, en: en.body } };
}
const kop = `// Gegenereerd door scripts/hsf-sanity-snapshot.mjs (${new Date().toISOString().slice(0, 10)}). Niet met de hand bewerken.
// De Sanity-pagina's die ook buiten de brontalen worden gebouwd: Nederlands is
// de bron voor de vertaalronde, vulAan vult de andere talen aan uit de
// vertaalbestanden. Zie src/pages/[...path].astro.
import { vulAan } from "./vertaal-inhoud.js";

`;
await writeFile(new URL("../src/data/sanity-paginas.js", import.meta.url),
  kop + "export const SANITY_PAGINAS = " + JSON.stringify(uit, null, 1) + ";\n\nObject.assign(SANITY_PAGINAS, vulAan(SANITY_PAGINAS));\n");
console.log(`sanity-paginas.js: ${Object.keys(uit).length} pagina's`);
