// Pagina's die alleen in de brontalen (nl, en, de, fr, es, ro) bestaan.
//
// Ze komen uit Sanity, waar alleen de brontalen in staan. Een taal daarbuiten
// krijgt hier de Engelse link, anders wijst het menu, de voettekst of een knop
// naar een pagina die niet gebouwd wordt.
//
// De adviespagina's en de HRM-oplossingen stonden hier ook in. Die worden nu in
// elke taal gebouwd uit src/data/advies-detail.js en src/data/oplossingen.js,
// dus ze horen hier niet meer thuis.
//
// Staat in een eigen bestand zodat zowel src/i18n/utils.js als
// src/data/valid-paths.js dezelfde lijst gebruikt.
export const ALLEEN_BRONTAAL = new Set([
  "/advies/overzicht/", "/hrm-oplossingen/career/",
  "/hrmforce/over-ons/", "/hrmforce/referenties/", "/hrmforce/voordelen/",
  "/partners/", "/partners/aanvraag/", "/partners/partner-worden/",
  "/demo/", "/gratis-kleurentest/", "/sectoren/zorg-specialisten-ifms/",
  "/support/algemene-voorwaarden/", "/support/privacy-statement/",
]);

// Het skills framework wordt alleen in de brontalen gebouwd. De dataset staat
// in het Engels, dus een Poolse of Deense kopie zou dezelfde Engelse tekst
// onder een tweede adres zetten: 829 pagina's per taal, zonder dat een bezoeker
// er iets aan heeft. Een taal buiten de brontalen krijgt daarom de Engelse
// versie.
export function alleenBrontaal(pad) {
  if (!pad) return false;
  return ALLEEN_BRONTAAL.has(pad) || pad === "/skills-framework/" || pad.startsWith("/skills-framework/");
}
