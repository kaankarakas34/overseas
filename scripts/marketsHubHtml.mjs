import fs from 'node:fs';

export const marketsHub = JSON.parse(fs.readFileSync(new URL('../src/data/marketsHub.json', import.meta.url), 'utf8'));
const families = JSON.parse(fs.readFileSync(new URL('../src/data/serviceFamilies.json', import.meta.url), 'utf8'));
const specialties = JSON.parse(fs.readFileSync(new URL('../src/data/specialtiesHub.json', import.meta.url), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

// React and the initial no-JavaScript HTML read the same copy and link registry.
export function marketsHubHtml() {
  const { markets, copy: { tr: copy } } = marketsHub;
  const faq = {'@context':'https://schema.org','@type':'FAQPage',mainEntity:copy.faqs.map(item => ({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}}))};
  return `
    <nav aria-label="İçerik yolu"><a href="/">${escape(copy.home)}</a> / <span aria-current="page">${escape(copy.directory)}</span></nav>
    <p>${escape(copy.intro)}</p><p><a href="/teklif-al">${escape(copy.cta)}</a></p>
    <section><h2>${escape(copy.directoryTitle)}</h2><p>${escape(copy.directoryIntro)}</p>${markets.map(market => `<article><h3>${escape(market.tr)}</h3><p>${escape(market.summary.tr)}</p><p>${escape(copy.branchLinks)}</p><ul>${market.branches.map(slug => `<li><a href="/${escape(slug)}">${escape(specialties.branches.find(item => item.slug === slug).tr)}</a></li>`).join('')}</ul><a href="/${escape(market.slug)}">${escape(copy.detail)}: ${escape(market.tr)}</a></article>`).join('')}</section>
    <section><h2>${escape(copy.matrixTitle)}</h2><p>${escape(copy.matrixIntro)}</p><table><caption>${escape(copy.matrixTitle)}</caption><thead><tr>${copy.matrixColumns.map(label => `<th scope="col">${escape(label)}</th>`).join('')}</tr></thead><tbody>${markets.map(market => `<tr><th scope="row"><a href="/${escape(market.slug)}">${escape(market.tr)}</a></th><td>${escape(market.question.tr)}</td><td>${escape(market.input.tr)}</td></tr>`).join('')}</tbody></table></section>
    <section><h2>${escape(copy.expansionTitle)}</h2><p>${escape(copy.expansionIntro)}</p></section>
    <section><h2>${escape(copy.reviewTitle)}</h2><p>${escape(copy.reviewIntro)}</p>${copy.reviews.map(item => `<h3>${escape(item.title)}</h3><p>${escape(item.text)}</p>`).join('')}</section>
    <section><h2>${escape(copy.specialtiesTitle)}</h2><p>${escape(copy.specialtiesIntro)}</p><a href="/sektorler">${escape(copy.specialtiesLink)}</a></section>
    <section><h2>${escape(copy.servicesTitle)}</h2><p>${escape(copy.servicesIntro)}</p><ul>${families.map(family => `<li><a href="${escape(family.url)}">${escape(family.name.tr)}</a>: ${escape(family.description.tr)}</li>`).join('')}</ul></section>
    <section><h2>${escape(copy.faqTitle)}</h2>${copy.faqs.map(item => `<h3>${escape(item.q)}</h3><p>${escape(item.a)}</p>`).join('')}</section>
    <section><h2>${escape(copy.ctaTitle)}</h2><p>${escape(copy.ctaText)}</p><a href="/teklif-al">${escape(copy.cta)}</a></section>
    <script type="application/ld+json">${JSON.stringify(faq).replace(/</g,'\\u003c')}</script>`;
}
