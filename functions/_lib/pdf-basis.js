// Afhankelijkheidsvrije PDF-bouwer voor meerdere pagina's, Helvetica en JPEG's.
// Draait in Cloudflare Workers: geen Node-API's, geen npm-pakketten.
//
// De factuur gebruikt de oudere generator in pdf.js. Deze module staat er los
// van, zodat een wijziging hier de facturen niet raakt.

// Breedtes van de standaardfonts (WinAnsi, 1000 eenheden per em). Hiermee loopt
// het afbreken van regels gelijk met wat de lezer straks ziet.
const BREEDTE = {
  n: "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,0,556,0,222,556,333,1000,556,556,333,1000,667,333,1000,0,611,0,0,222,222,333,333,350,556,1000,333,1000,500,333,944,0,500,667,0,333,556,556,556,556,260,556,333,737,370,556,584,0,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500",
  b: "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,0,556,0,278,556,500,1000,556,556,333,1000,667,333,1000,0,611,0,0,278,278,500,500,350,556,1000,333,1000,556,333,944,0,500,667,0,333,556,556,556,556,280,556,333,737,370,556,584,0,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556",
  i: "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,0,556,0,222,556,333,1000,556,556,333,1000,667,333,1000,0,611,0,0,222,222,333,333,350,556,1000,333,1000,500,333,944,0,500,667,0,333,556,556,556,556,260,556,333,737,370,556,584,0,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500",
};
const TABEL = { n: null, b: null, i: null };
function breedtes(stijl) {
  const s = TABEL[stijl] ? stijl : "n";
  if (!TABEL[s]) TABEL[s] = BREEDTE[s].split(",").map(Number);
  return TABEL[s];
}

// WinAnsi kent geen tekens buiten 0-255. Wat er niet in past vervangen we door
// een leesbaar alternatief, zodat er nooit rare blokjes in de PDF staan.
const VERVANG = {
  "‘": "'", "’": "'", "‚": ",", "“": '"', "”": '"',
  "–": "-", "—": "-", "…": "...", " ": " ", "•": "-",
  "€": "EUR ", "™": "(TM)", "→": "->",
};
export function winansi(s) {
  let uit = "";
  for (const teken of String(s == null ? "" : s)) {
    if (VERVANG[teken] != null) { uit += VERVANG[teken]; continue; }
    const c = teken.codePointAt(0);
    uit += c <= 255 ? teken : "?";
  }
  return uit;
}

export function tekstbreedte(tekst, grootte, stijl) {
  const w = breedtes(stijl);
  let som = 0;
  const s = winansi(tekst);
  for (let i = 0; i < s.length; i++) som += w[s.charCodeAt(i)] || 500;
  return (som * grootte) / 1000;
}

// Breekt tekst af op woordgrenzen binnen de gegeven breedte.
export function breekAf(tekst, grootte, stijl, maxBreedte) {
  const woorden = winansi(tekst).split(/\s+/).filter(Boolean);
  const regels = [];
  let huidig = "";
  for (const woord of woorden) {
    const kandidaat = huidig ? huidig + " " + woord : woord;
    if (tekstbreedte(kandidaat, grootte, stijl) <= maxBreedte || !huidig) huidig = kandidaat;
    else { regels.push(huidig); huidig = woord; }
  }
  if (huidig) regels.push(huidig);
  return regels.length ? regels : [""];
}

