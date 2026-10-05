"use client";
import { motion } from "framer-motion";

const content = [
  {
    id: "01",
    title: "Prepare",
    description:
      "After booking, you immediately receive access to your preparation area. You'll find a complete samagri checklist, basic preparation guidance, your Anushthan access date, and important instructions before beginning.",
    image:
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Follow Panditji",
    description:
      "Your guided Anushthan unlocks one day before Navratri begins. Log in to your Chants & Bells account and follow the professionally recorded guidance.",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Perform Yourself",
    description:
      "Follow each instruction and perform the pooja yourself—individually or together with your family.",
    image:
      "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Go at Your Own Pace",
    description:
      "Pause, rewind, repeat, and continue whenever you are ready. Need more time for an offering? Pause. Want to hear a mantra again? Rewind.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
  },
];

const BuyingPatterns = () => {
  return (
    <main className="bg-[#F8F5EC] px-4 py-20 text-foreground">
      <div className="mx-auto max-w-5xl space-y-20 md:space-y-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            How it works
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            From preparation to completion, we guide you through the journey.
          </h2>
        </div>

        {content.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col gap-8 md:items-center md:gap-16 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full overflow-hidden rounded-3xl bg-gray-100 shadow-sm md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="w-full space-y-4 md:w-1/2">
                <div className="flex items-center gap-2 text-2xl font-light text-gold md:text-3xl">
                  <span className="font-thin text-border">|</span>
                  <span className="font-bold text-foreground">{item.id}</span>
                </div>
                <h3 className="font-serif text-3xl leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};

export default BuyingPatterns;