/**
 * Enquiry Form Component
 * Accessible lead generation form with WhatsApp handoff disclosure and validation.
 */

import { siteConfig } from "../config/site.js";
import { allServices } from "../data/services.js";

export function renderEnquiryForm(preselectedServiceTitle = "") {
  const serviceOptions = [
    "Complete Home Interiors",
    "Modular Kitchen",
    "Custom Furniture & Wardrobes",
    "TV Unit & Media Wall",
    "False Ceiling",
    "Flooring Installation",
    "PVC Wall Panels",
    "WPC Wall Panels",
    "Fluted Panels & Louvers",
    "UV Marble Sheets",
    "Staircase Railings",
    "Glass Railings",
    "Steel & Iron Railings",
    "CNC-Cut Railings",
    "Balcony Railings",
    "Main Gate Installation",
    "CNC-Cut Gates",
    "Steel & Iron Gates",
    "Sliding Gates",
    "Security Window Grills",
    "Exterior Wall Cladding",
    "ACP Facade Cladding",
    "Commercial Glass Partitions",
    "Aluminium Doors & Windows",
    "Office Interiors",
    "Shop & Showroom Interiors",
    "Clinic & Hospital Fit-Outs",
    "School & Institutional Interiors",
    "Multiple Services / Complete Project"
  ].map(s => {
    const isSelected = preselectedServiceTitle && s.toLowerCase().includes(preselectedServiceTitle.toLowerCase());
    return `<option value="${s}" ${isSelected ? 'selected' : ''}>${s}</option>`;
  }).join("");

  return `
    <div class="enquiry-form-card">
      <div style="margin-bottom: 24px;">
        <span class="section-eyebrow">Direct Studio Consultation</span>
        <h3 style="font-size: 1.5rem; margin-bottom: 8px;">Request a Project Consultation & Estimate</h3>
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0;">
          Share your project details below. Our team will review your requirements, discuss suitable materials, and coordinate site measurements in Ayodhya.
        </p>
      </div>

      <form class="whatsapp-enquiry-form" novalidate>
        <div class="form-grid">
          <!-- Full Name -->
          <div class="form-group">
            <label class="form-label" for="fullName">Full Name *</label>
            <input type="text" id="fullName" name="fullName" class="form-input" placeholder="e.g. Rahul Sharma" required autocomplete="name" />
          </div>

          <!-- Phone Number -->
          <div class="form-group">
            <label class="form-label" for="phone">Mobile / WhatsApp Number *</label>
            <input type="tel" id="phone" name="phone" class="form-input" placeholder="e.g. 95806 59559" required autocomplete="tel" />
          </div>

          <!-- Service Selection -->
          <div class="form-group">
            <label class="form-label" for="service">Service Interested In</label>
            <select id="service" name="service" class="form-select">
              ${serviceOptions}
            </select>
          </div>

          <!-- Location / Locality -->
          <div class="form-group">
            <label class="form-label" for="location">Project Location in Ayodhya</label>
            <input type="text" id="location" name="location" class="form-input" placeholder="e.g. Civil Lines, Deokali, Faizabad" />
          </div>

          <!-- Property Type -->
          <div class="form-group">
            <label class="form-label" for="propertyType">Property Type</label>
            <select id="propertyType" name="propertyType" class="form-select">
              <option value="Independent House / Villa / Kothi">Independent House / Villa / Kothi</option>
              <option value="Apartment / Flat (2BHK / 3BHK / 4BHK)">Apartment / Flat (2BHK / 3BHK / 4BHK)</option>
              <option value="Commercial Shop / Retail Showroom">Commercial Shop / Retail Showroom</option>
              <option value="Corporate Office / Commercial Complex">Corporate Office / Commercial Complex</option>
              <option value="Clinic / Hospital / School / Institutional">Clinic / Hospital / School / Institutional</option>
              <option value="Renovation Project">Renovation Project</option>
            </select>
          </div>

          <!-- Estimated Budget -->
          <div class="form-group">
            <label class="form-label" for="budget">Approximate Budget (Optional)</label>
            <select id="budget" name="budget" class="form-select">
              <option value="To be discussed upon site measurement">To be discussed upon site measurement</option>
              <option value="Under ₹1 Lakh (Single Room / Panel / Small Gate)">Under ₹1 Lakh (Single Room / Panel / Small Gate)</option>
              <option value="₹1 Lakh to ₹3 Lakhs">₹1 Lakh to ₹3 Lakhs</option>
              <option value="₹3 Lakhs to ₹7 Lakhs">₹3 Lakhs to ₹7 Lakhs</option>
              <option value="₹7 Lakhs to ₹15 Lakhs+ (Full Home / Commercial)">₹7 Lakhs to ₹15 Lakhs+ (Full Home / Commercial)</option>
            </select>
          </div>

          <!-- Project Requirements -->
          <div class="form-group full-width">
            <label class="form-label" for="requirements">Brief Project Requirements</label>
            <textarea id="requirements" name="requirements" class="form-textarea" rows="3" placeholder="Tell us about your room dimensions, preferred styles, materials, or timelines..."></textarea>
          </div>
        </div>

        <!-- WhatsApp Delivery Disclosure Notice -->
        <div class="form-disclosure">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <div>
            <strong>Transparent Process:</strong> Submitting this form prepares a formatted enquiry message and opens WhatsApp to transmit your request directly to <strong>${siteConfig.phone}</strong>. You can review and edit the message in WhatsApp before sending.
          </div>
        </div>

        <div class="form-status-notice" style="display: none; padding: 12px; border-radius: var(--radius-md); background-color: var(--accent-sage-light); color: var(--accent-sage-dark); margin-bottom: 16px;"></div>

        <button type="submit" class="btn btn-whatsapp" style="width: 100%; padding: 14px 28px; font-size: 1rem;">
          <span>Submit & Connect on WhatsApp</span>
          <span class="btn-icon-wrapper" style="background-color: rgba(255, 255, 255, 0.25);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </button>
      </form>
    </div>
  `;
}
