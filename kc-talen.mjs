import fs from 'node:fs';
import {createClient} from '@sanity/client';
const APPLY=process.argv.includes('--apply');
const lang=p=>{const m=/^\/?(en|de|fr|es|ro)\//.exec(p); return m?m[1]:'nl';};
const PH={
 en:[[/leading provider/gi,'provider'],[/advanced online assessments/gi,'online assessments'],[/advanced HR tools/gi,'HR tools'],
     [/\bseamlessly\b/gi,'without extra steps'],[/\bseamless\b/gi,'uninterrupted'],[/\bguaranteed\b/gi,'reliable'],
     [/state-of-the-art/gi,'current'],[/a wide range of/gi,'a variety of']],
 de:[[/f\u00fchrender Anbieter/g,'Anbieter'],[/fortschrittliche HR-Tools/g,'HR-Tools'],
     [/\bnahtlos\b/gi,'ohne Zwischenschritte'],[/\bgarantiert\b/gi,'verl\u00e4sslich'],[/eine breite Palette/gi,'verschiedene']],
 fr:[[/fournisseur de premier plan/gi,'fournisseur'],[/\bgaranti\b/gi,'fiable'],[/un large \u00e9ventail/gi,'une s\u00e9rie']],
 es:[[/proveedor l\u00edder/gi,'proveedor'],[/\bgarantizado\b/gi,'fiable'],[/una amplia gama/gi,'una serie']],
 ro:[[/furnizor de top/gi,'furnizor'],[/\bgarantat\b/gi,'sigur'],[/o gam\u0103 larg\u0103/gi,'o serie']],
};
const dashes=t=>{
 t=t.replace(/(?<=\d)\s*[\u2014\u2013]\s*(?=\d)/g,'-');
 t=t.replace(/(?<=\d:\d\d)-(?=\d\d?:\d\d)/g,' - ');
 t=t.replace(/\s+[\u2014\u2013]\s+(?=[A-Z\u00c0-\u00dd])/g,': ');
 t=t.replace(/\s+[\u2014\u2013]\s+/g,', ');
 t=t.replace(/\s+[\u2014\u2013](?=\S)/g,', ');
 t=t.replace(/(?<=\S)[\u2014\u2013]\s+/g,', ');
 t=t.replace(/(?<=[^\W\d_])[\u2014\u2013](?=[^\W\d_])/g,'-');
 return t.replace(/, ,/g,',').replace(/,\s*([.!?])/g,'$1');
};
const txt=(t,L)=>{ if(!t) return t; t=dashes(t); for(const [r,v] of (PH[L]||[])) t=t.replace(r,v); return t; };
const fix=(t,L)=>{ if(!t) return t; let o='',p=0; for(const m of t.matchAll(/<[^>]*>/g)){ o+=txt(t.slice(p,m.index),L)+m[0]; p=m.index+m[0].length; } return o+txt(t.slice(p),L); };
const read=createClient({projectId:'hqo56w28',dataset:'production',apiVersion:'2024-01-01',useCdn:false});
const all=await read.fetch('*[_type=="article" && defined(path) && defined(body)]{_id,path,title,body,excerpt,metaDescription}');
const A=all.filter(x=>lang(x.path)!=='nl');
const patches=[];
for(const a of A){ const L=lang(a.path); const set={};
 for(const f of ['title','body','excerpt','metaDescription']){ const v=a[f]; if(typeof v!=='string') continue; const nv=fix(v,L); if(nv!==v) set[f]=nv; }
 if(Object.keys(set).length) patches.push({_id:a._id,path:a.path,taal:L,set}); }
const tagsOk=patches.every(p=>{ const o=A.find(x=>x._id===p._id); return !p.set.body || JSON.stringify(o.body.match(/<[^>]*>/g))===JSON.stringify(p.set.body.match(/<[^>]*>/g)); });
const per={}; for(const p of patches) per[p.taal]=(per[p.taal]||0)+1;
fs.writeFileSync('kc-talen.json',JSON.stringify(patches,null,1));
console.log('artikelen:',A.length,'| met wijziging:',patches.length,JSON.stringify(per),'| html ongemoeid:',tagsOk);
if(!tagsOk){ console.error('HTML-structuur veranderd, niets weggeschreven.'); process.exit(1); }
if(!APPLY){ console.log('Proefdraai. Bekijk kc-talen.json, daarna opnieuw met --apply.'); process.exit(0); }
const token=process.env.SANITY_WRITE_TOKEN; if(!token){ console.error('Geen SANITY_WRITE_TOKEN.'); process.exit(1); }
const w=createClient({projectId:'hqo56w28',dataset:'production',apiVersion:'2024-01-01',useCdn:false,token});
for(let i=0;i<patches.length;i+=25){ let tx=w.transaction();
 for(const p of patches.slice(i,i+25)) tx=tx.patch(p._id,{set:p.set});
 await tx.commit(); console.log('bijgewerkt',Math.min(i+25,patches.length),'/',patches.length); }
console.log('KLAAR');
