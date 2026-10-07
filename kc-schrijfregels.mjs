// Schrijfregels toepassen op de kenniscentrum-artikelen in Sanity.
//
// Gebruik, vanuit de projectmap in je Codespace:
//   node kc-schrijfregels.mjs                 -> proefdraai, schrijft niets
//   SANITY_WRITE_TOKEN=... node kc-schrijfregels.mjs --apply
//
// De proefdraai maakt kc-fix.json met per document precies wat er verandert.
// Het token maak je aan op sanity.io/manage, project hqo56w28, onder API ->
// Tokens, met rechten "Editor". Bewaar het buiten de repo.
//
// Wat dit script doet: gedachtestreepjes, en de woorden en zinnen waarvan de
// vervanging los van de context klopt. Wat het bewust laat staan: "goed" en
// "goede" (497 keer, betekenis verschilt per zin), "niet alleen X, maar ook Y"
// (129 keer), de intro's en de tussenkoppen. Die vragen om herschrijven per
// artikel. De juridische pagina's krijgen alleen de leestekens.

import fs from "node:fs";
import { createClient } from "@sanity/client";

const APPLY = process.argv.includes("--apply");
const PROJECT = "hqo56w28";
const DATASET = "production";

const P = [
  [/toonaangevende leverancier/g, "leverancier"],
  [/toonaangevende partner/g, "vaste partner"],
  [/\btoonaangevend\b/g, "vooraanstaand"],
  [/geavanceerde HR-tools/g, "HR-tools"],
  [/geavanceerde online assessments/g, "online assessments"],
  [/geavanceerde HR-softwarepakketten/g, "HR-softwarepakketten"],
  [/geavanceerde aanpassingsmogelijkheden/g, "ruime aanpassingsmogelijkheden"],
  [/een breed scala aan/g, "uiteenlopende"],
  [/\bvandaag de dag\b/g, "inmiddels"],
  [/\bworden steeds belangrijker\b/g, "wegen steeds zwaarder"],
  [/\bwordt steeds belangrijker\b/g, "weegt steeds zwaarder"],
  [/naar een hoger niveau tillen/g, "verder brengen"],
  [/naar een hoger niveau te tillen/g, "verder te brengen"],
  [/\bde sleutel tot\b/g, "bepalend voor"],
  [/speelt een belangrijke rol/g, "weegt zwaar mee"],
  [/spelen een belangrijke rol/g, "wegen zwaar mee"],
  [/\bte elimineren\b/g, "weg te nemen"],
  [/\belimineren\b/g, "wegnemen"],
  [/\bte optimaliseren\b/g, "te verbeteren"],
  [/\boptimaliseren\b/g, "verbeteren"],
  [/\bgeoptimaliseerd\b/g, "verbeterd"],
  [/\bcruciale\b/g, "bepalende"],
  [/\bcruciaal\b/g, "bepalend"],
  [/van essentieel belang/g, "van groot belang"],
  [/\bis essentieel\b/g, "is onmisbaar"],
  [/\bzijn essentieel\b/g, "zijn onmisbaar"],
  [/\bessentieel voor\b/g, "onmisbaar voor"],
  [/essenti\u00eble/g, "onmisbare"],
  [/\bBovendien\b/g, "Daarnaast"],
  [/\bbovendien\b/g, "daarnaast"],
  [/\baanzienlijke kansen\b/g, "ruime kansen"],
  [/\baanzienlijke\b/g, "duidelijke"],
  [/\baanzienlijk\b/g, "duidelijk"],
  [/\bin de wereld van\b/g, "binnen"],
  [/\bin het huidige landschap\b/g, "op dit moment"],
  [/\bbiedt uitkomst\b/g, "brengt duidelijkheid"],
  [/\bnaadloze\b/g, "ononderbroken"],
  [/\bnaadloos\b/g, "zonder extra stappen"],
  [/state-of-the-art/g, "actueel"],
  [/\bholistische\b/g, "integrale"],
  [/\bholistisch\b/g, "integraal"],
  [/\bdisruptief\b/g, "ontwrichtend"],
  [/\bstijlvol\b/g, "verzorgd"],
  [/\bcomfortabel\b/g, "prettig"],
  [/\boplossingsgericht\b/g, "praktisch"],
  [/\bruggengraat\b/g, "kern"],
];

