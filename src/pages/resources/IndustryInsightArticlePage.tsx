import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { getIndustryInsightBySlug } from '../../data/industryInsights';
import { COMPANY_CONFIG } from '../../data/company';
import { 
  Clock, 
  Calendar, 
  Tag, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  ShieldCheck, 
  Phone,
  BookOpen,
  ListChecks,
  ExternalLink,
  Check
} from 'lucide-react';

interface IndustryInsightArticlePageProps {
  slug: string;
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const IndustryInsightArticlePage: React.FC<IndustryInsightArticlePageProps> = ({
  slug,
  onNavigate,
  onOpenQuote
}) => {
  const [copied, setCopied] = useState(false);
  const article = getIndustryInsightBySlug(slug);

  if (!article) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-2xl font-black text-slate-900">Article Not Found</h1>
        <p className="text-slate-600 text-sm">
          The requested industry insight could not be found or may have been moved.
        </p>
        <button
          onClick={() => onNavigate('resources/company-industry-insights/industry-insights')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded text-xs font-bold uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Industry Insights
        </button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href
      }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Company / Industry Insights', route: 'resources/company-industry-insights' },
          { label: 'Industry Insights', route: 'resources/company-industry-insights/industry-insights' },
          { label: article.title, active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Back Button */}
      <div>
        <button
          onClick={() => onNavigate('resources/company-industry-insights/industry-insights')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Industry Insights Directory</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="space-y-6 text-left border-b border-sky-100 pb-8">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono font-bold uppercase rounded">
            {article.category}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans tracking-tight">
          {article.title}
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-medium">
          {article.summary}
        </p>

        {/* Share & Source attribution */}
        <div className="flex items-center justify-between pt-2 text-xs text-slate-500 border-t border-slate-100">
          <span className="font-mono">
            Published by Khodiyar Infraproject Technical Editorial Team
          </span>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-800 font-bold cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Key Takeaways Box */}
      {article.keyTakeaways.length > 0 && (
        <section className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-7 space-y-4 text-left">
          <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-sky-800 tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            Executive Takeaways
          </div>
          <ul className="space-y-2.5">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Main Content Sections */}
      <main className="space-y-10 text-left">
        {article.contentSections.map((sec, idx) => (
          <article key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              {sec.heading}
            </h2>
            <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {sec.bulletPoints && sec.bulletPoints.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 my-4">
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </main>

      {/* Practical Checklist Box */}
      {article.practicalChecklist && article.practicalChecklist.length > 0 && (
        <section className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 text-left shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-slate-900 tracking-wider">
            <ListChecks className="w-5 h-5 text-sky-600" />
            Field Implementation Checklist
          </div>
          <p className="text-xs text-slate-600">
            Actionable verification points to review during design review or vendor negotiations:
          </p>
          <ul className="space-y-2.5 pt-2">
            {article.practicalChecklist.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                <span className="w-5 h-5 rounded bg-sky-100 text-sky-700 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related Resources */}
      {article.relatedResources && article.relatedResources.length > 0 && (
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 text-left">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
              Connected Resource Ecosystem
            </div>
            <h3 className="text-lg font-black text-slate-900 font-sans uppercase tracking-tight">
              Recommended Accompanying Guides &amp; Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {article.relatedResources.map((res, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(res.route)}
                className="p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-xl text-left space-y-2 group transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 inline-block">
                    {res.badge}
                  </span>
                  <div className="font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
                    {res.title}
                  </div>
                </div>
                <div className="text-xs font-bold text-sky-600 flex items-center gap-1 pt-2">
                  <span>Open Resource</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Engineering Consultation Footer */}
      <section className="bg-sky-50/70 border border-sky-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
        <div className="space-y-1 max-w-lg">
          <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight">
            Discuss This Technical Requirement With Our Engineers
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Planning a factory, warehouse, or heavy structural frame? Reach out to Khodiyar Infraproject in Halol/Vadodara for certified calculations.
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
            onClick={() => onOpenQuote(article.title)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-md cursor-pointer"
          >
            Request Quotation
          </button>
        </div>
      </section>
    </div>
  );
};
