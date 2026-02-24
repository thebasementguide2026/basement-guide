import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musty Basement Smell: Causes, Fixes, and How to Eliminate It for Good (2026) | The Basement Guide',
  description: 'Find out what causes that musty basement smell and how to get rid of it permanently. Step-by-step guide covering moisture sources, DIY fixes, long-term solutions, and when to call professionals.',
}

export default function MustyBasementSmellArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/Musty Basement Smell.jpg'
          alt='Damp basement with visible moisture and condensation on walls'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>Expanded Edition</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Musty Basement Smell<br />
            <span className='text-teal-400'>Causes, Fixes & Prevention</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            That damp, earthy odor almost always means excess moisture is at work. Find the source, fix it, and make the smell go away for good.
          </p>
          <div className='flex items-center space-x-4 mt-8'>
            <div className='w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold'>BG</div>
            <div className='text-white'>
              <p className='font-bold'>The Basement Guide</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <p className='text-xl text-slate-700 leading-relaxed mb-8'>
          That damp, earthy smell in your basement is extremely common, and it almost always means excess moisture is at work. Even without visible water, hidden dampness creates ideal conditions for mold, mildew, or decaying organic material to release musty microbial odors. Ignoring it can lead to bigger problems like mold growth, health issues, or damage to stored items and finishes.
        </p>
        <p className='text-xl text-slate-700 leading-relaxed mb-12'>
          The good news is that most musty smells are fixable with the right steps. This guide covers why it happens, how to find the source (a key step many skip), quick DIY fixes, longer-term solutions, and when to call professionals.
        </p>
        {/* Section 1 - What Causes the Smell */}
        <section className='mb-16'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase'>Understanding</span>
            <span className='text-slate-400 font-medium'>The Science</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>What Causes the Musty Smell?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            The odor comes from microbial volatile organic compounds (MVOCs) produced by mold, mildew, or bacteria thriving in damp, poorly ventilated spaces. Basements are perfect breeding grounds: cool, dark, low airflow, and often close to groundwater or condensation sources.
          </p>

          <h3 className='text-2xl font-bold text-slate-900 mb-4'>Common Culprits</h3>
          <div className='space-y-4 mb-8'>
            <div className='flex items-start space-x-3 bg-slate-50 p-4 rounded-xl'>
              <span className='text-teal-500 font-bold text-lg mt-0.5'>1</span>
              <div>
                <p className='font-bold text-slate-900'>High Humidity Above 60%</p>
                <p className='text-slate-600'>Causes condensation on cold concrete walls and floors, creating a constant moisture source.</p>
              </div>
            </div>
            <div className='flex items-start space-x-3 bg-slate-50 p-4 rounded-xl'>
              <span className='text-teal-500 font-bold text-lg mt-0.5'>2</span>
              <div>
                <p className='font-bold text-slate-900'>Minor Seepage</p>
                <p className='text-slate-600'>Water passing through foundation cracks, pores, or areas with poor exterior grading.</p>
              </div>
            </div>
            <div className='flex items-start space-x-3 bg-slate-50 p-4 rounded-xl'>
              <span className='text-teal-500 font-bold text-lg mt-0.5'>3</span>
              <div>
                <p className='font-bold text-slate-900'>Poor Exterior Drainage</p>
                <p className='text-slate-600'>Downspouts dumping water near the foundation, clogged gutters, and soil sloping toward the house.</p>
              </div>
            </div>
            <div className='flex items-start space-x-3 bg-slate-50 p-4 rounded-xl'>
              <span className='text-teal-500 font-bold text-lg mt-0.5'>4</span>
              <div>
                <p className='font-bold text-slate-900'>Trapped Moisture</p>
                <p className='text-slate-600'>Hidden dampness in insulation, drywall, wood framing, cardboard boxes, old carpet, or other stored items.</p>
              </div>
            </div>
            <div className='flex items-start space-x-3 bg-slate-50 p-4 rounded-xl'>
              <span className='text-teal-500 font-bold text-lg mt-0.5'>5</span>
              <div>
                <p className='font-bold text-slate-900'>Less Common Sources</p>
                <p className='text-slate-600'>Small plumbing leaks, dead pests in walls, or sewer gas from uncapped drains and cleanouts.</p>
              </div>
            </div>
          </div>

          <div className='bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-8'>
            <p className='font-bold text-amber-800 mb-1'>Key Indicator</p>
            <p className='text-amber-700'>If the smell worsens after rain or during humid weather, moisture is almost certainly the cause.</p>
          </div>
        </section>

        {/* Section 2 - Finding the Source */}
        <section className='mb-16'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase'>Critical</span>
            <span className='text-slate-400 font-medium'>Step 1</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Finding the Source of the Smell</h2>
          <p className='text-lg text-red-600 font-semibold mb-6'>Do not skip this step. Pinpointing the origin is crucial &mdash; otherwise you are just masking the problem.</p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>Here is how to track it down systematically:</p>

          <div className='space-y-6 mb-8'>
            <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
              <div className='flex items-center space-x-3 mb-3'>
                <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm'>1</span>
                <h3 className='text-xl font-bold text-slate-900'>Use Your Nose Like a Detective</h3>
              </div>
              <p className='text-slate-600 ml-11'>Walk slowly around the basement. The smell often gets stronger closer to the source. Note where it is most intense: near walls, corners, floor drains, pipes, windows, or stored items.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
              <div className='flex items-center space-x-3 mb-3'>
                <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm'>2</span>
                <h3 className='text-xl font-bold text-slate-900'>Check Humidity Levels</h3>
              </div>
              <p className='text-slate-600 ml-11'>Get a digital hygrometer ($10&ndash;$30) and monitor readings in different spots over a few days. Consistent readings above 55&ndash;60% point to excess moisture.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
              <div className='flex items-center space-x-3 mb-3'>
                <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm'>3</span>
                <h3 className='text-xl font-bold text-slate-900'>Inspect for Visible Clues</h3>
              </div>
              <ul className='text-slate-600 ml-11 space-y-2'>
                <li>&bull; White powdery efflorescence on concrete (mineral deposits from water passing through)</li>
                <li>&bull; Dark spots, fuzzy growth, or discoloration on walls, baseboards, or corners</li>
                <li>&bull; Bubbling or peeling paint, warped wood, or damp-feeling surfaces</li>
                <li>&bull; Foggy windows or condensation on pipes</li>
              </ul>
            </div>

            <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
              <div className='flex items-center space-x-3 mb-3'>
                <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm'>4</span>
                <h3 className='text-xl font-bold text-slate-900'>Check Hidden Areas</h3>
              </div>
              <p className='text-slate-600 ml-11'>Move boxes, look behind shelves, under stairs, inside closets, or behind drywall if accessible. Mold thrives in dark, undisturbed spots.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
              <div className='flex items-center space-x-3 mb-3'>
                <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm'>5</span>
                <h3 className='text-xl font-bold text-slate-900'>Test for Plumbing or Sewer Issues</h3>
              </div>
              <p className='text-slate-600 ml-11'>Sniff near floor drains, cleanouts, or toilets. A stronger sewer-like smell could indicate a dry trap (pour water down drains) or a leak.</p>
            </div>

            <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
              <div className='flex items-center space-x-3 mb-3'>
                <span className='w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm'>6</span>
                <h3 className='text-xl font-bold text-slate-900'>Use a Moisture Meter</h3>
              </div>
              <p className='text-slate-600 ml-11'>Affordable models ($20&ndash;$50) can detect hidden dampness in walls or floors without tearing things open. Great for confirming seepage.</p>
            </div>
          </div>

          <div className='bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl'>
            <p className='font-bold text-teal-800 mb-1'>Pro Tip</p>
            <p className='text-teal-700'>Once you locate the hotspot, you know exactly where to focus your fixes. This saves time, money, and prevents recurring problems.</p>
          </div>
        </section>

        {/* Section 3 - Quick Fixes */}
        <section className='mb-16'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase'>Action</span>
            <span className='text-slate-400 font-medium'>Quick Fixes</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Quick Fixes to Reduce or Eliminate the Smell</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>Start here for fast results. Many homeowners notice improvement within days.</p>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Run a Dehumidifier</h3>
              <p className='text-slate-600'>Get a 50-pint or larger unit and run it continuously, aiming for 40&ndash;50% humidity. Connect a drain hose or empty the tank regularly. This alone often cuts the smell significantly within a week.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Improve Airflow</h3>
              <p className='text-slate-600'>Open windows on dry days, add box fans, or install an exhaust fan. Circulating air helps dry things out and disperse trapped odors.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Fix Exterior Basics</h3>
              <p className='text-slate-600'>Extend downspouts at least 10 feet away from the foundation, regrade soil to slope away from the house, and clean gutters thoroughly.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Remove Moisture Sources</h3>
              <p className='text-slate-600'>Take out damp boxes, fabrics, and old rugs. Store items in sealed plastic bins elevated off the floor on shelves or pallets.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Clean Surfaces</h3>
              <p className='text-slate-600'>Scrub walls and floors with a 1:3 vinegar-to-water solution or mild bleach solution. Use a HEPA vacuum to capture mold spores.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Absorb Odors</h3>
              <p className='text-slate-600'>Place bowls of baking soda, activated charcoal, or coffee grounds around the basement for a few days. Replace as needed until the smell subsides.</p>
            </div>
          </div>
        </section>

        {/* Section 4 - Long-Term Solutions */}
        <section className='mb-16'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase'>Permanent</span>
            <span className='text-slate-400 font-medium'>Long-Term Solutions</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>Long-Term Solutions for Permanent Results</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>If quick fixes help but the smell keeps returning, these permanent solutions address the root cause.</p>

          <div className='space-y-4 mb-8'>
            <div className='flex items-start space-x-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm'>
              <span className='flex-shrink-0 w-10 h-10 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center font-bold'>1</span>
              <div>
                <h3 className='text-lg font-bold text-slate-900 mb-1'>Whole-Basement Dehumidifier</h3>
                <p className='text-slate-600'>Install a unit tied to your HVAC system for consistent, automated humidity control throughout the entire space.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm'>
              <span className='flex-shrink-0 w-10 h-10 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center font-bold'>2</span>
              <div>
                <h3 className='text-lg font-bold text-slate-900 mb-1'>Crystalline Waterproofing or Sealant</h3>
                <p className='text-slate-600'>Apply professional-grade waterproofing products to walls and floors to block moisture migration through concrete.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm'>
              <span className='flex-shrink-0 w-10 h-10 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center font-bold'>3</span>
              <div>
                <h3 className='text-lg font-bold text-slate-900 mb-1'>Interior Perimeter Drains and Sump Pump</h3>
                <p className='text-slate-600'>If seepage is ongoing, a perimeter drainage system combined with a reliable sump pump is the gold standard for keeping water out.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm'>
              <span className='flex-shrink-0 w-10 h-10 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center font-bold'>4</span>
              <div>
                <h3 className='text-lg font-bold text-slate-900 mb-1'>Improved Insulation and Vapor Barriers</h3>
                <p className='text-slate-600'>Proper insulation paired with vapor barriers stops condensation at the source and prevents moisture from reaching interior surfaces.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm'>
              <span className='flex-shrink-0 w-10 h-10 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center font-bold'>5</span>
              <div>
                <h3 className='text-lg font-bold text-slate-900 mb-1'>Smart Humidity Sensors</h3>
                <p className='text-slate-600'>Install smart sensors that send alerts to your phone when humidity spikes, allowing you to catch problems before they create odors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - When to Call Professionals */}
        <section className='mb-16'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase'>Warning</span>
            <span className='text-slate-400 font-medium'>Professional Help</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>When to Call Professionals</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            If the smell persists after 2&ndash;4 weeks of consistent DIY efforts, or you discover visible mold, efflorescence, or structural warning signs, it is time to bring in the experts.
          </p>

          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div className='bg-red-50 border border-red-200 rounded-2xl p-6 text-center'>
              <p className='text-3xl font-black text-red-600 mb-2'>$300&ndash;$600</p>
              <p className='text-slate-700 font-semibold'>Mold Inspection</p>
              <p className='text-slate-500 text-sm mt-1'>Professional testing and identification</p>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center'>
              <p className='text-3xl font-black text-teal-600 mb-2'>Often Free</p>
              <p className='text-slate-700 font-semibold'>Waterproofing Assessment</p>
              <p className='text-slate-500 text-sm mt-1'>Many contractors offer free evaluations</p>
            </div>
            <div className='bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center'>
              <p className='text-3xl font-black text-amber-600 mb-2'>Varies</p>
              <p className='text-slate-700 font-semibold'>Mold Remediation</p>
              <p className='text-slate-500 text-sm mt-1'>Do not DIY large affected areas</p>
            </div>
          </div>
        </section>

        {/* Section 6 - Prevention Tips */}
        <section className='mb-16'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase'>Maintenance</span>
            <span className='text-slate-400 font-medium'>Prevention</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>Prevention Tips to Keep the Smell Away</h2>
          <div className='bg-slate-50 rounded-2xl p-8'>
            <ul className='space-y-4'>
              <li className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700'><strong>Maintain 40&ndash;50% humidity year-round</strong> using a properly sized dehumidifier.</p>
              </li>
              <li className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700'><strong>Inspect after every heavy rain</strong> for new signs of seepage or moisture.</p>
              </li>
              <li className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700'><strong>Keep items off the floor</strong> and store belongings in sealed plastic bins on shelves.</p>
              </li>
              <li className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700'><strong>Ventilate regularly</strong> and ensure adequate airflow throughout the basement.</p>
              </li>
              <li className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold mt-0.5'>&#10003;</span>
                <p className='text-slate-700'><strong>Use mold-resistant paints and sealants</strong> if finishing or renovating your basement.</p>
              </li>
            </ul>
          </div>

          <div className='bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl mt-8'>
            <p className='font-bold text-teal-800 mb-1'>Bottom Line</p>
            <p className='text-teal-700'>A musty smell is almost always a moisture signal. Find the source, reduce humidity, and address drainage for lasting freshness. If your basement smells musty right now, grab a hygrometer and start investigating.</p>
          </div>
        </section>
      </article>

      {/* Related Guides */}
      <section className='max-w-4xl mx-auto px-6 pb-16'>
        <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          <Link href='/articles/how-to-prevent-basement-mold' className='block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>How to Prevent Basement Mold</h3>
            <p className='text-slate-600'>Critical steps to stop mold before it starts and protect your family.</p>
          </Link>
          <Link href='/articles/dehumidifier-myths' className='block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>Dehumidifier Myths &amp; Proper Sizing</h3>
            <p className='text-slate-600'>Why your 30-pint unit is failing and how to choose the right capacity.</p>
          </Link>
          <Link href='/articles/mold-remediation-cost' className='block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>Mold Remediation Cost Guide</h3>
            <p className='text-slate-600'>What to expect for professional mold removal pricing in 2026.</p>
          </Link>
          <Link href='/articles/crystalline-waterproofing' className='block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>Crystalline Waterproofing Guide</h3>
            <p className='text-slate-600'>How crystalline coatings seal concrete from the inside out.</p>
          </Link>
          <Link href='/articles/french-drain-cost' className='block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>French Drain Cost Guide</h3>
            <p className='text-slate-600'>Everything you need to know about interior and exterior French drain pricing.</p>
          </Link>
          <Link href='/articles/basement-insulation-guide' className='block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>Basement Insulation Guide</h3>
            <p className='text-slate-600'>Proper insulation prevents condensation and works hand-in-hand with humidity control.</p>
          </Link>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-10 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Get Expert Help With Your Musty Basement</h2>
          <p className='text-teal-100 text-lg mb-8 max-w-2xl mx-auto'>
            Connect with pre-vetted waterproofing and mold remediation professionals in your area. Free assessments, no obligation.
          </p>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
