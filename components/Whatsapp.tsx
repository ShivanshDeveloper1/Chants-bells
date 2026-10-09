
"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919760550358";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Namaste! I would like to know more about the Chants & Bells Navratri Anushthan."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={28} strokeWidth={2.2} />

      <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-600" />
    </a>
  );
}