import { Database, Webhook, Cloud, Share2 } from 'lucide-react';

export function IntegrationsSection() {
  const integrations = [
    {
      icon: Database,
      title: 'Salesforce',
      description: 'Sync leads and data seamlessly with your Salesforce CRM.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cloud,
      title: 'HubSpot',
      description: 'Connect your HubSpot account for unified lead management.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Webhook,
      title: 'Pipedrive',
      description: 'Integrate with Pipedrive to streamline your sales pipeline.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Share2,
      title: 'Custom API',
      description: 'Build custom integrations with our powerful API.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="integrations" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
            Get Leads from Your CRM
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Connect with your favorite tools and platforms to centralize your workflow
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/20 group-hover:to-purple-400/20 rounded-2xl blur-xl transition-all duration-300 -z-10" />

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <integration.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{integration.title}</h3>
              <p className="text-white/60 text-sm mb-4">{integration.description}</p>

              {/* CTA Button */}
              <button className="w-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-400/50 text-purple-300 px-4 py-2 rounded-lg transition-all duration-200 text-sm">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
