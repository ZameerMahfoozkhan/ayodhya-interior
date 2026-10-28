/**
 * Mobile Bottom Action Bar Component
 * Persistent, high-conversion action bar for mobile viewports: Call, WhatsApp, Get Estimate.
 */

import { siteConfig } from "../config/site.js";

export function renderMobileBar(customWhatsAppPrompt) {
  const whatsappUrl = customWhatsAppPrompt
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(customWhatsAppPrompt)}`
    : siteConfig.whatsappUrl;

  return `
    <aside class="mobile-bottom-bar" aria-label="Quick Actions">
      <div class="mobile-bottom-bar-inner">
        <!-- Call Button -->
        <a href="${siteConfig.telUrl}" class="mobile-bar-btn call-btn" aria-label="Call Studio at ${siteConfig.phone}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>Call</span>
        </a>

        <!-- WhatsApp Button -->
        <a href="${whatsappUrl}" class="mobile-bar-btn wa-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.676-.518-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.311 1.278.497 1.716.636.722.23 1.378.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.688A9.63 9.63 0 0 1 7.12 20.34l-.352-.21-3.666.96 0.978-3.574-.23-.367a9.645 9.645 0 1 1 8.192 4.54zm0-17.688c-4.442 0-8.055 3.613-8.055 8.055 0 1.42.37 2.808 1.07 4.026l-.68 2.483 2.546-.667a8.03 8.03 0 0 0 4.119 1.13c4.443 0 8.055-3.613 8.055-8.055S16.485 4 12.042 4z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        <!-- Get Estimate Button -->
        <a href="/contact/" class="mobile-bar-btn est-btn" aria-label="Get Project Estimate">
          <span>Get Estimate</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </aside>
  `;
}
