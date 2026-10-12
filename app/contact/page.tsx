"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
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
  "Payment & Refunds",
  "Grievance Redressal",
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
                Having trouble watching your purchased video guides, need help with payment, or have queries about puja rituals? Reach out to us directly.
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
                <p className="text-xs text-muted mt-1">+91 94564 33321 (10 AM - 7 PM IST)</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-surface/50 border border-border/40">
                <span className="text-gold font-serif text-2xl mb-2">✉️</span>
                <h2 className="text-sm font-medium text-foreground">Email Support</h2>
                <p className="text-xs text-muted mt-1">chantsandbells@gmail.com</p>
              </div>
            </motion.div>

            {/* Form Section */}
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
                    Thank you for contacting Chants & Bells. Our team will review your query and get back to you within 24 hours.
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
                      placeholder="Describe your request, issue, or order reference..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
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

            {/* Business Identity & Grievance Redressal Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs text-muted leading-relaxed"
            >
              {/* Business Details */}
              <div className="p-6 rounded-2xl bg-surface/30 border border-border/50 space-y-2">
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Business Identity & Details
                </h3>
                <p><strong className="text-foreground">Brand Name:</strong> Chants & Bells</p>
                <p><strong className="text-foreground">Operating Entity:</strong> Dhananjai Singh (Sole Proprietor)</p>
                <p><strong className="text-foreground">Business Structure:</strong> Sole Proprietorship</p>
                <p><strong className="text-foreground">Registered Address:</strong> A-116, Sector 132, Noida, Gautambuddha Nagar, Uttar Pradesh 201304, India</p>
                <p><strong className="text-foreground">GSTIN:</strong> 09FCWPS1737M3ZF</p>
                <p><strong className="text-foreground">Support Hours:</strong> 10:00 AM – 7:00 PM IST, Daily</p>
              </div>

              {/* Grievance & Complaints */}
              <div className="p-6 rounded-2xl bg-surface/30 border border-border/50 space-y-2">
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Complaints & Grievances
                </h3>
                <p>
                  For questions regarding payments, video access, refunds, privacy, or service issues, contact:
                </p>
                <p><strong className="text-foreground">Grievance Contact:</strong> Dhananjai Singh (Proprietor)</p>
                <p><strong className="text-foreground">Email:</strong> chantsandbells@gmail.com</p>
                <p><strong className="text-foreground">WhatsApp / Phone:</strong> +91 94564 33321</p>
                <p className="mt-2 text-[11px] italic">
                  *Please include your order reference number and details of the issue for faster resolution.
                </p>
              </div>
            </motion.div>

            {/* Religious Content Disclaimer */}
            <motion.div
              variants={itemVariants}
              className="p-5 rounded-2xl bg-surface/20 border border-border/40 text-center text-xs text-muted leading-relaxed"
            >
              <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wider text-[11px]">
                Religious Content Disclaimer
              </h4>
              <p>
                Chants & Bells provides educational and devotional guidance for self-performed puja. Videos are prerecorded; a Panditji is not physically or live-present with the customer unless expressly stated for a separately offered service. Traditions differ, and participation is voluntary. We do not guarantee fulfillment of wishes or particular spiritual or worldly results.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}