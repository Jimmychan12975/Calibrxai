export type Product = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  href: string;
  accentColor?: string;
  theme?: "default" | "calipet";
};

export const products: Product[] = [
  {
    slug: "calipet",
    name: "Calipet",
    summary:
      "A playful AI companion that brings everyday delight through smart interactions.",
    image: "/playful-green-abstract-nature.png",
    href: "/products/calipet",
    accentColor: "#10b981",
    theme: "calipet",
  },
  {
    slug: "coming-soon",
    name: "Coming Soon",
    summary:
      "We're building the next block in our AI product stack. Stay tuned.",
    image: "",
    href: "#",
  },
]; 