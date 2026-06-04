"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/gallery-1.webp",
    desktopHeight: "md:h-[320px]",
  },
  {
    src: "/gallery-6.webp",
    desktopHeight: "md:h-[520px]",
  },
  {
    src: "/gallery-5.webp",
    desktopHeight: "md:h-[520px]",
  },
  {
    src: "/gallery-4.webp",
    desktopHeight: "md:h-[420px]",
  },
  {
    src: "/gallery-3.webp",
    desktopHeight: "md:h-[420px]",
  },
  {
    src: "/gallery-2.webp",
    desktopHeight: "md:h-[320px]",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-32 bg-[#F3E9DF] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A96E]">
            Our Gallery
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#3B3B3B] md:text-6xl">
            A Space Designed For
            <span className="block text-[#C9A96E]">Peace & Comfort</span>
          </h2>

          <p className="text-[16px] leading-relaxed text-[#5E5E5E]">
            Nikmati suasana spa yang tenang, hangat, dan elegan untuk membantu
            tubuh dan pikiran benar-benar beristirahat.
          </p>
        </div>

        {/* GALLERY */}
        <div className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[40px] break-inside-avoid h-[320px] ${image.desktopHeight}`}
            >
              <Image
                src={image.src}
                alt="Spa Gallery"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
