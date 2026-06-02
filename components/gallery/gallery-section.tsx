"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    height: "h-[500px]",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    height: "h-[350px]",
  },
  {
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
    height: "h-[400px]",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    height: "h-[550px]",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B29F]">
            Our Gallery
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#3B3B3B] md:text-6xl">
            A Space Designed For
            <span className="block text-[#A8B29F]">Peace & Comfort</span>
          </h2>

          <p className="text-lg leading-relaxed text-[#5E5E5E]">
            Nikmati suasana spa yang tenang, hangat, dan elegan untuk membantu
            tubuh dan pikiran benar-benar beristirahat.
          </p>
        </div>

        {/* GALLERY */}
        <div className="grid gap-6 md:grid-cols-2">
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
              className={`group relative overflow-hidden rounded-[40px] ${image.height}`}
            >
              <Image
                src={image.src}
                alt="Spa Gallery"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
