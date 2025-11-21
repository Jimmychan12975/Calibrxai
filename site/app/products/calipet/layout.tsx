import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

// 1. Primary Headers (The "Industrial" Look)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-display", 
  weight: ["300", "400", "500", "700"] 
});

// 2. Technical Data (The "Code" Look)
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  weight: ["400", "500"] 
});

export default function CalipetLayout({ children }: { children: React.ReactNode }) {
  return (
    // We apply the font variables here so the new page can use 'font-display' and 'font-mono'
    <div className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-cyan-500 selection:text-zinc-900`}>
      {children}
    </div>
  );
}