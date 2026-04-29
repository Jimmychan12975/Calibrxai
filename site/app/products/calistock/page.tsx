import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, Clock, Lock, BarChart2, MessageSquare, Trophy, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Calistock — Calibrx AI",
  description:
    "Calistock is an AI-powered investment simulation platform. Chat with AI, simulate risk-free trades with verified market data, and share your track record.",
};


const pillars = [
  {
    icon: MessageSquare,
    title: "AI Strategy Sessions",
    description:
      "Chat freely about any stock idea. The AI helps you think through entry logic, risk, and exit targets — without telling you what to do.",
  },
  {
    icon: Lock,
    title: "Tamper-Proof Results",
    description:
      "Entry and exit prices are auto-calculated from official market data. No editing after the fact. Every result is real and immutable.",
  },
  {
    icon: BarChart2,
    title: "Verified Performance Tickets",
    description:
      "Closed trades become permanent records: symbol, dates, prices, P&L, and the full AI session transcript that led to the trade.",
  },
  {
    icon: Trophy,
    title: "Public Leaderboard",
    description:
      "Eligible trades are ranked by % return. Sprint (3–7 days) and Standard (3–30 days) tracks. Curiosity about top trades unlocks the strategy behind them.",
  },
  {
    icon: Users,
    title: "Community Feed",
    description:
      "Share your closed trades as public strategy posts — including the full AI conversation. Build a credible track record anyone can verify.",
  },
  {
    icon: Clock,
    title: "Daily Challenge",
    description:
      "Every day the AI generates a themed stock challenge. Submit your pick before market open, check results after 3 days, build your streak.",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    features: [
      "3 AI sessions / month",
      "2 active positions",
      "15 stocks followed",
      "5 public posts / month",
    ],
    cta: "Get early access",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19.99",
    period: "/mo",
    features: [
      "30 AI sessions / month",
      "10 active positions",
      "100 stocks followed",
      "30 public posts / month",
      "2 unlock credits / month",
      "Discounted credit bundles",
    ],
    cta: "Get early access",
    highlighted: true,
  },
];

export default function CalistockPage() {
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
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-amber-500/30 text-amber-400 bg-amber-500/10 mb-6">
                <Clock size={10} />
                In Development · iOS
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
                Calistock
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6 max-w-md">
                The investment simulation platform where every trade is AI-assisted, every result is verified, and every strategy is transparent.
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-md border-l-2 border-white/10 pl-4">
                No real money. No hidden results. Chat with AI, simulate the trade, lock the price to real market data — and let the numbers speak for themselves.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  Get early access
                </Link>
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/[0.08] text-zinc-500 text-sm font-mono">
                  Coming soon
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/5 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden">
                <Image
                  src="/Calistock_Market_1.jpg"
                  alt="Calistock — Master the Markets with AI"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The problem ──────────────────────────────────── */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="container max-w-4xl">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-5">The Problem</p>
          <h2 className="text-4xl font-bold mb-10 leading-tight">
            Great ideas. Zero accountability.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Ideas without records",
                description:
                  "People share investment theses on social media with no way to verify whether those calls actually worked.",
              },
              {
                title: "AI without verification",
                description:
                  "AI tools generate investment ideas constantly. No mechanism exists to track whether those ideas performed.",
              },
              {
                title: "No credible track record",
                description:
                  "There's no standardized, tamper-proof way for individual investors to prove their performance history.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="container">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-5">Features</p>
          <h2 className="text-4xl font-bold mb-14">Everything you need to prove your edge</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] hover:border-white/[0.14] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden">
              <Image
                src="/Calistock_Market_3.jpg"
                alt="Calistock — Active Positions and AI Insights"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">What it looks like in practice</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Active positions show live P&L, eligibility status for the leaderboard, and an AI-generated daily update — all tied to verified market close data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────── */}
      <section className="py-24 border-b border-white/[0.06]">
        <div className="container">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-5">Pricing</p>
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-zinc-400 mb-14 max-w-lg">
            Unlock credits let you view the AI session behind any top strategy on the leaderboard. Creators earn credits when their strategies are unlocked.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-7 rounded-2xl border ${
                  tier.highlighted
                    ? "border-amber-500/30 bg-amber-500/[0.05]"
                    : "border-white/[0.08] bg-[#111111]"
                }`}
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-zinc-500 text-sm">{tier.period}</span>}
                </div>
                <p className="text-sm font-semibold text-white mb-6">{tier.name}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-zinc-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-2.5 text-center text-sm font-semibold rounded-lg transition-colors ${
                    tier.highlighted
                      ? "bg-white text-black hover:bg-zinc-100"
                      : "border border-white/[0.10] text-zinc-300 hover:text-white hover:border-white/20"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-xs text-zinc-600 mt-6 max-w-sm">
            Unlock credits: 3 for $14.99 · 5 for $24.99. Purchased credits never expire. Creators earn 1 credit per unlock of their strategy.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Be first when we launch</h2>
          <p className="text-zinc-400 mb-8">
            Calistock is in active development. Reach out to get early access or learn more about our progress.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Get early access
          </Link>
        </div>
      </section>
    </div>
  );
}
