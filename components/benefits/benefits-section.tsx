"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Leaf, Clock3 } from "lucide-react";

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
    icon: Clock3,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#F7F2EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B29F]">
            Why Choose Us
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#3B3B3B] md:text-6xl">
            Experience The Art of
            <span className="block text-[#A8B29F]">True Relaxation</span>
          </h2>

          <p className="text-lg leading-relaxed text-[#5E5E5E]">
            Kami menghadirkan pengalaman spa premium dengan pelayanan
            profesional, suasana nyaman, dan treatment berkualitas tinggi.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[40px] bg-[#A8B29F]/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
              alt="Spa Interior"
              className="relative h-[650px] w-full rounded-[40px] object-cover shadow-2xl"
            />
          </motion.div>

          {/* RIGHT BENEFITS */}
          <div className="grid gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="rounded-[32px] bg-white p-8 shadow-lg"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#A8B29F]/10 text-[#A8B29F]">
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-[#3B3B3B]">
                    {benefit.title}
                  </h3>

                  <p className="leading-relaxed text-[#5E5E5E]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
