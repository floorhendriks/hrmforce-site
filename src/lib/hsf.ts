/**
 * hrmforce Skills Framework 2.0, dataconsulten.
 * Alles wordt op buildtijd gelezen. Er is geen runtime-database nodig.
 */
import meta from '../data/meta.json';
import domains from '../data/domains.json';
import families from '../data/families.json';
import skills from '../data/skills.json';
import functionsIndex from '../data/functions-index.json';
import facets from '../data/facets.json';
import { hydrate, dlang, DATA_LANGS } from './hsf-i18n';

// De extra talen (de/fr/es/ro) worden hier eenmalig in de data gehydrateerd, zodat
// alle views `veld[taal]` kunnen blijven gebruiken. Zie src/lib/hsf-i18n.ts.
for (const d of [meta, domains, families, skills, functionsIndex]) hydrate(d as unknown);

export type Lang = string;
/** Datavelden staan in nl en en, plus elke taal die vertaald is. */
export type I18n = Record<string, string>;

export { dlang, DATA_LANGS };

export { meta, domains, families, skills, facets };
export const functions = functionsIndex as FunctionLight[];

export interface FunctionLight {
  id: string; family_id: string; title: I18n; slug: I18n;
  aliases: { nl: string[]; en: string[] };
  isco: string; brc: string; brc_naam: string;
  seniority_default: string; seniority_available: string[];
  sector_tags: string[]; summary: I18n;
  counts: { skills: number; critical: number; competencies: number; weight_total: number };
}

export interface ProfileRow {
  skill_id: string; target_level: number; weight: number; critical: boolean;
  origin: string; name: I18n; definition: I18n; type: string;
  domain_id: string; cluster_id: string; trainability: string; ai_demand: string;
  assessment: string; instruments: string[]; competency_2014: string | null;
  anchor: I18n; anchors: { level: number; nl: string; en: string }[];
}

export interface FunctionFull extends FunctionLight {
  context: I18n;
  profile: ProfileRow[];
  profile_by_seniority: Record<string, { skill_id: string; target_level: number }[]>;
  competencies: ProfileRow[];
  instrument_summary: { instrument: string; skills: number; description: string; url: string }[];
}

/** Laadt het volledige profiel van een functie. Alleen op buildtijd gebruiken. */
const fullCache = new Map<string, FunctionFull>();
export async function getFunction(id: string): Promise<FunctionFull> {
  if (fullCache.has(id)) return fullCache.get(id)!;
  const mod = await import(`../data/functions/${id}.json`);
  const data = hydrate((mod.default ?? mod)) as FunctionFull;
  fullCache.set(id, data);
  return data;
}

export const t = (v: I18n | null | undefined, lang: Lang) => (v ? v[lang] || v.nl : '');

export const familyById = (id: string) => families.find((f: any) => f.id === id)!;
export const constructById = (id: string) => skills.find((s: any) => s.id === id)!;
export const domainById = (id: string) => domains.find((d: any) => d.id === id)!;
export const functionById = (id: string) => functions.find((f) => f.id === id)!;
export const functionsOfFamily = (id: string) => functions.filter((f) => f.family_id === id);

export const levelLabel = (n: number, lang: Lang) => {
  const l = (meta as any).proficiency_scale.find((x: any) => x.level === n);
  return l ? `N${n} ${l.label[lang]}` : `N${n}`;
};
export const levelShort = (n: number, lang: Lang) => {
  const l = (meta as any).proficiency_scale.find((x: any) => x.level === n);
  return l ? l.label[lang] : `N${n}`;
};
export const typeLabel = (code: string, lang: Lang) =>
  (meta as any).skill_types[code]?.label[lang] ?? code;
export const methodInfo = (name: string) => (meta as any).assessment_methods[name] ?? null;
export const instrumentInfo = (name: string) => (meta as any).instruments[name] ?? null;

/** Alle unieke instrumenten in een profiel, met het aantal skills dat ze raken. */
export function instrumentsOf(profile: ProfileRow[]) {
  const m = new Map<string, number>();
  for (const r of profile) for (const i of r.instruments) m.set(i, (m.get(i) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]).map(([instrument, count]) => ({
    instrument, count, ...(instrumentInfo(instrument) ?? { nl: '', en: '', url: '/online-assessments/' }),
  }));
}

/** Domeinverdeling van een profiel, voor de balkjes op de functiepagina. */
export function domainMix(profile: ProfileRow[]) {
  const m = new Map<string, number>();
  for (const r of profile) m.set(r.domain_id, (m.get(r.domain_id) ?? 0) + r.weight);
  const total = [...m.values()].reduce((a, b) => a + b, 0) || 1;
  return domains
    .filter((d: any) => m.has(d.id))
    .map((d: any) => ({ id: d.id, name: d.name, weight: m.get(d.id)!, share: m.get(d.id)! / total }))
    .sort((a, b) => b.weight - a.weight);
}
