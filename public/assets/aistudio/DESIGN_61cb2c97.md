---
name: Obsidian Wealthcore Portfolio
colors:
  surface: '#101413'
  surface-dim: '#101413'
  surface-bright: '#363a39'
  surface-container-lowest: '#0b0f0e'
  surface-container-low: '#181c1b'
  surface-container: '#1c201f'
  surface-container-high: '#262b2a'
  surface-container-highest: '#313634'
  on-surface: '#e0e3e1'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e0e3e1'
  inverse-on-surface: '#2d3130'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#ffb3af'
  on-tertiary: '#650911'
  tertiary-container: '#fc7c78'
  on-tertiary-container: '#711419'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#101413'
  on-background: '#e0e3e1'
  surface-variant: '#313634'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  mono-metric:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the refined, high-trust precision of private wealth-management consoles and computational architecture. Tailored for an informatics engineering student and builder, it translates technical rigor into an executive luxury aesthetic.

### Aesthetic Principles
- **Architectural Precision:** Subtle hairline grid overlays, disciplined column alignments, and calculated micro-spacing communicate engineering discipline.
- **Atmospheric Depth:** Deep obsidian layers anchored by ambient emerald radial diffusions create an immersive, nocturnal command-center feel.
- **Wealthcore Restraint:** Restrained metallic accents (specular emerald and muted gold) punctuate technical data, elevating code and metrics to high-value assets.
- **Tone:** Authoritative, cutting-edge, intellectual, and understatedly premium.

## Colors

The palette establishes an ultra-dark visual baseline built on mineral greens and obsidian depths, ensuring luminous contrast for code telemetry and engineering achievements.

### Surface System
- **Canvas Base:** `#070B0A` (Deep Obsidian Black) establishes the root ground.
- **Container / Card Surface:** `#0D1412` (Elevated Dark Forest) for distinct interactive zones and modular panels.
- **Elevated Overlay / Flyouts:** `#131C1A` for modals, context menus, and tooltips.

### Accents & Metallics
- **Primary Accent (Emerald Mint):** `#10B981` denotes active telemetry, code viability, live links, and primary CTA vectors.
- **Emerald Halos:** `rgba(16, 185, 129, 0.16)` serves as ambient radial backgrounds and focused interactive glows.
- **Secondary Accent (Specular Gold):** `#D4AF37` reserved for honor rolls, awards, verified credentials, and high-impact accolades.

### Typography Hierarchy
- **High-Emphasis:** `#F3F6F5` for headings, key metrics, and primary narrative.
- **Medium-Emphasis:** `#9CA8A4` for descriptions, structural labels, and body text.
- **Low-Emphasis / Grid:** `#5E6B67` for telemetry stamps, line numbers, and deactivated states.
- **Hairline Borders:** `rgba(255, 255, 255, 0.08)` for structural separation.

## Typography

The typographic engine uses **Plus Jakarta Sans** for fluid, architectural readability across narrative components, paired strictly with **JetBrains Mono** for technical markers, telemetry indices, commit tags, and stat callouts.

### Usage Standards
- Headings mandate tighter negative letter spacing (`-0.01em` to `-0.03em`) to project confidence and structural unity.
- Monospace tags and category headers (`mono-label`) must be rendered uppercase with expanded letter-spacing (`0.08em`) to mimic engineering readouts.
- Code snippets and data arrays leverage tabular lining figures via `JetBrains Mono` for vertical alignment across comparison cards.

## Layout & Spacing

A 12-column fluid grid system with structural grid guides anchors the portfolio. The grid embodies an intentional command dashboard:

### Grid Structure & Adaptation
- **Desktop (>= 1024px):** 12 columns, 1.5rem gutters, max-width `1280px` centered canvas, 2rem edge margins. Optional background hairline rules (`rgba(255, 255, 255, 0.03)`) down column divisions.
- **Tablet (768px - 1023px):** 8 columns, 1.25rem gutters, 1.5rem outer margins.
- **Mobile (< 768px):** 4 columns, 1rem gutters, 1.25rem outer margins. Single-column stacks for architecture and metric showcases.

