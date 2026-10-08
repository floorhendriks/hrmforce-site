# Een taal toevoegen aan hrmforce.com

Deze site draait op één set routes die elke taal bedient. Een taal toevoegen is
daarom vooral vertalen, niet bouwen.

Werk de checklist hieronder van boven naar beneden af. Elk punt is een keer
vergeten en een keer live gegaan; de uitleg per stap staat eronder.

## Checklist

```
[ ]  1  Taalcode gekozen en bij DeepL nagekeken
[ ]  2  src/i18n/ui.js: languages + taalInfo
[ ]  3  Drie lijsten onder functions/ bijgewerkt
[ ]  4  Vertaalronde 1: sitetekst          node scripts/hsf-translate-content.mjs <taal>
[ ]  5  Vertaalronde 2: skills framework   HSF_LANGS=<taal> node scripts/hsf-translate-ui.mjs
[ ]  6  Vertaalronde 3: oefenbanken        (optioneel)
[ ]  7  Mailteksten weggeschreven          node scripts/genereer-mailteksten.mjs
[ ]  8  De vertaling nagekeken met de hand (taalnamen, aanhef, onderwerp)
[ ]  9  npx astro build
[ ] 10  python3 scripts/taalcontrole.py <taal>      geen FOUT meer over
[ ] 11  De bestaande talen vergeleken met de vorige bouw
[ ] 12  Bestandsaantal onder de limiet
[ ] 13  Vastgelegd en gepusht
[ ] 14  Sitemap opnieuw ingediend bij Search Console
```

---

## 1. De taalcode

De code moet een code zijn die DeepL kent. `nb` voor Noors en `zh` voor Chinees
heten bij DeepL anders; kijk dat na voordat je begint.

## 2. De taal aanzetten

In `src/i18n/ui.js` staat de enige lijst met talen:

```js
export const languages = { nl: "NL", en: "EN", ..., pl: "PL" };
```

Zet de code erbij en vul `taalInfo` aan met de naam van de taal in die taal zelf
("Polski", niet "Pools"). Daar leiden de routes, de taalwisselaar, de
hreflang-regels, de zoekindex, de sitemap en de lijst met geldige paden zich
vanaf. Verder hoeft er nergens een taalcode bij, op stap 3 na.

## 3. De drie lijsten onder functions/

De Cloudflare-functions hebben hun eigen talenlijst en leiden die niet af uit
`ui.js`. Staat de taal er niet in, dan valt een aanvraag uit die taal stil terug
op het Nederlands:

| bestand | lijst | wat er misgaat |
| --- | --- | --- |
| `functions/api/aanvraag.js` | `TALEN` | de antwoordmail aan een particuliere aanvrager komt in het Nederlands |
| `functions/api/oefenmateriaal.js` | `TALEN` | de mail met oefenvragen komt in het Nederlands |
| `functions/api/checkout.js` | `locale` | de bestelling komt binnen als Nederlandse bestelling |

`scripts/taalcontrole.py` controleert alle drie.

## 4 tot en met 6. Vertalen

Zet eerst de sleutel klaar:

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

## 7. De mailteksten naar de edge

```bash
node scripts/genereer-mailteksten.mjs
```

Dit kost niets en duurt een seconde, maar zonder deze stap houdt de nieuwe taal
de Nederlandse mail. De reden: `src/data/vertaal-inhoud.js` haalt de vertalingen
op met `import.meta.glob`, en dat zet Vite tijdens de sitebouw om in een vaste
lijst. Een Cloudflare Pages Function draait niet door Vite, dus daar blijft die
lijst leeg. Het script schrijft de vertaalde mailteksten eenmalig uit naar
`functions/_lib/mailteksten.js`, dat de functions gewoon kunnen importeren.

Dat bestand gaat mee in de commit. Draai het script opnieuw na elke vertaalronde
die de mailteksten raakt, dus ook als je alleen een zin in de mail aanpast.

## 8. De vertaling nakijken met de hand

DeepL levert goed werk op lopende zinnen en struikelt voorspelbaar over korte
losse woorden en over aanhef. Loop deze vier na voordat je bouwt:

