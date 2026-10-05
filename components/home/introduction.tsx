import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Introduction() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="mx-auto grid max-w-5xl gap-5 text-center md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            The problem
          </p>
          <div>
            <h2 className="font-serif text-3xl leading-snug text-foreground sm:text-4xl lg:text-[2.75rem]">
              Pooja karni hai. Par vidhi sahi honi chahiye.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted md:mx-0">
              Many of us want to perform our own pooja during Navratri. But then
              come the questions: what samagri do I need, how do I begin, how
              should I take the Sankalp, which prayer comes next, and how do I
              complete the Anushthan properly?
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted md:mx-0">
              Searching through different videos and sources often creates more
              confusion. Chants &amp; Bells brings the complete guidance together
              in one structured experience.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
