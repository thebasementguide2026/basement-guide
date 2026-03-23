import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Egress Window Cost Guide 2026 | The Basement Guide',
  description: 'How much does it cost to install a basement egress window in 2026? Full cost breakdown for materials, excavation, permits, and labor. National average $3,850 to $4,200.',
}

export default function EgressWindowCost() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/egresswindow.jpg'
          alt='Basement egress window installation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-orange-500'></div>
            <span className='text-orange-400 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Egress Window <br />
            <span className='text-orange-400'>Cost Guide 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Thinking about turning part of your basement into a legal bedroom? Here is the complete 2026 breakdown of every dollar from window units to permits and labor.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-red-400 flex items-center justify-center text-white font-bold text-sm mr-4'>BG</div>
              <div>
                <p className='text-white font-semibold text-sm'>The Basement Guide Staff</p>
                <p className='text-slate-400 text-xs'>Updated Feb 2026 &middot; 18 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='max-w-4xl'>

          {/* Intro */}
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            In 2026, the average cost for a professionally installed basement egress window sits right around <strong>$3,850 to $4,200</strong> nationally, with most homeowners paying between <strong>$2,700 and $5,900</strong>. This guide breaks down every dollar so you know exactly what you are paying for, what adds extra, and how to get the best value.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            A basement egress window installation is a structural modification to the foundation rather than a standard window replacement, which is why the cost range is wider than most homeowners expect. The project requires cutting through a concrete or block foundation wall to create a structural opening, installing a lintel to carry the load above the opening, excavating the exterior soil to create the window well, and then setting the window unit itself &mdash; with waterproofing and drainage at every stage. Foundation type is the primary cost driver: poured concrete requires diamond-blade saw cutting at significantly higher labor cost than concrete block, which can be removed block by block. The sequencing relationship to other basement work matters too: egress window installation should happen before interior finishing because the concrete cutting and excavation disturb the floor and wall perimeter, and the new opening must be properly waterproofed before any drywall or insulation goes in around it.
          </p>

          {/* What Is an Egress Window */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>What Exactly Is an Egress Window and Why Do You Need One?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            An egress window is a specially sized emergency escape opening required by code for any basement room used as a bedroom or sleeping area. It gives people a quick way out and lets firefighters get in fast. Without one the room cannot legally be called a bedroom. That hurts your resale value and safety.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Even if your basement was finished years ago, converting a space into a bedroom means you need to add proper egress now.
          </p>

          {/* Cost Breakdown Table */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>2026 Egress Window Cost Breakdown</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Here is where every dollar goes in a typical below-grade basement install.
          </p>

          <div className='overflow-x-auto mb-10'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='text-left px-6 py-4 font-bold'>Component</th>
                  <th className='text-left px-6 py-4 font-bold'>National Cost 2026</th>
                  <th className='text-left px-6 py-4 font-bold'>What It Covers</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Window unit, frame, casement</td>
                  <td className='px-6 py-4 text-slate-700'>$800 &ndash; $2,000</td>
                  <td className='px-6 py-4 text-slate-600'>Vinyl or fiberglass, low-E glass</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Window well (plastic/corrugated)</td>
                  <td className='px-6 py-4 text-slate-700'>$400 &ndash; $1,200</td>
                  <td className='px-6 py-4 text-slate-600'>Keeps dirt out and gives exit space</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Excavation, drainage, gravel</td>
                  <td className='px-6 py-4 text-slate-700'>$800 &ndash; $2,000</td>
                  <td className='px-6 py-4 text-slate-600'>Digging, stone base, pump if needed</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Concrete or block cutting, lintel</td>
                  <td className='px-6 py-4 text-slate-700'>$600 &ndash; $1,500</td>
                  <td className='px-6 py-4 text-slate-600'>Structural opening through the foundation</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Ladder or steps</td>
                  <td className='px-6 py-4 text-slate-700'>$100 &ndash; $350</td>
                  <td className='px-6 py-4 text-slate-600'>Required if well deeper than 44 inches</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Waterproofing, flashing, trim</td>
                  <td className='px-6 py-4 text-slate-700'>$300 &ndash; $600</td>
                  <td className='px-6 py-4 text-slate-600'>Keeps water out and finishes the look</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Permit, inspections</td>
                  <td className='px-6 py-4 text-slate-700'>$150 &ndash; $600</td>
                  <td className='px-6 py-4 text-slate-600'>Local requirements</td>
                </tr>
                <tr className='bg-orange-50 font-bold'>
                  <td className='px-6 py-4 text-slate-900'>Total Professional Install</td>
                  <td className='px-6 py-4 text-orange-600'>$2,700 &ndash; $5,900</td>
                  <td className='px-6 py-4 text-slate-700'>Everything turnkey</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>National average</td>
                  <td className='px-6 py-4 text-slate-700'>$3,850 &ndash; $4,200</td>
                  <td className='px-6 py-4 text-slate-600'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>DIY materials only</td>
                  <td className='px-6 py-4 text-slate-700'>$1,200 &ndash; $2,800</td>
                  <td className='px-6 py-4 text-slate-600'>You still need tools, disposal, and usually a permit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-10'>
            <p className='text-amber-900 font-semibold mb-1'>Common Cost Drivers</p>
            <p className='text-amber-800'>Deeper basements, poured concrete foundations, and any extra drainage or grading work will push costs toward the higher end of the range.</p>
          </div>

          {/* How Long */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>How Long Does the Job Take?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Most standard installs finish in <strong>1 to 3 days</strong>. Day 1 is usually excavation and cutting. Day 2 is setting the window, well, and finishing. Rain or unexpected utilities can stretch it to a third day.
          </p>

          {/* Best Window Type */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>What Kind of Window Is Best for a Basement?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Casement crank-out windows are the clear winner in 2026. They give the largest clear opening and meet code the easiest. Horizontal sliders work too. Avoid hopper or awning styles as they rarely open wide enough for the full 5.7 square feet requirement.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Choose low-E glass and vinyl or fiberglass frames for better energy efficiency in a damp basement.
          </p>

          {/* Window Well and Ladder */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Do You Need a Window Well and Ladder?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Yes, for almost every basement. The well must be at least <strong>9 square feet</strong> total area, project 36 inches from the wall, and be 36 inches wide. If the well is deeper than 44 inches, you must add a permanent ladder or steps &mdash; an easy $150 to $300 add-on and a huge safety upgrade.
          </p>

          {/* DIY */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Can You Install an Egress Window Yourself?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Technically yes if you have masonry experience and the right tools. But most homeowners who start DIY end up calling a pro. Cutting a structural hole in your foundation is risky &mdash; one mistake can cause cracks or new water problems. Most towns require a licensed contractor for the permit anyway.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Save the DIY route for above-grade windows only.
          </p>

          {/* Home Value */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Will It Increase Your Home's Value?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Absolutely. Turning a basement space into a legal bedroom usually adds <strong>$15,000 to $30,000</strong> in appraised value. That is often 3 to 5 times what you spend. Buyers and appraisers love seeing code-compliant bedrooms.
          </p>

          {/* Permits */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Do You Need a Permit?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Yes, almost always. Check with your local building department before you start. Expect a few weeks for approval in most areas. The permit proves the work was done to code when you sell or refinance.
          </p>

          {/* Rebates */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Are There Any Rebates or Tax Credits in 2026?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Not many direct rebates, but energy-efficient low-E egress windows can qualify for the <strong>federal Energy Efficient Home Improvement Credit</strong> &mdash; up to $600. Some insurance companies give a small discount for adding life-safety features.
          </p>

          {/* Code Requirements */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>2026 Egress Window Code Requirements</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            The International Residential Code, still the standard in most states, requires:
          </p>
          <ul className='space-y-3 mb-10'>
            <li className='flex items-start gap-3'>
              <span className='text-teal-500 mt-1'>&#10003;</span>
              <span className='text-slate-700'><strong>Minimum clear opening:</strong> 5.7 sq ft (5.0 sq ft if at grade)</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-teal-500 mt-1'>&#10003;</span>
              <span className='text-slate-700'><strong>Minimum height:</strong> 24 inches</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-teal-500 mt-1'>&#10003;</span>
              <span className='text-slate-700'><strong>Minimum width:</strong> 20 inches</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-teal-500 mt-1'>&#10003;</span>
              <span className='text-slate-700'><strong>Maximum sill height:</strong> 44 inches from floor</span>
            </li>
          </ul>

          {/* FAQ Section */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-8'>Frequently Asked Questions About Basement Egress Windows</h2>

          <div className='space-y-8 mb-12'>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Do I need one even if my basement was finished years ago?</h3>
              <p className='text-slate-700 leading-relaxed'>Yes, if you are now using any room as a bedroom. Inspectors will flag missing egress during future permits or home sales.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>What is included in the price and what adds extra?</h3>
              <p className='text-slate-700 leading-relaxed'>See the full breakdown table above. The biggest extras are foundation type, basement depth, and any custom well or drainage work.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Will I need a window well and ladder?</h3>
              <p className='text-slate-700 leading-relaxed'>Yes for any below-grade install. A ladder is required if the well is deeper than 44 inches.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How long until it is done?</h3>
              <p className='text-slate-700 leading-relaxed'>1 to 3 days once the crew starts.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Can I do it myself to save money?</h3>
              <p className='text-slate-700 leading-relaxed'>Only if you are very experienced with masonry. Most people hire a pro to avoid structural or waterproofing issues.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Are there rebates or insurance discounts?</h3>
              <p className='text-slate-700 leading-relaxed'>A possible $600 federal tax credit for energy-efficient glass, plus small insurance discounts for life-safety upgrades.</p>
            </div>
          </div>

          {/* Glossary */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Glossary of Egress Window Terms</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Clear Opening</h4>
              <p className='text-slate-600 text-sm'>The actual open space when the window is fully open. Must be at least 5.7 square feet to meet code.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Window Well</h4>
              <p className='text-slate-600 text-sm'>The dug-out area outside the window that keeps soil away and gives you room to climb out safely.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Sill Height</h4>
              <p className='text-slate-600 text-sm'>The distance from the basement floor to the bottom of the window. Code says it cannot be higher than 44 inches.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Casement Window</h4>
              <p className='text-slate-600 text-sm'>The crank-out style that swings open like a door. Most popular for basements because it gives the biggest clear opening.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Lintel</h4>
              <p className='text-slate-600 text-sm'>The strong horizontal beam placed above the window to support the wall and foundation above it.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Low-E Glass</h4>
              <p className='text-slate-600 text-sm'>Energy-efficient glass that cuts down on heat loss so your basement stays more comfortable year-round.</p>
            </div>
          </div>

          {/* Final Advice */}
          <div className='bg-teal-50 border border-teal-200 rounded-2xl p-8 mb-12'>
            <h2 className='text-2xl font-extrabold text-slate-900 mb-4'>Final Advice for 2026</h2>
            <p className='text-lg text-slate-700 leading-relaxed'>
              An egress window is one of the smartest safety and value upgrades you can make to a basement. Spend the money on a quality casement unit, proper well, and a licensed local crew and you will sleep better knowing your family is protected. Ready to move forward? Grab free local quotes from vetted basement pros at the top of the page. They know local codes inside out and can give you an exact number for your foundation and lot.
            </p>
          </div>

          {/* Related Articles */}
          <section className='mt-16 mb-12'>
            <h2 className='text-2xl font-extrabold text-slate-900 mb-8'>Related Guides</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <Link href='/articles/basement-adu-rental-suite' className='group block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Basement ADU & Rental Suite Guide</h3>
                <p className='text-slate-500 text-sm'>Egress windows are a must for basement ADUs. Learn the full process.</p>
              </Link>
              <Link href='/articles/how-to-finish-a-basement' className='group block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>How to Finish a Basement</h3>
                <p className='text-slate-500 text-sm'>The complete roadmap to transforming your basement into livable space.</p>
              </Link>
              <Link href='/articles/basement-waterproofing-guide' className='group block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Basement Waterproofing Guide</h3>
                <p className='text-slate-500 text-sm'>Protect your investment before finishing with proper waterproofing.</p>
              </Link>
            </div>
          </section>

          {/* Lead Form */}
          <section className='mt-12'>
            <LeadForm />
          </section>

        </div>
      </div>
    </div>
  )
}
