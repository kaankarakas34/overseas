import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';
import vm from 'node:vm';

const hub = JSON.parse(fs.readFileSync('src/data/marketsHub.json', 'utf8'));
const specialties = JSON.parse(fs.readFileSync('src/data/specialtiesHub.json', 'utf8'));
const families = JSON.parse(fs.readFileSync('src/data/serviceFamilies.json', 'utf8'));
const html = fs.readFileSync('dist/ulkeler/index.html', 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const escape = text => text.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function registry(file, key) {
  const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
  const sandbox = {exports:{}};
  vm.runInNewContext(compiled,sandbox);
  return Array.from(sandbox.exports[key], item => item.slug).sort();
}
assert.equal(hub.markets.length,4);
assert.equal(new Set(hub.markets.map(item => item.slug)).size,4);
for (const [file,key] of [['src/data/masterPlanData.ts','MASTER_MARKETS'],['src/i18n/masterPlanData.en.ts','MASTER_MARKETS_EN']]) {
  assert.deepEqual(hub.markets.map(item => item.slug).sort(),registry(file,key),'Existing market registry: '+key);
}
const targets = new Set(['/sektorler','/teklif-al',...families.map(item => item.url)]);
for (const market of hub.markets) {
  targets.add('/'+market.slug);
  assert.ok(main.includes(escape(market.summary.tr)));
  assert.ok(main.includes(escape(market.question.tr)));
  assert.ok(main.includes(escape(market.input.tr)));
  assert.equal(market.branches.length,2);
  for (const slug of market.branches) {
    assert.ok(specialties.branches.some(item => item.slug === slug));
    targets.add('/'+slug);
  }
}
const schemas = text => [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
for (const url of targets) {
  assert.ok(main.includes(`href="${url}"`),'Crawlable link: '+url);
  const target = fs.readFileSync('dist'+url+'/index.html','utf8');
  assert.ok(!/<title[^>]*>404|Sayfa Bulunamadı/.test(target),'Real target: '+url);
  assert.equal((target.match(/rel="canonical"/g)||[]).length,1);
  assert.ok(target.includes(`rel="canonical" href="https://www.overseas.marketing${url}"`));
}
for (const market of hub.markets) {
  const target = fs.readFileSync('dist/'+market.slug+'/index.html','utf8');
  assert.deepEqual(schemas(target).find(item=>item['@type']==='BreadcrumbList').itemListElement.map(item=>item.item),['https://www.overseas.marketing','https://www.overseas.marketing/ulkeler','https://www.overseas.marketing/'+market.slug]);
}
assert.equal((html.match(/<h1\b/g)||[]).length,1);
assert.equal((html.match(/rel="canonical"/g)||[]).length,1);
assert.ok(html.includes('rel="canonical" href="https://www.overseas.marketing/ulkeler"'));
assert.ok(html.includes(escape(hub.copy.tr.h1)));
assert.match(html.match(/<meta\b[^>]*name="robots"[^>]*>/)?.[0]||'',/content="index, follow/);
const faq=schemas(html).find(item=>item['@type']==='FAQPage');
assert.deepEqual(faq.mainEntity.map(item=>({q:item.name,a:item.acceptedAnswer.text})),hub.copy.tr.faqs);
for (const item of hub.copy.tr.faqs) assert.ok(main.includes(escape(item.a)));
assert.deepEqual(schemas(html).find(item=>item['@type']==='BreadcrumbList').itemListElement.map(item=>item.item),['https://www.overseas.marketing','https://www.overseas.marketing/ulkeler']);
assert.ok(!/7\.6M|7\.6 milyon|%100|%70|yüzde 70|£2,500|€3,000|25,000|4 ila 8 hafta|mevzuata tam uyumlu|birincil öneri|GDPR\/DSGVO onaylı/i.test(main),'Unsupported claims removed from hub');
const baselineRef=process.argv[3]||'HEAD';
for (const file of ['src/components/Navbar.tsx','src/data/headerNavigation.json','src/data/masterPlanData.ts','src/i18n/masterPlanData.en.ts','src/App.tsx','public/sitemap.xml','vercel.json']) {
  assert.equal(execFileSync('git',['diff',baselineRef,'--',file],{encoding:'utf8'}).trim(),'','Protected file unchanged: '+file);
}
console.log(`PASS: 4 registered countries; ${targets.size} real targets; shared B2B copy, H1/canonical/robots, FAQ/schema and market breadcrumbs; removed unsupported claims; header/route/sitemap/deploy configuration unchanged`);
if(process.argv[2]) {
  const baseline=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
  for(const [file,before] of Object.entries(baseline)) {
    const after=fs.readFileSync(file,'utf8');
    const tags=[...after.matchAll(/<title[^>]*>[^<]*<\/title>|<meta[^>]*(?:name="(?:description|robots)")[^>]*>|<link[^>]*(?:rel="(?:canonical|alternate)")[^>]*>/g)].map(m=>m[0]);
    assert.deepEqual(tags,before.tags,'Baseline metadata: '+file);
    assert.equal(after.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0],before.header,'Baseline header: '+file);
  }
  console.log(`PASS: ${Object.keys(baseline).length} index.html files retain SEO metadata and identical static headers`);
}
