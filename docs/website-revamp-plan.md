# Axiomplay Studios Website Revamp Plan

## 1) Confirmed Direction

This plan is based on your requirements:

- One app only for now: **WeighSnap** (weight tracking).
- No "upcoming games" list or future game teasers.
- Footer structure similar to your reference image: brand block + grouped link columns.
- Visual direction: **minimalist futuristic**.
- Motion direction: **subtle premium** with memorable experience.
- CTA priority: **Download on Play Store**.
- Theme strategy: **dark by default**, with light mode supported.
- Each project gets its own page (starting with `/projects/weighsnap`).
- Content + design + implementation guidelines are included.

## 2) What Other Studios Commonly Include (Benchmark Notes)

Reviewed patterns from major mobile game studio sites:

- **Supercell**: clear top-level nav buckets, strong brand storytelling, legal/media links in footer, app-store download emphasis.
- **Rovio**: dedicated game pages with hero, feature breakdown, media-heavy sections, repeated download CTA, newsletter/support/legal in lower sections.
- **King**: game discovery emphasis, legal/compliance-heavy footer, social + support links, clear corporate/media separation.

Useful patterns to adopt for Axiomplay:

- Repeat the primary store CTA in multiple high-intent zones (hero + project page + footer).
- Keep footer as structured information architecture (Studio, Legal, Connect).
- Use dedicated project page sections beyond "overview": features, screenshots, video, FAQ, changelog highlights, support/legal.

References:

- https://supercell.com/en/
- https://www.rovio.com/games/angry-birds-2/
- https://www.king.com/

## 3) Revamp Goals and Non-Goals

### Goals

- Make the site feel like a premium studio brand, not a template.
- Drive Play Store installs for WeighSnap.
- Build a scalable structure for future projects without redesign.
- Improve perceived polish through motion, typography, and composition.

### Non-Goals

- No careers-heavy corporate site.
- No upcoming game pipeline showcase.
- No tech stack section on project pages.

## 4) Information Architecture

### Final Page Map

- `/` Home
- `/projects/weighsnap` Project detail page
- `/privacy`
- `/terms`
- `/support` (recommended for app support + contact + FAQ escalation)

### Navigation (Top)

- Home
- WeighSnap
- Studio
- Support
- Legal

### Footer (Reference Structure Adapted)

- Column 1: Brand block
- Column 2: Studio links
- Column 3: Legal links
- Column 4: Connect links

## 5) Homepage Blueprint

## Section Order

1. Hero
2. Featured Product Strip (WeighSnap)
3. Experience/Benefits Cards
4. Screenshot Reel + optional short demo video
5. Studio Philosophy
6. Final Download CTA band
7. Structured Footer

### 5.1 Hero

- Headline framing Axiomplay as a precision product studio.
- Subheadline tying studio craft to WeighSnap value.
- Primary CTA: `Download on Play Store`.
- Secondary CTA: `Explore WeighSnap`.
- Background treatment: layered gradient + soft grid/noise texture + subtle animated light sweep.

### 5.2 Featured Product Strip

- Single product spotlight card for WeighSnap.
- Include Play Store badge, one-line pitch, and trust signals.
- Add micro-proof placeholders:
- `4.x rating`, `xK+ downloads`, `regular updates` (replace with real data).

### 5.3 Experience/Benefits Cards

- 3 cards max, each short and visual:
- Smart progress tracking
- Fast daily logging
- Clean trend insights

### 5.4 Screenshots + Video

- Horizontal screenshot carousel (snapping behavior on mobile).
- Optional 20 to 35 second muted loop (or animated mock frames) for product feel.
- Keep transitions slow and premium, not flashy.

### 5.5 Studio Philosophy

- One concise studio statement + 3 principles.
- Focus on craftsmanship, clarity, and consistency.

### 5.6 Final CTA Band

- Strong contrast strip near footer.
- Text: "Ready to track progress with precision?"
- CTA: `Download on Play Store`.

## 6) Project Page Blueprint (`/projects/weighsnap`)

## Required Sections

1. Project Hero
2. Overview
3. Feature Deep Dive
4. Screenshots Gallery
5. Video / Walkthrough
6. Reviews or User Quotes (if available)
7. Changelog Highlights
8. FAQ
9. Support + Privacy + Terms quick links
10. Final Download CTA

### Content Rules

- Keep paragraphs short (2 to 3 lines max on desktop measure).
- Every section should end with either proof, utility, or CTA.
- Avoid generic buzzwords; use concrete outcomes.

## 7) Visual Design System

## 7.1 Style Direction

- Minimalist futuristic: clean geometry, high contrast, controlled glow accents.
- Avoid crowded cards and avoid "gaming neon overload."

## 7.2 Color Tokens

- Dark default with cool graphite base and electric blue/cyan accents.
- Light mode keeps same accent DNA with reduced contrast glow.
- Define semantic tokens in `src/styles/tokens.css`:
- `--bg`, `--surface`, `--text-primary`, `--text-secondary`, `--accent`, `--accent-soft`, `--border`, `--focus`.

## 7.3 Typography

- Heading font: **Space Grotesk** (or **Sora**) for futuristic identity.
- Body font: **Manrope** for readability.
- Use strong hierarchy and generous spacing.

## 7.4 Iconography + Shape Language

