import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { navratriLink } from "./home-data";

const festivalImage =
  "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?auto=format&fit=crop&w=1400&q=85";

export function FestivalSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[1.5rem] bg-foreground text-surface sm:rounded-[2rem]">
            <div className="grid min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-10 flex flex-col items-start justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-gold">
                  A season of devotion
                </p>
                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
                  Welcome the light of Navratri.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-surface/75 sm:text-base">
                  Prepare for nine nights of prayer with thoughtfully gathered
                  Navratri puja items, devotional essentials, and meaningful
                  details for your home altar.
                </p>
                <Link
                  href={navratriLink}
                  className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-light-gold"
                >
                  Explore Navratri essentials <span aria-hidden="true">↗</span>
                </Link>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -left-10 font-serif text-[15rem] leading-none text-surface/[0.035]"
                >
                  ॐ
                </span>
              </div>
              <div className="relative min-h-[250px] bg-gold/20 lg:min-h-full">
                <div
                  role="img"
                  aria-label="Traditional lights and offerings arranged for a festival"
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${festivalImage}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/10 to-transparent lg:from-foreground/20" />
                <div className="absolute bottom-5 right-5 rounded-full border border-surface/50 bg-foreground/25 px-4 py-2 text-xs tracking-wide text-surface backdrop-blur-sm sm:bottom-8 sm:right-8">
                  Navratri · Durga Puja · Diwali
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
