import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const values = [
  {
    number: "Listen",
    title: "Follow Panditji's guidance",
    description:
      "Hear the ritual instructions clearly and move through each step with confidence.",
  },
  {
    number: "Follow",
    title: "Perform each offering and prayer",
    description:
      "Take the Sankalp, make the offerings, and chant the mantras as the ritual unfolds.",
  },
  {
    number: "Continue",
    title: "Pause, rewind, repeat when needed",
    description:
      "Stay in control of your pace while you continue through the Anushthan with clarity.",
  },
];

export function ValuesSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="The core proposition"
            title="You perform the pooja. Panditji guides you."
            description="This is not a video of someone performing a pooja on your behalf. You take the Sankalp, make the offerings, chant the mantras, and perform the pooja yourself."
          />
        </Reveal>
        <div className="divide-y divide-border border-y border-border">
          {values.map((value, index) => (
            <Reveal key={value.number} delay={index * 0.07}>
              <article className="grid gap-3 py-6 sm:grid-cols-[6rem_1fr] sm:gap-5 sm:py-7">
                <span className="font-serif text-lg text-gold">
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
