/**
 * Bouwt de zoekindex van het Skills Framework per taal:
 *   public/hsf-data/search-<taal>-core.json    functies, constructen, families
 *   public/hsf-data/search-<taal>-skills.json  de losse skills (lazy geladen)
 *
 * De index wordt uit de dataset gegenereerd, met de vertaalbestanden uit
 * src/data/translations/ voor de talen die vertaald zijn. Zonder vertaling valt
 * een taal terug op Engels, dus dan hoeft er ook geen index voor te bestaan.
 *
 * GEBRUIK
 *   node scripts/hsf-build-search.mjs             # nl, en en elke vertaalde taal
 *   node scripts/hsf-build-search.mjs --check     # alleen vergelijken met wat er staat
 *   HSF_LANGS=de node scripts/hsf-build-search.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const TRANS = join(DATA, 'translations');
const OUT = join(ROOT, 'public', 'hsf-data');
const CHECK = process.argv.includes('--check');

const read = async (p) => JSON.parse(await readFile(p, 'utf8'));

/** Zoeksleutels staan zonder accenten en in kleine letters in de index. */
const norm = (parts) => parts
  .filter(Boolean)
  .join(' ')
  .toLowerCase()
  .replace(/[^\p{L}\p{N}]+/gu, ' ')
  .trim();

const [meta, domains, families, skills, functionsIndex] = await Promise.all([
  read(join(DATA, 'meta.json')), read(join(DATA, 'domains.json')),
  read(join(DATA, 'families.json')), read(join(DATA, 'skills.json')),
  read(join(DATA, 'functions-index.json')),
]);

// vertaalmaps inlezen
const maps = {};
if (existsSync(TRANS)) {
  for (const f of await readdir(TRANS)) {
    if (!f.endsWith('.json')) continue;
    const code = f.replace(/\.json$/, '');
    const m = await read(join(TRANS, f));
    if (Object.keys(m).length) maps[code] = m;
  }
}
const requested = process.env.HSF_LANGS
  ? process.env.HSF_LANGS.split(',').map((s) => s.trim()).filter(Boolean)
  : ['nl', 'en', ...Object.keys(maps).sort()];

/** Leest een i18n-veld in de gevraagde taal, met terugval op Engels. */
const tx = (obj, lang) => {
  if (!obj) return '';
  if (lang === 'nl' || lang === 'en') return obj[lang] ?? obj.en ?? '';
  const en = obj.en ?? '';
  return maps[lang]?.[en] ?? en;
};
const asList = (v) => (Array.isArray(v) ? v : v ? [v] : []);
const txList = (obj, lang) => {
  if (!obj) return [];
  if (lang === 'nl' || lang === 'en') return asList(obj[lang] ?? obj.en);
  return asList(obj.en).map((v) => maps[lang]?.[v] ?? v);
};
/** Slugs blijven de Engelse variant voor elke taal behalve Nederlands. */
const slugOf = (obj, lang) => (lang === 'nl' ? obj.slug.nl : obj.slug.en);

const famById = new Map(families.map((f) => [f.id, f]));
const clusterById = new Map();
for (const d of domains) for (const c of d.clusters ?? []) clusterById.set(c.id, c);

function buildCore(lang, famLabel) {
  const rows = [];
  for (const f of functionsIndex) {
    const fam = famById.get(f.family_id);
    rows.push({
      t: 'f', i: f.id, s: slugOf(f, lang), n: tx(f.title, lang),
      u: `${fam.id} ${tx(fam.name, lang)}`,
      // brc_naam is een Nederlandse BRC-omschrijving en hoort alleen in de NL-index
      k: norm([tx(f.title, lang), ...txList(f.aliases, lang), ...(f.sector_tags ?? []), lang === 'nl' ? f.brc_naam : '']),
      g: f.sector_tags ?? [], fm: f.family_id, sn: f.seniority_default, c: f.counts.skills,
    });
  }
  for (const s of skills) {
    const cl = clusterById.get(s.cluster_id);
    rows.push({
      t: 'c', i: s.id, s: slugOf(s, lang), n: tx(s.name, lang),
      u: cl ? `${cl.id} ${tx(cl.name, lang)}` : s.cluster_id,
      // competency_2014 is een Nederlandse competentienaam en hoort alleen in de NL-index
      k: norm([tx(s.name, lang), lang === 'nl' ? s.competency_2014 : '',
        ...(s.children ?? []).map((c) => tx(c.name, lang))]),
      y: s.type, d: s.domain_id, m: s.instruments ?? [],
      c: s.child_count, fn: s.function_count,
    });
  }
  for (const f of families) {
    rows.push({
      t: 'j', i: f.id, s: slugOf(f, lang), n: tx(f.name, lang), u: famLabel,
      k: norm([tx(f.name, lang), ...txList(f.typical_roles, lang)]),
      c: f.function_count,
    });
  }
  return rows;
}

function buildSkills(lang) {
  const rows = [];
  for (const s of skills) {
    for (const c of s.children ?? []) {
      rows.push({
        t: 's', i: c.id, p: s.id, s: slugOf(s, lang), n: tx(c.name, lang),
        u: tx(s.name, lang),
        k: norm([tx(c.name, lang), ...txList(c.aliases, lang)]),
        y: c.type, d: s.domain_id, m: s.instruments ?? [],
      });
    }
  }
  return rows;
}

let diffs = 0;
for (const lang of requested) {
  const dict = JSON.parse(await readFile(join(ROOT, 'src', 'i18n', `${lang}.json`), 'utf8'));
  const famLabel = dict['filter.family'];
  const core = buildCore(lang, famLabel);
  const sk = buildSkills(lang);

  for (const [name, rows] of [[`search-${lang}-core.json`, core], [`search-${lang}-skills.json`, sk]]) {
    const p = join(OUT, name);
    const next = JSON.stringify(rows);
    if (existsSync(p)) {
      const prev = await readFile(p, 'utf8');
      if (prev.trim() === next) { console.log(`${name}: ongewijzigd (${rows.length} rijen)`); continue; }
      // rij voor rij melden waar het verschilt, zodat een regressie meteen zichtbaar is
      const old = JSON.parse(prev);
      const bad = [];
      for (let i = 0; i < Math.max(old.length, rows.length); i++) {
        if (JSON.stringify(old[i]) !== JSON.stringify(rows[i])) bad.push(i);
      }
      diffs += bad.length;
      console.log(`${name}: ${bad.length} van ${Math.max(old.length, rows.length)} rijen anders`);
      for (const i of bad.slice(0, 3)) {
        console.log(`   oud: ${JSON.stringify(old[i]).slice(0, 200)}`);
        console.log(`   nieuw: ${JSON.stringify(rows[i]).slice(0, 200)}`);
      }
    } else {
      console.log(`${name}: nieuw (${rows.length} rijen)`);
    }
    if (!CHECK) await writeFile(p, next);
  }
}
if (CHECK) console.log(diffs ? `\n${diffs} rijen wijken af.` : '\nAlles identiek aan de bestaande index.');
else console.log('\nZoekindex geschreven naar public/hsf-data/.');
