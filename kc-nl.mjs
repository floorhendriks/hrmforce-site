import fs from 'node:fs';
const a=JSON.parse(fs.readFileSync('kc.json','utf8')).filter(x=>!/^\/?(en|de|fr|es|ro)\//.test(x.path));
fs.writeFileSync('kc-nl.json',JSON.stringify(a));
console.log(a.length, fs.statSync('kc-nl.json').size);
