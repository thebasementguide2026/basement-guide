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
    <div className='bg-white min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Epoxy vs Polyurethane Floor Coating: Which One Should You Choose?',
              description: 'Complete 2026 comparison of epoxy vs polyurethane floor coatings for basements and garages.',
              datePublished: '2026-03-02',
              dateModified: '2026-03-02',
              author: { '@type': 'Organization', name: 'The Basement Guide' },
              publisher: { '@type': 'Organization', name: 'The Basement Guide' },
              image: '/images/Epoxy vs Polyurethane hero.jpg',
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
                    text: 'For most basements, a hybrid system with an epoxy base and polyurethane topcoat is best. Epoxy provides hardness and chemical resistance while polyurethane adds UV protection and flexibility.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does epoxy vs polyurethane floor coating cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Epoxy costs $4-10 per square foot installed, while polyurethane runs $5-12 per square foot. For a 500 sq ft garage, expect $2,000-$5,000 for epoxy or $2,500-$6,000 for polyurethane.',
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/images/Epoxy vs Polyurethane hero.jpg'
          alt='Epoxy vs polyurethane floor coating comparison'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>Comparison Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Epoxy vs Polyurethane<br />
            <span className='text-indigo-400'>Floor Coating</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed'>
            Which one should you choose for your basement, garage, or commercial space? A clear, no-hype breakdown of both options.
          </p>
          <div className='flex items-center space-x-4 text-sm text-slate-400'>
            <span className='bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium'>BG</span>
            <span className='font-medium'>The Basement Guide Staff</span>
            <span className='text-slate-600'>|</span>
            <span>Published Mar 2026 &bull; 15 min read</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <article className='lg:col-span-8 space-y-12'>

            {/* Intro */}
            <section>
              <p className='text-lg text-slate-700 leading-relaxed'>
                If you are looking at a tired garage floor, basement slab, or commercial space that needs a serious upgrade, epoxy and polyurethane are the two names that keep coming up. Both transform plain concrete into a tough, good-looking, easy-to-clean surface, but they are built for different jobs.
              </p>
              <p className='text-lg text-slate-700 leading-relaxed mt-4'>
                This guide breaks down manufacturer specs, installer case studies, and 2026 cost reports so you can make the right call and avoid peeling or fading down the road.
              </p>
            </section>

            {/* What Is Epoxy */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>What Is Epoxy Floor Coating?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Epoxy is a two-part resin (resin + hardener) that cures into a rock-hard, glossy layer chemically bonded to concrete. It has been the garage and warehouse standard for decades. You will find water-based (DIY-friendly), solvent-based, and 100% solids (thickest and strongest) versions.
              </p>
              <div className='bg-green-50 border border-green-200 rounded-lg p-6 mb-4'>
                <h3 className='font-bold text-green-900 mb-3'>Pros of Epoxy</h3>
                <ul className='space-y-2 text-slate-700'>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Exceptional hardness and compressive strength for heavy loads and impacts</li>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Beautiful high-gloss finish with endless color, flake, and metallic options</li>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Outstanding chemical and stain resistance for garages and workshops</li>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Lower upfront material cost, budget-friendly for larger areas</li>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Can last 10&ndash;20 years indoors with proper prep</li>
                </ul>
              </div>
              <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                <h3 className='font-bold text-red-900 mb-3'>Cons of Epoxy</h3>
                <ul className='space-y-2 text-slate-700'>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> Rigid and brittle, can crack or chip if concrete moves</li>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> Poor UV resistance &ndash; yellows or chalks in sunlight</li>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> Long cure time (3&ndash;7 days before full use)</li>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> Can be slippery when wet unless you add grit</li>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> Demands flawless surface prep or it peels</li>
                </ul>
              </div>
            </section>

            {/* Embedded Image 1 */}
            <div className='rounded-xl overflow-hidden'>
              <Image
                src='/images/Epoxy vs Polyurethane1.jpg'
                alt='Epoxy floor coating applied to a garage floor'
                width={800}
                height={500}
                className='w-full h-auto rounded-xl'
              />
              <p className='text-sm text-slate-500 mt-2 italic'>Epoxy coating provides a high-gloss, durable finish ideal for enclosed spaces.</p>
            </div>

            {/* What Is Polyurethane */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>What Is Polyurethane Floor Coating?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Polyurethane (sometimes called urethane) is a more flexible polymer coating, often used as a standalone or topcoat. It comes in water- or solvent-based formulas and is known for elasticity rather than pure hardness.
              </p>
              <div className='bg-green-50 border border-green-200 rounded-lg p-6 mb-4'>
                <h3 className='font-bold text-green-900 mb-3'>Pros of Polyurethane</h3>
                <ul className='space-y-2 text-slate-700'>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Excellent flexibility &ndash; moves with concrete through temperature swings</li>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Superior UV and scratch resistance &ndash; no yellowing</li>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Faster cure &ndash; light traffic in 24 hours, full in 2&ndash;3 days</li>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Good chemical and moisture tolerance, softer and quieter underfoot</li>
                  <li className='flex items-start gap-2'><span className='text-green-600 font-bold'>+</span> Often more slip-resistant with additives</li>
                </ul>
              </div>
              <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                <h3 className='font-bold text-red-900 mb-3'>Cons of Polyurethane</h3>
                <ul className='space-y-2 text-slate-700'>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> Softer overall &ndash; not as good for extreme point loads</li>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> Higher material cost, especially UV-stable grades</li>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> More sensitive to moisture during application</li>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> May need multiple thinner coats</li>
                  <li className='flex items-start gap-2'><span className='text-red-600 font-bold'>&minus;</span> Less showroom glossy than epoxy without extra layers</li>
                </ul>
              </div>
            </section>

            {/* Comparison Table */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Head-to-Head Comparison</h2>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
                  <thead>
                    <tr className='bg-slate-800 text-white text-sm'>
                      <th className='p-3 text-left'>Aspect</th>
                      <th className='p-3 text-left'>Epoxy</th>
                      <th className='p-3 text-left'>Polyurethane</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Durability</td>
                      <td className='p-3'>High compression strength (5&ndash;20 years)</td>
                      <td className='p-3'>Excellent abrasion + flexibility (10&ndash;20 years)</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Flexibility</td>
                      <td className='p-3'>Rigid, can crack</td>
                      <td className='p-3'>Highly flexible, crack-resistant</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>UV Resistance</td>
                      <td className='p-3'>Poor &ndash; yellows quickly</td>
                      <td className='p-3'>Excellent &ndash; no fading</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Chemical Resistance</td>
                      <td className='p-3'>Outstanding against oils/acids</td>
                      <td className='p-3'>Very good, especially organics</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Cure Time</td>
                      <td className='p-3'>3&ndash;7 days</td>
                      <td className='p-3'>1&ndash;3 days</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Best For</td>
                      <td className='p-3'>Indoor heavy-traffic, chemical-heavy areas</td>
                      <td className='p-3'>Outdoor, sun-exposed, or moving substrates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Embedded Image 2 */}
            <div className='rounded-xl overflow-hidden'>
              <Image
                src='/images/Epoxy vs Polyurethane2.jpg'
                alt='Polyurethane floor coating comparison with epoxy'
                width={800}
                height={500}
                className='w-full h-auto rounded-xl'
              />
              <p className='text-sm text-slate-500 mt-2 italic'>Polyurethane coatings offer superior UV resistance and flexibility for basements with windows or temperature swings.</p>
            </div>

            {/* Cost Breakdown */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>2026 Cost Breakdown (Installed, Professional)</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>Based on national averages for a typical 500 sq ft garage:</p>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
                  <thead>
                    <tr className='bg-slate-800 text-white text-sm'>
                      <th className='p-3 text-left'>Feature</th>
                      <th className='p-3 text-left'>Epoxy</th>
                      <th className='p-3 text-left'>Polyurethane / Polyaspartic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Cost per sq ft</td>
                      <td className='p-3'>$4&ndash;$10</td>
                      <td className='p-3'>$5&ndash;$12</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Total for 500 sq ft</td>
                      <td className='p-3'>$2,000&ndash;$5,000</td>
                      <td className='p-3'>$2,500&ndash;$6,000</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Materials only</td>
                      <td className='p-3'>$1&ndash;$6/sq ft</td>
                      <td className='p-3'>$2&ndash;$7/sq ft</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Add-ons (flakes, grit, etc.)</td>
                      <td className='p-3'>$400&ndash;$1,000</td>
                      <td className='p-3'>$500&ndash;$1,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-indigo-900'><strong>Bottom line:</strong> Epoxy wins on initial price, but polyurethane&apos;s longer life and fewer recoats often make it cheaper over 10&ndash;15 years.</p>
              </div>
            </section>

            {/* Overlooked Factors */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Overlooked Factors When Choosing a Floor Coating</h2>
              <div className='space-y-4'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Concrete Moisture Testing</h3>
                  <p className='text-slate-700 leading-relaxed'>Polyurethane is pickier &ndash; always do a vapor emission test in humid climates or new slabs.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Temperature Swings</h3>
                  <p className='text-slate-700 leading-relaxed'>Polyurethane handles them far better. Epoxy can delaminate in cold basements.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Hybrid Systems Win</h3>
                  <p className='text-slate-700 leading-relaxed'>Most pros now put polyurethane or polyaspartic as a topcoat over epoxy for the best of both worlds: hardness + UV/scratch protection.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Slip Resistance</h3>
                  <p className='text-slate-700 leading-relaxed'>Add silica sand or aluminum oxide to either &ndash; critical for garages and wet areas.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>DIY vs Pro</h3>
                  <p className='text-slate-700 leading-relaxed'>Epoxy kits are tempting but most failures come from bad prep. Polyurethane almost always needs a professional.</p>
                </div>
              </div>
            </section>

            {/* When to Choose */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>When to Choose Epoxy vs Polyurethane</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
                  <h3 className='font-bold text-blue-900 mb-3'>Choose Epoxy If:</h3>
                  <ul className='space-y-2 text-slate-700'>
                    <li>You want maximum hardness on a budget</li>
                    <li>You have a fully enclosed space with heavy equipment</li>
                    <li>Chemical spills are common (oil, battery acid)</li>
                    <li>You love that deep, high-gloss look</li>
                  </ul>
                </div>
                <div className='bg-purple-50 border border-purple-200 rounded-lg p-6'>
                  <h3 className='font-bold text-purple-900 mb-3'>Choose Polyurethane If:</h3>
                  <ul className='space-y-2 text-slate-700'>
                    <li>Your floor gets sunlight or temperature changes</li>
                    <li>You want faster install and longer scratch/UV protection</li>
                    <li>The substrate has minor movement or settling</li>
                    <li>You need outdoor or semi-outdoor durability</li>
                  </ul>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-indigo-900'><strong>The sweet spot for most homeowners:</strong> A high-build epoxy base + aliphatic polyurethane or polyaspartic topcoat. You get the best of both worlds.</p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Is epoxy or polyurethane better for a basement floor?</h3>
                  <p className='text-slate-700'>For most basements, a hybrid system (epoxy base + polyurethane topcoat) is best. Epoxy provides hardness while polyurethane adds UV protection and flexibility.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>How much does epoxy vs polyurethane floor coating cost?</h3>
                  <p className='text-slate-700'>Epoxy costs $4&ndash;$10/sq ft installed; polyurethane runs $5&ndash;$12/sq ft. For 500 sq ft, expect $2,000&ndash;$5,000 for epoxy or $2,500&ndash;$6,000 for polyurethane.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Can I apply polyurethane over epoxy?</h3>
                  <p className='text-slate-700'>Yes, this is the recommended hybrid approach. Apply epoxy as the base layer and polyurethane or polyaspartic as the topcoat for maximum durability.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Does epoxy yellow in sunlight?</h3>
                  <p className='text-slate-700'>Yes. Standard epoxy has poor UV resistance and will yellow or chalk when exposed to sunlight, even through windows. Polyurethane does not have this problem.</p>
                </div>
              </div>
            </section>

            {/* Glossary */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Glossary</h2>
              <div className='bg-slate-50 rounded-lg border border-slate-200 p-6'>
                <dl className='space-y-4'>
                  <div><dt className='font-semibold text-slate-900'>Epoxy</dt><dd className='text-slate-700'>Rigid two-part resin that forms a hard, chemical-resistant layer.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Polyurethane</dt><dd className='text-slate-700'>Flexible coating prized for UV stability and elasticity.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Polyaspartic</dt><dd className='text-slate-700'>Fast-curing cousin of polyurethane, often used as a premium topcoat.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>VOC</dt><dd className='text-slate-700'>Volatile organic compounds &ndash; lower-VOC formulas are better for indoor air.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Delamination</dt><dd className='text-slate-700'>When the coating peels away from the concrete.</dd></div>
                </dl>
              </div>
            </section>

            {/* Final Thoughts */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>Final Thoughts</h2>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-6'>
                <p className='text-slate-700 leading-relaxed'>
                  Epoxy gives you brute strength and that classic high-gloss garage look at a friendlier price. Polyurethane (or a polyurethane topcoat) gives you real-world toughness, UV protection, and flexibility that lasts longer in most homes. The smartest move for most people is the hybrid approach &ndash; epoxy base with a polyurethane topcoat. Whichever route you take, invest in proper surface prep and a reputable installer.
                </p>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className='lg:col-span-4 space-y-8'>
            <div className='bg-white rounded-lg p-6 border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-3'>Related Guides</h4>
              <ul className='space-y-3 text-sm'>
                <li><Link href='/articles/best-basement-flooring' className='text-indigo-600 hover:underline'>Best Basement Flooring 2026</Link></li>
                <li><Link href='/articles/waterproof-basement-paint-sealers' className='text-indigo-600 hover:underline'>Best Waterproof Paint &amp; Sealers</Link></li>
                <li><Link href='/articles/basement-finishing-cost' className='text-indigo-600 hover:underline'>Basement Finishing Cost Guide</Link></li>
                <li><Link href='/articles/how-to-finish-a-basement' className='text-indigo-600 hover:underline'>How to Finish a Basement</Link></li>
                <li><Link href='/articles/basement-humidity-guide' className='text-indigo-600 hover:underline'>Basement Humidity Guide</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>Get Professional Floor Coating Quotes</h2>
          <p className='text-slate-300 mb-8 text-lg'>Ready to upgrade your basement or garage floor? Connect with certified coating installers in your area for free estimates.</p>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
