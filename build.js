/**
 * Static Site Builder for Ayodhya Interiors & Exterior Studio
 * Compiles all 35 canonical Phase 1 routes into 100% crawlable raw HTML files,
 * builds sitemap.xml, robots.txt, and copies all static assets into dist/
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { siteConfig } from "./src/config/site.js";
import { allServices } from "./src/data/services.js";
import { categoriesData, getServicesForCategory } from "./src/data/categories.js";
import { guidesData } from "./src/data/guides.js";
import { renderBaseLayout } from "./src/layout/BaseLayout.js";
import { buildGlobalSchema, buildServiceSchema, buildCategorySchema, buildGuidesSchema } from "./src/components/SchemaOrg.js";

// Pages
import { renderHomePage } from "./src/pages/HomePage.js";
import { renderServicesPage } from "./src/pages/ServicesPage.js";
import { renderCategoryPage } from "./src/pages/CategoryPage.js";
import { renderAboutPage } from "./src/pages/AboutPage.js";
import { renderContactPage } from "./src/pages/ContactPage.js";
import { renderProjectsPage } from "./src/pages/ProjectsPage.js";
import { renderGuidesPage } from "./src/pages/GuidesPage.js";
import { renderPrivacyPolicyPage } from "./src/pages/PrivacyPolicyPage.js";
import { renderNotFoundPage } from "./src/pages/NotFoundPage.js";
import { renderServiceDetailPage } from "./src/pages/ServiceDetailPage.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, "dist");
const publicDir = path.join(__dirname, "public");

// Helper to write file ensuring directory exists
function writeOutputFile(relativeFilePath, content) {
  const targetPath = path.join(distDir, relativeFilePath);
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(targetPath, content, "utf8");
}

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function build() {
  console.log("Starting production build for Ayodhya Interiors & Exterior Studio...");

  // 1. Clean and initialize dist directory
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  // 2. Copy all public assets (CSS, JS, Images, Favicon)
  copyDirSync(publicDir, distDir);
  console.log("✓ Static assets copied to dist/");

  const canonicalRoutes = [];

  // 3. Build Core Pages
  // A. Homepage (/)
  const homeContent = renderHomePage();
  const homeHtml = renderBaseLayout({
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultMetaDescription,
    currentPath: "/",
    schemaHtml: buildGlobalSchema(),
    content: homeContent
  });
  writeOutputFile("index.html", homeHtml);
  canonicalRoutes.push({
    url: "/",
    priority: "1.0",
    changefreq: "weekly",
    image: { url: "/images/hero/hero-architectural.webp", title: "Ayodhya Interiors & Exterior Studio Architectural Concept" }
  });
  console.log("✓ Homepage built: /");

  // B. Services Directory (/services/)
  const servicesContent = renderServicesPage();
  const servicesHtml = renderBaseLayout({
    title: `All 28 Interior, Exterior, Gate & Railing Services in Ayodhya | Complete Directory`,
    description: `Explore all 28 specialized interior design, modular kitchen, PVC/WPC wall panel, custom gate, railing, and commercial fit-out services in Ayodhya.`,
    currentPath: "/services/",
    canonicalUrl: "/services/",
    content: servicesContent
  });
  writeOutputFile("services/index.html", servicesHtml);
  canonicalRoutes.push({ url: "/services/", priority: "0.9", changefreq: "weekly" });
  console.log("✓ Services Directory built: /services/");

  // B2. Build 6 Dedicated Category Hub Pages (/services/[category.slug]/)
  console.log("Building all 6 dedicated service category hubs...");
  for (const cat of categoriesData) {
    const catContent = renderCategoryPage(cat);
    const catServices = getServicesForCategory(cat.id);
    const catBreadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services/" },
      { name: cat.name, url: cat.url }
    ];
    const catHtml = renderBaseLayout({
      title: cat.metaTitle,
      description: cat.metaDescription,
      currentPath: cat.url,
      canonicalUrl: cat.url,
      schemaHtml: buildCategorySchema(cat, catServices, catBreadcrumbs),
      content: catContent
    });
    writeOutputFile(`services/${cat.slug}/index.html`, catHtml);
    canonicalRoutes.push({
      url: cat.url,
      priority: "0.85",
      changefreq: "weekly",
      image: { url: cat.heroImage, title: `${cat.name} in Ayodhya` }
    });
    console.log(`  ✓ Category Hub built: ${cat.url}`);
  }

  // C. About Studio (/about/)
  const aboutContent = renderAboutPage();
  const aboutHtml = renderBaseLayout({
    title: `About ${siteConfig.brandName} | Interior & Exterior Solutions in Ayodhya`,
    description: `Learn about our studio working philosophy, material transparency standards, and unified execution approach for residential and commercial spaces in Ayodhya.`,
    currentPath: "/about/",
    canonicalUrl: "/about/",
    content: aboutContent
  });
  writeOutputFile("about/index.html", aboutHtml);
  canonicalRoutes.push({ url: "/about/", priority: "0.8", changefreq: "monthly" });
  console.log("✓ About Page built: /about/");

  // D. Contact & Consultation (/contact/)
  const contactContent = renderContactPage();
  const contactHtml = renderBaseLayout({
    title: `Contact & Request Estimate | ${siteConfig.brandName} in Ayodhya`,
    description: `Request a site measurement and project consultation in Ayodhya. Call or WhatsApp ${siteConfig.phone} for modular kitchens, panels, gates & railings.`,
    currentPath: "/contact/",
    canonicalUrl: "/contact/",
    content: contactContent
  });
  writeOutputFile("contact/index.html", contactHtml);
  canonicalRoutes.push({ url: "/contact/", priority: "0.9", changefreq: "monthly" });
  console.log("✓ Contact Page built: /contact/");

  // E. Project Gallery (/projects/)
  const projectsContent = renderProjectsPage();
  const projectsHtml = renderBaseLayout({
    title: `Projects & Design Inspiration Gallery | ${siteConfig.brandShortName} Ayodhya`,
    description: `Explore design concepts and material specifications for kitchens, living room wall panels, modern gates, and glass railings across Ayodhya properties.`,
    currentPath: "/projects/",
    canonicalUrl: "/projects/",
    content: projectsContent
  });
  writeOutputFile("projects/index.html", projectsHtml);
  canonicalRoutes.push({ url: "/projects/", priority: "0.8", changefreq: "weekly" });
  console.log("✓ Projects Page built: /projects/");

  // F. Advice & Guides Index (/guides/)
  const guidesContent = renderGuidesPage();
  const guidesHtml = renderBaseLayout({
    title: `Interior & Exterior Material Advice Guides | Ayodhya Studio`,
    description: `Practical buying guides on modular kitchens, PVC vs WPC panels, glass vs steel staircase railings, and main entrance gate selection in Ayodhya.`,
    currentPath: "/guides/",
    canonicalUrl: "/guides/",
    schemaHtml: buildGuidesSchema(guidesData),
    content: guidesContent
  });
  writeOutputFile("guides/index.html", guidesHtml);
  canonicalRoutes.push({
    url: "/guides/",
    priority: "0.8",
    changefreq: "weekly",
    image: { url: "/images/guides/guide-kitchen.webp", title: "Modular Kitchen Advice Guide in Ayodhya" }
  });
  console.log("✓ Guides Page built: /guides/");

  // G. Privacy Policy (/privacy-policy/)
  const privacyContent = renderPrivacyPolicyPage();
  const privacyHtml = renderBaseLayout({
    title: `Privacy Policy | ${siteConfig.brandName}`,
    description: `Read our transparent privacy policy and understand our direct WhatsApp enquiry communication process.`,
    currentPath: "/privacy-policy/",
    canonicalUrl: "/privacy-policy/",
    content: privacyContent
  });
  writeOutputFile("privacy-policy/index.html", privacyHtml);
  canonicalRoutes.push({ url: "/privacy-policy/", priority: "0.3", changefreq: "yearly" });
  console.log("✓ Privacy Policy built: /privacy-policy/");

  // H. Custom 404 Error Page (/404.html)
  const notFoundContent = renderNotFoundPage();
  const notFoundHtml = renderBaseLayout({
    title: `Page Not Found (404) | ${siteConfig.brandName}`,
    description: `The requested page could not be found. Explore our complete directory of interior, exterior, gate, and railing services in Ayodhya.`,
    currentPath: "/404.html",
    canonicalUrl: "/404.html",
    content: notFoundContent
  });
  writeOutputFile("404.html", notFoundHtml);
  console.log("✓ Custom 404 Page built: /404.html");

  // 4. Build All 28 Dedicated Service Pages
  console.log(`\nBuilding all ${allServices.length} dedicated service pages...`);
  allServices.forEach((service) => {
    const serviceContent = renderServiceDetailPage(service);
    const servicePath = `/${service.slug}/`;
    
    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services/" },
      { name: service.title }
    ];

    const serviceHtml = renderBaseLayout({
      title: service.metaTitle,
      description: service.metaDescription,
      currentPath: servicePath,
      canonicalUrl: servicePath,
      ogImage: service.heroImage,
      schemaHtml: buildServiceSchema(service, breadcrumbs),
      customWhatsAppPrompt: service.whatsappPrompt,
      content: serviceContent
    });

    writeOutputFile(`${service.slug}/index.html`, serviceHtml);
    canonicalRoutes.push({
      url: servicePath,
      priority: "0.85",
      changefreq: "monthly",
      image: { url: service.heroImage, title: `${service.title} in Ayodhya` }
    });
    console.log(`  ✓ Built: ${servicePath}`);
  });

  // 5. Generate XML Sitemap (with Google Image Sitemap support)
  const today = new Date().toISOString().split("T")[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${canonicalRoutes.map(route => `  <url>
    <loc>${siteConfig.siteUrl}${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>${route.image ? `
    <image:image>
      <image:loc>${siteConfig.siteUrl}${route.image.url}</image:loc>
      <image:title><![CDATA[${route.image.title}]]></image:title>
    </image:image>` : ""}
  </url>`).join("\n")}
</urlset>`;

  writeOutputFile("sitemap.xml", sitemapXml);
  console.log(`✓ Valid sitemap.xml generated with ${canonicalRoutes.length} indexable URLs & Image metadata`);

  // 6. Generate robots.txt (with AI Agentic and llms.txt directives)
  const robotsTxt = `# robots.txt for ${siteConfig.brandName}
# Canonical Website: ${siteConfig.siteUrl}

User-agent: *
Allow: /
Disallow: /404.html

# AI Search & Autonomous Agent Crawlers
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

# Sitemap & LLM Discovery
Sitemap: ${siteConfig.siteUrl}/sitemap.xml
# LLMs specification: https://llmstxt.org
# LLMs discovery: ${siteConfig.siteUrl}/llms.txt
`;
  writeOutputFile("robots.txt", robotsTxt);
  console.log("✓ robots.txt generated with AI agent directives");

  // 7. Generate site.webmanifest
  const manifest = {
    name: siteConfig.brandName,
    short_name: siteConfig.brandShortName,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F0",
    theme_color: "#667A68",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "64x64",
        type: "image/svg+xml"
      }
    ]
  };
  writeOutputFile("site.webmanifest", JSON.stringify(manifest, null, 2));
  console.log("✓ site.webmanifest generated");

  console.log(`\n======================================================`);
  console.log(`BUILD COMPLETE: Successfully generated all ${canonicalRoutes.length} canonical pages + 404 in dist/`);
  console.log(`Ready for production deployment and local serving!`);
  console.log(`======================================================\n`);
}

build().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
