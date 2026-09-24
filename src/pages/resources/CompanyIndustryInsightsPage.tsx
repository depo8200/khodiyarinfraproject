import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { COMPANY_CONFIG } from '../../data/company';
import { INDUSTRY_INSIGHTS } from '../../data/industryInsights';
import { COMPANY_UPDATES } from '../../data/companyUpdates';
import { CASE_STUDIES } from '../../data/caseStudies';
import { IndustryInsightCard } from '../../components/sections/IndustryInsightCard';
import { 
  TrendingUp, 
  Building2, 
  BookOpen, 
  FolderCheck, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';

interface CompanyIndustryInsightsPageProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const CompanyIndustryInsightsPage: React.FC<CompanyIndustryInsightsPageProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  // Select top 3 featured insights from real data
  const featuredInsights = INDUSTRY_INSIGHTS.slice(0, 3);

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Company / Industry Insights', active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header / Hero */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
          Level 6 Resource Ecosystem
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Company &amp; Industry Insights
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
          Explore company updates, industrial construction insights, practical PEB knowledge, and future project case studies from KHODIYAR INFRAPROJECT.
        </p>

        {/* Commitment to Authentic Information */}
        <div className="bg-sky-50/60 border border-sky-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed space-y-0.5">
            <span className="font-bold text-slate-900 uppercase font-mono block">
              Editorial &amp; Engineering Transparency:
            </span>
            <p>
              Khodiyar Infraproject operates on absolute transparency. All company milestones, engineering articles, and project case studies published within this section represent verified structural accomplishments and genuine industrial insights.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Core Category Hubs */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
              Content Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Explore Resource Categories
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Company Updates */}
          <div className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Building2 className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-mono font-bold uppercase rounded">
                  {COMPANY_UPDATES.length > 0 ? `${COMPANY_UPDATES.length} Updates` : 'Future-Ready Hub'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                  Company Updates
                </h3>
                <div className="text-[11px] font-mono text-sky-700 font-semibold mt-0.5">
                  Official Corporate &amp; Operations
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Official announcements, fabrication equipment additions, quality control benchmarks, and technical capability expansions from Khodiyar Infraproject.
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-tight">
                <strong>Status:</strong> Company updates will be published here as verified developments and accredited facility milestones occur.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('resources/company-industry-insights/company-updates')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>View Company Updates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Industry Insights */}
          <div className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <BookOpen className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold uppercase rounded">
                  20 Active Articles
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                  Industry Insights
                </h3>
                <div className="text-[11px] font-mono text-sky-700 font-semibold mt-0.5">
                  Practical Engineering &amp; PEB Knowledge
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Field-grounded educational articles on structural steel fabrication, warehouse planning, crane load considerations, quality control, and tender evaluation.
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-tight">
                <strong>Topics:</strong> Modern PEB methods, quotation audits, logistics access, expansion design, maintenance, and quality assurance.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('resources/company-industry-insights/industry-insights')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Browse All 20 Insights</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Case Studies */}
          <div className="bg-white border-2 border-slate-200 hover:border-sky-500/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <FolderCheck className="w-5 h-5" />
                </span>
                <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-mono font-bold uppercase rounded">
                  {CASE_STUDIES.length > 0 ? `${CASE_STUDIES.length} Case Studies` : 'Future-Ready Hub'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                  Case Studies
                </h3>
                <div className="text-[11px] font-mono text-sky-700 font-semibold mt-0.5">
                  Verified Project Retrospectives
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed breakdowns of structural spans, steel tonnage, connection engineering, and erection milestones verified by engineering calculation books.
              </p>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-tight">
                <strong>Status:</strong> Case studies will be published here as verified project dossiers and client authorizations are completed.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('resources/company-industry-insights/case-studies')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>View Case Studies Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Educational Articles (Real Content from INDUSTRY_INSIGHTS) */}
      <section className="space-y-6 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
              Featured Content
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Latest Industry Perspectives
            </h2>
          </div>
          <button
            onClick={() => onNavigate('resources/company-industry-insights/industry-insights')}
            className="text-xs font-bold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>View All 20 Articles</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredInsights.map((insight) => (
            <IndustryInsightCard
              key={insight.id}
              insight={insight}
              onSelect={(slug) => onNavigate('resources/company-industry-insights/industry-insights', slug)}
            />
          ))}
        </div>
      </section>

      {/* Verified Corporate Track Record */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
        <div className="space-y-1 mb-6">
          <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
            Verified Company Metrics
          </div>
          <h3 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
            Khodiyar Infraproject Baseline
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="space-y-1 py-2 md:py-0">
            <div className="text-3xl font-black text-sky-600 font-sans">
              {COMPANY_CONFIG.experienceYears} Years+
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Engineering Experience
            </div>
            <p className="text-xs text-slate-600">Continuous execution in industrial steel fabrication.</p>
          </div>

          <div className="space-y-1 py-2 md:py-0 md:px-4">
            <div className="text-3xl font-black text-sky-600 font-sans">
              {COMPANY_CONFIG.tonnageCompleted} Tons
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Structural Steel Executed
            </div>
            <p className="text-xs text-slate-600">Fabricated and erected across industrial corridors.</p>
          </div>

          <div className="space-y-1 py-2 md:py-0 md:px-4">
            <div className="text-3xl font-black text-sky-600 font-sans">
              {COMPANY_CONFIG.establishedYear}
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Company Established
            </div>
            <p className="text-xs text-slate-600">Headquartered in Halol / Vadodara, Gujarat.</p>
          </div>
        </div>
      </section>

      {/* Engineering Consultation Footer */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
            Discuss Your Upcoming Project With Our Engineers
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Have questions regarding PEB spans, crane clearances, or structural fabrication lead times in Gujarat? Reach out directly.
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
            onClick={() => onOpenQuote('Insights Consultation')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md shadow-sm cursor-pointer"
          >
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
};
