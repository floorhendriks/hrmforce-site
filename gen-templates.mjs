import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { products } from "./src/data/products.js";
import { pages } from "./src/data/pages.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const slug = (s) => s.toLowerCase().replace(/\|/g," ").replace(/[()]/g,"").replace(/&/g,"en").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const cell = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s; };

// 1) Producten - vertaalsjabloon (NL ingevuld, overige talen leeg voor vertaler)
const pCols = ["Handle","Naam_NL","Titel_EN","Titel_DE","Titel_FR","Titel_ES","Titel_RO","Omschrijving_NL","Omschrijving_EN","Omschrijving_DE","Omschrijving_FR","Omschrijving_ES","Omschrijving_RO"];
const pRows = [pCols.join(",")];
for (const p of products) {
  const body = `${p.name} - assessment van ${p.vendor}. Segment: ${p.segment}. Fase: ${p.phase}.`;
  pRows.push([slug(p.name), p.name, "", "", "", "", "", body, "", "", "", "", ""].map(cell).join(","));
}
writeFileSync(join(ROOT, "producten-vertalingen-template.csv"), pRows.join("\n"));

// 2) Pagina's - vertaalsjabloon (NL/EN ingevuld, DE/FR/ES/RO leeg)
const gCols = ["Pagina","Veld","NL","EN","DE","FR","ES","RO"];
const gRows = [gCols.join(",")];
const keys = ["hrm-oplossingen","advies","over-ons","support","contact"];
for (const k of keys) {
  const nl = pages.nl[k], en = pages.en[k];
  gRows.push([k, "titel", nl.title, en.title, "", "", "", ""].map(cell).join(","));
  gRows.push([k, "lead", nl.lead, en.lead, "", "", "", ""].map(cell).join(","));
  (nl.cards || []).forEach((c, i) => {
    gRows.push([k, `kaart ${i+1} titel`, c.h, en.cards?.[i]?.h || "", "", "", "", ""].map(cell).join(","));
    gRows.push([k, `kaart ${i+1} tekst`, c.p, en.cards?.[i]?.p || "", "", "", "", ""].map(cell).join(","));
  });
}
writeFileSync(join(ROOT, "paginas-vertalingen-template.csv"), gRows.join("\n"));

console.log("Sjablonen klaar:");
console.log("- producten-vertalingen-template.csv  (regels:", pRows.length + ")");
console.log("- paginas-vertalingen-template.csv     (regels:", gRows.length + ")");
