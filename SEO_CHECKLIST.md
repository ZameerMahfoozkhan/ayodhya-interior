# SEO Deployment & Local Ranking Checklist

This document is the actionable master checklist for the launch and ongoing local SEO ranking of **Ayodhya Interiors & Exterior Studio**. Follow this guide before and immediately after pointing the domain to production.

---

## 1. Pre-Launch Technical Verification

### 1.1 Crawlability & Pre-Rendering
- [x] **Zero Client-Side JS Rendering Dependency:** All 35 canonical routes compile into static `.html` files in `dist/`. Search engine bots receive 100% of the content on initial HTTP GET without executing JavaScript.
- [x] **Clean URL Routing:** Every page lives in its own subdirectory (`/modular-kitchen-ayodhya/index.html`) allowing clean extensionless URLs.
- [x] **Server Response Codes:** Verified that existing pages return HTTP `200 OK` and missing routes return HTTP `404 Not Found`.

### 1.2 Title & Meta Tag Audit
- [x] **Unique `<title>` for All 35 Routes:** Under 60 characters, primary keyword in front, brand appended.
  *Example:* `Modular Kitchen Design & Installation in Ayodhya | Custom Kitchen Cabinets`
- [x] **Unique `<meta name="description">`:** 140–160 characters with clear value proposition and location context.
- [x] **Canonical Tags:** Exact match with canonical domain and trailing slash (`<link rel="canonical" href="https://ayodhyainteriors.com/.../">`).
- [x] **Social Meta Tags:** Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Cards (`summary_large_image`) on every route.

### 1.3 Content & Semantic Architecture
- [x] **Single `<h1>` Tag:** Every single route has exactly one `<h1>` that accurately reflects the page topic.
- [x] **Logical Heading Hierarchy:** Strict nesting (`h1` → `h2` → `h3`) with no skipped heading levels.
- [x] **In-Depth Original Copy:** All 28 service pages contain 800–1400 words of comprehensive, technically accurate guidance (specifications, materials, comparison tables, step-by-step installation, site assessment, cost factors, common mistakes, and FAQs).
- [x] **Contextual Internal Linking:** Breadcrumbs on every subpage and related-service recommendation grids linking complementary categories (e.g., modular kitchen links to custom furniture and false ceilings).

### 1.4 Structured Data (Schema.org JSON-LD)
Validate every schema using [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/):
- [x] `LocalBusiness` / `HomeAndConstructionBusiness` on homepage and contact page with phone `+91 95806 59559` and Ayodhya service area.
- [x] `Organization` & `WebSite` schemas on homepage.
- [x] `Service` schema on all 28 service detail pages containing `name`, `description`, `provider`, and `areaServed`.
- [x] `FAQPage` schema on every service page with valid `Question` and `Answer` entities.
- [x] `BreadcrumbList` schema on all subpages for Google SERP rich breadcrumb display.

### 1.5 Image & Asset Optimization
- [x] **Descriptive Alt Text:** Every image has context-rich, non-stuffed alt attributes.
- [x] **Vector SVG & Responsive Graphics:** Fast loading with explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).
- [x] **Favicon & Webmanifest:** Multi-resolution icons and `site.webmanifest` configured for mobile bookmarks.

---

## 2. Search Engine Verification & Indexing

