import Link from "next/link";
import { Brand } from "../ui/brand";
import { Container } from "../ui/container";
import { footerNavigation } from "./site-navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Ancient Wisdom. Modern Life.
            </p>
          </div>
          {footerNavigation.map(({ title, links }) => (
            <div key={title}>
              <h2 className="font-serif text-lg text-foreground">{title}</h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-5 text-xs text-muted">
          &copy; {new Date().getFullYear()} Chants &amp; Bells. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
