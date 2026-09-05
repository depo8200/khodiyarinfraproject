import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_CONFIG } from '../data/company';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  ChevronRight,
  FileCheck2,
  HardHat
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  slug, 
  onNavigate, 
  onOpenQuote 
}) => {
  const service = SERVICES_DATA.find(s => s.slug === slug) || SERVICES_DATA[0];

  const otherServices = SERVICES_DATA.filter(s => s.slug !== service.slug);

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. BREADCRUMBS & TOP NAV */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
        <button onClick={() => onNavigate('home')} className="hover:text-sky-600 cursor-pointer">Home</button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <button onClick={() => onNavigate('services')} className="hover:text-sky-600 cursor-pointer">Services</button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-sky-600 font-bold">{service.title}</span>
      </div>

      {/* 2. SERVICE HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            {service.category} • Vadodara Execution Center
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Direct High-Conversion Action Bar */}
          <div className="p-6 bg-white border border-sky-200 rounded-2xl space-y-4 shadow-xl">
            <div className="text-xs font-mono uppercase text-sky-600 font-bold flex items-center gap-2 tracking-wider">
              <Phone className="w-3.5 h-3.5 fill-current" />
              Direct Structural Engineering Assistance:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {COMPANY_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Khodiyar Infraproject, I would like to inquire regarding ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenQuote(service.title)}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <span>Get a Quote for this Service</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden border border-sky-200 rounded-2xl shadow-xl h-80 sm:h-96">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-sky-200/50 text-xs font-mono text-white">
              Integrated Execution by Khodiyar Infraproject
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED TECHNICAL EXPLANATION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Technical Overview &amp; Capabilities
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-4">
              {service.fullDesc}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              Key Client Advantages &amp; Engineering Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.keyBenefits.map((benefit, i) => (
                <div key={i} className="p-4 bg-sky-50/60 border border-sky-200 rounded-xl flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Overview */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-600" />
              Standard Execution Sequence
            </h3>
            <div className="space-y-3 pt-2">
              {service.processSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 bg-sky-50/60 border border-sky-200 rounded-xl">
                  <span className="text-xs font-mono font-black text-sky-700 bg-white border border-sky-200 px-2 py-1 rounded">
                    0{i + 1}
                  </span>
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-900 font-sans uppercase tracking-wider">{step.title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Specifications & Quick Contact */}
        <div className="lg:col-span-4 space-y-6">
          {/* Specifications Table */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 space-y-4 shadow-xl">
            <h3 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-sky-600" />
              Technical Specifications
            </h3>
            <div className="divide-y divide-sky-100 text-xs">
              {service.specifications.map((spec, i) => (
                <div key={i} className="py-2.5 space-y-1">
                  <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">{spec.label}</div>
                  <div className="font-semibold text-slate-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Quote Request Box */}
          <div className="bg-gradient-to-br from-white via-sky-50/50 to-sky-100/40 border border-sky-200 rounded-2xl p-6 space-y-4 shadow-xl text-center">
            <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight">
              Request BOQ / Rate Analysis
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Send your building layout, span requirements, or structural drawings for a customized quote.
            </p>
            <button
              onClick={() => onOpenQuote(service.title)}
              className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
            >
              Get Instant Quote
            </button>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="block text-xs font-mono text-sky-600 hover:underline pt-1 uppercase tracking-wider font-semibold"
            >
              Or call {COMPANY_CONFIG.phoneDisplay}
            </a>
          </div>

          {/* Quick links to other services */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 space-y-3 shadow-sm">
            <h4 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
              Other Core Services
            </h4>
            <div className="space-y-1 text-xs">
              {otherServices.slice(0, 5).map((other) => (
                <button
                  key={other.id}
                  onClick={() => onNavigate('service-detail', other.slug)}
                  className="w-full text-left py-2 px-2.5 text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-1">{other.title}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-sky-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM NAVIGATION */}
      <div className="flex items-center justify-between border-t border-sky-100 pt-8">
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-sky-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        <a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          className="text-xs font-mono font-bold text-sky-600 hover:underline flex items-center gap-1.5 uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Engineer: {COMPANY_CONFIG.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
};
