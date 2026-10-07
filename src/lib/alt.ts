/** Bouwt de hreflang-alternates voor een pagina van het skills framework. */
import { path, LOCALES, dataLang } from './i18n';
import { REKENHULP_TALEN } from './hsf-i18n';
type Slug = { nl: string; en: string };
const obj = (talen: readonly string[], fn: (l: string) => string) =>
  Object.fromEntries(talen.map((l) => [l, fn(l)]));
// De rekenhulp bestaat niet in elke taal, de rest wel. Zie hsf-i18n.ts.
const talenVoor = (section: string) =>
  section === 'match' ? LOCALES.filter((l) => REKENHULP_TALEN.includes(l)) : LOCALES;
export const altHome = () => obj(LOCALES, (l) => path(l));
export const altSection = (section: 'functions' | 'skills' | 'families' | 'match' | 'method') =>
  obj(talenVoor(section), (l) => path(l, section));
// De detailpagina's hebben overal de Engelse slug, behalve in het Nederlands.
export const altItem = (section: 'functions' | 'skills' | 'families' | 'match', slug: Slug) =>
  obj(talenVoor(section), (l) => path(l, section, (slug as any)[dataLang(l)]));
