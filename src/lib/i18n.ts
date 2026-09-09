/**
 * Taalbeheer voor de hrmforce Skills Framework 2.0 module.
 *
 * Een taal toevoegen kost drie stappen:
 *  1. vertaal src/i18n/<code>.json (de sleutels blijven ongewijzigd)
 *  2. voeg de code toe aan LOCALES hieronder en aan ROUTE_PREFIX
 *  3. voeg de code toe aan i18n.locales in astro.config.mjs
 * De datavelden zelf (namen, definities, gedragsankers) zijn tweetalig NL en EN.
 * Voor een derde taal vult de fallback het Engels in totdat de data is uitgebreid.
 */
import nl from '../i18n/nl.json';
import en from '../i18n/en.json';
import de from '../i18n/de.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';
import ro from '../i18n/ro.json';

export const LOCALES = ['nl', 'en', 'de', 'fr', 'es', 'ro'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'nl';

/** Datavelden bestaan in nl en en. Andere talen vallen terug op en. */
export type DataLang = 'nl' | 'en';
export const dataLang = (l: string): DataLang => (l === 'nl' ? 'nl' : 'en');

const DICT: Record<string, Record<string, string>> = { nl, en, de, fr, es, ro };

/** Url-prefix per taal. De standaardtaal heeft geen prefix. */
export const ROUTE_PREFIX: Record<string, string> = { nl: '', en: '/en', de: '/de', fr: '/fr', es: '/es', ro: '/ro' };

/** Padsegmenten per taal, zodat de url's in elke taal natuurlijk lezen. */
export const SEG: Record<string, Record<string, string>> = {
  nl: { root: 'skills-framework', functions: 'functies', skills: 'skills', families: 'functiefamilies', match: 'matchcalculator', method: 'verantwoording', full: 'volledig' },
  en: { root: 'skills-framework', functions: 'jobs', skills: 'skills', families: 'job-families', match: 'match-calculator', method: 'methodology', full: 'full' },
  de: { root: 'skills-framework', functions: 'jobs', skills: 'skills', families: 'job-families', match: 'match-calculator', method: 'methodology', full: 'full' },
  fr: { root: 'skills-framework', functions: 'jobs', skills: 'skills', families: 'job-families', match: 'match-calculator', method: 'methodology', full: 'full' },
  es: { root: 'skills-framework', functions: 'jobs', skills: 'skills', families: 'job-families', match: 'match-calculator', method: 'methodology', full: 'full' },
  ro: { root: 'skills-framework', functions: 'jobs', skills: 'skills', families: 'job-families', match: 'match-calculator', method: 'methodology', full: 'full' },
};

export function useT(locale: string) {
  const primary = DICT[locale] ?? DICT[DEFAULT_LOCALE];
  return (key: string): string => primary[key] ?? DICT.en[key] ?? key;
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
