export const metadata = {
  title: "Cookie Policy",
  description: "Calibrx AI Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-[--color-text] mb-2">Cookie Policy</h1>
      <p className="text-[--color-text-muted] mb-8"><strong>Effective Date:</strong> August 7, 2025</p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">1) What Are Cookies?</h2>
      <p className="text-[--color-text] leading-relaxed mb-6">
        Cookies are small text files that are placed on your device when you visit a website. They help websites function, improve
        user experience, and provide insights into how the site is being used. Similar technologies such as pixels, local storage,
        and SDKs may also be used and are collectively referred to as “cookies” in this policy.
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">2) Types of Cookies We Use</h2>
      <ul className="space-y-3 mb-6">
        <li className="text-[--color-text] leading-relaxed"><strong>Strictly Necessary Cookies:</strong> Required for core functionality such as page navigation and access to secure areas.</li>
        <li className="text-[--color-text] leading-relaxed"><strong>Performance &amp; Analytics Cookies:</strong> Help us understand how visitors interact with the site (e.g., pages viewed, time on site) so we can improve usability and performance.</li>
        <li className="text-[--color-text] leading-relaxed"><strong>Functional Cookies:</strong> Remember preferences such as language, region, and previously selected settings.</li>
        <li className="text-[--color-text] leading-relaxed"><strong>Advertising/Targeting Cookies:</strong> Used by us or our partners to deliver relevant ads and measure their effectiveness. We do not show interest-based ads to children.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">3) How We Use Cookies</h2>
      <ul className="space-y-3 mb-6">
        <li className="text-[--color-text] leading-relaxed">To operate and secure the site and related services.</li>
        <li className="text-[--color-text] leading-relaxed">To analyze traffic and usage trends to improve features and content.</li>
        <li className="text-[--color-text] leading-relaxed">To remember your preferences and enhance your experience.</li>
        <li className="text-[--color-text] leading-relaxed">To measure the effectiveness of marketing campaigns where applicable.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">4) Third-Party Cookies</h2>
      <p className="text-[--color-text] leading-relaxed mb-6">
        We may allow third-party service providers (e.g., analytics and measurement partners) to set cookies to help us understand
        site performance and deliver content. These providers have their own privacy and cookie policies, and we recommend reviewing
        them to understand how they process data.
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">5) Managing Cookies</h2>
      <p className="text-[--color-text] leading-relaxed mb-4">
        You can manage or disable cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when
        cookies are being sent. If you block some types of cookies, certain features of the site may not function properly.
      </p>
      <ul className="space-y-2 text-[--color-text] leading-relaxed mb-6 list-disc pl-6">
        <li>Instructions for managing cookies: see your browser’s help page (e.g., Chrome, Safari, Firefox, Edge).</li>
        <li>To opt out of certain analytics, some providers offer their own opt-out tools.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">6) Do Not Track</h2>
      <p className="text-[--color-text] leading-relaxed mb-6">
        Some browsers offer a “Do Not Track” (DNT) setting. There is no common understanding of how to interpret DNT signals, and we
        currently do not respond to them. We continue to monitor developments and may update our practices if standards emerge.
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">7) Changes to This Cookie Policy</h2>
      <p className="text-[--color-text] leading-relaxed mb-6">
        We may update this Cookie Policy from time to time to reflect changes in technology, law, or our services. When we make
        material changes, we will take reasonable steps to notify you (e.g., updating the “Effective Date”).
      </p>

      <h2 className="text-2xl font-semibold text-[--color-text] mt-8 mb-4">8) Contact Us</h2>
      <p className="text-[--color-text] leading-relaxed mb-6">
        If you have questions about this Cookie Policy, please contact us at
        <a href="mailto:legal@calibrxai.com" className="text-[--color-accent] hover:underline"> legal@calibrxai.com</a>.
      </p>

      <p className="text-sm text-[--color-text-muted] mt-8 pt-6 border-t border-black/10">
        Applies to all products and services offered by Calibrx AI, including but not limited to Calipet.
      </p>
    </div>
  );
}


