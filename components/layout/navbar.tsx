import Link from "next/link";
import { Brand } from "../ui/brand";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { MobileNavigation } from "./mobile-navigation";
import { primaryNavigation } from "./site-navigation";

export function Navbar() {
  return (
    <header className="relative z-40 border-b border-border bg-surface/90 backdrop-blur">
      <Container className="relative flex min-h-20 items-center justify-between gap-2 sm:gap-4">
        <Brand className="shrink-0" />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {primaryNavigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Button href="/#book-your-navratri-anushthan" size="compact">
            Book Your Navratri Anushthan
          </Button>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
