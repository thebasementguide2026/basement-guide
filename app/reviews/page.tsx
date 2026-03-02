import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Basement Product Reviews 2026 | The Basement Guide',
  description: 'Honest, research-backed reviews of the best basement products — dehumidifiers, sump pumps, flooring, vapor barriers, and more.',
}

const reviewGroups = [
  {
    title: 'Top Picks — Most Important',
    description: 'The reviews that matter most for basement health and performance.',
    featured: ['best-basement-dehumidifiers', 'best-sump-pumps-2026'],
    regular: [],
  },
  {
    title: 'Flooring & Finishing',
    description: 'Moisture-resistant flooring options for below-grade spaces.',
    featured: [],
    regular: ['best-basement-flooring'],
  },
  {
    title: 'Waterproofing Products',
    description: 'Paints, sealers, and vapor barriers to keep moisture out.',
    featured: [],
    regular: ['waterproof-basement-paint-sealers', 'best-vapor-barriers'],
  },
  {
    title: 'Safety & Air Quality',
    description: 'Detect leaks early and breathe clean air below ground.',
    featured: [],
    regular: ['best-water-leak-detectors', 'best-basement-air-purifiers'],
  },
]

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="bg-brand-navy text-white py-12">
        <div className="container-custom">
          <nav className="text-sm text-slate-400 mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Reviews</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Product Reviews</h1>
          <p className="text-slate-300 max-w-2xl">
            Honest, hands-on reviews of the best basement products — dehumidifiers, sump pumps, flooring, and more.
          </p>
        </div>
      </div>

      <div className="container-custom py-12 space-y-14">
        {reviewGroups.map((group) => {
          const featuredArticles = group.featured
            .map((slug) => articles.find((a) => a.slug === slug))
            .filter(Boolean) as typeof articles
          const regularArticles = group.regular
            .map((slug) => articles.find((a) => a.slug === slug))
            .filter(Boolean) as typeof articles

          return (
            <div key={group.title}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">{group.title}</h2>
                <p className="text-gray-500 mt-1">{group.description}</p>
              </div>

              {/* Featured large cards */}
              {featuredArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {featuredArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group bg-white rounded-xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 hover:shadow-md transition-all"
                    >
                      {article.image && (
                        <div className="relative h-52 bg-gray-100">
                          <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">⭐ TOP PICK</span>
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="font-bold text-slate-800 text-base group-hover:text-brand-teal transition-colors">{article.title}</h3>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{article.description}</p>
                        <span className="text-brand-teal text-sm font-semibold mt-3 inline-block">Read Review →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Regular cards */}
              {regularArticles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {regularArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
                    >
                      {article.image && (
                        <div className="relative h-40 bg-gray-100">
                          <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      )}
                      <div className="p-4">
                        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">⭐ Review</span>
                        <h3 className="font-semibold text-slate-800 text-sm leading-snug mt-1 group-hover:text-brand-teal transition-colors">{article.title}</h3>
                        <p className="text-gray-500 text-xs mt-2 line-clamp-2">{article.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
