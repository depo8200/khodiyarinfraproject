import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_CONFIG } from '../data/company';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  Wrench, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Truck, 
  Layers, 
  Filter 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Structures', 'Engineering', 'Fabrication', 'Execution'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Services', active: true }]} onNavigate={onNavigate} />

      {/* 1. HERO HEADER */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          Industrial Capabilities Directory
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB &amp; Structural Steel Services in Vadodara, Gujarat
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Khodiyar Infraproject provides an integrated single-source workflow spanning all 9 specialized service pillars. Every phase is managed internally without sub-contractor friction.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-sky-600" />
            <span>Filter Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-sky-600 hover:bg-sky-50 border border-sky-200'
              }`}
            >
              {cat} {cat !== 'All' ? `(${SERVICES_DATA.filter(s => s.category === cat).length})` : `(${SERVICES_DATA.length})`}
            </button>
          ))}
        </div>
      </section>

      {/* 2. SERVICES GRID (9 Services) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((srv) => (
          <div
            key={srv.id}
            className="bg-white border border-sky-200 rounded-2xl overflow-hidden hover:border-sky-400 hover:shadow-xl transition-all duration-300 flex flex-col group shadow-sm"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={srv.heroImage}
                alt={`${srv.title} - Structural Steel & PEB Services Vadodara | Khodiyar Infraproject`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md border border-sky-200 text-[10px] font-mono text-sky-700 font-bold uppercase tracking-widest rounded shadow-sm">
                  {srv.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors font-sans uppercase tracking-tight">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {srv.shortDesc}
                </p>
              </div>

              {/* Key Benefits snippet */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-sky-100">
                <div className="text-[10px] font-mono uppercase text-sky-600 font-bold tracking-wider">
                  Core Advantage:
                </div>
                {srv.keyBenefits.slice(0, 2).map((b, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px]">
                    <span className="text-sky-600 font-bold">•</span>
                    <span className="line-clamp-1">{b}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onNavigate('service-detail', srv.slug)}
                  className="w-full py-2.5 px-4 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border border-sky-200 cursor-pointer"
                >
                  <span>Read Detailed Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="py-2.5 px-2.5 bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={() => onOpenQuote(srv.title)}
                    className="py-2.5 px-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="p-8 md:p-12 bg-white border border-sky-200 rounded-2xl shadow-xl text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Need a Custom Integrated Package Covering Multiple Services?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
          From full turnkey packages combining Design + Fabrication + Logistics + Erection, to specialized fabrication-only contracts, we adapt to your industrial requirements.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Our Engineering Desk: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <span>Submit Technical Tender / BOQ</span>
          </button>
        </div>
      </section>
    </div>
  );
};
