import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { PEB_PROJECT_CHECKLIST_DATA } from '../../data/freeResources';
import { 
  CheckSquare, 
  Printer, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  Building, 
  Ruler, 
  Compass, 
  Layers, 
  FileText, 
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';

interface ProjectChecklistPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ProjectChecklistPage: React.FC<ProjectChecklistPageProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  // Store checked item IDs in local component state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const totalItems = PEB_PROJECT_CHECKLIST_DATA.reduce(
    (acc, section) => acc + section.items.length, 
    0
  );

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    if (window.confirm('Reset all checklist marks? This action clears your current progress in this session.')) {
      setCheckedItems({});
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-5 h-5 text-sky-600" />;
      case 'Ruler': return <Ruler className="w-5 h-5 text-sky-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-sky-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-sky-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-sky-600" />;
      default: return <CheckSquare className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Free Resources', route: 'resources/free-resources' },
          { label: 'PEB Project Checklist', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <header className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            <CheckSquare className="w-3.5 h-3.5 text-sky-600" />
            Field Planning &amp; Verification Checklist
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 text-xs font-medium rounded-lg transition-all cursor-pointer"
              title="Reset checklist items"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => onOpenQuote('PEB Project Checklist Review')}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Submit for Verification</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          PEB Project Execution &amp; Site Checklist
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
          A stage-by-stage engineering checklist for site project managers, promoters, and civil contractors. Verify every critical operational parameter from building dimensions and soil conditions to trailer access and high-altitude erection safety.
        </p>

        {/* Live Progress Bar Banner (Interactive & Print-friendly) */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-900 uppercase tracking-wider">
                Readiness Progress:
              </span>
              <span className="text-sky-700 font-black text-sm">
                {completedCount} of {totalItems} Checked ({progressPercent}%)
              </span>
            </div>

            <div className="text-slate-500 text-[11px]">
              {completedCount === totalItems 
                ? 'All checkpoints confirmed — ready for structural engineering review' 
                : 'Check items as you verify each project parameter with your site team'}
            </div>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden print:hidden">
            <div 
              className="bg-sky-600 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Checklist Sections */}
      <div className="space-y-10">
        {PEB_PROJECT_CHECKLIST_DATA.map((section, sIdx) => (
          <section 
            key={section.id} 
            className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
          >
            {/* Section Header */}
            <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                  {getSectionIcon(section.iconName)}
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-xs text-slate-500">{section.description}</p>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-500">
                {section.items.filter(i => checkedItems[i.id]).length} / {section.items.length} verified
              </div>
            </div>

            {/* Checklist Items */}
            <div className="divide-y divide-slate-100">
              {section.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <label
                    key={item.id}
                    className={`flex items-start gap-4 px-6 py-4 cursor-pointer transition-colors hover:bg-slate-50 ${
                      isChecked ? 'bg-sky-50/40' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(item.id)}
                      className="mt-1 w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 cursor-pointer flex-shrink-0"
                    />

                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-sm font-semibold ${
                          isChecked ? 'text-slate-900 line-through decoration-slate-400' : 'text-slate-900'
                        }`}>
                          {item.label}
                        </span>
                        {item.critical && (
                          <span className="inline-flex items-center px-2 py-0.5 bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-mono uppercase font-bold tracking-wider rounded">
                            Critical Parameter
                          </span>
                        )}
                      </div>

                      {item.subtext && (
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.subtext}
                        </p>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Technical Responsibility & Review Notice */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-900 font-bold tracking-wider">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          Technical Responsibility Notice
        </div>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          This checklist is an educational and project management aid designed to help project owners organize key requirements. It does not replace formal structural engineering calculations, site geotechnical tests, local municipal/GIDC building bylaw approvals, or certified architectural drawings. All project-specific parameters must be reviewed and certified by a qualified structural engineer in accordance with applicable IS codes (IS 800:2007, IS 875, IS 1893).
        </p>
      </div>

      {/* Next Step / Consultation Bar */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-base sm:text-lg font-black font-sans uppercase tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            Completed Your Preliminary Checklist?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Send your verified points to our structural engineering team at Khodiyar Infraproject. We will generate a complimentary preliminary structural tonnage estimate and anchor bolt reaction layout.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('resources/free-resources/peb-requirement-checklist')}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg border border-slate-700 transition-colors"
          >
            Open Requirement Questionnaire
          </button>
          <button
            onClick={() => onOpenQuote('Checklist Submission for Quotation')}
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Request Quotation
          </button>
        </div>
      </div>
    </div>
  );
};
