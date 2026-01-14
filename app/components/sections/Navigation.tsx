import Image from "next/image";
import Link from "next/link";
import { images } from "../images";

export default function Navigation() {
  return (
    <div className="absolute h-[74px] left-[704px] top-[1307px] w-[1670px]" data-name="Nav" data-node-id="37:37">
      <div className="absolute bg-white content-stretch flex flex-col h-[54px] items-start justify-center left-[1520px] px-[44px] py-0 rounded-[13.453px] shadow-[0px_0px_83.25px_11.25px_rgba(255,255,255,0.5)] top-[10px] w-[150px]" data-name="Button" data-node-id="37:51">
        <p className="font-poppins font-semibold leading-[normal] not-italic relative shrink-0 text-[#812ffb] text-[17.093px] text-center w-[61px] whitespace-pre-wrap" data-node-id="1:111">
          Login
        </p>
      </div>
      <div className="absolute backdrop-blur-[20.95px] backdrop-filter border border-[#812ffb] border-solid h-[74px] left-[calc(50%+4.5px)] rounded-[15px] top-0 translate-x-[-50%] w-[667px]" data-name="Menu" data-node-id="37:52" style={{ backgroundImage: "linear-gradient(-50.226523322605516deg, rgba(41, 10, 87, 0.1) 52.057%, rgba(129, 47, 251, 0.1) 93.836%)" }}>
        <p className="absolute font-poppins font-normal leading-none left-[72px] not-italic text-[22.289px] text-white top-[25.46px]" data-node-id="1:114">
          Home
        </p>
        <Link href="/about" className="absolute left-[198.6px] top-[25.46px] z-50">
          <p className="font-poppins font-normal leading-none not-italic text-[22.289px] text-white cursor-pointer" data-node-id="1:115">
            About
          </p>
        </Link>
        <Link href="/feature" className="absolute left-[325.2px] top-[25.46px] z-50">
          <p className="font-poppins font-normal leading-none not-italic text-[22.289px] text-white cursor-pointer" data-node-id="1:116">
            Feature
          </p>
        </Link>
        <div className="absolute font-poppins font-normal leading-none left-[475px] not-italic text-[22.289px] text-white top-[25.46px] whitespace-nowrap" data-node-id="1:117">
          <p className="mb-0">Contact Us</p>
          <p>&nbsp;</p>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_4px_4px_19.1px_0px_rgba(187,160,229,0.25),inset_-7px_-2px_19.1px_0px_rgba(41,10,87,0.53)]" />
      </div>
      <div className="absolute h-[42px] left-0 top-[16px] w-[223px]" data-name="1234566535_xlhsqk 1" data-node-id="1:119">
        <Image alt="" src={images.logo} fill className="object-cover pointer-events-none" unoptimized />
      </div>
    </div>
  );
}

