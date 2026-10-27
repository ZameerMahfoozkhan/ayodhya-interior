# Business Details & Launch Readiness Checklist

This document summarizes the specific real-world business details, credentials, and brand assets that the business owner must provide and configure prior to publicly launching the website.

> [!NOTE]
> In accordance with strict development standards, no fake customer testimonials, star ratings, fake office street addresses, fake staff counts, or fabricated certifications were invented. Where real data is pending, the website uses clean, professional, non-fabricated fallbacks that can be updated in a single file (`src/config/site.js`).

---

## 1. Primary Business Credentials & Identity

| Field | Current Placeholder / Default | Action Required by Owner | Target File |
|:---|:---|:---|:---|
| **Legal Business Name** | `Ayodhya Interiors & Exterior Studio` | Confirm exact legal or trade name registered under GST / MSME / Shop Act. | `src/config/site.js` → `siteConfig.brand.name` |
| **Short Brand Name** | `Ayodhya Interiors` | Confirm preferred short name for mobile headers and logos. | `src/config/site.js` → `siteConfig.brand.shortName` |
| **Primary Phone Number** | `+91 95806 59559` | Verified active business calling number. Ensure incoming calls are monitored. | `src/config/site.js` → `siteConfig.contact.phone` |
| **WhatsApp Number** | `919580659559` | Verified active WhatsApp Business account with automated welcome greeting. | `src/config/site.js` → `siteConfig.contact.whatsapp` |
| **Official Business Email** | `info@ayodhyainteriors.com` | Create professional domain email (e.g., via Google Workspace or cPanel). | `src/config/site.js` → `siteConfig.contact.email` |
| **Physical Office / Workshop Address** | `Ayodhya, Uttar Pradesh 224123, India` | Provide exact shop/workshop number, building name, road/chowk, and landmark in Ayodhya. | `src/config/site.js` → `siteConfig.contact.address` |
| **GSTIN (GST Number)** | *Omitted (Pending Registration)* | If GST registered, provide the 15-digit GSTIN for display in footer and invoice quotes. | `src/config/site.js` → `siteConfig.business.gstin` |
| **Working Hours** | `Mon - Sat: 9:30 AM - 7:30 PM, Sun: By Appointment` | Confirm actual workshop/studio consultation hours. | `src/config/site.js` → `siteConfig.business.hours` |

---

## 2. Domain & Hosting Configuration

| Item | Current Status | Action Required |
|:---|:---|:---|
| **Production Domain** | `https://ayodhyainteriors.com` (Default) | Register preferred domain name (e.g., via GoDaddy, Hostinger, or Cloudflare Registrar). |
| **Canonical URL in Config** | Configured for `https://ayodhyainteriors.com` | If different domain is chosen, update `siteConfig.canonicalOrigin` in `src/config/site.js` and rebuild. |
| **SSL / HTTPS Certificate** | Pre-configured in build links | Enable free auto-renewing SSL (Let’s Encrypt / Cloudflare SSL). |
| **Hosting Platform** | Ready for zero-config deployment | Deploy to Vercel, Netlify, Cloudflare Pages, or upload `dist/` to cPanel `public_html`. |

---

## 3. Visual Assets & Media

| Asset Type | Current Solution | Action Required for Final Polish |
|:---|:---|:---|
| **Brand Logo** | Elegant geometric typography + architectural icon | If the studio has a custom vector logo (`.svg` or high-res `.png`), replace `public/images/logo.svg`. |
| **Real Project Photography** | 33+ clean architectural vector illustrations with technical annotations | As real projects are completed in Ayodhya, photograph them and place photos in `public/images/projects/`. Register them in `src/data/projects.js`. |
| **Workshop / Team Photos** | Omitted to prevent fabrication | Optional: Add photos of the fabrication workshop, CNC cutting setup, and installation team to `/about/`. |

---

## 4. Search & Analytics Credentials

| Service | Setting in `src/config/site.js` | Action Required |
|:---|:---|:---|
| **Google Search Console** | `analytics.googleSearchConsoleVerification` | Provide the GSC HTML verification token or verify via DNS TXT record. |
| **Google Analytics 4** | `analytics.googleAnalyticsId` | Create GA4 property and paste Measurement ID (e.g., `G-XXXXXXXXXX`). |
| **Google Business Profile** | Verified Local Listing | Claim and verify Google Business Profile using exact phone `+91 95806 59559`. |

---

## 5. Social Media & Directory Links

Update the respective handles in `src/config/site.js` → `siteConfig.social`:

- [ ] **Instagram:** Provide official profile handle (e.g., `instagram.com/ayodhya_interiors`)
- [ ] **Facebook:** Provide Facebook Page URL
- [ ] **YouTube:** Provide channel link if video walkthroughs are filmed
- [ ] **IndiaMART / Justdial:** Add business profile links once created

---

## 6. How to Apply These Changes

1. Open `src/config/site.js`.
2. Update the corresponding fields in the `siteConfig` object.
3. Run the static build:
   ```bash
   node build.js
   ```
4. All 35 pages, canonical headers, footers, schema markup, and sitemaps will automatically reflect the updated business information.
