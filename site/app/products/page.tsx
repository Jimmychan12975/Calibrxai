import Link from "next/link";
import { products } from "@/lib/products";
import { ArrowRight, Lock, Activity, Zap } from "lucide-react";

export const metadata = {
  title: "System Architecture - Calibrx AI",
  description: "Explore Calibrx AI's growing suite of AI products built with a modular philosophy.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        
        {/* 1. Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-sm animate-pulse"></span>
            PRODUCT SUITE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-display">
            Deployed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Solutions</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Our growing suite of AI products is built with a modular philosophy. 
            Each block is robust, composable, and calibrated for performance.
          </p>
        </div>

        {/* 2. The Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((p, index) => {
            // Check if product is "Active" (has a real link)
            const isActive = p.href && p.href !== "#";

            return (
              <div 
                key={p.slug} 
                className={`group relative rounded-2xl border ${isActive ? 'border-white/10 hover:border-cyan-500/50' : 'border-white/5'} bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500`}
              >
                
                {/* Image / Preview Area */}
                <div className="relative h-64 bg-zinc-950 border-b border-white/5 overflow-hidden">
                  {/* Background Grid inside image area */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {p.image ? (
                    <img 
                      src={p.image} 
                      alt={`${p.name} cover`} 
                      className={`w-full h-full object-contain p-8 transition-transform duration-700 ${isActive ? 'group-hover:scale-105' : 'opacity-40 grayscale'}`} 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700">
                      <Activity size={48} strokeWidth={1} />
                    </div>
                  )}

                  {/* Status Badge (Top Right) */}
                  <div className="absolute top-4 right-4">
                    {isActive ? (
                      <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono uppercase tracking-wider rounded flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        LIVE SYSTEM
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-500 text-[10px] font-mono uppercase tracking-wider rounded flex items-center gap-2">
                        <Lock size={10} />
                        IN DEVELOPMENT
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs text-zinc-500 font-mono mb-2">SYS-0{index + 1}</div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {p.name}
                      </h3>
                    </div>
                    {/* Icon Identifier */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${isActive ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-zinc-800 border-zinc-700 text-zinc-600'}`}>
                      <Zap size={20} />
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 h-10 line-clamp-2">
                    {p.summary}
                  </p>

                  {/* Action Button */}
                  {isActive ? (
                    <Link 
                      href={p.href} 
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors group/btn"
                    >
                      INITIATE SEQUENCE
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 cursor-not-allowed">
                      ACCESS RESTRICTED
                      <Lock size={14} />
                    </span>
                  )}
                </div>

                {/* Decorative Corner Lines */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-white/5 rounded-tl-2xl pointer-events-none group-hover:border-cyan-500/30 transition-colors" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/5 rounded-br-2xl pointer-events-none group-hover:border-cyan-500/30 transition-colors" />
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}