import React from 'react';
import { COMPANY_CONFIG } from '../../data/company';
import { BrandLogo } from '../common/BrandLogo';
import { SERVICES_DATA } from '../../data/services';
import { INDUSTRIES_DATA } from '../../data/industries';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  Share2
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string, slug?: string) => void;
  onOpenQuote: (type?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-sky-50/80 text-slate-600 border-t border-sky-200 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      {/* Structural Accent Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-sky-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => onNavigate('home')} className="text-left focus:outline-none">
              <BrandLogo size="lg" />
            </button>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Established in {COMPANY_CONFIG.establishedYear} in Vadodara, Gujarat. Khodiyar Infraproject delivers complete single-source industrial steel and pre-engineered building (PEB) solutions covering the complete structural lifecycle: Design, Factory Fabrication, Logistics, and Turnkey Erection.
            </p>

            {/* Direct High-Priority Call Card */}
            <div className="p-5 bg-white border border-sky-200 space-y-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-700 font-bold">
                <Phone className="w-3.5 h-3.5 fill-current" />
                Primary Industrial Contact (Call Now)
              </div>
              <a
                href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                className="block text-xl font-black text-slate-900 hover:text-sky-600 transition-colors font-sans"
              >
                {COMPANY_CONFIG.phoneDisplay}
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I need a quotation for a steel structure project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-emerald-500/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider transition-colors rounded"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
                <button
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded shadow-sm"
                >
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Real Stats Badge */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-sky-600">{COMPANY_CONFIG.experienceYears} Years+</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Industry Exp</span>
              </div>
              <div className="w-[1px] h-8 bg-sky-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-sky-600">{COMPANY_CONFIG.tonnageCompleted} Tons</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Steel Executed</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-700 font-bold">
              Core Services (9)
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-1.5 h-1.5 bg-sky-300 group-hover:bg-sky-600 transition-colors rounded-full"></span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries & Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-700 font-bold">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES_DATA.map((ind) => (
                <li key={ind.id}>
                  <button
                    onClick={() => onNavigate('industries')}
                    className="text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-1.5 h-1.5 bg-sky-300 group-hover:bg-sky-600 transition-colors rounded-full"></span>
                    <span className={ind.featured ? 'font-bold text-slate-900' : ''}>{ind.title}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
                Pages
              </h4>
              <ul className="space-y-1.5 text-xs">
                {[
                  { label: 'About Us', route: 'about' },
                  { label: 'Why Choose Us', route: 'why-choose-us' },
                  { label: 'Projects', route: 'projects' },
                  { label: 'FAQs', route: 'faqs' },
                  { label: 'Contact Us', route: 'contact' }
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => onNavigate(item.route)}
                      className="text-slate-500 hover:text-sky-600 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
                Resource Ecosystem
              </h4>
              <ul className="space-y-1.5 text-xs">
                {[
                  { label: 'Resources Gateway', route: 'resources' },
                  { label: 'PEB Knowledge Hub', route: 'resources/knowledge-hub' },
                  { label: 'Free Toolkits & Guides', route: 'resources/free-resources' },
                  { label: 'Structural Estimator & Tools', route: 'resources/tools' },
                  { label: 'Company / Industry Insights', route: 'resources/company-industry-insights' },
                  { label: '↳ Company Updates', route: 'resources/company-industry-insights/company-updates' },
                  { label: '↳ Industry Insights (20 Articles)', route: 'resources/company-industry-insights/industry-insights' },
                  { label: '↳ Verified Case Studies', route: 'resources/company-industry-insights/case-studies' }
                ].map((item) => (
                  <li key={item.route}>
                    <button
                      onClick={() => onNavigate(item.route)}
                      className="text-slate-500 hover:text-sky-600 transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Office & Location Info (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-700 font-bold">
              Registered Office
            </h4>
            <div className="p-4 bg-white border border-sky-200 space-y-3 text-xs rounded-lg shadow-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">Khodiyar Infraproject</div>
                  <div className="text-slate-600 leading-relaxed">
                    {COMPANY_CONFIG.officeAddress.full}
                  </div>
                </div>
              </div>

              {/* Google Maps / Get Directions CTA */}
              <div className="pt-1">
                <a
                  href={COMPANY_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-sky-50 hover:bg-sky-100 text-sky-900 font-bold text-xs uppercase tracking-wider transition-colors border border-sky-200 rounded"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sky-600" />
                </a>
              </div>

              <div className="border-t border-sky-100 pt-2.5 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-sky-600 font-mono">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>{COMPANY_CONFIG.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Social Media Architecture from Theme */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Industry Network</span>
              </div>
              <div className="flex items-center gap-3">
                {['LI', 'FB', 'IG', 'YT'].map((abbr) => (
                  <div
                    key={abbr}
                    className="w-8 h-8 border border-sky-200 bg-white rounded flex items-center justify-center text-slate-600 text-xs font-mono hover:text-sky-600 hover:border-sky-500 hover:bg-sky-50 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>{abbr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-sky-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {COMPANY_CONFIG.name}. Established {COMPANY_CONFIG.establishedYear}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Halol &amp; Vadodara, Gujarat, India</span>
            <span>•</span>
            <span className="text-sky-600 font-bold">Single-Source Structural Steel Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
