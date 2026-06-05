// components/seo/faq-schema.tsx

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah perlu reservasi sebelum datang?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami sangat menyarankan reservasi terlebih dahulu agar Anda mendapatkan jadwal treatment yang tersedia.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah tersedia therapist wanita dan pria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, tersedia therapist wanita dan pria yang profesional dan berpengalaman.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah treatment aman untuk ibu hamil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami menyediakan maternity reflexology dan maternity massage khusus untuk ibu hamil.",
        },
      },
      {
        "@type": "Question",
        name: "Jam operasional Chakra Reflexology?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami buka setiap hari untuk sesi siang dan malam.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
