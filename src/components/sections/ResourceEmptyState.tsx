import React from 'react';
import { ShieldCheck, Calendar, FileText, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface ResourceEmptyStateProps {
  title: string;
  subtitle: string;
  badge: string;
  message: string;
  criteriaTitle?: string;
  criteriaList?: string[];
  ctaLabel?: string;
  ctaRoute?: string;
  onNavigate?: (route: string) => void;
  onOpenQuote?: (type?: string) => void;
}

export const ResourceEmptyState: React.FC<ResourceEmptyStateProps> = ({
  title,
  subtitle,
  badge,
  message,
  criteriaTitle = 'Verification & Publication Standards',
  criteriaList = [
    'Strict factual integrity: No simulated statistics, stock imagery, or fabricated milestones.',
    'Verified engineering documentation: Cross-referenced with fabrication records and quality checklists.',
    'Client release authorization: Respecting confidential industrial project agreements.'
  ],
  ctaLabel = 'Explore Industry Insights',
  ctaRoute = 'resources/company-industry-insights/industry-insights',
  onNavigate,
  onOpenQuote
}) => {
  return (
    <div className="bg-white border-2 border-dashed border-sky-200 rounded-2xl p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto shadow-sm">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded-full">
        <Calendar className="w-3.5 h-3.5 text-sky-600" />
        {badge}
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-sky-700 font-semibold">
          {subtitle}
        </p>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {message}
      </p>

      {/* Criteria Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-slate-900">
          <ShieldCheck className="w-4 h-4 text-sky-600" />
          <span>{criteriaTitle}</span>
        </div>
        <ul className="space-y-2 text-xs text-slate-600">
          {criteriaList.map((crit, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 flex-shrink-0"></span>
              <span>{crit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        {onNavigate && ctaRoute && (
          <button
            onClick={() => onNavigate(ctaRoute)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
        {onOpenQuote && (
          <button
            onClick={() => onOpenQuote('Technical Inquiries')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Inquire Directly: {COMPANY_CONFIG.phoneDisplay}</span>
          </button>
        )}
      </div>
    </div>
  );
};
