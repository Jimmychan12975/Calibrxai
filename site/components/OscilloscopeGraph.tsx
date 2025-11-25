"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OscilloscopeGraph() {
  const redPath = "M0,100 C50,100 80,100 120,100 S160,80 180,80 S220,130 240,130 S280,40 300,40 S360,160 380,160 L400,100";
  const cyanPath = "M0,100 L400,100";

  const pathTransition = {
    duration: 3,
    ease: "linear" as const,
    repeat: Infinity,
    repeatDelay: 0.5
  };

  return (
    <div className="relative aspect-[4/3] bg-zinc-900/50 rounded-lg border border-white/10 overflow-hidden backdrop-blur-sm group translate-z-0">
      
      {/* 1. Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]" />
      
      {/* 2. Axis Labels */}
      <div className="absolute left-2 top-2 text-[10px] text-zinc-600 font-mono">AMP (dB)</div>
      <div className="absolute right-2 bottom-2 text-[10px] text-zinc-600 font-mono">TIME (ms)</div>
      <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/10 dashed" /> 

      {/* 3. The Visualization Container */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200">

          {/* RED SIGNAL (Noise) */}
          {/* Layer 1: Glow (Simulated with thick semi-transparent stroke - much faster than drop-shadow filter) */}
          <motion.path 
            d={redPath}
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="12"
            strokeOpacity="0.15"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0.5, 1] 
            }}
            transition={pathTransition}
          />
          {/* Layer 2: Core Line */}
          <motion.path 
            d={redPath}
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="2"
            strokeOpacity="0.8"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0.5, 1] 
            }}
            transition={pathTransition}
          />

          {/* CYAN SIGNAL (Precision) */}
          {/* Layer 1: Glow */}
          <motion.path 
            d={cyanPath}
            fill="none" 
            stroke="#06b6d4" 
            strokeWidth="14"
            strokeOpacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={pathTransition}
          />
          {/* Layer 2: Core Line */}
          <motion.path 
            d={cyanPath}
            fill="none" 
            stroke="#06b6d4" 
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={pathTransition}
          />
        </svg>

        {/* 4. Scanning Vertical Line Animation */}
        <motion.div 
          className="absolute top-0 bottom-0 w-[2px] bg-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20 will-change-[left]"
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={pathTransition}
        />

        {/* 5. Blinking Labels */}
        {/* Red Warning */}
        <motion.div 
          className="absolute top-10 right-10 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded text-xs text-red-400 font-mono tracking-wider"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
           ⚠ DRIFT DETECTED
        </motion.div>
        
        {/* Cyan Status */}
        <motion.div 
          className="absolute bottom-10 right-10 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded text-xs text-cyan-400 font-mono tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
           ✓ CALIBRATING...
        </motion.div>

      </div>
    </div>
  );
}

