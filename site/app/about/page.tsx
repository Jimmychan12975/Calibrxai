import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Calibrx AI",
  description: "Learn about Calibrx AI — our mission, philosophy, and the team behind the apps.",
};

const values = [
  {
    title: "Engineering-first thinking",
    description:
      "We treat human habits the way engineers treat systems — with measurement, feedback loops, and real-time correction. No guesswork.",
  },
  {
    title: "Accountability by design",
    description:
      "Every app we build closes an accountability gap. Verified results, not just logs. Track records, not just intentions.",
  },
  {
    title: "Honest product development",
    description:
      "We ship when things are ready. We don't over-promise or add features for the sake of it. Every decision serves the user.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-36 pb-24 border-b border-white/[0.06]">
        <div className="container max-w-4xl">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-5">About Calibrx AI</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Built to close<br />
            <span className="text-zinc-400">accountability gaps.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            We're a small team building AI apps that make everyday decisions — health, finance, and beyond — more transparent and more honest about results.
          </p>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────── */}
      <section className="py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-5">Our Mission</p>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Engineering precision,<br />applied to life.</h2>
              <div className="space-y-5 text-zinc-400 leading-relaxed">
                <p>
                  Our founder, Jimmy, spent years working in high-precision engineering systems. He kept noticing the same pattern: the most complex machinery in the world uses constant feedback loops to stay calibrated. Humans don't.
                </p>
                <p>
                  We're building Calibrx AI to change that — applying the same rigor we use for technical systems to the habits, decisions, and results that define our daily lives.
                </p>
                <p>
                  Our first app, <Link href="/products/calipet" className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors">Calipet</Link>, brings this philosophy to nutrition. Our second, <Link href="/products/calistock" className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors">Calistock</Link>, brings it to investing.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]"
                >
                  <h3 className="text-sm font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ──────────────────────────────────────── */}
      <section className="py-28 border-t border-white/[0.06]">
        <div className="container max-w-3xl">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-12">Founder</p>
          <div className="flex items-start gap-6 mb-10">
            <div className="w-14 h-14 rounded-xl bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center text-sm font-bold text-zinc-300 shrink-0">
              JC
            </div>
            <div>
              <p className="text-lg font-bold text-white">Jimmy Chan</p>
              <p className="text-sm text-zinc-500">Founder & Engineer · Calibrx AI</p>
              <p className="text-sm text-zinc-500">jimmychan@calibrxai.com</p>
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-snug border-l-2 border-white/20 pl-8">
            "I started Calibrx because I saw a missing link — not in technology, but in accountability. We have tools that track. We don't have tools that verify."
          </blockquote>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">See what we're building</h2>
          <p className="text-zinc-400 mb-8">
            Two apps. Both built around the same idea — that results should be visible, verified, and honest.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
          >
            View our apps <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
