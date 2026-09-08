/** Bouwt de hreflang-alternates voor een pagina, per taal. */
import { path } from './i18n';
type Slug = { nl: string; en: string };
export const altHome = () => ({ nl: path('nl'), en: path('en') });
export const altSection = (section: 'functions' | 'skills' | 'families' | 'match' | 'method') => ({
  nl: path('nl', section), en: path('en', section),
});
export const altItem = (section: 'functions' | 'skills' | 'families' | 'match', slug: Slug) => ({
  nl: path('nl', section, slug.nl), en: path('en', section, slug.en),
});
