import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bowing Basement Walls: Causes, Signs, Repair Costs & Fixes | The Basement Guide',
  description: 'Complete 2026 guide to bowing basement walls. Causes like hydrostatic pressure, early warning signs, repair methods from carbon fiber straps to wall anchors, and updated costs averaging $4,500 nationally.',
}

export default function BowingWallsArticle() {
  return (
    <div className='bg-white min-h-screen'>
            <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What causes bowing basement walls?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Hydrostatic pressure from wet soil is the main culprit, along with expansive clays and frost heave.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does bowing basement wall repair cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Around $4,500 on average, or $150–$400 per linear foot, depending on the method.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I fix bowing basement walls myself?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Only minor cases with straps if you are experienced. Most need pros to avoid further damage.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are bowing foundation walls dangerous?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. They can lead to collapse, mold growth, and lost home value of 10–20 percent.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long do repairs last?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '15–30 years with warranties. Pair with waterproofing for best results.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What if my basement wall is bowing inward slightly?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Monitor it. If under 1 inch and stable, reinforce soon to prevent worsening.',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to Fix Bowing Basement Walls',
              description: 'Step-by-step guide to repairing bowed basement walls, ranked by severity.',
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Install Carbon Fiber Straps',
                  text: 'Best for minor bowing under 2 inches. High-strength strips bond to the wall for reinforcement. Quick install in 1-2 days with no excavation required.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Install Wall Anchors',
                  text: 'For moderate bowing. Steel plates inside connect to anchors buried outside, pulling the wall straight over time.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Install Steel I-Beams or Bracing',
                  text: 'Vertical beams bolted to the floor and joists hold severe bowing in place. Often used with anchors for extra support.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Full Wall Replacement',
                  text: 'For extreme cases with bowing over 3 inches. Requires excavation and full wall rebuild.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Combine with Waterproofing',
                  text: 'Pair any repair with French drains or sump pumps to address hydrostatic pressure, the root cause.',
                },
              ],
            },
          ]),
        }}
      />
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/bowed%20walled.jpg'
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
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed'>
            A bowing basement wall is more than an eyesore. It is a red flag for serious foundation problems that can lead to structural failure if ignored.
          </p>
          <div className='flex items-center space-x-4 text-sm text-slate-400'>
            <span className='bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium'>BG</span>
            <span className='font-medium'>The Basement Guide Staff</span>
            <span className='text-slate-600'>|</span>
            <span>Updated Feb 2026 &bull; 22 min read</span>
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
                Homeowners are dealing with bowed foundation walls more often due to extreme weather, poor drainage, and aging homes. Left unchecked, bowing basement walls can cost thousands in repairs and drop your home value by 10 to 20 percent during inspections. This complete guide covers everything you need to know about bowing basement walls, including common causes like hydrostatic pressure, early signs such as horizontal cracks, proven repair methods from carbon fiber straps to wall anchors, and updated 2026 costs averaging $4,500 nationally.
              </p>
              <div className='bg-red-50 border-l-4 border-red-500 rounded-lg p-5 mt-6'>
                <p className='text-red-800 font-semibold'>If you spot inward bowing or cracks, act fast. Delaying can turn a $2,000 fix into a $15,000 nightmare.</p>
              </div>
            </section>

            {/* What Are Bowing Basement Walls */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>What Are Bowing Basement Walls?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Bowing basement walls happen when the foundation walls curve or lean inward, often in the middle like a belly. This is common in block or poured concrete basements built before the 1980s. Bowed basement walls and bowing foundation walls are terms pros use interchangeably, but they signal the same issue: excessive lateral pressure weakening your home's base.
              </p>
              <p className='text-slate-700 leading-relaxed'>
                A bowing basement wall compromises stability, invites water leaks, and risks collapse in severe cases. With heavier rains and freeze-thaw cycles, these problems are spiking in areas like the Midwest and Northeast.
              </p>
            </section>

            {/* Common Causes */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Common Causes of Bowing Basement Walls</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>
                Understanding the root causes of bowed basement walls helps prevent them. Based on 2026 reports from Groundworks and EverDry, here are the top culprits:
              </p>

              <div className='space-y-6'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Hydrostatic Pressure</h3>
                  <p className='text-slate-700 leading-relaxed'>
                    The #1 cause of basement wall bowing inward. Saturated soil outside pushes against the wall with tons of force. Poor grading or clogged gutters make it worse. For more on how moisture and pressure affect masonry walls, check out this <a href='https://www.nps.gov/articles/common-problems-with-brick-masonry.htm' target='_blank' rel='noopener noreferrer' className='text-indigo-600 underline hover:text-indigo-800'>NPS guide on common brick masonry problems</a>.
                  </p>
                </div>

                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Expansive Clay Soil</h3>
                  <p className='text-slate-700 leading-relaxed'>
                    Soils that swell with water (common in 40 percent of US homes) exert massive pressure during wet seasons.
                  </p>
                </div>

                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Frost Heave</h3>
                  <p className='text-slate-700 leading-relaxed'>
                    In cold climates, frozen ground expands and shoves walls inward.
                  </p>
                </div>

                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Poor Construction or Aging</h3>
                  <p className='text-slate-700 leading-relaxed'>
                    Weak rebar, thin walls, or no proper drainage in older homes lead to gradual bowing.
                  </p>
                </div>

                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Tree Roots or Heavy Loads</h3>
                  <p className='text-slate-700 leading-relaxed'>
                    Nearby trees or added structures like decks can add uneven pressure.
                  </p>
                </div>
              </div>

              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-indigo-900'><strong>Pro tip:</strong> Check your yard after rain. If water pools near the foundation, that is a fast track to bowing foundation walls.</p>
              </div>
            </section>

            {/* Signs */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Signs of Bowing Basement Walls</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>
                Catch bowing basement walls early to save on repair costs. Look for these red flags:
              </p>
              <div className='bg-white rounded-lg border border-slate-200 shadow-sm'>
                <ul className='divide-y divide-slate-100'>
                  <li className='p-4 flex items-start gap-3'><span className='text-red-500 font-bold text-lg'>!</span><span className='text-slate-700'>Horizontal cracks midway up the wall, often 1/8 inch or wider</span></li>
                  <li className='p-4 flex items-start gap-3'><span className='text-red-500 font-bold text-lg'>!</span><span className='text-slate-700'>Inward leaning or bulging in the center of the wall</span></li>
                  <li className='p-4 flex items-start gap-3'><span className='text-red-500 font-bold text-lg'>!</span><span className='text-slate-700'>Sticking doors/windows upstairs or uneven floors</span></li>
                  <li className='p-4 flex items-start gap-3'><span className='text-red-500 font-bold text-lg'>!</span><span className='text-slate-700'>Musty smells, mold, or water stains from leaks</span></li>
                  <li className='p-4 flex items-start gap-3'><span className='text-red-500 font-bold text-lg'>!</span><span className='text-slate-700'>Vertical or stair-step cracks at corners</span></li>
                </ul>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-indigo-900'><strong>How to check:</strong> Use a plumb line or level. If the wall is off by more than 1 inch over 8 feet, call a pro. In 2026, smart home sensors like hygrometers can alert you to rising humidity from hidden cracks.</p>
              </div>
            </section>

            {/* Repair Methods */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>How to Fix Bowing Basement Walls: Repair Methods</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>
                Fixing bowed basement walls requires professional help in most cases. DIY is risky and can void warranties. Here are the best repair options, ranked by severity:
              </p>

              <div className='space-y-6'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-sm'>1</span>
                    <h3 className='text-xl font-bold text-slate-900'>Carbon Fiber Straps</h3>
                  </div>
                  <p className='text-slate-700 leading-relaxed mb-3'>
                    Best for minor bowing under 2 inches. High-strength strips bond to the wall for reinforcement. Quick install in 1-2 days with no excavation required.
                  </p>
                  <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                    <p className='text-sm text-slate-700'><span className='mr-1'>&#128204;</span><strong>Our Pick:</strong> <a href='https://amzn.to/4tZN8fw' target='_blank' rel='noopener noreferrer sponsored' className='text-indigo-600 underline hover:text-indigo-800'>Carbon Fiber Straps</a> &ndash; 10 times stronger than steel in tension, these are the go-to for early-stage bowing repair.</p>
                  </div>
                </div>

                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-sm'>2</span>
                    <h3 className='text-xl font-bold text-slate-900'>Wall Anchors (Earth or Helical Tiebacks)</h3>
                  </div>
                  <p className='text-slate-700 leading-relaxed'>
                    For moderate bowing. Steel plates inside connect to anchors buried outside, pulling the wall straight over time. Great for basement wall bowing inward fixes.
                  </p>
                </div>

                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-sm'>3</span>
                    <h3 className='text-xl font-bold text-slate-900'>Steel I-Beams or Bracing</h3>
                  </div>
                  <p className='text-slate-700 leading-relaxed'>
                    Vertical beams bolted to the floor and joists hold severe bowing in place. Often used with anchors for extra support.
                  </p>
                </div>

                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-sm'>4</span>
                    <h3 className='text-xl font-bold text-slate-900'>Full Wall Replacement</h3>
                  </div>
                  <p className='text-slate-700 leading-relaxed'>
                    Rare, for extreme cases with bowing over 3 inches. Requires excavation and full wall rebuild &ndash; disruptive and pricey.
                  </p>
                </div>

                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-full text-sm'>5</span>
                    <h3 className='text-xl font-bold text-slate-900'>Combination with Waterproofing</h3>
                  </div>
                  <p className='text-slate-700 leading-relaxed'>
                    Pair any repair with French drains or sump pumps to address hydrostatic pressure, the root cause. From 2026 Angi data, 70 percent of fixes use anchors or straps for long-term stability with 15&ndash;30 year warranties.
                  </p>
                </div>
              </div>
            </section>

            {/* Cost Breakdown */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>2026 Bowing Basement Wall Repair Costs</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>
                Bowing basement wall repair costs average $4,500 nationally in 2026, with a range of $350 to $12,000. Prices depend on wall length (per linear foot), method, and severity. Here is a breakdown from HomeGuide and Angi:
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
                  <thead>
                    <tr className='bg-slate-800 text-white text-sm'>
                      <th className='p-3 text-left'>Repair Method</th>
                      <th className='p-3 text-left'>Average Cost</th>
                      <th className='p-3 text-left'>Cost per Linear Ft</th>
                      <th className='p-3 text-left'>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Carbon Fiber Straps</td>
                      <td className='p-3'>$2,000 &ndash; $5,000</td>
                      <td className='p-3'>$100 &ndash; $250</td>
                      <td className='p-3'>Minor bowing</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Wall Anchors (Helical)</td>
                      <td className='p-3'>$3,000 &ndash; $8,000</td>
                      <td className='p-3'>$150 &ndash; $400</td>
                      <td className='p-3'>Moderate to severe</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Steel I-Beams</td>
                      <td className='p-3'>$4,000 &ndash; $10,000</td>
                      <td className='p-3'>$200 &ndash; $500</td>
                      <td className='p-3'>Severe bowing</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Full Wall Rebuild</td>
                      <td className='p-3'>$10,000 &ndash; $25,000</td>
                      <td className='p-3'>$500 &ndash; $1,250</td>
                      <td className='p-3'>Extreme damage</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Add-On Waterproofing</td>
                      <td className='p-3'>$1,500 &ndash; $4,000</td>
                      <td className='p-3'>$75 &ndash; $200</td>
                      <td className='p-3'>Preventing recurrence</td>
                    </tr>
                    <tr className='bg-indigo-50 font-semibold'>
                      <td className='p-3'>National Average</td>
                      <td className='p-3' colSpan={3}>$4,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-sm text-slate-500 mt-4'>
                Factors raising costs: deep excavation, urban access issues, or combining with foundation lifting. In high-cost areas like the coasts, add 20&ndash;30 percent. Insurance rarely covers unless from a sudden event like flooding.
              </p>
            </section>

            {/* Prevention Tips */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Prevention Tips for Bowing Foundation Walls</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>
                Stop bowing basement walls before they start with these practical steps:
              </p>
              <div className='bg-white rounded-lg border border-slate-200 shadow-sm p-6'>
                <ul className='space-y-4 text-slate-700'>
                  <li className='flex items-start gap-3'><span className='text-indigo-600 font-bold'>1.</span> Maintain gutters and downspouts to direct water 5&ndash;10 feet away.</li>
                  <li className='flex items-start gap-3'><span className='text-indigo-600 font-bold'>2.</span> Grade soil to slope away from the foundation (1 inch per foot).</li>
                  <li className='flex items-start gap-3'><span className='text-indigo-600 font-bold'>3.</span> Install window wells and covers to block debris.</li>
                  <li className='flex items-start gap-3'><span className='text-indigo-600 font-bold'>4.</span> Use a dehumidifier to keep the basement humidity under 50 percent.</li>
                  <li className='flex items-start gap-3'><span className='text-indigo-600 font-bold'>5.</span> Plant trees at least 20 feet from the house.</li>
                </ul>
              </div>
              <p className='text-sm text-slate-500 mt-4'>
                Annual inspections cost $100&ndash;$300 but catch issues early, saving thousands on bowing basement wall repair costs.
              </p>
            </section>

            {/* When to Call a Pro */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>When to Call a Professional</h2>
              <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
                <p className='text-slate-700 leading-relaxed'>
                  If bowing is over 1 inch or cracks are growing, skip DIY and get a free inspection. Look for certified pros with ICC credentials. Apps like Angi connect you to vetted experts for fixing bowed basement walls. <strong className='text-red-800'>Do not ignore it &ndash; a collapsed wall can cost $50,000+ in emergency fixes.</strong>
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>What causes bowing basement walls?</h3>
                  <p className='text-slate-700'>Hydrostatic pressure from wet soil is the main culprit, along with expansive clays and frost heave.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>How much does bowing basement wall repair cost?</h3>
                  <p className='text-slate-700'>Around $4,500 on average, or $150&ndash;$400 per linear foot, depending on the method.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Can I fix bowing basement walls myself?</h3>
                  <p className='text-slate-700'>Only minor cases with straps if you are experienced. Most need pros to avoid further damage.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Are bowing foundation walls dangerous?</h3>
                  <p className='text-slate-700'>Yes. They can lead to collapse, mold growth, and lost home value of 10&ndash;20 percent.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>How long do repairs last?</h3>
                  <p className='text-slate-700'>15&ndash;30 years with warranties. Pair with waterproofing for best results.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>What if my basement wall is bowing inward slightly?</h3>
                  <p className='text-slate-700'>Monitor it. If under 1 inch and stable, reinforce soon to prevent worsening.</p>
                </div>
              </div>
            </section>

            {/* Glossary */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Quick Glossary of Bowing Basement Wall Terms</h2>
              <div className='bg-slate-50 rounded-lg border border-slate-200 p-6'>
                <dl className='space-y-4'>
                  <div><dt className='font-semibold text-slate-900'>Hydrostatic Pressure</dt><dd className='text-slate-700'>Water force in soil pushing on walls.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Wall Anchors</dt><dd className='text-slate-700'>Systems that pull bowed walls straight.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Carbon Fiber Straps</dt><dd className='text-slate-700'>Strong strips that reinforce without digging.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Frost Heave</dt><dd className='text-slate-700'>Ground expansion from freezing water.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Horizontal Cracks</dt><dd className='text-slate-700'>Key sign of bowing stress.</dd></div>
                </dl>
              </div>
            </section>

            {/* Final Advice */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>Final Advice</h2>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-6'>
                <p className='text-slate-700 leading-relaxed'>
                  Bowing basement walls are a common but fixable issue. Address causes like poor drainage first, then choose a repair like wall anchors for lasting stability. With 2026 costs averaging $4,500, it is a smart investment that boosts safety and resale value. Spot signs of bowed foundation walls? Grab those free local quotes from vetted pros.
                </p>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className='lg:col-span-4 space-y-8'>
            <div className='bg-slate-50 rounded-lg p-6 border border-slate-200 sticky top-8'>
              <h3 className='text-lg font-bold text-slate-900 mb-4'>Get a Professional Assessment</h3>
              <p className='text-sm text-slate-600 mb-4'>Structural repairs are not a DIY project. Get a free, no-obligation quote from a structural specialist.</p>
              <Link href='/contact' className='block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors'>
                Find Foundation Pros Near Me &rarr;
              </Link>
            </div>

            <div className='bg-white rounded-lg p-6 border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-3'>Related Guides</h4>
              <ul className='space-y-3 text-sm'>
                <li><Link href='/articles/types-of-foundation-cracks' className='text-indigo-600 hover:underline'>Types of Foundation Cracks</Link></li>
                <li><Link href='/articles/foundation-crack-repair-cost' className='text-indigo-600 hover:underline'>Foundation Crack Repair Cost 2026</Link></li>
                <li><Link href='/articles/complete-basement-waterproofing-guide' className='text-indigo-600 hover:underline'>Complete Waterproofing Guide</Link></li>
                <li><Link href='/articles/basement-efflorescence' className='text-indigo-600 hover:underline'>Basement Efflorescence Explained</Link></li>
                <li><Link href='/articles/old-house-basements' className='text-indigo-600 hover:underline'>Old House Basements Guide</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

            {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>Get a Professional Foundation Inspection</h2>
          <p className='text-slate-300 mb-8 text-lg'>Not sure if your wall is bowing? Connect with certified foundation repair specialists in your area for a free assessment.</p>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
