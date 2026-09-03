import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerLogos } from './components/PartnerLogos';
import { ProblemApproach } from './components/ProblemApproach';
import { ServicesSection } from './components/ServicesSection';
import { DoctorBrandingSection } from './components/DoctorBrandingSection';
import { GrowthWorkflow } from './components/GrowthWorkflow';
import { RoadmapSection } from './components/RoadmapSection';
import { ReferencesLogos } from './components/ReferencesLogos';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { SEOHead } from './components/SEOHead';
import { JsonLdSchema } from './components/JsonLdSchema';
import { MASTER_SERVICES, MASTER_BRANCHES, MASTER_MARKETS, MASTER_CITIES } from './data/masterPlanData';

// Dynamic Code Splitting for Subpages (Improves Core Web Vitals & Bundle Size)
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const DoctorBrandingPage = lazy(() => import('./components/DoctorBrandingPage').then(m => ({ default: m.DoctorBrandingPage })));
const BranchDetailPage = lazy(() => import('./components/BranchDetailPage').then(m => ({ default: m.BranchDetailPage })));
const MarketDetailPage = lazy(() => import('./components/MarketDetailPage').then(m => ({ default: m.MarketDetailPage })));
const CityDetailPage = lazy(() => import('./components/CityDetailPage').then(m => ({ default: m.CityDetailPage })));

// Loading Spinner for Code Splitting Suspense
const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#F8FAFC]">
    <div className="w-8 h-8 border-3 border-[#446CB5] border-t-transparent rounded-full animate-spin" />
  </div>
);

// Service Wrapper
const ServicePageWrapper: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const activeServiceId = serviceId || 'performans-pazarlama';
  const service = MASTER_SERVICES.find((s) => s.id === activeServiceId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeServiceId]);

  return (
    <>
      {service && (
        <>
          <SEOHead
            title={service.seoTitle || `${service.title} | Overseas Marketing`}
            description={service.metaDesc || service.shortDesc}
            canonicalUrl={`https://overseasmarketing.com.tr/hizmetler/${service.id}`}
          />
          <JsonLdSchema type="service" service={service} />
        </>
      )}
      <ServiceDetailPage
        serviceId={activeServiceId}
        onBackToHome={() => navigate('/')}
        onSelectService={(id) => navigate(`/hizmetler/${id}`)}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
};

// Branch Wrapper
const BranchPageWrapper: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const { branchSlug } = useParams<{ branchSlug: string }>();
  const navigate = useNavigate();
  const activeSlug = branchSlug || 'sac-ekimi-reklam-ajansi';
  const branch = MASTER_BRANCHES.find((b) => b.slug === activeSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSlug]);

  return (
    <>
      {branch && (
        <>
          <SEOHead
            title={branch.seoTitle}
            description={branch.metaDesc}
            canonicalUrl={`https://overseasmarketing.com.tr/${branch.slug}`}
          />
          <JsonLdSchema type="branch" branch={branch} />
        </>
      )}
      <BranchDetailPage
        slug={activeSlug}
        onBackToHome={() => navigate('/')}
        onSelectBranch={(slug) => navigate(`/${slug}`)}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
};

// Market Wrapper
const MarketPageWrapper: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const { marketSlug } = useParams<{ marketSlug: string }>();
  const navigate = useNavigate();
  const activeSlug = marketSlug || 'ingiltere-saglik-turizmi-reklamlari';
  const market = MASTER_MARKETS.find((m) => m.slug === activeSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSlug]);

  return (
    <>
      {market && (
        <>
          <SEOHead
            title={market.seoTitle}
            description={market.metaDesc}
            canonicalUrl={`https://overseasmarketing.com.tr/${market.slug}`}
          />
          <JsonLdSchema type="market" market={market} />
        </>
      )}
      <MarketDetailPage
        slug={activeSlug}
        onBackToHome={() => navigate('/')}
        onSelectMarket={(slug) => navigate(`/${slug}`)}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
};

// City Wrapper
const CityPageWrapper: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const navigate = useNavigate();
  const activeSlug = citySlug || 'istanbul-saglik-turizmi-reklam-ajansi';
  const city = MASTER_CITIES.find((c) => c.slug === activeSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSlug]);

  return (
    <>
      {city && (
        <>
          <SEOHead
            title={city.seoTitle}
            description={city.metaDesc}
            canonicalUrl={`https://overseasmarketing.com.tr/${city.slug}`}
          />
          <JsonLdSchema type="city" city={city} />
        </>
      )}
      <CityDetailPage
        slug={activeSlug}
        onBackToHome={() => navigate('/')}
        onSelectCity={(slug) => navigate(`/${slug}`)}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
};

