#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Controleert een nieuwe taal, na `npx astro build`.

    python3 scripts/taalcontrole.py <taal> [dist-map]

Zeven controles, in de volgorde waarin ze fout gaan. Elke controle meldt zelf
wat er mis is en waar het vandaan komt. Afsluitcode 1 als er iets hards fout is.
"""
import json, os, re, sys, html, collections

TAAL = (sys.argv[1] if len(sys.argv) > 1 else "").strip()
DIST = sys.argv[2] if len(sys.argv) > 2 else "dist"
if not TAAL:
    sys.exit("Gebruik: python3 scripts/taalcontrole.py <taal> [dist-map]")
if TAAL == "nl":
    sys.exit("Nederlands is de brontaal en staat zonder voorvoegsel op de wortel; "
             "deze controle is voor de talen daarnaast.")

BRONTALEN = ["nl", "en", "de", "fr", "es", "ro"]

# Een Nederlandse zin herken je aan de functiewoorden. Productnamen, adressen en
# boektitels hebben die niet, en die horen ook gelijk te blijven.
STOPWOORDEN = re.compile(
    r"\b(de|het|een|je|jij|we|wij|van|en|voor|met|in|op|is|zijn|dat|die|niet|"
    r"wordt|worden|kun|kunt|kan|aan|bij|naar|over|door|uit|als|maar|ook|per|"
    r"zodat|omdat|waarin|welke)\b", re.I)

def nederlands(x):
    """Lijkt dit een Nederlandse zin, en niet een naam of een adres."""
    if "|" in x or "@" in x: return False
    if len(x.split()) < 5: return False
    return len(STOPWOORDEN.findall(x)) >= 2
fouten, waarschuwingen = [], []

def kop(n, t):
    print("\n%d. %s" % (n, t))

def fout(t):
    fouten.append(t); print("   FOUT  " + t)

def let(t):
    waarschuwingen.append(t); print("   let op  " + t)

def ok(t):
    print("   ok  " + t)

# ---------------------------------------------------------------- 1. de lijst
kop(1, "Staat de taal in src/i18n/ui.js")
ui = open("src/i18n/ui.js", encoding="utf-8").read()
m = re.search(r"export const languages = \{([^}]*)\}", ui)
codes = re.findall(r"(\w+):", m.group(1)) if m else []
if TAAL in codes:
    ok("languages bevat %s (%d talen in totaal)" % (TAAL, len(codes)))
else:
    fout("languages in src/i18n/ui.js kent %s niet" % TAAL)
if re.search(r"\n  %s: \{ naam:" % TAAL, ui):
    ok("taalInfo heeft een eigen naam voor %s" % TAAL)
else:
    fout("taalInfo in src/i18n/ui.js mist de naam van %s in die taal zelf" % TAAL)

# ------------------------------------------------------- 2. de edge-functions
kop(2, "Staat de taal in de drie lijsten onder functions/")
for pad, patroon in [
    ("functions/api/aanvraag.js", r"const TALEN = \[([^\]]*)\]"),
    ("functions/api/oefenmateriaal.js", r"const TALEN = \[([^\]]*)\]"),
    ("functions/api/checkout.js", r"const locale = \[([^\]]*)\]"),
]:
    s = open(pad, encoding="utf-8").read()
    mm = re.search(patroon, s)
    lijst = re.findall(r'"(\w+)"', mm.group(1)) if mm else []
    if TAAL in lijst:
        ok("%s kent %s" % (pad, TAAL))
    else:
        fout("%s mist %s; een aanvraag uit die taal valt terug op het Nederlands" % (pad, TAAL))

# ------------------------------------------------------ 3. het vertaalbestand
kop(3, "Het vertaalbestand")
pad = "src/data/translations-content/%s.json" % TAAL
if not os.path.exists(pad):
    fout("%s bestaat niet; de vertaalronde is niet gedraaid" % pad)
    vert = {}
else:
    vert = json.load(open(pad, encoding="utf-8"))
    ok("%s met %d zinnen" % (pad, len(vert)))

zelfde = [k for k, v in vert.items() if k == v]
zinnen = [k for k in zelfde if nederlands(k)]
woorden = [k for k in zelfde if k not in zinnen]
if zinnen:
    fout("%d hele zinnen kwamen onvertaald terug:" % len(zinnen))
    for k in zinnen[:8]: print("          " + k[:100])
else:
    ok("geen onvertaalde zinnen")
if woorden:
    let("%d losse woorden zijn gelijk gebleven; merk- en vragenlijstnamen horen "
        "hier thuis, Nederlandse woorden niet:" % len(woorden))
    print("          " + ", ".join(sorted(woorden)[:25]))

# ----------------------------------------------- 4. mailteksten voor de edge
kop(4, "De automatische mails buiten de brontalen")
pad = "functions/_lib/mailteksten.js"
s = open(pad, encoding="utf-8").read() if os.path.exists(pad) else ""
if TAAL in BRONTALEN:
    ok("%s is een brontaal; de mails staan in de databestanden zelf" % TAAL)
elif ('"%s"' % TAAL) not in s:
    fout("%s kent %s niet. Draai: node scripts/genereer-mailteksten.mjs" % (pad, TAAL))
else:
    blok = s[s.index('"%s"' % TAAL):]
    waarden = re.findall(r'"\w+": "((?:[^"\\\\]|\\\\.)*)"', blok.split("},")[0])
    nl_rest = [v for v in waarden if nederlands(v)]
    if nl_rest:
        fout("%s heeft voor %s nog Nederlandse zinnen; draai het script opnieuw "
             "na de vertaalronde" % (pad, TAAL))
        for r in nl_rest[:4]: print("          " + r.strip()[:100])
    else:
        ok("de mailteksten staan vertaald in %s" % pad)

# --------------------------------------------------------- 5. de taalnamen
kop(5, "De 29 taalnamen in de taalkeuze")
ct = open("src/data/component-teksten.js", encoding="utf-8").read()
mm = re.search(r"export const SHOP_CAND_I18N = \{.*?\n  nl: \{.*?langs: \[(.*?)\], levels", ct, re.S)
namen = [x[1] for x in re.findall(r'\["([^"]*)","([^"]*)"\]', mm.group(1))] if mm else []
if not namen:
    fout("de taalnamen staan niet meer in SHOP_CAND_I18N")
elif TAAL in BRONTALEN:
    ok("brontaal: de namen staan met de hand in component-teksten.js")
else:
    mist = [n for n in namen if vert.get(n) in (None, n)]
    if mist:
        fout("%d van de %d taalnamen zijn niet vertaald of gelijk gebleven. "
             "DeepL leest korte namen als Lets en Ests soms verkeerd:" % (len(mist), len(namen)))
        print("          " + ", ".join(mist))
    else:
        ok("alle %d taalnamen hebben een eigen vertaling" % len(namen))

# ------------------------------------------------- 6. Nederlands op de pagina
def zichtbaar(p):
    s = open(p, encoding="utf-8").read()
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", s, flags=re.S)
    return [html.unescape(x).strip() for x in re.sub(r"<[^>]+>", "\n", s).split("\n")]

def telt(x):
    return len(x) > 24 and re.search(r"[a-z]{4}", x) and not x.startswith(("http", "/", "{"))

kop(6, "Nederlandse tekst op de pagina's van %s" % TAAL)
if not os.path.isdir(os.path.join(DIST, TAAL)):
    fout("%s/%s bestaat niet; is de bouw gedraaid?" % (DIST, TAAL))
else:
    treffers = collections.defaultdict(list)
    bekeken = 0
    for wortel, _, files in os.walk(os.path.join(DIST, TAAL)):
        for f in files:
            if f != "index.html": continue
            pt = os.path.join(wortel, f)
            rel = os.path.relpath(pt, os.path.join(DIST, TAAL))
            nlp = os.path.join(DIST, rel)
            if not os.path.exists(nlp): continue
            bekeken += 1
            nlset = set(x for x in zichtbaar(nlp) if telt(x))
            for x in zichtbaar(pt):
                if telt(x) and x in nlset: treffers[x].append(rel)
    # adressen, literatuur en contactgegevens horen gelijk te zijn
    negeer = re.compile(r"(service@|hrmforce\.com|Copyright|KvK|IBAN|BTW|\(\d{4}\)\.|&)")
    echt = {k: v for k, v in treffers.items() if not negeer.search(k)}
    echt = {k: v for k, v in echt.items() if nederlands(k)}
    if echt:
        let("%d zinnen staan letterlijk gelijk aan het Nederlands (%d pagina's "
            "bekeken). Loop ze na: adressen, boektitels en literatuurverwijzingen "
            "horen gelijk te zijn, lopende zinnen niet:" % (len(echt), bekeken))
        for k, v in sorted(echt.items(), key=lambda x: -len(x[1]))[:10]:
            print("          [%d pagina's] %s" % (len(v), k[:90]))
    else:
        ok("geen Nederlandse resttekst op %d pagina's" % bekeken)

# ----------------------------------------------------- 7. links en bestanden
kop(7, "Links en bestandsaantal")
if os.path.isdir(DIST):
    bestaat = set()
    for wortel, _, files in os.walk(DIST):
        for f in files:
            p = os.path.join(wortel, f)[len(DIST):]
            bestaat.add(p)
            if f == "index.html": bestaat.add(p[: -len("index.html")])
    red = []
    rp = os.path.join(DIST, "_redirects")
    if os.path.exists(rp):
        for r in open(rp, encoding="utf-8"):
            r = r.strip()
            if r and not r.startswith("#"): red.append(r.split()[0])
    wild = [r[:-1] for r in red if r.endswith("*")]
    exact = set(r for r in red if not r.endswith("*"))
    # Paden die een Cloudflare-function uitserveert staan niet in dist. De namen
    # van de mappen onder functions/ zijn precies die paden.
    dynamisch = ["/%s/" % d for d in os.listdir("functions")
                 if os.path.isdir(os.path.join("functions", d)) and not d.startswith("_")]
    def goed(p):
        return (p in bestaat or p in exact or any(p.startswith(w) for w in wild)
                or any(p.startswith(d) for d in dynamisch))

    kapot, nl_link = collections.Counter(), collections.Counter()
    for wortel, _, files in os.walk(os.path.join(DIST, TAAL)):
        for f in files:
            if f != "index.html": continue
            s = open(os.path.join(wortel, f), encoding="utf-8").read()
            # de taalwisselaar wijst met opzet naar elke taal; die anchors
            # dragen allemaal een hreflang, net als de alternate-regels in de kop
            s = re.sub(r'<link rel="alternate".*?>', "", s)
            s = re.sub(r'<a [^>]*hreflang=[^>]*>', "<a>", s)
            for h in re.findall(r'href="(/[^"#?]*)"', s):
                if not goed(h): kapot[h] += 1
                elif h.endswith("/") and not h.startswith("/%s/" % TAAL) and h != "/":
                    # alleen paginalinks; lettertypen, beelden en css zijn taalloos
                    eerste = h.split("/")[1] if h.count("/") > 1 else ""
                    if eerste not in codes: nl_link[h] += 1
    if kapot:
        fout("%d kapotte interne links:" % len(kapot))
        for h, n in kapot.most_common(8): print("          %sx  %s" % (n, h))
    else:
        ok("geen kapotte interne links")
    if nl_link:
        let("%d links zonder taalvoorvoegsel; die zetten de bezoeker terug in "
            "het Nederlands:" % len(nl_link))
        for h, n in nl_link.most_common(8): print("          %sx  %s" % (n, h))
    else:
        ok("elke interne link houdt de bezoeker in zijn taal")

    # Wat een function uitserveert gaat niet mee naar Cloudflare. De
    # functieprofiel-pdf's staan in .gitignore en komen uit R2, maar liggen in
    # de Codespace wel op schijf; zonder deze aftrek telt dat 900 te veel.
    totaal, overgeslagen = 0, collections.Counter()
    for wortel, _, fs in os.walk(DIST):
        rel = "/" + os.path.relpath(wortel, DIST).replace(os.sep, "/").lstrip(".").lstrip("/")
        hoort_bij = next((d for d in dynamisch if rel.startswith(d.rstrip("/"))), None)
        if hoort_bij: overgeslagen[hoort_bij] += len(fs)
        else: totaal += len(fs)
    print("   %d bestanden gaan mee naar Cloudflare (gratis plan: 20.000, "
          "betaald: 100.000)" % totaal)
    for d, n in sorted(overgeslagen.items()):
        if n: print("   %d bestanden onder %s niet meegeteld; die komen uit R2" % (n, d))
    if totaal > 19000: let("dicht bij de limiet van het gratis plan")

print("\n%s  %d fout, %d aandachtspunt%s" % (
    "NIET IN ORDE" if fouten else "IN ORDE", len(fouten), len(waarschuwingen),
    "" if len(waarschuwingen) == 1 else "en"))
sys.exit(1 if fouten else 0)
