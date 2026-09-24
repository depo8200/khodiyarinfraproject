import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { StructuralEstimator } from '../../components/sections/StructuralEstimator';
import { Calculator, ArrowLeft, ShieldCheck, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface StructuralEstimatorToolPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const StructuralEstimatorToolPage: React.FC<StructuralEstimatorToolPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Tools', route: 'resources/tools' },
          { label: 'Structural Estimator', active: true }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header / Intro */}
      <div className="space-y-4 border-b border-sky-100 pb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            Interactive Planning Tool
          </div>
          <button
            onClick={() => onNavigate('resources/tools')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Tools</span>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Structural Steel &amp; PEB Tonnage Estimator
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Use our interactive calculation tool to estimate preliminary structural steel tonnage for your warehouse, manufacturing facility, or industrial shed. Adjust dimensions, clear eave height, crane requirements, and insulation to generate a preliminary engineering estimate.
        </p>
      </div>

      {/* Reused Existing Structural Estimator Component */}
      <section>
        <StructuralEstimator onOpenQuoteModal={onOpenQuote} />
      </section>

      {/* Engineering Assistance Note */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            Engineering Validation &amp; Precise Structural Modeling
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Estimates provided by this tool are preliminary approximations based on standard IS 800:2007 loading norms. Final member sizing requires 3D STAAD.Pro structural modeling to verify wind speed exposure, seismic forces, soil bearing capacity, and specific crane bridge surge loads.
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
            onClick={() => onOpenQuote('Verified BOQ Request')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md shadow-sm cursor-pointer"
          >
            Request Official BOQ
          </button>
        </div>
      </section>
    </div>
  );
};
