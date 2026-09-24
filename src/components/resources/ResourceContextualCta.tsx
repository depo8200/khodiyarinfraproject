import React from 'react';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  FileText, 
  Calculator, 
  Compass, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';

export type ContextualCtaVariant = 
  | 'educational' 
  | 'buyer' 
  | 'checklist' 
  | 'planning' 
  | 'industry' 
  | 'case-study' 
  | 'service';

interface ResourceContextualCtaProps {
  variant?: ContextualCtaVariant;
  title?: string;
  description?: string;
  subject?: string;
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
  customSecondaryAction?: {
    label: string;
    route: string;
    slug?: string;
  };
}

export const ResourceContextualCta: React.FC<ResourceContextualCtaProps> = ({
  variant = 'educational',
  title,
  description,
  subject,
  onNavigate,
  onOpenQuote,
  customSecondaryAction
}) => {
  // Variant-specific defaults
  const variantConfig = {
    educational: {
      badge: 'Engineering Consultation',
      defaultTitle: 'Need Specific Guidance for Your PEB Facility?',
      defaultDesc: 'Our structural engineering team at Khodiyar Infraproject evaluates clear spans, crane loads, wind pressures, and site conditions in Gujarat and Pan-India.',
      primaryBtnText: 'Get Project Consultation',
      secondaryBtn: {
        label: 'Explore PEB Buyer Guide',
        route: 'resources/free-resources/buyer-guide'
      }
    },
    buyer: {
      badge: 'Project Planning & Sizing',
      defaultTitle: 'Ready to Plan Your Pre-Engineered Building?',
      defaultDesc: 'Translate your functional floor plan into an optimized, code-compliant steel structural proposal with transparent BOQ detailing.',
      primaryBtnText: 'Request Turnkey Quotation',
      secondaryBtn: {
        label: 'Use Requirement Estimator',
        route: 'resources/tools/peb-requirement-estimator'
      }
    },
    checklist: {
      badge: 'Fast Requirement Scoping',
      defaultTitle: 'Have Your Structural Checklist Ready?',
      defaultDesc: 'Share your land dimensions, eave height, and bay requirements with our design engineers for a rapid feasibility review.',
      primaryBtnText: 'Submit Your Checklist',
      secondaryBtn: {
        label: 'Launch Planning Tool',
        route: 'resources/tools/project-planning-tool'
      }
    },
    planning: {
      badge: 'Turnkey Feasibility',
      defaultTitle: 'Transform Planning Into Engineering Reality',
      defaultDesc: 'From initial 3D BIM modeling under IS 800:2007 to synchronized factory fabrication and crane-assisted site erection in Gujarat.',
      primaryBtnText: 'Schedule Engineering Review',
      secondaryBtn: {
        label: 'View Our Services',
        route: 'services'
      }
    },
    industry: {
      badge: 'Sector Engineering Solutions',
      defaultTitle: 'Planning a Specialized Industrial Facility?',
      defaultDesc: 'Whether you require a high-thermal-integrity cold store, a heavy crane factory shed, or a high-clearance warehouse, we engineer to your exact operational stresses.',
      primaryBtnText: 'Consult Sector Specialist',
      secondaryBtn: {
        label: 'Explore Industries',
        route: 'industries'
      }
    },
    'case-study': {
      badge: 'Engineering Accountability',
      defaultTitle: 'Planning an Industrial Project with Similar Specs?',
      defaultDesc: 'Consult with our senior project directors on single-source structural execution with verified fabrication and erection scheduling.',
      primaryBtnText: 'Discuss Your Project',
      secondaryBtn: {
        label: 'View All Project Types',
        route: 'projects'
      }
    },
    service: {
      badge: 'Single-Source Execution',
      defaultTitle: 'Direct Structural Engineering Assistance',
      defaultDesc: 'Contact Khodiyar Infraproject for structural stress calculations, automated fabrication scheduling, or turnkey erection execution in Gujarat.',
      primaryBtnText: 'Request Service BOQ',
      secondaryBtn: {
        label: 'Check PEB Cost Factors',
        route: 'resources/knowledge-hub/cost-planning',
        slug: 'peb-building-cost-factors'
      }
    }
  }[variant];

  const displayTitle = title || variantConfig.defaultTitle;
  const displayDesc = description || variantConfig.defaultDesc;
  const activeSecondary = customSecondaryAction || variantConfig.secondaryBtn;

  return (
    <div className="bg-gradient-to-br from-white via-sky-50/50 to-sky-100/40 border border-sky-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[11px] font-mono uppercase font-bold rounded">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>{variantConfig.badge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
            {displayTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            {displayDesc}
          </p>
        </div>

        {activeSecondary && (
          <button
            onClick={() => onNavigate(activeSecondary.route, activeSecondary.slug)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider rounded-lg border border-sky-200 transition-colors shadow-sm whitespace-nowrap cursor-pointer self-start md:self-auto"
          >
            <span>{activeSecondary.label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Triple Conversion Priority Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {/* 1. Phone Call */}
        <a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call Now: {COMPANY_CONFIG.phoneDisplay}</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
            `Hello Khodiyar Infraproject, I am interested in discussing: ${subject || displayTitle}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        {/* 3. Get a Quote */}
        <button
          onClick={() => onOpenQuote(subject || displayTitle)}
          className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-slate-900 transition-colors cursor-pointer shadow-sm"
        >
          <span>{variantConfig.primaryBtnText}</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-500 pt-1">
        <span>Headquarters: Halol / Vadodara, Gujarat</span>
        <span className="text-slate-300">•</span>
        <span>Single-Source Structural Accountability</span>
        <span className="text-slate-300">•</span>
        <span>Design • Fabrication • Logistics • Erection</span>
      </div>
    </div>
  );
};
