import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hrmforce.com',
  output: 'static',
  integrations: [
    sitemap({
      // Pagina's met noindex horen niet in de sitemap. Anders meldt Search Console
      // ze als "verzonden URL met noindex". Het gaat om de volledige profielen van
      // het skills framework (Nederlands: /volledig/, overige talen: /full/), de
      // matchcalculator per functie, de bevestigingspagina's na een bestelling en
      // de verborgen ondertekenpagina voor assessoren.
      //
      // De matchcalculator is een rekenhulp, geen tekstpagina. Met 450 functies
      // maal zes talen stonden er 2.700 van in de sitemap, tegenover één
      // overzichtspagina die wel kan ranken. Google kreeg daardoor vooral
      // rekenschermen aangeboden en kwam aan de rest van de site niet toe.
      filter: (page) =>
        !/\/skills-framework\/(jobs\/[^/]+\/full|functies\/[^/]+\/volledig)\/?$/.test(page) &&
        !/\/skills-framework\/(match-calculator|matchcalculator)\/[^/]+\/?$/.test(page) &&
        !/\/(bestelling-gelukt|afrekenen)\/?$/.test(page) &&
        !/\/assessor\//.test(page),
    }),
  ],
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'de', 'fr', 'es', 'ro'],
    routing: { prefixDefaultLocale: false },
  },
});
