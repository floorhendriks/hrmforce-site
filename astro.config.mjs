import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hrmforce.com',
  output: 'static',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'de', 'fr', 'es', 'ro'],
    routing: { prefixDefaultLocale: false },
  },
});
