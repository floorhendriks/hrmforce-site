# 301-redirects

Het bestand `_redirects` (in deze map `public/`) wordt door Astro meegekopieerd naar de gepubliceerde site
en werkt direct op **Cloudflare Pages** en **Netlify**. Elke regel: `oud-pad  nieuw-pad  301`.

## Wat er nu in staat
- Assessments met een gewijzigde slug (bv. big-fifty -> big-five).
- Gelokaliseerde paginaslugs (DE/FR/ES/RO) naar de nieuwe, uniforme slugs.
- De oude webshop-URL's naar de nieuwe shop.

## Limiet van Cloudflare Pages
De documentatie noemt 2.000 statische en 100 dynamische regels, maar in de praktijk past
Cloudflare Pages hier maar een deel van het bestand toe. De rest wordt stil genegeerd:
geen bouwfout, geen waarschuwing, de URL geeft gewoon 404. Gemeten op de gepubliceerde
site kapte het ene bestand af na 132 regels en een ander bestand met dezelfde regels in
een andere volgorde al na 103. Het is dus geen bytegrens en geen vast aantal, en waar de
grens ligt is niet te voorspellen.

Daarom twee lagen:

1. `_redirects` met de wildcards bovenaan. Die dekken elk veel URL's en kunnen niet als
   bestand bestaan, dus die hebben voorrang. Daarna de sitemapregels en de exacte regels.
2. Een statische terugvalpagina per exacte regel, gegenereerd met `npm run hsf:redirects`.
   Dat zet een `index.html` met een meta-refresh en een canonical op het oude pad.

Een regel in `_redirects` wint van een bestand op hetzelfde pad. Zolang de regel wordt
toegepast krijg je dus een echte 301. Valt de regel weg, dan vangt de terugvalpagina hem
op en landt de bezoeker alsnog goed, alleen zonder 301-status.

Nieuwe redirect toevoegen:
- Zet de regel in `_redirects`, exacte regels boven de wildcard die ze dekt.
- Draai `npm run hsf:redirects` zodat de terugvalpagina meekomt.
- Controleer na de deploy of het oude pad doorstuurt.

## Belangrijk
- Test na livegang met een paar oude links of je netjes op de nieuwe pagina landt (geen redirect-lussen).
- Houd de redirects minimaal een jaar in stand; daarna heeft Google de nieuwe URL's overgenomen.
