import fs from 'node:fs';

export const specialtiesHub = JSON.parse(fs.readFileSync(new URL('../src/data/specialtiesHub.json', import.meta.url), 'utf8'));
const families = JSON.parse(fs.readFileSync(new URL('../src/data/serviceFamilies.json', import.meta.url), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

// The initial, JavaScript-free page shares its copy and URLs with the React hub.
export function specialtiesHubHtml() {
  const { branches, categories, planningRows, copy: { tr: copy } } = specialtiesHub;
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: copy.faqs.map(faq => ({'@type':'Question', name:faq.q, acceptedAnswer:{'@type':'Answer', text:faq.a}}))
  };
  return `
    <nav aria-label="İçerik yolu"><a href="/">${escape(copy.home)}</a> / <span aria-current="page">${escape(copy.directory)}</span></nav>
    <p>${escape(copy.intro)}</p><p><a href="/teklif-al">${escape(copy.cta)}</a></p>
    <section><h2>${escape(copy.directoryTitle)}</h2>
      ${categories.map(category => `<section><h3>${escape(category.tr)}</h3><ul>${branches.filter(branch => branch.category === category.id).map(branch => `<li><a href="/${escape(branch.slug)}">${escape(branch.tr)}</a>: ${escape(branch.summary.tr)}</li>`).join('')}</ul></section>`).join('')}
    </section>
    <section><h2>${escape(copy.matrixTitle)}</h2><p>${escape(copy.matrixIntro)}</p>
      <table><caption>${escape(copy.matrixTitle)}</caption><thead><tr>${copy.matrixColumns.map(label => `<th scope="col">${escape(label)}</th>`).join('')}</tr></thead>
      <tbody>${planningRows.map(row => `<tr><th scope="row"><a href="/${escape(row.slug)}">${escape(branches.find(branch => branch.slug === row.slug).tr)}</a></th><td>${escape(row.question.tr)}</td><td>${escape(row.input.tr)}</td></tr>`).join('')}</tbody></table>
    </section>
    <section><h2>${escape(copy.reviewTitle)}</h2><p>${escape(copy.reviewIntro)}</p>${copy.reviews.map(item => `<h3>${escape(item.title)}</h3><p>${escape(item.text)}</p>`).join('')}</section>
    <section><h2>${escape(copy.servicesTitle)}</h2><p>${escape(copy.servicesIntro)}</p><ul>${families.map(family => `<li><a href="${escape(family.url)}">${escape(family.name.tr)}</a>: ${escape(family.description.tr)}</li>`).join('')}</ul></section>
    <section><h2>${escape(copy.faqTitle)}</h2>${copy.faqs.map(faq => `<h3>${escape(faq.q)}</h3><p>${escape(faq.a)}</p>`).join('')}</section>
    <section><h2>${escape(copy.ctaTitle)}</h2><p>${escape(copy.ctaText)}</p><a href="/teklif-al">${escape(copy.cta)}</a></section>
    <script type="application/ld+json">${JSON.stringify(faqSchema).replace(/</g, '\\u003c')}</script>`;
}
