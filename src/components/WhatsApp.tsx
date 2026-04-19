"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition hover:-translate-y-1"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}