import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Wrench, Building2, HelpCircle, Layers, Phone } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { INDUSTRIES_DATA } from '../../data/industries';
import { PROJECT_CATEGORIES } from '../../data/projects';
import { FAQS_DATA } from '../../data/faqs';
import { COMPANY_CONFIG } from '../../data/company';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string, slug?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigate('search-open'); // Handled in parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredServices = SERVICES_DATA.filter(
    s => s.title.toLowerCase().includes(cleanQuery) || s.shortDesc.toLowerCase().includes(cleanQuery)
  );

  const filteredIndustries = INDUSTRIES_DATA.filter(
    i => i.title.toLowerCase().includes(cleanQuery) || i.tagline.toLowerCase().includes(cleanQuery)
  );

  const filteredProjects = PROJECT_CATEGORIES.filter(
    p => p.title.toLowerCase().includes(cleanQuery) || p.summary.toLowerCase().includes(cleanQuery)
  );

  const filteredFaqs = FAQS_DATA.filter(
    f => f.question.toLowerCase().includes(cleanQuery) || f.answer.toLowerCase().includes(cleanQuery)
  );

  const totalResults = filteredServices.length + filteredIndustries.length + filteredProjects.length + filteredFaqs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white border border-sky-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-sky-100 bg-sky-50/50">
          <Search className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search PEB services, cold storage, fabrication, FAQs, projects..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm md:text-base focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-500 hover:text-slate-800 text-xs px-2 py-0.5 rounded bg-sky-100"
            >
              Clear
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-sky-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Content */}
        <div className="overflow-y-auto p-4 space-y-5 text-sm">
          {!query ? (
            <div className="space-y-4 text-xs text-slate-600">
              <p className="font-mono uppercase tracking-wider text-sky-700 font-bold">Suggested Quick Searches:</p>
              <div className="flex flex-wrap gap-2">
                {['PEB Buildings', 'Cold Storage Facilities', 'Factory Fabrication', 'Turnkey Erection', 'Heavy Structures', 'Vadodara Office'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 text-xs transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium">
                  <Phone className="w-4 h-4 text-sky-600" />
                  Direct Technical Helpline
                </span>
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="font-bold underline text-sky-700 hover:text-sky-900">
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="text-slate-600">No matches found for &quot;{query}&quot;</p>
              <p className="text-xs text-slate-500">
                Contact our structural engineering desk directly on WhatsApp or call us.
              </p>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call +91 9099818956
              </a>
            </div>
          ) : (
            <>
              {/* Services Results */}
              {filteredServices.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <Wrench className="w-3.5 h-3.5" />
                    Services ({filteredServices.length})
                  </div>
                  <div className="space-y-1">
                    {filteredServices.map(s => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onNavigate('service-detail', s.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {s.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{s.shortDesc}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries Results */}
              {filteredIndustries.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <Building2 className="w-3.5 h-3.5" />
                    Industries ({filteredIndustries.length})
                  </div>
                  <div className="space-y-1">
                    {filteredIndustries.map(ind => (
                      <button
                        key={ind.id}
                        onClick={() => {
                          onNavigate('industries');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {ind.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{ind.tagline}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Types */}
              {filteredProjects.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    Project Categories ({filteredProjects.length})
                  </div>
                  <div className="space-y-1">
                    {filteredProjects.map(proj => (
                      <button
                        key={proj.id}
                        onClick={() => {
                          onNavigate('project-detail', proj.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {proj.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{proj.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {filteredFaqs.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Technical FAQs ({filteredFaqs.length})
                  </div>
                  <div className="space-y-1">
                    {filteredFaqs.map(faq => (
                      <button
                        key={faq.id}
                        onClick={() => {
                          onNavigate('faqs');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {faq.question}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{faq.answer}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-sky-50 border-t border-sky-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Navigate with click • ESC to exit</span>
          <span>Khodiyar Infraproject Knowledge Base</span>
        </div>
      </div>
    </div>
  );
};
