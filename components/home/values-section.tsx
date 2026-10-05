import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const values = [
  {
    number: "01",
    title: "Chosen with intention",
    description:
      "A considered edit of spiritual and devotional products, not more noise.",
  },
  {
    number: "02",
    title: "Rooted in tradition",
    description:
      "Familiar puja essentials for the customs, stories, and practices you cherish.",
  },
  {
    number: "03",
    title: "Made for real life",
    description:
      "Thoughtful finds for everyday prayer, festival gatherings, and heartfelt giving.",
  },
];

export function ValuesSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="The Chants & Bells way"
            title="A more thoughtful way to find what feels right."
            description="A little care in the choosing can make space for a deeper connection to the things you do every day."
          />
        </Reveal>
        <div className="divide-y divide-border border-y border-border">
          {values.map((value, index) => (
            <Reveal key={value.number} delay={index * 0.07}>
              <article className="grid gap-3 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-7">
                <span className="font-serif text-sm text-gold">
                  {value.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-muted sm:text-base">
                    {value.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
