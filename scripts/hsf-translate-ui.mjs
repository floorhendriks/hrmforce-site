/**
 * Vult de interfacewoordenlijsten van de site aan: src/i18n/<taal>.json.
 *
 * src/i18n/en.json is de bron. Elke sleutel die in de/fr/es/ro ontbreekt wordt
 * met DeepL vertaald en toegevoegd. Bestaande waarden worden nooit overschreven,
 * dus met de hand bijgeschaafde teksten blijven staan.
 *
 * AANPAK
 *  1. Getalplaatshouders ({n}, {skills}) gaan als voorbeeldgetal mee naar DeepL. Zo
 *     leest de bronzin als een gewone zin, kiest DeepL de juiste woordorde en het
 *     juiste voorzetsel, en wordt het getal daarna teruggezet naar de plaatshouder.
 *  2. Tekstplaatshouders ({job}, {framework}) en merktermen als hrmforce, ESCO en
 *     ISCO-08 gaan in x-tags met ignore_tags, zodat DeepL ze onaangeroerd laat.
 *  3. Komt een getal niet terug of raakt een merkterm alsnog weg, dan gaat die ene
 *     tekst opnieuw met alles in tags.
 *  4. DeepL zet soms aanhalingstekens om een beschermd stuk. Die worden weggehaald.
 *
 * GEBRUIK
 *   export DEEPL_API_KEY=xxxxx
 *   node scripts/hsf-translate-ui.mjs
 *   HSF_LANGS=de node scripts/hsf-translate-ui.mjs
 *   HSF_UI_FORCE=1 node scripts/hsf-translate-ui.mjs   # ook bestaande waarden opnieuw
 *   HSF_TRANSLATE_MOCK=1 node scripts/hsf-translate-ui.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const I18N = join(ROOT, 'src', 'i18n');
const ALL = ['de', 'fr', 'es', 'ro'];
const TARGETS = (process.env.HSF_LANGS || ALL.join(','))
  .split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
const FORCE = process.env.HSF_UI_FORCE === '1';
const MOCK = process.env.HSF_TRANSLATE_MOCK === '1';
const KEY = (process.env.DEEPL_API_KEY || '').trim();
const IS_FREE = KEY.endsWith(':fx');
const API = (process.env.DEEPL_API_URL || (IS_FREE ? 'https://api-free.deepl.com' : 'https://api.deepl.com'))
  .replace(/\/$/, '') + '/v2/translate';

const FORMAL = new Set(['de', 'fr', 'es']);
const CONTEXT = 'User interface labels and page descriptions of an HR job and skills database.';
const PROTECTED = ['hrmforce Skills Framework', 'hrmforce', 'Big Fifty', 'Ability Scan',
  'Skills Framework', 'ESCO', 'O*NET', 'Lightcast Open Skills', 'SFIA', 'DigComp', 'EntreComp',
  'LifeComp', 'GreenComp', 'AILit', 'WEF Future of Jobs', 'ISCO-08'];
const SKIP_KEYS = new Set(['locale']); // geen tekst, niet vertalen

/**
 * Getalplaatshouders gaan als voorbeeldgetal mee, want dan kiest DeepL de juiste
 * woordorde en het juiste voorzetsel ("Toate cele 450 de profiluri"). Drie cijfers,
 * want die krijgen geen duizendscheiding. Tekstplaatshouders ({job} is een
 * functietitel die op de pagina zelf al vertaald is) blijven met tags staan.
 */
const SAMPLE = { n: '450', jobs: '451', skills: '452', constructs: '453', competencies: '454' };

if (!MOCK && !KEY) { console.error('Zet DEEPL_API_KEY (of HSF_TRANSLATE_MOCK=1).'); process.exit(1); }

const placeholders = (s) => [...new Set((s.match(/\{(\w+)\}/g) || []).map((p) => p.slice(1, -1)))];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Bouwt een regex van alle te beschermen stukken, langste eerst. In een doorloop
 * vervangen voorkomt geneste tags: een eerdere versie tagde 'hrmforce' nog eens
 * binnen '<x>hrmforce Skills Framework</x>', en daar liep DeepL op vast.
 */
const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const GUARD = new RegExp(
  `\\{\\w+\\}|${[...PROTECTED].sort((a, b) => b.length - a.length).map(esc).join('|')}`, 'g');

