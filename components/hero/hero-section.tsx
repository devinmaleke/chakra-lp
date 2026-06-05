// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export default function HeroSection() {
//   return (
//     <section className="relative flex min-h-screen items-center overflow-hidden bg-[#2C2419] px-6 pt-20">
//       <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="heading-font mb-6 text-5xl leading-tight text-[#F3E9DF] md:text-5xl">
//             Family Massage, Reflexology,
//             <span className="block text-[#C8B89B]">Shiatsu & Thai</span>
//           </h1>
//           <p className="max-w-xl text-lg leading-relaxed text-[#F3E9DF]">
//             Rasakan pengalaman relaksasi premium dengan terapi reflexology,
//             aromatherapy, dan body treatment yang membantu tubuh kembali
//             seimbang.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-2">
//             <Button className="rounded-full bg-[#A8B29F] px-8 py-6 text-base hover:bg-[#96A08E]">
//               Book Treatment
//             </Button>

//             <Button
//               variant="outline"
//               className="rounded-full border-[#A8B29F] px-8 py-6 text-base text-[#A8B29F]"
//             >
//               View Services
//             </Button>
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative"
//         >
//           <div className="absolute inset-0 rounded-[40px] bg-[#A8B29F]/20 blur-3xl" />

//           <img
//             src="/hero.webp"
//             alt="Spa"
//             className="relative h-[600px] w-full rounded-[40px] object-cover shadow-2xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* ── BACKGROUND IMAGE (full bleed) ── */}
      <Image
        src="/hero.webp"
        alt="Interior premium Chakra Reflexology"
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover"
        style={{ filter: "brightness(0.75) saturate(0.85)" }}
      />

      {/* Left-to-right dark fade — keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0C08] via-[#0F0C08]/80 to-[#0F0C08]/20" />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C08]/80 via-transparent to-transparent" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 px-10 py-24 md:px-16 lg:px-20">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-3"
          ></motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="heading-font mb-0 text-5xl font-light leading-[1.12] text-[#F5EEE4] md:text-6xl lg:text-7xl"
          >
            Family Massage, Reflexology,
            <br />
            <em className="italic text-[#C9A96E]">Shiatsu & Thai</em>
          </motion.h1>

          {/* Ornament divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="my-6 flex items-center gap-3"
            style={{ transformOrigin: "left" }}
          >
            <div className="h-px w-9 bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
            <div className="h-[5px] w-[5px] rotate-45 border border-[#C9A96E]" />
            <div className="h-px w-9 bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
          </motion.div>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-10 text-[16px] font-light leading-loose tracking-[0.04em] text-[#F5EEE4]"
          >
            Rasakan pengalaman relaksasi premium dengan terapi reflexology,
            massage, dan special treatment yang membantu tubuh kembali seimbang.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary CTA */}
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/6282177980464?text=Halo%20Chakra,%20saya%20ingin%20melakukan%20reservasi%20treatment.",
                  "_blank",
                )
              }
              className="rounded-full bg-[#C9A96E] px-8 py-6 text-[#2C2419] transition-all hover:bg-[#DFC08A]"
            >
              Book Treatment
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="outline"
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-[#C9A96E] bg-transparent px-8 py-6 text-[#C9A96E] transition-all hover:bg-[#C9A96E] hover:text-[#2C2419]"
            >
              View Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
