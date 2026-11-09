#!/usr/bin/env bash
# Patch 105 voor hrmforce-site (02-11-2026): marketingacties week 44, deel 2.
#
#   bash toepassen-105.sh
#
# Wat dit script doet:
#  1. Footer: de kop "Meer over ons" wordt een link naar Over ons (dode klikken in Clarity).
#  2. Logoslider: de kop "Vertrouwd door 1.200+ organisaties" linkt naar Klantcases.
#  3. Henry-widget laadt pas na de eerste klik, toets of scroll, of na 8 seconden (INP).
#  4. Nieuwe vergelijkingspagina /vergelijking/selection-lab/ (intro in nl, en, de, fr, es, ro).
#
# Het script werkt in een aparte map (git worktree op main), zodat het werk op
# andere branches (zoals talen-it-pt) en niet-opgeslagen wijzigingen ongemoeid blijven.
# Daarna: build ter controle, commit en push naar main. Cloudflare zet de site live.
set -euo pipefail
cd "$(dirname "$0")"
[ -f functions/_middleware.js ] || { echo "Draai dit vanuit de hoofdmap van hrmforce-site."; exit 1; }
ROOT="$(pwd)"
WT=/tmp/wt105
git fetch -q origin
git worktree remove --force "$WT" 2>/dev/null || true
git worktree add -q -f -B patch-105 "$WT" origin/main
ln -sfn "$ROOT/node_modules" "$WT/node_modules"
cd "$WT"

cat > /tmp/patch105.py <<'PYEOF'
import pathlib
R = pathlib.Path('.')
def edit(p, old, new, expect=1):
    f = R / p; s = f.read_text()
    if old not in s and new in s:
        print('al gedaan:', p); return
    n = s.count(old)
    assert n == expect, f'{p}: {n} treffers (verwacht {expect}) voor {old[:60]!r}'
    f.write_text(s.replace(old, new)); print('ok:', p, n)

# 1. Footer: kop "Meer over ons" klikbaar (dode klikken in Clarity)
edit('src/components/Footer.astro', '<h4>{t("footer.more")}</h4>',
     '<h4><a href={L(routes.about)} style="color:inherit;text-decoration:none">{t("footer.more")}</a></h4>')

# 2. Logoslider: kop "Vertrouwd door ..." linkt naar klantcases
edit('src/components/LogoSlider.astro', '{ heading && <p class="ls-h">{heading}</p> }',
     '{ heading && <p class="ls-h"><a href={_casesHref} style="color:inherit;text-decoration:none">{heading} <span aria-hidden="true">&rarr;</span></a></p> }')
edit('src/components/LogoSlider.astro', 'const track = logos.concat(logos);',
     'const track = logos.concat(logos);\nconst _lang = Astro.props.lang || "nl";\nconst _casesHref = _lang === "nl" ? "/klantcases/" : `/${_lang}/klantcases/`;')

# 3. Henry-widget pas laden na eerste interactie of na 8 seconden (INP)
edit('src/layouts/Base.astro', '<script src="/henry-widget.js" is:inline defer></script>',
     '<script is:inline>(function(){var d=false;function l(){if(d)return;d=true;var s=document.createElement("script");s.src="/henry-widget.js";document.body.appendChild(s);}["pointerdown","keydown","scroll","touchstart"].forEach(function(e){addEventListener(e,l,{once:true,passive:true});});setTimeout(l,8000);})();</script>')

# 4. Vergelijkingspagina Selection Lab
f = R / 'src/data/vergelijking-content.js'; s = f.read_text()
if '"selection-lab"' in s:
    print('al gedaan: selection-lab')
