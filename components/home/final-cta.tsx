import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { collectionLink } from "./home-data";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface px-6 py-12 text-center sm:rounded-[2rem] sm:px-10 sm:py-16 lg:py-20">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 -top-16 font-serif text-[15rem] leading-none text-light-gold/15 sm:left-4 sm:-top-24 sm:text-[20rem]"
            >
              ॐ
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-8 font-serif text-[18rem] leading-none text-light-gold/15 sm:-bottom-36 sm:right-8 sm:text-[24rem]"
            >
              ॐ
            </span>
            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Begin with what matters
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Make your next ritual your own.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted">
                Find devotional essentials chosen to bring a little more
                meaning to your everyday.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
                <Link
                  href={collectionLink}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-light-gold"
                >
                  Discover the collection <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/collections/navratri"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold"
                >
                  Shop Navratri essentials
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
