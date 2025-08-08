import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container py-24 sm:py-32">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/90 px-3 py-1 text-xs text-gray-700 mb-4">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-accent)" }} />
              Building AI-powered products, block by block.
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">Calibrx AI</h1>
            <p className="mt-4 text-lg text-[--color-text-muted]">We design and build modular, AI-powered products that solve real problems with precision and care.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-[--color-accent] text-white px-6 py-3 font-semibold hover:bg-[--color-primary] transition-colors shadow-lg">Discover Our Products</Link>
              <Link href="/about" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-5 py-3 font-medium hover:border-[--color-primary]">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Our Approach</h2>
        <p className="mt-3 text-[--color-text-muted] max-w-3xl">We build AI block by block—small, reliable components that are composable and scalable. This lets us ship faster, iterate safely, and deliver products that feel simple, precise, and dependable.</p>
      </section>

      <section className="container py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Products</h2>
          <Link href="/products" className="text-sm font-medium text-[--color-primary]">View all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductCard
            title="Calipet"
            description="A playful companion app bringing AI to your daily routine with friendly interactions and nature-inspired vibes."
            href="/products/calipet"
            tag="Live"
            accent="secondary"
          />
          <ProductCard
            title="Coming Soon"
            description="We are prototyping our next AI modules—stay tuned for more."
            href="/products"
            tag="R&D"
            accent="primary"
            comingSoon
          />
        </div>
      </section>
    </div>
  );
}
