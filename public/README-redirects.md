# Redirects

De redirects staan niet meer in `public/_redirects`. Cloudflare Pages paste van dat
bestand alleen de eerste 100 regels toe en negeerde de rest stil (gemeten op 12-10-2026:
regel 1 t/m 100 gaven een 301, regel 101 en verder een 404).

Nu:
- Bron: `src/data/redirects.txt`, zelfde opmaak als `_redirects` (`oud-pad nieuw-pad 301`).
- `npm run redirects` zet dat om naar `functions/_lib/redirect-tabel.js` en controleert
  of elk doel bestaat (na `astro build`). De build doet het omzetten ook zelf (prebuild).
- `functions/_middleware.js` voert de regels uit: exacte regels altijd, wildcards en de
  WordPress-patronen (feed, paginering, categoriemappen, wp-admin, uploads) pas na een 404.
- `public/_routes.json` stuurt alle paden naar de middleware, behalve statische bestanden
  (`/_astro/`, `/media/`) en het skills framework (ruim 10.000 pagina's zonder oude adressen).

Nieuwe redirect: regel toevoegen in `src/data/redirects.txt`, `npm run redirects`, deployen.

Cloudflare-instelling: zet bij Workers Free in het Pages-project onder
Settings > Runtime de optie Fail open aan. Raakt het dagelijkse aantal Function-aanroepen
op, dan blijft de site dan gewoon draaien (zonder redirects) in plaats van een foutpagina.
