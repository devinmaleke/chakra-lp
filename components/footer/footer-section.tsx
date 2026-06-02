"use client";

import { MapPin, Phone, Mail, Clock3 } from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer id="page-footer" className="bg-[#2B211B] text-white">
      {/* TOP */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C7A46A]">
            Chakra Reflexology
          </p>

          <h2 className="heading-font mb-6 text-5xl leading-tight">
            Relax Your Body,
            <span className="block text-[#C7A46A]">Calm Your Mind</span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Nikmati pengalaman spa premium dengan suasana nyaman, therapist
            profesional, dan treatment terbaik untuk membantu tubuh kembali
            rileks dan seimbang.
          </p>

          <Button className="mt-8 rounded-full bg-[#C7A46A] px-8 py-6 text-base hover:bg-[#B89357]">
            Book Treatment
          </Button>
        </div>

        {/* RIGHT */}
        <div className="grid gap-6">
          {/* ADDRESS */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="text-[#C7A46A]" />

              <h3 className="text-xl font-semibold">Location</h3>
            </div>

            <p className="leading-relaxed text-white/70">
              Jl. Citayam No. 87A-B, Depok
              <br />
              (d/h Ruko Kartini)
            </p>
          </div>

          {/* HOURS */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="text-[#C7A46A]" />

              <h3 className="text-xl font-semibold">Opening Hours</h3>
            </div>

            <div className="space-y-2 text-white/70">
              <p>Day : 08.30 - 20.30</p>
              <p>Night : 20.30 - 08.30</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <Phone className="text-[#C7A46A]" />

              <h3 className="text-xl font-semibold">Contact</h3>
            </div>

            <div className="space-y-4 text-white/70">
              <a
                href="tel:+6282177980464"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone size={18} />
                0821-7798-0464
              </a>

              <a
                href="https://instagram.com/chakrafamilymassage"
                target="_blank"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaInstagram size={18} />
                @chakrafamilymassage
              </a>

              <a
                href="mailto:chakradepok@gmail.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail size={18} />
                chakradepok@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/50 md:flex-row">
          <p>© 2026 Chakra Reflexology. All rights reserved.</p>

          <p>Premium Spa & Wellness Experience</p>
        </div>
      </div>
    </footer>
  );
}
