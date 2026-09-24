import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { PEB_PLANNING_STEPS } from '../../data/freeResources';
import { 
  Compass, 
  Printer, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ShieldCheck, 
  Info,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Building,
  Hammer
} from 'lucide-react';

interface PlanningGuidePageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const PlanningGuidePage: React.FC<PlanningGuidePageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [activeStepId, setActiveStepId] = useState<string>(PEB_PLANNING_STEPS[0].id);

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
          { label: 'PEB Planning Guide', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header & Hero */}
      <header className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            15-Step Execution Roadmap
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
              onClick={() => onOpenQuote('PEB Project Planning Consultation')}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Consult an Engineer</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Step-by-Step PEB Project Planning Guide
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
          A sequential 15-step planning framework for anyone preparing to build an industrial shed, warehouse, or factory in Gujarat. Understand the critical path from operational requirements to final waterproofing inspection.
        </p>

        {/* Engineering Sequence Disclaimer Notice */}
        <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-800 font-bold tracking-wider">
            <Info className="w-4 h-4 text-sky-600" />
            Project Schedule &amp; Sequence Notice
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            While this guide presents the standard linear progression of an industrial building project, the exact sequence and lead times will vary depending on site topography, statutory approvals, monsoon seasons, soil bearing capacity, and specific commercial contract arrangements.
          </p>
        </div>
      </header>

      {/* Main Grid: Sticky Sidebar + Steps Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-4 space-y-6 print:hidden">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sticky top-28 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-mono uppercase font-bold text-slate-700 tracking-wider flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-600" />
                15 Sequential Steps
              </span>
            </div>

            <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
              {PEB_PLANNING_STEPS.map((step) => (
                <a
                  key={step.id}
                  href={`#${step.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveStepId(step.id);
                    document.getElementById(step.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block px-3 py-2 rounded-lg transition-all text-left ${
                    activeStepId === step.id
                      ? 'bg-sky-600 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <span className="font-mono font-semibold mr-1.5">Step {step.stepNumber}:</span>
                  {step.title}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                Companion Planning Tools:
              </div>
              <div className="space-y-1.5">
                <button
                  onClick={() => onNavigate('resources/free-resources/project-checklist')}
                  className="w-full text-left p-2 rounded-lg bg-white border border-slate-200 hover:border-sky-300 text-xs text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between group"
                >
                  <span>Interactive Site Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </button>
                <button
                  onClick={() => onNavigate('resources/free-resources/peb-buyer-guide')}
                  className="w-full text-left p-2 rounded-lg bg-white border border-slate-200 hover:border-sky-300 text-xs text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between group"
                >
                  <span>PEB Buyer &amp; Technical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Steps Content Flow */}
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-8">
            {PEB_PLANNING_STEPS.map((step) => (
              <section 
                key={step.id} 
                id={step.id} 
                className="scroll-mt-28 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5 shadow-sm"
              >
                {/* Step Header */}
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-sky-600 text-white text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                      {String(step.stepNumber).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-sky-700 tracking-wider">
                        Planning Milestone {step.stepNumber} of 15
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium pl-11">
                    {step.subtitle}
                  </p>
                </div>

                {/* Objective */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase font-bold text-slate-600 tracking-wider">
                    Core Objective:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {step.objective}
                  </p>
                </div>

                {/* Key Checkpoints */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="text-xs font-mono uppercase font-bold text-slate-700 tracking-wider">
                    Key Execution Checkpoints:
                  </div>
                  <ul className="space-y-2">
                    {step.keyCheckpoints.map((cp, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span>{cp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Typical Risks & Engineering Advice */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="bg-rose-50/60 border border-rose-200 rounded-lg p-4 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-rose-800 tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      Typical Planning Risk:
                    </div>
                    <p className="text-xs text-rose-900 leading-relaxed">
                      {step.typicalRisks}
                    </p>
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-4 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-emerald-800 tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Engineering Advice:
                    </div>
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      {step.engineeringAdvice}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                Project Planning Support
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight">
                Review Your Project Schedule with Khodiyar Infraproject
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Avoid coordination errors between civil pedestals and structural steel deliveries. Our project engineers in Halol can assist in creating a synchronized milestone schedule tailored to your site groundbreaking timeline.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuote('Project Schedule Coordination')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <span>Request Project Timeline Review</span>
              </button>
              <button
                onClick={() => onNavigate('resources/free-resources/project-checklist')}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                <span>Open Project Checklist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
