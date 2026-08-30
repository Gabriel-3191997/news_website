---
name: QualityNews Design System
colors:
  surface: '#f5faff'
  surface-dim: '#d5dbdf'
  surface-bright: '#f5faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4f9'
  surface-container: '#e9eef3'
  surface-container-high: '#e4e9ee'
  surface-container-highest: '#dee3e8'
  on-surface: '#171c20'
  on-surface-variant: '#45474c'
  inverse-surface: '#2c3135'
  inverse-on-surface: '#ecf1f6'
  outline: '#76777c'
  outline-variant: '#c6c6cc'
  surface-tint: '#585e6c'
  primary: '#030813'
  on-primary: '#ffffff'
  primary-container: '#1a202c'
  on-primary-container: '#828796'
  inverse-primary: '#c1c6d7'
  secondary: '#5b5f61'
  on-secondary: '#ffffff'
  secondary-container: '#dde0e2'
  on-secondary-container: '#5f6365'
  tertiary: '#000918'
  on-tertiary: '#ffffff'
  tertiary-container: '#002140'
  on-tertiary-container: '#4f8ad0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde2f3'
  primary-fixed-dim: '#c1c6d7'
  on-primary-fixed: '#161c27'
  on-primary-fixed-variant: '#414754'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c3c7c9'
  on-secondary-fixed: '#181c1e'
  on-secondary-fixed-variant: '#434749'
  tertiary-fixed: '#d3e4ff'
  tertiary-fixed-dim: '#a2c9ff'
  on-tertiary-fixed: '#001c38'
  on-tertiary-fixed-variant: '#004881'
  background: '#f5faff'
  on-background: '#171c20'
  surface-variant: '#dee3e8'
typography:
  display-metrics:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  container-margin: 24px
  gutter: 16px
  panel-gap: 20px
---

## Brand & Style
The design system is engineered for a high-performance AI-powered newsroom environment. It centers on the values of **Trust, Accuracy, and Speed**, prioritizing information density without sacrificing clarity. 

The aesthetic is **Corporate Modern with a Minimalist lens**. It avoids unnecessary ornamentation to keep the focus on editorial content and data. The UI evokes a sense of "digital paper"—clean, structured, and authoritative. Visual hierarchy is established through precise typography and a strict grayscale scale, ensuring that the AI-powered insights and editorial statuses are immediately legible.

## Colors
The palette is rooted in a "Deep Navy" primary to ground the interface in professionalism. The secondary and neutral tones provide a layered foundation for the CMS, using light grays to separate the navigation, workspace, and utility panels.

- **Primary (#1A202C):** Used for primary text, navigation backgrounds, and high-emphasis icons.
- **Accent (#2B6CB0):** Reserved for primary actions, active states, and focus indicators.
- **Semantic Colors:** Applied strictly to status badges (e.g., "Published", "Draft", "Rejected") and data visualization markers to ensure immediate cognitive recognition of system states.

## Typography
The design system utilizes **Geist** for its technical precision and exceptional legibility in data-heavy environments. 

- **Display Metrics:** Used for high-level AI insights and analytics dashboards.
- **Editorial Headers:** Headline levels 1-3 should be used for article titles and section headers, maintaining a clear descending scale.
- **Body Text:** Standardized at 16px for optimal long-form reading within the CMS editor.
- **Precise Labels:** Small, semi-bold, uppercase labels are used for metadata, timestamps, and table headers to differentiate system text from editorial content.

## Layout & Spacing
The layout employs a **Fluid Grid** model with fixed-width sidebars to maximize the editorial workspace. 

- **Desktop:** 12-column grid. Left sidebar (Role-aware navigation) is fixed at 240px. Right sidebar (AI Assistant) is fixed at 320px or collapsible.
- **Gutter & Margins:** A consistent 16px gutter ensures data-rich tables remain readable. 
- **Rhythm:** Spacing follows a 4px baseline. Use larger increments (32px, 48px) for separating major functional blocks (e.g., Editor vs. Metadata panel).
- **Mobile:** The layout collapses to a single column; sidebars transform into bottom sheets or full-screen overlays accessible via a hamburger menu.

## Elevation & Depth
This design system uses **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows to maintain a professional, flat editorial look.

- **Level 0 (Base):** The main workspace background (#F7FAFC).
- **Level 1 (Surface):** Cards, table rows, and input containers (#FFFFFF). Defined by a 1px border (#EDF2F7).
- **Level 2 (Overlay):** Drawers (AI Panels) and Modals. These use a subtle ambient shadow (0px 4px 12px rgba(0,0,0,0.05)) to separate them from the active workspace.
- **Active State:** Elements being edited or selected should use a 2px accent border (#2B6CB0) rather than an elevation change.

## Shapes
A "Rounded" profile (8px/0.5rem) is applied to all primary UI components to soften the professional aesthetic and make the interface feel modern and approachable.

- **Standard (8px):** Applied to buttons, input fields, cards, and AI panels.
- **Pill (Full):** Reserved exclusively for status badges and tags (e.g., "Urgent", "Fact-Checked") to distinguish them from actionable buttons.

## Components
- **Editorial Cards:** Feature a white background, 1px border, and a top-aligned status badge. Hover states should subtly darken the border color.
- **Data Tables:** Use a "zebra-striping" approach on hover only. Table headers are styled with `label-sm` (uppercase) for clarity. Action buttons within rows should be icon-only or ghost-style to reduce visual noise.
- **AI Assistant Panels:** Styled as "drawers" that slide from the right. Use a slightly darker neutral background (#EDF2F7) to distinguish the AI's "thought space" from the human "creative space."
- **Form Inputs:** High-contrast borders (1px solid #CBD5E0) that transition to #2B6CB0 on focus. Error states must include both a red border and a helper text icon.
- **Rich-Text Editor:** A "distraction-free" container that removes all borders except for the toolbar. The toolbar should stick to the top of the viewport during long-form scrolling.
- **Role-Aware Sidebar:** Uses the primary color (#1A202C) for the background with high-contrast white text for high-level navigation, ensuring clear differentiation from the content area.