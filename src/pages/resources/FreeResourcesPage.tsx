import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '../../data/company';
import { FREE_RESOURCES_DIRECTORY, FreeResourceItem } from '../../data/freeResources';
import { 
  FileText, 
  CheckSquare, 
  BookMarked, 
  ClipboardList, 
  ArrowRight, 
  ShieldCheck, 
  Compass,
  BookOpen,
  Info,
  Layers,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface FreeResourcesPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const FreeResourcesPage: React.FC<FreeResourcesPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  const getResourceIcon = (id: string) => {
    switch (id) {
      case 'peb-buyer-guide': return BookMarked;
      case 'project-checklist': return CheckSquare;
      case 'peb-requirement-checklist': return ClipboardList;
      case 'peb-terminology-guide': return BookOpen;
      case 'planning-guide': return Compass;
      default: return FileText;
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Free Resources', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          <FileText className="w-3.5 h-3.5 text-sky-600" />
          Practical Engineering Toolkits &amp; Buyer References
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Free PEB &amp; Industrial Planning Resources
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Practical guides, interactive site checklists, technical procurement questionnaires, and terminology references developed from over 7+ years of Pre-Engineered Building execution in Gujarat. Genuinely free resources designed to help factory owners, promoters, and project managers structure requirements and avoid costly site errors.
        </p>

        {/* Ethical Transparency Note */}
        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>100% Free &amp; Open Access</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">•</span>
            <span>No Mandatory Email or Phone Gate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">•</span>
            <span>Interactive Web &amp; Print-Ready Layouts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">•</span>
            <span>Direct IS 800:2007 Code Alignment</span>
          </div>
        </div>
      </section>

      {/* 5 Core Resources Directory */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-sky-600" />
            Core Planning &amp; Procurement Resources (5)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FREE_RESOURCES_DIRECTORY.map((resource) => {
            const Icon = getResourceIcon(resource.id);
            return (
              <div 
                key={resource.id}
                className="bg-white border border-slate-200 hover:border-sky-300 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                      {resource.badge}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 font-sans uppercase tracking-tight group-hover:text-sky-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-3">
                      {resource.summary}
                    </p>
                  </div>

                  {/* Purpose & Audience */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    <div>
                      <span className="font-mono uppercase font-bold text-[11px] text-slate-500 block mb-0.5">
                        Purpose:
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {resource.purpose}
                      </p>
                    </div>

                    <div className="pt-1">
                      <span className="font-mono uppercase font-bold text-[11px] text-slate-500 block mb-0.5">
                        Who It Is For:
                      </span>
                      <p className="text-slate-600 leading-relaxed italic">
                        {resource.whoItIsFor}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5">
                      {resource.highlights.slice(0, 3).map((h, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate(resource.route)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-50 group-hover:bg-sky-600 text-sky-700 group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all rounded-lg cursor-pointer shadow-sm"
                  >
                    <span>Open {resource.category}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Linking Box to Knowledge Hub */}
      <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-5">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
            Companion Resources
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight">
            Explore the In-Depth PEB Knowledge Hub
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            In addition to these practical checklists and procurement guides, our Knowledge Hub provides over 50 technical articles, structural comparisons (PEB vs. RCC), sector-specific warehouse manuals, and commercial cost budgeting analyses.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('resources/knowledge-hub')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            <span>Visit Knowledge Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('resources/knowledge-hub/cost-planning')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            <span>Cost &amp; Budget Planning Guides</span>
          </button>
          <button
            onClick={() => onNavigate('resources/knowledge-hub/faqs')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            <span>Technical PEB FAQs</span>
          </button>
        </div>
      </section>

      {/* Tender Review Assistance CTA */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 space-y-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            Preparing an Industrial PEB Tender in Gujarat?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our engineering team in Halol can assist you in establishing baseline parameters for column layouts, foundation reactions, wind resistance, and crane brackets before final tender release.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenQuote('Free Resources - Tender Review')}
            className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-md shadow-sm cursor-pointer whitespace-nowrap"
          >
            Request Tender Review
          </button>
        </div>
      </section>
    </div>
  );
};
