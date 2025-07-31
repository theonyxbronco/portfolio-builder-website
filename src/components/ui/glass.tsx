import React from 'react';
import { cn } from '@/lib/utils';

interface GlassProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: 'default' | 'container' | 'button';
}

const Glass: React.FC<GlassProps> = ({ 
  className, 
  size = 'md', 
  onClick, 
  children,
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  if (variant === 'container') {
    return (
      <div
        className={cn(
          'relative flex font-semibold text-white cursor-pointer',
          'bg-transparent rounded-[2rem] overflow-hidden',
          'shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]',
          className
        )}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        } : undefined}
      >
        {/* Glass Filter Layer */}
        <div className="absolute inset-0 z-0 backdrop-blur-[0px] filter-[url(#lg-dist)] isolate" />
        
        {/* Glass Overlay Layer */}
        <div className="absolute inset-0 z-1 bg-[rgba(255,255,255,0.25)]" />
        
        {/* Glass Specular Layer */}
        <div className="absolute inset-0 z-2 rounded-inherit overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)]" />
        
        {/* Glass Content Layer */}
        <div className="relative z-3 flex items-center gap-5 p-4">
          {children}
        </div>
      </div>
    );
  }

  if (variant === 'button') {
    return (
      <div
        className={cn(
          'relative flex font-semibold text-white cursor-pointer',
          'bg-transparent rounded-[1rem] overflow-hidden',
          'shadow-[0_4px_4px_rgba(0,0,0,0.2),0_0_15px_rgba(0,0,0,0.1)]',
          className
        )}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        } : undefined}
      >
        {/* Glass Filter Layer */}
        <div className="absolute inset-0 z-0 backdrop-blur-[0px] filter-[url(#lg-dist)] isolate" />
        
        {/* Glass Overlay Layer */}
        <div className="absolute inset-0 z-1 bg-[rgba(255,255,255,0.25)]" />
        
        {/* Glass Specular Layer */}
        <div className="absolute inset-0 z-2 rounded-inherit overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)]" />
        
        {/* Glass Content Layer */}
        <div className="relative z-3 flex items-center justify-center px-4 py-2">
          {children}
        </div>
      </div>
    );
  }

  // Default variant (circular glass)
  return (
    <>
      {/* SVG filter for glass distortion */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="lg-dist">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 0.1 0"
            />
          </filter>
        </defs>
      </svg>
      
      <div
        className={cn(
          'relative flex font-semibold text-white cursor-pointer',
          'bg-transparent rounded-full overflow-hidden',
          'shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]',
          sizeClasses[size],
          className
        )}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        } : undefined}
      >
        {/* Glass Filter Layer */}
        <div className="absolute inset-0 z-0 backdrop-blur-[0px] filter-[url(#lg-dist)] isolate" />
        
        {/* Glass Overlay Layer */}
        <div className="absolute inset-0 z-1 bg-[rgba(255,255,255,0.25)]" />
        
        {/* Glass Specular Layer */}
        <div className="absolute inset-0 z-2 rounded-inherit overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)]" />
        
        {/* Glass Content Layer */}
        <div className="relative z-3 flex items-center justify-center">
          {children}
          
          {/* Default plus icon if no children */}
          {!children && (
            <>
              <div className="absolute w-[40%] h-2.5 bg-white rounded-[10px]" />
              <div className="absolute w-[40%] h-2.5 bg-white rounded-[10px] rotate-90" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Glass; 