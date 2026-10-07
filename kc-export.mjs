import {createClient} from '@sanity/client';
import fs from 'node:fs';
const c=createClient({projectId:'hqo56w28',dataset:'production',apiVersion:'2024-01-01',useCdn:false});
const a=await c.fetch('*[_type=="article" && defined(path) && defined(body)]{_id,path,title,body,metaDescription,excerpt}');
fs.writeFileSync('kc.json', JSON.stringify(a));
const nl=a.filter(x=>!/^\/?(en|de|fr|es|ro)\//.test(x.path));
const bytes=nl.reduce((s,x)=>s+JSON.stringify(x).length,0);
console.log('totaal',a.length,'| nl',nl.length,'| nl-bytes',bytes,'| file',fs.statSync('kc.json').size);
