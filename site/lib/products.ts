export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  logo?: string;
  href: string;
  accentColor: string;
  accentDim: string;
  status: "live" | "development";
  category: string;
};

export const products: Product[] = [
  {
    slug: "calipet",
    name: "Calipet",
    tagline: "Gamified nutrition tracking.",
    summary:
      "Scan your meals with computer vision, earn XP, and evolve your virtual pet as you build real healthy habits.",
    image: "/Calipet_Hero_Image.webp",
    href: "/products/calipet",
    accentColor: "#10B981",
    accentDim: "rgba(16,185,129,0.12)",
    status: "live",
    category: "Health & Wellness",
  },
  {
    slug: "calistock",
    name: "Calistock",
    tagline: "AI-powered investment simulation.",
    summary:
      "Chat with AI about stock ideas, simulate risk-free paper trades with verified market data, and share your track record on a transparent leaderboard.",
    image: "/calistock_logo.png",
    logo: "/calistock_logo.png",
    href: "/products/calistock",
    accentColor: "#F59E0B",
    accentDim: "rgba(245,158,11,0.12)",
    status: "development",
    category: "Finance & Investing",
  },
];
