"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const supportCategories = [
  "Video Access Issue",
  "Custom Puja Request",
  "Payment Assistance",
  "General Inquiry",
];

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState("Video Access Issue");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 py-14 sm:py-20 bg-background text-foreground overflow-hidden">
        <Container className="max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
              <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="h-px w-6 bg-gold/60" />
                Devotional Assistance
                <span className="h-px w-6 bg-gold/60" />
              </p>
              <h1 className="text-4xl sm:text-5xl font-serif leading-tight">
                We are here to <span className="italic text-gold">guide</span> you.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                Having trouble watching your purchased Navratri video guides, or need help choosing the right puja ritual package? Reach out to us.
              </p>
            </motion.div>

            {/* Quick Contact Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-border/70 py-8 my-8"
            >
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-surface/50 border border-border/40">
                <span className="text-gold font-serif text-2xl mb-2">⚡</span>
                <h2 className="text-sm font-medium text-foreground">Instant Video Access</h2>
                <p className="text-xs text-muted mt-1">Instant delivery to your portal upon payment</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-surface/50 border border-border/40">
                <span className="text-gold font-serif text-2xl mb-2">💬</span>
                <h2 className="text-sm font-medium text-foreground">WhatsApp Support</h2>
                <p className="text-xs text-muted mt-1">+91 76185 50475 (Mon - Sun)</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-surface/50 border border-border/40">
                <span className="text-gold font-serif text-2xl mb-2">✉️</span>
                <h2 className="text-sm font-medium text-foreground">Email Support</h2>
                <p className="text-xs text-muted mt-1">support@chantsandbells.com</p>
              </div>
            </motion.div>

            {/* Minimal Form Section */}
            <motion.div
              variants={itemVariants}
              className="bg-surface/40 backdrop-blur-sm border border-border/80 rounded-3xl p-6 sm:p-10 shadow-sm"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="h-16 w-16 bg-light-gold/30 text-gold rounded-full flex items-center justify-center mx-auto text-2xl font-serif">
                    ॐ
                  </div>
                  <h3 className="text-2xl font-serif">Message Received</h3>
                  <p className="text-muted max-w-md mx-auto text-sm">
                    Thank you for contacting Chants & Bells. Our team will review your query and assist you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs tracking-wider uppercase font-semibold text-gold underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection Pills */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-muted">
                      What can we help you with?
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {supportCategories.map((cat) => (
                        <motion.button
                          key={cat}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${
                            selectedCategory === cat
                              ? "bg-gold text-white border-gold shadow-sm"
                              : "bg-background/80 text-muted border-border hover:border-gold/50"
                          }`}
                        >
                          {cat}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your request or order ID..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                    />
                  </div>

                  {/* Motion Submit Button */}
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-sm font-semibold tracking-wide rounded-xl shadow-md transition-all"
                    >
                      {isSubmitting ? "Sending..." : "Send Message →"}
                    </Button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}