export const metadata = {
  title: "Terms & Conditions | Calibrx AI",
  description: "Official Terms of Service and usage protocols for Calibrx AI and Calipet.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container px-4 relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-sm"></span>
            DOC_REF: TERMS_V1.0
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-zinc-500 font-mono text-sm">
            <strong>EFFECTIVE DATE:</strong> AUGUST 7, 2025
          </p>
        </div>

        {/* Legal Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          
          <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
            These Terms of Service ("Terms") govern your access to and use of mobile applications, websites, and
            services operated by <strong className="text-white">Calibrx AI</strong> ("Calibrx," "we," "us," or "our"), including the
            <strong className="text-white"> Calipet</strong> mobile application (collectively, the "Services").
          </p>
          
          <div className="p-6 bg-white/5 border-l-4 border-cyan-500 rounded-r-xl mb-12">
            <p className="text-zinc-300 m-0">
              <strong>User Agreement:</strong> By using the Services, you agree to these Terms. If you do not agree, please stop using the Services immediately.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">01.</span> Eligibility
          </h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>You must be at least <strong>13 years old</strong> to use the Services.</li>
            <li>If you are under the age of majority in your jurisdiction, your parent or legal guardian must review and agree to these Terms on your behalf.</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">02.</span> Accounts
          </h2>
          <p className="text-zinc-400 mb-4">You are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Maintaining the confidentiality of your login credentials.</li>
            <li>All activity under your account.</li>
            <li>Providing accurate and current information.</li>
          </ul>
          <p className="text-zinc-400 mt-4">
            We may suspend or terminate accounts that violate these Terms, pose a security risk, or misuse the Services.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">03.</span> Acceptable Use
          </h2>
          <p className="text-zinc-400 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Cheat, exploit, or manipulate game systems (e.g., submitting fake scans to gain rewards).</li>
            <li>Interfere with the operation of the Services.</li>
            <li>Engage in unlawful, harmful, or infringing activity.</li>
            <li>Reverse-engineer, scrape, or attempt to access restricted areas of the Services.</li>
            <li>Upload malware or harmful code.</li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">04.</span> User Content & License
          </h2>
          <p className="text-zinc-400 mb-4">If you upload or submit content (such as photos, profile information, or data inputs):</p>
          <div className="space-y-4 text-zinc-400">
            <p><strong className="text-white">4.1</strong> You retain ownership of your content.</p>
            <p>
              <strong className="text-white">4.2</strong> You grant Calibrx a limited license: A worldwide, non-exclusive, royalty-free license to host, store, process, reproduce, and display your content solely to operate, improve, and secure the Services.
            </p>
            <p><strong className="text-white">4.3</strong> You represent and warrant that you have the rights to submit the content and it does not infringe the rights of others.</p>
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">05.</span> Virtual Items & Purchases
          </h2>
          <p className="text-zinc-400 mb-4">
            The Services may offer virtual currency (e.g., "Diamonds"), virtual goods, characters, cosmetics, and game features. These items:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Have no real-world monetary value.</li>
            <li>Are non-transferable.</li>
            <li>Cannot be exchanged for real currency or goods.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Digital Purchases</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400">
            <li>All purchases, including subscriptions, are final and non-refundable unless required by law.</li>
            <li>Payments processed by the Apple App Store or Google Play Store are governed by those platforms' terms.</li>
            <li>Refunds and subscription management must be handled through your Apple or Google account settings.</li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">06.</span> Subscription Terms
          </h2>
          <p className="text-zinc-400 mb-4">If the Services include auto-renewing subscriptions:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Subscriptions renew automatically unless canceled at least 24 hours before the end of the billing period.</li>
            <li>Your Apple ID or Google Play account is charged upon confirmation of purchase.</li>
            <li>You may manage or cancel your subscription through your device's account settings.</li>
          </ul>

          {/* Section 7 - Calipet Specific */}
          <div className="mt-12 p-8 bg-zinc-900 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6 font-display flex items-center gap-3">
              <span className="text-green-500 font-mono text-sm">07.</span> Health & Nutrition Disclaimer
            </h2>
            <p className="text-zinc-400 mb-4">
              Calipet may generate calorie estimates, nutrition breakdowns, or recommendations using AI. This information:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-green-500 text-zinc-400 mb-6">
              <li>Is for informational purposes only.</li>
              <li>May be incomplete or inaccurate.</li>
              <li>Is <strong className="text-white">not</strong> a substitute for professional medical or dietary advice.</li>
            </ul>
            <p className="text-zinc-400 italic">
              Always consult a qualified health professional before making dietary or health-related decisions.
            </p>
          </div>

          {/* Section 8 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">08.</span> AI-Generated Content
          </h2>
          <p className="text-zinc-400 mb-4">
            Some features rely on third-party AI providers. AI outputs may be inaccurate or unreliable and should not be considered professional advice. You use them at your own risk.
          </p>

          {/* Section 9 & 10 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">09.</span> Intellectual Property
          </h2>
          <p className="text-zinc-400 mb-4">
            The Services—including all software, graphics, designs, trademarks, and characters—are owned by Calibrx or our licensors. All rights reserved.
          </p>

          {/* Contact Section */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 font-display">Contact Protocol</h2>
            <p className="text-zinc-400 mb-4">
              For legal inquiries or DMCA notices, please initiate communication at:
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