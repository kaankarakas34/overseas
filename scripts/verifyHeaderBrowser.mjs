import fs from 'node:fs';import ts from 'typescript';import {spawnSync} from 'node:child_process';
const cli=process.argv[2];const base=process.argv[3]||'http://127.0.0.1:5188';
const nav=JSON.parse(fs.readFileSync('src/data/headerNavigation.json','utf8'));
fs.writeFileSync('output/playwright/master-data.mjs',ts.transpileModule(fs.readFileSync('src/data/masterPlanData.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
const {MASTER_SERVICES}=await import('../output/playwright/master-data.mjs');
const urls=[...new Set([...nav.flatMap(g=>[g.url,...g.links.map(l=>l.url)]),...MASTER_SERVICES.map(s=>'/hizmetler/'+s.id),'/doktor-marka-yonetimi','/'])];
function run(args){const r=spawnSync(process.execPath,[cli,'-s=overseas-nav4',...args],{encoding:'utf8',windowsHide:true});fs.appendFileSync('output/playwright/nav-04-browser.log',r.stdout+r.stderr);if(r.status!==0||r.stdout.includes('### Error'))throw Error(r.stdout+r.stderr);console.log('PASS command: '+args[0]);}
run(['open',base+'/hizmetler?lang=tr']);run(['resize','1440','1000']);run(['snapshot']);
run(['run-code',`async page => {
 await page.route(/google-analytics|googletagmanager|facebook/,r=>r.abort());
 await page.evaluate(()=>{window.__navEvents=[];window.gtag=(...args)=>window.__navEvents.push(args)});
 const nav=page.locator('header nav[aria-label="Ana navigasyon"]');
 if(await nav.locator(':scope > div > a').count()!==6)throw Error('Expected six top sections');
 const summary=nav.locator('summary').first();await summary.focus();await page.keyboard.press('Enter');await page.waitForFunction(()=>document.querySelector('header details')?.open);
 if(await nav.locator('details').first().locator('a').count()!==7)throw Error('Expected all services and six families');
 await page.screenshot({path:'output/playwright/nav-04-desktop.png'});
 await page.keyboard.press('Escape');if(await summary.evaluate(el=>el.parentElement.open))throw Error('Escape did not close');if(!await summary.evaluate(el=>el===document.activeElement))throw Error('Focus not returned');
 await page.keyboard.press('Space');await page.waitForFunction(()=>document.querySelector('header details')?.open);await page.mouse.click(1400,800);if(await summary.evaluate(el=>el.parentElement.open))throw Error('Outside click did not close');
 await summary.click();await nav.locator('a[href="/hizmetler/crm-otomasyon"]').click();await page.waitForURL('**/hizmetler/crm-otomasyon');if(await page.locator('header details[open]').count())throw Error('Route did not close menu');
 if(!await page.evaluate(()=>window.__navEvents.some(e=>e[1]==='header_navigation_select'&&e[2].target_path==='/hizmetler/crm-otomasyon')))throw Error('Navigation event missing');
 await page.locator('header').getByRole('button',{name:'Büyüme Analizi Al',exact:true}).click();await page.getByRole('button',{name:'Kapat',exact:true}).first().waitFor();
 if(!await page.evaluate(()=>window.__navEvents.some(e=>e[1]==='growth_analysis_open'&&e[2].source==='header')))throw Error('Header CTA event missing');
 let calls=0;await page.route('**/api/contact',r=>r.fulfill({status:++calls===1?503:200,contentType:'application/json',body:JSON.stringify({success:calls>1})}));
 const form=page.locator('form');for(const input of await form.locator('input[required]').all()){const type=await input.getAttribute('type');if(type==='checkbox')await input.check();else await input.fill(type==='email'?'nav-check@example.invalid':type==='tel'?'05000000000':'Sentetik Kontrol');}
 await form.locator('button[type="submit"]').click();await page.getByRole('alert').waitFor();if(await page.evaluate(()=>window.__navEvents.some(e=>e[1]==='generate_lead')))throw Error('Failed request generated lead');
 await form.locator('button[type="submit"]').click();await page.waitForFunction(()=>window.__navEvents.some(e=>e[1]==='generate_lead'));if(await page.getByRole('alert').count())throw Error('Success still error');await page.getByRole('button',{name:'Kapat',exact:true}).first().click();
 console.log('PASS: desktop keyboard, focus, outside/route close, analytics, mocked form failure/success');
}`]);
run(['goto',base+'/hizmetler?lang=en']);run(['snapshot']);
run(['run-code',`async page => {if(await page.locator('header nav[aria-label="Main navigation"] > div > a').count()!==6)throw Error('English six sections');await page.locator('header').getByRole('button',{name:'Get a Growth Analysis',exact:true}).click();await page.getByRole('button',{name:'Close',exact:true}).first().waitFor();await page.getByRole('button',{name:'Close',exact:true}).first().click();}`]);
run(['goto',base+'/hizmetler?lang=tr']);run(['resize','390','844']);run(['snapshot']);
run(['run-code',`async page => {await page.locator('header').getByRole('button',{name:'Menüyü Aç',exact:true}).click();const nav=page.locator('#mobile-navigation');if(await nav.locator(':scope > div > a').count()!==6)throw Error('Mobile hierarchy');await nav.locator('summary').first().click();if(await nav.locator('details').first().locator('a').count()!==7)throw Error('Mobile service families');if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Mobile overflow');await page.screenshot({path:'output/playwright/nav-04-mobile.png'});await page.keyboard.press('Escape');await page.keyboard.press('Escape');if(await nav.count())throw Error('Escape did not close mobile');await page.locator('header').getByRole('button',{name:'Menüyü Aç',exact:true}).click();await page.evaluate(()=>{window.gtag=undefined});await page.locator('#mobile-navigation').getByRole('button',{name:'Büyüme Analizi Al',exact:true}).click();await page.getByRole('button',{name:'Kapat',exact:true}).first().waitFor();await page.getByRole('button',{name:'Kapat',exact:true}).first().click();console.log('PASS: mobile hierarchy, overflow, close, CTA without analytics');}`]);
run(['resize','1100','900']);run(['snapshot']);run(['run-code',`async page => {if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Intermediate overflow');if(!await page.locator('header').getByRole('button',{name:'Menüyü Aç',exact:true}).isVisible())throw Error('Intermediate navigation unavailable');}`]);
run(['run-code',`async page => {const results=[];for(const path of ${JSON.stringify(urls)}){const response=await page.goto(${JSON.stringify(base)}+path);await page.locator('header button[aria-controls="mobile-navigation"]').waitFor({state:'attached'});if(response.status()!==200||/404|Sayfa Bulunamadı/.test(await page.title()))throw Error('Broken route '+path);await page.locator('link[rel="canonical"]').waitFor({state:'attached'});results.push({path,status:response.status()});}console.log('PASS: '+results.length+' new/old header destinations resolve without soft/hard 404');await page.evaluate(r=>{window.__routeResults=r},results);}`]);
run(['close']);console.log('NAV-04 browser acceptance PASS; '+urls.length+' URLs checked.');
