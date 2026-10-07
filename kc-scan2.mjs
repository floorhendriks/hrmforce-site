import fs from 'node:fs';
import {createClient} from '@sanity/client';
const c=createClient({projectId:'hqo56w28',dataset:'production',apiVersion:'2024-01-01',useCdn:false});
const A=await c.fetch('*[_type=="article" && defined(path) && defined(body)]{_id,path,title,body,excerpt,metaDescription}');
fs.writeFileSync('kc.json',JSON.stringify(A));
const lang=p=>{const m=/^\/?(en|de|fr|es|ro)\//.exec(p); return m?m[1]:'nl';};
const strip=h=>String(h||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
const PH={
 en:['leading provider','advanced HR tools','advanced online assessments','a wide range of','in the world of','plays an important role','the key to','more and more important','state-of-the-art','seamless','seamlessly','crucial','essential','guaranteed','optimize','optimise'],
 de:['führender Anbieter','fortschrittliche HR-Tools','eine breite Palette','in der Welt der','spielt eine wichtige Rolle','der Schlüssel zu','immer wichtiger','nahtlos','entscheidend','unerlässlich','garantiert','optimieren'],
 fr:['fournisseur de premier plan','un large éventail','dans le monde de','joue un rôle important','la clé de','de plus en plus important','transparente','crucial','essentiel','garanti','optimiser'],
 es:['proveedor líder','una amplia gama','en el mundo de','desempeña un papel importante','la clave para','cada vez más importante','crucial','esencial','garantizado','optimizar'],
 ro:['furnizor de top','o gamă largă','în lumea','joacă un rol important','cheia către','tot mai important','crucial','esențial','garantat','optimiza'],
};
const dash={}, cnt={};
for(const a of A){
 const L=lang(a.path); if(L==='nl') continue;
 const t=[strip(a.title),strip(a.excerpt),strip(a.metaDescription),strip(a.body)].join(' . ');
 dash[L]=(dash[L]||0)+((t.match(/[–—]/g)||[]).length);
 for(const p of (PH[L]||[])){
  const n=(t.match(new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'))||[]).length;
  if(n){ const k=L+' | '+p; cnt[k]=(cnt[k]||0)+n; }
 }
}
console.log('artikelen totaal',A.length);
console.log('streepjes per taal:',dash);
console.log(Object.entries(cnt).sort((a,b)=>b[1]-a[1]).map(([k,v])=>v+'  '+k).join('\n'));
