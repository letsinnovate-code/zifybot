import Image from "next/image";
import { images } from "../images";

export function BackgroundGradient() {
  return (
    <div
      className="absolute h-[6014px] left-[-1498px] top-[676px] w-[5016px] pointer-events-none"
      data-name="Background Gradient"
      data-node-id="1:120"
    >
      <Image alt="" src={images.backgroundGradient} fill className="object-cover" unoptimized />
    </div>
  );
}

export function HomePrimaryBackground() {
  return (
    <div className="absolute h-[4066px] left-0 top-0 w-[3088px]" data-name="Background" data-node-id="1:69">
      <div className="absolute inset-[-2.29%_0_0_0]">
        <Image alt="" src={images.background} fill className="object-cover" unoptimized />
      </div>
    </div>
  );
}


