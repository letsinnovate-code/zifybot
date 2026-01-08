// Image paths for Next.js - these reference files in /public/assets/
const imgImage4 = "/assets/a12ca7d6a314a78ad4f5eebbef7ea34af9d1637a.png";
const imgImage5 = "/assets/38034ca78e64d87c0fcfc8547daacc5b8cf0f83e.png";

export function IntegrationLogos() {
  const integrations = [
    { name: 'Salesforce', logo: imgImage4 },
    { name: 'HubSpot', logo: imgImage5 },
    { name: 'Zoho', logo: imgImage4 },
    { name: 'Pipedrive', logo: imgImage5 },
    { name: 'LinkedIn', logo: imgImage4 },
    { name: 'Gmail', logo: imgImage5 }
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-[48px] font-bold text-transparent">
            Integrates With Your Stack
          </h2>
          <p className="mx-auto max-w-2xl font-['Poppins'] text-[18px] leading-[28px] text-white/70">
            Connect seamlessly with the tools you already use
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex h-[120px] items-center justify-center rounded-[16px] border border-purple-500/20 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-purple-500/40 hover:bg-white/10"
            >
              <img src={integration.logo} alt={integration.name} className="max-h-[60px] max-w-[80px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
