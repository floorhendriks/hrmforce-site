# hrmforce-site (Astro)

De nieuwe hrmforce-website, gebouwd met [Astro](https://astro.build) — zonder WordPress.
Bevat de homepage, de assessment-template en de vijf hoofdpagina's, **tweetalig (NL/EN)**, in de huisstijl van hrmforce.

## Wat zit erin

```
src/
  styles/global.css           ← alle merkkleuren & opmaak (1 centrale plek)
  i18n/ui.js                  ← vertaalbare menu-/footerteksten + routes (NL/EN)
  i18n/utils.js               ← taalhelpers (taal uit URL, taalwissel, paden)
  layouts/Base.astro          ← gedeelde paginastructuur (head, header, footer)
  components/Header.astro      ← menu + topbalk + taalwissel
  components/Footer.astro
  components/Home.astro        ← homepage-template (NL én EN, uit data)
  components/SubPage.astro     ← template voor de hoofdpagina's
  data/home.js                ← homepage-inhoud per taal
  data/pages.js               ← inhoud hoofdpagina's per taal
  data/assessments.js         ← inhoud van de assessments (later uit het CMS)
  pages/                      ← NL-pagina's op de root (/)
  pages/en/                   ← EN-pagina's onder /en/
  pages/assessments/[slug].astro  ← één template → één pagina per assessment
```

## Talen (NL / EN)

- **Nederlands** staat op de root: `/`, `/advies/`, `/contact/` …
- **Engels** staat onder `/en/`: `/en/`, `/en/advies/`, `/en/contact/` …
- De **taalwissel** (NL/EN) staat rechtsboven in de balk en verwijst automatisch naar dezelfde pagina in de andere taal.
- Een taal toevoegen: voeg een blok toe in `src/i18n/ui.js`, `src/data/home.js` en `src/data/pages.js`, en zet de taalcode in `astro.config.mjs`.
- De assessment-pagina's zijn voorlopig alleen in het Nederlands; de EN-vertaling daarvan is een latere stap.

## Het snelst online zetten (aanbevolen, geen technische stappen)

Bij deze route hoef je zélf niets te bouwen — de hostingdienst doet dat voor je.

1. Maak een gratis account op **Cloudflare Pages** of **Netlify**.
2. Zet deze map in een (gratis) **GitHub**-repository. Tip: GitHub Desktop is een klik-programma waarmee dat zonder commando's kan.
3. Kies in Cloudflare/Netlify "nieuw project" → koppel de GitHub-repository.
4. Vul bij de bouwinstellingen in:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Klik op deploy. De site komt op een tijdelijke URL te staan; daarna kun je je eigen domein koppelen.

Elke keer dat je iets wijzigt en opslaat in GitHub, bouwt de site zichzelf automatisch opnieuw.

## Lokaal draaien (optioneel, voor wie wil testen op de eigen computer)

Vereist [Node.js](https://nodejs.org) (LTS-versie).

```bash
npm install      # eenmalig: haalt de benodigde onderdelen op (duurt 1–2 min)
npm run dev      # start een testversie op http://localhost:4321
npm run build    # bouwt de definitieve site in de map dist/
```

> Let op: `npm install` vraagt even geduld en een goede internetverbinding. Dit is normaal.

## Zelf content aanpassen

- **Kleuren / huisstijl:** pas de waarden bovenin `src/styles/global.css` aan (onder `:root`). Alle pagina's volgen automatisch.
- **Nieuw assessment toevoegen:** kopieer een blok in `src/data/assessments.js`, geef het een unieke `slug`, en er verschijnt automatisch een nieuwe pagina op `/assessments/<slug>/`.
- **Tekst van de homepage:** `src/data/home.js` (per taal). **Tekst van de hoofdpagina's:** `src/data/pages.js` (per taal).
- **Menu / footer / vertalingen:** `src/i18n/ui.js`.

## Volgende stappen (los in te plannen)

- **CMS koppelen** (Storyblok of Sanity) zodat collega's content bewerken zonder code.
- **Kenniscentrum/blog** en de resterende subpagina's toevoegen.
- **Overige talen** (DE/FR/ES/RO) toevoegen — het fundament (NL/EN) staat klaar.
- **Assessment-pagina's vertalen** naar EN en de overige assessments toevoegen in `data/assessments.js`.
- **Webshop** via een Shopify-thema in de huisstijl (apart spoor).
- **Formulieren:** in `assessments/[slug].astro` staat een formulier klaar; vervang `JOUW_FORM_ID` door een echte Formspree-ID (of vergelijkbaar) om het werkend te maken.
