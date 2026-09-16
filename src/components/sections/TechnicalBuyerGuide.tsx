import React, { useState } from 'react';
import { 
  Building2, 
  Scale, 
  Factory, 
  GitMerge, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  TrendingUp, 
  Clock, 
  Phone 
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface TechnicalBuyerGuideProps {
  onNavigate?: (route: string, slug?: string) => void;
  onOpenQuote?: (type?: string) => void;
}

export const TechnicalBuyerGuide: React.FC<TechnicalBuyerGuideProps> = ({ 
  onNavigate, 
  onOpenQuote 
}) => {
  const [activeTab, setActiveTab] = useState<'what-is-peb' | 'comparison' | 'applications' | 'lifecycle' | 'factors'>('what-is-peb');

  const tabs = [
    { id: 'what-is-peb', label: 'What is a PEB?', icon: Building2 },
    { id: 'comparison', label: 'PEB vs Conventional', icon: Scale },
    { id: 'applications', label: 'Where PEBs Are Used', icon: Factory },
    { id: 'lifecycle', label: 'Connected Lifecycle', icon: GitMerge },
    { id: 'factors', label: 'Key Engineering Factors', icon: Compass },
  ] as const;

  return (
    <section className="bg-white border border-sky-200 rounded-2xl p-6 sm:p-10 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-100 pb-6">
        <div>
          <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-widest">
            Engineering Knowledge &amp; Buyer Guide
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-sans uppercase tracking-tight mt-1">
            Understanding Pre-Engineered Steel Construction
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-2xl">
            A practical technical guide for factory owners, project directors, EPC contractors, and industrial developers in Vadodara and Gujarat.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenQuote?.('PEB Technical Consultation')}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            Ask a Structural Engineer
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-sky-100 pb-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-sky-50/70 text-slate-700 hover:bg-sky-100 hover:text-sky-700 border border-sky-200/60'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-sky-600'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT 1: WHAT IS A PEB & WHY CHOOSE IT */}
      {activeTab === 'what-is-peb' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              What is a Pre-Engineered Building (PEB)?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A <strong>Pre-Engineered Building (PEB)</strong> is an engineered structural system manufactured in an automated factory environment and assembled on-site using high-strength bolted connections. Unlike traditional steel construction that relies on uniform, heavy hot-rolled I-beams (ISMB) throughout an entire frame, PEB frames are engineered with <strong>custom tapered built-up sections</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In structural mechanics, internal bending moments vary drastically across a portal frame: they peak at column-rafter knees and ridge splices, but drop to near zero at column bases and mid-rafter shear points. PEB technology places steel plate thickness exactly where internal forces demand it, tapering down where stresses are low.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                  <TrendingUp className="w-4 h-4 text-sky-600" />
                  <span>20% to 30% Weight Reduction</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Tapered geometry eliminates non-working steel mass, drastically reducing raw material expenditures and footing concrete volumes.
                </p>
              </div>

              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>40% Faster Commissioning</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Factory fabrication occurs simultaneously with on-site civil excavation, followed by rapid crane bolting with zero field welding.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-sky-50/50 border border-sky-200 rounded-xl p-5 space-y-4">
            <div className="text-xs font-mono uppercase text-sky-700 font-bold tracking-wider">
              Anatomy of a Modern PEB System
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Primary Frames:</strong> Tapered built-up columns and rafters fabricated from high-yield IS 2062 E350 steel with automated SAW welds.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Secondary Framing:</strong> Cold-formed galvanized Z &amp; C purlins and girts providing continuous roof and wall lateral stability.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Bracing Network:</strong> Diagonal rod or angle cross-bracing distributing longitudinal wind and seismic shear safely into foundation piers.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Building Envelope:</strong> High-tensile Galvalume sheet profiles or insulated PUF/Rockwool panels with leak-proof EPDM fasteners.
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: PEB VS CONVENTIONAL STEEL */}
      {activeTab === 'comparison' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              PEB vs Conventional Steel Construction
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
              Comparing fundamental engineering, financial, and scheduling differences for industrial developments.
            </p>
          </div>

          <div className="overflow-x-auto border border-sky-200 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-sky-100/70 border-b border-sky-200 text-slate-900 font-mono uppercase tracking-wider">
                  <th className="p-3.5 sm:p-4 font-bold">Engineering Parameter</th>
                  <th className="p-3.5 sm:p-4 font-bold text-sky-700">Pre-Engineered Building (PEB)</th>
                  <th className="p-3.5 sm:p-4 font-bold text-slate-600">Conventional Steel Structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100 bg-white">
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Structural Member Profiles</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 bg-sky-50/30">Custom tapered built-up sections matching exact stress curves; zero wasted mass.</td>
                  <td className="p-3.5 sm:p-4 text-slate-500">Standard hot-rolled I-sections (ISMB) with uniform cross-section throughout.</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Overall Steel Weight</td>
                  <td className="p-3.5 sm:p-4 font-bold text-sky-700 bg-sky-50/30">20% to 30% lighter dead load.</td>
                  <td className="p-3.5 sm:p-4 text-slate-500">Substantially heavier due to fixed standard sectional weights.</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Foundation &amp; Civil Cost</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 bg-sky-50/30">Smaller column footings and lower anchor bolt moment requirements.</td>
                  <td className="p-3.5 sm:p-4 text-slate-500">Heavier concrete foundation footings required to support dead loads.</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Clear Span Capability</td>
                  <td className="p-3.5 sm:p-4 font-bold text-sky-700 bg-sky-50/30">Unobstructed spans up to 60+ meters column-free.</td>
                  <td className="p-3.5 sm:p-4 text-slate-500">Difficult and cost-prohibitive beyond 25–30 meters without intermediate columns.</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Project Delivery Speed</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 bg-sky-50/30">6 to 10 weeks; pre-fabricated off-site with rapid site erection.</td>
                  <td className="p-3.5 sm:p-4 text-slate-500">16 to 24+ weeks; extensive field cutting, fitment, and on-site welding.</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Future Bay Expansion</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 bg-sky-50/30">Pre-designed expandable end walls allow bolting extra bays anytime.</td>
                  <td className="p-3.5 sm:p-4 text-slate-500">Difficult modification requiring torch-cutting and field reinforcement.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: WHERE PEB STRUCTURES ARE USED */}
      {activeTab === 'applications' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Where Pre-Engineered Steel Structures Are Used
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
              Engineered across Gujarat industrial clusters for high operational performance, heavy payload support, and maximum internal volumetric utility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'High-Bay Warehouses & Logistics Hubs',
                desc: 'Column-free layouts maximizing forklift lanes, automated racking heights (up to 18m+), and loading dock canopies.',
                route: 'project-detail',
                slug: 'peb-warehouses'
              },
              {
                title: 'Manufacturing Plants & Factories',
                desc: 'Designed for heavy dynamic vibration, high clear heights, process equipment drops, and continuous roof ventilation.',
                route: 'project-detail',
                slug: 'manufacturing-plants-factories'
              },
              {
                title: 'Cold Storage & Controlled Atmosphere',
                desc: 'Airtight steel superstructures with thermal break decoupling for PUF insulated panels and suspended evaporator grids.',
                route: 'project-detail',
                slug: 'cold-storage-structures'
              },
              {
                title: 'Heavy Engineering & Crane Sheds',
                desc: 'Equipped with heavy crane runway beams and surge trusses supporting 5T to 50T+ EOT bridge cranes.',
                route: 'project-detail',
                slug: 'heavy-steel-structures'
              },
              {
                title: 'Workshops & Industrial Utility Buildings',
                desc: 'Rapidly assembled steel workshop sheds for equipment maintenance, machine shops, and automotive depots.',
                route: 'project-detail',
                slug: 'workshops-industrial-garages'
              },
              {
                title: 'Modular Site Offices & Control Rooms',
                desc: 'Pre-insulated scalable administrative cabins, supervisory rooms, and motor control center (MCC) enclosures.',
                route: 'project-detail',
                slug: 'modular-structures'
              }
            ].map((app, idx) => (
              <div key={idx} className="p-4 bg-sky-50/50 border border-sky-200 rounded-xl space-y-2 flex flex-col justify-between hover:border-sky-400 transition-colors">
                <div className="space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-tight">{app.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{app.desc}</p>
                </div>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate(app.route, app.slug)}
                    className="pt-2 text-[11px] font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: CONNECTED LIFECYCLE */}
      {activeTab === 'lifecycle' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              How Design, Fabrication, Logistics &amp; Erection Connect
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
              Single-source structural accountability eliminates vendor disputes, fitment rework, and costly site idle time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                phase: '3D BIM Design',
                desc: 'Engineering models directly generate CNC cutting coordinates and bolt-hole manifests with zero manual translation errors.'
              },
              {
                step: '02',
                phase: 'Factory Fabrication',
                desc: 'Automated SAW welding and precision drilling with piece marks stamped to match the erection grid layout.'
              },
              {
                step: '03',
                phase: 'Sequenced Logistics',
                desc: 'Trailers loaded in reverse erection order: Bay-1 columns and bracing arrive first so cranes can lift straight from flatbeds.'
              },
              {
                step: '04',
                phase: 'Turnkey Erection',
                desc: 'Certified rigging crews bolt matched components using calibrated torque wrenches under strict HSE protocols.'
              }
            ].map((p, idx) => (
              <div key={idx} className="p-4 bg-white border border-sky-200 rounded-xl space-y-2 relative shadow-sm">
                <span className="text-xl font-mono font-black text-sky-600">{p.step}</span>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-tight">{p.phase}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-between text-xs text-slate-700">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <strong>Single-Source Guarantee:</strong> When fabricator and erector are the same team, site fitting issues are resolved in minutes, not weeks.
            </span>
            <button
              onClick={() => onNavigate?.('why-choose-us')}
              className="text-sky-600 hover:text-sky-700 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              Learn More →
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT 5: KEY FACTORS AFFECTING PEB REQUIREMENTS */}
      {activeTab === 'factors' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans uppercase tracking-tight">
              Key Engineering Factors Affecting PEB Project Requirements
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
              Every industrial building must be engineered for its specific site topography, climatic exposures, and internal crane operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-sky-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase">1. Wind Velocity &amp; Terrain Category</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Gujarat design wind speeds vary from 39 m/s (Vadodara/Halol) up to 50 m/s (coastal Dahej/Kandla) under IS 875 Part 3. Wind pressure dictates rafter flange thickness, purlin spacing, and anchor bolt sizing.
              </p>
            </div>

            <div className="p-4 bg-white border border-sky-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase">2. Seismic Zone Classification</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Central Gujarat falls in Seismic Zone III, requiring specialized lateral ductility factors (IS 1893:2016) and rigid portal connections to resist horizontal base shears during ground motions.
              </p>
            </div>

            <div className="p-4 bg-white border border-sky-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase">3. EOT Crane Capacity &amp; Impact</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Overhead bridge cranes exert vertical wheel loads and lateral surge forces during braking. Gantry girders and column brackets are engineered to strict L/600 deflection limits to prevent crane rail binding.
              </p>
            </div>

            <div className="p-4 bg-white border border-sky-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase">4. Clear Height &amp; Internal Clear Span</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Clear height (from finished floor level to bottom of rafter haunch) governs the effective wind overturning moment on column footings and dictates whether stepped or uniform column sections are optimal.
              </p>
            </div>

            <div className="p-4 bg-white border border-sky-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase">5. Thermal Envelope &amp; Cladding</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                From single-skin Galvalume sheets with bubble insulation to 100mm PUF/PIR sandwich panels, thermal insulation choices impact structural dead loads, purlin spans, and HVAC operational costs.
              </p>
            </div>

            <div className="p-4 bg-white border border-sky-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase">6. Soil Safe Bearing Capacity (SBC)</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Black cotton soils common in Gujarat require deep isolated or pile foundations with rigid tie-beams. Khodiyar Infraproject provides exact base reaction data to optimize civil footing designs.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
