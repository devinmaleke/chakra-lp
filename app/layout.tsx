import type { Metadata } from "next";
import { Sen, Tenor_Sans } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/seo/local-business-schema";

const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor-sans",
});

export const metadata: Metadata = {
  title:
    "Chakra Reflexology Depok | Family Massage, Reflexology, Shiatsu & Thai",

  description:
    "Nikmati layanan reflexology, massage, maternity massage, body scrub, dan treatment premium di Chakra Reflexology Depok. Terapis profesional, suasana nyaman, dan reservasi mudah via WhatsApp.",

  keywords: [
    "reflexology depok",
    "spa depok",
    "massage depok",
    "pijat depok",
    "family massage depok",
    "maternity massage depok",
    "body scrub depok",
    "chakra reflexology",
  ],

  alternates: {
    canonical: "https://chakrareflexology.com",
  },

  openGraph: {
    title: "Chakra Reflexology Depok",
    description: "Family Massage, Reflexology, Shiatsu & Thai di Depok.",
    url: "https://chakrareflexology.com",
    siteName: "Chakra Reflexology",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chakra Reflexology Depok",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.className} ${tenorSans.variable}`}>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
