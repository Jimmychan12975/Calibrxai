import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Smartphone, Scan, Trophy, Heart, ChevronRight, Download } from "lucide-react";

export const metadata = {
  title: "Project: Calipet | Calibrx AI",
  description: "Calipet is a playful AI nutrition coach that turns your meals into XP for a cute companion.",
};

export default function CalipetPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container px-4 relative z-10 max-w-6xl mx-auto">
        
        {/* 1. Navigation / Breadcrumb */}
        <div className="mb-12">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors font-mono text-sm uppercase tracking-widest group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            System Architecture / Calipet
          </Link>
        </div>

        {/* 2. Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          
          {/* Text Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              STATUS: LIVE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-display text-white">
              Project <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500">
                Calipet
              </span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              A precision nutrition engine masked as a game. 
              Turn biological inputs into digital XP. Calibrate your habits through positive reinforcement loops.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://apps.apple.com/app/id6754895847" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-zinc-950 font-bold rounded flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
              >
                <Download size={18} />
                Download on App Store
              </Link>
              <div className="px-6 py-3 rounded border border-white/10 bg-zinc-900 text-zinc-400 font-mono text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-zinc-600 rounded-full"></span>
                v1.0.0 Stable
              </div>
            </div>
          </div>

          {/* Hero Image Highlight */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-2 overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500">
              <Image 
                src="/Calipet_Hero_Image.webp" 
                alt="Calipet Dashboard" 
                width={600} 
                height={450} 
                className="rounded-xl w-full h-auto object-cover" 
              />
              {/* Tech Overlay */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[10px] font-mono text-white/70">
                DASHBOARD_VIEW_01
              </div>
            </div>
          </div>
        </div>

        {/* 3. The "Modules" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Companion */}
          <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 hover:from-cyan-500/50 hover:to-blue-500/50 transition-colors duration-500">
            <div className="bg-zinc-950 h-full rounded-[22px] p-8 overflow-hidden relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Heart size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Nutrition Companion</h3>
              </div>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                See calories and macros at a glance. Your pet reflects your physical state—keep them healthy to keep yourself healthy.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                <Image 
                  src="/Calipet_Hero_Image.webp" 
                  alt="Companion Interface" 
                  width={500} 
                  height={300} 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Progression */}
          <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 hover:from-purple-500/50 hover:to-pink-500/50 transition-colors duration-500">
            <div className="bg-zinc-950 h-full rounded-[22px] p-8 overflow-hidden relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Trophy size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Gamified Progression</h3>
              </div>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                Hit daily targets to earn XP. Evolve your pet from Level 1 to Level 4. Gentle motivation that rewards consistency.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-colors">
                <Image 
                  src="/Calipet_Character_Progression.webp" 
                  alt="Level Up System" 
                  width={500} 
                  height={300} 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Scanning (Full Width on Mobile, Standard on Desktop) */}
          <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 hover:from-green-500/50 hover:to-emerald-500/50 transition-colors duration-500">
            <div className="bg-zinc-950 h-full rounded-[22px] p-8 overflow-hidden relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-green-900/30 border border-green-500/30 flex items-center justify-center text-green-400">
                  <Scan size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Vision Core Scanning</h3>
              </div>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                Computer vision algorithms analyze food density and volume. Estimate calories, protein, carbs, and fats in seconds.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-green-500/30 transition-colors">
                <Image 
                  src="/Calipet_Meal_Scanning_Feature.webp" 
                  alt="Scanning Feature" 
                  width={500} 
                  height={300} 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Card 4: Philosophy */}
          <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 hover:from-orange-500/50 hover:to-yellow-500/50 transition-colors duration-500">
            <div className="bg-zinc-950 h-full rounded-[22px] p-8 overflow-hidden relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-orange-900/30 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Smartphone size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Positive Feedback Loop</h3>
              </div>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                A light-hearted space to build better eating habits. No shame, only progress. Feed your pet to feed your health.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-orange-500/30 transition-colors">
                <Image 
                  src="/Calipet_Advertisement_Banner.webp" 
                  alt="Marketing Banner" 
                  width={500} 
                  height={300} 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}