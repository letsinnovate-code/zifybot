import svgPaths from "../../imports/svg-3k4tipnozg";

export function Navigation() {
  return (
    <nav className="absolute left-1/2 top-[69px] -translate-x-1/2">
      {/* Sign In Button */}
      <button className="absolute left-[calc(50%-636px)] top-0 h-[49px] w-[136px] rounded-[12px] border border-[#812ffb] bg-gradient-to-br from-[rgba(41,10,87,0.1)] to-[rgba(129,47,251,0.1)] backdrop-blur-[20.95px]">
        <span className="font-['Lexend'] text-[16px] text-white">Sign In</span>
      </button>

      {/* Menu Items */}
      <div className="absolute left-[calc(50%-441px)] top-[11px] flex gap-[62px]">
        <MenuItem text="Home" />
        <MenuItem text="Features" />
        <MenuItem text="Integrations" />
        <MenuItem text="Pricing" />
        <MenuItem text="About" />
      </div>

      {/* Logo */}
      <div className="absolute left-[calc(50%-730px)] top-0 h-[49px] w-[120px]">
        <svg className="block size-full" viewBox="0 0 120 49" fill="none">
          <path d={svgPaths.p4030100} fill="url(#logo_gradient)" />
          <defs>
            <linearGradient id="logo_gradient" x1="60" y1="0" x2="60" y2="49">
              <stop stopColor="#C9A4FF" />
              <stop offset="1" stopColor="#812FFB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </nav>
  );
}

function MenuItem({ text }: { text: string }) {
  return (
    <div className="cursor-pointer">
      <span className="font-['Lexend'] text-[16px] text-white/90 hover:text-white transition-colors">
        {text}
      </span>
    </div>
  );
}
