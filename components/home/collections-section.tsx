import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { collectionCards } from "./home-data";

export function CollectionsSection() {
  return (
    <Section className="bg-surface" id="collections">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Gathered for your practice"
          title="Meaning in the details."
          description="Explore devotional essentials chosen to make daily puja and special occasions feel a little more considered."
        />
        <Link
          href="/collections"
          className="inline-flex shrink-0 items-center gap-2 self-start pb-1 text-sm font-medium text-foreground transition-colors hover:text-gold sm:self-auto"
        >
          View all collections <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {collectionCards.map((card, index) => (
          <Reveal key={card.href} delay={index * 0.08}>
            <Link
              href={card.href}
              className="group block focus-visible:rounded-2xl"
            >
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl bg-background sm:aspect-[4/4.8]">
                <div
                  role="img"
                  aria-label={card.imageAlt}
                  className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url("${card.image}")`,
                    backgroundPosition: card.imagePosition,
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
                    {card.name}
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
