'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Brain, Zap, Sparkles } from 'lucide-react';

// Shared Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: The Vision */}
      <section className="relative pt-32 pb-20 container px-4 border-b border-white/5">
        {/* Background: Abstract Digital Particles (Not Grid) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md">
            EST. 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight font-display">
            AI that Connects,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Empowers & Inspires.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            At Calibrx AI, we design intelligent, gamified experiences that turn the complexity of self-improvement into a simple, engaging journey.
          </p>
        </motion.div>
      </section>

      {/* 2. THE MISSION (Chaos vs Clarity) */}
      <section className="py-32 container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: The Story (Reframed) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-mono text-purple-500 mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Our Philosophy
            </h2>
            <h3 className="text-4xl font-bold mb-8 font-display">Engineering <br />Better Habits.</h3>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Modern life is messy. We are bombarded with data, distractions, and conflicting advice. Trying to stay healthy often feels like fighting chaos.
              </p>
              <p>
                <strong className="text-white">We believe improvement shouldn't be a struggle.</strong>
              </p>
              <p>
                Our founder, Jimmy, spent years working in high-precision engineering systems. He realized that the same principles used to build advanced technology—<span className="text-cyan-400">feedback loops, real-time correction, and clear data</span>—could be applied to help people reach their personal goals.
              </p>
              <p>
                We built Calibrx AI to bridge that gap. To take the "work" out of willpower and replace it with intelligence and play.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual (Human & Digital Harmony) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group shadow-2xl"
          >
            {/* Gradient Mesh Background (Softer, Biological feel) */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-black" />
            
            {/* Floating Elements Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-64 h-64">
                  {/* Center Core (The AI) */}
                  <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-zinc-950 border border-white/20 rounded-full flex items-center justify-center z-10">
                    <Brain size={48} className="text-white" />
                  </div>

                  {/* Orbiting Elements (Habits) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center animate-bounce shadow-lg">
                    <Heart size={20} className="text-red-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
                    <Zap size={20} className="text-yellow-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
                    <Sparkles size={20} className="text-purple-400" />
                  </div>
               </div>
            </div>
            
            <div className="absolute bottom-8 left-0 w-full text-center text-xs font-mono text-white/40">
              SYSTEM HARMONY RESTORED
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. VALUES GRID (Focus on Outcome) */}
      <section className="py-20 bg-zinc-900/30 border-y border-white/5">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intelligent Design</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We don't just track data; we interpret it. Our AI acts as a proactive guide, not a passive logbook.
              </p>
            </div>
            {/* Value 2 */}
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Gamified Growth</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Willpower is finite. Fun is infinite. We turn boring routines into rewarding loops.
              </p>
            </div>
            {/* Value 3 */}
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-green-500/50 transition-colors group">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Human First</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Technology should serve biology. We build tools that help you disconnect from screens and reconnect with life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER NOTE (Personal & Relatable) */}
      <section className="py-32 container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-8">
            <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-950 overflow-hidden mx-auto">
               {/* Replace with your image */}
               <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold">JIMMY</div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            "We are creating a platform where AI <br/> doesn't just analyze — <span className="text-cyan-400">it motivates.</span>"
          </h2>
          
          <div className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed space-y-6">
            <p>
              I started Calibrx AI because I saw a missing link in the wellness industry. We have plenty of apps that tell us what we did wrong. We have very few that help us feel good about doing it right.
            </p>
            <p>
              Our first product, <strong>Calipet</strong>, is just the beginning. By combining computer vision with the emotional connection of a digital pet, we are proving that healthy habits can be addictive in a good way.
            </p>
            <div className="pt-8">
              <div className="text-white font-bold">Jimmy</div>
              <div className="text-sm text-cyan-500 font-mono">Founder, Calibrx AI</div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}