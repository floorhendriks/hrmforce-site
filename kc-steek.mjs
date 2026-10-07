import fs from 'node:fs';
const A=Object.fromEntries(JSON.parse(fs.readFileSync('kc.json','utf8')).map(x=>[x._id,x]));
const P=JSON.parse(fs.readFileSync('kc-talen.json','utf8'));
const st=h=>String(h||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
const seen={}; let n=0;
for(const p of P){ if(!p.set.body) continue; if((seen[p.taal]||0)>=2) continue;
 const o=st(A[p._id].body), v=st(p.set.body);
 let i=0; while(i<o.length && o[i]===v[i]) i++;
 if(i>=o.length) continue;
 seen[p.taal]=(seen[p.taal]||0)+1;
 console.log('['+p.taal+']', o.slice(Math.max(0,i-65), i+45));
 console.log('   ->', v.slice(Math.max(0,i-65), i+45));
 if(++n>11) break; }
