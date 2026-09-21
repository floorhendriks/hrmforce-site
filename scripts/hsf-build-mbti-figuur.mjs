// Tekent het MBTI-diagram per taal naar public/media/illustraties/.
// Draaien met: npm run hsf:figuren
import { mkdir, writeFile } from "node:fs/promises";

export const MBTI_FIGUUR = {
  nl: { kop: "De vier voorkeurparen van MBTI",
    lead: "Per paar kies je één kant. Vier keuzes leveren zestien typen op.",
    paren: [["Extraversie","Introversie","waar richt je je aandacht"],["Sensing","Intuïtie","hoe neem je informatie op"],["Thinking","Feeling","waarop baseer je een besluit"],["Judging","Perceiving","hoe ga je om met afronden"]],
    voet: "De scheiding in het midden is hard: er is geen tussenpositie. Een Big Five-vragenlijst meet dezelfde thema's op een doorlopende schaal.",
    bijschrift: "De vier voorkeurparen. Per paar kies je een kant, een tussenpositie is er niet.",
    alt: "De vier voorkeurparen van MBTI: extraversie of introversie, sensing of intuitie, thinking of feeling, judging of perceiving. Vier keuzes leveren zestien typen op." },
  en: { kop: "The four MBTI preference pairs",
    lead: "You pick one side per pair. Four choices produce sixteen types.",
    paren: [["Extraversion","Introversion","where you direct attention"],["Sensing","Intuition","how you take in information"],["Thinking","Feeling","what you base a decision on"],["Judging","Perceiving","how you handle closure"]],
    voet: "The split in the middle is hard: there is no position in between. A Big Five questionnaire measures the same themes on a continuous scale.",
    bijschrift: "The four preference pairs. One side per pair, with no position in between.",
    alt: "The four MBTI preference pairs: extraversion or introversion, sensing or intuition, thinking or feeling, judging or perceiving. Four choices produce sixteen types." },
  de: { kop: "Die vier Präferenzpaare des MBTI",
    lead: "Pro Paar wählen Sie eine Seite. Vier Entscheidungen ergeben sechzehn Typen.",
    paren: [["Extraversion","Introversion","worauf Sie achten"],["Sensing","Intuition","wie Sie Informationen aufnehmen"],["Thinking","Feeling","worauf Sie Entscheidungen stützen"],["Judging","Perceiving","wie Sie Dinge abschließen"]],
    voet: "Die Trennung in der Mitte ist hart: eine Zwischenposition gibt es nicht. Ein Big-Five-Fragebogen misst dieselben Themen auf einer durchgehenden Skala.",
    bijschrift: "Die vier Präferenzpaare. Pro Paar eine Seite, eine Zwischenposition gibt es nicht.",
    alt: "Die vier Präferenzpaare des MBTI: Extraversion oder Introversion, Sensing oder Intuition, Thinking oder Feeling, Judging oder Perceiving. Vier Entscheidungen ergeben sechzehn Typen." },
  fr: { kop: "Les quatre paires de préférences du MBTI",
    lead: "Vous choisissez un côté par paire. Quatre choix donnent seize types.",
    paren: [["Extraversion","Introversion","où vous portez votre attention"],["Sensation","Intuition","comment vous recueillez l'information"],["Pensée","Sentiment","sur quoi vous fondez une décision"],["Jugement","Perception","comment vous concluez"]],
    voet: "La séparation au milieu est nette : il n'y a pas de position intermédiaire. Un questionnaire Big Five mesure les mêmes thèmes sur une échelle continue.",
    bijschrift: "Les quatre paires de préférences. Un côté par paire, sans position intermédiaire.",
    alt: "Les quatre paires de préférences du MBTI : extraversion ou introversion, sensation ou intuition, pensée ou sentiment, jugement ou perception. Quatre choix donnent seize types." },
  es: { kop: "Los cuatro pares de preferencias del MBTI",
    lead: "Se elige un lado por par. Cuatro elecciones dan dieciséis tipos.",
    paren: [["Extraversión","Introversión","dónde diriges la atención"],["Sensación","Intuición","cómo recoges la información"],["Pensamiento","Sentimiento","en qué basas una decisión"],["Juicio","Percepción","cómo cierras los asuntos"]],
    voet: "La separación del centro es tajante: no hay posición intermedia. Un cuestionario Big Five mide los mismos temas en una escala continua.",
    bijschrift: "Los cuatro pares de preferencias. Un lado por par, sin posición intermedia.",
    alt: "Los cuatro pares de preferencias del MBTI: extraversión o introversión, sensación o intuición, pensamiento o sentimiento, juicio o percepción. Cuatro elecciones dan dieciséis tipos." },
  ro: { kop: "Cele patru perechi de preferințe MBTI",
    lead: "Alegeți o parte din fiecare pereche. Patru alegeri dau șaisprezece tipuri.",
    paren: [["Extraversiune","Introversiune","unde vă îndreptați atenția"],["Senzorial","Intuitiv","cum preluați informația"],["Gândire","Simțire","pe ce vă bazați o decizie"],["Judecată","Percepție","cum finalizați lucrurile"]],
    voet: "Separarea din mijloc este netă: nu există o poziție intermediară. Un chestionar Big Five măsoară aceleași teme pe o scară continuă.",
    bijschrift: "Cele patru perechi de preferințe. O parte din fiecare pereche, fără poziție intermediară.",
    alt: "Cele patru perechi de preferințe MBTI: extraversiune sau introversiune, senzorial sau intuitiv, gândire sau simțire, judecată sau percepție. Patru alegeri dau șaisprezece tipuri." },
};

