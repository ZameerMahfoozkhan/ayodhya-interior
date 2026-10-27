import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// 1. Fix HomePage.js
const homePageFile = path.join(rootDir, "src", "pages", "HomePage.js");
if (fs.existsSync(homePageFile)) {
  let content = fs.readFileSync(homePageFile, "utf8");
  content = content.replace('/images//.jpg', '/images/hero/hero-architectural.jpg');
  fs.writeFileSync(homePageFile, content, "utf8");
  console.log("Fixed HomePage.js hero image path");
}

// 2. Fix projects.js
const projectsFile = path.join(rootDir, "src", "data", "projects.js");
if (fs.existsSync(projectsFile)) {
  const images = [
    "/images/projects/project-kitchen.jpg",
    "/images/projects/project-tv-wall.jpg",
    "/images/projects/project-stair-glass.jpg",
    "/images/projects/project-cnc-gate.jpg",
    "/images/projects/project-facade.jpg",
    "/images/projects/project-office.jpg",
    "/images/projects/project-wardrobe.jpg",
    "/images/projects/project-balcony.jpg"
  ];
  let content = fs.readFileSync(projectsFile, "utf8");
  let i = 0;
  content = content.replace(/image:\s*"\/images\/\/\.jpg"/g, () => {
    const img = images[i] || images[0];
    i++;
    return `image: "${img}"`;
  });
  fs.writeFileSync(projectsFile, content, "utf8");
  console.log("Fixed projects.js image paths");
}

// 3. Fix guides.js
const guidesFile = path.join(rootDir, "src", "data", "guides.js");
if (fs.existsSync(guidesFile)) {
  const images = [
    "/images/guides/guide-kitchen.jpg",
    "/images/guides/guide-panels.jpg",
    "/images/guides/guide-railings.jpg",
    "/images/guides/guide-gates.jpg"
  ];
  let content = fs.readFileSync(guidesFile, "utf8");
  let i = 0;
  content = content.replace(/image:\s*"\/images\/\/\.jpg"/g, () => {
    const img = images[i] || images[0];
    i++;
    return `image: "${img}"`;
  });
  fs.writeFileSync(guidesFile, content, "utf8");
  console.log("Fixed guides.js image paths");
}

// 4. Fix service files
const serviceFiles = [
  {
    file: "residential.js",
    mapping: {
      "home-interiors-ayodhya": "/images/services/home-interiors.jpg",
      "modular-kitchen-ayodhya": "/images/services/modular-kitchen.jpg",
      "custom-furniture-ayodhya": "/images/services/custom-furniture.jpg",
      "tv-unit-design-ayodhya": "/images/services/tv-units.jpg",
      "false-ceiling-ayodhya": "/images/services/false-ceilings.jpg",
      "flooring-ayodhya": "/images/services/flooring.jpg"
    }
  },
  {
    file: "panels.js",
    mapping: {
      "pvc-wall-panels-ayodhya": "/images/services/pvc-panels.jpg",
      "wpc-wall-panels-ayodhya": "/images/services/wpc-panels.jpg",
      "fluted-panels-louvers-ayodhya": "/images/services/fluted-louvers.jpg",
      "uv-marble-sheets-ayodhya": "/images/services/uv-marble.jpg"
    }
  },
  {
    file: "gates.js",
    mapping: {
      "main-gate-installation-ayodhya": "/images/services/main-gates.jpg",
      "cnc-cut-gates-ayodhya": "/images/services/cnc-gates.jpg",
      "steel-iron-gates-ayodhya": "/images/services/steel-iron-gates.jpg",
      "sliding-gates-ayodhya": "/images/services/sliding-gates.jpg",
      "window-grills-ayodhya": "/images/services/window-grills.jpg"
    }
  },
  {
    file: "railings.js",
    mapping: {
      "staircase-railings-ayodhya": "/images/services/staircase-railings.jpg",
      "glass-railings-ayodhya": "/images/services/glass-railings.jpg",
      "steel-iron-railings-ayodhya": "/images/services/steel-iron-railings.jpg",
      "cnc-cut-railings-ayodhya": "/images/services/cnc-railings.jpg",
      "balcony-railings-ayodhya": "/images/services/balcony-railings.jpg"
    }
  },
  {
    file: "exterior.js",
    mapping: {
      "exterior-wall-cladding-ayodhya": "/images/services/exterior-cladding.jpg",
      "acp-cladding-ayodhya": "/images/services/acp-cladding.jpg",
      "glass-partitions-ayodhya": "/images/services/glass-partitions.jpg",
      "aluminium-doors-windows-ayodhya": "/images/services/aluminium-doors.jpg"
    }
  },
  {
    file: "commercial.js",
    mapping: {
      "office-interior-ayodhya": "/images/services/office-interiors.jpg",
      "shop-showroom-interior-ayodhya": "/images/services/showroom-interiors.jpg",
      "clinic-hospital-interior-ayodhya": "/images/services/clinic-interiors.jpg",
      "school-interior-ayodhya": "/images/services/school-interiors.jpg"
    }
  }
];

for (const s of serviceFiles) {
  const filePath = path.join(rootDir, "src", "data", "services", s.file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, "utf8");
  for (const [slug, imgPath] of Object.entries(s.mapping)) {
    // Look for slug: "...", then heroImage: "/images//.jpg"
    const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?heroImage:\\s*)"\/images\/\/\.jpg"`, "g");
    content = content.replace(regex, `$1"${imgPath}"`);
  }
  // Also any remaining /images//.jpg
  content = content.replace(/heroImage:\s*"\/images\/\/\.jpg"/g, 'heroImage: "/images/services/home-interiors.jpg"');
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Fixed services/${s.file} image paths`);
}
