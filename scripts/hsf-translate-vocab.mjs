/**
 * Vertaalt de vocabulairvelden van de dataset naar alle zes talen.
 *
 * WAAROM
 * Een deel van de dataset is geen vrije tekst maar een vaste waarde: de meetmethode
 * ("Werkproef"), de trainbaarheid ("middel"), de ai-vraag ("stabiel stijgend"), de
 * herbruikbaarheid ("transversaal"), de instrumenten en de competentienaam uit het
 * 50-competentieframework van 2014 ("Plannen en organiseren"). Die staan als losse
 * Nederlandse string in de data, zonder en-variant, dus ze bleven op ALLE andere
 * talen Nederlands staan, ook op de Engelse pagina's.
 *
 * WAT HET DOET
 *  - Verzamelt elke voorkomende waarde uit skills.json, functions/*.json en meta.json.
 *  - Engels komt uit src/data/vocab-seed.json waar dat is ingevuld, anders van DeepL.
 *  - Waarden met "product": true in de seed zijn hrmforce-productnamen en blijven in
 *    alle talen gelijk aan de Engelse naam.
 *  - De rest gaat van Engels naar DE/FR/ES/RO.
 *  - Resultaat: src/data/vocab.json, gelezen door src/lib/vocab.ts.
 *
 * GEBRUIK
 *   export DEEPL_API_KEY=xxxxx
 *   node scripts/hsf-translate-vocab.mjs
 *   HSF_VOCAB_FORCE=1 node scripts/hsf-translate-vocab.mjs   # alles opnieuw
 *   HSF_TRANSLATE_MOCK=1 node scripts/hsf-translate-vocab.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const SEED = join(DATA, 'vocab-seed.json');
const OUT = join(DATA, 'vocab.json');

const TARGETS = ['de', 'fr', 'es', 'ro'];
const FORCE = process.env.HSF_VOCAB_FORCE === '1';
const MOCK = process.env.HSF_TRANSLATE_MOCK === '1';
const KEY = (process.env.DEEPL_API_KEY || '').trim();
const IS_FREE = KEY.endsWith(':fx');
const API = (process.env.DEEPL_API_URL || (IS_FREE ? 'https://api-free.deepl.com' : 'https://api.deepl.com'))
  .replace(/\/$/, '') + '/v2/translate';
const FORMAL = new Set(['de', 'fr', 'es']);
const CONTEXT = 'Short controlled vocabulary terms from an HR competency framework: '
  + 'assessment methods, trainability levels, demand trends, reusability levels and competency names.';

if (!MOCK && !KEY) { console.error('Zet DEEPL_API_KEY (of HSF_TRANSLATE_MOCK=1).'); process.exit(1); }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function deepl(texts, source, target) {
  if (MOCK) return texts.map((t) => `[${target}] ${t}`);
  const body = new URLSearchParams();
  for (const t of texts) body.append('text', t);
  body.append('source_lang', source.toUpperCase());
  body.append('target_lang', target.toUpperCase());
  body.append('context', CONTEXT);
  if (FORMAL.has(target)) body.append('formality', 'prefer_more');
  for (let attempt = 0; attempt < 8; attempt++) {
    let res;
    try {
      res = await fetch(API, {
        method: 'POST',
        headers: { Authorization: `DeepL-Auth-Key ${KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
    } catch { await sleep(2000 * (attempt + 1)); continue; }
    if (res.status === 429 || res.status === 529 || res.status >= 500) {
      await sleep(Number(res.headers.get('retry-after')) * 1000 || 2000 * (attempt + 1));
      continue;
    }
    if (!res.ok) throw new Error(`DeepL ${res.status}: ${(await res.text()).slice(0, 300)}`);
    return (await res.json()).translations.map((x) => x.text);
  }
  throw new Error('DeepL bleef falen na 8 pogingen.');
}

// ---- waarden verzamelen ------------------------------------------------------
const values = new Set();
const addAll = (o) => {
  if (!o) return;
  for (const k of ['assessment', 'trainability', 'ai_demand', 'reusability', 'competency_2014']) {
    if (typeof o[k] === 'string' && o[k].trim()) values.add(o[k].trim());
  }
  for (const i of o.instruments ?? []) if (typeof i === 'string' && i.trim()) values.add(i.trim());
};

const skills = JSON.parse(await readFile(join(DATA, 'skills.json'), 'utf8'));
for (const s of skills) { addAll(s); for (const c of s.children ?? []) addAll(c); }

for (const f of await readdir(join(DATA, 'functions'))) {
  if (!f.endsWith('.json')) continue;
  const fn = JSON.parse(await readFile(join(DATA, 'functions', f), 'utf8'));
  for (const r of [...(fn.profile ?? []), ...(fn.competencies ?? [])]) addAll(r);
}

const meta = JSON.parse(await readFile(join(DATA, 'meta.json'), 'utf8'));
for (const k of Object.keys(meta.assessment_methods ?? {})) values.add(k);
for (const k of Object.keys(meta.instruments ?? {})) values.add(k);
for (const v of meta.reusability_levels ?? []) values.add(v);

// sectortags en de CBS-beroepsomschrijving staan ook als losse Nederlandse string
// in de functie-index, en de instrumentomschrijving in elk functiebestand.
const index = JSON.parse(await readFile(join(DATA, 'functions-index.json'), 'utf8'));
for (const f of index) {
  for (const s of f.sector_tags ?? []) values.add(s);
  if (f.brc_naam) values.add(f.brc_naam.trim());
}
for (const f of await readdir(join(DATA, 'functions'))) {
  if (!f.endsWith('.json')) continue;
  const fn = JSON.parse(await readFile(join(DATA, 'functions', f), 'utf8'));
  for (const i of fn.instrument_summary ?? []) if (i.description) values.add(i.description.trim());
}
const facets = JSON.parse(await readFile(join(DATA, 'facets.json'), 'utf8'));
for (const s of facets.sector_tags ?? []) values.add(s);
// label dat in SkillPage bij de crosswalk staat
values.add('EU-competentieframework');

const seed = JSON.parse(await readFile(SEED, 'utf8'));
const all = [...values].filter((v) => !/^[A-Z]$/.test(v)).sort(); // losse typecodes hebben al een label in meta
console.log(`${all.length} vocabulairwaarden gevonden, ${Object.keys(seed).filter((k) => !k.startsWith('_')).length} in de seed.`);

const prev = existsSync(OUT) && !FORCE ? JSON.parse(await readFile(OUT, 'utf8')) : {};
const out = {};

// ---- Engels ------------------------------------------------------------------
const needEn = all.filter((v) => !seed[v]?.en && !prev[v]?.en);
if (needEn.length) {
  console.log(`Engels vertalen: ${needEn.length} waarden`);
  const en = [];
  for (let i = 0; i < needEn.length; i += 40) en.push(...await deepl(needEn.slice(i, i + 40), 'nl', 'en'));
  needEn.forEach((v, i) => { out[v] = { nl: v, en: en[i] }; });
}
for (const v of all) {
  if (out[v]) continue;
  out[v] = { nl: v, en: seed[v]?.en ?? prev[v]?.en ?? v };
}
for (const v of all) if (seed[v]?.product) out[v].product = true;

// ---- de overige talen --------------------------------------------------------
for (const lang of TARGETS) {
  const todo = all.filter((v) => !out[v].product && !seed[v]?.[lang] && !prev[v]?.[lang]);
  for (const v of all) {
    if (out[v].product) out[v][lang] = out[v].en;          // productnaam blijft gelijk
    else if (seed[v]?.[lang]) out[v][lang] = seed[v][lang]; // handmatige term gaat voor
    else if (prev[v]?.[lang]) out[v][lang] = prev[v][lang]; // eerder vertaald blijft staan
  }
  if (!todo.length) { console.log(`[${lang}] niets te doen`); continue; }
  console.log(`[${lang}] ${todo.length} waarden`);
  const res = [];
  for (let i = 0; i < todo.length; i += 40) res.push(...await deepl(todo.map((v) => out[v].en).slice(i, i + 40), 'en', lang));
  todo.forEach((v, i) => { out[v][lang] = res[i]; });
}

const ordered = {};
for (const v of all) ordered[v] = out[v];
await writeFile(OUT, `${JSON.stringify(ordered, null, 0)}\n`);

const products = all.filter((v) => out[v].product);
console.log(`\nsrc/data/vocab.json: ${all.length} waarden, waarvan ${products.length} productnamen die gelijk blijven.`);
console.log('productnamen:', products.join(', '));
