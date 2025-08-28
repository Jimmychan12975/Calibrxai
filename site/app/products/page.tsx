import Link from "next/link";
import { products } from "@/lib/products";

export const metadata = {
  title: "Products",
  description: "Explore AI-powered products by Calibrx AI.",
};

export default function ProductsPage() {
  return (
    <section className="services">
      <div className="services-header">
        <h1 className="section-title">Our Products</h1>
        <p>Our growing suite of AI products is built with a modular philosophy—each block designed to be robust and composable.</p>
      </div>

      <div className="services-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {products.map((p) => (
          <div key={p.slug} className="service-card">
            <div className="service-image" style={{ padding: 0, height: 300 }}>
              {p.image ? (
                <img src={p.image} alt={`${p.name} cover`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              ) : (
                <i className="ri-stack-line" />
              )}
            </div>
            <div className="service-content">
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              {p.href && p.href !== "#" ? (
                <Link href={p.href} className="service-link">Explore <i className="ri-arrow-right-line" /></Link>
              ) : (
                <span className="service-link" style={{ opacity: 0.6, cursor: "default" }}>Coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}