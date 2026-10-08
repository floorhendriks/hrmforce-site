/**
 * Vertaalt de sitecontent uit src/data/*.js naar een nieuwe taal.
 *
 * WAT HET DOET
 *  - Loopt alle datafiles langs, zoekt de blokken met taalcodes als sleutel en
 *    neemt daaruit de Nederlandse tak (of de Engelse als er geen nl is).
 *  - Dedupliceert alle teksten, vertaalt ze met DeepL en schrijft per taal een
 *    bestand src/data/translations-content/<taal>.json: Nederlandse tekst ->
 *    vertaling. De bronbestanden blijven onaangeraakt.
 *  - src/data/vertaal-inhoud.js vult daarmee tijdens de build de ontbrekende
 *    talen aan. Een tekst zonder vertaling blijft Nederlands staan.
 *
 * GEBRUIK
 *   export DEEPL_API_KEY=xxxxx
 *   node scripts/hsf-translate-content.mjs hr               # een taal
 *   node scripts/hsf-translate-content.mjs hr sr bg         # meerdere
 *   HSF_ESTIMATE=1 node scripts/hsf-translate-content.mjs hr
 *   HSF_ONLY=oplossingen.js node scripts/hsf-translate-content.mjs hr   # alleen dit bestand
 *   HSF_TRANSLATE_MOCK=1 node scripts/hsf-translate-content.mjs hr
 *
 * De run is hervatbaar: wat al in het taalbestand staat wordt niet opnieuw
 * vertaald, tenzij HSF_FORCE=1.
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const OUT = join(DATA, 'translations-content');

const TARGETS = process.argv.slice(2).map((s) => s.trim().toLowerCase()).filter(Boolean);
const MOCK = process.env.HSF_TRANSLATE_MOCK === '1';
const ESTIMATE = process.env.HSF_ESTIMATE === '1';
const FORCE = process.env.HSF_FORCE === '1';
const KEY = (process.env.DEEPL_API_KEY || '').trim();
const IS_FREE = KEY.endsWith(':fx');
const API = (process.env.DEEPL_API_URL || (IS_FREE ? 'https://api-free.deepl.com' : 'https://api.deepl.com'))
  .replace(/\/$/, '') + '/v2/translate';

// Talen die in de bronbestanden zelf staan. Alleen hun nl-tak is de bron.
const BRONTALEN = new Set(['nl', 'en', 'de', 'fr', 'es', 'ro']);
// Formele aanspreekvorm waar DeepL dat ondersteunt en de taal het kent.
const FORMEEL = new Set(['de', 'fr', 'es', 'it', 'pt', 'pl', 'nl', 'ru', 'ja']);
const CONTEXT = 'Website copy of a Dutch provider of online psychometric assessments and HR software.';
const BESCHERMD = ['hrmforce', 'Big Fifty', 'Ability Scan', 'Skills Framework', 'OPQ32', 'PAPI 3',
  'Connector Ability', 'Reflector', 'Logiks', 'Talogy 360', 'Verify', 'DISC', '15PF', 'Big Five',
  'NIP', 'AVG', 'GDPR', 'SHL', 'GITP', 'Cubiks', 'Pulse Survey'];
// Sleutels waarvan de waarde geen zin is maar een pad, bestandsnaam of code.
const GEEN_TEKST = new Set(['slug', 'href', 'url', 'src', 'icon', 'key', 'id', 'beeld', 'img', 'image', 'telHref', 'mail', 'tel', 'locale', 'lang', 'code', 'hreflang', 'sanityMatch']);

if (!TARGETS.length) { console.error('Geef minstens een taalcode mee, bijvoorbeeld: node scripts/hsf-translate-content.mjs hr'); process.exit(1); }
if (!MOCK && !ESTIMATE && !KEY) { console.error('Zet DEEPL_API_KEY (of HSF_TRANSLATE_MOCK=1).'); process.exit(1); }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const GUARD = new RegExp([...BESCHERMD].sort((a, b) => b.length - a.length).map(esc).join('|'), 'g');

/**
 * Merknamen en plaatshouders in x-tags, zodat DeepL ze laat staan. HTML in de
 * tekst blijft gewoon HTML. Een plaatshouder is {n}, {aantal} en dergelijke:
 * die wordt bij het renderen vervangen door een getal of een naam.
 */
const PLAATSHOUDER = /\{[a-zA-Z][a-zA-Z0-9_]*\}/g;
const bescherm = (s) => s.replace(GUARD, (m) => `<x>${m}</x>`).replace(PLAATSHOUDER, (m) => `<x>${m}</x>`);
const ontdoe = (s) => s.replace(/<\/?x>/g, '');
/** DeepL zet soms aanhalingstekens om een beschermd stuk. Die halen we eraf. */
function ontquote(s) {
  let uit = s;
  for (const p of BESCHERMD) uit = uit.replace(new RegExp(`[„“”«»"']\\s*(${esc(p)})\\s*[“”„«»"']`, 'g'), '$1');
  return uit;
}

