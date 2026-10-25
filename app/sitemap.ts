import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thebasement.guide'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/basement-waterproofing-cost-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/sump-pump-replacement-cost`, lastModified: new Date("2026-10-24"), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/start-here`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  const articleDates: Record<string, string> = {
  "basement-waterproofing-cost": "2026-10-25",
  "best-vapor-barriers": "2026-10-25",
  "waterproof-basement-paint-sealers": "2026-10-25",
  "mold-remediation-cost": "2026-10-25",
  "interior-basement-drainage-systems": "2026-10-25",
  "basement-vs-crawl-space-vs-slab": "2026-10-25",
  "best-basement-dehumidifiers": "2026-10-24",
  "basement-finishing-cost": "2026-10-24",
  "how-to-finish-a-basement": "2026-10-24",
  "problems/basement-flooding-cleanup": "2026-10-24",
  "how-to-dry-out-basement-after-flooding": "2026-10-24",
  "sump-pump-cost": "2026-10-24",
  "french-drain-cost": "2026-10-24",
  "basement-humidity-guide": "2026-10-24",
  "best-water-leak-detectors": "2026-10-24",
  "best-sump-pumps-2026": "2026-10-24",
  "sump-pump-design-ideas": "2026-10-24",
  "interior-vs-exterior-waterproofing": "2026-10-24",
  "wet-basement-walls": "2026-10-24",
  "egress-window-cost": "2026-10-24",
  "how-to-winterize-a-basement": "2026-10-23",
  "spring-basement-checklist": "2026-10-23",
  "how-to-heat-a-basement": "2026-10-23",
  "frozen-pipes-in-basement": "2026-10-23",
  "basement-mice-pest-prevention": "2026-10-23",
  "sump-pump-running-constantly": "2026-10-23",
  "sump-pump-buying-guide": "2026-10-23",
  "why-basement-floods-with-sump-pump": "2026-10-23"
}

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: articleDates[article.slug] ?? new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
