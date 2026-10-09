
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    number: "01",
    title: "Complete Navratri Pooja Guidance",
    description:
      "Follow a structured, step-by-step guided Anushthan with Panditji, from the initial preparations to the pooja rituals.",
  },
  {
    number: "02",
    title: "Preparation Guide & Samagri Checklist",
    description:
      "Prepare in advance with a complete checklist of required pooja samagri and essential instructions before Navratri.",
  },
  {
    number: "03",
    title: "Durga Saptashati & Mantra Guidance",
    description:
      "Follow guided recitations, Sanskrit mantras, and supporting English subtitles or transliteration where applicable.",
  },
];

const faqs = [
  {
    question: "What is Chants & Bells?",
    answer:
      "Chants & Bells helps you perform your Navratri pooja yourself at home with structured, step-by-step guidance from an experienced Panditji. You participate in the rituals while following the instructions at your own pace.",
  },
  {
    question: "Will Panditji perform the pooja on my behalf?",
    answer:
      "No. The purpose is to help you perform the pooja yourself. Panditji guides you through the process, explaining the sequence and helping you follow each step.",
  },
  {
    question: "Is this a live pooja session?",
    answer:
      "No. The Anushthan is professionally pre-recorded. You can follow Panditji's instructions carefully, pause when you need more time, and revisit a step whenever necessary.",
  },
  {
    question: "When will I receive access to the Anushthan?",
    answer:
      "After booking, you receive access to your preparation area, including the samagri checklist and essential preparation guidance. The guided Anushthan becomes available one day before Navratri begins.",
  },
  {
    question: "What should I prepare before Navratri?",
    answer:
      "Your preparation guide includes a samagri checklist and basic instructions to help you arrange the required items in advance. Please review the checklist before beginning your Anushthan.",
  },
  {
    question: "Can I pause or repeat a mantra?",
    answer:
      "Yes. You can pause the recording when you need time for an offering, rewind an instruction, and repeat a mantra or chapter when required. Continue when you are ready.",
  },
  {
    question: "Can my family participate with me?",
    answer:
      "Yes. You can follow the guided Anushthan individually or participate together with your family at home.",
  },
  {
    question: "Will the guidance be available in Hindi?",
    answer:
      "The experience is designed with Hindi guidance, Sanskrit mantras, and English subtitles. Transliteration is provided where applicable to help you follow the recitation.",
  },
  {
    question: "Will I need to arrange a Panditji separately?",
    answer:
      "The guided experience is designed to help you perform the pooja yourself with recorded instructions. It is not an arrangement for an in-person Panditji visit or a live ceremony.",
  },
  {
    question: "How long does the complete Anushthan take?",
    answer:
      "The duration depends on the rituals and recitations you undertake. The approximate duration for the guided components will be shared once the recording details are finalized.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-surface">
        {/* Page introduction */}
        <section className="py-20 sm:py-24">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                  Chants & Bells
                </p>

                <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Everything You Need for a
                  <span className="block text-gold">
                    Guided Navratri Anushthan
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  Prepare with confidence, follow Panditji step by step,
                  and perform your Navratri pooja at home with authentic
                  guidance at your own pace.
                </p>
              </div>
            </Reveal>

            {/* What's included */}
            <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
              {services.map((service, index) => (
                <Reveal key={service.number} delay={index * 0.08}>
                  <article className="group h-full rounded-2xl border border-border/70 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg sm:p-8">
                    <div className="mb-7 flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 font-serif text-xl text-gold">
                        ॐ
                      </span>

                      <span className="font-serif text-sm text-gold/70">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl leading-snug text-foreground">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-muted">
                      {service.description}
                    </p>

                    <div className="mt-7 h-px w-12 bg-gold/50 transition-all duration-300 group-hover:w-20" />
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Important note */}
            <Reveal delay={0.15}>
              <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3 rounded-2xl border border-gold/20 bg-background/70 p-6 sm:flex-row sm:items-center sm:gap-5 sm:p-8">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/10 font-serif text-xl text-gold">
                  ॐ
                </div>

                <div>
                  <h2 className="font-serif text-xl text-foreground">
                    Your pooja. Your participation.
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Book in advance to receive your preparation guide
                    and samagri checklist. Your guided Anushthan unlocks
                    one day before Navratri begins.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* FAQs */}
        <section
          id="faqs"
          className="border-t border-border/60 bg-background py-20 sm:py-24"
        >
          <Container>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">
                  Frequently Asked Questions
                </p>

                <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Everything You'd Like to Know
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
                  Have questions about the guided Anushthan?
                  Here are the answers to help you prepare with confidence.
                </p>
              </div>
            </Reveal>

            <div className="mx-auto mt-12 max-w-3xl">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.02}>
                  <details className="group border-b border-border/70 py-5 first:border-t">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-1 text-left [&::-webkit-details-marker]:hidden">
                      <span className="font-medium leading-7 text-foreground transition-colors group-open:text-gold sm:text-lg">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/30 text-lg text-gold transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <div className="max-w-2xl pb-2 pr-8 pt-3 text-sm leading-7 text-muted sm:text-base">
                      {faq.answer}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>

            {/* Closing CTA */}
            <Reveal delay={0.1}>
              <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-gold/20 bg-surface px-6 py-10 text-center sm:px-12 sm:py-14">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-gold">
                  Celebrate Navratri with confidence
                </p>

                <h2 className="font-serif text-3xl leading-snug text-foreground sm:text-4xl">
                  Bring the Divine Home.
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
                  Prepare in advance and follow a guided experience
                  designed around your participation, your family,
                  and your own pace.
                </p>

                <p className="mt-7 text-sm text-muted">
                  Connect your booking link to the button below.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}