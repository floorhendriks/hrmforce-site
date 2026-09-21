// Onderhoud van externe verwijzingen in de artikelteksten uit Sanity.
// Gecontroleerd op 21-09-2026; draai de controle opnieuw met
// node scripts/hsf-controleer-links.mjs na het bouwen.

import { MBTI_FIGUUR } from "../../scripts/hsf-build-mbti-figuur.mjs";

/** Verplaatste pagina's: oude URL naar de gecontroleerde nieuwe URL. */
export const VERHUISD = {
  "https://www.cbs.nl/nl-nl/onze-diensten/methoden/classificaties/onderwijs-en-beroepen/beroepenindeling-roa-cbs-2014--brc-2014--":
    "https://www.cbs.nl/nl-nl/onze-diensten/methoden/begrippen/beroepenindeling-roa-cbs-2014--brc-2014--",
};

/** Pagina's die een 404 geven. De link verdwijnt, de tekst blijft staan.
 *  Vind je de juiste bron terug, verplaats de URL dan naar VERHUISD. */
export const DOOD = [
  "https://fwg.nl/academy/werkplezier-door-vakmanschap/",
  "https://icenetblog.royalcollege.ca/2017/05/30/canmeds-better-standards-better-physicians-better-care-better-master-builders/",
  "https://radar.avrotros.nl/columns/item/er-is-een-wildgroei-aan-coaches-maar-er-zijn-gelukkig-ook-goede/",
  "https://www.berenschot.nl/artikelen/krapte-arbeidsmarkt-innovatieve-oplossing",
  "https://www.binnenlandsbestuur.nl/sociaal/effectief-systeem-van-werk-naar-werk-de-techniek",
  "https://www.bl.uk/people/w-edwards-deming#",
  "https://www.mensenrechten.nl/publicaties/detail/9a3ab1a92cb94ff0be6ad84f426b9bb4",
  "https://www.monitorarbeid.tno.nl/nieuws/1-op-de-3-gevallen-ziekteverzuim-door-werkstress",
  "https://www.netassessor.nl/detector/test.jsp?language=nl",
  "https://www.ontdekdeouderenzorg.nl/zij-instromers",
  "https://www.rijksoverheid.nl/actueel/nieuws/2023/01/24/discriminatie-op-arbeidsmarkt-blijft-hardnekkig-probleem",
  "https://www.ser.nl/-/media/ser/downloads/adviezen/2023/gelijkekansen-arbeidsmarkt.pdf",
  "https://www.shldirect.com/nl/personality_questionnaire_examples.html",
  "https://www.wvdws.nl/mentaal-en-fysiek-sterk",
];

/** Beelden die niet meer bestaan. Staat er een vervanger bij, dan komt die in
 *  de plaats; anders vervalt het img-element.
 *  De eerste is een verlopen tijdelijke URL. De tweede was een Wikimedia-thumb
 *  van een tif-bestand dat niet meer wordt gegenereerd; daarvoor in de plaats
 *  komt een eigen tekening, per taal, uit scripts/hsf-build-mbti-figuur.mjs. */
export const DODE_BEELDEN = [
  { herken: "sdmntprnortheu.oaiusercontent.com", vervang: null },
  {
    herken: "upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ETH-BIB-Jung",
    vervang: (taal) => {
      const d = MBTI_FIGUUR[taal] || MBTI_FIGUUR.nl;
      return `<figure class="kc-fig"><img src="/media/illustraties/mbti-voorkeurparen-${
        MBTI_FIGUUR[taal] ? taal : "nl"
      }.svg" alt="${d.alt.replace(/"/g, "&quot;")}" width="900" height="490" loading="lazy" decoding="async"><figcaption>${
        d.bijschrift
      } <span class="kc-fig-bron">Illustratie: hrmforce</span></figcaption></figure>`;
    },
  },
];

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Past alle drie de lijsten toe op een stuk artikel-HTML. */
export function herstelLinks(html, taal = "nl") {
  let h = html || "";
  for (const [oud, nieuw] of Object.entries(VERHUISD)) {
    h = h.split(oud).join(nieuw);
  }
  for (const { herken, vervang } of DODE_BEELDEN) {
    const nieuw = typeof vervang === "function" ? vervang(taal) : vervang || "";
    h = h.replace(new RegExp(`<img\\b[^>]*src="[^"]*${esc(herken)}[^"]*"[^>]*>`, "gi"), () => nieuw);
  }
  for (const url of DOOD) {
    // <a href="dood" ...>tekst</a> wordt tekst
    h = h.replace(new RegExp(`<a\\b[^>]*href="${esc(url)}"[^>]*>([\\s\\S]*?)</a>`, "gi"), "$1");
  }
  return h;
}
