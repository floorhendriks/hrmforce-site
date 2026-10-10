#!/usr/bin/env bash
# Patch 92 voor hrmforce-site: image en performer in de eventschema.
#
#   bash toepassen-92.sh
#
# Search Console (Events) meldde bij alle 30 trainingsdata twee ontbrekende
# velden: image en performer. Beide staan nu in de EducationEvent-schema van
# de trainingspagina, in alle talen.
#
# 1. image: de trainingsfoto van de pagina en het deelbeeld van 1200 bij 630.
# 2. performer: de trainers Floor, Ardine en Michael, als Person met worksFor
#    hrmforce. Heeft een datum in de kalenderdata een veld trainer, dan staat
#    alleen die naam erin.
set -euo pipefail
cd "$(dirname "$0")"
[ -f src/components/Trainingen.astro ] || { echo "Draai dit vanuit de hoofdmap van hrmforce-site."; exit 1; }

cat > /tmp/92.b64 <<'B64EOF'
ZGlmZiAtLWdpdCBhL3NyYy9jb21wb25lbnRzL1RyYWluaW5nZW4uYXN0cm8gYi9zcmMvY29tcG9u
ZW50cy9UcmFpbmluZ2VuLmFzdHJvCmluZGV4IGZiMWYxYzIuLjYxN2I4MjQgMTAwNjQ0Ci0tLSBh
L3NyYy9jb21wb25lbnRzL1RyYWluaW5nZW4uYXN0cm8KKysrIGIvc3JjL2NvbXBvbmVudHMvVHJh
aW5pbmdlbi5hc3RybwpAQCAtMjUsMTEgKzI1LDI1IEBAIGNvbnN0IGNhcmRIcmVmID0gKG5sSHJl
ZikgPT4gKGxhbmcgPT09ICJubCIgPyBubEhyZWYgOiBjb250YWN0SHJlZik7CiAvLyBFdmVudC1z
Y2hlbWEgdm9vciBkZSBjZXJ0aWZpY2F0aWV0cmFpbmluZ2VuIGRpZSBub2cga29tZW4uIFpvbmRl
ciBkYXRhIHN0YWF0CiAvLyBlciBuaWV0cyBpbiBkZSBicm9uY29kZSwgd2FudCBlZW4gbGVnZSBs
aWpzdCBldmVuZW1lbnRlbiBoZWxwdCBuaWVtYW5kLgogY29uc3Qga2FsZW5kZXJVcmwgPSBuZXcg
VVJMKGxvY2FsaXplUGF0aCgiL2Fkdmllcy90cmFpbmluZ2VuLyIsIGxhbmcpICsgIiNrYWxlbmRl
ciIsIEFzdHJvLnNpdGUgfHwgImh0dHBzOi8vaHJtZm9yY2UuY29tIikuaHJlZjsKK2NvbnN0IHNp
dGVCYXNlID0gQXN0cm8uc2l0ZSB8fCAiaHR0cHM6Ly9ocm1mb3JjZS5jb20iOworLy8gQWZiZWVs
ZGluZ2VuIHZvb3IgZGUgcmljaCByZXN1bHQ6IGRlIHRyYWluaW5nc2ZvdG8gdmFuIGRlemUgcGFn
aW5hIGVuIGhldAorLy8gYWxnZW1lbmUgZGVlbGJlZWxkIHZhbiAxMjAwIGJpaiA2MzAuCitjb25z
dCBldmVudEltYWdlcyA9IFsKKyAgbmV3IFVSTCgiL21lZGlhL3dwLWNvbnRlbnQvdXBsb2Fkcy8y
MDIwLzEyL2Fzcy1hZmIyLndlYnAiLCBzaXRlQmFzZSkuaHJlZiwKKyAgbmV3IFVSTCgiL21lZGlh
L3N0b2NrL29nLWhybWZvcmNlLmpwZyIsIHNpdGVCYXNlKS5ocmVmLAorXTsKKy8vIERlIHRyYWlu
ZXJzIHZhbiBocm1mb3JjZS4gU3RhYXQgZXIgYmlqIGVlbiBkYXR1bSBlZW4gdmVsZCB0cmFpbmVy
IGluIGRlCisvLyBrYWxlbmRlcmRhdGEsIGRhbiBrb210IGFsbGVlbiBkaWUgbmFhbSBpbiBkZSBz
Y2hlbWEuCitjb25zdCBUUkFJTkVSUyA9IFsiRmxvb3IiLCAiQXJkaW5lIiwgIk1pY2hhZWwiXTsK
K2NvbnN0IGhybWZvcmNlT3JnID0geyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgbmFtZTogImhy
bWZvcmNlIiwgdXJsOiAiaHR0cHM6Ly9ocm1mb3JjZS5jb20vIiB9OworY29uc3QgcGVyZm9ybWVy
VmFuID0gKHIpID0+CisgIChyLnRyYWluZXIgPyBbci50cmFpbmVyXSA6IFRSQUlORVJTKS5tYXAo
KG5hbWUpID0+ICh7ICJAdHlwZSI6ICJQZXJzb24iLCBuYW1lLCB3b3Jrc0ZvcjogaHJtZm9yY2VP
cmcgfSkpOwogY29uc3QgZXZlbnRMZCA9IHQua2FsZW5kZXIubWFwKChyKSA9PiAoewogICAiQGNv
bnRleHQiOiAiaHR0cHM6Ly9zY2hlbWEub3JnIiwKICAgIkB0eXBlIjogIkVkdWNhdGlvbkV2ZW50
IiwKICAgbmFtZTogYCR7ci5zb29ydH0gaHJtZm9yY2VgLAogICBkZXNjcmlwdGlvbjogdC5jZXJ0
UCwKKyAgaW1hZ2U6IGV2ZW50SW1hZ2VzLAogICBzdGFydERhdGU6IHIuc3RhcnQsCiAgIGVuZERh
dGU6IHIuZWluZCwKICAgZXZlbnRBdHRlbmRhbmNlTW9kZTogImh0dHBzOi8vc2NoZW1hLm9yZy9P
ZmZsaW5lRXZlbnRBdHRlbmRhbmNlTW9kZSIsCkBAIC00Nyw3ICs2MSw4IEBAIGNvbnN0IGV2ZW50
TGQgPSB0LmthbGVuZGVyLm1hcCgocikgPT4gKHsKICAgICAgIGFkZHJlc3NDb3VudHJ5OiBUUl9M
T0NBVElFLmxhbmQsCiAgICAgfSwKICAgfSwKLSAgb3JnYW5pemVyOiB7ICJAdHlwZSI6ICJPcmdh
bml6YXRpb24iLCBuYW1lOiAiaHJtZm9yY2UiLCB1cmw6ICJodHRwczovL2hybWZvcmNlLmNvbS8i
IH0sCisgIG9yZ2FuaXplcjogaHJtZm9yY2VPcmcsCisgIHBlcmZvcm1lcjogcGVyZm9ybWVyVmFu
KHIpLAogICBvZmZlcnM6IHsKICAgICAiQHR5cGUiOiAiT2ZmZXIiLAogICAgIHByaWNlOiByLmJl
ZHJhZywK
B64EOF
base64 -d /tmp/92.b64 > /tmp/92.patch
if grep -q "performerVan" src/components/Trainingen.astro; then
  echo "De patch stond er al in, alleen het vastleggen nog."
else
  git apply /tmp/92.patch
fi
rm -f /tmp/92.b64 /tmp/92.patch
git add -A
git commit -q -F - <<'MSGEOF'
Image en performer in de eventschema van de trainingen

Search Console meldde bij alle 30 trainingsdata dat image en performer
ontbraken. De EducationEvent-schema krijgt nu de trainingsfoto en het
deelbeeld als image, en de trainers Floor, Ardine en Michael als performer.
Een datum met een eigen veld trainer krijgt alleen die naam.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Bfs2eiNEbPJeSq5s5jgwAw
MSGEOF
git push
echo "Klaar. Patch 92 staat op main."
