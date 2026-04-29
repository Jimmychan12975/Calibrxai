"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const navLink = "text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wide";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
        >
          <Logo className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={navLink}>Home</Link>
          <Link href="/about" className={navLink}>About</Link>
          <Link href="/products" className={navLink}>Products</Link>
          <Link
            href="/contact"
            className="text-sm px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-zinc-100 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
          onClick={() => setOpen(!open)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            {open ? (
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06z" />
            ) : (
              <path d="M1 3.75A.75.75 0 0 1 1.75 3h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.75zm0 4A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zm0 4A.75.75 0 0 1 1.75 11h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 11.75z" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          className="md:hidden border-t border-white/[0.06] bg-[#0A0A0A]/95 backdrop-blur-xl"
        >
          <div className="container py-6 flex flex-col gap-5">
            <Link onClick={() => setOpen(false)} href="/" className="text-sm text-zinc-300 hover:text-white transition-colors">Home</Link>
            <Link onClick={() => setOpen(false)} href="/about" className="text-sm text-zinc-300 hover:text-white transition-colors">About</Link>
            <Link onClick={() => setOpen(false)} href="/products" className="text-sm text-zinc-300 hover:text-white transition-colors">Products</Link>
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="mt-2 w-full py-3 bg-white text-black text-sm font-semibold rounded-lg text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
