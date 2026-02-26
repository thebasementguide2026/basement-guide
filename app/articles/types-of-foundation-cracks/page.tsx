import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Types of Foundation Cracks: What Each One Means (2026) | The Basement Guide',
  description: 'Not all foundation cracks are equal. Learn the four main types, what causes them, risk levels, when to DIY vs call a pro, and three proven repair products for 2026.',
}

export default function FoundationCracksArticle() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/foundation-crack-closeup.jpg'
          alt='Close up of a structural foundation crack on a basement wall'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-amber-500'></div>
            <span className='text-amber-400 font-bold tracking-[0.2em] text-sm uppercase'>Diagnostic Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter max-w-4xl'>
            Types of Foundation<br />
            <span className='text-amber-400'>Cracks 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            What each crack means, how serious it really is, and exactly what to do next. Plus three proven repair products for DIY fixes.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-medium'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 · 15 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <div className='prose prose-lg prose-slate max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed mb-8'>
            Finding a crack in your foundation can stop you in your tracks. One minute everything seems fine, the next you notice a line running down the wall and start wondering if your house is sinking.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-8'>
            The reality is that nearly every foundation develops cracks over time. Concrete shrinks when it cures, soil moves with moisture changes, and water pressure pushes against walls. Most cracks are minor and easy to handle, but a few are warning signs that need quick attention.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-12'>
            This guide explains the four main types of foundation cracks, what causes them, how serious they really are, and exactly what to do next. You will also find three proven, highly rated repair products that homeowners and contractors actually use successfully in 2026.
          </p>

          {/* Quick Diagnosis Table */}
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Reference</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Quick Guide</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Quick Diagnosis Table</h2>
          <div className='overflow-x-auto mb-12'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='px-6 py-4 text-left font-semibold'>Crack Type</th>
                  <th className='px-6 py-4 text-left font-semibold'>Direction</th>
                  <th className='px-6 py-4 text-left font-semibold'>Typical Cause</th>
                  <th className='px-6 py-4 text-left font-semibold'>Risk Level</th>
                  <th className='px-6 py-4 text-left font-semibold'>Action Needed</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Hairline / Shrinkage</td>
                  <td className='px-6 py-4'>Vertical or random</td>
                  <td className='px-6 py-4'>Concrete curing and drying</td>
                  <td className='px-6 py-4'><span className='bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium'>Low</span></td>
                  <td className='px-6 py-4'>Monitor and seal</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Settlement</td>
                  <td className='px-6 py-4'>Vertical</td>
                  <td className='px-6 py-4'>Uneven soil settling</td>
                  <td className='px-6 py-4'><span className='bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-medium'>Moderate</span></td>
                  <td className='px-6 py-4'>Monitor closely</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Stair-Step</td>
                  <td className='px-6 py-4'>Diagonal steps</td>
                  <td className='px-6 py-4'>Differential settlement</td>
                  <td className='px-6 py-4'><span className='bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium'>High</span></td>
                  <td className='px-6 py-4'>Call a professional</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 font-medium'>Horizontal</td>
                  <td className='px-6 py-4'>Horizontal</td>
                  <td className='px-6 py-4'>Hydrostatic pressure / bowing</td>
                  <td className='px-6 py-4'><span className='bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium'>Very High</span></td>
                  <td className='px-6 py-4'>Urgent professional help</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 1 - Vertical Cracks */}
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Low Risk</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Most Common</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>1. Vertical Cracks — The Most Common</h2>
          <p className='text-lg text-slate-600 leading-relaxed mb-4'>
            These are straight up-and-down cracks, usually 1/16 to 1/8 inch wide. They appear in the first few years as the concrete cures and the house settles naturally.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-4'>
            <strong>What to do:</strong> If the crack is hairline, not growing, and not leaking, it is almost always cosmetic. Clean it out and seal it to stop water from getting inside.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-12'>
            <strong>Recommended product:</strong>{' '}
            <a href='https://amzn.to/4sdUWJ2' target='_blank' rel='noopener noreferrer nofollow' className='text-teal-600 underline hover:text-teal-800'>Emecole Metro DIY Basement Wall Crack Repair Kit</a>{' '}
            — one of the most popular epoxy kits available. It comes with everything you need (injection ports, epoxy, and instructions) and works well for cracks up to 1/4 inch wide.
          </p>

          {/* Section 2 - Settlement Cracks */}
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Moderate Risk</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Monitor</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>2. Settlement Cracks — Vertical but Wider</h2>
          <p className='text-lg text-slate-600 leading-relaxed mb-4'>
            These look similar to shrinkage cracks but are wider (1/4 inch or more) and one side may be slightly higher than the other. They happen when part of the foundation settles more than another.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-12'>
            <strong>What to do:</strong> Mark the ends with a pencil and date. Check every month. If it grows or starts leaking, call a foundation specialist. Minor ones can often be fixed with epoxy injection.
          </p>

          {/* Section 3 - Stair-Step Cracks */}
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>High Risk</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Block Foundations</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>3. Stair-Step Cracks — Common in Block Foundations</h2>
          <p className='text-lg text-slate-600 leading-relaxed mb-4'>
            These follow the mortar joints in a staircase pattern. They usually mean one section of the foundation is sinking faster than the rest.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-12'>
            <strong>What to do:</strong> These are more serious. Get a professional evaluation. Many can be stabilized with carbon fiber straps or wall anchors without major excavation. See our <Link href='/articles/bowing-basement-walls' className='text-teal-600 underline hover:text-teal-800'>bowing basement walls guide</Link> for more on structural repair methods.
          </p>

          {/* Section 4 - Horizontal Cracks */}
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Very High Risk</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Urgent</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>4. Horizontal Cracks — The Serious Red Flag</h2>
          <p className='text-lg text-slate-600 leading-relaxed mb-4'>
            A horizontal crack running across the wall is the one that requires fast action. It usually means the wall is bowing inward from soil or <Link href='/articles/complete-basement-waterproofing-guide' className='text-teal-600 underline hover:text-teal-800'>hydrostatic water pressure</Link>.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-12'>
            <strong>What to do:</strong> Call a foundation repair company right away. Left untreated, horizontal cracks can lead to wall failure. Common fixes include wall anchors or carbon fiber reinforcement.
          </p>

          {/* Monitoring Section */}
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>DIY</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Monitoring</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>How to Monitor Cracks at Home</h2>
          <ul className='space-y-3 mb-8'>
            <li className='flex items-start gap-3 text-lg text-slate-600'><span className='text-teal-500 mt-1'>✓</span>Take clear photos with a ruler next to the crack for scale.</li>
            <li className='flex items-start gap-3 text-lg text-slate-600'><span className='text-teal-500 mt-1'>✓</span>Mark the ends with a pencil and write the date.</li>
            <li className='flex items-start gap-3 text-lg text-slate-600'><span className='text-teal-500 mt-1'>✓</span>Check every 30 days.</li>
            <li className='flex items-start gap-3 text-lg text-slate-600'><span className='text-teal-500 mt-1'>✓</span>Measure the widest point.</li>
          </ul>
          <p className='text-lg text-slate-600 leading-relaxed mb-12'>
            If any crack grows wider than 1/4 inch, starts leaking, or new cracks appear quickly, get professional help immediately.
          </p>

          {/* Repair Products Section */}
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Products</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>2026 Picks</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Three Proven Repair Products Available on Amazon (2026)</h2>
          <p className='text-lg text-slate-600 leading-relaxed mb-8'>
            Here are three highly rated, readily available products that actually work well for homeowners dealing with foundation cracks.
          </p>

          <div className='space-y-8 mb-12'>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-200'>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>1. Emecole Metro DIY Basement Wall Crack Repair Kit</h3>
              <p className='text-slate-600 mb-3'>Best all-around epoxy kit for vertical and settlement cracks. Strong bond, easy to use, and comes with full instructions.</p>
              <a href='https://amzn.to/4sdUWJ2' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm'>Check Price on Amazon →</a>
            </div>

            <div className='bg-slate-50 rounded-xl p-6 border border-slate-200'>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>2. Applied Technologies Polyurethane Foundation Crack Repair Kit</h3>
              <p className='text-slate-600 mb-3'>Excellent for actively leaking cracks. The polyurethane expands when it meets water and creates a flexible, waterproof seal. 40 ft version.</p>
              <a href='https://amzn.to/3ZQWrRf' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm'>Check Price on Amazon →</a>
            </div>

            <div className='bg-slate-50 rounded-xl p-6 border border-slate-200'>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>3. Loctite PL Premium Construction Adhesive</h3>
              <p className='text-slate-600 mb-3'>Great for sealing the surface after injection or for small non-structural cracks. Bonds extremely well to concrete and stays flexible.</p>
              <a href='https://amzn.to/4s8EDwX' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm'>Check Price on Amazon →</a>
            </div>
          </div>

          {/* Prevention Tips */}
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Prevention</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Protect Your Home</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Prevention Tips to Stop New Cracks</h2>
          <ul className='space-y-3 mb-12'>
            <li className='flex items-start gap-3 text-lg text-slate-600'><span className='text-teal-500 mt-1'>•</span>Keep gutters clean and extend downspouts at least 10 feet from the foundation.</li>
            <li className='flex items-start gap-3 text-lg text-slate-600'><span className='text-teal-500 mt-1'>•</span>Regrade soil so it slopes away from the house.</li>
            <li className='flex items-start gap-3 text-lg text-slate-600'><span className='text-teal-500 mt-1'>•</span>Run a <Link href='/articles/dehumidifier-myths' className='text-teal-600 underline hover:text-teal-800'>dehumidifier</Link> to keep basement humidity at 40 to 50 percent.</li>
            <li className='flex items-start gap-3 text-lg text-slate-600'><span className='text-teal-500 mt-1'>•</span>Address any water seepage early with proper <Link href='/articles/complete-basement-waterproofing-guide' className='text-teal-600 underline hover:text-teal-800'>waterproofing</Link>.</li>
          </ul>

          {/* Final Thoughts */}
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Final Thoughts</h2>
          <p className='text-lg text-slate-600 leading-relaxed mb-4'>
            Most foundation cracks are not emergencies, but they all deserve attention. Vertical and hairline cracks are usually fine to monitor and seal yourself. Horizontal, stair-step, or growing cracks need professional eyes right away.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-4'>
            The sooner you fix a crack, the cheaper and easier it will be. A small repair today can prevent a major $20,000 wall replacement tomorrow.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-12'>
            If you are unsure about any crack in your basement, the smartest move is to get a free inspection from a reputable <Link href='/articles/how-to-hire-basement-waterproofing-contractor' className='text-teal-600 underline hover:text-teal-800'>foundation repair company</Link>. Many offer no-obligation evaluations. For cost context, see our <Link href='/articles/foundation-crack-repair-cost' className='text-teal-600 underline hover:text-teal-800'>foundation crack repair cost guide</Link>.
          </p>

          {/* Glossary */}
          <div className='bg-slate-50 rounded-2xl p-8 mb-12 border border-slate-200'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary of Terms</h2>
            <div className='space-y-4'>
              <div>
                <h4 className='font-bold text-slate-800'>Hairline Crack</h4>
                <p className='text-slate-600'>A very thin crack (less than 1/16 inch) that is typically cosmetic and caused by normal concrete shrinkage during curing.</p>
              </div>
              <div>
                <h4 className='font-bold text-slate-800'>Hydrostatic Pressure</h4>
                <p className='text-slate-600'>The force of groundwater pushing against foundation walls or floors, often forcing water through pores and cracks.</p>
              </div>
              <div>
                <h4 className='font-bold text-slate-800'>Differential Settlement</h4>
                <p className='text-slate-600'>When one part of a foundation sinks or shifts more than another, causing diagonal or stair-step cracks.</p>
              </div>
              <div>
                <h4 className='font-bold text-slate-800'>Epoxy Injection</h4>
                <p className='text-slate-600'>A repair method where liquid epoxy is injected into a crack under pressure, bonding the concrete back together and sealing against water.</p>
              </div>
              <div>
                <h4 className='font-bold text-slate-800'>Carbon Fiber Straps</h4>
                <p className='text-slate-600'>High-strength strips bonded to bowing walls to prevent further movement. A common modern alternative to steel I-beams.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Guides */}
      <section className='max-w-4xl mx-auto px-6 pb-12'>
        <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          <Link href='/articles/foundation-crack-repair-cost' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
            <h3 className='font-bold text-slate-900 mb-2'>Foundation Crack Repair Cost 2026</h3>
            <p className='text-slate-600 text-sm'>Epoxy injection vs. polyurethane foam. What to expect to pay per crack.</p>
          </Link>
          <Link href='/articles/bowing-basement-walls' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
            <h3 className='font-bold text-slate-900 mb-2'>Bowing Basement Walls Guide</h3>
            <p className='text-slate-600 text-sm'>Causes, repair methods, and costs for bowing and leaning walls.</p>
          </Link>
          <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
            <h3 className='font-bold text-slate-900 mb-2'>Complete Waterproofing Guide</h3>
            <p className='text-slate-600 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
          </Link>
          <Link href='/articles/basement-efflorescence' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
            <h3 className='font-bold text-slate-900 mb-2'>Basement Efflorescence Explained</h3>
            <p className='text-slate-600 text-sm'>What that white powder on your walls really means and how to stop it.</p>
          </Link>
                      <Link href='/articles/interior-vs-exterior-waterproofing' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                                      <h3 className='font-bold text-slate-900 mb-2'>Interior vs. Exterior Waterproofing</h3>
                                      <p className='text-slate-600 text-sm'>Compare costs, methods, and lifespans for each waterproofing approach.</p>
                                    </Link>
                        <Link href='/articles/old-house-basements' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Old House Basements Guide</h3>
                <p className='text-slate-600 text-sm'>Renovating and waterproofing basements in pre-1940 homes with historic foundations.</p>
              </Link>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>Get a Professional Foundation Inspection</h2>
          <p className='text-slate-300 mb-8 text-lg'>Not sure if your crack is serious? Connect with certified foundation repair specialists in your area for a free assessment.</p>
          <LeadForm />
        </div>
      </section>

    </div>
  )
}
