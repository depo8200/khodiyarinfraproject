import React, { useState } from 'react';
import { PROJECT_CATEGORIES } from '../data/projects';
import { COMPANY_CONFIG } from '../data/company';
import { 
  Building2, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Layers, 
  Filter, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Scale, 
  CheckCircle2 
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Warehousing', 'Heavy Industry', 'Cold Storage', 'Manufacturing', 'Specialized Structures', 'Modular'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECT_CATEGORIES
    : PROJECT_CATEGORIES.filter(p => p.category === selectedFilter);

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO HEADER */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          Project Capabilities &amp; Portfolio Architecture
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Types of Projects We Deliver
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          From large clear-span pre-engineered distribution centers to heavy structural steel crane bays and high-thermal-integrity cold rooms. Review our engineering specifications across standard industrial categories.
        </p>

        {/* Real Stats confirmation */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 uppercase tracking-wider">
          <div className="flex items-center gap-1.5 text-sky-600 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>2,000+ Tons Executed</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span>7+ Years Structural Experience</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span>Vadodara &amp; Halol, Gujarat</span>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-sky-600" />
            <span>Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-sky-600 text-white font-bold shadow-md'
                  : 'bg-white text-slate-600 hover:text-sky-600 hover:bg-sky-50 border border-sky-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. PROJECT CATEGORIES GRID */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Representative Engineering Categories ({filteredProjects.length})
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">
            Standard Configurations &amp; Custom Specs Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-sky-200 rounded-2xl overflow-hidden hover:border-sky-400 hover:shadow-xl transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md text-[10px] font-mono text-sky-700 font-bold border border-sky-200 rounded uppercase tracking-widest shadow-sm">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors font-sans uppercase tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Typical Span:</span>
                      <span className="text-slate-900 font-bold">{proj.typicalSpan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Clear Height:</span>
                      <span className="text-sky-600 font-bold">{proj.typicalHeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Steel Grade:</span>
                      <span className="text-slate-900 font-bold">{proj.steelGrade}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                    <div className="text-[10px] font-mono uppercase text-sky-600 font-bold tracking-wider">
                      Key Applications:
                    </div>
                    {proj.applications.slice(0, 3).map((app, fi) => (
                      <div key={fi} className="flex items-start gap-1.5 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onNavigate('project-detail', proj.slug)}
                  className="w-full py-2.5 px-4 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 border border-sky-200 cursor-pointer"
                >
                  <span>Detailed Technical View</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="py-2.5 px-2 bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1 transition-colors shadow-sm"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={() => onOpenQuote(proj.title)}
                    className="py-2.5 px-2 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg border border-slate-900 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Quote This</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BOTTOM ACTION */}
      <section className="text-center p-8 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30 border border-sky-200 rounded-2xl shadow-xl space-y-4">
        <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Need a Custom Engineered Structure Not Listed Above?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Our in-house design team engineers custom clear spans up to 60+ meters, customized bay spacing, and specialized heavy equipment mezzanines.
        </p>
        <button
          onClick={() => onOpenQuote()}
          className="px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
        >
          Submit Custom Project Drawings
        </button>
      </section>
    </div>
  );
};
