import React from 'react';
import { X } from 'lucide-react';
import { QuoteForm } from '../sections/QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledType?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefilledType = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl my-auto animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-12 text-slate-600 hover:text-slate-900 p-2 rounded-full bg-white hover:bg-sky-50 shadow-md border border-sky-200 transition-colors z-20 cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5 text-sky-700" />
        </button>
        <QuoteForm 
          initialProjectType={prefilledType} 
          onSuccess={() => {
            // Can stay open or allow review
          }} 
        />
      </div>
    </div>
  );
};
