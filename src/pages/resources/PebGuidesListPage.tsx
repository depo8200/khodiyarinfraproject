import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { PEB_GUIDES_DATA, KnowledgeArticle } from '../../data/knowledgeHub';
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Search, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Phone
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface PebGuidesListPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const PebGuidesListPage: React.FC<PebGuidesListPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuides = PEB_GUIDES_DATA.filter(g => 
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
          { label: 'PEB Guides', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            Knowledge Hub • 10 Foundational Guides
          </div>
          <button
            onClick={() => onNavigate('resources/knowledge-hub/technical-articles')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <span>Explore Technical Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB Guides &amp; Fundamentals
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Clear, structured, and beginner-friendly guides explaining how Pre-Engineered Buildings (PEBs) work, their core structural components, fabrication and erection processes, and how they compare to conventional structural steel.
        </p>

        {/* Quick Search & Filter */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search PEB topics, components, erection..."
              className="w-full pl-10 pr-4 py-2.5 bg-sky-50/50 border border-sky-200 rounded-lg text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>
          <div className="text-xs font-mono text-slate-500 font-semibold self-center">
            Showing {filteredGuides.length} of {PEB_GUIDES_DATA.length} Guides
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredGuides.map((guide, idx) => (
            <article 
              key={guide.id}
              className="bg-white border border-sky-200 rounded-xl p-6 sm:p-8 space-y-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                    {guide.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 font-sans tracking-tight hover:text-sky-600 transition-colors">
                    <button
                      onClick={() => onNavigate('resources/knowledge-hub/peb-guides', guide.slug)}
                      className="text-left cursor-pointer"
                    >
                      {guide.title}
                    </button>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                    {guide.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-100">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                    Key Topics Covered:
                  </div>
                  <ul className="space-y-1.5">
                    {guide.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                      <li key={tIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Topic #{idx + 1}
                </span>
                <button
                  onClick={() => onNavigate('resources/knowledge-hub/peb-guides', guide.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Switch to Technical Articles Banner */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-700 font-bold">
            <Cpu className="w-4 h-4 text-sky-600" />
            Looking for In-Depth Engineering Analysis?
          </div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
            Explore 10 In-Depth Technical Articles
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Delve deeper into Indian Standard design codes (IS 800:2007, IS 875), Submerged Arc Welding (AWS D1.1), non-destructive ultrasonic testing, and crane bracket surge calculations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('resources/knowledge-hub/technical-articles')}
            className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-md shadow-sm cursor-pointer"
          >
            <span>View Technical Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Consultation Assistance */}
      <section className="bg-white border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            Have Specific Structural Questions for an Upcoming Project?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our engineering team in Halol / Vadodara can help evaluate your project requirements, clear spans, and preliminary structural sizing.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider transition-colors rounded-md border border-sky-200"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <button
            onClick={() => onOpenQuote('PEB Guide Inquiry')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md shadow-sm cursor-pointer"
          >
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
};
