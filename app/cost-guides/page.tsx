import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Basement Cost Guides 2026 | The Basement Guide',
  description: 'Real 2026 pricing data for every basement project. Finishing, waterproofing, sump pumps, french drains, mold remediation and more.',
  alternates: { canonical: 'https://thebasement.guide/cost-guides' },
}

const costSlugs = [
  'basement-finishing-cost',
  'basement-waterproofing-cost',
  'sump-pump-cost',
  'french-drain-cost',
  'foundation-crack-repair-cost',
  'egress-window-cost',
  'mold-remediation-cost',
]

export default function CostGuidesPage() {
  const costGuides = costSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articles

  const featuredSlugs = ['basement-finishing-cost', 'basement-waterproofing-cost']
  const featuredGuides = costGuides.filter((a) => featuredSlugs.includes(a.slug))
  const regularGuides = costGuides.filter((a) => !featuredSlugs.includes(a.slug))

  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container-custom">
          <nav className="text-sm text-slate-400 mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Cost Guides</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Basement Cost Guides 2026</h1>
          <p className="text-slate-300 max-w-2xl">
            Real pricing data for every basement project. No guesswork — just honest national averages with regional context.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Quick price summary strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-gray-50 rounded-xl">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">$20–$75</p>
            <p className="text-xs text-gray-500 mt-1">per sq ft to finish</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">$3–$15k</p>
            <p className="text-xs text-gray-500 mt-1">waterproofing avg</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">$500–$3k</p>
            <p className="text-xs text-gray-500 mt-1">sump pump installed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">$350–$1.5k</p>
            <p className="text-xs text-gray-500 mt-1">per foundation crack</p>
          </div>
        </div>

        {/* Featured guides */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Highest-Impact Cost Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {featuredGuides.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group bg-white rounded-xl overflow-hidden border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all"
            >
              {article.image && (
                <div className="relative h-48 bg-gray-100">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">💰 MOST READ</span>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-bold text-slate-800 text-base group-hover:text-brand-teal transition-colors">{article.title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{article.description}</p>
                <span className="text-brand-teal text-sm font-semibold mt-3 inline-block">See Pricing →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* All cost guides grid */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6">All Cost Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regularGuides.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex gap-4 items-start bg-white rounded-xl border border-gray-100 hover:shadow-md p-5 transition-all"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                💰
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-brand-teal transition-colors">{article.title}</h3>
                <p className="text-gray-500 text-xs mt-1.5 line-clamp-2">{article.description}</p>
                <span className="text-xs text-gray-400 mt-2 block">{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
