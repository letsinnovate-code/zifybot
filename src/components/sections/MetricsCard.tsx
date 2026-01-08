export function MetricsCard() {
  const metrics = [
    { value: '5x', label: 'Faster Lead Conversion' },
    { value: '3x', label: 'Response Rate' },
    { value: '700%', label: 'ROI Increase' }
  ];

  return (
    <div className="absolute left-1/2 top-[1020px] h-[175px] w-[1036px] -translate-x-1/2 rounded-[15px] border border-[#812ffb] backdrop-blur-[20.95px]" 
         style={{ background: 'linear-gradient(-61.33deg, rgba(41, 10, 87, 0.1) 52.06%, rgba(129, 47, 251, 0.1) 93.84%)' }}>
      
      <div className="flex h-full items-center justify-around px-12">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="mb-2 bg-gradient-to-br from-purple-300 via-white to-purple-200 bg-clip-text text-[56px] font-bold text-transparent">
              {metric.value}
            </div>
            <div className="font-['Poppins'] text-[16px] text-white/60">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Dividers */}
      <div className="absolute left-1/3 top-1/2 h-[80px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute left-2/3 top-1/2 h-[80px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
    </div>
  );
}
