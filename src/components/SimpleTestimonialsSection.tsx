// Image paths for Next.js - these reference files in /public/assets/
const avatarImage1 = "/assets/61abab83270bd7fe3f95545bd1f83491d071b91d.png";
const avatarImage2 = "/assets/0442e80928a60d268061196771dc4a946ffa0928.png";

export function SimpleTestimonialsSection() {
  // Testimonial data - easy to update
  const testimonials = [
    {
      id: 1,
      avatar: avatarImage1,
      text: "Sync leads and contacts directly from Zoho CRM. Automate workflows and keep your pipeline updated in real-time.",
      // Position for first card (left side)
      cardLeft: "436px",
      // Avatar styling
      avatarWidth: "249.842px",
      avatarHeight: "85.053px",
      maskSize: "199.857px 58.474px",
      maskPosition: "19.934px 21.263px"
    },
    {
      id: 2,
      avatar: avatarImage2,
      text: "Connect HubSpot to automatically import contacts, sync deals, and streamline your sales process.",
      // Position for second card (right side)
      cardLeft: "calc(40% + 229px)",
      // Avatar styling
      avatarWidth: "255.662px",
      avatarHeight: "108.623px",
      maskSize: "204.313px 84.779px",
      maskPosition: "26.494px 9.272px"
    }
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Title */}
        <SectionHeader />

        {/* Large "500K" background text */}
        <BackgroundText />

        {/* Testimonial Cards Container */}
        <div className="relative" style={{ height: "600px" }}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Section header with title and description
function SectionHeader() {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-[48px] font-bold text-transparent">
        Trusted by Sales Teams
      </h2>
      <p className="mx-auto max-w-2xl font-['Poppins'] text-[18px] leading-[28px] text-white/70">
        See what our customers have to say about their experience
      </p>
    </div>
  );
}

// Large "500K" text in the background
function BackgroundText() {
  return (
    <div className="absolute left-[30%] top-[-200px] -translate-x-1/2">
      <p
        className="text-center font-['Poppins']"
        style={{
          // Outline text effect
          WebkitTextStrokeWidth: "3.5px",
          WebkitTextStrokeColor: "#000",

          // Text size
          fontSize: "245px",
          fontWeight: "600",
          lineHeight: "274px",
          letterSpacing: "4.9px",

          // Gradient fill (semi-transparent)
          background: "linear-gradient(287deg, rgba(201, 164, 255, 0.10) 22.55%, rgba(255, 254, 254, 0.10) 57.54%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        500K
      </p>
    </div>
  );
}

// Individual testimonial card
function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <>
      {/* Glass card background */}
      <GlassCard cardLeft={testimonial.cardLeft} />

      {/* Avatar image with gradient mask */}
      <Avatar
        avatar={testimonial.avatar}
        cardLeft={testimonial.cardLeft}
        avatarWidth={testimonial.avatarWidth}
        avatarHeight={testimonial.avatarHeight}
        maskSize={testimonial.maskSize}
        maskPosition={testimonial.maskPosition}
      />

      {/* Testimonial text */}
      <TestimonialText
        text={testimonial.text}
        cardLeft={testimonial.cardLeft}
      />
    </>
  );
}

// Glassmorphism card background
function GlassCard({ cardLeft }: { cardLeft: string }) {
  const cardStyles = {
    // Radial gradient background
    background: "radial-gradient(251.65% 89.92% at 50.22% 50.31%, rgba(129, 47, 251, 0.04) 0%, rgba(187, 160, 229, 0.14) 100%)",

    // Inner shadow glow effect
    boxShadow: "inset 3.746px 3.746px 4.994px 0px rgba(171, 115, 255, 0.17)"
  };

  return (
    <div
      className="absolute h-[512px] w-[483px] rounded-[12px] border border-[rgba(158,106,235,0.1)] backdrop-blur-[12px]"
      style={{
        left: cardLeft,
        top: "0",
        ...cardStyles
      }}
    />
  );
}

// Avatar image with gradient and mask
function Avatar({
  avatar,
  cardLeft,
  avatarWidth,
  avatarHeight,
  maskSize,
  maskPosition
}: {
  avatar: string;
  cardLeft: string;
  avatarWidth: string;
  avatarHeight: string;
  maskSize: string;
  maskPosition: string;
}) {
  // Calculate center position: card left + half card width - half avatar width
  const centerOffset = cardLeft === "436px" ? "644px" : "calc(40% + 470px)";

  const avatarStyles = {
    // Purple gradient fill
    background: "linear-gradient(to bottom, #c9a4ff, #812ffb)",

    // Avatar image dimensions
    width: avatarWidth,
    height: avatarHeight,

    // Use avatar image as mask (shows gradient in shape of image)
    maskImage: `url('${avatar}')`,
    WebkitMaskImage: `url('${avatar}')`,
    maskSize: maskSize,
    WebkitMaskSize: maskSize,
    maskPosition: maskPosition,
    WebkitMaskPosition: maskPosition,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat"
  };

  return (
    <div
      className="absolute"
      style={{
        left: centerOffset,
        top: "50px",
        transform: "translateX(-50%)"
      }}
    >
      <div style={avatarStyles} />
    </div>
  );
}

// Testimonial text below avatar
function TestimonialText({ text, cardLeft }: { text: string; cardLeft: string }) {
  // Calculate center position
  const centerOffset = cardLeft === "436px" ? "677px" : "calc(40% + 470px)";

  return (
    <p
      className="absolute w-[320px] text-center font-['Poppins'] text-[18px] leading-[34px] text-white"
      style={{
        left: centerOffset,
        top: "195px",
        transform: "translateX(-50%)"
      }}
    >
      {text}
    </p>
  );
}
