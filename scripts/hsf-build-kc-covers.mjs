// Schrijft de getekende omslagen voor het kenniscentrum weg als losse SVG's.
// Losse bestanden in plaats van een data-URI per kaart, want het overzicht
// toont ruim 340 kaarten en dan scheelt dat honderden kilobytes.
//
// Draaien: npm run hsf:omslagen
import fs from "node:fs";
import { OMSLAG_THEMAS, OMSLAG_VARIANTEN, omslagSvg } from "../src/lib/kc-omslag.js";

const map = "public/media/kc-omslag";
fs.mkdirSync(map, { recursive: true });
let n = 0;
for (const cat of OMSLAG_THEMAS) {
  for (let v = 0; v < OMSLAG_VARIANTEN; v++) {
    fs.writeFileSync(`${map}/${cat}-${v}.svg`, omslagSvg(cat, v), "utf8");
    n++;
  }
}
console.log(`omslagen geschreven: ${n}`);
