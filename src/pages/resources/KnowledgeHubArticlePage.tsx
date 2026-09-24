import React, { useEffect } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { ResourceContextualCta } from '../../components/resources/ResourceContextualCta';
import { 
  getKnowledgeArticleBySlug, 
  getRelatedArticles, 
  KnowledgeArticle 
} from '../../data/knowledgeHub';
import { 
  BookOpen, 
  Cpu, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  ShieldAlert, 
  Phone, 
  Layers, 
  FileCheck,
  DollarSign,
  Scale,
  Building2
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface KnowledgeHubArticlePageProps {
  slug: string;
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const KnowledgeHubArticlePage: React.FC<KnowledgeHubArticlePageProps> = ({ 
  slug, 
  onNavigate, 
  onOpenQuote 
}) => {
  const article = getKnowledgeArticleBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans uppercase">
          Article Not Found
        </h1>
        <p className="text-sm text-slate-600">
          The requested guide or technical article could not be located in the Knowledge Hub.
        </p>
        <button
          onClick={() => onNavigate('resources/knowledge-hub')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-sky-700 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Knowledge Hub
        </button>
      </div>
    );
  }

  const getCategoryMeta = (type: KnowledgeArticle['type']) => {
    switch (type) {
      case 'cost-planning':
        return { route: 'resources/knowledge-hub/cost-planning', label: 'Cost & Planning' };
      case 'comparison':
        return { route: 'resources/knowledge-hub/comparisons', label: 'Comparisons' };
      case 'industrial-guide':
        return { route: 'resources/knowledge-hub/industrial-building-guides', label: 'Industrial Building Guides' };
      case 'technical-article':
        return { route: 'resources/knowledge-hub/technical-articles', label: 'Technical Articles' };
      case 'peb-guide':
      default:
        return { route: 'resources/knowledge-hub/peb-guides', label: 'PEB Guides' };
    }
  };

  const categoryMeta = getCategoryMeta(article.type);
  const parentCategoryRoute = categoryMeta.route;
  const parentCategoryLabel = categoryMeta.label;

  const relatedArticles = getRelatedArticles(article);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Resources', route: 'resources' },
          { label: 'Knowledge Hub', route: 'resources/knowledge-hub' },
          { label: parentCategoryLabel, route: parentCategoryRoute },
          { label: article.title, active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Article Header */}
      <header className="space-y-5 text-left border-b border-sky-100 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            {article.type === 'cost-planning' && <DollarSign className="w-3.5 h-3.5 text-sky-600" />}
            {article.type === 'comparison' && <Scale className="w-3.5 h-3.5 text-sky-600" />}
            {article.type === 'industrial-guide' && <Building2 className="w-3.5 h-3.5 text-sky-600" />}
            {article.type === 'technical-article' && <Cpu className="w-3.5 h-3.5 text-sky-600" />}
            {article.type === 'peb-guide' && <BookOpen className="w-3.5 h-3.5 text-sky-600" />}
            <span>{article.categoryLabel}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="hidden sm:inline">Audience: {article.targetAudience}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
          {article.summary}
        </p>

        {/* Back Link */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate(parentCategoryRoute)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All {parentCategoryLabel}</span>
          </button>
        </div>
      </header>

      {/* Layout Grid: Content + Sticky Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Article Body (8 cols) */}
        <main className="lg:col-span-8 space-y-10">
          {/* Mobile Table of Contents */}
          <div className="lg:hidden p-5 bg-sky-50/50 border border-sky-200 rounded-xl space-y-3">
            <div className="text-xs font-mono uppercase font-bold tracking-wider text-sky-800">
              Table of Contents:
            </div>
            <nav className="space-y-1.5">
              {article.tableOfContents.map((toc) => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  onClick={(e) => scrollToSection(e, toc.id)}
                  className="block text-xs text-sky-700 hover:text-sky-900 hover:underline"
                >
                  {toc.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Article Sections */}
          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-4 scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans tracking-tight border-b border-slate-100 pb-2.5">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2 pt-2">
                    {section.bulletPoints.map((point, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className={`mt-4 p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm leading-relaxed ${
                    section.callout.type === 'engineering'
                      ? 'bg-amber-50/70 border-amber-200 text-amber-900'
                      : section.callout.type === 'note'
                      ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                      : 'bg-sky-50/70 border-sky-200 text-sky-900'
                  }`}>
                    {section.callout.type === 'engineering' ? (
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    ) : section.callout.type === 'note' ? (
                      <FileCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Info className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <div className="font-bold">{section.callout.title}</div>
                      <div>{section.callout.text}</div>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 bg-sky-50/60 border border-sky-200 rounded-2xl space-y-4">
            <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-sky-600" />
              Key Engineering &amp; Planning Takeaways
            </h3>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Disclaimer */}
          <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800">Engineering &amp; Code Notice: </span>
              This content is published exclusively for educational and technical planning orientation. Structural steel member depths, plate thicknesses, crane surge capacities, foundation sizes, and wind resistance must always be analyzed by qualified structural engineers based on site-specific geotechnical investigations and Indian Standard codes (IS 800:2007, IS 875 Parts 1–3, and IS 1893:2016).
            </div>
          </div>

          {/* Reverse Integration Commercial CTA (Level 7) */}
          <ResourceContextualCta
            variant="educational"
            subject={article.title}
            onNavigate={onNavigate}
            onOpenQuote={onOpenQuote}
          />

          {/* Related Articles Network */}
          {relatedArticles.length > 0 && (
            <div className="space-y-5 pt-6 border-t border-sky-100">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-600" />
                  Related Knowledge Hub Articles
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((rel) => {
                  const targetRoute = getCategoryMeta(rel.type).route;
                  return (
                    <div
                      key={rel.id}
                      onClick={() => onNavigate(targetRoute, rel.slug)}
                      className="p-4 rounded-xl border border-sky-200 hover:border-sky-400 bg-white hover:bg-sky-50/30 transition-all cursor-pointer space-y-2 group"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase">
                        <span className="font-bold text-sky-700">{rel.categoryLabel}</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        {rel.summary}
                      </p>
                      <div className="pt-1 flex items-center gap-1 text-[11px] font-bold text-sky-600 group-hover:translate-x-0.5 transition-transform">
                        <span>Read Topic</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>

        {/* Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
          {/* Desktop Table of Contents */}
          <div className="hidden lg:block bg-white border border-sky-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="text-xs font-mono uppercase font-bold tracking-wider text-slate-900 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              Table of Contents
            </div>
            <nav className="space-y-2 text-xs">
              {article.tableOfContents.map((toc) => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  onClick={(e) => scrollToSection(e, toc.id)}
                  className="block text-slate-600 hover:text-sky-600 hover:translate-x-1 transition-all py-1 border-l-2 border-transparent hover:border-sky-500 pl-2.5"
                >
                  {toc.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Consultation / Assistance Card */}
          <div className="bg-sky-50/80 border border-sky-200 rounded-xl p-6 space-y-4 shadow-sm">
            <div className="text-xs font-mono uppercase tracking-widest text-sky-700 font-bold">
              Engineering Support Desk
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Planning an Industrial Facility or Warehouse in Gujarat?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connect directly with our structural engineering team at Khodiyar Infraproject (Halol / Vadodara) for layout advice, crane bay sizing, and material estimates.
            </p>
            <div className="space-y-2.5 pt-2">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider transition-colors rounded-lg border border-sky-200"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call {COMPANY_CONFIG.phoneDisplay}</span>
              </a>
              <button
                onClick={() => onOpenQuote(`${article.title} - Planning Inquiry`)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg shadow-sm cursor-pointer"
              >
                Request Project Consultation
              </button>
            </div>
          </div>

          {/* Quick Pillar Jump */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl text-xs space-y-2">
            <div className="font-mono text-slate-500 font-bold uppercase text-[10px]">
              Browse Knowledge Hub:
            </div>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => onNavigate('resources/knowledge-hub/peb-guides')}
                className="text-left py-1 text-sky-600 hover:text-sky-800 font-medium hover:underline flex items-center justify-between"
              >
                <span>10 PEB Foundational Guides</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => onNavigate('resources/knowledge-hub/technical-articles')}
                className="text-left py-1 text-sky-600 hover:text-sky-800 font-medium hover:underline flex items-center justify-between"
              >
                <span>10 Technical Articles</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => onNavigate('resources/knowledge-hub/cost-planning')}
                className="text-left py-1 text-sky-600 hover:text-sky-800 font-medium hover:underline flex items-center justify-between"
              >
                <span>10 Cost &amp; Planning Guides</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => onNavigate('resources/knowledge-hub/comparisons')}
                className="text-left py-1 text-sky-600 hover:text-sky-800 font-medium hover:underline flex items-center justify-between"
              >
                <span>8 Comparative Analyses</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => onNavigate('resources/knowledge-hub/industrial-building-guides')}
                className="text-left py-1 text-sky-600 hover:text-sky-800 font-medium hover:underline flex items-center justify-between"
              >
                <span>10 Industrial Building Guides</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => onNavigate('resources/knowledge-hub/faqs')}
                className="text-left py-1 text-sky-600 hover:text-sky-800 font-medium hover:underline flex items-center justify-between"
              >
                <span>Knowledge Hub FAQs</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => onNavigate('resources/knowledge-hub')}
                className="text-left py-1 text-slate-500 hover:text-slate-800 flex items-center justify-between pt-1 border-t border-slate-100"
              >
                <span>Knowledge Hub Overview</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
