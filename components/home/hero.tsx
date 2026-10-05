import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import CountdownTimer from "../CountdownTimer";

const heroImage =
  "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1800&q=90";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-border/70">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-20">
        <Reveal onLoad className="relative z-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Ancient Wisdom. Modern Life.
          </p>
          <h1 className="max-w-xl text-5xl leading-[1.06] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.2rem]">
            This Navratri,
            <br />
            bring the <span className="italic text-gold">Divine</span> home.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Perform your Navratri pooja yourself at home, with authentic
            step-by-step guidance from an experienced Panditji.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted">
            A professionally pre-recorded guided Anushthan designed to help you
            understand what to do, follow the correct sequence, chant along, and
            perform your pooja with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Button href="/#book-your-navratri-anushthan">
              Book Your Navratri Anushthan
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            <span className="rounded-full border border-border bg-surface px-3 py-2">
              Authentic Vidhi
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-2">
              Step-by-Step Guidance
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-2">
              Sanskrit Mantras
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-2">
              Perform at Your Own Pace
            </span>
          </div>

          <p className="mt-6 text-sm text-muted">
            Hindi guidance • Sanskrit mantras • English subtitles
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Navratri begins in:
            </p>
            <p className="mt-3 text-xl font-medium text-foreground">
            <CountdownTimer />
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Book in advance and receive your complete preparation guide and
              samagri checklist immediately.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              The guided Anushthan becomes available one day before Navratri.
            </p>
          </div>
        </Reveal>

        <Reveal onLoad delay={0.12} className="relative">
          <div className="relative min-h-[390px] overflow-hidden rounded-[10rem_10rem_1.5rem_1.5rem] bg-foreground sm:min-h-[520px] lg:min-h-[600px]">
            <div
              role="img"
              aria-label="Pooja ritual setup with offerings and warm devotional lighting"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${heroImage}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/5 to-foreground/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-surface sm:p-9">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-light-gold">
                  Guided at your pace
                </p>
                <p className="mt-2 max-w-xs font-serif text-2xl leading-tight sm:text-3xl">
                  Follow the rituals with calm, clarity, and confidence.
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
            Your pooja. Your participation.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
