import { BackgroundGradients } from './sections/BackgroundGradients';
import { Navigation } from './sections/Navigation';
import { HeroSection } from './sections/HeroSection';
import { MetricsCard } from './sections/MetricsCard';
import { FeaturesGrid } from './sections/FeaturesGrid';
import { ProductShowcase } from './sections/ProductShowcase';
import { IntegrationLogos } from './sections/IntegrationLogos';
import { TestimonialsDisplay } from './sections/TestimonialsDisplay';
import { AnalyticsDashboard } from './sections/AnalyticsDashboard';
import { CTABanner } from './sections/CTABanner';
import { FooterSection } from './sections/FooterSection';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Gradients - Fixed behind all content */}
      <BackgroundGradients />

      {/* Main Content Container */}
      <div className="relative">
        {/* Sticky Navigation */}
        <div className="sticky top-0 z-50 backdrop-blur-md">
          <Navigation />
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Metrics Card */}
        <MetricsCard />

        {/* Features Section */}
        <div className="relative mt-32">
          <FeaturesGrid />
        </div>

        {/* Product Showcase */}
        <div className="relative">
          <ProductShowcase />
        </div>

        {/* Integrations */}
        <div className="relative">
          <IntegrationLogos />
        </div>

        {/* Testimonials */}
        <div className="relative">
          <TestimonialsDisplay />
        </div>

        {/* Analytics Dashboard */}
        <div className="relative">
          <AnalyticsDashboard />
        </div>

        {/* CTA Banner */}
        <div className="relative">
          <CTABanner />
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
