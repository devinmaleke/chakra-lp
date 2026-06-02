"use client";

import { motion } from "framer-motion";
import { pricingData } from "@/lib/pricing-data";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#F7F2EC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B29F]">
            Treatment Pricing
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#3B3B3B] md:text-6xl">
            Relaxation Packages
          </h2>

          <p className="text-lg text-[#5E5E5E]">
            Temukan treatment terbaik untuk tubuh dan pikiran Anda.
          </p>
        </div>

        {/* PRICING */}
        <div className="space-y-10">
          {pricingData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-[40px] bg-white p-8 shadow-xl"
            >
              <div className="mb-8 flex items-center justify-between border-b border-black/5 pb-4">
                <h3 className="heading-font text-3xl text-[#3B3B3B]">
                  {category.category}
                </h3>

                <div className="hidden gap-10 md:flex">
                  <span className="font-semibold text-[#A8B29F]">Day</span>

                  <span className="font-semibold text-[#A8B29F]">Night</span>
                </div>
              </div>

              <div className="space-y-5">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-4 rounded-2xl border border-black/5 p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <h4 className="text-lg font-medium text-[#3B3B3B]">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-6 text-right">
                      <div className="w-[120px]">
                        <p className="text-xs uppercase text-[#A8B29F] md:hidden">
                          Day
                        </p>

                        <p className="font-semibold text-[#3B3B3B]">
                          IDR {item.dayPrice}
                        </p>
                      </div>

                      <div className="w-[120px]">
                        <p className="text-xs uppercase text-[#A8B29F] md:hidden">
                          Night
                        </p>

                        <p className="font-semibold text-[#3B3B3B]">
                          IDR {item.nightPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button className="rounded-full bg-[#A8B29F] px-10 py-7 text-lg hover:bg-[#96A08E]">
            Book Your Treatment
          </Button>
        </div>
      </div>
    </section>
  );
}
