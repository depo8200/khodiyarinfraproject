import React from 'react';
import { CompanyUpdate } from '../../types';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

interface CompanyUpdateCardProps {
  update: CompanyUpdate;
  onSelect?: (slug: string) => void;
}

export const CompanyUpdateCard: React.FC<CompanyUpdateCardProps> = ({
  update,
  onSelect
}) => {
  return (
    <div className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5 text-left">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 bg-sky-50 text-sky-700 border border-sky-200 text-[10px] font-mono font-bold uppercase rounded flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {update.category}
          </span>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {update.date}
          </span>
        </div>

        <h3 className="text-lg font-black text-slate-900 font-sans tracking-tight">
          {update.title}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed">
          {update.excerpt}
        </p>

        <div className="text-xs text-slate-700 whitespace-pre-line leading-relaxed pt-2 border-t border-slate-100">
          {update.content}
        </div>
      </div>

      {onSelect && (
        <button
          onClick={() => onSelect(update.slug)}
          className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 pt-2"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
