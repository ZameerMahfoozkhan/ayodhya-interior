/**
 * ProjectsPage Component
 * Architectural Project & Design Inspiration Portfolio with category filter tabs.
 */

import { siteConfig } from "../config/site.js";
import { projectsData } from "../data/projects.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";

export function renderProjectsPage() {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Project Gallery", url: "/projects/" }
  ]);

  const cardsHtml = projectsData.map(proj => `
    <div class="bezel-card project-gallery-item" data-category="${proj.category}">
      <div class="bezel-card-inner">
        <div class="service-card-media" style="aspect-ratio: 16 / 10;">
          <img src="${proj.image}" alt="${proj.alt}" loading="lazy" width="400" height="250" />
          <span class="service-card-badge" style="color: var(--accent-walnut-dark);">${proj.tag}</span>
        </div>
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-sage-dark); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
          ${proj.propertyType} • ${proj.location}
        </div>
        <h3 style="font-size: 1.25rem; margin-bottom: 8px;">${proj.title}</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px; flex-grow: 1;">
          ${proj.description}
        </p>
        <div style="font-size: 0.82rem; background-color: var(--bg-primary); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-light); margin-bottom: 18px;">
          <strong>Material Specifications:</strong> ${proj.materials}
        </div>
        <a href="/${proj.relatedSlug}/" class="service-card-link">
          <span>Explore Associated Service Specs</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join("");

  return `
    <section class="page-hero">
      <div class="container">
        ${breadcrumbHtml}
        <div class="page-hero-header">
          <span class="section-eyebrow">Design Portfolio</span>
          <h1 class="section-title">Project Gallery & Architectural Concepts</h1>
          <p class="section-subtitle">
            Explore execution concepts and material assemblies across residential interiors, decorative wall paneling, custom gates, railings, and commercial spaces.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Factual Disclosure Notice -->
        <div style="max-width: 800px; margin: 0 auto 36px; padding: 14px 18px; border-radius: var(--radius-md); background-color: var(--card-bg); border: 1px solid var(--border-light); font-size: 0.88rem; color: var(--text-secondary); text-align: center;">
          <strong style="color: var(--text-primary);">Portfolio Transparency:</strong> The concepts displayed below demonstrate our technical fabrication capabilities, material assemblies, and design directions. We never present unverified stock photos as our completed client projects. Real installation case studies are updated regularly.
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar">
          <button class="filter-btn active" data-filter="all">All Disciplines</button>
          <button class="filter-btn" data-filter="residential">Residential Interiors</button>
          <button class="filter-btn" data-filter="panels">Wall Panels</button>
          <button class="filter-btn" data-filter="railings">Staircase & Balcony Railings</button>
          <button class="filter-btn" data-filter="gates">Main Gates & Metalwork</button>
          <button class="filter-btn" data-filter="exterior">Exterior Facades</button>
          <button class="filter-btn" data-filter="commercial">Commercial Fit-Outs</button>
        </div>

        <!-- Projects Grid -->
        <div class="services-grid">
          ${cardsHtml}
        </div>

        <!-- Call to Action -->
        <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-xl); padding: 40px; text-align: center; box-shadow: var(--shadow-card); margin-top: 64px;">
          <h2 style="font-size: 1.8rem; margin-bottom: 12px;">Have a Custom Design Reference from Pinterest or an Architect?</h2>
          <p style="color: var(--text-secondary); max-width: 600px; margin-left: auto; margin-right: auto; margin-bottom: 24px;">
            Share your reference photos or architectural CAD drawings directly on WhatsApp. We will evaluate fabrication feasibility, material options, and provide a detailed estimate.
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <a href="${siteConfig.whatsappUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <span>Send Reference Photo on WhatsApp</span>
            </a>
            <a href="/contact/" class="btn btn-outline">
              <span>Request Site Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
