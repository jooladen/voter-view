import Header from "@/components/demo/demo-header";
import HeroBanner from "@/components/demo/demo-hero-banner";
import ProfileSection from "@/components/profile-section";
import PledgeSection from "@/components/pledge-section";
import GallerySection from "@/components/demo/demo-gallery-section";
import Footer from "@/components/demo/demo-footer";
import SectionDivider from "@/components/section-divider";
import ScrollProgress from "@/components/scroll-progress";
import CustomCursor from "@/components/custom-cursor";

const DIVIDER_FILL = "#0f172a";

export default function DemoPage() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main>
        <HeroBanner />
        <SectionDivider fill={DIVIDER_FILL} />
        <ProfileSection />
        <SectionDivider fill={DIVIDER_FILL} flip />
        <PledgeSection />
        <SectionDivider fill={DIVIDER_FILL} />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
