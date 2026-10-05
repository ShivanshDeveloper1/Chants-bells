import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chants & Bells | Ancient Wisdom. Modern Life.",
  description:
    "Guided Navratri pooja and devotional rituals with authentic step-by-step guidance from experienced Panditji.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <SmoothScroll>
      <body className="min-h-full flex flex-col">{children}</body>
      </SmoothScroll>
    </html>
  );
}
