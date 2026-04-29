import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, Download, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Calipet — Calibrx AI",
  description:
    "Calipet turns nutrition tracking into a game. Scan your food, earn XP, and evolve your virtual pet as you build real healthy habits.",
};

const features = [
  {
    title: "AI Food Scanner",
    description:
      "Point your camera at any meal. Computer vision identifies macro content — calories, protein, carbs, and fats — in seconds. No barcode hunting.",
    image: "/Calipet_Meal_Scanning_Feature.webp",
    accent: "#10B981",
  },
  {
    title: "Gamified Progression",
    description:
      "Hit your daily nutrition targets to earn XP. Level your virtual pet from Stage 1 to Stage 4. Consistency is rewarded — every single day.",
    image: "/Calipet_Character_Progression.webp",
    accent: "#10B981",
  },
  {
    title: "Nutrition Companion",
    description:
      "Your virtual pet mirrors your health state. Feed it well and it thrives. Neglect your habits and it shows. A simple, honest feedback loop.",
    image: "/Calipet_Hero_Image.webp",
    accent: "#10B981",
  },
  {
    title: "Positive Feedback Loop",
    description:
      "No shame. No streaks broken. Just forward momentum. Calipet turns boring habit tracking into something you actually want to open every day.",
    image: "/Calipet_Advertisement_Banner.webp",
    accent: "#10B981",
  },
];

export default function CalipetPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ── Breadcrumb ───────────────────────────────────── */}
      <div className="container pt-28 pb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Products
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pb-24 border-b border-white/[0.06]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live on App Store
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
                Calipet
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
                A precision nutrition engine disguised as a game. Scan your meals, earn XP, and evolve your virtual companion by building habits that actually stick.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://apps.apple.com/app/id6754895847"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  <Download size={15} />
                  Download on App Store
                </a>
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/[0.08] text-zinc-500 text-sm font-mono">
                  v1.0.0 · iOS
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden">
                <Image
                  src="/Calipet_Hero_Image.webp"
                  alt="Calipet App"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="container">
          <div className="mb-14">
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-4xl font-bold">How it works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden hover:border-white/[0.14] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-emerald-500/[0.06]">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="container max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 mb-6">
            Free to download
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Start building better habits today</h2>
          <p className="text-zinc-400 mb-8">Available on iOS. No subscription required to get started.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://apps.apple.com/app/id6754895847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
            >
              <Download size={15} />
              Download on App Store
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
