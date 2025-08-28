"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
      <div className="px-20 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center text-[18px]">
          <Link href="/" className="ml-10 text-[#003557] hover:text-[#0056a3] relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#003557] after:-bottom-1 after:left-0 hover:after:w-full transition-all">Home</Link>
          <Link href="/about" className="ml-10 text-[#003557] hover:text-[#0056a3] relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#003557] after:-bottom-1 after:left-0 hover:after:w-full transition-all">About</Link>
          <Link href="/services" className="ml-10 text-[#003557] hover:text-[#0056a3] relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#003557] after:-bottom-1 after:left-0 hover:after:w-full transition-all">Services</Link>
          <Link href="/products" className="ml-10 text-[#003557] hover:text-[#0056a3] relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#003557] after:-bottom-1 after:left-0 hover:after:w-full transition-all">Products</Link>
          <Link href="/contact" className="ml-10 contact-btn">Contact Us</Link>
        </nav>

        <button aria-label="Toggle Menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded border border-black/10" onClick={() => setOpen(!open)}>
          <div className="i-[]" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[--color-text]">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="px-6 py-3 flex flex-col gap-3">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/about">About</Link>
            <Link onClick={() => setOpen(false)} href="/services">Services</Link>
            <Link onClick={() => setOpen(false)} href="/products">Products</Link>
            <Link onClick={() => setOpen(false)} href="/contact" className="contact-btn inline-flex items-center justify-center w-max">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
} 