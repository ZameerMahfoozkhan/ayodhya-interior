/**
 * Central Configuration File for Ayodhya Interiors & Exterior Studio
 * 
 * Source of truth for brand identity, contact numbers, URLs, service areas,
 * navigation structure, and SEO defaults. Modify this single file to update
 * the business name, contact info, or site URL across all 35+ pages.
 */

export const siteConfig = {
  // Brand Identity (Temporary - easily changed before production deployment)
  brandName: "Ayodhya Interiors & Exterior Studio",
  brandShortName: "Ayodhya Interiors",
  tagline: "Beautiful Spaces. Expert Execution.",
  supportingLine: "Complete interior, exterior, panel installation, modular furniture, glass work, gates and railing solutions for homes and commercial properties in Ayodhya.",
  
  // Contact Information (Verified exact details as requested)
  phone: "+91 95806 59559",
  phoneRaw: "+919580659559",
  whatsappNumber: "919580659559",
  telUrl: "tel:+919580659559",
  whatsappUrl: "https://wa.me/919580659559",
  
  // Primary Service Location (No fabricated street address or coordinates)
  primaryLocation: "Ayodhya, Uttar Pradesh, India",
  serviceCity: "Ayodhya",
  serviceState: "Uttar Pradesh",
  serviceCountry: "India",
  serviceRegionDescription: "Serving residential and commercial clients across Ayodhya city, Faizabad twin area, and surrounding districts of Uttar Pradesh upon consultation.",
  
  // Site Deployment Configuration
  siteUrl: "https://ayodhyainteriors.com", // Canonical root domain
  defaultLocale: "en_IN",
  
  // SEO & Social Defaults
  defaultTitle: "Ayodhya Interiors & Exterior Studio | Premium Interior, Exterior, Gates & Railings in Ayodhya",
  defaultMetaDescription: "Professional interior design, modular kitchens, PVC/WPC wall panels, custom gates, glass railings, and exterior cladding in Ayodhya, UP. Call +91 95806 59559.",
  defaultOgImage: "/images/og-default.jpg",
  
  // Navigation Menu Architecture
  navMenu: [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "Services",
      url: "/services/",
      isMega: true,
      categories: [
        {
          name: "Residential Interiors",
          url: "/home-interiors-ayodhya/",
          items: [
            { title: "Complete Home Interiors", url: "/home-interiors-ayodhya/", desc: "Turnkey residential design and execution" },
            { title: "Modular Kitchens", url: "/modular-kitchen-ayodhya/", desc: "Ergonomic, modern kitchen cabinets & storage" },
            { title: "Custom Furniture & Wardrobes", url: "/custom-furniture-ayodhya/", desc: "Bespoke wardrobes, beds, tables & storage" },
            { title: "TV Units & Feature Walls", url: "/tv-unit-design-ayodhya/", desc: "Designer media consoles with panel backdrops" },
            { title: "False Ceilings & Lighting", url: "/false-ceiling-ayodhya/", desc: "Gypsum & PVC ceilings with cove lighting" },
            { title: "Flooring Solutions", url: "/flooring-ayodhya/", desc: "SPC, vinyl & laminate floor installations" }
          ]
        },
        {
          name: "Wall Panels & Finishes",
          url: "/pvc-wall-panels-ayodhya/",
          items: [
            { title: "PVC Wall Panels", url: "/pvc-wall-panels-ayodhya/", desc: "Moisture-resistant decorative wall cladding" },
            { title: "WPC Wall Panels", url: "/wpc-wall-panels-ayodhya/", desc: "Durable composite fluted & slatted panels" },
            { title: "Fluted Panels & Louvers", url: "/fluted-panels-louvers-ayodhya/", desc: "Architectural vertical slats & accent walls" },
            { title: "UV Marble Sheets", url: "/uv-marble-sheets-ayodhya/", desc: "High-gloss stone finish lightweight sheets" }
          ]
        },
        {
          name: "Gates & Fabrication",
          url: "/main-gate-installation-ayodhya/",
          items: [
            { title: "Main Gate Installation", url: "/main-gate-installation-ayodhya/", desc: "Custom entrance swing & sliding gates" },
            { title: "CNC-Cut Gates", url: "/cnc-cut-gates-ayodhya/", desc: "Bespoke architectural sheet metal gates" },
            { title: "Steel & Iron Gates", url: "/steel-iron-gates-ayodhya/", desc: "Sturdy mild steel and wrought-iron entries" },
            { title: "Sliding Gates", url: "/sliding-gates-ayodhya/", desc: "Space-saving track-based entrance systems" },
            { title: "Window Grills", url: "/window-grills-ayodhya/", desc: "Protective architectural security window grills" }
          ]
        },
        {
          name: "Railings & Glass",
          url: "/staircase-railings-ayodhya/",
          items: [
            { title: "Staircase Railings", url: "/staircase-railings-ayodhya/", desc: "Glass, SS, MS, and CNC staircase guards" },
            { title: "Glass Railings", url: "/glass-railings-ayodhya/", desc: "Framed and spigot safety glass systems" },
            { title: "Steel & Iron Railings", url: "/steel-iron-railings-ayodhya/", desc: "Durable stainless & mild steel balustrades" },
            { title: "CNC-Cut Railings", url: "/cnc-cut-railings-ayodhya/", desc: "Precision laser/CNC patterned safety panels" },
            { title: "Balcony Railings", url: "/balcony-railings-ayodhya/", desc: "Weather-resistant outdoor terrace railings" }
          ]
        },
        {
          name: "Exterior & Commercial",
          url: "/exterior-wall-cladding-ayodhya/",
          items: [
            { title: "Exterior Wall Cladding", url: "/exterior-wall-cladding-ayodhya/", desc: "Weatherproof facade panels and cladding" },
            { title: "ACP Cladding", url: "/acp-cladding-ayodhya/", desc: "Aluminium composite panel architectural elevation" },
            { title: "Glass Partitions", url: "/glass-partitions-ayodhya/", desc: "Acoustic cabin & meeting space partitions" },
            { title: "Office Interiors", url: "/office-interior-ayodhya/", desc: "Reception, workstations, cabins & storage" },
            { title: "Shop & Showroom Interiors", url: "/shop-showroom-interior-ayodhya/", desc: "Retail display racks, counters & storefronts" }
          ]
        }
      ]
    },
    {
      title: "Projects",
      url: "/projects/"
    },
    {
      title: "Guides",
      url: "/guides/"
    },
    {
      title: "About",
      url: "/about/"
    },
    {
      title: "Contact",
      url: "/contact/"
    }
  ],
  
  // Service Categories for Navigation & Filtering
  serviceCategories: [
    { id: "residential", name: "Residential Interiors", count: 6 },
    { id: "panels", name: "Wall Panels & Finishes", count: 4 },
    { id: "railings", name: "Staircase & Balcony Railings", count: 5 },
    { id: "gates", name: "Main Gates & Grills", count: 5 },
    { id: "exterior", name: "Exterior & Architectural Glazing", count: 4 },
    { id: "commercial", name: "Commercial Fit-Outs", count: 4 }
  ]
};
