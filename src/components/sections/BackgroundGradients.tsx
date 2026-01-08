export function BackgroundGradients() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Top Gradient Ellipse */}
      <div
        className="absolute left-1/2 top-[200px] h-[1600px] w-[2400px] -translate-x-1/2 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 1200px 800px at 50% 50%, rgba(129, 47, 251, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Bottom Gradient Ellipse */}
      <div
        className="absolute bottom-[200px] left-1/2 h-[1600px] w-[2600px] -translate-x-1/2 opacity-50"
        style={{
          background: 'radial-gradient(ellipse 1300px 800px at 50% 50%, rgba(129, 47, 251, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Left Accent */}
      <div
        className="absolute left-0 top-1/2 h-[1600px] w-[1200px] -translate-y-1/2 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 600px 800px at 0% 50%, rgba(201, 164, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Right Accent */}
      <div
        className="absolute right-0 top-1/2 h-[1600px] w-[1200px] -translate-y-1/2 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 600px 800px at 100% 50%, rgba(201, 164, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
    </div>
  );
}
