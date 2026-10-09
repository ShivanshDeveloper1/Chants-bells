import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

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
                  Your Navratri Anushthan
                </p>
                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
                  Structured guidance for the Navratri journey.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-surface/75 sm:text-base">
              The Chants & Bells Navratri Anushthan is designed around the traditional Navratri pooja, Devi Abhishek and Durga Saptshati Paath. Keeping in mind our daily lives with a hectic schedule, we offer guided support for each step of the journey.”
                </p>
                <ul className="mt-6 space-y-2 text-sm text-surface/80 sm:text-base">
                  <li>•Daily Guided Pooja</li>
                  <li>• ⁠Devi Abhishek</li>
                  <li>• Durga Saptshati Paath</li>
                  <li>• Devi ⁠Hawan Vidhi</li>
                </ul>
                <Link
                  href="/videos-collection"
                  className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-light-gold"
                >
                  Book Your Navratri Anushthan <span aria-hidden="true">↗</span>
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
                  aria-label="Traditional lights and offerings arranged for Navratri worship"
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${festivalImage}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/10 to-transparent lg:from-foreground/20" />
                <div className="absolute bottom-5 right-5 rounded-full border border-surface/50 bg-foreground/25 px-4 py-2 text-xs tracking-wide text-surface backdrop-blur-sm sm:bottom-8 sm:right-8">
                  Daily Pooja Guidance • Durga Saptashati
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
