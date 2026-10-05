// Kennisartikelen die onder twee adressen op de site stonden.
//
// Bij de migratie uit WordPress kreeg een deel van de artikelen een tweede,
// genest adres met de oude categorie erin (/kenniscentrum/ontwikkeling/...).
// Die tweede versie bevat alleen het woord "Verplaatst" en verwijst naar het
// echte artikel. Ze stonden wel in _redirects, alleen past Cloudflare Pages
// maar een deel van dat bestand toe, dus ze bleven als gewone pagina in de
// lucht en concurreerden in Google met het artikel zelf.
//
// Door ze hier te noemen bouwt de site ze niet meer. De terugvalpagina uit
// npm run hsf:redirects vangt het oude adres op, met noindex en een canonical
// naar het artikel dat blijft.
export const DUBBELE_ARTIKELEN = {
  "/kenniscentrum/onderwijs/werkdruk-onderwijs/":
    "/kenniscentrum/werkdruk-onderwijs/",
  "/kenniscentrum/ontwikkeling/krachtige-talentontwikkeling-begint-met-onbekend-talent-verkennen/":
    "/kenniscentrum/krachtige-talentontwikkeling-begint-met-onbekend-talent-verkennen/",
  "/kenniscentrum/ontwikkeling/lessen-voor-een-goede-hr-vlootschouw-met-ontwikkelaanpak/":
    "/kenniscentrum/lessen-voor-een-goede-hr-vlootschouw-met-ontwikkelaanpak/",
  "/kenniscentrum/ontwikkeling/piramide-van-lencioni/":
    "/assessments/lencioni-teamdynamiek/",
};

// De paden zoals de catch-all route ze kent: zonder schuine streep ervoor en erachter.
export const DUBBELE_PADEN = new Set(
  Object.keys(DUBBELE_ARTIKELEN).map((p) => p.replace(/^\/+|\/+$/g, ""))
);
