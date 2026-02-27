'use client'

import { usePathname } from 'next/navigation'
import { articles } from '@/lib/articles'

export default function ArticleSchemaInjector() {
  const pathname = usePathname()
  const slug = pathname.split('/').pop() || ''
  const article = articles.find((a) => a.slug === slug)

  if (!article) return null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image
      ? `https://thebasement.guide${article.image}`
      : undefined,
    datePublished: '2026-02-01',
    dateModified: '2026-02-27',
    author: {
      '@type': 'Organization',
      name: 'The Basement Guide',
      url: 'https://thebasement.guide',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Basement Guide',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thebasement.guide/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://thebasement.guide/articles/${slug}`,
    },
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