/** Zet de tekst klaar voor DeepL: voorbeeldgetallen erin, de rest in x-tags. */
function prepare(s) {
  return s.replace(GUARD, (m) => {
    const name = /^\{(\w+)\}$/.exec(m)?.[1];
    if (name && SAMPLE[name]) return SAMPLE[name]; // getal gaat als voorbeeld mee
    return `<x>${m}</x>`;
  });
}
/**
 * XML-tekens buiten de x-tags ontsnappen. Zonder dit weigert DeepL de hele batch met
 * "Tag handling parsing failed" zodra er ergens een & of < in een tekst staat.
 */
const xmlSafe = (s) => s.split(/(<x>[\s\S]*?<\/x>)/)
  .map((part, i) => (i % 2 ? part : part.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')))
  .join('');
const xmlBack = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/** Voorbeeldwaarde -> plaatshouder terug. Geeft null als een waarde niet terug te vinden is. */
function restore(src, out) {
  let res = out;
  for (const name of placeholders(src)) {
    const sample = SAMPLE[name];
    if (!sample) continue; // tekstplaatshouder, die stond al in een x-tag
    if (!res.includes(sample)) return null;
    res = res.replace(sample, `{${name}}`);
  }
  return res;
}

/** Alles in tags, ook de getallen. Laatste redmiddel als prepare() niet schoon terugkomt. */
const shield = (s) => s.replace(GUARD, (m) => `<x>${m}</x>`);
const unshield = (s) => s.replace(/<\/?x>/g, '');

/** DeepL zet soms aanhalingstekens om een beschermd stuk. Die halen we er weer af. */
function unquote(s) {
  let out = s;
  for (const p of [...PROTECTED, ...Object.values(SAMPLE)]) {
    out = out.replace(new RegExp(`[„“”«»"']\\s*(${esc(p)})\\s*[“”„«»"']`, 'g'), '$1');
  }
  out = out.replace(/[„“”«»"']\s*(\{\w+\})\s*[“”„«»"']/g, '$1');
  return out;
}

async function deepl(texts, lang, { xml = false } = {}) {
  if (MOCK) return texts.map((t) => `[${lang}] ${t}`);
  const body = new URLSearchParams();
  for (const t of texts) body.append('text', t);
  body.append('source_lang', 'EN');
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

const en = JSON.parse(await readFile(join(I18N, 'en.json'), 'utf8'));

for (const lang of TARGETS) {
  const p = join(I18N, `${lang}.json`);
  const dict = JSON.parse(await readFile(p, 'utf8'));
  const todo = Object.keys(en).filter((k) => !SKIP_KEYS.has(k) && (FORCE || dict[k] === undefined));
  if (!todo.length) { console.log(`[${lang}] niets te doen`); continue; }
  console.log(`[${lang}] ${todo.length} sleutels`);

  const result = {};
  for (let i = 0; i < todo.length; i += 40) {
    const keys = todo.slice(i, i + 40);
    const out = await deepl(keys.map((k) => xmlSafe(prepare(en[k]))), lang, { xml: true });
    keys.forEach((k, j) => { result[k] = xmlBack(unshield(out[j])); });
  }

  // herkansing met tags voor wat niet schoon terugkwam
  const retry = [];
  for (const k of todo) {
    const src = en[k];
    const back = placeholders(src).length ? restore(src, result[k]) : result[k];
    const lostBrand = PROTECTED.some((b) => src.includes(b) && !(back ?? '').includes(b));
    if (back === null || lostBrand) retry.push(k); else result[k] = back;
  }
  if (retry.length) {
    console.log(`  ${retry.length} tekst(en) opnieuw met tags: ${retry.join(', ')}`);
    for (let i = 0; i < retry.length; i += 40) {
      const keys = retry.slice(i, i + 40);
      const out = await deepl(keys.map((k) => xmlSafe(shield(en[k]))), lang, { xml: true });
      keys.forEach((k, j) => { result[k] = xmlBack(unshield(out[j])); });
    }
  }

  for (const k of todo) dict[k] = unquote(result[k]);

  const ordered = {};
  for (const k of Object.keys(en)) if (dict[k] !== undefined) ordered[k] = dict[k];
  for (const k of Object.keys(dict)) if (ordered[k] === undefined) ordered[k] = dict[k];
  await writeFile(p, `${JSON.stringify(ordered, null, 2)}\n`);

  const broken = todo.filter((k) => placeholders(en[k]).some((n) => !dict[k].includes(`{${n}}`)));
  if (broken.length) console.warn(`  LET OP: plaatshouder ontbreekt in ${broken.join(', ')}`);
  console.log(`  ${lang}.json bijgewerkt (${Object.keys(ordered).length} sleutels)`);
}
console.log('Klaar.');
