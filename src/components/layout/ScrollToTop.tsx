import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-20 md:bottom-8 left-4 md:left-8 z-30 p-3 rounded-xl bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-sky-200 shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
