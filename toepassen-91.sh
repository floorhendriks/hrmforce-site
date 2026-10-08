#!/usr/bin/env bash
# Patch 91 voor hrmforce-site: de laatste drie lessen in de taalinstructie.
#
#   bash toepassen-91.sh
#
# Alleen TAAL-TOEVOEGEN.md. Geen code, geen DeepL, geen sitewijziging.
#
# 1. De nakijkstap begint nu met de grootste groep: korte labels met een tweede
#    betekenis. "Basic inrichting" werd vormgeving in plaats van configuratie,
#    "Lets" werd het Engelse "let's", "Capaciteiten" werd mogelijkheden. De
#    regel is: lees de labels van onder de veertig tekens na, lopende zinnen
#    niet woord voor woord.
# 2. De segmentnamen staan erbij, met de val tussen Capaciteiten en
#    Vaardigheden waar DeepL in de helft van de talen hetzelfde woord van maakt.
# 3. De tabel met plekken waar tekst zich verstopt heeft een vijfde rij: een
#    waarde die uit externe data komt, zoals het segment van een product uit de
#    shopcatalogus. Die staat in geen enkel taalblok, dus de vertaallaag ziet
#    hem nooit. Met de oplossing erbij.
set -euo pipefail
cd "$(dirname "$0")"
[ -d src/i18n ] || { echo "Draai dit vanuit de hoofdmap van hrmforce-site."; exit 1; }

