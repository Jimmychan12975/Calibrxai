export const metadata = {
  title: "About",
  description: "Learn about Calibrx AI's story, vision, and values.",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">About Calibrx AI</h1>
      <p className="mt-3 text-[--color-text-muted] max-w-3xl">Calibrx AI builds modular, AI-powered products that are precise, reliable, and user-first. Our philosophy is simple: ship small, high-quality blocks that combine into delightful, scalable experiences.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold">Story & Vision</h2>
          <p className="mt-2 text-[--color-text-muted]">We started with a belief that great AI products should feel simple and trustworthy. By focusing on composable building blocks, we iterate quickly while maintaining a high bar for quality and safety.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Leadership</h2>
          <p className="mt-2 text-[--color-text-muted]">Calibrx AI is led by a small, hands-on team with experience across AI research, design, and product engineering.</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Core Values</h2>
        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <li className="rounded-lg bg-[--color-muted] p-4">
            <div className="font-semibold">Innovation</div>
            <div className="text-sm text-[--color-text-muted]">We experiment thoughtfully to find simple solutions to complex problems.</div>
          </li>
          <li className="rounded-lg bg-[--color-muted] p-4">
            <div className="font-semibold">Precision</div>
            <div className="text-sm text-[--color-text-muted]">We sweat the details that make products feel fast, consistent, and dependable.</div>
          </li>
          <li className="rounded-lg bg-[--color-muted] p-4">
            <div className="font-semibold">User-first</div>
            <div className="text-sm text-[--color-text-muted]">We design for clarity and calm so users can focus on what matters.</div>
          </li>
        </ul>
      </div>
    </div>
  );
} 