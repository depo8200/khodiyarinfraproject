import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Wrench, Building2, HelpCircle, Layers, Phone, BookOpen, Cpu } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { INDUSTRIES_DATA } from '../../data/industries';
import { PROJECT_CATEGORIES } from '../../data/projects';
import { FAQS_DATA } from '../../data/faqs';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  PEB_GUIDES_DATA, 
  TECHNICAL_ARTICLES_DATA,
  COST_PLANNING_ARTICLES_DATA,
  COMPARISONS_ARTICLES_DATA,
  INDUSTRIAL_GUIDES_ARTICLES_DATA,
  KNOWLEDGE_HUB_FAQS_DATA
} from '../../data/knowledgeHub';
import { INDUSTRY_INSIGHTS } from '../../data/industryInsights';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string, slug?: string) => void;
}

const RESOURCE_ITEMS = [
  { title: 'Resources Gateway', route: 'resources', desc: 'Engineering & technical resources for pre-engineered buildings and industrial steel fabrication.' },
  { title: 'PEB Knowledge Hub', route: 'resources/knowledge-hub', desc: 'Technical education foundation, design codes (IS 800:2007), and warehouse planning.' },
  { title: 'PEB Guides & Fundamentals (10 Guides)', route: 'resources/knowledge-hub/peb-guides', desc: 'Foundational guides on PEB components, erection, warehouse basics, and manufacturing.' },
  { title: 'Structural Steel Technical Articles (10 Papers)', route: 'resources/knowledge-hub/technical-articles', desc: 'Engineering documentation on IS 800:2007, SAW welding, purlin design, and bracing.' },
  { title: 'PEB Cost & Project Planning (10 Guides)', route: 'resources/knowledge-hub/cost-planning', desc: 'Budgeting parameters, steel tonnage, RFQ quotation checklists, and foundation planning.' },
  { title: 'Structural & System Comparisons (8 Analyses)', route: 'resources/knowledge-hub/comparisons', desc: 'Balanced comparative studies: PEB vs. RCC, PEB vs. Conventional Steel, Factory vs. Site Fabrication.' },
  { title: 'Industrial Building Guides (10 Guides)', route: 'resources/knowledge-hub/industrial-building-guides', desc: 'Application-specific design manuals for warehouses, factories, workshops, and cold stores.' },
  { title: 'PEB Knowledge & Technical FAQs (25+ Answers)', route: 'resources/knowledge-hub/faqs', desc: 'Educational answers on PEB design, fabrication, cranes, and IS standards.' },
  { title: 'Free Planning Resources & Checklists', route: 'resources/free-resources', desc: 'Buyer guides, tender scope checklists, site management, and steel terminology glossary.' },
  { title: 'PEB Buyer & Technical Decision Guide', route: 'resources/free-resources/peb-buyer-guide', desc: 'Procurement reference covering clear spans, crane provisions, MTRs, and vendor evaluation.' },
  { title: 'PEB Project Execution & Site Checklist', route: 'resources/free-resources/project-checklist', desc: 'Interactive 35+ point checklist for civil pedestals, trailer access roads, and erection safety.' },
  { title: 'PEB Quotation Requirement Checklist', route: 'resources/free-resources/peb-requirement-checklist', desc: '20-category engineering questionnaire to prepare clear RFQ tender briefs.' },
  { title: 'PEB & Structural Steel Terminology Guide', route: 'resources/free-resources/peb-terminology-guide', desc: 'Searchable glossary defining 35+ primary framing, purlin, girt, and HSFG bolt terms.' },
  { title: '15-Step PEB Project Planning Guide', route: 'resources/free-resources/planning-guide', desc: 'Sequential execution roadmap from building purpose and soil investigation to final inspection.' },
  { title: 'Structural Steel & PEB Tools', route: 'resources/tools', desc: 'Interactive engineering calculators and steel tonnage estimators.' },
  { title: 'PEB Requirement Estimator', route: 'resources/tools/peb-requirement-estimator', desc: 'Interactive scoping tool for clear spans, eave heights, overhead cranes, and operational features.' },
  { title: 'Project Planning Tool', route: 'resources/tools/project-planning-tool', desc: '12-step guided concept-to-execution roadmap for industrial PEB buildings and procurement.' },
  { title: 'Structural Steel & PEB Tonnage Estimator', route: 'resources/tools/structural-estimator', desc: 'Live parametric calculation tool based on IS 800:2007 loading norms.' },
  { title: 'Company & Industry Insights Hub', route: 'resources/company-industry-insights', desc: 'Technical perspectives, regional Gujarat corridors, and verified project milestones.' },
  { title: 'Company Updates & Announcements', route: 'resources/company-industry-insights/company-updates', desc: 'Official corporate developments, quality certifications, and facility milestones.' },
  { title: 'PEB & Industrial Construction Insights (20 Articles)', route: 'resources/company-industry-insights/industry-insights', desc: 'Field-tested perspectives on structural steel fabrication, warehouse planning, crane load design, and tender evaluation.' },
  { title: 'Verified Project Case Studies', route: 'resources/company-industry-insights/case-studies', desc: 'Audited structural engineering retrospectives detailing span calculations, steel tonnage, and erection records.' }
];

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

  const filteredResources = RESOURCE_ITEMS.filter(
    r => r.title.toLowerCase().includes(cleanQuery) || r.desc.toLowerCase().includes(cleanQuery)
  );

  const filteredPebGuides = PEB_GUIDES_DATA.filter(
    g => g.title.toLowerCase().includes(cleanQuery) || g.summary.toLowerCase().includes(cleanQuery)
  );

  const filteredTechArticles = TECHNICAL_ARTICLES_DATA.filter(
    a => a.title.toLowerCase().includes(cleanQuery) || a.summary.toLowerCase().includes(cleanQuery)
  );

  const filteredCostPlanning = COST_PLANNING_ARTICLES_DATA.filter(
    c => c.title.toLowerCase().includes(cleanQuery) || c.summary.toLowerCase().includes(cleanQuery)
  );

  const filteredComparisons = COMPARISONS_ARTICLES_DATA.filter(
    comp => comp.title.toLowerCase().includes(cleanQuery) || comp.summary.toLowerCase().includes(cleanQuery)
  );

  const filteredIndustrialGuides = INDUSTRIAL_GUIDES_ARTICLES_DATA.filter(
    g => g.title.toLowerCase().includes(cleanQuery) || g.summary.toLowerCase().includes(cleanQuery)
  );

  const filteredKnowledgeFaqs = KNOWLEDGE_HUB_FAQS_DATA.filter(
    k => k.question.toLowerCase().includes(cleanQuery) || k.answer.toLowerCase().includes(cleanQuery)
  );

  const filteredIndustryInsights = INDUSTRY_INSIGHTS.filter(
    ins => ins.title.toLowerCase().includes(cleanQuery) || 
           ins.summary.toLowerCase().includes(cleanQuery) ||
           ins.category.toLowerCase().includes(cleanQuery) ||
           ins.keyTakeaways.some(t => t.toLowerCase().includes(cleanQuery))
  );

  const totalResults = 
    filteredServices.length + 
    filteredIndustries.length + 
    filteredProjects.length + 
    filteredFaqs.length + 
    filteredResources.length + 
    filteredPebGuides.length + 
    filteredTechArticles.length +
    filteredCostPlanning.length +
    filteredComparisons.length +
    filteredIndustrialGuides.length +
    filteredKnowledgeFaqs.length +
    filteredIndustryInsights.length;

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

              {/* Resources Results */}
              {filteredResources.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <BookOpen className="w-3.5 h-3.5" />
                    Resource Ecosystem ({filteredResources.length})
                  </div>
                  <div className="space-y-1">
                    {filteredResources.map(res => (
                      <button
                        key={res.route}
                        onClick={() => {
                          onNavigate(res.route);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {res.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{res.desc}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* PEB Guides Results */}
              {filteredPebGuides.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <BookOpen className="w-3.5 h-3.5" />
                    PEB Guides ({filteredPebGuides.length})
                  </div>
                  <div className="space-y-1">
                    {filteredPebGuides.map(guide => (
                      <button
                        key={guide.id}
                        onClick={() => {
                          onNavigate('resources/knowledge-hub/peb-guides', guide.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {guide.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{guide.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Articles Results */}
              {filteredTechArticles.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <Cpu className="w-3.5 h-3.5" />
                    Technical Articles ({filteredTechArticles.length})
                  </div>
                  <div className="space-y-1">
                    {filteredTechArticles.map(art => (
                      <button
                        key={art.id}
                        onClick={() => {
                          onNavigate('resources/knowledge-hub/technical-articles', art.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {art.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{art.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cost & Planning Results */}
              {filteredCostPlanning.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <BookOpen className="w-3.5 h-3.5" />
                    Cost &amp; Planning Guides ({filteredCostPlanning.length})
                  </div>
                  <div className="space-y-1">
                    {filteredCostPlanning.map(cp => (
                      <button
                        key={cp.id}
                        onClick={() => {
                          onNavigate('resources/knowledge-hub/cost-planning', cp.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {cp.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{cp.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparisons Results */}
              {filteredComparisons.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <Cpu className="w-3.5 h-3.5" />
                    Structural Comparisons ({filteredComparisons.length})
                  </div>
                  <div className="space-y-1">
                    {filteredComparisons.map(comp => (
                      <button
                        key={comp.id}
                        onClick={() => {
                          onNavigate('resources/knowledge-hub/comparisons', comp.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {comp.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{comp.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Industrial Building Guides Results */}
              {filteredIndustrialGuides.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <Building2 className="w-3.5 h-3.5" />
                    Industrial Building Guides ({filteredIndustrialGuides.length})
                  </div>
                  <div className="space-y-1">
                    {filteredIndustrialGuides.map(guide => (
                      <button
                        key={guide.id}
                        onClick={() => {
                          onNavigate('resources/knowledge-hub/industrial-building-guides', guide.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {guide.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{guide.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Level 6 Industry Insights */}
              {filteredIndustryInsights.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <BookOpen className="w-3.5 h-3.5" />
                    Industry Insights &amp; Perspectives ({filteredIndustryInsights.length})
                  </div>
                  <div className="space-y-1">
                    {filteredIndustryInsights.map(insight => (
                      <button
                        key={insight.id}
                        onClick={() => {
                          onNavigate('resources/company-industry-insights/industry-insights', insight.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {insight.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{insight.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Knowledge Hub FAQs */}
              {filteredKnowledgeFaqs.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Knowledge Hub Q&amp;A ({filteredKnowledgeFaqs.length})
                  </div>
                  <div className="space-y-1">
                    {filteredKnowledgeFaqs.map(kfaq => (
                      <button
                        key={kfaq.id}
                        onClick={() => {
                          onNavigate('resources/knowledge-hub/faqs');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 transition-colors flex items-center justify-between group border border-transparent hover:border-sky-200"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {kfaq.question}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{kfaq.answer}</div>
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
                    General FAQs ({filteredFaqs.length})
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
