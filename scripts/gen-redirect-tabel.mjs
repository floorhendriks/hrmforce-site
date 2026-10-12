// Zet src/data/redirects.txt om naar functions/_lib/redirect-tabel.js.
//
// Cloudflare Pages past van _redirects alleen de eerste 100 regels toe. De
// middleware in functions/_middleware.js voert daarom alle regels zelf uit, met
// deze tabel. Draai na elke wijziging in src/data/redirects.txt: npm run redirects
//
// Wat het script nog meer doet:
//  - ketens platslaan: wijst een doel zelf weer door, dan gaat de regel direct
//    naar het eindadres (Google volgt ketens, maar elke stap kost crawlbudget)
//  - shop.hrmforce.com/shop/ als doel vervangen door /shop/ op hetzelfde domein
//  - met --controleer: elk intern doel naast dist/ leggen en melden wat er niet
//    bestaat (draai dan eerst astro build)

import fs from "node:fs";
import path from "node:path";

const decode = (p) => {
  try {
    return decodeURIComponent(p);
  } catch {
    return p;
  }
};

const regels = fs
  .readFileSync("src/data/redirects.txt", "utf8")
  .split("\n")
  .map((r) => r.trim())
  .filter((r) => r && !r.startsWith("#"))
  .map((r) => r.split(/\s+/))
  .map(([bron, doel, code]) => [decode(bron).replace(/\/{2,}/g, "/"), doel.replace(/^https:\/\/shop\.hrmforce\.com\/shop\/$/, "/shop/"), Number(code || 301)]);

const EXACT = {};
const WILD = [];
const gezien = new Set();
for (const [bron, doel, code] of regels) {
  if (bron.includes("*")) {
    WILD.push([bron.slice(0, bron.indexOf("*")), doel, code]);
  } else if (!gezien.has(bron)) {
    // Eerste regel wint, net als in _redirects.
    gezien.add(bron);
    EXACT[bron] = [doel, code];
  }
}

// Ketens platslaan via de exacte regels.
const zonderSlash = (x) => (x.length > 1 ? x.replace(/\/$/, "") : x);
const opzoeken = (p) => EXACT[p] || EXACT[p.endsWith("/") ? p.slice(0, -1) : p + "/"];
let ketens = 0;
for (const bron of Object.keys(EXACT)) {
  let [doel, code] = EXACT[bron];
  const pad = [bron];
  for (let i = 0; i < 10 && doel.startsWith("/"); i++) {
    const volgende = opzoeken(doel);
    if (!volgende || pad.some((x) => zonderSlash(x) === zonderSlash(doel))) break;
    pad.push(doel);
    doel = volgende[0];
    ketens++;
  }
  if (zonderSlash(doel) === zonderSlash(bron)) {
    console.warn(`lus overgeslagen: ${bron}`);
    delete EXACT[bron];
    continue;
  }
  EXACT[bron] = [doel, code];
}

const uit = `// GEGENEREERD door scripts/gen-redirect-tabel.mjs uit src/data/redirects.txt.
// Niet met de hand aanpassen: wijzig src/data/redirects.txt en draai npm run redirects.
export const EXACT = ${JSON.stringify(EXACT, null, 0).replace(/\],"/g, '],\n"')};
export const WILD = ${JSON.stringify(WILD).replace(/\],\[/g, "],\n[")};
`;
fs.writeFileSync("functions/_lib/redirect-tabel.js", uit);
console.log(`exacte regels: ${Object.keys(EXACT).length}, wildcards: ${WILD.length}, ketenstappen platgeslagen: ${ketens}`);

if (process.argv.includes("--controleer")) {
  const bestaat = (p) => {
    const d = path.join("dist", decode(p.split("?")[0].split("#")[0]));
    return fs.existsSync(path.join(d, "index.html")) || (fs.existsSync(d) && fs.statSync(d).isFile());
  };
  const fout = new Set();
  for (const [doel] of Object.values(EXACT)) if (doel.startsWith("/") && !bestaat(doel)) fout.add(doel);
  for (const [, doel] of WILD) if (doel.startsWith("/") && !doel.includes(":splat") && !bestaat(doel)) fout.add(doel);
  console.log(fout.size ? `doelen zonder pagina (${fout.size}):\n` + [...fout].join("\n") : "alle interne doelen bestaan");
}
