import fs from 'node:fs';
import assert from 'node:assert/strict';
import {serviceDirectoryRoutes} from './serviceDirectoryRoutes.mjs';
const families=JSON.parse(fs.readFileSync('src/data/serviceFamilies.json','utf8'));
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
const escape=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
assert.equal(families.length,6);
for(const route of serviceDirectoryRoutes){
 const html=fs.readFileSync(`dist${route.path}/index.html`,'utf8');
 assert.equal((html.match(/<h1\b/g)||[]).length,1,route.path+' single H1');
 assert.ok(html.includes(route.h1),route.path+' H1');
 assert.ok(html.includes(route.title),route.path+' title');
 assert.ok(html.includes(`<meta data-rh="true" name="description" content="${route.description}"`),route.path+' description');
 assert.ok(html.includes(`rel="canonical" href="https://www.overseas.marketing${route.path}"`),route.path+' self canonical');
 assert.ok(!html.includes('content="noindex'),route.path+' indexable');
 assert.equal(sitemap.split(`<loc>https://www.overseas.marketing${route.path}</loc>`).length-1,1,route.path+' single sitemap entry');
 assert.ok(html.includes('Büyüme Analizi Al'),route.path+' static CTA');
}
const directory=fs.readFileSync('dist/hizmetler/index.html','utf8');
for(const family of families){
 assert.ok(directory.includes(`data-service-family="${family.id}"`));
 assert.ok(directory.includes(`href="${family.url}"`));
 assert.ok(directory.includes(escape(family.need.tr)));
 assert.ok(fs.existsSync(`dist${family.url}/index.html`),'Hub has a real generated page: '+family.url);

}
assert.ok(fs.readFileSync('dist/index.html','utf8').includes('href="/hizmetler"'),'Directory discovered from home footer');
console.log('NAV-03 PASS: 3 static pages; title/H1/meta/self-canonical/indexability/sitemap/CTA; 6 working static family hubs; home footer discovery.');
