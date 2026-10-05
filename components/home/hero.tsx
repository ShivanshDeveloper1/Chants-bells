import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { collectionLink } from "./home-data";

const heroImage =
  "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1800&q=90";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-border/70">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-20">
        <Reveal onLoad className="relative z-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Devotion, thoughtfully gathered
          </p>
          <h1 className="max-w-xl text-5xl leading-[1.06] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.6rem]">
            Make space
            <br />
            for the <span className="italic text-gold">sacred.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
            A considered collection of devotional essentials for the rituals
            that bring you back to what matters.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Button href={collectionLink}>
              Explore the collection <span aria-hidden="true" className="ml-2">↗</span>
            </Button>
            <Link
              href="/collections/navratri"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-gold"
            >
              Find your festival essentials <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-3 border-t border-border pt-5">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-light-gold/40 font-serif text-xs text-foreground">
                ॐ
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-surface font-serif text-xs text-gold">
                ✳
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-lotus-red/10 font-serif text-xs text-lotus-red">
                ◇
              </span>
            </div>
            <p className="text-xs leading-5 text-muted">
              Chosen with care, for your everyday rituals
            </p>
          </div>
        </Reveal>

        <Reveal onLoad delay={0.12} className="relative">
          <div className="relative min-h-[390px] overflow-hidden rounded-[10rem_10rem_1.5rem_1.5rem] bg-foreground sm:min-h-[520px] lg:min-h-[600px]">
            <div
              role="img"
              aria-label="Softly glowing traditional lamps in a tranquil setting"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${heroImage}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/5 to-foreground/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-surface sm:p-9">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-light-gold">
                  A moment to return
                </p>
                <p className="mt-2 max-w-xs font-serif text-2xl leading-tight sm:text-3xl">
                  Let every small ritual feel like your own.
                </p>
              </div>
              <span
                className="mb-1 hidden h-12 w-12 shrink-0 place-items-center rounded-full border border-surface/50 sm:grid"
                aria-hidden="true"
              >
                <span className="font-serif text-xl">ॐ</span>
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-2 hidden rounded-full border border-border bg-surface px-5 py-3 text-xs tracking-wide text-muted shadow-sm sm:block lg:-left-7">
            Made for moments of meaning
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
