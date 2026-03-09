import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import ProfileSection from "@/components/profile-section";
import PledgeSection from "@/components/pledge-section";
import GallerySection from "@/components/gallery-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <ProfileSection />
        <PledgeSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
