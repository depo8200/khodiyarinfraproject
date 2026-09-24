import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  BookOpen, 
  FileText, 
  Wrench, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  MessageSquare,
  Sparkles,
  Calculator,
  Compass
} from 'lucide-react';

interface ResourcesLandingPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ResourcesLandingPage: React.FC<ResourcesLandingPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  const resourceCategories = [
    {
      id: 'knowledge-hub',
      title: 'Knowledge Hub',
      subtitle: 'Technical Education & Engineering Standards',
      desc: 'In-depth educational and technical guides covering Pre-Engineered Buildings (PEBs), structural steel fabrication, submerged arc welding, crane girder design, and Indian structural standards (IS 800, IS 875, IS 1893).',
      route: 'resources/knowledge-hub',
      icon: BookOpen,
      badge: 'Engineering Knowledge',
      topics: [
        'PEB Fundamentals vs. Conventional Steel',
        'Factory Fabrication & SAW Welding Standards',
        'IS 875 Wind Speed & Seismic Load Engineering',
        'Overhead Crane Load & Drift Mitigation'
      ],
      ctaText: 'Explore Knowledge Hub'
    },
    {
      id: 'free-resources',
      title: 'Free Resources',
      subtitle: 'Buyer Guides, Checklists & References',
      desc: 'Practical engineering checklists, procurement guides, technical terminology references, and planning frameworks designed to assist industrial project heads in structuring tenders and evaluating PEB proposals.',
      route: 'resources/free-resources',
      icon: FileText,
      badge: 'Procurement Toolkits',
      topics: [
        'PEB Buyer & Technical Evaluation Guide',
        'Site Readiness & Anchor Bolt Checklist',
        'Project Requirement Specification Framework',
        'Structural Steel Terminology Glossary'
      ],
      ctaText: 'View Free Resources'
    },
    {
      id: 'tools',
      title: 'Interactive Tools',
      subtitle: 'Preliminary Sizing & Tonnage Estimators',
      desc: 'Digital calculators and planning utilities that help plant owners and consultants estimate preliminary structural steel tonnage, clear span clearances, and budget parameters for industrial warehouses and factory sheds.',
      route: 'resources/tools',
      icon: Calculator,
      badge: 'Available Now',
      topics: [
        'Structural Steel & PEB Tonnage Estimator',
        'Eave Height & Clear Span Feasibility Guide',
        'EOT Crane Surge Allowance Calculator',
        'Preliminary Project Scope Generator'
      ],
      ctaText: 'Access Planning Tools'
    },
    {
      id: 'company-industry-insights',
      title: 'Company / Industry Insights',
      subtitle: 'Verified Case Studies & Regional Trends',
      desc: 'Authentic updates on heavy industrial developments across Gujarat (Vadodara, Halol, Savli, Dahej), structural innovations, technical advancements, and verified engineering execution milestones.',
      route: 'resources/company-industry-insights',
      icon: TrendingUp,
      badge: 'Industry Perspective',
      topics: [
        'Industrial Corridor Developments in Gujarat',
        'Fabrication Quality Control & NDT Testing',
        'Verified Project Execution Records',
        'Khodiyar Infraproject Technical Milestones'
      ],
      ctaText: 'Read Insights'
    }
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Resources', active: true }]} onNavigate={onNavigate} />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          Technical Resource Ecosystem • Level 1 Foundation
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB &amp; Industrial Structural Resources
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          An authoritative engineering library and planning ecosystem crafted by Khodiyar Infraproject. Explore technical guides, procurement checklists, preliminary tonnage calculation tools, and industrial insights tailored for factory owners, warehouse operators, and consulting engineers across Vadodara, Gujarat, and Western India.
        </p>
      </section>

      {/* 4 Primary Resource Category Cards */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <Compass className="w-5 h-5 text-sky-600" />
              Resource Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select an area below to access dedicated technical documentation, downloadable references, and planning tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {resourceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="bg-white border border-sky-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                      {cat.badge}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight group-hover:text-sky-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-mono text-sky-700 font-semibold mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>

                  {/* Key Topic Highlights */}
                  <div className="pt-2 border-t border-sky-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                      Key Coverage:
                    </div>
                    <ul className="space-y-1.5">
                      {cat.topics.map((t, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-sky-400 rounded-full flex-shrink-0"></span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-sky-100">
                  <button
                    onClick={() => onNavigate(cat.route)}
                    className="w-full inline-flex items-center justify-between px-4 py-3 bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white font-bold text-xs uppercase tracking-wider transition-all rounded-lg group/btn cursor-pointer"
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-sky-600 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Interactive Tool Quick-Access Banner */}
      <section className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <Calculator className="w-3.5 h-3.5 text-sky-400" />
            Live Planning Utility
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight">
            Try the Structural Steel &amp; PEB Tonnage Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Planning a new industrial shed, warehouse, or factory expansion in Gujarat? Input your building length, width, clear eave height, and crane tonnage to calculate an immediate preliminary structural steel tonnage range.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('resources/tools/structural-estimator')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors rounded-lg shadow-sm cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Structural Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenQuote('PEB Building Estimation')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20 rounded-lg cursor-pointer"
            >
              Request Engineering BOQ
            </button>
          </div>
        </div>
      </section>

      {/* Direct Contact & Technical Consultation Card */}
      <section className="bg-white border border-sky-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-lg font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            Need Customized Engineering Guidance?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our in-house structural engineers are available to review preliminary architectural layouts, crane loads, wind speed calculations, and site plans.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I am reviewing your Resource Ecosystem and would like to consult on a structural project.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-emerald-500/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider transition-colors rounded-md"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};