// Gedachtestreepje eruit. Getalbereiken krijgen een koppelteken, tijden "tot",
// een streepje voor een hoofdletter wordt een dubbele punt, de rest een komma.
const dashes = (t) => {
  t = t.replace(/(?<=\d)\s*[\u2014\u2013]\s*(?=\d)/g, "-");
  t = t.replace(/(?<=\d:\d\d)-(?=\d\d?:\d\d)/g, " tot ");
  t = t.replace(/\s+[\u2014\u2013]\s+(?=[A-Z\u00c0-\u00dd])/g, ": ");
  t = t.replace(/\s+[\u2014\u2013]\s+/g, ", ");
  t = t.replace(/\s+[\u2014\u2013](?=\S)/g, ", ");
  t = t.replace(/(?<=\S)[\u2014\u2013]\s+/g, ", ");
  t = t.replace(/(?<=[^\W\d_])[\u2014\u2013](?=[^\W\d_])/g, "-");
  return t.replace(/, ,/g, ",").replace(/,\s*([.!?])/g, "$1");
};

const txt = (t, legal) => {
  if (!t) return t;
  t = dashes(t);
  if (!legal) for (const [r, v] of P) t = t.replace(r, v);
  return t;
};

// Alleen de tekst tussen de tags aanpassen, nooit binnen een tag. Zo blijven
// href, alt, class en src ongemoeid.
const fix = (t, legal) => {
  if (!t) return t;
  let out = "", pos = 0;
  for (const m of t.matchAll(/<[^>]*>/g)) {
    out += txt(t.slice(pos, m.index), legal) + m[0];
    pos = m.index + m[0].length;
  }
  return out + txt(t.slice(pos), legal);
};

const LEGAL = ["/algemene-voorwaarden", "/privacy", "/disclaimer", "/cookie"];

const read = createClient({ projectId: PROJECT, dataset: DATASET, apiVersion: "2024-01-01", useCdn: false });
const all = await read.fetch('*[_type=="article" && defined(path) && defined(body)]{_id,path,title,body,excerpt,metaDescription}');
const A = all.filter((x) => !/^\/?(en|de|fr|es|ro)\//.test(x.path));

const patches = [];
for (const a of A) {
  const legal = LEGAL.some((k) => (a.path || "").includes(k));
  const set = {};
  for (const f of ["title", "body", "excerpt", "metaDescription"]) {
    const v = a[f];
    if (typeof v !== "string") continue;
    const nv = fix(v, legal);
    if (nv !== v) set[f] = nv;
  }
  if (Object.keys(set).length) patches.push({ _id: a._id, path: a.path, set });
}

// Controle: de HTML-structuur mag niet zijn veranderd.
const tagsOk = patches.every((p) => {
  const o = A.find((x) => x._id === p._id);
  if (!p.set.body) return true;
  return JSON.stringify(o.body.match(/<[^>]*>/g)) === JSON.stringify(p.set.body.match(/<[^>]*>/g));
});

fs.writeFileSync("kc-fix.json", JSON.stringify(patches, null, 1));
console.log(`NL-artikelen: ${A.length} | documenten met wijziging: ${patches.length} | html-structuur ongemoeid: ${tagsOk}`);

if (!tagsOk) {
  console.error("De HTML-structuur is ergens veranderd. Niets weggeschreven.");
  process.exit(1);
}
if (!APPLY) {
  console.log("Proefdraai. Bekijk kc-fix.json, daarna opnieuw met --apply en een token.");
  process.exit(0);
}

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("Geen SANITY_WRITE_TOKEN in de omgeving.");
  process.exit(1);
}
const write = createClient({ projectId: PROJECT, dataset: DATASET, apiVersion: "2024-01-01", useCdn: false, token });

let n = 0;
for (let i = 0; i < patches.length; i += 25) {
  let tx = write.transaction();
  for (const p of patches.slice(i, i + 25)) tx = tx.patch(p._id, { set: p.set });
  await tx.commit();
  n = Math.min(i + 25, patches.length);
  console.log(`bijgewerkt ${n} / ${patches.length}`);
}
console.log("Klaar. Start daarna een nieuwe build in Cloudflare, zodat de pagina's opnieuw worden opgebouwd.");
