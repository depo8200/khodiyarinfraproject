import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { PEB_REQUIREMENT_CATEGORIES } from '../../data/freeResources';
import { 
  ClipboardList, 
  Printer, 
  RotateCcw, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  Check, 
  Info,
  Send,
  Building,
  Ruler,
  HelpCircle
} from 'lucide-react';

interface PebRequirementChecklistPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const PebRequirementChecklistPage: React.FC<PebRequirementChecklistPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  // Store form field values locally for user convenience during the session
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [completedCategories, setCompletedCategories] = useState<Record<string, boolean>>({});

  const handleInputChange = (fieldName: string, value: string, categoryId: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    if (value.trim()) {
      setCompletedCategories(prev => ({ ...prev, [categoryId]: true }));
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all entered checklist data? This clears your input in this session.')) {
      setFormData({});
      setCompletedCategories({});
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const completedCount = Object.values(completedCategories).filter(Boolean).length;
  const totalCategories = PEB_REQUIREMENT_CATEGORIES.length;

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Free Resources', route: 'resources/free-resources' },
          { label: 'PEB Requirement Checklist', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header & Hero */}
      <header className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <ClipboardList className="w-3.5 h-3.5 text-sky-600" />
            Tender Scope &amp; RFQ Information Checklist
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 text-xs font-medium rounded-lg transition-all cursor-pointer"
              title="Clear entered details"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => onOpenQuote('PEB Requirement Checklist Submission')}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Submit RFQ Data</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB Quotation Requirement Checklist
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
          Use this 20-category questionnaire to prepare a comprehensive technical brief before requesting PEB proposals. Eliminates scope ambiguity and ensures all bidding vendors quote on identical structural specifications.
        </p>

        {/* Guidance Notice */}
        <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-800 font-bold tracking-wider">
            <Info className="w-4 h-4 text-sky-600" />
            Guidance for Preliminary Inquiries
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Not all parameters need to be finalized right now. Values marked with <span className="font-semibold text-sky-700 font-mono text-xs">(approx.)</span> or <span className="font-semibold text-slate-600 font-mono text-xs">(if applicable)</span> can be approximate preliminary estimates. Our engineering team will assist in refining parameters during initial structural modeling.
          </p>
        </div>
      </header>

      {/* 20 Categories Grid */}
      <div className="space-y-8">
        {PEB_REQUIREMENT_CATEGORIES.map((category) => (
          <div 
            key={category.id} 
            className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm"
          >
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                    {category.categoryNumber}
                  </span>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                    {category.title}
                  </h2>
                </div>
                <p className="text-xs text-slate-500 pl-8.5">
                  {category.description}
                </p>
              </div>

              {category.guidanceText && (
                <div className="text-[11px] font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg max-w-sm">
                  <span className="font-bold text-slate-700">Tip:</span> {category.guidanceText}
                </div>
              )}
            </div>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
              {category.fields.map((field) => {
                const value = formData[field.name] || '';
                return (
                  <div key={field.name} className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700">
                      {field.label}
                      {field.isApproximate && (
                        <span className="ml-1 text-[11px] text-sky-600 font-normal font-mono">
                          (approx.)
                        </span>
                      )}
                    </label>

                    {field.type === 'select' ? (
                      <select
                        value={value}
                        onChange={(e) => handleInputChange(field.name, e.target.value, category.id)}
                        className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      >
                        <option value="">-- {field.placeholder} --</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(field.name, e.target.value, category.id)}
                        placeholder={field.placeholder}
                        className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Review & Quotation Submission Action */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
            Complimentary Structural Sizing
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight">
            Ready to Translate Requirements into a Bill of Quantities (BOQ)?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Our engineering team in Halol &amp; Vadodara reviews industrial requirements directly under IS 800:2007. We will generate a clear structural steel tonnage estimate, frame profile drawing, and itemized budgetary quotation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => onOpenQuote('PEB Requirement Checklist Inquiry')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>Request Quotation Review</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-slate-400" />
            <span>Print Completed Checklist</span>
          </button>
        </div>
      </div>
    </div>
  );
};
