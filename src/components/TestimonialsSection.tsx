// Image paths for Next.js - these reference files in /public/assets/
const imgRectangle2005 = "/assets/61abab83270bd7fe3f95545bd1f83491d071b91d.png";
const imgRectangle2004 = "/assets/0442e80928a60d268061196771dc4a946ffa0928.png";
const imgRectangle2006 = "/assets/360bd9a0793e819aa9f4b60088148f86f05b2e1f.png";
const imgRectangle2007 = "/assets/5d2b61ba9abaa86a792f97a0cd2069f3a78ecfe6.png";

export function TestimonialsSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
            Trusted by Sales Teams
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See what our customers have to say about their
            experience
          </p>
        </div>

        {/* 500K Large Typography */}
        <div className="absolute left-[calc(30%-60px)] top-[-200px] translate-x-[-50%]">
          <p
            className="text-center font-['Poppins'] not-italic"
            style={{
              WebkitTextStrokeWidth: "3.5px",
              WebkitTextStrokeColor: "#000",
              fontSize: "245.224px",
              fontWeight: "600",
              lineHeight: "274.312px",
              letterSpacing: "4.904px",
              background:
                "linear-gradient(287deg, rgba(201, 164, 255, 0.10) 22.55%, rgba(255, 254, 254, 0.10) 57.54%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            500K
          </p>
        </div>

        {/* Testimonials Grid - Exact Figma Structure */}
        <div className="relative" style={{ height: "600px" }}>
          {/* First Card - Empty glassmorphism container */}
          <div
            className="absolute backdrop-blur-[12.486px] backdrop-filter border-[1.249px] border-[rgba(158,106,235,0.1)]  border-solid h-[512px] left-[436px] rounded-[12.486px] top-0 w-[483px]"
            style={{
              background:
                "radial-gradient(251.65% 89.92% at 50.22% 50.31%, rgba(129, 47, 251, 0.04) 0%, rgba(187, 160, 229, 0.14) 100%)",
              boxShadow:
                "inset 3.746px 3.746px 4.994px 0px rgba(171, 115, 255, 0.17)",
            }}
          ></div>

          {/* First Avatar - positioned above card (overlapping) */}
          <div className="absolute left-[calc(436px+241.5px-33.93px)]  top-[49.74px]">
            <div
              className="bg-gradient-to-b from-[#c9a4ff] h-[85.053px] to-[#812ffb]  w-[249.842px]"
              style={{
                maskImage: `url('${imgRectangle2005}')`,
                WebkitMaskImage: `url('${imgRectangle2005}')`,
                maskSize: "199.857px 58.474px",
                WebkitMaskSize: "199.857px 58.474px",
                maskPosition: "19.934px 21.263px",
                WebkitMaskPosition: "19.934px 21.263px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
          </div>

          {/* First Text - below avatar */}
          <p className="absolute font-['Poppins:Light',sans-serif] leading-[33.896px] left-[calc(436px+241.5px)] not-italic text-[18.366px] text-center text-white top-[195px] tracking-[0.3673px] translate-x-[-50%] w-[332px]">
            Sync leads and contacts directly from Zoho CRM.
            Automate workflows and keep your pipeline updated in
            real-time.
          </p>

          {/* Second Card - Empty glassmorphism container */}
          <div
            className="absolute backdrop-blur-[12.486px] backdrop-filter border-[1.249px] border-[rgba(158,106,235,0.1)] border-solid h-[512px] left-[calc(40%+229px)] rounded-[12.486px] top-0 w-[483px]"
            style={{
              background:
                "radial-gradient(251.65% 89.92% at 50.22% 50.31%, rgba(129, 47, 251, 0.04) 0%, rgba(187, 160, 229, 0.14) 100%)",
              boxShadow:
                "inset 3.746px 3.746px 4.994px 0px rgba(171, 115, 255, 0.17)",
            }}
          ></div>

          {/* Second Avatar - positioned above card (overlapping) */}
          <div className="absolute left-[calc(40%+229px+241.5px-26.49px)] top-[48.73px]">
            <div
              className="bg-gradient-to-b from-[#c9a4ff] h-[108.623px] to-[#812ffb] w-[255.662px]"
              style={{
                maskImage: `url('${imgRectangle2004}')`,
                WebkitMaskImage: `url('${imgRectangle2004}')`,
                maskSize: "204.313px 84.779px",
                WebkitMaskSize: "204.313px 84.779px",
                maskPosition: "26.494px 9.272px",
                WebkitMaskPosition: "26.494px 9.272px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
          </div>

          {/* Second Text - below avatar */}
          <p className="absolute font-['Poppins:Light',sans-serif] leading-[33.896px] left-[calc(40%+229px+241.5px)] not-italic text-[18.366px] text-center text-white top-[195px] tracking-[0.3673px] translate-x-[-50%] w-[303px]">
            Connect HubSpot to automatically import contacts,
            sync deals, and streamline your sales process.
          </p>
        </div>
      </div>
    </section>
  );
}