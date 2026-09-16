import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbCrumb {
  label: string;
  route?: string;
  slug?: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  onNavigate?: (route: string, slug?: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs font-mono text-slate-500 overflow-x-auto py-2 ${className}`}>
      <ol className="flex items-center space-x-2 whitespace-nowrap">
        <li>
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="flex items-center gap-1 hover:text-sky-600 transition-colors text-slate-500 cursor-pointer"
            title="Khodiyar Infraproject Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1 || item.active;

          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {isLast ? (
                <span className="font-semibold text-slate-900 line-clamp-1" aria-current="page">
                  {item.label}
                </span>
              ) : item.route && onNavigate ? (
                <button
                  onClick={() => onNavigate(item.route!, item.slug)}
                  className="hover:text-sky-600 transition-colors text-slate-600 cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-slate-600">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
