# Design Guidelines: GoGrowth.me - Phelipe Xavier Portfolio

## Design Direction
Following the editorial aesthetic of balajmarius.com and jacobleech.com - clean, minimal, sophisticated single-column layout with strong typography and warm color palette.

**Core Principle**: Demonstrate sophistication through restraint. Editorial, magazine-like feel with bold typography and generous whitespace.

---

## Brand Identity
- **Owner**: Phelipe Xavier
- **Lab/Brand**: gogrowth lab
- **Location**: Kunshan, Jiangsu, China

---

## Color System

### Light Mode (Warm Parchment)
- **Background**: HSL(38, 33%, 95%) - Warm cream/parchment
- **Foreground**: HSL(20, 10%, 15%) - Dark charcoal text
- **Primary (Wine)**: HSL(340, 75%, 32%) - Rich wine accent
- **Muted**: HSL(35, 15%, 90%) - Subtle warm gray
- **Border**: HSL(35, 15%, 85%) - Light warm border

### Dark Mode (Warm Charcoal)
- **Background**: HSL(25, 15%, 8%) - Deep warm charcoal
- **Foreground**: HSL(38, 20%, 92%) - Light warm text
- **Primary (Wine)**: HSL(340, 72%, 48%) - Brighter wine for dark mode

### Usage
- Primary wine for links, accents, CTAs
- Borders: 50% opacity for subtle dividers
- No harsh contrasts - warm tones throughout

---

## Typography System

### Font Families
- **Headlines**: Playfair Display (serif) - Bold, italic for emphasis
- **Body**: Space Grotesk (sans-serif) - Clean, modern
- **Mono**: JetBrains Mono - Code and technical content

### Type Scale
- Section titles: `text-4xl lg:text-6xl` - Playfair Display, bold
- Hero tagline: `text-3xl lg:text-5xl` - Mixed serif/sans for emphasis
- Body: `text-base lg:text-lg` - Space Grotesk
- Small text: `text-sm` - Muted foreground

### Editorial Treatments
- **Italic emphasis**: Key words use `font-['Playfair_Display'] italic`
- **Section headers**: Bold serif, large scale
- **Numbered entries**: Two-digit format (01, 02) in primary/30 opacity
- **No emojis**: Use lucide-react icons only

---

## Layout Architecture

### Structure
- Single-column, content-focused layout
- Max width: `max-w-4xl` for content
- Generous padding: `px-6` on all screens

### Section Order
1. **Header**: Fixed, minimal - name + location + language toggle
2. **Hero**: Tagline with italic emphasis + bio paragraphs
3. **Experiments**: Numbered grid of 10 ventures
4. **Experience**: Clean list of 8 companies (name/role/dates)
5. **Resources**: Framework cards for download
6. **Newsletter**: Simple subscription form
7. **Footer**: Minimal with lab name and location

### Spacing
- Section padding: `py-16 lg:py-24`
- Element gaps: `space-y-8` major, `space-y-4` minor
- Section dividers: `border-t border-border/50`

---

## Core Components

### Header
- Fixed position with backdrop blur
- Height: `h-14`
- Name on left, location + language on right
- Language selector: text buttons with `/` separator

### Hero Section
- Tagline: Sans + serif italic mix
- Bio: Two paragraphs, muted color, max-w-2xl

### Experiments Section
- Two-column grid on desktop
- Each item: Large number + name + description + arrow
- Border-bottom between items
- Hover: border-primary/50

### Experience Section
- Single column list
- Grid: company (4 cols) | role (5 cols) | date (3 cols)
- Hover: subtle background highlight

### Frameworks Section
- Three-column grid
- Cards: border, padding, hover states
- Download link with arrow icon

### Newsletter Section
- Horizontal form on desktop
- Input + button inline
- Success state with checkmark

### Footer
- Lab name + location on left
- Copyright on right

---

## Animation Principles

**Allowed**:
- Scroll-triggered fade-ins (opacity + translateY)
- Hover micro-interactions (200-300ms)
- Page load stagger animations

**Parameters**:
- Duration: 400-600ms
- Ease: `[0.4, 0, 0.2, 1]` (cubic-bezier)
- Stagger: 60-100ms between items

**Forbidden**:
- Continuous looping animations
- Parallax effects
- Excessive particle systems
- Auto-playing carousels

---

## Responsive Behavior

### Breakpoints
- Mobile: < 640px (single column)
- Tablet: 640-1024px (adjust grid)
- Desktop: > 1024px (full layout)

### Mobile Adaptations
- Single column layouts
- Smaller typography
- Touch-friendly tap targets (min h-11)
- Stack forms vertically

---

## Accessibility & SEO

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Alt text for images
- Data-testid on all interactive elements
- Meta tags: Open Graph + Twitter Cards
- Structured data: Person schema
- `lang` attribute per language

---

## Technical Constraints

- **Icons**: lucide-react (consistent style)
- **Fonts**: Google Fonts via @font-face
- **i18n**: PT/EN/ZH support with localStorage
- **Animations**: Framer Motion
- **API**: Newsletter subscription via backend

---

**Final Note**: This design prioritizes editorial sophistication and warm, approachable aesthetics. The single-column layout focuses attention on content while bold typography creates visual hierarchy. Every element serves the narrative of a senior entrepreneur who values clarity and quality over complexity.
