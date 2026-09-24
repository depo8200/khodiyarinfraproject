import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '../../data/company';
import { PEB_BUYER_GUIDE_SECTIONS } from '../../data/freeResources';
import { 
  BookMarked, 
  Printer, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  Compass, 
  FileText, 
  Layers, 
  Phone,
  MessageSquare,
  Building,
  Ruler,
  ExternalLink
} from 'lucide-react';

interface PebBuyerGuidePageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const PebBuyerGuidePage: React.FC<PebBuyerGuidePageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [activeSection, setActiveSection] = useState<string>(PEB_BUYER_GUIDE_SECTIONS[0].id);

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
          { label: 'PEB Buyer Guide', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header & Hero */}
      <header className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <BookMarked className="w-3.5 h-3.5 text-sky-600" />
            Free Procurement &amp; Decision Guide
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => onOpenQuote('PEB Buyer Guide Consultation')}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Consult an Engineer</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB Buyer &amp; Technical Decision Guide
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
          An objective, practical guide for industrial plant owners, promoters, and procurement directors evaluating Pre-Engineered Building (PEB) solutions. Learn how to define structural requirements, verify fabrication quality, evaluate crane provisions, and avoid costly procurement oversights.
        </p>

        {/* Quick Metadata Bar */}
        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Audience: Factory Owners, Promoters &amp; Project Heads</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">•</span>
            <span>14 Practical Engineering Topics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">•</span>
            <span>Based on IS 800:2007 &amp; MBMA Practices</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">•</span>
            <span>No Email Sign-up or Registration Required</span>
          </div>
        </div>
      </header>

      {/* Main Grid: Sticky Sidebar + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-4 space-y-6 print:hidden">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sticky top-28 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-mono uppercase font-bold text-slate-700 tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-sky-600" />
                Guide Sections (14)
              </span>
            </div>

            <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
              {PEB_BUYER_GUIDE_SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(sec.id);
                    document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block px-3 py-2 rounded-lg transition-all text-left ${
                    activeSection === sec.id
                      ? 'bg-sky-600 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                Related Planning Tools:
              </div>
              <div className="space-y-1.5">
                <button
                  onClick={() => onNavigate('resources/free-resources/peb-requirement-checklist')}
                  className="w-full text-left p-2 rounded-lg bg-white border border-slate-200 hover:border-sky-300 text-xs text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between group"
                >
                  <span>PEB Requirement Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </button>
                <button
                  onClick={() => onNavigate('resources/free-resources/planning-guide')}
                  className="w-full text-left p-2 rounded-lg bg-white border border-slate-200 hover:border-sky-300 text-xs text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between group"
                >
                  <span>15-Step PEB Planning Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </button>
                <button
                  onClick={() => onNavigate('resources/free-resources/peb-terminology-guide')}
                  className="w-full text-left p-2 rounded-lg bg-white border border-slate-200 hover:border-sky-300 text-xs text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between group"
                >
                  <span>PEB Terminology Glossary</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Content Flow */}
        <div className="lg:col-span-8 space-y-10">
          {/* Quick Summary Card */}
          <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-800 font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              Executive Summary for Promoters
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Procuring a Pre-Engineered Building is not simply purchasing raw steel tonnage; it is entering an integrated engineering contract where structural design, factory manufacturing precision, and on-site assembly must coordinate seamlessly. Using this guide, you will be equipped to evaluate vendor proposals on structural integrity, code compliance, and real lifetime performance rather than low initial bids that hide major variation costs later.
            </p>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {PEB_BUYER_GUIDE_SECTIONS.map((section, index) => (
              <section 
                key={section.id} 
                id={section.id} 
                className="scroll-mt-28 space-y-4 pt-4 border-t border-slate-200 first:border-0 first:pt-0"
              >
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-start gap-3">
                  <span className="text-sky-600 font-mono text-lg sm:text-xl font-bold mt-0.5">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span>{section.title.replace(/^\d+\.\s*/, '')}</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {section.content}
                </p>

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2.5">
                    <div className="text-xs font-mono uppercase font-bold text-slate-600 tracking-wider mb-1">
                      Key Engineering Considerations:
                    </div>
                    <ul className="space-y-2">
                      {section.bulletPoints.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.engineeringTip && (
                  <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-950 font-mono uppercase tracking-wide mr-1.5">
                        Practical Advice:
                      </span>
                      {section.engineeringTip}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Cross-Link Box to Knowledge Hub */}
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                In-Depth Technical Research
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight">
                Want to Dive Deeper into Technical Articles &amp; Comparisons?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Explore our Knowledge Hub articles detailing Indian standard IS 800:2007 structural calculations, factory submerged arc welding standards, and comparative analyses between PEB and RCC.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => onNavigate('resources/knowledge-hub/peb-guides', 'what-is-a-peb')}
                className="text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-sky-400 text-xs transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-white">Guide: What is a PEB?</div>
                  <div className="text-slate-400 text-[11px]">Components, framing &amp; load paths</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </button>

              <button
                onClick={() => onNavigate('resources/knowledge-hub/cost-planning', 'peb-quote-information-needed')}
                className="text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-sky-400 text-xs transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-white">Quotation Data Guide</div>
                  <div className="text-slate-400 text-[11px]">Preparing drawings &amp; RFQs</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </button>

              <button
                onClick={() => onNavigate('resources/knowledge-hub/comparisons', 'peb-vs-rcc')}
                className="text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-sky-400 text-xs transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-white">Comparison: PEB vs. RCC</div>
                  <div className="text-slate-400 text-[11px]">Cost, speed, foundation &amp; spans</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </button>

              <button
                onClick={() => onNavigate('resources/knowledge-hub/cost-planning', 'crane-requirements-and-costs')}
                className="text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-sky-400 text-xs transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-white">EOT Crane Planning</div>
                  <div className="text-slate-400 text-[11px]">Gantry sizing &amp; surge forces</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                  Need an Engineering Review for an Upcoming Project?
                </h3>
                <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                  Our senior structural engineers in Halol &amp; Vadodara can evaluate your preliminary architectural layout, verify clear height parameters, and assist in establishing base specifications.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenQuote('PEB Buyer Guide - Architectural Review')}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Request Technical Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
