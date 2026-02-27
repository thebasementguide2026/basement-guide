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
  {
    title: 'French Drain Installation Cost 2026',
    description: 'Full cost breakdown for yard and interior French drains. Average $1,000–$6,500 depending on length and type.',
    href: '/articles/french-drain-cost',
    category: 'Drainage',
    priceRange: '$1,000 – $6,500',
    readTime: '10 min read',
  },
  {
    title: 'Sump Pump Installation Cost 2026',
    description: 'Pedestal vs. submersible pump pricing, pit excavation, and battery backup costs explained.',
    href: '/articles/sump-pump-cost',
    category: 'Sump Pumps',
    priceRange: '$600 – $2,000',
    readTime: '9 min read',
  },
  {
    title: 'Foundation Crack Repair Cost 2026',
    description: 'Epoxy injection vs. polyurethane foam. Expect to pay $350–$1,500 per crack depending on severity and method.',
    href: '/articles/foundation-crack-repair-cost',
    category: 'Foundation',
    priceRange: '$350 – $1,500',
    readTime: '12 min read',
  },
  {
    title: 'Basement Waterproofing Cost 2026: Average Interior & Exterior Pricing',
    description: 'How much does basement waterproofing cost in 2026? National average $5,230. Interior systems $3,000–$8,000, exterior $8,000–$15,000.',
    href: '/articles/basement-waterproofing-cost',
    category: 'Waterproofing',
    priceRange: '$2,000 – $15,000',
    readTime: '14 min read',
  },
  {
    title: 'Mold Remediation Cost 2026',
    description: 'Professional mold removal costs $500–$10,000+ by area size. What drives the price and when to call a pro.',
    href: '/articles/mold-remediation-cost',
    category: 'Health & Safety',
    priceRange: '$500 – $10,000',
    readTime: '8 min read',
  },
  {
    title: 'Basement Insulation Cost 2026',
    description: 'Rigid foam vs. spray foam vs. mineral wool pricing. Stop energy loss and prevent condensation issues.',
    href: '/articles/basement-insulation-guide',
    category: 'Insulation',
    priceRange: '$1,500 – $6,000',
    readTime: '15 min read',
  },
]

const comingSoon = [
  {
    title: 'Egress Window Installation Cost 2026',
    description: 'Everything that goes into the cost of adding an egress window — permits, excavation, labor, and finishing.',
    category: 'Windows',
    priceRange: '$2,500 – $5,500',
  },
  {
    title: 'Basement Waterproofing Paint Cost 2026',
    description: 'When waterproofing paint makes sense vs. when you need a real system. Costs and effectiveness compared.',
    category: 'DIY',
    priceRange: '$50 – $300',
  },
]

export default function CostGuidesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Basement Cost Guides
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Real 2026 pricing — not outdated estimates from three years ago. Every guide is researched from current contractor data, regional labor rates, and actual material costs.
          </p>

          {/* Trust bar */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start text-sm font-medium">
            <span className="mr-4 mb-2 flex items-center gap-1.5">✓ 2026 pricing data</span>
            <span className="mr-4 mb-2 flex items-center gap-1.5">✓ Regional cost breakdowns</span>
            <span className="mr-4 mb-2 flex items-center gap-1.5">✓ DIY vs pro comparisons</span>
            <span className="mr-4 mb-2 flex items-center gap-1.5">✓ Updated annually</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-4">

        {/* Published */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Published Cost Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {publishedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group block rounded-2xl border border-slate-700 bg-slate-800/50 p-6 transition-all hover:border-blue-500/50 hover:bg-slate-800"
            >
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-400 font-medium">{guide.category}</span>
                <span>{guide.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4">{guide.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-bold">{guide.priceRange}</span>
                <span className="text-sm text-blue-400 group-hover:translate-x-1 transition-transform">Read Guide →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {comingSoon.map((guide) => (
            <div key={guide.title} className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 opacity-60">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <span className="rounded-full bg-slate-700/50 px-3 py-1 font-medium">{guide.category}</span>
                <span>{guide.priceRange}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-300 mb-2">{guide.title}</h3>
              <p className="text-sm text-slate-500">{guide.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950/50 to-slate-900 p-8 text-center mb-16">
          <h3 className="text-xl font-bold mb-2">Don&apos;t Want to Wait?</h3>
          <p className="text-slate-400 mb-4">Get free quotes from vetted local contractors right now.</p>
          <p className="text-sm text-slate-500 mb-6">Real prices for your specific home and location — no estimates needed.</p>
          <Link href="/#get-quotes" className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-500 transition-colors">
            Get Free Quotes →
          </Link>
        </div>
      </div>
    </main>
  )
}
