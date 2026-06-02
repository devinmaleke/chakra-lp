"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phoneNumber = "6282177980464";

  const message = "Halo Chakra Reflexology, saya ingin booking treatment.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* PULSE */}
      <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />

      {/* BUTTON */}
      <div className="relative flex items-center"></div>
      <div className="absolute right-20 whitespace-nowrap rounded-full bg-[#3B3B3B] px-4 py-2 text-sm text-white opacity-0 transition duration-300 group-hover:opacity-100">
        Book via WhatsApp
      </div>
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition duration-300 hover:scale-110">
        <FaWhatsapp size={34} className="text-white" />
      </div>
    </a>
  );
}
