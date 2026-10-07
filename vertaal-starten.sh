#!/usr/bin/env bash
# Zet de vertaalweg recht en draait de eerste drie talen.
# Uitvoeren vanuit de hoofdmap van de repo in de Codespace:
#   bash vertaal-starten.sh
set -e

cd "$(git rev-parse --show-toplevel)"
git fetch origin && git checkout main && git pull --ff-only

# 1. De aanvulhulp gebruikt een Vite-functie om de vertaalbestanden te vinden.
#    Buiten Vite bestaat die niet, en dan liep het vertaalscript op elk datafile
#    stuk. Deze stap zet de aanroep in een try. Al gedaan? Dan slaat hij over.
python3 - <<'PY'
import base64, pathlib
p = pathlib.Path('src/data/vertaal-inhoud.js')
s = p.read_text(encoding='utf-8')
oud = base64.b64decode('Y29uc3QgVkVSVEFMSU5HRU4gPSBpbXBvcnQubWV0YS5nbG9iKCIuL3RyYW5zbGF0aW9ucy1jb250ZW50LyouanNvbiIsIHsgZWFnZXI6IHRydWUgfSk7').decode()
nieuw = base64.b64decode('Ly8gVml0ZSB6ZXQgZGV6ZSBhYW5yb2VwIHRpamRlbnMgZGUgYm91dyBvbSBpbiBlZW4gdmFzdGUgbGlqc3QuIEJ1aXRlbiBWaXRlLAovLyB6b2FscyBpbiBzY3JpcHRzL2hzZi10cmFuc2xhdGUtY29udGVudC5tanMgZGF0IGRlIGRhdGFmaWxlcyBtZXQga2FhbCBub2RlCi8vIGlubGVlc3QsIGJlc3RhYXQgaW1wb3J0Lm1ldGEuZ2xvYiBuaWV0LiBWYW5kYWFyIGRlIHRyeTogZGFhciBibGlqZnQgZGUgbGlqc3QKLy8gbGVlZyBlbiBnZWVmdCB2dWxBYW4gZGUgZGF0YSBvbnZlcmFuZGVyZCB0ZXJ1Zy4KbGV0IFZFUlRBTElOR0VOID0ge307CnRyeSB7CiAgVkVSVEFMSU5HRU4gPSBpbXBvcnQubWV0YS5nbG9iKCIuL3RyYW5zbGF0aW9ucy1jb250ZW50LyouanNvbiIsIHsgZWFnZXI6IHRydWUgfSk7Cn0gY2F0Y2ggewogIFZFUlRBTElOR0VOID0ge307Cn0=').decode()
if oud in s:
    p.write_text(s.replace(oud, nieuw), encoding='utf-8')
    print('aanvulhulp aangepast')
elif nieuw.splitlines()[-1] in s and 'let VERTALINGEN' in s:
    print('aanvulhulp stond al goed')
else:
    raise SystemExit('onverwachte inhoud in src/data/vertaal-inhoud.js, stoppen')
PY

# 2. Controle: leest het script de teksten nu wel?
echo
echo "== controle, zonder DeepL aan te roepen =="
HSF_ESTIMATE=1 node scripts/hsf-translate-content.mjs pl da sv

# 3. De echte vertaling. Dit duurt een paar minuten per taal.
echo
echo "== vertalen =="
node scripts/hsf-translate-content.mjs pl da sv

echo
echo "== resultaat =="
ls -la src/data/translations-content/
