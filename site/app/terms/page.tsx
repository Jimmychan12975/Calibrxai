import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Calibrx AI",
  description: "Terms of Service for Calibrx AI, Calipet, and Calistock.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-300 pt-32 pb-24">
      <div className="container max-w-3xl">

        {/* Header */}
        <div className="mb-14 pb-10 border-b border-white/[0.06]">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-5xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-sm text-zinc-500">Effective date: August 7, 2025</p>
        </div>

        <div className="[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-zinc-400 text-[15px] leading-relaxed">

          <p className="text-zinc-400 mb-8">
            These Terms of Service ("Terms") govern your access to and use of mobile applications, websites, and services
            operated by <strong className="text-white">Calibrx AI</strong> ("Calibrx," "we," "us," or "our") — including
            <strong className="text-white"> Calipet</strong> and <strong className="text-white">Calistock</strong> (collectively, the "Services").
          </p>

          <div className="p-5 bg-white/[0.04] border-l-2 border-white/20 rounded-r-xl mb-12">
            <p className="text-zinc-300 m-0">
              <strong>Agreement:</strong> By using the Services, you agree to these Terms. If you do not agree, please stop using the Services immediately.
            </p>
          </div>

          <S n="01" title="Eligibility">
            <ul>
              <li>You must be at least <strong className="text-white">13 years old</strong> to use the Services.</li>
              <li>If you are under the age of majority in your jurisdiction, your parent or legal guardian must review and agree to these Terms on your behalf.</li>
            </ul>
          </S>

          <S n="02" title="Accounts">
            <p className="text-zinc-400 mb-3">You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activity under your account</li>
              <li>Providing accurate and current information</li>
            </ul>
            <p className="text-zinc-400 mt-4">
              We may suspend or terminate accounts that violate these Terms, pose a security risk, or misuse the Services.
            </p>
          </S>

          <S n="03" title="Acceptable Use">
            <p className="text-zinc-400 mb-3">You agree not to:</p>
            <ul>
              <li>Cheat, exploit, or manipulate game systems (e.g., submitting fake food scans to gain rewards in Calipet)</li>
              <li>Attempt to manipulate, falsify, or circumvent trade verification systems in Calistock</li>
              <li>Interfere with the operation of the Services</li>
              <li>Engage in unlawful, harmful, or infringing activity</li>
              <li>Reverse-engineer, scrape, or attempt to access restricted areas of the Services</li>
              <li>Upload malware or harmful code</li>
            </ul>
          </S>

          <S n="04" title="User Content & License">
            <p className="text-zinc-400 mb-4">If you upload or submit content (photos, chat messages, trade posts, profile information, or other inputs):</p>
            <div className="space-y-3 text-zinc-400">
              <p><strong className="text-white">4.1</strong> You retain ownership of your content.</p>
              <p><strong className="text-white">4.2</strong> You grant Calibrx a worldwide, non-exclusive, royalty-free license to host, store, process, reproduce, and display your content solely to operate, improve, and secure the Services.</p>
              <p><strong className="text-white">4.3</strong> You represent and warrant that you have the rights to submit the content and it does not infringe the rights of others.</p>
              <p><strong className="text-white">4.4</strong> For Calistock: when you publish a trade ticket or strategy post to the public community feed or leaderboard, that content becomes visible to other users and cannot be edited or retracted after publication.</p>
            </div>
          </S>

          <S n="05" title="Virtual Items & Purchases">
            <p className="text-zinc-400 mb-3">
              The Services may offer virtual currency, virtual goods, characters, cosmetics, and premium features. These items:
            </p>
            <ul>
              <li>Have no real-world monetary value</li>
              <li>Are non-transferable</li>
              <li>Cannot be exchanged for real currency or goods</li>
            </ul>

            <div className="mt-5">
              <h3 className="text-sm font-semibold text-white mb-3">Digital Purchases & Subscriptions</h3>
              <ul>
                <li>All purchases, including subscriptions, are final and non-refundable unless required by law.</li>
                <li>Payments processed by the Apple App Store or Google Play Store are governed by those platforms' terms.</li>
                <li>Refunds and subscription management must be handled through your Apple or Google account settings.</li>
                <li>Subscriptions renew automatically unless canceled at least 24 hours before the end of the billing period.</li>
              </ul>
            </div>
          </S>

          {/* Calistock Credits */}
          <S n="06" title="Calistock — Unlock Credits">
            <p className="text-zinc-400 mb-3">
              Calistock uses an unlock credit system that allows users to view the AI session transcript behind any published strategy on the leaderboard.
            </p>
            <ul>
              <li>Credits are purchased in bundles and never expire.</li>
              <li>Subscription plans include a monthly credit allowance that resets each billing cycle.</li>
              <li>1 credit is charged per strategy unlock.</li>
              <li>Creators earn 1 credit when another user unlocks their published strategy. Credits earned this way have no cash value and cannot be withdrawn.</li>
              <li>Self-unlock of your own strategies is not permitted.</li>
              <li>Credit purchases are final and non-refundable.</li>
            </ul>
          </S>

          {/* Calistock Simulation */}
          <S n="07" title="Calistock — Investment Simulation Disclaimer" highlight>
            <p className="text-zinc-400 mb-4">
              Calistock is a <strong className="text-white">simulation and learning platform only</strong>. It does not involve real money, real securities, or real brokerage accounts.
            </p>
            <ul className="mb-4">
              <li>All trades are paper trades using simulated capital ($10,000 notional per position).</li>
              <li>Entry and exit prices are locked to official daily market close data from third-party data providers. They cannot be manually set or edited by users or Calibrx.</li>
              <li>Positions have a minimum 3-trading-day hold period before a sell can be executed.</li>
              <li>Performance tickets generated after a trade closes are permanent and cannot be altered.</li>
              <li>AI-generated investment ideas, strategy suggestions, and analysis are for educational and entertainment purposes only. They are <strong className="text-white">not financial advice</strong>.</li>
            </ul>
            <p className="text-zinc-400 italic">
              Nothing in Calistock constitutes investment advice, a recommendation to buy or sell any security, or an offer to engage in any investment activity. Always consult a qualified financial professional before making real investment decisions.
            </p>
          </S>

          {/* Calistock Anti-Gaming */}
          <S n="08" title="Calistock — Integrity Rules">
            <p className="text-zinc-400 mb-3">To maintain a fair and trustworthy leaderboard, the following rules are enforced:</p>
            <ul>
              <li>Entry prices are auto-locked to official market close data — no manual override is possible.</li>
              <li>Exit prices are calculated server-side from the next trading day close after a sell is submitted.</li>
              <li>Trade records, tickets, and performance posts cannot be edited after creation.</li>
              <li>Minimum hold periods are enforced server-side.</li>
              <li>Leaderboard eligibility windows are enforced server-side.</li>
              <li>All pricing logic runs on the backend — the mobile app does not calculate prices locally.</li>
              <li>Accounts found attempting to manipulate, circumvent, or exploit any of these systems may be suspended or permanently banned.</li>
            </ul>
          </S>

          {/* Health disclaimer */}
          <S n="09" title="Calipet — Health & Nutrition Disclaimer" highlight>
            <p className="text-zinc-400 mb-4">
              Calipet may generate calorie estimates, nutrition breakdowns, or recommendations using AI. This information:
            </p>
            <ul className="mb-4">
              <li>Is for informational purposes only</li>
              <li>May be incomplete or inaccurate</li>
              <li>Is <strong className="text-white">not</strong> a substitute for professional medical or dietary advice</li>
            </ul>
            <p className="text-zinc-400 italic">
              Always consult a qualified health professional before making dietary or health-related decisions.
            </p>
          </S>

          <S n="10" title="AI-Generated Content">
            <p className="text-zinc-400">
              Some features rely on third-party AI providers. AI outputs across all Services may be inaccurate or unreliable and should not be considered professional advice of any kind — medical, nutritional, financial, or otherwise. You use AI-generated content at your own risk.
            </p>
          </S>

          <S n="11" title="Intellectual Property">
            <p className="text-zinc-400">
              The Services — including all software, graphics, designs, trademarks, characters, and AI models — are owned by Calibrx or our licensors. All rights reserved. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </S>

          <S n="12" title="Disclaimers & Limitation of Liability">
            <p className="text-zinc-400 mb-3">
              THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, CALIBRX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED.
            </p>
            <p className="text-zinc-400">
              CALIBRX WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICES, INCLUDING ANY RELIANCE ON AI-GENERATED CONTENT OR SIMULATED INVESTMENT RESULTS.
            </p>
          </S>

          <S n="13" title="Changes to These Terms">
            <ul>
              <li>We may update these Terms periodically.</li>
              <li>Material updates will be communicated through an updated "Effective Date," in-app notifications, or email where applicable.</li>
              <li>Continued use of the Services after updates constitutes acceptance.</li>
            </ul>
          </S>

          {/* Contact */}
          <div className="mt-20 pt-12 border-t border-white/[0.06]">
            <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
            <p className="text-zinc-400 mb-5">For legal inquiries or DMCA notices:</p>
            <a
              href="mailto:legal@calibrxai.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg text-zinc-300 text-sm transition-colors"
            >
              legal@calibrxai.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

function S({ n, title, children, highlight }: { n: string; title: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`mt-14 ${highlight ? "p-6 bg-white/[0.03] border border-white/[0.08] rounded-xl" : ""}`}>
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-zinc-600 font-mono text-sm">{n}.</span>
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
