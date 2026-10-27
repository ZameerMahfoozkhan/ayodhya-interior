# Ayodhya Interiors & Exterior Studio

A production-ready, high-performance static website built for **Ayodhya Interiors & Exterior Studio**, offering comprehensive architectural interior design, modern wall paneling, custom metal and glass fabrication, exterior cladding, and commercial fit-outs in Ayodhya and surrounding districts of Uttar Pradesh.

---

## Highlights & Key Features

- **100% Pre-Rendered, Zero-Dependency Architecture:** Generates 35 canonical HTML5 pages with complete semantic markup. Search engine bots receive 100% of page content on raw HTTP GET without executing JavaScript.
- **28 In-Depth Service Master Pages:** Every service page is built to the 19-part specification (800–1400 words of technical guidance including specifications, materials, comparison tables, step-by-step installation, site assessment, cost factors, common mistakes, and FAQs).
- **Architectural Color Palette & Design System:**
  - Background: Warm Ivory (`#F7F5F0`) & Soft Stone (`#ECE8DF`)
  - Primary Text & Structural Elements: Deep Charcoal (`#272A27`)
  - Secondary Text & Borders: Muted Grey (`#6F726C`) & Light Stone Border (`#DFDCD4`)
  - Accents: Refined Sage Green (`#667A68`) & Warm Walnut (`#9B795B`)
- **Typography:** Manrope (headings, titles, numbers) and Inter (body copy, specifications, forms) loaded via Google Fonts with preconnection and fallback system fonts.
- **Direct WhatsApp Lead Conversion:** Interactive enquiry modal and sticky bottom action bar that validate user inputs and open a prefilled, structured WhatsApp chat directly with the studio (`+91 95806 59559`) with zero database or backend server dependency.
- **Complete Schema.org Structured Data:** Injects JSON-LD schemas on every page (`LocalBusiness`, `Organization`, `WebSite`, `Service`, `BreadcrumbList`, and `FAQPage`).
- **Automated XML Sitemap & Robots.txt:** Dynamically generated on every build with proper `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>` tags.
- **Zero Fabrication Guarantee:** No fake customer reviews, star ratings, fake office addresses, or fabricated certifications were included. Missing business details are isolated in a single config file.

---

## Directory Structure

```text
├── build.js                 # Production static site generator (compiles src/ to dist/)
├── serve.js                 # Zero-dependency local development HTTP server
├── package.json             # NPM project manifest and CLI scripts
├── prompt.md                # Master client specification and architectural brief
├── FUTURE_EXPANSION.md      # Phase 2 roadmap and guide for adding services/cities
├── SEO_CHECKLIST.md         # Google Business Profile, GSC, and local SEO guide
├── BUSINESS_CHECKLIST.md    # Handover checklist of details needed from business owner
│
├── public/                  # Static assets copied directly to dist/
│   ├── css/
│   │   └── main.css         # Complete architectural design system and utilities
│   ├── js/
│   │   └── main.js          # Progressive enhancement (mobile drawer, accordions, WhatsApp)
│   ├── images/
│   │   ├── hero/            # Hero section graphics
│   │   ├── services/        # 28 architectural vector illustrations for each service
│   │   ├── projects/        # Project gallery showcase assets
│   │   ├── favicon.svg      # Scalable architectural SVG favicon
│   │   └── logo.svg         # Geometric studio vector logo
│   └── site.webmanifest     # Progressive web app manifest
│
├── scripts/
│   └── generate-assets.js   # Automated procedural generator for vector images
│
├── src/
│   ├── config/
│   │   └── site.js          # Central single source of truth for brand, contact, and URLs
│   │
│   ├── data/
│   │   ├── services/
│   │   │   ├── residential.js   # 6 Residential interior service models
│   │   │   ├── panels.js        # 4 Wall paneling & decorative sheet models
│   │   │   ├── railings.js      # 5 Railing & balustrade service models
│   │   │   ├── gates.js         # 5 Gate fabrication & grill models
│   │   │   ├── exterior.js      # 4 Exterior cladding & glass facade models
│   │   │   └── commercial.js    # 4 Commercial & institutional fit-out models
│   │   ├── services.js          # Master registry & query helper functions
│   │   ├── projects.js          # Project inspiration gallery data
│   │   └── guides.js            # In-depth educational buying guides
│   │
│   ├── components/
│   │   ├── Header.js            # Desktop nav, mega-menu, and mobile drawer
│   │   ├── Footer.js            # 4-column structured footer with service area info
│   │   ├── MobileBar.js         # Fixed bottom action bar (Call, WhatsApp, Estimate)
│   │   ├── WhatsAppFloat.js     # Desktop floating WhatsApp button
│   │   ├── Breadcrumb.js        # Semantic accessible breadcrumbs
│   │   ├── EnquiryForm.js       # Lead capture form with direct WhatsApp submission
│   │   ├── FAQAccordion.js      # Accessible expandable Q&A accordion
│   │   └── SchemaOrg.js         # Dynamic Schema.org JSON-LD generator
│   │
│   ├── layout/
│   │   └── BaseLayout.js        # Global HTML5 shell with meta tags and asset links
│   │
│   └── pages/
│       ├── HomePage.js          # 13-section flagship homepage
│       ├── ServicesPage.js      # Categorized 28-service directory
│       ├── ServiceDetailPage.js  # 19-part master service detail template
│       ├── AboutPage.js         # Studio craftsmanship & material honesty
│       ├── ContactPage.js       # Consultation booking & preparation guide
│       ├── ProjectsPage.js      # Filterable design portfolio
│       ├── GuidesPage.js        # Material selection & educational articles
│       ├── PrivacyPolicyPage.js # Clean client-side privacy disclosure
│       └── NotFoundPage.js      # Custom 404 error page
│
└── dist/                    # Compiled production-ready output (35 canonical routes + 404)
```

