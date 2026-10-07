import fs from 'node:fs';
const A=JSON.parse(fs.readFileSync('kc.json','utf8'));
const lang=p=>{const m=/^\/?(en|de|fr|es|ro)\//.exec(p); return m?m[1]:'nl';};
const strip=h=>String(h||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
const d={}, c={};
for(const a of A){ const L=lang(a.path); c[L]=(c[L]||0)+1;
 const t=[strip(a.title),strip(a.excerpt),strip(a.metaDescription),strip(a.body)].join(' . ');
 d[L]=(d[L]||0)+((t.match(/[–—]/g)||[]).length); }
console.log('artikelen per taal:',JSON.stringify(c));
console.log('streepjes per taal:',JSON.stringify(d));
