import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About Us | Chants & Bells Navratri Videos",
  description: "Learn how we bring authentic, guided Navratri puja rituals to your home through premium video services.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-20">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Purpose
            </p>
            <h1 className="text-4xl text-foreground sm:text-5xl font-serif mb-8">
              Bringing the <span className="italic text-gold">Temple</span> to Your Screen.
            </h1>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                Performing Navratri rituals at home can be overwhelming without the right guidance. 
                We created Chants & Bells Video Services to bridge the gap between devotion and knowledge.
              </p>
              <p className="mb-6">
                Instead of simply providing the physical items, we provide the **authentic, step-by-step 
                visual guidance** recorded by expert pandits. From Ghatasthapana to Kanya Pujan, our premium 
                video collections ensure your 9-day fasting and puja are done with exact Vedic precision.
              </p>
            </div>
          </Reveal>
        </Container>
      </main>
      <Footer />
    </>
  );
}