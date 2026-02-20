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
          className='object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent' />
        <div className='absolute inset-0 flex items-center'>
          <div className='container-custom w-full'>
            <div className='max-w-4xl'>
              <div className='flex items-center gap-3 mb-8'>
                <span className='h-px w-12 bg-indigo-500' />
                <span className='text-indigo-400 text-sm font-black uppercase tracking-[0.3em]'>
                  Structural Guide
                </span>
              </div>
              <h1 className='text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight'>
                Bowing Basement <br className='hidden md:block' />
                Walls: 2026 Guide
              </h1>
              <p className='text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light'>
                A bowing wall is a structural emergency in slow motion. We break down the cost, repair methods, and severity of each case.
              </p>
              <div className='flex items-center gap-6 p-1 pr-6 bg-white/5 backdrop-blur-md rounded-full w-fit border border-white/10'>
                <div className='w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                  BG
                </div>
                <div>
                  <p className='text-white font-semibold'>The Basement Guide Staff</p>
                  <div className='flex items-center gap-3 text-sm text-slate-400'>
                    <span>Updated Feb 2026</span>
                    <span className='w-1 h-1 bg-slate-600 rounded-full' />
                    <span>18 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-20 bg-white'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span-8'>
              <p className='text-xl text-slate-600 leading-relaxed mb-8 font-light'>
                If you've noticed your basement walls are no longer plumb, you aren't just looking at a cosmetic issue. You're looking at the failure of your home's foundation. Left unaddressed, a bowing wall can eventually collapse, leading to catastrophic structural failure and massive repair bills.
              </p>

              <div className='bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12'>
                <h3 className='text-2xl font-bold text-slate-900 mb-6'>Comparison at a Glance: Repair Methods</h3>
                <div className='overflow-x-auto'>
                  <table className='w-full text-left'>
                    <thead>
                      <tr className='border-b border-slate-200'>
                        <th className='pb-4 font-bold text-slate-900'>Method</th>
                        <th className='pb-4 font-bold text-slate-900'>Best For</th>
                        <th className='pb-4 font-bold text-slate-900'>Avg. Cost</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-100'>
                      <tr>
                        <td className='py-4 text-slate-600'>Carbon Fiber Straps</td>
                        <td className='py-4 text-slate-600'>Bowing &lt; 2 inches</td>
                        <td className='py-4 font-semibold text-indigo-600'>$500 – $1,200 per strap</td>
                      </tr>
                      <tr>
                        <td className='py-4 text-slate-600'>Steel I-Beams</td>
                        <td className='py-4 text-slate-600'>Severe bowing/Shearing</td>
                        <td className='py-4 font-semibold text-indigo-600'>$1,500 – $3,000 per beam</td>
                      </tr>
                      <tr>
                        <td className='py-4 text-slate-600'>Wall Anchors</td>
                        <td className='py-4 text-slate-600'>Straightening the wall</td>
                        <td className='py-4 font-semibold text-indigo-600'>$1,000 – $2,500 per anchor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Chapter 1: Why Basement Walls Bow</h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Foundations bow because of external pressure. While concrete is incredibly strong in compression (holding up the house), it is relatively weak in <strong>tension</strong> (resisting lateral force from the side).
              </p>

              <h3 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>Hydrostatic Pressure &amp; Expansive Clay</h3>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                When soil becomes saturated with water, it expands. In areas with high clay content, this expansion is massive. This creates <strong>hydrostatic pressure</strong> that pushes against the wall. Think of it like a giant hydraulic jack slowly crushing your foundation.
              </p>

              <div className='bg-slate-900 rounded-2xl p-8 my-12 font-mono text-sm text-indigo-300 leading-none overflow-x-auto'>
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

              <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Chapter 2: Diagnosing the Severity</h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Not all bowing walls require the same fix. The amount of "deflection" (how far the wall has moved from its original position) determines the repair method.
              </p>
              <ul className='space-y-4 mb-8'>
                <li className='flex gap-3 text-lg text-slate-600'>
                  <span className='text-indigo-500 font-bold'>•</span>
                  <span><strong>Minor ( &lt; 2 inches ):</strong> Usually fixable with carbon fiber reinforcement. Non-invasive and fast.</span>
                </li>
                <li className='flex gap-3 text-lg text-slate-600'>
                  <span className='text-indigo-500 font-bold'>•</span>
                  <span><strong>Moderate ( 2 – 4 inches ):</strong> Requires steel I-beams or wall anchors to stop further movement.</span>
                </li>
                <li className='flex gap-3 text-lg text-slate-600'>
                  <span className='text-indigo-500 font-bold'>•</span>
                  <span><strong>Severe ( &gt; 4 inches ):</strong> The wall may be beyond simple reinforcement and may require partial or full replacement.</span>
                </li>
              </ul>

              <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Chapter 3: The Best Repair Methods for 2026</h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-8'>
                In modern foundation repair, there are three primary ways to address a bowing wall.
              </p>

              <h3 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>1. Carbon Fiber Straps</h3>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Carbon fiber is 10 times stronger than steel in tension. Contractors apply these high-tech straps to the inside of the wall using industrial-strength epoxy.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-12'>
                <div className='bg-emerald-50 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-2 font-medium'>
                  <span>✅</span> Low Profile
                </div>
                <div className='bg-emerald-50 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-2 font-medium'>
                  <span>✅</span> No Excavation
                </div>
                <div className='bg-rose-50 text-rose-700 px-4 py-3 rounded-xl flex items-center gap-2 font-medium'>
                  <span>❌</span> No Straightening
                </div>
              </div>

              <h3 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>2. Steel I-Beams (PowerBraces)</h3>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Vertical steel beams are bolted to the floor and the floor joists above. This creates a "cage" that prevents the wall from moving inward any further.
              </p>

              <h3 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>3. Wall Anchors</h3>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                This involves burying an "anchor" plate in your yard and connecting it to a plate on your basement wall via a long steel rod. By tightening the nut inside, you can actually pull the wall back toward its original position over time.
              </p>

              <div className='border-t border-slate-100 pt-16 mt-16'>
                <h2 className='text-3xl font-bold text-slate-900 mb-8'>Frequently Asked Questions</h2>
                <div className='space-y-8'>
                  <div>
                    <h4 className='text-xl font-bold text-slate-900 mb-2'>Can I ignore a bowing wall?</h4>
                    <p className='text-slate-600 leading-relaxed'>Absolutely not. Once a wall starts bowing, the structural integrity of the concrete is compromised. It will only get worse, never better, on its own.</p>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-slate-900 mb-2'>How long does repair take?</h4>
                    <p className='text-slate-600 leading-relaxed'>Most strap or beam installations take 1–2 days. Wall anchors may take slightly longer if excavation is required in the yard.</p>
                  </div>
                </div>
              </div>

              <div className='bg-indigo-600 rounded-3xl p-8 md:p-12 text-white mt-20'>
                <h2 className='text-3xl font-bold mb-4'>Get a Professional Assessment</h2>
                <p className='text-indigo-100 text-lg mb-8 max-w-xl'>
                  Structural repairs are not a DIY project. A mistake here can lead to home collapse or massive liability issues. Get a free, no-obligation quote from a structural specialist.
                </p>
                <Link href='/find-pros' className='bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg inline-block hover:bg-indigo-50 transition-colors'>
                  Find Foundation Pros Near Me →
                </Link>
              </div>
            </div>

            <div className='lg:col-span-4'>
              <div className='sticky top-8 space-y-8'>
                <div className='bg-slate-900 rounded-2xl p-8 text-white'>
                  <h3 className='text-xl font-bold mb-6'>Structural Glossary</h3>
                  <div className='space-y-6'>
                    <div>
                      <p className='text-indigo-400 font-bold text-sm uppercase tracking-wider mb-1'>Deflection</p>
                      <p className='text-slate-300 text-sm leading-relaxed'>The distance a wall has moved from its original plumb position.</p>
                    </div>
                    <div>
                      <p className='text-indigo-400 font-bold text-sm uppercase tracking-wider mb-1'>Expansive Clay</p>
                      <p className='text-slate-300 text-sm leading-relaxed'>Soil that grows in volume when wet, putting pressure on foundations.</p>
                    </div>
                    <div>
                      <p className='text-indigo-400 font-bold text-sm uppercase tracking-wider mb-1'>Shearing</p>
                      <p className='text-slate-300 text-sm leading-relaxed'>When the bottom of the wall slides inward over the floor slab.</p>
                    </div>
                  </div>
                </div>

                <div className='bg-indigo-900 rounded-2xl p-8 text-white'>
                  <h3 className='font-bold text-white mb-6'>Cost Summary</h3>
                  <ul className='space-y-4 text-sm'>
                    <li className='flex justify-between border-b border-white/10 pb-2'>
                      <span className='text-slate-400'>Strap System</span>
                      <span className='font-bold text-blue-400'>$4k – $8k</span>
                    </li>
                    <li className='flex justify-between border-b border-white/10 pb-2'>
                      <span className='text-slate-400'>Beam System</span>
                      <span className='font-bold text-blue-400'>$6k – $12k</span>
                    </li>
                    <li className='flex justify-between border-b border-white/10 pb-2'>
                      <span className='text-slate-400'>Anchor System</span>
                      <span className='font-bold text-blue-400'>$5k – $15k</span>
                    </li>
                  </ul>
                  <Link href='/articles/foundation-repair-cost' className='bg-white/10 hover:bg-white/20 text-white w-full py-3 rounded-xl font-bold text-center block transition-colors mt-6'>
                    Full Cost Breakdown
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
