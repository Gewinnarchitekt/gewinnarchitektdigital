

# Clean Up Homepage and Optimize for SEO & SAO

## Overview

Improve the German and English homepages with semantic HTML, structured data, language signals, and content enhancements that benefit both traditional search engines (SEO) and AI-powered search/answer engines (SAO).

## Issues Found

1. **No semantic `<main>` landmark** -- screen readers and crawlers cannot identify the primary content area
2. **No JSON-LD structured data** -- no Organization, WebSite, or Service schema on homepages
3. **Missing `hreflang` tags** -- search engines cannot associate DE and EN pages as language alternates
4. **Missing subheading on German hero** -- the EN hero has a descriptive `<p>` below the `<h1>`, but the DE hero does not, reducing crawlable text
5. **`robots.txt` missing Sitemap directive** -- search engines may not discover the sitemap automatically
6. **Footer copyright year says 2025** -- current year is 2026
7. **`index.html` missing `lang` fallback handling** -- EN page should signal `lang="en"` to the document
8. **No `og:locale` tags** -- helps social platforms and AI crawlers identify content language
9. **Background hero image has no `<img>` tag** -- CSS background images are invisible to crawlers; adding a hidden semantic `<img>` with alt text would help
10. **Comment on line 1 of Index.tsx** -- "Update this page (the content is just a fallback...)" is unnecessary noise

## Changes

### 1. Add `<main>` semantic wrapper to both homepages

Wrap all content sections (between Navigation and Footer) in a `<main>` tag in both `Index.tsx` and `IndexEn.tsx`.

### 2. Add JSON-LD structured data to both homepages

Add Organization + WebSite + ProfessionalService schema via the existing `schemaJson` prop on `SEOHead`:

**German homepage schema includes:**
- `@type: ProfessionalService` with name, url, description, founder, areaServed, serviceType
- Nested `WebSite` for sitelinks search

**English homepage:** Same structure with English descriptions.

### 3. Add `hreflang` alternate links

Update `SEOHead` component to accept an optional `alternates` prop (array of `{hreflang, href}`). Render `<link rel="alternate" hreflang="..." href="..." />` for each entry.

Both homepages will declare:
- `hreflang="de"` pointing to `https://gewinnarchitekt.ch/`
- `hreflang="en"` pointing to `https://gewinnarchitekt.ch/en`
- `hreflang="x-default"` pointing to `https://gewinnarchitekt.ch/`

### 4. Add subheading paragraph to German HeroSection

Add a `<p>` tag below the `<h1>` matching the EN version pattern:
> "Mit datengetriebenen Analysen helfe ich dir, kundenorientierte Angebote zu entwickeln, die Gewinn und Cashflow nachhaltig steigern"

This gives crawlers and AI engines more contextual text to index.

### 5. Add `og:locale` to SEOHead

Add an optional `locale` prop to `SEOHead`. Set `og:locale` to `de_CH` on the DE page and `en` on the EN page.

### 6. Update `robots.txt`

Add `Sitemap: https://gewinnarchitekt.ch/sitemap.xml` at the bottom.

### 7. Fix footer copyright year

Change "2025" to "2026" in both `Footer.tsx` and `FooterEn.tsx`.

### 8. Set document `lang` attribute for EN page

Use `react-helmet-async` to set `<html lang="en">` on the EN homepage (and `<html lang="de">` on DE). This overrides the static `lang="de"` in `index.html` when on the EN route.

### 9. Remove stale comment from Index.tsx

Remove the "Update this page" comment on line 1.

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/SEOHead.tsx` | Add `alternates` and `locale` props; render hreflang links and og:locale |
| `src/pages/Index.tsx` | Add `<main>` wrapper, JSON-LD schema, hreflang alternates, locale, remove comment |
| `src/pages/IndexEn.tsx` | Add `<main>` wrapper, JSON-LD schema, hreflang alternates, locale, html lang="en" |
| `src/components/HeroSection.tsx` | Add subheading `<p>` below `<h1>` |
| `src/components/Footer.tsx` | Update copyright year to 2026 |
| `src/components/FooterEn.tsx` | Update copyright year to 2026 |
| `public/robots.txt` | Add Sitemap directive |

## Files NOT Modified

All other pages and components remain untouched -- scope is limited to the two homepages, the shared SEOHead component, and the two footers.

---

## Technical Details

### SEOHead updated interface

```typescript
interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schemaJson?: Record<string, unknown>;
  locale?: string;               // NEW: e.g. "de_CH", "en"
  alternates?: Array<{           // NEW: hreflang alternates
    hreflang: string;
    href: string;
  }>;
  htmlLang?: string;             // NEW: override <html lang="">
}
```

### JSON-LD schema (German homepage example)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Gewinnarchitekt",
      "url": "https://gewinnarchitekt.ch",
      "description": "Datengetriebene Gewinnoptimierung fuer digitale Produkte. Pricing & Analytics as a Service.",
      "founder": {
        "@type": "Person",
        "name": "Karl Aschwanden"
      },
      "areaServed": "CH",
      "serviceType": ["Pricing Strategy", "Analytics", "Offer Optimization"]
    },
    {
      "@type": "WebSite",
      "url": "https://gewinnarchitekt.ch",
      "name": "Gewinnarchitekt",
      "inLanguage": "de"
    }
  ]
}
```

### Updated robots.txt

```text
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: https://gewinnarchitekt.ch/sitemap.xml
```

