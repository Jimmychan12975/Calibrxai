"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("calibrx_cookie_consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else if (consent === "granted") {
      // Initialize Google Analytics if consent was previously granted
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("calibrx_cookie_consent", "granted");
    setShowBanner(false);
    
    // Enable Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem("calibrx_cookie_consent", "denied");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-50"
        >
          <div className="bg-zinc-950/90 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-2xl relative overflow-hidden group">
            
            {/* Decorative "Cyber" Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500" />

            {/* Status Header */}
            <div className="flex items-center gap-2 mb-3 text-cyan-500 text-xs font-mono tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Privacy Protocol Required
            </div>

            <div className="mb-6">
              <h3 className="text-white font-bold text-lg mb-2 font-display">Initialize Tracking?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We use cookies to calibrate your experience and analyze system performance. 
                Without this data, our precision may drift.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                Accept Protocol
              </button>
              <button
                onClick={declineCookies}
                className="flex-1 px-4 py-2 bg-transparent border border-white/10 hover:bg-white/5 text-zinc-400 hover:text-white font-medium text-xs uppercase tracking-widest rounded transition-colors"
              >
                Decline
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <Link href="/cookie-policy" className="text-[10px] text-zinc-600 hover:text-cyan-500 transition-colors uppercase tracking-wider">
                View Full Documentation
              </Link>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

