
import { Navbar } from "@/components/layout/navbar";
import  Footer  from "@/components/layout/footer";
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
      "Follow guided recitations, Sanskrit mantras.",
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
      "The experience is designed with Hindi guidance, Sanskrit mantras. Transliteration is provided where applicable to help you follow the recitation.",
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