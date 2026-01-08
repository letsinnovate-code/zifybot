/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure webpack for path aliases (matching vite.config.ts)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    return config;
  },
  
  // Disable image optimization for static exports if needed
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