cat > /tmp/91.b64 <<'B64EOF'
ZGlmZiAtLWdpdCBhL1RBQUwtVE9FVk9FR0VOLm1kIGIvVEFBTC1UT0VWT0VHRU4ubWQKaW5kZXgg
NzhkYjc5YS4uNTY5MTM4NSAxMDA2NDQKLS0tIGEvVEFBTC1UT0VWT0VHRU4ubWQKKysrIGIvVEFB
TC1UT0VWT0VHRU4ubWQKQEAgLTE5ICsxOSBAQCB2ZXJnZXRlbiBlbiBlZW4ga2VlciBsaXZlIGdl
Z2FhbjsgZGUgdWl0bGVnIHBlciBzdGFwIHN0YWF0IGVyb25kZXIuCi1bIF0gIDggIERlIHZlcnRh
bGluZyBuYWdla2VrZW4gbWV0IGRlIGhhbmQgKHRhYWxuYW1lbiwgYWFuaGVmLCBvbmRlcndlcnAp
CitbIF0gIDggIERlIHZlcnRhbGluZyBuYWdla2VrZW4gbWV0IGRlIGhhbmQgKGtvcnRlIGxhYmVs
cywgdGFhbG5hbWVuLCBhYW5oZWYpCkBAIC0xMDkgKzEwOSwxNSBAQCBEZWVwTCBsZXZlcnQgZ29l
ZCB3ZXJrIG9wIGxvcGVuZGUgemlubmVuIGVuIHN0cnVpa2VsdCB2b29yc3BlbGJhYXIgb3ZlciBr
b3J0ZQotbG9zc2Ugd29vcmRlbiBlbiBvdmVyIGFhbmhlZi4gTG9vcCBkZXplIHZpZXIgbmEgdm9v
cmRhdCBqZSBib3V3dDoKK2xvc3NlIHdvb3JkZW4gZW4gb3ZlciBhYW5oZWYuIEVlbiBoZWxlIHpp
biBoZWVmdCBjb250ZXh0LCBlZW4gbGFiZWwgdmFuIHR3ZWUKK3dvb3JkZW4gbmlldC4gTG9vcCBk
ZXplIHB1bnRlbiBuYSB2b29yZGF0IGplIGJvdXd0OgorCisqKktvcnRlIGxhYmVscyBtZXQgZWVu
IHR3ZWVkZSBiZXRla2VuaXMuKiogRGl0IGlzIGRlIGdyb290c3RlIGdyb2VwLiAiQmFzaWMKK2lu
cmljaHRpbmciIHdlcmQgIkdydW5kbGVnZW5kZSBHZXN0YWx0dW5nIiwgIk1pc2UgZW4gcGFnZSBk
ZSBiYXNlIiBlbiAiRGlzZcOxbworYsOhc2ljbyI6IHZvcm1nZXZpbmcgaW4gcGxhYXRzIHZhbiBj
b25maWd1cmF0aWUuICJMZXRzIiB3ZXJkIGhldCBFbmdlbHNlICJsZXQncyIsCisiQ2FwYWNpdGVp
dGVuIiB3ZXJkICJtb2dlbGlqa2hlZGVuIiBlbiAiT250d2lra2VsaW5nIiB3ZXJkICJ1aXR3ZXJr
aW5nIi4gTG9vcCBuYQorZWxrZSByb25kZSBkZSBsYWJlbHMgdmFuIG9uZGVyIGRlIHRpZW4gdGVr
ZW5zIHRvdCBvbmdldmVlciB2ZWVydGlnIG5hLCBkdXMgZGUKK3ByaWpzdGFiZWwsIGRlIGZpbHRl
cnMsIGRlIHNlZ21lbnRuYW1lbiBlbiBkZSBtZW51LWl0ZW1zLiBMb3BlbmRlIHppbm5lbiBob2Vm
IGplCituaWV0IHdvb3JkIHZvb3Igd29vcmQgdGUgbGV6ZW4uCisKKyoqRGUgc2VnbWVudG5hbWVu
IGluIGhldCBmaWx0ZXIuKiogYFNFR01FTlRfTkFNRU5gIGluCitgc3JjL2RhdGEvY29tcG9uZW50
LXRla3N0ZW4uanNgLiBMZXQgb3AgaGV0IHZlcnNjaGlsIHR1c3NlbiBDYXBhY2l0ZWl0ZW4KKyhj
b2duaXRpZXZlIHZlcm1vZ2VucykgZW4gVmFhcmRpZ2hlZGVuIChza2lsbHMpOyBEZWVwTCBtYWFr
dCBkYWFyIGluIGRlIGhlbGZ0Cit2YW4gZGUgdGFsZW4gaGV0emVsZmRlIHdvb3JkIHZhbi4KQEAg
LTE5NiwwICsyMTEgQEAgZGUgcHJha3RpamsgZ2FhdCBoZXQgdGVsa2VucyBvbSBlZW4gdmFuIGRl
emUgdmllcjoKK3wgZWVuIHdhYXJkZSB1aXQgZXh0ZXJuZSBkYXRhLCB6b2FscyBoZXQgc2VnbWVu
dCB2YW4gZWVuIHByb2R1Y3QgdWl0IGRlIHNob3BjYXRhbG9ndXMgfCBzdGFhdCBpbiBnZWVuIGVu
a2VsIHRhYWxibG9rLCBkdXMgZGUgdmVydGFhbGxhYWcgemlldCBoZW0gbm9vaXQgfCBlZW4gZWln
ZW4gdGFhbGJsb2sgbWV0IGRpZSB3YWFyZGUgYWxzIHNsZXV0ZWwsIHppZSBgU0VHTUVOVF9OQU1F
TmAgfApAQCAtMjgwLDAgKzI5NiwxNiBAQCBhZHJlc3NlbiBzdGFhbiBpbiBgX3JlZGlyZWN0c2Au
CisqKkVlbiBsYWJlbCBkYXQgdWl0IGV4dGVybmUgZGF0YSBrb210LCB2ZXJ0YWFsdCBuaWV0cy4q
KiBIZXQgc2VnbWVudGZpbHRlciBvcAorYC9hc3Nlc3NtZW50LW92ZXJ6aWNodGAgbGVpZGRlIHpp
am4gb3B0aWVzIGFmIHVpdCBkZSBzaG9wY2F0YWxvZ3VzIGVuIHN0b25kCitkYWFyZG9vciBpbiBl
bGtlIHRhYWwgaW4gaGV0IE5lZGVybGFuZHMsIG9vayBpbiBoZXQgUG9vbHMsIERlZW5zIGVuIFp3
ZWVkcy4gRGUKK29wbG9zc2luZyBpcyBlZW4gZWlnZW4gdGFhbGJsb2sgbWV0IGRlIE5lZGVybGFu
ZHNlIHdhYXJkZSBhbHMgc2xldXRlbDoKKworYGBganMKK2V4cG9ydCBjb25zdCBTRUdNRU5UX05B
TUVOID0geworICBubDogeyAiQ2FwYWNpdGVpdGVuIjogIkNhcGFjaXRlaXRlbiIsIC4uLiB9LAor
ICBlbjogeyAiQ2FwYWNpdGVpdGVuIjogIkFiaWxpdGllcyIsIC4uLiB9LAorfTsKK2BgYAorCitE
ZSB3YWFyZGUgaW4gZGUgYDxvcHRpb24+YCBibGlqZnQgZGUgTmVkZXJsYW5kc2UsIHdhbnQgZGFh
ciBmaWx0ZXJ0IGRlIHBhZ2luYSBvcDsKK2FsbGVlbiBoZXQgbGFiZWwgZ2FhdCBtZWUgaW4gZGUg
dmVydGFsaW5nLiBIZXR6ZWxmZGUgZ2VsZHQgdm9vciBlbGtlIGxpanN0IGRpZQordWl0IGRlIHNo
b3BjYXRhbG9ndXMsIHVpdCBTYW5pdHkgb2YgdWl0IGVlbiBrb3BwZWxpbmcga29tdC4KKwo=
B64EOF
base64 -d /tmp/91.b64 > /tmp/91.patch
if grep -q "Korte labels met een tweede betekenis" TAAL-TOEVOEGEN.md; then
  echo "De patch stond er al in, alleen het vastleggen nog."
else
  git apply --unidiff-zero /tmp/91.patch
fi
rm -f /tmp/91.b64 /tmp/91.patch

git add -A
git commit -q -F - <<'MSGEOF'
De laatste drie lessen in de taalinstructie

Alleen TAAL-TOEVOEGEN.md, geen code en geen sitewijziging.

1. De nakijkstap begint nu met de grootste groep: korte labels met een tweede
   betekenis. Basic inrichting werd vormgeving in plaats van configuratie, Lets
   werd het Engelse lets, Capaciteiten werd mogelijkheden en Ontwikkeling werd
   uitwerking. Een hele zin heeft context, een label van twee woorden niet. De
   regel is dus: lees de labels van onder de veertig tekens na, lopende zinnen
   niet woord voor woord.
2. De segmentnamen staan erbij, met de val tussen Capaciteiten en Vaardigheden
   waar DeepL in de helft van de talen hetzelfde woord van maakt.
3. De tabel met plekken waar tekst zich verstopt voor het vertaalscript heeft
   een vijfde rij: een waarde die uit externe data komt, zoals het segment van
   een product uit de shopcatalogus. Die staat in geen enkel taalblok, dus de
   vertaallaag komt er nooit langs. In het naslagdeel staat de oplossing, met
   SEGMENT_NAMEN als voorbeeld.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSGEOF

git push
echo
echo "Klaar. Patch 91 staat op main."
