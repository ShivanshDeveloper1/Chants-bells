import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  className?: string;
};

export function Brand({ className = "" }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="Chants & Bells home"
        className={`inline-flex items-center ${className}`}
    >
      <Image src="/logo.jpeg" alt="Chants & Bells"   width={180}
        height={60}
        className="h-auto w-[70px] object-contain sm:w-[70px]"
        priority    />
    </Link>
  );
}
