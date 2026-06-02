"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="bg-[#F7F2EC] py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B29F]">
            Frequently Asked Questions
          </p>

          <h2 className="heading-font mb-6 text-4xl text-[#3B3B3B] md:text-6xl">
            Everything You Need
            <span className="block text-[#A8B29F]">To Know</span>
          </h2>

          <p className="text-lg leading-relaxed text-[#5E5E5E]">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
            pelanggan Chakra Reflexology.
          </p>
        </div>

        {/* FAQ */}
        <div className="rounded-[40px] bg-white p-6 shadow-xl md:p-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-black/5 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#3B3B3B] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-base leading-relaxed text-[#5E5E5E]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
