// Genereert (1) een Shopify-import-CSV en (2) een shop-overzichtspagina (alle 91 producten).
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { products } from "./src/data/products.js";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "..");
const DEMO = join(ROOT, "hrmforce-site-compleet");

const slug = (s) => s.toLowerCase().replace(/\|/g, " ").replace(/[()]/g, "").replace(/&/g, "en").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const csvCell = (v) => {
  const s = String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};

// ---- 1) Shopify-import CSV ----
const COLS = ["Handle","Title","Body (HTML)","Vendor","Type","Tags","Published","Option1 Name","Option1 Value","Variant SKU","Variant Inventory Policy","Variant Fulfillment Service","Variant Price","Variant Requires Shipping","Variant Taxable","Status"];
const rows = [COLS.join(",")];
for (const p of products) {
  const ships = p.segment === "Materialen" ? "TRUE" : "FALSE";
  const body = `${p.name} - assessment van ${p.vendor}. Segment: ${p.segment}. Fase: ${p.phase}.`;
  const row = [
    slug(p.name), p.name, body, p.vendor, p.segment,
    `${p.vendor}, ${p.segment}, ${p.phase}`, "TRUE",
    "Title", "Default Title", slug(p.name).toUpperCase().slice(0, 20),
    "deny", "manual", p.price.toFixed(2), ships, "TRUE", "active",
  ];
  rows.push(row.map(csvCell).join(","));
}
writeFileSync(join(ROOT, "products-shopify-import.csv"), rows.join("\n"));

// ---- 2) Shop-overzichtspagina (alle 91, NL) ----
const euro = (n) => "EUR " + n.toFixed(2).replace(".", ",");
const vendors = [...new Set(products.map((p) => p.vendor))].sort();
const segments = [...new Set(products.map((p) => p.segment))].sort();
const cards = products.map((p) => `<div class="pcard" data-vendor="${p.vendor}" data-seg="${p.segment}">
  <div class="pb"><div class="pub">${p.vendor}</div><h3>${p.name}</h3>
  <div class="price">${euro(p.price)} <small>excl. btw</small></div></div></div>`).join("");
const opt = (arr) => arr.map((x) => `<option value="${x}">${x}</option>`).join("");

const shop = `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Shop - alle producten | hrmforce</title>
<link rel="stylesheet" href="style.css">
<style>
.shopwrap{max-width:1180px;margin:0 auto;padding:30px 24px 64px}
.toolbar{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:18px 0 24px}
.toolbar select,.toolbar input{padding:10px 12px;border:1px solid var(--line);border-radius:10px;font-size:14px}
.toolbar .count{margin-left:auto;color:var(--muted);font-size:14px}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
@media(max-width:980px){.grid{grid-template-columns:repeat(2,1fr)}}
.pcard{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;transition:.15s}
.pcard:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.pcard .pb{padding:16px}
.pcard .pub{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--blue);font-weight:700;margin-bottom:4px}
.pcard h3{font-size:15px;margin-bottom:8px;min-height:40px}
.pcard .price{font-weight:800;color:var(--navy);font-size:16px}
.pcard .price small{font-weight:500;color:var(--muted);font-size:11px}
</style></head><body>
<div style="background:#fff8f3;border-bottom:1px dashed #d95d15;color:#8a4a25;font-size:13px;text-align:center;padding:8px">Shop-demo - alle 91 producten uit de hrmforce-catalogus - filter op uitgever/segment</div>
<div class="topbar"><div class="wrap" style="display:flex;justify-content:flex-end;align-items:center;gap:18px;height:38px">
  <a href="index.html" style="color:#fff">Home</a></div></div>
<header><div class="wrap nav">
  <a class="logo" href="index.html"><img src="https://hrmforce.com/wp-content/uploads/2022/03/HRM-LOGO.svg" alt="hrmforce"></a>
  <nav class="menu"><a href="shop.html" class="active">Shop</a><a href="assessment-big-five.html">Online Assessments</a>
  <a href="hrm-oplossingen.html">HRM Oplossingen</a><a href="advies.html">Advies</a><a href="over-ons.html">Over ons</a><a href="contact.html">Contact</a></nav>
  <div class="nav-cta"><a href="contact.html" class="btn btn-primary">Claim gratis demo</a></div>
</div></header>
<div class="shophead" style="background:linear-gradient(160deg,var(--navy),var(--navy-deep));color:#fff;padding:40px 0"><div class="wrap">
  <h1 style="color:#fff;font-size:30px">HRMforce shop</h1>
  <p style="color:#c4d2e6;max-width:760px">Alle ${products.length} vragenlijsten en testen van meerdere leveranciers, direct te bestellen.</p></div></div>
<div class="shopwrap">
  <div class="toolbar">
    <select id="fv"><option value="">Alle uitgevers</option>${opt(vendors)}</select>
    <select id="fs"><option value="">Alle segmenten</option>${opt(segments)}</select>
    <input id="fq" placeholder="Zoek een test...">
    <span class="count" id="count"></span>
  </div>
  <div class="grid" id="grid">${cards}</div>
</div>
<script>
const grid=document.getElementById('grid'),fv=document.getElementById('fv'),fs=document.getElementById('fs'),fq=document.getElementById('fq'),count=document.getElementById('count');
function apply(){const v=fv.value,s=fs.value,q=fq.value.toLowerCase();let n=0;
  for(const c of grid.children){const okv=!v||c.dataset.vendor===v,oks=!s||c.dataset.seg===s,okq=!q||c.querySelector('h3').textContent.toLowerCase().includes(q);
    const show=okv&&oks&&okq;c.style.display=show?'':'none';if(show)n++;}
  count.textContent=n+' van ${products.length} producten';}
[fv,fs,fq].forEach(e=>e.addEventListener('input',apply));apply();
</script></body></html>`;
writeFileSync(join(DEMO, "shop.html"), shop);
console.log(`CSV (${products.length} producten) + shop.html gegenereerd.`);
