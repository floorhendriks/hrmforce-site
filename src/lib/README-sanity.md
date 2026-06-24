# De site koppelen aan Sanity

De pagina's gebruiken nu de lokale databestanden (`src/data/`). Zo schakel je een pagina over naar Sanity:

## 1. Installeren en .env
    npm install @sanity/client
Maak een bestand `.env` in de projectmap:
    SANITY_PROJECT_ID=jouw_project_id
    SANITY_DATASET=production

## 2. Voorbeeld: een hoofdpagina uit Sanity halen
In plaats van `import { pages } from "../data/pages.js"` gebruik je:

    ---
    import { sanity, pick } from "../lib/sanity.js";
    import { pageBySlug } from "../lib/queries.js";
    import { getLangFromUrl } from "../i18n/utils.js";

    const lang = getLangFromUrl(Astro.url);
    const raw = await sanity.fetch(pageBySlug, { slug: "hrm-oplossingen" });
    const page = {
      title: pick(raw.title, lang),
      eyebrow: pick(raw.eyebrow, lang),
      lead: pick(raw.lead, lang),
      metaTitle: pick(raw.metaTitle, lang),
      metaDescription: pick(raw.metaDescription, lang),
      intro: (raw.intro || []).map((p) => pick(p, lang)),
      cards: (raw.cards || []).map((c) => ({ h: pick(c.h, lang), p: pick(c.p, lang) })),
      isContact: raw.isContact, form: raw.form,
    };
    ---
    <SubPage page={page} active="solutions" />

Zo blijft de SubPage-template ongewijzigd - alleen de bron verandert van lokaal bestand naar Sanity.

## 3. Live bijwerken
Met `useCdn: true` ververst content elke paar minuten. Wil je dat een wijziging in Sanity meteen
de site herbouwt, koppel dan een Sanity-webhook aan je Cloudflare/Netlify deploy (ik kan dit instellen-script aanleveren).
