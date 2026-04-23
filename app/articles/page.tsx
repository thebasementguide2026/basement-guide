import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Basement Articles & Guides | The Basement Guide',
  description:
    'Basement guides and articles covering waterproofing, mold, sump pumps, finishing, and more.',
  alternates: { canonical: 'https://thebasement.guide/articles' },
}

const topicGroups: { label: string; id: string; slugs: string[] }[] = [
  {
    label: 'Waterproofing',
    id: 'waterproofing',
    slugs: [
      'complete-basement-waterproofing-guide',
      'interior-vs-exterior-waterproofing',
      'crystalline-waterproofing',
      'basement-waterproofing-cost',
      'french-drain-cost',
      'french-drain-vs-sump-pump',
      'how-to-hire-basement-waterproofing-contractor',
      'crawl-space-encapsulation-guide',
      'waterproof-basement-paint-sealers',
      'drylok-vs-radonseal',
      'best-vapor-barriers',
      'water-coming-up-through-basement-floor',
      'how-to-dry-out-basement-after-flooding',
      'wet-basement-walls',
    ],
  },
  {
    label: 'Mold, Humidity & Health',
    id: 'mold-health',
    slugs: [
      'how-to-prevent-basement-mold',
      'mold-remediation-cost',
      'musty-basement-smell',
      'basement-humidity-guide',
      'basement-ventilation',
      'dehumidifier-myths',
      'best-basement-dehumidifiers',
      'best-basement-air-purifiers',
      'radon-and-basement-waterproofing',
      'basement-smells-like-sewage',
    ],
  },
  {
    label: 'Sump Pumps',
    id: 'sump-pumps',
    slugs: [
      'sump-pump-buying-guide',
      'sump-pump-cost',
      'why-basement-floods-with-sump-pump',
      'submersible-vs-pedestal-sump-pump',
      'best-sump-pumps-2026',
      'battery-vs-water-powered-sump-pumps',
      'smart-sump-pumps-guide',
      'backup-power-sump-pumps',
      'best-water-leak-detectors',
      'sump-pump-design-ideas',
    ],
  },
  {
    label: 'Finishing & Renovation',
    id: 'finishing',
    slugs: [
      'how-to-finish-a-basement',
      'basement-finishing-cost',
      'pre-finish-audit',
      'basement-permits-guide',
      'basement-bathroom-guide',
      'basement-home-gym',
      'basement-adu-rental-suite',
      'basement-renovation-mistakes',
      'old-house-basements',
      'best-basement-flooring',
      'drop-ceiling-vs-drywall',
      'epoxy-vs-polyurethane-floor-coating',
      'diy-vs-hiring-pro-basement-projects',
      'basement-insulation-guide',
      'spray-foam-vs-rigid-foam-insulation',
      'egress-window-cost',
    ],
  },
  {
    label: 'Foundation & Structural',
    id: 'structural',
    slugs: [
      'bowing-basement-walls',
      'types-of-foundation-cracks',
      'foundation-crack-repair-cost',
      'basement-vs-crawl-space-vs-slab',
      'basement-efflorescence',
    ],
  },
  {
    label: 'Insurance, Finance & Home Value',
    id: 'finance',
    slugs: [
      'basement-flooding-insurance',
      'basement-waterproofing-finances-insurance-taxes',
      'waterproofing-home-appraisal-value',
    ],
  },
  {
    label: 'Checklists & Emergency',
    id: 'checklists',
    slugs: [
      'basement-emergency-water-plan',
      'spring-basement-checklist',
      'homebuyers-basement-inspection-checklist',
    ],
  },
]

export default function ArticlesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Page header */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link> /{' '}
        <span>Articles</span>
      </nav>

      <h1 className="text-4xl font-bold text-brand-navy mb-4">Basement Guides &amp; Articles</h1>
      <p className="text-gray-600 mb-10 text-lg">
        Every article we publish on waterproofing, mold prevention, sump pumps, finishing, structural issues, and more &mdash; organized by topic.
      </p>

      {/* Topic nav */}
      <div className="flex flex-wrap gap-2 mb-12">
        {topicGroups.map((g) => (
          <Link
            key={g.id}
            href={`#${g.id}`}
            className="px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium hover:bg-brand-teal/20 transition-colors"
          >
            {g.label}
          </Link>
        ))}
      </div>

      {/* Grouped articles */}
      {topicGroups.map((group) => {
        const groupArticles = group.slugs
          .map((slug) => articles.find((a) => a.slug === slug))
          .filter(Boolean) as typeof articles
        if (groupArticles.length === 0) return null
        return (
          <section key={group.id} id={group.id} className="mb-16">
            <h2 className="text-2xl font-bold text-brand-navy mb-6 border-b border-gray-200 pb-2">
              {group.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  description={article.description}
                  slug={article.slug}
                  category={article.category}
                  readTime={article.readTime}
                />
              ))}
            </div>
          </section>
        )
      })}
    </main>
  )
}
