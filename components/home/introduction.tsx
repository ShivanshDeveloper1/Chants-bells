import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Introduction() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="mx-auto grid max-w-5xl gap-5 text-center md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            A little more meaning
          </p>
          <div>
            <h2 className="font-serif text-3xl leading-snug text-foreground sm:text-4xl lg:text-[2.75rem]">
              For the rituals you inherit, and the ones you make your own.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted md:mx-0">
              We bring together puja samagri and devotional pieces with a
              thoughtful eye—so finding what belongs in your practice feels
              simple, personal, and rooted in care.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
