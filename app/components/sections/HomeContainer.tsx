import Image from "next/image";
import { images } from "../images";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import AdditionalCards from "./AdditionalCards";

export default function HomeContainer() {
  return (
    <div className="absolute h-[8175.669px] left-[-584px] top-[-1238px] w-[3088px] max-w-none" data-name="Home" data-node-id="37:31">
      <div className="absolute h-[4066px] left-0 top-0 w-[3088px]" data-name="Background" data-node-id="1:69">
        <div className="absolute inset-[-2.29%_0_0_0]">
          <Image alt="" src={images.background} fill className="object-cover" unoptimized />
        </div>
      </div>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AdditionalCards />
    </div>
  );
}

