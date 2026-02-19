import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'French Drain Installation Cost 2026: Interior & Exterior Pricing',
  description: 'How much does a French drain cost in 2026? Average pricing for interior basement drains ($4k-$12k) and exterior yard drains ($10-$35 per linear foot).',
}

// JSON-LD Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a French drain cost to install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average cost for a French drain installation in 2026 is $5,000. Exterior yard drains typically range from $2,800 to $6,500 ($10–$35 per linear foot), while interior basement systems cost between $4,000 and $12,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an interior French drain better than exterior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interior French drains are more effective for managing hydrostatic pressure and rising water tables in existing homes. Exterior drains are better for preventing water from reaching the foundation but require significant excavation.',
      },
    },
  ],
}

export default function FrenchDrainCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="bg-white">
        {/* Hero */}
        <section className="bg-slate-800 text-white py-12">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/cost-guides" className="text-teal-400 text-sm hover:underline">
                Cost Guides
              </Link>
              <span className="text-slate-500">›</span>
              <span className="text-slate-400 text-sm">French Drain Cost</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              French Drain Installation Cost Guide 2026
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>By The Basement Guide Staff</span>
              <span>·</span>
              <span>Last updated: February 2026</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        <div className="container-custom max-w-4xl py-10">
          {/* Quick Answer Box */}
          <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-xl p-6 mb-10">
            <p className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-slate-800 text-lg font-semibold mb-3">
              A French drain costs <strong>$5,000</strong> on average in 2026.
            </p>
            <p className="text-gray-600 text-sm">
              Expect to pay <strong>$10–$35 per linear foot</strong> for exterior yard drains and <strong>$40–$85 per linear foot</strong> for interior basement systems.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-10 text-gray-700 leading-relaxed">
            <p>
              Whether you're dealing with a swampy backyard or a basement that seeps during every storm, a French drain is the gold standard for water management. But the cost varies wildly depending on one factor: <strong>Location</strong>.
            </p>
          </div>

          {/* Cost Tables */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">2026 French Drain Price Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-slate-100 p-4 font-bold text-slate-800 border-b border-gray-200">
                  Interior (Basement)
                </div>
                <div className="p-6">
                  <p className="text-3xl font-bold text-teal-600 mb-2">$4,000 – $12,000</p>
                  <p className="text-sm text-gray-500 mb-4">Typical for a 1,000 sq. ft. basement</p>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">✔ Concrete jackhammering</li>
                    <li className="flex items-center gap-2">✔ Perforated pipe & gravel</li>
                    <li className="flex items-center gap-2">✔ New sump pump & pit</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-slate-100 p-4 font-bold text-slate-800 border-b border-gray-200">
                  Exterior (Yard/Foundation)
                </div>
                <div className="p-6">
                  <p className="text-3xl font-bold text-teal-600 mb-2">$2,800 – $6,500</p>
                  <p className="text-sm text-gray-500 mb-4">Typical 100-foot installation</p>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">✔ Trench excavation</li>
                    <li className="flex items-center gap-2">✔ Geotextile filter fabric</li>
                    <li className="flex items-center gap-2">✔ Drainage rock & topsoil</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-14 prose prose-slate max-w-none">
            <h2 className="text-slate-800">Key Cost Factors</h2>
            <p>What makes one 50-foot drain cost twice as much as another?</p>
            <ul>
              <li><strong>Trench Depth:</strong> Shallow yard drains (12-18") are cheap. Deep foundation drains (6-8 feet) require heavy machinery and shoring.</li>
              <li><strong>Obstructions:</strong> Driveways, sidewalks, and utility lines add significantly to labor time.</li>
              <li><strong>Concrete Disposal:</strong> For interior drains, hauling away old concrete slabs adds $500–$1,000 to the bill.</li>
            </ul>
          </section>

          {/* Final CTA */}
          <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Professional Quote?</h2>
            <p className="mb-8 opacity-90 max-w-lg mx-auto">
              Get an accurate estimate for your specific yard or basement layout from local drainage experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-free-quotes" className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg">
                Find Local Pros →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
