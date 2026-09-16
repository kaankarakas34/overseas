import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  robots?: string;
  hasEnAlternate?: boolean;
}

const DEFAULT_DOMAIN = 'https://www.overseas.marketing';
const DEFAULT_IMAGE = `${DEFAULT_DOMAIN}/images/hero_health_tech.jpg`;

const DEFAULT_TITLE_TR = 'Sağlık Turizmi Reklam Ajansı | Overseas Marketing';
const DEFAULT_DESC_TR = 'Sağlık turizminde performans pazarlama, SEO, GEO, dönüşüm odaklı web siteleri, özel CRM ve yapay zekâ otomasyonları. Büyümenizi birlikte planlayalım.';

const DEFAULT_TITLE_EN = 'Health Tourism Advertising Agency | Overseas Marketing';
const DEFAULT_DESC_EN = 'Performance marketing, international SEO, GEO, high-converting medical websites, specialized CRM, and AI automation for medical tourism. Let’s plan your growth together.';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl = DEFAULT_DOMAIN,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  hasEnAlternate = true,
}) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const resolvedTitle = title || (isEn ? DEFAULT_TITLE_EN : DEFAULT_TITLE_TR);
  const resolvedDesc = description || (isEn ? DEFAULT_DESC_EN : DEFAULT_DESC_TR);

  // Normalize canonical to always use www.overseas.marketing
  let normalizedBase = canonicalUrl.replace(/^https?:\/\/overseas\.marketing/i, DEFAULT_DOMAIN);
  // Strip trailing slash if not root
  if (normalizedBase.endsWith('/') && normalizedBase !== `${DEFAULT_DOMAIN}/`) {
    normalizedBase = normalizedBase.slice(0, -1);
  }
  // Strip existing ?lang=en from base to compute clean alternates
  const cleanBaseUrl = normalizedBase.replace(/[?&]lang=[^&]+/gi, '').replace(/\?$/, '');

  // Effective canonical: if isEn is true and hasEnAlternate, self-reference ?lang=en
  let effectiveCanonical = cleanBaseUrl;
  if (isEn && hasEnAlternate) {
    effectiveCanonical = cleanBaseUrl.includes('?') 
      ? `${cleanBaseUrl}&lang=en` 
      : `${cleanBaseUrl}${cleanBaseUrl.endsWith('/') ? '' : ''}?lang=en`;
  }

  return (
    <Helmet>
      {/* HTML Language */}
      <html lang={isEn ? 'en' : 'tr'} />

      {/* Basic Metadata */}
      <title data-rh="true">{resolvedTitle}</title>
      <meta data-rh="true" name="description" content={resolvedDesc} />
      <link data-rh="true" rel="canonical" href={effectiveCanonical} />
      <meta data-rh="true" name="robots" content={robots} />

      {/* Alternate Language Links */}
      <link data-rh="true" rel="alternate" hrefLang="tr" href={cleanBaseUrl} />
      {hasEnAlternate && (
        <link data-rh="true" rel="alternate" hrefLang="en" href={`${cleanBaseUrl}${cleanBaseUrl === DEFAULT_DOMAIN ? '/' : ''}?lang=en`} />
      )}
      <link data-rh="true" rel="alternate" hrefLang="x-default" href={cleanBaseUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta data-rh="true" property="og:type" content={ogType} />
      <meta data-rh="true" property="og:url" content={effectiveCanonical} />
      <meta data-rh="true" property="og:site_name" content="Overseas Marketing" />
      <meta data-rh="true" property="og:title" content={resolvedTitle} />
      <meta data-rh="true" property="og:description" content={resolvedDesc} />
      <meta data-rh="true" property="og:image" content={ogImage} />
      <meta data-rh="true" property="og:locale" content={isEn ? 'en_US' : 'tr_TR'} />

      {/* Twitter Card */}
      <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      <meta data-rh="true" name="twitter:title" content={resolvedTitle} />
      <meta data-rh="true" name="twitter:description" content={resolvedDesc} />
      <meta data-rh="true" name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
