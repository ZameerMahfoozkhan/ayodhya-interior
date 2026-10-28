/**
 * Footer Component
 * Architectural footer with categorized navigation, Ayodhya service area info, and verified contact links.
 */

import { siteConfig } from "../config/site.js";

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand & Philosophy -->
          <div class="footer-col">
            <div class="site-logo" style="margin-bottom: 16px;">
              <span class="site-logo-title" style="color: #FFFFFF;">${siteConfig.brandName}</span>
            </div>
            <p style="color: #A3A7A1; font-size: 0.92rem; line-height: 1.6; margin-bottom: 20px;">
              ${siteConfig.supportingLine}
            </p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; align-items: center; gap: 8px; color: #FFFFFF; font-size: 0.92rem; font-weight: 600;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#667A68" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="${siteConfig.telUrl}" style="color: #FFFFFF;">${siteConfig.phone}</a>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; color: #A3A7A1; font-size: 0.88rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#667A68" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${siteConfig.primaryLocation}</span>
              </div>
            </div>
          </div>

          <!-- Col 2: Residential & Panels -->
          <div class="footer-col">
            <h4 class="footer-col-title">Interiors & Panels</h4>
            <ul class="footer-links">
              <li><a href="/home-interiors-ayodhya/" class="footer-link">Complete Home Interiors</a></li>
              <li><a href="/modular-kitchen-ayodhya/" class="footer-link">Modular Kitchens</a></li>
              <li><a href="/custom-furniture-ayodhya/" class="footer-link">Custom Furniture & Wardrobes</a></li>
              <li><a href="/tv-unit-design-ayodhya/" class="footer-link">TV Units & Feature Walls</a></li>
              <li><a href="/pvc-wall-panels-ayodhya/" class="footer-link">PVC Wall Panels</a></li>
              <li><a href="/wpc-wall-panels-ayodhya/" class="footer-link">WPC Wall Panels</a></li>
              <li><a href="/fluted-panels-louvers-ayodhya/" class="footer-link">Fluted Panels & Louvers</a></li>
              <li><a href="/uv-marble-sheets-ayodhya/" class="footer-link">UV Marble Sheets</a></li>
              <li><a href="/false-ceiling-ayodhya/" class="footer-link">False Ceilings</a></li>
              <li><a href="/flooring-ayodhya/" class="footer-link">Flooring Solutions</a></li>
            </ul>
          </div>

          <!-- Col 3: Gates, Railings & Exterior -->
          <div class="footer-col">
            <h4 class="footer-col-title">Gates & Exterior</h4>
            <ul class="footer-links">
              <li><a href="/main-gate-installation-ayodhya/" class="footer-link">Main Gate Installation</a></li>
              <li><a href="/cnc-cut-gates-ayodhya/" class="footer-link">CNC Laser-Cut Gates</a></li>
              <li><a href="/sliding-gates-ayodhya/" class="footer-link">Sliding Gate Systems</a></li>
              <li><a href="/steel-iron-gates-ayodhya/" class="footer-link">Steel & Iron Gates</a></li>
              <li><a href="/staircase-railings-ayodhya/" class="footer-link">Staircase Railings</a></li>
              <li><a href="/glass-railings-ayodhya/" class="footer-link">Glass Railing Systems</a></li>
              <li><a href="/balcony-railings-ayodhya/" class="footer-link">Balcony Railings</a></li>
              <li><a href="/exterior-wall-cladding-ayodhya/" class="footer-link">Exterior Wall Cladding</a></li>
              <li><a href="/acp-cladding-ayodhya/" class="footer-link">ACP Facade Cladding</a></li>
              <li><a href="/glass-partitions-ayodhya/" class="footer-link">Commercial Glass Partitions</a></li>
            </ul>
          </div>

          <!-- Col 4: Quick Links & Service Area -->
          <div class="footer-col">
            <h4 class="footer-col-title">Quick Information</h4>
            <ul class="footer-links" style="margin-bottom: 24px;">
              <li><a href="/services/" class="footer-link">Complete Services Directory</a></li>
              <li><a href="/projects/" class="footer-link">Projects & Inspiration Gallery</a></li>
              <li><a href="/guides/" class="footer-link">Advice & Material Guides</a></li>
              <li><a href="/about/" class="footer-link">About Our Studio</a></li>
              <li><a href="/contact/" class="footer-link">Contact & Site Estimates</a></li>
              <li><a href="/privacy-policy/" class="footer-link">Privacy Policy</a></li>
            </ul>
            <div style="background-color: rgba(255, 255, 255, 0.05); padding: 14px; border-radius: var(--radius-md); border: 1px solid rgba(223, 220, 212, 0.1);">
              <span style="display: block; font-size: 0.8rem; font-weight: 700; color: #FFFFFF; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Service Area & Localities</span>
              <p style="font-size: 0.8rem; color: #A3A7A1; margin: 0 0 8px 0; line-height: 1.4;">
                ${siteConfig.serviceRegionDescription}
              </p>
              ${siteConfig.targetLocalities ? `
                <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px;">
                  ${siteConfig.targetLocalities.slice(0, 8).map(loc => `
                    <span style="font-size: 0.72rem; background: rgba(255,255,255,0.08); color: #E5DFC5; padding: 2px 7px; border-radius: 4px;">${loc}</span>
                  `).join("")}
                </div>
              ` : ""}
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <div>
            &copy; ${currentYear} ${siteConfig.brandName}. All rights reserved.
          </div>
          <div style="display: flex; gap: 16px;">
            <a href="/privacy-policy/" style="color: #8C8F8A; text-decoration: none;">Privacy Policy</a>
            <span style="color: #555855;">•</span>
            <a href="/contact/" style="color: #8C8F8A; text-decoration: none;">Site Estimate</a>
            <span style="color: #555855;">•</span>
            <a href="/sitemap.xml" style="color: #8C8F8A; text-decoration: none;">XML Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