// Doctor Branding Wrapper
const DoctorBrandingPageWrapper: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEOHead
        title="Doktor Marka Yönetimi & Dijital İtibar | Overseas Marketing"
        description="Doktorlar için kişisel marka konumlama, dijital PR, uluslararası hasta görünürlüğü ve özel içerik yönetimi hizmetleri."
        canonicalUrl="https://overseasmarketing.com.tr/doktor-marka-yonetimi"
      />
      <JsonLdSchema type="doctor-branding" />
      <DoctorBrandingPage
        onBackToHome={() => navigate('/')}
        onOpenConsultation={onOpenConsultation}
      />
    </>
  );
};

// Home Page Component
const HomePage: React.FC<{
  onSelectService: (serviceId: string) => void;
  onNavigateDoctorBranding: () => void;
  onOpenConsultation: () => void;
  scrollToSection: (id: string) => void;
}> = ({ onSelectService, onNavigateDoctorBranding, onOpenConsultation, scrollToSection }) => {
  return (
    <>
      <SEOHead
        title="Sağlık Turizmi Reklam Ajansı | Overseas Marketing"
        description="Sağlık turizminde performans pazarlama, SEO, GEO, dönüşüm odaklı web siteleri, özel CRM ve yapay zekâ otomasyonları. Büyümenizi birlikte planlayalım."
        canonicalUrl="https://overseasmarketing.com.tr/"
      />
      <JsonLdSchema type="home" />

      <Hero
        onOpenConsultation={onOpenConsultation}
        onExploreServices={() => scrollToSection('hizmetler')}
      />

      <PartnerLogos />

      <ProblemApproach onOpenConsultation={onOpenConsultation} />

      <RoadmapSection />

      <ServicesSection
        onSelectService={onSelectService}
        onOpenConsultation={onOpenConsultation}
      />

      <DoctorBrandingSection
        onNavigateDoctorBranding={onNavigateDoctorBranding}
        onOpenConsultation={onOpenConsultation}
      />

      <GrowthWorkflow onOpenConsultation={onOpenConsultation} />

      <ReferencesLogos />

      <SpecialtiesSection onOpenConsultation={onOpenConsultation} />

      <AboutSection onOpenConsultation={onOpenConsultation} />

      <BlogSection onOpenConsultation={onOpenConsultation} />

      <FaqSection onOpenConsultation={onOpenConsultation} />

      <ContactSection />
    </>
  );
};

export const App: React.FC = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateService = (serviceId: string) => {
    navigate(`/hizmetler/${serviceId}`);
  };

  const handleNavigateDoctorBranding = () => {
    navigate('/doktor-marka-yonetimi');
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] flex flex-col selection:bg-[#446CB5] selection:text-white">
      <Navbar
        onNavigateHome={handleNavigateHome}
        onNavigateService={handleNavigateService}
        onNavigateAbout={() => scrollToSection('hakkimizda')}
        onNavigateBlog={() => scrollToSection('rehber')}
        onNavigateCases={() => scrollToSection('vaka-calismalari')}
        onNavigateContact={() => scrollToSection('iletisim')}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      <main className="flex-grow">
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectService={handleNavigateService}
                  onNavigateDoctorBranding={handleNavigateDoctorBranding}
                  onOpenConsultation={() => setIsConsultationModalOpen(true)}
                  scrollToSection={scrollToSection}
                />
              }
            />
            <Route
              path="/hizmetler/:serviceId"
              element={
                <ServicePageWrapper onOpenConsultation={() => setIsConsultationModalOpen(true)} />
              }
            />
            <Route
              path="/doktor-marka-yonetimi"
              element={
                <DoctorBrandingPageWrapper onOpenConsultation={() => setIsConsultationModalOpen(true)} />
              }
            />

            {/* Branch Routes */}
            {MASTER_BRANCHES.map((b) => (
              <Route
                key={b.slug}
                path={`/${b.slug}`}
                element={<BranchPageWrapper onOpenConsultation={() => setIsConsultationModalOpen(true)} />}
              />
            ))}

            {/* Market Routes */}
            {MASTER_MARKETS.map((m) => (
              <Route
                key={m.slug}
                path={`/${m.slug}`}
                element={<MarketPageWrapper onOpenConsultation={() => setIsConsultationModalOpen(true)} />}
              />
            ))}

            {/* City Routes */}
            {MASTER_CITIES.map((c) => (
              <Route
                key={c.slug}
                path={`/${c.slug}`}
                element={<CityPageWrapper onOpenConsultation={() => setIsConsultationModalOpen(true)} />}
              />
            ))}

            {/* Fallback */}
            <Route
              path="*"
              element={
                <HomePage
                  onSelectService={handleNavigateService}
                  onNavigateDoctorBranding={handleNavigateDoctorBranding}
                  onOpenConsultation={() => setIsConsultationModalOpen(true)}
                  scrollToSection={scrollToSection}
                />
              }
            />
          </Routes>
        </Suspense>
      </main>

      <Footer
        onSelectService={handleNavigateService}
        onNavigateDoctorBranding={handleNavigateDoctorBranding}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
