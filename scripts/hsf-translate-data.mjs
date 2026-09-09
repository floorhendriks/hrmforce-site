/**
 * hrmforce Skills Framework, data-vertaling van Engels naar DE/FR/ES/RO via DeepL.
 *
 * WAT HET DOET
 *  - Verzamelt elk vertaalbaar tekstveld uit de dataset (objecten met een `en`-waarde
 *    naast `nl`), dedupliceert en vertaalt met DeepL.
 *  - Schrijft per taal EEN vertaalbestand: src/data/translations/<taal>.json,
 *    een map van Engelse string naar vertaling. De 455 databestanden blijven
 *    onaangeraakt, dus de repo blijft klein en de diff leesbaar.
 *  - src/lib/hsf-i18n.ts hydrateert de data op buildtijd met die map, waardoor alle
 *    views `veld[taal]` blijven gebruiken. Ontbrekende vertalingen vallen terug op
 *    Engels; slugs houden de Engelse slug, dus url's veranderen niet.
 *
 * GEBRUIK
 *   export DEEPL_API_KEY=xxxxx              # free-key eindigt op ":fx", anders Pro
 *   node scripts/hsf-translate-data.mjs                        # de,fr,es,ro
 *   HSF_LANGS=fr node scripts/hsf-translate-data.mjs           # één taal
 *   HSF_ESTIMATE=1 node scripts/hsf-translate-data.mjs         # alleen tekens en kosten
 *   HSF_TRANSLATE_MOCK=1 node scripts/hsf-translate-data.mjs   # testen zonder DeepL
 *
 * Daarna: node scripts/hsf-build-search.mjs && npm run build
 *
 * De run is hervatbaar. Elke vertaling gaat in scripts/.deepl-cache.json, dus een
 * afgebroken of opnieuw gestarte run vertaalt alleen wat nog ontbreekt en kost niets extra.
 */
import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { existsSync, readFileSync, writeFileSync, renameSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const OUT = join(DATA, 'translations');
// mock gebruikt een eigen cache, zodat testvertalingen nooit in de echte cache landen
const CACHE_FILE = join(ROOT, 'scripts', process.env.HSF_TRANSLATE_MOCK === '1' ? '.deepl-cache.mock.json' : '.deepl-cache.json');

const SRC = 'EN';
const SKIP_KEYS = new Set(['slug']); // url-slugs nooit vertalen
const ALL_TARGETS = ['de', 'fr', 'es', 'ro'];
const TARGETS = (process.env.HSF_LANGS || ALL_TARGETS.join(','))
  .split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);

const MOCK = process.env.HSF_TRANSLATE_MOCK === '1';
const ESTIMATE = process.env.HSF_ESTIMATE === '1';
const KEY = (process.env.DEEPL_API_KEY || '').trim();
const IS_FREE = KEY.endsWith(':fx');
const HOST = process.env.DEEPL_API_URL
  || (IS_FREE ? 'https://api-free.deepl.com' : 'https://api.deepl.com');
const API = HOST.includes('/v2/') ? HOST : HOST.replace(/\/$/, '') + '/v2/translate';
const USAGE = API.replace('/v2/translate', '/v2/usage');

// DeepL ondersteunt formaliteit voor DE/FR/ES, niet voor RO. B2B-HR wil de nette vorm.
const FORMAL = new Set(['de', 'fr', 'es']);
// Context wordt niet als tekens gefactureerd en verbetert vooral de korte functietitels.
const CONTEXT = 'Terminology from an HR job and skills database: job titles, skill names, '
  + 'and short behavioural descriptions used in professional competency profiles.';
// Merk- en producttermen die onvertaald moeten blijven.
const PROTECTED = ['hrmforce', 'Big Fifty', 'Ability Scan', 'Skills Framework', 'TeamFlow',
  'Talent Scan', 'Job Profiler', 'ESCO', 'O*NET', 'Lightcast', 'SFIA', 'WEF'];

const BATCH_TEXTS = 40; // DeepL staat 50 teksten per request toe
const BATCH_CHARS = 25000; // ruim onder de bodylimiet

const unknown = TARGETS.filter((l) => !ALL_TARGETS.includes(l));
if (unknown.length) {
  console.error(`Onbekende taal: ${unknown.join(', ')}. Kies uit ${ALL_TARGETS.join(', ')}.`);
  process.exit(1);
}
if (!MOCK && !ESTIMATE && !KEY) {
  console.error('Zet DEEPL_API_KEY, of gebruik HSF_ESTIMATE=1 of HSF_TRANSLATE_MOCK=1.');
  process.exit(1);
}

