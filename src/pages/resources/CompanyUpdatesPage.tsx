import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_UPDATES } from '../../data/companyUpdates';
import { CompanyUpdateCard } from '../../components/sections/CompanyUpdateCard';
import { ResourceEmptyState } from '../../components/sections/ResourceEmptyState';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Cpu, 
  MapPin, 
  Phone, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

interface CompanyUpdatesPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const CompanyUpdatesPage: React.FC<CompanyUpdatesPageProps> = ({
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
          { label: 'Company Updates', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          <Building2 className="w-3.5 h-3.5 text-sky-600" />
          Official Corporate &amp; Operational Milestones
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Company Updates &amp; Developments
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Official announcements, fabrication equipment additions, quality control benchmarks, and technical capability expansions from Khodiyar Infraproject headquarters in Halol / Vadodara, Gujarat.
        </p>

        {/* Verification Commitment */}
        <div className="bg-sky-50/60 border border-sky-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed space-y-0.5">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Authenticity Standards:
            </span>
            <p>
              Khodiyar Infraproject publishes only verified corporate developments, accredited machinery additions, and certified structural milestones. We maintain an uncompromising policy against simulated awards, fictitious partnerships, or unverified statistical claims.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section: Active Updates or Future-Ready State */}
      <section className="space-y-8">
        {COMPANY_UPDATES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_UPDATES.map((update) => (
              <CompanyUpdateCard
                key={update.id}
                update={update}
                onSelect={(slug) => onNavigate('resources/company-industry-insights/company-updates', slug)}
              />
            ))}
          </div>
        ) : (
          <ResourceEmptyState
            title="Official Announcements Hub"
            subtitle="Verified Corporate Developments in Progress"
            badge="Future-Ready Architecture"
            message="Company updates and verified corporate milestones will be published here as official announcements occur. Future updates may include new equipment acquisitions, facility expansions, quality benchmarks, and official service additions."
            criteriaTitle="What Qualifies for Publication in This Section:"
            criteriaList={[
              'Introduction of new structural fabrication machinery (e.g., CNC plasma lines, automated SAW gantries).',
              'Audited factory quality control certifications and third-party NDT procedural enhancements.',
              'Official service line expansions and regional infrastructure corridor authorizations.',
              'Verified company milestones, facility expansions, and certified engineering partnerships.'
            ]}
            ctaLabel="Read 20 Practical Industry Insights"
            ctaRoute="resources/company-industry-insights/industry-insights"
            onNavigate={onNavigate}
            onOpenQuote={onOpenQuote}
          />
        )}
      </section>

      {/* Verified Corporate Profile */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm text-left">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
            Company Baseline
          </div>
          <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Verified Organization Profile
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Current operational parameters as maintained across registered corporate documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Established</div>
            <div className="text-lg font-black text-slate-900">{COMPANY_CONFIG.establishedYear}</div>
            <div className="text-xs text-slate-500">Founded in Gujarat, India</div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Headquarters</div>
            <div className="text-lg font-black text-slate-900">Halol / Vadodara</div>
            <div className="text-xs text-slate-500">{COMPANY_CONFIG.officeAddress.city}, Gujarat</div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Core Specialization</div>
            <div className="text-lg font-black text-slate-900">PEB &amp; Heavy Steel</div>
            <div className="text-xs text-slate-500">Design, Fabrication &amp; Erection</div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Structural Steel Executed</div>
            <div className="text-lg font-black text-slate-900">{COMPANY_CONFIG.tonnageCompleted} Tons</div>
            <div className="text-xs text-slate-500">Across industrial sectors</div>
          </div>
        </div>
      </section>

      {/* Engineering Assistance Note */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
        <div className="space-y-1 max-w-xl">
          <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight">
            Schedule a Manufacturing Facility Audit
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Industrial clients and structural consultants are welcome to visit our fabrication works to inspect our welding procedures, material storage, and quality control systems.
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
            onClick={() => onOpenQuote('Facility Audit Request')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md cursor-pointer"
          >
            Submit Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};
