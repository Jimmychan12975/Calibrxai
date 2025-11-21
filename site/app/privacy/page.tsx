export const metadata = {
  title: "Privacy Policy | Calibrx AI",
  description: "Official Privacy Policy and data handling protocols for Calibrx AI and Calipet.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container px-4 relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-sm"></span>
            DOC_REF: PRIVACY_V1.0
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 font-mono text-sm">
            <strong>EFFECTIVE DATE:</strong> AUGUST 7, 2025
          </p>
        </div>

        {/* Legal Content */}
        <div className="prose prose-invert prose-lg max-w-none">

          <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
            This Privacy Policy ("Policy") explains how <strong className="text-white">Calibrx AI</strong> ("Calibrx," "we," "us," or "our") collects, 
            uses, shares, and protects information when you use our mobile applications, websites, and services, including the 
            <strong className="text-white"> Calipet</strong> mobile application (collectively, the "Services").
          </p>

          <div className="p-6 bg-white/5 border-l-4 border-cyan-500 rounded-r-xl mb-12">
            <p className="text-zinc-300 m-0">
              <strong>Agreement:</strong> By using the Services, you agree to the practices described in this Policy. If you do not agree, please do not use the Services.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">01.</span> Information We Collect
          </h2>
          
          <h3 className="text-xl font-bold text-white mt-6 mb-3">1.1 Account Information</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Email address</li>
            <li>Profile information you choose to provide (e.g., gender, avatar, preferences)</li>
            <li>We do not collect your real name unless you choose to provide it.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">1.2 Health & Nutrition Data</h3>
          <p className="text-zinc-400 mb-3">Calipet allows you to enter or generate:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Food logs</li>
            <li>AI-generated calorie and nutrition estimates</li>
            <li>Macros and nutrient breakdowns</li>
            <li>Meal history</li>
            <li>Weight or other health-related entries</li>
          </ul>
          <p className="text-zinc-400 mt-2 italic text-sm">This data is collected only to provide core app functionality.</p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">1.3 Photos & User Uploads</h3>
          <p className="text-zinc-400 mb-3">We collect:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Meal photos</li>
            <li>Images submitted for AI recognition</li>
            <li>Other content you upload</li>
          </ul>
          <p className="text-zinc-400 mt-2 italic text-sm">Photos are uploaded to Firebase Storage and used for food analysis.</p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">1.4 Usage & Device Data</h3>
          <p className="text-zinc-400 mb-3">Automatically collected through Firebase and analytics tools:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>App interactions and feature usage</li>
            <li>Screen views and session data</li>
            <li>Device model, OS version, IP address, language settings</li>
            <li>Crash logs and performance metrics</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">1.5 In-App Purchases</h3>
          <p className="text-zinc-400 mb-3">We receive:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Subscription status (active, expired)</li>
            <li>Purchase receipts</li>
            <li>We do not receive full payment details, which are handled by Apple or Google.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">1.6 Communications</h3>
          <p className="text-zinc-400 mb-3">If you contact us, we collect:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Email messages</li>
            <li>Feedback and support requests</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">02.</span> How We Use Information
          </h2>
          <p className="text-zinc-400 mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Operate, maintain, and improve the Services</li>
            <li>Provide nutrition estimates, calorie analysis, and personalized insights</li>
            <li>Deliver core functionality (logging meals, tracking progress, generating summaries)</li>
            <li>Process subscriptions and manage account access</li>
            <li>Prevent fraud and misuse (e.g., fake scans, exploit attempts)</li>
            <li>Diagnose crashes and enhance performance</li>
            <li>Send important service or policy updates</li>
            <li>Generate anonymized analytics for product improvement</li>
          </ul>

          {/* Section 3 */}
          <div className="mt-12 p-8 bg-zinc-900 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6 font-display flex items-center gap-3">
              <span className="text-purple-500 font-mono text-sm">03.</span> AI Processing (Important)
            </h2>
            <p className="text-zinc-400 mb-4">
              Some features use third-party AI providers such as OpenAI or Google to analyze photos or generate nutrition estimates.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500 text-zinc-400">
              <li>Uploaded photos and related data may be temporarily processed by these providers.</li>
              <li>Data is used only to fulfill your request (e.g., food recognition).</li>
              <li>AI outputs may be inaccurate, incomplete, or unreliable.</li>
              <li>You should not rely on AI outputs for medical or dietary decisions.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">04.</span> How We Share Information
          </h2>
          <p className="text-zinc-400 mb-4">
            We do <strong className="text-white">not sell</strong> personal information. We may share information with:
          </p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">4.1 Service Providers</h3>
          <p className="text-zinc-400 mb-3">Including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Firebase Authentication, Firestore, Firebase Analytics, Crashlytics</li>
            <li>Google AdMob (optional rewarded ads)</li>
            <li>OpenAI or other AI vendors (image recognition and food analysis)</li>
          </ul>
          <p className="text-zinc-400 mt-2 italic text-sm">These providers operate under strict confidentiality agreements.</p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">4.2 Legal Compliance and Safety</h3>
          <p className="text-zinc-400 mb-3">We may disclose information if required by:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Law</li>
            <li>Legal process</li>
            <li>To protect the security, rights, or property of Calibrx or users</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">4.3 With Your Consent</h3>
          <p className="text-zinc-400 mb-3">
            If you choose to share content or link third-party accounts (optional).
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">05.</span> Rewarded Ads (AdMob)
          </h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Calipet may offer optional rewarded ads through Google AdMob.</li>
            <li>Ad interactions are handled under Google's privacy policies.</li>
            <li>No health data or photos are shared with ad partners.</li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">06.</span> Your Rights and Choices
          </h2>
          <p className="text-zinc-400 mb-4">You may:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Access or update your profile data</li>
            <li>Delete your account</li>
            <li>Request deletion of your data</li>
            <li>Opt out of non-essential emails</li>
            <li>Exercise data portability or restriction rights where applicable</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">Data Deletion</h3>
          <p className="text-zinc-400 mb-3">
            You may delete your account and associated data:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-zinc-500 text-zinc-400">
            <li>Directly within the app (Account → Delete Account), or</li>
            <li>
              By contacting: <a href="mailto:legal@calibrxai.com" className="text-cyan-400 hover:underline">legal@calibrxai.com</a>
            </li>
          </ul>
          <p className="text-zinc-400 mt-2 italic text-sm">
            Deletion permanently removes your health data, photos, logs, and account info from active systems.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">07.</span> Data Retention
          </h2>
          <p className="text-zinc-400 mb-4">
            We retain personal information only as long as necessary to:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>Provide the Services</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce agreements</li>
          </ul>
          <p className="text-zinc-400 mt-2">
            Deleted accounts are processed promptly and removed from active databases.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">08.</span> Children's Privacy
          </h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>The Services are not intended for children under 13.</li>
            <li>We do not knowingly collect personal information from children under 13.</li>
            <li>
              If you believe data was collected from a child, contact us immediately at{' '}
              <a href="mailto:legal@calibrxai.com" className="text-cyan-400 hover:underline">legal@calibrxai.com</a>.
            </li>
          </ul>

          {/* Section 9 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">09.</span> Security
          </h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>We implement administrative, technical, and physical safeguards to protect your information.</li>
            <li>However, no method of transmission or storage is completely secure.</li>
          </ul>

          {/* Section 10 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">10.</span> International Users
          </h2>
          <p className="text-zinc-400 mb-6">
            If you access the Services from outside the U.S., you understand your data may be processed in countries with 
            different data protection laws.
          </p>

          {/* Section 11 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-display flex items-center gap-3">
            <span className="text-cyan-500 font-mono text-sm">11.</span> Changes to This Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500 text-zinc-400">
            <li>We may update this Policy periodically.</li>
            <li>Material updates will be communicated through updated "Effective Date," in-app notifications, or email (where applicable).</li>
          </ul>
          <p className="text-zinc-400 mt-2">Continued use constitutes acceptance.</p>

          {/* Contact Section */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 font-display">Contact Us</h2>
            <p className="text-zinc-400 mb-4">
              For questions or requests about this Policy, please contact:
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