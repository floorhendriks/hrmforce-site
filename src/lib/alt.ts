/** Bouwt de hreflang-alternates voor een pagina, per taal (alle 6 sitetalen). */
import { path, LOCALES, dataLang } from './i18n';
type Slug = { nl: string; en: string };
const obj = (fn: (l: string) => string) => Object.fromEntries(LOCALES.map((l) => [l, fn(l)]));
export const altHome = () => obj((l) => path(l));
export const altSection = (section: 'functions' | 'skills' | 'families' | 'match' | 'method') =>
  obj((l) => path(l, section));
export const altItem = (section: 'functions' | 'skills' | 'families' | 'match', slug: Slug) =>
  obj((l) => path(l, section, (slug as any)[dataLang(l)]));
