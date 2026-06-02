"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B29F]">
            Premium Spa & Reflexology
          </p>
          <h1 className="heading-font mb-6 text-5xl leading-tight text-[#3B3B3B] md:text-7xl">
            Relax Your
            <span className="block text-[#A8B29F]">Body & Mind</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[#5E5E5E]">
            Rasakan pengalaman relaksasi premium dengan terapi reflexology,
            aromatherapy, dan body treatment yang membantu tubuh kembali
            seimbang.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="rounded-full bg-[#A8B29F] px-8 py-6 text-base hover:bg-[#96A08E]">
              Book Treatment
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-[#A8B29F] px-8 py-6 text-base text-[#A8B29F]"
            >
              View Services
            </Button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[40px] bg-[#A8B29F]/20 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
            alt="Spa"
            className="relative h-[600px] w-full rounded-[40px] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
