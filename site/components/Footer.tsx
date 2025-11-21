import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 border-t border-white/10 overflow-hidden">
      
      {/* 1. The Giant Watermark (Fixed Opacity & Position) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center z-0">
        <h1 className="text-[18vw] font-bold text-white/[0.03] leading-none tracking-tighter whitespace-nowrap translate-y-[15%]">
          CALIBRX
        </h1>
      </div>

      <div className="container relative z-10 px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Column 1: Brand & Founder (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex items-center filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity">
              <Logo className="h-12 w-auto" />
            </Link>
            
            {/* Founder Card - IMPROVED VISIBILITY */}
            <div className="p-6 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden">
              {/* Subtle internal glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50" />
              
              <p className="text-sm text-zinc-300 mb-6 leading-relaxed font-medium relative z-10">
                "We apply semiconductor-grade calibration to biological performance. Building AI that doesn't just track, but optimizes."
              </p>
              
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/20 overflow-hidden shrink-0">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-xs text-white font-bold">
                    JD
                  </div>
                </div>
                <div>
                  <div className="text-base text-white font-bold group-hover:text-cyan-400 transition-colors">Jimmy</div>
                  <div className="text-xs text-cyan-500 font-mono uppercase tracking-widest">Founder & Engineer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer / Divider Column (Optional visual separation) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Column 2: System Modules (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full box-shadow-cyan"></span>
              System
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#features" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-cyan-500 group-hover:w-4 transition-all"></span>Food Scanner</a></li>
              <li><a href="#features" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-cyan-500 group-hover:w-4 transition-all"></span>Drift Analytics</a></li>
              <li><a href="#features" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-cyan-500 group-hover:w-4 transition-all"></span>Gamification</a></li>
            </ul>
          </div>

          {/* Column 3: Protocol (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              Protocol
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About Calibrx</Link></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Engineering Team</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Column 4: Network (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Network
              </h4>
              {/* Big Buttons */}
              <div className="flex gap-4 mb-8">
                <a href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 hover:bg-zinc-800 transition-all">
                  <i className="ri-linkedin-fill text-xl" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 hover:bg-zinc-800 transition-all">
                  <i className="ri-twitter-x-line text-xl" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 hover:bg-zinc-800 transition-all">
                  <i className="ri-github-fill text-xl" />
                </a>
              </div>
            </div>

            {/* Status Badge - Bright & Clear */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-green-900/20 border border-green-500/30 backdrop-blur-md self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-xs font-mono font-bold tracking-wider">
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Clean Divider */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Calibrx AI Inc. <span className="hidden md:inline mx-2">|</span> All parameters calibrated.</p>
          <ul className="flex gap-8 font-medium">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Protocol</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
