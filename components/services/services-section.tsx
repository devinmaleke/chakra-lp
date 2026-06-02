"use client";

import { motion } from "framer-motion";
import { Flower2, Sparkles, HeartHandshake, Footprints } from "lucide-react";

const services = [
  {
    title: "Reflexology",
    description:
      "Terapi pijat titik saraf untuk membantu relaksasi dan melancarkan sirkulasi tubuh.",
    icon: Footprints,
  },
  {
    title: "Aromatherapy",
    description:
      "Perawatan relaksasi menggunakan essential oil premium untuk menenangkan pikiran.",
    icon: Flower2,
  },
  {
    title: "Body Massage",
    description:
      "Mengurangi ketegangan otot dan membantu tubuh kembali segar dan rileks.",
    icon: HeartHandshake,
  },
  {
    title: "Luxury Treatment",
    description:
      "Pengalaman spa premium dengan suasana tenang dan pelayanan eksklusif.",
    icon: Sparkles,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B29F]">
            Our Services
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#3B3B3B] md:text-6xl">
            Relaxation Made
            <span className="block text-[#A8B29F]">Especially For You</span>
          </h2>

          <p className="text-lg leading-relaxed text-[#5E5E5E]">
            Nikmati berbagai treatment premium yang dirancang untuk membantu
            tubuh dan pikiran kembali seimbang.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-[32px] border border-black/5 bg-[#F7F2EC] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#A8B29F]/10 text-[#A8B29F]">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#3B3B3B]">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-[#5E5E5E]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
