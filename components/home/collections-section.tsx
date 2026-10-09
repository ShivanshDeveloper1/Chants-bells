
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  "Listen",
  "Follow",
  "Perform",
  "Chant",
  "Continue",
] as const;

const commitments = [
  "Pause whenever you need time.",
  "Rewind to hear an instruction again.",
  "Repeat a mantra or chapter when required.",
  "Continue whenever you feel ready.",
] as const;

export function CollectionsSection() {
  return (
    <Section className="bg-surface" id="collections">
      <Reveal className="mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="The Core Proposition"
          title="You perform the pooja. Panditji guides you."
          description="Not a pooja performed on your behalf, but a guided experience that helps you participate in every step."
        />
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-4xl" delay={0.1}>
        <div className="rounded-3xl border border-gold/20 bg-background p-6 sm:p-10 lg:p-12">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "You take the Sankalp.",
              "You make the offerings.",
              "You chant the mantras.",
              "You perform the pooja.",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/10 font-serif text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-lg text-foreground sm:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="my-8 border-t border-gold/20" />

          <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-gold">
            Your guided journey
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-gold/30 px-4 py-2 text-sm font-medium text-foreground sm:text-base">
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-gold"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center leading-7 text-muted">
            Panditji guides you through the process, step by step.
            Follow each instruction and perform the rituals yourself,
            at your own pace.
          </p>
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-4xl" delay={0.15}>
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="font-serif text-2xl text-foreground sm:text-3xl">
              Take your time. Follow with faith.
            </p>
            <p className="mt-3 leading-7 text-muted">
              You are always in control of your pace.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 text-gold"
                >
                  ✓
                </span>
                <p className="text-sm leading-6 text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-3xl text-center" delay={0.2}>
        <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
          Your pooja. Your participation.
          <span className="block text-gold">
            Proper guidance throughout.
          </span>
        </p>
      </Reveal>
    </Section>
  );
}