// ---- cache -------------------------------------------------------------------
const cache = existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, 'utf8')) : {};
let dirty = false;
function saveCache() {
  if (!dirty) return;
  const tmp = CACHE_FILE + '.tmp';
  writeFileSync(tmp, JSON.stringify(cache));
  renameSync(tmp, CACHE_FILE); // atomair, zodat een afgebroken run de cache niet sloopt
  dirty = false;
}
const ckey = (t, lang) => lang + ' ' + t;

// ---- strings verzamelen ------------------------------------------------------
const isTranslatable = (o) => o && typeof o === 'object' && !Array.isArray(o)
  && ('en' in o) && ('nl' in o)
  && (typeof o.en === 'string' || Array.isArray(o.en));

function collect(node, key, bag) {
  if (Array.isArray(node)) { node.forEach((v) => collect(v, null, bag)); return; }
  if (node && typeof node === 'object') {
    if (isTranslatable(node)) {
      if (key && SKIP_KEYS.has(key)) return; // slug: niet vertalen, niet dieper
      const vals = Array.isArray(node.en) ? node.en : [node.en];
      for (const v of vals) if (typeof v === 'string' && v.trim()) bag.add(v);
      return;
    }
    for (const [k, v] of Object.entries(node)) collect(v, k, bag);
  }
}

// ---- DeepL -------------------------------------------------------------------
const hasProtected = (s) => PROTECTED.some((p) => s.includes(p));

