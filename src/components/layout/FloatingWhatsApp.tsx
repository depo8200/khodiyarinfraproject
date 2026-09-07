import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger subtle pop-in and fade-in entrance animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Khodiyar Infraproject, I would like to inquire about PEB / structural steel solutions.')}`;

  return (
    <div
      className={`fixed bottom-20 md:bottom-8 right-4 md:right-8 z-30 flex flex-col items-end gap-2 select-none transition-all duration-500 ease-out transform ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 border border-sky-200 rounded-2xl py-2 px-3.5 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <div className="text-xs">
            <span className="font-semibold text-slate-900">Direct WhatsApp Desk</span>
            <p className="text-[10px] text-slate-500">Chat with structural engineers</p>
          </div>
          <button 
            onClick={() => setShowTooltip(false)} 
            className="text-slate-400 hover:text-slate-700 ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Khodiyar Infraproject"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/20"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border border-slate-900"></span>
        </span>
        <MessageSquare className="w-7 h-7 fill-white/10" />
      </a>
    </div>
  );
};
