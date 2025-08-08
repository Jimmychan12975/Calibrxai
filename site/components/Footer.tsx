import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-surface">
      <div className="container py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center">
  <Logo className="h-6 w-auto" />
</Link>
          <p className="text-sm text-[--color-text-muted]">Building AI-powered products, block by block.</p>
          <a className="text-sm hover:text-[--color-primary]" href="mailto:hello@calibrxai.com">hello@calibrxai.com</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Company</span>
          <Link className="text-sm text-[--color-text-muted] hover:text-[--color-primary]" href="/about">About</Link>
          <Link className="text-sm text-[--color-text-muted] hover:text-[--color-primary]" href="/products">Products</Link>
          <Link className="text-sm text-[--color-text-muted] hover:text-[--color-primary]" href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Legal</span>
          <Link className="text-sm text-[--color-text-muted] hover:text-[--color-primary]" href="/privacy">Privacy Policy</Link>
          <Link className="text-sm text-[--color-text-muted] hover:text-[--color-primary]" href="/terms">Terms & Conditions</Link>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="container py-4 text-xs text-[--color-text-muted]">© {new Date().getFullYear()} Calibrx AI. All rights reserved.</div>
      </div>
    </footer>
  );
} 