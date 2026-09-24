import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_CONFIG } from '../data/company';
import { FAQS_DATA } from '../data/faqs';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  ChevronRight,
  FileCheck2,
  HardHat,
  Factory,
  HelpCircle,
  ChevronDown,
  Building2,
  Target,
  Layers,
  BookOpen,
  FileText
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  slug, 
  onNavigate, 
  onOpenQuote 
}) => {
  const service = SERVICES_DATA.find(s => s.slug === slug) || SERVICES_DATA[0];
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const otherServices = SERVICES_DATA.filter(s => s.slug !== service.slug);

  // Pick top 3 relevant FAQs
  const relevantFaqs = FAQS_DATA.filter(faq => {
    if (service.category === 'Fabrication' && faq.category === 'Fabrication') return true;
    if (service.category === 'Structures' && faq.category === 'PEB') return true;
    if (service.category === 'Execution' && (faq.category === 'Logistics' || faq.category === 'General')) return true;
    if (service.category === 'Engineering' && (faq.category === 'PEB' || faq.category === 'General')) return true;
    return false;
  }).slice(0, 3);

  const displayFaqs = relevantFaqs.length > 0 ? relevantFaqs : FAQS_DATA.slice(0, 3);

  // Level 7: Contextual Resources mapping for this service (2-4 resources)
  const serviceResources = (() => {
    switch (service.slug) {
      case 'in-house-design':
      case 'designing-and-production':
        return [
          {
            title: 'Main Components of a PEB Structure',
            desc: 'Primary framing, secondary framing, bracing systems, and connection detailing under IS 800:2007.',
            route: 'resources/knowledge-hub/peb-guides',
            slug: 'main-components-of-a-peb-structure',
            tag: 'PEB Guide'
          },
          {
            title: 'Primary and Secondary Framing Systems',
            desc: 'Load transfer mechanics, tapered built-up frames, cold-formed Z/C purlins, and sag rods.',
            route: 'resources/knowledge-hub/peb-guides',
            slug: 'primary-and-secondary-framing-systems-in-peb',
            tag: 'Framing Guide'
          },
          {
            title: 'PEB Foundation Considerations',
            desc: 'Base plate moments, foundation pin vs rigid models, soil bearing, and anchor bolt coordination.',
            route: 'resources/knowledge-hub/peb-guides',
            slug: 'peb-foundation-considerations',
            tag: 'Civil / Struct'
          },
          {
            title: 'PEB Quality Control and Inspection',
            desc: 'Engineering shop drawing verification, material test certificates, and fabrication tolerances.',
            route: 'resources/knowledge-hub/peb-guides',
            slug: 'peb-quality-control-and-inspection',
            tag: 'QA / Code'
          }
        ];

      case 'factory-fabrication':
        return [
          {
            title: 'PEB Manufacturing and Fabrication Process',
            desc: 'Factory workflows: CNC plate cutting, automated SAW beam welding, and quality checks.',
            route: 'resources/knowledge-hub/peb-guides',
            slug: 'peb-manufacturing-and-fabrication-process',
            tag: 'Fabrication Guide'
          },
          {
            title: 'Structural Steel Fabrication Basics',
            desc: 'Weld joint geometries, cutting methods, and tolerance management for industrial steel.',
            route: 'resources/knowledge-hub/technical-articles',
            slug: 'structural-steel-fabrication-basics',
            tag: 'Technical Article'
          },
          {
            title: 'Factory Fabrication vs Site Fabrication',
            desc: 'Why automated submerged arc welding delivers superior durability and precision over field fabrication.',
            route: 'resources/knowledge-hub/comparisons',
            slug: 'factory-fabrication-vs-site-fabrication',
            tag: 'Comparison'
          },
          {
            title: 'Quality Control Considerations in PEB Manufacturing',
            desc: 'UT/MPI non-destructive testing, edge preparation standards, and coating DFT inspections.',
            route: 'resources/company-industry-insights/industry-insights',
            slug: 'quality-control-considerations-in-peb-manufacturing',
            tag: 'Industry Insight'
          }
        ];

      case 'logistics':
        return [
          {
            title: 'Industrial Building Logistics & Material Movement',
            desc: 'Material staging, crane clearance radii, access road specifications, and site routing.',
            route: 'resources/company-industry-insights/industry-insights',
            slug: 'industrial-building-logistics-and-material-movement-considerations',
            tag: 'Logistics Guide'
          },
          {
            title: 'Transportation & Site Access in PEB Planning',
            desc: 'Truck trailer lengths, turning radii, and delivery sequencing to eliminate site congestion.',
            route: 'resources/knowledge-hub/cost-planning',
            slug: 'how-transportation-and-site-access-affect-peb-planning',
            tag: 'Planning Guide'
          },
          {
            title: 'Why Coordination Between Design, Fabrication & Erection Matters',
            desc: 'Unified single-source coordination preventing parts mismatches and site downtime.',
            route: 'resources/company-industry-insights/industry-insights',
            slug: 'why-coordination-between-design-fabrication-and-erection-matters',
            tag: 'Coordination'
          }
        ];

      case 'turnkey-erection':
      case 'erection-and-installation':
        return [
          {
            title: 'PEB Erection and Installation Process',
            desc: 'Step-by-step site erection: column positioning, rafter pre-assembly, tandem crane lifts, and bracing.',
            route: 'resources/knowledge-hub/peb-guides',
            slug: 'peb-building-construction-process',
            tag: 'Erection Guide'
          },
          {
            title: 'PEB Project Planning Checklist',
            desc: 'Civil foundation readiness, anchor bolt survey, crane pad preparation, and power availability.',
            route: 'resources/free-resources/project-checklist',
            tag: 'Project Checklist'
          },
          {
            title: 'How Site Conditions Affect PEB Planning',
            desc: 'Soil conditions, wind exposure, site slope, and crane movement clearance planning.',
            route: 'resources/knowledge-hub/cost-planning',
            slug: 'how-site-conditions-affect-peb-planning',
            tag: 'Site Planning'
          }
        ];

      case 'cold-storage-framing':
        return [
          {
            title: 'Cold Storage Building Guide',
            desc: 'Thermal integrity, zero thermal bridging purlin design, and heavy suspended ceiling evaporator loads.',
            route: 'resources/knowledge-hub/industrial-building-guides',
            slug: 'cold-storage-building-guide',
            tag: 'Industrial Guide'
          },
          {
            title: 'PEB Requirement Checklist',
            desc: 'Thermal insulation thickness, vapor barrier specs, and eave height checklist for cold stores.',
            route: 'resources/free-resources/peb-requirement-checklist',
            tag: 'Requirement Tool'
          },
          {
            title: 'Industrial Building Ventilation Considerations',
            desc: 'Condensation mitigation, air exchange, and roof insulation engineering for controlled temperature plants.',
            route: 'resources/company-industry-insights/industry-insights',
            slug: 'industrial-building-ventilation-considerations',
            tag: 'Engineering Guide'
          }
        ];

      default:
        return [
          {
            title: 'What Is a Pre-Engineered Building?',
            desc: 'Structural advantages, framing concepts, and limit state mechanics under Indian Standards.',
            route: 'resources/knowledge-hub/peb-guides',
            slug: 'what-is-a-pre-engineered-building',
            tag: 'PEB Guide'
          },
          {
            title: 'PEB Buyer Guide & Procurement Framework',
            desc: '7-step lifecycle for selecting PEB contractors, comparing BOQ quotes, and avoiding hidden extras.',
            route: 'resources/free-resources/peb-buyer-guide',
            tag: 'Buyer Guide'
          },
          {
            title: 'PEB Building Cost: Factors Affecting Total Cost',
            desc: 'Steel tonnage drivers, span length ratios, bay spacing optimization, and coating specifications.',
            route: 'resources/knowledge-hub/cost-planning',
            slug: 'peb-building-cost-factors',
            tag: 'Cost & Planning'
          },
          {
            title: 'Industrial Shed Planning Guide',
            desc: 'Span configurations, natural daylighting, crane beam sizing, and future expansion planning.',
            route: 'resources/knowledge-hub/industrial-building-guides',
            slug: 'industrial-shed-planning-guide',
            tag: 'Shed Guide'
          }
        ];
    }
  })();

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. BREADCRUMBS */}
      <Breadcrumbs 
        items={[
          { label: 'Services', route: 'services' },
          { label: service.title, active: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* 2. SERVICE HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
            {service.category} • Vadodara Execution Center
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans uppercase tracking-tight leading-tight">
            {service.title} in Vadodara &amp; Gujarat
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Direct High-Conversion Action Bar */}
          <div className="p-6 bg-white border border-sky-200 rounded-2xl space-y-4 shadow-xl">
            <div className="text-xs font-mono uppercase text-sky-600 font-bold flex items-center gap-2 tracking-wider">
              <Phone className="w-3.5 h-3.5 fill-current" />
              Direct Structural Engineering Assistance:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {COMPANY_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Khodiyar Infraproject, I would like to inquire regarding ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenQuote(service.title)}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <span>Get a Quote for this Service</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden border border-sky-200 rounded-2xl shadow-xl h-80 sm:h-96">
            <img
              src={service.heroImage}
              alt={`${service.title} - Structural Steel Engineering Vadodara | Khodiyar Infraproject`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-sky-200/50 text-xs font-mono text-white">
              Integrated Execution by Khodiyar Infraproject
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED TECHNICAL EXPLANATION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Technical Overview &amp; Capabilities
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-4">
              {service.fullDesc}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              Key Client Advantages &amp; Engineering Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.keyBenefits.map((benefit, i) => (
                <div key={i} className="p-4 bg-sky-50/60 border border-sky-200 rounded-xl flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Overview */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-600" />
              Standard Execution Sequence
            </h3>
            <div className="space-y-3 pt-2">
              {service.processSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 bg-sky-50/60 border border-sky-200 rounded-xl">
                  <span className="text-xs font-mono font-black text-sky-700 bg-white border border-sky-200 px-2 py-1 rounded">
                    0{i + 1}
                  </span>
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-900 font-sans uppercase tracking-wider">{step.title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Industrial Clients Need This Service */}
          {service.whyChooseThis && (
            <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-600" />
                Why Industrial Clients Choose This Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {service.whyChooseThis}
              </p>
            </div>
          )}

          {/* Applications & Suitable Project Types */}
          {(service.applications || service.suitableProjects) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.applications && (
                <div className="bg-white border border-sky-200 rounded-2xl p-6 space-y-3 shadow-sm">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 font-sans uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-sky-600" />
                    Typical Applications
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {service.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.suitableProjects && (
                <div className="bg-white border border-sky-200 rounded-2xl p-6 space-y-3 shadow-sm">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 font-sans uppercase tracking-wider flex items-center gap-2">
                    <Factory className="w-4 h-4 text-sky-600" />
                    Suitable Project Types
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {service.suitableProjects.map((proj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0"></span>
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Industries Served */}
          {service.industriesServed && service.industriesServed.length > 0 && (
            <div className="bg-white border border-sky-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 font-sans uppercase tracking-wider flex items-center gap-2">
                  <Factory className="w-4 h-4 text-sky-600" />
                  Industries Served Across Gujarat &amp; India
                </h4>
                <button
                  onClick={() => onNavigate('industries')}
                  className="text-[11px] font-bold text-sky-600 hover:text-sky-700 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <span>All Industries</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {service.industriesServed.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-lg text-xs font-semibold text-slate-700"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Relevant Technical FAQs */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-sky-600" />
                Frequently Asked Technical Questions
              </h3>
              <button
                onClick={() => onNavigate('faqs')}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 uppercase tracking-wider cursor-pointer"
              >
                View All FAQs →
              </button>
            </div>
            <div className="space-y-3 divide-y divide-sky-100">
              {displayFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="pt-3 first:pt-0">
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full text-left flex items-start justify-between gap-4 py-2 group cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-sky-600 flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="text-xs text-slate-600 leading-relaxed pt-1 pb-2">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contextual Single-Source Lifecycle & Related Structural Services */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-600" />
                Integrated Single-Source Lifecycle &amp; Related Services
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every structural solution at Khodiyar Infraproject connects into our unified, in-house turnkey delivery model across Vadodara and Gujarat. Explore how this service integrates with our complementary engineering and execution capabilities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {(
                (service.slug === 'peb-buildings' && [
                  { slug: 'factory-fabrication', title: 'Factory Fabrication', desc: 'Precision automated SAW welding, CNC profiling, and high-tensile secondary Z/C purlin manufacturing.' },
                  { slug: 'in-house-design', title: 'In-House 3D Design', desc: 'BIM modeling and structural stress calculations customized to Gujarat wind and seismic codes.' },
                  { slug: 'logistics', title: 'Synchronized Logistics', desc: 'Just-in-Time staged dispatch direct to crane swinging radii across Vadodara and Gujarat.' },
                  { slug: 'turnkey-erection', title: 'Turnkey Erection', desc: 'Certified rigging, laser plumb verification, and calibrated torque bolting for fast handover.' }
                ]) ||
                (service.slug === 'factory-fabrication' && [
                  { slug: 'peb-buildings', title: 'PEB Buildings', desc: 'Custom-tapered primary frames and structural envelopes for warehouses and factory sheds.' },
                  { slug: 'heavy-structures', title: 'Heavy Structures', desc: 'Heavy plate girders, multi-tier process towers, and high-tonnage crane bays.' },
                  { slug: 'designing-and-production', title: 'Designing & Production', desc: 'Direct CAM nesting synchronization minimizing scrap and preventing shop rework.' },
                  { slug: 'turnkey-erection', title: 'Turnkey Erection', desc: 'Single-source site installation ensuring zero-defect bolt alignment and rapid handover.' }
                ]) ||
                (service.slug === 'heavy-structures' && [
                  { slug: 'factory-fabrication', title: 'Factory Fabrication', desc: 'Thick plate welding (up to 65mm), full-penetration butt welds, and 100% ultrasonic testing.' },
                  { slug: 'in-house-design', title: 'In-House 3D Design', desc: 'Dynamic load, fatigue, and crane surge force modeling under IS 800:2007.' },
                  { slug: 'erection-and-installation', title: 'Erection & Installation', desc: 'Laser plumb verification, heavy tandem crane lifts, and crane rail grouting.' },
                  { slug: 'peb-buildings', title: 'PEB Buildings', desc: 'Integrated industrial shed envelopes with heavy structural crane corridors.' }
                ]) ||
                (service.slug === 'turnkey-erection' && [
                  { slug: 'peb-buildings', title: 'PEB Buildings', desc: 'High-speed portal frame erection and leak-proof Galvalume roof envelope installation.' },
                  { slug: 'factory-fabrication', title: 'Factory Fabrication', desc: 'Factory-matched components pre-indexed with erection grid marks for rapid assembly.' },
                  { slug: 'logistics', title: 'Synchronized Logistics', desc: 'Staged reverse-order deliveries eliminating yard clutter and crane downtime.' },
                  { slug: 'in-house-design', title: 'In-House 3D Design', desc: 'Erection connection detailing and anchor bolt coordination plans.' }
                ]) ||
                otherServices.slice(0, 4).map(o => ({
                  slug: o.slug,
                  title: o.title,
                  desc: o.shortDesc
                }))
              ).map((rel) => (
                <button
                  key={rel.slug}
                  onClick={() => onNavigate('service-detail', rel.slug)}
                  className="p-3.5 bg-sky-50/50 hover:bg-sky-50 border border-sky-100 hover:border-sky-300 rounded-xl text-left transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    <span>{rel.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed mt-1 line-clamp-2">
                    {rel.desc}
                  </p>
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <button
                onClick={() => onNavigate('industries')}
                className="font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4 cursor-pointer"
              >
                View Industries Served →
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => onNavigate('contact')}
                className="font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4 cursor-pointer"
              >
                Speak with a Structural Engineer →
              </button>
            </div>
          </div>

          {/* Contextual Engineering Guides & Planning Resources (Level 7 Additive Integration) */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase text-sky-600 font-bold tracking-wider">
                  Technical Knowledge Base
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2 mt-0.5">
                  <BookOpen className="w-5 h-5 text-sky-600" />
                  Relevant Engineering Guides &amp; Resources
                </h3>
              </div>
              <button
                onClick={() => onNavigate('resources')}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 uppercase tracking-wider flex items-center gap-1 cursor-pointer self-start sm:self-auto"
              >
                <span>All Resources</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Explore in-depth design criteria, fabrication tolerances, and planning checklists directly related to {service.title.toLowerCase()}:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {serviceResources.map((res, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate(res.route, res.slug)}
                  className="p-4 bg-sky-50/50 hover:bg-sky-50 border border-sky-200/80 hover:border-sky-400 rounded-xl transition-all cursor-pointer group flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase font-bold text-sky-700 bg-white px-2 py-0.5 rounded border border-sky-200 inline-block">
                      {res.tag}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                      {res.desc}
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-sky-600 flex items-center gap-1 pt-1">
                    <span>Read Engineering Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Specifications & Quick Contact */}
        <div className="lg:col-span-4 space-y-6">
          {/* Specifications Table */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 space-y-4 shadow-xl">
            <h3 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-sky-600" />
              Technical Specifications
            </h3>
            <div className="divide-y divide-sky-100 text-xs">
              {service.specifications.map((spec, i) => (
                <div key={i} className="py-2.5 space-y-1">
                  <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">{spec.label}</div>
                  <div className="font-semibold text-slate-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Quote Request Box */}
          <div className="bg-gradient-to-br from-white via-sky-50/50 to-sky-100/40 border border-sky-200 rounded-2xl p-6 space-y-4 shadow-xl text-center">
            <h4 className="text-base font-black text-slate-900 font-sans uppercase tracking-tight">
              Request BOQ / Rate Analysis
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Send your building layout, span requirements, or structural drawings for a customized quote.
            </p>
            <button
              onClick={() => onOpenQuote(service.title)}
              className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
            >
              Get Instant Quote
            </button>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="block text-xs font-mono text-sky-600 hover:underline pt-1 uppercase tracking-wider font-semibold"
            >
              Or call {COMPANY_CONFIG.phoneDisplay}
            </a>
          </div>

          {/* Quick links to other services */}
          <div className="bg-white border border-sky-200 rounded-2xl p-6 space-y-3 shadow-sm">
            <h4 className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
              Other Core Services
            </h4>
            <div className="space-y-1 text-xs">
              {otherServices.slice(0, 5).map((other) => (
                <button
                  key={other.id}
                  onClick={() => onNavigate('service-detail', other.slug)}
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

      {/* 4. BOTTOM NAVIGATION */}
      <div className="flex items-center justify-between border-t border-sky-100 pt-8">
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-sky-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        <a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          className="text-xs font-mono font-bold text-sky-600 hover:underline flex items-center gap-1.5 uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Engineer: {COMPANY_CONFIG.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
};
