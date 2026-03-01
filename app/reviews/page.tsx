import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Product Reviews | The Basement Guide',
  description: 'Independent reviews of basement waterproofing products, sump pumps, dehumidifiers, flooring, and more. No paid placements — just honest research.',
}

const reviews = [
  {
    title: 'Best Waterproof Flooring for Basements 2026',
    description: 'LVP vs. Ceramic vs. Engineered Wood. We break down the pros, cons, and real costs of each waterproof flooring option so you can choose the right one for your space.',
    href: '/articles/best-basement-flooring',
    image: '/basement-flooring-installation.jpg.png',
    category: 'Flooring',
    readTime: '12 min read',
    badge: 'Editor\'s Choice',
  },
  {
    title: 'Battery vs Water-Powered Sump Pumps: Full Comparison',
    description: 'Power vs. physics — which backup sump pump system actually protects your basement better? Complete 2026 comparison with real flow rates, costs, and failure scenarios.',
    href: '/articles/battery-vs-water-powered-sump-pumps',
    image: '/sump-pump-installation.jpg.png',
    category: 'Sump Pumps',
    readTime: '11 min read',
    badge: null,
  },
  {
    title: 'Best Sump Pumps for 2026: Top Submersible and Pedestal Picks',
    description: 'See the best sump pumps for 2026, including top-rated submersible and pedestal models with GPH, horsepower, noise levels, and real-world reliability for wet basements.',
    href: '/articles/best-sump-pumps-2026',
    image: '/Submersible.jpg',
    category: 'Sump Pumps',
    readTime: '10 min read',
    badge: null,
  },
]

const comingSoon = [
  { title: 'Best Basement Dehumidifiers 2026', category: 'Dehumidifiers' },
  { title: 'Best Basement Waterproofing Paint', category: 'Waterproofing' },
  { title: 'Best Interior Drainage Systems', category: 'Drainage' },
]

export default function ReviewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Basement Product Reviews</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Independent, research-backed reviews of the products that actually matter for your basement. No paid placements. No brand deals. Just honest analysis.
          </p>
        </div>
      </section>

      {/* Review Standards Banner */}
      <section className="bg-teal-600 text-white py-4">
        <div className="container-custom">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm font-medium">
            <span className="flex items-center gap-1.5">✓ No free products accepted</span>
            <span className="flex items-center gap-1.5">✓ Affiliate links never influence rankings</span>
            <span className="flex items-center gap-1.5">✓ Updated with current 2026 pricing</span>
            <span className="flex items-center gap-1.5">✓ Real specs, real comparisons</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container-custom">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">Published Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review) => (
              <Link
                key={review.href}
                href={review.href}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
              >
                <div className="relative h-52">
                  <Image
                    src={review.image}
                    alt={review.title}
                    fill
                    className="object-cover"
                  />
                  {review.badge && (
                    <div className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {review.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-teal-50 text-teal-700 text-xs font-semibold px-2 py-1 rounded">
                      {review.category}
                    </span>
                    <span className="text-gray-400 text-xs">{review.readTime}</span>
                  </div>
                  <h2 className="font-bold text-slate-800 text-xl mb-2">{review.title}</h2>
                  <p className="text-gray-500 text-sm flex-1">{review.description}</p>
                  <p className="text-teal-600 font-semibold text-sm mt-4">Read Review →</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {comingSoon.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-dashed border-gray-300 p-5 flex items-center justify-between"
              >
                <div>
                  <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">
                    {item.category}
                  </span>
                  <p className="font-semibold text-slate-700">{item.title}</p>
                </div>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2.5 py-1 rounded-full">Coming Soon</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-white rounded-xl border border-teal-200 p-8 text-center">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Need Help Choosing a Contractor?</h3>
            <p className="text-gray-500 text-sm mb-4">Get free quotes from vetted local basement pros — no obligation.</p>
            <Link href="/#get-quotes" className="inline-block bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
              Get Free Quotes →
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
