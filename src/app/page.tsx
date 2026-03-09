import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import FeaturesSection from "@/components/features-section";
import UseCasesSection from "@/components/use-cases-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main>
        <HeroBanner />
        <FeaturesSection />
        <UseCasesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
