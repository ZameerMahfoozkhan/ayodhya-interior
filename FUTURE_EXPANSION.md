# Phase 2 Expansion & Scalability Guide

This guide details the technical and operational blueprint for expanding **Ayodhya Interiors & Exterior Studio** beyond the Phase 1 launch. It provides step-by-step instructions for adding new service pages, projects, categories, and geographic locations without requiring structural refactoring.

---

## 1. Architectural Philosophy

The website is engineered with a **zero-dependency static architecture**:
- **Data-Driven Core:** All business details, service content, projects, and guides live in structured JavaScript data modules under `src/data/` and `src/config/`.
- **Reusable Component Engine:** Page layouts (`src/pages/`) compose semantic components (`src/components/`) that receive typed data models.
- **Automated Compilation:** Running `node build.js` automatically renders static, crawlable HTML5 pages into `dist/`, updates `dist/sitemap.xml` with canonical URLs, and configures `dist/robots.txt`.
- **Decoupled Content & Presentation:** Adding a new service or project never requires editing existing page templates or altering unrelated services.

---

## 2. Phase 2 Growth Roadmap

The website is architected to smoothly accommodate the planned Phase 2 service tiers:

### Phase 2A: Specialist Fabrication & Outdoor Solutions
Planned routes when fabrication equipment and specialized welding lines expand:
- `/iron-railings-ayodhya/` — Wrought iron, cast iron, and ornamental terrace railings.
- `/terrace-railings-ayodhya/` — Weather-grade perimeter safety barriers and parapet extensions.
- `/staircase-handrails-ayodhya/` — Wall-mounted ergonomic handrails (wood, brass, stainless steel).
- `/automatic-gates-ayodhya/` — Motorized remote-controlled sliding and swing gates (Italian motor kits).
- `/boundary-gates-ayodhya/` — Heavy-duty compound wall entry gates.
- `/safety-grills-ayodhya/` — Intrusion-resistant window and balcony security enclosures.
- `/hpl-exterior-cladding-ayodhya/` — High-Pressure Laminate exterior ventilated facade panels.
- `/wpc-exterior-cladding-ayodhya/` — Co-extruded timber-look fluted exterior wall cladding.
- `/pergola-installation-ayodhya/` — Mild steel, aluminium, and composite outdoor garden pergolas.
- `/polycarbonate-sheds-ayodhya/` — UV-stabilized canopy roofing for carports, porches, and terraces.
- `/glass-shower-enclosures-ayodhya/` — Frameless 10mm toughened glass bathroom cubicles and sliding partitions.
- `/decorative-mirror-work-ayodhya/` — Beveled, tinted (bronze/grey), and LED-backlit vanity mirrors.
- `/exterior-privacy-screens-ayodhya/` — Laser-cut CNC panels and louvers for balconies and facade shielding.

### Phase 2B: Additional Residential Interior Specializations
- **Custom Wardrobes:** Floor-to-ceiling sliding, walk-in closets, and lacquered glass hinged wardrobes.
- **Pooja Units:** Mandir designs with CNC jali backlights, teakwood carvings, and brass inlays.
- **Wall Mouldings & Texture Finishes:** European PU beadings, fluted MDF trims, and Italian stucco plaster.
- **Designer Wallpaper Installation:** Non-woven, vinyl-coated, and acoustic textured wallpaper hanging.
- **Outdoor Decking:** Anti-skid WPC composite floor planks for balconies and terrace gardens.
- **uPVC Doors & Windows:** Multi-chamber acoustic and weather-sealed casement/sliding systems.
- **Insect Screens:** Retractable pleated mosquito mesh systems for windows and French doors.
- **Full Home Renovation Packages:** Turnkey demolition, civil restructuring, waterproofing, and turnkey interiors.

### Phase 2C: Advanced Commercial Fit-Outs
- **Retail Display Systems:** Slatwall, modular racking, glass display vitrines, and POS counters.
- **Hospitality Fit-Outs:** Restaurant dining booths, cafe counters, hotel guest-room woodwork, and acoustic banqueting.
- **Warehouse & Industrial Offices:** Mezzanine floor partitions, modular cabins, and industrial workstations.
- **Healthcare & Clinical Suites:** Antibacterial laminate surfaces, lead-lined X-ray partitions, and patient waiting lounges.

### Phase 2D: Geographic Expansion (Regional Hubs)
When the studio establishes dedicated teams or branches in neighboring districts, location-specific landing pages can be activated:
- `/sultanpur/`
- `/gonda/`
- `/lucknow/`
- `/barabanki/`
- `/basti/`

> [!IMPORTANT]
> **Anti-Doorway Policy:** Never generate cookie-cutter programmatic location pages with simple keyword swapping. Each location page must feature genuine regional project photography, local office/liaison contact details, verifiable regional service radius, and unique case studies.

---

## 3. Step-by-Step Developer Workflows

### Workflow A: How to Add a New Service Page

1. **Create or Open the Category File:**
   Locate the relevant category file in `src/data/services/` (e.g., `residential.js`, `railings.js`, `gates.js`, `exterior.js`, `panels.js`, `commercial.js`).

