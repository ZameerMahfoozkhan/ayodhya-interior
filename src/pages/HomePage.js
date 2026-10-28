/**
 * HomePage Component
 * 13 Detailed Architectural Sections adhering strictly to Prompt Section 8:
 * 1. Header (in BaseLayout)
 * 2. Hero Section
 * 3. Service Category Overview (8 Categories)
 * 4. Popular Services Grid
 * 5. Dual Residential & Commercial Pathways
 * 6. Materials & Architectural Options Showcase
 * 7. Filterable Project Gallery
 * 8. Why Work with the Studio (Factual Advantages)
 * 9. How It Works (4-Step Visual Process)
 * 10. Ayodhya Service Area Section
 * 11. Homepage FAQ Accordion
 * 12. Final Call-to-Action
 * 13. Footer (in BaseLayout)
 */

import { siteConfig } from "../config/site.js";
import { allServices } from "../data/services.js";
import { projectsData } from "../data/projects.js";
import { renderFAQAccordion } from "../components/FAQAccordion.js";
import { renderEnquiryForm } from "../components/EnquiryForm.js";

export function renderHomePage() {
  // Select top popular services for Section 4
  const popularServiceSlugs = [
    "modular-kitchen-ayodhya",
    "pvc-wall-panels-ayodhya",
    "fluted-panels-louvers-ayodhya",
    "false-ceiling-ayodhya",
    "custom-furniture-ayodhya",
    "staircase-railings-ayodhya",
    "balcony-railings-ayodhya",
    "main-gate-installation-ayodhya",
    "cnc-cut-gates-ayodhya",
    "exterior-wall-cladding-ayodhya",
    "office-interior-ayodhya",
    "shop-showroom-interior-ayodhya"
  ];

  const popularServices = popularServiceSlugs
    .map(slug => allServices.find(s => s.slug === slug))
    .filter(Boolean);

  const popularCardsHtml = popularServices.map(service => `
    <div class="bezel-card service-card">
      <div class="bezel-card-inner">
        <div class="service-card-media">
          <img src="${service.heroImage}" alt="${service.h1}" loading="lazy" width="400" height="250" />
          <span class="service-card-badge">${service.category.toUpperCase()}</span>
        </div>
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.shortDesc}</p>
        <a href="/${service.slug}/" class="service-card-link">
          <span>Explore Details & Specs</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join("");

  // Homepage Specific FAQs
  const homeFaqs = [
    {
      question: "Which interior, exterior and metal fabrication services do you offer in Ayodhya?",
      answer: "We provide comprehensive interior, exterior, panel installation, custom modular furniture, glass solutions, gates, and railing solutions. This includes complete home interiors, modular kitchens, PVC and WPC wall panels, fluted louvers, UV marble sheets, false ceilings, SPC flooring, glass and SS staircase railings, laser-cut CNC gates, sliding gates, security grills, exterior wall cladding, ACP facades, and commercial office/shop fit-outs."
    },
    {
      question: "Can I enquire about multiple related services in a single project?",
      answer: "Yes, absolutely! One of our primary advantages is acting as a single coordinated point of contact. Rather than managing separate carpenters, metal fabricators, ceiling workers, and glass contractors whose schedules clash, we plan and execute all residential and commercial requirements under one cohesive project scope."
    },
    {
      question: "How can I get an initial estimate or consultation for my project?",
      answer: "You can request an estimate by calling us directly at +91 95806 59559, messaging our team on WhatsApp, or submitting the enquiry form on our website. Share your room dimensions, floor plan, or reference photos, and we will guide you regarding material options, ballpark costs, and schedule a site visit."
    },
    {
      question: "Can I request an on-site visit and physical measurement in Ayodhya?",
      answer: "Yes. For serious project enquiries within Ayodhya city, Faizabad, and immediate surrounding areas, our technical team conducts site visits to measure walls, inspect floor levels, audit electrical and plumbing provisions, and verify masonry conditions before finalizing quotations."
    },
    {
      question: "Are custom gate and railing designs available to match our home elevation?",
      answer: "Yes. Every main entrance gate and staircase railing is custom-fabricated to your exact architectural dimensions and aesthetic preferences. We offer computerized fiber laser CNC cutting, allowing you to choose geometric, traditional, or contemporary jali motifs."
    },
    {
      question: "Which geographical locations do you serve?",
      answer: "Ayodhya is our primary service priority, including Faizabad and surrounding urban localities. For larger turnkey projects and commercial fit-outs, we also consider select sites in neighboring Sultanpur, Gonda, and Lucknow upon consultation."
    }
  ];

  // Gallery cards
  const galleryCardsHtml = projectsData.slice(0, 6).map(proj => `
    <div class="bezel-card project-gallery-item" data-category="${proj.category}">
      <div class="bezel-card-inner">
        <div class="service-card-media" style="aspect-ratio: 16 / 11;">
          <img src="${proj.image}" alt="${proj.alt}" loading="lazy" width="400" height="275" />
          <span class="service-card-badge" style="color: var(--accent-walnut-dark);">${proj.tag}</span>
        </div>
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-sage-dark); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
          ${proj.propertyType} • ${proj.location}
        </div>
        <h3 style="font-size: 1.15rem; margin-bottom: 8px;">${proj.title}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 14px;">${proj.description}</p>
        <div style="font-size: 0.8rem; background-color: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-light); margin-bottom: 16px;">
          <strong>Materials:</strong> ${proj.materials}
        </div>
        <a href="/${proj.relatedSlug}/" class="service-card-link">
          <span>View Associated Service</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `).join("");

  return `
    <!-- SECTION 2: HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <span class="section-eyebrow">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
              Ayodhya & Faizabad • Comprehensive Solutions
            </span>
            <h1 class="hero-headline">
              Complete Interior, Exterior & Architectural Solutions in <span>Ayodhya</span>
            </h1>
            <p class="hero-description">
              From modular kitchens and decorative wall panels to custom gates, glass railings, and commercial interiors, explore tailored solutions for your home or business in Ayodhya.
            </p>
            <div class="hero-actions">
              <a href="/contact/" class="btn btn-primary">
                <span>Get a Project Estimate</span>
                <span class="btn-icon-wrapper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </a>
              <a href="/services/" class="btn btn-glass">
                <span>Explore All Services</span>
              </a>
              <a href="${siteConfig.whatsappUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.676-.518-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.311 1.278.497 1.716.636.722.23 1.378.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.688A9.63 9.63 0 0 1 7.12 20.34l-.352-.21-3.666.96 0.978-3.574-.23-.367a9.645 9.645 0 1 1 8.192 4.54zm0-17.688c-4.442 0-8.055 3.613-8.055 8.055 0 1.42.37 2.808 1.07 4.026l-.68 2.483 2.546-.667a8.03 8.03 0 0 0 4.119 1.13c4.443 0 8.055-3.613 8.055-8.055S16.485 4 12.042 4z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            <!-- Trust Highlights (Horizontal scrolling strip on mobile) -->
            <div class="hero-trust-strip" aria-label="Key Studio Advantages">
              <div class="hero-trust-card">
                <div class="hero-trust-card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div class="hero-trust-card-text">
                  <strong>Single Coordinated Contact</strong>
                  <span>One dedicated studio manager</span>
                </div>
              </div>
              <div class="hero-trust-card">
                <div class="hero-trust-card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div class="hero-trust-card-text">
                  <strong>Certified Safety Materials</strong>
                  <span>IS 710 Marine Ply & SS 304</span>
                </div>
              </div>
              <div class="hero-trust-card">
                <div class="hero-trust-card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div class="hero-trust-card-text">
                  <strong>Local Ayodhya Team</strong>
                  <span>Rapid site measurement</span>
                </div>
              </div>
              <div class="hero-trust-card">
                <div class="hero-trust-card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div class="hero-trust-card-text">
                  <strong>28 In-House Disciplines</strong>
                  <span>Kitchens, panels, gates & glass</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-right-col">
            <div class="hero-glass-badge">
              <div class="hero-badge-tag">Turnkey Studio</div>
              <div class="hero-badge-title">Ayodhya & Faizabad</div>
              <div class="hero-badge-list">
                <span>✓ 28 In-House Engineering Disciplines</span>
                <span>✓ Certified IS 710 Plywood & SS 304 Steel</span>
                <span>✓ Direct Drawing & Site Measurement Estimates</span>
              </div>
              <a href="${siteConfig.whatsappUrl}" class="hero-wa-pill" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.676-.518-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.311 1.278.497 1.716.636.722.23 1.378.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.688A9.63 9.63 0 0 1 7.12 20.34l-.352-.21-3.666.96 0.978-3.574-.23-.367a9.645 9.645 0 1 1 8.192 4.54zm0-17.688c-4.442 0-8.055 3.613-8.055 8.055 0 1.42.37 2.808 1.07 4.026l-.68 2.483 2.546-.667a8.03 8.03 0 0 0 4.119 1.13c4.443 0 8.055-3.613 8.055-8.055S16.485 4 12.042 4z"/>
                </svg>
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: SERVICE CATEGORY OVERVIEW (8 Attractive Cards) -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Comprehensive Expertise</span>
          <h2 class="section-title">Explore Our Service Categories</h2>
          <p class="section-subtitle">
            Whether upgrading a single kitchen, installing decorative damp-proof wall panels, or completing a turnkey commercial building, explore our specialized disciplines.
          </p>
        </div>

        <div class="category-cards-grid">
          <!-- 1. Home Interiors -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage-dark)" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Home Interiors</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">Turnkey living room, bedroom, TV consoles, ceilings, and modular joinery.</p>
              <a href="/home-interiors-ayodhya/" class="service-card-link">Explore Interiors →</a>
            </div>
          </div>

          <!-- 2. Modular Kitchens -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--accent-walnut-light); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Modular Kitchens</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">IS 710 BWP marine ply, tandem drawers, corner storage & modern chimneys.</p>
              <a href="/modular-kitchen-ayodhya/" class="service-card-link">Explore Kitchens →</a>
            </div>
          </div>

          <!-- 3. Decorative Panels -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage-dark)" stroke-width="2"><rect x="3" y="3" width="7" height="18"/><rect x="14" y="3" width="7" height="18"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Decorative Panels</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">PVC, WPC fluted louvers, UV marble sheets, and 3D textured feature walls.</p>
              <a href="/pvc-wall-panels-ayodhya/" class="service-card-link">Explore Panels →</a>
            </div>
          </div>

          <!-- 4. Staircase & Balcony Railings -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--accent-walnut-light); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2"><path d="M6 20h12M6 20l12-14M6 4h12"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Staircase Railings</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">12mm safety glass, SS 304 stainless steel, and precision CNC laser balustrades.</p>
              <a href="/staircase-railings-ayodhya/" class="service-card-link">Explore Railings →</a>
            </div>
          </div>

          <!-- 5. Main Gates & Metalwork -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage-dark)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Main Gates</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">Heavy-gauge swing & sliding gates, CNC laser jalis & security grills.</p>
              <a href="/main-gate-installation-ayodhya/" class="service-card-link">Explore Gates →</a>
            </div>
          </div>

          <!-- 6. Exterior Facades -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--accent-walnut-light); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2"><path d="M4 4h16v16H4zM4 12h16M12 4v16"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Exterior Facades</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">Exterior WPC cladding, ACP commercial panels, and rainscreen systems.</p>
              <a href="/exterior-wall-cladding-ayodhya/" class="service-card-link">Explore Facades →</a>
            </div>
          </div>

          <!-- 7. Glass & Aluminium -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage-dark)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15h18M15 3v18"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Glass & Aluminium</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">Acoustic glass partitions, sliding windows, and storefront glazing.</p>
              <a href="/glass-partitions-ayodhya/" class="service-card-link">Explore Glazing →</a>
            </div>
          </div>

          <!-- 8. Commercial Fit-Outs -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--accent-walnut-light); display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 6px;">Commercial Fit-Outs</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">Offices, retail showrooms, clinics, and educational institution interiors.</p>
              <a href="/office-interior-ayodhya/" class="service-card-link">Explore Commercial →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: POPULAR SERVICES IN AYODHYA -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Priority Solutions</span>
          <h2 class="section-title">Popular Services for Ayodhya Properties</h2>
          <p class="section-subtitle">
            Our most frequently requested residential and commercial architectural installations across Ayodhya and Faizabad.
          </p>
        </div>

        <div class="services-grid">
          ${popularCardsHtml}
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <a href="/services/" class="btn btn-outline" style="padding: 14px 28px;">
            <span>View Complete 28-Service Directory</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 5: DUAL RESIDENTIAL & COMMERCIAL PATHWAYS -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Tailored Approaches</span>
          <h2 class="section-title">Two Dedicated Execution Pathways</h2>
          <p class="section-subtitle">
            Residential living spaces and commercial environments have vastly different priorities. Select the pathway that fits your project.
          </p>
        </div>

        <div class="pathways-grid">
          <!-- Residential Pathway -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <span class="section-eyebrow" style="align-self: flex-start;">Residential Pathway</span>
              <h3 style="font-size: 1.6rem; margin-bottom: 12px;">Homes, Flats & Villas</h3>
              <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
                Designed around family living, daily cooking habits, personalized storage maximization, and warm aesthetics that make your house feel like a sanctuary.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Modular Kitchens with BWP Marine Plywood</span>
                </li>
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Damp-Proof PVC & WPC Wall Paneling</span>
                </li>
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Custom Wardrobes, Bed Consoles & TV Backdrops</span>
                </li>
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Staircase Glass Railings & Driveway Main Gates</span>
                </li>
              </ul>
              <a href="/home-interiors-ayodhya/" class="btn btn-primary" style="margin-top: auto;">
                <span>Explore Residential Solutions</span>
                <span class="btn-icon-wrapper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </a>
            </div>
          </div>

          <!-- Commercial Pathway -->
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <span class="section-eyebrow" style="align-self: flex-start; background-color: var(--accent-walnut-light); color: var(--accent-walnut-dark); border-color: rgba(155, 121, 91, 0.2);">Commercial Pathway</span>
              <h3 style="font-size: 1.6rem; margin-bottom: 12px;">Offices, Retail & Institutions</h3>
              <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
                Engineered for heavy foot traffic, high-durability surfaces, quick commercial execution to minimize rental downtime, and an impressive corporate brand image.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Modular Workstations & Wire-Managed Desks</span>
                </li>
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>12mm Acoustic Glass Office Cabins & Dividers</span>
                </li>
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Retail Display Shelving, Showcases & Billing Counters</span>
                </li>
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>ACP Commercial Facades & Storefront Glazing</span>
                </li>
              </ul>
              <a href="/office-interior-ayodhya/" class="btn btn-secondary" style="margin-top: auto;">
                <span>Explore Commercial Solutions</span>
                <span class="btn-icon-wrapper">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: MATERIALS & DESIGN OPTIONS SHOWCASE -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Material Integrity</span>
          <h2 class="section-title">Engineered Materials & Design Families</h2>
          <p class="section-subtitle">
            We prioritize transparent material specifications. Here is how our primary material families compare in application and durability.
          </p>
        </div>

        <div class="why-choose-grid">
          <!-- Mat 1: PVC vs WPC -->
          <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px;">
            <h3 style="font-size: 1.15rem; margin-bottom: 8px;">PVC & WPC Composites</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px;">
              Hollow-core PVC panels for budget damp-proofing, and high-density WPC louvers for luxury tactile timber aesthetics without termite vulnerability.
            </p>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-sage-dark); background-color: var(--accent-sage-light); padding: 4px 10px; border-radius: 99px;">
              100% Termite & Rot Immune
            </span>
          </div>

          <!-- Mat 2: Fluted Louvers -->
          <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px;">
            <h3 style="font-size: 1.15rem; margin-bottom: 8px;">Fluted Panels & Louvers</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px;">
              Vertical ribbed slats in charcoal composite and composite woodgrains that add 3D shadow lines, optical height, and ambient cove illumination.
            </p>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-walnut); background-color: var(--accent-walnut-light); padding: 4px 10px; border-radius: 99px;">
              Architectural 3D Texture
            </span>
          </div>

          <!-- Mat 3: UV Marble -->
          <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px;">
            <h3 style="font-size: 1.15rem; margin-bottom: 8px;">UV Marble Sheets</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px;">
              Lightweight 3mm composite sheets with high-gloss UV lacquer delivering the visual elegance of Statuario and Marquina marble at zero stone slab weight.
            </p>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-sage-dark); background-color: var(--accent-sage-light); padding: 4px 10px; border-radius: 99px;">
              Mirror-Gloss Decorative
            </span>
          </div>

          <!-- Mat 4: SS 304 & Structural Steel -->
          <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px;">
            <h3 style="font-size: 1.15rem; margin-bottom: 8px;">SS 304 & Structural Steel</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 12px;">
              Certified grade 304 stainless steel with nickel-chromium alloying for rust resistance, and heavy-gauge structural mild steel with industrial powder coating.
            </p>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-walnut); background-color: var(--accent-walnut-light); padding: 4px 10px; border-radius: 99px;">
              Certified Fall Protection
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: PROJECT & DESIGN INSPIRATION GALLERY -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Design Portfolio</span>
          <h2 class="section-title">Design Concepts & Project Inspiration</h2>
          <p class="section-subtitle">
            Explore execution concepts across residential, wall paneling, railings, gates, and commercial spaces. Real project case studies are continually added.
          </p>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar">
          <button class="filter-btn active" data-filter="all">All Disciplines</button>
          <button class="filter-btn" data-filter="residential">Residential</button>
          <button class="filter-btn" data-filter="panels">Wall Panels</button>
          <button class="filter-btn" data-filter="railings">Railings</button>
          <button class="filter-btn" data-filter="gates">Gates</button>
          <button class="filter-btn" data-filter="commercial">Commercial</button>
        </div>

        <div class="services-grid">
          ${galleryCardsHtml}
        </div>

        <div style="text-align: center; margin-top: 40px;">
          <a href="/projects/" class="btn btn-outline">
            <span>Explore Complete Gallery</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 8: WHY WORK WITH THE STUDIO (Factual Advantages) -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">The Studio Advantage</span>
          <h2 class="section-title">Why Property Owners Work With Us</h2>
          <p class="section-subtitle">
            We focus on transparent material grades, single-source accountability, and disciplined execution without exaggerated claims.
          </p>
        </div>

        <div class="materials-features-grid">
          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 50%; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage-dark)" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 8px;">Single Point of Accountability</h3>
              <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                Eliminates chaotic coordination between independent carpenters, glass glazers, ceiling teams, and gate fabricators. One contact manages the entire execution.
              </p>
            </div>
          </div>

          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 50%; background-color: var(--accent-walnut-light); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 8px;">Transparent Material Specifications</h3>
              <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                Every quotation explicitly defines sheet thickness, core material (IS 710 BWP, HDHMR, SS 304), hardware brands, and powder-coating processes with zero hidden substitutions.
              </p>
            </div>
          </div>

          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 50%; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sage-dark)" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 8px;">On-Site Measurement in Ayodhya</h3>
              <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                Our technical personnel visit your project site in Ayodhya to inspect walls, floor levels, masonry plumb, and take laser measurements before fabrication starts.
              </p>
            </div>
          </div>

          <div class="bezel-card">
            <div class="bezel-card-inner">
              <div style="width: 44px; height: 44px; border-radius: 50%; background-color: var(--accent-walnut-light); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-walnut)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 8px;">Tailored Design Flexibility</h3>
              <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                Whether you need a single 10-foot gate or a complete 3BHK turnkey interior, we treat every project with customized design attention and rigorous craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: HOW IT WORKS (4-Step Visual Process) -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Structured Delivery</span>
          <h2 class="section-title">How Your Project Progresses</h2>
          <p class="section-subtitle">
            A clear, transparent four-step execution process from initial enquiry to final on-site installation.
          </p>
        </div>

        <div class="process-grid">
          <!-- Step 1 -->
          <div class="bezel-card process-card">
            <div class="bezel-card-inner">
              <div class="process-number">01</div>
              <h3 class="process-title">Share Requirements</h3>
              <p class="process-desc">
                Contact us via phone or WhatsApp with your floor plan, room dimensions, reference photos, or specific service requirements.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="bezel-card process-card">
            <div class="bezel-card-inner">
              <div class="process-number">02</div>
              <h3 class="process-title">Site Measurement</h3>
              <p class="process-desc">
                Our technical team conducts a laser-assisted site survey in Ayodhya to evaluate wall plumb, structural substrates, and civil clearances.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="bezel-card process-card">
            <div class="bezel-card-inner">
              <div class="process-number">03</div>
              <h3 class="process-title">Material & Quote Sign-Off</h3>
              <p class="process-desc">
                Review 2D/3D layouts, sample finishes (laminates, louvers, metals), and an itemized quotation specifying material grades and hardware.
              </p>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="bezel-card process-card">
            <div class="bezel-card-inner">
              <div class="process-number">04</div>
              <h3 class="process-title">Fabrication & Handover</h3>
              <p class="process-desc">
                Off-site precision machine cutting and on-site assembly, followed by hardware tuning, cleaning, and a final walkthrough handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 10: SERVICE AREA (Ayodhya & Region) -->
    <section class="section">
      <div class="container">
        <div style="background-color: var(--card-bg); border: 1px solid var(--border-light); border-radius: var(--radius-xl); padding: var(--space-2xl); box-shadow: var(--shadow-card);">
          <div class="home-service-area-grid">
            <div>
              <span class="section-eyebrow">Local Commitment</span>
              <h2 style="font-size: 2rem; margin-bottom: 14px;">Serving Homeowners & Businesses Across Ayodhya</h2>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">
                Ayodhya is undergoing an unprecedented architectural transformation, with new residential colonies, commercial shopping hubs, hotels, and family homes being constructed. We are proud to serve clients across Ayodhya city, Faizabad twin city area, Civil Lines, Deokali, Fatehganj, Naya Ghat Road, and Kaushalpuri.
              </p>
              <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">
                For larger residential and commercial projects, our team also provides technical consultation and execution in neighboring districts of Uttar Pradesh upon request.
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                <span style="font-size: 0.85rem; font-weight: 600; padding: 6px 14px; background-color: var(--bg-primary); border: 1px solid var(--border-light); border-radius: 99px;">Civil Lines</span>
                <span style="font-size: 0.85rem; font-weight: 600; padding: 6px 14px; background-color: var(--bg-primary); border: 1px solid var(--border-light); border-radius: 99px;">Deokali</span>
                <span style="font-size: 0.85rem; font-weight: 600; padding: 6px 14px; background-color: var(--bg-primary); border: 1px solid var(--border-light); border-radius: 99px;">Faizabad Cantt</span>
                <span style="font-size: 0.85rem; font-weight: 600; padding: 6px 14px; background-color: var(--bg-primary); border: 1px solid var(--border-light); border-radius: 99px;">Fatehganj</span>
                <span style="font-size: 0.85rem; font-weight: 600; padding: 6px 14px; background-color: var(--bg-primary); border: 1px solid var(--border-light); border-radius: 99px;">Rikabganj</span>
                <span style="font-size: 0.85rem; font-weight: 600; padding: 6px 14px; background-color: var(--bg-primary); border: 1px solid var(--border-light); border-radius: 99px;">Naya Ghat</span>
              </div>
            </div>

            <div style="background-color: var(--bg-primary); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; text-align: center;">
              <h3 style="font-size: 1.25rem; margin-bottom: 8px;">Direct Studio Contact</h3>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 20px;">
                Speak with our project coordinators regarding your site location in Ayodhya.
              </p>
              <a href="${siteConfig.telUrl}" class="btn btn-primary" style="width: 100%; margin-bottom: 10px;">
                <span>Call ${siteConfig.phone}</span>
              </a>
              <a href="${siteConfig.whatsappUrl}" class="btn btn-whatsapp" style="width: 100%;" target="_blank" rel="noopener noreferrer">
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 11: HOMEPAGE FAQS -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Clear Answers</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Helpful answers to common questions about our interior, exterior, gate, and railing services.
          </p>
        </div>

        ${renderFAQAccordion(homeFaqs)}
      </div>
    </section>

    <!-- SECTION 12: FINAL CALL TO ACTION & ENQUIRY FORM -->
    <section class="section">
      <div class="container">
        <div class="service-final-cta-grid">
          <div class="service-final-cta-info">
            <span class="section-eyebrow">Start Your Project</span>
            <h2 style="font-size: 2.2rem; margin-bottom: 16px;">Planning an Interior, Exterior or Renovation Project?</h2>
            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem; margin-bottom: 24px;">
              Share your requirements and discuss suitable materials, designs, and installation options with our team in Ayodhya.
            </p>
            <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background-color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; color: var(--accent-sage-dark);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <span style="display: block; font-size: 0.8rem; color: var(--text-secondary);">Direct Telephone</span>
                  <a href="${siteConfig.telUrl}" style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${siteConfig.phone}</a>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background-color: rgba(37, 211, 102, 0.15); display: flex; align-items: center; justify-content: center; color: var(--whatsapp-dark);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.676-.518-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.311 1.278.497 1.716.636.722.23 1.378.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.688A9.63 9.63 0 0 1 7.12 20.34l-.352-.21-3.666.96 0.978-3.574-.23-.367a9.645 9.645 0 1 1 8.192 4.54zm0-17.688c-4.442 0-8.055 3.613-8.055 8.055 0 1.42.37 2.808 1.07 4.026l-.68 2.483 2.546-.667a8.03 8.03 0 0 0 4.119 1.13c4.443 0 8.055-3.613 8.055-8.055S16.485 4 12.042 4z"/>
                  </svg>
                </div>
                <div>
                  <span style="display: block; font-size: 0.8rem; color: var(--text-secondary);">WhatsApp Support</span>
                  <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${siteConfig.phone}</a>
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="${siteConfig.telUrl}" class="btn btn-primary">
                <span>Call Now</span>
              </a>
              <a href="${siteConfig.whatsappUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <span>WhatsApp the Team</span>
              </a>
            </div>
          </div>

          <div class="service-final-cta-form-col">
            ${renderEnquiryForm()}
          </div>
        </div>
      </div>
    </section>
  `;
}
