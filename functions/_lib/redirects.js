// Redirect-logica voor de oude WordPress-adressen.
//
// Waarom een Function en niet alleen src/data/redirects.txt: Cloudflare Pages past van
// dat bestand alleen de eerste 100 regels toe (gemeten op 12-10-2026: regel 1 t/m
// 100 gaven een 301, regel 101 en verder een 404). De rest werd stil genegeerd,
// waardoor Search Console bijna 400 adressen als 404 meldde.
//
// src/data/redirects.txt blijft de bron. `npm run redirects` zet dat bestand om naar
// functions/_lib/redirect-tabel.js, dat deze module gebruikt.
//
// Volgorde:
//  1. exacte regels, vóór de statische pagina (net als _redirects: een regel wint
//     van een bestand op hetzelfde pad, dus ook van de oude terugvalpagina's)
//  2. pas als de pagina een 404 geeft: de wildcardregels en de algemene
//     WordPress-patronen (feed, paginering, wp-admin, categoriemappen). Zo kan een
//     wildcard nooit een echte pagina van de nieuwe site overschrijven.
//
// `bestaat(pad)` is een async functie die zegt of er op dat pad een pagina of
// bestand staat. De middleware vraagt dat aan env.ASSETS, de test aan dist/.

import { EXACT, WILD } from "./redirect-tabel.js";

const TALEN = ["en", "de", "fr", "es", "ro"];

const decode = (p) => {
  try {
    return decodeURIComponent(p);
  } catch {
    return p;
  }
};

export function normaliseer(pathname) {
  let p = decode(pathname).replace(/\/{2,}/g, "/");
  if (!p.startsWith("/")) p = "/" + p;
  return p;
}

const zonderSlash = (x) => (x.length > 1 ? x.replace(/\/$/, "") : x);
const zelfde = (a, b) => zonderSlash(a) === zonderSlash(b);

function taalVan(p) {
  const s = p.split("/")[1];
  return TALEN.includes(s) ? s : "";
}
const metTaal = (taal, pad) => (taal ? "/" + taal + pad : pad);

// Stap 1: exacte regel, ongeacht of er een pagina staat.
export function exacteRedirect(pathname) {
  const p = normaliseer(pathname);
  const varianten = p.endsWith("/") ? [p, p.slice(0, -1)] : [p, p + "/"];
  for (const v of varianten) {
    const hit = EXACT[v];
    if (hit && !zelfde(hit[0], p)) return { naar: hit[0], code: hit[1] };
  }
  return null;
}

const WP_WEG = /^\/(wp-admin|wp-includes|wp-json|wp-content\/(plugins|themes|cache|upgrade|uploads\/complianz))(\/|$)|^\/(xmlrpc\.php|wp-login\.php|wp-cron\.php)$/i;
const GONE = { naar: null, code: 410 };

// Een pad oplossen tot een bestaande bestemming: exacte regel, bestaande pagina,
// of anders de terugvalregels. Voor de stappen die een ouderpad proberen.
async function oplossen(p, bestaat, diepte) {
  const e = exacteRedirect(p);
  if (e) return e;
  if (await bestaat(p)) return { naar: p, code: 301 };
  return terugvalRedirect(p, bestaat, diepte + 1);
}

// Stap 2: alleen na een 404.
export async function terugvalRedirect(pathname, bestaat, diepte = 0) {
  if (diepte > 3) return null;
  const p = normaliseer(pathname);
  const taal = taalVan(p);

  if (WP_WEG.test(p)) return GONE;

  // Oude uploads: de bestanden die we bewaard hebben staan onder /media/.
  // Een pdf die er niet meer is, gaat naar de documentenpagina; de rest is weg.
  if (/^\/wp-content\/uploads\//i.test(p)) {
    const kopie = "/media" + p;
    if (await bestaat(kopie)) return { naar: kopie, code: 301 };
    if (/\.pdf$/i.test(p)) return { naar: "/documenten/", code: 301 };
    return GONE;
  }

  // /iets/feed/ en /iets/feed/atom/ -> /iets/ (of waar /iets/ zelf heen moet)
  const feed = p.match(/^(.*?\/)feed(\/[a-z0-9-]*)?\/?$/i);
  if (feed) return oplossen(feed[1], bestaat, diepte);

  // WordPress-paginering: /iets/page/3/ -> /iets/
  const pag = p.match(/^(.*?\/)page\/\d+\/?$/i);
  if (pag) return oplossen(pag[1], bestaat, diepte);

  // Oude assessmentadressen in het enkelvoud: /assessment/drijfverentest/ ->
  // /assessments/drijfverentest/ als die pagina bestaat. Zonder deze stap viel
  // alles op het overzicht en meldde Google een soft 404.
  const ass = p.match(/^(\/[a-z]{2})?\/assessment\/([^/]+)\/?$/);
  if (ass) {
    const kandidaat = `${ass[1] || ""}/assessments/${ass[2]}/`;
    const e = exacteRedirect(kandidaat);
    if (e) return e;
    if (await bestaat(kandidaat)) return { naar: kandidaat, code: 301 };
  }

  for (const [bron, naar, code] of WILD) {
    if (p.startsWith(bron) || p + "/" === bron) {
      if (code === 410) return GONE;
      const rest = p.startsWith(bron) ? p.slice(bron.length) : "";
      const doel = naar.replace(":splat", rest);
      if (!zelfde(doel, p)) return { naar: doel, code };
    }
  }

  // Kenniscentrum: WordPress zette artikelen soms onder een categoriemap
  // (/kenniscentrum/leiding-geven/bila-gesprek/). Bestaat het artikel zonder
  // die map, dan daarheen; een losse categoriemap gaat naar het overzicht.
  const kc = p.match(/^(?:\/[a-z]{2})?\/kenniscentrum\/(?:.+\/)?([^/]+)\/?$/);
  if (kc) {
    const kandidaat = metTaal(taal, `/kenniscentrum/${kc[1]}/`);
    if (!zelfde(kandidaat, p)) {
      const e = exacteRedirect(kandidaat);
      if (e) return e;
      if (await bestaat(kandidaat)) return { naar: kandidaat, code: 301 };
    }
    return { naar: metTaal(taal, "/kenniscentrum/"), code: 301 };
  }

  // De oefenmap heeft alleen subpagina's; de map zelf gaat naar de voorbereiding.
  if (/^(?:\/[a-z]{2})?\/oefenen\/?$/.test(p)) return { naar: metTaal(taal, "/voorbereiding/"), code: 301 };

  return null;
}

// Volledige beslissing voor één verzoek, voor de test buiten Cloudflare.
export async function beslis(pathname, bestaat) {
  const e = exacteRedirect(pathname);
  if (e) return e;
  if (await bestaat(normaliseer(pathname))) return null;
  return terugvalRedirect(pathname, bestaat);
}
