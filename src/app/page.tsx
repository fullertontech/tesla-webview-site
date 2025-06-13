import BannerSlider from "@/components/home/BannerSliderSection";
import Events from "@/components/home/EventSection";
import FAQ from "@/components/home/FAQSection";
import Features from "@/components/home/FeatureSection";
import FeatureMenu from "@/components/home/FeatureMenuSection";
import News from "@/components/home/NewsSection";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <BannerSlider />
      <News />
      <FeatureMenu />
      <Events />
      <Features />
      <FAQ />
    </div>
  );
}
