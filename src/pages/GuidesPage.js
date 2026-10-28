/**
 * GuidesPage Component
 * Educational material advice and buying guides index.
 */

import { siteConfig } from "../config/site.js";
import { guidesData } from "../data/guides.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";

export function renderGuidesPage() {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Advice & Material Guides", url: "/guides/" }
  ]);

  const guidesHtml = guidesData.map(guide => `
    <article class="bezel-card" style="margin-bottom: 32px;">
      <div class="bezel-card-inner">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <span class="section-eyebrow" style="margin-bottom: 0;">${guide.category}</span>
          <span style="font-size: 0.8rem; color: var(--text-secondary);">${guide.readTime}</span>
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 12px; color: var(--text-primary);">
          ${guide.title}
        </h2>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
          ${guide.excerpt}
        </p>
        <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); padding-top: 16px; border-top: 1px solid var(--border-light); margin-bottom: 20px;">
          ${guide.content}
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-top: 14px; border-top: 1px dashed var(--border-light);">
          <span style="font-size: 0.85rem; color: var(--text-primary); font-weight: 600;">
            Need this service executed in Ayodhya?
          </span>
          <a href="/${guide.relatedServiceSlug}/" class="btn btn-outline btn-sm">
            <span>View Service Details & Pricing Factors</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join("");

  return `
    <section class="page-hero">
      <div class="container">
        ${breadcrumbHtml}
        <div class="page-hero-header">
          <span class="section-eyebrow">Expert Advice</span>
          <h1 class="section-title">Educational & <span class="highlight-gold">Material Selection Guides</span></h1>
          <p class="section-subtitle">
            Practical, unbiased engineering advice to help homeowners and property managers in Ayodhya make informed decisions before starting work.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="max-width: 900px; margin: 0 auto;">
          ${guidesHtml}
        </div>
      </div>
    </section>
  `;
}
