// Bouwt de getekende assessorovereenkomst als PDF. De tekst komt uit
// src/data/assessor-overeenkomst.js, zodat de webpagina en de PDF dezelfde
// bron hebben.
import { Pdf, breekAf, tekstbreedte, b64NaarBytes } from "./pdf-basis.js";
import { TEKST, BIJLAGE_B, VERSIE } from "../../src/data/assessor-overeenkomst.js";
import { LOGO, HANDTEKENING, PARAAF } from "./assessor-beelden.js";

const NAVY = [0.055, 0.275, 0.549];   // #0E468C
const BLAUW = [0.039, 0.439, 0.718];  // #0A70B7
const INKT = [0.180, 0.227, 0.275];   // #2E3A46
const GRIJS = [0.42, 0.47, 0.52];
const LIJN = [0.796, 0.851, 0.910];   // #CBD9E8
const TINT = [0.933, 0.957, 0.980];   // #EEF4FA
const ROOD = [0.639, 0.231, 0.165];   // #A33B2A

const BLAD_B = 595.28, BLAD_H = 841.89;
const MARGE = 56, RECHTS = BLAD_B - MARGE;
const KOLOM = RECHTS - MARGE;
const ONDER = 86;          // ruimte voor de voettekst
const REGEL = 12.6;        // regelafstand lopende tekst
const GROOTTE = 9.3;

