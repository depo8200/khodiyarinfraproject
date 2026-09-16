import React from 'react';
import { INDUSTRIES_DATA } from '../data/industries';
import { COMPANY_CONFIG } from '../data/company';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  Building2, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ThermometerSnowflake, 
  Factory, 
  Warehouse, 
  ShieldCheck,
  Flame,
  Wrench
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const coldStorage = INDUSTRIES_DATA.find(i => i.id === 'cold-storage-facilities' || i.slug.includes('cold-storage')) || INDUSTRIES_DATA[0];
  const otherIndustries = INDUSTRIES_DATA.filter(i => i.id !== coldStorage.id);

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Industries', active: true }]} onNavigate={onNavigate} />

      {/* 1. HERO */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          Industrial Sector Solutions
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Industrial Steel Solutions for Factories &amp; Warehouses in Gujarat
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          From high-thermal-integrity cold chains to 60-meter clear-span automated logistics warehouses, <strong className="text-slate-900 font-semibold">{COMPANY_CONFIG.name}</strong> engineers steel superstructures to match the operational stresses of each industrial domain.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Consult Sector Specialist: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-sky-50 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-lg border border-sky-200 transition-colors cursor-pointer shadow-sm"
          >
            <span>Request Sector BOQ Proposal</span>
          </button>
        </div>
      </section>

      {/* 2. COLD STORAGE SPOTLIGHT (High Visibility Requirement) */}
      <section className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl space-y-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono font-bold uppercase tracking-wider rounded">
              <ThermometerSnowflake className="w-3.5 h-3.5" />
              Primary Industrial Work Area • Vadodara &amp; Pan-Gujarat
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight">
              {coldStorage.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-mono">
              {coldStorage.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
            >
              Call Cold Store Desk
            </a>
            <button
              onClick={() => onOpenQuote('Cold Storage Facilities')}
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-900 transition-colors cursor-pointer shadow-sm"
            >
              Get Cold Store Quote
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {coldStorage.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-2">
                <div className="text-xs font-bold text-sky-700 uppercase font-mono tracking-wider">
                  Thermal Integrity Engineering
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered with zero thermal bridges at secondary purlin interfaces, accommodating 100mm to 150mm thick PUF/PIR sandwich insulated wall &amp; roof panels.
                </p>
              </div>

              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-2">
                <div className="text-xs font-bold text-sky-700 uppercase font-mono tracking-wider">
                  Heavy Suspended Refrigeration Loads
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rafter and ceiling framing specifically reinforced to carry suspended evaporator blowers, piping networks, valve stations, and ammonia line headers.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
                Key Engineering Parameters:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {coldStorage.keyRequirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden border border-sky-200 rounded-2xl shadow-xl relative h-72 sm:h-96">
              <img
                src={coldStorage.image}
                alt="Cold Storage Facility Steel Framing by Khodiyar Infraproject Vadodara"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-sky-200/40 text-xs font-mono text-white">
                Airtight Envelope • Eave Heights up to 22m • High-Density Racking
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OTHER SECTOR MODULES */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
            Other Sectors
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Specialized Engineering Across Manufacturing, Logistics &amp; Heavy Industry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherIndustries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm hover:border-sky-400 hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                <div className="relative h-52 overflow-hidden border border-sky-100 rounded-xl">
                  <img
                    src={ind.image}
                    alt={`${ind.title} - Steel Construction Gujarat by Khodiyar Infraproject`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-sky-200/40 uppercase tracking-wider">
                    {ind.tagline}
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-sky-100">
                  <div className="text-xs font-mono uppercase text-sky-600 font-bold tracking-wider">
                    Technical Deliverables:
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    {ind.keyRequirements.map((r, ri) => (
                      <div key={ri} className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">•</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenQuote(ind.title)}
                  className="py-2.5 px-4 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider rounded-lg border border-sky-200 transition-colors cursor-pointer shadow-sm"
                >
                  Quote for {ind.title}
                </button>
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="p-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors cursor-pointer shadow-sm"
                  title="Call Now"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECTOR CONSULTATION CTA */}
      <section className="p-8 md:p-12 bg-gradient-to-br from-white via-sky-50/50 to-sky-100/40 border border-sky-200 rounded-2xl shadow-xl text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Have an Industrial Site in Halol, Vadodara, Dahej, or Pan-India?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Our structural engineers can review your process layout, crane capacities, and clear heights to formulate the most cost-efficient PEB framing plan.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <span>Request Sector Feasibility</span>
          </button>
        </div>
      </section>
    </div>
  );
};
