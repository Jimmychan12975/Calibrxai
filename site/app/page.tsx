import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container py-20 sm:py-28">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="max-w-2xl animate-fade-in relative z-10">
              {/* Removed subtle badge above heading for a cleaner hero */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance" style={{ letterSpacing: "-0.02em" }}>
                Building AI‑powered products
                <br />
                <span style={{ color: "#2563eb" }}>block by block</span>
              </h1>
              <p className="mt-4 text-lg text-[--color-text-muted]">
                We design modular, reliable AI systems that scale with your vision.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-md text-white px-6 py-3 text-base font-semibold shadow-lg hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary]"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Discover Our Products
                </Link>
                <Link
                  href="#approach"
                  className="inline-flex items-center justify-center rounded-md border px-5 py-3 font-medium text-[--color-primary] border-[--color-primary]/30 hover:border-[--color-primary] hover:bg-[--color-primary]/5 bg-white shadow-sm"
                >
                  Our Approach
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
                  alt="Abstract technology blocks"
                  className="block w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="container py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Our Approach</h2>
        <p className="mt-3 text-[--color-text-muted] max-w-3xl">We build AI block by block—small, reliable components that are composable and scalable. This lets us ship faster, iterate safely, and deliver products that feel simple, precise, and dependable.</p>
      </section>

      <section className="container py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Products</h2>
          <Link href="/products" className="text-sm font-medium text-[--color-primary]">View all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.slug}
              title={p.name}
              description={p.summary}
              href={p.theme === "calipet" ? p.href : "#"}
              imageSrc={p.slug === "calipet" ? p.image : undefined}
              imageAlt={`${p.name} cover`}
              accentColor={p.accentColor ?? "#0d9488"}
              ctaLabel={p.theme === "calipet" ? "Explore Calipet" : "Coming Soon"}
              comingSoon={p.slug !== "calipet"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
