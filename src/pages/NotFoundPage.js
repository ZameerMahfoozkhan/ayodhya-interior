/**
 * NotFoundPage Component
 * Custom, helpful 404 error page.
 */

import { siteConfig } from "../config/site.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";

export function renderNotFoundPage() {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Page Not Found" }
  ]);

  return `
    <section class="page-hero">
      <div class="container" style="text-align: center; max-width: 680px; margin: 0 auto;">
        ${breadcrumbHtml}
        <span class="section-eyebrow">Error 404</span>
        <h1 class="section-title">404: <span class="highlight-gold">Page Not Found</span></h1>
        <p class="section-subtitle" style="margin: 0 auto 20px;">
          The page or service route you are looking for may have moved, been renamed, or is temporarily unavailable.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container" style="text-align: center; max-width: 640px;">

        <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 40px;">
          <a href="/" class="btn btn-primary">
            <span>Return to Homepage</span>
          </a>
          <a href="/services/" class="btn btn-outline">
            <span>Explore All Services</span>
          </a>
          <a href="/contact/" class="btn btn-secondary">
            <span>Contact Studio</span>
          </a>
        </div>

        <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; text-align: left;">
          <h3 style="font-size: 1.1rem; margin-bottom: 12px; color: var(--text-primary);">Looking for specific solutions in Ayodhya?</h3>
          <ul style="list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr)); gap: 8px; font-size: 0.9rem;">
            <li><a href="/home-interiors-ayodhya/">Home Interiors</a></li>
            <li><a href="/modular-kitchen-ayodhya/">Modular Kitchens</a></li>
            <li><a href="/pvc-wall-panels-ayodhya/">PVC Wall Panels</a></li>
            <li><a href="/fluted-panels-louvers-ayodhya/">Fluted Louvers</a></li>
            <li><a href="/staircase-railings-ayodhya/">Staircase Railings</a></li>
            <li><a href="/main-gate-installation-ayodhya/">Main Gates</a></li>
            <li><a href="/exterior-wall-cladding-ayodhya/">Exterior Cladding</a></li>
            <li><a href="/office-interior-ayodhya/">Office Interiors</a></li>
          </ul>
        </div>
      </div>
    </section>
  `;
}