- Monoline icons, rounded-square containers, subtle bevel highlights.
- Reuse consistent corner radius scale (8, 12, 16, 24).

## 8) Motion System (Subtle Premium)

### Global Principles

- Use fewer, higher-quality animations.
- Duration range: `220ms` to `700ms`.
- Easing preference: smooth deceleration (`cubic-bezier(0.22, 1, 0.36, 1)` style curve).

### Motion Patterns

- Stagger reveal for section children.
- Soft parallax shift in hero background (small amplitude).
- CTA hover with glow elevation and slight scale (`1.01` to `1.02`).
- Screenshot carousel with momentum + snap.
- Page transition fade/slide between home and project pages.

### Accessibility Guardrails

- Honor `prefers-reduced-motion: reduce`.
- Disable parallax and auto-animated transforms in reduced mode.
- Keep essential info visible without motion.

## 9) Footer Specification (Based on Your Preferred Structure)

### Layout

- Desktop: 4-column layout.
- Mobile: stacked blocks with clean spacing.

### Column Content

- Brand:
- Logo mark + "Axiomplay Studios"
- One-line mission
- Social icons row
- Studio:
- About
- Press Kit
- Support
- Legal:
- Privacy Policy
- Terms of Service
- Cookie Policy (optional if cookie tooling is introduced)
- Connect:
- X/Twitter
- YouTube
- Discord
- Contact Email

### Footer Behavior

- Slight top border gradient.
- Background distinct from body for strong closing anchor.
- Keep link hover understated and consistent.

## 10) Content and Copy Guidelines

### Voice

- Precise, calm, confident.
- Fewer adjectives, more outcomes.

### Homepage Copy Pattern

- Headline: short and high signal.
- Subheadline: one sentence with clear utility.
- Section intros: max 18 words.
- CTA labels: verb-first (`Download`, `Explore`, `Read FAQ`).

### Project Page Copy Pattern

- Start with what problem WeighSnap solves.
- Show how quickly user gets value.
- Prove reliability (update cadence, app quality signals, support availability).

## 11) Brand Asset Creation Plan

Since assets do not exist yet, create:

1. Primary logo lockup (wordmark + symbol)
2. Symbol-only mark (favicon/app header use)
3. Light/dark logo variants
4. App mockup frames (phone device renders with screenshots)
5. Social preview image (`og-image`)
6. Play Store CTA asset styling system

Recommended output locations:

- `public/brand/`
- `public/images/weighsnap/`
- `public/og/`

## 12) Implementation Guidelines for Current Codebase

This repository already uses React + TypeScript + CSS Modules. Implement in-place.

### 12.1 Data Model Refactor

- Replace multi-game structure in `src/content/siteContent.ts` with a `projects` model.
- Keep one item now (`weighsnap`), but model supports more.
- Remove "in development/prototype" statuses and announcement about future projects.

### 12.2 Routing

- Keep existing routes (`/`, `/privacy`, `/terms`).
- Add:
- `/projects/:projectId` for project details.
- `/support` for support content.

### 12.3 Page and Section Changes

- Rebuild homepage section composition in `src/pages/HomePage.tsx`.
- Replace `GamesSection` with `FeaturedProjectSection` and `BenefitsSection`.
- Add `ProjectPage.tsx` and project-specific sections.
- Add final CTA band section before footer.

### 12.4 Footer Rebuild

- Redesign `src/components/Footer.tsx` and `src/components/Footer.module.css` to four-column information architecture.
- Include social links and grouped legal/studio/connect lists.

### 12.5 Theme System

- Extend `src/styles/tokens.css` with dual-theme tokens (`[data-theme="dark"]`, `[data-theme="light"]`).
- Add theme toggle component in navbar.
- Default to dark and persist preference in `localStorage`.

### 12.6 Motion Implementation

- Keep current reveal hooks where useful.
- Introduce utility classes for stagger and subtle parallax in `src/styles/global.css`.
- Add reduced-motion fallback styles globally.

### 12.7 SEO and Metadata

- Update `index.html` metadata to WeighSnap-focused positioning.
- Add project-level metadata for `/projects/weighsnap`.
- Ensure canonical and OG/Twitter image coverage.

### 12.8 Accessibility and Performance

- Preserve keyboard navigation and focus-visible states.
- Lazy-load non-critical media.
- Use modern image formats and explicit dimensions to avoid layout shift.

## 13) Acceptance Criteria

A revamp is "done" when:

1. Homepage visually feels premium, minimalist futuristic, and distinct from template style.
2. No upcoming games/prototype messaging appears.
3. WeighSnap has a dedicated detail page with all required sections.
4. Footer matches preferred structured format (brand + grouped columns).
5. Dark mode default + light mode functional.
6. Motion is memorable but subtle and respects reduced-motion.
7. Primary CTA "Download on Play Store" is prominent on both home and project pages.
8. Content tone is polished, concise, and production-ready.

## 14) Execution Order (Implementation Sequence)

1. Refactor content model and routing first.
2. Implement new homepage structure and redesigned footer.
3. Build `/projects/weighsnap` page and wire CTA flows.
4. Apply theme token upgrade and toggle.
5. Add motion system and reduced-motion handling.
6. Replace placeholder copy/assets with final brand kit.
7. Run final QA on mobile + desktop + accessibility + performance.
