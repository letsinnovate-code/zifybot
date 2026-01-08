# ZifyBot Landing Page - Codebase Guide

## 📁 Project Structure

```
/
├── App.tsx                          # Main entry point with layout mode toggle
├── imports/
│   ├── ZifyBotLandingPage.tsx      # Original Figma-generated code (exact positioning)
│   ├── svg-3k4tipnozg.ts           # SVG path data
│   └── svg-mbg9u.tsx               # Additional SVG components
├── components/
│   ├── LandingPage.tsx             # Simplified, clean version (responsive)
│   ├── TestimonialCardsOverride.tsx # CSS overrides for testimonials
│   └── sections/                    # Organized section components
│       ├── BackgroundGradients.tsx  # Purple gradient backgrounds
│       ├── Navigation.tsx           # Top navigation bar
│       ├── HeroSection.tsx          # Hero with headline and CTA
│       ├── MetricsCard.tsx          # Stats card (5x, 3x, 700%)
│       ├── FeaturesGrid.tsx         # Feature cards grid
│       ├── ProductShowcase.tsx      # Product screenshots
│       ├── IntegrationLogos.tsx     # Integration partner logos
│       ├── TestimonialsDisplay.tsx  # Customer testimonials
│       ├── AnalyticsDashboard.tsx   # Analytics visualization
│       ├── CTABanner.tsx            # Call-to-action section
│       └── FooterSection.tsx        # Footer with links
└── styles/
    └── globals.css                  # Global styles with Poppins & Lexend fonts
```

## 🎨 Layout Modes

### Figma Mode (Current - 90%+ Accuracy)
- Uses exact Figma positioning
- Scaled to 75% with 50px left margin
- Preserves original design perfectly
- File: `/imports/ZifyBotLandingPage.tsx`

### Simplified Mode (Easier to Maintain)
- Clean, organized components
- Responsive and semantic
- Easier to understand and modify
- File: `/components/LandingPage.tsx`

**Toggle in `/App.tsx`:**
```tsx
const LAYOUT_MODE = 'figma'; // or 'simplified'
```

## 📄 Page Sections (Top to Bottom)

| Section | Component | Position | Description |
|---------|-----------|----------|-------------|
| Navigation | `Navigation` | top: 69px | Sticky nav with Sign In button & menu |
| Hero | `HeroSection` | top: 220px | Main headline with gradient text |
| Metrics | `MetricsCard` | top: 1020px | Stats card (5x, 3x, 700%) |
| Features | `FeaturesGrid` | - | 6 feature cards in grid |
| Product | `ProductShowcase` | - | Product screenshots |
| Integrations | `IntegrationLogos` | - | Partner integration logos |
| Testimonials | `TestimonialsDisplay` | top: 4699px | Customer testimonial cards with 500K text |
| Analytics | `AnalyticsDashboard` | - | Stats & charts |
| CTA | `CTABanner` | - | Final call-to-action |
| Footer | `FooterSection` | top: 7985px | Links and company info |

## 🎨 Design System

### Colors
- **Primary Purple:** `#812FFB`
- **Light Purple:** `#C9A4FF`
- **Background:** `#000000` (black)
- **Text:** `#FFFFFF` (white)
- **Text Secondary:** `rgba(255, 255, 255, 0.6-0.7)`

### Fonts
- **Headlines:** Lexend (semibold, 600)
- **Body Text:** Poppins (regular, light)

### Effects
- **Glassmorphism:** `backdrop-blur-[12px]` + semi-transparent backgrounds
- **Gradients:** Purple radial and linear gradients
- **Borders:** `border-purple-500/20` with opacity
- **Shadows:** Inset shadows with purple tint

## 📝 Component Breakdown

### Figma Import (`/imports/ZifyBotLandingPage.tsx`)

This file contains the original Figma export. It uses:
- **Absolute positioning** for exact layout control
- **Calc() functions** for responsive positioning (e.g., `left-[calc(40%+229px)]`)
- **Data attributes** for component identification (e.g., `data-name="Section"`)
- **Inline styles** for complex gradients and filters

**Key Components:**
- `Background()` - SVG gradient background (top: -1238px, 4066px height)
- `Nav()` - Navigation bar
- `Home()` - Main content wrapper
- `Section` - Metrics card
- `About()` - Features section
- `Footer()` - Footer section

### Simplified Components (`/components/sections/`)

Clean, readable versions of each section:

#### `Navigation.tsx`
- Sign In button
- Menu items (Home, Features, Integrations, Pricing, About)
- Logo with gradient

#### `HeroSection.tsx`
- Main headline with gradient text
- Subheadline
- CTA buttons (Get Started, Watch Demo)

#### `MetricsCard.tsx`
- Glassmorphism card
- 3 metrics with values and labels
- Vertical dividers

#### `TestimonialsDisplay.tsx`
- Large "500K" background text with stroke effect
- 2 testimonial cards with:
  - Avatar images with gradient mask
  - Testimonial text
  - Glassmorphism background

## 🔧 How to Modify

### Changing Text Content
1. **Figma Mode:** Find the section in `/imports/ZifyBotLandingPage.tsx`
2. **Simplified Mode:** Edit the corresponding file in `/components/sections/`

### Adjusting Layout
- **Figma Mode:** Modify `top-[XXXpx]`, `left-[XXXpx]` values
- **Simplified Mode:** Edit Tailwind classes (padding, margins, grid)

### Updating Styling
- **Colors:** Search and replace hex codes or update color variables
- **Fonts:** Modify `font-['Lexend']` or `font-['Poppins']` classes
- **Effects:** Adjust `backdrop-blur`, `bg-gradient-to-*`, `border-purple-500/*` classes

### Adding New Section
1. Create new file in `/components/sections/YourSection.tsx`
2. Import and add to `/components/LandingPage.tsx`
3. For Figma mode: Add to `/imports/ZifyBotLandingPage.tsx` with absolute positioning

## 🐛 Common Issues

### Testimonial Cards Hidden
**Problem:** Background gradient overlaps testimonial cards

**Solution:** Already fixed in `/components/TestimonialCardsOverride.tsx`
- Adds proper z-index values
- Applies exact Figma styling with radial gradients

### Layout Breaks on Resize
**Problem:** Figma mode uses fixed positioning

**Solution:** Switch to simplified mode for responsive design:
```tsx
const LAYOUT_MODE = 'simplified';
```

### Fonts Not Loading
**Problem:** Poppins or Lexend not showing

**Solution:** Check `/styles/globals.css` has font imports:
```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&family=Poppins:wght@300;400;600&display=swap');
```

## 📊 File Sizes

- **Figma Import:** ~3500 lines (complex, exact positioning)
- **Simplified Version:** ~800 lines (clean, organized)
- **Assets:** PNG images for avatars, product screenshots, logos

## 🚀 Performance Tips

1. **Lazy load images:** Use `loading="lazy"` for product screenshots
2. **Optimize SVGs:** Complex gradient filters can be simplified
3. **Reduce backdrop-blur:** Lower values improve performance
4. **Code split:** Lazy load sections below fold

## 📚 Learning Resources

- **Tailwind CSS:** https://tailwindcss.com/docs
- **React:** https://react.dev
- **Figma to Code:** Understanding absolute positioning vs. flexbox/grid

---

**Questions?** Check individual component files - they include comments explaining the structure.
