# Asset Production Inventory

This file defines the exact assets produced in this implementation pass.

## Brand Assets (`public/brand`)

- `logo-mark.svg`
- `logo-lockup-dark.svg`
- `logo-lockup-light.svg`
- `logo-wordmark.svg`
- `brand-colors.txt`

## WeighSnap Visual Assets (`public/images/weighsnap`)

- `weighsnap-hero.svg`
- `weighsnap-screen-01.svg`
- `weighsnap-screen-02.svg`
- `weighsnap-screen-03.svg`

## Social Preview (`public/og`)

- `og-weighsnap.svg`

## Updated Existing Public Assets

- `public/favicon.svg` (new brand mark variant)

## PNG Export Mapping

- `public/favicon.png` <= `public/brand/logo-mark.svg` at 32x32
- `public/apple-touch-icon.png` <= `public/brand/logo-mark.svg` at 180x180
- `public/icon-192.png` <= `public/brand/logo-mark.svg` at 192x192
- `public/icon-512.png` <= `public/brand/logo-mark.svg` at 512x512
- `public/og/og-weighsnap.png` <= `public/og/og-weighsnap.svg` at 1200x630
- `public/og-image.png` <= `public/og/og-weighsnap.svg` at 1200x630

## Integration Targets

- `src/components/Logo.tsx`
- `src/content/siteContent.ts`
- `index.html`
