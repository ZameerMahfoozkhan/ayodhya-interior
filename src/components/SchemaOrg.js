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
        "alternateName": ["Ayodhya Interiors", "Ayodhya Interior Studio", "Ayodhya Exterior Studio"],
        "url": siteConfig.siteUrl,
        "telephone": siteConfig.phoneRaw,
        "priceRange": "$$",
        "image": `${siteConfig.siteUrl}/images/og-default.jpg`,
        "description": siteConfig.supportingLine,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Civil Lines / Ram Path Corridor",
          "addressLocality": siteConfig.serviceCity,
          "addressRegion": siteConfig.serviceState,
          "postalCode": "224123",
          "addressCountry": siteConfig.serviceCountry
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.7922,
          "longitude": 82.1998
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "19:30"
          }
        ],
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
          },
          {
            "@type": "AdministrativeArea",
            "name": "Ayodhya District",
            "sameAs": "https://en.wikipedia.org/wiki/Ayodhya_district"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Architectural & Interior Services",
          "itemListElement": [
            { "@type": "OfferCatalog", "name": "Home Interior", "url": `${siteConfig.siteUrl}/services/home-interior/` },
            { "@type": "OfferCatalog", "name": "Wall Panels & Finishes", "url": `${siteConfig.siteUrl}/services/wall-panels-finishes/` },
            { "@type": "OfferCatalog", "name": "Gates & Fabrication", "url": `${siteConfig.siteUrl}/services/gates-fabrication/` },
            { "@type": "OfferCatalog", "name": "Railing & Glasses", "url": `${siteConfig.siteUrl}/services/railing-glass/` },
            { "@type": "OfferCatalog", "name": "Exterior Work", "url": `${siteConfig.siteUrl}/services/exterior-work/` },
            { "@type": "OfferCatalog", "name": "Commercial Work", "url": `${siteConfig.siteUrl}/services/commercial-work/` }
          ]
        }
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
    "image": `${siteConfig.siteUrl}${service.heroImage}`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteConfig.siteUrl}/#organization`,
      "name": siteConfig.brandName,
      "telephone": siteConfig.phoneRaw
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Ayodhya"
      },
      {
        "@type": "City",
        "name": "Faizabad"
      }
    ],
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

/**
 * Category Page Specific Schema (CollectionPage + ItemList + BreadcrumbList + FAQPage)
 */
export function buildCategorySchema(category, services = [], breadcrumbItems = []) {
  const graph = [];

  // CollectionPage
  graph.push({
    "@type": "CollectionPage",
    "@id": `${siteConfig.siteUrl}${category.url}#collection`,
    "name": `${category.name} in Ayodhya | ${siteConfig.brandName}`,
    "url": `${siteConfig.siteUrl}${category.url}`,
    "image": `${siteConfig.siteUrl}${category.heroImage}`,
    "description": category.metaDescription,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteConfig.siteUrl}/#organization`,
      "name": siteConfig.brandName,
      "telephone": siteConfig.phoneRaw
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Ayodhya"
      },
      {
        "@type": "City",
        "name": "Faizabad"
      }
    ]
  });

  // ItemList of services
  if (services && services.length > 0) {
    graph.push({
      "@type": "ItemList",
      "name": `${category.name} Services in Ayodhya`,
      "itemListElement": services.map((s, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": s.title,
        "url": `${siteConfig.siteUrl}/${s.slug}/`
      }))
    });
  }

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
  if (category.faqs && category.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": category.faqs.map(faq => ({
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

/**
 * Guides Page Specific Schema (CollectionPage + Articles)
 */
export function buildGuidesSchema(guides = []) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.siteUrl}/guides/#collection`,
        "name": `Educational & Material Selection Guides | ${siteConfig.brandName}`,
        "url": `${siteConfig.siteUrl}/guides/`,
        "description": "Practical engineering advice for interior design, kitchens, panels, gates, and railings in Ayodhya.",
        "hasPart": guides.map(g => ({
          "@type": "Article",
          "headline": g.title,
          "description": g.excerpt,
          "url": `${siteConfig.siteUrl}/guides/#${g.slug}`,
          "author": {
            "@type": "Organization",
            "name": siteConfig.brandName
          },
          "publisher": {
            "@type": "Organization",
            "name": siteConfig.brandName,
            "logo": {
              "@type": "ImageObject",
              "url": `${siteConfig.siteUrl}/favicon.svg`
            }
          }
        }))
      }
    ]
  };

  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}


