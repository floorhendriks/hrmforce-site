# 301-redirects

Het bestand `_redirects` (in deze map `public/`) wordt door Astro meegekopieerd naar de gepubliceerde site
en werkt direct op **Cloudflare Pages** en **Netlify**. Elke regel: `oud-pad  nieuw-pad  301`.

## Wat er nu in staat
- Assessments met een gewijzigde slug (bv. big-fifty -> big-five).
- Gelokaliseerde paginaslugs (DE/FR/ES/RO) naar de nieuwe, uniforme slugs.
- De oude webshop-URL's naar de nieuwe shop.

## Wat nog moet (en hoe ik help)
Voor een volledige, nauwkeurige set heb ik de **complete lijst oude URL's** nodig. Die haal je zo op:
1. Open `https://hrmforce.com/sitemap.xml` (of de WordPress/Yoast-sitemap).
2. Sla die op en geef hem aan mij.
Dan genereer ik automatisch een redirect-regel per oude URL naar de juiste nieuwe pagina,
inclusief alle 91 productpagina's naar hun Shopify-handle.

## Belangrijk
- Test na livegang met een paar oude links of je netjes op de nieuwe pagina landt (geen redirect-lussen).
- Houd de redirects minimaal een jaar in stand; daarna heeft Google de nieuwe URL's overgenomen.
