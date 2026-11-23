import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';
import vm from 'node:vm';

const hub = JSON.parse(fs.readFileSync('src/data/specialtiesHub.json', 'utf8'));
const families = JSON.parse(fs.readFileSync('src/data/serviceFamilies.json', 'utf8'));
const html = fs.readFileSync('dist/sektorler/index.html', 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const escape = text => text.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const compiled = ts.transpileModule(fs.readFileSync('src/data/masterPlanData.ts', 'utf8'), { compilerOptions: {module: ts.ModuleKind.CommonJS} }).outputText;
const sandbox = { exports: {} };
vm.runInNewContext(compiled, sandbox);
assert.equal(hub.branches.length, 15);
assert.deepEqual(hub.branches.map(b => b.slug).sort(), Array.from(sandbox.exports.MASTER_BRANCHES, b => b.slug).sort(), 'Match the existing branch registry');
assert.equal(new Set(hub.branches.map(b => b.slug)).size, 15);
assert.deepEqual(hub.categories.map(c => hub.branches.filter(b => b.category === c.id).length), [5, 1, 3, 2, 4]);
for (const branch of hub.branches) {
  assert.ok(hub.categories.some(c => c.id === branch.category));
  assert.ok(main.includes(`href="/${branch.slug}"`));
  assert.ok(main.includes(escape(branch.summary.tr)), 'Shared static summary: ' + branch.slug);
}
for (const url of [...hub.branches.map(b => '/' + b.slug), ...families.map(f => f.url), '/teklif-al']) {
  assert.ok(main.includes(`href="${url}"`), 'Crawlable link ' + url);
  const target = fs.readFileSync('dist' + url + '/index.html', 'utf8');
  assert.ok(!/<title[^>]*>404|Sayfa Bulunamadı/.test(target), 'Real target ' + url);
  assert.equal((target.match(/rel="canonical"/g) || []).length, 1, 'Single target canonical ' + url);
}
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.ok(html.includes('rel="canonical" href="https://www.overseas.marketing/sektorler"'));
assert.ok(html.includes(escape(hub.copy.tr.h1)));
assert.match(html.match(/<meta\b[^>]*name="robots"[^>]*>/)?.[0] || '', /content="index, follow/);
const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
const faq = schemas.find(s => s['@type'] === 'FAQPage');
assert.deepEqual(faq.mainEntity.map(q => ({q:q.name, a:q.acceptedAnswer.text})), hub.copy.tr.faqs);
for (const entry of hub.copy.tr.faqs) assert.ok(main.includes(escape(entry.a)));
assert.deepEqual(schemas.find(s => s['@type'] === 'BreadcrumbList').itemListElement.map(i => i.item), ['https://www.overseas.marketing', 'https://www.overseas.marketing/sektorler']);
assert.ok(!/7\s*[–-]\s*21|3 kata|%100|12 Ay Takip Garantisi|Mevzuata Tam Uyumlu|birincil öneri/i.test(main), 'Remove unsupported hub claims');
for (const file of ['src/components/Navbar.tsx', 'src/data/headerNavigation.json', 'src/data/masterPlanData.ts', 'src/i18n/masterPlanData.en.ts', 'src/App.tsx', 'public/sitemap.xml']) {
  assert.equal(execFileSync('git', ['diff', 'HEAD', '--', file], {encoding:'utf8'}).trim(), '', 'Protected file unchanged: ' + file);
}
console.log('PASS: 15 registered branches, 5 categories, 6 family links and real static targets; H1/canonical/robots, shared copy/FAQ schema, breadcrumb, claim regression and protected files');

const baselinePath = process.argv[2];
if (baselinePath) {
  const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));
  for (const [file, before] of Object.entries(baseline)) {
    const after = fs.readFileSync(file, 'utf8');
    const tags = [...after.matchAll(/<title[^>]*>[^<]*<\/title>|<meta[^>]*(?:name="(?:description|robots)")[^>]*>|<link[^>]*(?:rel="(?:canonical|alternate)")[^>]*>/g)].map(m => m[0]);
    assert.deepEqual(tags, before.tags, 'Baseline SEO metadata ' + file);
    assert.equal(after.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0], before.header, 'Baseline header ' + file);
  }
  console.log(`PASS: ${Object.keys(baseline).length} pages retain baseline title/meta/robots/canonical/alternate and header`);
}
