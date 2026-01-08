export function CTABanner() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[24px] border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-16 text-center backdrop-blur-xl">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-400/20 to-purple-600/20 blur-3xl" />

          {/* Content */}
          <div className="relative">
            <h2 className="mb-4 bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-[56px] font-bold leading-[70px] text-transparent">
              Ready to Transform Your Sales?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-['Poppins'] text-[20px] leading-[32px] text-white/70">
              Join thousands of sales teams using ZifyBot to close more deals faster. 
              Start your free trial today—no credit card required.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-6">
              <button className="h-[60px] w-[220px] rounded-[14px] bg-gradient-to-r from-[#c9a4ff] to-[#812ffb] font-['Lexend'] text-[18px] font-semibold text-white shadow-xl shadow-purple-500/40 transition-all hover:scale-105 hover:shadow-purple-500/60">
                Start Free Trial
              </button>
              <button className="h-[60px] w-[220px] rounded-[14px] border-2 border-purple-400/40 bg-white/5 font-['Lexend'] text-[18px] font-semibold text-white backdrop-blur-xl transition-all hover:border-purple-400/60 hover:bg-white/10">
                Schedule Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center justify-center gap-8 text-white/50">
              <div className="flex items-center gap-2">
                <span className="text-[24px]">✓</span>
                <span className="font-['Poppins'] text-[14px]">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[24px]">✓</span>
                <span className="font-['Poppins'] text-[14px]">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[24px]">✓</span>
                <span className="font-['Poppins'] text-[14px]">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
