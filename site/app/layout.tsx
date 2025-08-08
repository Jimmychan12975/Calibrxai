import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calibrxai.com"),
  title: {
    default: "Calibrx AI",
    template: "%s — Calibrx AI",
  },
  description: "Building AI-powered products, block by block.",
  openGraph: {
    title: "Calibrx AI",
    description: "Building AI-powered products, block by block.",
    url: "/",
    siteName: "Calibrx AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calibrx AI",
    description: "Building AI-powered products, block by block.",
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} bg-surface text-[--color-text] antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
