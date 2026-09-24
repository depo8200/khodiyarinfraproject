import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { INDUSTRIAL_GUIDES_ARTICLES_DATA } from '../../data/knowledgeHub';
import { 
  Building2, 
  ArrowRight, 
  Clock, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Phone,
  Warehouse,
  Factory,
  Wrench
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface IndustrialGuidesListPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const IndustrialGuidesListPage: React.FC<IndustrialGuidesListPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuides = INDUSTRIAL_GUIDES_ARTICLES_DATA.filter(g => 
    g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Knowledge Hub', route: 'resources/knowledge-hub' },
          { label: 'Industrial Building Guides', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            Knowledge Hub • 10 Application Guides
          </div>
          <button
            onClick={() => onNavigate('resources/knowledge-hub/cost-planning')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <span>Explore Cost &amp; Planning Guides</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Industrial Building Guides
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Practical, sector-specific planning manuals for diverse industrial facilities. Explore architectural requirements, clear spans, material handling heights, dock levelers, ventilation, insulation, and multi-phase expansion considerations for logistics warehouses, manufacturing plants, cold stores, workshops, and distribution centers.
        </p>

        {/* Quick Search & Filter */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search warehouse guide, cold storage, factory planning..."
              className="w-full pl-10 pr-4 py-2.5 bg-sky-50/50 border border-sky-200 rounded-lg text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>
          <div className="text-xs font-mono text-slate-500 font-semibold self-center">
            Showing {filteredGuides.length} of {INDUSTRIAL_GUIDES_ARTICLES_DATA.length} Guides
          </div>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGuides.map((article) => (
          <div
            key={article.id}
            onClick={() => onNavigate('resources/knowledge-hub/industrial-building-guides', article.slug)}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-200 cursor-pointer group text-left relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono uppercase font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                  {article.categoryLabel}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {article.summary}
              </p>

              {/* Table of Contents Preview */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                  Key Planning Aspects:
                </div>
                <ul className="space-y-1">
                  {article.tableOfContents.slice(0, 3).map((toc) => (
                    <li key={toc.id} className="text-xs text-slate-500 flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                      <span className="truncate">{toc.title}</span>
                    </li>
                  ))}
                  {article.tableOfContents.length > 3 && (
                    <li className="text-[11px] text-sky-600 font-medium pl-4">
                      + {article.tableOfContents.length - 3} more planning sections
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
              <span className="uppercase tracking-wider">Read Facility Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        ))}
      </section>

      {/* Cross-Category & Consultation Banner */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-10 space-y-6 text-left">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-sky-700 bg-white px-2.5 py-1 rounded border border-sky-200">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              Specialized Facility Architecture
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase">
              Planning a Specialized Industrial Unit in Gujarat?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From heavy engineering plants with 25-ton EOT cranes to high-bay logistics warehouses with dock levelers, Khodiyar Infraproject engineers customized structural framing tailored to your industrial process. Contact our engineering team for technical layout assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider rounded-xl border border-sky-300 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_CONFIG.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenQuote('Industrial Facility Architecture Consultation')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Request Facility Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-sky-200/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-slate-500 font-mono">
            Also explore:
          </span>
          <div className="flex flex-wrap gap-4 font-bold text-sky-700">
            <button 
              onClick={() => onNavigate('resources/knowledge-hub/cost-planning')}
              className="hover:text-sky-900 hover:underline cursor-pointer"
            >
              10 Cost &amp; Planning Guides →
            </button>
            <button 
              onClick={() => onNavigate('resources/knowledge-hub/comparisons')}
              className="hover:text-sky-900 hover:underline cursor-pointer"
            >
              8 Structural Comparisons →
            </button>
            <button 
              onClick={() => onNavigate('resources/knowledge-hub/technical-articles')}
              className="hover:text-sky-900 hover:underline cursor-pointer"
            >
              10 Technical Articles →
            </button>
            <button 
              onClick={() => onNavigate('resources/knowledge-hub/faqs')}
              className="hover:text-sky-900 hover:underline cursor-pointer"
            >
              Knowledge Hub FAQs →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
