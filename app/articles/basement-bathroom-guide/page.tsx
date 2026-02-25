import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Bathroom Guide: How to Add a Bathroom the Right Way (2026) | The Basement Guide',
  description: 'Complete 2026 guide to adding a bathroom in your basement. Costs, plumbing options, waterproofing, materials, and step-by-step planning.',
}

export default function BasementBathroomGuide() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/Basement Bathroom.jpg'
          alt='Modern finished basement bathroom with shower and vanity'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-110'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative z-10 h-full max-w-4xl mx-auto px-6 flex flex-col justify-end pb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <div className='w-12 h-0.5 bg-teal-400' />
            <span className='text-teal-400 font-bold text-sm tracking-[0.2em] uppercase'>Expanded Edition</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-4 leading-[1.1]'>
            Basement Bathroom Guide
            <span className='block text-teal-400 italic font-black text-3xl md:text-5xl mt-2'>The Complete 2026 Guide</span>
          </h1>
          <p className='text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed'>
            How to add a bathroom in your basement the right way. Plumbing, waterproofing, costs, materials, and code requirements explained in plain English.
          </p>
          <div className='flex items-center space-x-4 mt-8'>
            <div className='w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-semibold'>The Basement Guide</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-3xl mx-auto px-6 py-16'>
        <article className='prose-custom'>

          {/* Intro */}
          <div className='mb-16'>
            <p className='text-lg text-slate-700 leading-relaxed mb-6'>
              Adding a bathroom in the basement is one of the smartest upgrades you can make. It instantly makes the space more usable, adds serious convenience for family or guests, and can increase your home&#39;s value by $15,000 to $40,000 or more. If you already have a finished basement or are thinking about turning it into a rental suite, a basement bathroom often becomes the must-have feature that seals the deal.
            </p>
            <p className='text-lg text-slate-700 leading-relaxed'>
              But basements are different from upstairs bathrooms. Moisture, plumbing challenges, and code rules can turn a simple project into a headache if you skip the important steps. This guide walks you through everything you need to know in plain English.
            </p>
          </div>

          {/* Section 1 - Why It's Worth It */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Benefits</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Why Add One</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Why a Basement Bathroom Is Worth It</h2>
            <div className='space-y-4'>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>1</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Makes the Basement Truly Livable</h4>
                    <p className='text-slate-600 text-sm'>Transforms a storage area into functional living space that your family will actually use every day.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>2</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Perfect for Multi-Generational Living</h4>
                    <p className='text-slate-600 text-sm'>Great for aging parents, guests, or teenagers who want their own private space with full bathroom access.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>3</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Huge ADU and Rental Boost</h4>
                    <p className='text-slate-600 text-sm'>If you ever want to rent out the basement as an ADU, a bathroom is essentially a requirement.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>4</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Adds $15K&#8211;$40K+ in Resale Value</h4>
                    <p className='text-slate-600 text-sm'>Buyers love having a bathroom on every level. It is one of the highest-ROI basement upgrades you can make.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - Waterproofing */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Critical</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Foundation First</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>The Biggest Challenge: Moisture and Waterproofing</h2>
            <p className='text-lg text-slate-700 leading-relaxed mb-6'>
              Basements are naturally damp, so waterproofing is non-negotiable when adding a bathroom. Any moisture trapped behind walls or under the floor will quickly lead to mold, mildew smells, and expensive repairs.
            </p>
            <div className='bg-teal-50 border border-teal-200 rounded-xl p-6 mb-6'>
              <h4 className='font-bold text-teal-900 mb-3'>What Actually Works</h4>
              <ul className='space-y-2 text-slate-700 text-sm'>
                <li>Fix exterior drainage first &mdash; regrade soil, extend downspouts 10 feet away, clean gutters.</li>
                <li>Seal all foundation cracks before any work begins.</li>
                <li>Install a full vapor barrier and use mold-resistant materials throughout.</li>
                <li>Run a dedicated dehumidifier to keep humidity between 40&#8211;50%.</li>
                <li>Choose waterproof flooring and wallboard designed for wet areas.</li>
              </ul>
            </div>
            <div className='bg-amber-50 border border-amber-200 rounded-xl p-6'>
              <h4 className='font-bold text-amber-900 mb-2'>Bottom Line</h4>
              <p className='text-amber-800 text-sm'>Spend the extra money on proper waterproofing upfront and you will prevent mold problems for decades. Skimp here and you risk tearing everything out again in a few years.</p>
            </div>
          </div>

          {/* Section 3 - Step by Step */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Process</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Step by Step</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>How to Add a Basement Bathroom</h2>
            <div className='space-y-4'>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>1</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Check Local Codes Early</h4>
                    <p className='text-slate-600 text-sm'>Confirm minimum ceiling height, required egress if it is near a bedroom, and plumbing/venting rules with your local building department.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>2</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Plan the Plumbing Location</h4>
                    <p className='text-slate-600 text-sm'>The closer the new bathroom is to existing drain lines, the cheaper it will be. Up-flush systems or macerating toilets are great options when you cannot gravity-drain.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>3</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Waterproof Everything</h4>
                    <p className='text-slate-600 text-sm'>Apply crystalline waterproofing or a dimpled membrane on walls and floor before framing. This is the step that makes or breaks the entire project.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>4</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Install Proper Ventilation</h4>
                    <p className='text-slate-600 text-sm'>A powerful exhaust fan vented directly outside is required by code and essential for controlling moisture in a below-grade bathroom.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>5</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Choose the Right Materials</h4>
                    <p className='text-slate-600 text-sm'><strong>Flooring:</strong> Luxury vinyl plank or sealed concrete &mdash; never carpet. <strong>Walls:</strong> Mold-resistant drywall or cement board with waterproof paint. <strong>Fixtures:</strong> Low-profile toilet, corner shower, and pedestal sink to save space.</p>
                  </div>
                </div>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <div className='flex items-start gap-4'>
                  <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'>6</span>
                  <div>
                    <h4 className='font-bold text-slate-900 mb-1'>Add Good Lighting and Storage</h4>
                    <p className='text-slate-600 text-sm'>Bright recessed lights and plenty of cabinets make the space feel larger and more welcoming despite being below grade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Costs */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Budget</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; 2026 Pricing</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>Realistic 2026 Costs for a Basement Bathroom</h2>
            <div className='overflow-x-auto mb-6'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='bg-slate-800 text-white'>
                    <th className='text-left p-4 font-semibold'>Bathroom Type</th>
                    <th className='text-left p-4 font-semibold'>Cost Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-slate-100'>
                    <td className='p-4 text-slate-700'>Half Bath (toilet + sink)</td>
                    <td className='p-4 font-semibold text-teal-700'>$8,000 &#8211; $15,000</td>
                  </tr>
                  <tr className='border-b border-slate-100 bg-slate-50'>
                    <td className='p-4 text-slate-700'>Full Bath (toilet, sink, shower/tub)</td>
                    <td className='p-4 font-semibold text-teal-700'>$15,000 &#8211; $28,000</td>
                  </tr>
                  <tr>
                    <td className='p-4 text-slate-700'>High-End or Larger Layout</td>
                    <td className='p-4 font-semibold text-teal-700'>$25,000 &#8211; $40,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-slate-600 text-sm'>
              These numbers include waterproofing, plumbing, electrical, and finishes. A good rule of thumb is to budget <strong>$150 to $250 per square foot</strong> for a quality basement bathroom. See our <Link href='/articles/basement-finishing-cost' className='text-teal-600 hover:underline'>basement finishing cost guide</Link> for broader cost context.
            </p>
          </div>

          {/* Section 5 - Pro Tips */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Expert</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Pro Tips</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>Pro Tips for a Bathroom That Lasts</h2>
            <div className='space-y-3'>
              <div className='flex items-start gap-3 bg-teal-50 rounded-xl p-4 border border-teal-100'>
                <span className='text-teal-600 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700 text-sm'>Install a <strong>floor drain</strong> in case of leaks &mdash; it is cheap insurance.</p>
              </div>
              <div className='flex items-start gap-3 bg-teal-50 rounded-xl p-4 border border-teal-100'>
                <span className='text-teal-600 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700 text-sm'>Use a <strong>quiet, high-CFM exhaust fan</strong> with a timer for automatic moisture control.</p>
              </div>
              <div className='flex items-start gap-3 bg-teal-50 rounded-xl p-4 border border-teal-100'>
                <span className='text-teal-600 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700 text-sm'>Add <strong>GFCI outlets</strong> everywhere near water &mdash; required by code and critical for safety.</p>
              </div>
              <div className='flex items-start gap-3 bg-teal-50 rounded-xl p-4 border border-teal-100'>
                <span className='text-teal-600 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700 text-sm'>Consider a <strong>pocket door</strong> to save space in tight layouts.</p>
              </div>
              <div className='flex items-start gap-3 bg-teal-50 rounded-xl p-4 border border-teal-100'>
                <span className='text-teal-600 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700 text-sm'>Put the bathroom <strong>against an exterior wall</strong> when possible for easier venting and natural light.</p>
              </div>
            </div>
          </div>

          {/* Glossary */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Reference</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Glossary</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>Glossary of Terms</h2>
            <div className='space-y-4'>
              <div className='border-l-4 border-teal-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>Up-Flush System</h4>
                <p className='text-slate-600 text-sm'>A special toilet and pump system that pushes waste up to the main sewer line when gravity drain is not possible.</p>
              </div>
              <div className='border-l-4 border-teal-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>Vapor Barrier</h4>
                <p className='text-slate-600 text-sm'>A waterproof layer installed behind walls or under flooring to stop moisture from moving into the living space.</p>
              </div>
              <div className='border-l-4 border-teal-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>Mold-Resistant Drywall</h4>
                <p className='text-slate-600 text-sm'>Special drywall (often green or purple) designed to resist mold growth in damp areas like basements.</p>
              </div>
              <div className='border-l-4 border-teal-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>Crystalline Waterproofing</h4>
                <p className='text-slate-600 text-sm'>A treatment applied to concrete that grows tiny crystals inside the pores to permanently block water passage.</p>
              </div>
            </div>
          </div>

          {/* Related Guides */}
          <div className='mb-20'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Complete Waterproofing Guide</h3>
                <p className='text-slate-600 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
              </Link>
              <Link href='/articles/basement-adu-rental-suite' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Basement ADU &amp; Rental Suite Guide</h3>
                <p className='text-slate-600 text-sm'>Convert your basement into a legal, profitable rental apartment.</p>
              </Link>
              <Link href='/articles/basement-finishing-cost' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Basement Finishing Cost Guide</h3>
                <p className='text-slate-600 text-sm'>Full breakdown of costs to finish your basement from start to move-in.</p>
              </Link>
              <Link href='/articles/how-to-prevent-basement-mold' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>How to Prevent Basement Mold</h3>
                <p className='text-slate-600 text-sm'>The 5 pillars of permanent mold prevention for your basement.</p>
              </Link>
            </div>
          </div>

          {/* Lead Form CTA */}
          <div className='bg-slate-900 rounded-2xl p-8 text-center'>
            <h2 className='text-2xl font-bold text-white mb-3'>Get Expert Help With Your Basement Bathroom</h2>
            <p className='text-slate-300 mb-6'>Connect with pre-vetted waterproofing and plumbing professionals in your area. Free assessments, no obligation.</p>
            <LeadForm />
          </div>

        </article>
      </div>
    </div>
  )
}
