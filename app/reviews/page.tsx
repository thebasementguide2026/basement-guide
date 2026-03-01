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
  {
    title: 'Best Air Purifiers for Basements 2025',
    description: 'Top-rated HEPA air purifiers for basement mold, musty odors, and poor air quality. Expert picks for every budget with pros, cons, and buying advice.',
    href: '/articles/best-basement-air-purifiers',
    image: '/airpurfierembed.jpg',
    category: 'Air Quality',
    readTime: '12 min read',
    badge: null,
  },
  {
    title: 'Crawl Space Encapsulation Guide',
    description: 'Everything you need to know about encapsulating a crawl space — costs, materials, vapor barriers, and whether to DIY or hire a pro. Complete 2026 guide.',
    href: '/articles/crawl-space-encapsulation-guide',
    image: '/crawlspace.jpg',
    category: 'Waterproofing',
    readTime: '10 min read',
    badge: null,
  },
  {
    title: 'Best Water Leak Detectors',
    description: 'The best smart water leak detectors to protect your basement from flooding and water damage. Top picks with features, pricing, and installation tips.',
    href: '/articles/best-water-leak-detectors',
    image: '/leaksensor.jpg',
    category: 'Water Detection',
    readTime: '9 min read',
    badge: null,
  },
  {
    title: 'Best Vapor Barriers for Basements',
    description: 'Top-rated vapor barriers to stop moisture intrusion in basements and crawl spaces. We compare thickness, material, and performance for every budget.',
    href: '/articles/best-vapor-barriers',
    image: '/vaporbarrier.jpg',
    category: 'Waterproofing',
    readTime: '8 min read',
    badge: null,
  },
  {
    title: 'Best Basement Dehumidifiers 2026',
    description: 'Top-rated dehumidifiers for basements — ranked by capacity, energy efficiency, drainage options, and real-world performance in high-humidity spaces.',
    href: '/articles/best-basement-dehumidifiers',
    image: '/dehumidifier.jpg',
    category: 'Dehumidifiers',
    readTime: '11 min read',
    badge: null,
  },
  {
    title: 'Basement Humidity Guide',
    description: 'What humidity levels are safe for your basement, how to measure them, and the best ways to control moisture year-round to prevent mold and damage.',
    href: '/articles/basement-humidity-guide',
    image: '/humidity.jpg',
    category: 'Air Quality',
    readTime: '8 min read',
    badge: null,
  },
  {
    title: 'Basement Permits Guide',
    description: 'Do you need a permit to finish your basement? Find out which projects require permits, how to get them, and what happens if you skip them.',
    href: '/articles/basement-permits-guide',
    image: '/permits.jpg',
    category: 'Planning',
    readTime: '7 min read',
    badge: null,
  },
  {
    title: 'Drylok vs RadonSeal: Which Basement Sealer Wins?',
    description: 'An honest side-by-side comparison of Drylok and RadonSeal — two of the most popular basement waterproofing sealers. Which one actually works better?',
    href: '/articles/drylok-vs-radonseal',
    image: '/drylok.jpg',
    category: 'Waterproofing',
    readTime: '8 min read',
    badge: null,
  },
  {
    title: 'French Drain vs Sump Pump: Which Do You Need?',
    description: 'French drains and sump pumps both manage basement water — but they work very differently. Learn which solution fits your situation and budget.',
    href: '/articles/french-drain-vs-sump-pump',
    image: '/frenchdrain.jpg',
    category: 'Drainage',
    readTime: '9 min read',
    badge: null,
  },
  {
    title: 'Submersible vs Pedestal Sump Pump: Full Comparison',
    description: 'Submersible vs pedestal sump pumps — which type is more reliable, quieter, and better for your basement? Complete breakdown with pros, cons, and costs.',
    href: '/articles/submersible-vs-pedestal-sump-pump',
    image: '/Submersible.jpg',
    category: 'Sump Pumps',
    readTime: '8 min read',
    badge: null,
  },
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
        <div className="container-custom flex flex-wrap gap-6 justify-center md:justify-start text-sm font-medium">
          <span>✓ No free products accepted</span>
          <span>✓ Affiliate links never influence rankings</span>
          <span>✓ Updated with current 2026 pricing</span>
          <span>✓ Real specs, real comparisons</span>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container-custom py-12">
        <h2 className="text-2xl font-bold mb-8">Published Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Link key={review.href} href={review.href} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 block">
              <div className="relative h-48">
                <Image src={review.image} alt={review.title} fill className="object-cover" />
                {review.badge && (
                  <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {review.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">{review.category}</span>
                  <span className="text-xs text-gray-400">{review.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{review.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{review.description}</p>
                <span className="text-teal-700 font-semibold text-sm">Read Review →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom pb-16">
        <div className="bg-slate-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Need Help Choosing a Contractor?</h3>
          <p className="text-slate-300 mb-6">Get free quotes from vetted local basement pros — no obligation.</p>
          <Link href="/#get-quotes" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-3 rounded-lg transition-colors">
            Get Free Quotes →
          </Link>
        </div>
      </section>
    </div>
  )
}
