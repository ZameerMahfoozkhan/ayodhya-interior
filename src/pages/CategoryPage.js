/**
 * CategoryPage Component
 * Dedicated landing hub for each of the 6 core architectural disciplines:
 * - Home Interior
 * - Wall Panels & Finishes
 * - Gates & Fabrication
 * - Railing & Glasses
 * - Exterior Work
 * - Commercial Work
 */

import { siteConfig } from "../config/site.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";
import { renderFAQAccordion } from "../components/FAQAccordion.js";
import { renderEnquiryForm } from "../components/EnquiryForm.js";
import { getServicesForCategory } from "../data/categories.js";

export function renderCategoryPage(category) {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: category.name, url: category.url }
  ]);

  const services = getServicesForCategory(category.id);

  const serviceCardsHtml = services.map(s => {
    const typesPreview = (s.types || []).slice(0, 3).map(t => `
      <span class="category-service-type-chip">${t.name}</span>
    `).join("");

    return `
      <div class="bezel-card service-card">
        <div class="bezel-card-inner">
          <div class="service-card-media">
            <img src="${s.heroImage}" alt="${s.h1}" loading="lazy" width="400" height="250" />
            <span class="service-card-badge">${s.heroBadge}</span>
          </div>
          <h3 class="service-card-title">${s.title}</h3>
          <p class="service-card-desc">${s.shortDesc}</p>
          
          ${typesPreview ? `
            <div class="category-service-types-strip">
              <span class="category-types-label">Available Styles:</span>
              <div class="category-types-flex">
                ${typesPreview}
              </div>
            </div>
          ` : ""}

          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; padding-top: 14px;">
            <a href="/${s.slug}/" class="service-card-link" style="flex: 1; justify-content: center;">
              <span>View Details & Specs</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hello, I am interested in ${s.title} in Ayodhya. Please share details and an estimate.`)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.676-.518-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.311 1.278.497 1.716.636.722.23 1.378.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.688A9.63 9.63 0 0 1 7.12 20.34l-.352-.21-3.666.96 0.978-3.574-.23-.367a9.645 9.645 0 1 1 8.192 4.54zm0-17.688c-4.442 0-8.055 3.613-8.055 8.055 0 1.42.37 2.808 1.07 4.026l-.68 2.483 2.546-.667a8.03 8.03 0 0 0 4.119 1.13c4.443 0 8.055-3.613 8.055-8.055S16.485 4 12.042 4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const highlightsHtml = (category.highlights || []).map((h, i) => `
    <div class="category-spec-item">
      <div class="category-spec-num">0${i + 1}</div>
      <div class="category-spec-text">${h}</div>
    </div>
  `).join("");

  return `
    <!-- CATEGORY HERO SECTION -->
    <section class="page-hero" style="background-image: linear-gradient(to right, rgba(10, 14, 12, 0.94) 0%, rgba(12, 16, 14, 0.88) 50%, rgba(12, 16, 14, 0.68) 100%), url('${category.heroImage}');">
      <div class="container">
        ${breadcrumbHtml}
        <div class="page-hero-header">
          <span class="section-eyebrow">${category.heroBadge}</span>
          <h1 class="section-title">${category.h1}</h1>
          <p class="section-subtitle">
            ${category.tagline}. High-precision fabrication, certified materials, and turnkey site installation across Ayodhya and Faizabad.
          </p>

          <div class="service-hero-intro-card" style="margin-top: 18px;">
            <p class="service-hero-intro-text">
              ${category.intro}
            </p>
          </div>

          <div class="hero-actions" style="margin-top: 18px;">
            <a href="https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to discuss ${category.name} solutions in Ayodhya. Please guide me regarding options and estimates.`)}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.676-.518-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.311 1.278.497 1.716.636.722.23 1.378.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.688A9.63 9.63 0 0 1 7.12 20.34l-.352-.21-3.666.96 0.978-3.574-.23-.367a9.645 9.645 0 1 1 8.192 4.54zm0-17.688c-4.442 0-8.055 3.613-8.055 8.055 0 1.42.37 2.808 1.07 4.026l-.68 2.483 2.546-.667a8.03 8.03 0 0 0 4.119 1.13c4.443 0 8.055-3.613 8.055-8.055S16.485 4 12.042 4z"/>
              </svg>
              <span>WhatsApp Consultation</span>
            </a>
            <a href="${siteConfig.telUrl}" class="btn btn-glass">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call ${siteConfig.phone}</span>
            </a>
            <a href="#services-catalog" class="btn btn-secondary">
              <span>Explore All ${services.length} Services ↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: SERVICES CATALOG -->
    <section class="section" id="services-catalog">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">${category.name} Catalog</span>
          <h2 class="section-title">Specialized Services in <span class="highlight-gold">${category.name}</span></h2>
          <p class="section-subtitle">
            Every service is engineered to certified technical standards, executed by our in-house master craftsmen in Ayodhya.
          </p>
        </div>

        <div class="services-grid">
          ${serviceCardsHtml}
        </div>
      </div>
    </section>

    <!-- SECTION: ENGINEERING STANDARDS & SPECIFICATIONS -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Quality Guarantee</span>
          <h2 class="section-title">Engineering Standards for ${category.name}</h2>
          <p class="section-subtitle">
            We adhere to strict material certifications and dimensional precision on every project in Ayodhya and Faizabad.
          </p>
        </div>

        <div class="category-specs-grid">
          ${highlightsHtml}
        </div>
      </div>
    </section>

    <!-- SECTION: FAQS -->
    ${category.faqs && category.faqs.length > 0 ? `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-eyebrow">Frequently Asked Questions</span>
            <h2 class="section-title">Common Questions About <span class="highlight-gold">${category.name}</span></h2>
            <p class="section-subtitle">
              Clear answers regarding pricing, materials, installation duration, and warranty coverage in Ayodhya.
            </p>
          </div>

          ${renderFAQAccordion(category.faqs)}
        </div>
      </section>
    ` : ""}

    <!-- SECTION: FINAL CTA & ESTIMATE FORM -->
    <section class="section section-muted">
      <div class="container">
        <div class="service-final-cta-grid">
          <div class="service-final-cta-info">
            <span class="section-eyebrow">Direct Consultation</span>
            <h2 style="font-size: 2.2rem; margin-bottom: 16px;">Ready to Plan Your <span class="highlight-gold">${category.name}</span> Project?</h2>
            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem; margin-bottom: 24px;">
              Request on-site measurements and an itemized quotation from our studio engineers in Ayodhya. We review drawings, verify site parameters, and provide clear timeline estimates.
            </p>

            <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; color: var(--accent-sage-dark);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <span style="display: block; font-size: 0.8rem; color: var(--text-secondary);">Direct Telephone</span>
                  <a href="${siteConfig.telUrl}" style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${siteConfig.phone}</a>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background-color: rgba(37, 211, 102, 0.15); display: flex; align-items: center; justify-content: center; color: var(--whatsapp-dark);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.676-.518-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.311 1.278.497 1.716.636.722.23 1.378.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.688A9.63 9.63 0 0 1 7.12 20.34l-.352-.21-3.666.96 0.978-3.574-.23-.367a9.645 9.645 0 1 1 8.192 4.54zm0-17.688c-4.442 0-8.055 3.613-8.055 8.055 0 1.42.37 2.808 1.07 4.026l-.68 2.483 2.546-.667a8.03 8.03 0 0 0 4.119 1.13c4.443 0 8.055-3.613 8.055-8.055S16.485 4 12.042 4z"/>
                  </svg>
                </div>
                <div>
                  <span style="display: block; font-size: 0.8rem; color: var(--text-secondary);">Direct WhatsApp</span>
                  <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${siteConfig.phone}</a>
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="${siteConfig.telUrl}" class="btn btn-primary">
                <span>Call Studio</span>
              </a>
              <a href="https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to request an estimate for ${category.name} in Ayodhya.`)}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          <div class="service-final-cta-form-col">
            ${renderEnquiryForm()}
          </div>
        </div>
      </div>
    </section>
  `;
}
