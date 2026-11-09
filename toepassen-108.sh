#!/usr/bin/env bash
# Patch 108 voor hrmforce-site: de laatste drie 404's uit Search Console (09-11-2026).
#
#   bash toepassen-108.sh
#
# De 404-validatie van 29-10 (267 adressen) mislukte op 09-11. Live nagemeten:
# 206x 301 (alle doelen 200), 57x 410 (WordPress-restanten, oude feeds, POST-API's;
# bewust, Google telt die als 404) en nog 3 echte 404's. Die drie krijgen een 301.
set -euo pipefail
cd "$(dirname "$0")"
[ -f functions/_middleware.js ] || { echo "Draai dit vanuit de hoofdmap van hrmforce-site."; exit 1; }

if grep -q "^/ro/personalitate/ " src/data/redirects.txt; then
  echo "De regels stonden er al in."
else
  cat >> src/data/redirects.txt <<'RED'

# Search Console 09-11-2026: de laatste drie 404's uit de vierde validatieronde.
/ro/personalitate/ /ro/test-de-personalitate/ 301
/ro/politica/ /ro/kenniscentrum/ 301
/producto/360-graden-feedback/ /es/assessments/360-graden-feedback/ 301
/producto/* /es/shop/ 301
RED
fi
node scripts/gen-redirect-tabel.mjs
git add -A
git commit -q -F - <<'MSGEOF'
Laatste drie 404's uit Search Console doorverwezen

/ro/personalitate/, /ro/politica/ en /producto/360-graden-feedback/ gaven
nog een 404. Ze gaan nu met een 301 naar de Roemeense persoonlijkheidstest,
het Roemeense kenniscentrum en de Spaanse 360-graden feedbackpagina.
Overige /producto/-adressen vallen terug op de Spaanse shop.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_0183TmwUsH41ms87o8Zri8YN
MSGEOF
git push
echo "Klaar. Patch 108 staat op main."
