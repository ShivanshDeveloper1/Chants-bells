import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const previewCards = [
  {
    title: "Panditji gives an instruction",
    description: "A clear, guided cue for the next ritual action.",
    href: "/videos-collection",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Close-up of the ritual",
    description: "Watch the action up close and follow it with intention.",
    href: "/videos-collection",
    image:
      "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Mantra and guidance on screen",
    description: "Sanskrit mantra, English subtitle, and transliteration where applicable.",
    href: "/videos-collection",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85",
  },
] as const;

export function CollectionsSection() {
  return (
    <Section className="bg-surface" id="collections">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Experience preview"
          title="See how the guided Anushthan works."
          description="Professionally pre-recorded guidance that lets you pause, follow, repeat, and continue at your own pace."
        />
        <Link
          href="/videos-collection"
          className="inline-flex shrink-0 items-center gap-2 self-start pb-1 text-sm font-medium text-foreground transition-colors hover:text-gold sm:self-auto"
        >
          View the preview <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {previewCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <Link
              href={card.href}
              className="group block focus-visible:rounded-2xl"
            >
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl bg-background sm:aspect-[4/4.8]">
                <div
                  role="img"
                  aria-label={card.title}
                  className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url("${card.image}")`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-transparent to-transparent opacity-75 transition-opacity group-hover:opacity-90" />
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-surface/60 text-surface transition-colors group-hover:bg-gold group-hover:text-foreground"
                >
                  ↗
                </span>
                <div className="absolute inset-x-5 bottom-5 pr-14 text-surface sm:inset-x-6 sm:bottom-6">
                  <h3 className="font-serif text-2xl sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-surface/80">
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
