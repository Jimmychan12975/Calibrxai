"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus first menu item when menu opens
      setTimeout(() => firstMenuItemRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const navLinkClasses = "ml-10 text-sm font-medium uppercase tracking-wider text-slate-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-primary after:-bottom-1 after:left-0 hover:after:w-full after:transition-all duration-300";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
      <div className="px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity">
          <Logo className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center">
          <Link href="/" className={navLinkClasses}>Home</Link>
          <Link href="/about" className={navLinkClasses}>About</Link>
          <Link href="/products" className={navLinkClasses}>Products</Link>
          <Link 
            href="/contact" 
            className="ml-10 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-xs font-bold uppercase tracking-widest rounded border border-cyan-400 transition-all shadow-[0_0_10px_rgba(6,182,212,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
          >
            Contact Us
          </Link>
        </nav>

        <button aria-label="Toggle Menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded border border-white/10 text-white hover:bg-white/5" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div ref={menuRef} className="md:hidden border-b border-white/10 bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link ref={firstMenuItemRef} onClick={() => setOpen(false)} href="/" className="text-slate-300 hover:text-white text-sm uppercase tracking-wider">Home</Link>
            <Link onClick={() => setOpen(false)} href="/about" className="text-slate-300 hover:text-white text-sm uppercase tracking-wider">About</Link>
            <Link onClick={() => setOpen(false)} href="/products" className="text-slate-300 hover:text-white text-sm uppercase tracking-wider">Products</Link>
            <Link 
              onClick={() => setOpen(false)} 
              href="/contact" 
              className="w-full mt-4 px-6 py-3 bg-cyan-500 text-zinc-950 text-sm font-bold uppercase tracking-widest rounded text-center flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
