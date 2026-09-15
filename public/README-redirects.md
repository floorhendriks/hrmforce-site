# 301-redirects

Het bestand `_redirects` (in deze map `public/`) wordt door Astro meegekopieerd naar de gepubliceerde site
en werkt direct op **Cloudflare Pages** en **Netlify**. Elke regel: `oud-pad  nieuw-pad  301`.

## Wat er nu in staat
- Assessments met een gewijzigde slug (bv. big-fifty -> big-five).
- Gelokaliseerde paginaslugs (DE/FR/ES/RO) naar de nieuwe, uniforme slugs.
- De oude webshop-URL's naar de nieuwe shop.

## Limiet van Cloudflare Pages
De documentatie noemt 2.000 statische en 100 dynamische regels, maar in de praktijk past
Cloudflare Pages op dit project alleen de eerste 132 regels toe. Alles daarna wordt stil
genegeerd: geen bouwfout, geen waarschuwing, de URL geeft gewoon 404. Dit is gemeten door
regels op bekende posities te testen, en het is geen bytegrens: een compacter bestand met
dezelfde regels kapte op precies hetzelfde punt af.

Daarom:
- De volgorde in `_redirects` is prioriteitsvolgorde. Wat bovenaan staat werkt zeker.
- Onderaan staan bewust de drie minst waardevolle regels, als kanarie.
- Voeg niet zomaar regels toe. Voeg je er een toe, voeg hem dan bovenaan in en controleer
  na de deploy of de laatste regel van het bestand nog een 301 geeft.
- Liever samenvoegen dan toevoegen: twee oude paden met hetzelfde doel kunnen vaak in een
  wildcard, mits geen bestaande pagina onder dat prefix valt.

## Belangrijk
- Test na livegang met een paar oude links of je netjes op de nieuwe pagina landt (geen redirect-lussen).
- Houd de redirects minimaal een jaar in stand; daarna heeft Google de nieuwe URL's overgenomen.
