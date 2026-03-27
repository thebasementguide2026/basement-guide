import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Research Methodology | The Basement Guide',
  description: 'Learn how The Basement Guide researches, writes, and updates its content — including how we source pricing data, evaluate products, and maintain editorial independence.',
  alternates: { canonical: 'https://thebasement.guide/methodology' },
}

export default function MethodologyPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-800 text-white py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Our Research Methodology</h1>
          <p className="text-slate-300 text-lg">
            How we research, write, and keep our content accurate — so you can trust what you read.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom max-w-3xl">

          {/* Intro */}
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Anyone can publish information about basements. What separates useful advice from noise is how that information was gathered. This page explains exactly how we work — what we research, how we verify it, and how we stay current.
          </p>

          {/* Steps */}
          <div className="space-y-12">

            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Topic & Keyword Research</h2>
                <p className="text-gray-600 mb-4">
                  Every article starts with a question homeowners are actually asking. We use keyword research tools to identify high-volume search terms, then validate them against real questions in forums, Reddit threads, and contractor Q&A sites. If real homeowners are confused about something, that's what we write about.
                </p>
                <p className="text-gray-600">
                  We prioritize topics where existing content is outdated, overly technical, or written by brands with a financial interest in the answer. That gap is where we add the most value.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Primary Research & Pricing Data</h2>
                <p className="text-gray-600 mb-4">
                  For every cost guide, we gather pricing data from multiple sources:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Published contractor estimates and industry cost databases',
                    'National Association of Home Builders (NAHB) data',
                    'HomeAdvisor and Angi cost survey data',
                    'Regional variance data from contractor networks',
                    'Material costs from major retailers (Home Depot, Lowe\'s)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600">
                  We never publish a single-source cost figure. All pricing ranges represent the current market as of the publish date and are updated at least annually.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Product Evaluation</h2>
                <p className="text-gray-600 mb-4">
                  For product reviews and recommendations, we evaluate products based on:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Technical specifications and manufacturer documentation',
                    'Verified customer reviews across multiple platforms (Amazon, Home Depot, specialty retailers)',
                    'Independent testing data where available',
                    'Value for money relative to alternatives in the category',
                    'Long-term reliability data and warranty terms',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600">
                  We do not accept free products in exchange for reviews. Affiliate relationships do not influence product rankings — a product with no affiliate program can and does rank above one with a commission if it's genuinely better.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Writing & Editorial Standards</h2>
                <p className="text-gray-600 mb-4">
                  Our editorial standard is simple: write what you'd tell a friend. That means:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Plain English — no jargon without explanation',
                    'Direct answers first — the key information in the first paragraph, not buried at the bottom',
                    'Honest assessments — including downsides, limitations, and when to hire a pro vs. DIY',
                    'No filler — every sentence has to earn its place',
                    'Updated dates on all articles so you know how current the information is',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">5</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Fact-Checking & Updates</h2>
                <p className="text-gray-600 mb-4">
                  The basement and waterproofing industry changes — new materials, new techniques, shifting labor costs. An article that was accurate in 2022 may be misleading in 2026. We review and update our content on the following schedule:
                </p>
                <div className="bg-gray-50 rounded-lg p-5 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-700 mb-1">Cost guides</p>
                      <p className="text-gray-600">Updated annually at minimum, or when market data changes significantly</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700 mb-1">Product reviews</p>
                      <p className="text-gray-600">Updated when new models release or pricing changes substantially</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700 mb-1">How-to guides</p>
                      <p className="text-gray-600">Updated when techniques, codes, or best practices change</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700 mb-1">Error corrections</p>
                      <p className="text-gray-600">Corrected within 48 hours of being identified</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Spotted an error? <Link href="/contact" className="text-teal-600 hover:underline">Let us know</Link> — we take corrections seriously and publish them promptly.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">6</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">Editorial Independence</h2>
                <p className="text-gray-600 mb-4">
                  The Basement Guide earns revenue through affiliate commissions and contractor referral fees. This never influences our editorial content. Specifically:
                </p>
                <ul className="space-y-2">
                  {[
                    'Brands cannot pay for positive coverage or higher rankings',
                    'We disclose all affiliate relationships transparently',
                    'Negative findings are published even when we have a commercial relationship with the brand',
                    'Our contractor referral partners are not endorsed — we connect homeowners with networks, not specific contractors',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <span className="text-teal-600 font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Questions About Our Process?</h3>
            <p className="text-gray-600 mb-4">We're happy to explain any specific recommendation or research decision.</p>
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Get in Touch →
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link href="/" className="text-teal-600 hover:underline font-medium">← Back to Home</Link>
          </div>

        </div>
      </section>
    </div>
  )
}
