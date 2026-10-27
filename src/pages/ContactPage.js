/**
 * ContactPage Component
 * Dedicated contact, consultation, and WhatsApp enquiry page.
 */

import { siteConfig } from "../config/site.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";
import { renderEnquiryForm } from "../components/EnquiryForm.js";

export function renderContactPage() {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Contact & Consultation", url: "/contact/" }
  ]);

  return `
    <section class="page-hero">
      <div class="container">
        ${breadcrumbHtml}
        <div class="page-hero-header">
          <span class="section-eyebrow">Direct Contact & Consultation</span>
          <h1 class="section-title">Contact Our Ayodhya Studio</h1>
          <p class="section-subtitle">
            Speak directly with our project coordinators regarding residential interiors, decorative wall panels, custom gates, railings, and commercial fit-outs.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 48px; align-items: flex-start;">
          <!-- Left Column: Contact Methods & Preparation Advice -->
          <div>
            <div class="bezel-card" style="margin-bottom: 24px;">
              <div class="bezel-card-inner">
                <h3 style="font-size: 1.3rem; margin-bottom: 16px;">Direct Contact Details</h3>
                
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <!-- Phone -->
                  <div style="display: flex; align-items: flex-start; gap: 14px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; color: var(--accent-sage-dark); flex-shrink: 0;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <span style="display: block; font-size: 0.82rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Telephone / Call</span>
                      <a href="${siteConfig.telUrl}" style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">${siteConfig.phone}</a>
                      <span style="display: block; font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">Monday to Saturday • 9:30 AM to 7:30 PM</span>
                    </div>
                  </div>

                  <!-- WhatsApp -->
                  <div style="display: flex; align-items: flex-start; gap: 14px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background-color: rgba(37, 211, 102, 0.15); display: flex; align-items: center; justify-content: center; color: var(--whatsapp-dark); flex-shrink: 0;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z"/>
                      </svg>
                    </div>
                    <div>
                      <span style="display: block; font-size: 0.82rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">WhatsApp Enquiries</span>
                      <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">${siteConfig.phone}</a>
                      <span style="display: block; font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">Share reference photos, PDFs, and drawings anytime</span>
                    </div>
                  </div>

                  <!-- Location -->
                  <div style="display: flex; align-items: flex-start; gap: 14px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--accent-walnut-light); display: flex; align-items: center; justify-content: center; color: var(--accent-walnut); flex-shrink: 0;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <span style="display: block; font-size: 0.82rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Primary Service Area</span>
                      <span style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${siteConfig.primaryLocation}</span>
                      <span style="display: block; font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">Serving all Ayodhya and Faizabad urban localities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Preparation Checklist -->
            <div class="bezel-card">
              <div class="bezel-card-inner">
                <h3 style="font-size: 1.2rem; margin-bottom: 12px;">What to Prepare Before Contacting</h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">
                  To receive the fastest and most accurate initial consultation, having the following details ready is helpful:
                </p>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.88rem; color: var(--text-secondary);">
                  <li style="display: flex; gap: 8px;">
                    <span style="color: var(--accent-sage-dark); font-weight: 700;">✓</span>
                    <span>Rough room, wall, or driveway opening measurements</span>
                  </li>
                  <li style="display: flex; gap: 8px;">
                    <span style="color: var(--accent-sage-dark); font-weight: 700;">✓</span>
                    <span>A few clear photos or a short video of the existing space or wall</span>
                  </li>
                  <li style="display: flex; gap: 8px;">
                    <span style="color: var(--accent-sage-dark); font-weight: 700;">✓</span>
                    <span>Reference design images showing finishes or colors you admire</span>
                  </li>
                  <li style="display: flex; gap: 8px;">
                    <span style="color: var(--accent-sage-dark); font-weight: 700;">✓</span>
                    <span>Your target execution timeline or housewarming date</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive WhatsApp Enquiry Form -->
          <div>
            ${renderEnquiryForm()}
          </div>
        </div>
      </div>
    </section>
  `;
}
