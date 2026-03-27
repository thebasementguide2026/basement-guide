import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About The Basement Guide | Expert Waterproofing Advice',
  description: 'The Basement Guide is an independent resource helping homeowners understand basement waterproofing, finishing, and maintenance. Learn about our mission and methodology.',
  alternates: { canonical: 'https://thebasement.guide/about' },
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-800 text-white py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">About The Basement Guide</h1>
          <p className="text-slate-300 text-lg">
            Independent advice for homeowners who want straight answers — not a sales pitch.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">

          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why We Built This Site</h2>
            <p className="text-gray-600 mb-6">
              If you've ever gotten three wildly different quotes from basement contractors and had no idea which one was right, you know the problem. Most homeowners walk into basement waterproofing or finishing projects completely blind — and contractors know it.
            </p>
            <p className="text-gray-600 mb-6">
              The Basement Guide exists to fix that. We research the techniques, test the products, break down the real costs, and explain everything in plain English so you can make smart decisions — whether you're hiring a pro or doing it yourself.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">What We Cover</h2>
            <p className="text-gray-600 mb-4">We focus exclusively on basements — which means we go deeper than general home improvement sites that try to cover everything. Our core topics:</p>
            <ul className="space-y-2 mb-6">
              {[
                'Basement waterproofing — interior and exterior systems, drainage, sump pumps',
                'Basement finishing — costs, permits, materials, contractors',
                'Foundation repair — cracks, settlement, hydrostatic pressure',
                'Mold and moisture — prevention, remediation, what actually works',
                'Products and equipment — dehumidifiers, sump pumps, flooring, and more',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">How We Research</h2>
            <p className="text-gray-600 mb-6">
              Every article on this site is researched from the ground up. We pull real contractor pricing data, review manufacturer specs, cross-reference building codes, and consult industry publications. We update our content regularly — you'll see a "Last Updated" date on every article — because costs and techniques change year to year.
            </p>
            <p className="text-gray-600 mb-6">
              We don't accept payment for editorial coverage. If we recommend a product or contractor, it's because we genuinely think it's the best option for homeowners — not because someone paid us to say so. Our <Link href="/methodology" className="text-teal-600 hover:underline">full methodology is published here</Link>.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Our Editorial Standards</h2>
            <p className="text-gray-600 mb-4">We hold ourselves to a simple standard: would we feel comfortable recommending this to a family member? If not, we don't publish it. Specifically:</p>
            <ul className="space-y-2 mb-6">
              {[
                'All pricing data is sourced and dated',
                'Product recommendations are based on independent research',
                'Affiliate relationships are always disclosed — see our Affiliate Disclosure',
                'We correct errors promptly when readers point them out',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">A Note on Affiliate Links</h2>
            <p className="text-gray-600 mb-6">
              Some links on this site are affiliate links, meaning we earn a small commission if you purchase through them — at no extra cost to you. This is how we keep the lights on and keep our content free. We only link to products we'd actually recommend. Read our full <Link href="/affiliate-disclosure" className="text-teal-600 hover:underline">Affiliate Disclosure here</Link>.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-10">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have a question about your basement? Spotted an error in one of our articles? Want to work with us? We'd love to hear from you. <Link href="/contact" className="text-teal-600 hover:underline">Reach out on our contact page</Link>.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Fix Your Basement?</h3>
            <p className="text-gray-600 mb-4">Compare free quotes from vetted local contractors. No obligation.</p>
            <Link href="/#get-quotes" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Get Free Quotes →
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