2. **Add the Service Object Following the 19-Part Schema:**
   Ensure all 19 structural properties are defined:
   ```javascript
   export const newService = {
     id: 'automatic-gates-ayodhya',
     slug: 'automatic-gates-ayodhya',
     status: 'published', // Use 'draft' while content is under review
     title: 'Automatic & Motorized Gates in Ayodhya',
     metaTitle: 'Automatic Sliding & Swing Gates in Ayodhya | Remote Controlled',
     metaDescription: 'Custom automatic gate installation in Ayodhya. Heavy-duty motorized sliding and swing gates with remote control, obstacle sensors, and manual override.',
     category: 'gates',
     categoryName: 'Main Gates & Fabrication',
     heroTag: 'Motorized Entry Solutions',
     heroDescription: 'Commercial and residential automated gates engineered for smooth operation, security, and power-cut resilience in Ayodhya.',
     image: '/images/services/automatic-gates.svg',
     imageAlt: 'Automatic sliding gate installation with motorized rack and sensor safety in Ayodhya',
     
     // 19-part content sections
     quickSummary: '...',
     serviceTypes: [ ... ],
     materials: [ ... ],
     prosCons: [ ... ],
     selectionCriteria: [ ... ],
     siteAssessment: [ ... ],
     executionProcess: [ ... ],
     costFactors: [ ... ],
     commonMistakes: [ ... ],
     maintenanceTips: [ ... ],
     faqs: [ ... ],
     relatedServiceSlugs: ['main-gate-installation-ayodhya', 'sliding-gates-ayodhya', 'cnc-cut-gates-ayodhya']
   };
   ```

3. **Register in `src/data/services.js`:**
   Import and add the new service object to the category array and the master registry.

4. **Rebuild the Website:**
   Run:
   ```bash
   node build.js
   ```
   The build script automatically:
   - Generates the clean route `dist/automatic-gates-ayodhya/index.html`.
   - Injects canonical meta tags and Schema.org (`Service`, `FAQPage`, `BreadcrumbList`).
   - Appends the URL to `dist/sitemap.xml`.
   - Links the service in related service modules across the site.

---

### Workflow B: Managing Draft vs. Published Pages

Every service data object supports a `status` field:
- `status: 'published'` (Default) — Page is built, linked in navigation and category grids, and included in `sitemap.xml`.
- `status: 'draft'` — If set to draft:
  ```javascript
  // In src/data/services.js
  export function getAllServices() {
    return allServices.filter(s => s.status !== 'draft');
  }
  ```
  This ensures unapproved services are never rendered into `dist/` or indexed by Google.

---

### Workflow C: How to Add Real Projects to the Gallery

Once genuine photography is available from completed installations in Ayodhya:

1. **Add Images to `public/images/projects/`:**
   Place optimized WebP or JPEG photos in `public/images/projects/` (e.g., `civil-lines-kitchen-1.webp`).

2. **Register the Project in `src/data/projects.js`:**
   ```javascript
   {
     id: 'p-07',
     title: 'Contemporary BWP Modular Kitchen in Civil Lines',
     category: 'residential',
     location: 'Civil Lines, Ayodhya',
     scope: 'BWP Marine Ply Cabinets, Acrylic Shutters, Hafele Tandem Drawers',
     image: '/images/projects/civil-lines-kitchen-1.webp',
     imageAlt: 'Modular kitchen installation with quartz countertop in Civil Lines, Ayodhya',
     caption: 'Complete modular kitchen renovation with custom tall pantry and Blum soft-close hinges.'
   }
   ```

3. **Rebuild:**
   ```bash
   node build.js
   ```
   The project will immediately appear in `/projects/` with category tab filtering (All, Residential, Panels, Railings, Gates, Exterior, Commercial).

---

### Workflow D: How to Add a New Educational Guide

1. **Edit `src/data/guides.js`:**
   Add a new guide entry to the exported `guides` array:
   ```javascript
   {
     id: 'hpl-vs-acp-exterior-guide',
     slug: 'hpl-vs-acp-exterior-cladding-guide',
     title: 'HPL vs ACP Sheet Cladding: Complete Exterior Comparison',
     readTime: '6 min read',
     publishDate: 'November 2026',
     summary: 'Compare weather resistance, cost per sq.ft., thermal insulation, and lifespan of High-Pressure Laminate vs Aluminium Composite Panels.',
     keyTakeaways: [ ... ],
     content: `...`
   }
   ```

2. **Rebuild:**
   The guide appears automatically on `/guides/` with direct WhatsApp consultation CTAs.

---

### Workflow E: Adding Regional Location Hubs (Phase 2D)

To add a regional hub page (e.g., `/sultanpur/`):

1. **Create a Dedicated Location Model:**
   Create `src/data/locations.js` containing:
   - Specific local landmark references.
   - Verified local service radius (e.g., within 45 km of Sultanpur Chowk).
   - Local transit and site survey availability schedule.
   - Regional project showcases.

2. **Create `src/pages/LocationPage.js`:**
   Render localized metadata, unique service capabilities, and transparent logistics policies (e.g., "Site surveys in Sultanpur scheduled on Tuesdays & Saturdays").

3. **Add Route to `build.js`:**
   Compile to `dist/sultanpur/index.html` and append to `sitemap.xml`.

---

## 4. Maintenance & Scalability Checklist

- [ ] Always check that every new service slug follows the clean format: `[service-name]-ayodhya`.
- [ ] Ensure every new service has 4 to 6 unique FAQs to populate the accordion and Schema.org `FAQPage`.
- [ ] Verify image paths exist in `public/images/` before running `build.js`.
- [ ] Confirm related service slugs point to valid existing services.
- [ ] Test the compiled output locally using `node serve.js` before deploying to production.
