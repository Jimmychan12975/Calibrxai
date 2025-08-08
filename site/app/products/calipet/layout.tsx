import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-calipet" });

export default function CalipetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.variable} theme-calipet`}>{children}</div>
  );
} 