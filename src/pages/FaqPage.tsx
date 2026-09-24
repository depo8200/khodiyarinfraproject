import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { COMPANY_CONFIG } from '../data/company';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  ChevronDown, 
  HelpCircle, 
  Phone, 
  MessageSquare, 
  Search, 
  FileQuestion,
  ArrowRight,
  BookOpen,
  Calculator
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const getFaqContextualLink = (faq: typeof FAQS_DATA[0]) => {
    const q = faq.question.toLowerCase();
    const c = (faq.category || '').toLowerCase();
    if (q.includes('cost') || q.includes('price') || q.includes('rate') || c.includes('cost')) {
      return {
        label: 'Detailed Guide: PEB Building Cost Factors & Planning',
        route: 'resources/knowledge-hub/cost-planning',
        slug: 'peb-building-cost-factors'
      };
    }
    if (q.includes('component') || q.includes('frame') || q.includes('structure') || q.includes('standard') || c.includes('peb')) {
      return {
        label: 'Engineering Guide: Main Components of a PEB Structure',
        route: 'resources/knowledge-hub/peb-guides',
        slug: 'main-components-of-a-peb-structure'
      };
    }
    if (q.includes('plan') || q.includes('time') || q.includes('schedule') || q.includes('site') || q.includes('check')) {
      return {
        label: 'Planning Checklist: PEB Requirement & Site Checklist',
        route: 'resources/free-resources/peb-requirement-checklist'
      };
    }
    return {
      label: 'Explore Our PEB Knowledge Hub',
      route: 'resources/knowledge-hub'
    };
  };

  const filteredFaqs = FAQS_DATA.filter(
    f => f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
         f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'FAQs', active: true }]} onNavigate={onNavigate} />

      {/* 1. HERO */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          Technical Knowledge Base
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB &amp; Structural Steel FAQs | Questions Answered
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Comprehensive answers regarding Pre-Engineered Buildings (PEB), heavy structural steel fabrication, cold storage thermal engineering, and on-site turnkey erection.
        </p>

        {/* Search bar */}
        <div className="relative pt-2">
          <Search className="w-5 h-5 text-sky-600 absolute left-4 top-5.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter questions (e.g. cold storage, PEB vs conventional, crane, wind speed)..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-sky-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 rounded-xl shadow-sm transition-colors"
          />
        </div>
      </section>

      {/* 2. FAQS LIST */}
      <section className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 bg-white border border-sky-200 rounded-2xl text-center space-y-3 shadow-sm">
            <FileQuestion className="w-8 h-8 text-sky-600 mx-auto" />
            <p className="text-sm text-slate-600">No questions match &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-sky-600 font-mono underline uppercase tracking-wider cursor-pointer font-bold"
            >
              Reset Search
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-sky-200 rounded-xl overflow-hidden transition-all shadow-sm hover:border-sky-300"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-sky-50/50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-600 flex-shrink-0 transition-transform duration-200 mt-0.5 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100 bg-sky-50/20 space-y-3">
                    <p>{faq.answer}</p>
                    {(() => {
                      const link = getFaqContextualLink(faq);
                      return (
                        <div className="pt-2 border-t border-sky-100/60">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigate(link.route, link.slug);
                            }}
                            className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* 2.5 ENGINEERING KNOWLEDGE HUB & TOOLS BANNER (Level 7 Additive Integration) */}
      <section className="p-6 bg-sky-50/70 border border-sky-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-left">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-sans flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-600" />
            Looking for Complete Technical Articles or Project Checklists?
          </h3>
          <p className="text-xs text-slate-600">
            Browse our Knowledge Hub containing 10 in-depth PEB guides, downloadable procurement checklists, and interactive cost estimators.
          </p>
        </div>
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            onClick={() => onNavigate('resources/knowledge-hub')}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Knowledge Hub
          </button>
          <button
            onClick={() => onNavigate('resources/tools/peb-requirement-estimator')}
            className="px-4 py-2 bg-white hover:bg-sky-50 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-lg border border-sky-200 transition-colors cursor-pointer"
          >
            PEB Estimator
          </button>
        </div>
      </section>

      {/* 3. UNANSWERED QUESTION BOX */}
      <section className="p-8 bg-gradient-to-br from-white via-sky-50/50 to-sky-100/40 border border-sky-200 rounded-2xl shadow-xl space-y-6 text-center">
        <div className="p-3 bg-sky-50 text-sky-700 w-fit mx-auto border border-sky-200 rounded-xl">
          <HelpCircle className="w-6 h-6" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Have a Specific Question About Your Building Plan?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our structural engineering desk answers technical queries on clear spans, foundation anchor bolts, roof dead loads, and erection feasibility daily.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Engineer: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I have a technical question regarding an industrial building.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-slate-900 transition-colors cursor-pointer shadow-sm"
          >
            <span>Request Full Technical BOQ</span>
          </button>
        </div>
      </section>
    </div>
  );
};