else:
    entry = ''' "selection-lab": {
  "name": "Selection Lab",
  "intro": {
   "nl": "Selection Lab is een Nederlands assessmentplatform uit Amsterdam met onder meer een adaptieve intelligentietest, een Big Five-vragenlijst en een AI-chatbot voor de eerste screening, vooral gericht op werving. hrmforce biedt daarnaast instrumenten voor ontwikkeling en teams, 29 taalversies, transparante prijzen via de shop en koppelingen met Nederlandse HR-systemen.",
   "en": "Selection Lab is a Dutch assessment platform from Amsterdam offering, among other things, an adaptive intelligence test, a Big Five questionnaire and an AI chatbot for initial screening, mainly aimed at recruitment. hrmforce also offers instruments for development and teams, 29 language versions, transparent pricing in the shop and integrations with Dutch HR systems.",
   "de": "Selection Lab ist eine niederländische Assessment-Plattform aus Amsterdam mit unter anderem einem adaptiven Intelligenztest, einem Big-Five-Fragebogen und einem KI-Chatbot für die Vorauswahl, vor allem für die Personalgewinnung. hrmforce bietet zusätzlich Instrumente für Entwicklung und Teams, 29 Sprachversionen, transparente Preise im Shop und Anbindungen an HR-Systeme.",
   "fr": "Selection Lab est une plateforme d'évaluation néerlandaise basée à Amsterdam, proposant notamment un test d'intelligence adaptatif, un questionnaire Big Five et un chatbot IA pour la présélection, surtout pour le recrutement. hrmforce propose en plus des outils pour le développement et les équipes, 29 versions linguistiques, des prix transparents dans la boutique et des intégrations avec des systèmes RH.",
   "es": "Selection Lab es una plataforma de evaluación neerlandesa de Ámsterdam que ofrece, entre otros, un test de inteligencia adaptativo, un cuestionario Big Five y un chatbot de IA para la preselección, sobre todo para la selección de personal. hrmforce ofrece además instrumentos para el desarrollo y los equipos, 29 versiones lingüísticas, precios transparentes en la tienda e integraciones con sistemas de RR. HH.",
   "ro": "Selection Lab este o platformă olandeză de evaluare din Amsterdam care oferă, printre altele, un test de inteligență adaptiv, un chestionar Big Five și un chatbot AI pentru preselecție, în special pentru recrutare. hrmforce oferă în plus instrumente pentru dezvoltare și echipe, 29 de versiuni lingvistice, prețuri transparente în magazin și integrări cu sisteme HR."
  }
 },
'''
    k = s.index(' "equalture": {')
    f.write_text(s[:k] + entry + s[k:]); print('ok: selection-lab')
print('KLAAR')
PYEOF
python3 /tmp/patch105.py

echo "Build ter controle (duurt een paar minuten)..."
if ! npm run build > /tmp/build-105.log 2>&1; then
  echo "Build mislukt, er is niets vastgelegd. Zie /tmp/build-105.log"; exit 1
fi
for f in vergelijking/selection-lab/index.html index.html; do
  [ -f "dist/$f" ] || { echo "Ontbreekt na build: dist/$f"; exit 1; }
done
grep -q 'Selection Lab' dist/vergelijking/selection-lab/index.html
grep -q 'henry-widget.js";document.body.appendChild' dist/index.html
echo "Build en controles in orde."

git add src/components/Footer.astro src/components/LogoSlider.astro src/layouts/Base.astro src/data/vergelijking-content.js
git commit -q -F - <<'MSGEOF'
Footerlink, logosliderlink, Henry later laden, vergelijking Selection Lab

Kop "Meer over ons" in de footer en "Vertrouwd door ... organisaties" in de
logoslider zijn klikbaar (dode klikken in Clarity). De Henry-widget laadt pas
na de eerste interactie of na 8 seconden (INP). Nieuwe vergelijkingspagina
/vergelijking/selection-lab/.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_0183TmwWcTdd45vurrFBg1nY
MSGEOF
git fetch -q origin
git rebase -q origin/main
git push -q origin HEAD:main
cd "$ROOT"
git worktree remove --force "$WT"
git branch -D patch-105 >/dev/null 2>&1 || true
echo "Klaar. Patch 105 staat op main; over ca. 5 minuten live."
