import fs from 'node:fs';
const A=JSON.parse(fs.readFileSync('kc.json','utf8')).filter(x=>!/^\/?(en|de|fr|es|ro)\//.test(x.path));
const strip=h=>String(h||'').replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ');
const W=['enkele','cruciaal','cruciale','essentieel','essentiele','leuk','geavanceerde','geavanceerd','efficient','uniek','unieke','eenvoudig','eenvoudige','sommige','impact','kwaliteit','innovatief','innovatieve','elimineren','optimaliseren','toonaangevend','toonaangevende','comfortabel','betrouwbaar','betrouwbare','aanzienlijk','aanzienlijke','combineren','combineert','combinatie','goed','goede','kwalitatief','modern','moderne','bovendien','naadloos','naadloze','sluiten','sluit','stijlvol'];
const C=['in de wereld van','speelt een belangrijke rol','is meer dan alleen','gaat verder dan','naar een hoger niveau','de sleutel tot','steeds belangrijker','een breed scala','in een tijd waarin','vandaag de dag','of je nu','bij uitstek','in dit artikel','in deze blog','laten we kijken naar','we nemen je mee','niet alleen','gegarandeerd','de beste'];
const rxW=new RegExp('(?<![a-z\\u00e0-\\u00ff])('+W.join('|')+')(?![a-z\\u00e0-\\u00ff])','gi');
const rxC=new RegExp('('+C.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')','gi');
const ctx=new Map(), tot=new Map(); let dash=0;
const add=(k)=>ctx.set(k,(ctx.get(k)||0)+1);
for(const a of A){
  const t=[strip(a.title),strip(a.excerpt),strip(a.metaDescription),strip(a.body)].join(' . ');
  dash+=(t.match(/[–—]/g)||[]).length;
  for(const rx of [rxW,rxC]){ rx.lastIndex=0; let m;
    while((m=rx.exec(t))){ const w=m[1].toLowerCase(); tot.set(w,(tot.get(w)||0)+1);
      add(w+'\t'+t.slice(Math.max(0,m.index-55),m.index+m[1].length+55).trim()); } }
}
let out='ARTIKELEN NL: '+A.length+'\nGEDACHTESTREEPJES: '+dash+'\n\n== TOTALEN ==\n';
for(const [w,n] of [...tot].sort((a,b)=>b[1]-a[1])) out+=String(n).padStart(6)+'  '+w+'\n';
out+='\n== CONTEXTEN ==\n';
for(const [k,n] of [...ctx].sort((a,b)=>b[1]-a[1]).slice(0,3500)) out+=String(n).padStart(4)+'  '+k+'\n';
fs.writeFileSync('kc-rapport.txt',out);
console.log('rapport',fs.statSync('kc-rapport.txt').size,'bytes; unieke contexten',ctx.size);
