// Schrijft functions/_lib/mailteksten.js: de mailteksten in de talen die niet
// in de bronbestanden staan.
//
// Waarom dit bestand bestaat: src/data/vertaal-inhoud.js haalt de vertalingen
// op met import.meta.glob. Dat zet Vite tijdens de sitebouw om in een vaste
// lijst, maar een Cloudflare Pages Function draait niet door Vite. Daar blijft
// de lijst leeg en houdt een mail alleen de zes brontalen over. Vandaar deze
// stap: de vertalingen worden hier eenmalig uitgeschreven naar gewone JS die de
// function gewoon kan importeren.
//
// Draaien na elke vertaalronde:  node scripts/genereer-mailteksten.mjs
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const wortel = join(dirname(fileURLToPath(import.meta.url)), '..');
const BRONTALEN = ['nl', 'en', 'de', 'fr', 'es', 'ro'];

const { PARTICULIER_MAIL } = await import(pathToFileURL(join(wortel, 'src/data/aanvraag-tekst.js')).href);
const { OEFEN_MAIL } = await import(pathToFileURL(join(wortel, 'src/data/oefenmail-tekst.js')).href);

const map = join(wortel, 'src/data/translations-content');
const talen = (await readdir(map)).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5))
  .filter((t) => !BRONTALEN.includes(t)).sort();

// Zelfde opzoeking als vulAan: Nederlandse bron -> vertaling, zonder treffer
// blijft de Nederlandse zin staan. Zo is de mail nooit leeg.
const vertaal = (blok, kaart) =>
  Object.fromEntries(Object.entries(blok).map(([k, v]) => [k, kaart[v] || v]));

const perTaal = {};
for (const taal of talen) {
  const kaart = JSON.parse(await readFile(join(map, `${taal}.json`), 'utf8'));
  perTaal[taal] = {
    particulier: vertaal(PARTICULIER_MAIL.nl, kaart),
    oefen: vertaal(OEFEN_MAIL.nl, kaart),
  };
}

const uit = `// Gemaakt door scripts/genereer-mailteksten.mjs. Niet met de hand aanpassen.
//
// De mailteksten in de talen buiten de zes brontalen. Een Pages Function kan de
// vertaalbestanden niet zelf uitlezen, zie het script voor de uitleg.
export const PARTICULIER_EXTRA = ${JSON.stringify(
  Object.fromEntries(talen.map((t) => [t, perTaal[t].particulier])), null, 2)};

export const OEFEN_EXTRA = ${JSON.stringify(
  Object.fromEntries(talen.map((t) => [t, perTaal[t].oefen])), null, 2)};
`;
await writeFile(join(wortel, 'functions/_lib/mailteksten.js'), uit);
console.log(`mailteksten.js geschreven voor ${talen.length} talen: ${talen.join(', ')}`);
