# Design Guidelines: GoGrowth.me - Solo Entrepreneur Portfolio

## Design Approach
**System**: Hybrid approach combining Linear's minimalist precision with Stripe's sophisticated restraint, enhanced with custom creative layouts that avoid generic patterns.

**Core Principle**: Demonstrate technical mastery through subtle sophistication, not flashy excess. Every animation must serve purpose and showcase senioridad.

---

## Layout Architecture

### Desktop: Asymmetric Three-Column Layout
- **Left Column (30%)**: Startups list - fixed/sticky positioning
- **Center Column (40%)**: Hero poem with typography animations, main content sections below
- **Right Column (30%)**: Experience/companies - fixed/sticky positioning

### Mobile: Stack vertically
- Hero poem → Startups → Experience → Additional sections

### Container Strategy
- Full-width sections with inner `max-w-[1400px]` constraints
- Generous horizontal padding: `px-8 lg:px-16`
- Vertical rhythm: `py-16 lg:py-24` between major sections

---

## Typography System

**Primary Font**: Inter or Space Grotesk (via Google Fonts CDN)
**Accent Font**: Playfair Display or Crimson Pro (for poem section only)

**Hierarchy**:
- Hero/Poem: `text-5xl lg:text-7xl` (accent font) - `font-light` to `font-medium`
- Section Headers: `text-3xl lg:text-4xl` - `font-semibold`
- Startup Names: `text-xl` - `font-medium`
- Body Text: `text-base lg:text-lg` - `font-normal`
- Supporting Text: `text-sm` - `font-light` with increased `tracking-wide`

**Line Heights**: Generous spacing - `leading-relaxed` to `leading-loose` for readability

---

## Color System

**Primary Palette**:
- Deep Wine: `#8B2346` (primary actions, accents)
- Charcoal: `#2C2C2E` (headings, primary text)
- Warm Gray: `#F5F5F7` (backgrounds)
- Pure White: `#FFFFFF` (contrast sections)

**Gradients** (use sparingly - 2-3 instances max):
- Hero Background: `from-[#1a1a1a] via-[#2C2C2E] to-[#3a2630]`
- Accent Overlays: `from-[#8B2346]/20 to-transparent`

**Semantic**:
- Links/Hover: Wine with 10% opacity increase
- Borders: `border-gray-200` or `border-white/10` on dark backgrounds
- Text on dark: `text-gray-100`
- Text on light: `text-gray-900`

---

## Spacing System
**Tailwind Units**: Consistently use `2, 4, 6, 8, 12, 16, 24`

- Component internal padding: `p-6` to `p-8`
- Card spacing: `gap-8`
- Section margins: `my-16` to `my-24`
- Grid gaps: `gap-6 lg:gap-8`

---

## Core Components

### Startup Cards (Left Column)
- Minimalist list with hover states
- Each item: Logo area + Name + Subtle arrow indicator
- Hover: Background wine gradient fade-in (200ms), slight scale (1.02)
- Divider lines between items: `border-b border-gray-200`

### Animated Poem Section (Center)
- Large typography with line-by-line fade-in on scroll
- **Highlight words** "confiar" and "aprender" with wine color + slightly larger weight
- Stagger animation delay: 150ms per line
- Use `opacity` and `translateY` transforms only

### Experience Cards (Right Column)
- Logo + Company name in vertical stack
- Subtle hover: Wine border-left accent (3px) slides in
- Minimal design - let logos speak

### Frameworks Section (Gumroad)
- Card grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Each framework: Icon/thumbnail + Title + Brief description + Download CTA
- CTA buttons: Wine background with charcoal text on hover

### Study Section
- Timeline or card-based layout
- Current focus highlighted with wine accent border
- Icons from Heroicons CDN

### Language Selector
- Minimal flag/text toggle in top-right header
- Smooth content transition: `transition-opacity duration-300`

---

## Navigation
**Minimal Top Bar**:
- Logo/Name left
- Language selector right
- Sticky on scroll with subtle backdrop blur: `backdrop-blur-md bg-white/80`
- Height: `h-16 lg:h-20`

---

## Animation Principles

**Allowed**:
- Scroll-triggered fade-ins for poem lines
- Hover micro-interactions on cards (200-300ms)
- Page load hero animation (single occurrence)
- Smooth language transitions

**Forbidden**:
- Parallax effects
- Continuous looping animations
- Excessive particle systems
- Carousel auto-play

**Timing**: All transitions use `ease-out` or `cubic-bezier(0.4, 0, 0.2, 1)`

---

## Images

**No large hero image** - the animated poem IS the hero

**Logo/Icon Usage**:
- Startup logos: SVG preferred, 48x48px to 64x64px
- Company logos: Grayscale with wine tint on hover
- Use image placeholders with company names if logos unavailable

**Framework Thumbnails**: 
- 16:9 aspect ratio preview images
- Subtle shadow: `shadow-lg`
- Hover: Lift effect with increased shadow

---

## Accessibility & SEO

- Semantic HTML5 structure
- ARIA labels on language selector and external links
- Alt text for all images
- Meta tags: Open Graph + Twitter Cards for all three languages
- Structured data: Person schema with multilingual properties
- `lang` attribute switching per language selection

---

## Mobile Responsiveness

**Breakpoints**: Follow Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

**Mobile Adaptations**:
- Three columns stack vertically
- Poem text scales to `text-4xl`
- Touch-friendly tap targets: minimum `h-12`
- Horizontal scroll for startup/company lists if needed
- Hamburger menu NOT needed (minimal navigation)

---

## Technical Constraints

- **Icons**: Heroicons via CDN (outline style for consistency)
- **Fonts**: Google Fonts CDN, preload critical fonts
- **No custom SVG generation** - use icon libraries
- **Resend Integration**: Email capture form in footer or dedicated section
- **Gumroad**: Direct links with tracking parameters

---

**Final Note**: This design balances sophisticated minimalism with purposeful impact. The asymmetric three-column layout breaks conventional patterns while maintaining professional credibility. Every element serves the narrative of a senior solo entrepreneur who understands that less is more - except when more is necessary to impress.