---

## Quick Start & Local Development

### Prerequisites
- **Node.js** version 18.0.0 or higher (built and verified with Node v24).
- No external packages or database engines required.

### 1. Build the Website
To compile all templates, services, sitemap, and assets into `dist/`:
```bash
npm run build
```
*Takes less than 1.5 seconds to build all 35 pages.*

### 2. Launch Local Development Server
To preview the website locally with clean URL routing and 404 handling:
```bash
npm run serve
```
Open your browser and navigate to:
```text
http://localhost:3000
```

### 3. Build & Serve Combined
```bash
npm run dev
```

---

## Central Configuration (`src/config/site.js`)

All critical business information is centralized in `src/config/site.js`. To update details across all 35 pages simultaneously:

```javascript
export const siteConfig = {
  brand: {
    name: 'Ayodhya Interiors & Exterior Studio',
    shortName: 'Ayodhya Interiors',
    tagline: 'Architectural Interiors, Fabrication & Modern Facade Solutions in Ayodhya',
  },
  contact: {
    phone: '+91 95806 59559',
    phoneRaw: '+919580659559',
    whatsapp: '919580659559',
    whatsappLink: 'https://wa.me/919580659559',
    email: 'info@ayodhyainteriors.com',
    location: 'Ayodhya, Uttar Pradesh, India',
    address: 'Ayodhya, Uttar Pradesh 224123, India',
  },
  canonicalOrigin: 'https://ayodhyainteriors.com',
  // ...
};
```

After modifying this file, run `npm run build` to propagate changes across all pages and sitemaps.

---

## All 35 Canonical Page Routes

### Core Pages
1. `/` — Flagship Homepage
2. `/services/` — All-Services Directory
3. `/about/` — Craftsmanship & Working Philosophy
4. `/contact/` — Consultation Booking & Site Assessment
5. `/projects/` — Design Inspiration & Portfolio
6. `/guides/` — Educational Material Guides
7. `/privacy-policy/` — Client-side Data Privacy Policy
8. `/404.html` — Custom Error Page

### Residential Interiors (6 Routes)
9. `/home-interiors-ayodhya/`
10. `/modular-kitchen-ayodhya/`
11. `/custom-furniture-ayodhya/`
12. `/tv-unit-design-ayodhya/`
13. `/false-ceiling-ayodhya/`
14. `/flooring-ayodhya/`

### Modern Wall Panels & Finishes (4 Routes)
15. `/pvc-wall-panels-ayodhya/`
16. `/wpc-wall-panels-ayodhya/`
17. `/fluted-panels-louvers-ayodhya/`
18. `/uv-marble-sheets-ayodhya/`

### Railings & Balustrades (5 Routes)
19. `/staircase-railings-ayodhya/`
20. `/glass-railings-ayodhya/`
21. `/steel-iron-railings-ayodhya/`
22. `/cnc-cut-railings-ayodhya/`
23. `/balcony-railings-ayodhya/`

### Main Gates & Fabrication (5 Routes)
24. `/main-gate-installation-ayodhya/`
25. `/cnc-cut-gates-ayodhya/`
26. `/steel-iron-gates-ayodhya/`
27. `/sliding-gates-ayodhya/`
28. `/window-grills-ayodhya/`

### Exterior Solutions & Facades (4 Routes)
29. `/exterior-wall-cladding-ayodhya/`
30. `/acp-cladding-ayodhya/`
31. `/glass-partitions-ayodhya/`
32. `/aluminium-doors-windows-ayodhya/`

### Commercial & Institutional Fit-Outs (4 Routes)
33. `/office-interior-ayodhya/`
34. `/shop-showroom-interior-ayodhya/`
35. `/clinic-hospital-interior-ayodhya/`
36. `/school-interior-ayodhya/`

---

## Production Deployment Options

The compiled `dist/` directory is completely standalone and can be deployed to any static hosting provider:

### Option A: Vercel / Netlify / Cloudflare Pages (Recommended)
1. Connect the Git repository to your hosting dashboard.
2. Set **Build Command:** `node build.js`
3. Set **Output Directory:** `dist`
4. Deploy! All URLs, sitemaps, and headers work automatically with zero server configuration.

### Option B: Apache / Nginx / Static VPS
Upload the contents of `dist/` to your web server root (e.g., `/var/www/html` or `/var/www/ayodhyainteriors.com`).
Ensure your web server enables clean URL handling (interpreting `/service-name/` as `/service-name/index.html`).

### Option C: Shared cPanel Hosting
1. Run `npm run build` locally.
2. Compress the contents inside the `dist/` folder into a `.zip` file.
3. In cPanel File Manager, upload and extract the `.zip` directly into `public_html`.

---

## Documentation Links

- **[FUTURE_EXPANSION.md](file:///c:/Users/zamee/Desktop/New%20folder%20%282%29/FUTURE_EXPANSION.md):** Complete developer instructions for adding Phase 2 services, regional city hubs (Sultanpur, Gonda, Lucknow), and gallery projects.
- **[SEO_CHECKLIST.md](file:///c:/Users/zamee/Desktop/New%20folder%20%282%29/SEO_CHECKLIST.md):** Step-by-step Google Business Profile optimization, Google Search Console indexing, and local citation blueprint.
- **[BUSINESS_CHECKLIST.md](file:///c:/Users/zamee/Desktop/New%20folder%20%282%29/BUSINESS_CHECKLIST.md):** Checklist of business credentials and real project assets required from the owner prior to live launch.
