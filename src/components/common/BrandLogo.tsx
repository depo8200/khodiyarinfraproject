import React from 'react';
import { LogoInfra } from './LogoInfra';

export { LogoInfra };

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'monochrome';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '',
  size = 'md' 
}) => {
  return <LogoInfra className={className} size={size} />;
};
