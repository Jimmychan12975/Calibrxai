export const metadata = {
  title: "Cookie Policy | Calibrx AI",
  description: "Information about how Calibrx AI uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container px-4 relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-sm"></span>
            DOC_REF: COOKIE_V1.0
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-zinc-500 font-mono text-sm">
            <strong>EFFECTIVE DATE:</strong> AUGUST 7, 2025
          </p>
        </div>

        {/* Legal Content */}
        <div className="prose prose-invert prose-lg max-w-none">

          <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
             This Cookie Policy explains how <strong className="text-white">Calibrx AI</strong> ("Calibrx," "we," "us," or "our") uses cookies and similar technologies to recognize you when you visit our websites or use our applications, including <strong className="text-white">Calipet</strong>.
          </p>

          <div className="p-6 bg-white/5 border-l-4 border-cyan-500 rounded-r-xl mb-12">
            <p className="text-zinc-300 m-0">
              <strong>Summary:</strong> We use cookies to make our services work, understand how they are used, and improve your experience.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">01.</span> What Are Cookies?
          </h2>
          <p className="text-zinc-400 mb-4">
            Cookies are small text files that are placed on your device when you visit a website. They help websites function, improve
            user experience, and provide insights into how the site is being used. Similar technologies such as pixels, local storage,
            and SDKs may also be used and are collectively referred to as "cookies" in this policy.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">02.</span> Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-6 space-y-4 marker:text-cyan-500 text-zinc-400">
            <li>
              <strong className="text-white">Strictly Necessary Cookies:</strong> Required for core functionality such as page navigation and access to secure areas.
            </li>
            <li>
              <strong className="text-white">Performance & Analytics Cookies:</strong> Help us understand how visitors interact with the site (e.g., pages viewed, time on site) so we can improve usability and performance.
            </li>
            <li>
              <strong className="text-white">Functional Cookies:</strong> Remember preferences such as language, region, and previously selected settings.
            </li>
            <li>
              <strong className="text-white">Advertising/Targeting Cookies:</strong> Used by us or our partners to deliver relevant ads and measure their effectiveness. We do not show interest-based ads to children.
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">03.</span> How We Use Cookies
          </h2>
          <p className="text-zinc-400 mb-4">We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>To operate and secure the site and related services.</li>
            <li>To analyze traffic and usage trends to improve features and content.</li>
            <li>To remember your preferences and enhance your experience.</li>
            <li>To measure the effectiveness of marketing campaigns where applicable.</li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">04.</span> Third-Party Cookies
          </h2>
          <p className="text-zinc-400 mb-6">
            We may allow third-party service providers (e.g., analytics and measurement partners) to set cookies to help us understand
            site performance and deliver content. These providers have their own privacy and cookie policies, and we recommend reviewing
            them to understand how they process data.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">05.</span> Managing Cookies
          </h2>
          <p className="text-zinc-400 mb-4">
            You can manage or disable cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when
            cookies are being sent. If you block some types of cookies, certain features of the site may not function properly.
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Instructions for managing cookies can be found in your browser's help page (e.g., Chrome, Safari, Firefox, Edge).</li>
            <li>To opt out of certain analytics, some providers offer their own opt-out tools.</li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">06.</span> Do Not Track
          </h2>
          <p className="text-zinc-400 mb-6">
            Some browsers offer a "Do Not Track" (DNT) setting. There is no common understanding of how to interpret DNT signals, and we
            currently do not respond to them. We continue to monitor developments and may update our practices if standards emerge.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">07.</span> Changes to This Policy
          </h2>
          <p className="text-zinc-400 mb-6">
            We may update this Cookie Policy from time to time to reflect changes in technology, law, or our services. When we make
            material changes, we will take reasonable steps to notify you (e.g., updating the "Effective Date").
          </p>

          {/* Contact Section */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 font-display">Contact Us</h2>
            <p className="text-zinc-400 mb-4">
              If you have questions about this Cookie Policy, please contact us at:
            </p>
            <a href="mailto:legal@calibrxai.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-cyan-400 transition-colors">
              legal@calibrxai.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}