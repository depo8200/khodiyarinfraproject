import React from 'react';
import { IndustryInsight } from '../../types';
import { Clock, Calendar, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

interface IndustryInsightCardProps {
  insight: IndustryInsight;
  onSelect: (slug: string) => void;
}

export const IndustryInsightCard: React.FC<IndustryInsightCardProps> = ({
  insight,
  onSelect
}) => {
  return (
    <div 
      onClick={() => onSelect(insight.slug)}
      className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5 cursor-pointer group text-left"
    >
      <div className="space-y-4">
        {/* Meta Header */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="px-2.5 py-1 bg-sky-50 text-sky-700 border border-sky-200 text-[10px] font-mono font-bold uppercase rounded">
            {insight.category}
          </span>
          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {insight.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              {insight.date}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors font-sans leading-snug tracking-tight">
          {insight.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {insight.summary}
        </p>

        {/* Primary Takeaway Preview */}
        {insight.keyTakeaways.length > 0 && (
          <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-xs text-slate-700 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
            <span className="text-[11px] text-slate-600 line-clamp-2">
              <strong>Key takeaway:</strong> {insight.keyTakeaways[0]}
            </span>
          </div>
        )}
      </div>

      {/* Footer / Read Link */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          Read Full Insight
        </span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
