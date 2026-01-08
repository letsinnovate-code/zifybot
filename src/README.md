# ZifyBot Landing Page

AI-powered prospecting and outreach platform landing page built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- **Dark theme** with purple (#812FFB) accents
- **Glassmorphism** effects throughout
- **Complex gradient backgrounds** with radial and linear gradients
- **Exact Figma positioning** at 90%+ accuracy
- **Poppins & Lexend fonts** for typography
- **Responsive scaling** at 75% with optimized layout

## 📂 Project Structure

```
/
├── App.tsx                      # Main app with layout mode toggle
├── imports/
│   └── ZifyBotLandingPage.tsx  # Exact Figma import (current active)
├── components/
│   ├── LandingPage.tsx         # Simplified clean version
│   ├── TestimonialCardsOverride.tsx
│   └── sections/               # Organized section components
│       ├── Navigation.tsx
│       ├── HeroSection.tsx
│       ├── MetricsCard.tsx
│       ├── FeaturesGrid.tsx
│       ├── ProductShowcase.tsx
│       ├── IntegrationLogos.tsx
│       ├── TestimonialsDisplay.tsx
│       ├── AnalyticsDashboard.tsx
│       ├── CTABanner.tsx
│       ├── FooterSection.tsx
│       └── BackgroundGradients.tsx
└── styles/
    └── globals.css
```

## 🚀 Quick Start

### Choose Your Layout Mode

Edit `/App.tsx` and set your preferred mode:

```tsx
// Option 1: Exact Figma Layout (90%+ accuracy)
const LAYOUT_MODE = 'figma';

// Option 2: Simplified Responsive Layout (easier to maintain)
const LAYOUT_MODE = 'simplified';
```

### Understanding the Code

1. **For Figma Mode:** See `FIGMA_SECTIONS_MAP.md` for detailed section breakdown
2. **For General Overview:** See `CODEBASE_GUIDE.md` for full documentation
3. **For Quick Reference:** Check comments in individual component files

## 📄 Page Sections

| Section | Description |
|---------|-------------|
| **Navigation** | Sticky nav with menu and Sign In button |
| **Hero** | Main headline with gradient text + CTA buttons |
| **Metrics** | Stats card showing 5x, 3x, 700% metrics |
| **Features** | 6 feature cards in grid layout |
| **Product Showcase** | Product screenshots and demos |
| **Integrations** | Partner integration logos |
| **Testimonials** | Customer testimonials with 500K background |
| **Analytics** | Dashboard with stats and charts |
| **CTA** | Final call-to-action banner |
| **Footer** | Links, social media, company info |

## 🎯 Key Files

### Currently Active (Figma Mode)
- `/imports/ZifyBotLandingPage.tsx` - Exact Figma positioning
- `/App.tsx` - Main wrapper with 75% scale + 50px left margin
- `/components/TestimonialCardsOverride.tsx` - CSS fixes for testimonials

### Simplified Alternative
- `/components/LandingPage.tsx` - Clean, responsive version
- `/components/sections/*` - Individual section components

## 🔧 Common Tasks

### Change Text Content
**Figma Mode:**
1. Open `/imports/ZifyBotLandingPage.tsx`
2. Search for the text you want to change
3. Update the content between `<p>` or `<span>` tags

**Simplified Mode:**
1. Find the section in `/components/sections/`
2. Update the content in the component

### Adjust Positioning
**Figma Mode:**
```tsx
// Find element with top position
className="absolute top-[1020px] left-[436px]"

// Change values
className="absolute top-[1200px] left-[500px]"
```

**Simplified Mode:**
```tsx
// Use Tailwind spacing classes
className="mt-20 px-6"  // margin-top, padding-x
```

### Update Colors
Search and replace hex codes:
- Primary Purple: `#812FFB`
- Light Purple: `#C9A4FF`
- Background: `#000000`

Or use Tailwind classes:
```tsx
className="bg-purple-600 text-purple-300"
```

### Modify Styles
**Figma Mode:**
```tsx
// Inline styles for complex effects
style={{
  background: 'linear-gradient(...)',
  backdropFilter: 'blur(12px)'
}}
```

**Simplified Mode:**
```tsx
// Tailwind utility classes
className="backdrop-blur-xl bg-gradient-to-r from-purple-400 to-white"
```

## 📚 Documentation

- **CODEBASE_GUIDE.md** - Complete project documentation
- **FIGMA_SECTIONS_MAP.md** - Detailed Figma section reference
- **Component files** - Inline comments explaining structure

## 🎨 Design System

### Colors
```css
Primary Purple: #812FFB
Light Purple: #C9A4FF
Background: #000000 (black)
Text: #FFFFFF (white)
Text Secondary: rgba(255, 255, 255, 0.6-0.7)
```

### Typography
```css
Headlines: font-['Lexend'] (semibold, 600)
Body: font-['Poppins'] (regular, light)
```

### Effects
```css
Glassmorphism: backdrop-blur-[12px] + semi-transparent bg
Gradients: Purple radial and linear gradients
Borders: border-purple-500/20
Shadows: Inset shadows with purple tint
```

## 🐛 Troubleshooting

### Testimonial cards hidden?
✅ Already fixed in `/components/TestimonialCardsOverride.tsx`

### Layout breaks on resize?
👉 Switch to simplified mode: `LAYOUT_MODE = 'simplified'`

### Fonts not loading?
👉 Check `/styles/globals.css` has font imports

## 📊 Code Comparison

| Aspect | Figma Mode | Simplified Mode |
|--------|------------|-----------------|
| **Lines of Code** | ~3500 | ~800 |
| **Positioning** | Absolute (exact) | Flexbox/Grid (responsive) |
| **Accuracy** | 90%+ to Figma | Semantic equivalent |
| **Maintainability** | Complex | Easy |
| **Responsiveness** | Fixed (scaled) | Fully responsive |

## 🚀 Performance

- Images use `figma:asset` import scheme
- SVGs optimized with path compression
- Lazy load images below fold (recommended)
- Backdrop blur can impact performance (consider reducing)

## 💡 Tips

1. **Start Simple:** Use simplified mode to understand structure
2. **Exact Match:** Switch to Figma mode when you need pixel-perfect design
3. **Hybrid Approach:** Mix both - use Figma positioning with simplified components
4. **Comments:** Add your own comments as you learn the codebase

## 📞 Need Help?

1. Check `CODEBASE_GUIDE.md` for detailed explanations
2. Check `FIGMA_SECTIONS_MAP.md` to find specific sections
3. Look at component files - they have helpful comments
4. Search for `data-name` attributes to locate elements

---

**Built with:** React + TypeScript + Tailwind CSS v4 + Figma Import

**Fonts:** Poppins (Google Fonts) + Lexend (Google Fonts)

**Design:** Dark theme with purple gradients and glassmorphism effects
