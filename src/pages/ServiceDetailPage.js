/**
 * ServiceDetailPage Component
 * Implements the complete 19-part specification for all 28 service pages.
 * Fully crawlable, rich, in-depth architectural content with zero empty placeholders.
 */

import { siteConfig } from "../config/site.js";
import { getRelatedServices } from "../data/services.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";
import { renderFAQAccordion } from "../components/FAQAccordion.js";
import { renderEnquiryForm } from "../components/EnquiryForm.js";

export function renderServiceDetailPage(service) {
  // 1. Breadcrumbs
  const categoryNames = {
    residential: "Residential Interiors",
    panels: "Decorative Panels",
    railings: "Staircase & Balcony Railings",
    gates: "Main Gates & Metalwork",
    exterior: "Exterior Solutions",
    commercial: "Commercial Fit-Outs"
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: categoryNames[service.category] || "Services", url: `/services/#${service.category}` },
    { name: service.title }
  ];

  const breadcrumbHtml = renderBreadcrumb(breadcrumbs);

  // 5. Types / Configurations HTML
  const typesHtml = service.types ? service.types.map(type => `
    <div class="bezel-card" style="margin-bottom: 16px;">
      <div class="bezel-card-inner">
        <h4 style="font-size: 1.15rem; margin-bottom: 6px; color: var(--text-primary);">${type.name}</h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${type.description}</p>
      </div>
    </div>
  `).join("") : "";

  // 6. Materials Comparison HTML
  const materialsHtml = service.materials ? service.materials.map(mat => `
    <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 20px;">
      <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 8px;">${mat.name}</h4>
      <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${mat.description}</p>
    </div>
  `).join("") : "";

  // 7. Applications List
  const applicationsHtml = service.applications ? service.applications.map(app => `
    <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem; color: var(--text-secondary);">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${app}</span>
    </li>
  `).join("") : "";

  // 8. Benefits & Limitations (Pros & Cons)
  const prosHtml = service.prosCons && service.prosCons.pros ? service.prosCons.pros.map(pro => `
    <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${pro}</span>
    </li>
  `).join("") : "";

  const consHtml = service.prosCons && service.prosCons.cons ? service.prosCons.cons.map(con => `
    <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C25E5E" stroke-width="2.5" style="flex-shrink: 0; margin-top: 3px;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      <span>${con}</span>
    </li>
  `).join("") : "";

  // 9. Selection Factors List
  const selectionFactorsHtml = service.selectionFactors ? service.selectionFactors.map(factor => `
    <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 12px;">
      <span style="font-weight: 700; color: var(--accent-walnut); flex-shrink: 0;">•</span>
      <span>${factor}</span>
    </li>
  `).join("") : "";

  // 11. Practical Process Steps
  const processHtml = service.process ? service.process.map(p => `
    <div class="bezel-card" style="margin-bottom: 14px;">
      <div class="bezel-card-inner" style="padding: 18px 24px;">
        <h4 style="font-size: 1.05rem; color: var(--text-primary); margin-bottom: 4px;">${p.step}</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">${p.detail}</p>
      </div>
    </div>
  `).join("") : "";

  // 12. Cost Factors List
  const costFactorsHtml = service.costFactors ? service.costFactors.map(cf => `
    <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">
      <span style="color: var(--accent-sage-dark); font-weight: 700;">₹</span>
      <span>${cf}</span>
    </li>
  `).join("") : "";

  // 14. Common Mistakes to Avoid
  const mistakesHtml = service.commonMistakes ? service.commonMistakes.map(m => `
    <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 10px;">
      <span style="color: #C25E5E; font-weight: 700; flex-shrink: 0;">⚠️</span>
      <span>${m}</span>
    </li>
  `).join("") : "";

  // 17. Related Services Internal Links
  const relatedServices = getRelatedServices(service.slug);
  const relatedCardsHtml = relatedServices.map(rel => `
    <div class="bezel-card service-card">
      <div class="bezel-card-inner">
        <div class="service-card-media" style="aspect-ratio: 16 / 9; margin-bottom: 12px;">
          <img src="${rel.heroImage}" alt="${rel.title}" loading="lazy" width="320" height="180" />
          <span class="service-card-badge">${rel.category.toUpperCase()}</span>
        </div>
        <h4 style="font-size: 1.15rem; margin-bottom: 6px;">${rel.title}</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 14px; flex-grow: 1;">${rel.shortDesc}</p>
        <a href="/${rel.slug}/" class="service-card-link">
          <span>Explore Service Details</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join("");

  const whatsappPrefilledUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(service.whatsappPrompt)}`;

  return `
    <!-- SERVICE HERO SECTION (H1 + Background Architectural Media + Quick CTA) -->
    <section class="page-hero service-hero" style="background-image: linear-gradient(to right, rgba(20, 24, 20, 0.94) 0%, rgba(20, 24, 20, 0.86) 48%, rgba(20, 24, 20, 0.58) 100%), url('${service.heroImage || '/images/hero/hero-architectural.webp'}');">
      <div class="container">
        ${breadcrumbHtml}
        <div class="service-hero-grid">
          <div class="service-hero-content">
            <span class="section-eyebrow">${service.heroBadge}</span>
            <h1 class="service-hero-title">${service.h1}</h1>
            <div class="service-hero-intro-card">
              <div class="service-hero-intro-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${service.shortDesc}</span>
              </div>
              <p class="service-hero-intro-text">${service.intro}</p>
            </div>
            <div class="hero-actions">
              <a href="${whatsappPrefilledUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z"/>
                </svg>
                <span>Enquire on WhatsApp</span>
              </a>
              <a href="${siteConfig.telUrl}" class="btn btn-glass">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Call ${siteConfig.phone}</span>
              </a>
            </div>
          </div>

          <div class="service-hero-right">
            <div class="hero-glass-badge">
              <div class="hero-badge-tag">${categoryNames[service.category] || "Engineering"} Discipline</div>
              <div class="hero-badge-title">${service.title}</div>
              <div class="hero-badge-list">
                <span>✓ On-Site Field Measurements</span>
                <span>✓ Verified Material Specifications</span>
                <span>✓ Direct WhatsApp Quotation</span>
              </div>
              <a href="#estimate-form" class="hero-wa-pill">
                <span>Get Instant Estimate ↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT BODY SECTION -->
    <section class="section" style="padding-top: 20px;">
      <div class="container">
        <div style="max-width: 960px; margin: 0 auto;">
          <!-- Main Content Flow -->
          <div>
            <!-- Section 9 Item 5: Types, Styles & Configurations -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Options & Configurations</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Types & Styles Available in Ayodhya</h2>
              <div style="margin-top: 16px;">
                ${typesHtml}
              </div>
            </div>

            <!-- Section 9 Item 6: Material Options & Comparisons -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Material Science</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Material Options & Practical Differences</h2>
              <div style="display: grid; grid-template-columns: 1fr; gap: 14px; margin-top: 16px;">
                ${materialsHtml}
              </div>
            </div>

            <!-- Section 9 Item 7: Suitable Applications -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Where It Fits</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Suitable Applications</h2>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
                ${applicationsHtml}
              </ul>
            </div>

            <!-- Section 9 Item 8: Benefits and Limitations (Pros & Cons) -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Objective Assessment</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Benefits & Practical Limitations</h2>
              <div class="pros-cons-grid">
                <div style="background-color: var(--accent-sage-light); border: 1px solid rgba(45, 74, 52, 0.18); border-radius: var(--radius-lg); padding: 20px;">
                  <h4 style="font-size: 1.05rem; color: var(--accent-sage-dark); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Key Advantages</span>
                  </h4>
                  <ul style="list-style: none;">
                    ${prosHtml}
                  </ul>
                </div>
                <div style="background-color: #FDF4F4; border: 1px solid rgba(194, 94, 94, 0.2); border-radius: var(--radius-lg); padding: 20px;">
                  <h4 style="font-size: 1.05rem; color: #B34444; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    <span>Realistic Limitations</span>
                  </h4>
                  <ul style="list-style: none;">
                    ${consHtml}
                  </ul>
                </div>
              </div>
            </div>

            <!-- Section 9 Item 9: Factors to Consider Before Selecting -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Buyer's Checklist</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Factors to Consider Before Selecting</h2>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-top: 16px;">
                ${selectionFactorsHtml}
              </ul>
            </div>

            <!-- Section 9 Item 10: Site Measurements & Installation Considerations -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Site Engineering</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Site Measurements & Substrate Preparation</h2>
              <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; line-height: 1.7; color: var(--text-secondary);">
                <p style="margin: 0;">${service.siteAssessment}</p>
              </div>
            </div>

            <!-- Section 9 Item 11: Step-by-Step Delivery Process -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Execution Steps</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">How the Work is Delivered</h2>
              <div style="margin-top: 16px;">
                ${processHtml}
              </div>
            </div>

            <!-- Section 9 Item 12: Factors Affecting Quotation & Cost -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Pricing Breakdown</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Factors Affecting Quotation & Project Cost</h2>
              <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px;">
                Rather than offering generic lump-sum figures that change mid-project, every quotation is calculated based on exact measurable variables:
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                ${costFactorsHtml}
              </ul>
            </div>

            <!-- Section 9 Item 14: Common Mistakes to Avoid -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Practical Advice</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Costly Mistakes to Avoid</h2>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 16px;">
                ${mistakesHtml}
              </ul>
            </div>

            <!-- Section 9 Item 15: Maintenance & Care Advice -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Longevity & Care</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Maintenance & Care Advice</h2>
              <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; line-height: 1.7; color: var(--text-secondary);">
                <p style="margin: 0;">${service.maintenance}</p>
              </div>
            </div>

            <!-- Section 9 Item 16: Service-Specific FAQs -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Common Questions</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Frequently Asked Questions</h2>
              <div style="margin-top: 16px;">
                ${renderFAQAccordion(service.faqs)}
              </div>
            </div>

            <!-- Section 9 Item 17: Related Services -->
            <div style="margin-bottom: 48px;">
              <span class="section-eyebrow">Related Work</span>
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Related Services in Ayodhya</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
                ${relatedCardsHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL SECTION: DIRECT STUDIO CONSULTATION & ENQUIRY FORM -->
    <section class="section section-muted" id="estimate-form" style="border-top: 1px solid var(--border-light); scroll-margin-top: 80px;">
      <div class="container">
        <div class="service-final-cta-grid">
          <div class="service-final-cta-info">
            <span class="section-eyebrow">Direct Studio Consultation</span>
            <h2 style="font-size: clamp(1.8rem, 3vw, 2.3rem); margin-bottom: 16px; line-height: 1.25;">Request an Estimate for ${service.title}</h2>
            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.02rem; margin-bottom: 24px;">
              Share your project requirements, room measurements, or reference ideas. Our technical specialists in Ayodhya will review your details, discuss suitable materials, and coordinate on-site measurement.
            </p>
            <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; color: var(--accent-sage-dark); flex-shrink: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <span style="display: block; font-size: 0.8rem; color: var(--text-secondary);">Direct Studio Helpline</span>
                  <a href="${siteConfig.telUrl}" style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">${siteConfig.phone}</a>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background-color: rgba(37, 211, 102, 0.15); display: flex; align-items: center; justify-content: center; color: var(--whatsapp-dark); flex-shrink: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z"/>
                  </svg>
                </div>
                <div>
                  <span style="display: block; font-size: 0.8rem; color: var(--text-secondary);">Direct WhatsApp</span>
                  <a href="${whatsappPrefilledUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">${siteConfig.phone}</a>
                </div>
              </div>
            </div>

            <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 18px 20px; font-size: 0.88rem; color: var(--text-secondary);">
              <strong style="color: var(--text-primary); display: block; margin-bottom: 6px;">Service Location & Coverage:</strong>
              Turnkey on-site installation across Ayodhya City, Faizabad, Civil Lines, Deokali, Fatehganj, Naya Ghat Road, Kaushalpuri & Rikabganj.
            </div>
          </div>

          <div class="service-final-cta-form-col">
            ${renderEnquiryForm(service.title)}
          </div>
        </div>
      </div>
    </section>
  `;
}
