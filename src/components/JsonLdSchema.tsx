import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceItem, BranchItem, MarketItem, CityItem } from '../data/masterPlanData';

interface JsonLdSchemaProps {
  type?: 'home' | 'service' | 'doctor-branding' | 'branch' | 'market' | 'city';
  service?: ServiceItem;
  branch?: BranchItem;
  market?: MarketItem;
  city?: CityItem;
  faqs?: { q: string; a: string }[];
  customTitle?: string;
  customUrl?: string;
}

const DOMAIN = 'https://overseasmarketing.com.tr';

export const JsonLdSchema: React.FC<JsonLdSchemaProps> = ({
  type = 'home',
  service,
  branch,
  market,
  city,
  faqs,
  customTitle,
  customUrl
}) => {
  // 1. Organization & ProfessionalService Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DOMAIN}/#organization`,
    name: 'Overseas Marketing',
    alternateName: 'Overseas Marketing Sağlık Turizmi Reklam Ajansı',
    url: DOMAIN,
    logo: `${DOMAIN}/logo2/beyaz.webp`,
    image: `${DOMAIN}/images/hero_health_tech.jpg`,
    description: 'Sağlık turizminde performans pazarlama, uluslararası SEO, GEO, dönüşüm odaklı web siteleri, özel CRM ve yapay zekâ otomasyonları sunan dijital büyüme ajansı.',
    telephone: '+90 532 000 00 00',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    sameAs: [
      'https://www.linkedin.com/company/overseasmarketing',
      'https://www.instagram.com/overseasmarketing',
    ],
    knowsAbout: [
      'Sağlık Turizmi Reklam Yönetimi',
      'Saç Ekimi Reklam Ajansı',
      'Diş Kliniği Reklam Ajansı',
      'Uluslararası SEO Hizmeti',
      'Generative Engine Optimization (GEO)',
      'Doktor Marka Yönetimi',
      'Sağlık Turizmi CRM ve Yapay Zekâ Otomasyonu',
    ],
  };

  // 2. Service Schema
  let serviceSchema = null;
  let activeTitle = customTitle || '';
  let activeUrl = customUrl || DOMAIN;

  if (type === 'service' && service) {
    activeTitle = service.title;
    activeUrl = `${DOMAIN}/hizmetler/${service.id}`;
    serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.metaDesc || service.shortDesc,
      provider: { '@type': 'ProfessionalService', name: 'Overseas Marketing', url: DOMAIN },
      areaServed: ['TR', 'GB', 'DE', 'US', 'AE'],
      serviceType: service.category,
      url: activeUrl,
    };
  } else if (type === 'branch' && branch) {
    activeTitle = branch.title;
    activeUrl = `${DOMAIN}/${branch.slug}`;
    serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: branch.title,
      description: branch.metaDesc || branch.shortDesc,
      provider: { '@type': 'ProfessionalService', name: 'Overseas Marketing', url: DOMAIN },
      areaServed: ['TR', 'GB', 'DE', 'US', 'AE'],
      serviceType: 'Sağlık Turizmi Branş Pazarlaması',
      url: activeUrl,
    };
  } else if (type === 'market' && market) {
    activeTitle = market.title;
    activeUrl = `${DOMAIN}/${market.slug}`;
  } else if (type === 'city' && city) {
    activeTitle = city.title;
    activeUrl = `${DOMAIN}/${city.slug}`;
  }

  // 3. FAQ Schema
  const activeFaqs = faqs || service?.faq || branch?.faq || market?.faq || city?.faq || [];
  let faqSchema = null;
  if (activeFaqs && activeFaqs.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: activeFaqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    };
  }

  // 4. Breadcrumb Schema
  let breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Ana Sayfa',
      item: DOMAIN,
    },
  ];

  if (activeTitle && activeUrl !== DOMAIN) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: activeTitle,
      item: activeUrl,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {serviceSchema && <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>}
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};
