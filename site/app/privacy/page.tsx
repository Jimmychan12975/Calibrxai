import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Calibrx AI",
  description: "Privacy Policy for Calibrx AI, Calipet, and Calistock.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-300 pt-32 pb-24">
      <div className="container max-w-3xl">

        {/* Header */}
        <div className="mb-14 pb-10 border-b border-white/[0.06]">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-5xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-sm text-zinc-500">Effective date: August 7, 2025</p>
        </div>

        <div className="space-y-0 text-[15px] leading-relaxed">

          <p className="text-zinc-400 mb-8">
            This Privacy Policy explains how <strong className="text-white">Calibrx AI</strong> ("Calibrx," "we," "us," or "our") collects,
            uses, shares, and protects information when you use our mobile applications, websites, and services —
            including <strong className="text-white">Calipet</strong> and <strong className="text-white">Calistock</strong> (collectively, the "Services").
          </p>

          <div className="p-5 bg-white/[0.04] border-l-2 border-white/20 rounded-r-xl mb-12">
            <p className="text-zinc-300 m-0">
              <strong>Agreement:</strong> By using the Services, you agree to the practices described in this Policy. If you do not agree, please do not use the Services.
            </p>
          </div>

          {/* Section 1 */}
          <Section number="01" title="Information We Collect">
            <SubSection title="1.1 Account Information">
              <ul>
                <li>Email address</li>
                <li>Profile information you choose to provide (e.g., username, avatar, preferences)</li>
                <li>We do not collect your real name unless you choose to provide it.</li>
              </ul>
            </SubSection>

            <SubSection title="1.2 Health & Nutrition Data (Calipet)">
              <p className="text-zinc-400 mb-2">Calipet allows you to enter or generate:</p>
              <ul>
                <li>Food logs and meal history</li>
                <li>AI-generated calorie and nutrition estimates</li>
                <li>Macros and nutrient breakdowns</li>
                <li>Weight or other health-related entries</li>
              </ul>
              <Note>This data is collected only to provide core app functionality.</Note>
            </SubSection>

            <SubSection title="1.3 Photos & User Uploads (Calipet)">
              <ul>
                <li>Meal photos submitted for AI recognition</li>
                <li>Other content you upload to the app</li>
              </ul>
              <Note>Photos are uploaded to Firebase Storage and used only for food analysis.</Note>
            </SubSection>

            <SubSection title="1.4 Investment & Trading Data (Calistock)">
              <p className="text-zinc-400 mb-2">Calistock collects information related to your simulated trading activity:</p>
              <ul>
                <li>Stock symbols, simulated entry and exit prices, and trade dates</li>
                <li>AI chat session content (your investment discussion transcripts)</li>
                <li>Closed trade performance tickets (return %, holding duration, profit/loss)</li>
                <li>Unlock credit balances and transaction history</li>
                <li>Leaderboard entries and public strategy posts you choose to share</li>
                <li>Daily Challenge picks and results</li>
              </ul>
              <Note>All trade data reflects simulated paper trades only. No real money or brokerage accounts are involved.</Note>
            </SubSection>

            <SubSection title="1.5 Usage & Device Data">
              <p className="text-zinc-400 mb-2">Automatically collected through Firebase and analytics tools:</p>
              <ul>
                <li>App interactions and feature usage</li>
                <li>Screen views and session data</li>
                <li>Device model, OS version, IP address, language settings</li>
                <li>Crash logs and performance metrics</li>
              </ul>
            </SubSection>

            <SubSection title="1.6 In-App Purchases & Credits">
              <ul>
                <li>Subscription status (active, expired) and purchase receipts</li>
                <li>Unlock credit purchases and balances (Calistock)</li>
                <li>We do not receive full payment details — these are handled by Apple or Google.</li>
              </ul>
            </SubSection>

            <SubSection title="1.7 Communications">
              <p className="text-zinc-400 mb-2">If you contact us, we collect:</p>
              <ul>
                <li>Email messages, feedback, and support requests</li>
              </ul>
            </SubSection>
          </Section>

          {/* Section 2 */}
          <Section number="02" title="How We Use Information">
            <p className="text-zinc-400 mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400">
              <li>Operate, maintain, and improve the Services</li>
              <li>Provide nutrition estimates, calorie analysis, and personalized insights (Calipet)</li>
              <li>Facilitate simulated trades, verify performance data using market prices, and display leaderboard results (Calistock)</li>
              <li>Process AI chat sessions and link them to trade records (Calistock)</li>
              <li>Manage unlock credits, subscriptions, and account access</li>
              <li>Prevent fraud, manipulation, and misuse (e.g., fake scans, trade data tampering)</li>
              <li>Diagnose crashes and enhance performance</li>
              <li>Send important service or policy updates</li>
              <li>Generate anonymized analytics for product improvement</li>
            </ul>
          </Section>

          {/* Section 3 */}
          <Section number="03" title="AI Processing" highlight>
            <p className="text-zinc-400 mb-4">
              Both Calipet and Calistock use third-party AI providers (such as OpenAI, Anthropic, or Google) to power features:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400 mb-4">
              <li>Calipet: Photos and food data may be temporarily processed to generate nutrition estimates.</li>
              <li>Calistock: Investment chat transcripts are processed to generate strategy suggestions and linked to simulated trade records.</li>
              <li>Data is used only to fulfill your specific request.</li>
              <li>AI outputs may be inaccurate, incomplete, or unreliable.</li>
              <li>You should not rely on AI outputs for medical, dietary, or financial decisions.</li>
            </ul>
            <p className="text-zinc-400 mb-4">
              Calistock also uses the <strong className="text-white">Alpaca Market Data API</strong> to retrieve official daily market close prices used to lock entry and exit prices for simulated trades. This data is read-only and does not involve any real brokerage or trading activity.
            </p>
          </Section>

          {/* Section 4 */}
          <Section number="04" title="How We Share Information">
            <p className="text-zinc-400 mb-4">
              We do <strong className="text-white">not sell</strong> personal information. We may share information with:
            </p>

            <SubSection title="4.1 Service Providers">
              <ul>
                <li>Firebase Authentication, Firestore, Firebase Analytics, Crashlytics</li>
                <li>OpenAI, Anthropic, or Google (AI features)</li>
                <li>Alpaca Markets (market data for Calistock)</li>
                <li>Google AdMob (optional rewarded ads — Calipet only)</li>
              </ul>
              <Note>These providers operate under strict confidentiality agreements.</Note>
            </SubSection>

            <SubSection title="4.2 Public Content You Choose to Share (Calistock)">
              <p className="text-zinc-400 mb-2">
                If you publish a trade ticket or strategy post to the Calistock community feed or leaderboard, the following become publicly visible:
              </p>
              <ul>
                <li>Stock symbol, entry/exit dates and prices, return %, holding duration</li>
                <li>The AI chat session transcript linked to the trade (if you choose to share it)</li>
                <li>Your username</li>
              </ul>
              <Note>You control whether to publish a trade. Unpublished positions remain private.</Note>
            </SubSection>

            <SubSection title="4.3 Legal Compliance and Safety">
              <p className="text-zinc-400 mb-2">We may disclose information if required by law, legal process, or to protect the security, rights, or property of Calibrx or users.</p>
            </SubSection>

            <SubSection title="4.4 With Your Consent">
              <p className="text-zinc-400">If you choose to share content or link third-party accounts (optional).</p>
            </SubSection>
          </Section>

          {/* Section 5 */}
          <Section number="05" title="Your Rights and Choices">
            <p className="text-zinc-400 mb-4">You may:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400 mb-6">
              <li>Access or update your profile data</li>
              <li>Delete your account and associated data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of non-essential communications</li>
              <li>Exercise data portability or restriction rights where applicable</li>
            </ul>

            <SubSection title="Data Deletion">
              <p className="text-zinc-400 mb-2">You may delete your account and data:</p>
              <ul>
                <li>Directly within the app (Account → Delete Account), or</li>
                <li>By contacting: <a href="mailto:legal@calibrxai.com" className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors">legal@calibrxai.com</a></li>
              </ul>
              <Note>Deletion permanently removes your health data, photos, trade history, AI sessions, and account info from active systems. Published leaderboard entries and community posts are also removed.</Note>
            </SubSection>
          </Section>

          {/* Section 6 */}
          <Section number="06" title="Data Retention">
            <p className="text-zinc-400 mb-4">We retain personal information only as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400">
              <li>Provide the Services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-zinc-400 mt-4">Deleted accounts are processed promptly and removed from active databases.</p>
          </Section>

          {/* Section 7 */}
          <Section number="07" title="Children's Privacy">
            <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400">
              <li>The Services are not intended for children under 13.</li>
              <li>We do not knowingly collect personal information from children under 13.</li>
              <li>If you believe data was collected from a child, contact us immediately at <a href="mailto:legal@calibrxai.com" className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors">legal@calibrxai.com</a>.</li>
            </ul>
          </Section>

          {/* Section 8 */}
          <Section number="08" title="Security">
            <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400">
              <li>We implement administrative, technical, and physical safeguards to protect your information.</li>
              <li>No method of transmission or storage is completely secure.</li>
            </ul>
          </Section>

          {/* Section 9 */}
          <Section number="09" title="International Users">
            <p className="text-zinc-400">
              If you access the Services from outside the U.S., you understand your data may be processed in countries with different data protection laws.
            </p>
          </Section>

          {/* Section 10 */}
          <Section number="10" title="Changes to This Policy">
            <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400">
              <li>We may update this Policy periodically.</li>
              <li>Material updates will be communicated through an updated "Effective Date," in-app notifications, or email where applicable.</li>
              <li>Continued use constitutes acceptance.</li>
            </ul>
          </Section>

          {/* Contact */}
          <div className="mt-20 pt-12 border-t border-white/[0.06]">
            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-zinc-400 mb-5">For questions or requests about this Policy:</p>
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

function Section({ number, title, children, highlight }: { number: string; title: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`mt-14 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-zinc-400 ${highlight ? "p-6 bg-white/[0.03] border border-white/[0.08] rounded-xl" : ""}`}>
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-zinc-600 font-mono text-sm">{number}.</span>
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-3">{title}</h3>
      <div className="text-zinc-400 space-y-2">{children}</div>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-xs text-zinc-500 italic">{children}</p>
  );
}
