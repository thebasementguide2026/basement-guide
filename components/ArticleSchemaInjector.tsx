'use client'

import { usePathname } from 'next/navigation'
import { articles } from '@/lib/articles'
import { articleSchemas } from '@/lib/articleSchemas'

export default function ArticleSchemaInjector() {
  const pathname = usePathname()
  const slug = pathname.split('/').pop() || ''
  const article = articles.find((a) => a.slug === slug)

  if (!article) return null

  // This page supplies its complete, date-specific JSON-LD directly.
  if (['how-to-winterize-a-basement', 'sump-pump-running-constantly', 'wet-basement-walls', 'sump-pump-design-ideas', 'best-sump-pumps-2026', 'best-water-leak-detectors', 'basement-humidity-guide', 'french-drain-cost', 'sump-pump-cost', 'best-basement-dehumidifiers', 'interior-basement-drainage-systems'].includes(slug)) return null

  const baseUrl = 'https://thebasement.guide'
  const pageUrl = `${baseUrl}/articles/${slug}`
  const imageUrl = article.image ? `${baseUrl}${article.image}` : undefined

  // Base Article schema (always present)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: slug === 'interior-vs-exterior-waterproofing' ? 'Interior vs. Exterior Basement Waterproofing, Which Does Your House Need?' : slug === 'egress-window-cost' ? 'Basement Egress Window Cost (2026)' : article.title,
    description: slug === 'egress-window-cost' ? 'Most basement egress windows cost $2,700 to $5,900 installed, including cutting the foundation, the window, and the well. See costs by wall type and code sizes.' : article.description,
    image: imageUrl,
    datePublished: '2026-02-01T00:00:00-05:00',
    dateModified: ['interior-vs-exterior-waterproofing', 'egress-window-cost'].includes(slug) ? '2026-10-24' : '2026-02-27T00:00:00-05:00',
    author: {
      '@type': 'Organization',
      name: slug === 'interior-vs-exterior-waterproofing' ? 'The Basement Guide Editorial Team' : 'The Basement Guide',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Basement Guide',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  }

  // Get additional schemas for this article
  if (slug === 'how-to-dry-out-basement-after-flooding') {
    articleSchema.headline = "What to Do When Your Basement Floods, Step by Step Cleanup and Drying"
    articleSchema.description = "What to do when your basement floods, hour by hour. Safety first, then water removal, what to throw out, cleaning, and drying. How long it takes and when to call a pro."
    articleSchema.dateModified = '2026-10-24'
    articleSchema.author.name = 'The Basement Guide Editorial Team'
  }

  const finishingOverrides: Record<string, { headline: string; description: string }> = {
    'basement-finishing-cost': { headline: "How Much Does It Cost to Finish a Basement? 2026 Prices by Size and Finish Level", description: "Finishing a basement costs about $32,000 on average, or $15 to $120+ per sq ft depending on finish level. See prices for 400 to 2,000 sq ft, room-by-room costs, and what you get back at resale." },
    'how-to-finish-a-basement': { headline: "How to Finish a Basement, Step by Step (2026 Guide)", description: "How to finish a basement step by step, in the order the pros do it: moisture and radon first, then permits, rough-in, framing, egress, insulation, flooring, drywall, and lighting." },
  }
  if (finishingOverrides[slug]) {
    articleSchema.headline = finishingOverrides[slug].headline
    articleSchema.description = finishingOverrides[slug].description
    articleSchema.author.name = 'The Basement Guide Editorial Team'
    articleSchema.dateModified = '2026-10-24'
  }

  if (slug === 'basement-vs-crawl-space-vs-slab') {
    articleSchema.author.name = 'The Basement Guide Editorial Team'
    articleSchema.dateModified = '2026-10-25'
  }

  if (slug === 'mold-remediation-cost') {
    articleSchema.author.name = 'The Basement Guide Editorial Team'
    articleSchema.dateModified = '2026-10-25'
  }

  if (slug === 'waterproof-basement-paint-sealers') {
    articleSchema.author.name = 'The Basement Guide Editorial Team'
    articleSchema.dateModified = '2026-10-25'
  }

  if (slug === 'best-vapor-barriers') {
    articleSchema.author.name = 'The Basement Guide Editorial Team'
    articleSchema.dateModified = '2026-10-25'
  }

  const extras = articleSchemas[slug] || {}
  const schemas: object[] = [articleSchema]

  // FAQ schema
  if (extras.faq && extras.faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: extras.faq.map((item: { q: string; a: string }) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    })
  }

  // HowTo schema
  if (extras.howTo) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: extras.howTo.name,
      description: extras.howTo.description,
      image: imageUrl,
      step: extras.howTo.steps.map((step: { name: string; text: string }, i: number) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
    })
  }

  // Product schema with editorial review (required by Google)
  if (extras.products && extras.products.length > 0) {
    extras.products.forEach((product: {
      name: string
      description: string
      image?: string
      url?: string
    }) => {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image ? `${baseUrl}${product.image}` : imageUrl,
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '4',
            bestRating: '5',
          },
          author: {
            '@type': 'Organization',
            name: 'The Basement Guide',
          },
        },
      })
    })
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
