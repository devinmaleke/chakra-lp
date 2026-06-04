// "use client";

// import { motion } from "framer-motion";
// import { pricingData } from "@/lib/pricing-data";
// import { Button } from "@/components/ui/button";

// export default function PricingSection() {
//   return (
//     <section id="pricing" className="bg-[#2C2419] py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* HEADER */}
//         <div className="mx-auto mb-16 max-w-2xl text-center">
//           <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A96E]">
//             Treatment Pricing
//           </p>

//           <h2 className="heading-font mb-6 text-4xl text-[#F5EEE4] md:text-6xl">
//             Relaxation Packages
//           </h2>

//           <p className="text-lg text-[#C9A96E]">
//             Temukan treatment terbaik untuk tubuh dan pikiran Anda.
//           </p>
//         </div>

//         {/* PRICING */}
//         <div className="space-y-10">
//           {pricingData.map((category, index) => (
//             <motion.div
//               key={category.category}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//               }}
//               viewport={{ once: true }}
//               className="rounded-[40px] bg-white p-8 shadow-xl"
//             >
//               <div className="mb-8 flex items-center justify-between border-b border-black/5 pb-4">
//                 <h3 className="heading-font text-3xl text-[#3B3B3B]">
//                   {category.category}
//                 </h3>

//                 <div className="hidden gap-10 md:flex">
//                   <span className="font-semibold text-[#A8B29F]">Day</span>

//                   <span className="font-semibold text-[#A8B29F]">Night</span>
//                 </div>
//               </div>

//               <div className="space-y-5">
//                 {category.items.map((item) => (
//                   <div
//                     key={item.title}
//                     className="flex flex-col gap-4 rounded-2xl border border-black/5 p-5 md:flex-row md:items-center md:justify-between"
//                   >
//                     <h4 className="text-lg font-medium text-[#3B3B3B]">
//                       {item.title}
//                     </h4>

//                     <div className="flex items-center gap-6 text-right">
//                       <div className="w-[120px]">
//                         <p className="text-xs uppercase text-[#A8B29F] md:hidden">
//                           Day
//                         </p>

//                         <p className="font-semibold text-[#3B3B3B]">
//                           IDR {item.dayPrice}
//                         </p>
//                       </div>

//                       <div className="w-[120px]">
//                         <p className="text-xs uppercase text-[#A8B29F] md:hidden">
//                           Night
//                         </p>

//                         <p className="font-semibold text-[#3B3B3B]">
//                           IDR {item.nightPrice}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-16 text-center">
//           <Button className="rounded-full bg-[#A8B29F] px-10 py-7 text-lg hover:bg-[#96A08E]">
//             Book Your Treatment
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { pricingData } from "@/lib/pricing-data";

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-32 bg-[#2C2419] py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* ── HEADER ── */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A96E]">
            Treatment Pricing
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#F5EEE4] md:text-6xl">
            Relaxation Packages
            <span className="block text-[#C9A96E]">Crafted For You</span>
          </h2>

          <p className="text-[16px] leading-relaxed text-[#D2C6B8]">
            Temukan treatment premium untuk membantu tubuh dan pikiran kembali
            rileks dan seimbang.
          </p>
        </div>

        {/* ── PRICING GROUPS ── */}
        <div className="space-y-4">
          {pricingData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[32px] border border-[#C9A96E]/10 bg-[#3A2F24]"
            >
              {/* Group header */}
              <div className="flex items-center justify-between border-b border-[#C9A96E]/10 px-6 py-5 md:px-8">
                <h3 className="heading-font text-2xl text-[#C9A96E]">
                  {category.category}
                </h3>
                <div className="hidden pr-1 md:flex md:gap-4">
                  {["Day", "Night"].map((label) => (
                    <span
                      key={label}
                      className="w-[100px] text-right text-[12px] font-light uppercase tracking-[0.25em] text-[#C9A96E]"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Items */}
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="group border-b border-[#C9A96E]/5 px-6 py-5 transition-colors last:border-b-0 hover:bg-[#46382B] md:px-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* TITLE */}
                    <h4 className="text-l text-[#F5EEE4]">{item.title}</h4>

                    {/* PRICE */}
                    <div className="flex gap-4 md:gap-8">
                      {/* DAY */}
                      <div className="min-w-[110px] rounded-2xl border border-[#C9A96E]/10 bg-[#2C2419] px-4 py-3 text-center md:min-w-0 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0">
                        <p className="flex items-center justify-end gap-1 text-sm text-[#F5EEE4]">
                          <span className="text-[10px] tracking-[0.12em] text-[#8E7B67]">
                            IDR
                          </span>

                          <span className="w-[52px] text-right">
                            {item.dayPrice}
                          </span>
                        </p>
                      </div>

                      {/* NIGHT */}
                      <div className="min-w-[110px] rounded-2xl border border-[#C9A96E]/10 bg-[#2C2419] px-4 py-3 text-center md:min-w-0 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0">
                        <p className="flex items-center justify-end gap-1 text-sm text-[#F5EEE4]">
                          <span className="text-[10px] tracking-[0.12em] text-[#8E7B67]">
                            IDR
                          </span>

                          <span className="w-[52px] text-right">
                            {item.nightPrice}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
