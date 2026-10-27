/**
 * BaseLayout Component
 * Standard crawlable HTML5 wrapper for all 35 pages with SEO metadata,
 * Open Graph, Twitter Cards, preconnected fonts, and responsive components.
 */

import { siteConfig } from "../config/site.js";
import { renderHeader } from "../components/Header.js";
import { renderFooter } from "../components/Footer.js";
import { renderMobileBar } from "../components/MobileBar.js";

export function renderBaseLayout({
  title,
  description,
  canonicalUrl,
  currentPath = "/",
  ogImage,
  schemaHtml = "",
  customWhatsAppPrompt,
  content
}) {
  const pageTitle = title || siteConfig.defaultTitle;
  const pageDesc = description || siteConfig.defaultMetaDescription;
  const canonical = canonicalUrl ? `${siteConfig.siteUrl}${canonicalUrl}` : `${siteConfig.siteUrl}${currentPath}`;
  const image = ogImage ? `${siteConfig.siteUrl}${ogImage}` : `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- Primary SEO Metadata -->
  <title>${pageTitle}</title>
  <meta name="description" content="${pageDesc}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${pageDesc}">
  <meta property="og:image" content="${image}">
  <meta property="og:site_name" content="${siteConfig.brandName}">
  <meta property="og:locale" content="${siteConfig.defaultLocale}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${pageTitle}">
  <meta name="twitter:description" content="${pageDesc}">
  <meta name="twitter:image" content="${image}">

  <!-- Performance & Fonts Preconnection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" href="/favicon.svg">

  <!-- Production Stylesheet -->
  <link rel="stylesheet" href="/css/main.css">

  <!-- Structured Data JSON-LD -->
  ${schemaHtml}
</head>
<body>
  <!-- Header -->
  ${renderHeader(currentPath)}

  <!-- Main Content -->
  <main id="main-content">
    ${content}
  </main>

  <!-- Footer -->
  ${renderFooter()}

  <!-- Mobile Bottom Action Bar (Call, WhatsApp, Get Estimate) -->
  ${renderMobileBar(customWhatsAppPrompt)}

  <!-- Interactive Client Progressive Enhancement -->
  <script src="/js/main.js" defer></script>
</body>
</html>`;
}
