import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { TECHNICAL_ARTICLES_DATA, KnowledgeArticle } from '../../data/knowledgeHub';
import { 
  Cpu, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Search, 
  BookOpen, 
  ShieldCheck, 
  Phone,
  FileCheck2
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface TechnicalArticlesListPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const TechnicalArticlesListPage: React.FC<TechnicalArticlesListPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = TECHNICAL_ARTICLES_DATA.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Knowledge Hub', route: 'resources/knowledge-hub' },
          { label: 'Technical Articles', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            Knowledge Hub • 10 Technical Articles
          </div>
          <button
            onClick={() => onNavigate('resources/knowledge-hub/peb-guides')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <span>Explore PEB Fundamentals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Structural Steel Technical Articles
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Engineering-focused technical documentation addressing structural steel framing mechanics, Indian Standard codes (IS 800, IS 875, IS 1893), submerged arc welding parameters, non-destructive testing (NDT), and civil foundation anchor bolt interaction.
        </p>

        {/* Quick Search & Filter */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search welding, NDT, bracing, clear span, codes..."
              className="w-full pl-10 pr-4 py-2.5 bg-sky-50/50 border border-sky-200 rounded-lg text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>
          <div className="text-xs font-mono text-slate-500 font-semibold self-center">
            Showing {filteredArticles.length} of {TECHNICAL_ARTICLES_DATA.length} Technical Articles
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredArticles.map((article, idx) => (
            <article 
              key={article.id}
              className="bg-white border border-sky-200 rounded-xl p-6 sm:p-8 space-y-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                    {article.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 font-sans tracking-tight hover:text-sky-600 transition-colors">
                    <button
                      onClick={() => onNavigate('resources/knowledge-hub/technical-articles', article.slug)}
                      className="text-left cursor-pointer"
                    >
                      {article.title}
                    </button>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-100">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                    Key Engineering Focus:
                  </div>
                  <ul className="space-y-1.5">
                    {article.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
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
                  Technical Topic #{idx + 1}
                </span>
                <button
                  onClick={() => onNavigate('resources/knowledge-hub/technical-articles', article.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  <span>Read Technical Paper</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Switch to PEB Guides Banner */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-700 font-bold">
            <BookOpen className="w-4 h-4 text-sky-600" />
            Looking for Beginner-Friendly Fundamentals?
          </div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
            Explore 10 Foundational PEB Guides
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Review the core fundamentals of Pre-Engineered Buildings: how PEB works, main structural components, warehouse dimensional planning, and execution stages.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('resources/knowledge-hub/peb-guides')}
            className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-md shadow-sm cursor-pointer"
          >
            <span>View PEB Guides</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Consultation Assistance */}
      <section className="bg-white border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-4 h-4 text-sky-600" />
            Need Engineering Design Review or Structural Sizing?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our in-house structural modeling team in Halol / Vadodara uses STAAD.Pro to evaluate custom industrial configurations and Indian Standard load combinations.
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
            onClick={() => onOpenQuote('Technical Article Inquiry')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md shadow-sm cursor-pointer"
          >
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
};
