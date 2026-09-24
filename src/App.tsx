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
import { SEOHead } from './components/common/SEOHead';

// Resource Pages (Level 1 Foundation)
import { ResourcesLandingPage } from './pages/resources/ResourcesLandingPage';
import { KnowledgeHubPage } from './pages/resources/KnowledgeHubPage';
import { FreeResourcesPage } from './pages/resources/FreeResourcesPage';
import { ToolsPage } from './pages/resources/ToolsPage';
import { StructuralEstimatorToolPage } from './pages/resources/StructuralEstimatorToolPage';
import { PebRequirementEstimatorPage } from './pages/resources/PebRequirementEstimatorPage';
import { ProjectPlanningToolPage } from './pages/resources/ProjectPlanningToolPage';
import { CompanyIndustryInsightsPage } from './pages/resources/CompanyIndustryInsightsPage';
import { CompanyUpdatesPage } from './pages/resources/CompanyUpdatesPage';
import { IndustryInsightsPage } from './pages/resources/IndustryInsightsPage';
import { IndustryInsightArticlePage } from './pages/resources/IndustryInsightArticlePage';
import { CaseStudiesPage } from './pages/resources/CaseStudiesPage';

// Level 4 Free Resources Pages
import { PebBuyerGuidePage } from './pages/resources/PebBuyerGuidePage';
import { ProjectChecklistPage } from './pages/resources/ProjectChecklistPage';
import { PebRequirementChecklistPage } from './pages/resources/PebRequirementChecklistPage';
import { PebTerminologyGuidePage } from './pages/resources/PebTerminologyGuidePage';
import { PlanningGuidePage } from './pages/resources/PlanningGuidePage';

// Level 2 Knowledge Hub Pages
import { PebGuidesListPage } from './pages/resources/PebGuidesListPage';
import { TechnicalArticlesListPage } from './pages/resources/TechnicalArticlesListPage';
import { KnowledgeHubArticlePage } from './pages/resources/KnowledgeHubArticlePage';

