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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z"/>
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
