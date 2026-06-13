"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah perlu reservasi sebelum datang?",
    answer:
      "Kami sangat menyarankan reservasi terlebih dahulu agar Anda mendapatkan jadwal treatment yang tersedia tanpa harus menunggu.",
  },
  {
    question: "Apakah tersedia therapist wanita dan pria?",
    answer:
      "Ya, tersedia therapist wanita dan pria yang profesional dan berpengalaman sesuai kebutuhan Anda.",
  },
  {
    question: "Apakah treatment aman untuk ibu hamil?",
    answer:
      "Kami menyediakan maternity reflexology dan maternity massage khusus untuk ibu hamil dengan therapist terlatih.",
  },
  {
    question: "Jam operasional Chakra Reflexology?",
    answer:
      "Kami buka setiap hari untuk sesi siang dan malam. Silakan hubungi admin untuk reservasi terbaru.",
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Kami menerima pembayaran tunai, transfer bank, QRIS, dan e-wallet.",
  },
];

export default function FAQSection() {
  return (
    <section id="FAQ" className="scroll-mt-32 bg-[#2C2419] py-16 md:py-24">
      <style>{`
        .faq-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }
        .faq-content[data-state="open"] {
          grid-template-rows: 1fr;
        }
        .faq-content-inner {
          overflow: hidden;
        }
      `}</style>
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A96E]">
            Frequently Asked Questions
          </p>
          <h2 className="heading-font mb-5 text-4xl text-[#F5EEE4] md:text-5xl">
            Everything You Need
            <span className="block text-[#C9A96E]">To Know</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-[#D8CCBE]">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
            pelanggan Chakra Reflexology.
          </p>
        </div>

        {/* FAQ */}
        <div className="rounded-[32px] border border-[#C9A96E]/10 bg-[#3A2F24] p-4 md:p-6 lg:p-8">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <AccordionPrimitive.Item
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-[#C9A96E]/10 bg-[#2C2419] px-4 md:px-5 transition-colors duration-300 hover:border-[#C9A96E]/30 hover:bg-[#332A1F]"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-start gap-3 py-4 text-left text-base font-medium text-[#F5EEE4] transition-colors hover:no-underline data-[state=open]:text-[#C9A96E] md:py-5 md:text-[17px]">
                    <span className="flex-1">{faq.question}</span>
                    <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A96E] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="faq-content" forceMount>
                  <div className="faq-content-inner">
                    <p className="pb-4 text-[14px] leading-7 text-[#D8CCBE] md:pb-5 md:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  );
}
