import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import { articles } from '@/lib/articles'

const popularSlugs = [
  'complete-basement-waterproofing-guide',
  'how-to-finish-a-basement',
  'best-sump-pumps-2026',
  'best-basement-dehumidifiers',
  'basement-waterproofing-cost',
  'homebuyers-basement-inspection-checklist',
  'how-to-prevent-basement-mold',
  'basement-finishing-cost',
]

const routingCards = [
  {
    icon: '💧',
    title: 'I Have a Water Problem',
    description: 'Leaks, flooding, seepage, or moisture issues in your basement.',
    href: '/articles/complete-basement-waterproofing-guide',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
    cta: 'Fix Water Issues →',
  },
  {
    icon: '🏠',
    title: 'I Want to Finish My Basement',
    description: 'Planning, costs, permits, and step-by-step guidance for finishing.',
    href: '/articles/how-to-finish-a-basement',
    color: 'bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
    cta: 'Start Finishing →',
  },
  {
    icon: '💰',
    title: 'How Much Will It Cost?',
    description: 'Real 2026 pricing data for every basement project.',
    href: '/cost-guides',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
    cta: 'See Cost Guides →',
  },
  {
    icon: '🏡',
    title: "I'm Buying a Home",
    description: 'Inspect before you buy. Spot hidden water damage and red flags.',
    href: '/articles/homebuyers-basement-inspection-checklist',
    color: 'bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
    cta: 'Get the Checklist →',
  },
]

export default function Home() {
  const popularArticles = popularSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articles

  const latestArticles = articles.slice(0, 4)

  const reviews = articles.filter((a) =>
    ['Reviews', 'Buying Guide'].includes(a.category)
  ).slice(0, 7)

  const costGuides = articles.filter((a) => a.category === 'Cost Guide')

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-navy to-slate-800 text-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-3">The Basement Guide</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Your Complete Guide to Basement<br className="hidden md:block" /> Waterproofing, Finishing & Maintenance
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Expert guides, honest product reviews, and real cost data — everything you need to make smart basement decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/start-here"
              className="bg-brand-teal hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Here
            </Link>
            <Link
              href="/#get-quotes"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Quotes
            </Link>
          </div>
        </div>
      </section>

      {/* Routing Cards — What's your situation? */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">What brings you here?</h2>
          <p className="text-gray-500 text-center mb-8">Choose your situation to find the right resources fast.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {routingCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`flex flex-col p-6 rounded-xl border-2 hover:shadow-md transition-all ${card.color}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${card.iconBg}`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{card.description}</p>
                <span className="text-sm font-semibold text-brand-teal">{card.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Popular Guides</h2>
              <p className="text-gray-500 mt-1">Our highest-value articles, bookmarked by thousands</p>
            </div>
            <Link href="/guides" className="text-brand-teal font-semibold text-sm hover:underline">View All Guides →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
              >
                {article.image && (
                  <div className="relative h-44 bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <span className="inline-block text-xs font-semibold text-brand-teal uppercase tracking-wide mb-2">{article.category}</span>
                  <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-brand-teal transition-colors">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Latest Articles</h2>
              <p className="text-gray-500 mt-1">Most recently added expert guides</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
              >
                {article.image && (
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <span className="inline-block text-xs font-semibold text-brand-teal uppercase tracking-wide mb-1">{article.category}</span>
                  <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-brand-teal transition-colors">{article.title}</h3>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Reviews */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Product Reviews</h2>
              <p className="text-gray-500 mt-1">Honest, research-backed buying guides</p>
            </div>
            <Link href="/reviews" className="text-brand-teal font-semibold text-sm hover:underline">View All Reviews →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
              >
                {article.image && (
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <span className="inline-block text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">⭐ Review</span>
                  <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-brand-teal transition-colors">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guides */}
      <section className="bg-slate-800 text-white py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Cost Guides</h2>
              <p className="text-slate-400 mt-1">Real 2026 pricing data for every basement project</p>
            </div>
            <Link href="/cost-guides" className="text-brand-teal font-semibold text-sm hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {costGuides.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all"
              >
                <div className="w-10 h-10 bg-brand-teal/20 rounded-lg flex items-center justify-center text-brand-teal flex-shrink-0">
                  💰
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-brand-teal transition-colors">{article.title}</h3>
                  <span className="text-slate-400 text-xs">{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section className="py-12 border-b border-gray-100">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">About The Basement Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            Written by homeowners who have dealt with every basement problem imaginable. No fluff, no contractor sales pitches — just honest, detailed guides to help you make smart decisions about waterproofing, finishing, and maintaining your basement.
          </p>
          <Link href="/about" className="inline-block mt-4 text-brand-teal font-semibold hover:underline">Learn more about us →</Link>
        </div>
      </section>

      {/* Lead Form */}
      <section id="get-quotes" className="py-16 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <LeadForm />
        </div>
      </section>
    </>
  )
}
