import React from 'react';

interface LogoInfraProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LogoInfra: React.FC<LogoInfraProps> = ({ 
  className = '',
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-11 md:h-12 w-auto',
    lg: 'h-14 md:h-16 w-auto'
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logoinfra.png"
        alt="Khodiyar Infra Project"
        className={`${sizeClasses[size]} object-contain`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default LogoInfra;
