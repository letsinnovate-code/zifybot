import { Zap, Mail, Brain, Target, Users, TrendingUp } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning to identify the best prospects and optimize your outreach strategy.',
    },
    {
      icon: Mail,
      title: 'Automated Email Campaigns',
      description: 'Set up intelligent email sequences that adapt based on recipient behavior and engagement.',
    },
    {
      icon: Target,
      title: 'Smart Lead Scoring',
      description: 'Automatically prioritize leads based on conversion probability and engagement metrics.',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline your sales process with custom workflows and triggers that save hours of manual work.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Keep your entire team aligned with shared dashboards, notes, and real-time updates.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics and customizable reports to optimize your strategy.',
    },
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
            Powerful Features
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to supercharge your sales outreach and close more deals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-purple-900/10 via-purple-800/5 to-purple-900/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/20 group-hover:to-purple-400/20 rounded-2xl blur-xl transition-all duration-300 -z-10" />

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-purple-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
