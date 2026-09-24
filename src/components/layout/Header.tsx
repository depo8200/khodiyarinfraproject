import React, { useState, useEffect } from 'react';
import { COMPANY_CONFIG } from '../../data/company';
import { LogoInfra } from '../common/LogoInfra';
import { Phone, MessageSquare, Search, Menu, X, ChevronDown, Wrench, BookOpen } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string, slug?: string) => void;
  onOpenSearch: () => void;
  onOpenQuote: (type?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentRoute, 
  onNavigate, 
  onOpenSearch, 
  onOpenQuote 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Services', route: 'services', dropdownType: 'services' },
    { label: 'Industries', route: 'industries' },
    { label: 'Projects', route: 'projects' },
    { label: 'Why Choose Us', route: 'why-choose-us' },
    { label: 'FAQs', route: 'faqs' },
    { label: 'Resources', route: 'resources', dropdownType: 'resources' },
    { label: 'Contact Us', route: 'contact' }
  ];

  const resourceDropdownItems = [
    { label: 'Knowledge Hub', route: 'resources/knowledge-hub', desc: 'PEB guides, technical articles & engineering codes' },
    { label: 'Free Resources', route: 'resources/free-resources', desc: 'Buyer guides, tender checklists & glossary' },
    { label: 'Tools', route: 'resources/tools', desc: 'Structural steel & PEB tonnage estimator' },
    { label: 'Company / Industry Insights', route: 'resources/company-industry-insights', desc: 'Industry perspective & verified case studies' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-md py-3'
            : 'bg-white border-b border-sky-100 py-3.5 md:py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none transition-transform hover:opacity-90"
              aria-label="Khodiyar Infraproject Home"
            >
              <LogoInfra size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;

                if (item.dropdownType === 'services') {
                  return (
                    <div 
                      key={item.route}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => onNavigate('services')}
                        className={`flex items-center gap-1 text-xs uppercase tracking-wider font-semibold transition-all ${
                          isActive || currentRoute.startsWith('service')
                            ? 'text-sky-600 underline underline-offset-8 decoration-2 decoration-sky-500'
                            : 'text-slate-700 hover:text-sky-600'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-3 w-80 bg-white border border-sky-200 shadow-2xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 rounded-lg">
                          <div className="px-3 py-2 text-[10px] font-mono uppercase text-sky-600 font-bold border-b border-sky-100 flex items-center justify-between">
                            <span>Core Services (9)</span>
                            <span>Vadodara HQ</span>
                          </div>
                          {SERVICES_DATA.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => {
                                onNavigate('service-detail', srv.slug);
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:text-sky-700 hover:bg-sky-50 transition-colors flex items-center gap-2 group rounded-md"
                            >
                              <span className="w-1.5 h-1.5 bg-sky-300 group-hover:bg-sky-600 transition-colors rounded-full"></span>
                              <span className="font-medium group-hover:text-sky-700 transition-colors">{srv.title}</span>
                            </button>
                          ))}
                          <div className="pt-2 border-t border-sky-100">
                            <button
                              onClick={() => {
                                onNavigate('services');
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full text-center text-xs text-sky-600 font-semibold py-1 hover:underline uppercase tracking-wider"
                            >
                              View All Services Overview →
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.dropdownType === 'resources') {
                  return (
                    <div 
                      key={item.route}
                      className="relative"
                      onMouseEnter={() => setResourcesDropdownOpen(true)}
                      onMouseLeave={() => setResourcesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => onNavigate('resources')}
                        className={`flex items-center gap-1 text-xs uppercase tracking-wider font-semibold transition-all ${
                          isActive || currentRoute.startsWith('resources')
                            ? 'text-sky-600 underline underline-offset-8 decoration-2 decoration-sky-500'
                            : 'text-slate-700 hover:text-sky-600'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </button>

                      {/* Dropdown Menu */}
                      {resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-3 w-80 bg-white border border-sky-200 shadow-2xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 rounded-lg">
                          <div className="px-3 py-2 text-[10px] font-mono uppercase text-sky-600 font-bold border-b border-sky-100 flex items-center justify-between">
                            <span>Resource Ecosystem</span>
                            <span>Foundation</span>
                          </div>
                          {resourceDropdownItems.map((res) => (
                            <button
                              key={res.route}
                              onClick={() => {
                                onNavigate(res.route);
                                setResourcesDropdownOpen(false);
                              }}
                              className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:text-sky-700 hover:bg-sky-50 transition-colors flex items-start gap-2.5 group rounded-md cursor-pointer"
                            >
                              <span className="w-1.5 h-1.5 bg-sky-300 group-hover:bg-sky-600 transition-colors rounded-full mt-1.5 flex-shrink-0"></span>
                              <div>
                                <div className="font-medium group-hover:text-sky-700 transition-colors">{res.label}</div>
                                <div className="text-[10px] text-slate-400 group-hover:text-slate-500 transition-colors line-clamp-1">{res.desc}</div>
                              </div>
                            </button>
                          ))}
                          <div className="pt-2 border-t border-sky-100">
                            <button
                              onClick={() => {
                                onNavigate('resources');
                                setResourcesDropdownOpen(false);
                              }}
                              className="w-full text-center text-xs text-sky-600 font-semibold py-1 hover:underline uppercase tracking-wider cursor-pointer"
                            >
                              View All Resources Overview →
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.route}
                    onClick={() => onNavigate(item.route)}
                    className={`text-xs uppercase tracking-wider font-semibold transition-all ${
                      isActive
                        ? 'text-sky-600 underline underline-offset-8 decoration-2 decoration-sky-500'
                        : 'text-slate-700 hover:text-sky-600'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Website-wide search icon */}
              <button
                onClick={onOpenSearch}
                aria-label="Search website"
                className="p-2.5 bg-sky-50 hover:bg-sky-100 text-slate-700 hover:text-sky-700 border border-sky-200 transition-all flex items-center gap-2 rounded-md"
                title="Search website (Ctrl + K)"
              >
                <Search className="w-4 h-4 text-sky-600" />
                <span className="hidden md:inline text-xs text-slate-600 font-mono">Search</span>
              </button>

              {/* Primary Conversion CTA: CALL NOW (Top Priority) */}
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs lg:text-sm tracking-wide transition-colors shadow-sm rounded-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>CALL NOW: <strong>{COMPANY_CONFIG.phoneDisplay}</strong></span>
              </a>

              {/* Secondary CTA: WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I would like to inquire about PEB / structural steel solutions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2.5 border border-emerald-500/40 bg-emerald-50/50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider transition-colors rounded-md"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              {/* Get a Quote Button */}
              <button
                onClick={() => onOpenQuote()}
                className="hidden md:inline-flex items-center px-4 py-2.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-sky-600 transition-colors rounded-md shadow-sm"
              >
                Get a Quote
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 bg-sky-50 border border-sky-200 text-slate-800 rounded-md"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-white/98 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex flex-col h-full overflow-y-auto p-5 space-y-6">
            <div className="flex items-center justify-between border-b border-sky-100 pb-4">
              <LogoInfra size="md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-sky-50 border border-sky-200 text-slate-800 rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Immediate Call Bar */}
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-sky-600 text-white font-black text-sm uppercase tracking-wider shadow-md rounded-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                CALL NOW: {COMPANY_CONFIG.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I would like to inquire about PEB / structural steel solutions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 border border-emerald-500/40 bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                WhatsApp (+91 9099818956)
              </a>
            </div>

            {/* Navigation list */}
            <nav className="space-y-1 text-sm font-semibold">
              {navItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => {
                    onNavigate(item.route);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-3 px-4 transition-colors flex items-center justify-between uppercase tracking-wider text-xs rounded-md ${
                    currentRoute === item.route || (item.route === 'resources' && currentRoute.startsWith('resources'))
                      ? 'bg-sky-50 text-sky-600 border-l-4 border-sky-600 font-bold'
                      : 'text-slate-700 hover:bg-sky-50 hover:text-sky-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdownType === 'services' && <span className="text-[10px] text-sky-600 font-mono font-bold">9 Services</span>}
                  {item.dropdownType === 'resources' && <span className="text-[10px] text-sky-600 font-mono font-bold">Resources ▾</span>}
                </button>
              ))}
            </nav>

            {/* Mobile Resources Fast-links */}
            <div className="bg-sky-50/70 border border-sky-200 p-4 space-y-2 rounded-lg">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                Resource Ecosystem (Level 1):
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {resourceDropdownItems.map((r) => (
                  <button
                    key={r.route}
                    onClick={() => {
                      onNavigate(r.route);
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-xs py-1.5 px-2.5 text-slate-600 hover:text-sky-700 hover:bg-white rounded flex items-center justify-between"
                  >
                    <span>• {r.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Services Fast-links */}
            <div className="bg-sky-50/70 border border-sky-200 p-4 space-y-2 rounded-lg">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                <Wrench className="w-3.5 h-3.5" />
                Fast Access to All 9 Services:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {SERVICES_DATA.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onNavigate('service-detail', s.slug);
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-xs py-1.5 px-2.5 text-slate-600 hover:text-sky-700 hover:bg-white rounded"
                  >
                    • {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Office Summary in Mobile Menu */}
            <div className="mt-auto border-t border-sky-100 pt-4 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-900">Khodiyar Infraproject</p>
              <p>{COMPANY_CONFIG.officeAddress.full}</p>
              <p className="text-sky-600 font-mono font-semibold">Vadodara / Halol, Gujarat, India</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
