/**
 * Architectural SVG Asset Generator
 * Creates premium, high-resolution architectural vector illustrations
 * adhering to the project's exact palette:
 * - Warm Ivory: #F7F5F0
 * - Soft Stone: #ECE8DF
 * - Deep Charcoal: #272A27
 * - Muted Grey: #6F726C
 * - Refined Sage Green: #667A68
 * - Warm Walnut: #9B795B
 * - Light Stone Border: #DFDCD4
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const publicDir = path.join(rootDir, "public");
const imgDir = path.join(publicDir, "images");
const serviceImgDir = path.join(imgDir, "services");
const projectImgDir = path.join(imgDir, "projects");
const guideImgDir = path.join(imgDir, "guides");
const heroImgDir = path.join(imgDir, "hero");

[publicDir, imgDir, serviceImgDir, projectImgDir, guideImgDir, heroImgDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Helper to wrap SVG
function makeSvg(title, subtitle, graphicContent, accent = "#667A68") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7F5F0" />
      <stop offset="100%" stop-color="#ECE8DF" />
    </linearGradient>
    <linearGradient id="walnutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9B795B" />
      <stop offset="100%" stop-color="#806246" />
    </linearGradient>
    <linearGradient id="sageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7B937D" />
      <stop offset="100%" stop-color="#556957" />
    </linearGradient>
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#E8ECE9" stop-opacity="0.4" />
    </linearGradient>
    <linearGradient id="marbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#F4F3EF" />
      <stop offset="100%" stop-color="#EAE7DF" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DFDCD4" stroke-width="0.8" stroke-opacity="0.5"/>
    </pattern>
    <pattern id="flutes" width="16" height="40" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="10" height="40" fill="#9B795B" fill-opacity="0.9"/>
      <rect x="10" y="0" width="6" height="40" fill="#806246" fill-opacity="0.95"/>
    </pattern>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#272A27" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="800" height="500" fill="url(#bgGrad)" />
  <rect width="800" height="500" fill="url(#grid)" />

  <!-- Architectural Graphic Artboard -->
  <g id="illustration">
    ${graphicContent}
  </g>

  <!-- Lower Title Banner Pill -->
  <g transform="translate(40, 410)" filter="url(#shadow)">
    <rect width="720" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" />
    <circle cx="36" cy="30" r="14" fill="${accent}" />
    <path d="M 32 30 L 40 30 M 36 26 L 40 30 L 36 34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <text x="64" y="27" font-family="'Manrope', sans-serif" font-size="15" font-weight="700" fill="#272A27">${title}</text>
    <text x="64" y="45" font-family="'Inter', sans-serif" font-size="12" fill="#6F726C">${subtitle}</text>
  </g>
</svg>`;
}

// 1. Home Interiors
const homeInteriorsSvg = makeSvg(
  "Home Interior Solutions",
  "Living Space, TV Paneling & Ceiling Integration • Ayodhya",
  `
  <!-- Room Perspective Frame -->
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  
  <!-- Left Wall Fluted Louvers -->
  <rect x="110" y="70" width="140" height="300" fill="url(#flutes)" rx="4"/>
  
  <!-- Center Marble Slab Feature -->
  <rect x="270" y="70" width="280" height="230" fill="url(#marbleGrad)" rx="8" stroke="#DFDCD4" stroke-width="1.5"/>
  <path d="M 300 90 Q 360 140 420 120 T 520 220" stroke="#DFDCD4" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M 330 240 Q 390 190 480 270" stroke="#9B795B" stroke-width="1.5" fill="none" opacity="0.4"/>
  
  <!-- Wall Mounted Modern TV -->
  <rect x="310" y="100" width="200" height="115" rx="6" fill="#272A27" stroke="#1A1C1A" stroke-width="3"/>
  <rect x="315" y="105" width="190" height="105" rx="4" fill="#363A36"/>
  <circle cx="410" cy="155" r="16" fill="#667A68" opacity="0.8"/>
  <polygon points="406,149 418,155 406,161" fill="#FFFFFF"/>

  <!-- Floating Media Console -->
  <rect x="260" y="270" width="300" height="40" rx="6" fill="url(#walnutGrad)" filter="url(#shadow)"/>
  <line x1="360" y1="270" x2="360" y2="310" stroke="#806246" stroke-width="1.5"/>
  <line x1="460" y1="270" x2="460" y2="310" stroke="#806246" stroke-width="1.5"/>

  <!-- Right Decorative Modular Shelving -->
  <rect x="570" y="70" width="120" height="300" rx="6" fill="#F7F5F0" stroke="#DFDCD4" stroke-width="1.5"/>
  <rect x="585" y="100" width="90" height="12" rx="3" fill="#667A68"/>
  <rect x="585" y="150" width="90" height="12" rx="3" fill="#9B795B"/>
  <rect x="585" y="200" width="90" height="12" rx="3" fill="#667A68"/>
  <rect x="585" y="250" width="90" height="12" rx="3" fill="#9B795B"/>
  `,
  "#667A68"
);

// 2. Modular Kitchen
const modularKitchenSvg = makeSvg(
  "Modular Kitchen Engineering",
  "BWP Marine Ply, Tandem Drawers & Countertop Planning • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Upper Cabinets -->
  <rect x="110" y="70" width="580" height="90" rx="6" fill="#ECE8DF" stroke="#DFDCD4" stroke-width="1.5"/>
  <line x1="250" y1="70" x2="250" y2="160" stroke="#DFDCD4" stroke-width="1.5"/>
  <line x1="400" y1="70" x2="400" y2="160" stroke="#DFDCD4" stroke-width="1.5"/>
  <line x1="550" y1="70" x2="550" y2="160" stroke="#DFDCD4" stroke-width="1.5"/>
  <!-- Chimney Hood -->
  <polygon points="360,90 440,90 460,160 340,160" fill="#272A27"/>
  <rect x="380" y="70" width="40" height="20" fill="#272A27"/>
  <!-- Countertop Backsplash -->
  <rect x="110" y="160" width="580" height="70" fill="url(#marbleGrad)"/>
  <line x1="110" y1="230" x2="690" y2="230" stroke="#272A27" stroke-width="6"/>
  <!-- Lower Modular Drawers -->
  <rect x="110" y="236" width="580" height="140" fill="url(#sageGrad)" rx="6"/>
  <line x1="110" y1="280" x2="690" y2="280" stroke="#FFFFFF" stroke-width="2"/>
  <line x1="110" y1="330" x2="690" y2="330" stroke="#FFFFFF" stroke-width="2"/>
  <line x1="300" y1="236" x2="300" y2="376" stroke="#FFFFFF" stroke-width="2"/>
  <line x1="500" y1="236" x2="500" y2="376" stroke="#FFFFFF" stroke-width="2"/>
  <!-- Handles -->
  <rect x="180" y="254" width="50" height="4" rx="2" fill="#FFFFFF"/>
  <rect x="180" y="302" width="50" height="4" rx="2" fill="#FFFFFF"/>
  <rect x="180" y="350" width="50" height="4" rx="2" fill="#FFFFFF"/>
  <rect x="375" y="254" width="50" height="4" rx="2" fill="#FFFFFF"/>
  <rect x="375" y="302" width="50" height="4" rx="2" fill="#FFFFFF"/>
  <rect x="375" y="350" width="50" height="4" rx="2" fill="#FFFFFF"/>
  `,
  "#9B795B"
);

// 3. Custom Furniture & Wardrobes
const customFurnitureSvg = makeSvg(
  "Custom Furniture & Wardrobes",
  "Full-Height Sliding Wardrobes & Modular Storage • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Wardrobe Frame -->
  <rect x="110" y="70" width="340" height="300" rx="8" fill="#ECE8DF" stroke="#272A27" stroke-width="2"/>
  <!-- Sliding Doors -->
  <rect x="120" y="80" width="155" height="280" rx="4" fill="url(#walnutGrad)" stroke="#DFDCD4" stroke-width="1.5"/>
  <rect x="285" y="80" width="155" height="280" rx="4" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5"/>
  <!-- Fluted accent strip on right door -->
  <rect x="300" y="80" width="40" height="280" fill="url(#flutes)"/>
  <rect x="250" y="190" width="8" height="60" rx="4" fill="#272A27"/>
  <rect x="365" y="190" width="8" height="60" rx="4" fill="#272A27"/>
  <!-- Bed & Headboard preview on right -->
  <rect x="470" y="170" width="220" height="200" rx="12" fill="#F7F5F0" stroke="#DFDCD4" stroke-width="1.5"/>
  <rect x="485" y="185" width="190" height="70" rx="8" fill="url(#sageGrad)"/>
  <rect x="495" y="270" width="170" height="80" rx="6" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5"/>
  <ellipse cx="535" cy="290" rx="25" ry="12" fill="#ECE8DF"/>
  <ellipse cx="625" cy="290" rx="25" ry="12" fill="#ECE8DF"/>
  `,
  "#667A68"
);

// 4. TV Units
const tvUnitsSvg = makeSvg(
  "TV Unit & Media Walls",
  "Acoustic Slat Backdrops, UV Marble & Floating Consoles • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Full wall backpanel -->
  <rect x="110" y="70" width="580" height="300" rx="8" fill="#F7F5F0" stroke="#DFDCD4" stroke-width="1.5"/>
  <!-- Left Fluted Louvers -->
  <rect x="120" y="80" width="180" height="280" fill="url(#flutes)" rx="6"/>
  <!-- Center/Right UV Marble Sheet -->
  <rect x="310" y="80" width="370" height="280" fill="url(#marbleGrad)" rx="6" stroke="#DFDCD4" stroke-width="1.5"/>
  <!-- Gold Inlay T-strip -->
  <line x1="305" y1="80" x2="305" y2="360" stroke="#9B795B" stroke-width="4"/>
  <!-- Mounted Screen -->
  <rect x="360" y="110" width="270" height="150" rx="6" fill="#272A27"/>
  <rect x="366" y="116" width="258" height="138" rx="4" fill="#363A36"/>
  <!-- Floating Console -->
  <rect x="200" y="285" width="450" height="45" rx="6" fill="url(#walnutGrad)" filter="url(#shadow)"/>
  `,
  "#9B795B"
);

// 5. False Ceilings
const falseCeilingsSvg = makeSvg(
  "False Ceiling Systems",
  "Gypsum Board, LED Cove Lighting & PVC Ceilings • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#272A27" stroke="#1A1C1A" stroke-width="2" filter="url(#shadow)"/>
  <!-- Outer Ceiling Step -->
  <rect x="120" y="80" width="560" height="280" fill="#363A36" rx="10"/>
  <!-- Recessed Inner Island -->
  <rect x="170" y="120" width="460" height="200" fill="#FFFFFF" rx="8"/>
  <!-- Warm Cove Glow effect -->
  <rect x="160" y="110" width="480" height="220" fill="none" stroke="#FFD8A8" stroke-width="8" opacity="0.4" rx="12"/>
  <!-- Spotlights -->
  <circle cx="145" cy="100" r="8" fill="#FFF4E6"/>
  <circle cx="280" cy="100" r="8" fill="#FFF4E6"/>
  <circle cx="400" cy="100" r="8" fill="#FFF4E6"/>
  <circle cx="520" cy="100" r="8" fill="#FFF4E6"/>
  <circle cx="655" cy="100" r="8" fill="#FFF4E6"/>
  <circle cx="145" cy="340" r="8" fill="#FFF4E6"/>
  <circle cx="280" cy="340" r="8" fill="#FFF4E6"/>
  <circle cx="400" cy="340" r="8" fill="#FFF4E6"/>
  <circle cx="520" cy="340" r="8" fill="#FFF4E6"/>
  <circle cx="655" cy="340" r="8" fill="#FFF4E6"/>
  <!-- Modern Chandelier / Fan Center -->
  <circle cx="400" cy="220" r="30" fill="url(#walnutGrad)"/>
  <circle cx="400" cy="220" r="10" fill="#FFD8A8"/>
  `,
  "#9B795B"
);

// 6. Flooring Solutions
const flooringSvg = makeSvg(
  "Flooring Solutions",
  "Waterproof SPC Click-Lock & Luxury Wooden Planks • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Perspective Floor Planks -->
  <g transform="translate(100, 70)">
    <rect x="0" y="0" width="280" height="50" rx="4" fill="url(#walnutGrad)"/>
    <rect x="290" y="0" width="310" height="50" rx="4" fill="#806246"/>
    <rect x="0" y="58" width="180" height="50" rx="4" fill="#8A6B4F"/>
    <rect x="190" y="58" width="280" height="50" rx="4" fill="url(#walnutGrad)"/>
    <rect x="480" y="58" width="120" height="50" rx="4" fill="#806246"/>
    <rect x="0" y="116" width="320" height="50" rx="4" fill="url(#walnutGrad)"/>
    <rect x="330" y="116" width="270" height="50" rx="4" fill="#8A6B4F"/>
    <rect x="0" y="174" width="220" height="50" rx="4" fill="#806246"/>
    <rect x="230" y="174" width="260" height="50" rx="4" fill="url(#walnutGrad)"/>
    <rect x="500" y="174" width="100" height="50" rx="4" fill="#8A6B4F"/>
    <rect x="0" y="232" width="290" height="50" rx="4" fill="url(#walnutGrad)"/>
    <rect x="300" y="232" width="300" height="50" rx="4" fill="#806246"/>
  </g>
  <!-- 100% Waterproof Stamp Badge -->
  <g transform="translate(560, 90)">
    <circle cx="35" cy="35" r="35" fill="#667A68"/>
    <text x="35" y="32" font-family="'Manrope', sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">100%</text>
    <text x="35" y="46" font-family="'Manrope', sans-serif" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">WATERPROOF</text>
  </g>
  `,
  "#667A68"
);

// 7. PVC Panels
const pvcPanelsSvg = makeSvg(
  "PVC Wall Panels",
  "Damp-Proof Interlocking Wall Cladding • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Wall Panels Array -->
  <g transform="translate(110, 70)">
    <rect x="0" y="0" width="65" height="300" rx="4" fill="#ECE8DF" stroke="#DFDCD4"/>
    <rect x="75" y="0" width="65" height="300" rx="4" fill="#E2DDD2" stroke="#DFDCD4"/>
    <rect x="150" y="0" width="65" height="300" rx="4" fill="#ECE8DF" stroke="#DFDCD4"/>
    <rect x="225" y="0" width="65" height="300" rx="4" fill="#E2DDD2" stroke="#DFDCD4"/>
    <rect x="300" y="0" width="65" height="300" rx="4" fill="#ECE8DF" stroke="#DFDCD4"/>
    <rect x="375" y="0" width="65" height="300" rx="4" fill="#E2DDD2" stroke="#DFDCD4"/>
    <rect x="450" y="0" width="65" height="300" rx="4" fill="#ECE8DF" stroke="#DFDCD4"/>
    <rect x="525" y="0" width="55" height="300" rx="4" fill="#E2DDD2" stroke="#DFDCD4"/>
  </g>
  <!-- Trim Profile at Top & Bottom -->
  <rect x="100" y="65" width="600" height="12" rx="3" fill="#667A68"/>
  <rect x="100" y="365" width="600" height="12" rx="3" fill="#667A68"/>
  `,
  "#667A68"
);

// 8. WPC Panels
const wpcPanelsSvg = makeSvg(
  "WPC Wall Panels",
  "High-Density Wood-Plastic Composite Timber Panels • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- WPC Slat Array -->
  <g transform="translate(110, 70)">
    <rect x="0" y="0" width="580" height="300" rx="8" fill="url(#flutes)"/>
    <rect x="150" y="50" width="280" height="200" rx="8" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="2" filter="url(#shadow)"/>
    <text x="290" y="140" font-family="'Manrope', sans-serif" font-size="18" font-weight="700" fill="#272A27" text-anchor="middle">WPC Composite</text>
    <text x="290" y="165" font-family="'Inter', sans-serif" font-size="13" fill="#6F726C" text-anchor="middle">Termite Proof • Zero Swelling</text>
    <rect x="230" y="185" width="120" height="30" rx="15" fill="#667A68"/>
    <text x="290" y="204" font-family="'Manrope', sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Exterior Rated</text>
  </g>
  `,
  "#9B795B"
);

// 9. Fluted Louvers
const flutedLouversSvg = makeSvg(
  "Fluted Panels & Louvers",
  "Architectural Vertical Slats & Acoustic Profiles • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#272A27" stroke="#1A1C1A" stroke-width="2" filter="url(#shadow)"/>
  <g transform="translate(110, 70)">
    <!-- 3D Louver Slats -->
    <rect x="0" y="0" width="30" height="300" rx="4" fill="#9B795B"/>
    <rect x="40" y="0" width="30" height="300" rx="4" fill="#806246"/>
    <rect x="80" y="0" width="30" height="300" rx="4" fill="#9B795B"/>
    <rect x="120" y="0" width="30" height="300" rx="4" fill="#806246"/>
    <rect x="160" y="0" width="30" height="300" rx="4" fill="#9B795B"/>
    <rect x="200" y="0" width="30" height="300" rx="4" fill="#806246"/>
    <rect x="240" y="0" width="30" height="300" rx="4" fill="#9B795B"/>
    <rect x="280" y="0" width="30" height="300" rx="4" fill="#806246"/>
    <rect x="320" y="0" width="30" height="300" rx="4" fill="#9B795B"/>
    <rect x="360" y="0" width="30" height="300" rx="4" fill="#806246"/>
    <rect x="400" y="0" width="30" height="300" rx="4" fill="#9B795B"/>
    <rect x="440" y="0" width="30" height="300" rx="4" fill="#806246"/>
    <rect x="480" y="0" width="30" height="300" rx="4" fill="#9B795B"/>
    <rect x="520" y="0" width="30" height="300" rx="4" fill="#806246"/>
    <rect x="560" y="0" width="20" height="300" rx="4" fill="#9B795B"/>
  </g>
  <!-- Embedded LED Accent Bar -->
  <line x1="345" y1="70" x2="345" y2="370" stroke="#FFD8A8" stroke-width="4" filter="url(#shadow)"/>
  `,
  "#9B795B"
);

// 10. UV Marble Sheets
const uvMarbleSvg = makeSvg(
  "UV Marble Sheets",
  "High-Gloss Lightweight Faux Marble Slabs • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <rect x="110" y="70" width="580" height="300" rx="10" fill="url(#marbleGrad)" stroke="#DFDCD4" stroke-width="2"/>
  <!-- Marble Veins -->
  <path d="M 150 90 Q 240 180 320 140 T 480 280 T 600 240" stroke="#6F726C" stroke-width="3" fill="none" opacity="0.5"/>
  <path d="M 280 70 Q 360 210 500 180 T 660 320" stroke="#9B795B" stroke-width="2" fill="none" opacity="0.4"/>
  <path d="M 120 280 Q 220 240 380 310" stroke="#6F726C" stroke-width="2" fill="none" opacity="0.3"/>
  <!-- High Gloss Reflection Highlight -->
  <polygon points="120,70 240,70 140,370 70,370" fill="#FFFFFF" opacity="0.3"/>
  `,
  "#667A68"
);

// 11. Staircase Railings
const staircaseRailingsSvg = makeSvg(
  "Staircase Railings",
  "Toughened Glass, SS 304, MS & CNC Safety Balustrades • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Stair Steps -->
  <path d="M 110 370 L 220 370 L 220 300 L 330 300 L 330 230 L 440 230 L 440 160 L 550 160 L 550 90 L 690 90" stroke="#272A27" stroke-width="4" fill="none"/>
  <!-- Glass Panels Along Rake -->
  <polygon points="210,290 540,80 540,150 210,360" fill="url(#glassGrad)" stroke="#667A68" stroke-width="2"/>
  <!-- Spigot Mounts -->
  <rect x="230" y="320" width="14" height="40" fill="#272A27" rx="3"/>
  <rect x="340" y="250" width="14" height="40" fill="#272A27" rx="3"/>
  <rect x="450" y="180" width="14" height="40" fill="#272A27" rx="3"/>
  <!-- Slotted Top Handrail -->
  <line x1="200" y1="285" x2="550" y2="75" stroke="#9B795B" stroke-width="8" stroke-linecap="round"/>
  `,
  "#667A68"
);

// 12. Glass Railings
const glassRailingsSvg = makeSvg(
  "Glass Railing Systems",
  "Frameless Spigot & Continuous Base Shoe Balustrades • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Base Floor Curb -->
  <rect x="110" y="330" width="580" height="40" rx="4" fill="#272A27"/>
  <!-- Continuous Base Shoe Channel -->
  <rect x="120" y="310" width="560" height="30" rx="4" fill="#667A68"/>
  <!-- Transparent Glass Panels -->
  <rect x="130" y="100" width="170" height="210" rx="4" fill="url(#glassGrad)" stroke="#DFDCD4" stroke-width="1.5"/>
  <rect x="315" y="100" width="170" height="210" rx="4" fill="url(#glassGrad)" stroke="#DFDCD4" stroke-width="1.5"/>
  <rect x="500" y="100" width="170" height="210" rx="4" fill="url(#glassGrad)" stroke="#DFDCD4" stroke-width="1.5"/>
  <!-- Top Slotted SS Handrail -->
  <line x1="120" y1="100" x2="680" y2="100" stroke="#9B795B" stroke-width="6" stroke-linecap="round"/>
  <!-- Light Reflection Streaks -->
  <line x1="160" y1="120" x2="220" y2="280" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  <line x1="345" y1="120" x2="405" y2="280" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  <line x1="530" y1="120" x2="590" y2="280" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  `,
  "#667A68"
);

// 13. Steel & Iron Railings
const steelIronRailingsSvg = makeSvg(
  "Steel & Iron Railings",
  "SS 304 Multi-Pipe & Heavy Wrought-Iron Balustrades • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Concrete Base -->
  <rect x="110" y="340" width="580" height="30" rx="4" fill="#ECE8DF"/>
  <!-- Top Handrail -->
  <rect x="110" y="90" width="580" height="16" rx="8" fill="#272A27"/>
  <!-- Master Posts -->
  <rect x="130" y="100" width="20" height="240" fill="#272A27"/>
  <rect x="390" y="100" width="20" height="240" fill="#272A27"/>
  <rect x="650" y="100" width="20" height="240" fill="#272A27"/>
  <!-- Vertical Spindles / Horizontal Rails -->
  <line x1="130" y1="160" x2="670" y2="160" stroke="#6F726C" stroke-width="6"/>
  <line x1="130" y1="220" x2="670" y2="220" stroke="#6F726C" stroke-width="6"/>
  <line x1="130" y1="280" x2="670" y2="280" stroke="#6F726C" stroke-width="6"/>
  `,
  "#272A27"
);

// 14. CNC Cut Railings
const cncRailingsSvg = makeSvg(
  "CNC-Cut Decorative Railings",
  "Laser-Cut Sheet Metal Jalis with Outer Box Framing • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Railing Frame -->
  <rect x="110" y="80" width="580" height="280" rx="8" fill="#ECE8DF" stroke="#272A27" stroke-width="3"/>
  <!-- CNC Laser Cut Screen Infill -->
  <g fill="#272A27">
    <!-- Geometric Honeycomb pattern simulation -->
    <circle cx="200" cy="150" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="260" cy="150" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="320" cy="150" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="380" cy="150" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="440" cy="150" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="500" cy="150" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="560" cy="150" r="25" fill="none" stroke="#272A27" stroke-width="4"/>

    <circle cx="230" cy="200" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="290" cy="200" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="350" cy="200" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="410" cy="200" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="470" cy="200" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="530" cy="200" r="25" fill="none" stroke="#272A27" stroke-width="4"/>

    <circle cx="200" cy="250" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="260" cy="250" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="320" cy="250" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="380" cy="250" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="440" cy="250" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="500" cy="250" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="560" cy="250" r="25" fill="none" stroke="#272A27" stroke-width="4"/>

    <circle cx="230" cy="300" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="290" cy="300" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="350" cy="300" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="410" cy="300" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="470" cy="300" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
    <circle cx="530" cy="300" r="25" fill="none" stroke="#272A27" stroke-width="4"/>
  </g>
  `,
  "#9B795B"
);

// 15. Balcony Railings
const balconyRailingsSvg = makeSvg(
  "Balcony & Terrace Railings",
  "Weatherproof Fall Protection with Drainage Clearance • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Balcony Edge Floor Slab -->
  <rect x="90" y="320" width="620" height="50" rx="4" fill="#272A27"/>
  <rect x="110" y="310" width="580" height="15" rx="3" fill="#667A68"/>
  <!-- Laminated Safety Glass Balustrade -->
  <rect x="130" y="100" width="540" height="190" rx="4" fill="url(#glassGrad)" stroke="#DFDCD4" stroke-width="1.5"/>
  <!-- Spigot Feet with Drainage Clearance -->
  <rect x="180" y="290" width="20" height="30" rx="4" fill="#9B795B"/>
  <rect x="320" y="290" width="20" height="30" rx="4" fill="#9B795B"/>
  <rect x="460" y="290" width="20" height="30" rx="4" fill="#9B795B"/>
  <rect x="600" y="290" width="20" height="30" rx="4" fill="#9B795B"/>
  <!-- Top Slotted Cap Handrail -->
  <line x1="120" y1="100" x2="680" y2="100" stroke="#272A27" stroke-width="6" stroke-linecap="round"/>
  `,
  "#667A68"
);

// 16. Main Gates
const mainGatesSvg = makeSvg(
  "Main Entrance Gates",
  "Heavy Structural Steel Swing & Sliding Gates • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Boundary Pillars -->
  <rect x="110" y="60" width="60" height="320" rx="4" fill="#ECE8DF" stroke="#272A27" stroke-width="2"/>
  <rect x="630" y="60" width="60" height="320" rx="4" fill="#ECE8DF" stroke="#272A27" stroke-width="2"/>
  <rect x="100" y="50" width="80" height="20" rx="4" fill="#9B795B"/>
  <rect x="620" y="50" width="80" height="20" rx="4" fill="#9B795B"/>
  <!-- Left Leaf -->
  <rect x="175" y="80" width="220" height="280" rx="6" fill="#272A27" stroke="#1A1C1A" stroke-width="2"/>
  <!-- Right Leaf -->
  <rect x="405" y="80" width="220" height="280" rx="6" fill="#272A27" stroke="#1A1C1A" stroke-width="2"/>
  <!-- Infill Patterns -->
  <rect x="190" y="100" width="190" height="240" fill="url(#flutes)" rx="4"/>
  <rect x="420" y="100" width="190" height="240" fill="url(#flutes)" rx="4"/>
  <!-- Heavy Industrial Ball Hinges -->
  <circle cx="173" cy="110" r="7" fill="#9B795B"/>
  <circle cx="173" cy="330" r="7" fill="#9B795B"/>
  <circle cx="627" cy="110" r="7" fill="#9B795B"/>
  <circle cx="627" cy="330" r="7" fill="#9B795B"/>
  <!-- Center Drop Bolt Handles -->
  <rect x="388" y="200" width="6" height="50" rx="3" fill="#FFFFFF"/>
  <rect x="406" y="200" width="6" height="50" rx="3" fill="#FFFFFF"/>
  `,
  "#272A27"
);

// 17. CNC Cut Gates
const cncGatesSvg = makeSvg(
  "CNC-Cut Gates",
  "Architectural Laser-Cut Metal Jali Main Gates • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Boundary Wall Pillars -->
  <rect x="110" y="60" width="50" height="320" rx="4" fill="#ECE8DF" stroke="#272A27" stroke-width="2"/>
  <rect x="640" y="60" width="50" height="320" rx="4" fill="#ECE8DF" stroke="#272A27" stroke-width="2"/>
  <!-- Double Gate Outer Frames -->
  <rect x="165" y="80" width="230" height="280" rx="6" fill="#272A27"/>
  <rect x="405" y="80" width="230" height="280" rx="6" fill="#272A27"/>
  <!-- Laser Jali Inserts -->
  <rect x="175" y="90" width="210" height="260" rx="4" fill="#363A36"/>
  <rect x="415" y="90" width="210" height="260" rx="4" fill="#363A36"/>
  <!-- Intricate Mandala Curves -->
  <circle cx="280" cy="220" r="70" fill="none" stroke="#FFD8A8" stroke-width="3" stroke-dasharray="10 5"/>
  <circle cx="280" cy="220" r="45" fill="none" stroke="#9B795B" stroke-width="2"/>
  <circle cx="280" cy="220" r="20" fill="none" stroke="#FFD8A8" stroke-width="3"/>
  <circle cx="520" cy="220" r="70" fill="none" stroke="#FFD8A8" stroke-width="3" stroke-dasharray="10 5"/>
  <circle cx="520" cy="220" r="45" fill="none" stroke="#9B795B" stroke-width="2"/>
  <circle cx="520" cy="220" r="20" fill="none" stroke="#FFD8A8" stroke-width="3"/>
  `,
  "#9B795B"
);

// 18. Steel & Iron Gates
const steelIronGatesSvg = makeSvg(
  "Steel & Iron Gates",
  "High-Strength Mild Steel & Hand-Forged Wrought Iron • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Heavy MS Gate Frame -->
  <rect x="120" y="80" width="560" height="280" rx="8" fill="#ECE8DF" stroke="#272A27" stroke-width="4"/>
  <!-- Solid Vertical Bars -->
  <g stroke="#272A27" stroke-width="4">
    <line x1="160" y1="80" x2="160" y2="360"/>
    <line x1="200" y1="80" x2="200" y2="360"/>
    <line x1="240" y1="80" x2="240" y2="360"/>
    <line x1="280" y1="80" x2="280" y2="360"/>
    <line x1="320" y1="80" x2="320" y2="360"/>
    <line x1="360" y1="80" x2="360" y2="360"/>
    <line x1="400" y1="80" x2="400" y2="360"/>
    <line x1="440" y1="80" x2="440" y2="360"/>
    <line x1="480" y1="80" x2="480" y2="360"/>
    <line x1="520" y1="80" x2="520" y2="360"/>
    <line x1="560" y1="80" x2="560" y2="360"/>
    <line x1="600" y1="80" x2="600" y2="360"/>
    <line x1="640" y1="80" x2="640" y2="360"/>
  </g>
  <!-- Decorative Spears on Top -->
  <g fill="#9B795B">
    <polygon points="160,65 155,80 165,80"/>
    <polygon points="200,65 195,80 205,80"/>
    <polygon points="240,65 235,80 245,80"/>
    <polygon points="280,65 275,80 285,80"/>
    <polygon points="320,65 315,80 325,80"/>
    <polygon points="360,65 355,80 365,80"/>
    <polygon points="400,65 395,80 405,80"/>
    <polygon points="440,65 435,80 445,80"/>
    <polygon points="480,65 475,80 485,80"/>
    <polygon points="520,65 515,80 525,80"/>
    <polygon points="560,65 555,80 565,80"/>
    <polygon points="600,65 595,80 605,80"/>
    <polygon points="640,65 635,80 645,80"/>
  </g>
  `,
  "#272A27"
);

// 19. Sliding Gates
const slidingGatesSvg = makeSvg(
  "Sliding Gate Systems",
  "Space-Saving Ground Track & Motorized Driveway Gates • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Concrete Track Base -->
  <rect x="90" y="340" width="620" height="30" rx="4" fill="#272A27"/>
  <line x1="90" y1="345" x2="710" y2="345" stroke="#9B795B" stroke-width="4"/>
  <!-- Sliding Gate Frame -->
  <rect x="180" y="80" width="480" height="250" rx="8" fill="#272A27" stroke="#1A1C1A" stroke-width="2"/>
  <rect x="195" y="95" width="450" height="220" fill="url(#flutes)" rx="4"/>
  <!-- Wheels on Track -->
  <circle cx="240" cy="340" r="14" fill="#667A68" stroke="#272A27" stroke-width="3"/>
  <circle cx="580" cy="340" r="14" fill="#667A68" stroke="#272A27" stroke-width="3"/>
  <!-- Sliding Motion Arrows -->
  <g transform="translate(110, 190)">
    <path d="M 0 10 L 40 10 M 25 0 L 40 10 L 25 20" stroke="#667A68" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  `,
  "#667A68"
);

// 20. Window Grills
const windowGrillsSvg = makeSvg(
  "Security Window Grills",
  "Modern Architectural Horizontal Slats & Heavy Steel Bars • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Window Reveal Frame -->
  <rect x="180" y="70" width="440" height="300" rx="6" fill="#ECE8DF" stroke="#272A27" stroke-width="4"/>
  <!-- Glass Window Panes Behind -->
  <rect x="190" y="80" width="205" height="280" fill="url(#glassGrad)"/>
  <rect x="405" y="80" width="205" height="280" fill="url(#glassGrad)"/>
  <!-- Horizontal Security Slats in Front -->
  <g stroke="#272A27" stroke-width="6" stroke-linecap="round">
    <line x1="180" y1="120" x2="620" y2="120"/>
    <line x1="180" y1="160" x2="620" y2="160"/>
    <line x1="180" y1="200" x2="620" y2="200"/>
    <line x1="180" y1="240" x2="620" y2="240"/>
    <line x1="180" y1="280" x2="620" y2="280"/>
    <line x1="180" y1="320" x2="620" y2="320"/>
  </g>
  `,
  "#272A27"
);

// 21. Exterior Cladding
const exteriorCladdingSvg = makeSvg(
  "Exterior Wall Cladding",
  "Co-Extruded Exterior WPC & Ventilated Rainscreen Facades • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Building Elevation Pillar Section -->
  <rect x="110" y="70" width="260" height="300" rx="6" fill="#272A27"/>
  <!-- Cladding Panel Grid -->
  <g transform="translate(120, 80)">
    <rect x="0" y="0" width="240" height="60" rx="4" fill="url(#walnutGrad)"/>
    <rect x="0" y="70" width="240" height="60" rx="4" fill="#806246"/>
    <rect x="0" y="140" width="240" height="60" rx="4" fill="url(#walnutGrad)"/>
    <rect x="0" y="210" width="240" height="60" rx="4" fill="#806246"/>
  </g>
  <!-- Architectural Fluted Fins Right Side -->
  <g transform="translate(410, 70)">
    <rect x="0" y="0" width="260" height="300" rx="6" fill="#ECE8DF" stroke="#DFDCD4"/>
    <rect x="20" y="20" width="25" height="260" rx="4" fill="#667A68"/>
    <rect x="65" y="20" width="25" height="260" rx="4" fill="#667A68"/>
    <rect x="110" y="20" width="25" height="260" rx="4" fill="#667A68"/>
    <rect x="155" y="20" width="25" height="260" rx="4" fill="#667A68"/>
    <rect x="200" y="20" width="25" height="260" rx="4" fill="#667A68"/>
  </g>
  `,
  "#9B795B"
);

// 22. ACP Cladding
const acpCladdingSvg = makeSvg(
  "ACP Facade Cladding",
  "Aluminium Composite Panels for Showrooms & Commercial Buildings • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#272A27" stroke="#1A1C1A" stroke-width="2" filter="url(#shadow)"/>
  <!-- Geometric Modern Commercial Grid -->
  <g transform="translate(110, 70)">
    <rect x="0" y="0" width="280" height="130" rx="4" fill="#3D403D" stroke="#272A27" stroke-width="4"/>
    <rect x="290" y="0" width="290" height="130" rx="4" fill="#667A68" stroke="#272A27" stroke-width="4"/>
    <rect x="0" y="140" width="180" height="150" rx="4" fill="#9B795B" stroke="#272A27" stroke-width="4"/>
    <rect x="190" y="140" width="200" height="150" rx="4" fill="#3D403D" stroke="#272A27" stroke-width="4"/>
    <rect x="400" y="140" width="180" height="150" rx="4" fill="#555855" stroke="#272A27" stroke-width="4"/>
  </g>
  <!-- Architectural Glazing Reveal Strip -->
  <line x1="110" y1="205" x2="690" y2="205" stroke="#1A1C1A" stroke-width="6"/>
  `,
  "#667A68"
);

// 23. Glass Partitions
const glassPartitionsSvg = makeSvg(
  "Glass Office Partitions",
  "Acoustic Frameless Glass Cabins & Conference Dividers • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Ceiling & Floor Channels -->
  <rect x="110" y="70" width="580" height="16" fill="#272A27"/>
  <rect x="110" y="350" width="580" height="16" fill="#272A27"/>
  <!-- Glass Panels Array -->
  <rect x="130" y="86" width="160" height="264" fill="url(#glassGrad)" stroke="#DFDCD4"/>
  <rect x="300" y="86" width="180" height="264" fill="url(#glassGrad)" stroke="#272A27" stroke-width="1.5"/>
  <rect x="490" y="86" width="180" height="264" fill="url(#glassGrad)" stroke="#DFDCD4"/>
  <!-- Frosted Privacy Band across all panels -->
  <rect x="130" y="180" width="540" height="60" fill="#FFFFFF" opacity="0.6"/>
  <!-- Glass Door Handle on center panel -->
  <rect x="315" y="190" width="6" height="50" rx="3" fill="#272A27"/>
  `,
  "#667A68"
);

// 24. Aluminium Doors & Windows
const aluminiumDoorsSvg = makeSvg(
  "Aluminium Doors & Windows",
  "Heavy-Gauge Sliding Windows, Balcony Sliders & Casement Glazing • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Outer Window Frame -->
  <rect x="140" y="70" width="520" height="300" rx="6" fill="#ECE8DF" stroke="#272A27" stroke-width="6"/>
  <!-- Left Sliding Sash -->
  <rect x="150" y="80" width="250" height="280" rx="4" fill="url(#glassGrad)" stroke="#272A27" stroke-width="4"/>
  <!-- Right Sliding Sash -->
  <rect x="390" y="80" width="260" height="280" rx="4" fill="url(#glassGrad)" stroke="#272A27" stroke-width="4"/>
  <!-- Vertical Interlock Profile -->
  <rect x="390" y="80" width="10" height="280" fill="#272A27"/>
  <rect x="375" y="200" width="8" height="40" rx="4" fill="#272A27"/>
  `,
  "#272A27"
);

// 25. Commercial Office Interiors
const officeInteriorsSvg = makeSvg(
  "Commercial Office Fit-Outs",
  "Modular Workstations, Director Cabins & Conference Spaces • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Left Side Glass Cabin -->
  <rect x="110" y="70" width="220" height="300" rx="6" fill="url(#glassGrad)" stroke="#272A27" stroke-width="2"/>
  <rect x="130" y="160" width="180" height="40" fill="#FFFFFF" opacity="0.7"/>
  <rect x="140" y="220" width="140" height="50" rx="4" fill="url(#walnutGrad)"/>
  <!-- Right Side Modular Workstation Cluster -->
  <g transform="translate(360, 110)">
    <!-- Back-to-Back Desks -->
    <rect x="0" y="0" width="140" height="80" rx="4" fill="#ECE8DF" stroke="#DFDCD4" stroke-width="1.5"/>
    <rect x="150" y="0" width="140" height="80" rx="4" fill="#ECE8DF" stroke="#DFDCD4" stroke-width="1.5"/>
    <!-- Center Screen Divider -->
    <rect x="0" y="76" width="290" height="8" rx="4" fill="#667A68"/>
    <rect x="0" y="84" width="140" height="80" rx="4" fill="#ECE8DF" stroke="#DFDCD4" stroke-width="1.5"/>
    <rect x="150" y="84" width="140" height="80" rx="4" fill="#ECE8DF" stroke="#DFDCD4" stroke-width="1.5"/>
    <!-- Monitors -->
    <rect x="40" y="25" width="60" height="35" rx="3" fill="#272A27"/>
    <rect x="190" y="25" width="60" height="35" rx="3" fill="#272A27"/>
    <rect x="40" y="105" width="60" height="35" rx="3" fill="#272A27"/>
    <rect x="190" y="105" width="60" height="35" rx="3" fill="#272A27"/>
  </g>
  `,
  "#667A68"
);

// 26. Showroom Interiors
const showroomInteriorsSvg = makeSvg(
  "Shop & Showroom Interiors",
  "Retail Display Systems, Cashier Counters & Storefront Glazing • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Perimeter Wall Displays -->
  <rect x="110" y="70" width="380" height="200" rx="6" fill="#F7F5F0" stroke="#DFDCD4" stroke-width="1.5"/>
  <rect x="130" y="90" width="340" height="15" rx="3" fill="#9B795B"/>
  <rect x="130" y="140" width="340" height="15" rx="3" fill="#9B795B"/>
  <rect x="130" y="190" width="340" height="15" rx="3" fill="#9B795B"/>
  <rect x="130" y="240" width="340" height="15" rx="3" fill="#9B795B"/>
  <!-- Spotlights Aiming at Products -->
  <circle cx="170" cy="75" r="6" fill="#FFD8A8"/>
  <circle cx="280" cy="75" r="6" fill="#FFD8A8"/>
  <circle cx="390" cy="75" r="6" fill="#FFD8A8"/>
  <!-- Front Cashier Checkout Counter -->
  <rect x="470" y="200" width="210" height="140" rx="8" fill="url(#walnutGrad)" filter="url(#shadow)"/>
  <rect x="500" y="180" width="70" height="20" rx="4" fill="#272A27"/>
  <rect x="590" y="180" width="60" height="20" rx="4" fill="#667A68"/>
  `,
  "#9B795B"
);

// 27. Clinic Interiors
const clinicInteriorsSvg = makeSvg(
  "Clinic & Healthcare Fit-Outs",
  "Hygienic Consultation Chambers, Reception Desks & Sanitary Storage • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Clean Blue/Sage Palette -->
  <rect x="110" y="70" width="580" height="300" rx="8" fill="#F4F8F5" stroke="#DFDCD4" stroke-width="1.5"/>
  <!-- Doctor Desk -->
  <rect x="140" y="180" width="220" height="80" rx="6" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="2"/>
  <rect x="170" y="150" width="60" height="30" rx="4" fill="#272A27"/>
  <!-- Examination Bed -->
  <rect x="420" y="180" width="230" height="60" rx="6" fill="#667A68"/>
  <rect x="420" y="160" width="60" height="20" rx="4" fill="#556957"/>
  <!-- Medical Storage Cabinet with Cross Icon -->
  <rect x="420" y="90" width="160" height="60" rx="6" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5"/>
  <path d="M 500 105 L 500 135 M 485 120 L 515 120" stroke="#667A68" stroke-width="4" stroke-linecap="round"/>
  `,
  "#667A68"
);

// 28. School Interiors
const schoolInteriorsSvg = makeSvg(
  "School & Educational Fit-Outs",
  "Staff Room Workstations, Student Lockers & Institutional Joinery • Ayodhya",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Library Bookcase Array -->
  <rect x="110" y="70" width="260" height="300" rx="6" fill="url(#walnutGrad)"/>
  <line x1="110" y1="130" x2="370" y2="130" stroke="#806246" stroke-width="4"/>
  <line x1="110" y1="190" x2="370" y2="190" stroke="#806246" stroke-width="4"/>
  <line x1="110" y1="250" x2="370" y2="250" stroke="#806246" stroke-width="4"/>
  <line x1="110" y1="310" x2="370" y2="310" stroke="#806246" stroke-width="4"/>
  <!-- Multi-Color Book Spines -->
  <rect x="130" y="140" width="16" height="46" fill="#667A68"/>
  <rect x="150" y="140" width="18" height="46" fill="#DFDCD4"/>
  <rect x="172" y="140" width="14" height="46" fill="#272A27"/>
  <rect x="190" y="140" width="20" height="46" fill="#667A68"/>
  <!-- Staff Desks & Study Tables Right -->
  <g transform="translate(410, 100)">
    <rect x="0" y="0" width="250" height="110" rx="8" fill="#ECE8DF" stroke="#DFDCD4" stroke-width="1.5"/>
    <text x="125" y="45" font-family="'Manrope', sans-serif" font-size="16" font-weight="700" fill="#272A27" text-anchor="middle">Staff Workstations</text>
    <text x="125" y="70" font-family="'Inter', sans-serif" font-size="12" fill="#6F726C" text-anchor="middle">Heavy-Duty ABS Edged • Lockable Storage</text>
    <rect x="0" y="140" width="250" height="110" rx="8" fill="#F7F5F0" stroke="#667A68" stroke-width="1.5"/>
    <text x="125" y="185" font-family="'Manrope', sans-serif" font-size="16" font-weight="700" fill="#667A68" text-anchor="middle">Student Locker Banks</text>
    <text x="125" y="210" font-family="'Inter', sans-serif" font-size="12" fill="#6F726C" text-anchor="middle">Ventilated Steel & Compact Laminate</text>
  </g>
  `,
  "#667A68"
);

// Hero Image
const heroSvg = makeSvg(
  "Complete Interior, Exterior & Metalwork Solutions",
  "Ayodhya Interiors & Exterior Studio • Ayodhya, Uttar Pradesh",
  `
  <rect x="80" y="50" width="640" height="340" rx="16" fill="#FFFFFF" stroke="#DFDCD4" stroke-width="1.5" filter="url(#shadow)"/>
  <!-- Split Architectural Canvas: Left Living Room, Right Facade & Gates -->
  <g transform="translate(90, 60)">
    <!-- Left Section: Fluted Louvers & TV Unit -->
    <rect x="10" y="10" width="295" height="300" rx="8" fill="#F7F5F0"/>
    <rect x="25" y="25" width="100" height="270" fill="url(#flutes)" rx="4"/>
    <rect x="135" y="25" width="155" height="190" fill="url(#marbleGrad)" rx="6"/>
    <rect x="155" y="50" width="115" height="70" rx="4" fill="#272A27"/>
    <rect x="70" y="225" width="215" height="30" rx="4" fill="url(#walnutGrad)"/>

    <!-- Right Section: Exterior Facade & CNC Gate Preview -->
    <rect x="315" y="10" width="305" height="300" rx="8" fill="#ECE8DF"/>
    <!-- Glass Railing Overlook -->
    <rect x="330" y="30" width="275" height="110" rx="6" fill="url(#glassGrad)" stroke="#DFDCD4" stroke-width="1.5"/>
    <line x1="330" y1="30" x2="605" y2="30" stroke="#9B795B" stroke-width="6"/>
    <!-- Modern Laser Gate Base -->
    <rect x="330" y="160" width="275" height="135" rx="6" fill="#272A27"/>
    <circle cx="467" cy="227" r="40" fill="none" stroke="#FFD8A8" stroke-width="2" stroke-dasharray="6 4"/>
    <circle cx="467" cy="227" r="20" fill="none" stroke="#9B795B" stroke-width="2"/>
  </g>
  `,
  "#667A68"
);

// Favicon
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#272A27"/>
  <rect x="6" y="6" width="52" height="52" rx="10" fill="#F7F5F0" stroke="#DFDCD4" stroke-width="1.5"/>
  <!-- Stylized Geometric A for Ayodhya Architecture -->
  <path d="M 32 14 L 46 48 L 38 48 L 32 32 L 26 48 L 18 48 Z" fill="#667A68"/>
  <line x1="24" y1="38" x2="40" y2="38" stroke="#9B795B" stroke-width="3" stroke-linecap="round"/>
</svg>`;

// Write all services
const servicesMap = {
  "home-interiors.svg": homeInteriorsSvg,
  "modular-kitchen.svg": modularKitchenSvg,
  "custom-furniture.svg": customFurnitureSvg,
  "tv-units.svg": tvUnitsSvg,
  "false-ceilings.svg": falseCeilingsSvg,
  "flooring.svg": flooringSvg,
  "pvc-panels.svg": pvcPanelsSvg,
  "wpc-panels.svg": wpcPanelsSvg,
  "fluted-louvers.svg": flutedLouversSvg,
  "uv-marble.svg": uvMarbleSvg,
  "staircase-railings.svg": staircaseRailingsSvg,
  "glass-railings.svg": glassRailingsSvg,
  "steel-iron-railings.svg": steelIronRailingsSvg,
  "cnc-railings.svg": cncRailingsSvg,
  "balcony-railings.svg": balconyRailingsSvg,
  "main-gates.svg": mainGatesSvg,
  "cnc-gates.svg": cncGatesSvg,
  "steel-iron-gates.svg": steelIronGatesSvg,
  "sliding-gates.svg": slidingGatesSvg,
  "window-grills.svg": windowGrillsSvg,
  "exterior-cladding.svg": exteriorCladdingSvg,
  "acp-cladding.svg": acpCladdingSvg,
  "glass-partitions.svg": glassPartitionsSvg,
  "aluminium-doors.svg": aluminiumDoorsSvg,
  "office-interiors.svg": officeInteriorsSvg,
  "showroom-interiors.svg": showroomInteriorsSvg,
  "clinic-interiors.svg": clinicInteriorsSvg,
  "school-interiors.svg": schoolInteriorsSvg
};

Object.entries(servicesMap).forEach(([filename, svg]) => {
  fs.writeFileSync(path.join(serviceImgDir, filename), svg);
});

// Projects map
const projectsMap = {
  "project-kitchen.svg": modularKitchenSvg,
  "project-tv-wall.svg": tvUnitsSvg,
  "project-stair-glass.svg": staircaseRailingsSvg,
  "project-cnc-gate.svg": cncGatesSvg,
  "project-facade.svg": exteriorCladdingSvg,
  "project-office.svg": officeInteriorsSvg,
  "project-wardrobe.svg": customFurnitureSvg,
  "project-balcony.svg": balconyRailingsSvg
};

Object.entries(projectsMap).forEach(([filename, svg]) => {
  fs.writeFileSync(path.join(projectImgDir, filename), svg);
});

// Guides map
const guidesMap = {
  "guide-kitchen.svg": modularKitchenSvg,
  "guide-panels.svg": pvcPanelsSvg,
  "guide-railings.svg": staircaseRailingsSvg,
  "guide-gates.svg": mainGatesSvg
};

Object.entries(guidesMap).forEach(([filename, svg]) => {
  fs.writeFileSync(path.join(guideImgDir, filename), svg);
});

// Hero and Favicon
fs.writeFileSync(path.join(heroImgDir, "hero-architectural.svg"), heroSvg);
fs.writeFileSync(path.join(imgDir, "og-default.jpg"), heroSvg); // Fallback OG image
fs.writeFileSync(path.join(publicDir, "favicon.svg"), faviconSvg);

console.log("Successfully generated all architectural SVG assets!");
