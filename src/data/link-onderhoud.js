// Onderhoud van externe verwijzingen in de artikelteksten uit Sanity.
// Gecontroleerd op 21-09-2026; draai de controle opnieuw met
// node scripts/hsf-controleer-links.mjs na het bouwen.

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

/** Beelden die niet meer bestaan. Het img-element wordt weggelaten.
 *  De eerste is een verlopen tijdelijke URL, de tweede een Wikimedia-thumb
 *  die van een tif is afgeleid en niet meer wordt gegenereerd. */
export const DODE_BEELDEN = [
  "sdmntprnortheu.oaiusercontent.com",
  "upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ETH-BIB-Jung",
];

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Past alle drie de lijsten toe op een stuk artikel-HTML. */
export function herstelLinks(html) {
  let h = html || "";
  for (const [oud, nieuw] of Object.entries(VERHUISD)) {
    h = h.split(oud).join(nieuw);
  }
  for (const url of DODE_BEELDEN) {
    h = h.replace(new RegExp(`<img\\b[^>]*src="[^"]*${esc(url)}[^"]*"[^>]*>`, "gi"), "");
  }
  for (const url of DOOD) {
    // <a href="dood" ...>tekst</a> wordt tekst
    h = h.replace(new RegExp(`<a\\b[^>]*href="${esc(url)}"[^>]*>([\\s\\S]*?)</a>`, "gi"), "$1");
  }
  return h;
}
