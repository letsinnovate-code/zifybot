import Image from "next/image";
import { images } from "../images";

export default function FeatureCards() {
  return (
    <>
      <div className="absolute backdrop-blur-[12.486px] backdrop-filter border-[1.249px] border-[rgba(158,106,235,0.1)] border-solid h-[128.067px] left-[calc(60%+133px)] rounded-[12.486px] top-[1686px] w-[381px]" data-node-id="1:331">
        <p className="absolute font-lexend font-normal leading-[1.6] left-[93.73px] text-[19.978px] text-white top-[30.59px] w-[243.328px] whitespace-pre-wrap" data-node-id="1:333">
          Smart Cold Calling
        </p>
        <div className="absolute flex flex-col font-plus-jakarta font-normal justify-center leading-[0] right-[284.77px] text-[18.729px] text-white top-[75.67px] translate-x-[100%] translate-y-[-50%] w-[243.477px]" data-node-id="1:334">
          <p className="leading-[normal] whitespace-pre-wrap">{`Learn More  →`}</p>
        </div>
        <div className="absolute left-[22.29px] overflow-clip size-[50.02px] top-[35.93px]" data-name="insurance 1" data-node-id="1:335">
          <div className="absolute inset-[-0.03%_-6.56%_-15.19%_-8.65%]" data-name="phone-calling-rounded 1" data-node-id="1:336">
            <Image alt="" src={images.phoneCallingRounded1} fill className="object-cover" unoptimized />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3.746px_3.746px_4.994px_0px_rgba(171,115,255,0.17)]" />
      </div>

      <div className="absolute backdrop-blur-[12.486px] backdrop-filter border-[1.249px] border-[rgba(158,106,235,0.1)] border-solid h-[128.067px] left-[calc(40%+312px)] rounded-[12.486px] top-[1847px] w-[381px]" data-node-id="1:340">
        <p className="absolute font-lexend font-normal leading-[1.6] left-[93.73px] text-[19.978px] text-white top-[31.83px] w-[224.118px] whitespace-pre-wrap" data-node-id="1:342">
          AI-email marketing
        </p>
        <div className="absolute inset-[calc(32.04%-1.25px)_calc(80.11%-1.25px)_calc(35.37%-1.25px)_calc(8.12%-1.25px)]" data-name="Group" data-node-id="1:344">
          <Image alt="" src={images.group} fill className="object-cover" unoptimized />
        </div>
        <div className="absolute flex flex-col font-plus-jakarta font-normal justify-center leading-[0] right-[286.9px] text-[18.729px] text-white top-[75.85px] translate-x-[100%] translate-y-[-50%] w-[243.477px]" data-node-id="1:347">
          <p className="leading-[normal] whitespace-pre-wrap">{`Learn More  →`}</p>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3.746px_3.746px_4.994px_0px_rgba(171,115,255,0.17)]" />
      </div>

      <div className="absolute backdrop-blur-[12.486px] backdrop-filter border-[1.249px] border-[rgba(158,106,235,0.1)] border-solid h-[128.067px] left-[calc(80%-45px)] rounded-[12.486px] top-[1848px] w-[381px]" data-node-id="1:348">
        <div className="absolute flex flex-col font-plus-jakarta font-normal justify-center leading-[0] right-[285.84px] text-[18.729px] text-white top-[76.92px] translate-x-[100%] translate-y-[-50%] w-[243.477px]" data-node-id="1:350">
          <p className="leading-[normal] whitespace-pre-wrap">{`Learn More  →`}</p>
        </div>
        <p className="absolute font-lexend font-normal h-[25.613px] leading-[1.6] left-[92.67px] text-[19.978px] text-white top-[31.84px] w-[219.849px] whitespace-pre-wrap" data-node-id="1:351">
          Get Leads from CRM
        </p>
        <div className="absolute left-[20.78px] size-[52.963px] top-[35.71px]" data-name="click 1" data-node-id="1:352">
          <Image alt="" src={images.click1} fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3.746px_3.746px_4.994px_0px_rgba(171,115,255,0.17)]" />
      </div>
    </>
  );
}

