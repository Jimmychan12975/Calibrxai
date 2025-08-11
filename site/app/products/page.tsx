import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

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
    </div>
  );
} 