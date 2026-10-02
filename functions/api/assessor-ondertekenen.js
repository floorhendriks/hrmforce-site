// POST /api/assessor-ondertekenen — de assessorovereenkomst digitaal tekenen.
//
// De Function bouwt de PDF, legt het bewijs van ondertekening vast in D1 en
// stuurt de getekende overeenkomst naar de assessor, service@ en Floor. De
// browser krijgt het document terug als base64, zodat de bevestigingspagina een
// downloadknop kan tonen zonder dat er ergens een publieke link ontstaat.
//
// De tabel maak je eenmalig aan, zie scripts/assessor-tabel.sql.
import { assessorPdf } from "../_lib/pdf-assessor.js";
import { VERSIE, TEKST, BIJLAGE_B } from "../../src/data/assessor-overeenkomst.js";
import { sendMail } from "../_lib/mail.js";
import { controleerMens } from "../_lib/mens.js";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const schoon = (s, max) => String(s == null ? "" : s).replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
const mailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

function b64NaarBytes(b64) {
  const bin = atob(b64);
  const uit = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) uit[i] = bin.charCodeAt(i);
  return uit;
}
function bytesNaarB64(bytes) {
  let bin = "";
  const stap = 0x8000;
  for (let i = 0; i < bytes.length; i += stap) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + stap));
  return btoa(bin);
}

// Een data-URL met een JPEG uit de browser omzetten naar bytes. Alles wat geen
// JPEG is wordt geweigerd: de PDF-bouwer kan niets anders.
function jpegUitDataUrl(s, maxBytes) {
  const m = /^data:image\/jpe?g;base64,([A-Za-z0-9+/=]+)$/.exec(String(s || ""));
  if (!m) return null;
  const bytes = b64NaarBytes(m[1]);
  if (!bytes.length || bytes.length > (maxBytes || 400000)) return null;
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
  return bytes;
}

