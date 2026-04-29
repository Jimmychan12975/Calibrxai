import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { products } from "@/lib/products";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — Calibrx AI",
  description: "Explore Calibrx AI's suite of AI-powered apps built to close real accountability gaps.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-36 pb-20 border-b border-white/[0.06]">
        <div className="container max-w-3xl">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-5">Our Apps</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Built to close<br />
            <span className="text-zinc-400">accountability gaps.</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
            Each app targets a real gap — where tracking exists but verification doesn't, or where engagement is missing and results drift.
          </p>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-6 max-w-5xl">
            {products.map((p) => {
              const isLive = p.status === "live";

              return (
                <Link
                  key={p.slug}
                  href={p.href}
                  className="group flex flex-col md:flex-row gap-0 rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden hover:border-white/[0.14] transition-all duration-300 cursor-pointer"
                >
                  {/* Image panel */}
                  <div
                    className="relative md:w-72 h-52 md:h-auto shrink-0 flex items-center justify-center overflow-hidden"
                    style={{ background: p.accentDim }}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={220}
                      height={160}
                      className="object-contain h-32 w-auto group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>

                  {/* Content panel */}
                  <div className="flex flex-col flex-1 p-8 justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <p className="text-xs text-zinc-500 font-mono mb-1">{p.category}</p>
                          <h2 className="text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                            {p.name}
                          </h2>
                        </div>
                        {isLive ? (
                          <span
                            className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border"
                            style={{
                              color: p.accentColor,
                              borderColor: `${p.accentColor}30`,
                              background: `${p.accentColor}10`,
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            Live
                          </span>
                        ) : (
                          <span className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-white/[0.08] text-zinc-500 bg-white/[0.03]">
                            <Clock size={10} />
                            In development
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">{p.summary}</p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {isLive ? "View app" : "Learn more"}
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coming soon note ─────────────────────────────── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container max-w-2xl text-center">
          <p className="text-sm text-zinc-500 mb-2">More in the pipeline</p>
          <h3 className="text-2xl font-bold text-white mb-4">We build block by block.</h3>
          <p className="text-zinc-400 leading-relaxed">
            Every Calibrx app starts with a clear accountability gap. We don't build features — we build solutions to specific problems, then ship them when they're ready.
          </p>
        </div>
      </section>
    </div>
  );
}
