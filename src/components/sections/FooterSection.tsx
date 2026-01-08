export function FooterSection() {
  const footerLinks = {
    product: ['Features', 'Integrations', 'Pricing', 'API', 'Changelog'],
    company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    resources: ['Documentation', 'Help Center', 'Community', 'Partners', 'Status'],
    legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  return (
    <footer className="relative h-screen overflow-hidden border-t border-purple-500/20 bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="bg-gradient-to-r from-[#c9a4ff] to-[#812ffb] bg-clip-text text-[28px] font-bold text-transparent">
                ZifyBot
              </h3>
            </div>
            <p className="mb-6 font-['Poppins'] text-[14px] leading-[22px] text-white/60">
              AI-powered prospecting and outreach platform that helps sales teams close deals faster.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <SocialIcon name="Twitter" />
              <SocialIcon name="LinkedIn" />
              <SocialIcon name="Facebook" />
              <SocialIcon name="Instagram" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 font-['Lexend'] text-[16px] font-semibold text-white">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-['Poppins'] text-[14px] text-white/60 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-['Lexend'] text-[16px] font-semibold text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-['Poppins'] text-[14px] text-white/60 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4 font-['Lexend'] text-[16px] font-semibold text-white">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-['Poppins'] text-[14px] text-white/60 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 font-['Lexend'] text-[16px] font-semibold text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-['Poppins'] text-[14px] text-white/60 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-purple-500/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-['Poppins'] text-[14px] text-white/50">
              © 2026 ZifyBot. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-['Poppins'] text-[14px] text-white/50 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="font-['Poppins'] text-[14px] text-white/50 transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  return (
    <a
      href="#"
      className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-purple-500/30 bg-white/5 text-white/60 backdrop-blur-xl transition-all hover:border-purple-500/50 hover:bg-white/10 hover:text-white"
      aria-label={name}
    >
      <span className="text-[18px]">→</span>
    </a>
  );
}
