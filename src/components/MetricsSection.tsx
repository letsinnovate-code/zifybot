export function MetricsSection() {
  const metrics = [
    { value: '5x', label: 'Faster Lead Conversion' },
    { value: '3x', label: 'Response Rate' },
    { value: '700%', label: 'ROI Increase' },
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Glassmorphism Container */}
        <div className="relative backdrop-blur-xl bg-gradient-to-r from-purple-900/10 via-purple-800/10 to-purple-900/10 border border-purple-500/20 rounded-3xl p-12 shadow-xl shadow-purple-500/10">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-purple-400/5 rounded-3xl blur-xl" />
          
          {/* Metrics Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-br from-purple-300 via-white to-purple-200">
                  {metric.value}
                </div>
                <div className="text-white/60 text-sm md:text-base">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Dividers */}
          <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
          <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
