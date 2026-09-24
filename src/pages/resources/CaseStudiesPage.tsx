import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { CASE_STUDIES } from '../../data/caseStudies';
import { CaseStudyCard } from '../../components/sections/CaseStudyCard';
import { ResourceEmptyState } from '../../components/sections/ResourceEmptyState';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  FolderCheck, 
  ShieldCheck, 
  Building, 
  Layers, 
  ArrowRight, 
  Phone,
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Company / Industry Insights', route: 'resources/company-industry-insights' },
          { label: 'Case Studies', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          <FolderCheck className="w-3.5 h-3.5 text-sky-600" />
          Verified Project Execution Records
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Verified Project Case Studies
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          A dedicated repository for comprehensive, audited project retrospectives detailing clear span calculations, steel tonnage, connection engineering, fabrication challenges, and erection workflows from Khodiyar Infraproject.
        </p>

        {/* Verification & Ethics Commitment */}
        <div className="bg-sky-50/60 border border-sky-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed space-y-0.5">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Strict Verification Policy:
            </span>
            <p>
              Khodiyar Infraproject maintains strict content accuracy standards. We never invent fictional clients, simulated project metrics, or mock photography. Case studies are published exclusively when supported by client release consent, structural design records, and audited completion files.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section: Active Case Studies or Future-Ready State */}
      <section className="space-y-8">
        {CASE_STUDIES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard
                key={study.id}
                caseStudy={study}
                onSelect={(slug) => onNavigate('resources/company-industry-insights/case-studies', slug)}
              />
            ))}
          </div>
        ) : (
          <ResourceEmptyState
            title="Verified Case Studies Hub"
            subtitle="Audited Project Retrospectives in Documentation"
            badge="Future-Ready Architecture"
            message="Detailed, verified project case studies will be published here as formal client authorizations, shop drawing archives, and site photographic clearances are finalized. Each case study will provide a transparent breakdown of design calculations, tonnage metrics, and erection timelines."
            criteriaTitle="Mandatory Documentation Required Before Case Study Publication:"
            criteriaList={[
              'Client release authorization for public project data disclosure.',
              'Archived structural engineering calculation book and certified STAAD.Pro model.',
              'Verified mill test certificates (MTC) and non-destructive weld testing (NDT) reports.',
              'High-resolution on-site fabrication and crane erection progress photography.'
            ]}
            ctaLabel="Explore 20 Industry Insights"
            ctaRoute="resources/company-industry-insights/industry-insights"
            onNavigate={onNavigate}
            onOpenQuote={onOpenQuote}
          />
        )}
      </section>

      {/* Typical Structural Capabilities Preview (Linked to Commercial Projects) */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm text-left">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
            Commercial Structural Portfolio
          </div>
          <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Explore Typical Structural Solutions
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            While individual client case studies undergo audit, review the technical parameters of typical building categories engineered and fabricated by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 inline-block">
                Industrial Production
              </span>
              <h4 className="font-bold text-sm text-slate-900">
                Manufacturing Plants &amp; Factory Buildings
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tapered built-up portal frames, integrated EOT crane runways (10T–35T), and mezzanine administration offices.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 pt-2 cursor-pointer"
            >
              <span>View Building Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 inline-block">
                Storage &amp; Logistics
              </span>
              <h4 className="font-bold text-sm text-slate-900">
                PEB Warehouses &amp; Logistics Hubs
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-span layouts up to 60m, dock leveler canopies, continuous ridge ventilators, and optimized pallet rack grids.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 pt-2 cursor-pointer"
            >
              <span>View Building Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 inline-block">
                Heavy Engineering
              </span>
              <h4 className="font-bold text-sm text-slate-900">
                Heavy Steel Structures &amp; Towers
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heavy plate girders conforming to IS 2062 E350 steel, built-up box columns, and multi-tier industrial process structures.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 pt-2 cursor-pointer"
            >
              <span>View Building Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Engineering Assistance Note */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight">
            Have Specific Structural Drawings for Evaluation?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Submit your conceptual plot layout or equipment footprint to our engineering team in Halol/Vadodara for preliminary structural appraisal.
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
            onClick={() => onOpenQuote('Case Study Discussion')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md cursor-pointer"
          >
            Submit RFP
          </button>
        </div>
      </section>
    </div>
  );
};
