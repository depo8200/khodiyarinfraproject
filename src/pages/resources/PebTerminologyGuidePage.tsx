import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { PEB_TERMINOLOGY_DATA, TerminologyItem } from '../../data/freeResources';
import { 
  FileText, 
  Search, 
  Printer, 
  BookOpen, 
  Layers, 
  Tag, 
  ArrowRight,
  Info,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface PebTerminologyGuidePageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const PebTerminologyGuidePage: React.FC<PebTerminologyGuidePageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Framing', 'Components', 'Cladding', 'Connections', 'Engineering'];

  const filteredTerms = useMemo(() => {
    return PEB_TERMINOLOGY_DATA.filter((item) => {
      const matchesSearch = 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.detailedExplanation.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Free Resources', route: 'resources/free-resources' },
          { label: 'PEB Terminology Guide', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header & Hero */}
      <header className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            Engineering Glossary &amp; Technical Reference
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => onOpenQuote('Terminology Consultation')}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Consult an Engineer</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB &amp; Structural Steel Terminology Guide
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
          An authoritative glossary defining essential structural steel and Pre-Engineered Building terms. Written for industrial promoters, facility managers, and site supervisors to bridge the gap between architectural drawings and commercial procurement.
        </p>

        {/* Search & Category Filter Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4 print:hidden">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms, components, or definitions (e.g. purlin, eave, anchor bolt, SAW, HSFG)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono uppercase text-slate-500 font-bold mr-2">
              Filter Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white font-bold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs font-mono text-slate-400">
              Showing {filteredTerms.length} of {PEB_TERMINOLOGY_DATA.length} Terms
            </span>
          </div>
        </div>
      </header>

      {/* Terminology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm hover:border-sky-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center px-2.5 py-0.5 bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                  {item.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  ID: #{item.id}
                </span>
              </div>

              <h2 className="text-lg font-black text-slate-900 font-sans tracking-tight">
                {item.term}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug bg-slate-50 border-l-2 border-sky-500 p-2.5 rounded-r">
                {item.shortDefinition}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.detailedExplanation}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-sky-800 tracking-wider">
                Practical Application:
              </span>
              <p className="text-xs text-slate-500 italic leading-relaxed">
                "{item.practicalContext}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-12 text-center space-y-3">
          <Info className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">No matching terminology found</h3>
          <p className="text-xs text-slate-500">
            Try searching for another keyword or switch category filter to "All".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="px-4 py-2 bg-sky-600 text-white text-xs font-bold uppercase rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Internal Linking Box to Knowledge Hub */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-5">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
            Connect Terminology to Engineering Details
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight">
            Learn How These Terms Translate into Structural Design
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Read our in-depth Knowledge Hub technical white papers on primary frame optimization, cold-formed purlin deflection, and high-strength friction grip (HSFG) moment splices under IS 800:2007.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('resources/knowledge-hub/technical-articles')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            <span>Explore Technical Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('resources/free-resources/peb-buyer-guide')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            <span>Read PEB Buyer Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
};
