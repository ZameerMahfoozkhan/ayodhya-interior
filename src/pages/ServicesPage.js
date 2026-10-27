/**
 * ServicesPage Component
 * Complete Directory of all 28 Phase 1 Services grouped by category.
 */

import { siteConfig } from "../config/site.js";
import { allServices, getServicesByCategory } from "../data/services.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";

export function renderServicesPage() {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Services Directory", url: "/services/" }
  ]);

  const categories = [
    { id: "residential", name: "Residential Interiors", desc: "Turnkey home interiors, modular kitchens, wardrobes, TV consoles, ceilings, and flooring." },
    { id: "panels", name: "Decorative Panels & Finishes", desc: "Moisture-resistant PVC, high-density WPC louvers, fluted slats, and UV marble sheets." },
    { id: "railings", name: "Staircase & Balcony Railings", desc: "Engineered safety glass, grade 304 stainless steel, mild steel, and laser-cut CNC balustrades." },
    { id: "gates", name: "Main Entrance Gates & Grills", desc: "Heavy structural swing, sliding, and laser-cut CNC entrance gates with anti-rust powder coatings." },
    { id: "exterior", name: "Exterior Facades & Architectural Glazing", desc: "Exterior WPC cladding, ACP commercial elevations, glass partitions, and aluminium doors/windows." },
    { id: "commercial", name: "Commercial Fit-Outs", desc: "Office workstations, retail showroom displays, clinic interiors, and school institutional furniture." }
  ];

  const categorySectionsHtml = categories.map(cat => {
    const services = getServicesByCategory(cat.id);
    const serviceCards = services.map(s => `
      <div class="bezel-card service-card">
        <div class="bezel-card-inner">
          <div class="service-card-media">
            <img src="${s.heroImage}" alt="${s.h1}" loading="lazy" width="400" height="250" />
            <span class="service-card-badge">${s.heroBadge}</span>
          </div>
          <h3 class="service-card-title">${s.title}</h3>
          <p class="service-card-desc">${s.shortDesc}</p>
          <a href="/${s.slug}/" class="service-card-link">
            <span>Read Complete Details & Specs</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `).join("");

    return `
      <div id="${cat.id}" style="margin-bottom: 64px; scroll-margin-top: 100px;">
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light);">
          <span class="section-eyebrow">${cat.name}</span>
          <h2 style="font-size: 1.8rem; margin-bottom: 8px;">${cat.name}</h2>
          <p style="color: var(--text-secondary); max-width: 680px; margin: 0;">${cat.desc}</p>
        </div>
        <div class="services-grid">
          ${serviceCards}
        </div>
      </div>
    `;
  }).join("");

  return `
    <section class="page-hero">
      <div class="container">
        ${breadcrumbHtml}
        <div class="page-hero-header">
          <span class="section-eyebrow">Comprehensive Catalogue</span>
          <h1 class="section-title">Complete Architectural & Interior Services in Ayodhya</h1>
          <div class="service-hero-intro-card" style="margin-top: 14px;">
            <p class="service-hero-intro-text">
              Explore all 28 specialized disciplines delivered across Ayodhya and Faizabad. Every service is custom engineered to your architectural drawings and site measurements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <!-- Category Jump Anchors -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 48px;">
          <a href="#residential" class="filter-btn">Residential Interiors</a>
          <a href="#panels" class="filter-btn">Wall Panels</a>
          <a href="#railings" class="filter-btn">Railings</a>
          <a href="#gates" class="filter-btn">Main Gates</a>
          <a href="#exterior" class="filter-btn">Exterior Facades</a>
          <a href="#commercial" class="filter-btn">Commercial Fit-Outs</a>
        </div>

        ${categorySectionsHtml}

        <!-- Consultation Banner -->
        <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-xl); padding: 40px; text-align: center; box-shadow: var(--shadow-card); margin-top: 48px;">
          <h2 style="font-size: 1.8rem; margin-bottom: 12px;">Need Multiple Services in a Single Coordinated Project?</h2>
          <p style="color: var(--text-secondary); max-width: 600px; margin-left: auto; margin-right: auto; margin-bottom: 24px;">
            Discuss your complete project with our team. We coordinate civil modifications, modular woodwork, metal fabrication, and finishes under one roof.
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <a href="/contact/" class="btn btn-primary">
              <span>Request a Site Estimate</span>
            </a>
            <a href="${siteConfig.whatsappUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
