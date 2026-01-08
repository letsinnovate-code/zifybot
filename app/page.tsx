'use client';

import ZifyBotLandingPage from '@/imports/ZifyBotLandingPage';
import LandingPage from '@/components/LandingPage';
import { TestimonialCardsOverride } from '@/components/TestimonialCardsOverride';

// Toggle between layouts:
// - 'figma': Uses exact Figma import with precise positioning (current design)
// - 'simplified': Uses clean, responsive components (easier to maintain)
const LAYOUT_MODE: 'figma' | 'simplified' = 'figma';

export default function Home() {
    if (LAYOUT_MODE === 'simplified') {
        return <LandingPage />;
    }

    // Exact Figma Layout (90%+ accuracy with original design)
    return (
        <div className="w-full min-h-screen bg-black overflow-x-hidden">
            {/* CSS Overrides for testimonial cards */}
            <TestimonialCardsOverride />

            {/* Figma Import with exact positioning:
          - Scaled to 75% of original size
          - Content shifted 50px left
          - Background width: 3288px
          - Background positioned at 1060px from left
      */}
            <div style={{
                transform: 'scale(0.75)',
                width: '1920px',
                transformOrigin: 'top left',
                marginLeft: '50px'
            }}>
                <ZifyBotLandingPage />
            </div>
        </div>
    );
}
