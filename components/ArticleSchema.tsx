interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  image?: string
  datePublished?: string
  dateModified?: string
}

export default function ArticleSchema({
  title,
  description,
  slug,
  image,
  datePublished = '2026-02-01',
  dateModified = '2026-02-27',
}: ArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image ? `https://thebasement.guide${image}` : undefined,
    datePublished: datePublished,
    dateModified: dateModified,
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

interface FAQSchemaProps {
  questions: { question: string; answer: string }[]
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
