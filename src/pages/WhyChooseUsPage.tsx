import React from 'react';
import { DIFFERENTIATORS_DATA } from '../data/differentiators';
import { COMPANY_CONFIG } from '../data/company';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Cpu, 
  Truck, 
  Layers, 
  Link as LinkIcon 
} from 'lucide-react';

interface WhyChooseUsPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onNavigate, onOpenQuote }) => {
  const comparisonRows = [
    {
      metric: 'Accountability Model',
      traditional: 'Fragmented (Designer, fabricator, transporter, and erector blame each other for fitment issues).',
      khodiyar: 'Single-Source (100% turnkey accountability from BIM model to final site bolt torquing).'
    },
    {
      metric: 'Structural Weight Optimization',
      traditional: 'Oversized uniform sections from generic consultants resulting in 10-18% excess paid steel tonnage.',
      khodiyar: 'Design-for-Manufacture (DFM) tapered built-up frames matching exact moment contours under IS 800.'
    },
    {
      metric: 'Job Site Delivery',
      traditional: 'Random bulk truck dumping causing severe job site congestion, coating damage, and missing parts.',
      khodiyar: 'Synchronized Just-in-Time (JIT) dispatches indexed chronologically to weekly crane lifting plans.'
    },
    {
      metric: 'Connection Tolerances',
      traditional: 'Shop errors discovered on site during erection, requiring torches and on-site re-drilling.',
      khodiyar: 'Factory pre-erection trial assembly & total-station verification before dispatch.'
    },
    {
      metric: 'Project Timeline',
      traditional: 'Frequent vendor disputes, idle crane days, and repeated rework stretching completion by months.',
      khodiyar: 'Streamlined schedule with 30-40% faster overall commissioning.'
    }
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO HEADER */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          The Competitive Advantage
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Why Choose KHODIYAR INFRAPROJECT?
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          We engineered our business model to eradicate the root causes of industrial project cost overruns, connection failures, and scheduling delays. Discover our 5 core pillars of structural excellence.
        </p>

        {/* Real Stats confirmation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="text-3xl font-black text-sky-600 font-sans">
              <AnimatedCounter target={7} suffix="+" />
            </div>
            <div className="text-xs text-slate-600 font-mono uppercase mt-1">Years Industrial Experience</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="text-3xl font-black text-slate-900 font-sans">
              <AnimatedCounter target={2000} suffix="+" />
            </div>
            <div className="text-xs text-slate-600 font-mono uppercase mt-1">Tons Completed Work</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm col-span-2 sm:col-span-1">
            <div className="text-3xl font-black text-emerald-600 font-sans">
              100%
            </div>
            <div className="text-xs text-slate-600 font-mono uppercase mt-1">Turnkey Accountability</div>
          </div>
        </div>
      </section>

      {/* 2. THE 5 CORE DIFFERENTIATORS IN DETAIL WITH HERO VISUAL */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sky-50/60 border border-sky-200 rounded-3xl p-6 sm:p-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
              The 5 Pillars of Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Single-Source Reliability from Shop to Erection Site
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike fragmented multi-agency models where structural design, plate fabrication, transport, and site erection are handed to disjointed contractors, Khodiyar Infraproject delivers total cohesion with synchronized precision.
            </p>
          </div>
          <div className="lg:col-span-5 h-56 sm:h-64 rounded-2xl overflow-hidden border border-sky-200 shadow-md">
            <img
              src="/regenerated_image_1788755466755.jpg"
              alt="Industrial precision steel engineering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          {DIFFERENTIATORS_DATA.map((diff, idx) => (
            <div
              key={diff.id}
              className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-10 space-y-6 relative overflow-hidden hover:border-sky-400 hover:shadow-xl transition-all shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-100 pb-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-sky-600">
                    {diff.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
                      {diff.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-sky-600 font-mono">
                      {diff.subtitle}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 w-fit">
                  {idx === 0 ? <LinkIcon className="w-6 h-6" /> :
                   idx === 1 ? <Cpu className="w-6 h-6" /> :
                   idx === 2 ? <Truck className="w-6 h-6" /> :
                   idx === 3 ? <Layers className="w-6 h-6" /> :
                   <CheckCircle2 className="w-6 h-6" />}
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {diff.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase text-slate-500 font-bold">
                  Measurable Operational Impact:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {diff.details.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-sky-50/70 border border-sky-200/80">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="space-y-8">
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
            Direct Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Multi-Vendor Fragmentation vs. Khodiyar Single-Source
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            See the practical advantages of contracting directly with an integrated fabricator-erector.
          </p>
        </div>

        <div className="bg-white border border-sky-200 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-sky-50/80 border-b border-sky-200 text-slate-700 font-mono text-xs uppercase">
                  <th className="p-4 sm:p-5 w-1/4">Key Milestone / Factor</th>
                  <th className="p-4 sm:p-5 w-3/8 text-rose-600">Traditional Sub-Contracted Model</th>
                  <th className="p-4 sm:p-5 w-3/8 text-sky-700 font-bold bg-sky-100/50 border-l border-sky-200">
                    KHODIYAR INFRAPROJECT (Turnkey)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-sky-50/50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 align-top font-sans">
                      {row.metric}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 align-top leading-relaxed">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 align-top leading-relaxed bg-sky-50/40 border-l border-sky-200 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-900">{row.khodiyar}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION CTA */}
      <section className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white via-sky-50/60 to-sky-100/40 border border-sky-200 shadow-xl text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Experience Seamless Single-Source Structural Execution
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Talk with our leadership team today. We provide structural feasibility reviews, preliminary tonnage estimates, and transparent turnkey proposals.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {COMPANY_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I would like to consult on an industrial structural project.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <span>Request BOQ &amp; Rate Analysis</span>
          </button>
        </div>
      </section>
    </div>
  );
};
