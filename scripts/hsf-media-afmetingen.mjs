// Meet breedte en hoogte van elke afbeelding onder public/media en schrijft die
// naar src/data/media-afmetingen.json. Img.astro gebruikt dat om een gewoon
// img-element een vaste verhouding te geven, zodat de pagina niet springt.
//
// Draaien na het toevoegen of vervangen van beeld: npm run hsf:afmetingen
import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

const wortel = "public/media";
const uit = {};
let gemeten = 0, mislukt = 0;

function loop(map) {
  for (const naam of fs.readdirSync(map)) {
    const p = path.join(map, naam);
    const st = fs.statSync(p);
    if (st.isDirectory()) { loop(p); continue; }
    if (!/\.(webp|png|jpe?g|gif)$/i.test(naam)) continue;
    try {
      const { width, height } = imageSize(fs.readFileSync(p));
      if (!width || !height) throw new Error("geen afmeting");
      uit["/" + path.relative("public", p).split(path.sep).join("/")] = [width, height];
      gemeten++;
    } catch { mislukt++; }
  }
}

loop(wortel);
const gesorteerd = Object.fromEntries(Object.keys(uit).sort().map((k) => [k, uit[k]]));
fs.writeFileSync("src/data/media-afmetingen.json", JSON.stringify(gesorteerd), "utf8");
console.log(`afmetingen gemeten: ${gemeten}, mislukt: ${mislukt}`);
