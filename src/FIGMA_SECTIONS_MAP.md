# Figma Landing Page Sections Reference

This document maps each section in `/imports/ZifyBotLandingPage.tsx` to its purpose and location.

## 📍 Section Location Guide

### Main Structure Components

| Component Name | Line | Position (top) | Purpose |
|----------------|------|----------------|---------|
| `Background` | ~19 | -1238px | Purple gradient background with ellipses |
| `Nav` | ~294 | 69px | Navigation bar (menu + logo + sign in) |
| `Home` | ~304 | -1238px | Main content wrapper container |
| `Section` | ~172 | 1020px | Metrics card (5x, 3x, 700%) |
| `About` | ~1465 | 1773px | Features section |
| `ContentSection` | ~3058 | 2354px | Product overview/CRM integration |
| `Footer` | ~510 | 7985px | Footer links and info |
| `BackgroundGradient` | - | 676px | Additional gradient overlay |

### Sub-Components by Section

#### Navigation (Nav)
- **Components:** `Menu`, `Logo`, `Button1`
- **Purpose:** Top navigation with links and CTA

#### Hero Section (Home)
- **Position:** Top of page after nav
- **Contains:** Headline text, CTA buttons, hero image
- **Key Elements:**
  - Main headline with gradient text
  - Subtext description
  - Two CTA buttons

#### Metrics (Section)
- **Position:** top-[1020px]
- **Type:** Glassmorphism card
- **Contains:** Three metric values with labels
- **Styling:** Purple border, backdrop blur, gradient background

#### Features (About)
- **Position:** top-[1773px]
- **Sub-components:**
  - `Section13` - Feature card 1
  - `Section15` - Feature card 2
  - `Section17` - Feature card 3
  - `Title1` - Section heading

#### Product Showcase (ContentSection)
- **Position:** top-[2354px]
- **Contains:**
  - CRM integration preview
  - Analytics dashboard view
  - Pipeline management view
- **Background:** Light gray (#F6F8FC)

#### Testimonials
- **Main Cards:** top-[4699px]
- **Components:**
  - Two glassmorphism cards (left-[436px] and left-[calc(40%+229px)])
  - `MaskGroup2-6` - Avatar images with gradient masks
  - Testimonial text overlays
- **Special Element:** "500K" large background text (top-[5916px])

#### Analytics Section
- **Components:** `Frame1`, `Frame5-14`
- **Contains:**
  - Stats cards
  - Chart visualizations
  - Performance metrics

#### CTA Section
- **Position:** Before footer
- **Type:** Full-width banner
- **Contains:**
  - Headline
  - CTA buttons
  - Trust badges

#### Footer
- **Position:** top-[7985px]
- **Contains:**
  - Company links
  - Product links
  - Social media icons
  - Copyright info

## 🎯 Finding Specific Elements

### To Find a Section:
1. **By Visual Position:** Use browser DevTools to find `top-[XXXpx]` value
2. **By Data Attribute:** Search for `data-name="Section Name"`
3. **By Component Name:** Search function definition (e.g., `function About()`)

### Common Search Patterns:

#### Find all sections:
```
Search: "function Section"
```

#### Find testimonials:
```
Search: "top-[4699px]" or "MaskGroup"
```

#### Find navigation:
```
Search: "function Nav()" or "data-name=\"Nav\""
```

#### Find footer:
```
Search: "function Footer()" or "top-[7985px]"
```

## 📐 Positioning System

The Figma import uses a combination of:

### 1. Absolute Positioning
```tsx
className="absolute top-[1020px] left-[436px]"
```

### 2. Calc-Based Responsive
```tsx
left-[calc(40%+229px)]  // 40% of container + 229px
left-[calc(60%+142px)]  // 60% of container + 142px
```

### 3. Centering with Transform
```tsx
left-1/2 -translate-x-1/2  // Horizontally centered
```

## 🗂️ Component Hierarchy

```
ZifyBotLandingPage (Root)
├── Background
│   └── SVG gradients (ellipses, rectangles)
├── Nav
│   ├── Logo
│   ├── Menu
│   └── Button1 (Sign In)
├── Home (Main Container)
│   ├── Hero Content
│   ├── Section (Metrics)
│   ├── About (Features)
│   │   ├── Section13
│   │   ├── Section15
│   │   ├── Section17
│   │   └── Title1
│   ├── Frame2, Frame3, Frame4 (Feature Cards)
│   ├── ContentSection (Product)
│   │   └── Content4
│   │       ├── Content1
│   │       ├── Content2
│   │       └── Content3
│   ├── Testimonials
│   │   ├── Card 1 (top-[4699px], left-[436px])
│   │   ├── Card 2 (top-[4699px], left-[calc(40%+229px)])
│   │   ├── MaskGroup2-6 (Avatars)
│   │   └── 500K Text (top-[5916px])
│   ├── Frame1 (Analytics)
│   │   ├── Frame5-14 (Charts & Stats)
│   │   └── Section18-30
│   └── BackgroundGradient
└── Footer
    └── Footer Links & Social
```

## 🔍 Quick Reference by Purpose

### Navigation Elements
- **File Location:** Lines ~294-303
- **Top Position:** 69px
- **Components:** `Nav()`, `Menu()`, `Logo()`, `Button1()`

### Hero Section
- **File Location:** Lines ~304-395
- **Top Position:** -1238px (full screen from top)
- **Component:** `Home()`

### Stats/Metrics Card
- **File Location:** Lines ~172-220
- **Top Position:** 1020px
- **Component:** `Section()`

### Features Grid
- **File Location:** Lines ~1465-1510
- **Top Position:** 1773px
- **Components:** `About()`, `Frame2-4()`

### Product Screenshots
- **File Location:** Lines ~3058-3070
- **Top Position:** 2354px
- **Component:** `ContentSection()`

### Testimonial Cards
- **File Location:** Scattered (cards ~306-314, avatars ~3071-3120)
- **Top Position:** 4699px (cards), 4757px-4770px (avatars)
- **Components:** Glass cards + `MaskGroup2-6`

### Footer
- **File Location:** Lines ~510-1057
- **Top Position:** 7985px
- **Component:** `Footer()`

## 💡 Tips for Editing

### Changing Content
1. Find section by position or data-name
2. Locate the `<p>` or `<div>` with text content
3. Update the text between tags

### Adjusting Position
1. Find the component with `top-[XXXpx]`
2. Change the pixel value
3. Test on scaled version (remember 75% scale in App.tsx)

### Modifying Styles
1. Locate the component
2. Update `className` for Tailwind classes
3. Update `style={{}}` for inline styles (gradients, filters)

### Adding Components
1. Create component function at bottom of file
2. Add to parent component's return JSX
3. Set absolute position with `top-[XXXpx]` and `left-[XXXpx]`

---

**Note:** The entire page is scaled to 75% in `/App.tsx`, so actual rendered positions differ from code values.