/** Zet merktermen in x-tags zodat DeepL ze onaangeroerd laat. */
function shield(s) {
  let out = s;
  for (const p of PROTECTED) {
    if (out.includes(p)) out = out.split(p).join(`<x>${p}</x>`);
  }
  return out;
}
const unshield = (s) => s.replace(/<\/?x>/g, '');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function deepl(texts, lang, { xml = false } = {}) {
  if (MOCK) return texts.map((t) => `[${lang}] ${t}`);
  const body = new URLSearchParams();
  for (const t of texts) body.append('text', xml ? shield(t) : t);
  body.append('source_lang', SRC);
  body.append('target_lang', lang.toUpperCase());
  body.append('preserve_formatting', '1');
  body.append('context', CONTEXT);
  if (FORMAL.has(lang)) body.append('formality', 'prefer_more');
  if (xml) { body.append('tag_handling', 'xml'); body.append('ignore_tags', 'x'); }

  for (let attempt = 0; attempt < 8; attempt++) {
    let res;
    try {
      res = await fetch(API, {
        method: 'POST',
        headers: {
          Authorization: `DeepL-Auth-Key ${KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      });
    } catch {
      await sleep(2000 * (attempt + 1)); // netwerkhik, opnieuw
      continue;
    }
    if (res.status === 429 || res.status === 529 || res.status >= 500) {
      const wait = Number(res.headers.get('retry-after')) * 1000 || 2000 * (attempt + 1);
      await sleep(wait);
      continue;
    }
    if (res.status === 456) throw new Error('DeepL 456: het tekenquotum van dit abonnement is op.');
    if (res.status === 403) throw new Error('DeepL 403: sleutel ongeldig, of een Pro-sleutel op het free-endpoint (of omgekeerd).');
    if (!res.ok) throw new Error(`DeepL ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const data = await res.json();
    return data.translations.map((x) => (xml ? unshield(x.text) : x.text));
  }
  throw new Error('DeepL bleef falen na 8 pogingen.');
}

/** Verdeelt de strings in requests van max 40 teksten en max 25.000 tekens. */
function chunk(list) {
  const out = [];
  let cur = [];
  let chars = 0;
  for (const s of list) {
    if (cur.length && (cur.length >= BATCH_TEXTS || chars + s.length > BATCH_CHARS)) {
      out.push(cur); cur = []; chars = 0;
    }
    cur.push(s);
    chars += s.length;
  }
  if (cur.length) out.push(cur);
  return out;
}

const charsOf = (list) => list.reduce((a, s) => a + s.length, 0);
const todoFor = (strings, lang) => strings.filter((s) => cache[ckey(s, lang)] === undefined);

async function translateLang(strings, lang) {
  const map = {};
  const todo = [];
  for (const s of strings) {
    const hit = cache[ckey(s, lang)];
    if (hit !== undefined) map[s] = hit; else todo.push(s);
  }
  console.log(`[${lang}] ${todo.length} nieuw (${charsOf(todo).toLocaleString('nl-NL')} tekens), ${strings.length - todo.length} uit cache`);
  if (!todo.length) return map;

  const plain = chunk(todo.filter((s) => !hasProtected(s)));
  const shielded = chunk(todo.filter(hasProtected));
  const jobs = [...plain.map((c) => [c, false]), ...shielded.map((c) => [c, true])];

  let done = 0;
  for (const [texts, xml] of jobs) {
    const out = await deepl(texts, lang, { xml });
    texts.forEach((s, i) => { map[s] = out[i]; cache[ckey(s, lang)] = out[i]; dirty = true; });
    done += texts.length;
    saveCache();
    process.stdout.write(`  ${lang}: ${done}/${todo.length}\n`);
  }
  console.log(`  ${lang}: klaar (${strings.length} strings)`);
  return map;
}

// ---- run ---------------------------------------------------------------------
const files = ['functions-index.json', 'skills.json', 'families.json', 'domains.json', 'meta.json']
  .map((f) => join(DATA, f));
for (const f of (await readdir(join(DATA, 'functions'))).sort()) {
  if (f.endsWith('.json')) files.push(join(DATA, 'functions', f));
}

const bag = new Set();
for (const f of files) collect(JSON.parse(await readFile(f, 'utf8')), null, bag);
const strings = [...bag].sort();
console.log(`Bestanden: ${files.length}. Unieke strings: ${strings.length.toLocaleString('nl-NL')} (${charsOf(strings).toLocaleString('nl-NL')} tekens per taal).`);

if (ESTIMATE) {
  console.log(`Talen: ${TARGETS.join(', ')}`);
  let tot = 0;
  for (const lang of TARGETS) {
    const c = charsOf(todoFor(strings, lang));
    tot += c;
    console.log(`  ${lang}: ${c.toLocaleString('nl-NL')} tekens te vertalen, ongeveer EUR ${(c * 0.00002).toFixed(2)} bij Pro pay-as-you-go`);
  }
  console.log(`  totaal: ${tot.toLocaleString('nl-NL')} tekens, ongeveer EUR ${(tot * 0.00002).toFixed(2)}`);
  process.exit(0);
}

if (!MOCK) {
  try {
    const res = await fetch(USAGE, { headers: { Authorization: `DeepL-Auth-Key ${KEY}` } });
    if (res.ok) {
      const u = await res.json();
      const room = u.character_limit - u.character_count;
      console.log(`DeepL (${IS_FREE ? 'free' : 'pro'}): ${Number(u.character_count).toLocaleString('nl-NL')} van ${Number(u.character_limit).toLocaleString('nl-NL')} tekens gebruikt.`);
      const need = TARGETS.reduce((a, lang) => a + charsOf(todoFor(strings, lang)), 0);
      if (need > room) {
        console.warn(`LET OP: nog ${need.toLocaleString('nl-NL')} tekens nodig, maar ${room.toLocaleString('nl-NL')} beschikbaar. De run stopt met een 456-fout zodra het quotum op is. Wat al vertaald is blijft in de cache staan.`);
      }
    } else {
      console.warn(`Kon het gebruik niet opvragen (${res.status}), ik ga toch door.`);
    }
  } catch {
    console.warn('Kon het gebruik niet opvragen, ik ga toch door.');
  }
}

await mkdir(OUT, { recursive: true });
for (const lang of TARGETS) {
  const map = await translateLang(strings, lang);
  // alleen echte vertalingen opslaan; ongewijzigde strings hoeven niet in het bestand
  const trimmed = {};
  for (const s of strings) if (map[s] !== undefined && map[s] !== s) trimmed[s] = map[s];
  await writeFile(join(OUT, `${lang}.json`), JSON.stringify(trimmed) + '\n');
  const lost = PROTECTED.filter((p) => strings.some((s) => s.includes(p) && trimmed[s] && !trimmed[s].includes(p)));
  if (lost.length) console.warn(`  let op (${lang}): merkterm mogelijk vertaald: ${lost.join(', ')}`);
  console.log(`  naar src/data/translations/${lang}.json (${Object.keys(trimmed).length.toLocaleString('nl-NL')} vertalingen)`);
}
saveCache();
console.log('Klaar. Voer nu uit: node scripts/hsf-build-search.mjs && npm run build');
