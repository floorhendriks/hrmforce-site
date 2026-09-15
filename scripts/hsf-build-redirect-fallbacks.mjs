// Bouwt een statische terugvalpagina voor elke exacte regel in public/_redirects.
//
// Waarom: Cloudflare Pages past maar een deel van _redirects toe en negeert de rest
// zonder foutmelding of bouwfout. Waar de grens ligt is niet voorspelbaar gebleken.
// Een regel die wegvalt levert een 404 op. Met een terugvalpagina op datzelfde pad
// landt de bezoeker alsnog op de juiste pagina.
//
// Een regel in _redirects wint van een bestand met hetzelfde pad, dus zolang de regel
// wel wordt toegepast krijg je een echte 301 en komt de terugvalpagina niet in beeld.
//
// Draaien: npm run hsf:redirects

import fs from "node:fs";
import path from "node:path";

const paden = new Set(JSON.parse(fs.readFileSync("src/data/valid-paths.json", "utf8")));
const bestaat = (p) => paden.has(p) || paden.has(p.replace(/\/$/, ""));

const regels = fs
  .readFileSync("public/_redirects", "utf8")
  .split("\n")
  .map((r) => r.trim())
  .filter((r) => r && !r.startsWith("#"))
  .map((r) => r.split(/\s+/));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

let gemaakt = 0;
let overgeslagen = 0;

for (const [bron, doel] of regels) {
  if (bron.includes("*") || bron.endsWith(".xml")) continue;
  if (bestaat(bron)) {
    overgeslagen++;
    continue;
  }
  const map = path.join("public", bron.replace(/\/$/, ""));
  fs.mkdirSync(map, { recursive: true });
  const d = esc(doel);
  fs.writeFileSync(
    path.join(map, "index.html"),
    `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<title>Verplaatst</title>
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${d}">
<link rel="canonical" href="${d}">
</head>
<body>
<p>Deze pagina is verplaatst naar <a href="${d}">${d}</a>.</p>
<script>location.replace(${JSON.stringify(doel)});</script>
</body>
</html>
`,
    "utf8",
  );
  gemaakt++;
}

console.log(`terugvalpagina's aangemaakt: ${gemaakt}, overgeslagen (bestaat al als pagina): ${overgeslagen}`);