### 2.1 Google Search Console (GSC) Setup
1. **Add Property:** Log in to [Google Search Console](https://search.google.com/search-console). Add domain property `ayodhyainteriors.com` (DNS verification recommended) or URL prefix `https://ayodhyainteriors.com`.
2. **Submit Sitemap:**
   - Navigate to **Sitemaps** in the left sidebar.
   - Enter `sitemap.xml` and click **Submit**.
   - Verify that all 35 URLs are discovered and status shows **Success**.
3. **Inspect Core URLs:**
   - Use the **URL Inspection** tool on `https://ayodhyainteriors.com/` and primary service pages (`/modular-kitchen-ayodhya/`, `/glass-railings-ayodhya/`, `/pvc-wall-panels-ayodhya/`).
   - Click **Test Live URL** to confirm Googlebot renders all HTML content and schema cleanly.
   - Click **Request Indexing**.

### 2.2 Robots.txt Verification
- Verify `https://ayodhyainteriors.com/robots.txt` is accessible and contains:
  ```text
  User-agent: *
  Allow: /
  Disallow: /404.html
  Sitemap: https://ayodhyainteriors.com/sitemap.xml
  ```

### 2.3 Bing Webmaster Tools
- Import verified GSC property into [Bing Webmaster Tools](https://www.bing.com/webmasters) for indexing on Bing, Yahoo, and DuckDuckGo.

---

## 3. Google Business Profile (GBP) Local Dominance

Google Business Profile is the #1 driver of high-intent local phone calls and WhatsApp enquiries in Ayodhya.

### 3.1 Profile Creation & Verification
1. **Business Name:** Use the exact public trading name matching `site.js` (e.g., `Ayodhya Interiors & Exterior Studio`). Do not stuff spam keywords into the legal title.
2. **Primary Category:**
   - Primary: `Interior Designer`
   - Secondary: `Exterior Designer`, `Metal Fabricator`, `Modular Furniture Manufacturer`, `Glass Shop`
3. **Phone Number:** Must match the website exactly: `+91 95806 59559`.
4. **Website Link:** `https://ayodhyainteriors.com/`
5. **Exact Address / Service Area:**
   - Enter physical office/workshop address in Ayodhya.
   - Set Service Areas: Ayodhya, Faizabad, Rudauli, Bikapur, Sohawal, Milkipur, and neighboring zones up to 50 km.
6. **Operating Hours:** Set accurate working hours (e.g., Mon–Sat 9:30 AM – 7:30 PM).

### 3.2 Service Menu Synchronization
Add all 28 core services to the GBP Services section, linking each service to its dedicated page URL:
- Modular Kitchen Design → `https://ayodhyainteriors.com/modular-kitchen-ayodhya/`
- Glass Railing Installation → `https://ayodhyainteriors.com/glass-railings-ayodhya/`
- PVC & WPC Wall Paneling → `https://ayodhyainteriors.com/pvc-wall-panels-ayodhya/`
- CNC Gate Fabrication → `https://ayodhyainteriors.com/cnc-cut-gates-ayodhya/`
- Exterior Wall Cladding & ACP → `https://ayodhyainteriors.com/exterior-wall-cladding-ayodhya/`

### 3.3 Photo Upload Schedule
- Upload at least 15–20 high-quality photos of real installations in Ayodhya (kitchens, gates, railings, paneling).
- Add photos of the workshop, fabrication tools, and raw materials (BWP marine ply, SS 304 pipes, 12mm toughened glass).
- Add 2–3 new project photos every week to signal ongoing business activity.

### 3.4 Authentic Customer Review Acquisition
> [!CAUTION]
> **Strict Policy:** Never purchase fake reviews or post fabricated ratings. Google’s spam filters flag unnatural review spikes and can suspend local listings.
- Create a direct review shortlink via GBP dashboard.
- Generate a QR code flyer or send a friendly WhatsApp message after project handover:
  > *"Namaste! Thank you for trusting Ayodhya Interiors with your project. If you are satisfied with our craftsmanship, please take 30 seconds to share your experience on our Google Profile: [Review Link]"*
- Respond professionally to every review within 48 hours, mentioning the specific service delivered (e.g., *"Thank you Mr. Sharma! It was a pleasure fabricating and installing your SS 304 glass railings in Civil Lines."*).

---

## 4. Local Citations & Regional Authority

Ensure 100% NAP (Name, Address, Phone: `+91 95806 59559`) consistency across key Indian business directories:

| Directory | Action | URL / Notes |
|:---|:---|:---|
| **Google Business Profile** | Primary Local Anchor | Verified listing |
| **IndiaMART** | B2B & Fabrication Leads | List under Gate Fabrication, Railings, Cladding |
| **Justdial Ayodhya** | Local Directory | Complete profile with phone and website link |
| **TradeIndia** | Industrial Fabrication | Metal gates, CNC cutting, and cladding |
| **Sulekha Ayodhya** | Home Interior Leads | Interior design & modular kitchen categories |
| **Apple Maps (Apple Business Connect)** | iOS Local Search | Claim business listing for Apple Maps |
| **Social Profiles** | Brand Signals | Instagram, Facebook, LinkedIn, YouTube |

---

## 5. Target Keyword Tracking & Priority Clusters

Track local rankings weekly in Ayodhya for these high-conversion queries:

### Cluster 1: Residential Interiors
- `modular kitchen in ayodhya`
- `interior designer in ayodhya`
- `custom furniture maker ayodhya`
- `false ceiling contractor ayodhya`
- `tv unit designer in ayodhya`

### Cluster 2: Modern Wall Panels
- `pvc wall panel dealers in ayodhya`
- `wpc louvers installation ayodhya`
- `fluted wall panels price in ayodhya`
- `uv marble sheet design ayodhya`

### Cluster 3: Railings & Balconies
- `glass railing contractor ayodhya`
- `staircase railing design ayodhya`
- `ss 304 steel railing price ayodhya`
- `cnc balcony railing fabricator ayodhya`

### Cluster 4: Gates & Grills
- `main gate fabricator in ayodhya`
- `cnc cut main gate design ayodhya`
- `sliding gate manufacturer ayodhya`
- `modern window grill design ayodhya`

### Cluster 5: Exterior & Facade
- `exterior wall cladding ayodhya`
- `acp sheet elevation contractor ayodhya`
- `glass partition for office ayodhya`
- `aluminium doors and windows ayodhya`

### Cluster 6: Commercial & Institutions
- `office interior designer ayodhya`
- `showroom interior contractor ayodhya`
- `clinic interior setup ayodhya`

---

## 6. Lead Analytics & Conversion Tracking

Track real business outcomes rather than vanity metrics:

1. **Google Analytics 4 (GA4):**
   - Add your GA4 Measurement ID in `src/config/site.js` (`analytics.googleAnalyticsId`).
   - Rebuild the site.
2. **Event Tracking Setup:**
   - `click_to_call` — Triggered when a visitor clicks `tel:+919580659559` (desktop header, mobile bottom bar, or inline CTA).
   - `whatsapp_enquiry_click` — Triggered when a visitor clicks any WhatsApp button or submits the interactive enquiry form.
   - `form_submission` — Tracks leads generating structured consultation requests.
3. **Monthly Review:**
   - Monitor the ratio of page views to WhatsApp/Phone calls.
   - Identify the top 5 highest converting service pages.
   - Update FAQ sections with real questions asked by callers during site visits.
