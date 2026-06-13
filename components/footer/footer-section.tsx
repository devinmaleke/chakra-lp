"use client";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer
      id="page-footer"
      className="scroll-mt-32 bg-[#F3E9DF] text-[#3B3B3B]"
    >
      {/* TOP */}
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <Image
            src="/logo.svg"
            alt="Chakra Reflexology"
            width={180}
            height={60}
            className="mx-auto mb-8 h-auto w-[170px] lg:mx-0"
          />
          <h2 className="heading-font mb-6 text-4xl leading-tight text-[#3B3B3B] md:text-6xl">
            Relax Your Body,
            <span className="block text-[#C9A96E]">Calm Your Mind</span>
          </h2>
          <p className="mx-auto max-w-xl text-[16px] leading-8 text-[#5E5E5E] lg:mx-0">
            Nikmati pengalaman spa premium dengan therapist profesional, suasana
            yang menenangkan, dan treatment terbaik untuk membantu tubuh kembali
            rileks dan seimbang.
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/6282177980464?text=Halo%20Chakra,%20saya%20ingin%20melakukan%20reservasi%20treatment.",
                "_blank",
              )
            }
            className="mx-auto mt-10 rounded-full border border-[#C9A96E] bg-transparent px-8 py-6 text-[#C9A96E] transition-all hover:bg-[#C9A96E] hover:text-[#F3E9DF] lg:mx-0"
          >
            Book Treatment
          </Button>
        </div>

        {/* RIGHT */}
        <div className="grid gap-5">
          {/* LOCATION */}
          <div className="rounded-[28px] border border-[#C9A96E]/10 bg-[#FFF9F3] p-6 transition-all duration-300 hover:border-[#C9A96E]/20">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A96E]/20 bg-[#F3E9DF] text-[#C9A96E]">
                <MapPin size={18} />
              </div>
              <h3 className="text-lg text-[#2C2419]">Location</h3>
            </div>
            <a
              href="https://maps.app.goo.gl/b1xUNt1cxSccFTvX9"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-2 leading-7 text-[#6B6257] transition hover:text-[#C9A96E]"
            >
              <span>
                Jl. Citayam No. 87A-B, Depok <br /> (d/h Ruko Kartini)
              </span>
              <ExternalLink
                size={14}
                className="mt-1 opacity-50 transition group-hover:opacity-100"
              />
            </a>
          </div>

          {/* HOURS */}
          <div className="rounded-[28px] border border-[#C9A96E]/10 bg-[#FFF9F3] p-6 transition-all duration-300 hover:border-[#C9A96E]/20">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A96E]/20 bg-[#F3E9DF] text-[#C9A96E]">
                <Clock3 size={18} />
              </div>
              <h3 className="text-lg text-[#2C2419]">Opening Hours</h3>
            </div>
            <div className="space-y-2 text-[#6B6257]">
              <p>Day : 08.30 - 20.30</p>
              <p>Night : 20.30 - 08.30</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="rounded-[28px] border border-[#C9A96E]/10 bg-[#FFF9F3] p-6 transition-all duration-300 hover:border-[#C9A96E]/20">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A96E]/20 bg-[#F3E9DF] text-[#C9A96E]">
                <Phone size={18} />
              </div>
              <h3 className="text-lg text-[#2C2419]">Contact</h3>
            </div>
            <div className="space-y-4 text-[#6B6257]">
              <a
                href="tel:+6282177980464"
                className="flex items-center gap-3 transition hover:text-[#C9A96E]"
              >
                <Phone size={18} />
                0821-7798-0464
              </a>
              <a
                href="https://instagram.com/chakrafamilymassage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-[#C9A96E]"
              >
                <FaInstagram size={18} />
                @chakrafamilymassage
              </a>
              <a
                href="mailto:chakradepok@gmail.com"
                className="flex items-center gap-3 transition hover:text-[#C9A96E]"
              >
                <Mail size={18} />
                chakradepok@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ORNAMENT */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
          <div className="h-[6px] w-[6px] rotate-45 border border-[#C9A96E]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 border-t border-[#C9A96E]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-[#8E7B67]">
            © 2026 Chakra. All rights reserved.
          </p>
          <p className="text-sm uppercase tracking-[0.15em] text-[#8E7B67]">
            Family Massage, Reflexology, Shiatsu &amp; Thai
          </p>
        </div>
      </div>
    </footer>
  );
}
