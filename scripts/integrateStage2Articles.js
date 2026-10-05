// scripts/integrateStage2Articles.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { batch1Articles } from './stage2_batch1.js';
import { batch2Articles } from './stage2_batch2.js';
import { batch3Articles } from './stage2_batch3.js';
import { batch4Articles } from './stage2_batch4.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.resolve(__dirname, '../src/data/seoArticlesData.json');
const tsPath = path.resolve(__dirname, '../src/data/seoArticlesData.ts');

const allNewArticles = [
  ...batch1Articles,
  ...batch2Articles,
  ...batch3Articles,
  ...batch4Articles
];

console.log(`Toplam entegre edilecek yeni 2. Aşama makale sayısı: ${allNewArticles.length}`);

// 1. Load existing json
let existingArticles = [];
if (fs.existsSync(jsonPath)) {
  existingArticles = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
}
console.log(`Mevcut JSON makale sayısı: ${existingArticles.length}`);

// Filter out duplicates if any
const existingSlugs = new Set(existingArticles.map(a => a.slug));
const toAdd = allNewArticles.filter(a => !existingSlugs.has(a.slug));

console.log(`Yeni eklenecek benzersiz makale sayısı: ${toAdd.length}`);

const mergedArticles = [...existingArticles, ...toAdd];

// Save updated JSON
fs.writeFileSync(jsonPath, JSON.stringify(mergedArticles, null, 2), 'utf-8');
console.log(`✅ ${jsonPath} başarıyla güncellendi. Toplam makale: ${mergedArticles.length}`);

// Update TS file
const tsHeader = `export interface SeoArticleSection {
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

export const SEO_ARTICLES: SeoArticleItem[] = ${JSON.stringify(mergedArticles, null, 2)};
`;

fs.writeFileSync(tsPath, tsHeader, 'utf-8');
console.log(`✅ ${tsPath} başarıyla güncellendi.`);
