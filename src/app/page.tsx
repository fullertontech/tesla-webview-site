import BannerSlider from "@/components/home/BannerSliderSection";
import Events from "@/components/home/EventSection";
import FAQ from "@/components/home/FAQSection";
import Features from "@/components/home/FeatureSection";
import FunctionMenu from "@/components/home/FunctionMenuSection";
import News from "@/components/home/NewsSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <BannerSlider />
      <News />
      <FunctionMenu />
      <Events />
      <Features />
      <FAQ />
    </div>
  );
}
