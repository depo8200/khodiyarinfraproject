import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileConversionBar } from './components/layout/MobileConversionBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SearchModal } from './components/common/SearchModal';
import { QuoteModal } from './components/common/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [quoteModalState, setQuoteModalState] = useState<{ isOpen: boolean; prefilledType: string }>({
    isOpen: false,
    prefilledType: '',
  });

  // Sync route with URL hash for browser navigation and bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentRoute('home');
        setCurrentSlug('');
        return;
      }

      const parts = hash.split('/');
      const base = parts[0];
      const slug = parts[1] || '';

      if (['home', 'about', 'services', 'industries', 'projects', 'why-choose-us', 'faqs', 'contact'].includes(base)) {
        setCurrentRoute(base);
        setCurrentSlug('');
      } else if (base === 'service' && slug) {
        setCurrentRoute('service-detail');
        setCurrentSlug(slug);
      } else if (base === 'project' && slug) {
        setCurrentRoute('project-detail');
        setCurrentSlug(slug);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: string, slug?: string) => {
    if (route === 'search-open') {
      setIsSearchOpen(true);
      return;
    }

    if (route === 'service-detail' && slug) {
      window.location.hash = `service/${slug}`;
    } else if (route === 'project-detail' && slug) {
      window.location.hash = `project/${slug}`;
    } else {
      window.location.hash = route === 'home' ? '' : route;
    }

    setCurrentRoute(route);
    if (slug) setCurrentSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteModal = (prefilledType = '') => {
    setQuoteModalState({
      isOpen: true,
      prefilledType,
    });
  };

  const closeQuoteModal = () => {
    setQuoteModalState(prev => ({ ...prev, isOpen: false }));
  };

  // Render current active page
  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'service-detail':
        return <ServiceDetailPage slug={currentSlug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'industries':
        return <IndustriesPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'projects':
        return <ProjectsPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'project-detail':
        return <ProjectDetailPage slug={currentSlug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'why-choose-us':
        return <WhyChooseUsPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'faqs':
        return <FaqPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'contact':
        return <ContactPage onOpenQuote={openQuoteModal} />;
      default:
        return <HomePage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white flex flex-col">
      {/* Top Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={openQuoteModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} onOpenQuote={openQuoteModal} />

      {/* Floating Utilities */}
      <FloatingWhatsApp />
      <ScrollToTop />
      <MobileConversionBar onOpenQuote={openQuoteModal} />

      {/* Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />
      <QuoteModal
        isOpen={quoteModalState.isOpen}
        onClose={closeQuoteModal}
        prefilledType={quoteModalState.prefilledType}
      />
    </div>
  );
}
