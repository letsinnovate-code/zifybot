export function TestimonialCardsOverride() {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      /* Override testimonial cards background at top-[4699px] */
      div[data-name="ZifyBot - Landing Page"] > div[class*="top-[4699px]"][class*="left-[436px]"],
      div[data-name="ZifyBot - Landing Page"] > div[class*="top-[4699px]"][class*="left-[calc(40%+229px)]"] {
        background: radial-gradient(251.65% 89.92% at 50.22% 50.31%, rgba(129, 47, 251, 0.04) 0%, rgba(187, 160, 229, 0.14) 100%) !important;
        box-shadow: inset 3.746px 3.746px 4.994px 0px rgba(171, 115, 255, 0.17) !important;
      }
      
      /* Override 500K text stroke */
      div[class*="top-[5916px]"] p {
        -webkit-text-stroke-width: 3.5px !important;
        -webkit-text-stroke-color: #000 !important;
        font-family: Poppins !important;
        font-size: 245.224px !important;
        font-weight: 600 !important;
        line-height: 274.312px !important;
        letter-spacing: 4.904px !important;
        background: linear-gradient(287deg, rgba(201, 164, 255, 0.10) 22.55%, rgba(255, 254, 254, 0.10) 57.54%) !important;
        background-clip: text !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
      }
    ` }} />
  );
}