async function deepl(teksten, taal) {
  if (MOCK) return teksten.map((t) => `[${taal}] ${ontdoe(t)}`);
  const body = new URLSearchParams();
  for (const t of teksten) body.append('text', t);
  body.append('source_lang', 'NL');
  body.append('target_lang', taal.toUpperCase());
  body.append('preserve_formatting', '1');
  body.append('context', CONTEXT);
  body.append('tag_handling', 'html');
  body.append('ignore_tags', 'x');
  if (FORMEEL.has(taal)) body.append('formality', 'prefer_more');

  for (let poging = 0; poging < 8; poging++) {
    let res;
    try {
      res = await fetch(API, {
        method: 'POST',
        headers: { Authorization: `DeepL-Auth-Key ${KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
    } catch { await sleep(2000 * (poging + 1)); continue; }
    if (res.status === 429 || res.status === 529 || res.status >= 500) {
      await sleep(Number(res.headers.get('retry-after')) * 1000 || 2000 * (poging + 1));
      continue;
    }
    if (!res.ok) throw new Error(`DeepL ${res.status}: ${(await res.text()).slice(0, 300)}`);
    return (await res.json()).translations.map((x) => x.text);
  }
  throw new Error('DeepL bleef falen na 8 pogingen.');
}

/** Verzamelt elke vertaalbare tekst uit een willekeurige structuur. */
function verzamel(x, uit, sleutel = '', diep = 0) {
  if (diep > 14) return uit;
  if (typeof x === 'string') {
    if (GEEN_TEKST.has(sleutel)) return uit;
    if (!/[a-zA-ZÀ-ɏ]/.test(x)) return uit;
    if (/^[\/#]|^https?:|^mailto:|^tel:/.test(x)) return uit;
    uit.add(x);
    return uit;
  }
  if (Array.isArray(x)) { for (const v of x) verzamel(v, uit, sleutel, diep + 1); return uit; }
  if (x && typeof x === 'object') for (const [k, v] of Object.entries(x)) verzamel(v, uit, k, diep + 1);
  return uit;
}

/** Loopt een module af en pakt uit elk taalblok de Nederlandse tak. */
function brontakken(x, uit, diep = 0) {
  if (!x || typeof x !== 'object' || diep > 8) return uit;
  if (!Array.isArray(x)) {
    const k = Object.keys(x);
    const taalk = k.filter((s) => BRONTALEN.has(s));
    if (taalk.length >= 2 && taalk.length >= k.length - 1) {
      const bron = x.nl ?? x.en;
      if (bron !== undefined) verzamel(bron, uit);
      return uit;
    }
  }
  for (const v of Array.isArray(x) ? x : Object.values(x)) brontakken(v, uit, diep + 1);
  return uit;
}

const teksten = new Set();
// Met HSF_ONLY beperk je de run tot een paar datafiles. Handig als er alleen
// nieuwe teksten bijkomen: de brontalen hoeven dan niet de hele site opnieuw
// vertaald te krijgen.
//   HSF_ONLY=advies-detail.js,oplossingen.js node scripts/hsf-translate-content.mjs de
const ONLY = (process.env.HSF_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean);
// src/i18n/ui.js hoort er ook bij: daar staan de menu-, voettekst- en
// knopteksten. Die stonden eerder niet in de vertaalronde, waardoor een nieuwe
// taal in de voettekst Nederlands bleef.
const BESTANDEN = [
  ...(await readdir(DATA)).filter((f) => f.endsWith('.js')).sort().map((f) => [DATA, f]),
  [join(ROOT, 'src', 'i18n'), 'ui.js'],
];
for (const [map, f] of BESTANDEN) {
  if (ONLY.length && !ONLY.includes(f)) continue;
  let mod;
  try { mod = await import(pathToFileURL(join(map, f)).href); } catch { continue; }
  for (const w of Object.values(mod)) if (typeof w !== 'function') brontakken(w, teksten);
}
const alle = [...teksten];
const tekens = alle.reduce((n, s) => n + s.length, 0);
console.log(`${alle.length} unieke teksten, ${tekens.toLocaleString('nl-NL')} tekens per taal.`);

if (ESTIMATE) {
  console.log(`${TARGETS.length} ${TARGETS.length === 1 ? 'taal' : 'talen'}: ${(tekens * TARGETS.length).toLocaleString('nl-NL')} tekens.`);
  process.exit(0);
}

await mkdir(OUT, { recursive: true });

for (const taal of TARGETS) {
  const pad = join(OUT, `${taal}.json`);
  const bestaand = existsSync(pad) ? JSON.parse(await readFile(pad, 'utf8')) : {};
  const todo = FORCE ? alle : alle.filter((s) => bestaand[s] === undefined);
  if (!todo.length) { console.log(`[${taal}] niets te doen`); continue; }
  console.log(`[${taal}] ${todo.length} teksten, ${todo.reduce((n, s) => n + s.length, 0).toLocaleString('nl-NL')} tekens`);

  const uit = { ...bestaand };
  for (let i = 0; i < todo.length; i += 40) {
    const groep = todo.slice(i, i + 40);
    const terug = await deepl(groep.map(bescherm), taal);
    groep.forEach((bron, j) => { uit[bron] = ontquote(ontdoe(terug[j])); });
    process.stdout.write(`  ${Math.min(i + 40, todo.length)}/${todo.length}\r`);
  }
  // Teksten waarin een merknaam verdween, blijven Nederlands staan: beter geen
  // vertaling dan een pagina waarin hrmforce ineens anders heet.
  let gewist = 0;
  const ph = (t) => (String(t).match(PLAATSHOUDER) || []).sort().join('|');
  for (const bron of todo) {
    const kwijt = BESCHERMD.some((b) => bron.includes(b) && !uit[bron].includes(b));
    // Een vertaling waarin een plaatshouder wegviel zou {aantal} als los woord
    // tonen of helemaal weglaten. Die laten we Nederlands staan.
    if (kwijt || ph(bron) !== ph(uit[bron])) { delete uit[bron]; gewist++; }
  }
  await writeFile(pad, JSON.stringify(uit, null, 1) + '\n', 'utf8');
  console.log(`\n[${taal}] geschreven naar src/data/translations-content/${taal}.json` + (gewist ? `, ${gewist} overgeslagen omdat een merknaam wegviel` : ''));
}
