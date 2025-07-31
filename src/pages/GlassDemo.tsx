import React from 'react';
import Glass from '@/components/ui/glass';
import { Plus, Search, Settings, User, Play, SkipForward } from 'lucide-react';

const GlassDemo: React.FC = () => {
  const handleGlassClick = (action: string) => {
    console.log(`Glass clicked: ${action}`);
    // You can add your logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background elements for better glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
          New Glass Effect Demo
        </h1>
        
        {/* SVG Filter for glass distortion */}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Default Glass (Circular) */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Default Glass (Circular)</h3>
            <div className="relative h-40 flex items-center justify-center">
              <Glass 
                size="md"
                onClick={() => handleGlassClick('default')}
              />
            </div>
          </div>

          {/* Glass Container */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Glass Container</h3>
            <div className="relative h-40 flex items-center justify-center">
              <Glass 
                variant="container"
                className="min-w-[16rem]"
                onClick={() => handleGlassClick('container')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">User Profile</span>
                    <span className="text-white/60 text-sm">Click to view</span>
                  </div>
                </div>
              </Glass>
            </div>
          </div>

          {/* Glass Button */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Glass Button</h3>
            <div className="relative h-40 flex items-center justify-center">
              <Glass 
                variant="button"
                onClick={() => handleGlassClick('button')}
              >
                <span className="text-white font-semibold">Click Me</span>
              </Glass>
            </div>
          </div>
        </div>

        {/* Music Player Example */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Music Player Example</h2>
          <div className="flex justify-center">
            <Glass 
              variant="container"
              className="min-w-[32rem]"
              onClick={() => handleGlassClick('music-player')}
            >
              <div className="flex items-center gap-5 p-4">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-lg">Now Playing</span>
                  <span className="text-white/60">Artist Name - Song Title</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <SkipForward className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </Glass>
          </div>
        </div>

        {/* Multiple Glass elements with new styling */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Multiple Glass Elements</h2>
          <div className="relative h-96">
            <Glass 
              size="sm"
              className="absolute top-10 left-1/4"
              onClick={() => handleGlassClick('top-left')}
            >
              <User className="w-4 h-4 text-white" />
            </Glass>
            
            <Glass 
              size="md"
              className="absolute top-20 right-1/4"
              onClick={() => handleGlassClick('top-right')}
            />
            
            <Glass 
              size="lg"
              className="absolute bottom-20 left-1/3"
              onClick={() => handleGlassClick('bottom-left')}
            >
              <Plus className="w-6 h-6 text-white" />
            </Glass>
            
            <Glass 
              size="xl"
              className="absolute bottom-10 right-1/3"
              onClick={() => handleGlassClick('bottom-right')}
            >
              <Search className="w-8 h-8 text-white" />
            </Glass>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-20 bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">New Glass Effect Usage</h3>
          <div className="text-white/90 space-y-2 text-sm">
            <p><strong>Default circular:</strong> <code className="bg-white/20 px-2 py-1 rounded">&lt;Glass /&gt;</code></p>
            <p><strong>Container variant:</strong> <code className="bg-white/20 px-2 py-1 rounded">&lt;Glass variant="container" /&gt;</code></p>
            <p><strong>Button variant:</strong> <code className="bg-white/20 px-2 py-1 rounded">&lt;Glass variant="button" /&gt;</code></p>
            <p><strong>With custom content:</strong> <code className="bg-white/20 px-2 py-1 rounded">&lt;Glass&gt;&lt;Icon /&gt;&lt;/Glass&gt;</code></p>
            <p><strong>Available sizes:</strong> sm, md, lg, xl</p>
            <p><strong>New features:</strong> Multi-layer glass effect with proper shadows and highlights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassDemo; 