
import HomeContainer from "./components/sections/HomeContainer";
import FeatureCards from "./components/sections/FeatureCards";
import LogoSection from "./components/sections/LogoSection";
import AboutSection from "./components/sections/AboutSection";
import ContentSection from "./components/sections/ContentSection";
import Footer from "./components/sections/Footer";
import PricingContactSection from "./components/sections/PricingContactSection";
import EmptyCards from "./components/sections/EmptyCards";
import DecorativeElements from "./components/sections/DecorativeElements";

export default function ZifyBotLandingPage() {
  return (
    <div className="bg-black max-w-[100vw] overflow-x-hidden relative size-full min-h-screen overflow-x-hidden" data-name="ZifyBot - Landing Page" data-node-id="1:61">
     
      <EmptyCards />
      <HomeContainer />
      <FeatureCards />
      <LogoSection />
      <AboutSection />
      <ContentSection />
      <DecorativeElements />
      <Footer />
      <PricingContactSection />
    </div>
  );
}

