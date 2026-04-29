import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0A0A]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity w-fit">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Calibrx AI builds intelligent apps that make everyday decisions — health, finance, and beyond — sharper and more accountable.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-zinc-500 font-mono">All systems operational</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs text-zinc-400 font-semibold uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products/calipet" className="text-sm text-zinc-500 hover:text-white transition-colors">Calipet</Link></li>
              <li><Link href="/products/calistock" className="text-sm text-zinc-500 hover:text-white transition-colors">Calistock</Link></li>
              <li><Link href="/products" className="text-sm text-zinc-500 hover:text-white transition-colors">All Apps</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs text-zinc-400 font-semibold uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-zinc-500 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-500 hover:text-white transition-colors">Contact</Link></li>
              <li>
                <a
                  href="mailto:hello@calibrxai.com"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  hello@calibrxai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Calibrx AI Inc. · Calabasas, CA
          </p>
          <ul className="flex gap-6">
            <li><Link href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors">Terms</Link></li>
            <li><Link href="/cookie-policy" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
