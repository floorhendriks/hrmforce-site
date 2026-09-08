# Functie- en skillsdatabase (hrmforce Skills Framework)

Onder Kenniscentrum > Functie- en skillsdatabase. Routes: /skills-framework/ (NL) en
/en/skills-framework/ (EN). Bezoekers zoeken op functie of skill, bekijken het profiel en
de matchcalculator, en downloaden het volledige profiel na het achterlaten van hun gegevens.

## Download van het volledige profiel
- Leads gaan via Formspree (zelfde form als contact): src/components/LeadForm.astro.
- Bestaat er een echte pdf in public/downloads/<taal>/<slug>.pdf, dan wordt die gedownload.
  Bestaat die (nog) niet, dan valt de knop automatisch terug op de printbare volledig-pagina
  (/skills-framework/functies/<slug>/volledig/), die de bezoeker als pdf kan opslaan.

## Alle 900 pdf's genereren (in Codespace of CI, niet nodig om live te gaan)
```
npm run build
npx playwright install --with-deps chromium
npm run hsf:pdf        # schrijft public/downloads/nl|en/<slug>.pdf
npm run build          # bouwt opnieuw zodat de pdf's in dist komen
```
Committen van de gegenereerde pdf's activeert per functie automatisch de echte pdf-download.
