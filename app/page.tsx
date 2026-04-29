import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import { articles } from '@/lib/articles'
import type { Metadata } from 'next'

import Script from 'next/script'
export const metadata: Metadata = {
  alternates: { canonical: 'https://thebasement.guide' },
}

const featuredSlug = 'complete-basement-waterproofing-guide'

const editorPickSlugs = [
  'how-to-finish-a-basement',
  'best-sump-pumps-2026',
  'best-basement-dehumidifiers',
  'basement-waterproofing-cost',
      'how-to-prevent-basement-mold',
  'sump-pump-design-ideas',
]

const popularSlugs = [
  'homebuyers-basement-inspection-checklist',
  'how-to-prevent-basement-mold',
  'basement-finishing-cost',
  'sump-pump-buying-guide',
  'basement-humidity-guide',
  'crawl-space-encapsulation-guide',
]

export default function Home() {
  const featured = articles.find((a) => a.slug === featuredSlug)
  const editorPicks = editorPickSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articles
  const popular = popularSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articles
  const latestArticles = [articles.find((a) => a.slug === 'diy-vs-hiring-pro-basement-projects'), ...articles.filter((a) => a.slug !== 'bowing-basement-walls' && a.slug !== 'diy-vs-hiring-pro-basement-projects').slice(0, 5)].filter(Boolean) as typeof articles
  const reviews = articles
    .filter((a) => ['Reviews', 'Buying Guide'].includes(a.category))
    .slice(0, 7)
  const baseCostGuides = articles.filter((a) => a.category === 'Cost Guide')
  const wpIdx = baseCostGuides.findIndex((a) => a.slug === 'basement-waterproofing-cost')
  const calculatorCard = {
    title: 'Basement Waterproofing Cost Calculator',
    slug: 'basement-waterproofing-cost-calculator',
    readTime: 'Interactive tool',
    href: '/cost-guides/basement-waterproofing-cost-calculator',
  }
  const costGuides = [
    ...baseCostGuides.slice(0, wpIdx + 1).map((a) => ({ title: a.title, slug: a.slug, readTime: a.readTime, href: `/articles/${a.slug}` })),
    calculatorCard,
    ...baseCostGuides.slice(wpIdx + 1).map((a) => ({ title: a.title, slug: a.slug, readTime: a.readTime, href: `/articles/${a.slug}` })),
  ]

  return (
    <>
      {/* Publisher-style Hero: Featured + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 pt-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured story - large */}
          {featured && (
            <Link
              href={`/articles/${featured.slug}`}
              className="lg:col-span-2 group relative block rounded-xl overflow-hidden bg-gray-900 aspect-[16/9] lg:aspect-[16/10]"
            >
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-70 transition-opacity"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="inline-block bg-brand-teal text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                  {featured.category}
                </span>
                <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-2">
                  {featured.title}
                </h2>
                <p className="text-gray-200 text-sm lg:text-base line-clamp-2">
                  {featured.description}
                </p>
              </div>
            </Link>
          )}

          {/* Sidebar stories */}
          <div className="flex flex-col justify-between h-full">
            {editorPicks.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex gap-4 items-start"
              >
                <div className="relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  {article.image && (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-brand-teal transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Bar */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-3 justify-center">
          {[
            { label: '💧 Water Problems', href: '/articles/complete-basement-waterproofing-guide' },
            { label: '🏠 Finishing', href: '/articles/how-to-finish-a-basement' },
            { label: '💰 Cost Guides', href: '/cost-guides' },
            { label: '⭐ Reviews', href: '/reviews' },
            { label: '🏡 Buying a Home', href: '/articles/homebuyers-basement-inspection-checklist' },
            { label: '🔧 Start Here', href: '/start-here' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-brand-teal hover:text-brand-teal transition-colors shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Guides - Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Guides</h2>
          <Link href="/guides" className="text-brand-teal font-semibold text-sm hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popular.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] bg-gray-100">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                )}
                <span className="absolute top-3 left-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 leading-snug group-hover:text-brand-teal transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles - Horizontal Scroll Row */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  {article.image && (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-brand-teal transition-colors mt-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-1">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Reviews - Magazine Row */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Product Reviews</h2>
          <Link href="/reviews" className="text-brand-teal font-semibold text-sm hover:underline">
            View All Reviews →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-gray-100">
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                )}
                <span className="absolute top-2 left-2 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                  ⭐ Review
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-brand-teal transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cost Guides */}
      <section className="bg-brand-navy py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Cost Guides</h2>
            <Link href="/cost-guides" className="text-brand-teal font-semibold text-sm hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {costGuides.map((article) => (
              <Link
                key={article.slug}
                href={article.href}
                className="group block bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <span className="text-2xl">{article.slug === 'basement-waterproofing-cost-calculator' ? '🧮' : '💰'}</span>
                <h3 className="font-bold text-white text-sm leading-snug mt-2 group-hover:text-brand-teal transition-colors">
                  {article.title}
                </h3>
                <span className="text-gray-400 text-xs mt-1 block">{article.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About + CTA */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">About The Basement Guide</h2>
            <p className="text-gray-600 leading-relaxed">
              Written by homeowners who have dealt with every basement problem imaginable. No fluff,
              no contractor sales pitches — just honest, detailed guides to help you make smart
              decisions about waterproofing, finishing, and maintaining your basement.
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 text-brand-teal font-semibold hover:underline"
            >
              Learn more about us →
            </Link>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section style={{ backgroundColor: '#1E3A5F' }} className='py-16'>
        <div className='container-custom text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>Stay on Top of Your Basement</h2>
          <p className='text-white/70 max-w-lg mx-auto mb-8'>Waterproofing tips, moisture control guides, and seasonal reminders — free to your inbox.</p>
          <iframe
            src='https://subscribe-forms.beehiiv.com/d7389f65-77c3-4b1f-bbff-c04470ac4ae4'
            className='beehiiv-embed'
            data-test-id='beehiiv-embed'
            frameBorder='0'
            scrolling='no'
            style={{ width: '100%', maxWidth: '600px', height: '520px', margin: '0 auto', display: 'block', borderRadius: '0px', backgroundColor: 'transparent', boxShadow: '0 0 #0000' }}
          />
          <p className='text-white/40 text-xs mt-2'>
            By subscribing you agree to receive emails from The Home Guide Network. We respect your privacy. Unsubscribe anytime.{' '}
            <a href='https://thehome.guide/privacy' target='_blank' rel='noopener noreferrer' className='underline hover:text-white/60'>Privacy Policy</a>
          </p>
        </div>
      </section>
    
      <Script async src='https://subscribe-forms.beehiiv.com/embed.js' strategy='afterInteractive' />
      <Script async src='https://subscribe-forms.beehiiv.com/attribution.js' strategy='afterInteractive' />
    </>
  )
}