### Spacing Discipline
Spacing tokens operate strictly on dynamic multi-tier padding. Compact technical modules employ `space-sm` and `space-md`, while section transitions require `space-xl` combined with dynamic viewport multipliers (`clamp(3rem, 6vw, 6rem)`).

## Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows. Depth is achieved via architectural boundary lines, layered obsidian tones, and focused emerald photometrics.

### Surface Tiers
- **Tier 0 (Root Base):** `#070B0A` with fixed ambient radial gradient: `radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)`.
- **Tier 1 (Surface Containers):** `#0D1412` with a `1px` continuous border in `rgba(255, 255, 255, 0.08)`.
- **Tier 2 (Elevated & Active):** `#131C1A` accompanied by an inner light stroke (`inset 0 1px 0 rgba(255, 255, 255, 0.12)`) and a diffused exterior glow: `0 8px 32px -4px rgba(0, 0, 0, 0.6), 0 0 24px -2px rgba(16, 185, 129, 0.12)`.

### Border Illumination
Cards and interactive nodes simulate an active circuit line: upon hover or active state, the border shifts from passive white opacity (`rgba(255, 255, 255, 0.08)`) to emerald-infused luminance (`rgba(16, 185, 129, 0.4)`).

## Shapes

The geometric framework balances executive polish with modern ergonomics using standard `0.5rem` (8px) corners for small modules and `1rem` (16px) for major panels.

- **Primary Cards & Panels:** Standardized at `rounded-lg` (16px radius) with an absolute 1px outline.
- **Interactive Controls (Inputs, Buttons):** Standardized at `rounded-md` (8px) for a crisp, functional feel.
- **Tags, Status Pills, and Badges:** Full pill execution (`rounded-full` / 9999px) to contrast against rectangular card frames.

## Components

### Buttons
- **Primary (Action/Contact):** Solid `#10B981` background, `#070B0A` bold typography (`Plus Jakarta Sans`), 8px radius, with a permanent soft halo: `box-shadow: 0 0 20px rgba(16, 185, 129, 0.25)`. Hover intensifies luminescence.
- **Secondary (Repository/Case Study):** Background `#0D1412`, border `1px solid rgba(255, 255, 255, 0.12)`, text `#F3F6F5`. Hover shifts border to `#10B981` with an interior fill of `rgba(16, 185, 129, 0.05)`.
- **Text/Link:** JetBrains Mono font, `#9CA8A4` with a dynamic trailing arrow (`→`) that translates 4px right on hover, transitioning text to `#10B981`.

### Cards & Project Showcases
- **Container:** `#0D1412` fill, 16px radius, `1px solid rgba(255, 255, 255, 0.08)` border.
- **Header Section:** Incorporates monospace category labels and technical stack badges.
- **Interactive Hover:** Card scales subtly (`scale(1.008)`), border lights up to `rgba(16, 185, 129, 0.35)`, and a localized radial spotlight tracks user cursor motion.

### Accolade & Award Badges
- Surface: `#0D1412` with a `1px` accent border tinted in `rgba(212, 175, 55, 0.25)`.
- Labeling: `JetBrains Mono`, text color `#D4AF37`.
- Ambient Effect: Subtle warm gold specular aura `0 0 20px rgba(212, 175, 55, 0.08)`.

### Tags & Tech Stack Chips
- Pill-shaped (`rounded-full`), height `24px`, horizontal padding `10px`.
- Background: `rgba(255, 255, 255, 0.04)`, border: `1px solid rgba(255, 255, 255, 0.06)`, text: `#9CA8A4` rendered in `mono-code` at 11px.

### Inputs & Terminal Fields
- Background: `rgba(7, 11, 10, 0.6)`, border: `1px solid rgba(255, 255, 255, 0.1)`, 8px radius.
- Focus state: Border transitions to `#10B981`, with an outer glow `0 0 0 3px rgba(16, 185, 129, 0.15)`. Text in `#F3F6F5`, placeholder in `#5E6B67`.

### Metrics & Stat Blocks
- Structured telemetry blocks displaying big data counters (`mono-metric` in `#F3F6F5`) accompanied by status labels in `mono-label` (`#5E6B67`).
- Includes a live activity indicator: a 6px pulsing emerald dot (`#10B981`) denoting real-time system/availability status.