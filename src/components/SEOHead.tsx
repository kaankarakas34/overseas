import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const DEFAULT_TITLE_TR = 'Sağlık Turizmi Reklam Ajansı | Overseas Marketing';
const DEFAULT_DESC_TR = 'Sağlık turizminde performans pazarlama, SEO, GEO, dönüşüm odaklı web siteleri, özel CRM ve yapay zekâ otomasyonları. Büyümenizi birlikte planlayalım.';

const DEFAULT_TITLE_EN = 'Health Tourism Advertising Agency | Overseas Marketing';
const DEFAULT_DESC_EN = 'Performance marketing, international SEO, GEO, high-converting medical websites, specialized CRM, and AI automation for medical tourism. Let’s plan your growth together.';

const DEFAULT_DOMAIN = 'https://overseas.marketing';
const DEFAULT_IMAGE = `${DEFAULT_DOMAIN}/images/hero_health_tech.jpg`;

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl = DEFAULT_DOMAIN,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
}) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const resolvedTitle = title || (isEn ? DEFAULT_TITLE_EN : DEFAULT_TITLE_TR);
  const resolvedDesc = description || (isEn ? DEFAULT_DESC_EN : DEFAULT_DESC_TR);

  return (
    <Helmet>
      {/* HTML Language */}
      <html lang={isEn ? 'en' : 'tr'} />

      {/* Basic Metadata */}
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDesc} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="tr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Overseas Marketing" />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={isEn ? 'en_US' : 'tr_TR'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
