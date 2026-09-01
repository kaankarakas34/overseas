import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerLogos } from './components/PartnerLogos';
import { ProblemApproach } from './components/ProblemApproach';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailPage } from './components/ServiceDetailPage';
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

type RouteState = 
  | { view: 'home' }
  | { view: 'service'; serviceId: string };

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteState>({ view: 'home' });
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const handleNavigateHome = () => {
    setCurrentRoute({ view: 'home' });
  };

  const handleNavigateService = (serviceId: string) => {
    setCurrentRoute({ view: 'service', serviceId });
  };

  const scrollToSection = (id: string) => {
    if (currentRoute.view !== 'home') {
      setCurrentRoute({ view: 'home' });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] flex flex-col selection:bg-[#446CB5] selection:text-white">
      
      {/* 1. Navbar with Visual Mega Menu */}
      <Navbar 
        onNavigateHome={handleNavigateHome}
        onNavigateService={handleNavigateService}
        onNavigateAbout={() => scrollToSection('hakkimizda')}
        onNavigateBlog={() => scrollToSection('rehber')}
        onNavigateCases={() => scrollToSection('vaka-calismalari')}
        onNavigateContact={() => scrollToSection('iletisim')}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {currentRoute.view === 'service' ? (
          <ServiceDetailPage 
            serviceId={currentRoute.serviceId}
            onBackToHome={handleNavigateHome}
            onSelectService={handleNavigateService}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        ) : (
          <>
            {/* 2. Clean Wow Hero */}
            <Hero 
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
              onExploreServices={() => scrollToSection('hizmetler')}
            />

            {/* 3. Partner Logos Bar */}
            <PartnerLogos />

            {/* 4. Problem & Approach */}
            <ProblemApproach 
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 5. Flowchart Roadmap Section (Newly added as requested) */}
            <RoadmapSection />

            {/* 6. 8 Core Master Plan Services (Click navigates to dedicated page) */}
            <ServicesSection 
              onSelectService={handleNavigateService}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 7. Growth Process */}
            <GrowthWorkflow 
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 8. Clean References Logo Grid */}
            <ReferencesLogos />

            {/* 9. Specialty Areas */}
            <SpecialtiesSection 
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 10. Hakkımızda */}
            <AboutSection 
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 11. Rehber & Blog */}
            <BlogSection 
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 12. FAQ Accordions */}
            <FaqSection 
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 13. KVKK Compliant Contact Form */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 14. Footer */}
      <Footer 
        onSelectService={handleNavigateService}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* 15. Quick Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      {/* 16. WhatsApp Floater Button */}
      <WhatsAppFloatingButton />

    </div>
  );
};

export default App;
