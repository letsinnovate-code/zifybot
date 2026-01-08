import { Activity, Users, Target, DollarSign } from 'lucide-react';

export function PlatformAnalytics() {
  const analytics = [
    {
      icon: Users,
      label: 'Total Leads',
      value: '200',
      trend: '+12%',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Activity,
      label: 'Active Campaigns',
      value: '100',
      trend: '+8%',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Target,
      label: 'Conversion Rate',
      value: '500',
      trend: '+15%',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: DollarSign,
      label: 'Revenue Impact',
      value: '50.0%',
      trend: '+23%',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
            Platform Analytics
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real-time insights into your sales performance
          </p>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analytics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/20 group-hover:to-purple-400/20 rounded-2xl blur-xl transition-all duration-300 -z-10" />

              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-4`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>

              {/* Label */}
              <div className="text-white/60 text-sm mb-2">{metric.label}</div>

              {/* Value & Trend */}
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-br from-purple-300 via-white to-purple-200">
                  {metric.value}
                </div>
                <div className="text-green-400 text-sm">{metric.trend}</div>
              </div>

              {/* Mini Graph Placeholder */}
              <div className="mt-4 h-12 flex items-end gap-1">
                {[40, 60, 45, 70, 55, 80, 65, 75].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-500/50 to-purple-400/30 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
