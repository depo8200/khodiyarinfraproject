import React from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { QuoteForm } from '../components/sections/QuoteForm';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  ExternalLink, 
  Navigation,
  BookOpen,
  CheckSquare,
  Calculator,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (route: string, slug?: string) => void;
  onOpenQuote?: (type?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Contact', active: true }]} onNavigate={onNavigate} />

      {/* 1. HERO */}
      <section className="space-y-6 text-left border-b border-sky-100 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono uppercase font-bold tracking-widest rounded">
          Direct Engineering Contact
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-sans uppercase tracking-tight">
          Contact Khodiyar Infraproject | Vadodara &amp; Halol, Gujarat
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Reach our structural engineering desk directly for preliminary technical consultations, building layout evaluations, BOQ preparations, and turnkey proposals.
        </p>

        {/* Triple priority cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* 1. Phone (Top Priority) */}
          <div className="p-6 bg-white border border-sky-200 rounded-2xl space-y-2 shadow-md hover:border-sky-400 transition-all">
            <div className="text-xs font-mono uppercase text-sky-600 font-bold flex items-center gap-2 tracking-wider">
              <Phone className="w-4 h-4 fill-current" />
              Primary Contact (Call Now)
            </div>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="block text-xl font-black text-slate-900 hover:text-sky-600 transition-colors tracking-tight"
            >
              {COMPANY_CONFIG.phoneDisplay}
            </a>
            <p className="text-[11px] text-slate-500">
              Immediate connection with senior project coordinators
            </p>
          </div>

          {/* 2. WhatsApp */}
          <div className="p-6 bg-white border border-sky-200 rounded-2xl space-y-2 shadow-md hover:border-emerald-400 transition-all">
            <div className="text-xs font-mono uppercase text-emerald-600 font-bold flex items-center gap-2 tracking-wider">
              <MessageSquare className="w-4 h-4 fill-current" />
              WhatsApp Direct Chat
            </div>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I would like to inquire about PEB / structural steel solutions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-black text-emerald-600 hover:text-emerald-700 transition-colors tracking-tight"
            >
              Chat on WhatsApp
            </a>
            <p className="text-[11px] text-slate-500">
              Send structural sketches &amp; land photos instantly
            </p>
          </div>

          {/* 3. Office & Timing */}
          <div className="p-6 bg-white border border-sky-200 rounded-2xl space-y-2 shadow-md hover:border-sky-400 transition-all">
            <div className="text-xs font-mono uppercase text-sky-600 font-bold flex items-center gap-2 tracking-wider">
              <Clock className="w-4 h-4" />
              Working Hours
            </div>
            <div className="text-base font-bold text-slate-900 tracking-wide">
              {COMPANY_CONFIG.workingHours}
            </div>
            <p className="text-[11px] text-slate-500">
              Emergency site response available for active erection sites
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & ENQUIRY FORM GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Col: Detailed Office Info & Google Maps (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 bg-white border border-sky-200 rounded-2xl space-y-5 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-sky-600 font-bold tracking-wider">
                Registered Corporate Office
              </span>
              <h2 className="text-xl font-black text-slate-900 font-sans uppercase tracking-tight">
                Halol / Vadodara Office
              </h2>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-700">
              <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1 leading-relaxed">
                <div className="font-bold text-slate-900 uppercase tracking-wider">Khodiyar Infraproject</div>
                <div className="text-slate-600">{COMPANY_CONFIG.officeAddress.full}</div>
                <div className="text-sky-700 font-mono text-[11px] pt-1 uppercase tracking-wider font-semibold">
                  Panchmahal / Vadodara Industrial Belt, Gujarat, India
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-sky-100 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-500 uppercase tracking-wider text-[11px]">Email:</span>
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-sky-600 font-mono hover:underline font-semibold">
                  {COMPANY_CONFIG.email}
                </a>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                (Configurable placeholder email for corporate tender submissions)
              </p>
            </div>

            {/* Google Maps External Action */}
            <div className="pt-2">
              <a
                href={COMPANY_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Frame with real photo preview */}
          <div className="border border-sky-200 bg-white rounded-2xl shadow-xl space-y-2 p-2 overflow-hidden">
            <div className="relative h-64 sm:h-72 overflow-hidden rounded-xl border border-sky-100">
              <iframe
                title="Khodiyar Infraproject Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118029.98687785215!2d73.4079878234375!3d22.502936799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39607eb443a6d36d%3A0x1d37b678129ff2d1!2sHalol%2C%20Gujarat%20389350!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-sky-200 text-[11px] font-mono text-sky-700 font-bold uppercase tracking-wider shadow-sm">
                Halol Industrial Corridor, Gujarat
              </div>
            </div>
          </div>

          {/* Industrial Service Regions */}
          <div className="p-5 bg-sky-50/70 border border-sky-200 rounded-2xl space-y-2 text-xs">
            <div className="font-bold text-sky-700 font-mono uppercase tracking-wider text-[11px]">
              Primary Industrial Service Corridors:
            </div>
            <p className="text-slate-600 leading-relaxed">
              Halol GIDC • Vadodara Industrial Clusters (Makarpura, Savli, Manjusar, Por) • Dahej PCPIR • Bharuch &amp; Ankleshwar • Ahmedabad &amp; Sanand • Pan-India Structural Projects.
            </p>
          </div>
        </div>

        {/* Right Col: Interactive Quote & Inquiry Form (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Helpful Preparation Note (Level 7 Additive Integration) */}
          {onNavigate && (
            <div className="p-4 sm:p-5 bg-sky-50/80 border border-sky-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div className="space-y-1">
                <div className="text-[11px] font-mono uppercase font-bold text-sky-700 flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5" />
                  Preparing your PEB project?
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use our checklists or interactive planning tool before consulting our engineers.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('resources/free-resources/peb-requirement-checklist')}
                  className="px-3 py-1.5 bg-white hover:bg-sky-100 text-sky-700 text-xs font-bold rounded-lg border border-sky-200 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>PEB Checklist</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('resources/tools/project-planning-tool')}
                  className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Planning Tool</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          <QuoteForm />
        </div>
      </section>
    </div>
  );
};
