import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

const cli=process.argv[2];
const base=process.argv[3]||'http://127.0.0.1:5197';
if(!cli)throw new Error('Pass the installed playwright-cli.js path');
const hub=JSON.parse(fs.readFileSync('src/data/marketsHub.json','utf8'));
const families=JSON.parse(fs.readFileSync('src/data/serviceFamilies.json','utf8'));
const local=new URL(base).hostname==='127.0.0.1'||new URL(base).hostname==='localhost';
fs.mkdirSync('output/playwright',{recursive:true});
const log='output/playwright/nav-06-browser-'+(local?'local':'live')+'.log';
fs.writeFileSync(log,'NAV-06 browser acceptance: '+base+'\n');
function run(args) {
  if(args[0]==='run-code') {
    const file='output/playwright/nav-06-browser-code.js';
    fs.writeFileSync(file,args[1]);args=['run-code','--filename='+file];
  }
  const result=spawnSync(process.execPath,[cli,'-s=overseas-nav06',...args],{encoding:'utf8',windowsHide:true});
  if(result.error)throw result.error;
  fs.appendFileSync(log,(result.stdout||'')+(result.stderr||''));
  if(result.status!==0||result.stdout.includes('### Error'))throw new Error(result.stderr||result.stdout);
  console.log('PASS: '+args[0]);
}
run(['open',base+'/ulkeler?lang=tr']);
run(['snapshot','--filename=output/playwright/nav-06-start.yml']);
run(['run-code',`async page => {
  await page.route(/googletagmanager.com|google-analytics.com|connect.facebook.net|facebook.com/,route=>route.abort());
  await page.route('**/api/contact',()=>{throw new Error('Do not send real enquiries');});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  const hub=${JSON.stringify(hub)};const families=${JSON.stringify(families)};
  const base=${JSON.stringify(base)};const local=${local};
  for(const language of ['tr','en']) {
    for(const width of [1440,390]) {
      await page.setViewportSize({width,height:1000});
      await page.goto(base+'/ulkeler?lang='+language);
      const copy=hub.copy[language];
      const root=page.locator('[data-markets-hub]');
      await root.getByRole('heading',{level:1,name:copy.h1,exact:true}).waitFor();
      if(await page.locator('h1').count()!==1)throw Error('One H1');
      if(await page.locator('link[rel="canonical"]').count()!==1)throw Error('One canonical');
      if(await page.locator('link[rel="canonical"]').getAttribute('href')!=='https://www.overseas.marketing/ulkeler'+(language==='en'?'?lang=en':''))throw Error('Canonical');
      if(await root.locator('article[data-market]').count()!==4)throw Error('4 country guides');
      if(await root.locator('article[data-market-service]').count()!==6)throw Error('6 separate services');
      for(const market of hub.markets) {
        const card=root.locator('article[data-market="'+market.slug+'"]');
        if(!await card.getByText(market.summary[language],{exact:true}).isVisible())throw Error('Country copy');
        if(await card.locator('a[href="/'+market.slug+(language==='en'?'?lang=en':'')+'"]').count()!==1)throw Error('Country link/language');
        for(const slug of market.branches)if(await card.locator('a[href="/'+slug+(language==='en'?'?lang=en':'')+'"]').count()!==1)throw Error('Branch link/language');
      }
      if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Horizontal page overflow');
      if(await root.locator('table tbody tr').count()!==4)throw Error('4 planning rows');
      for(let index=0;index<copy.faqs.length;index++) {
        const button=root.locator('#market-faq-'+index);
        if(await button.getAttribute('aria-expanded')==='true')await button.click();
        await button.focus();await page.keyboard.press('Enter');
        if(await button.getAttribute('aria-expanded')!=='true')throw Error('FAQ aria-expanded');
        if(await root.locator('#market-answer-'+index).innerText()!==copy.faqs[index].a)throw Error('FAQ answer');
        await page.keyboard.press('Space');
        if(await root.locator('#market-answer-'+index).isVisible())throw Error('FAQ close');
      }
      const schemas=await page.locator('script[type="application/ld+json"]').evaluateAll(nodes=>nodes.map(n=>JSON.parse(n.textContent)));
      const faq=schemas.find(s=>s['@type']==='FAQPage');
      if(JSON.stringify(faq.mainEntity.map(q=>({q:q.name,a:q.acceptedAnswer.text})))!==JSON.stringify(copy.faqs))throw Error('FAQ schema parity');
      const breadcrumb=schemas.find(s=>s['@type']==='BreadcrumbList');
      if(JSON.stringify(breadcrumb.itemListElement.map(i=>i.item))!==JSON.stringify(['https://www.overseas.marketing','https://www.overseas.marketing/ulkeler']))throw Error('Breadcrumb schema');
      await page.evaluate(()=>{window.__nav06Events=[];window.gtag=(...args)=>window.__nav06Events.push(args);});
      const ctas=root.getByRole('button',{name:copy.cta,exact:true});
      if(await ctas.count()!==2)throw Error('2 CTA positions');
      for(const cta of await ctas.all()) {
        await cta.click();const close=page.getByRole('button',{name:language==='en'?'Close':'Kapat',exact:true});await close.waitFor();
        if(!await page.locator('form input[type="email"]').isVisible())throw Error('Real consultation modal');
        await close.click();
      }
      const events=await page.evaluate(()=>window.__nav06Events.filter(e=>e[1]==='growth_analysis_open'));
      if(events.length!==2||events.some(e=>e[2].source!=='markets_hub'||e[2].page_path!=='/ulkeler'||JSON.stringify(Object.keys(e[2]).sort())!==JSON.stringify(['language','page_path','source'])))throw Error('CTA events/PII');
      await page.evaluate(()=>{window.gtag=()=>{throw Error('analytics unavailable');};});
      await ctas.first().click();await page.getByRole('button',{name:language==='en'?'Close':'Kapat',exact:true}).click();
      await root.locator('#market-faq-0').click();
      await page.evaluate(()=>scrollTo(0,0));
      await page.screenshot({path:'output/playwright/nav-06-'+(local?'local':'live')+'-'+language+'-'+width+'.png',fullPage:true});
    }
  }
  const targets=[...new Set([...hub.markets.map(m=>'/'+m.slug),...hub.markets.flatMap(m=>m.branches.map(s=>'/'+s)),...families.map(f=>f.url),'/sektorler','/teklif-al'])];
  for(const url of ['/ulkeler',...targets]) {
    const response=await page.request.get(base+url+(local?'/index.html':''));const html=await response.text();
    if(response.status()!==200||/<title[^>]*>404|Sayfa Bulunamadı/.test(html)||!html.includes('href="https://www.overseas.marketing'+url+'"'))throw Error('HTTP/canonical/soft404: '+url);
  }
  for(const market of hub.markets) {
    await page.goto(base+'/ulkeler?lang=en');
    const card=page.locator('article[data-market="'+market.slug+'"]');await card.waitFor();
    await card.locator('a[href="/'+market.slug+'?lang=en"]').click();
    await page.waitForURL('**/'+market.slug+'?lang=en');
    const back=page.locator('main nav[aria-label="Breadcrumb"] a[href="/ulkeler"]');await back.waitFor();await back.click();
    await page.locator('[data-markets-hub]').waitFor();
  }
  await page.goto(base+'/ulkeler?lang=tr');
  await page.locator('article[data-market-service="technology"] a').click();
  await page.waitForURL('**/hizmetler/crm-otomasyon');
  await page.getByRole('heading',{level:1,name:'CRM & Otomasyon',exact:true}).waitFor();
  const noJs=await page.context().browser().newContext({javaScriptEnabled:false});
  const staticPage=await noJs.newPage();
  await staticPage.goto(base+'/ulkeler'+(local?'/index.html':''));
  for(const url of targets)if(!await staticPage.locator('main a[href="'+url+'"]').count())throw Error('No-JS link: '+url);
  if(!await staticPage.getByRole('link',{name:hub.copy.tr.cta,exact:true}).first().isVisible())throw Error('No-JS CTA');
  if(await staticPage.locator('h1').innerText()!==hub.copy.tr.h1)throw Error('No-JS hub H1');
  await noJs.close();
  if(errors.length)throw Error(errors.join('; '));
}`]);
fs.appendFileSync(log,'\nPASS: TR/EN at 1440/390px; 4 country cards, 7 unique specialty targets, 6 separate services; 4 planning rows; keyboard FAQ/schema; two CTAs, PII-free event and analytics failure; 20 HTTP/canonical pages; all country return paths and CRM navigation; no-JS links/CTA/H1; no uncaught page errors.\n');
console.log('PASS: NAV-06 browser acceptance; '+log);
