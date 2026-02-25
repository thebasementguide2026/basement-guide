import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sump Pump Buying Guide: How to Choose the Right One (2026)',
  description: 'Complete 2026 guide to choosing the right sump pump. Pedestal vs submersible, sizing, features, backup systems, pricing, and top brands explained.'
}

export default function SumpPumpBuyingGuide() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/sump-pump-installation.jpg.png'
          alt='Sump pump installation and selection'
          fill
          className='object-cover opacity-50 scale-105 transition-transform duration-700'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-indigo-500' />
            <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Buyer&#39;s Guide</span>
          </div>
          <h1 className='text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter max-w-4xl mb-8'>
            Choose the <span className='text-indigo-500'>Right</span><br />Sump Pump
          </h1>
          <p className='text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed'>
            From horsepower to pump types, everything you need to know to protect your basement.
          </p>
          <div className='mt-12 flex items-center gap-6'>
            <div className='w-12 h-12 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-white font-bold'>BG</div>
            <div>
              <p className='text-white font-medium'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 &middot; 18 min read</p>
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-4xl mx-auto px-6'>
        <article className='py-16'>

          <p className='text-lg text-slate-700 leading-relaxed mb-6'>A sump pump is one of the most important pieces of equipment in any basement that sees water. It quietly sits in a pit and automatically removes groundwater before it can flood your floor, ruin finishes, or cause mold.</p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>When the power goes out during a storm or your water table rises, a good sump pump is the difference between a dry basement and thousands of dollars in damage.</p>
          <p className='text-lg text-slate-700 leading-relaxed mb-12'>This updated 2026 guide gives you everything you need to buy the right sump pump the first time &#8212; types, sizing, features, pricing, and backup options.</p>

          {/* Section 1 - Why You Need One */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-indigo-600 font-bold text-sm tracking-wider uppercase'>Basics</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Why It Matters</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Why Most Basements Need a Sump Pump</h2>
            <div className='space-y-4 text-slate-600 text-sm leading-relaxed'>
              <p>Basements sit below ground level, so they naturally collect water from rain, melting snow, or a high water table. Without a sump pump, even small amounts of seepage can turn into standing water.</p>
              <p>A reliable pump moves that water out fast, protecting your foundation, floors, and everything you store downstairs. If you have ever had water in your basement after heavy rain, seen <Link href='/articles/efflorescence-explainer' className='text-indigo-600 hover:underline'>efflorescence</Link> on the walls, or smelled musty air, a sump pump &#8212; or an upgraded one &#8212; is likely the solution.</p>
            </div>
          </div>

          {/* Section 2 - Pedestal vs Submersible */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-indigo-600 font-bold text-sm tracking-wider uppercase'>Types</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Comparison</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Pedestal vs. Submersible &#8212; Which Type Is Best?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div className='bg-indigo-50 rounded-xl p-6 border border-indigo-100'>
                <h3 className='font-bold text-indigo-900 text-lg mb-3'>Submersible Pumps</h3>
                <ul className='space-y-2 text-slate-700 text-sm'>
                  <li>Entire unit sits underwater in the sump pit</li>
                  <li>Much quieter because the motor is submerged</li>
                  <li>More powerful and better for heavy water flow</li>
                  <li>Longer lifespan &#8212; 10 to 15 years with maintenance</li>
                  <li>Most popular choice for finished basements</li>
                </ul>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h3 className='font-bold text-slate-900 text-lg mb-3'>Pedestal Pumps</h3>
                <ul className='space-y-2 text-slate-700 text-sm'>
                  <li>Motor sits above the water on a pedestal</li>
                  <li>Easier to service and repair</li>
                  <li>Cheaper upfront</li>
                  <li>Louder because the motor is in the open air</li>
                  <li>Good for shallow pits or crawl spaces</li>
                </ul>
              </div>
            </div>
            <div className='bg-amber-50 border border-amber-200 rounded-xl p-6'>
              <p className='text-amber-800 text-sm font-medium'>Recommendation: Go with a <strong>submersible model</strong> unless your pit is very shallow or you need the absolute lowest upfront cost.</p>
            </div>
          </div>

          {/* Section 3 - Sizing */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-indigo-600 font-bold text-sm tracking-wider uppercase'>Sizing</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Get It Right</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>How to Size a Sump Pump Correctly</h2>
            <p className='text-slate-600 text-sm leading-relaxed mb-6'>The two numbers that matter most are <strong>horsepower (HP)</strong> and <strong>gallons per hour (GPH)</strong>.</p>
            <div className='overflow-x-auto mb-6'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='bg-slate-800 text-white'>
                    <th className='text-left p-4 font-semibold'>Horsepower</th>
                    <th className='text-left p-4 font-semibold'>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-slate-100'>
                    <td className='p-4 font-semibold text-indigo-700'>1/3 HP</td>
                    <td className='p-4 text-slate-700'>Average rainfall and normal water tables</td>
                  </tr>
                  <tr className='border-b border-slate-100 bg-slate-50'>
                    <td className='p-4 font-semibold text-indigo-700'>1/2 HP</td>
                    <td className='p-4 text-slate-700'>Most homes with moderate to heavy water &#8212; <strong>best choice for most</strong></td>
                  </tr>
                  <tr>
                    <td className='p-4 font-semibold text-indigo-700'>3/4 &#8211; 1 HP</td>
                    <td className='p-4 text-slate-700'>Very wet basements, high water tables, or large homes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='bg-indigo-50 border border-indigo-100 rounded-xl p-6'>
              <h4 className='font-bold text-indigo-900 mb-2'>GPH (Gallons Per Hour)</h4>
              <p className='text-slate-700 text-sm'>Look for at least <strong>2,500 to 4,000 GPH</strong> at a 10-foot head (the vertical distance the water must be lifted). The deeper your discharge pipe goes outside, the more powerful the pump needs to be.</p>
            </div>
            <p className='text-slate-600 text-sm mt-4'><strong>Simple Rule:</strong> Measure the depth of your sump pit and estimate how fast water enters during a heavy rain. If the pit fills in less than 5 minutes, you need a stronger pump.</p>
          </div>

          {/* Section 4 - Key Features */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-indigo-600 font-bold text-sm tracking-wider uppercase'>Features</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; What Matters</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Key Features to Look For in 2026</h2>
            <div className='space-y-4'>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-2'>Float Switch</h4>
                <p className='text-slate-600 text-sm'>Vertical (less likely to tangle) or electronic (most reliable, no moving parts).</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-2'>Material</h4>
                <p className='text-slate-600 text-sm'>Cast iron lasts longer and runs cooler than plastic.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-2'>Discharge Size</h4>
                <p className='text-slate-600 text-sm'>1.5-inch is standard. 2-inch handles more water.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-2'>Thermal Overload Protection</h4>
                <p className='text-slate-600 text-sm'>Shuts the pump off if it overheats, preventing burnout.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-2'>Check Valve</h4>
                <p className='text-slate-600 text-sm'>Prevents water from flowing back into the pit after the pump cycles off.</p>
              </div>
            </div>
          </div>

          {/* Section 5 - Backup Systems */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-indigo-600 font-bold text-sm tracking-wider uppercase'>Backup</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Essential Protection</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Backup Systems You Actually Need</h2>
            <p className='text-slate-600 text-sm leading-relaxed mb-6'>A primary pump is useless during a power outage &#8212; which is exactly when you need it most. Every basement should have a backup.</p>
            <div className='space-y-4'>
              <div className='bg-indigo-50 rounded-xl p-6 border border-indigo-100'>
                <h4 className='font-bold text-indigo-900 mb-2'>Battery Backup</h4>
                <p className='text-slate-700 text-sm'>Runs 8 to 36 hours depending on battery size. Costs <strong>$300 to $900</strong>.</p>
              </div>
              <div className='bg-indigo-50 rounded-xl p-6 border border-indigo-100'>
                <h4 className='font-bold text-indigo-900 mb-2'>Water-Powered Backup</h4>
                <p className='text-slate-700 text-sm'>Uses your home&#39;s water pressure and runs indefinitely during a storm. Costs <strong>$400 to $1,200</strong>.</p>
              </div>
              <div className='bg-indigo-50 rounded-xl p-6 border border-indigo-100'>
                <h4 className='font-bold text-indigo-900 mb-2'>Dual System</h4>
                <p className='text-slate-700 text-sm'>Primary + battery backup in one unit. <strong>Most reliable option</strong>.</p>
              </div>
            </div>
            <div className='bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6'>
              <p className='text-amber-800 text-sm font-medium'>In 2026, smart battery backups with phone alerts are becoming very popular and worth the extra cost.</p>
            </div>
          </div>

          {/* Section 6 - Pricing */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-indigo-600 font-bold text-sm tracking-wider uppercase'>Costs</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; 2026 Pricing</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>2026 Pricing Guide</h2>
            <div className='overflow-x-auto mb-6'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='bg-slate-800 text-white'>
                    <th className='text-left p-4 font-semibold'>Item</th>
                    <th className='text-left p-4 font-semibold'>Cost Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-slate-100'>
                    <td className='p-4 text-slate-700'>Basic 1/3 HP submersible</td>
                    <td className='p-4 font-semibold text-indigo-700'>$120 &#8211; $250</td>
                  </tr>
                  <tr className='border-b border-slate-100 bg-slate-50'>
                    <td className='p-4 text-slate-700'>Good 1/2 HP cast iron model</td>
                    <td className='p-4 font-semibold text-indigo-700'>$250 &#8211; $450</td>
                  </tr>
                  <tr className='border-b border-slate-100'>
                    <td className='p-4 text-slate-700'>Premium 1/2 or 3/4 HP with smart features</td>
                    <td className='p-4 font-semibold text-indigo-700'>$450 &#8211; $750</td>
                  </tr>
                  <tr className='border-b border-slate-100 bg-slate-50'>
                    <td className='p-4 text-slate-700'>Full battery backup system</td>
                    <td className='p-4 font-semibold text-indigo-700'>$600 &#8211; $1,500 installed</td>
                  </tr>
                  <tr>
                    <td className='p-4 text-slate-700'>Professional installation</td>
                    <td className='p-4 font-semibold text-indigo-700'>$300 &#8211; $800</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-slate-600 text-sm'>Total for a complete reliable system with backup: <strong>$1,200 to $3,000 installed</strong>. See our <Link href='/articles/basement-finishing-cost' className='text-indigo-600 hover:underline'>basement finishing cost guide</Link> for broader budget context.</p>
          </div>

          {/* Section 7 - Top Brands */}
          <div className='mb-20'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-indigo-600 font-bold text-sm tracking-wider uppercase'>Brands</span>
              <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; 2026 Picks</span>
            </div>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Top Recommended Brands and Models in 2026</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Zoeller</h4>
                <p className='text-slate-600 text-sm'>Best overall reliability and quiet operation.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Wayne</h4>
                <p className='text-slate-600 text-sm'>Excellent value and strong performance.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Liberty Pumps</h4>
                <p className='text-slate-600 text-sm'>Great smart features and monitoring.</p>
              </div>
              <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
                <h4 className='font-bold text-slate-900 mb-1'>Superior Pump</h4>
                <p className='text-slate-600 text-sm'>Solid budget-friendly option.</p>
              </div>
              <div className='bg-indigo-50 rounded-xl p-6 border border-indigo-100 sm:col-span-2'>
                <h4 className='font-bold text-indigo-900 mb-1'>Basement Watchdog</h4>
                <p className='text-slate-700 text-sm'>Best battery backup systems on the market.</p>
              </div>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className='mb-20'>
            <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Final Thoughts</h2>
            <div className='space-y-4 text-slate-600 text-sm leading-relaxed'>
              <p>Choosing the right sump pump is about matching power, reliability, and backup protection to your specific basement conditions. Do not buy the cheapest model you find online.</p>
              <p>Invest in cast iron, a good backup system, and professional installation if possible. A quality sump pump will run quietly in the background for a decade or more and give you real peace of mind every time it rains.</p>
              <p>Start by measuring your sump pit depth and estimating how much water enters during a storm. Then compare a few models from the brands above. If you are unsure, most local waterproofing companies will evaluate your pit for free and recommend the perfect pump.</p>
              <p>For more on keeping your entire basement dry, read our <Link href='/articles/complete-basement-waterproofing-guide' className='text-indigo-600 hover:underline'>complete basement waterproofing guide</Link>.</p>
            </div>
          </div>

          {/* Glossary */}
          <div className='mb-20'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary of Terms</h2>
            <div className='space-y-4'>
              <div className='border-l-4 border-indigo-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>GPH (Gallons Per Hour)</h4>
                <p className='text-slate-600 text-sm'>How much water the pump can move in one hour at a given height. Higher is better for wet basements.</p>
              </div>
              <div className='border-l-4 border-indigo-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>Head Pressure</h4>
                <p className='text-slate-600 text-sm'>The vertical distance the pump must lift water from the pit to the outside discharge point.</p>
              </div>
              <div className='border-l-4 border-indigo-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>Float Switch</h4>
                <p className='text-slate-600 text-sm'>The mechanism that turns the pump on and off when water rises and falls in the pit.</p>
              </div>
              <div className='border-l-4 border-indigo-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>Battery Backup</h4>
                <p className='text-slate-600 text-sm'>A secondary system that kicks in when the main pump loses power during storms.</p>
              </div>
              <div className='border-l-4 border-indigo-400 pl-4'>
                <h4 className='font-bold text-slate-900 mb-1'>Cast Iron</h4>
                <p className='text-slate-600 text-sm'>Heavy, durable material used for pump housings that runs cooler and lasts longer than plastic.</p>
              </div>
            </div>
          </div>

          {/* Related Guides */}
          <div className='mb-20'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-indigo-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Complete Waterproofing Guide</h3>
                <p className='text-slate-600 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
              </Link>
              <Link href='/articles/basement-finishing-cost' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-indigo-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Basement Finishing Cost Guide</h3>
                <p className='text-slate-600 text-sm'>Full breakdown of costs to finish your basement from start to move-in.</p>
              </Link>
              <Link href='/articles/how-to-prevent-basement-mold' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-indigo-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>How to Prevent Basement Mold</h3>
                <p className='text-slate-600 text-sm'>The 5 pillars of permanent mold prevention for your basement.</p>
              </Link>
              <Link href='/articles/how-to-finish-a-basement' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-indigo-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>How to Finish a Basement</h3>
                <p className='text-slate-600 text-sm'>Step-by-step guide to transforming your unfinished basement.</p>
            <Link href='/articles/french-drain-cost' className='block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-2'>French Drain Cost Guide</h3>
              <p className='text-slate-600 text-sm'>Complete pricing for interior and exterior French drain installations in 2026.</p>
            </Link>
              </Link>
            <Link href='/articles/basement-insulation-guide' className='block bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-2'>Basement Insulation Guide</h3>
              <p className='text-slate-600 text-sm'>R-values, materials, and installation methods for below-grade walls.</p>
            </Link>
            </div>
          </div>

          {/* Lead Form CTA */}
          <div className='bg-slate-900 rounded-2xl p-8 text-center'>
            <h2 className='text-2xl font-bold text-white mb-3'>Get a Professional Sump Pump Installation</h2>
            <p className='text-slate-300 mb-6'>Not sure which pump to choose? Connect with pre-vetted waterproofing professionals in your area. Free assessments, no obligation.</p>
            <LeadForm />
          </div>

        </article>
      </div>
    </div>
  )
}