// Level 3 Knowledge Hub Pages
import { CostPlanningListPage } from './pages/resources/CostPlanningListPage';
import { ComparisonsListPage } from './pages/resources/ComparisonsListPage';
import { IndustrialGuidesListPage } from './pages/resources/IndustrialGuidesListPage';
import { KnowledgeHubFaqPage } from './pages/resources/KnowledgeHubFaqPage';
import { getKnowledgeArticleBySlug } from './data/knowledgeHub';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [quoteModalState, setQuoteModalState] = useState<{ isOpen: boolean; prefilledType: string }>({
    isOpen: false,
    prefilledType: '',
  });

  // Helper to generate canonical clean URL paths for all routes
  const getCleanPath = (route: string, slug?: string): string => {
    if (route === 'home' || route === '') return '/';
    if (route === 'service-detail' && slug) return `/service/${slug}`;
    if (route === 'project-detail' && slug) return `/project/${slug}`;
    if (route === 'resources/knowledge-hub/peb-guides' && slug) return `/resources/knowledge-hub/peb-guides/${slug}`;
    if (route === 'resources/knowledge-hub/technical-articles' && slug) return `/resources/knowledge-hub/technical-articles/${slug}`;
    if (route === 'resources/knowledge-hub/cost-planning' && slug) return `/resources/knowledge-hub/cost-planning/${slug}`;
    if (route === 'resources/knowledge-hub/comparisons' && slug) return `/resources/knowledge-hub/comparisons/${slug}`;
    if (route === 'resources/knowledge-hub/industrial-building-guides' && slug) return `/resources/knowledge-hub/industrial-building-guides/${slug}`;
    if (route === 'resources/knowledge-hub/article-lookup' && slug) {
      const art = getKnowledgeArticleBySlug(slug);
      let subRoute = 'peb-guides';
      if (art?.type === 'technical-article') subRoute = 'technical-articles';
      else if (art?.type === 'cost-planning') subRoute = 'cost-planning';
      else if (art?.type === 'comparison') subRoute = 'comparisons';
      else if (art?.type === 'industrial-guide') subRoute = 'industrial-building-guides';
      return `/resources/knowledge-hub/${subRoute}/${slug}`;
    }
    if (route === 'resources/company-industry-insights/industry-insights' && slug) {
      return `/resources/company-industry-insights/industry-insights/${slug}`;
    }
    if (route === 'resources/company-industry-insights/case-studies' && slug) {
      return `/resources/company-industry-insights/case-studies/${slug}`;
    }
    if (route === 'resources/company-industry-insights/company-updates' && slug) {
      return `/resources/company-industry-insights/company-updates/${slug}`;
    }
    if (route === 'resources' && slug) return `/resources/${slug}`;
    return `/${route}`;
  };

  // Sync route with clean pathname / legacy hash for browser navigation, deep linking, and search crawlers
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const pathname = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
      const hasHash = Boolean(window.location.hash);
      const target = hash || pathname;

      if (!target) {
        setCurrentRoute('home');
        setCurrentSlug('');
        if (hasHash) {
          window.history.replaceState(null, '', '/');
        }
        return;
      }

      const parts = target.split('/');
      const base = parts[0];
      const slug = parts[1] || '';
      const subSlug = parts[2] || '';
      const leafSlug = parts[3] || '';

      let mappedRoute = 'home';
      let mappedSlug = '';

      if (['home', 'about', 'services', 'industries', 'projects', 'why-choose-us', 'faqs', 'contact'].includes(base)) {
        mappedRoute = base;
        mappedSlug = '';
      } else if (base === 'about-us') {
        mappedRoute = 'about';
        mappedSlug = '';
      } else if (base === 'contact-us') {
        mappedRoute = 'contact';
        mappedSlug = '';
      } else if (base === 'service' && slug) {
        mappedRoute = 'service-detail';
        mappedSlug = slug;
      } else if (base === 'project' && slug) {
        mappedRoute = 'project-detail';
        mappedSlug = slug;
      } else if (base === 'resources') {
        if (!slug) {
          mappedRoute = 'resources';
          mappedSlug = '';
        } else if (slug === 'knowledge-hub') {
          if (subSlug === 'peb-guides') {
            if (leafSlug) {
              mappedRoute = 'resources/knowledge-hub/peb-guides-article';
              mappedSlug = leafSlug;
            } else {
              mappedRoute = 'resources/knowledge-hub/peb-guides';
              mappedSlug = '';
            }
          } else if (subSlug === 'technical-articles') {
            if (leafSlug) {
              mappedRoute = 'resources/knowledge-hub/technical-articles-article';
              mappedSlug = leafSlug;
            } else {
              mappedRoute = 'resources/knowledge-hub/technical-articles';
              mappedSlug = '';
            }
          } else if (subSlug === 'cost-planning') {
            if (leafSlug) {
              mappedRoute = 'resources/knowledge-hub/cost-planning-article';
              mappedSlug = leafSlug;
            } else {
              mappedRoute = 'resources/knowledge-hub/cost-planning';
              mappedSlug = '';
            }
          } else if (subSlug === 'comparisons') {
            if (leafSlug) {
              mappedRoute = 'resources/knowledge-hub/comparisons-article';
              mappedSlug = leafSlug;
            } else {
              mappedRoute = 'resources/knowledge-hub/comparisons';
              mappedSlug = '';
            }
          } else if (subSlug === 'industrial-building-guides') {
            if (leafSlug) {
              mappedRoute = 'resources/knowledge-hub/industrial-building-guides-article';
              mappedSlug = leafSlug;
            } else {
              mappedRoute = 'resources/knowledge-hub/industrial-building-guides';
              mappedSlug = '';
            }
          } else if (subSlug === 'faqs') {
            mappedRoute = 'resources/knowledge-hub/faqs';
            mappedSlug = '';
          } else {
            mappedRoute = 'resources/knowledge-hub';
            mappedSlug = '';
          }
        } else if (slug === 'free-resources') {
          if (subSlug === 'peb-buyer-guide' || subSlug === 'buyer-guide') {
            mappedRoute = 'resources/free-resources/peb-buyer-guide';
            mappedSlug = '';
          } else if (subSlug === 'project-checklist') {
            mappedRoute = 'resources/free-resources/project-checklist';
            mappedSlug = '';
          } else if (subSlug === 'peb-requirement-checklist' || subSlug === 'requirement-checklist') {
            mappedRoute = 'resources/free-resources/peb-requirement-checklist';
            mappedSlug = '';
          } else if (subSlug === 'peb-terminology-guide' || subSlug === 'terminology-guide') {
            mappedRoute = 'resources/free-resources/peb-terminology-guide';
            mappedSlug = '';
          } else if (subSlug === 'planning-guide') {
            mappedRoute = 'resources/free-resources/planning-guide';
            mappedSlug = '';
          } else {
            mappedRoute = 'resources/free-resources';
            mappedSlug = '';
          }
        } else if (slug === 'tools') {
          if (subSlug === 'structural-estimator' || subSlug === 'structural-estimator-tool') {
            mappedRoute = 'resources/tools/structural-estimator';
            mappedSlug = '';
          } else if (subSlug === 'peb-requirement-estimator') {
            mappedRoute = 'resources/tools/peb-requirement-estimator';
            mappedSlug = '';
          } else if (subSlug === 'project-planning-tool') {
            mappedRoute = 'resources/tools/project-planning-tool';
            mappedSlug = '';
          } else {
            mappedRoute = 'resources/tools';
            mappedSlug = '';
          }
        } else if (slug === 'company-industry-insights') {
          if (subSlug === 'company-updates') {
            mappedRoute = 'resources/company-industry-insights/company-updates';
            mappedSlug = leafSlug || '';
          } else if (subSlug === 'industry-insights') {
            if (leafSlug) {
              mappedRoute = 'resources/company-industry-insights/industry-insights-article';
              mappedSlug = leafSlug;
            } else {
              mappedRoute = 'resources/company-industry-insights/industry-insights';
              mappedSlug = '';
            }
          } else if (subSlug === 'case-studies') {
            if (leafSlug) {
              mappedRoute = 'resources/company-industry-insights/case-studies-article';
              mappedSlug = leafSlug;
            } else {
              mappedRoute = 'resources/company-industry-insights/case-studies';
              mappedSlug = '';
            }
          } else {
            mappedRoute = 'resources/company-industry-insights';
            mappedSlug = '';
          }
        } else {
          mappedRoute = 'resources';
          mappedSlug = slug;
        }
      } else {
        mappedRoute = 'home';
        mappedSlug = '';
      }

      setCurrentRoute(mappedRoute);
      setCurrentSlug(mappedSlug);

      // If user landed via legacy hash (e.g. /#services or /#/resources/free-resources/peb-buyer-guide),
      // cleanly replace URL in address bar with canonical clean URL without page reload
      if (hasHash) {
        const cleanPath = getCleanPath(mappedRoute, mappedSlug);
        window.history.replaceState(null, '', cleanPath);
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (route: string, slug?: string) => {
    if (route === 'search-open') {
      setIsSearchOpen(true);
      return;
    }

    const cleanPath = getCleanPath(route, slug);

    // Update browser URL using clean pathname (HTML5 History API)
    if (window.location.pathname !== cleanPath || window.location.hash) {
      window.history.pushState(null, '', cleanPath);
    }

    if (route === 'resources/knowledge-hub/article-lookup' && slug) {
      const art = getKnowledgeArticleBySlug(slug);
      let mappedRoute = 'resources/knowledge-hub/peb-guides-article';
      if (art?.type === 'technical-article') {
        mappedRoute = 'resources/knowledge-hub/technical-articles-article';
      } else if (art?.type === 'cost-planning') {
        mappedRoute = 'resources/knowledge-hub/cost-planning-article';
      } else if (art?.type === 'comparison') {
        mappedRoute = 'resources/knowledge-hub/comparisons-article';
      } else if (art?.type === 'industrial-guide') {
        mappedRoute = 'resources/knowledge-hub/industrial-building-guides-article';
      }
      setCurrentRoute(mappedRoute);
      setCurrentSlug(slug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (route === 'resources/knowledge-hub/peb-guides' && slug) {
      setCurrentRoute('resources/knowledge-hub/peb-guides-article');
      setCurrentSlug(slug);
    } else if (route === 'resources/knowledge-hub/technical-articles' && slug) {
      setCurrentRoute('resources/knowledge-hub/technical-articles-article');
      setCurrentSlug(slug);
    } else if (route === 'resources/knowledge-hub/cost-planning' && slug) {
      setCurrentRoute('resources/knowledge-hub/cost-planning-article');
      setCurrentSlug(slug);
    } else if (route === 'resources/knowledge-hub/comparisons' && slug) {
      setCurrentRoute('resources/knowledge-hub/comparisons-article');
      setCurrentSlug(slug);
    } else if (route === 'resources/knowledge-hub/industrial-building-guides' && slug) {
      setCurrentRoute('resources/knowledge-hub/industrial-building-guides-article');
      setCurrentSlug(slug);
    } else if (route === 'resources/company-industry-insights/industry-insights' && slug) {
      setCurrentRoute('resources/company-industry-insights/industry-insights-article');
      setCurrentSlug(slug);
    } else if (route === 'resources/company-industry-insights/case-studies' && slug) {
      setCurrentRoute('resources/company-industry-insights/case-studies-article');
      setCurrentSlug(slug);
    } else if (route === 'resources/company-industry-insights/company-updates' && slug) {
      setCurrentRoute('resources/company-industry-insights/company-updates');
      setCurrentSlug(slug);
    } else {
      setCurrentRoute(route);
      if (slug) setCurrentSlug(slug);
      else setCurrentSlug('');
    }

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
        return <ContactPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources':
        return <ResourcesLandingPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub':
        return <KnowledgeHubPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/peb-guides':
        return <PebGuidesListPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/peb-guides-article':
        return <KnowledgeHubArticlePage slug={currentSlug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/technical-articles':
        return <TechnicalArticlesListPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/technical-articles-article':
        return <KnowledgeHubArticlePage slug={currentSlug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/cost-planning':
        return <CostPlanningListPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/cost-planning-article':
        return <KnowledgeHubArticlePage slug={currentSlug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/comparisons':
        return <ComparisonsListPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/comparisons-article':
        return <KnowledgeHubArticlePage slug={currentSlug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/industrial-building-guides':
        return <IndustrialGuidesListPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/industrial-building-guides-article':
        return <KnowledgeHubArticlePage slug={currentSlug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/knowledge-hub/faqs':
        return <KnowledgeHubFaqPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/free-resources':
        return <FreeResourcesPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/free-resources/peb-buyer-guide':
      case 'resources/free-resources/buyer-guide':
        return <PebBuyerGuidePage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/free-resources/project-checklist':
        return <ProjectChecklistPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/free-resources/peb-requirement-checklist':
      case 'resources/free-resources/requirement-checklist':
        return <PebRequirementChecklistPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/free-resources/peb-terminology-guide':
      case 'resources/free-resources/terminology-guide':
        return <PebTerminologyGuidePage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/free-resources/planning-guide':
        return <PlanningGuidePage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/tools':
        return <ToolsPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/tools/structural-estimator':
      case 'resources/tools/structural-estimator-tool':
        return <StructuralEstimatorToolPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/tools/peb-requirement-estimator':
        return <PebRequirementEstimatorPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/tools/project-planning-tool':
        return <ProjectPlanningToolPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/company-industry-insights':
        return <CompanyIndustryInsightsPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/company-industry-insights/company-updates':
        return <CompanyUpdatesPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/company-industry-insights/industry-insights':
        return <IndustryInsightsPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/company-industry-insights/industry-insights-article':
        return <IndustryInsightArticlePage slug={currentSlug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      case 'resources/company-industry-insights/case-studies':
      case 'resources/company-industry-insights/case-studies-article':
        return <CaseStudiesPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
      default:
        return <HomePage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white flex flex-col">
      {/* Dynamic SEO Meta & Schema Head Manager */}
      <SEOHead route={currentRoute} slug={currentSlug} />

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
