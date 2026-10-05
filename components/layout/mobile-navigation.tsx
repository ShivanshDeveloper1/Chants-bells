"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNavigation } from "./site-navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 items-center rounded-full border border-border px-2.5 text-sm font-medium text-foreground transition-colors hover:border-gold sm:px-4"
        aria-controls="mobile-primary-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      {isOpen && (
        <nav
          id="mobile-primary-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-4 top-full z-50 mt-2 rounded-2xl border border-border bg-surface p-3 shadow-lg sm:inset-x-6"
        >
          <ul className="flex flex-col">
            {primaryNavigation.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-background hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
