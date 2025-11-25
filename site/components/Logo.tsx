import Image from "next/image";

type Props = { className?: string };

export default function Logo({ className }: Props) {
  return (
    <Image src="/logo.webp" alt="Calibrx AI logo" width={120} height={33} className={className} priority />
  );
} 