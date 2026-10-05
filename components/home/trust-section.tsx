import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const assurances = [
  {
    title: "Pause anytime",
    detail: "Stop when you need time, then continue when you are ready.",
  },
  {
    title: "Repeat as needed",
    detail: "Rewind a mantra or revisit a chapter whenever required.",
  },
  {
    title: "Guided in your language",
    detail: "Hindi guidance, Sanskrit mantras, and English subtitles for clarity.",
  },
];

export function TrustSection() {
  return (
    <section className="border-y border-border bg-surface py-12 sm:py-14">
      <Container>
        <Reveal>
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {assurances.map((assurance, index) => (
              <div
                key={assurance.title}
                className="flex items-start gap-4 sm:justify-center"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border font-serif text-sm text-gold">
                  0{index + 1}
                </span>
                <div>
                  <h2 className="font-serif text-xl text-foreground">
                    {assurance.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {assurance.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
