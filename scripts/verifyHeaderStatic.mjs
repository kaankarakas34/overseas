import fs from 'node:fs';import assert from 'node:assert/strict';
const groups=JSON.parse(fs.readFileSync('src/data/headerNavigation.json','utf8'));
const families=JSON.parse(fs.readFileSync('src/data/serviceFamilies.json','utf8'));
assert.equal(groups.length,6);assert.deepEqual(groups[0].links.slice(1).map(l=>l.url),families.map(f=>f.url));
const targets=[...new Set(groups.flatMap(g=>[g.url,...g.links.map(l=>l.url)]))];
for(const url of targets){const file='dist'+url+'/index.html';assert.ok(fs.existsSync(file),'Missing static destination '+url);const html=fs.readFileSync(file,'utf8');assert.ok(!/<title[^>]*>404/.test(html),'Soft 404 '+url);const header=html.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0];assert.ok(header,'Missing static header '+url);for(const g of groups)for(const l of g.links)assert.ok(header.includes('href="'+l.url+'"'),'Static header link parity '+url+' -> '+l.url);}
const baseline=process.argv[2];if(baseline){const before=JSON.parse(fs.readFileSync(baseline,'utf8'));for(const [file,tags] of Object.entries(before)){const html=fs.readFileSync(file,'utf8');const after=[...html.matchAll(/<title[^>]*>[^<]*<\/title>|<meta[^>]*(?:name="(?:description|robots)")[^>]*>|<link[^>]*(?:rel="(?:canonical|alternate)")[^>]*>/g)].map(m=>m[0]);assert.deepEqual(after,tags,'Changed SEO tags '+file);}console.log('PASS: '+Object.keys(before).length+' pages preserve baseline SEO metadata');}
console.log('PASS: six families, '+targets.length+' real static destinations and static header parity');
