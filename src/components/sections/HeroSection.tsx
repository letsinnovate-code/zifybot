export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Content */}
      <div className="absolute left-1/2 top-[220px] -translate-x-1/2 text-center">
        {/* Main Headline */}
        <h1 className="mb-6">
          <div className="font-['Lexend'] text-[72px] font-semibold leading-[90px] text-white">
            AI-Powered Prospecting
          </div>
          <div className="font-['Lexend'] text-[72px] font-semibold leading-[90px]">
            <span className="bg-gradient-to-r from-[#c9a4ff] to-[#812ffb] bg-clip-text text-transparent">
              That Actually Works
            </span>
          </div>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-12 max-w-[800px] font-['Poppins'] text-[20px] leading-[32px] text-white/70">
          Transform your sales process with intelligent automation. Find, engage, 
          and convert leads 5x faster with our AI-powered outreach platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-6">
          <button className="h-[56px] w-[200px] rounded-[12px] bg-gradient-to-r from-[#c9a4ff] to-[#812ffb] font-['Lexend'] text-[18px] font-medium text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50">
            Get Started Free
          </button>
          <button className="h-[56px] w-[200px] rounded-[12px] border border-purple-500/30 bg-white/5 font-['Lexend'] text-[18px] font-medium text-white backdrop-blur-xl transition-all hover:bg-white/10">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
