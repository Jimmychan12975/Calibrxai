import Link from "next/link";

export const metadata = {
  title: "Calipet",
  description: "Calipet — a playful AI companion with a fresh, nature-inspired vibe.",
};

export default function CalipetPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative container py-20">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block text-xs font-semibold tracking-wide text-[--color-secondary]">Product</span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">Calipet</h1>
            <p className="mt-3 text-lg text-[--color-text-muted]">A cheerful AI companion that makes daily tasks more delightful—with friendly prompts, micro-achievements, and calm nature-inspired visuals.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/products" className="inline-flex items-center rounded-md border border-black/10 px-4 py-2 font-medium">Back to Products</Link>
              <a href="#" className="inline-flex items-center rounded-md bg-[--color-primary] text-white px-4 py-2 font-medium hover:opacity-90">Visit Calipet</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-[--color-muted] p-6">
          <h3 className="font-semibold mb-2">Playful by design</h3>
          <p className="text-sm text-[--color-text-muted]">Gentle motion and positive feedback loops keep you engaged without overwhelming.</p>
        </div>
        <div className="rounded-xl bg-[--color-muted] p-6">
          <h3 className="font-semibold mb-2">Green, calm palette</h3>
          <p className="text-sm text-[--color-text-muted]">Nature-inspired greens promote a feeling of freshness and focus.</p>
        </div>
        <div className="rounded-xl bg-[--color-muted] p-6">
          <h3 className="font-semibold mb-2">Built block by block</h3>
          <p className="text-sm text-[--color-text-muted]">Composable components make it easy to evolve Calipet while keeping it reliable.</p>
        </div>
      </section>
    </div>
  );
} 