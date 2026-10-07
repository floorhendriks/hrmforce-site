/** Bouwt de hreflang-alternates voor een pagina van het skills framework. */
import { path, LOCALES, dataLang } from './i18n';
type Slug = { nl: string; en: string };
const obj = (talen: readonly string[], fn: (l: string) => string) =>
  Object.fromEntries(talen.map((l) => [l, fn(l)]));
// De overzichtspagina's bestaan in elke sitetaal.
export const altHome = () => obj(LOCALES, (l) => path(l));
export const altSection = (section: 'functions' | 'skills' | 'families' | 'match' | 'method') =>
  obj(LOCALES, (l) => path(l, section));
// De detailpagina's bestaan in elke sitetaal; de slug is overal de Engelse,
// behalve in het Nederlands.
export const altItem = (section: 'functions' | 'skills' | 'families' | 'match', slug: Slug) =>
  obj(LOCALES, (l) => path(l, section, (slug as any)[dataLang(l)]));