function ontsnap(s) {
  return winansi(s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

export function b64NaarBytes(b64) {
  const bin = atob(b64);
  const uit = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) uit[i] = bin.charCodeAt(i);
  return uit;
}

// Breedte en hoogte uit de JPEG-header lezen, zodat we niet afgaan op wat de
// browser meestuurt.
export function jpegMaat(bytes) {
  let i = 2;
  while (i < bytes.length) {
    if (bytes[i] !== 0xff) { i++; continue; }
    const marker = bytes[i + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
    const lengte = (bytes[i + 2] << 8) | bytes[i + 3];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { h: (bytes[i + 5] << 8) | bytes[i + 6], w: (bytes[i + 7] << 8) | bytes[i + 8] };
    }
    i += 2 + lengte;
  }
  return null;
}

/* De bouwer. Gebruik:
     const doc = new Pdf();
     const p = doc.nieuwePagina();
     p.tekst(56, 700, "Hallo", { grootte: 11, stijl: "b" });
     const bytes = doc.bytes();
*/
export class Pdf {
  constructor(opties) {
    const o = opties || {};
    this.breedte = o.breedte || 595.28;
    this.hoogte = o.hoogte || 841.89;
    this.paginas = [];
    this.beelden = [];   // { naam, bytes, w, h }
  }

  // Een JPEG toevoegen; geeft de naam terug waarmee je hem tekent.
  beeld(bytes) {
    const maat = jpegMaat(bytes) || { w: 1, h: 1 };
    const naam = "Im" + this.beelden.length;
    this.beelden.push({ naam, bytes, w: maat.w, h: maat.h });
    return { naam, w: maat.w, h: maat.h };
  }

  nieuwePagina() {
    const stukken = [];
    const pagina = {
      stukken,
      tekst(x, y, tekst, opt) {
        const o = opt || {};
        const grootte = o.grootte || 9.5;
        const stijl = o.stijl || "n";
        const kleur = o.kleur || [0, 0, 0];
        const font = stijl === "b" ? "F2" : stijl === "i" ? "F3" : "F1";
        let xx = x;
        if (o.rechts) xx = x - tekstbreedte(tekst, grootte, stijl);
        else if (o.midden) xx = x - tekstbreedte(tekst, grootte, stijl) / 2;
        stukken.push(kleur[0] + " " + kleur[1] + " " + kleur[2] + " rg BT /" + font + " " +
          grootte + " Tf " + xx.toFixed(2) + " " + y.toFixed(2) + " Td (" + ontsnap(tekst) + ") Tj ET\n");
      },
      vlak(x, y, w, h, kleur) {
        const c = kleur || [0.95, 0.96, 0.98];
        stukken.push(c[0] + " " + c[1] + " " + c[2] + " rg " +
          x.toFixed(2) + " " + y.toFixed(2) + " " + w.toFixed(2) + " " + h.toFixed(2) + " re f\n");
      },
      lijn(x1, y1, x2, y2, kleur, dikte) {
        const c = kleur || [0.8, 0.84, 0.9];
        stukken.push(c[0] + " " + c[1] + " " + c[2] + " RG " + (dikte || 0.8) + " w " +
          x1.toFixed(2) + " " + y1.toFixed(2) + " m " + x2.toFixed(2) + " " + y2.toFixed(2) + " l S\n");
      },
      // Tekent een eerder toegevoegd beeld op hoogte h, breedte naar rato.
      beeld(ref, x, y, h) {
        const w = (ref.w / ref.h) * h;
        stukken.push("q " + w.toFixed(2) + " 0 0 " + h.toFixed(2) + " " +
          x.toFixed(2) + " " + y.toFixed(2) + " cm /" + ref.naam + " Do Q\n");
        return w;
      },
    };
    this.paginas.push(pagina);
    return pagina;
  }

  bytes() {
    // Alles in de PDF is byte-voor-byte latin-1. Zou je hier UTF-8 gebruiken,
    // dan worden tekens als e-trema twee bytes en leest de viewer er twee
    // vreemde letters van.
    const latin1 = (s) => {
      const uit = new Uint8Array(s.length);
      for (let i = 0; i < s.length; i++) uit[i] = s.charCodeAt(i) & 0xff;
      return uit;
    };
    const delen = [];
    let pos = 0;
    const objecten = [];
    const schrijf = (s) => { const b = typeof s === "string" ? latin1(s) : s; delen.push(b); pos += b.length; };
    const obj = (nr, inhoud, ruwe) => {
      objecten[nr] = pos;
      schrijf(nr + " 0 obj\n");
      schrijf(inhoud);
      if (ruwe) { schrijf("stream\n"); schrijf(ruwe); schrijf("\nendstream\n"); }
      schrijf("endobj\n");
    };

    const aantal = this.paginas.length;
    const nBeeldStart = 6;
    const nInhoudStart = nBeeldStart + this.beelden.length;
    const nPaginaStart = nInhoudStart + aantal;
    const laatste = nPaginaStart + aantal - 1;

    schrijf("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");

    const kinderen = [];
    for (let i = 0; i < aantal; i++) kinderen.push(nPaginaStart + i + " 0 R");

    obj(1, "<< /Type /Catalog /Pages 2 0 R >>\n");
    obj(2, "<< /Type /Pages /Count " + aantal + " /Kids [" + kinderen.join(" ") + "] >>\n");
    obj(3, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\n");
    obj(4, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\n");
    obj(5, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>\n");

    this.beelden.forEach((b, i) => {
      obj(nBeeldStart + i,
        "<< /Type /XObject /Subtype /Image /Width " + b.w + " /Height " + b.h +
        " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + b.bytes.length + " >>\n",
        b.bytes);
    });

    this.paginas.forEach((p, i) => {
      const inhoud = p.stukken.join("");
      obj(nInhoudStart + i, "<< /Length " + inhoud.length + " >>\n", inhoud);
    });

    const beeldLijst = this.beelden.map((b, i) => "/" + b.naam + " " + (nBeeldStart + i) + " 0 R").join(" ");
    this.paginas.forEach((p, i) => {
      obj(nPaginaStart + i,
        "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + this.breedte.toFixed(2) + " " + this.hoogte.toFixed(2) + "] " +
        "/Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >>" +
        (beeldLijst ? " /XObject << " + beeldLijst + " >>" : "") + " >> " +
        "/Contents " + (nInhoudStart + i) + " 0 R >>\n");
    });

    const xref = pos;
    let tabel = "xref\n0 " + (laatste + 1) + "\n0000000000 65535 f \n";
    for (let n = 1; n <= laatste; n++) {
      tabel += String(objecten[n] || 0).padStart(10, "0") + " 00000 n \n";
    }
    schrijf(tabel);
    schrijf("trailer\n<< /Size " + (laatste + 1) + " /Root 1 0 R >>\nstartxref\n" + xref + "\n%%EOF\n");

    let lengte = 0;
    for (const d of delen) lengte += d.length;
    const uit = new Uint8Array(lengte);
    let o = 0;
    for (const d of delen) { uit.set(d, o); o += d.length; }
    return uit;
  }
}
