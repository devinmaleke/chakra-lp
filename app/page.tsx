import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import BenefitsSection from "@/components/benefits/benefits-section";
import GallerySection from "@/components/gallery/gallery-section";
import PricingSection from "@/components/pricing/pricing-section";
import WhatsAppFloat from "@/components/whatsapp/whatsapp-float";
import FAQSection from "@/components/faq/faq-section";
import FooterSection from "@/components/footer/footer-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F2EC]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <GallerySection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
      <WhatsAppFloat />
    </main>
  );
}
