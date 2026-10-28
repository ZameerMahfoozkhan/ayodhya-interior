/**
 * PrivacyPolicyPage Component
 * Honest, clear privacy policy appropriate to the client-side WhatsApp submission architecture.
 */

import { siteConfig } from "../config/site.js";
import { renderBreadcrumb } from "../components/Breadcrumb.js";

export function renderPrivacyPolicyPage() {
  const breadcrumbHtml = renderBreadcrumb([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy/" }
  ]);

  return `
    <section class="page-hero">
      <div class="container">
        ${breadcrumbHtml}
        <div class="page-hero-header">
          <span class="section-eyebrow">Data Transparency</span>
          <h1 class="section-title">Studio <span class="highlight-gold">Privacy Policy</span></h1>
          <p class="section-subtitle">
            Transparent disclosure on communication handling and data privacy for Ayodhya Interiors & Exterior Studio.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-xl); padding: var(--space-2xl); box-shadow: var(--shadow-card);">
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 24px;">
            Last Updated: January 2026
          </p>

          <div style="display: flex; flex-direction: column; gap: 24px; font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
            <div>
              <h2 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 8px;">1. Overview</h2>
              <p>
                <strong>${siteConfig.brandName}</strong> ("we," "our," or "the studio") is committed to respecting your privacy. This Privacy Policy transparently explains how information is handled when you visit our website or communicate with us regarding interior, exterior, gate, and railing services in Ayodhya, Uttar Pradesh.
              </p>
            </div>

            <div>
              <h2 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 8px;">2. Direct WhatsApp Communication Architecture</h2>
              <p>
                Our website is designed as a direct-to-WhatsApp communication channel. When you fill out an estimate or consultation form on this website:
              </p>
              <ul style="list-style: disc; margin-left: 20px; display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
                <li>The form validates your inputs (name, phone number, location, interested service) directly inside your web browser.</li>
                <li>Your inputs are formatted into an encoded text message and redirected to our studio's verified WhatsApp business line (<strong>${siteConfig.phone}</strong>).</li>
                <li><strong>No personal data is secretly stored in an external third-party marketing database or sold to telemarketers.</strong> You maintain complete control over the message and must press "Send" in your WhatsApp application to deliver your enquiry.</li>
              </ul>
            </div>

            <div>
              <h2 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 8px;">3. Information We Collect During Consultations</h2>
              <p>
                When you contact us via telephone or WhatsApp, we receive only the information you voluntarily provide, such as your name, mobile number, property location in Ayodhya, and project requirements. This information is utilized strictly to:
              </p>
              <ul style="list-style: disc; margin-left: 20px; display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
                <li>Provide accurate project estimates and material specifications.</li>
                <li>Coordinate on-site measurements and technical surveys in Ayodhya.</li>
                <li>Communicate regarding ongoing fabrication, installation schedules, and handovers.</li>
              </ul>
            </div>

            <div>
              <h2 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 8px;">4. Analytics & Server Logs</h2>
              <p>
                Like most websites, our web hosting provider may record non-personally identifiable technical information such as your browser type, device operating system, referring URL, and page timestamps to maintain site security, speed, and uptime. We do not use intrusive cross-site tracking cookies.
              </p>
            </div>

            <div>
              <h2 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 8px;">5. Contacting the Studio</h2>
              <p>
                If you have questions about our data practices or wish to update or delete your contact details from our active project records, you can contact our team directly:
              </p>
              <p style="margin-top: 8px;">
                <strong>${siteConfig.brandName}</strong><br>
                Primary Location: ${siteConfig.primaryLocation}<br>
                Telephone / WhatsApp: <a href="${siteConfig.telUrl}">${siteConfig.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
