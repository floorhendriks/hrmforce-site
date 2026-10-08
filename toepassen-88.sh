#!/usr/bin/env bash
# Patch 88 voor hrmforce-site: het bestandsaantal in de taalcontrole klopt weer.
#
#   bash toepassen-88.sh
#
# De telling nam dist/downloads mee, de 900 functieprofiel-pdf's. Die staan in
# .gitignore en komen op Cloudflare uit R2, dus ze gaan niet mee in de bouw. In
# de Codespace liggen ze wel op schijf, waardoor het script 16.280 meldde waar
# Cloudflare er 15.380 krijgt. Het script telt nu alleen wat echt meegaat en
# noemt eronder wat het oversloeg.
set -euo pipefail
cd "$(dirname "$0")"
[ -d src/i18n ] || { echo "Draai dit vanuit de hoofdmap van hrmforce-site."; exit 1; }

cat > /tmp/88.b64 <<'B64EOF'
ZGlmZiAtLWdpdCBhL1RBQUwtVE9FVk9FR0VOLm1kIGIvVEFBTC1UT0VWT0VHRU4ubWQKaW5kZXgg
OTMxZDEwOC4uMGRmZDM5NyAxMDA2NDQKLS0tIGEvVEFBTC1UT0VWT0VHRU4ubWQKKysrIGIvVEFB
TC1UT0VWT0VHRU4ubWQKQEAgLTE2MCArMTYwLDIgQEAgb25nZXZlZXIgMTc1IGJlc3RhbmRlbiwg
bWV0IGRpZSBkYXRhc2V0IG9uZ2V2ZWVyIDIuNzAwLiBIZXQgY29udHJvbGVzY3JpcHQgdGVsdAot
bWVlLgorbWVlIGVuIGxhYXQgYGRpc3QvZG93bmxvYWRzL2AgYnVpdGVuIGRlIHRlbGxpbmc6IGRp
ZSBmdW5jdGllcHJvZmllbC1wZGYncyBzdGFhbgoraW4gYC5naXRpZ25vcmVgIGVuIGtvbWVuIHVp
dCBSMiwgbWFhciBsaWdnZW4gaW4gZGUgQ29kZXNwYWNlIHdlbCBvcCBzY2hpamYuCmRpZmYgLS1n
aXQgYS9zY3JpcHRzL3RhYWxjb250cm9sZS5weSBiL3NjcmlwdHMvdGFhbGNvbnRyb2xlLnB5Cmlu
ZGV4IDlmMGFhMGUuLjAyYmUxOWYgMTAwNzU1Ci0tLSBhL3NjcmlwdHMvdGFhbGNvbnRyb2xlLnB5
CisrKyBiL3NjcmlwdHMvdGFhbGNvbnRyb2xlLnB5CkBAIC0yMjgsMiArMjI4LDEzIEBAIGlmIG9z
LnBhdGguaXNkaXIoRElTVCk6Ci0gICAgdG90YWFsID0gc3VtKDEgZm9yIF8sIF8sIGZzIGluIG9z
LndhbGsoRElTVCkgZm9yIF8gaW4gZnMpCi0gICAgcHJpbnQoIiAgICVkIGJlc3RhbmRlbiBpbiAl
cyAoZ3JhdGlzIHBsYW46IDIwLjAwMCwgYmV0YWFsZDogMTAwLjAwMCkiICUgKHRvdGFhbCwgRElT
VCkpCisgICAgIyBXYXQgZWVuIGZ1bmN0aW9uIHVpdHNlcnZlZXJ0IGdhYXQgbmlldCBtZWUgbmFh
ciBDbG91ZGZsYXJlLiBEZQorICAgICMgZnVuY3RpZXByb2ZpZWwtcGRmJ3Mgc3RhYW4gaW4gLmdp
dGlnbm9yZSBlbiBrb21lbiB1aXQgUjIsIG1hYXIgbGlnZ2VuIGluCisgICAgIyBkZSBDb2Rlc3Bh
Y2Ugd2VsIG9wIHNjaGlqZjsgem9uZGVyIGRlemUgYWZ0cmVrIHRlbHQgZGF0IDkwMCB0ZSB2ZWVs
LgorICAgIHRvdGFhbCwgb3Zlcmdlc2xhZ2VuID0gMCwgY29sbGVjdGlvbnMuQ291bnRlcigpCisg
ICAgZm9yIHdvcnRlbCwgXywgZnMgaW4gb3Mud2FsayhESVNUKToKKyAgICAgICAgcmVsID0gIi8i
ICsgb3MucGF0aC5yZWxwYXRoKHdvcnRlbCwgRElTVCkucmVwbGFjZShvcy5zZXAsICIvIikubHN0
cmlwKCIuIikubHN0cmlwKCIvIikKKyAgICAgICAgaG9vcnRfYmlqID0gbmV4dCgoZCBmb3IgZCBp
biBkeW5hbWlzY2ggaWYgcmVsLnN0YXJ0c3dpdGgoZC5yc3RyaXAoIi8iKSkpLCBOb25lKQorICAg
ICAgICBpZiBob29ydF9iaWo6IG92ZXJnZXNsYWdlbltob29ydF9iaWpdICs9IGxlbihmcykKKyAg
ICAgICAgZWxzZTogdG90YWFsICs9IGxlbihmcykKKyAgICBwcmludCgiICAgJWQgYmVzdGFuZGVu
IGdhYW4gbWVlIG5hYXIgQ2xvdWRmbGFyZSAoZ3JhdGlzIHBsYW46IDIwLjAwMCwgIgorICAgICAg
ICAgICJiZXRhYWxkOiAxMDAuMDAwKSIgJSB0b3RhYWwpCisgICAgZm9yIGQsIG4gaW4gc29ydGVk
KG92ZXJnZXNsYWdlbi5pdGVtcygpKToKKyAgICAgICAgaWYgbjogcHJpbnQoIiAgICVkIGJlc3Rh
bmRlbiBvbmRlciAlcyBuaWV0IG1lZWdldGVsZDsgZGllIGtvbWVuIHVpdCBSMiIgJSAobiwgZCkp
Cg==
B64EOF
base64 -d /tmp/88.b64 > /tmp/88.patch
if grep -q "overgeslagen" scripts/taalcontrole.py; then
  echo "De patch stond er al in, alleen het vastleggen nog."
else
  git apply --unidiff-zero /tmp/88.patch
fi
rm -f /tmp/88.b64 /tmp/88.patch

git add -A
git commit -q -F - <<'MSGEOF'
Bestandsaantal in de taalcontrole zonder de downloads uit R2

Het script telde dist/downloads mee, de 900 functieprofiel-pdf's. Die staan in
.gitignore en worden op Cloudflare door functions/downloads uitgeserveerd vanuit
R2, dus ze gaan niet mee in de bouw. In de Codespace liggen ze wel op schijf,
waardoor het script 16.280 meldde terwijl Cloudflare er 15.380 krijgt. Dat is
precies het getal dat bepaalt of er nog een taal bij kan, dus het moet kloppen.

Het script telt nu alleen de bestanden die meegaan en noemt per overgeslagen map
hoeveel dat er waren. Welke mappen dat zijn leidt het af uit functions/, dus een
nieuwe functieroute hoeft niet apart te worden bijgezet. TAAL-TOEVOEGEN.md
vermeldt het bij de bestandslimiet.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSGEOF

git push
echo
echo "Klaar. Patch 88 staat op main."