async function sha256Hex(tekst) {
  const data = new TextEncoder().encode(tekst);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function sha256HexBytes(bytes) {
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Datum en tijd in Amsterdam, zonder afhankelijkheden.
function amsterdam(d) {
  const opts = { timeZone: "Europe/Amsterdam", year: "numeric", month: "long", day: "numeric" };
  const datum = new Intl.DateTimeFormat("nl-NL", opts).format(d);
  const tijd = new Intl.DateTimeFormat("nl-NL", {
    timeZone: "Europe/Amsterdam", hour: "2-digit", minute: "2-digit", second: "2-digit",
  }).format(d);
  return { datum, tijd };
}

async function volgnummer(env, jaar) {
  const prefix = "HRMF-ASS-" + jaar + "-";
  let hoogste = 0;
  try {
    const r = await env.DB.prepare(
      "SELECT nummer FROM assessor_overeenkomsten WHERE nummer LIKE ? ORDER BY nummer DESC LIMIT 1"
    ).bind(prefix + "%").first();
    if (r && r.nummer) hoogste = parseInt(String(r.nummer).slice(prefix.length), 10) || 0;
  } catch (e) { /* tabel bestaat nog niet; dan begint de telling bij 1 */ }
  return prefix + String(hoogste + 1).padStart(4, "0");
}

export async function onRequestPost(context) {
  const { request, env } = context;
  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "bad_json" }, 400); }

  const mens = await controleerMens(env, body, request);
  if (!mens.ok) return json({ error: "geen_mens", reden: mens.reden }, 422);

  const g = {
    naam: schoon(body.naam, 120),
    handelsnaam: schoon(body.handelsnaam, 160),
    straat: schoon(body.straat, 160),
    postcodePlaats: schoon(body.postcodePlaats, 160),
    kvk: schoon(body.kvk, 20),
    email: schoon(body.email, 160).toLowerCase(),
    telefoon: schoon(body.telefoon, 40),
    registratie: schoon(body.registratie, 300),
    plaats: schoon(body.plaats, 80),
  };

  const ontbreekt = [];
  if (g.naam.split(/\s+/).filter(Boolean).length < 2) ontbreekt.push("naam");
  for (const veld of ["straat", "postcodePlaats", "telefoon", "plaats"]) if (!g[veld]) ontbreekt.push(veld);
  if (!mailOk(g.email)) ontbreekt.push("email");
  if (g.kvk && !/^\d{8}$/.test(g.kvk)) ontbreekt.push("kvk");
  if (body.akkoordOvereenkomst !== true) ontbreekt.push("akkoordOvereenkomst");
  if (body.akkoordGegevens !== true) ontbreekt.push("akkoordGegevens");
  if (ontbreekt.length) return json({ error: "onvolledig", velden: ontbreekt }, 400);

  const handtekening = jpegUitDataUrl(body.handtekening, 400000);
  const initialen = jpegUitDataUrl(body.initialen, 120000);
  if (!handtekening) return json({ error: "geen_handtekening" }, 400);

  const nu = new Date();
  const { datum, tijd } = amsterdam(nu);
  const kop = (naam) => request.headers.get(naam) || "";
  const bewijs = {
    ip: kop("CF-Connecting-IP"),
    land: kop("CF-IPCountry"),
    stad: (request.cf && request.cf.city) || "",
    browser: schoon(kop("User-Agent"), 300),
  };
  const wijze = body.getekend === true
    ? "met de muis of vinger getekende handtekening"
    : "getypte naam in handschriftletter";

  // Controlegetal over alles wat is ondertekend: de ingevulde gegevens, het
  // bewijs en de volledige tekst van de overeenkomst.
  const tekstHash = await sha256Hex(JSON.stringify([TEKST, BIJLAGE_B, VERSIE]));
  const basis = JSON.stringify({
    g, wijze, versie: VERSIE, tekstHash, tijd: nu.toISOString(), bewijs,
  });
  const hash = await sha256Hex(basis);

  if (!env.DB) return json({ error: "opslag_onbeschikbaar" }, 503);
  const jaar = new Intl.DateTimeFormat("nl-NL", { timeZone: "Europe/Amsterdam", year: "numeric" }).format(nu);
  const nummer = await volgnummer(env, jaar);

  let pdf;
  try {
    pdf = assessorPdf({
      ...g,
      nummer,
      datumNl: datum,
      tijdNl: datum + " om " + tijd,
      tijdUtc: nu.toISOString(),
      wijze,
      hash,
      ip: bewijs.ip, land: bewijs.land, stad: bewijs.stad, browser: bewijs.browser,
      handtekeningJpg: handtekening,
      initialenJpg: initialen,
    });
  } catch (e) {
    console.log("assessor_pdf_failed", String(e.message || e));
    return json({ error: "pdf_mislukt" }, 500);
  }
  const pdfHash = await sha256HexBytes(pdf);
  const achternaam = (g.naam.split(/\s+/).pop() || "assessor").replace(/[^A-Za-zÀ-ÿ'-]/g, "");
  const bestandsnaam = "Assessorovereenkomst_hrmforce_" + achternaam + "_" + nu.toISOString().slice(0, 10) + ".pdf";

  try {
    await env.DB.prepare(
      "INSERT INTO assessor_overeenkomsten (nummer, created, versie, naam, handelsnaam, straat, postcode_plaats, kvk, email, telefoon, registratie, plaats, wijze, ip, land, stad, browser, hash, pdf_hash, handtekening_b64, initialen_b64, mail_status) " +
      "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    ).bind(
      nummer, nu.toISOString(), VERSIE, g.naam, g.handelsnaam, g.straat, g.postcodePlaats, g.kvk,
      g.email, g.telefoon, g.registratie, g.plaats, wijze,
      bewijs.ip, bewijs.land, bewijs.stad, bewijs.browser, hash, pdfHash,
      bytesNaarB64(handtekening), initialen ? bytesNaarB64(initialen) : null, "bezig"
    ).run();
  } catch (e) {
    console.log("assessor_opslag_mislukt", String(e.message || e));
    return json({ error: "opslag_mislukt" }, 500);
  }

  const voornaam = g.naam.split(/\s+/)[0];
  const van = (env && env.REQUEST_EMAIL_FROM) || "service@hrmforce.com";
  const tekst = [
    "Beste " + voornaam + ",",
    "",
    "Bedankt voor het ondertekenen van de assessorovereenkomst met hrmforce. In de bijlage vind je het",
    "getekende exemplaar, inclusief de verklaring van elektronische ondertekening met datum, tijd en",
    "documentnummer.",
    "",
    "Bewaar dit document goed. Heb je vragen over de inhoud, neem dan contact op met Floor Hendriks via",
    "f.hendriks@hrmforce.com of +31 (0)88 88 321 88.",
    "",
    "Hartelijke groet,",
    "hrmforce",
    "",
    "Documentnummer: " + nummer,
    "Versie van de tekst: " + VERSIE,
  ].join("\n");

  let mailStatus = "verstuurd";
  try {
    await sendMail(env, {
      from: van,
      to: [g.email, "service@hrmforce.com", "f.hendriks@hrmforce.com"],
      subject: "Bevestiging: getekende assessorovereenkomst hrmforce, " + g.naam,
      text: tekst,
      attachments: [{ filename: bestandsnaam, content: pdf }],
    });
  } catch (e) {
    mailStatus = "mislukt: " + String(e.message || e).slice(0, 180);
    console.log("assessor_mail_mislukt", mailStatus);
  }
  try {
    await env.DB.prepare("UPDATE assessor_overeenkomsten SET mail_status=? WHERE nummer=?").bind(mailStatus, nummer).run();
  } catch (e) { /* de ondertekening staat al vast; dit is alleen de status */ }

  return json({
    ok: true,
    nummer,
    bestandsnaam,
    mail: mailStatus === "verstuurd",
    pdf: bytesNaarB64(pdf),
  });
}
