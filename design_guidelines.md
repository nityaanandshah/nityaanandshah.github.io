# Portfolio Website Design Guidelines

## Design Approach
**Selected Framework:** Reference-Based (Linear + Stripe hybrid)
- Linear's exceptional typography and minimalist precision
- Stripe's professional restraint and subtle sophistication
- FAANG-caliber polish with engineering-focused clarity

## Core Design Principles
1. **Technical Excellence Through Simplicity:** Clean, distraction-free layouts that let projects and experience shine
2. **Hierarchy & Clarity:** Clear information architecture optimized for recruiter scanning
3. **Professional Minimalism:** No unnecessary embellishments, every element serves a purpose

## Typography System
**Font Stack:**
- Primary: 'Inter' (Google Fonts) - headings and UI elements
- Secondary: 'JetBrains Mono' (Google Fonts) - code snippets, tech stack badges
- Fallback: system-ui, -apple-system, sans-serif

**Hierarchy:**
- Hero Name: text-5xl to text-6xl (60-72px), font-bold, tracking-tight
- Section Headings: text-3xl to text-4xl (36-48px), font-semibold
- Subsection/Card Titles: text-xl to text-2xl (24-30px), font-medium
- Body Text: text-base to text-lg (16-18px), font-normal, leading-relaxed
- Tech Badges/Small Text: text-sm (14px)

## Layout System
**Spacing Primitives:** Use Tailwind units 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 for grids, gap-6 for cards
- Container: max-w-6xl mx-auto px-6

**Grid Structure:**
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skills: grid-cols-2 sm:grid-cols-3 md:grid-cols-4
- Experience: Single column timeline with left border accent

## Component Library

### Navigation
- Sticky header with backdrop blur effect (backdrop-blur-md)
- Horizontal nav links with underline indicators on active section
- Smooth scroll behavior with offset for sticky header
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Name + Title + 2-3 line tagline (max-w-2xl)
- Button group: Primary CTA + Secondary + Ghost styles in flex-row gap-4
- Social icons: Simple, monochrome, hover scale transform
- **No hero image** - pure typography-focused with subtle gradient background

### Cards (Projects, Experience, Education)
- Border-subtle design with rounded-lg
- Hover: subtle shadow lift (shadow-md to shadow-lg transition)
- Internal padding: p-6 to p-8
- Header with title + metadata (dates, company)
- Tech stack as pill badges (inline-flex gap-2)
- Bullet points with subtle markers (text-sm space-y-2)

### Skills Section
- Grouped by category with clear labels
- Badge style: rounded-full px-4 py-2, border-thin
- Hover: subtle scale and border color shift
- Monospace font for technical feel

### Contact Form
- Clean, minimal inputs with border-bottom only style
- Focus states: border color change + subtle glow
- Button: Primary style, full-width on mobile
- Validation: inline error messages below fields

### Buttons
- Primary: Solid background, medium padding (px-6 py-3)
- Secondary: Border style with transparent background
- Ghost: Text only with hover background
- All: rounded-md, font-medium, transition-all duration-200
- Hover: slight scale (scale-105) and brightness shift

## Animations
**Minimal & Purposeful:**
- Fade-in on scroll for sections (intersection observer)
- Hover states: transform scale and color transitions only
- Page load: Stagger fade-in for hero elements (0.1s delays)
- NO complex scroll-triggered animations, parallax, or auto-playing elements

## Visual Treatment
**Color Philosophy: Starry Night Soft Gradient**
- Cosmic blue, indigo, violet, and purple tones inspired by night skies
- Primary accent: Rich indigo-purple (hsl 260° 70% 55%) for CTAs and important actions
- Secondary accent: Vibrant violet (hsl 280° 65% 60%) for special emphasis
- Backgrounds: 
  - **Light mode**: Very light blue-white for clean, airy feel
  - **Dark mode**: Actual Starry Night Soft Gradient image with subtle overlay
- High contrast text for readability (WCAG AA compliant)
- Subtle blue-gray borders and dividers throughout
- **Glass morphism effects in dark mode:**
  - Cards with 85% opacity + 12px backdrop blur
  - Navigation with 80% opacity + 16px backdrop blur  
  - Modals with 90% opacity + 20px backdrop blur
- Card backgrounds slightly elevated from page background with cosmic depth
- Gradient overlays: Linear gradients from deep blue through indigo to violet
- Reference: [Starry Night Soft Gradient](https://gradientshub.com/freebies/gradients/46-starry-night-soft-gradient/)

## Color Usage Reference

**Light Mode Palette:**
- Page Background: `bg-background` (very light blue-white)
- Text: `text-foreground` (deep navy blue-black)
- Cards: `bg-card border-card-border` (soft periwinkle white)
- Primary Buttons: `bg-primary text-primary-foreground` (rich indigo-purple)
- Secondary Buttons: `bg-secondary text-secondary-foreground` (light blue-gray)
- Accent Elements: `bg-accent text-accent-foreground` (vibrant violet)
- Muted Text: `text-muted-foreground` (blue-gray)

**Dark Mode Palette:**
- Page Background: `bg-background` (deep cosmic blue)
- Text: `text-foreground` (soft white with blue tint)
- Cards: `bg-card border-card-border` (rich dark indigo)
- Primary Buttons: `bg-primary text-primary-foreground` (glowing indigo)
- Secondary Buttons: `bg-secondary text-secondary-foreground` (dark blue-gray)
- Accent Elements: `bg-accent text-accent-foreground` (bright violet)
- Muted Text: `text-muted-foreground` (subtle blue-gray)

**Color Application Examples:**
- Hover effects: Add `/90` or `/80` opacity modifiers
- Focus rings: Use `ring-primary` for indigo-purple focus indicators
- Charts & graphs: Use `bg-chart-1` through `bg-chart-5` for data visualization (indigo → purple → violet → blue)
- Gradients: Combine deep blue (245°) → indigo (260°) → purple (270°) → violet (280°)
- Glow effects: Use `shadow-[0_0_20px_rgba(104,55,212,0.3)]` for cosmic glows

**See COLOR_PALETTE.md for comprehensive color variations and hex values**

## Accessibility
- Semantic HTML5 elements (nav, main, section, article)
- ARIA labels on all interactive elements
- Focus indicators on all focusable elements (ring-2 ring-offset-2)
- Skip-to-content link for keyboard navigation
- Sufficient color contrast ratios (minimum 4.5:1)
- All color combinations meet WCAG AA standards

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly targets: minimum 44x44px tap areas
- Collapsible navigation on mobile
- Stack all multi-column layouts on mobile
- Adjust font sizes down 1-2 steps on mobile

## Images
**No images required** for this portfolio - focus on typography and content presentation. If profile photo is added later, use: circular crop (rounded-full), max-w-32, subtle border, positioned in About section.

## Key Implementation Notes
- Sticky header: Use position-sticky with z-index management
- Current section highlighting: Intersection Observer API
- Smooth scroll: CSS scroll-behavior: smooth + offset calculations
- Form validation: Front-end only, console.log submissions
- Download Resume: Placeholder link in Hero buttons
- GitHub/LinkedIn: Icon links with external link indicators

**Critical:** Maintain generous whitespace throughout. Better to have breathing room than cramped layouts. Each section should feel distinct and focused on its singular purpose.