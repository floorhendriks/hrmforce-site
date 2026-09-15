import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hrmforce.com',
  output: 'static',
  integrations: [
    sitemap({
      // Pagina's met noindex horen niet in de sitemap. Anders meldt Search Console
      // ze als "verzonden URL met noindex". Het gaat om de volledige profielen van
      // het skills framework en de bevestigingspagina's na een bestelling.
      filter: (page) =>
        !/\/skills-framework\/jobs\/[^/]+\/full\/?$/.test(page) &&
        !/\/(bestelling-gelukt|afrekenen)\/?$/.test(page),
    }),
  ],
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'de', 'fr', 'es', 'ro'],
    routing: { prefixDefaultLocale: false },
  },
});
