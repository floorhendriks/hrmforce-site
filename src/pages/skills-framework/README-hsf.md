# Functie- en skillsdatabase (hrmforce Skills Framework)

Onder Kenniscentrum > Functie- en skillsdatabase. Routes: /skills-framework/ (NL) en
/en/skills-framework/ (EN). Bezoekers zoeken op functie of skill, bekijken het profiel en
de matchcalculator, en downloaden het volledige profiel na het achterlaten van hun gegevens.

## Download van het volledige profiel
- Leads gaan via Formspree (zelfde form als contact): src/components/LeadForm.astro.
- De pdf's staan NIET in de repo maar in de R2-bucket `hrmforce-downloads`. 450 profielen
  x 6 talen is ongeveer 1,2 GB; dat hoort niet in git en niet in elke Cloudflare-build.
- functions/downloads/[[path]].js levert ze uit op /downloads/<taal>/<slug>.pdf, dus op
  het eigen domein. Dat is nodig omdat het download-attribuut alleen same-origin werkt:
  via een los downloadsubdomein zou de pdf in een tab openen in plaats van opslaan.
- Welke pdf's bestaan staat in src/data/downloads-manifest.json. Staat een profiel daar
  niet in, dan valt de knop terug op de printbare volledig-pagina
  (/skills-framework/functies/<slug>/volledig/), die de bezoeker zelf als pdf kan opslaan.

## Pdf's genereren en uploaden (in Codespace of in de sandbox, niet nodig om live te gaan)
```
npm ci
npx playwright install --with-deps chromium
npm run build                                  # de pdf's worden uit dist gerenderd
HSF_PDF_LANGS=nl,en,de,fr,es,ro npm run hsf:pdf
npm run hsf:manifest                           # schrijft src/data/downloads-manifest.json
R2_ACCOUNT_ID=... R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... npm run hsf:upload
git add src/data/downloads-manifest.json && git commit -m "pdf-manifest bijgewerkt" && git push
```
Alleen het manifest gaat de repo in, de pdf's gaan naar R2. public/downloads/ staat in
.gitignore.
