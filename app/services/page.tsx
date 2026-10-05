import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    title: "Complete 9-Day Guided Puja Video",
    description: "Daily step-by-step video instructions for each form of Maa Durga, including specific mantras and aarti.",
  },
  {
    title: "Ghatasthapana Masterclass",
    description: "A detailed, 45-minute video focusing purely on the Kalash Sthapana process on Day 1.",
  },
  {
    title: "Digital Sankalp & Mantra Chanting",
    description: "Audio-visual guides to help you pronounce Sanskrit mantras perfectly during your fasting days.",
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-20 bg-surface">
        <Container>
          <Reveal>
            <h1 className="text-4xl font-serif mb-12">Our Video Services</h1>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="p-8 border border-border/70 rounded-2xl bg-background hover:border-gold transition-colors">
                  <div className="h-12 w-12 rounded-full bg-light-gold/20 text-gold flex items-center justify-center mb-6 font-serif text-xl">
                    ॐ
                  </div>
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-muted leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </main>
      <Footer />
    </>
  );
}