**De 29 taalnamen in de taalkeuze.** `SHOP_CAND_I18N` in
`src/data/component-teksten.js` noemt elke testtaal bij naam. "Lets" las DeepL
in drie talen als het Engelse "let's" en maakte er een werkwoord van
("Pozwólmy", "Lad os", "Låt oss"), "Ests" bleef onvertaald, en de hoofdletters
wisselden per naam. Kijk de hele lijst na in
`src/data/translations-content/<taal>.json`.

**De aanhef in de antwoordmails.** Het Nederlandse "Beste" is onzijdig; veel
talen hebben dat niet. Het Poolse "Szanowny Panie" is mannelijk, het Zweedse
"Kära" te familiair voor een zakelijke mail, en een Deens "Kære," zonder naam
loopt niet. Kies per taal de neutrale zakelijke aanhef.

**Het onderwerp van de antwoordmails.** "Je aanvraag bij hrmforce" is een
zelfstandig naamwoord, geen zin, en daar maakt DeepL soms een opdracht van
("Prosimy kierować na adres hrmforce"). Lees beide onderwerpen na.

**Vastgeplakte merknamen.** Het vertaalscript zet beschermde namen tussen
`<x>`-tags, en DeepL plakt die soms aan het vorige woord ("wNIP", "modelu
WorkplaceBig Five"). `herstelSpatie()` in het script vangt dat af, maar
controleer het resultaat.

Een handmatige correctie zet je rechtstreeks in
`src/data/translations-content/<taal>.json` en draai daarna stap 7 opnieuw.

## 9 tot en met 12. Bouwen en controleren

```bash
npx astro build
python3 scripts/taalcontrole.py <taal>
```

Het controlescript loopt zeven dingen na: de twee lijsten uit stap 2 en 3, het
vertaalbestand, de mailteksten, de taalnamen, Nederlandse resttekst op de
pagina's, kapotte interne links en het bestandsaantal. Een FOUT moet weg, een
aandachtspunt lees je na. Adressen, boektitels en literatuurverwijzingen horen
gelijk te zijn aan het Nederlands, lopende zinnen niet.

Daarnaast één controle die het script niet kan doen:

**De bestaande talen mogen niet veranderen.** Bouw een kloon van de vorige
commit en vergelijk de twee dist-mappen bestand voor bestand. Alleen de
hreflang-regels, de taalwisselaar en de talenlijst in het organisatieschema
horen te verschillen. Normaliseer daarbij de willekeurige `qpm-xxxxxx` in de
svg's en de hashes in `_astro/`, anders verschilt alles.

**Bestandslimiet.** Cloudflare Pages laat op het gratis plan 20.000 bestanden
per site toe, op een betaald plan 100.000 (met `PAGES_WRANGLER_MAJOR_VERSION=4`
in de projectinstellingen). Een taal zonder eigen skills-frameworkdataset kost
ongeveer 175 bestanden, met die dataset ongeveer 2.700. Het controlescript telt
mee.

## 13 en 14. Vastleggen en na de deploy

Zet in de commit ook `functions/_lib/mailteksten.js` en de drie bijgewerkte
functions. Dien na de deploy de sitemap opnieuw in bij Search Console.

---

# Naslag: waar tekst mag staan

Dit is de regel die het vaakst wordt overtreden, en het kost elke keer een
extra ronde.

**Het vertaalscript ziet alleen geëxporteerde teksten in `src/data/*.js` en
`src/i18n/ui.js`.** Alles daarbuiten blijft Nederlands in elke nieuwe taal. In
de praktijk gaat het telkens om een van deze vier:

| waar de tekst stond | wat eraan ontbrak | waar hij nu hoort |
| --- | --- | --- |
| een blok `{ nl, en, ... }` in een `.astro`-bestand | het script scant `src/data` en `src/i18n`, niet `src/components` | `src/data/component-teksten.js` |
| een `const` die niet geëxporteerd is | het script leest alleen de exports van een datafile | exporteer hem |
| een functie per taal, `nl: (naam) => ...` | het script leest tekst, geen functies | tekst met plaatshouders, `"Beste {naam},"` |
| een hardgecodeerde standaardtekst, `Astro.props.x ?? "Vertrouwd door 1.200+ organisaties"` | staat niet in een taalblok | `src/data/`, en geef de component de taal mee |

**Een sleutelnaam uit `GEEN_TEKST` krijgt geen vertaling.** In
`src/data/vertaal-inhoud.js` staat een lijst sleutels waarvan de waarde geen
tekst is maar een pad of een code: `slug`, `href`, `url`, `src`, `icon`, `key`,
`id`, `beeld`, `img`, `image`, `telHref`, `mail`, `tel`, `locale`, `lang`,
`code`, `hreflang`. Noem een tekstveld dus nooit zo. Het label bij de taalkeuze
heette `lang` en bleef daardoor in elke taal "Taal kandidaat"; het heet nu
`taalLabel`.

**Elke datafile sluit af met de aanvulregel.** Let op de volgorde: de regel moet
ná de declaratie staan, anders breekt de bouw.

```js
Object.assign(X, vulAan(X));
```

Dat vult elke taal aan vanuit `src/data/translations-content/<taal>.json`.

**Staat de tekst alleen in het Nederlands**, zoals bij de HRM-oplossingen en de
adviespagina's, gebruik dan `vertaalAlles` in plaats van `vulAan`:

```js
export const oplossingen = vertaalAlles(OPLOSSINGEN_NL);
export const oplossingenVoor = (taal) => oplossingen[taal] ?? oplossingen.en ?? oplossingen.nl;
```

Dat geeft `{ nl, en, de, ... }` terug: een kopie per taal waarvoor een
vertaalbestand bestaat, met Engels als terugval. `vulAan` laat de brontalen met
rust, `vertaalAlles` vult ze wel, want daar staat geen handgeschreven tekst voor.

Komt er zo'n bestand bij, vertaal dan alleen dat bestand. Anders krijgen de
brontalen de hele site opnieuw vertaald, en dat is ruim 350.000 tekens per taal:

```
HSF_ONLY=oplossingen.js,advies-detail.js node scripts/hsf-translate-content.mjs en de fr es ro pl da sv
```

**Een pagina die niet in elke taal bestaat** hoort in
`src/i18n/alleen-brontaal.js`. Een taal buiten de brontalen krijgt daar de
**Engelse** versie, niet de Nederlandse: een Zweedse bezoeker heeft daar meer
aan, en Engels bestaat voor al die pagina's. Dezelfde regel geldt voor het
skills framework, de oefenbanken en het kenniscentrum.

**Een pagina uit het menu hoort wel in elke taal te bestaan.** Een menu-item
naar het Engels laten wijzen of uit het menu halen is geen oplossing. De
HRM-oplossingen en de adviespagina's komen daarom uit `src/data/oplossingen.js`
en `src/data/advies-detail.js` en worden door de `[lang]`-routes gebouwd.

**Een vertaald label mag nooit naar een Nederlandse pagina leiden.** Het label
komt uit de vertaallaag, de link uit `localizePath`. Volgen die twee niet
dezelfde regel, dan staat er een Zweeds menu-item dat op een Nederlandse pagina
uitkomt.

**Het kenniscentrum vult zich met de Engelse artikelen** zolang een taal geen
eigen artikelen in Sanity heeft. De links moeten dan naar `/en/kenniscentrum/`
blijven wijzen; `localizeExisting` zou ze anders naar het Nederlands
herschrijven.

**Het skills framework wordt niet per taal gebouwd.** Dat is Engelse inhoud
onder een vreemd voorvoegsel, dus dubbele inhoud, en het kostte 829 van de
1.002 bestanden die een taal opleverde. De links wijzen naar `/en/`, de oude
adressen staan in `_redirects`.

**De productomschrijving in de shop gaat per taal mee, niet alle talen.**
`src/components/Shop.astro` geeft `SHOP_ENRICH_DESC[lang]` door, niet het hele
blok. Anders staat de Nederlandse tekst in de bron van elke buitenlandse
shoppagina.
