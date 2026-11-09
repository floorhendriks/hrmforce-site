#!/usr/bin/env bash
# Patch 103 voor hrmforce-site: laatste drie 404's uit Search Console (29-10-2026).
#
#   bash toepassen-103.sh
#
# Van de 277 adressen onder "Not found (404)" verwijzen er 200 al door en
# zijn 74 WordPress-restanten (410, zakken vanzelf weg). Nog drie gaven een
# echte 404. Die krijgen nu een 301:
#   /advies/overzicht/training-certificatietraining-hrmforce/ -> /advies/certificatietraining/
#   /beoordeling/                                              -> /kenniscentrum/
#   /de/motivation-de/                                         -> /de/assessments/drijfverentest/
set -euo pipefail
cd "$(dirname "$0")"
[ -f functions/_middleware.js ] || { echo "Draai dit vanuit de hoofdmap van hrmforce-site."; exit 1; }
git pull -q --ff-only

if grep -q "^/beoordeling/ " src/data/redirects.txt; then
  echo "De regels stonden er al in."
else
  cat >> src/data/redirects.txt <<'EOF'

# Search Console 29-10-2026: laatste drie echte 404's uit de 404-validatie.
/advies/overzicht/training-certificatietraining-hrmforce/ /advies/certificatietraining/ 301
/beoordeling/ /kenniscentrum/ 301
/de/motivation-de/ /de/assessments/drijfverentest/ 301
EOF
fi

node scripts/gen-redirect-tabel.mjs
grep -q '"/beoordeling/":\["/kenniscentrum/",301\]' functions/_lib/redirect-tabel.js \
  || { echo "Redirecttabel is niet bijgewerkt, er is niets vastgelegd."; exit 1; }

git add src/data/redirects.txt functions/_lib/redirect-tabel.js
git commit -q -F - <<'MSGEOF'
Laatste drie 404's uit Search Console doorverwezen

Van de 277 adressen onder Not found (404) gaven er nog drie een echte 404.
Die gaan nu met een 301 naar de certificatietraining, het kenniscentrum en
de Duitse drijfverentest.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_0183TmwYXN6CpBsDNcuxssLW
MSGEOF
git push
echo "Klaar. Patch 103 staat op main."
