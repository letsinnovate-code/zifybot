export function AnalyticsDashboard() {
  const stats = [
    { label: 'Active Campaigns', value: '24' },
    { label: 'Total Leads', value: '15.2K' },
    { label: 'Conversion Rate', value: '32%' },
    { label: 'Revenue Generated', value: '$450K' }
  ];

  const chartData = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 52 },
    { month: 'Mar', value: 61 },
    { month: 'Apr', value: 58 },
    { month: 'May', value: 70 },
    { month: 'Jun', value: 82 }
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-[48px] font-bold text-transparent">
            Track Your Success
          </h2>
          <p className="mx-auto max-w-2xl font-['Poppins'] text-[18px] leading-[28px] text-white/70">
            Real-time analytics to measure and optimize your campaigns
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-[16px] border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 backdrop-blur-xl"
            >
              <div className="mb-2 bg-gradient-to-br from-purple-300 via-white to-purple-200 bg-clip-text text-[36px] font-bold text-transparent">
                {stat.value}
              </div>
              <div className="font-['Poppins'] text-[14px] text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Chart Visualization */}
        <div className="rounded-[20px] border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl">
          <div className="mb-6">
            <h3 className="font-['Lexend'] text-[24px] font-semibold text-white">
              Performance Overview
            </h3>
            <p className="font-['Poppins'] text-[14px] text-white/60">
              Monthly lead conversion trends
            </p>
          </div>

          {/* Simple Bar Chart */}
          <div className="flex h-[300px] items-end justify-between gap-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-3">
                <div className="relative w-full rounded-t-lg bg-gradient-to-t from-[#812ffb] to-[#c9a4ff]"
                     style={{ height: `${data.value}%` }}>
                </div>
                <span className="font-['Poppins'] text-[12px] text-white/60">
                  {data.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
