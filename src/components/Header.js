/**
 * Header Component
 * Floating architectural navigation bar with high-end mega-menu and mobile drawer.
 */

import { siteConfig } from "../config/site.js";

export function renderHeader(currentPath = "/") {
  const navItemsHtml = siteConfig.navMenu.map((item) => {
    const isCurrent = currentPath === item.url || (item.url !== "/" && currentPath.startsWith(item.url));

    if (item.isMega && item.categories) {
      const columnsHtml = item.categories.map(cat => `
        <div class="mega-col">
          <a href="${cat.url}" class="mega-col-heading">
            <span>${cat.name}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <ul class="mega-list">
            ${cat.items.map(sub => `
              <li>
                <a href="${sub.url}" class="mega-link">
                  <span class="mega-link-title">${sub.title}</span>
                  ${sub.desc ? `<span class="mega-link-desc">${sub.desc}</span>` : ""}
                </a>
              </li>
            `).join("")}
          </ul>
        </div>
      `).join("");

      return `
        <div class="nav-item-dropdown mega-dropdown">
          <a href="${item.url}" class="nav-link ${isCurrent ? 'active' : ''}">
            <span>${item.title}</span>
            <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="nav-mega-menu">
            <div class="mega-menu-inner">
              <div class="mega-menu-columns">
                ${columnsHtml}
              </div>
              <div class="mega-menu-footer">
                <div class="mega-footer-text">
                  <strong>Need custom fabrication or turnkey execution in Ayodhya?</strong>
                  <span>Call directly on ${siteConfig.phone} for on-site measurement</span>
                </div>
                <a href="/services/" class="mega-footer-btn">
                  <span>Browse All 28 Services</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (item.dropdown && item.dropdown.length > 0) {
      const dropdownItems = item.dropdown.map(drop => `
        <a href="${drop.url}" class="dropdown-item">
          <span class="dropdown-item-title">${drop.title}</span>
          ${drop.desc ? `<span class="dropdown-item-desc">${drop.desc}</span>` : ""}
        </a>
      `).join("");

      return `
        <div class="nav-item-dropdown">
          <a href="${item.url}" class="nav-link ${isCurrent ? 'active' : ''}">
            <span>${item.title}</span>
            <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="nav-dropdown-menu">
            ${dropdownItems}
          </div>
        </div>
      `;
    }

    return `
      <a href="${item.url}" class="nav-link ${isCurrent ? 'active' : ''}">
        ${item.title}
      </a>
    `;
  }).join("");

  const mobileNavHtml = siteConfig.navMenu.map((item) => {
    if (item.isMega && item.categories) {
      return `
        <div class="mobile-nav-group">
          <div class="mobile-group-header">
            <span>${item.title}</span>
            <a href="${item.url}" class="mobile-group-all">All Services →</a>
          </div>
          <div class="mobile-cat-accordion">
            ${item.categories.map(cat => `
              <details class="mobile-details">
                <summary class="mobile-summary">
                  <span>${cat.name}</span>
                  <svg class="summary-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div class="mobile-submenu">
                  ${cat.items.map(sub => `
                    <a href="${sub.url}" class="mobile-sub-link">${sub.title}</a>
                  `).join("")}
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      `;
    }

    return `
      <a href="${item.url}" class="mobile-nav-link">
        <span>${item.title}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </a>
    `;
  }).join("");

  return `
    <header class="site-header">
      <div class="container header-container">
        <div class="header-inner">
          <!-- Brand Logo -->
          <a href="/" class="site-logo" aria-label="${siteConfig.brandName} Homepage">
            <div class="site-logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20V9.5z"/>
                <polyline points="9 21 9 12 15 12 15 21"/>
              </svg>
            </div>
            <div class="site-logo-text">
              <span class="site-logo-title">${siteConfig.brandShortName}</span>
              <span class="site-logo-subtitle">Interior & Exterior Studio</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="desktop-nav" aria-label="Main Navigation">
            ${navItemsHtml}
          </nav>

          <!-- Header Actions -->
          <div class="header-actions">
            <a href="${siteConfig.telUrl}" class="header-phone-link" aria-label="Call ${siteConfig.phone}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>${siteConfig.phone}</span>
            </a>

            <a href="/contact/" class="btn btn-primary btn-sm header-estimate-btn">
              <span>Get Estimate</span>
              <span class="btn-icon-wrapper">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open mobile navigation menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Overlay & Container -->
    <div class="mobile-drawer-overlay" id="mobileDrawerOverlay"></div>
    <div class="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div class="mobile-drawer-header">
        <div class="site-logo">
          <div class="site-logo-icon" style="width: 34px; height: 34px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20V9.5z"/>
            </svg>
          </div>
          <span class="site-logo-title" style="font-size: 1.05rem;">${siteConfig.brandShortName}</span>
        </div>
        <button class="mobile-drawer-close" id="mobileDrawerClose" aria-label="Close navigation menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="mobile-drawer-content">
        ${mobileNavHtml}

        <div class="mobile-drawer-footer">
          <a href="${siteConfig.telUrl}" class="btn btn-outline" style="width: 100%;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Call ${siteConfig.phone}</span>
          </a>
          <a href="${siteConfig.whatsappUrl}" class="btn btn-whatsapp" style="width: 100%;" target="_blank" rel="noopener noreferrer">
            <span>WhatsApp Enquiry</span>
          </a>
          <a href="/contact/" class="btn btn-primary" style="width: 100%;">
            <span>Request Site Estimate</span>
          </a>
        </div>
      </div>
    </div>
  `;
}
