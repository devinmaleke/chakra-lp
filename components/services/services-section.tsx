"use client";

import { motion } from "framer-motion";
import {
  HandFist,
  PersonStanding,
  HeartHandshake,
  Footprints,
} from "lucide-react";

const services = [
  {
    title: "Reflexology",
    description:
      "Sentuhan pada titik saraf kaki yang membantu tubuh kembali seimbang, pikiran lebih ringan, dan energi mengalir alami.",
    icon: Footprints,
  },
  {
    title: "Massage",
    description:
      "Setiap sentuhan membantu melepaskan ketegangan, memberi kenyamanan, dan menghadirkan relaksasi menyeluruh.",
    icon: PersonStanding,
  },
  {
    title: "Body Scrub",
    description:
      "Perawatan yang membersihkan dan memperbarui kulit, menjadikannya lebih halus, cerah, dan segar.",
    icon: HandFist,
  },
  {
    title: "Special Treatment",
    description:
      "Perawatan pilihan untuk relaksasi lebih dalam, pemulihan tubuh, dan sensasi yang bertahan lebih lama.",
    icon: HeartHandshake,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-32 bg-[#F3E9DF] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A96E]">
            Our Services
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#3B3B3B] md:text-6xl">
            Relaxation Made
            <span className="block text-[#C9A96E]">Especially For You</span>
          </h2>

          <p className="text-[16px] leading-relaxed text-[#3B3B3B]">
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
                className="group flex h-full flex-col rounded-[32px] border border-[#C9A96E]/10 bg-[#FFF9F3] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A96E]/30 hover:bg-[#2C2419] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              >
                {/* ICON */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A96E]/10 text-[#C9A96E] transition-all duration-300 group-hover:bg-[#C9A96E] group-hover:text-white">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#2C2419] transition-colors duration-300 group-hover:text-[#F7F2EC]">
                    {service.title}
                  </h3>

                  <p className="text-[15px] leading-7 text-[#6B6257] transition-colors duration-300 group-hover:text-[#D6D0C7]">
                    {service.description}
                  </p>
                </div>

                {/* BOTTOM LINE */}
                <div className="mt-8 h-px w-full bg-[#C9A96E]/10 transition-colors duration-300 group-hover:bg-[#C9A96E]/30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
