/**
 * Category Definitions & Metadata Registry
 * 
 * Defines the 6 core architectural disciplines for Ayodhya Interiors & Exterior Studio:
 * 1. Home Interior (residential)
 * 2. Wall Panels & Finishes (panels)
 * 3. Gates & Fabrication (gates)
 * 4. Railing & Glasses (railings)
 * 5. Exterior Work (exterior)
 * 6. Commercial Work (commercial)
 */

import { residentialServices } from "./services/residential.js";
import { panelServices } from "./services/panels.js";
import { railingServices } from "./services/railings.js";
import { gateServices } from "./services/gates.js";
import { exteriorServices } from "./services/exterior.js";
import { commercialServices } from "./services/commercial.js";

export const categoriesData = [
  {
    id: "residential",
    slug: "home-interior",
    url: "/services/home-interior/",
    name: "Home Interior",
    tagline: "Turnkey Residential Interiors, Modular Kitchens & Custom Woodwork",
    h1: "Home Interior Design & <span class=\"highlight-gold\">Turnkey Execution in Ayodhya</span>",
    metaTitle: "Home Interior Designers in Ayodhya | Modular Kitchens & Turnkey Interiors",
    metaDescription: "Turnkey home interior design and execution in Ayodhya. Modular kitchens, custom wardrobes, TV consoles, false ceilings, and flooring. Call +91 95806 59559.",
    heroBadge: "Turnkey Residential Interiors • Ayodhya",
    heroImage: "/images/services/home-interiors.jpg",
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    shortDesc: "End-to-end living room, bedroom, modular kitchen, wardrobe, false ceiling, and bespoke joinery solutions.",
    intro: "Transforming an empty flat, independent house, or newly built villa in Ayodhya into a functional, beautiful living space requires thoughtful spatial planning and disciplined coordination. Rather than hiring separate carpenters, painters, and ceiling contractors whose work clashing, our turnkey home interior service provides a unified, single-point execution model. Every layout is custom engineered to your architectural drawings and family lifestyle using certified IS 710 BWP marine plywood and premium soft-close hardware.",
    serviceSlugs: [
      "home-interiors-ayodhya",
      "modular-kitchen-ayodhya",
      "custom-furniture-ayodhya",
      "tv-unit-design-ayodhya",
      "false-ceiling-ayodhya",
      "flooring-ayodhya"
    ],
    highlights: [
      "Certified IS 710 Boiling Water Proof (BWP) Marine Plywood",
      "Hafele, Hettich & Ebco Soft-Close Drawer Systems & Hinges",
      "3D Photorealistic Pre-Visualizations with Site Verification",
      "10-Year Structural Anti-Borer & Anti-Termite Warranty"
    ],
    faqs: [
      {
        question: "What is included in a complete home interior project in Ayodhya?",
        answer: "Our turnkey residential service covers space planning, modular kitchen design and fabrication, custom wardrobes, TV feature walls, false ceilings with ambient cove LED lighting, electrical rewiring, and flooring solutions."
      },
      {
        question: "How long does a full home interior take to complete?",
        answer: "A standard 2BHK or 3BHK flat in Ayodhya typically takes 4 to 6 weeks from 3D design approval. Carcasses are precision pre-cut in our workshop and assembled on-site to minimize dust and disruption."
      },
      {
        question: "What plywood grade do you use for kitchens and wet areas?",
        answer: "We strictly utilize certified IS 710 BWP (Boiling Water Proof) marine-grade plywood for kitchen under-sink units, base cabinets, and bathroom vanities to ensure total resistance against steam and water exposure."
      },
      {
        question: "Do you provide on-site measurements and 3D designs before starting?",
        answer: "Yes. Our senior project coordinator conducts physical measurements across all rooms in Ayodhya or Faizabad, followed by 3D layout options and detailed itemized estimates before fabrication begins."
      }
    ]
  },
  {
    id: "panels",
    slug: "wall-panels-finishes",
    url: "/services/wall-panels-finishes/",
    name: "Wall Panels & Finishes",
    tagline: "Waterproof PVC Wall Panels, WPC Fluted Louvers & UV Marble Sheets",
    h1: "Decorative Wall Panels & <span class=\"highlight-gold\">Surface Finishes in Ayodhya</span>",
    metaTitle: "Wall Panels & Decorative Finishes in Ayodhya | PVC, WPC & UV Marble",
    metaDescription: "Waterproof decorative wall cladding in Ayodhya. Interlocking PVC wall panels, high-density WPC fluted louvers, and UV marble feature sheets. Fast installation.",
    heroBadge: "Decorative Wall Surfaces • Ayodhya",
    heroImage: "/images/services/pvc-panels.jpg",
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="18"/><rect x="14" y="3" width="7" height="18"/></svg>`,
    shortDesc: "Moisture-proof, termite-proof decorative cladding for damp walls, TV backdrops, bed headboards, and accent walls.",
    intro: "Persistent wall dampness, peeling paint, white efflorescence, and annual plaster repairs are common headaches across homes in Ayodhya. While recurring scraping and repainting only masks moisture for a few months, interlocking PVC and WPC wall panel systems provide a permanent, wipe-clean decorative barrier. Installed on lightweight wooden or GI battens over the affected masonry, these panels eliminate painting costs and instantly modernize rooms.",
    serviceSlugs: [
      "pvc-wall-panels-ayodhya",
      "wpc-wall-panels-ayodhya",
      "fluted-panels-louvers-ayodhya",
      "uv-marble-sheets-ayodhya"
    ],
    highlights: [
      "100% Termite-Proof, Borer-Proof & Waterproof Construction",
      "Installed Over Damp Walls without Scraping or Wet Plastering",
      "High-Definition Marble Textures, Natural Woodgrains & Flutes",
      "Fast 1 to 2 Day Clean Installation Per Room"
    ],
    faqs: [
      {
        question: "Can PVC and WPC wall panels be installed directly over damp, peeling walls?",
        answer: "Yes. In fact, that is their primary advantage. By fixing lightweight framing battens to the masonry, the panels float slightly off the damp surface, allowing air circulation while completely concealing unsightly moisture marks permanently."
      },
      {
        question: "What is the difference between PVC panels and WPC louvers?",
        answer: "PVC panels are lightweight, hollow-core interlocking sheets ideal for budget-friendly damp wall covering and ceilings. WPC (Wood Plastic Composite) louvers are heavy, high-density solid composite slats designed for premium 3D fluted accent walls."
      },
      {
        question: "Are UV marble sheets fragile like natural marble slabs?",
        answer: "No. UV marble sheets are engineered from lightweight PVC-calcium composite cores with high-gloss UV curing coatings. They weigh a fraction of stone, will not crack during settling, and cost significantly less than natural Italian marble."
      },
      {
        question: "How do I clean and maintain fluted panels and wall sheets?",
        answer: "Simply wipe with a damp microfiber cloth and mild household detergent. Unlike painted walls, they never absorb oil, turmeric stains, or fingerprints."
      }
    ]
  },
  {
    id: "gates",
    slug: "gates-fabrication",
    url: "/services/gates-fabrication/",
    name: "Gates & Fabrication",
    tagline: "Heavy-Gauge Structural Swing, Sliding & CNC Metal Entrance Gates",
    h1: "Custom Main Gates & <span class=\"highlight-gold\">Metal Fabrication in Ayodhya</span>",
    metaTitle: "Main Gate Installation & Fabrication in Ayodhya | CNC, Steel & Iron Gates",
    metaDescription: "Custom main gates and metal fabrication in Ayodhya. Heavy-duty swing, sliding, and CNC laser-cut entrance gates with anti-rust powder coatings.",
    heroBadge: "Bespoke Entrance Engineering • Ayodhya",
    heroImage: "/images/services/main-gates.jpg",
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
    shortDesc: "Architectural main entrance gates, space-saving sliding gates, CNC laser-cut screens, and security window grills.",
    intro: "Your main entrance gate defines your home's security, privacy, and street presence. A poorly fabricated gate sags on its hinges, scrapes the driveway, rusts at the weld joints, and rattles violently in the wind. In Ayodhya, we engineer and install heavy-duty custom entrance gates built to withstand decades of daily vehicular and pedestrian traffic. Built with structural steel sections, computerized fiber-laser CNC sheets, and multi-stage anti-corrosion finishes.",
    serviceSlugs: [
      "main-gate-installation-ayodhya",
      "cnc-cut-gates-ayodhya",
      "steel-iron-gates-ayodhya",
      "sliding-gates-ayodhya",
      "window-grills-ayodhya"
    ],
    highlights: [
      "Heavy-Gauge Tata / Jindal MS, GI & SS 304 Sections",
      "Computerized High-Precision Fiber-Laser Sheet Metal Cutting",
      "Zinc Phosphate Anti-Corrosion Primer & Weatherproof PU Finish",
      "Ball-Bearing Heavy-Duty Hinges & High-Load Ground Rollers"
    ],
    faqs: [
      {
        question: "What is better for a narrow driveway: swing gate or sliding gate?",
        answer: "For narrow driveways or properties on busy streets in Ayodhya, sliding gates are ideal because they slide along the boundary wall and consume zero vehicle parking clearance."
      },
      {
        question: "Can CNC laser designs be customized to our specific drawing or temple motif?",
        answer: "Yes. Our CNC fiber-laser cutting machine can execute any CAD vector drawing, including geometric modern patterns, traditional Ram Mandir floral motifs, or personalized family initials."
      },
      {
        question: "How do you prevent metal gates from rusting during Ayodhya monsoons?",
        answer: "Every gate undergoes weld smoothing, chemical degreasing, zinc-phosphate anti-rust priming, and two coats of automotive-grade polyurethane (PU) or industrial powder coating."
      },
      {
        question: "Do you fabricate window grills and safety gates as well?",
        answer: "Yes. We fabricate matching window grills, terrace security doors, and balcony boundary grills to match your main entrance gate design theme."
      }
    ]
  },
  {
    id: "railings",
    slug: "railing-glass",
    url: "/services/railing-glass/",
    name: "Railing & Glasses",
    tagline: "Engineered Toughened Glass Balustrades, Grade 304 SS & CNC Railings",
    h1: "Staircase & Balcony Railings <span class=\"highlight-gold\">& Glass Works in Ayodhya</span>",
    metaTitle: "Staircase & Balcony Glass Railings in Ayodhya | SS 304 & Toughened Glass",
    metaDescription: "Custom staircase and balcony railings in Ayodhya. Certified 12mm toughened safety glass, Grade 304 stainless steel, and precision CNC laser balustrades.",
    heroBadge: "Safety Railing & Glazing • Ayodhya",
    heroImage: "/images/services/staircase-railings.jpg",
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 20h12M6 20l12-14M6 4h12"/></svg>`,
    shortDesc: "Architectural frameless glass railings, SS 304 stainless steel balustrades, CNC laser guards, and exterior balcony barriers.",
    intro: "A staircase or balcony railing is not merely a decorative fixture; it is a critical life-safety barrier that must endure daily human leaning, hand impact, and building vibration without loosening over decades. In Ayodhya, we engineer and install precision staircase and balcony railings combining frameless toughened safety glass with Grade 304 stainless steel spigots and solid slotted top handrails for lasting structural stability.",
    serviceSlugs: [
      "staircase-railings-ayodhya",
      "glass-railings-ayodhya",
      "steel-iron-railings-ayodhya",
      "cnc-cut-railings-ayodhya",
      "balcony-railings-ayodhya"
    ],
    highlights: [
      "12mm & 15mm Certified Toughened Glass with Polished Beveled Edges",
      "Genuine Certified Grade 304 / 316 Stainless Steel Fittings",
      "Solid Base Spigots & Continuous Slotted Handrails",
      "Compliant with IS 875 Structural Human Load & Impact Standards"
    ],
    faqs: [
      {
        question: "Is toughened glass safe for homes with children in Ayodhya?",
        answer: "Yes. We use certified 12mm or 15mm toughened safety glass manufactured under high thermal processing. It is 5 to 7 times stronger than regular glass and designed to withstand direct blunt force impacts."
      },
      {
        question: "How do you anchor glass railings to staircase marble steps?",
        answer: "We use core drilling with heavy SS 304 chemical expansion anchor bolts directly into the concrete beam beneath the marble, preventing any step cracking or loose wobble."
      },
      {
        question: "Will Grade 304 stainless steel railings rust outdoors?",
        answer: "Grade 304 contains 18% chromium and 8% nickel, making it highly rust-resistant for indoor staircases and covered balconies. For open terrace railings exposed to rain, we also offer Grade 316 marine-grade steel."
      },
      {
        question: "Can CNC decorative screens be combined with stainless steel top rails?",
        answer: "Yes. Many Ayodhya clients choose hybrid designs featuring laser-cut metal panels between heavy SS 304 posts, finished with a smooth teakwood or steel handrail."
      }
    ]
  },
  {
    id: "exterior",
    slug: "exterior-work",
    url: "/services/exterior-work/",
    name: "Exterior Work",
    tagline: "Weatherproof Facade Cladding, Commercial ACP & Architectural Glazing",
    h1: "Exterior Facade Cladding & <span class=\"highlight-gold\">Architectural Work in Ayodhya</span>",
    metaTitle: "Exterior Wall Cladding & Facade Work in Ayodhya | WPC, ACP & Glazing",
    metaDescription: "Weatherproof exterior architectural cladding in Ayodhya. Exterior-grade WPC fluted louvers, commercial ACP facade elevations, glass partitions, and aluminium doors/windows.",
    heroBadge: "Architectural Exterior Facades • Ayodhya",
    heroImage: "/images/services/exterior-cladding.jpg",
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4zM4 12h16M12 4v16"/></svg>`,
    shortDesc: "Weatherproof exterior WPC cladding, commercial ACP elevations, acoustic interior glass partitions, and aluminium doors/windows.",
    intro: "The exterior elevation of your building endures relentless weather conditions—scorching 45°C summer sun, UV degradation, torrential monsoon downpours, and winter chills. Plain exterior paint quickly develops hairline cracks and damp streaks. Our exterior architectural cladding creates a rear-ventilated rainscreen envelope using certified exterior WPC louvers, fire-rated ACP, and architectural aluminium windows that protect masonry while giving your property a world-class luxury facade.",
    serviceSlugs: [
      "exterior-wall-cladding-ayodhya",
      "acp-cladding-ayodhya",
      "glass-partitions-ayodhya",
      "aluminium-doors-windows-ayodhya"
    ],
    highlights: [
      "Co-Extruded Exterior UV-Shield WPC Louvers (Zero Rot, Zero Termite)",
      "Rear-Ventilated Thermal Rainscreen Subframe Installation",
      "Jindal / Hindalco 6063 T6 Powder-Coated Architectural Aluminium",
      "Acoustic Glass Partitions for Modern Commercial Cabins"
    ],
    faqs: [
      {
        question: "How long does exterior WPC cladding last under direct Ayodhya sunlight?",
        answer: "Our co-extruded exterior-grade WPC louvers feature an outer polymer shield containing UV stabilizers, maintaining their color and structural integrity for over 15 years with zero annual painting."
      },
      {
        question: "What is ACP cladding and where is it used?",
        answer: "Aluminium Composite Panels (ACP) consist of two thin aluminium sheets bonded to a fire-retardant mineral core. They are widely used for modern commercial showrooms, hospital frontages, and contemporary residential boundary elevations."
      },
      {
        question: "Can aluminium doors and windows provide soundproofing?",
        answer: "Yes. When fitted with double-glazed units (DGU) or laminated acoustic glass and EPDM weather-stripping, architectural aluminium systems cut traffic noise by up to 35-40 dB."
      },
      {
        question: "Do you install glass cabin partitions for private offices and clinics?",
        answer: "Yes. We install slim-profile 10mm/12mm acoustic glass partitions with soft-closing sliding or pivot glass doors for offices, clinics, and conference rooms."
      }
    ]
  },
  {
    id: "commercial",
    slug: "commercial-work",
    url: "/services/commercial-work/",
    name: "Commercial Work",
    tagline: "Corporate Offices, Retail Showrooms, Clinics & Institutional Fit-Outs",
    h1: "Commercial Interior Fit-Outs & <span class=\"highlight-gold\">Business Spaces in Ayodhya</span>",
    metaTitle: "Commercial Interior Fit-Out Contractors in Ayodhya | Offices, Showrooms & Clinics",
    metaDescription: "Turnkey commercial interior fit-outs in Ayodhya. Open-plan modular workstations, executive glass cabins, retail display fixtures, clinic interiors, and school furniture.",
    heroBadge: "Modern Commercial Fit-Outs • Ayodhya",
    heroImage: "/images/services/office-interiors.jpg",
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    shortDesc: "Turnkey commercial spaces covering reception desks, modular workstations, executive glass cabins, acoustic ceilings, and retail display joinery.",
    intro: "A modern commercial space must do far more than provide desks or shelves—it shapes employee productivity, client confidence, technological workflow, and brand prestige. In Ayodhya's rapidly growing commercial market, businesses, clinics, and educational organizations require functional spaces engineered for maximum spatial efficiency and low maintenance. We deliver end-to-end commercial fit-outs with fast-track scheduling.",
    serviceSlugs: [
      "office-interior-ayodhya",
      "shop-showroom-interior-ayodhya",
      "clinic-hospital-interior-ayodhya",
      "school-interior-ayodhya"
    ],
    highlights: [
      "High-Traffic Commercial Melamine, Laminates & Fire-Safe Materials",
      "Modular Reconfigurable Workstations with Built-In Wire Management",
      "Acoustic Mineral Fiber False Ceilings with Energy-Efficient LED Grids",
      "Fast-Track Night & Weekend Execution to Avoid Business Downtime"
    ],
    faqs: [
      {
        question: "Can commercial fit-outs be executed during non-business hours in Ayodhya?",
        answer: "Yes. For operational retail stores, banks, or corporate offices, we schedule noisy cutting and assembly during night shifts and weekends so normal business operations remain uninterrupted."
      },
      {
        question: "Do you design custom display counters and racks for retail shops?",
        answer: "Yes. We design and fabricate custom retail display fixtures, glass showcases, billing counters, and storage joinery tailored to your merchandise and brand guidelines."
      },
      {
        question: "What hygiene standards are followed for clinic and hospital interiors?",
        answer: "We specify non-porous antimicrobial laminates, seamless vinyl flooring, concealed cove corners, and wipe-clean partition surfaces that withstand daily medical disinfectant wipe-downs."
      },
      {
        question: "Do you provide modular office workstations with wire raceways?",
        answer: "Yes. Our workstation systems feature heavy-duty aluminium partition tile frameworks with integrated internal raceways for power, LAN, and telecom wiring."
      }
    ]
  }
];

/**
 * Retrieve category by slug or id
 */
export function getCategoryBySlug(slug) {
  const clean = slug.replace(/^\/services\/|\/$/g, "").replace(/^\/|\/$/g, "");
  return categoriesData.find(c => c.slug === clean || c.id === clean);
}

/**
 * Retrieve all services belonging to a category
 */
export function getServicesForCategory(categoryIdOrSlug) {
  const category = getCategoryBySlug(categoryIdOrSlug);
  if (!category) return [];
  
  const allMap = {
    residential: residentialServices,
    panels: panelServices,
    railings: railingServices,
    gates: gateServices,
    exterior: exteriorServices,
    commercial: commercialServices
  };

  return allMap[category.id] || [];
}
