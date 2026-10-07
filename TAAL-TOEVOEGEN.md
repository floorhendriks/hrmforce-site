# Een taal toevoegen aan hrmforce.com

Deze site draait op één set routes die elke taal bedient. Een taal toevoegen is
daarom vooral vertalen, niet bouwen. Dit zijn de stappen, in volgorde.

## 1. De taal aanzetten

In `src/i18n/ui.js` staat de enige lijst met talen:

```js
export const languages = { nl: "NL", en: "EN", ..., pl: "PL" };
```

Zet de nieuwe code erbij en vul `taalInfo` aan met de vlag en de naam van de
taal in die taal zelf ("Polski", niet "Pools"). Daar leiden de routes, de
taalwisselaar, de hreflang-regels, de zoekindex, de sitemap en de lijst met
geldige paden zich vanaf. Verder hoeft er nergens een taalcode bij.

De taalcode moet een code zijn die DeepL kent. `nb` voor Noors en `zh` voor
Chinees heten bij DeepL anders; controleer dat voordat je begint.

## 2. Vertalen

Er zijn drie vertaalrondes. Zet eerst de sleutel klaar:

```bash
export DEEPL_API_KEY=...
```

```bash
# 1. sitetekst en componentteksten  (~375.000 tekens per taal)
node scripts/hsf-translate-content.mjs <taal>

# 2. interfacewoorden van het skills framework  (~11.000 tekens)
HSF_LANGS=<taal> node scripts/hsf-translate-ui.mjs

# 3. oefenbanken, alleen als je de oefentest in die taal wilt  (~138.000 tekens)
#    Zonder deze ronde komen de oefenvragen in het Engels.
```

Alle scripts zijn hervatbaar: wat al vertaald is wordt overgeslagen. Met
`HSF_ESTIMATE=1` zie je vooraf wat een ronde kost, met `HSF_TRANSLATE_MOCK=1`
draai je hem zonder DeepL.

De dataset van het skills framework (`src/data/translations/<taal>.json`,
927.000 tekens) is bewust optioneel. Zonder dat bestand lezen de 1.727
functie- en skillpagina's in het Engels en vervallen de rekenhulp en de
volledige profielen. Dat is een keuze per taal, geen vereiste.

## 3. Controleren

```bash
npx astro build
```

Daarna drie controles. De eerste twee zijn hard, de derde is een steekproef.

**De bestaande talen mogen niet veranderen.** Bouw een kloon van de vorige
commit en vergelijk de twee dist-mappen bestand voor bestand. Alleen de
hreflang-regels, de taalwisselaar en de talenlijst in het organisatieschema
horen te verschillen.

**Geen kapotte interne links.** Loop elke pagina van de nieuwe taal langs en
controleer of elk `href="/..."` bestaat in de bouw.

**Geen Nederlandse resttekst.** Vergelijk de zichtbare tekst van elke pagina in
de nieuwe taal met dezelfde pagina in het Nederlands. Wat identiek is, is niet
vertaald. Productnamen en merknamen horen gelijk te zijn, hele zinnen niet.

## 4. Bestandslimiet

Cloudflare Pages laat op het gratis plan 20.000 bestanden per site toe, op een
betaald plan 100.000 (met `PAGES_WRANGLER_MAJOR_VERSION=4` in de
projectinstellingen). Tel voor het pushen:

```bash
find dist -type f | wc -l
```

Een taal zonder eigen skills-frameworkdataset kost ongeveer 950 bestanden, een
taal met die dataset ongeveer 2.700.

## 5. Na de deploy

Dien de sitemap opnieuw in bij Search Console, zodat Google de nieuwe adressen
meteen ziet in plaats van ze zelf te moeten vinden.

## Waar tekst mag staan

Dit is de regel die het vaakst wordt overtreden, en het kost elke keer een
extra ronde: **een taalblok hoort in `src/data/`, nooit in een `.astro`-bestand.**

`scripts/hsf-translate-content.mjs` loopt alleen `src/data/*.js` af. Een blok
`{ nl: ..., en: ... }` in een component wordt dus nooit vertaald en valt in
elke nieuwe taal terug op Nederlands. Teksten die bij een component horen staan
in `src/data/component-teksten.js`.

Elke datafile sluit af met:

```js
Object.assign(X, vulAan(X));
```

Dat vult elke taal aan vanuit `src/data/translations-content/<taal>.json`. Zie
`src/data/vertaal-inhoud.js` voor wat er precies gebeurt met links, slugs en
plaatshouders.

Een pagina die niet in elke taal bestaat, hoort in `src/i18n/alleen-brontaal.js`.
Dan houdt een nieuwe taal daar de Nederlandse link in plaats van naar een 404
te wijzen.
