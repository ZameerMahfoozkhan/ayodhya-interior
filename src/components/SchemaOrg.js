/**
 * Schema.org JSON-LD Structured Data Builder
 * Strictly compliant with Google Rich Results guidelines.
 * Uses only verified factual data (no fabricated review counts, stars, or false certifications).
 */

import { siteConfig } from "../config/site.js";

/**
 * Global WebSite & Organization Schema
 */
export function buildGlobalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteConfig.siteUrl}/#organization`,
        "name": siteConfig.brandName,
        "url": siteConfig.siteUrl,
        "telephone": siteConfig.phoneRaw,
        "priceRange": "$$",
        "image": `${siteConfig.siteUrl}/images/og-default.jpg`,
        "description": siteConfig.supportingLine,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.serviceCity,
          "addressRegion": siteConfig.serviceState,
          "addressCountry": siteConfig.serviceCountry
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Ayodhya",
            "sameAs": "https://en.wikipedia.org/wiki/Ayodhya"
          },
          {
            "@type": "City",
            "name": "Faizabad",
            "sameAs": "https://en.wikipedia.org/wiki/Faizabad"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        "url": siteConfig.siteUrl,
        "name": siteConfig.brandName,
        "description": siteConfig.defaultMetaDescription,
        "publisher": {
          "@id": `${siteConfig.siteUrl}/#organization`
        }
      }
    ]
  };

  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

/**
 * Service Page Specific Schema (Service + BreadcrumbList + FAQPage)
 */
export function buildServiceSchema(service, breadcrumbItems = []) {
  const graph = [];

  // Service Type
  graph.push({
    "@type": "Service",
    "@id": `${siteConfig.siteUrl}/${service.slug}/#service`,
    "name": service.h1,
    "serviceType": service.title,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteConfig.siteUrl}/#organization`,
      "name": siteConfig.brandName,
      "telephone": siteConfig.phoneRaw
    },
    "areaServed": {
      "@type": "City",
      "name": "Ayodhya"
    },
    "description": service.metaDescription
  });

  // Breadcrumbs
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url ? `${siteConfig.siteUrl}${item.url}` : undefined
      }))
    });
  }

  // FAQs
  if (service.faqs && service.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": service.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}
