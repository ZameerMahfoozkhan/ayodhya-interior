/**
 * CategoryPage Component
 * Dedicated landing hub for each of the 6 core architectural disciplines:
 * - Home Interior
 * - Wall Panels & Finishes
 * - Gates & Fabrication
 * - Railing & Glasses
 * - Exterior Work
 * - Commercial Work
 * 
 * Styled exactly like other main pages (ServicesPage, ProjectsPage, AboutPage):
 * - Standard unified page-hero with breadcrumb, eyebrow, and gold-accent title
 * - Filter buttons to jump between categories
 * - Clean bezel-card service cards matching the rest of the site
 * - Technical specifications & quality standards
 * - Accordion FAQs
 * - Unified consultation banner
 */

import { siteConfig } from "../config/site.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";
import { renderFAQAccordion } from "../components/FAQAccordion.js";
import { categoriesData, getServicesForCategory } from "../data/categories.js";

export function renderCategoryPage(category) {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: category.name, url: category.url }
  ]);

  const services = getServicesForCategory(category.id);

  const serviceCardsHtml = services.map(s => `
    <div class="bezel-card service-card">
      <div class="bezel-card-inner">
        <div class="service-card-media">
          <img src="${s.heroImage}" alt="${s.h1}" loading="lazy" width="400" height="250" onerror="this.onerror=null; this.src='/images/services/home-interiors.webp';" />
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

  const highlightsHtml = (category.highlights || []).map((h, i) => `
    <div class="bezel-card">
      <div class="bezel-card-inner" style="padding: 22px; display: flex; align-items: flex-start; gap: 14px;">
        <div style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--accent-sage-light); color: var(--accent-sage-dark); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">0${i + 1}</div>
        <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); line-height: 1.5; padding-top: 4px;">${h}</div>
      </div>
    </div>
  `).join("");

  return `
    <!-- UNIFIED PAGE HERO (Identical to Services, Projects, About, Guides) -->
    <section class="page-hero">
      <div class="container">
        ${breadcrumbHtml}
        <div class="page-hero-header">
          <span class="section-eyebrow">${category.heroBadge}</span>
          <h1 class="section-title">${category.h1}</h1>
          <p class="section-subtitle">
            ${category.tagline}. High-precision fabrication, certified materials, and turnkey site installation across Ayodhya and Faizabad.
          </p>
        </div>
      </div>
    </section>

    <!-- MAIN CONTENT SECTION -->
    <section class="section">
      <div class="container">

        <!-- Category Jump Bar -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 48px;">
          ${categoriesData.map(c => `
            <a href="${c.url}" class="filter-btn ${c.id === category.id ? 'active' : ''}">${c.name}</a>
          `).join("")}
        </div>

        <!-- Category Overview Bezel Card -->
        <div class="bezel-card" style="margin-bottom: 48px;">
          <div class="bezel-card-inner" style="padding: 32px;">
            <span class="section-eyebrow">Category Overview</span>
            <h2 style="font-size: 1.5rem; margin-top: 8px; margin-bottom: 12px; color: var(--text-primary); font-family: var(--font-heading);">
              Specialized Execution in <span class="highlight-gold">${category.name}</span>
            </h2>
            <p style="font-size: 1rem; line-height: 1.75; color: var(--text-secondary); margin: 0;">
              ${category.intro}
            </p>
          </div>
        </div>

        <!-- Services Grid Header -->
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light);">
          <span class="section-eyebrow">${services.length} Specialized Disciplines</span>
          <h2 style="font-size: 1.8rem; margin-bottom: 8px; color: var(--text-primary);">
            ${category.name} <span class="highlight-gold">Catalogue</span>
          </h2>
          <p style="color: var(--text-secondary); max-width: 680px; margin: 0;">
            Explore our complete range of specialized services in ${category.name.toLowerCase()} delivered across Ayodhya and Faizabad.
          </p>
        </div>

        <!-- Services Cards Grid -->
        <div class="services-grid">
          ${serviceCardsHtml}
        </div>

        <!-- Engineering Standards & Quality Highlights -->
        <div style="margin-top: 64px;">
          <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light);">
            <span class="section-eyebrow">Quality Guarantee</span>
            <h2 style="font-size: 1.8rem; margin-bottom: 8px; color: var(--text-primary);">
              Engineering Standards for <span class="highlight-gold">${category.name}</span>
            </h2>
            <p style="color: var(--text-secondary); max-width: 680px; margin: 0;">
              We adhere to strict material certifications and dimensional precision on every project in Ayodhya and Faizabad.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
            ${highlightsHtml}
          </div>
        </div>

        <!-- FAQs Accordion -->
        ${category.faqs && category.faqs.length > 0 ? `
          <div style="margin-top: 64px;">
            <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light);">
              <span class="section-eyebrow">Frequently Asked Questions</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 8px; color: var(--text-primary);">
                Questions About <span class="highlight-gold">${category.name}</span>
              </h2>
              <p style="color: var(--text-secondary); max-width: 680px; margin: 0;">
                Clear answers regarding pricing, materials, installation duration, and warranty coverage in Ayodhya.
              </p>
            </div>

            ${renderFAQAccordion(category.faqs)}
          </div>
        ` : ""}

        <!-- Consultation Banner (Consistent with ServicesPage) -->
        <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-xl); padding: 48px 32px; text-align: center; box-shadow: var(--shadow-card); margin-top: 64px;">
          <span class="section-eyebrow" style="margin-bottom: 12px;">Direct Consultation</span>
          <h2 style="font-size: 1.9rem; margin-bottom: 12px; color: var(--text-primary);">
            Plan Your <span class="highlight-gold">${category.name}</span> Project in Ayodhya
          </h2>
          <p style="color: var(--text-secondary); max-width: 620px; margin-left: auto; margin-right: auto; margin-bottom: 28px; font-size: 1rem; line-height: 1.6;">
            Discuss your space, architectural drawings, and material preferences with our team. We coordinate physical site measurements, provide 3D designs, and deliver turnkey installation across Ayodhya and Faizabad.
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <a href="/contact/" class="btn btn-primary">
              <span>Request a Site Estimate</span>
            </a>
            <a href="https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to enquire about ${category.name} in Ayodhya. Please share details and an estimate.`)}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <span>Chat on WhatsApp</span>
            </a>
            <a href="${siteConfig.telUrl}" class="btn btn-secondary">
              <span>Call ${siteConfig.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}
