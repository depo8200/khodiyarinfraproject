import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { KNOWLEDGE_HUB_FAQS_DATA, KnowledgeHubFaqItem } from '../../data/knowledgeHub';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Phone,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface KnowledgeHubFaqPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General PEB' },
  { id: 'planning', label: 'Planning & Commercial' },
  { id: 'construction', label: 'Fabrication & Erection' },
  { id: 'applications', label: 'Facility Applications' },
  { id: 'technical', label: 'Structural & Technical' }
];

export const KnowledgeHubFaqPage: React.FC<KnowledgeHubFaqPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'faq-gen-1': true,
    'faq-plan-1': true
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = KNOWLEDGE_HUB_FAQS_DATA.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Knowledge Hub', route: 'resources/knowledge-hub' },
          { label: 'FAQs', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            Knowledge Hub • 25+ Educational Answers
          </div>
          <button
            onClick={() => onNavigate('resources/knowledge-hub')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <span>Back to Knowledge Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB Knowledge &amp; Technical FAQs
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Comprehensive, technically grounded answers to frequent questions about Pre-Engineered Buildings—covering engineering principles, quotation requirements, cost factors, factory manufacturing, crane integration, and Indian Standard codes.
        </p>

        {/* Quick Search */}
        <div className="pt-2 relative max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs: purlins, cranes, cost factors, foundations..."
            className="w-full pl-10 pr-4 py-2.5 bg-sky-50/50 border border-sky-200 rounded-lg text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white border border-sky-200 text-slate-600 hover:bg-sky-50 hover:text-sky-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="space-y-4 text-left">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2">
          <span>Showing {filteredFaqs.length} of {KNOWLEDGE_HUB_FAQS_DATA.length} Questions</span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-sky-600 hover:underline font-bold cursor-pointer"
            >
              Clear search filter
            </button>
          )}
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white border border-slate-200 rounded-2xl space-y-3">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-sm font-bold text-slate-800">No matching questions found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search terms or select "All Questions".
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = Boolean(openFaqIds[faq.id]);
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-sky-300 bg-white shadow-sm ring-1 ring-sky-200/50' 
                      : 'border-sky-100 bg-white hover:border-sky-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                        {faq.categoryLabel}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 group-hover:text-sky-600 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-sky-600' : ''
                      }`} 
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-50 space-y-3">
                      <p>{faq.answer}</p>

                      {faq.relatedArticleSlug && faq.relatedArticleTitle && (
                        <div className="pt-2 flex items-center gap-2">
                          <span className="text-[11px] font-mono text-slate-400 uppercase">
                            Deep Dive Article:
                          </span>
                          <button
                            onClick={() => onNavigate('resources/knowledge-hub/article-lookup', faq.relatedArticleSlug)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800 hover:underline cursor-pointer"
                          >
                            <span>{faq.relatedArticleTitle}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Engineering Consultation Footer */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-6 text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-sky-700 bg-white px-2.5 py-1 rounded border border-sky-200">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              Direct Engineering Assistance
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase">
              Have a Specific Question About Your Project?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our engineering team at Khodiyar Infraproject in Halol, Gujarat is available to answer questions regarding column layouts, clear span feasibility, and crane surge design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider rounded-xl border border-sky-300 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_CONFIG.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenQuote('Knowledge Hub FAQ Inquiry')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Get Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-sky-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>Khodiyar Infraproject Knowledge Hub FAQ Library</span>
          <button
            onClick={() => onNavigate('faqs')}
            className="text-sky-600 hover:text-sky-800 hover:underline font-bold"
          >
            Visit Main Website FAQs →
          </button>
        </div>
      </section>
    </div>
  );
};
