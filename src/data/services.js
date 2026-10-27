/**
 * Master Services Registry for Ayodhya Interiors & Exterior Studio
 * 
 * Aggregates all 28 Phase 1 service datasets across:
 * - Residential (6)
 * - Panels & Finishes (4)
 * - Gates & Railings (10: 5 Railings + 5 Gates)
 * - Exterior & Glazing (4)
 * - Commercial Fit-Outs (4)
 * 
 * Total: 28 comprehensive, rich service pages.
 */

import { residentialServices } from "./services/residential.js";
import { panelServices } from "./services/panels.js";
import { railingServices } from "./services/railings.js";
import { gateServices } from "./services/gates.js";
import { exteriorServices } from "./services/exterior.js";
import { commercialServices } from "./services/commercial.js";

export const allServices = [
  ...residentialServices,
  ...panelServices,
  ...railingServices,
  ...gateServices,
  ...exteriorServices,
  ...commercialServices
];

/**
 * Find a service by its URL slug
 * @param {string} slug 
 * @returns {object|undefined}
 */
export function getServiceBySlug(slug) {
  const cleanSlug = slug.replace(/^\/|\/$/g, "");
  return allServices.find(s => s.slug === cleanSlug);
}

/**
 * Filter services by category
 * @param {string} category 
 * @returns {Array}
 */
export function getServicesByCategory(category) {
  return allServices.filter(s => s.category === category);
}

/**
 * Retrieve related service objects for a given service slug
 * @param {string} slug 
 * @returns {Array}
 */
export function getRelatedServices(slug) {
  const service = getServiceBySlug(slug);
  if (!service || !service.relatedSlugs) return [];
  return service.relatedSlugs
    .map(relSlug => getServiceBySlug(relSlug))
    .filter(Boolean);
}
