import React from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle, 
  Building2, 
  Factory, 
  Award, 
  Compass, 
  Layers, 
  Cpu, 
  Truck, 
  CheckCircle2,
  MapPin
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'About Us', active: true }]} onNavigate={onNavigate} />

      {/* 1. HERO / INTRO */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          About Khodiyar Infraproject • Est. {COMPANY_CONFIG.establishedYear}
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-sans uppercase tracking-tight leading-tight">
          About Khodiyar Infraproject | PEB &amp; Structural Steel Fabricator Gujarat
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Headquartered in the industrial heartland of Vadodara and Halol, Gujarat, <strong className="text-slate-900 font-semibold">{COMPANY_CONFIG.name}</strong> was founded to deliver turnkey structural engineering where design integrity, factory fabrication quality, and site erection speed work in perfect harmony.
        </p>

        {/* Real stats banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="p-4 bg-white border border-sky-200 rounded-xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-sky-600 font-sans">
              <AnimatedCounter target={7} suffix="+" />
            </div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Years Experience</div>
          </div>

          <div className="p-4 bg-white border border-sky-200 rounded-xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
              <AnimatedCounter target={2000} suffix="+" />
            </div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Tons Completed</div>
          </div>

          <div className="p-4 bg-white border border-sky-200 rounded-xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
              {COMPANY_CONFIG.establishedYear}
            </div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Established Year</div>
          </div>

          <div className="p-4 bg-white border border-sky-200 rounded-xl shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-sky-600 font-sans">
              Vadodara
            </div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Gujarat Hub</div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & WHAT WE DO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
              Origin &amp; Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Built to Solve Industrial Construction Friction
            </h2>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            In traditional industrial construction, factory owners and logistics developers face an uphill battle. Structural design consultants produce theoretical drawings disconnected from shopfloor capabilities. Third-party fabrication yards cut steel without direct alignment to site conditions. Logistics dispatch steel indiscriminately, clogging job sites, while erection contractors struggle with misaligned bolt holes and missing components.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            <strong>Khodiyar Infraproject</strong> was founded in 2022 to eliminate this broken model. We created an integrated corporate structure where structural designers, fabrication managers, logistics coordinators, and site erection engineers report to one unified operational command.
          </p>

          <div className="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-lg text-xs text-slate-700 space-y-1">
            <div className="font-bold text-slate-900 font-sans uppercase tracking-wider">Our Engineering Philosophy:</div>
            <div className="italic">&quot;Never manufacture a steel member that has not been optimized for site erection; never design a connection that compromises structural safety or creates field bottleneck.&quot;</div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden border border-sky-200 rounded-2xl shadow-xl relative">
            <img
              src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
              alt="Structural Steel Fabrication at Khodiyar Infraproject Vadodara, Gujarat"
              className="w-full h-96 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-sky-200/50 text-xs text-white font-mono">
              High-Yield Steel Profiling • Submerged Arc Welding • NDT Inspection
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE INTEGRATED WORKFLOW */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
            Complete Lifecycle Integration
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight">
            The Integrated Khodiyar Lifecycle
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            From preliminary architectural consultation to final structural certification and fit-out handover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              phase: 'Phase 01',
              title: 'In-House Design & BIM Modeling',
              desc: 'Utilizing 3D modeling and structural software compliant with IS 800:2007 to optimize member tonnage, analyze deflection limits, and design zero-tolerance connection templates.'
            },
            {
              phase: 'Phase 02',
              title: 'Production Planning & DFM',
              desc: 'Translating engineering models directly into automated CNC nesting schedules to minimize raw steel plate scrap to under 3% and assign sequential piece marks.'
            },
            {
              phase: 'Phase 03',
              title: 'Factory Steel Fabrication',
              desc: 'Plate cutting, automated submerged arc welding (SAW) for tapered built-up frames, cold roll-forming of high-yield Z & C purlins, and trial assembly.'
            },
            {
              phase: 'Phase 04',
              title: 'Surface Treatment & QA/QC',
              desc: 'Non-destructive testing (NDT ultrasonic and dye penetrant testing), dimensional audits, shot blasting, and high-build anti-corrosive epoxy primer application.'
            },
            {
              phase: 'Phase 05',
              title: 'Synchronized JIT Logistics',
              desc: 'Coordinated heavy haulage and multi-axle trailer dispatch matching the exact crane lifting schedule at the site, preventing job site clutter.'
            },
            {
              phase: 'Phase 06',
              title: 'Turnkey Erection & Handover',
              desc: 'Telescopic crane rigging, calibrated torque tensioning of HSFG bolts, plumb alignment checks, weather-tight roofing/cladding, and formal site handover.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-sky-200 rounded-xl space-y-3 hover:border-sky-400 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider">{item.phase}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-sky-200"></span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-sans uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ENGINEERING PHILOSOPHY & TECHNICAL STANDARDS */}
      <section className="p-8 md:p-12 bg-white border border-sky-200 rounded-2xl shadow-xl space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
            Engineering Rigor
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Technical Standards &amp; Quality Commitments
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl">
            Every structural assembly manufactured by Khodiyar Infraproject complies strictly with established Bureau of Indian Standards (BIS) and American Welding Society (AWS) specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1">
            <div className="text-sky-700 font-bold uppercase tracking-wider">IS 800:2007</div>
            <div className="text-slate-900 font-semibold">General Construction in Steel</div>
            <div className="text-[11px] text-slate-500">Limit State Design Method</div>
          </div>

          <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1">
            <div className="text-sky-700 font-bold uppercase tracking-wider">IS 875 (Part 1-3)</div>
            <div className="text-slate-900 font-semibold">Design Loads for Buildings</div>
            <div className="text-[11px] text-slate-500">Dead, Live, and Wind Loads</div>
          </div>

          <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1">
            <div className="text-sky-700 font-bold uppercase tracking-wider">IS 1893:2016</div>
            <div className="text-slate-900 font-semibold">Earthquake Resistant Design</div>
            <div className="text-[11px] text-slate-500">Seismic Zone III &amp; IV Compliance</div>
          </div>

          <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1">
            <div className="text-sky-700 font-bold uppercase tracking-wider">AWS D1.1 / IS 9595</div>
            <div className="text-slate-900 font-semibold">Structural Welding Standards</div>
            <div className="text-[11px] text-slate-500">Full Penetration SAW Welds &amp; NDT</div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="text-center p-10 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30 border border-sky-200 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Partner with Vadodara&apos;s Single-Source Structural Steel Leader
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Contact our senior engineering team directly to discuss your warehouse, factory, or heavy structural steel requirements.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I read your About page and would like to consult on an industrial structural project.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <span>Request a Project Quote</span>
          </button>
        </div>
      </section>
    </div>
  );
};
