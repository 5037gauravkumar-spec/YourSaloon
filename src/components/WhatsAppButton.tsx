"use client";

import { MessageCircle } from "lucide-react";
import { SOCIAL_LINKS, WHATSAPP_MESSAGES } from "@/lib/social";

export default function WhatsAppButton() {
  const href = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium pr-1">WhatsApp</span>
    </a>
  );
}
