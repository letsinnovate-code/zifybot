import { BarChart3, TrendingUp, Users } from 'lucide-react';

export function ProductOverview() {
  return (
    <section id="product" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
              The AI-Driven Outreach Revolution
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Transform your sales process with our intelligent platform that combines AI-powered prospecting, automated outreach, and real-time analytics to help you close deals faster than ever before.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-purple-500/50">
              Explore Features
            </button>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-purple-500/20 shadow-2xl shadow-purple-500/20">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-white/40 text-sm">Dashboard</div>
              </div>

              {/* Mock Chart */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white/90 text-sm">Total Leads</div>
                      <div className="text-2xl font-bold text-white">12,458</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-sm">+23%</div>
                </div>

                <div className="h-32 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-lg p-4 flex items-end justify-between gap-2">
                  {[40, 65, 45, 80, 60, 95, 70].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-purple-400" />
                      <div className="text-white/60 text-xs">Conversion</div>
                    </div>
                    <div className="text-2xl font-bold text-white">34.5%</div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <div className="text-white/60 text-xs">Active</div>
                    </div>
                    <div className="text-2xl font-bold text-white">8,432</div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-2xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
