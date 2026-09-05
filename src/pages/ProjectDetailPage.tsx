import React from 'react';
import { PROJECT_CATEGORIES } from '../data/projects';
import { COMPANY_CONFIG } from '../data/company';
import { 
  Building2, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Scale, 
  ChevronRight 
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ 
  slug, 
  onNavigate, 
  onOpenQuote 
}) => {
  const project = PROJECT_CATEGORIES.find(p => p.slug === slug) || PROJECT_CATEGORIES[0];
  const otherProjects = PROJECT_CATEGORIES.filter(p => p.slug !== project.slug);

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
        <button onClick={() => onNavigate('home')} className="hover:text-sky-600 cursor-pointer">Home</button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <button onClick={() => onNavigate('projects')} className="hover:text-sky-600 cursor-pointer">Projects</button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-sky-600 font-bold">{project.title}</span>
      </div>

      {/* Main Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            {project.category} • Representative Industrial Category
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {project.summary}
          </p>

          <div className="p-6 bg-white border border-sky-200 rounded-2xl space-y-4 shadow-xl">
            <div className="text-xs font-mono uppercase text-sky-600 font-bold flex items-center gap-2 tracking-wider">
              <Phone className="w-3.5 h-3.5 fill-current" />
              Discuss This Structure Type With Project Lead:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {COMPANY_CONFIG.phoneDisplay}</span>
              </a>
              <button
                onClick={() => onOpenQuote(project.title)}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <span>Request Quotation</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden border border-sky-200 rounded-2xl shadow-xl h-80 sm:h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-sky-200/50 text-xs font-mono text-white">
              Turnkey Structural Execution by Khodiyar Infraproject
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Features */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Technical Specifications &amp; Dimensional Envelope
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Typical Span</div>
                <div className="text-base font-bold text-slate-900">{project.typicalSpan}</div>
              </div>
              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Clear Height</div>
                <div className="text-base font-bold text-sky-600">{project.typicalHeight}</div>
              </div>
              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Steel Grade</div>
                <div className="text-base font-bold text-slate-900">{project.steelGrade}</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              Key Applications &amp; Use Cases
            </h3>
            <div className="space-y-2.5 pt-2">
              {project.applications.map((app, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 bg-sky-50/60 border border-sky-200 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{app}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <Building2 className="w-5 h-5 text-sky-600" />
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.technicalSpecs.map((spec, i) => (
                <div key={i} className="p-3.5 bg-sky-50/60 border border-sky-200 rounded-xl space-y-1">
                  <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">{spec.label}</div>
                  <div className="text-xs font-semibold text-slate-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-white via-sky-50/50 to-sky-100/40 border border-sky-200 rounded-2xl p-6 space-y-4 shadow-xl text-center">
            <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight">
              Ready to Quote This Structure?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Share your land dimensions, eave height, and location in Gujarat or across India for a detailed estimate.
            </p>
            <button
              onClick={() => onOpenQuote(project.title)}
              className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
            >
              Get Custom Proposal
            </button>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="block text-xs font-mono text-sky-600 hover:underline pt-1 uppercase tracking-wider font-semibold"
            >
              Call: {COMPANY_CONFIG.phoneDisplay}
            </a>
          </div>

          {/* Quick links to other project categories */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 space-y-3 shadow-sm">
            <h4 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
              Other Project Categories
            </h4>
            <div className="space-y-1 text-xs">
              {otherProjects.slice(0, 5).map((other) => (
                <button
                  key={other.id}
                  onClick={() => onNavigate('project-detail', other.slug)}
                  className="w-full text-left py-2 px-2.5 text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-1">{other.title}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-sky-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back button */}
      <div className="border-t border-sky-100 pt-6">
        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-sky-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Project Categories</span>
        </button>
      </div>
    </div>
  );
};
