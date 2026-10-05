import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CollectionsSection } from "@/components/home/collections-section";
import { FinalCta } from "@/components/home/final-cta";
import { FestivalSection } from "@/components/home/festival-section";
import { Hero } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { TrustSection } from "@/components/home/trust-section";
import { ValuesSection } from "@/components/home/values-section";
import BuyingPatterns from "@/components/home/BuyingPatterns";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata: Metadata = {
  title: "Chants & Bells | Ancient Wisdom. Modern Life.",
  description:
    "Perform your Navratri pooja at home with guided step-by-step instructions, Sanskrit mantras, and authentic support from an experienced Panditji.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />

        <ScrollReveal>
          <Introduction />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <CollectionsSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <FestivalSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ValuesSection />
        </ScrollReveal>

        <BuyingPatterns />

        <ScrollReveal delay={0.1}>
          <TrustSection />
        </ScrollReveal>
        

        <ScrollReveal>
          <FinalCta />
        </ScrollReveal>
      </main>

      <Footer />
      
    </>
  );
}