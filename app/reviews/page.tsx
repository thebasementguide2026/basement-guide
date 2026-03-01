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
    badge: "Editor's Choice",
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
    image: '/Radon and waterproofing.jpg',
    category: 'Waterproofing',
    readTime: '8 min read',
    badge: null,
  },
  {
    title: 'Best Basement Dehumidifiers 2026',
    description: 'Top-rated dehumidifiers for basements — ranked by capacity, energy efficiency, drainage options, and real-world performance in high-humidity spaces.',
    href: '/articles/best-basement-dehumidifiers',
    image: '/topdehumidfier.jpg',
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
    image: '/finishing a basement guide.jpg',
    category: 'Planning',
    readTime: '7 min read',
    badge: null,
  },
  {
    title: 'Drylok vs RadonSeal: Which Basement Sealer Wins?',
    description: 'An honest side-by-side comparison of Drylok and RadonSeal — two of the most popular basement waterproofing sealers. Which one actually works better?',
    href: '/articles/drylok-vs-radonseal',
    image: '/Radon and waterproofing.jpg',
    category: 'Waterproofing',
    readTime: '8 min read',
    badge: null,
  },
  {
    title: 'French Drain vs Sump Pump: Which Do You Need?',
    description: 'French drains and sump pumps both manage basement water — but they work very differently. Learn which solution fits your situation and budget.',
    href: '/articles/french-drain-vs-sump-pump',
    image: '/french-drain-trench.jpg',
    category: 'Drainage',
    readTime: '9 min read',
    badge: null,
  },
  {
    title: 'Submersible vs Pedestal Sump Pump: Full Comparison',
    description: 'Submersible vs pedestal sump pumps — which type is more reliable, quieter, and better for your basement? Complete breakdown with pros, cons, and costs.',
    href: '/articles/submersible-vs-pedestal-sump-pump',
    image: '/pedestalvssub.jpg',
    category: 'Sump Pumps',
    readTime: '8 min read',
    badge: null,
  },
  {
    title: 'Drop Ceiling vs. Drywall for Basements: Complete Guide 2026',
    description: 'Drop ceiling or drywall for your basement? Compare costs, pros, cons, height requirements, moisture resistance, and which ceiling is right for your 2026 renovation.',
    href: '/articles/drop-ceiling-vs-drywall',
    image: '/images/drop-ceiling-vs-drywall/hero.jpg',
    category: 'Finishing',
    readTime: '15 min read',
    badge: null,
  },
]

export default function ReviewsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B2A3B] mb-3">Basement Product Reviews</h1>
        <p className="text-gray-600 text-lg max-w-2xl">Independent, research-backed reviews of the products that actually matter for your basement. No paid placements. No brand deals. Just honest analysis.</p>
      </div>

      {/* Review Standards Banner */}
      <div className="bg-teal-50 border border-teal-100 rounded-xl px-5 py-3 mb-10 text-sm text-teal-800 flex flex-wrap gap-4">
        <span>✓ No free products accepted</span>
        <span>✓ Affiliate links never influence rankings</span>
        <span>✓ Updated with current 2026 pricing</span>
        <span>✓ Real specs, real comparisons</span>
      </div>

      {/* Reviews Grid */}
      <h2 className="text-xl font-bold text-[#1B2A3B] mb-6">Published Reviews</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <Link key={review.href} href={review.href} className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full bg-gray-100">
              <Image src={review.image} alt={review.title} fill className="object-cover" />
              {review.badge && (
                <span className="absolute top-3 left-3 bg-[#00A99D] text-white text-xs font-semibold px-2 py-1 rounded-full">{review.badge}</span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[#00A99D] bg-teal-50 px-2 py-0.5 rounded-full">{review.category}</span>
                <span className="text-xs text-gray-400">{review.readTime}</span>
              </div>
              <h3 className="font-bold text-[#1B2A3B] text-base mb-2 group-hover:text-[#00A99D] transition-colors">{review.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{review.description}</p>
              <span className="text-sm font-semibold text-[#00A99D]">Read Review →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 bg-[#1B2A3B] text-white rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Need Help Choosing a Contractor?</h3>
        <p className="text-gray-300 mb-5">Get free quotes from vetted local basement pros — no obligation.</p>
        <Link href="/#get-quotes" className="inline-block bg-[#00A99D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">Get Free Quotes →</Link>
      </div>
    </main>
  )
}
