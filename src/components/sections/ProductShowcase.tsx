// Image paths for Next.js - these reference files in /public/assets/
const imgImage1 = "/assets/bac3fc39892d8d4a4dc0f91ec767a03ab5d82fda.png";
const imgImage2 = "/assets/6f31d772df8d7cac61a85cb752bcb21361f88dab.png";
const imgImage3 = "/assets/417a519e9cb9e920fe49a53dc1129d7884619e81.png";

export function ProductShowcase() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-[48px] font-bold text-transparent">
            See It In Action
          </h2>
          <p className="mx-auto max-w-2xl font-['Poppins'] text-[18px] leading-[28px] text-white/70">
            Discover how our platform streamlines your entire sales workflow
          </p>
        </div>

        {/* Product Screens */}
        <div className="space-y-8">
          {/* Dashboard View */}
          <div className="overflow-hidden rounded-[20px] border border-purple-500/20 bg-white/5 p-4 backdrop-blur-xl">
            <img src={imgImage1} alt="Dashboard" className="w-full rounded-[12px]" />
          </div>

          {/* Analytics View */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-[20px] border border-purple-500/20 bg-white/5 p-4 backdrop-blur-xl">
              <img src={imgImage2} alt="Analytics" className="w-full rounded-[12px]" />
            </div>
            <div className="overflow-hidden rounded-[20px] border border-purple-500/20 bg-white/5 p-4 backdrop-blur-xl">
              <img src={imgImage3} alt="Campaign Management" className="w-full rounded-[12px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
