export interface RelatedLink {
  title: string;
  titleEn: string;
  url: string;
  desc?: string;
  descEn?: string;
  flag?: string;
}

export interface ServiceRelation {
  serviceId: string;
  isHub: boolean;
  familyId: 'performance' | 'seo' | 'geo' | 'web' | 'technology' | 'content' | 'cross-family';
  parentHub?: RelatedLink;
  subServices?: RelatedLink[];
  siblingServices?: RelatedLink[];
  relatedFamilies?: RelatedLink[];
  relatedBranches: { title: string; titleEn: string; slug: string }[];
  relatedMarkets: { title: string; titleEn: string; slug: string; flag: string }[];
  relatedArticles: RelatedLink[];
}

export const SERVICE_RELATIONS: Record<string, ServiceRelation> = {
  // 1. HUB: Performans Pazarlama
  'performans-pazarlama': {
    serviceId: 'performans-pazarlama',
    isHub: true,
    familyId: 'performance',
    subServices: [
      {
        title: 'Google Ads Yönetimi',
        titleEn: 'Google Ads Management',
        url: '/hizmetler/saglik-turizmi-google-ads',
        desc: 'Arama ağı, negatif kelime filtreleme ve yüksek niyetli hasta edinimi.',
        descEn: 'Search network, negative keyword filtering, and high-intent patient acquisition.'
      },
      {
        title: 'Meta Reklam Yönetimi',
        titleEn: 'Meta Advertising',
        url: '/hizmetler/saglik-turizmi-meta-reklamlari',
        desc: 'Instagram & Facebook video hunileri ve çok dilli kreatif testleri.',
        descEn: 'Instagram & Facebook video funnels and multilingual creative testing.'
      }
    ],
    relatedFamilies: [
      { title: 'Web & Landing Page', titleEn: 'Web & Landing Pages', url: '/hizmetler/web-sitesi-landing-page' },
      { title: 'CRM & Otomasyon', titleEn: 'CRM & Automation', url: '/hizmetler/crm-otomasyon' },
      { title: 'İçerik & Marka', titleEn: 'Content & Brand', url: '/hizmetler/icerik-marka-yonetimi' }
    ],
    relatedBranches: [
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Obezite Cerrahisi', titleEn: 'Bariatric Surgery', slug: 'obezite-cerrahisi-reklam-ajansi' },
      { title: 'Plastik Cerrahi', titleEn: 'Plastic Surgery', slug: 'plastik-cerrahi-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' },
      { title: 'Fransa', titleEn: 'France', slug: 'fransa-saglik-turizmi-reklamlari', flag: '🇫🇷' },
      { title: 'Hollanda', titleEn: 'Netherlands', slug: 'hollanda-saglik-turizmi-reklamlari', flag: '🇳🇱' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizmi Performans Pazarlama: CPL ve CAC Hesabı', titleEn: 'Medical Tourism Performance Marketing', url: '/blog/saglik-turizmi-performans-pazarlama' },
      { title: 'Sağlık Turizmi Pazarlaması 2026 Ana Strateji Rehberi', titleEn: 'Medical Tourism Marketing Strategy', url: '/blog/saglik-turizmi-pazarlamasi-nasil-yapilir' }
    ]
  },

  // 2. SUB-SERVICE: Google Ads
  'saglik-turizmi-google-ads': {
    serviceId: 'saglik-turizmi-google-ads',
    isHub: false,
    familyId: 'performance',
    parentHub: {
      title: 'Performans Pazarlama',
      titleEn: 'Performance Marketing',
      url: '/hizmetler/performans-pazarlama',
      desc: 'Bütçe koordinasyonu, çok kanallı medya planı ve CPL optimizasyonu.',
      descEn: 'Budget coordination, cross-channel media planning, and CPL optimization.'
    },
    siblingServices: [
      {
        title: 'Meta Reklam Yönetimi',
        titleEn: 'Meta Advertising',
        url: '/hizmetler/saglik-turizmi-meta-reklamlari'
      }
    ],
    relatedFamilies: [
      { title: 'Web & Landing Page', titleEn: 'Web & Landing Pages', url: '/hizmetler/web-sitesi-landing-page' }
    ],
    relatedBranches: [
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Obezite Cerrahisi', titleEn: 'Bariatric Surgery', slug: 'obezite-cerrahisi-reklam-ajansi' },
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizmi Performans Pazarlama Kılavuzu', titleEn: 'Healthcare Performance Marketing Guide', url: '/blog/saglik-turizmi-performans-pazarlama' }
    ]
  },

  // 3. SUB-SERVICE: Meta Reklamları
  'saglik-turizmi-meta-reklamlari': {
    serviceId: 'saglik-turizmi-meta-reklamlari',
    isHub: false,
    familyId: 'performance',
    parentHub: {
      title: 'Performans Pazarlama',
      titleEn: 'Performance Marketing',
      url: '/hizmetler/performans-pazarlama',
      desc: 'Çok kanallı reklam yönetimi ve dönüşüm ölçümü.',
      descEn: 'Cross-channel advertising management and conversion tracking.'
    },
    siblingServices: [
      {
        title: 'Google Ads Yönetimi',
        titleEn: 'Google Ads Management',
        url: '/hizmetler/saglik-turizmi-google-ads'
      }
    ],
    relatedFamilies: [
      { title: 'İçerik & Marka', titleEn: 'Content & Brand', url: '/hizmetler/icerik-marka-yonetimi' }
    ],
    relatedBranches: [
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Plastik Cerrahi', titleEn: 'Plastic Surgery', slug: 'plastik-cerrahi-reklam-ajansi' },
      { title: 'Medikal Estetik', titleEn: 'Medical Aesthetics', slug: 'medikal-estetik-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Fransa', titleEn: 'France', slug: 'fransa-saglik-turizmi-reklamlari', flag: '🇫🇷' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizmi Reklam Mevzuatı 2026', titleEn: 'Healthcare Advertising Regulations 2026', url: '/blog/saglik-turizmi-reklam-mevzuati-2026' }
    ]
  },

  // 4. HUB: Uluslararası SEO
  'uluslararasi-seo-hizmeti': {
    serviceId: 'uluslararasi-seo-hizmeti',
    isHub: true,
    familyId: 'seo',
    relatedFamilies: [
      { title: 'GEO & AI Görünürlüğü', titleEn: 'GEO & AI Visibility', url: '/hizmetler/geo-generative-engine-optimization' },
      { title: 'Web & Landing Page', titleEn: 'Web & Landing Pages', url: '/hizmetler/web-sitesi-landing-page' },
      { title: 'İçerik & Marka', titleEn: 'Content & Brand', url: '/hizmetler/icerik-marka-yonetimi' }
    ],
    relatedBranches: [
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Plastik Cerrahi', titleEn: 'Plastic Surgery', slug: 'plastik-cerrahi-reklam-ajansi' },
      { title: 'Hastane', titleEn: 'Hospital', slug: 'hastane-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' },
      { title: 'Fransa', titleEn: 'France', slug: 'fransa-saglik-turizmi-reklamlari', flag: '🇫🇷' }
    ],
    relatedArticles: [
      { title: 'Doktorlar ve Klinikler İçin SEO ve GEO', titleEn: 'SEO & GEO for Doctors', url: '/doktorlar-icin-seo-ve-geo' },
      { title: 'Sağlık Turizmi Pazarlaması 2026', titleEn: 'Medical Tourism Marketing 2026', url: '/blog/saglik-turizmi-pazarlamasi-nasil-yapilir' }
    ]
  },

  // 5. HUB: GEO (Generative Engine Optimization)
  'geo-generative-engine-optimization': {
    serviceId: 'geo-generative-engine-optimization',
    isHub: true,
    familyId: 'geo',
    relatedFamilies: [
      { title: 'Uluslararası SEO', titleEn: 'International SEO', url: '/hizmetler/uluslararasi-seo-hizmeti' },
      { title: 'İçerik & Marka', titleEn: 'Content & Brand', url: '/hizmetler/icerik-marka-yonetimi' }
    ],
    relatedBranches: [
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Doktor Reklam Ajansı', titleEn: 'Doctor Advertising', slug: 'doktor-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizminde ChatGPT Reklamı Verilebilir mi?', titleEn: 'ChatGPT Ads in Healthcare', url: '/blog/saglik-turizminde-chatgpt-reklami-verilebilir-mi' },
      { title: 'Doktorlar İçin SEO ve GEO Rehberi', titleEn: 'SEO and GEO Guide for Doctors', url: '/doktorlar-icin-seo-ve-geo' }
    ]
  },

  // 6. HUB: Web & Landing Page
  'web-sitesi-landing-page': {
    serviceId: 'web-sitesi-landing-page',
    isHub: true,
    familyId: 'web',
    subServices: [
      {
        title: 'Sağlık Turizmi Landing Page',
        titleEn: 'Medical Tourism Landing Page',
        url: '/hizmetler/saglik-turizmi-landing-page',
        desc: 'Yüksek dönüşümlü kampanya açılış sayfası ve form hunisi.',
        descEn: 'High-converting campaign landing pages and form funnels.'
      }
    ],
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' },
      { title: 'Uluslararası SEO', titleEn: 'International SEO', url: '/hizmetler/uluslararasi-seo-hizmeti' },
      { title: 'CRM & Otomasyon', titleEn: 'CRM & Automation', url: '/hizmetler/crm-otomasyon' }
    ],
    relatedBranches: [
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Obezite Cerrahisi', titleEn: 'Bariatric Surgery', slug: 'obezite-cerrahisi-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' },
      { title: 'Hollanda', titleEn: 'Netherlands', slug: 'hollanda-saglik-turizmi-reklamlari', flag: '🇳🇱' }
    ],
    relatedArticles: [
      { title: 'Antalya Sağlık Turizmi Web Sitesi Standartları', titleEn: 'Medical Website Design Standards', url: '/blog/antalya-saglik-turizmi-web-sitesi' }
    ]
  },

  // 7. SUB-SERVICE: Landing Page
  'saglik-turizmi-landing-page': {
    serviceId: 'saglik-turizmi-landing-page',
    isHub: false,
    familyId: 'web',
    parentHub: {
      title: 'Web & Landing Page',
      titleEn: 'Web & Landing Pages',
      url: '/hizmetler/web-sitesi-landing-page',
      desc: 'Kurumsal çok dilli web mimarisi ve dönüşüm tasarımı.',
      descEn: 'Corporate multilingual web architecture and conversion design.'
    },
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' },
      { title: 'CRM & Otomasyon', titleEn: 'CRM & Automation', url: '/hizmetler/crm-otomasyon' }
    ],
    relatedBranches: [
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Obezite Cerrahisi', titleEn: 'Bariatric Surgery', slug: 'obezite-cerrahisi-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' }
    ],
    relatedArticles: [
      { title: 'Antalya Sağlık Turizmi Web Sitesi: Çok Dilli SEO ve KVKK', titleEn: 'Multilingual Healthcare Web Standards', url: '/blog/antalya-saglik-turizmi-web-sitesi' }
    ]
  },

  // 8. SUB-SERVICE: CRM Yazılımı
  'saglik-turizmi-crm-yazilimi': {
    serviceId: 'saglik-turizmi-crm-yazilimi',
    isHub: false,
    familyId: 'technology',
    parentHub: {
      title: 'CRM & Otomasyon',
      titleEn: 'CRM & Automation',
      url: '/hizmetler/crm-otomasyon',
      desc: 'Kayıt, takip, insan devri ve otomasyon süreçleri merkezi.',
      descEn: 'Lead tracking, human handoff, and automation workflows hub.'
    },
    siblingServices: [
      {
        title: 'Yapay Zekâ ve Otomasyon',
        titleEn: 'AI & Automation',
        url: '/hizmetler/yapay-zeka-otomasyon'
      }
    ],
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' }
    ],
    relatedBranches: [
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Yetkili Aracı Kuruluş', titleEn: 'Certified Agency', slug: 'saglik-turizmi-araci-kurulus-pazarlama' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizminde Chatbot ve AI Call Agent', titleEn: 'Chatbot and AI in Healthcare', url: '/blog/saglik-turizminde-chatbot' }
    ]
  },

  // 9. SUB-SERVICE: Yapay Zekâ ve Otomasyon
  'yapay-zeka-otomasyon': {
    serviceId: 'yapay-zeka-otomasyon',
    isHub: false,
    familyId: 'technology',
    parentHub: {
      title: 'CRM & Otomasyon',
      titleEn: 'CRM & Automation',
      url: '/hizmetler/crm-otomasyon',
      desc: 'İletişim akışı, çok dilli başvuru karşılama ve hasta takibi.',
      descEn: 'Communication workflows, multilingual inquiry response, and patient follow-up.'
    },
    siblingServices: [
      {
        title: 'Sağlık Turizmi CRM Yazılımı',
        titleEn: 'Medical Tourism CRM',
        url: '/hizmetler/saglik-turizmi-crm-yazilimi'
      }
    ],
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' },
      { title: 'Web & Landing Page', titleEn: 'Web & Landing Pages', url: '/hizmetler/web-sitesi-landing-page' }
    ],
    relatedBranches: [
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Hastane', titleEn: 'Hospital', slug: 'hastane-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Körfez (GCC)', titleEn: 'Gulf Region', slug: 'hastane-reklam-ajansi', flag: '🇦🇪' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizminde Chatbot ve 7/24 Karşılama', titleEn: '24/7 Chatbot and AI Calling', url: '/blog/saglik-turizminde-chatbot' }
    ]
  },

  // 10. SUB-SERVICE: Sosyal Medya Yönetimi
  'sosyal-medya-yonetimi': {
    serviceId: 'sosyal-medya-yonetimi',
    isHub: false,
    familyId: 'content',
    parentHub: {
      title: 'İçerik & Marka',
      titleEn: 'Content & Brand',
      url: '/hizmetler/icerik-marka-yonetimi',
      desc: 'Marka mesajı, editoryal takvim ve uzman hekim iletişimi.',
      descEn: 'Brand messaging, editorial calendars, and clinician communication.'
    },
    siblingServices: [
      {
        title: 'İçerik ve Prodüksiyon',
        titleEn: 'Content Production',
        url: '/hizmetler/icerik-produksiyon'
      },
      {
        title: 'Doktor Marka Yönetimi',
        titleEn: 'Doctor Brand Management',
        url: '/doktor-marka-yonetimi'
      }
    ],
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' }
    ],
    relatedBranches: [
      { title: 'Plastik Cerrahi', titleEn: 'Plastic Surgery', slug: 'plastik-cerrahi-reklam-ajansi' },
      { title: 'Estetik Kliniği', titleEn: 'Aesthetic Clinic', slug: 'estetik-klinigi-reklam-ajansi' },
      { title: 'Doktor Reklam Ajansı', titleEn: 'Doctor Advertising', slug: 'doktor-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'Fransa', titleEn: 'France', slug: 'fransa-saglik-turizmi-reklamlari', flag: '🇫🇷' },
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' }
    ],
    relatedArticles: [
      { title: 'Doktorlar İçin YouTube ve Instagram Pazarlaması', titleEn: 'YouTube and Instagram for Doctors', url: '/doktorlar-icin-youtube-instagram-icerik-pazarlamasi' }
    ]
  },

  // 11. SUB-SERVICE: İçerik ve Prodüksiyon
  'icerik-produksiyon': {
    serviceId: 'icerik-produksiyon',
    isHub: false,
    familyId: 'content',
    parentHub: {
      title: 'İçerik & Marka',
      titleEn: 'Content & Brand',
      url: '/hizmetler/icerik-marka-yonetimi',
      desc: 'Marka mesajı, hekim video çekimleri ve kurumsal medya.',
      descEn: 'Brand messaging, doctor video shoots, and institutional media.'
    },
    siblingServices: [
      {
        title: 'Sosyal Medya Yönetimi',
        titleEn: 'Social Media Management',
        url: '/hizmetler/sosyal-medya-yonetimi'
      },
      {
        title: 'Doktor Marka Yönetimi',
        titleEn: 'Doctor Brand Management',
        url: '/doktor-marka-yonetimi'
      }
    ],
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' }
    ],
    relatedBranches: [
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Plastik Cerrahi', titleEn: 'Plastic Surgery', slug: 'plastik-cerrahi-reklam-ajansi' },
      { title: 'Doktor Reklam Ajansı', titleEn: 'Doctor Advertising', slug: 'doktor-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'Fransa', titleEn: 'France', slug: 'fransa-saglik-turizmi-reklamlari', flag: '🇫🇷' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' }
    ],
    relatedArticles: [
      { title: 'Doktorlar İçin Video ve İçerik Pazarlaması', titleEn: 'Video Marketing for Doctors', url: '/doktorlar-icin-youtube-instagram-icerik-pazarlamasi' }
    ]
  },

  // 12. CROSS-FAMILY: Sağlık Turizmi Reklam Ajansı
  'saglik-turizmi-reklam-ajansi': {
    serviceId: 'saglik-turizmi-reklam-ajansi',
    isHub: false,
    familyId: 'cross-family',
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' },
      { title: 'Uluslararası SEO', titleEn: 'International SEO', url: '/hizmetler/uluslararasi-seo-hizmeti' },
      { title: 'GEO & AI Görünürlüğü', titleEn: 'GEO & AI Visibility', url: '/hizmetler/geo-generative-engine-optimization' },
      { title: 'Web & Landing Page', titleEn: 'Web & Landing Pages', url: '/hizmetler/web-sitesi-landing-page' },
      { title: 'CRM & Otomasyon', titleEn: 'CRM & Automation', url: '/hizmetler/crm-otomasyon' },
      { title: 'İçerik & Marka', titleEn: 'Content & Brand', url: '/hizmetler/icerik-marka-yonetimi' }
    ],
    relatedBranches: [
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Hastane', titleEn: 'Hospital', slug: 'hastane-reklam-ajansi' },
      { title: 'Yetkili Aracı Kuruluş', titleEn: 'Certified Agency', slug: 'saglik-turizmi-araci-kurulus-pazarlama' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' },
      { title: 'Fransa', titleEn: 'France', slug: 'fransa-saglik-turizmi-reklamlari', flag: '🇫🇷' },
      { title: 'Hollanda', titleEn: 'Netherlands', slug: 'hollanda-saglik-turizmi-reklamlari', flag: '🇳🇱' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizmi Yetki Belgesi 2026 Başvuru Rehberi', titleEn: 'Healthcare Tourism Authorization 2026', url: '/saglik-turizmi-yetki-belgesi' },
      { title: 'Sağlık Turizmi Pazarlaması 2026 Ana Strateji', titleEn: 'Healthcare Marketing Master Strategy', url: '/blog/saglik-turizmi-pazarlamasi-nasil-yapilir' }
    ]
  },

  // 13. CROSS-FAMILY: Dijital Pazarlama
  'saglik-turizmi-dijital-pazarlama': {
    serviceId: 'saglik-turizmi-dijital-pazarlama',
    isHub: false,
    familyId: 'cross-family',
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' },
      { title: 'Uluslararası SEO', titleEn: 'International SEO', url: '/hizmetler/uluslararasi-seo-hizmeti' },
      { title: 'Web & Landing Page', titleEn: 'Web & Landing Pages', url: '/hizmetler/web-sitesi-landing-page' }
    ],
    relatedBranches: [
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Plastik Cerrahi', titleEn: 'Plastic Surgery', slug: 'plastik-cerrahi-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizmi Performans Pazarlama', titleEn: 'Performance Marketing in Healthcare', url: '/blog/saglik-turizmi-performans-pazarlama' }
    ]
  },

  // 14. CROSS-FAMILY: Uluslararası Hasta Kazanımı
  'uluslararasi-hasta-kazanimi': {
    serviceId: 'uluslararasi-hasta-kazanimi',
    isHub: false,
    familyId: 'cross-family',
    relatedFamilies: [
      { title: 'Performans Pazarlama', titleEn: 'Performance Marketing', url: '/hizmetler/performans-pazarlama' },
      { title: 'CRM & Otomasyon', titleEn: 'CRM & Automation', url: '/hizmetler/crm-otomasyon' },
      { title: 'Web & Landing Page', titleEn: 'Web & Landing Pages', url: '/hizmetler/web-sitesi-landing-page' }
    ],
    relatedBranches: [
      { title: 'Saç Ekimi', titleEn: 'Hair Transplant', slug: 'sac-ekimi-reklam-ajansi' },
      { title: 'Diş Kliniği', titleEn: 'Dental Clinic', slug: 'dis-klinigi-reklam-ajansi' },
      { title: 'Yetkili Aracı Kuruluş', titleEn: 'Certified Agency', slug: 'saglik-turizmi-araci-kurulus-pazarlama' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' },
      { title: 'Fransa', titleEn: 'France', slug: 'fransa-saglik-turizmi-reklamlari', flag: '🇫🇷' }
    ],
    relatedArticles: [
      { title: 'Sağlık Turizmi Aracı Kuruluş Yetki Belgesi', titleEn: 'Medical Tourism Agency Authorization', url: '/blog/saglik-turizmi-araci-kurulus-yetki-belgesi' }
    ]
  },
  // 15. SUB-SERVICE: Doktor Marka Yönetimi
  'doktor-marka-yonetimi': {
    serviceId: 'doktor-marka-yonetimi',
    isHub: false,
    familyId: 'content',
    parentHub: {
      title: 'İçerik & Marka Yönetimi',
      titleEn: 'Content & Brand Management',
      url: '/hizmetler/icerik-marka-yonetimi',
      desc: 'Etik hekim tanıtımı, video prodüksiyon ve dijital itibar mimarisi.',
      descEn: 'Ethical medical branding, video production, and digital authority architecture.'
    },
    siblingServices: [
      {
        title: 'Sosyal Medya Yönetimi',
        titleEn: 'Social Media Management',
        url: '/hizmetler/sosyal-medya-yonetimi'
      },
      {
        title: 'İçerik ve Prodüksiyon',
        titleEn: 'Content & Production',
        url: '/hizmetler/icerik-produksiyon'
      }
    ],
    relatedFamilies: [
      { title: 'SEO & GEO', titleEn: 'SEO & GEO', url: '/hizmetler/uluslararasi-seo-hizmeti' }
    ],
    relatedBranches: [
      { title: 'Doktor Reklam Ajansı', titleEn: 'Doctor Advertising Agency', slug: 'doktor-reklam-ajansi' },
      { title: 'Plastik Cerrahi', titleEn: 'Plastic Surgery', slug: 'plastik-cerrahi-reklam-ajansi' }
    ],
    relatedMarkets: [
      { title: 'İngiltere (UK)', titleEn: 'United Kingdom', slug: 'ingiltere-saglik-turizmi-reklamlari', flag: '🇬🇧' },
      { title: 'Almanya (DACH)', titleEn: 'Germany & DACH', slug: 'almanya-saglik-turizmi-reklamlari', flag: '🇩🇪' }
    ],
    relatedArticles: [
      { title: 'Doktorlar İçin SEO ve GEO Rehberi', titleEn: 'SEO and GEO Guide for Doctors', url: '/doktorlar-icin-seo-ve-geo' }
    ]
  },
};
