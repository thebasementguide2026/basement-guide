import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Cost Guides 2026 | The Basement Guide',
  description: 'Real 2026 pricing for basement waterproofing, finishing, foundation repair, sump pump installation, and more. Current market rates with regional breakdowns.',
}

const publishedGuides = [
  {
    title: 'Basement Finishing Cost Guide 2026',
    description: 'How much does it cost to finish a basement? National averages, regional breakdowns, and what actually drives the price up.',
    href: '/articles/basement-finishing-cost',
    category: 'Finishing',
    priceRange: '$20,000 – $75,000',
    readTime: '18 min read',
  },
  {
    title: 'Battery vs Water-Powered Sump Pumps: Cost Comparison',
    description: 'Full cost breakdown of battery backup vs water-powered backup sump pump systems — including installation, maintenance, and long-term costs.',
    href: '/articles/battery-vs-water-powered-sump-pumps',
    category: 'Sump Pumps',
    priceRange: '$200 – $1,200',
    readTime: '11 min read',
  },
]

const comingSoon = [
  {
    title: 'Basement Waterproofing Cost 2026',
    description: 'Interior vs exterior waterproofing costs, drainage system pricing, and how to avoid getting overcharged.',
    category: 'Waterproofing',
    priceRange: '$2,000 – $15,000',
  },
  {
    title: 'French Drain Installation Cost 2026',
    description: 'Interior and exterior french drain pricing, labor costs by region, and DIY vs professional installation.',
    category: 'Drainage',
    priceRange: '$1,500 – $8,000',
  },
  {
    title: 'Egress Window Installation Cost 2026',
    description: 'Everything that goes into the cost of adding an egress window — permits, excavation, labor, and finishing.',
    category: 'Windows',
    priceRange: '$2,500 – $5,500',
  },
  {
    title: 'Sump Pump Installation Cost 2026',
    description: 'New installation vs replacement costs, pedestal vs submersible, and when you need a professional.',
    category: 'Sump Pumps',
    priceRange: '$600 – $2,000',
  },
  {
    title: 'Foundation Crack Repair Cost 2026',
    description: 'DIY epoxy injection vs professional repair — when each is appropriate and what you should expect to pay.',
    category: 'Foundation',
    priceRange: '$250 – $3,500',
  },
]

export default function CostGuidesPage() {
  return (
    <div className=\"bg-gray-50 min-h-screen\">
      {/* Hero */}
      <section className=\"bg-slate-800 text-white py-16\">
        <div className=\"container-custom\">
          <h1 className=\"text-4xl font-bold mb-4\">Basement Cost Guides</h1>
          <p className=\"text-slate-300 text-lg max-w-2xl\">
            Real 2026 pricing — not outdated estimates from three years ago. Every guide is researched from current contractor data, regional labor rates, and actual material costs.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className=\"bg-teal-600 text-white py-4\">
        <div className=\"container-custom\">
          <div className=\"flex flex-wrap gap-6 justify-center md:justify-start text-sm font-medium\">
            <span className=\"flex items-center gap-1.5\">✓ 2026 pricing data</span>
            <span className=\"flex items-center gap-1.5\">✓ Regional cost breakdowns</span>
            <span className=\"flex items-center gap-1.5\">✓ DIY vs pro comparisons</span>
            <span className=\"flex items-center gap-1.5\">✓ Updated annually</span>
          </div>
        </div>
      </section>

      <section className=\"py-12\">
        <div className=\"container-custom\">
          {/* Published */}
          {publishedGuides.length > 0 && (
            <>
              <h2 className=\"text-2xl font-bold text-slate-800 mb-6\">Published Cost Guides</h2>
              <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-12\">
                {publishedGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className=\"bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3\"
                  >
                    <div className=\"flex items-center justify-between\">
                      <span className=\"bg-teal-50 text-teal-700 text-xs font-semibold px-2 py-1 rounded\">
                        {guide.category}
                      </span>
                      <span className=\"text-gray-400 text-xs\">{guide.readTime}</span>
                    </div>
                    <h3 className=\"font-bold text-slate-800 text-lg\">{guide.title}</h3>
                    <p className=\"text-gray-500 text-sm flex-1\">{guide.description}</p>
                    <div className=\"flex items-center justify-between pt-2 border-t border-gray-100\">
                      <span className=\"text-teal-600 font-bold text-sm\">{guide.priceRange}</span>
                      <span className=\"text-teal-600 font-semibold text-sm\">Read Guide →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* Coming Soon */}
          <h2 className=\"text-2xl font-bold text-slate-800 mb-6\">Coming Soon</h2>
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-5 mb-12\">
            {comingSoon.map((guide) => (
              <div
                key={guide.title}
                className=\"bg-white rounded-xl p-6 border border-dashed border-gray-300\"
              >
                <div className=\"flex items-center justify-between mb-3\">
                  <span className=\"bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded\">
                    {guide.category}
                  </span>
                  <span className=\"text-teal-600 font-bold text-sm\">{guide.priceRange}</span>
                </div>
                <h3 className=\"font-bold text-slate-700 text-lg mb-2\">{guide.title}</h3>
                <p className=\"text-gray-400 text-sm\">{guide.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className=\"bg-white rounded-xl border border-teal-200 p-8 text-center\">
            <h3 className=\"text-xl font-bold text-slate-800 mb-2\">Don't Want to Wait?</h3>
            <p className=\"text-gray-600 mb-2\">Get free quotes from vetted local contractors right now.</p>
            <p className=\"text-gray-500 text-sm mb-5\">Real prices for your specific home and location — no estimates needed.</p>
            <Link
              href=\"/#get-quotes\"
              className=\"inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors\"
            >
              Get Free Quotes →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
