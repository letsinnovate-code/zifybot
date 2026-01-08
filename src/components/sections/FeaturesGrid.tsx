export function FeaturesGrid() {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Lead Targeting',
      description: 'AI-powered algorithms identify and prioritize your ideal prospects based on behavior and engagement patterns.'
    },
    {
      icon: '✉️',
      title: 'Automated Outreach',
      description: 'Send personalized emails at scale with intelligent scheduling and follow-up sequences.'
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Track campaign performance, engagement rates, and conversion metrics in one powerful dashboard.'
    },
    {
      icon: '🔗',
      title: 'CRM Integration',
      description: 'Seamlessly sync with your existing tools including Salesforce, HubSpot, and Zoho.'
    },
    {
      icon: '🤖',
      title: 'AI Email Writer',
      description: 'Generate compelling email copy that resonates with your audience and drives responses.'
    },
    {
      icon: '📈',
      title: 'Pipeline Management',
      description: 'Visualize your sales pipeline and automate deal progression with smart workflows.'
    }
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-[48px] font-bold text-transparent">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-2xl font-['Poppins'] text-[18px] leading-[28px] text-white/70">
            Everything you need to supercharge your sales process
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group rounded-[16px] border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-purple-800/5 p-8 backdrop-blur-xl transition-all hover:border-purple-500/40 hover:bg-purple-900/20">
      <div className="mb-4 text-[40px]">{icon}</div>
      <h3 className="mb-3 font-['Lexend'] text-[20px] font-semibold text-white">
        {title}
      </h3>
      <p className="font-['Poppins'] text-[15px] leading-[24px] text-white/60">
        {description}
      </p>
    </div>
  );
}
