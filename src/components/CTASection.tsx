import { Mail, Phone, MessageCircle } from 'lucide-react';

export function CTASection() {
  const contactOptions = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sales@zifybot.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: MessageCircle,
      label: 'Live Chat',
      value: 'Available 24/7',
    },
  ];

  return (
    <section id="pricing" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-3xl blur-3xl" />

        {/* Content Container */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 border border-purple-500/30 rounded-3xl p-12 text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white to-purple-300">
            Interested in Our Pricing?
          </h2>

          {/* Paragraph */}
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            Get in touch with our sales team to discuss custom pricing tailored to your business needs. We offer flexible plans for teams of all sizes.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-white/60 text-sm mb-1">{option.label}</div>
                <div className="text-white font-medium">{option.value}</div>
              </div>
            ))}
          </div>

          {/* Large CTA Button */}
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-12 py-4 rounded-full text-lg transition-all duration-200 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105">
            Contact Sales Team
          </button>
        </div>
      </div>
    </section>
  );
}
