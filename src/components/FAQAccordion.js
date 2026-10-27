/**
 * FAQ Accordion Component
 * Interactive accessible accordion with Schema.org FAQPage JSON-LD.
 */

export function renderFAQAccordion(faqs = [], sectionTitle = "Frequently Asked Questions") {
  if (!faqs || faqs.length === 0) return "";

  const itemsHtml = faqs.map((faq, index) => {
    return `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <button class="faq-question-btn" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
          <span>${faq.question}</span>
          <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="faq-answer" style="${index === 0 ? 'max-height: 500px;' : ''}">
          <div class="faq-answer-inner">
            <p>${faq.answer}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="faq-accordion-section">
      <div class="faq-list">
        ${itemsHtml}
      </div>
    </div>
  `;
}
