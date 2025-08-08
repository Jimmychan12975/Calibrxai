"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
  <Logo className="h-15 w-auto" />
</Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-[--color-primary]">Home</Link>
          <Link href="/products" className="hover:text-[--color-primary]">Products</Link>
          <Link href="/about" className="hover:text-[--color-primary]">About</Link>
          <Link href="/contact" className="hover:text-[--color-primary]">Contact</Link>
          <Link href="/products" className="inline-flex items-center rounded-md bg-[--color-accent] text-white px-3 py-2 font-medium hover:opacity-90">Discover Our Products</Link>
        </nav>

        <button aria-label="Toggle Menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded border border-black/10 dark:border-white/15" onClick={() => setOpen(!open)}>
          <div className="i-[]" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[--color-text]">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-surface">
          <div className="container py-3 flex flex-col gap-3">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/products">Products</Link>
            <Link onClick={() => setOpen(false)} href="/about">About</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
            <Link onClick={() => setOpen(false)} href="/products" className="inline-flex items-center justify-center rounded-md bg-[--color-accent] text-white px-3 py-2 font-medium">Discover Our Products</Link>
          </div>
        </div>
      )}
    </header>
  );
} 