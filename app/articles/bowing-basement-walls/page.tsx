import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bowing Basement Walls: Causes, Repair Methods & Cost | The Basement Guide',
  description: 'A comprehensive 2026 guide to bowing basement walls. Learn to diagnose how bad the damage is, compare repair options, and understand true costs.',
}

export default function BowingWallsArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/bowed-wall.jpg'
          alt='Bowing basement wall with structural cracks'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>Structural Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Bowing Basement<br />
            <span className='text-indigo-400'>Walls 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            A structural emergency in slow motion. We break down the costs, repair methods, and severity of bowing foundation walls.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>18 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline'>
          
          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-indigo-500 pl-8'>
            If you've noticed your basement walls are no longer plumb, you aren't just looking at a cosmetic issue. You're looking at the failure of your home's foundation. Left unaddressed, a bowing wall can eventually collapse, leading to catastrophic structural failure.
          </p>

          <h2 className='text-3xl mb-8 uppercase tracking-tight'>Comparison at a Glance: Repair Methods</h2>
          <div className='overflow-x-auto rounded-3xl border border-slate-200 shadow-sm not-prose mb-16'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-slate-50'>
                  <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest'>Method</th>
                  <th className='p-6 font-black text-indigo-700 uppercase text-xs tracking-widest'>Best For</th>
                  <th className='p-6 font-black text-indigo-900 uppercase text-xs tracking-widest'>Avg. Cost</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Carbon Fiber Straps</td>
                  <td className='p-6 text-slate-600'>Bowing &lt; 2 inches</td>
                  <td className='p-6 text-indigo-600 font-black'>$500 – $1,200 per strap</td>
                </tr>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Steel I-Beams</td>
                  <td className='p-6 text-slate-600'>Severe bowing/Shearing</td>
                  <td className='p-6 text-indigo-600 font-black'>$1,500 – $3,000 per beam</td>
                </tr>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Wall Anchors</td>
                  <td className='p-6 text-slate-600'>Straightening the wall</td>
                  <td className='p-6 text-indigo-600 font-black'>$1,000 – $2,500 per anchor</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='text-4xl mb-6'>Chapter 1: Why Basement Walls Bow</h2>
          <p>
            Foundations bow because of external pressure. While concrete is incredibly strong in compression (holding up the house), it is relatively weak in <strong>tension</strong> (resisting lateral force from the side).
          </p>

          <h3 className='text-2xl font-bold mt-10 mb-4'>Hydrostatic Pressure & Expansive Clay</h3>
          <p>
            When soil becomes saturated with water, it expands. In areas with high clay content, this expansion is massive. This creates <strong>hydrostatic pressure</strong> that pushes against the wall. Think of it like a giant hydraulic jack slowly crushing your foundation.
          </p>

          <div className='bg-slate-900 rounded-3xl p-12 my-12 font-mono text-sm text-indigo-300 leading-none overflow-x-auto not-prose shadow-2xl'>
            <pre>{`[ HOUSE WEIGHT ]
 ||
 VV
############## <-- Soil Line (Rain/Snow)
# [SOIL] # <-- Expansive Clay
# ---> # <-- Hydrostatic Pressure
# ---> # <-- [LATERAL FORCE]
# [WALL] # <-- Bowing begins here
# ( ) # <-- Center point deflection
# #
############## <-- Footing`}</pre>
          </div>

          <h2 className='text-4xl mb-6'>Chapter 2: Diagnosing the Severity</h2>
          <p>
            Not all bowing walls require the same fix. The amount of "deflection" (how far the wall has moved from its original position) determines the repair method.
          </p>

          <div className='bg-indigo-50 rounded-3xl p-12 my-16 border border-indigo-100 not-prose'>
            <h2 className='text-3xl font-black text-indigo-900 mb-6'>The Severity Scale</h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='bg-white p-8 rounded-2xl shadow-sm border border-indigo-200'>
                <h4 className='font-black text-indigo-900 mb-4 uppercase tracking-widest text-xs'>Minor</h4>
                <p className='text-slate-600 font-medium text-sm mb-4'>&lt; 2 inches</p>
                <p className='text-slate-500 text-sm'>Fixable with carbon fiber reinforcement. Non-invasive and fast.</p>
              </div>
              <div className='bg-white p-8 rounded-2xl shadow-sm border border-amber-200'>
                <h4 className='font-black text-amber-900 mb-4 uppercase tracking-widest text-xs'>Moderate</h4>
                <p className='text-slate-600 font-medium text-sm mb-4'>2 – 4 inches</p>
                <p className='text-slate-500 text-sm'>Requires steel I-beams or wall anchors to stop further movement.</p>
              </div>
              <div className='bg-white p-8 rounded-2xl shadow-sm border border-rose-200'>
                <h4 className='font-black text-rose-900 mb-4 uppercase tracking-widest text-xs'>Severe</h4>
                <p className='text-slate-600 font-medium text-sm mb-4'>&gt; 4 inches</p>
                <p className='text-slate-500 text-sm'>The wall may require partial or full replacement.</p>
              </div>
            </div>
          </div>

          <h2 className='text-4xl mb-6'>Chapter 3: Modern Repair Methods</h2>
          <p>
            In modern foundation repair, there are three primary ways to address a bowing wall.
          </p>

          <h3 className='text-2xl font-bold mt-10 mb-4'>1. Carbon Fiber Straps</h3>
          <p>
            Carbon fiber is 10 times stronger than steel in tension. Contractors apply these high-tech straps to the inside of the wall using industrial-strength epoxy.
          </p>

          <h3 className='text-2xl font-bold mt-10 mb-4'>2. Steel I-Beams (PowerBraces)</h3>
          <p>
            Vertical steel beams are bolted to the floor and the floor joists above. This creates a "cage" that prevents the wall from moving inward any further.
          </p>

          <h3 className='text-2xl font-bold mt-10 mb-4'>3. Wall Anchors</h3>
          <p>
            This involves burying an "anchor" plate in your yard and connecting it to a plate on your basement wall via a long steel rod.
          </p>

          <h2 className='text-3xl mb-8 mt-16'>Frequently Asked Questions</h2>
          <div className='space-y-8 not-prose'>
            <div className='border-b border-slate-100 pb-8'>
              <h4 className='text-xl font-bold text-slate-900 mb-3'>Can I ignore a bowing wall?</h4>
              <p className='text-slate-600 leading-relaxed'>Absolutely not. Once a wall starts bowing, the structural integrity of the concrete is compromised. It will only get worse, never better, on its own.</p>
            </div>
            <div className='border-b border-slate-100 pb-8'>
              <h4 className='text-xl font-bold text-slate-900 mb-3'>How long does repair take?</h4>
              <p className='text-slate-600 leading-relaxed'>Most strap or beam installations take 1–2 days. Wall anchors may take slightly longer if excavation is required in the yard.</p>
            </div>
          </div>

                    {/* Related Guides */}
          <section className='mt-16 mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
            <div className='grid md:grid-cols-2 gap-4'>
              <Link href='/articles/types-of-foundation-cracks' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h3 className='font-bold text-slate-900 mb-2'>Types of Foundation Cracks</h3>
                <p className='text-slate-600 text-sm'>Diagnose whether your crack is cosmetic or a structural red flag.</p>
              </Link>
              <Link href='/articles/foundation-crack-repair-cost' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h3 className='font-bold text-slate-900 mb-2'>Foundation Crack Repair Cost 2026</h3>
                <p className='text-slate-600 text-sm'>Epoxy injection vs. polyurethane foam pricing and what to expect.</p>
              </Link>
              <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h3 className='font-bold text-slate-900 mb-2'>Complete Waterproofing Guide</h3>
                <p className='text-slate-600 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
              </Link>
              <Link href='/articles/basement-efflorescence' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h3 className='font-bold text-slate-900 mb-2'>Basement Efflorescence Explained</h3>
                <p className='text-slate-600 text-sm'>What that white powder on your walls really means and how to stop it.</p>
              </Link>
            </div>
          </section>

          <div className='bg-slate-900 rounded-3xl p-12 text-white my-20 shadow-xl shadow-indigo-900/20 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get a Professional Assessment</h2>
              <p className='text-indigo-100 text-lg mb-10'>
                Structural repairs are not a DIY project. Get a free, no-obligation quote from a structural specialist.
              </p>
              <Link href='/find-pros' className='bg-white text-indigo-600 px-12 py-4 rounded-full font-black text-lg inline-block hover:bg-indigo-50 transition-all hover:scale-105'>
                Find Foundation Pros Near Me →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
