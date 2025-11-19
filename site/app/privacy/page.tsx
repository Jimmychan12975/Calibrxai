export const metadata = {
  title: "Privacy Policy",
  description: "Calibrx AI Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-[--color-text] mb-2">Privacy Policy</h1>
      <p className="text-[--color-text-muted] mb-8"><strong>Effective Date:</strong> August 7, 2025</p>

      <p className="text-[--color-text] leading-relaxed mb-4">
        This Privacy Policy (&quot;Policy&quot;) explains how <strong>Calibrx AI</strong> (&quot;Calibrx,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, 
        uses, shares, and protects information when you use our mobile applications, websites, and services, including the 
        <strong> Calipet</strong> mobile application (collectively, the &quot;Services&quot;).
      </p>
      <p className="text-[--color-text] leading-relaxed mb-6">
        By using the Services, you agree to the practices described in this Policy. If you do not agree, please do not use the Services.
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">1. Information We Collect</h2>
      
      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">1.1 Account Information</h3>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">Email address</li>
        <li className="text-[--color-text] leading-relaxed">Profile information you choose to provide (e.g., gender, avatar, preferences)</li>
        <li className="text-[--color-text] leading-relaxed">We do not collect your real name unless you choose to provide it.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">1.2 Health &amp; Nutrition Data</h3>
      <p className="text-[--color-text] leading-relaxed mb-3">Calipet allows you to enter or generate:</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li className="text-[--color-text] leading-relaxed">Food logs</li>
        <li className="text-[--color-text] leading-relaxed">AI-generated calorie and nutrition estimates</li>
        <li className="text-[--color-text] leading-relaxed">Macros and nutrient breakdowns</li>
        <li className="text-[--color-text] leading-relaxed">Meal history</li>
        <li className="text-[--color-text] leading-relaxed">Weight or other health-related entries</li>
      </ul>
      <p className="text-[--color-text] leading-relaxed mb-6">This data is collected only to provide core app functionality.</p>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">1.3 Photos &amp; User Uploads</h3>
      <p className="text-[--color-text] leading-relaxed mb-3">We collect:</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li className="text-[--color-text] leading-relaxed">Meal photos</li>
        <li className="text-[--color-text] leading-relaxed">Images submitted for AI recognition</li>
        <li className="text-[--color-text] leading-relaxed">Other content you upload</li>
      </ul>
      <p className="text-[--color-text] leading-relaxed mb-6">Photos are uploaded to Firebase Storage and used for food analysis.</p>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">1.4 Usage &amp; Device Data</h3>
      <p className="text-[--color-text] leading-relaxed mb-3">Automatically collected through Firebase and analytics tools:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">App interactions and feature usage</li>
        <li className="text-[--color-text] leading-relaxed">Screen views and session data</li>
        <li className="text-[--color-text] leading-relaxed">Device model, OS version, IP address, language settings</li>
        <li className="text-[--color-text] leading-relaxed">Crash logs and performance metrics</li>
      </ul>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">1.5 In-App Purchases</h3>
      <p className="text-[--color-text] leading-relaxed mb-3">We receive:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">Subscription status (active, expired)</li>
        <li className="text-[--color-text] leading-relaxed">Purchase receipts</li>
        <li className="text-[--color-text] leading-relaxed">We do not receive full payment details, which are handled by Apple or Google.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">1.6 Communications</h3>
      <p className="text-[--color-text] leading-relaxed mb-3">If you contact us, we collect:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">Email messages</li>
        <li className="text-[--color-text] leading-relaxed">Feedback and support requests</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">2. How We Use Information</h2>
      <p className="text-[--color-text] leading-relaxed mb-3">We use collected information to:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">Operate, maintain, and improve the Services</li>
        <li className="text-[--color-text] leading-relaxed">Provide nutrition estimates, calorie analysis, and personalized insights</li>
        <li className="text-[--color-text] leading-relaxed">Deliver core functionality (logging meals, tracking progress, generating summaries)</li>
        <li className="text-[--color-text] leading-relaxed">Process subscriptions and manage account access</li>
        <li className="text-[--color-text] leading-relaxed">Prevent fraud and misuse (e.g., fake scans, exploit attempts)</li>
        <li className="text-[--color-text] leading-relaxed">Diagnose crashes and enhance performance</li>
        <li className="text-[--color-text] leading-relaxed">Send important service or policy updates</li>
        <li className="text-[--color-text] leading-relaxed">Generate anonymized analytics for product improvement</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">3. AI Processing (Important)</h2>
      <p className="text-[--color-text] leading-relaxed mb-4">
        Some features use third-party AI providers such as OpenAI or Google to analyze photos or generate nutrition estimates.
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">Uploaded photos and related data may be temporarily processed by these providers.</li>
        <li className="text-[--color-text] leading-relaxed">Data is used only to fulfill your request (e.g., food recognition).</li>
        <li className="text-[--color-text] leading-relaxed">AI outputs may be inaccurate, incomplete, or unreliable.</li>
        <li className="text-[--color-text] leading-relaxed">You should not rely on AI outputs for medical or dietary decisions.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">4. How We Share Information</h2>
      <p className="text-[--color-text] leading-relaxed mb-4">
        We do <strong>not sell</strong> personal information.
      </p>
      <p className="text-[--color-text] leading-relaxed mb-3">We may share information with:</p>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">4.1 Service Providers</h3>
      <p className="text-[--color-text] leading-relaxed mb-3">Including but not limited to:</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li className="text-[--color-text] leading-relaxed">Firebase Authentication, Firestore, Firebase Analytics, Crashlytics</li>
        <li className="text-[--color-text] leading-relaxed">Google AdMob (optional rewarded ads)</li>
        <li className="text-[--color-text] leading-relaxed">OpenAI or other AI vendors (image recognition and food analysis)</li>
      </ul>
      <p className="text-[--color-text] leading-relaxed mb-6">These providers operate under strict confidentiality agreements.</p>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">4.2 Legal Compliance and Safety</h3>
      <p className="text-[--color-text] leading-relaxed mb-3">We may disclose information if required by:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">Law</li>
        <li className="text-[--color-text] leading-relaxed">Legal process</li>
        <li className="text-[--color-text] leading-relaxed">To protect the security, rights, or property of Calibrx or users</li>
      </ul>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">4.3 With Your Consent</h3>
      <p className="text-[--color-text] leading-relaxed mb-6">
        If you choose to share content or link third-party accounts (optional).
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">5. Rewarded Ads (AdMob)</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">Calipet may offer optional rewarded ads through Google AdMob.</li>
        <li className="text-[--color-text] leading-relaxed">Ad interactions are handled under Google&apos;s privacy policies.</li>
        <li className="text-[--color-text] leading-relaxed">No health data or photos are shared with ad partners.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">6. Your Rights and Choices</h2>
      <p className="text-[--color-text] leading-relaxed mb-3">You may:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">Access or update your profile data</li>
        <li className="text-[--color-text] leading-relaxed">Delete your account</li>
        <li className="text-[--color-text] leading-relaxed">Request deletion of your data</li>
        <li className="text-[--color-text] leading-relaxed">Opt out of non-essential emails</li>
        <li className="text-[--color-text] leading-relaxed">Exercise data portability or restriction rights where applicable</li>
      </ul>

      <h3 className="text-xl font-semibold text-[--color-text] mt-6 mb-3">Data Deletion</h3>
      <p className="text-[--color-text] leading-relaxed mb-3">
        You may delete your account and associated data:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li className="text-[--color-text] leading-relaxed">Directly within the app (Account → Delete Account), or</li>
        <li className="text-[--color-text] leading-relaxed">
          By contacting:{' '}
          <a href="mailto:legal@calibrxai.com" className="text-[--color-accent] hover:underline">legal@calibrxai.com</a>
        </li>
      </ul>
      <p className="text-[--color-text] leading-relaxed mb-6">
        Deletion permanently removes your health data, photos, logs, and account info from active systems.
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">7. Data Retention</h2>
      <p className="text-[--color-text] leading-relaxed mb-3">
        We retain personal information only as long as necessary to:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li className="text-[--color-text] leading-relaxed">Provide the Services</li>
        <li className="text-[--color-text] leading-relaxed">Comply with legal obligations</li>
        <li className="text-[--color-text] leading-relaxed">Resolve disputes</li>
        <li className="text-[--color-text] leading-relaxed">Enforce agreements</li>
      </ul>
      <p className="text-[--color-text] leading-relaxed mb-6">
        Deleted accounts are processed promptly and removed from active databases.
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">8. Children&apos;s Privacy</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">The Services are not intended for children under 13.</li>
        <li className="text-[--color-text] leading-relaxed">We do not knowingly collect personal information from children under 13.</li>
        <li className="text-[--color-text] leading-relaxed">
          If you believe data was collected from a child, contact us immediately at{' '}
          <a href="mailto:legal@calibrxai.com" className="text-[--color-accent] hover:underline">legal@calibrxai.com</a>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">9. Security</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-[--color-text] leading-relaxed">We implement administrative, technical, and physical safeguards to protect your information.</li>
        <li className="text-[--color-text] leading-relaxed">However, no method of transmission or storage is completely secure.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">10. International Users</h2>
      <p className="text-[--color-text] leading-relaxed mb-6">
        If you access the Services from outside the U.S., you understand your data may be processed in countries with 
        different data protection laws.
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">11. Changes to This Policy</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li className="text-[--color-text] leading-relaxed">We may update this Policy periodically.</li>
        <li className="text-[--color-text] leading-relaxed">Material updates will be communicated through:</li>
      </ul>
      <ul className="list-disc list-inside ml-6 space-y-2 mb-4">
        <li className="text-[--color-text] leading-relaxed">Updated &quot;Effective Date&quot;</li>
        <li className="text-[--color-text] leading-relaxed">In-app notifications</li>
        <li className="text-[--color-text] leading-relaxed">Email (where applicable)</li>
      </ul>
      <p className="text-[--color-text] leading-relaxed mb-6">Continued use constitutes acceptance.</p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">12. Contact Us</h2>
      <p className="text-[--color-text] leading-relaxed mb-6">
        For questions or requests about this Policy, contact:{' '}
        <a href="mailto:legal@calibrxai.com" className="text-[--color-accent] hover:underline">legal@calibrxai.com</a>
      </p>

      <p className="text-sm text-[--color-text-muted] mt-8 pt-6 border-t border-black/10">
        Applies to all Calibrx AI products and services, including Calipet.
      </p>
    </div>
  );
} 