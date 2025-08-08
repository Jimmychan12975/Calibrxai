import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Products",
  description: "Explore AI-powered products by Calibrx AI.",
};

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Products</h1>
      <p className="mt-2 text-[--color-text-muted] max-w-2xl">Our growing suite of AI products is built with a modular philosophy—each block designed to be robust and composable.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
          href="#"
          tag="R&D"
          accent="primary"
          comingSoon
        />
      </div>
    </div>
  );
} 