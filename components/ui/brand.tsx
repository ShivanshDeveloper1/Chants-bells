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
      <Image src="/logo.jpeg" alt="Chants & Bells"   width={200}
        height={80}
        className="h-auto w-[100px] object-contain sm:w-[100px]"
        priority    />
    </Link>
  );
}
