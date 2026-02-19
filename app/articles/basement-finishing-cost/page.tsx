import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Finishing Cost Guide 2026: What You\'ll Actually Pay',
  description: 'How much does it cost to finish a basement in 2026? Real pricing from $20 to $75 per sq ft, full breakdowns by size, room type, materials, and region. No fluff.',
}

// JSON-LD Schema
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Basement Finishing Cost Guide 2026: What You\'ll Actually Pay',
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
              <span>By The Basement Guide</span>
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
            alt="Unfinished basement ready for finishing — showing concrete walls, exposed joists, and mechanicals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm">This unfinished basement is a blank canvas — and depending on what you do with it, could cost anywhere from $15,000 to $75,000+.</p>
          </div>
        </div>

        <div className="container-custom max-w-4xl py-10">

          {/* Quick Answer Box */}
          <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-xl p-6 mb-10">
            <p className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-slate-800 text-lg font-semibold mb-3">
              Finishing a basement costs <strong>$20,000–$75,000</strong> on average in 2026, or <strong>$20–$75 per square foot</strong>. Most homeowners with a typical 1,000 sq ft unfinished basement spend around <strong>$30,000–$50,000</strong> for a solid mid-range finish.
            </p>
            <p className="text-gray-600 text-sm">
              The three biggest cost drivers: whether you add a bathroom (+$8,000–$25,000), your ceiling height (impacts HVAC and electrical), and local labor rates (New York and California run 20–40% higher than the national average).
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              Let's be honest — contractor quotes for basement finishing can feel like they came from a random number generator. You get one for $28,000, another for $52,000, and a third for $41,000, and you have no idea why they're so different or which one is fair.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This guide exists to fix that. We'll walk you through exactly what drives the cost, what a fair price looks like for your specific situation, and what questions to ask before you sign anything. By the time you're done reading, you'll know whether that contractor quote is in the right ballpark — or whether someone's trying to take you for a ride.
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
                { label: 'Full Material Cost Breakdown', href: '#materials' },
                { label: 'Permits: What You Need and What It Costs', href: '#permits' },
                { label: 'Regional Cost Differences', href: '#regional' },
                { label: 'DIY vs. Hiring a Pro', href: '#diy-vs-pro' },
                { label: 'Does It Add Value to Your Home?', href: '#roi' },
                { label: 'How to Get an Accurate Quote', href: '#quotes' },
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
            <p className="text-gray-500 text-sm mb-6">Source: HomeAdvisor, Angi, Trusscore — updated February 2026</p>

            <p className="text-gray-700 mb-6">
              The single biggest factor in your total cost is how many square feet you're working with. Here's what most homeowners pay in 2026, broken down by basement size and finish level:
            </p>

            {/* Cost Table */}
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

            {/* Legend */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { level: 'Basic Finish', color: 'bg-blue-50 border-blue-200', desc: 'Framed walls, drywall, paint, LVP flooring, basic lighting. No bathroom, no bedroom additions.' },
                { level: 'Mid-Range', color: 'bg-teal-50 border-teal-200', desc: 'Everything in basic, plus recessed lighting, better flooring, half bath, and upgraded HVAC.' },
                { level: 'High-End', color: 'bg-purple-50 border-purple-200', desc: 'Full bath, wet bar or kitchenette, custom built-ins, home theater setup, premium materials throughout.' },
              ].map((item) => (
                <div key={item.level} className={`p-4 rounded-xl border ${item.color}`}>
                  <p className="font-bold text-slate-800 mb-1">{item.level}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Important note:</strong> These are national averages. If you're in the New York metro area (which includes Long Island), expect costs to run <strong>20–35% higher</strong> than the figures above. A mid-range 1,000 sq ft project that costs $35,000 in Ohio might run $45,000–$50,000 on Long Island.
            </div>
          </section>

          {/* Section 2: Cost Per Sq Ft */}
          <section id="cost-per-sqft" className="mb-14 scroll-mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Cost Per Square Foot: What Each Tier Includes</h2>

            <p className="text-gray-700 mb-8">
              When contractors quote a price per square foot, it's not always clear what's included. Here's what you should expect to get at each price point:
            </p>

            {/* Visual cost tiers */}
            <div className="space-y-4 mb-8">
              {
