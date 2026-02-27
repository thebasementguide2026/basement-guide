'use client'

import { usePathname } from 'next/navigation'
import { articles } from '@/lib/articles'
import { articleSchemas } from '@/lib/articleSchemas'

export default function ArticleSchemaInjector() {
  const pathname = usePathname()
  const slug = pathname.split('/').pop() || ''
  const article = articles.find((a) => a.slug === slug)

  if (!article) return null

  const baseUrl = 'https://thebasement.guide'
  const pageUrl = `${baseUrl}/articles/${slug}`
  const imageUrl = article.image ? `${baseUrl}${article.image}` : undefined

  // Base Article schema (always present)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: imageUrl,
    datePublished: '2026-02-01T00:00:00-05:00',
    dateModified: '2026-02-27T00:00:00-05:00',
    author: {
      '@type': 'Organization',
      name: 'The Basement Guide',
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

  // Product/Review schema for "best of" and buying guide articles
  if (extras.products && extras.products.length > 0) {
    extras.products.forEach((product: {
      name: string
      description: string
      image?: string
      ratingValue?: number
      reviewCount?: number
      priceRange?: string
      brand?: string
      url?: string
    }) => {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image ? `${baseUrl}${product.image}` : imageUrl,
        brand: product.brand ? { '@type': 'Brand', name: product.brand } : undefined,
        offers: product.priceRange ? {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: product.priceRange,
          },
          availability: 'https://schema.org/InStock',
          url: product.url || pageUrl,
        } : undefined,
        aggregateRating: product.ratingValue ? {
          '@type': 'AggregateRating',
          ratingValue: product.ratingValue,
          bestRating: 5,
          worstRating: 1,
          reviewCount: product.reviewCount || 1,
        } : undefined,
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
