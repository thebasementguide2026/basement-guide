import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Vapor Barriers for Basements & Crawl Spaces (2026) | The Basement Guide',
  description: 'Compare the best vapor barriers for basements and crawl spaces in 2026. Polyethylene, foil-faced, reinforced scrim, dimpled membranes, and liquid applied options reviewed with costs and recommendations.',
}

export default function BestVaporBarriersArticle() {
  return (
    <div className='bg-white min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the best vapor barrier for a crawl space?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reinforced poly like Stego Wrap 15-Mil is the top choice for crawl spaces due to its durability, low permeance, and puncture resistance.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need a vapor barrier in my basement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, if you are finishing the space. A vapor barrier prevents mold growth and humidity issues that can damage drywall, insulation, and flooring.',
                },
              },
              {
                '@type': 'Question',
                name: 'What mil thickness should I use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use at least 6-mil poly for basic applications. For crawl spaces, 10-mil or 20-mil is recommended for better puncture resistance and longevity.',
                },
              },
            ],
          }),
        }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/images/best-vapor-barriers/hero.jpg'
          alt='Vapor barrier installation in basement crawl space'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>Reviews</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Best Vapor Barriers<br />
            <span className='text-indigo-400'>for Basements &amp; Crawl Spaces</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed'>
            Compare polyethylene, foil-faced, reinforced scrim, dimpled membranes, and liquid-applied vapor barriers. Costs, durability, and top picks for 2026.
          </p>
          <div className='flex items-center space-x-4 text-sm text-slate-400'>
            <span className='bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium'>BG</span>
            <span className='font-medium'>The Basement Guide Staff</span>
            <span className='text-slate-600'>|</span>
            <span>Updated Feb 2026 &bull; 16 min read</span>
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
                Moisture in basements and crawl spaces can lead to mold, rot, and poor air quality, turning useful areas into problem zones. A good vapor barrier is essential for basement waterproofing and crawl space encapsulation. It blocks ground moisture from rising through floors or walls, keeping humidity low and protecting your home&#39;s structure.
              </p>
              <p className='text-slate-700 leading-relaxed mt-4'>
                In this guide, we review the best vapor barriers based on thickness, material, durability, and real-world performance. The top picks in 2026 focus on heavy-duty polyethylene sheets that meet Class I vapor retarder standards (0.1 perm or less per ASTM E96). Thicker mil ratings (10&#8211;20 mil) handle punctures better in rough crawl spaces, while reinforced options add strength.
              </p>
            </section>

            {/* Comparison Table */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Types of Vapor Barriers Compared</h2>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
                  <thead>
                    <tr className='bg-slate-800 text-white text-sm'>
                      <th className='p-3 text-left'>Type</th>
                      <th className='p-3 text-left'>Best For</th>
                      <th className='p-3 text-left'>Thickness</th>
                      <th className='p-3 text-left'>Cost / Sq Ft</th>
                      <th className='p-3 text-left'>Durability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Polyethylene Sheeting</td>
                      <td className='p-3'>Basements &amp; crawl spaces</td>
                      <td className='p-3'>6&#8211;20 mil</td>
                      <td className='p-3'>$0.10&#8211;$0.50</td>
                      <td className='p-3'>High</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Foil-Faced Poly</td>
                      <td className='p-3'>Insulated basements</td>
                      <td className='p-3'>6&#8211;10 mil</td>
                      <td className='p-3'>$0.20&#8211;$0.60</td>
                      <td className='p-3'>Medium-High</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Reinforced/Scrim Poly</td>
                      <td className='p-3'>High-traffic crawl spaces</td>
                      <td className='p-3'>12&#8211;20 mil</td>
                      <td className='p-3'>$0.30&#8211;$0.70</td>
                      <td className='p-3'>Very High</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Dimpled Membrane</td>
                      <td className='p-3'>Uneven surfaces</td>
                      <td className='p-3'>10&#8211;15 mil</td>
                      <td className='p-3'>$0.40&#8211;$0.80</td>
                      <td className='p-3'>High</td>
                    </tr>
                    <tr className='bg-slate-50'>
                      <td className='p-3 font-medium'>Spray-On / Liquid</td>
                      <td className='p-3'>Walls &amp; irregular shapes</td>
                      <td className='p-3'>N/A (coating)</td>
                      <td className='p-3'>$0.50&#8211;$1.00</td>
                      <td className='p-3'>Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Product 1 */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>1. Polyethylene Plastic Sheeting</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>Basic poly sheeting like 6-mil black or clear plastic is affordable and effective for most homes. For basements, use it under concrete slabs or on walls. In crawl spaces, lay it over dirt floors and extend it up the walls 6&#8211;12 inches.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10003; Blocks 99% of moisture vapor</li>
                    <li>&#10003; Easy to cut and tape for DIY</li>
                    <li>&#10003; Meets Class I retarder standards</li>
                    <li>&#10003; Inexpensive and widely available</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10007; Can tear on rocks or debris</li>
                    <li>&#10007; Not as puncture-resistant as reinforced</li>
                    <li>&#10007; May need sealing tape for seams</li>
                  </ul>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5'>
                <p className='text-indigo-900 font-semibold'>Best Pick: Americover 20-Mil Vapor Barrier</p>
                <a href='https://amzn.to/3OQxtyV' target='_blank' rel='noopener noreferrer sponsored' className='inline-block mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors'>Check Price on Amazon</a>
              </div>
            </section>

            {/* Product 2 */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>2. Foil-Faced Poly Barriers</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>These have a reflective foil layer to bounce back radiant heat, making them great for finished basements in cold climates. The reflective surface also brightens dark spaces.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10003; Improves energy efficiency</li>
                    <li>&#10003; Reflective surface brightens spaces</li>
                    <li>&#10003; Good for walls or under slabs</li>
                    <li>&#10003; Mildew-resistant</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10007; Foil can tear during install</li>
                    <li>&#10007; Higher cost than basic poly</li>
                    <li>&#10007; Not ideal for very wet areas</li>
                  </ul>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5'>
                <p className='text-indigo-900 font-semibold'>Best Pick: Reflectix Foil Insulation Barrier</p>
                <a href='https://amzn.to/4r01DNu' target='_blank' rel='noopener noreferrer sponsored' className='inline-block mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors'>Check Price on Amazon</a>
              </div>
            </section>

            {/* Product 3 */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>3. Reinforced/Scrim Poly Barriers</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>Woven scrim reinforcement adds tear resistance, perfect for rocky crawl spaces or high-traffic basements. These are the professional&#39;s choice for full encapsulation systems.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10003; Handles foot traffic without ripping</li>
                    <li>&#10003; Long-lasting (20+ years)</li>
                    <li>&#10003; Often antimicrobial-treated</li>
                    <li>&#10003; Ideal for full encapsulation</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10007; Bulkier to handle during install</li>
                    <li>&#10007; More expensive upfront</li>
                    <li>&#10007; Requires careful seaming</li>
                  </ul>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5'>
                <p className='text-indigo-900 font-semibold'>Best Pick: Stego Wrap 15-Mil Vapor Barrier</p>
                <a href='https://amzn.to/4qXjC7n' target='_blank' rel='noopener noreferrer sponsored' className='inline-block mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors'>Check Price on Amazon</a>
              </div>
            </section>

            {/* Product 4 */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>4. Dimpled Membranes</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>Dimpled membranes create an air gap between the barrier and the floor, allowing moisture to drain and air to circulate. They conform to uneven surfaces and are ideal for older homes with irregular basement floors.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10003; Conforms to uneven surfaces</li>
                    <li>&#10003; Reduces condensation buildup</li>
                    <li>&#10003; Easy to secure with staples or tape</li>
                    <li>&#10003; Good for walls and subfloors</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10007; Higher perm rating (less vapor blocking)</li>
                    <li>&#10007; Prone to mold if not ventilated</li>
                    <li>&#10007; Not as affordable as basic poly</li>
                  </ul>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5'>
                <p className='text-indigo-900 font-semibold'>Best Pick: DMX AG Dimpled Membrane</p>
                <a href='https://amzn.to/4aGDlU7' target='_blank' rel='noopener noreferrer sponsored' className='inline-block mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors'>Check Price on Amazon</a>
              </div>
            </section>

            {/* Product 5 */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>5. Spray-On / Liquid Applied Barriers</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>Liquid sealers like elastomeric coatings penetrate and form a flexible membrane on concrete walls. They are seamless applications that work well for odd shapes and can fill small cracks.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10003; Seamless application for odd shapes</li>
                    <li>&#10003; Fills small cracks</li>
                    <li>&#10003; Quick drying (1&#8211;2 days)</li>
                    <li>&#10003; Paintable once cured</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10007; Messy to apply (needs sprayer)</li>
                    <li>&#10007; Not for floors or large areas</li>
                    <li>&#10007; Shorter lifespan (10&#8211;15 years)</li>
                  </ul>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5'>
                <p className='text-indigo-900 font-semibold'>Best Pick: Ames Block &amp; Wall Liquid Rubber</p>
                <a href='https://amzn.to/4aRUoBh' target='_blank' rel='noopener noreferrer sponsored' className='inline-block mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors'>Check Price on Amazon</a>
              </div>
            </section>

            {/* Installation Tips */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Installation Tips for Vapor Barriers</h2>
              <div className='space-y-4'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Prep the Surface</h3>
                  <p className='text-slate-700'>Clear debris, level dirt, and fix leaks first. A clean, dry surface ensures the barrier adheres properly and lasts longer.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>For Crawl Spaces</h3>
                  <p className='text-slate-700'>Lay the barrier over soil, extend it up walls 6&#8211;12 inches, and tape all seams with vapor tape. Overlap seams by at least 6 inches.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>For Basements</h3>
                  <p className='text-slate-700'>Install under slabs or on walls before insulation and drywall. Use mechanical fasteners for wall applications.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>DIY vs. Pro</h3>
                  <p className='text-slate-700'>Simple poly installs are DIY-friendly (1&#8211;2 days). Complex encapsulation needs pros ($2,000+). Pair with dehumidifiers to avoid trapped moisture.</p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>What mil thickness should I use for a vapor barrier?</h3>
                  <p className='text-slate-700'>For crawl spaces, use at least 6-mil polyethylene, though 10-mil or 20-mil is recommended for durability. For basement walls, reinforced barriers or foil insulation work best.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Do I need a vapor barrier on basement walls?</h3>
                  <p className='text-slate-700'>Yes, if you plan to finish your basement with insulation and drywall. A vapor barrier prevents moisture from getting trapped behind walls and causing mold.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Can I install a vapor barrier myself?</h3>
                  <p className='text-slate-700'>Simple poly sheeting installs are DIY-friendly and can be done in 1&#8211;2 days. Full crawl space encapsulation may require a professional installer.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>What is the difference between a vapor barrier and a vapor retarder?</h3>
                  <p className='text-slate-700'>A vapor barrier has a perm rating of 0.1 or less, blocking nearly all moisture. A vapor retarder (0.1&#8211;1.0 perms) slows moisture but allows some through. For basements, a true vapor barrier is usually recommended.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Should I put a vapor barrier under a concrete slab?</h3>
                  <p className='text-slate-700'>Yes. Installing a vapor barrier under a new concrete slab prevents ground moisture from wicking up through the concrete. Use at least 10-mil poly.</p>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className='lg:col-span-4'>
            <div className='sticky top-8 space-y-8'>
              <LeadForm />
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
