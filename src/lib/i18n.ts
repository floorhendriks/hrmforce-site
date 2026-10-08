/**
 * Taalbeheer voor de hrmforce Skills Framework 2.0 module.
 *
 * Een taal toevoegen kost drie stappen:
 *  1. vertaal src/i18n/<code>.json (de sleutels blijven ongewijzigd)
 *  2. zet de code in languages in src/i18n/ui.js; LOCALES, ROUTE_PREFIX en
 *     SEG volgen die lijst vanzelf
 * De datavelden zelf (namen, definities, gedragsankers) zijn tweetalig NL en EN.
 * Voor een derde taal vult de fallback het Engels in totdat de data is uitgebreid.
 */
import en from '../i18n/en.json';
import { BRONTALEN, languages, defaultLang } from '../i18n/ui.js';

// De woordenlijsten worden op buildtijd ingelezen. Een nieuw bestand
// src/i18n/<taal>.json doet vanzelf mee; wat er niet in staat valt terug op en.
const WOORDEN = import.meta.glob('../i18n/*.json', { eager: true, import: 'default' }) as Record<string, Record<string, string>>;

export const LOCALES = Object.keys(languages);

/**
 * Het skills framework bestaat alleen in de brontalen. De dataset staat in het
 * Engels; een kopie onder een Pools of Deens adres zou dezelfde Engelse tekst
 * een tweede keer publiceren en 829 bestanden per taal kosten. Zie
 * src/i18n/alleen-brontaal.js, daar gaan de links naar het Engels.
 */
export const HSF_LOCALES = LOCALES.filter((l) => BRONTALEN.includes(l));
export type Locale = string;
export const DEFAULT_LOCALE: string = defaultLang;

/** Datavelden bestaan in nl en en. Andere talen vallen terug op en. */
export type DataLang = 'nl' | 'en';
export const dataLang = (l: string): DataLang => (l === 'nl' ? 'nl' : 'en');

const DICT: Record<string, Record<string, string>> = Object.fromEntries(
  Object.entries(WOORDEN).map(([pad, woorden]) => [pad.split('/').pop()!.replace(/\.json$/, ''), woorden])
);
DICT.en = DICT.en ?? en;

/** Url-prefix per taal. De standaardtaal heeft geen prefix. */
export const ROUTE_PREFIX: Record<string, string> = Object.fromEntries(
  LOCALES.map((l) => [l, l === DEFAULT_LOCALE ? '' : '/' + l])
);

/** Padsegmenten per taal, zodat de url's in elke taal natuurlijk lezen. */
const SEG_NL = { root: 'skills-framework', functions: 'functies', skills: 'skills', families: 'functiefamilies', match: 'matchcalculator', method: 'verantwoording', full: 'volledig' };
const SEG_EN = { root: 'skills-framework', functions: 'jobs', skills: 'skills', families: 'job-families', match: 'match-calculator', method: 'methodology', full: 'full' };
// Alleen het Nederlands heeft eigen padsegmenten; elke andere taal gebruikt de
// Engelse, zodat de url's van bestaande talen niet veranderen en een nieuwe taal
// meteen werkt.
export const SEG: Record<string, Record<string, string>> = Object.fromEntries(
  LOCALES.map((l) => [l, l === 'nl' ? SEG_NL : SEG_EN])
);

export function useT(locale: string) {
  const primary = DICT[locale] ?? DICT[DEFAULT_LOCALE];
  return (key: string): string => primary[key] ?? DICT.en[key] ?? key;
}

/**
 * Vertaalt een tekst met plaatshouders. In de i18n-bestanden staan die als
 * {naam}, bijvoorbeeld "Alle {n} functieprofielen ...". De plaatshouders blijven
 * bij het vertalen onaangeroerd (zie scripts/hsf-translate-ui.mjs).
 */
export function useTf(locale: string) {
  const t = useT(locale);
  return (key: string, vars: Record<string, string | number>): string =>
    t(key).replace(/\{(\w+)\}/g, (m, name) => (name in vars ? String(vars[name]) : m));
}

/** De logische sectiesleutels die door SEG worden vertaald naar padsegmenten. */
export type Section = 'functions' | 'skills' | 'families' | 'match' | 'method' | 'full';
const SECTIONS = new Set(['functions', 'skills', 'families', 'match', 'method', 'full']);

/**
 * Bouwt een pad binnen de module, altijd met sluitende slash.
 * De eerste twee delen worden door SEG vertaald als het sectiesleutels zijn, zodat
 * path('nl', 'functions', 'accountmanager') het pad /skills-framework/functies/accountmanager/
 * oplevert en path('en', 'functions', 'account-manager') het pad
 * /en/skills-framework/jobs/account-manager/. Een deel dat geen sectiesleutel is, zoals een
 * slug, gaat ongewijzigd mee.
 */
export function path(locale: string, ...parts: (string | undefined)[]): string {
  const seg = SEG[locale] ?? SEG.en;
  const mapped = parts
    .filter((x): x is string => Boolean(x))
    .map((x) => (SECTIONS.has(x) ? seg[x] ?? x : x));
  const p = [ROUTE_PREFIX[locale] ?? '', seg.root, ...mapped].join('/');
  return (p.replace(/\/{2,}/g, '/') + '/').replace(/\/{2,}/g, '/');
}

export const otherLocales = (current: string) => LOCALES.filter((l) => l !== current);
