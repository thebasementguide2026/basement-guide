import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Basement Finishing Cost Guide 2026: What You'll Actually Pay",
  description: 'How much does it cost to finish a basement in 2026? Real pricing from $20 to $75 per sq ft, full breakdowns by size, room type, materials, and region. No fluff.',
}

// JSON-LD Schema
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Basement Finishing Cost Guide 2026: What You'll Actually Pay",
  datePublished: '2026-02-19',
  dateModified: '2026-02-19',
  author: { '@type': 'Organization', name: 'The Basement Guide' },
  publisher: { '@type': 'Organization', name: 'The Basement Guide', url: 'https://thebasement.guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to finish a basement?',
      acceptedAnswer: { '@type': 'Answer', text: 'Finishing a basement costs between $20,000 and $75,000 on average in 2026, or $20 to $75 per square foot depending on size, finishes, and whether you add a bathroom or bedroom.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to finish a basement?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most basement finishing projects take 4 to 8 weeks from start to finish, including permitting, framing, mechanical rough-ins, drywall, and finishing work.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to finish my basement?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, in almost all jurisdictions you need a building permit to finish a basement. Permits typically cost $500 to $2,000 and cover structural, electrical, plumbing, and HVAC work.' },
    },
    {
      '@type': 'Question',
      name: 'Does finishing a basement add value to your home?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. According to national remodeling data, homeowners typically recoup 70% to 75% of basement finishing costs at resale. In high-demand markets the ROI can be higher.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest way to finish a basement?',
      acceptedAnswer: { '@type': 'Answer', text: 'The cheapest approach is a basic finish with framing, drywall, paint, LVP flooring, and basic lighting — no bathroom, no bedroom. Expect to pay $20 to $30 per square foot, or $10,000 to $20,000 for a 500-700 sq ft space.' },
    },
  ],
}

