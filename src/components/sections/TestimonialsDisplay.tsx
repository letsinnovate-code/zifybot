// Image paths for Next.js - these reference files in /public/assets/
const imgRectangle2005 = "/assets/61abab83270bd7fe3f95545bd1f83491d071b91d.png";
const imgRectangle2004 = "/assets/0442e80928a60d268061196771dc4a946ffa0928.png";

export function TestimonialsDisplay() {
  const testimonials = [
    {
      avatar: imgRectangle2005,
      text: "Sync leads and contacts directly from Zoho CRM. Automate workflows and keep your pipeline updated in real-time.",
      maskSize: "199.857px 58.474px",
      maskPosition: "19.934px 21.263px",
      avatarHeight: "85.053px",
      avatarWidth: "249.842px"
    },
    {
      avatar: imgRectangle2004,
      text: "Connect HubSpot to automatically import contacts, sync deals, and streamline your sales process.",
      maskSize: "204.313px 84.779px",
      maskPosition: "26.494px 9.272px",
      avatarHeight: "108.623px",
      avatarWidth: "255.662px"
    }
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-[48px] font-bold text-transparent">
            Trusted by Sales Teams
          </h2>
          <p className="mx-auto max-w-2xl font-['Poppins'] text-[18px] leading-[28px] text-white/70">
            See what our customers have to say about their experience
          </p>
        </div>

        {/* Large 500K Background Text */}
        <div className="absolute left-[30%] top-[-200px] -translate-x-1/2">
          <p
            className="text-center font-['Poppins'] not-italic"
            style={{
              WebkitTextStrokeWidth: "3.5px",
              WebkitTextStrokeColor: "#000",
              fontSize: "245px",
              fontWeight: "600",
              lineHeight: "274px",
              letterSpacing: "4.9px",
              background: "linear-gradient(287deg, rgba(201, 164, 255, 0.10) 22.55%, rgba(255, 254, 254, 0.10) 57.54%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            500K
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  avatar,
  text,
  maskSize,
  maskPosition,
  avatarHeight,
  avatarWidth
}: {
  avatar: string;
  text: string;
  maskSize: string;
  maskPosition: string;
  avatarHeight: string;
  avatarWidth: string;
}) {
  return (
    <div className="relative h-[512px] rounded-[12px] border border-[rgba(158,106,235,0.1)] backdrop-blur-[12px]"
      style={{
        background: "radial-gradient(251.65% 89.92% at 50.22% 50.31%, rgba(129, 47, 251, 0.04) 0%, rgba(187, 160, 229, 0.14) 100%)",
        boxShadow: "inset 3.746px 3.746px 4.994px 0px rgba(171, 115, 255, 0.17)"
      }}>

      {/* Avatar */}
      <div className="absolute left-1/2 top-[50px] -translate-x-1/2">
        <div
          className="bg-gradient-to-b from-[#c9a4ff] to-[#812ffb]"
          style={{
            height: avatarHeight,
            width: avatarWidth,
            maskImage: `url('${avatar}')`,
            WebkitMaskImage: `url('${avatar}')`,
            maskSize: maskSize,
            WebkitMaskSize: maskSize,
            maskPosition: maskPosition,
            WebkitMaskPosition: maskPosition,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat"
          }}
        />
      </div>

      {/* Testimonial Text */}
      <p className="absolute left-1/2 top-[195px] w-[320px] -translate-x-1/2 text-center font-['Poppins'] text-[18px] leading-[34px] text-white">
        {text}
      </p>
    </div>
  );
}
