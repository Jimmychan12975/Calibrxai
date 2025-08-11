import Image from "next/image";
import Link from "next/link";

export type ProductCardProps = {
  title?: string;
  description?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  accentColor?: string;
  ctaLabel?: string;
  comingSoon?: boolean;
};

export default function ProductCard({
  title = "Product",
  description = "Short description of the product.",
  href = "#",
  imageSrc,
  imageAlt = "Product cover",
  accentColor = "#0d9488",
  ctaLabel = "View Product",
  comingSoon = false,
}: ProductCardProps) {
  const hasImage = Boolean(imageSrc);
  return (
    <div className="overflow-hidden h-full flex flex-col border border-black/10 dark:border-white/10 rounded-2xl bg-surface">
      <div className="relative aspect-[16/9] bg-gray-50">
        {hasImage ? (
          <Image src={imageSrc as string} alt={imageAlt} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-grid" />
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm text-[--color-text-muted]">{description}</p>
        </div>
        <div className="mt-auto">
          {comingSoon ? (
            <button className="w-full cursor-not-allowed rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm text-[--color-text-muted] bg-transparent" disabled>
              Coming Soon
            </button>
          ) : (
            <Link
              href={href}
              className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: accentColor }}
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 