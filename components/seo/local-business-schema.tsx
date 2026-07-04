// components/seo/local-business-schema.tsx

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        name: "Chakra Reflexology",
        image: "https://chakrareflexology.com/og-image.jpg",
        url: "https://chakrareflexology.com",
        telephone: "+6282177980464",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Citayam No. 87A-B",
          addressLocality: "Depok",
          addressRegion: "Jawa Barat",
          postalCode: "16431",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-6.4400",
          longitude: "106.8150",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:30",
            closes: "23:59",
          },
        ],
        priceRange: "$$",
        sameAs: ["https://instagram.com/chakrafamilymassage"],
      },
      {
        "@type": "WebSite",
        name: "Chakra Reflexology",
        url: "https://chakrareflexology.com",
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
