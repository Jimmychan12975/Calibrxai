"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/FadeInUp";
import ContactSection from "@/components/ContactSection";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const apps = [
  {
    name: "Calipet",
    tagline: "Gamified nutrition tracking",
    description:
      "Scan your meals with computer vision, earn XP, and evolve your virtual pet as you build real healthy habits. Available now on iOS.",
    image: "/Calipet_Hero_Image.webp",
    href: "/products/calipet",
    accent: "#10B981",
    accentDim: "rgba(16,185,129,0.08)",
    status: "Live on App Store",
    statusColor: "#10B981",
    appStore: "https://apps.apple.com/app/id6754895847",
    features: ["AI food scanner", "XP & level system", "Virtual pet companion"],
  },
  {
    name: "Calistock",
    tagline: "AI investment simulation",
    description:
      "Chat with AI about stock ideas, simulate risk-free paper trades locked to real market data, and share your verified performance on a transparent leaderboard.",
    image: "/calistock_logo.png",
    href: "/products/calistock",
    accent: "#F59E0B",
    accentDim: "rgba(245,158,11,0.08)",
    status: "Coming Soon",
    statusColor: "#F59E0B",
    appStore: null,
    features: ["AI strategy sessions", "Verified paper trading", "Public leaderboard"],
  },
];

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 text-center">
          <FadeInUp delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-xs font-mono text-zinc-400 mb-8">
              Calibrx AI · Est. 2024
            </div>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              AI apps built for<br />
              <span className="text-zinc-400">how you actually live.</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10">
              We build intelligent apps that make everyday decisions — health, finance, and beyond — sharper, faster, and more accountable.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.55}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/products"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
              >
                Explore apps <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 px-6 py-3 border border-white/[0.10] text-zinc-300 text-sm font-medium rounded-lg hover:border-white/20 hover:text-white transition-all"
              >
                Our story
              </Link>
            </div>
          </FadeInUp>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ── Apps ─────────────────────────────────────────── */}
      <section id="apps" className="py-32 border-t border-white/[0.06]">
        <div className="container">
          <FadeInUp className="mb-16">
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-3">Our Apps</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Two apps. One mission.</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {apps.map((app, i) => (
              <FadeInUp key={app.name} delay={i * 0.1}>
                <div
                  className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden hover:border-white/[0.14] transition-all duration-300 h-full"
                  style={{ "--app-accent": app.accent } as React.CSSProperties}
                >
                  {/* Top image area */}
                  <div
                    className="relative h-56 flex items-center justify-center overflow-hidden"
                    style={{ background: app.accentDim }}
                  >
                    <Image
                      src={app.image}
                      alt={app.name}
                      width={280}
                      height={200}
                      className="object-contain h-40 w-auto group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Status */}
                    <div className="absolute top-4 right-4">
                      <span
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border"
                        style={{
                          color: app.statusColor,
                          borderColor: `${app.statusColor}30`,
                          background: `${app.statusColor}10`,
                        }}
                      >
                        {app.status === "Live on App Store" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        )}
                        {app.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-7">
                    <div className="mb-1">
                      <p className="text-xs text-zinc-500 font-mono mb-1">{app.tagline}</p>
                      <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-3 mb-6">{app.description}</p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {app.features.map((f) => (
                        <span
                          key={f}
                          className="px-2.5 py-1 rounded-full text-xs border border-white/[0.07] text-zinc-400 bg-white/[0.03]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex items-center gap-4">
                      <Link
                        href={app.href}
                        className="flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                      >
                        Learn more <ArrowRight size={14} />
                      </Link>
                      {app.appStore && (
                        <a
                          href={app.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-100 transition-colors"
                        >
                          Download <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────── */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeInUp>
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-4">Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                Habits drift.<br />We calibrate them.
              </h2>
              <div className="space-y-5 text-zinc-400 leading-relaxed">
                <p>
                  In precision engineering, equipment drifts over time. Nanometer deviations compound until the whole system fails. The fix isn't willpower — it's a feedback loop.
                </p>
                <p>
                  Humans are the same. Our habits degrade without constant correction. We built Calibrx to be that loop — intelligent, frictionless, and honest about results.
                </p>
                <p className="text-zinc-300">
                  Every app we ship closes a real accountability gap. We don't track for tracking's sake — we track so you can improve.
                </p>
              </div>
            </FadeInUp>

            {/* Stats / Values */}
            <FadeInUp delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Founded", value: "2024" },
                  { label: "Apps launched", value: "1" },
                  { label: "Apps in development", value: "1" },
                  { label: "Approach", value: "Engineering-first" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]"
                  >
                    <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                    <p className="text-xs text-zinc-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section className="border-t border-white/[0.06]">
        <ContactSection />
      </section>
    </div>
  );
}
