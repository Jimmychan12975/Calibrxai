import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./landing.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import CookieConsent from "@/components/CookieConsent";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", weight: ["300", "400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calibrxai.com"),
  title: {
    default: "Calibrx AI - Precision Engineering for Human Habits",
    template: "%s — Calibrx AI",
  },
  description: "Bringing engineering precision to the chaos of daily life. Calibrx uses AI to monitor, analyze, and correct your habits in real-time.",
  keywords: ["AI habit tracker", "precision health", "Calipet", "gamified health", "AI nutrition scanner", "behavioral engineering", "dopamine feedback loop"],
  authors: [{ name: "Calibrx AI" }],
  creator: "Calibrx AI",
  publisher: "Calibrx AI",
  openGraph: {
    title: "Calibrx AI - Precision Engineering for Human Habits",
    description: "Bringing engineering precision to the chaos of daily life. Calibrx uses AI to monitor, analyze, and correct your habits in real-time.",
    url: "https://www.calibrxai.com",
    siteName: "Calibrx AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Calipet_Hero_Image.webp",
        width: 1200,
        height: 630,
        alt: "Calibrx AI - Precision Engineering for Human Habits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calibrx AI - Precision Engineering for Human Habits",
    description: "Bringing engineering precision to the chaos of daily life. Calibrx uses AI to monitor, analyze, and correct your habits in real-time.",
    images: ["/Calipet_Hero_Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { 
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" rel="stylesheet" />
        
        {/* Google tag (gtag.js) - Optimized Loading & Consent Logic */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-EE96KFFCG0" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default to denied
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('config', 'G-EE96KFFCG0');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Calibrx AI",
              "description": "Building AI-powered products, block by block. Delivering trustworthy, modern artificial intelligence solutions.",
              "url": "https://www.calibrxai.com",
              "logo": "https://www.calibrxai.com/logo.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-909-568-3588",
                "contactType": "customer service",
                "email": "hello@calibrxai.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calabasas, CA, USA",
                "addressLocality": "Calabasas",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/calibrx-ai",
                "https://twitter.com/calibrxai"
              ],
              "foundingDate": "2024",
              "industry": "Artificial Intelligence",
              "services": [
                "Intelligent Automation",
                "Predictive Analytics",
                "AI-Powered Customer Experience",
                "Document Intelligence",
                "Custom AI Development"
              ]
            })
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased min-h-screen flex flex-col font-sans`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <PerformanceMonitor />
        <CookieConsent />
        <ErrorBoundary>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
