import type { Metadata } from "next";
import { Sen, Tenor_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Chakra Reflexology",
  description: "Premium Spa & Reflexology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.className} ${tenorSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
