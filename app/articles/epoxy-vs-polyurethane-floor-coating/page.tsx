import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Epoxy vs Polyurethane Floor Coating: Which One Should You Choose? | The Basement Guide',
  description: 'Complete 2026 comparison of epoxy vs polyurethane floor coatings. Pros, cons, costs, durability, UV resistance, and when to use each on your basement or garage floor.',
}

export default function EpoxyVsPolyurethaneArticle() {
  return (
    <main className="bg-white text-gray-800">

      {/* Article Hero */}
      <section className="relative bg-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">Comparison Guide</span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Epoxy vs Polyurethane<br /><span className="text-teal-400">Floor Coating</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">Which one should you choose for your basement, garage, or commercial space? A clear, no-hype breakdown of both options.</p>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
            <span className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">BG</span>
            <div className="text-left">
              <p className="text-white font-medium">The Basement Guide Staff</p>
              <p>Published Mar 2026 &middot; 15 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 mt-8 mb-8">
        <Image
          src="/images/Epoxy vs Polyurethane hero.jpg"
          alt="Epoxy vs polyurethane floor coating comparison"
          width={1200}
          height={600}
          className="w-full rounded-lg object-cover"
          priority
        />
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Intro */}
        <p className="mb-4">If you are looking at a tired garage floor, basement slab, or commercial space that needs a serious upgrade, epoxy and polyurethane are the two names that keep coming up. Both transform plain concrete into a tough, good-looking, easy-to-clean surface, but they are built for different jobs.</p>
        <p className="mb-6">This guide breaks down manufacturer specs, installer case studies, and 2026 cost reports so you can make the right call and avoid peeling or fading down the road.</p>

        {/* What Is Epoxy */}
        <h2 className="text-2xl font-bold mt-10 mb-4">What Is Epoxy Floor Coating?</h2>
        <p className="mb-4">Epoxy is a two-part resin (resin + hardener) that cures into a rock-hard, glossy layer chemically bonded to concrete. It has been the garage and warehouse standard for decades. You will find water-based (DIY-friendly), solvent-based, and 100% solids (thickest and strongest) versions.</p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-4">
          <h3 className="font-bold text-green-900 mb-3">Pros of Epoxy</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Exceptional hardness and compressive strength for heavy loads and impacts</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Beautiful high-gloss finish with endless color, flake, and metallic options</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Outstanding chemical and stain resistance for garages and workshops</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Lower upfront material cost, budget-friendly for larger areas</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Can last 10&ndash;20 years indoors with proper prep</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
          <h3 className="font-bold text-red-900 mb-3">Cons of Epoxy</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> Rigid and brittle, can crack or chip if concrete moves</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> Poor UV resistance &ndash; yellows or chalks in sunlight</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> Long cure time (3&ndash;7 days before full use)</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> Can be slippery when wet unless you add grit</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> Demands flawless surface prep or it peels</li>
          </ul>
        </div>

        {/* Embedded Image 1 */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/Epoxy vs Polyurethane1.jpg"
            alt="Epoxy floor coating applied to a garage floor"
            width={800}
            height={500}
            className="w-full h-auto"
          />
          <p className="text-sm text-gray-500 mt-2 px-1 italic">Epoxy coating provides a high-gloss, durable finish ideal for enclosed spaces.</p>
        </div>

        {/* What Is Polyurethane */}
        <h2 className="text-2xl font-bold mt-10 mb-4">What Is Polyurethane Floor Coating?</h2>
        <p className="mb-4">Polyurethane (sometimes called urethane) is a more flexible polymer coating, often used as a standalone or topcoat. It comes in water- or solvent-based formulas and is known for elasticity rather than pure hardness.</p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-4">
          <h3 className="font-bold text-green-900 mb-3">Pros of Polyurethane</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Excellent flexibility &ndash; moves with concrete through temperature swings</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Superior UV and scratch resistance &ndash; no yellowing</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Faster cure &ndash; light traffic in 24 hours, full in 2&ndash;3 days</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Good chemical and moisture tolerance, softer and quieter underfoot</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Often more slip-resistant with additives</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
          <h3 className="font-bold text-red-900 mb-3">Cons of Polyurethane</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> Softer overall &ndash; not as good for extreme point loads</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> Higher material cost, especially UV-stable grades</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> More sensitive to moisture during application</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> May need multiple thinner coats</li>
            <li className="flex items-start gap-2"><span className="text-red-600 font-bold">&minus;</span> Less showroom glossy than epoxy without extra layers</li>
          </ul>
        </div>

        {/* Comparison Table */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Head-to-Head Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Aspect</th>
                <th className="border border-gray-300 p-2 text-left">Epoxy</th>
                <th className="border border-gray-300 p-2 text-left">Polyurethane</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 p-2 font-medium">Durability</td><td className="border border-gray-300 p-2">High compression strength (5&ndash;20 years)</td><td className="border border-gray-300 p-2">Excellent abrasion + flexibility (10&ndash;20 years)</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 p-2 font-medium">Flexibility</td><td className="border border-gray-300 p-2">Rigid, can crack</td><td className="border border-gray-300 p-2">Highly flexible, crack-resistant</td></tr>
              <tr><td className="border border-gray-300 p-2 font-medium">UV Resistance</td><td className="border border-gray-300 p-2">Poor &ndash; yellows quickly</td><td className="border border-gray-300 p-2">Excellent &ndash; no fading</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 p-2 font-medium">Chemical Resistance</td><td className="border border-gray-300 p-2">Outstanding against oils/acids</td><td className="border border-gray-300 p-2">Very good, especially organics</td></tr>
              <tr><td className="border border-gray-300 p-2 font-medium">Cure Time</td><td className="border border-gray-300 p-2">3&ndash;7 days</td><td className="border border-gray-300 p-2">1&ndash;3 days</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 p-2 font-medium">Best For</td><td className="border border-gray-300 p-2">Indoor heavy-traffic, chemical-heavy areas</td><td className="border border-gray-300 p-2">Outdoor, sun-exposed, or moving substrates</td></tr>
            </tbody>
          </table>
        </div>

        {/* Embedded Image 2 */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/Epoxy vs Polyurethane2.jpg"
            alt="Polyurethane floor coating comparison with epoxy"
            width={800}
            height={500}
            className="w-full h-auto"
          />
          <p className="text-sm text-gray-500 mt-2 px-1 italic">Polyurethane coatings offer superior UV resistance and flexibility for basements with windows or temperature swings.</p>
        </div>

        {/* Cost Breakdown */}
        <h2 className="text-2xl font-bold mt-10 mb-4">2026 Cost Breakdown (Installed, Professional)</h2>
        <p className="mb-4">Based on national averages for a typical 500 sq ft garage:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Feature</th>
                <th className="border border-gray-300 p-2 text-left">Epoxy</th>
                <th className="border border-gray-300 p-2 text-left">Polyurethane / Polyaspartic</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 p-2 font-medium">Cost per sq ft</td><td className="border border-gray-300 p-2">$4&ndash;$10</td><td className="border border-gray-300 p-2">$5&ndash;$12</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 p-2 font-medium">Total for 500 sq ft</td><td className="border border-gray-300 p-2">$2,000&ndash;$5,000</td><td className="border border-gray-300 p-2">$2,500&ndash;$6,000</td></tr>
              <tr><td className="border border-gray-300 p-2 font-medium">Materials only</td><td className="border border-gray-300 p-2">$1&ndash;$6/sq ft</td><td className="border border-gray-300 p-2">$2&ndash;$7/sq ft</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-300 p-2 font-medium">Add-ons (flakes, grit, etc.)</td><td className="border border-gray-300 p-2">$400&ndash;$1,000</td><td className="border border-gray-300 p-2">$500&ndash;$1,200</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded">
          <p className="text-sm"><strong>Bottom line:</strong> Epoxy wins on initial price, but polyurethane&apos;s longer life and fewer recoats often make it cheaper over 10&ndash;15 years.</p>
        </div>

        {/* Overlooked Factors */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Overlooked Factors When Choosing a Floor Coating</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <h3 className="text-lg font-bold mb-2">Concrete Moisture Testing</h3>
            <p>Polyurethane is pickier &ndash; always do a vapor emission test in humid climates or new slabs.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <h3 className="text-lg font-bold mb-2">Temperature Swings</h3>
            <p>Polyurethane handles them far better. Epoxy can delaminate in cold basements.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <h3 className="text-lg font-bold mb-2">Hybrid Systems Win</h3>
            <p>Most pros now put polyurethane or polyaspartic as a topcoat over epoxy for the best of both worlds: hardness + UV/scratch protection.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <h3 className="text-lg font-bold mb-2">Slip Resistance</h3>
            <p>Add silica sand or aluminum oxide to either &ndash; critical for garages and wet areas.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <h3 className="text-lg font-bold mb-2">DIY vs Pro</h3>
            <p>Epoxy kits are tempting but most failures come from bad prep. Polyurethane almost always needs a professional.</p>
          </div>
        </div>

        {/* When to Choose */}
        <h2 className="text-2xl font-bold mt-10 mb-4">When to Choose Epoxy vs Polyurethane</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose Epoxy If:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>You want maximum hardness on a budget</li>
              <li>You have a fully enclosed space with heavy equipment</li>
              <li>Chemical spills are common (oil, battery acid)</li>
              <li>You love that deep, high-gloss look</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose Polyurethane If:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Your floor gets sunlight or temperature changes</li>
              <li>You want faster install and longer scratch/UV protection</li>
              <li>The substrate has minor movement or settling</li>
              <li>You need outdoor or semi-outdoor durability</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
          <p className="text-sm"><strong>The sweet spot for most homeowners:</strong> A high-build epoxy base + aliphatic polyurethane or polyaspartic topcoat. You get the best of both worlds.</p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-2">Is epoxy or polyurethane better for a basement floor?</h3>
            <p>For most basements, a hybrid system (epoxy base + polyurethane topcoat) is best. Epoxy provides hardness while polyurethane adds UV protection and flexibility.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">How much does epoxy vs polyurethane floor coating cost?</h3>
            <p>Epoxy costs $4&ndash;$10/sq ft installed; polyurethane runs $5&ndash;$12/sq ft. For 500 sq ft, expect $2,000&ndash;$5,000 for epoxy or $2,500&ndash;$6,000 for polyurethane.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Can I apply polyurethane over epoxy?</h3>
            <p>Yes, this is the recommended hybrid approach. Apply epoxy as the base layer and polyurethane or polyaspartic as the topcoat for maximum durability.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Does epoxy yellow in sunlight?</h3>
            <p>Yes. Standard epoxy has poor UV resistance and will yellow or chalk when exposed to sunlight, even through windows. Polyurethane does not have this problem.</p>
          </div>
        </div>

        {/* Glossary */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Glossary</h2>
        <dl className="space-y-4 mb-10">
          <div><dt className="font-bold">Epoxy</dt><dd className="ml-4">Rigid two-part resin that forms a hard, chemical-resistant layer.</dd></div>
          <div><dt className="font-bold">Polyurethane</dt><dd className="ml-4">Flexible coating prized for UV stability and elasticity.</dd></div>
          <div><dt className="font-bold">Polyaspartic</dt><dd className="ml-4">Fast-curing cousin of polyurethane, often used as a premium topcoat.</dd></div>
          <div><dt className="font-bold">VOC</dt><dd className="ml-4">Volatile organic compounds &ndash; lower-VOC formulas are better for indoor air.</dd></div>
          <div><dt className="font-bold">Delamination</dt><dd className="ml-4">When the coating peels away from the concrete.</dd></div>
        </dl>

        {/* Final Thoughts */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Final Thoughts</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-5 mb-8 rounded">
          <p>Epoxy gives you brute strength and that classic high-gloss garage look at a friendlier price. Polyurethane (or a polyurethane topcoat) gives you real-world toughness, UV protection, and flexibility that lasts longer in most homes. The smartest move for most people is the hybrid approach &ndash; epoxy base with a polyurethane topcoat. Whichever route you take, invest in proper surface prep and a reputable installer.</p>
        </div>

        {/* Related Guides */}
        <h2 className="text-2xl font-bold mt-10 mb-6">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <Link href="/articles/best-basement-flooring" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition">
            <h3 className="font-bold text-blue-700 mb-1">Best Basement Flooring 2026</h3>
            <p className="text-sm text-gray-600">Compare every flooring option for basements including coated concrete.</p>
          </Link>
          <Link href="/articles/waterproof-basement-paint-sealers" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition">
            <h3 className="font-bold text-blue-700 mb-1">Waterproof Paint &amp; Sealers</h3>
            <p className="text-sm text-gray-600">Best waterproof paint and sealers for basement walls and floors.</p>
          </Link>
          <Link href="/articles/basement-finishing-cost" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition">
            <h3 className="font-bold text-blue-700 mb-1">Basement Finishing Cost</h3>
            <p className="text-sm text-gray-600">Complete cost breakdown for finishing your basement.</p>
          </Link>
          <Link href="/articles/how-to-finish-a-basement" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition">
            <h3 className="font-bold text-blue-700 mb-1">How to Finish a Basement</h3>
            <p className="text-sm text-gray-600">Step-by-step guide to finishing your basement into livable space.</p>
          </Link>
          <Link href="/articles/basement-humidity-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition">
            <h3 className="font-bold text-blue-700 mb-1">Basement Humidity Guide</h3>
            <p className="text-sm text-gray-600">Managing moisture levels for coated basement floors.</p>
          </Link>
        </div>

        {/* Network Links */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <h3 className="font-bold mb-3">From Our Network</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://thegarage.guide/cost-guides/garage-floor-coating-cost" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">The Garage Guide</a>
              <span className="text-gray-600 text-sm"> &mdash; Garage floor coating cost guide covering epoxy, polyurea, polyaspartic, and tile options for garage floors.</span>
            </li>
          </ul>
        </div>

        {/* Lead Form CTA */}
        <div className="bg-blue-700 text-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">Get Professional Floor Coating Quotes</h2>
          <p className="mb-4">Ready to upgrade your basement or garage floor? Connect with certified coating installers in your area for free estimates.</p>
          <LeadForm />
        </div>

      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Epoxy vs Polyurethane Floor Coating: Which One Should You Choose?',
              description: 'Complete 2026 comparison of epoxy vs polyurethane floor coatings for basements and garages.',
              image: '/images/Epoxy vs Polyurethane hero.jpg',
              datePublished: '2026-03-02',
              dateModified: '2026-03-14',
              author: { '@type': 'Organization', name: 'The Basement Guide' },
              publisher: { '@type': 'Organization', name: 'The Basement Guide' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is epoxy or polyurethane better for a basement floor?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'For most basements, a hybrid system (epoxy base + polyurethane topcoat) is best. Epoxy provides hardness while polyurethane adds UV protection and flexibility.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does epoxy vs polyurethane floor coating cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Epoxy costs $4-$10/sq ft installed; polyurethane runs $5-$12/sq ft. For 500 sq ft, expect $2,000-$5,000 for epoxy or $2,500-$6,000 for polyurethane.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I apply polyurethane over epoxy?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, this is the recommended hybrid approach. Apply epoxy as the base layer and polyurethane or polyaspartic as the topcoat for maximum durability.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does epoxy yellow in sunlight?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Standard epoxy has poor UV resistance and will yellow or chalk when exposed to sunlight, even through windows. Polyurethane does not have this problem.',
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  )
}
