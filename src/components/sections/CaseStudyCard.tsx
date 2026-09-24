import React from 'react';
import { CaseStudy } from '../../types';
import { Building, MapPin, Calendar, Layers, ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onSelect?: (slug: string) => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  onSelect
}) => {
  return (
    <div className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 text-left">
      <div className="space-y-4">
        {/* Meta badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="px-2.5 py-1 bg-sky-50 text-sky-700 border border-sky-200 text-[10px] font-mono font-bold uppercase rounded">
            {caseStudy.projectType}
          </span>
          {caseStudy.date && (
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {caseStudy.date}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-slate-900 font-sans tracking-tight">
          {caseStudy.title}
        </h3>

        {/* Client / Location (Only display if exists) */}
        {(caseStudy.client || caseStudy.location) && (
          <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
            {caseStudy.client && (
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-sky-600" />
                {caseStudy.client}
              </span>
            )}
            {caseStudy.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                {caseStudy.location}
              </span>
            )}
          </div>
        )}

        {/* Scope / Requirements */}
        {caseStudy.scope && (
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong>Scope:</strong> {caseStudy.scope}
          </div>
        )}

        {caseStudy.solution && (
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 leading-relaxed">
            <strong>Engineering Solution:</strong> {caseStudy.solution}
          </div>
        )}

        {caseStudy.outcome && (
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong>Outcome:</strong> {caseStudy.outcome}
          </div>
        )}
      </div>

      {onSelect && (
        <button
          onClick={() => onSelect(caseStudy.slug)}
          className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 text-xs font-bold text-sky-600 hover:text-sky-700"
        >
          <span>Read Full Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