export function assessorPdf(g) {
  const doc = new Pdf({ breedte: BLAD_B, hoogte: BLAD_H });
  const logo = doc.beeld(b64NaarBytes(LOGO.b64));
  const htFloor = doc.beeld(b64NaarBytes(HANDTEKENING.b64));
  const paraafFloor = doc.beeld(b64NaarBytes(PARAAF.b64));
  const htAssessor = g.handtekeningJpg ? doc.beeld(g.handtekeningJpg) : null;
  const paraafAssessor = g.initialenJpg ? doc.beeld(g.initialenJpg) : null;

  const staat = { pagina: null, y: 0, nr: 0 };
  const paginas = [];

  function nieuwePagina(eerste) {
    staat.pagina = doc.nieuwePagina();
    staat.nr += 1;
    paginas.push(staat.pagina);
    if (eerste) {
      staat.pagina.beeld(logo, MARGE, BLAD_H - 92, 34);
      staat.pagina.tekst(RECHTS, BLAD_H - 70, "VERTROUWELIJK", { grootte: 8, stijl: "b", kleur: ROOD, rechts: true });
      staat.pagina.tekst(RECHTS, BLAD_H - 82, g.nummer, { grootte: 8, kleur: GRIJS, rechts: true });
      staat.y = BLAD_H - 126;
    } else {
      staat.pagina.tekst(MARGE, BLAD_H - 46, "Assessorovereenkomst hrmforce", { grootte: 8, kleur: GRIJS });
      staat.pagina.tekst(RECHTS, BLAD_H - 46, g.nummer, { grootte: 8, kleur: GRIJS, rechts: true });
      staat.pagina.lijn(MARGE, BLAD_H - 54, RECHTS, BLAD_H - 54, LIJN, 0.6);
      staat.y = BLAD_H - 76;
    }
  }

  function ruimte(nodig) {
    if (staat.y - nodig < ONDER) nieuwePagina(false);
  }

  function alinea(tekst, opt) {
    const o = opt || {};
    const grootte = o.grootte || GROOTTE;
    const stijl = o.stijl || "n";
    const x = o.x == null ? MARGE : o.x;
    const breedte = o.breedte == null ? KOLOM : o.breedte;
    const regels = breekAf(tekst, grootte, stijl, breedte);
    for (const r of regels) {
      ruimte(REGEL);
      staat.pagina.tekst(x, staat.y, r, { grootte, stijl, kleur: o.kleur || INKT });
      staat.y -= o.regel || REGEL;
    }
    staat.y -= o.na == null ? 5 : o.na;
  }

  function kop(tekst, grootte, kleur, na) {
    ruimte((grootte || 12) + 14);
    staat.pagina.tekst(MARGE, staat.y, tekst, { grootte: grootte || 12, stijl: "b", kleur: kleur || NAVY });
    staat.y -= (grootte || 12) + (na == null ? 8 : na);
  }

  // Tabel met twee kolommen: links een vette term, rechts de uitleg.
  function deftabel(rijen, opt) {
    const o = opt || {};
    const linksB = o.links || 118;
    const rechtsB = KOLOM - linksB - 12;
    for (const rij of rijen) {
      const links = breekAf(rij[0] || "", GROOTTE, "b", linksB);
      const rechts = [];
      String(rij[1] || "").split("\n").forEach((deel, i) => {
        if (i > 0) rechts.push("");
        breekAf(deel, GROOTTE, "n", rechtsB).forEach((r) => rechts.push(r));
      });
      const hoogte = Math.max(links.length, rechts.length) * REGEL + 8;
      ruimte(hoogte);
      const top = staat.y + REGEL - 3;
      if (o.tint !== false) staat.pagina.vlak(MARGE, top - hoogte, KOLOM, hoogte, TINT);
      let y = staat.y;
      for (const r of links) { staat.pagina.tekst(MARGE + 6, y, r, { grootte: GROOTTE, stijl: "b", kleur: NAVY }); y -= REGEL; }
      y = staat.y;
      for (const r of rechts) { staat.pagina.tekst(MARGE + linksB + 6, y, r, { grootte: GROOTTE, kleur: INKT }); y -= REGEL; }
      staat.y = top - hoogte - 5;
    }
    staat.y -= 4;
  }

  function lijst(items, genummerd) {
    items.forEach((it, i) => {
      const merk = genummerd ? i + 1 + "." : "-";
      ruimte(REGEL);
      staat.pagina.tekst(MARGE + 4, staat.y, merk, { grootte: GROOTTE, kleur: BLAUW });
      const regels = breekAf(it, GROOTTE, "n", KOLOM - 24);
      regels.forEach((r, n) => {
        if (n > 0) ruimte(REGEL);
        staat.pagina.tekst(MARGE + 22, staat.y, r, { grootte: GROOTTE, kleur: INKT });
        staat.y -= REGEL;
      });
      staat.y -= 2;
    });
    staat.y -= 4;
  }

  function kader(titel, tekst) {
    const regels = breekAf(tekst, GROOTTE, "n", KOLOM - 24);
    const hoogte = regels.length * REGEL + 34;
    ruimte(hoogte);
    const top = staat.y + REGEL;
    staat.pagina.vlak(MARGE, top - hoogte, KOLOM, hoogte, TINT);
    staat.pagina.vlak(MARGE, top - hoogte, 3, hoogte, BLAUW);
    staat.pagina.tekst(MARGE + 14, staat.y, titel, { grootte: GROOTTE + 0.7, stijl: "b", kleur: NAVY });
    staat.y -= REGEL + 3;
    for (const r of regels) {
      staat.pagina.tekst(MARGE + 14, staat.y, r, { grootte: GROOTTE, kleur: INKT });
      staat.y -= REGEL;
    }
    staat.y = top - hoogte - 10;
  }

  function blokken(lijstBlokken) {
    for (const b of lijstBlokken) {
      if (b.t === "titel") { kop(b.tekst, 17, NAVY, 4); continue; }
      if (b.t === "ondertitel") { kop(b.tekst, 12.5, BLAUW, 8); continue; }
      if (b.t === "lead") { alinea(b.tekst, { kleur: GRIJS, na: 12 }); continue; }
      if (b.t === "kop") { kop(b.tekst, 12, NAVY); continue; }
      if (b.t === "artikel") { kop(b.nr + ". " + b.titel, 11, NAVY, 7); continue; }
      if (b.t === "lid") {
        ruimte(REGEL);
        staat.pagina.tekst(MARGE, staat.y, b.nr, { grootte: GROOTTE, stijl: "b", kleur: BLAUW });
        const inspring = 30;
        const regels = breekAf(b.tekst, GROOTTE, "n", KOLOM - inspring);
        regels.forEach((r, n) => {
          if (n > 0) ruimte(REGEL);
          staat.pagina.tekst(MARGE + inspring, staat.y, r, { grootte: GROOTTE, kleur: INKT });
          staat.y -= REGEL;
        });
        staat.y -= 3;
        continue;
      }
      if (b.t === "lijst") { lijst(b.items, true); continue; }
      if (b.t === "deftabel") { deftabel(b.rijen); continue; }
      if (b.t === "cursief") { alinea(b.tekst, { stijl: "i", kleur: GRIJS }); continue; }
      if (b.t === "kader") { kader(b.titel, b.tekst); continue; }
      if (b.t === "alinea") { alinea(b.tekst); continue; }
    }
  }

  // ---------- opbouw ----------
  nieuwePagina(true);
  blokken(TEKST);

  // Ondertekening
  staat.y -= 6;
  ruimte(190);
  kop("Ondertekening", 12, NAVY);
  alinea("Door ondertekening verklaart de Assessor deze overeenkomst, inclusief de bijlagen, te hebben gelezen en te aanvaarden, en de gegevens in Bijlage A naar waarheid te hebben ingevuld.", { na: 10 });

  ruimte(170);
  const kolomB = (KOLOM - 18) / 2;
  const linkerX = MARGE, rechterX = MARGE + kolomB + 18;
  const topY = staat.y;
  const veld = (x, y, label, waarde) => {
    staat.pagina.tekst(x, y, label, { grootte: 8, stijl: "b", kleur: GRIJS });
    staat.pagina.tekst(x, y - 13, waarde, { grootte: GROOTTE, kleur: INKT });
    return y - 30;
  };
  staat.pagina.tekst(linkerX, topY, "hrmforce B.V.", { grootte: 10.5, stijl: "b", kleur: NAVY });
  staat.pagina.tekst(rechterX, topY, "De Assessor", { grootte: 10.5, stijl: "b", kleur: NAVY });
  staat.pagina.lijn(linkerX, topY - 7, linkerX + kolomB, topY - 7, LIJN, 0.8);
  staat.pagina.lijn(rechterX, topY - 7, rechterX + kolomB, topY - 7, LIJN, 0.8);

  let ly = topY - 22, ry = topY - 22;
  ly = veld(linkerX, ly, "Naam", "Floor Hendriks");
  ly = veld(linkerX, ly, "Functie", "Managing Partner");
  ly = veld(linkerX, ly, "Plaats en datum", "Amsterdam, " + g.datumNl);
  staat.pagina.tekst(linkerX, ly, "Handtekening", { grootte: 8, stijl: "b", kleur: GRIJS });
  staat.pagina.beeld(htFloor, linkerX, ly - 40, 32);

  ry = veld(rechterX, ry, "Naam", g.naam);
  ry = veld(rechterX, ry, "Functie", g.handelsnaam || "Assessor");
  ry = veld(rechterX, ry, "Plaats en datum", g.plaats + ", " + g.datumNl);
  staat.pagina.tekst(rechterX, ry, "Handtekening", { grootte: 8, stijl: "b", kleur: GRIJS });
  if (htAssessor) staat.pagina.beeld(htAssessor, rechterX, ry - 40, 32);
  staat.y = Math.min(ly, ry) - 52;

  // Bijlage A, ingevuld
  staat.y -= 6;
  kop("Bijlage A. Gegevens van de Assessor", 12, NAVY);
  alinea("In te vullen door de Assessor. hrmforce gebruikt deze gegevens voor de uitvoering van de overeenkomst, de toegang tot de hrmforce-omgeving en de verantwoording richting Opdrachtgevers.", { kleur: GRIJS, na: 8 });
  deftabel([
    ["Volledige naam", g.naam],
    ["Handelsnaam en rechtsvorm", g.handelsnaam || "-"],
    ["Adres", [g.straat, g.postcodePlaats].filter(Boolean).join(", ")],
    ["KvK-nummer", g.kvk || "-"],
    ["E-mailadres", g.email],
    ["Telefoonnummer", g.telefoon],
    ["Beroepsregistratie(s)", g.registratie || "-"],
  ], { links: 142 });
  alinea("De Assessor verklaart dat de hierboven ingevulde gegevens juist en volledig zijn en meldt wijzigingen binnen twee weken aan hrmforce.", { stijl: "i", kleur: GRIJS });

  // Bijlage B, letterlijk
  blokken(BIJLAGE_B);

  // Verklaring van elektronische ondertekening
  nieuwePagina(false);
  kop("Verklaring van elektronische ondertekening", 12.5, NAVY);
  alinea("Deze pagina legt vast hoe en wanneer deze overeenkomst elektronisch is ondertekend. hrmforce bewaart dezelfde gegevens in haar administratie.", { kleur: GRIJS, na: 10 });
  deftabel([
    ["Documentnummer", g.nummer],
    ["Versie van de tekst", VERSIE],
    ["Ondertekend door", g.naam + (g.handelsnaam ? " (" + g.handelsnaam + ")" : "")],
    ["E-mailadres", g.email],
    ["Plaats", g.plaats],
    ["Tijdstip (Europe/Amsterdam)", g.tijdNl],
    ["Tijdstip (UTC)", g.tijdUtc],
    ["Wijze van ondertekenen", g.wijze],
    ["IP-adres", g.ip || "onbekend"],
    ["Land en plaats (netwerk)", [g.land, g.stad].filter(Boolean).join(", ") || "onbekend"],
    ["Browser", g.browser || "onbekend"],
    ["Akkoord met de overeenkomst", "ja, inclusief bijlagen A en B"],
    ["Gegevens juist en volledig", "ja"],
  ], { links: 170 });

  staat.y -= 4;
  alinea("Controlegetal (SHA-256) over de ondertekende gegevens en de tekstversie:", { grootte: 8.5, kleur: GRIJS, na: 2 });
  alinea(g.hash, { grootte: 8, stijl: "b", kleur: INKT, na: 10 });
  alinea("Het controlegetal is berekend over alle gegevens in deze verklaring samen met de volledige tekst van de overeenkomst. Wijzigt er later iets aan die gegevens of aan de tekst, dan levert dezelfde berekening een ander getal op.", { grootte: 8.5, kleur: GRIJS });

  // ---------- voetteksten ----------
  const totaal = paginas.length;
  paginas.forEach((p, i) => {
    p.lijn(MARGE, 66, RECHTS, 66, LIJN, 0.6);
    p.tekst(MARGE, 55, "VERTROUWELIJK", { grootte: 7, stijl: "b", kleur: ROOD });
    p.tekst(MARGE + 64, 55, "Assessorovereenkomst geheimhouding en gegevensverwerking", { grootte: 7, kleur: GRIJS });
    p.tekst(MARGE, 44, "hrmforce B.V. | " + VERSIE + " | " + g.nummer, { grootte: 7, kleur: GRIJS });
    p.tekst(RECHTS, 44, "pagina " + (i + 1) + " van " + totaal, { grootte: 7, kleur: GRIJS, rechts: true });

    // parafen rechtsboven in de voettekst: eerst hrmforce, dan de assessor
    const px = RECHTS - 152;
    p.tekst(px, 55, "paraaf hrmforce", { grootte: 6.5, kleur: GRIJS });
    p.beeld(paraafFloor, px + 50, 49, 13);
    p.tekst(px + 76, 55, "paraaf assessor", { grootte: 6.5, kleur: GRIJS });
    if (paraafAssessor) p.beeld(paraafAssessor, px + 128, 49, 13);
  });

  return doc.bytes();
}
