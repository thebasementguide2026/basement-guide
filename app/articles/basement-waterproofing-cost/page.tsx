import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Waterproofing Cost 2026: Average Interior & Exterior Pricing',
  description: 'How much does basement waterproofing cost in 2026? Average pricing for interior drainage ($3k-$8k), exterior membranes ($7k-$15k), and crack repair ($250-$800).',
}

// JSON-LD Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to waterproof a basement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average cost to waterproof a basement in 2026 is $5,231. Most homeowners spend between $2,459 and $8,190. Minor repairs cost as little as $600, while major exterior excavation projects can exceed $15,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper: interior or exterior waterproofing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interior waterproofing is significantly cheaper, averaging $3,000 to $8,000. Exterior waterproofing requires heavy excavation and typically costs $7,000 to $15,000+.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix a foundation crack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-structural foundation crack repair typically costs $250 to $800 per crack using epoxy or polyurethane injection. Structural repairs involving piers or carbon fiber can cost $1,000 to $5,000+ per crack.',
      },
    },
  ],
}

export default function BasementWaterproofingCostPage() {
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
              <span className="text-slate-400 text-sm">Basement Waterproofing Cost</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Basement Waterproofing Cost Guide 2026
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>By The Basement Guide Staff</span>
              <span>·</span>
              <span>Last updated: February 2026</span>
              <span>·</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <div className="relative h-72 lg:h-96 w-full">
          <Image
            src="/waterproofing-contractor-basement.jpg"
            alt="Contractor installing basement waterproofing system"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm">Interior drainage systems are the most common waterproofing solution.</p>
          </div>
        </div>

        <div className="container-custom max-w-4xl py-10">
          {/* Quick Answer Box */}
          <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-xl p-6 mb-10">
            <p className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-slate-800 text-lg font-semibold mb-3">
              Basement waterproofing costs <strong>$5,231</strong> on average in 2026. Most homeowners pay between <strong>$2,459 and $8,190</strong>.
            </p>
            <p className="text-gray-600 text-sm">
              Interior solutions (sump pumps and drains) average <strong>$3,000–$8,000</strong>, while exterior excavation averages <strong>$7,000–$15,000+</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-10 text-gray-700 leading-relaxed">
            <p>
              A wet basement isn't just a nuisance — it's a threat to your home's structural integrity and your family's health. But with quotes ranging from $500 to $20,000, how do you know what a fair price is?
            </p>
            <p>
              In 2026, labor rates have stabilized, but material costs for specialized membranes and high-efficiency sump pumps remain at a premium. This guide breaks down current market rates for every major waterproofing method.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12 border border-gray-200">
            <h2 className="font-bold text-slate-800 mb-4 text-lg">In This Guide</h2>
            <ol className="space-y-2 text-sm text-gray-600">
              {[
                { label: 'Cost by Waterproofing Method', href: '#cost-by-method' },
                { label: 'Interior vs. Exterior Costs', href: '#interior-vs-exterior' },
                { label: 'Common Repair Unit Costs', href: '#unit-costs' },
                { label: 'Cost Drivers & Hidden Expenses', href: '#drivers' },
                { label: 'DIY vs. Professional Pricing', href: '#diy' },
                { label: 'Frequently Asked Questions', href: '#faq' },
              ].map((item, i) => (
                <li key={item.href}>
                  <a href={item.href} className="text-teal-600 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Section 1: Cost by Method */}
          <section id="cost-by-method" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Basement Waterproofing Cost by Method (2026)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white text-left">
                    <th className="p-4 rounded-tl-lg">Method</th>
                    <th className="p-4">Average Cost Range</th>
                    <th className="p-4 rounded-tr-lg">Typical Use Case</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    { method: 'Crack Injection', cost: '$250 – $800', use: 'Minor wall seepage' },
                    { method: 'Interior Drain Tile', cost: '$3,000 – $8,000', use: 'High water table / hydrostatic pressure' },
                    { method: 'Sump Pump System', cost: '$800 – $2,500', use: 'Active water removal' },
                    { method: 'Exterior Membrane', cost: '$7,000 – $15,000', use: 'Preventing water entry entirely' },
                    { method: 'Window Well Drain', cost: '$500 – $1,500', use: 'Leaking basement windows' },
                  ].map((row, i) => (
                    <tr key={row.method} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold border-b border-gray-100">{row.method}</td>
                      <td className="p-4 text-teal-700 font-medium border-b border-gray-100">{row.cost}</td>
                      <td className="p-4 border-b border-gray-100">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Interior vs Exterior */}
          <section id="interior-vs-exterior" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Interior vs. Exterior: Which Do You Need?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-3 text-center">Interior Systems</h3>
                <p className="text-teal-600 font-bold text-lg mb-4 text-center">$3,000 – $8,000</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span>✔</span> <strong>Managing</strong> water once it enters</li>
                  <li className="flex gap-2"><span>✔</span> No landscape destruction</li>
                  <li className="flex gap-2"><span>✔</span> Faster installation (2-4 days)</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-3 text-center">Exterior Systems</h3>
                <p className="text-teal-600 font-bold text-lg mb-4 text-center">$7,000 – $15,000+</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span>✔</span> <strong>Preventing</strong> water from entering</li>
                  <li className="flex gap-2"><span>✔</span> True long-term foundation protection</li>
                  <li className="flex gap-2"><span>✔</span> Requires excavation to the footer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Unit Costs */}
          <section id="unit-costs" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Waterproofing Unit Costs (Per Foot)</h2>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: 'French Drain (Interior)', cost: '$40 – $85 / linear ft.' },
                  { label: 'French Drain (Exterior)', cost: '$30 – $90 / linear ft.' },
                  { label: 'Waterproof Membrane', cost: '$4 – $7 / sq. ft.' },
                  { label: 'Foundation Sealing', cost: '$2 – $10 / sq. ft.' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="text-teal-600 font-bold">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Cost Drivers */}
          <section id="drivers" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">What Drives the Cost Up?</h2>
            <div className="prose prose-lg text-gray-700">
              <p>Beyond the method chosen, several site-specific factors will influence your final quote:</p>
              <ul>
                <li><strong>Home Age:</strong> Older foundations (stone, brick) are harder to seal than modern poured concrete.</li>
                <li><strong>Basement Finish:</strong> If the basement is already finished, contractors must remove drywall, flooring, and studs to reach the walls, adding 20-30% to labor.</li>
                <li><strong>Soil Type:</strong> Heavy clay soil retains more water and increases hydrostatic pressure, often requiring more robust drainage systems.</li>
                <li><strong>Accessibility:</strong> Tight spaces between homes or obstructions like decks and HVAC units increase excavation costs.</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Is basement waterproofing worth the money?',
                  a: 'Yes. Beyond preventing property damage, waterproofing protects your foundation from structural failure and prevents mold growth, which significantly impacts home value and resale speed.',
                },
                {
                  q: 'How long does basement waterproofing last?',
                  a: 'Interior systems with a high-quality sump pump typically last 10-15 years before the pump needs replacement. Exterior membranes can last 20-40 years depending on the material used.',
                },
                {
                  q: 'Does homeowners insurance cover waterproofing?',
                  a: 'Usually not. Insurance covers sudden water damage (like a burst pipe), but not gradual seepage or "groundwater" issues. You typically need a separate flood insurance policy or a sump pump failure rider.',
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-800 text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 italic">Stop the Seepage.</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Don't wait for the next heavy rain. Get an accurate, honest quote from a vetted basement waterproofing specialist in your area today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-free-quotes" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Get Free Quotes →
              </Link>
              <Link href="/guides" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-bold text-lg border border-slate-700 transition-colors">
                Explore More Guides
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
