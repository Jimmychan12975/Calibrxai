import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  tag?: string;
  accent?: "primary" | "secondary" | "accent";
  comingSoon?: boolean;
};

export default function ProductCard({ title, description, href, tag, accent = "primary", comingSoon }: Props) {
  const accentColor = {
    primary: "var(--brand-primary)",
    secondary: "var(--brand-secondary)",
    accent: "var(--brand-accent)",
  }[accent];

  return (
    <div className="group rounded-xl border border-black/10 dark:border-white/10 bg-surface p-6 shadow-sm hover:shadow transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        {tag && (
          <span className="text-xs px-2 py-1 rounded-full" style={{ background: `${accentColor}15`, color: accentColor }}>
            {tag}
          </span>
        )}
      </div>
      <p className="text-sm text-[--color-text-muted] mb-5">{description}</p>
      <div className="flex items-center justify-between">
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: accentColor }}>
          {comingSoon ? "Learn more" : "View product"}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 