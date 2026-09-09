#!/usr/bin/env bash
# Zet de functieprofiel-pdf's uit public/downloads in de R2-bucket hrmforce-downloads.
#
# De pdf's staan niet in de repo (450 profielen x 6 talen is ongeveer 1,2 GB). Ze gaan
# naar R2 en functions/downloads/[[path]].js levert ze uit op het eigen domein, zodat
# het download-attribuut in de leadform blijft werken.
#
# EENMALIG INSTELLEN
#   1. Cloudflare dashboard -> R2 -> bucket "hrmforce-downloads" aanmaken.
#   2. R2 -> API -> "Manage API tokens" -> token met Object Read & Write op die bucket.
#   3. In de Pages-instellingen van hrmforce-site hoeft niets: de binding DOWNLOADS
#      staat al in wrangler.toml.
#
# GEBRUIK
#   export R2_ACCOUNT_ID=...          # het Account ID uit het R2-overzicht
#   export R2_ACCESS_KEY_ID=...
#   export R2_SECRET_ACCESS_KEY=...
#   bash scripts/hsf-upload-downloads.sh                 # alle talen in public/downloads
#   bash scripts/hsf-upload-downloads.sh de fr           # alleen deze talen
#
# Het script gebruikt rclone (installeert het zo nodig in de sandbox) en synct per taal.
# Alleen nieuwe of gewijzigde bestanden gaan over de lijn.
set -euo pipefail

BUCKET="${R2_BUCKET:-hrmforce-downloads}"
SRC="${HSF_DOWNLOADS_DIR:-public/downloads}"
LANGS=("$@")
if [ ${#LANGS[@]} -eq 0 ]; then LANGS=(nl en de fr es ro); fi

for v in R2_ACCOUNT_ID R2_ACCESS_KEY_ID R2_SECRET_ACCESS_KEY; do
  if [ -z "${!v:-}" ]; then echo "Zet $v (zie de kop van dit script)." >&2; exit 1; fi
done
if [ ! -d "$SRC" ]; then echo "Map $SRC bestaat niet. Draai eerst npm run hsf:pdf." >&2; exit 1; fi

if ! command -v rclone >/dev/null 2>&1; then
  echo "rclone niet gevonden, installeren..."
  curl -fsSL https://rclone.org/install.sh | sudo bash >/dev/null
fi

export RCLONE_CONFIG_R2_TYPE=s3
export RCLONE_CONFIG_R2_PROVIDER=Cloudflare
export RCLONE_CONFIG_R2_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID"
export RCLONE_CONFIG_R2_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY"
export RCLONE_CONFIG_R2_ENDPOINT="https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
export RCLONE_CONFIG_R2_ACL=private
export RCLONE_CONFIG_R2_NO_CHECK_BUCKET=true

for lang in "${LANGS[@]}"; do
  if [ ! -d "$SRC/$lang" ]; then echo "  $lang: geen map, overgeslagen"; continue; fi
  n=$(find "$SRC/$lang" -name '*.pdf' | wc -l)
  echo "== $lang: $n pdf's"
  rclone sync "$SRC/$lang" "R2:$BUCKET/$lang" \
    --include '*.pdf' \
    --header-upload "Content-Type: application/pdf" \
    --transfers 16 --checkers 16 --s3-chunk-size 8M \
    --stats 10s --stats-one-line
done

echo
echo "Klaar. Controleer een bestand met:"
echo "  curl -sI https://website.hrmforce.com/downloads/de/managing-director.pdf | head -5"
echo "Werk daarna het manifest bij en commit dat:"
echo "  node scripts/hsf-build-downloads-manifest.mjs && git add src/data/downloads-manifest.json"
