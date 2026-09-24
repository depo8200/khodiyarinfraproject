import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { INDUSTRY_INSIGHTS } from '../../data/industryInsights';
import { IndustryInsightCard } from '../../components/sections/IndustryInsightCard';
import { 
  TrendingUp, 
  Search, 
  Filter, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  Phone,
  FileCheck2,
  Compass,
  Calculator
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface IndustryInsightsPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const IndustryInsightsPage: React.FC<IndustryInsightsPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Project Planning',
    'Fabrication & Quality',
    'Engineering & Design',
    'Warehousing & Logistics',
    'Logistics & Execution',
    'Procurement & Strategy',
    'Execution & Management',
    'Operations & Maintenance',
    'Factory Engineering',
    'Construction Methods',
    'Engineering & Documentation'
  ];

  const filteredInsights = INDUSTRY_INSIGHTS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyTakeaways.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Company / Industry Insights', route: 'resources/company-industry-insights' },
          { label: 'Industry Insights', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          <BookOpen className="w-3.5 h-3.5 text-sky-600" />
          Technical &amp; Practical Perspectives (20 Articles)
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB &amp; Industrial Construction Insights
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Practical, field-grounded engineering analyses covering pre-engineered steel buildings, heavy fabrication benchmarks, logistics access, structural quality control, and tender evaluation across Gujarat and Western India.
        </p>

        {/* Content Assurance */}
        <div className="bg-sky-50/60 border border-sky-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed space-y-0.5">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Educational &amp; Non-Commercial Policy:
            </span>
            <p>
              These articles reflect verified structural engineering practices conforming to IS 800:2007 and IS 875:2015. They avoid promotional hype and unsupported claims to empower promoters, architects, and quantity surveyors with factual knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or standard..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-800 placeholder-slate-400"
            />
          </div>

          <div className="text-xs font-mono text-slate-500">
            Showing <strong className="text-slate-900">{filteredInsights.length}</strong> of {INDUSTRY_INSIGHTS.length} Articles
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white font-bold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="space-y-6">
        {filteredInsights.length === 0 ? (
          <div className="p-12 text-center bg-white border border-slate-200 rounded-xl space-y-3">
            <p className="text-slate-600 text-sm">No articles matched your current search filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs text-sky-600 font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight) => (
              <IndustryInsightCard
                key={insight.id}
                insight={insight}
                onSelect={(slug) => onNavigate('resources/company-industry-insights/industry-insights', slug)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Connected Resources Strip */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
            Connected Resource Ecosystem
          </div>
          <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Cross-Reference With Free Toolkits &amp; Engineering Calculators
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Combine these insights with our interactive calculators and practical checklists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <button
            onClick={() => onNavigate('resources/tools/peb-requirement-estimator')}
            className="p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-xl text-left space-y-2 group transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5 text-sky-600" />
            <div className="font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
              PEB Requirement Estimator
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Structure clear spans, eave heights, and operational provisions.
            </div>
          </button>

          <button
            onClick={() => onNavigate('resources/tools/structural-estimator')}
            className="p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-xl text-left space-y-2 group transition-all cursor-pointer"
          >
            <Calculator className="w-5 h-5 text-sky-600" />
            <div className="font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
              Structural Tonnage Estimator
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Live preliminary steel tonnage metrics under IS 800:2007.
            </div>
          </button>

          <button
            onClick={() => onNavigate('resources/free-resources/peb-buyer-guide')}
            className="p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-xl text-left space-y-2 group transition-all cursor-pointer"
          >
            <FileCheck2 className="w-5 h-5 text-sky-600" />
            <div className="font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
              PEB Buyer Decision Guide
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Commercial evaluation framework for factory promoters.
            </div>
          </button>
        </div>
      </section>

      {/* Engineering Assistance Note */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight">
            Need Expert Structural Engineering Review?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our engineering team in Halol and Vadodara is available to review architectural layouts, crane loads, and foundation reaction parameters.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <button
            onClick={() => onOpenQuote('Industry Insight Inquiry')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md"
          >
            Request Quote
          </button>
        </div>
      </section>
    </div>
  );
};
