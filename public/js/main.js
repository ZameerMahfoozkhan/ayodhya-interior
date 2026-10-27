/**
 * AYODHYA INTERIORS & EXTERIOR STUDIO
 * Client-Side Progressive Enhancement & Interaction Controller
 * - Mobile Navigation Drawer
 * - FAQ Accordion
 * - Project Filter System
 * - Interactive WhatsApp Enquiry Generator & Form Validation
 * - Telemetry & Analytics Event Stubs
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileDrawer();
  initFaqAccordion();
  initProjectFilters();
  initEnquiryForms();
});

/**
 * Mobile Navigation Drawer Controller
 */
function initMobileDrawer() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("mobileDrawerClose");
  const overlay = document.getElementById("mobileDrawerOverlay");
  const drawer = document.getElementById("mobileDrawer");

  if (!menuBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    menuBtn.setAttribute("aria-expanded", "false");
  }

  menuBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

/**
 * Accessible FAQ Accordion Controller
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    const answer = item.querySelector(".faq-answer");

    if (!btn || !answer) return;

    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other FAQs in the same container for clean reading
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".faq-question-btn");
          const otherAns = otherItem.querySelector(".faq-answer");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = null;
      } else {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/**
 * Project Gallery Filter System
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-gallery-item");

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-filter");

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transition = "opacity 200ms ease";
          }, 10);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/**
 * Interactive WhatsApp Enquiry Form Controller
 * Validates fields and generates an encoded, structured WhatsApp message.
 * Directly informs the user that WhatsApp will open to transmit the enquiry.
 */
function initEnquiryForms() {
  const forms = document.querySelectorAll(".whatsapp-enquiry-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = form.querySelector("[name='fullName']");
      const phoneInput = form.querySelector("[name='phone']");
      const serviceSelect = form.querySelector("[name='service']");
      const locationInput = form.querySelector("[name='location']");
      const propertySelect = form.querySelector("[name='propertyType']");
      const requirementsText = form.querySelector("[name='requirements']");
      const budgetInput = form.querySelector("[name='budget']");

      const fullName = nameInput ? nameInput.value.trim() : "";
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const service = serviceSelect ? serviceSelect.value : "General Enquiry";
      const location = locationInput ? locationInput.value.trim() : "Ayodhya";
      const propertyType = propertySelect ? propertySelect.value : "Residential";
      const requirements = requirementsText ? requirementsText.value.trim() : "Interested in project consultation";
      const budget = budgetInput && budgetInput.value.trim() ? budgetInput.value.trim() : "To be discussed";

      // Basic Validation
      if (!fullName) {
        alert("Please enter your full name.");
        if (nameInput) nameInput.focus();
        return;
      }

      if (!phone || phone.replace(/\D/g, "").length < 10) {
        alert("Please enter a valid 10-digit mobile number.");
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Format clean, structured WhatsApp message
      const message = 
`*NEW PROJECT ENQUIRY (Website)*
--------------------------------
👤 *Name:* ${fullName}
📞 *Phone:* ${phone}
🛠️ *Service Interested:* ${service}
📍 *Location / Area:* ${location}
🏠 *Property Type:* ${propertyType}
💰 *Estimated Budget:* ${budget}
📝 *Project Requirements:*
${requirements}
--------------------------------
_Sent via Ayodhya Interiors & Exterior Studio Website_`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919580659559?text=${encodedMessage}`;

      // Show user feedback modal or alert informing of WhatsApp handoff
      const notice = form.querySelector(".form-status-notice");
      if (notice) {
        notice.style.display = "block";
        notice.innerHTML = `<strong>Preparing your enquiry...</strong> Opening WhatsApp to send your details directly to the team.`;
      }

      setTimeout(() => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }, 400);
    });
  });
}
