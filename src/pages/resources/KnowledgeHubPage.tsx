import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  BookOpen, 
  Layers, 
  Cpu, 
  Compass, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  FileText,
  Phone,
  DollarSign,
  Scale,
  Building2,
  CheckCircle2
} from 'lucide-react';

interface KnowledgeHubPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const KnowledgeHubPage: React.FC<KnowledgeHubPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Knowledge Hub', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          <BookOpen className="w-3.5 h-3.5 text-sky-600" />
          Technical Education &amp; Engineering Standards
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB &amp; Structural Steel Knowledge Hub
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          An authoritative reference center for industrial developers, factory promoters, project directors, and structural consultants. Explore 48+ comprehensive engineering guides, comparative analyses, and technical resources covering pre-engineered building systems, manufacturing quality, cost planning, and industrial facility architecture.
        </p>

        {/* Knowledge Ecosystem Status Notice */}
        <div className="p-4 bg-sky-50/60 border border-sky-200 rounded-lg text-xs text-slate-700 flex items-start gap-3">
          <Layers className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-900">Comprehensive 6-Pillar Knowledge Ecosystem</span>
            <p className="text-slate-600">
              Access in-depth technical content organized across 6 core domains: PEB Fundamentals, Manufacturing &amp; Standards, Cost &amp; Planning, Structural Comparisons, Industrial Application Guides, and Technical FAQs.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Knowledge Pillars Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-600" />
            Knowledge Pillars &amp; Technical Coverage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. PEB Guides */}
          <div className="bg-white border-2 border-sky-200 rounded-2xl p-6 space-y-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                  Core Technology
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  ● 10 Live Guides
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight hover:text-sky-600 transition-colors">
                  <button 
                    onClick={() => onNavigate('resources/knowledge-hub/peb-guides')}
                    className="text-left cursor-pointer"
                  >
                    PEB Guides &amp; Fundamentals
                  </button>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Fundamental engineering principles of Pre-Engineered Buildings: tapered primary rigid frames, clear spans up to 60m+, moment envelopes, and steel weight optimization.
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Featured Topics:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">What is a Pre-Engineered Building?</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">How Does a PEB Building Work?</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Main Structural Components of PEB</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100">
              <button
                onClick={() => onNavigate('resources/knowledge-hub/peb-guides')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg cursor-pointer"
              >
                <span>Browse 10 PEB Guides</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Technical Articles */}
          <div className="bg-white border-2 border-sky-200 rounded-2xl p-6 space-y-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                  Manufacturing &amp; Codes
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  ● 10 Live Papers
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight hover:text-sky-600 transition-colors">
                  <button 
                    onClick={() => onNavigate('resources/knowledge-hub/technical-articles')}
                    className="text-left cursor-pointer"
                  >
                    Technical Articles &amp; Standards
                  </button>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Detailed explorations of structural steel fabrication codes, Submerged Arc Welding (AWS D1.1), CNC profiling, ultrasonic flaw detection (UT), and corrosion coatings.
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Featured Topics:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Primary vs. Secondary Framing</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Purlins &amp; Girts: Z vs. C Sections</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Bracing Systems &amp; Load Paths</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100">
              <button
                onClick={() => onNavigate('resources/knowledge-hub/technical-articles')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg cursor-pointer"
              >
                <span>Browse 10 Technical Articles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. Cost & Planning */}
          <div className="bg-white border-2 border-sky-200 rounded-2xl p-6 space-y-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                  Feasibility &amp; Budgeting
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  ● 10 Live Guides
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight hover:text-sky-600 transition-colors">
                  <button 
                    onClick={() => onNavigate('resources/knowledge-hub/cost-planning')}
                    className="text-left cursor-pointer"
                  >
                    Cost, Budgeting &amp; Planning
                  </button>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Technical parameters influencing structural steel tonnage, clear spans, crane loads, RFQ checklist requirements, site soil conditions, and construction timelines.
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Featured Topics:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">What Factors Affect Total PEB Cost?</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Step-by-Step PEB Project Planning</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Information Needed for RFQ Quotes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100">
              <button
                onClick={() => onNavigate('resources/knowledge-hub/cost-planning')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg cursor-pointer"
              >
                <span>Browse 10 Planning Guides</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4. Comparisons */}
          <div className="bg-white border-2 border-sky-200 rounded-2xl p-6 space-y-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                  Structural Comparisons
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  ● 8 Live Analyses
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight hover:text-sky-600 transition-colors">
                  <button 
                    onClick={() => onNavigate('resources/knowledge-hub/comparisons')}
                    className="text-left cursor-pointer"
                  >
                    Structural &amp; System Comparisons
                  </button>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Rigorous, balanced evaluations: PEB vs. RCC, PEB vs. Conventional Steel, Single-Source Turnkey vs. Multi-Vendor, and Factory CNC vs. On-Site Fabrication.
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Featured Topics:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">PEB vs. RCC Buildings</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">PEB vs. Conventional Steel Sheds</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Factory CNC vs. On-Site Fabrication</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100">
              <button
                onClick={() => onNavigate('resources/knowledge-hub/comparisons')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg cursor-pointer"
              >
                <span>Browse 8 Comparisons</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5. Industrial Building Guides */}
          <div className="bg-white border-2 border-sky-200 rounded-2xl p-6 space-y-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                  Facility Architecture
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  ● 10 Live Guides
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight hover:text-sky-600 transition-colors">
                  <button 
                    onClick={() => onNavigate('resources/knowledge-hub/industrial-building-guides')}
                    className="text-left cursor-pointer"
                  >
                    Industrial Building Guides
                  </button>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Application-specific design manuals for logistics warehouses, manufacturing plants, heavy crane sheds, cold stores, workshops, and distribution centers.
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Featured Topics:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">PEB Logistics Warehouse Guide</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Manufacturing Plant &amp; Crane Guide</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Cold Storage Steel Envelopes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100">
              <button
                onClick={() => onNavigate('resources/knowledge-hub/industrial-building-guides')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg cursor-pointer"
              >
                <span>Browse 10 Building Guides</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 6. Knowledge Hub FAQs */}
          <div className="bg-white border-2 border-sky-200 rounded-2xl p-6 space-y-5 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                  Q&amp;A Reference Library
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  ● 25+ Answers
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight hover:text-sky-600 transition-colors">
                  <button 
                    onClick={() => onNavigate('resources/knowledge-hub/faqs')}
                    className="text-left cursor-pointer"
                  >
                    Knowledge Hub FAQs
                  </button>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Direct, authoritative answers to common client questions regarding structural spans, quotation inputs, construction workflows, welding, and Indian Standard codes.
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Question Categories:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">General PEB &amp; System Concepts</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Planning, Budgeting &amp; RFQs</span>
                  </li>
                  <li className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-sky-500 flex-shrink-0" />
                    <span className="truncate">Manufacturing &amp; Erection Standards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100">
              <button
                onClick={() => onNavigate('resources/knowledge-hub/faqs')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg cursor-pointer"
              >
                <span>Explore Technical FAQs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Assistance Card */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm text-left">
        <div className="space-y-1 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-sky-700 bg-white px-2.5 py-1 rounded border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Engineering Support Desk • Halol / Vadodara
          </div>
          <h4 className="text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
            Consult Directly with a Structural Design Engineer
          </h4>
          <p className="text-xs text-slate-600">
            Have questions about preliminary steel sizing, bay spacing, wind loads, or crane bridge capacities?
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto flex-shrink-0">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider transition-colors rounded-xl border border-sky-300 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>{COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <button
            onClick={() => onOpenQuote('Knowledge Hub Consultation')}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-xl shadow-md cursor-pointer"
          >
            Request Quotation
          </button>
        </div>
      </section>
    </div>
  );
};