const e = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Breekt de voetnoot over twee regels op een woordgrens.
function tweeRegels(tekst, maxTekens) {
  if (tekst.length <= maxTekens) return [tekst, ""];
  const knip = tekst.lastIndexOf(" ", maxTekens);
  return [tekst.slice(0, knip), tekst.slice(knip + 1)];
}

export function figuurSvg(taal) {
  const d = MBTI_FIGUUR[taal] || MBTI_FIGUUR.nl;
  const rijen = d.paren.map(([links, rechts, hint], i) => {
    const y = 122 + i * 74;
    return `    <rect x="48" y="${y}" width="390" height="54" fill="#eef3fa" stroke="#e3eaf2"/>
    <rect x="438" y="${y}" width="390" height="54" fill="#ffffff" stroke="#e3eaf2"/>
    <rect x="435" y="${y - 8}" width="6" height="70" fill="#d95d15"/>
    <text x="72" y="${y + 33}" font-weight="600" fill="#0e468c">${e(links)}</text>
    <text x="462" y="${y + 33}" font-weight="600">${e(rechts)}</text>
    <text x="852" y="${y + 33}" text-anchor="end" font-size="12.5" fill="#5a6b7b">${e(hint)}</text>`;
  }).join("\n\n");
  const [v1, v2] = tweeRegels(d.voet, 108);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 490" role="img" aria-label="${e(d.alt)}">
  <style>
    .t  { font-family: "IBM Plex Sans", Arial, sans-serif; }
    .kop{ font-family: Archivo, "Arial Narrow", Arial, sans-serif; font-weight: 700; }
  </style>
  <rect width="900" height="490" fill="#ffffff"/>
  <rect x="0" y="0" width="900" height="6" fill="#0e468c"/>

  <text class="kop" x="48" y="62" font-size="23" fill="#0e468c">${e(d.kop)}</text>
  <text class="t" x="48" y="90" font-size="15" fill="#5a6b7b">${e(d.lead)}</text>

  <g class="t" font-size="16" fill="#26313d">
${rijen}
  </g>

  <rect x="48" y="428" width="46" height="3" fill="#fcc11b"/>
  <line x1="48" y1="429.5" x2="852" y2="429.5" stroke="#e3eaf2" stroke-width="1"/>
  <text class="t" x="48" y="453" font-size="13.5" fill="#5a6b7b">${e(v1)}</text>
  ${v2 ? `<text class="t" x="48" y="472" font-size="13.5" fill="#5a6b7b">${e(v2)}</text>` : ""}
</svg>
`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await mkdir("public/media/illustraties", { recursive: true });
  for (const taal of Object.keys(MBTI_FIGUUR)) {
    await writeFile(`public/media/illustraties/mbti-voorkeurparen-${taal}.svg`, figuurSvg(taal), "utf8");
  }
  console.log(`${Object.keys(MBTI_FIGUUR).length} figuren geschreven naar public/media/illustraties/`);
}
