/**
 * hrmforce Skills Framework — data-vertaling naar DE/FR/ES/RO via DeepL.
 *
 * WAT HET DOET
 *  - Loopt door alle databestanden van de module en vertaalt elk tekstveld
 *    (objecten met een `en`-waarde naast `nl`) van Engels naar DE, FR, ES, RO.
 *  - Slugs (url's) en codevelden worden NIET vertaald.
 *  - Dedupliceert identieke teksten en cachet vertalingen (hervatbaar).
 *  - Zet daarna in de 11 views `const dl = lang;` zodat de vertaalde inhoud
 *    getoond wordt. Ontbrekende vertalingen vallen terug op Engels.
 *
 * GEBRUIK (in Codespace):
 *   export DEEPL_API_KEY=xxxxx          # DeepL Pro of Free key
 *   # optioneel: export DEEPL_API_URL=https://api.deepl.com/v2/translate   (Pro)
 *   node scripts/hsf-translate-data.mjs
 *   npm run build
 *   git add -A && git commit -m "Skills Framework: data vertaald naar DE/FR/ES/RO (DeepL)" && git push
 *
 * TESTEN ZONDER DEEPL:
 *   HSF_TRANSLATE_MOCK=1 node scripts/hsf-translate-data.mjs   # zet [de]-prefix i.p.v. echte vertaling
 *
 * LET OP: de dataset is groot (miljoenen tekens x 4 talen). Dit vraagt een
 * DeepL Pro-abonnement; de Free-tier (500k tekens/maand) is niet toereikend.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const TARGETS = ['de', 'fr', 'es', 'ro'];
const SRC = 'en';
const SKIP_KEYS = new Set(['slug']); // url-slugs nooit vertalen
const CACHE_FILE = join(ROOT, 'scripts', '.deepl-cache.json');
const MOCK = process.env.HSF_TRANSLATE_MOCK === '1';
const KEY = process.env.DEEPL_API_KEY;
const API = process.env.DEEPL_API_URL || 'https://api-free.deepl.com/v2/translate';

if (!MOCK && !KEY) { console.error('Zet DEEPL_API_KEY (of HSF_TRANSLATE_MOCK=1 om te testen).'); process.exit(1); }

const cache = existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, 'utf8')) : {};
const saveCache = () => writeFileSync(CACHE_FILE, JSON.stringify(cache));
const ckey = (t, lang) => lang + '' + t;

// ---- verzamel te vertalen strings -------------------------------------------
const isTranslatable = (o) => o && typeof o === 'object' && !Array.isArray(o)
  && ('en' in o) && ('nl' in o)
  && (typeof o.en === 'string' || Array.isArray(o.en));

function collect(node, key, bag) {
  if (Array.isArray(node)) { node.forEach((v) => collect(v, null, bag)); return; }
  if (node && typeof node === 'object') {
    if (isTranslatable(node) && !(key && SKIP_KEYS.has(key))) {
      const vals = Array.isArray(node.en) ? node.en : [node.en];
      for (const v of vals) if (typeof v === 'string' && v.trim()) bag.add(v);
      return; // niet dieper in een vertaalbaar blad
    }
    for (const [k, v] of Object.entries(node)) collect(v, k, bag);
  }
}

// ---- pas vertalingen toe ----------------------------------------------------
function apply(node, key, map) {
  if (Array.isArray(node)) { node.forEach((v) => apply(v, null, map)); return; }
  if (node && typeof node === 'object') {
    if (isTranslatable(node) && !(key && SKIP_KEYS.has(key))) {
      for (const lang of TARGETS) {
        if (Array.isArray(node.en)) {
          node[lang] = node.en.map((v) => (typeof v === 'string' ? (map[lang][v] ?? v) : v));
        } else {
          node[lang] = map[lang][node.en] ?? node.en;
        }
      }
      return;
    }
    for (const [k, v] of Object.entries(node)) apply(v, k, map);
  }
}

// ---- DeepL --------------------------------------------------------------------
async function deepl(texts, target) {
  if (MOCK) return texts.map((t) => `[${target}] ${t}`);
  const body = new URLSearchParams();
  body.append('auth_key', KEY);
  texts.forEach((t) => body.append('text', t));
  body.append('source_lang', SRC.toUpperCase());
  body.append('target_lang', target.toUpperCase());
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(API, { method: 'POST', body });
    if (res.status === 429 || res.status === 456) { await new Promise((r) => setTimeout(r, 2000 * (attempt + 1))); continue; }
    if (!res.ok) throw new Error('DeepL ' + res.status + ' ' + (await res.text()).slice(0, 200));
    const data = await res.json();
    return data.translations.map((x) => x.text);
  }
}

async function translateAll(strings) {
  const map = Object.fromEntries(TARGETS.map((l) => [l, {}]));
  for (const lang of TARGETS) {
    const todo = strings.filter((s) => !(ckey(s, lang) in cache));
    for (const s of strings) if (ckey(s, lang) in cache) map[lang][s] = cache[ckey(s, lang)];
    console.log(`[${lang}] ${todo.length} nieuw te vertalen (${strings.length - todo.length} uit cache)`);
    const BATCH = 40;
    for (let i = 0; i < todo.length; i += BATCH) {
      const chunk = todo.slice(i, i + BATCH);
      const out = await deepl(chunk, lang);
      chunk.forEach((s, j) => { map[lang][s] = out[j]; cache[ckey(s, lang)] = out[j]; });
      if (i % (BATCH * 10) === 0) { saveCache(); process.stdout.write(`\r  ${lang}: ${Math.min(i + BATCH, todo.length)}/${todo.length}`); }
    }
    saveCache(); console.log(`\r  ${lang}: klaar (${strings.length})            `);
  }
  return map;
}

// ---- run ---------------------------------------------------------------------
const files = [];
files.push(join(DATA, 'functions-index.json'), join(DATA, 'skills.json'),
  join(DATA, 'families.json'), join(DATA, 'domains.json'), join(DATA, 'meta.json'));
for (const f of await readdir(join(DATA, 'functions'))) if (f.endsWith('.json')) files.push(join(DATA, 'functions', f));

console.log(`Bestanden: ${files.length}. Strings verzamelen...`);
const bag = new Set();
const parsed = new Map();
for (const f of files) { const j = JSON.parse(await readFile(f, 'utf8')); parsed.set(f, j); collect(j, null, bag); }
const strings = [...bag];
console.log(`Unieke te vertalen strings: ${strings.length}`);

const map = await translateAll(strings);

console.log('Vertalingen toepassen en bestanden schrijven...');
for (const [f, j] of parsed) { apply(j, null, map); await writeFile(f, JSON.stringify(j)); }

// views omzetten naar `const dl = lang;`
const VIEWS = join(ROOT, 'src', 'views');
let patched = 0;
for (const f of await readdir(VIEWS)) {
  if (!f.endsWith('.astro')) continue;
  const p = join(VIEWS, f); let s = await readFile(p, 'utf8');
  if (s.includes("const dl = lang === 'nl' ? 'nl' : 'en';")) {
    s = s.replace("const dl = lang === 'nl' ? 'nl' : 'en';", 'const dl = lang; // vertaalde data per taal, valt terug op en');
    await writeFile(p, s); patched++;
  }
}
console.log(`Klaar. ${patched} views omgezet naar dl=lang. Voer nu \`npm run build\` uit.`);
