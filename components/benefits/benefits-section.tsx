"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Leaf, CalendarCheck } from "lucide-react";

const benefits = [
  {
    title: "Certified Therapist",
    description:
      "Terapis profesional dan berpengalaman untuk memberikan treatment terbaik.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Atmosphere",
    description:
      "Suasana tenang dengan interior elegan untuk pengalaman relaksasi maksimal.",
    icon: Sparkles,
  },
  {
    title: "Natural Essential Oil",
    description:
      "Menggunakan essential oil premium dengan aroma yang menenangkan tubuh dan pikiran.",
    icon: Leaf,
  },
  {
    title: "Easy Booking",
    description:
      "Reservasi mudah melalui WhatsApp dengan respon cepat dan fleksibel.",
    icon: CalendarCheck,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#2C2419] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── HEADER ── */}
        <div className="mx-auto mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A96E]">
            Why Choose Us
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#F5EEE4] md:text-6xl">
            Experience The Art of
            <span className="block text-[#C9A96E]">True Relaxation</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[16px] leading-relaxed text-[#F5EEE4]"
          >
            Kami menghadirkan pengalaman spa premium dengan pelayanan
            profesional, suasana nyaman, dan treatment berkualitas tinggi.
          </motion.p>
        </div>

        {/* ── CONTENT ── */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px]"
          >
            <img
              src="/benefit.webp"
              alt="Spa Interior"
              className="h-[540px] w-full rounded-[32px] object-cover"
              style={{ filter: "brightness(0.8) saturate(0.85)" }}
            />
          </motion.div>

          {/* RIGHT BENEFITS */}
          <div className="grid gap-3.5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[28px] border border-[#C9A96E]/10 bg-[#3A2F24] px-7 py-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A96E]/30 hover:bg-[#46382B] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  {/* Left accent line on hover */}
                  <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="mt-1 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#C9A96E]/15 bg-[#4A3B2D] text-[#C9A96E] transition-all duration-500 group-hover:border-[#C9A96E]/40 group-hover:bg-[#C9A96E] group-hover:text-[#2C2419]">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="heading-font mb-3 text-[22px] leading-none text-[#F5EEE4] transition-colors duration-300 group-hover:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-7 tracking-[0.02em] text-[#9B8C7B] transition-colors duration-300 group-hover:text-[#D8CCBE]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
