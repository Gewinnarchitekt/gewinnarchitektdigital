

# Add SEO Meta Tags to All Pages

## Overview

Install `react-helmet-async`, create a reusable `SEOHead` component, add it to every page with page-specific values, and clean up `index.html` to avoid duplicate meta tags.

## Changes

### 1. Install `react-helmet-async`

Add the dependency for managing `<head>` tags from React components.

### 2. Wrap App with `HelmetProvider`

In `src/main.tsx`, wrap `<App />` with `<HelmetProvider>` from `react-helmet-async`.

### 3. Create `src/components/SEOHead.tsx`

A reusable component accepting these props:
- `title` (string)
- `description` (string)
- `canonical` (string) -- full URL
- `ogImage` (string, optional)
- `noIndex` (boolean, optional, default false)
- `schemaJson` (object, optional) -- JSON-LD structured data

The component renders a `<Helmet>` with:
- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- `<meta name="robots">` (only if noIndex)
- `<meta property="og:title">`, `og:description`, `og:url`, `og:image`, `og:type`
- `<meta name="twitter:card">`, `twitter:title`, `twitter:description`, `twitter:image`
- `<script type="application/ld+json">` (if schemaJson provided)

### 4. Add SEOHead to every page

Base URL: `https://gewinnarchitekt.ch`

| Page | Title | Description | Canonical | OG Image |
|------|-------|-------------|-----------|----------|
| `/` (Index) | gewinnarchitekt.ch - Pricing Expertise auf Abruf | Datengetriebene Gewinnoptimierung fur digitale Produkte. Pricing & Analytics as a Service. | https://gewinnarchitekt.ch/ | hero-data-background.jpg |
| `/en` (IndexEn) | gewinnarchitekt.ch - Pricing Expertise on Demand | Get More from Your Digital Offerings. Data-driven insights for customer-oriented offerings. | https://gewinnarchitekt.ch/en | hero-data-background.jpg |
| `/impressum` | Impressum - gewinnarchitekt.ch | Impressum und rechtliche Informationen von gewinnarchitekt, Karl Aschwanden, Zurich. | https://gewinnarchitekt.ch/impressum | (none) |
| `/datenschutz` | Datenschutzerklarung - gewinnarchitekt.ch | Datenschutzerklarung von gewinnarchitekt. Informationen zum Umgang mit personenbezogenen Daten. | https://gewinnarchitekt.ch/datenschutz | (none) |
| `/fallstudie/angebotsgestaltung` | Fallstudie Swisscard - Angebotsgestaltung - gewinnarchitekt.ch | Strategische Angebotsgestaltung nach Partnerschaftsauflosung bei Swisscard GmbH. | https://gewinnarchitekt.ch/fallstudie/angebotsgestaltung | solution-angebotsgestaltung.jpg |
| `/fallstudie/angebotsoptimierung` | Fallstudie Goldbach - Angebotsoptimierung - gewinnarchitekt.ch | Yield Management & Transparenz fur fuhrenden Werbevermarkter Goldbach NeXT AG. | https://gewinnarchitekt.ch/fallstudie/angebotsoptimierung | solution-angebotsoptimierung.jpg |
| `/fallstudie/angebotsstrategie` | Fallstudie Sunrise - Angebotsstrategie - gewinnarchitekt.ch | Pricingstrategie fur Smartphones bei Sunrise Communications AG. | https://gewinnarchitekt.ch/fallstudie/angebotsstrategie | solution-angebotsstrategie.jpg |
| `*` (NotFound) | Seite nicht gefunden - gewinnarchitekt.ch | Die angeforderte Seite wurde nicht gefunden. | (none) | noIndex: true |

### 5. Clean up `index.html`

Remove from `<head>`:
- `<title>` tag (line 8)
- `<meta name="description">` (line 9)
- All `og:` meta tags (lines 12-15)
- All `twitter:` meta tags (lines 17-19)

Keep:
- `<meta charset>`
- `<meta name="viewport">`
- `<link rel="icon">` tags
- `<meta name="author">`

No extra body/title/h1 content issues found -- body only contains `<div id="root">` and the script tag.

### 6. No existing direct meta tag overrides

No pages currently set meta tags directly in their components, so no removal needed beyond `index.html`.

---

## Technical Details

### Files created:
- `src/components/SEOHead.tsx`

### Files modified:
- `src/main.tsx` -- add HelmetProvider wrapper
- `index.html` -- remove title, description, og, twitter tags
- `src/pages/Index.tsx` -- add SEOHead
- `src/pages/IndexEn.tsx` -- add SEOHead
- `src/pages/Impressum.tsx` -- add SEOHead
- `src/pages/Datenschutz.tsx` -- add SEOHead
- `src/pages/FallstudieAngebotsgestaltung.tsx` -- add SEOHead
- `src/pages/FallstudieAngebotsoptimierung.tsx` -- add SEOHead
- `src/pages/FallstudieAngebotsstrategie.tsx` -- add SEOHead
- `src/pages/NotFound.tsx` -- add SEOHead with noIndex

### Warnings

- **Favicon**: The site uses custom favicon files (`favicon-16x16.png`, `favicon-32x32.png`) -- these appear to be custom, not Lovable defaults. You should verify they show the correct gewinnarchitekt branding.
- **placeholder.svg**: The file `public/placeholder.svg` exists but does not appear to be used on any page. It is likely a Lovable default placeholder and can be safely removed.

