import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  Calculator, 
  Wrench, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  ShieldCheck, 
  Sliders,
  Phone,
  MessageSquare,
  FileCheck,
  FileText,
  Building,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ToolsPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Tools', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          <Calculator className="w-3.5 h-3.5 text-sky-600" />
          Interactive Engineering &amp; Project Planning Tools
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB &amp; Structural Steel Interactive Tools
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Digital estimation and planning utilities designed to assist industrial promoters, civil contractors, warehouse operators, and architects in scoping building geometry, calculating preliminary steel tonnage, and organizing project milestones.
        </p>

        {/* Global Tools Disclaimer */}
        <div className="bg-sky-50/60 border border-sky-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed space-y-0.5">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Engineering Planning Standards:
            </span>
            <p>
              All utilities in this directory are preliminary planning tools intended to organize requirements and facilitate informed technical discussions. They do not replace formal structural calculations, geotechnical soil testing, or certified 3D STAAD.Pro engineering design.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Active Interactive Tools Directory */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
              Level 5 Tools Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Interactive Planning Directory
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tool 1: PEB Requirement Estimator */}
          <div className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Building className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold uppercase rounded">
                  Live Tool
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                  PEB Requirement Estimator
                </h3>
                <div className="text-[11px] font-mono text-sky-700 font-semibold mt-0.5">
                  Scope, Clear Spans &amp; Infrastructure
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>
                  <strong>Purpose:</strong> Organize preliminary technical parameters, clear height, bay spacing, overhead crane requirements, insulation, and future expansion provisions.
                </p>
                <p>
                  <strong>Who It's For:</strong> Factory owners, warehouse promoters, industrial architects, and procurement teams.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-tight">
                <strong>Output:</strong> Structured project profile, key engineering considerations, missing data checklist, and print/clipboard export.
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-[10px] text-slate-400 font-mono">
                Disclaimer: Preliminary scope organizer; does not replace structural calculations.
              </div>
              <button
                onClick={() => onNavigate('resources/tools/peb-requirement-estimator')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Launch Requirement Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tool 2: Project Planning Tool */}
          <div className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Compass className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold uppercase rounded">
                  Live Tool
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                  Project Planning Tool
                </h3>
                <div className="text-[11px] font-mono text-sky-700 font-semibold mt-0.5">
                  12-Step Concept-to-Execution Roadmap
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>
                  <strong>Purpose:</strong> Step-by-step guidance through 12 critical project phases from site logistics, trailer turning access, and document readiness to procurement discussions.
                </p>
                <p>
                  <strong>Who It's For:</strong> Project directors, civil contractors, site managers, and corporate promoters.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-tight">
                <strong>Output:</strong> 12-dimension execution roadmap, technical discussion notes, and document audit.
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-[10px] text-slate-400 font-mono">
                Disclaimer: For commercial preparation and civil synchronization only.
              </div>
              <button
                onClick={() => onNavigate('resources/tools/project-planning-tool')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Launch Planning Tool</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tool 3: Structural Estimator */}
          <div className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Calculator className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold uppercase rounded">
                  Live Tool
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                  Structural Estimator
                </h3>
                <div className="text-[11px] font-mono text-sky-700 font-semibold mt-0.5">
                  IS 800:2007 Parametric Steel Tonnage
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>
                  <strong>Purpose:</strong> Live calculation of preliminary structural steel tonnage based on length, width, clear eave height, crane capacity, and building classification.
                </p>
                <p>
                  <strong>Who It's For:</strong> Quantity surveyors, structural estimators, billing engineers, and civil consultants.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-tight">
                <strong>Output:</strong> Steel tonnage range (Metric Tonnes), kg/m² intensity metrics, and direct WhatsApp sharing.
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-[10px] text-slate-400 font-mono">
                Disclaimer: Estimates are preliminary; certified design requires STAAD modeling.
              </div>
              <button
                onClick={() => onNavigate('resources/tools/structural-estimator')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Launch Structural Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Guide: Which Tool Should You Use? */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            Decision Guide
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Which Interactive Tool Fits Your Current Stage?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Select the appropriate digital utility depending on your current information availability and project milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-sky-700">Scenario A</div>
              <h4 className="font-bold text-sm text-slate-900">
                "I know my plot size and want to define building features and operational scope."
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use the <strong>PEB Requirement Estimator</strong> to evaluate clear spans, dock levelers, ventilation systems, crane brackets, and draft an exportable project summary.
              </p>
            </div>
            <button
              onClick={() => onNavigate('resources/tools/peb-requirement-estimator')}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 pt-2"
            >
              <span>Go to Requirement Estimator</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-sky-700">Scenario B</div>
              <h4 className="font-bold text-sm text-slate-900">
                "I am preparing for vendor discussions and want to coordinate site logistics &amp; civil handoffs."
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use the <strong>Project Planning Tool</strong> to step through 12 procurement dimensions including trailer access, power line setbacks, anchor bolt schedules, and document checklists.
              </p>
            </div>
            <button
              onClick={() => onNavigate('resources/tools/project-planning-tool')}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 pt-2"
            >
              <span>Go to Planning Tool</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-sky-700">Scenario C</div>
              <h4 className="font-bold text-sm text-slate-900">
                "I have tentative length, width, and height and need preliminary structural steel tonnage."
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use the <strong>Structural Estimator</strong> to compute metric tonnage ranges based on building type, crane capacity, and insulation parameters under IS 800:2007 guidelines.
              </p>
            </div>
            <button
              onClick={() => onNavigate('resources/tools/structural-estimator')}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 pt-2"
            >
              <span>Go to Structural Estimator</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Internal Linking: Free Resources & Knowledge Hub */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
            Connected Knowledge Ecosystem
          </div>
          <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Accompanying Free Guides &amp; Technical Manuals
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Deepen your understanding before finalizing building orders with our comprehensive technical library.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <button
            onClick={() => onNavigate('resources/free-resources/peb-requirement-checklist')}
            className="p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-xl text-left space-y-2 group transition-all cursor-pointer"
          >
            <FileCheck className="w-5 h-5 text-sky-600" />
            <div className="font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
              PEB Requirement Checklist
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              20 critical categories spanning soil, cranes, clear heights, and approvals.
            </div>
          </button>

          <button
            onClick={() => onNavigate('resources/free-resources/planning-guide')}
            className="p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-xl text-left space-y-2 group transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5 text-sky-600" />
            <div className="font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
              15-Step Planning Guide
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Chronological roadmap from land survey through factory fabrication and handover.
            </div>
          </button>

          <button
            onClick={() => onNavigate('resources/free-resources/peb-buyer-guide')}
            className="p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-xl text-left space-y-2 group transition-all cursor-pointer"
          >
            <FileText className="w-5 h-5 text-sky-600" />
            <div className="font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
              PEB Buyer Decision Guide
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Detailed procurement evaluation: steel grades, vendor credentials, and warranties.
            </div>
          </button>

          <button
            onClick={() => onNavigate('resources/knowledge-hub')}
            className="p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-xl text-left space-y-2 group transition-all cursor-pointer"
          >
            <Layers className="w-5 h-5 text-sky-600" />
            <div className="font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
              Complete Knowledge Hub
            </div>
            <div className="text-[11px] text-slate-500 leading-snug">
              Technical articles, IS 800 standards, wind engineering, and cost planning.
            </div>
          </button>
        </div>
      </section>

      {/* Engineering Assistance Note */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight">
            Have Detailed Project Drawings or Complex Loads?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            For structures involving heavy dynamic equipment, multiple overhead cranes, or specialized wind corridors, contact our structural engineering office directly.
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
            onClick={() => onOpenQuote('Custom Tool Inquiries')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md"
          >
            Submit RFP
          </button>
        </div>
      </section>
    </div>
  );
};
