import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'monochrome';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  variant = 'full', 
  className = '',
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-base',
    md: 'w-10 h-10 text-xl',
    lg: 'w-12 h-12 text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Industrial 'K' Block in Skyblue */}
      <div className={`relative flex-shrink-0 ${sizeClasses[size]} bg-sky-600 text-white font-black flex items-center justify-center tracking-tighter shadow-sm group rounded-sm`}>
        <span>K</span>
      </div>

      {/* Typography */}
      {variant !== 'compact' && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-bold text-lg md:text-xl tracking-tight leading-none text-slate-900 font-sans">
            KHODIYAR
          </span>
          <span className="text-[10px] md:text-[11px] text-sky-600 font-bold tracking-[0.2em] uppercase mt-1">
            Infraproject
          </span>
        </div>
      )}
    </div>
  );
};
