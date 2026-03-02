// Networx Task ID mapping for each article
// Rule: when in doubt, add MORE task IDs for broader coverage

// Default task IDs applied to ALL articles (core basement services)
const DEFAULT_TASK_IDS = [337, 393, 143, 417]
// 337 = Crawl Space / Basement Water Remediation
// 393 = Crawl Space / Basement Waterproofing
// 143 = Basement Remodel
// 417 = Concrete Foundation - Repair

export const TASK_ID_MAP: Record<string, number[]> = {
  // Waterproofing articles
  'complete-basement-waterproofing-guide': [...DEFAULT_TASK_IDS, 391, 573, 229, 254, 287, 373],
  'basement-waterproofing-cost': [...DEFAULT_TASK_IDS, 391, 573, 229, 254, 373],
  'interior-vs-exterior-waterproofing': [...DEFAULT_TASK_IDS, 391, 573, 229, 254, 373],
  'crystalline-waterproofing': [...DEFAULT_TASK_IDS, 391, 573, 254],
  'waterproof-basement-paint-sealers': [...DEFAULT_TASK_IDS, 391, 254],
  'waterproofing-home-appraisal-value': [...DEFAULT_TASK_IDS, 391, 573, 229, 254],
  'how-to-hire-basement-waterproofing-contractor': [...DEFAULT_TASK_IDS, 391, 573, 229, 254, 287, 373],

  // Foundation articles
  'foundation-crack-repair-cost': [...DEFAULT_TASK_IDS, 391, 387, 353, 67, 68, 70],
  'types-of-foundation-cracks': [...DEFAULT_TASK_IDS, 391, 387, 353, 67, 68, 70],
  'bowing-basement-walls': [...DEFAULT_TASK_IDS, 391, 387, 353, 70],
  'basement-vs-crawl-space-vs-slab': [...DEFAULT_TASK_IDS, 391, 387, 353],

  // Sump pump articles
  'sump-pump-buying-guide': [...DEFAULT_TASK_IDS, 229, 573, 130, 254],
  'sump-pump-cost': [...DEFAULT_TASK_IDS, 229, 573, 130, 254],
  'smart-sump-pumps-guide': [...DEFAULT_TASK_IDS, 229, 573, 130],
  'battery-vs-water-powered-sump-pumps': [...DEFAULT_TASK_IDS, 229, 573, 130],
  'why-basement-floods-with-sump-pump': [...DEFAULT_TASK_IDS, 229, 573, 130, 254, 287],
  'best-sump-pumps-2026': [...DEFAULT_TASK_IDS, 229, 573, 130],
  'submersible-vs-pedestal-sump-pump': [...DEFAULT_TASK_IDS, 229, 573, 130],

  // French drain articles
  'french-drain-cost': [...DEFAULT_TASK_IDS, 573, 229, 130, 254],
  'french-drain-vs-sump-pump': [...DEFAULT_TASK_IDS, 573, 229, 130, 254],

  // Mold articles
  'how-to-prevent-basement-mold': [...DEFAULT_TASK_IDS, 287, 579, 373, 375, 254],
  'mold-remediation-cost': [...DEFAULT_TASK_IDS, 287, 579, 373, 375, 254],
  'musty-basement-smell': [...DEFAULT_TASK_IDS, 287, 579, 373, 375],

  // Moisture / humidity articles
  'basement-humidity-guide': [...DEFAULT_TASK_IDS, 373, 375, 287, 579, 258],
  'dehumidifier-myths': [...DEFAULT_TASK_IDS, 373, 375, 287],
  'basement-efflorescence': [...DEFAULT_TASK_IDS, 287, 254, 373],
  'best-basement-dehumidifiers': [...DEFAULT_TASK_IDS, 373, 375, 287],

  // Finishing / remodeling articles
  'basement-finishing-cost': [...DEFAULT_TASK_IDS, 154, 153, 221, 236, 226, 258, 220],
  'how-to-finish-a-basement': [...DEFAULT_TASK_IDS, 154, 153, 221, 236, 226, 258, 220],
  'basement-adu-rental-suite': [...DEFAULT_TASK_IDS, 154, 153, 221, 236, 226, 258, 130, 229],
  'basement-bathroom-guide': [...DEFAULT_TASK_IDS, 154, 153, 130, 129, 226],
  'basement-home-gym': [...DEFAULT_TASK_IDS, 154, 153, 221, 226, 258],
  'basement-renovation-mistakes': [...DEFAULT_TASK_IDS, 154, 153, 221, 236, 226],
  'pre-finish-audit': [...DEFAULT_TASK_IDS, 154, 153, 287, 579, 229, 258],
  'drop-ceiling-vs-drywall': [...DEFAULT_TASK_IDS, 154, 153, 221, 236, 220],

  // Insulation articles
  'basement-insulation-guide': [...DEFAULT_TASK_IDS, 258, 339, 341, 221],
  'best-vapor-barriers': [...DEFAULT_TASK_IDS, 258, 339, 341],

  // Flooring articles
  'best-basement-flooring': [...DEFAULT_TASK_IDS, 154, 153, 226],

  // Egress window
  'egress-window-cost': [...DEFAULT_TASK_IDS, 154, 153, 226],

  // Water damage / emergency
  'basement-emergency-water-plan': [...DEFAULT_TASK_IDS, 254, 229, 573, 287, 130, 293],
  'basement-flooding-insurance': [...DEFAULT_TASK_IDS, 254, 229, 573, 287, 293],

  // Permits
  'basement-permits-guide': [...DEFAULT_TASK_IDS, 154, 153],

  // Inspection / buying
  'homebuyers-basement-inspection-checklist': [...DEFAULT_TASK_IDS, 391, 287, 579, 229, 573],

  // Radon
  'radon-and-basement-waterproofing': [...DEFAULT_TASK_IDS, 391, 573, 287],

  // Crawl space
  'crawl-space-encapsulation-guide': [...DEFAULT_TASK_IDS, 391, 573, 258, 339, 341, 373],

  // Paint / sealers comparison
  'drylok-vs-radonseal': [...DEFAULT_TASK_IDS, 391, 254],

  // Seasonal
  'spring-basement-checklist': [...DEFAULT_TASK_IDS, 229, 573, 287, 373, 254],

  // Old houses
  'old-house-basements': [...DEFAULT_TASK_IDS, 391, 387, 353, 287, 229, 573, 258, 154],

  // Reviews / product articles
  'best-water-leak-detectors': [...DEFAULT_TASK_IDS, 229, 573, 130, 129],
  'best-basement-air-purifiers': [...DEFAULT_TASK_IDS, 287, 579, 373, 375],
}

// Fallback: if article not in map, use generous default set
export const FALLBACK_TASK_IDS = [...DEFAULT_TASK_IDS, 229, 573, 287, 154, 254]

export function getTaskIdsForArticle(slug: string): number[] {
  return TASK_ID_MAP[slug] || FALLBACK_TASK_IDS
}
