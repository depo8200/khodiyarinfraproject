import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { SERVICES_DATA } from '../data/services';
import { INDUSTRIES_DATA } from '../data/industries';
import { PROJECT_CATEGORIES } from '../data/projects';
import { DIFFERENTIATORS_DATA } from '../data/differentiators';
import { FAQS_DATA } from '../data/faqs';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { StructuralEstimator } from '../components/sections/StructuralEstimator';
import { QuoteForm } from '../components/sections/QuoteForm';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  Building2, 
  Wrench, 
  Truck, 
  Layers, 
  Sparkles, 
  Compass, 
  HardHat, 
  Cpu, 
  Link as LinkIcon, 
  Check, 
  Star,
  ExternalLink,
  MessageCircleQuestion,
  Factory
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');

  const processSteps = [
    {
      step: '01',
      title: 'Requirement Discussion',
      desc: 'Analyzing architectural layout, clear span needs, eave heights, soil bearing data, crane tonnage, and Indian wind/seismic zone classifications.'
    },
    {
      step: '02',
      title: 'Design & Engineering',
      desc: 'In-house 3D BIM structural modeling and DFM analysis under IS 800:2007, optimizing steel tonnage and drafting zero-clash shop drawings.'
    },
    {
      step: '03',
      title: 'Fabrication & Production',
      desc: 'Automated submerged arc welding (SAW), CNC plasma plate profiling, shot blasting, and high-build anti-corrosive primer coating.'
    },
    {
      step: '04',
      title: 'Logistics Coordination',
      desc: 'Synchronized Just-in-Time (JIT) dispatches indexed to site erection sequence, eliminating on-site clutter, double-handling, and transit damage.'
    },
    {
      step: '05',
      title: 'Erection & Installation',
      desc: 'Crane-assisted assembly with certified riggers, HSFG torque auditing, laser-level alignment, and leak-proof building envelope sealing.'
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* 1. HERO SECTION (White & Skyblue Theme) */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-sky-50/70 via-white to-sky-100/40 border-b border-sky-100">
        {/* Dot Matrix & Blueprint Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-industrial-dots"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase rounded">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>INTEGRATED STRUCTURAL SOLUTIONS • VADODARA, GUJARAT</span>
              </div>

              {/* High-Impact Display Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tighter text-slate-900 font-sans">
                POWERING<br />
                INDUSTRIAL<br />
                <span className="text-sky-600">EXCELLENCE.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                From precision 3D BIM design to turnkey on-site erection, <strong className="text-slate-900 font-semibold">{COMPANY_CONFIG.name}</strong> delivers high-performance Pre-Engineered Buildings (PEB) and heavy structural steel infrastructure across Gujarat and India.
              </p>

              {/* CONVERSION CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {/* 🥇 Primary Conversion Priority: CALL NOW */}
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-colors shadow-lg hover:shadow-sky-500/20 rounded-lg"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>CALL NOW: {COMPANY_CONFIG.phoneDisplay}</span>
                </a>

                {/* 🥈 High-contrast Get a Quote */}
                <button
                  onClick={() => onOpenQuote()}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-3 hover:bg-slate-800 transition-colors cursor-pointer rounded-lg shadow-md"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* 🥉 WhatsApp Button */}
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I would like to discuss an industrial structural steel / PEB project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-colors rounded-lg shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* CONFIRMED REAL STATISTICS */}
              <div className="pt-6 border-t border-sky-100 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-sky-600">
                    <AnimatedCounter target={7} suffix="+" />
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                    Years Exp
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900">
                    <AnimatedCounter target={2000} suffix="+" />
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                    Tons Executed
                  </span>
                </div>

                <div className="flex flex-col col-span-2 sm:col-span-1">
                  <span className="text-3xl font-black text-sky-600">
                    100%
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                    Single-Source Vertical
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Column: 4-Quadrant Lifecycle Architecture with High-Res Images */}
            <div className="lg:col-span-5 relative bg-white border border-sky-200 p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="absolute inset-0 opacity-10 bg-industrial-dots pointer-events-none rounded-2xl"></div>

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {/* 01 DESIGN */}
                <div 
                  onClick={() => onNavigate('services')}
                  className="aspect-square relative rounded-xl overflow-hidden border border-sky-300 flex flex-col justify-between p-4 cursor-pointer group shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                    alt="Tekla 3D BIM Structural Steel Design"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-2 py-0.5 bg-sky-600 text-white text-[11px] font-mono font-bold rounded">
                      01
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors uppercase tracking-tight">
                      DESIGN
                    </h3>
                    <p className="text-[10px] text-white/80 leading-relaxed line-clamp-2">
                      In-house structural engineering &amp; BIM optimization.
                    </p>
                  </div>
                </div>

                {/* 02 PRODUCTION */}
                <div 
                  onClick={() => onNavigate('services')}
                  className="aspect-square relative rounded-xl overflow-hidden border border-sky-300 flex flex-col justify-between p-4 transform translate-y-3 sm:translate-y-5 cursor-pointer group shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
                    alt="Factory Steel Fabrication and SAW Welding"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-2 py-0.5 bg-sky-600 text-white text-[11px] font-mono font-bold rounded">
                      02
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors uppercase tracking-tight">
                      PRODUCTION
                    </h3>
                    <p className="text-[10px] text-white/80 leading-relaxed line-clamp-2">
                      Precision fabrication, automated SAW &amp; quality testing.
                    </p>
                  </div>
                </div>

                {/* 03 LOGISTICS */}
                <div 
                  onClick={() => onNavigate('services')}
                  className="aspect-square relative rounded-xl overflow-hidden border border-sky-300 flex flex-col justify-between p-4 cursor-pointer group shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                    alt="Heavy Structural Steel Logistics and Warehouse Storage"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-2 py-0.5 bg-sky-600 text-white text-[11px] font-mono font-bold rounded">
                      03
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors uppercase tracking-tight">
                      LOGISTICS
                    </h3>
                    <p className="text-[10px] text-white/80 leading-relaxed line-clamp-2">
                      Just-in-time sequenced dispatch matching crane lifts.
                    </p>
                  </div>
                </div>

                {/* 04 INSTALLATION */}
                <div 
                  onClick={() => onOpenQuote()}
                  className="aspect-square relative rounded-xl overflow-hidden border border-sky-400 flex flex-col justify-between p-4 transform translate-y-3 sm:translate-y-5 cursor-pointer group shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=600&q=80"
                    alt="Turnkey PEB Structural Installation on Site"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-950/40 to-transparent" />

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-2 py-0.5 bg-sky-500 text-white text-[11px] font-mono font-bold rounded">
                      04
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors uppercase tracking-tight">
                      INSTALLATION
                    </h3>
                    <p className="text-[10px] text-white/90 leading-relaxed line-clamp-2">
                      Turnkey erection, torque auditing &amp; handover.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="mt-8 pt-4 border-t border-sky-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Check className="w-3.5 h-3.5 text-sky-600" />
                  IS 800:2007 Compliant
                </span>
                <button
                  onClick={() => onNavigate('why-choose-us')}
                  className="text-sky-600 hover:text-sky-700 font-bold text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  View Advantage →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-sky-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80"
                alt="Khodiyar Infraproject steel structural installation in Gujarat"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-200 shadow-md">
                <div className="text-xs font-mono uppercase text-sky-600 font-bold">
                  Corporate Headquarters
                </div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  Halol &amp; Vadodara Industrial Belt, Gujarat
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Serving Industrial Hubs: Vadodara, Halol, Savli, Dahej, Bharuch &amp; Pan-India
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
                About KHODIYAR INFRAPROJECT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans">
                Industrial Steel &amp; Structural Solutions Engineered Without Compromise
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Established in <strong>{COMPANY_CONFIG.establishedYear}</strong> in Vadodara, Gujarat, <strong>{COMPANY_CONFIG.name}</strong> was created to eliminate the chronic delays, vendor friction, and fabrication defects that plague conventional industrial construction.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Backed by over <strong>7+ years of structural execution experience</strong> and more than <strong>2,000+ tons of completed steel work</strong>, our operations integrate every milestone under one corporate roof. We do not act merely as a fabrication shop or a local erection gang—we are a technical turnkey partner engineering high-performance PEB buildings, heavy structural frames, cold storage facilities, and modular offices tailored to your production demands.
            </p>

            {/* Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: 'In-House Design & BIM Detailing', desc: 'Precise DFM optimization to Indian wind and seismic codes.' },
                { title: 'Factory Steel Fabrication', desc: 'Automated SAW welding, plasma cutting, and NDT checks.' },
                { title: 'Synchronized JIT Logistics', desc: 'Deliveries sequenced directly to site crane availability.' },
                { title: 'Turnkey Safe Erection', desc: 'Certified rigging crews with strict torque and HSE protocols.' }
              ].map((pill, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 space-y-1">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{pill.title}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 pl-5">{pill.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors shadow-md cursor-pointer"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Contact: {COMPANY_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (Previewing all 9 Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-100 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
              Comprehensive Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans mt-1">
              Our Core Services (9)
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-2xl">
              End-to-end structural steel engineering and execution. Every service is backed by our dedicated in-house technical team.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold border border-sky-200 transition-colors cursor-pointer w-fit"
          >
            <span>View All Detailed Service Pages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white border border-sky-200 rounded-2xl overflow-hidden hover:border-sky-500 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={srv.heroImage}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-sky-600 text-white text-[10px] font-mono font-bold uppercase shadow-sm">
                  {srv.category}
                </span>
              </div>

              {/* Service Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors font-sans">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Key Benefit Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-sky-100 text-[11px] text-slate-600">
                  {srv.keyBenefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-sky-600 font-bold mt-0.5">•</span>
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="p-2 rounded-lg bg-sky-50 hover:bg-sky-600 hover:text-white text-sky-700 transition-colors"
                    title="Call Now for this service"
                    aria-label={`Call now about ${srv.title}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE KHODIYAR INFRAPROJECT (The 5 Core Differentiators) */}
      <section className="bg-sky-50/50 border-y border-sky-100 py-20 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-industrial-dots opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
              Engineered Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Why Choose KHODIYAR INFRAPROJECT?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Industrial construction fails when responsibility is fragmented. We replace multi-vendor chaos with single-source accountability, optimized design-for-manufacture, and disciplined execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS_DATA.map((diff, index) => (
              <div
                key={diff.id}
                className={`p-6 bg-white border border-sky-200 hover:border-sky-400 rounded-xl transition-all space-y-4 shadow-sm hover:shadow-md relative ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-sky-300">
                    {diff.number}
                  </span>
                  <div className="p-2.5 bg-sky-50 border border-sky-200 text-sky-600 rounded-lg">
                    {index === 0 ? <LinkIcon className="w-5 h-5" /> :
                     index === 1 ? <Cpu className="w-5 h-5" /> :
                     index === 2 ? <Truck className="w-5 h-5" /> :
                     index === 3 ? <Layers className="w-5 h-5" /> :
                     <CheckCircle2 className="w-5 h-5" />}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900 font-sans uppercase tracking-tight">
                    {diff.title}
                  </h3>
                  <div className="text-xs font-bold text-sky-600 font-mono uppercase tracking-wider">
                    {diff.subtitle}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {diff.description}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-sky-100">
                  {diff.details.map((d, di) => (
                    <li key={di} className="flex items-start gap-1.5">
                      <span className="text-sky-600 font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('why-choose-us')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md rounded-lg cursor-pointer"
            >
              <span>Explore All 5 Differentiators in Detail</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE (Focus on Industrial Sector + High Visibility for Cold Storage) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-100 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
              Sector Specialization
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight mt-1">
              Industries We Serve
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-2xl">
              Strictly focused on the industrial domain: high-performance manufacturing, cold storage, warehousing, and heavy process infrastructure.
            </p>
          </div>
          <button
            onClick={() => onNavigate('industries')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200 transition-colors cursor-pointer w-fit rounded-lg"
          >
            <span>View All Industry Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Spotlight on Cold Storage Facilities */}
        <div className="bg-white border-2 border-sky-200 p-6 md:p-10 shadow-xl rounded-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
                ★ Core Competency • High Thermal Integrity
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
                Cold Storage Facilities &amp; Temperature-Controlled Structures
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cold store structures require precision engineering to eliminate thermal bridging, support heavy suspended refrigeration evaporator units, and withstand continuous high humidity washdowns without envelope degradation. We design airtight steel superstructures engineered for 100mm–150mm PUF sandwich panel envelopes across Gujarat and Western India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-mono">
                <div className="p-3 bg-sky-50/70 border border-sky-200 rounded-lg space-y-1">
                  <div className="text-sky-700 font-bold uppercase tracking-wider">Clear Eave Height:</div>
                  <div className="text-slate-900">10m to 22m for High-Density Pallet Racking</div>
                </div>
                <div className="p-3 bg-sky-50/70 border border-sky-200 rounded-lg space-y-1">
                  <div className="text-sky-700 font-bold uppercase tracking-wider">Thermal Decoupling:</div>
                  <div className="text-slate-900">Non-conductive thermal break pads</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('industries')}
                  className="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md rounded-lg cursor-pointer"
                >
                  Explore Cold Store Specifications
                </button>
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-colors flex items-center gap-2 rounded-lg"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  Consult Cold Store Engineer
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-sky-200 shadow-md rounded-xl relative h-64 sm:h-80">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cold Storage Facility Steel Framing by Khodiyar Infraproject"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white bg-slate-900/90 p-2.5 border border-sky-200/50 rounded-lg backdrop-blur-sm">
                  Engineered for Controlled Atmosphere (CA) &amp; Refrigerated Warehousing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Industrial Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.filter(i => !i.featured).map((ind) => (
            <div
              key={ind.id}
              className="bg-white border border-sky-200 rounded-xl p-6 space-y-4 hover:border-sky-400 transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                <div className="h-40 overflow-hidden relative rounded-lg border border-sky-100">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
                <h3 className="text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-sky-100">
                <div className="text-[11px] font-mono text-sky-600 uppercase font-bold tracking-wider">
                  Key Requirements:
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  {ind.keyRequirements.slice(0, 2).map((r, ri) => (
                    <div key={ri} className="flex items-start gap-1.5">
                      <span className="text-sky-600">•</span>
                      <span className="line-clamp-1">{r}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('industries')}
                  className="w-full mt-3 py-2.5 px-3 bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-xs font-bold uppercase tracking-wider border border-slate-200 hover:border-sky-200 transition-colors flex items-center justify-center gap-1.5 rounded-lg cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TYPES OF PROJECTS WE DELIVER (Scalable, strictly honest representative categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-100 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
              Execution Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight mt-1">
              Types of Projects We Deliver
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-2xl">
              Representative structural categories engineered and fabricated to client specifications. Built with an expandable architecture for real project additions.
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200 transition-colors cursor-pointer w-fit rounded-lg"
          >
            <span>View Full Project Structure</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_CATEGORIES.slice(0, 6).map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-sky-200 rounded-xl overflow-hidden hover:border-sky-400 transition-all flex flex-col group shadow-sm"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-sky-600 text-[10px] font-mono text-white rounded uppercase tracking-widest font-bold shadow-sm">
                  {proj.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors font-sans uppercase tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {proj.summary}
                  </p>
                </div>

                <div className="p-3 bg-sky-50/70 border border-sky-200 rounded-lg space-y-1.5 text-[11px] font-mono">
                  <div className="flex justify-between text-slate-600">
                    <span className="uppercase font-semibold">Typical Span:</span>
                    <span className="text-slate-900 font-bold">{proj.typicalSpan}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="uppercase font-semibold">Eave Height:</span>
                    <span className="text-sky-600 font-bold">{proj.typicalHeight}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => onNavigate('project-detail', proj.slug)}
                    className="text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenQuote(proj.title)}
                    className="text-xs px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold uppercase tracking-wider border border-sky-200 rounded-md cursor-pointer"
                  >
                    Quote This
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HOW WE WORK / 5-STEP PROJECT PROCESS */}
      <section className="bg-sky-50/50 border-y border-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
              Systematic Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight">
              How We Work: The 5-Step Structural Lifecycle
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Our synchronized workflow coordinates every step from requirement discovery to structural handover, guaranteeing on-schedule completion and structural longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-5 bg-white border border-sky-200 rounded-xl relative flex flex-col justify-between space-y-4 hover:border-sky-400 transition-all shadow-sm group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-sky-600">
                    {step.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-200 group-hover:bg-sky-600 transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 font-sans uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-sky-500 transition-all duration-500 rounded-full" 
                    style={{ width: `${(idx + 1) * 20}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE STRUCTURAL TONNAGE ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StructuralEstimator onOpenQuoteModal={onOpenQuote} />
      </section>

      {/* 9. CLIENTS / PARTNERS (Safari Highlighted + Expandable Architecture) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 bg-white border border-sky-200 rounded-2xl shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
                Trusted Industrial Relationships
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight mt-1">
                Clients &amp; Industrial Partners
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Delivering industrial steel structures for prominent manufacturing brands in Western India.
              </p>
            </div>

            <div className="text-xs font-mono text-slate-500 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-lg w-fit uppercase tracking-wider font-semibold">
              Expandable Corporate Architecture
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Confirmed Client: Safari */}
            {COMPANY_CONFIG.clients.map((client) => (
              <div
                key={client.name}
                className="p-6 bg-sky-50/70 border-2 border-sky-300 rounded-xl shadow-sm space-y-3 relative group"
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-sky-100 text-sky-700 text-[10px] font-mono uppercase font-bold rounded">
                  {client.badge}
                </div>
                <div className="text-3xl font-black text-slate-900 tracking-wider font-sans uppercase">
                  {client.name}
                </div>
                <div className="text-xs font-bold text-sky-700 font-mono uppercase tracking-wider">
                  {client.category}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {client.highlight}
                </p>
              </div>
            ))}

            {/* Expandable client slots */}
            {[
              { label: 'Upcoming Client Partner', desc: 'PEB Warehousing & Logistics' },
              { label: 'Upcoming Client Partner', desc: 'Heavy Engineering & Foundry' },
              { label: 'Upcoming Client Partner', desc: 'Cold Chain & Agri Storage' }
            ].map((slot, i) => (
              <div
                key={i}
                className="p-6 bg-slate-50 border border-dashed border-slate-300 rounded-xl flex flex-col justify-center space-y-2 opacity-80"
              >
                <div className="w-2 h-2 rounded-full bg-slate-300" />
                <div className="text-sm font-bold text-slate-700 font-sans uppercase tracking-tight">
                  {slot.label}
                </div>
                <div className="text-xs text-slate-500">
                  {slot.desc}
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                  Partnership onboarding in progress
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. REVIEWS & TESTIMONIALS (Future Ready Architecture — Honest, No Fake Reviews!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
            Client Feedback &amp; Verification
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Reviews &amp; Testimonials — Future Ready
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            We operate with strict honesty: as our clients complete structural handovers, verified Google reviews and written testimonials will be published here.
          </p>
        </div>

        {/* Future-Ready Reviews Showcase Card */}
        <div className="p-8 bg-white border border-sky-200 rounded-2xl text-center space-y-6 max-w-2xl mx-auto shadow-md">
          <div className="flex items-center justify-center gap-1.5 text-amber-400">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
              Official Review System Ready for Verified Submissions
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
              Have you partnered with Khodiyar Infraproject on a structural steel, PEB warehouse, or factory fabrication project in Gujarat? Share your feedback with our engineering desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I would like to submit client feedback regarding our completed project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Submit Feedback via WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Direct Management Line
            </a>
          </div>
        </div>
      </section>

      {/* 11. TECHNICAL FAQS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
            Engineering Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Technical answers regarding PEB buildings, heavy structural fabrication, cold stores, and erection schedules.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-sky-200 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-sans uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('faqs')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 underline cursor-pointer"
          >
            <span>Have more structural questions? Visit the full FAQ page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 12. STRONG FINAL CTA & DIRECT ENQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30 border border-sky-200 p-6 md:p-12 shadow-xl rounded-2xl relative overflow-hidden">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
              Ready for Execution
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight leading-tight">
              Let&apos;s Build Your Industrial Facility With Single-Source Accountability
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you are expanding your factory, setting up a cold chain facility, or building a 50,000 sq. ft. PEB warehouse in Gujarat, our team is ready to deliver.
            </p>

            {/* Direct Calls */}
            <div className="p-5 bg-white border border-sky-200 rounded-xl space-y-2 shadow-sm">
              <div className="text-xs font-mono uppercase text-sky-600 font-bold flex items-center gap-2 tracking-wider">
                <Phone className="w-4 h-4 fill-current" />
                Immediate Phone Consultation (#1 Priority)
              </div>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="block text-2xl font-black text-slate-900 hover:text-sky-600 transition-colors font-sans uppercase tracking-wider"
              >
                {COMPANY_CONFIG.phoneDisplay}
              </a>
              <p className="text-[11px] text-slate-500 font-mono">
                Direct connection with Senior Structural Project Engineers
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I need a fast quote for my upcoming structural project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md rounded-lg"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <span>Office Location &amp; Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
};
