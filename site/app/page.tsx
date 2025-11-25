"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/FadeInUp";
import ContactSection from "@/components/ContactSection";
import OscilloscopeGraph from "@/components/OscilloscopeGraph";

export default function Home() {
  return (
    <div className="bg-matte-noise text-slate-200 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[800px] h-[800px] bg-gradient-to-b from-slate-800 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 text-center px-4">
          <FadeInUp delay={0.2} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              System Online
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 max-w-5xl mx-auto leading-[1.1]">
              Precision Engineering for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">Human Habits.</span>
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={0.6}>
            {/* Increase mb-8 to mb-12 for more breathing room */}
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
              Bringing engineering precision to the chaos of daily life.
              <br className="hidden md:block" />
              <span className="text-white font-medium mt-1 block">
                We don't just track habits; we calibrate them.
              </span>
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#product" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-cyan-50 transition-colors min-w-[160px]">
                Explore
              </a>
              <a href="#philosophy" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-colors min-w-[160px]">
                Philosophy
              </a>
            </div>
          </FadeInUp>
        </div>

        {/* 3D Abstract Shape Placeholder */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] opacity-30 md:opacity-50 pointer-events-none will-change-transform"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
           <div className="w-full h-full border-[1px] border-white/10 rounded-full relative">
             <div className="absolute inset-4 border-[1px] border-white/5 rounded-full" />
             <div className="absolute inset-12 border-[1px] border-white/5 rounded-full" />
             <div className="absolute top-0 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-1/2 rotate-45" />
             <div className="absolute top-0 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-1/2 -rotate-45" />
           </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest will-change-transform"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to Calibrate
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </section>

{/* 2. The Philosophy Section */}
<section id="philosophy" className="py-32 relative overflow-hidden bg-zinc-950">
        {/* Optional: Background Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
        
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side (Unchanged) */}
            <FadeInUp>
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-cyan-500 font-mono text-xs uppercase tracking-[0.2em]">
                  <span className="w-8 h-[1px] bg-cyan-500" />
                  02 // The Drift
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-display">
                  Entropy is the enemy <br />
                  of performance.
                </h2>
                <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
                  <p>
                    In semiconductor manufacturing, equipment drifts. Nanometer deviations compound into failure. 
                    Without constant calibration, precision is lost.
                  </p>
                  <p>
                    <strong className="text-white font-medium">Humans are no different.</strong>
                  </p>
                  <p>
                    Our habits drift. Our focus degrades. Without a feedback loop, we lose our edge.
                    Calibrx provides that loop—monitoring, analyzing, and correcting your trajectory in real-time.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Visual Side - LOOPING OSCILLOSCOPE */}
            <FadeInUp delay={0.2}>
              <OscilloscopeGraph />
            </FadeInUp>
          </div>
        </div>
      </section>
      {/* 3. The Product Showcase (Calipet) */}
      <section id="product" className="py-32 relative bg-zinc-950 overflow-hidden">
        
        {/* Background Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        
        <div className="container px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                SYSTEM V1.0 DEPLOYED
             </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Calipet</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Gamified health tracking for the engineered life. <br className="hidden md:block" />
              Powered by computer vision, reinforced by gameplay.
            </p>
          </div>

          {/* The Phone "Specimen" Container */}
          <div className="relative max-w-[320px] mx-auto perspective-1000">
            
            {/* The Floating Phone */}
            <Link href="/products/calipet" className="block cursor-pointer">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 rounded-[3rem] border-4 border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden"
              >
                {/* Replace this with your actual Phone Screenshot Image */}
                <Image 
                  src="/Calipet_Hero_Image.webp" 
                  alt="Calipet App Interface"
                  width={320}
                  height={640}
                  className="w-full h-auto object-cover opacity-90" 
                />
                
                {/* Screen Glare/Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
              </motion.div>
            </Link>

            {/* The Floor Reflection (The "Polished Cement" look) */}
            <div className="absolute -bottom-12 left-4 right-4 h-full bg-gradient-to-b from-cyan-500/10 to-transparent blur-xl transform scale-y-[-0.3] opacity-50 z-10" />

            {/* Technical Callout Lines (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-20 -left-4 md:-left-48 hidden md:flex items-center gap-4"
            >
              <div className="text-right">
                <div className="text-cyan-400 font-mono text-xs font-bold">VISION CORE</div>
                <div className="text-zinc-500 text-xs">Macronutrient Analysis</div>
              </div>
              <div className="w-16 h-[1px] bg-cyan-500/30 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              </div>
            </motion.div>

            {/* Technical Callout Lines (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-32 -right-4 md:-right-48 hidden md:flex items-center gap-4 flex-row-reverse"
            >
              <div className="text-left">
                <div className="text-cyan-400 font-mono text-xs font-bold">GAMIFICATION</div>
                <div className="text-zinc-500 text-xs">Dopamine Feedback Loop</div>
              </div>
              <div className="w-16 h-[1px] bg-cyan-500/30 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Features Grid (Bento) */}
      <section className="py-32 container px-4 relative z-10">
        {/* CHANGED: max-w-2xl -> max-w-3xl (Wider box) */}
        <FadeInUp className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
            SYSTEM MODULES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Granular Control.
          </h2>
          {/* ADDED: text-balance (Makes lines even) and Fixed Typo */}
          <p className="text-lg text-slate-400 text-balance">
            Designed for your life. Each module calibrates a specific vector of human performance.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: AI Food Scanner (Cyan Theme) */}
          <FadeInUp delay={0.1}>
            <div className="group relative h-full p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:bg-zinc-900/80">
              
              {/* The "Phantom Gradient" - Appears on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i className="ri-camera-lens-line" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">AI Food Scanner</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Computer vision analysis of nutritional inputs. Instantly calculates macro-drift and suggests corrective meals based on your baseline.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Card 2: Gamified Progress (Green Theme) */}
          <FadeInUp delay={0.2}>
            <div className="group relative h-full p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-green-500/50 hover:bg-zinc-900/80">
              
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl text-green-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <i className="ri-arrow-up-double-line" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">Gamified Progress</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  RPG-style progression for real-world habits. Level up your stats by maintaining consistency streaks. 
                  <span className="block mt-2 text-green-400/70 font-mono text-xs">+15 XP per logged meal.</span>
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Card 3: Data Precision (Purple Theme) */}
          <FadeInUp delay={0.3}>
            <div className="group relative h-full p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:bg-zinc-900/80">
              
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i className="ri-bar-chart-grouped-line" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">Data Precision</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Logarithmic visualizations of your health data. Identify trends with industrial-grade analytics tools that help you detect drift early.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Card 4: The Virtual Pet (Orange Theme) */}
          <FadeInUp delay={0.4}>
            <div className="group relative h-full p-8 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:bg-zinc-900/80">
              
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl text-orange-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <i className="ri-baidu-line" />
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white mb-3 font-display">The Virtual Pet</h3>
                  <span className="px-2 py-0.5 rounded bg-orange-500/20 border border-orange-500/30 text-[10px] text-orange-300 font-mono">
                    LIVE
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Your digital reflection. As you improve, it evolves. Neglect your habits, and it glitches.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 5. Contact/CTA Section */}
      <section className="py-20 relative z-10">
        <FadeInUp>
          <ContactSection />
        </FadeInUp>
      </section>
    </div>
  );
}
