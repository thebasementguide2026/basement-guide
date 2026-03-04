import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Water Coming Up Through Basement Floor: Causes, Fixes & Costs (2026)',
  description: 'Water pushing up through your basement floor? Learn the causes including hydrostatic pressure, cove joint seepage, and plumbing leaks. Get fix costs from $50 to $25,000.',
};
export default function WaterComingUpThroughBasementFloor() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/images/floorleaking.jpg'
          alt='Water seeping up through basement floor cracks'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-cyan-500'></div>
            <span className='text-cyan-400 font-bold tracking-[0.3em] text-sm uppercase'>Troubleshooting Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Water Coming Up Through <br />
            <span className='text-cyan-400'>Basement Floor</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl leading-relaxed'>
            Causes, fixes, and what it actually costs in 2026. From free DIY drainage fixes to full interior waterproofing systems.
          </p>
          <div className='flex items-center gap-4 mt-8'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white'>BG</div>
              <div>
                <p className='text-white text-sm font-medium'>The Basement Guide Staff</p>
                <p className='text-slate-400 text-xs'>Updated March 2026 &middot; 22 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Guides */}
      <div className='max-w-4xl mx-auto px-6 pt-10'>
        <Link href='/guides' className='text-cyan-700 hover:text-cyan-800 text-sm font-medium'>&larr; Back to Guides</Link>
      </div>

      {/* Intro */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <div className='prose prose-lg prose-slate max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed'>
            Water on your basement floor doesn&rsquo;t always come from the walls. Sometimes it bubbles up from below &mdash; seeping through cracks in the slab, pooling along the edges where the floor meets the wall, or appearing as a damp patch with no obvious source.
          </p>
          <p className='text-slate-600 leading-relaxed'>
            This is a different problem than a leaky foundation wall, and it requires a different set of solutions. The first priority is figuring out whether it&rsquo;s a plumbing emergency or a groundwater issue. That distinction determines everything &mdash; who you call, how urgent it is, and what the fix costs.
          </p>
        </div>
      </article>

      {/* Diagnostic Section: Groundwater vs Plumbing */}
      <section className='bg-slate-50 py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>First: Is It Groundwater or a Plumbing Problem?</h2>
          <p className='text-slate-600 mb-10 max-w-3xl'>Before you do anything else, answer this question. The two problems look similar but have completely different causes and fixes.</p>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-2xl p-8 shadow-sm border border-slate-200'>
              <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4'>
                <span className='text-2xl'>💧</span>
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Groundwater (Hydrostatic Pressure)</h3>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li className='flex items-start gap-2'><span className='text-blue-500 mt-1'>&#x2022;</span>Water appears during or after heavy rain</li>
                <li className='flex items-start gap-2'><span className='text-blue-500 mt-1'>&#x2022;</span>Water is clear, not discolored</li>
                <li className='flex items-start gap-2'><span className='text-blue-500 mt-1'>&#x2022;</span>Dampness along the floor-wall perimeter</li>
                <li className='flex items-start gap-2'><span className='text-blue-500 mt-1'>&#x2022;</span>Multiple areas wet, not just one spot</li>
                <li className='flex items-start gap-2'><span className='text-blue-500 mt-1'>&#x2022;</span>Problem is seasonal (worse in spring)</li>
                <li className='flex items-start gap-2'><span className='text-blue-500 mt-1'>&#x2022;</span>White mineral deposits (efflorescence) visible</li>
              </ul>
            </div>
            <div className='bg-white rounded-2xl p-8 shadow-sm border border-slate-200'>
              <div className='w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4'>
                <span className='text-2xl'>🔧</span>
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Plumbing Leak</h3>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li className='flex items-start gap-2'><span className='text-orange-500 mt-1'>&#x2022;</span>Water appears regardless of weather</li>
                <li className='flex items-start gap-2'><span className='text-orange-500 mt-1'>&#x2022;</span>Single concentrated wet area</li>
                <li className='flex items-start gap-2'><span className='text-orange-500 mt-1'>&#x2022;</span>Near water heater, washer, or bathroom</li>
                <li className='flex items-start gap-2'><span className='text-orange-500 mt-1'>&#x2022;</span>Water may be warm</li>
                <li className='flex items-start gap-2'><span className='text-orange-500 mt-1'>&#x2022;</span>Running a faucet makes it worse</li>
                <li className='flex items-start gap-2'><span className='text-orange-500 mt-1'>&#x2022;</span>Water bill has increased</li>
              </ul>
            </div>
            <div className='bg-white rounded-2xl p-8 shadow-sm border border-slate-200'>
              <div className='w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4'>
                <span className='text-2xl'>🚨</span>
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Sewer or Drain Backup</h3>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li className='flex items-start gap-2'><span className='text-red-500 mt-1'>&#x2022;</span>Water comes up through floor drain</li>
                <li className='flex items-start gap-2'><span className='text-red-500 mt-1'>&#x2022;</span>Smells like sewage</li>
                <li className='flex items-start gap-2'><span className='text-red-500 mt-1'>&#x2022;</span>Multiple drains in the house are slow</li>
                <li className='flex items-start gap-2'><span className='text-red-500 mt-1'>&#x2022;</span>Gets worse when running water anywhere</li>
              </ul>
            </div>
          </div>
          <div className='mt-10 bg-cyan-50 border border-cyan-200 rounded-xl p-6'>
            <p className='text-sm font-bold text-cyan-900 mb-2'>Quick Diagnostic Test</p>
            <p className='text-sm text-cyan-800'>Turn off the main water supply to your house for a few hours. If the water on the floor stops appearing, you have a plumbing leak. If it continues, you&rsquo;re dealing with groundwater.</p>
          </div>
        </div>
      </section>

      {/* 5 Causes Section */}
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Why Water Pushes Up Through a Basement Floor</h2>
        <p className='text-slate-600 mb-12'>There are five common causes, ranging from a free DIY fix to a major waterproofing project.</p>

        <div className='space-y-12'>
          {/* Cause 1 */}
          <div className='border-l-4 border-cyan-500 pl-6'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='bg-cyan-100 text-cyan-800 text-sm font-bold px-3 py-1 rounded-full'>1</span>
              <h3 className='text-2xl font-bold text-slate-900'>Hydrostatic Pressure &mdash; The Most Common Cause</h3>
            </div>
            <p className='text-slate-600 leading-relaxed mb-3'>Your basement floor is a thin concrete slab, typically four inches thick. When it rains heavily or snow melts, the soil beneath becomes saturated and exerts upward pressure on the slab. Water under pressure finds the path of least resistance &mdash; cracks, the cove joint, or directly through porous concrete.</p>
            <p className='text-slate-600 leading-relaxed'>This is why the problem often appears seasonal. The water table rises in spring with snowmelt and heavy rain, and drops in late summer and fall.</p>
          </div>

          {/* Cause 2 */}
          <div className='border-l-4 border-cyan-500 pl-6'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='bg-cyan-100 text-cyan-800 text-sm font-bold px-3 py-1 rounded-full'>2</span>
              <h3 className='text-2xl font-bold text-slate-900'>Cove Joint Seepage</h3>
            </div>
            <p className='text-slate-600 leading-relaxed mb-3'>The cove joint &mdash; where the floor meets the wall &mdash; is the single most common entry point. Because the floor and wall were poured at different times, they never truly bonded. There&rsquo;s a tiny gap that runs the entire perimeter.</p>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4'>
              <p className='text-sm text-amber-800'><strong>Critical:</strong> You cannot permanently seal a cove joint from the inside. Caulk, hydraulic cement, and epoxy will hold temporarily, but water under pressure will eventually push through. The correct solution is managing the water with a <Link href='/articles/french-drain-cost' className='text-cyan-700 underline'>drainage system</Link>, not blocking it.</p>
            </div>
          </div>

          {/* Cause 3 */}
          <div className='border-l-4 border-cyan-500 pl-6'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='bg-cyan-100 text-cyan-800 text-sm font-bold px-3 py-1 rounded-full'>3</span>
              <h3 className='text-2xl font-bold text-slate-900'>Floor Cracks</h3>
            </div>
            <p className='text-slate-600 leading-relaxed mb-3'>Settlement, curing shrinkage, temperature changes, and soil movement all cause cracks in the slab over time. Most are cosmetic when dry, but when hydrostatic pressure builds, even hairline cracks become water entry points.</p>
            <p className='text-slate-600 leading-relaxed'>Small cracks (hairline to 1/8 inch) can be filled with <a href='https://amzn.to/4aZX6Vr' target='_blank' rel='noopener noreferrer nofollow' className='text-cyan-700 underline'>polyurethane crack injection kits</a>. But if the underlying pressure isn&rsquo;t addressed, water will find the next weakest point. See our guide on <Link href='/articles/types-of-foundation-cracks' className='text-cyan-700 underline'>types of foundation cracks</Link> for severity assessment.</p>
          </div>

          {/* Cause 4 */}
          <div className='border-l-4 border-cyan-500 pl-6'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='bg-cyan-100 text-cyan-800 text-sm font-bold px-3 py-1 rounded-full'>4</span>
              <h3 className='text-2xl font-bold text-slate-900'>Porous Concrete (No Visible Cracks)</h3>
            </div>
            <p className='text-slate-600 leading-relaxed mb-3'>Concrete is not waterproof. Water vapor can migrate directly through an intact slab via capillary action &mdash; especially in older homes where no vapor barrier was installed beneath the slab.</p>
            <div className='bg-slate-100 rounded-lg p-4 mt-4'>
              <p className='text-sm font-bold text-slate-800 mb-2'>The Plastic Sheet Test</p>
              <p className='text-sm text-slate-600'>Tape a 2-foot square piece of plastic sheeting to the floor, seal all edges, and leave for 24&ndash;48 hours. Moisture on the underside = vapor migration through the slab. Moisture on top = condensation from humid air (see our <Link href='/articles/basement-humidity-guide' className='text-cyan-700 underline'>humidity guide</Link>).</p>
            </div>
          </div>

          {/* Cause 5 */}
          <div className='border-l-4 border-cyan-500 pl-6'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='bg-cyan-100 text-cyan-800 text-sm font-bold px-3 py-1 rounded-full'>5</span>
              <h3 className='text-2xl font-bold text-slate-900'>Plumbing Leaks Under the Slab</h3>
            </div>
            <p className='text-slate-600 leading-relaxed'>Supply lines, drain lines, and sewer pipes often run beneath the basement floor. Clues include: a single wet area unrelated to rain, a warm spot on a cold floor, running water sounds with no fixtures on, and an unexplained water bill increase. Repair costs range from $500 to $4,000 depending on accessibility.</p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className='bg-slate-50 py-16'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>How to Fix It &mdash; and What It Costs</h2>
          <p className='text-slate-600 mb-8'>The right fix depends on the cause. Start with the cheapest solutions and escalate only if needed.</p>
          <div className='overflow-x-auto'>
            <table className='w-full bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='text-left p-4 font-bold'>Solution</th>
                  <th className='text-left p-4 font-bold'>DIY Cost</th>
                  <th className='text-left p-4 font-bold'>Professional Cost</th>
                  <th className='text-left p-4 font-bold'>Best For</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 text-sm font-medium text-slate-900'>Gutter cleaning &amp; downspout extensions</td>
                  <td className='p-4 text-sm text-slate-600'>$20&ndash;$100</td>
                  <td className='p-4 text-sm text-slate-600'>$150&ndash;$300</td>
                  <td className='p-4 text-sm text-slate-600'>Surface water issues</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 text-sm font-medium text-slate-900'>Regrading soil around foundation</td>
                  <td className='p-4 text-sm text-slate-600'>$50&ndash;$200</td>
                  <td className='p-4 text-sm text-slate-600'>$500&ndash;$3,000</td>
                  <td className='p-4 text-sm text-slate-600'>Negative grading</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 text-sm font-medium text-slate-900'>Floor crack injection (per crack)</td>
                  <td className='p-4 text-sm text-slate-600'>$50&ndash;$100</td>
                  <td className='p-4 text-sm text-slate-600'>$250&ndash;$500</td>
                  <td className='p-4 text-sm text-slate-600'>Isolated crack seepage</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 text-sm font-medium text-slate-900'>Sump pump installation</td>
                  <td className='p-4 text-sm text-slate-600'>$200&ndash;$500 (pump only)</td>
                  <td className='p-4 text-sm text-slate-600'>$800&ndash;$3,000</td>
                  <td className='p-4 text-sm text-slate-600'>No existing sump system</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 text-sm font-medium text-slate-900'>Interior drainage system</td>
                  <td className='p-4 text-sm text-slate-600'>Not recommended</td>
                  <td className='p-4 text-sm text-slate-600'>$3,000&ndash;$10,000</td>
                  <td className='p-4 text-sm text-slate-600'>Persistent hydrostatic pressure</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 text-sm font-medium text-slate-900'>Exterior waterproofing</td>
                  <td className='p-4 text-sm text-slate-600'>Not recommended</td>
                  <td className='p-4 text-sm text-slate-600'>$8,000&ndash;$25,000</td>
                  <td className='p-4 text-sm text-slate-600'>Severe or multi-source entry</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 text-sm font-medium text-slate-900'>Sub-slab plumbing repair</td>
                  <td className='p-4 text-sm text-slate-600'>Not recommended</td>
                  <td className='p-4 text-sm text-slate-600'>$500&ndash;$4,000</td>
                  <td className='p-4 text-sm text-slate-600'>Confirmed plumbing leak</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-sm text-slate-500 mt-4'>For detailed pricing by method and basement size, see our <Link href='/articles/basement-waterproofing-cost' className='text-cyan-700 underline'>waterproofing cost guide</Link>.</p>
        </div>
      </section>

      {/* Structural Concern */}
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Does This Mean My Foundation Is Failing?</h2>
        <p className='text-slate-600 leading-relaxed mb-6'>Not usually. Water through floor cracks or the cove joint is primarily a drainage problem, not a structural problem. However, watch for these warning signs that do require a structural engineer:</p>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-red-50 border border-red-200 rounded-xl p-6'>
            <p className='font-bold text-red-900 mb-2'>Floor Heaving</p>
            <p className='text-sm text-red-800'>Slab sections pushing upward from extreme hydrostatic pressure</p>
          </div>
          <div className='bg-red-50 border border-red-200 rounded-xl p-6'>
            <p className='font-bold text-red-900 mb-2'>Wall Cracks &gt; 1/4&quot;</p>
            <p className='text-sm text-red-800'>Horizontal or growing cracks signal structural movement. See our <Link href='/articles/bowing-basement-walls' className='text-red-700 underline'>bowing walls guide</Link>.</p>
          </div>
          <div className='bg-red-50 border border-red-200 rounded-xl p-6'>
            <p className='font-bold text-red-900 mb-2'>Bowing or Tilting Walls</p>
            <p className='text-sm text-red-800'>Same forces causing water entry are also stressing the structure</p>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className='bg-slate-50 py-16'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-8'>What the Timing Tells You</h2>
          <div className='space-y-6'>
            <div className='bg-white rounded-xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 mb-2'>Only After Heavy Rain or Snowmelt</h3>
              <p className='text-sm text-slate-600'>Hydrostatic pressure from a temporarily elevated water table. Responds well to drainage improvements (grading, gutters, downspouts) and interior drain tile with a <Link href='/articles/sump-pump-buying-guide' className='text-cyan-700 underline'>sump pump</Link>.</p>
            </div>
            <div className='bg-white rounded-xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 mb-2'>Constantly, Regardless of Weather</h3>
              <p className='text-sm text-slate-600'>Either a high year-round water table (common in coastal and river valley areas) requiring a permanent drainage system, or a plumbing leak requiring professional diagnosis.</p>
            </div>
            <div className='bg-white rounded-xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 mb-2'>Seasonally (Spring and Early Summer)</h3>
              <p className='text-sm text-slate-600'>Classic water table behavior. An <Link href='/articles/interior-vs-exterior-waterproofing' className='text-cyan-700 underline'>interior drainage system</Link> with sump pump handles this well and will sit idle during dry months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Pro */}
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-8'>Can I Fix This Myself or Do I Need a Pro?</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-green-50 border border-green-200 rounded-xl p-8'>
            <h3 className='text-xl font-bold text-green-900 mb-4'>DIY-Friendly</h3>
            <ul className='space-y-3 text-sm text-green-800'>
              <li className='flex items-start gap-2'><span className='text-green-600 mt-0.5'>&#10003;</span>Cleaning and extending gutters and downspouts</li>
              <li className='flex items-start gap-2'><span className='text-green-600 mt-0.5'>&#10003;</span>Regrading soil around the foundation</li>
              <li className='flex items-start gap-2'><span className='text-green-600 mt-0.5'>&#10003;</span>Water supply shutoff test (plumbing vs groundwater)</li>
              <li className='flex items-start gap-2'><span className='text-green-600 mt-0.5'>&#10003;</span>Plastic sheet moisture test on slab</li>
              <li className='flex items-start gap-2'><span className='text-green-600 mt-0.5'>&#10003;</span>Sealing small floor cracks with injection kits</li>
              <li className='flex items-start gap-2'><span className='text-green-600 mt-0.5'>&#10003;</span>Replacing a sump pump (if pit exists)</li>
              <li className='flex items-start gap-2'><span className='text-green-600 mt-0.5'>&#10003;</span>Adding battery backup to existing pump</li>
            </ul>
          </div>
          <div className='bg-red-50 border border-red-200 rounded-xl p-8'>
            <h3 className='text-xl font-bold text-red-900 mb-4'>Hire a Professional</h3>
            <ul className='space-y-3 text-sm text-red-800'>
              <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#10005;</span>Installing a new sump pit (cutting through slab)</li>
              <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#10005;</span>Interior perimeter drainage system</li>
              <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#10005;</span>Sub-slab plumbing leak repair</li>
              <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#10005;</span>Exterior waterproofing and excavation</li>
              <li className='flex items-start gap-2'><span className='text-red-600 mt-0.5'>&#10005;</span>Structural assessment of heaving floors or bowing walls</li>
            </ul>
            <p className='text-sm text-red-700 mt-4'>Need help finding a contractor? See our <Link href='/articles/how-to-hire-basement-waterproofing-contractor' className='underline'>hiring guide</Link>.</p>
          </div>
        </div>
      </section>

      {/* Prevention Checklist */}
      <section className='bg-slate-50 py-16'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-8'>How to Prevent Water from Coming Back</h2>
          <div className='space-y-4'>
            {[
              { title: 'Maintain gutters and downspouts', desc: 'Clean twice a year. Extend downspouts at least 6 feet from the foundation. Highest-impact, lowest-cost prevention measure.' },
              { title: 'Test your sump pump quarterly', desc: 'Pour water into the pit to confirm activation. Replace every 7-10 years. Add a battery backup if you don\'t have one.' },
              { title: 'Install water leak detectors', desc: 'Place near the sump pit, water heater, washing machine, and along the cove joint. Early detection saves thousands.' },
              { title: 'Monitor basement humidity', desc: 'Keep relative humidity below 50%. A quality dehumidifier running consistently is cheap insurance against mold.' },
              { title: 'Don\'t ignore small signs', desc: 'Efflorescence, faint musty smells, or a single damp patch after rain are early warnings. Addressing small problems is far cheaper.' },
            ].map((item, i) => (
              <div key={i} className='bg-white rounded-xl p-6 border border-slate-200 flex items-start gap-4'>
                <div className='w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-cyan-700 font-bold text-sm'>{i + 1}</span>
                </div>
                <div>
                  <h3 className='font-bold text-slate-900 mb-1'>{item.title}</h3>
                  <p className='text-sm text-slate-600'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-4'>Recommended Equipment</h2>
        <p className='text-slate-600 mb-10'>Tools for diagnosis, minor repairs, and ongoing prevention.</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <a href='https://amzn.to/4cZU9XA' target='_blank' rel='noopener noreferrer nofollow' className='bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group'>
            <div className='text-3xl mb-3'>📏</div>
            <h3 className='font-bold text-slate-900 group-hover:text-cyan-700 transition-colors'>NDI Pin Moisture Tester</h3>
            <p className='text-sm text-slate-600 mt-2'>Takes the guesswork out of diagnosing whether your slab, walls, or framing are actually wet.</p>
            <span className='text-xs text-cyan-700 font-medium mt-3 inline-block'>Check Price on Amazon &rarr;</span>
          </a>
          <a href='https://amzn.to/4aZX6Vr' target='_blank' rel='noopener noreferrer nofollow' className='bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group'>
            <div className='text-3xl mb-3'>🛠️</div>
            <h3 className='font-bold text-slate-900 group-hover:text-cyan-700 transition-colors'>Polyurethane Crack Injection Kit</h3>
            <p className='text-sm text-slate-600 mt-2'>Flexible foam expands to fill floor cracks. Worth keeping on hand for hairline cracks that seep occasionally.</p>
            <span className='text-xs text-cyan-700 font-medium mt-3 inline-block'>Check Price on Amazon &rarr;</span>
          </a>
          <a href='https://amzn.to/4rJUKkQ' target='_blank' rel='noopener noreferrer nofollow' className='bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group'>
            <div className='text-3xl mb-3'>💧</div>
            <h3 className='font-bold text-slate-900 group-hover:text-cyan-700 transition-colors'>Zoeller M53 Sump Pump</h3>
            <p className='text-sm text-slate-600 mt-2'>1/3 HP, 2,580 GPH. The most recommended sump pump by contractors nationwide. Your first line of defense.</p>
            <span className='text-xs text-cyan-700 font-medium mt-3 inline-block'>Check Price on Amazon &rarr;</span>
          </a>
          <a href='https://amzn.to/4tZpI9Z' target='_blank' rel='noopener noreferrer nofollow' className='bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group'>
            <div className='text-3xl mb-3'>📡</div>
            <h3 className='font-bold text-slate-900 group-hover:text-cyan-700 transition-colors'>YoLink Water Leak Sensor 4</h3>
            <p className='text-sm text-slate-600 mt-2'>LoRa-based leak sensor that alerts your phone even when you&rsquo;re not home. Place along the cove joint and near the sump pit.</p>
            <span className='text-xs text-cyan-700 font-medium mt-3 inline-block'>Check Price on Amazon &rarr;</span>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-slate-50 py-16'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            {[
              { q: 'Is water coming up through the basement floor dangerous?', a: 'The water itself usually isn\'t dangerous if it\'s groundwater. The bigger risks are mold growth (begins within 24-48 hours), damage to stored belongings, and long-term structural concerns if pressure causes floor heaving or wall movement. Sewage backup is a health hazard requiring immediate professional attention.' },
              { q: 'Can I just seal my basement floor to stop the water?', a: 'Sealing the floor surface addresses the symptom, not the cause. Waterproof coatings can reduce vapor transmission, but they will not hold against active hydrostatic pressure. The pressure wins eventually, and the coating peels or water finds another way in. Effective treatment means managing water below the slab.' },
              { q: 'Why does my basement floor only get wet in one spot?', a: 'A single wet spot unrelated to weather is most likely a plumbing leak under the slab. If it appears only during rain, it could be a localized crack aligning with a high-pressure point below, or water running down a wall and pooling at a floor low point.' },
              { q: 'Will a dehumidifier fix water coming through the floor?', a: 'No. A dehumidifier removes moisture from the air but cannot stop liquid water from entering through the slab. It\'s useful as a supporting tool after you\'ve addressed water entry, but it\'s not a substitute for drainage.' },
              { q: 'How much does it cost to fix water coming up through the floor?', a: 'Gutter improvements and regrading cost a few hundred dollars. A sump pump runs $800-$3,000. A full interior drainage system costs $3,000-$10,000. Exterior waterproofing can exceed $25,000. Start cheap and escalate only if the problem persists.' },
              { q: 'Should I waterproof my basement floor before finishing it?', a: 'Absolutely. Finishing without addressing water issues is one of the most expensive mistakes homeowners make. Any moisture through the slab gets trapped behind finishes, creating hidden mold. At minimum, do the plastic sheet test before framing a single wall.' },
            ].map((faq, i) => (
              <details key={i} className='bg-white rounded-xl border border-slate-200 overflow-hidden group'>
                <summary className='flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors'>
                  <span className='font-bold text-slate-900 pr-4'>{faq.q}</span>
                  <span className='text-slate-400 group-open:rotate-180 transition-transform text-xl flex-shrink-0'>&#9662;</span>
                </summary>
                <div className='px-6 pb-6'>
                  <p className='text-slate-600 text-sm leading-relaxed'>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-8'>Related Guides</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            { title: 'Complete Basement Waterproofing Guide', slug: 'complete-basement-waterproofing-guide', desc: 'Everything you need to know about keeping your basement dry.' },
            { title: 'Why Your Basement Still Floods With a Sump Pump', slug: 'why-basement-floods-with-sump-pump', desc: 'Diagnose why your sump pump isn\'t preventing flooding.' },
            { title: 'Interior vs Exterior Waterproofing', slug: 'interior-vs-exterior-waterproofing', desc: 'Compare the two main approaches to basement waterproofing.' },
            { title: 'French Drain Cost Guide', slug: 'french-drain-cost', desc: 'Interior and exterior French drain pricing by type and region.' },
            { title: 'Types of Foundation Cracks', slug: 'types-of-foundation-cracks', desc: 'Which cracks are cosmetic and which need immediate attention.' },
            { title: 'Basement Waterproofing Cost', slug: 'basement-waterproofing-cost', desc: 'Full cost breakdown by method and basement size.' },
          ].map((guide) => (
            <Link key={guide.slug} href={`/articles/${guide.slug}`} className='bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group'>
              <h3 className='font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-2'>{guide.title}</h3>
              <p className='text-sm text-slate-600'>{guide.desc}</p>
              <span className='text-xs text-cyan-700 font-medium mt-3 inline-block'>Read Guide &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Lead Form */}
      <section className='bg-slate-900 py-16'>
        <div className='max-w-4xl mx-auto px-6'>
          <LeadForm />
        </div>
      </section>

    </div>
  );
}
