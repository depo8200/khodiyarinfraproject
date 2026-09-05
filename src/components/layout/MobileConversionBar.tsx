import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

interface MobileConversionBarProps {
  onOpenQuote: (type?: string) => void;
}

export const MobileConversionBar: React.FC<MobileConversionBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-sky-200 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now (Top Priority) */}
        <a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-600 text-white font-extrabold text-[11px] leading-tight shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-pulse" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I would like to inquire about PEB / structural steel solutions.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold text-[11px] leading-tight shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Quote */}
        <button
          onClick={() => onOpenQuote()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-50 text-sky-900 hover:bg-sky-100 font-bold text-[11px] leading-tight border border-sky-200 active:scale-95 transition-transform cursor-pointer"
        >
          <FileText className="w-4 h-4 mb-0.5 text-sky-600" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
};
