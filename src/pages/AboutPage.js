/**
 * AboutPage Component
 * Honest, factual description of the studio's execution standards and work philosophy.
 */

import { siteConfig } from "../config/site.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";

export function renderAboutPage() {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "About Studio", url: "/about/" }
  ]);

  return `
    <section class="page-hero">
      <div class="container">
        ${breadcrumbHtml}
        <div class="page-hero-header">
          <span class="section-eyebrow">Studio Approach & Standards</span>
          <h1 style="font-size: clamp(2.2rem, 3.5vw + 1rem, 3rem); margin-bottom: 14px;">
            About ${siteConfig.brandName}
          </h1>
          <p class="section-subtitle">
            ${siteConfig.supportingLine}
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="max-width: 820px; margin-left: auto; margin-right: auto;">
          <div style="display: flex; flex-direction: column; gap: 32px; font-size: 1.02rem; line-height: 1.75; color: var(--text-secondary);">
            <div class="bezel-card">
              <div class="bezel-card-inner">
                <h2 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 12px;">Our Purpose & Working Philosophy</h2>
                <p>
                  Building or renovating a property in Ayodhya is often an exhausting experience. Homeowners and commercial managers find themselves juggling independent carpenters, brick masons, painters, metal welders, glass contractors, and ceiling technicians—each pointing fingers at the other when measurements clash or schedules fail.
                </p>
                <p>
                  <strong>${siteConfig.brandName}</strong> was established to provide an integrated, professionally coordinated alternative. We act as a single point of technical responsibility, ensuring that structural metalwork, modular woodwork, damp-proof decorative wall panels, false ceilings, and architectural glazing are planned and executed as one cohesive project.
                </p>
              </div>
            </div>

            <div class="bezel-card">
              <div class="bezel-card-inner">
                <h2 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 12px;">Commitment to Material Truth & Transparency</h2>
                <p>
                  The interior and exterior construction industry is rife with confusing terminology, deceptive grade substitutions, and unsubstantiated claims. We believe in absolute material transparency:
                </p>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
                  <li style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 4px;"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>Accurate Substrates:</strong> We explicitly distinguish between commercial moisture-resistant HDHMR boards and certified IS 710 Boiling Water Proof (BWP) marine plywood, ensuring water-prone areas never suffer premature rot.</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 4px;"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>Certified Metals:</strong> We use certified AISI 304 grade stainless steel containing 18% chromium and 8% nickel for rust immunity, rather than substitution-prone commercial SS 202.</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 4px;"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>Certified Safety Glazing:</strong> For fall-protection staircase and balcony railings, we specify certified heat-strengthened toughened and laminated glass engineered with proper structural fixings.</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; gap: 10px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 4px;"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>Honest Application Limits:</strong> We never market interior-grade PVC or UV sheets as exterior facade materials unless a specific product is co-extruded and certified for UV weathering.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="bezel-card">
              <div class="bezel-card-inner">
                <h2 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 12px;">Local Execution in Ayodhya & Surrounding Districts</h2>
                <p>
                  Our primary focus is serving Ayodhya, Faizabad, and surrounding urban corridors. By remaining local, we can conduct on-site laser measurements, coordinate timely deliveries, and ensure our technical supervisors are physically on site to verify workmanship before final handover.
                </p>
                <p style="margin-top: 12px;">
                  Whether you are building a new private home, renovating an ancestral kothi, fitting out a retail showroom, or modernizing an entrance gate, our studio is dedicated to delivering durable, beautifully finished spaces.
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div style="margin-top: 48px; text-align: center; display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <a href="/contact/" class="btn btn-primary">
              <span>Discuss Your Project</span>
            </a>
            <a href="/services/" class="btn btn-outline">
              <span>View All 28 Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
