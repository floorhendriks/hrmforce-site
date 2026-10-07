import fs from 'node:fs';
import {createClient} from '@sanity/client';
const c=createClient({projectId:'hqo56w28',dataset:'production',apiVersion:'2024-01-01',useCdn:false});
const A=await c.fetch('*[_type=="article" && defined(path) && defined(body)]{_id,path,title,body,excerpt,metaDescription}');
const nl=A.filter(x=>!/^\/?(en|de|fr|es|ro)\//.test(x.path));
fs.writeFileSync('kc-nl.json',JSON.stringify(nl));
console.log('nl',nl.length,fs.statSync('kc-nl.json').size);
