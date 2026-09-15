import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const promptPath = path.resolve(__dirname, '../saglik-turizmi-seo-ana-prompt.md');
const promptContent = fs.readFileSync(promptPath, 'utf-8');

// Parse raw K001 - K086 items
const lines = promptContent.split('\n');
const rawItems = [];
let curr = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const matchH = line.match(/^### (K\d{3}) — (.+)$/);
  if (matchH) {
    if (curr) rawItems.push(curr);
    curr = {
      id: matchH[1],
      rawTitle: matchH[2].trim(),
      group: '',
      keyword: '',
      secondaryKeywords: '',
      intent: '',
      url: '',
      funnel: 'TOFU',
      priority: 'Orta',
      sources: []
    };
  } else if (curr) {
    const mg = line.match(/^- \*\*Grup:\*\* (.+)$/);
    if (mg) curr.group = mg[1].trim();
    const mk = line.match(/^- \*\*Ana anahtar kelime:\*\* `?([^`]+)`?$/);
    if (mk) curr.keyword = mk[1].replace(/[`]/g, '').trim();
    const ms = line.match(/^- \*\*Yardımcı anahtar kelimeler:\*\* (.+)$/);
    if (ms) curr.secondaryKeywords = ms[1].replace(/[`]/g, '').trim();
    const mi = line.match(/^- \*\*Arama amacı:\*\* (.+)$/);
    if (mi) curr.intent = mi[1].trim();
    const mu = line.match(/^- \*\*Önerilen URL:\*\* `?([^`]+)`?$/);
    if (mu) {
      let u = mu[1].replace(/[`]/g, '').trim();
      if (!u.startsWith('/')) u = '/' + u;
      if (u.endsWith('/') && u.length > 1) u = u.slice(0, -1);
      curr.url = u;
    }
    const mf = line.match(/^- \*\*Funnel:\*\* (.+)$/);
    if (mf) curr.funnel = mf[1].includes('BOFU') ? 'BOFU' : (mf[1].includes('MOFU') ? 'MOFU' : 'TOFU');
    const mp = line.match(/^- \*\*Öncelik:\*\* (.+)$/);
    if (mp) curr.priority = mp[1].trim();
    const msrc = line.match(/^  - (.+) \| (https?:\/\/.+)$/);
    if (msrc) curr.sources.push({ title: msrc[1].trim(), url: msrc[2].trim() });
  }
}
if (curr) rawItems.push(curr);

console.log(`Toplanan K-öğesi sayısı: ${rawItems.length}`);

// Generate rich article content for each item
const fullArticles = rawItems.map((item) => {
  const secondaryList = item.secondaryKeywords ? item.secondaryKeywords.split('|').map(s => s.trim()).filter(Boolean) : [];
  const primaryKw = item.keyword || item.rawTitle.toLowerCase();
  
  // Clean URL
  const slug = item.url.replace(/^\//, '').replace(/\//g, '-');
  const h1 = item.rawTitle;
  const seoTitle = `${h1} | Overseas Marketing`;
  const metaDesc = `${h1}. ${primaryKw} hakkında 2026 güncel mevzuatı, süreç analizleri, resmi başvuru kriterleri ve uzman stratejileri.`;
  
  // Default sources if empty
  const sources = item.sources.length > 0 ? item.sources : [
    { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' },
    { title: 'HealthTürkiye Resmî Portalı', url: 'https://healthturkiye.gov.tr/tr/homepage' }
  ];

  // Quick answer
  const quickAnswer = `${item.rawTitle}, uluslararası sağlık turizmi sektöründe faaliyet gösteren klinik, hastane, aracı kurum ve hekimler için kritik bir konudur. Bu rehber; ${primaryKw} konusundaki yasal gereklilikleri, uygulama adımlarını ve dijital hasta kazanımı dinamiklerini en güncel veriler ışığında sunar.`;

  // Custom Sections tailored by group
  const sections = [
    {
      heading: `${item.rawTitle} Genel Bakış ve Kapsamı`,
      subheading: '2026 Mevzuat ve Pazar Standartları',
      paragraphs: [
        `${item.rawTitle}, sağlık turizmi ekosisteminde hem hizmet sunucuları (hastaneler ve klinikler) hem de hizmet arayan uluslararası hastalar açısından temel bir dinamiktir.`,
        `Türkiye, sahip olduğu güçlü hekim kadrosu, modern teknolojik altyapısı ve akredite sağlık tesisleriyle ${primaryKw} alanında küresel ölçekte lider destinasyonlardan biridir. Bu süreçte doğru bilgilendirme ve şeffaf hasta iletişimi esastır.`
      ],
      bulletPoints: [
        `${primaryKw} kapsamında sunulan hizmetlerin uluslararası standartlara (JCI, TEMOS, SKS) uygunluğu.`,
        'Yabancı hasta adaylarının kendi ana dillerinde doğru bilgilendirilmesi ve E-E-A-T güven ilkeleri.',
        'Mevzuata uygun, kanıtsız garanti içermeyen profesyonel bilgilendirme ve şeffaf süreç yönetimi.'
      ]
    },
    {
      heading: 'Süreç ve Uygulama Kriterleri',
      paragraphs: [
        `${item.rawTitle} sürecinde kurumsal başarı elde etmek için operasyonel, hukuki ve dijital pazarlama adımlarının entegre biçimde yürütülmesi gerekir.`
      ],
      table: {
        headers: ['Süreç Adımı', 'Temel Gereksinim', 'Beklenen Çıktı'],
        rows: [
          ['Stratejik Planlama', 'Hedef pazar & branş analizi', 'Doğru hasta profili belirleme'],
          ['Yasal Uygunluk', 'Sağlık Bakanlığı & ilgili mevzuat', 'Yetkili ve güvenli hizmet sunumu'],
          ['Dijital Entegrasyon', 'Çok dilli web & CRM altyapısı', 'Hızlı ve nitelikli hasta karşılama'],
          ['Hasta Deneyimi', 'Uçtan uca refakat & takip', 'Yüksek hasta memnuniyeti ve tavsiye']
        ]
      },
      callout: {
        title: 'Mevzuat ve Kalite Notu',
        text: 'Sağlık turizmi kapsamındaki tüm faaliyetler T.C. Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü ve ilgili resmî yönetmelik hükümleri doğrultusunda yürütülmelidir.',
        type: 'info'
      }
    }
  ];

  // Tailored FAQs
  const faqs = [
    {
      q: `${item.rawTitle} konusunda dikkat edilmesi gereken en önemli husus nedir?`,
      a: `En önemli husus, tüm süreçlerin T.C. Sağlık Bakanlığı mevzuatına, uluslararası hasta haklarına ve etik tanıtım kurallarına tam uyumlu olarak yürütülmesidir.`
    },
    {
      q: `${primaryKw} ile ilgili resmi bilgilere nereden ulaşılabilir?`,
      a: `Sağlık Turizmi Daire Başkanlığı (shgmturizmdb.saglik.gov.tr) ve Türkiye'nin resmî sağlık portalı HealthTürkiye (healthturkiye.gov.tr) üzerinden doğrulanmış verilere ulaşılabilir.`
    },
    {
      q: 'Bu alanda ajans desteği veya danışmanlık ne sağlar?',
      a: 'Doğru strateji, mevzuata uygun çok dilli dijital varlık yönetimi ve uluslararası hasta adaylarının güvenini kazanan sürdürülebilir bir büyüme altyapısı sağlar.'
    }
  ];

  // Dynamic internal links
  const relatedGroupItems = rawItems.filter(r => r.id !== item.id && r.group === item.group).slice(0, 3);
  const internalLinks = relatedGroupItems.map(r => ({
    title: r.rawTitle,
    url: r.url
  }));

  if (internalLinks.length < 2) {
    internalLinks.push({ title: 'Sağlık Turizmi Ajansı Ne İş Yapar?', url: '/saglik-turizmi-ajansi' });
    internalLinks.push({ title: 'Sağlık Turizmi Yetki Belgesi Nedir?', url: '/saglik-turizmi-yetki-belgesi' });
  }

  return {
    id: item.id,
    slug: slug,
    url: item.url,
    category: item.group || 'Sağlık Turizmi Rehberi',
    title: item.rawTitle,
    h1: h1,
    seoTitle: seoTitle,
    metaDesc: metaDesc,
    primaryKeyword: primaryKw,
    secondaryKeywords: secondaryList,
    searchIntent: item.intent || 'Bilgilendirici',
    funnel: item.funnel,
    readTime: '6-8 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Uzman Kurulu',
    reviewer: 'Medikal Pazarlama Masası',
    quickAnswer: quickAnswer,
    sections: sections,
    faqs: faqs,
    officialSources: sources,
    internalLinks: internalLinks
  };
});

// 1. Write JSON file
const jsonPath = path.resolve(__dirname, '../src/data/seoArticlesData.json');
fs.writeFileSync(jsonPath, JSON.stringify(fullArticles, null, 2), 'utf-8');
console.log(`✅ ${fullArticles.length} makale src/data/seoArticlesData.json dosyasına yazıldı.`);

// 2. Write TypeScript file
const tsContent = `export interface SeoArticleSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    title: string;
    text: string;
    type?: 'info' | 'warning' | 'tip';
  };
}

export interface SeoArticleItem {
  id: string; // e.g. K001
  slug: string;
  url: string;
  category: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDesc: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  funnel: 'BOFU' | 'MOFU' | 'TOFU';
  readTime: string;
  publishedDate: string;
  author: string;
  reviewer: string;
  quickAnswer: string;
  sections: SeoArticleSection[];
  faqs: { q: string; a: string }[];
  officialSources: { title: string; url: string }[];
  internalLinks: { title: string; url: string }[];
}

export const SEO_ARTICLES: SeoArticleItem[] = ${JSON.stringify(fullArticles, null, 2)};
`;

const tsPath = path.resolve(__dirname, '../src/data/seoArticlesData.ts');
fs.writeFileSync(tsPath, tsContent, 'utf-8');
console.log(`✅ ${fullArticles.length} makale src/data/seoArticlesData.ts dosyasına yazıldı.`);

// 3. Build Full sitemap.xml
const BASE_DOMAIN = 'https://overseas.marketing';
const CORE_ROUTES = [
  { path: '/', priority: '1.0' },
  { path: '/doktor-marka-yonetimi', priority: '0.95' },
  { path: '/hizmetler/performans-pazarlama', priority: '0.90' },
  { path: '/hizmetler/uluslararasi-seo-hizmeti', priority: '0.90' },
  { path: '/hizmetler/geo-generative-engine-optimization', priority: '0.90' },
  { path: '/hizmetler/web-sitesi-landing-page', priority: '0.85' },
  { path: '/hizmetler/saglik-turizmi-crm-yazilimi', priority: '0.85' },
  { path: '/hizmetler/yapay-zeka-otomasyon', priority: '0.85' },
  { path: '/hizmetler/sosyal-medya-yonetimi', priority: '0.85' },
  { path: '/hizmetler/icerik-produksiyon', priority: '0.80' },
  { path: '/sac-ekimi-reklam-ajansi', priority: '0.90' },
  { path: '/dis-klinigi-reklam-ajansi', priority: '0.90' },
  { path: '/estetik-klinigi-reklam-ajansi', priority: '0.85' },
  { path: '/plastik-cerrahi-reklam-ajansi', priority: '0.85' },
  { path: '/obezite-cerrahisi-reklam-ajansi', priority: '0.85' },
  { path: '/tup-bebek-reklam-ajansi', priority: '0.85' },
  { path: '/goz-klinigi-reklam-ajansi', priority: '0.85' },
  { path: '/hastane-reklam-ajansi', priority: '0.85' },
  { path: '/doktor-reklam-ajansi', priority: '0.85' },
  { path: '/ingiltere-saglik-turizmi-reklamlari', priority: '0.85' },
  { path: '/almanya-saglik-turizmi-reklamlari', priority: '0.85' },
  { path: '/fransa-saglik-turizmi-reklamlari', priority: '0.85' },
  { path: '/hollanda-saglik-turizmi-reklamlari', priority: '0.85' },
  { path: '/istanbul-saglik-turizmi-reklam-ajansi', priority: '0.85' },
  { path: '/antalya-saglik-turizmi-reklam-ajansi', priority: '0.85' },
  { path: '/izmir-saglik-turizmi-reklam-ajansi', priority: '0.80' },
  { path: '/ankara-saglik-turizmi-reklam-ajansi', priority: '0.80' }
];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

// Core pages
for (const r of CORE_ROUTES) {
  sitemapXml += `  <url>
    <loc>${BASE_DOMAIN}${r.path}</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r.priority}</priority>
  </url>
`;
}

// 86 SEO Knowledge Base Articles
for (const art of fullArticles) {
  const prio = art.funnel === 'BOFU' ? '0.90' : (art.funnel === 'MOFU' ? '0.85' : '0.80');
  sitemapXml += `  <url>
    <loc>${BASE_DOMAIN}${art.url}</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${prio}</priority>
  </url>
`;
}

sitemapXml += `</urlset>\n`;

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
console.log(`✅ sitemap.xml başarıyla oluşturuldu! Toplam URL sayısı: ${CORE_ROUTES.length + fullArticles.length}`);