export default function BasementFinishingCostPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-white">
        {/* Hero */}
        <section className="bg-slate-800 text-white py-12">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/cost-guides" className="text-teal-400 text-sm hover:underline">Cost Guides</Link>
              <span className="text-slate-500">›</span>
              <span className="text-slate-400 text-sm">Basement Finishing Cost</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Basement Finishing Cost Guide 2026: What You'll Actually Pay
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>By The Basement Guide Staff</span>
              <span>·</span>
              <span>Last updated: February 2026</span>
              <span>·</span>
              <span>18 min read</span>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <div className="relative h-72 lg:h-96 w-full">
          <Image 
            src="/unfinished-basement-interior.jpg.jpg" 
            alt="Unfinished basement ready for finishing" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm">This unfinished basement could cost anywhere from $15,000 to $75,000+ to finish.</p>
          </div>
        </div>

        <div className="container-custom max-w-4xl py-10">
          {/* Quick Answer Box */}
          <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-xl p-6 mb-10">
            <p className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-slate-800 text-lg font-semibold mb-3">
              Finishing a basement costs <strong>$20,000–$75,000</strong> on average in 2026, or <strong>$20–$75 per square foot</strong>.
            </p>
            <p className="text-gray-600 text-sm">
              The biggest cost drivers are bathrooms (+$8k-$25k), ceiling height, and local labor rates.
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-10 text-gray-700 leading-relaxed">
            <p>
              Let's be honest — contractor quotes for basement finishing can feel random. This guide breaks down exactly what drives the cost so you can know if your quote is fair.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12 border border-gray-200">
            <h2 className="font-bold text-slate-800 mb-4 text-lg">In This Guide</h2>
            <ol className="space-y-2 text-sm">
              {[
                { label: 'Average Cost by Basement Size', href: '#cost-by-size' },
                { label: 'Cost Per Square Foot Breakdown', href: '#cost-per-sqft' },
                { label: 'What Drives the Cost Up (or Down)', href: '#cost-drivers' },
                { label: 'Cost by Room Type', href: '#cost-by-room' },
                { label: 'Regional Cost Differences', href: '#regional' },
                { label: 'DIY vs. Hiring a Pro', href: '#diy-vs-pro' },
                { label: 'Does It Add Value to Your Home?', href: '#roi' },
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

          {/* Section 1: Cost by Size */}
          <section id="cost-by-size" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Average Basement Finishing Cost by Size (2026)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left p-4 rounded-tl-lg">Basement Size</th>
                    <th className="text-left p-4">Basic Finish</th>
                    <th className="text-left p-4">Mid-Range</th>
                    <th className="text-left p-4 rounded-tr-lg">High-End</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: '500 sq ft', basic: '$10,000–$17,500', mid: '$17,500–$30,000', high: '$30,000–$50,000' },
                    { size: '700 sq ft', basic: '$14,000–$24,500', mid: '$24,500–$42,000', high: '$42,000–$70,000' },
                    { size: '1,000 sq ft', basic: '$20,000–$35,000', mid: '$35,000–$60,000', high: '$60,000–$100,000' },
                    { size: '1,200 sq ft', basic: '$24,000–$42,000', mid: '$42,000–$72,000', high: '$72,000–$120,000' },
                    { size: '1,500 sq ft', basic: '$30,000–$52,500', mid: '$52,500–$90,000', high: '$90,000–$150,000' },
                  ].map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold text-slate-800 border-b border-gray-100">{row.size}</td>
                      <td className="p-4 text-gray-700 border-b border-gray-100">{row.basic}</td>
                      <td className="p-4 text-teal-700 font-medium border-b border-gray-100">{row.mid}</td>
                      <td className="p-4 text-gray-700 border-b border-gray-100">{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Cost Per Sq Ft */}
          <section id="cost-per-sqft" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Cost Per Square Foot Breakdown</h2>
            <div className="space-y-4 mb-8">
              {[
                { 
                  tier: '$20–$35 / sq ft', 
                  title: 'The Basic Finish', 
                  includes: ['Framing & Insulation', 'Drywall & Mudding', 'Standard LVP or Carpet'],
                  bestFor: 'Storage, playroom, or basic home gym.'
                },
                { 
                  tier: '$35–$60 / sq ft', 
                  title: 'The Mid-Range Finish', 
                  includes: ['Everything in Basic', 'Recessed Lighting', 'Half-Bathroom'],
                  bestFor: 'Family room, guest bedroom, or home office.'
                },
                { 
                  tier: '$60–$100+ / sq ft', 
                  title: 'The Luxury Finish', 
                  includes: ['Full Bathroom', 'Wet Bar', 'Custom Built-ins'],
                  bestFor: 'Rental unit or luxury home theater.'
                }
              ].map((item) => (
                <div key={item.tier} className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col md:flex-row">
                  <div className="bg-slate-800 text-white p-6 flex flex-col justify-center items-center text-center md:w-1/3">
                    <span className="text-teal-400 font-bold text-2xl">{item.tier}</span>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="font-bold text-xl text-slate-800 mb-3">{item.title}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm text-gray-600">
                      {item.includes.map(inc => (
                        <li key={inc} className="flex items-start gap-2">
                          <span className="text-teal-500">✔</span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DIY Section */}
          <section id="diy-vs-pro" className="mb-14 scroll-mt-20 bg-slate-900 text-white rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6">DIY vs. Hiring a Pro</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              You can typically shave <strong>40-50% off the total cost</strong> by doing the labor yourself.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-teal-400 font-bold text-lg mb-4">The DIY Route (~$12–$20 / sq ft)</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li><span className="text-teal-400 font-bold">+</span> Massive cost savings</li>
                  <li><span className="text-red-400 font-bold">-</span> Takes 6-12 months</li>
                </ul>
              </div>
              <div>
                <h3 className="text-teal-400 font-bold text-lg mb-4">The Pro Route (~$35–$75 / sq ft)</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li><span className="text-teal-400 font-bold">+</span> Finished in 4-8 weeks</li>
                  <li><span className="text-red-400 font-bold">-</span> High upfront investment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { 
                  q: "What is the most expensive part of finishing a basement?", 
                  a: "The bathroom. Plumbing, tiling, and fixtures make it the most labor-intensive room per square foot." 
                },
                { 
                  q: "Does finishing a basement add value?", 
                  a: "Yes, you typically recoup 70% to 75% of the cost at resale." 
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <h3 className="font-bold text-slate-800 text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get a quote?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/get-free-quotes" className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg">
                Get Free Local Quotes
              </Link>
              <Link href="/guides" className="bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-500">
                Read More Guides
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
