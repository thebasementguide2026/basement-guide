import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Hire a Basement Waterproofing Contractor Without Getting Scammed (2026)',
  description: 'A step-by-step guide to vetting basement waterproofing contractors in 2026. Red flags, interview questions, realistic costs, and how to avoid common scams.',
  alternates: { canonical: 'https://thebasement.guide/articles/how-to-hire-basement-waterproofing-contractor' },
}

export default function HireWaterproofingContractor() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/hire-waterproofing-contractor.jpg'
          alt='Homeowner meeting with basement waterproofing contractor'
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
            How to Hire a Basement<br />
            <span className='text-teal-400'>Waterproofing Contractor</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            A step-by-step guide to finding reliable pros, spotting scams, asking the right questions, and getting your basement protected without overpaying.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center mr-3'>
                <span className='text-white font-bold text-sm'>BG</span>
              </div>
              <div>
                <p className='text-white font-semibold text-sm'>The Basement Guide</p>
                <p className='text-slate-400 text-xs'>Updated Feb 2026 &middot; 20 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <div className='prose prose-lg prose-slate max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed'>
            If your basement is wet, musty, or showing signs of water damage, you need to address it before it gets worse. Mold, rotting wood, ruined belongings, and foundation cracks do not go away on their own, and repairs can get very expensive. But hiring the wrong contractor can hurt just as much. Many homeowners have paid thousands only to have the same leaks return, worthless warranties, or crews that vanish after taking a big deposit.
          </p>
          <p className='text-xl text-slate-700 leading-relaxed'>
            The good news is you can avoid most scams and bad experiences by doing your homework and asking the right questions. This guide walks you through the process step by step, highlights the biggest red flags, and gives practical tips so you end up with a reliable, long-lasting solution.
          </p>

          {/* Section 1 */}
          <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>First: Know Your Basement&#39;s Real Problem</h2>
          <p className='text-slate-600 leading-relaxed mb-4'>
            Before any contractor shows up, get a clear idea of what is happening. Walk your basement and note:
          </p>
          <ul className='space-y-3 mb-8'>
            <li className='flex items-start'>
              <span className='text-teal-500 mr-3 mt-1'>&#10004;</span>
              <span className='text-slate-700'>Where the water appears: floor cracks, wall seepage, corners, after rain</span>
            </li>
            <li className='flex items-start'>
              <span className='text-teal-500 mr-3 mt-1'>&#10004;</span>
              <span className='text-slate-700'>How often it happens and how much water</span>
            </li>
            <li className='flex items-start'>
              <span className='text-teal-500 mr-3 mt-1'>&#10004;</span>
              <span className='text-slate-700'>Any musty smells, efflorescence (white powdery residue on concrete), or mold spots</span>
            </li>
            <li className='flex items-start'>
              <span className='text-teal-500 mr-3 mt-1'>&#10004;</span>
              <span className='text-slate-700'>Outside issues: soil sloping toward the house, clogged gutters, downspouts dumping water next to the foundation, window wells with standing water</span>
            </li>
          </ul>
          <div className='bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8'>
            <p className='text-teal-900 font-semibold mb-2'>Pro Tip</p>
            <p className='text-teal-800'>Sometimes the fix is simple and low-cost, like extending downspouts farther away, regrading soil near the foundation, or cleaning gutters. Take dated photos, measure humidity over a week with a cheap hygrometer, and note rain events. This information helps you question aggressive quotes and keeps conversations focused.</p>
          </div>

          {/* Section 2 - Finding Contractors */}
          <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Finding Good Contractors: Skip the Paid Ads Trap</h2>
          <p className='text-slate-600 leading-relaxed mb-4'>
            Do not just search &ldquo;basement waterproofing near me&rdquo; and pick the first result. Those top spots are often paid ads, not necessarily the best companies.
          </p>
          <div className='bg-slate-50 rounded-2xl p-8 mb-8'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Better Ways to Find Pros</h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <span className='text-teal-500 mr-3 mt-1'>&#10004;</span>
                <span className='text-slate-700'>Ask neighbors, friends, or local real estate agents who have had work done recently</span>
              </li>
              <li className='flex items-start'>
                <span className='text-teal-500 mr-3 mt-1'>&#10004;</span>
                <span className='text-slate-700'>Check Angi, BBB, or HomeAdvisor for companies with strong reviews and accreditation</span>
              </li>
              <li className='flex items-start'>
                <span className='text-teal-500 mr-3 mt-1'>&#10004;</span>
                <span className='text-slate-700'>Look for specialists in basement waterproofing and foundation repair, not general contractors who do it occasionally</span>
              </li>
              <li className='flex items-start'>
                <span className='text-teal-500 mr-3 mt-1'>&#10004;</span>
                <span className='text-slate-700'>Aim for four to six estimates &mdash; comparing them shows who is straightforward versus who inflates prices</span>
              </li>
            </ul>
          </div>

          {/* Section 3 - Vetting */}
          <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Deep Vet: The Checks That Catch Most Bad Actors</h2>
          <p className='text-slate-600 leading-relaxed mb-8'>
            This step is where many people get burned by skipping verification.
          </p>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm'>
              <h4 className='font-bold text-slate-900 mb-3'>License &amp; Insurance</h4>
              <p className='text-slate-600 text-sm'>Ask for their license number and verify it on your state&#39;s contractor licensing board website. Demand proof of general liability insurance (at least $1M minimum) and workers compensation. No excuses. If they say they do not need it for small jobs, walk away.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm'>
              <h4 className='font-bold text-slate-900 mb-3'>Years in Business</h4>
              <p className='text-slate-600 text-sm'>Ten or more years is ideal for waterproofing specialists. New companies often appear after storms or floods and disappear quickly. Search the company name plus &ldquo;complaints&rdquo; or the owner name plus past businesses.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm'>
              <h4 className='font-bold text-slate-900 mb-3'>Reviews Deep Dive</h4>
              <p className='text-slate-600 text-sm'>Read Google, BBB, Angi, Yelp, and relevant forums. Look for patterns: consistent praise for communication, cleanup, and follow-through is a good sign. Watch for repeated stories of taking deposits and ghosting or systems failing soon after.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm'>
              <h4 className='font-bold text-slate-900 mb-3'>Real References</h4>
              <p className='text-slate-600 text-sm'>Ask for three to five recent customers in your area. Call or text them. Ask: Was the crew professional? On time? Any hidden fees? Would you hire them again? Legitimate companies provide this happily.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm md:col-span-2'>
              <h4 className='font-bold text-slate-900 mb-3'>Physical Presence</h4>
              <p className='text-slate-600 text-sm'>Do they have branded trucks or vans? A real office or yard? A professional website with actual before-and-after photos, not stock images, and clear contact details? If they operate out of a PO box, have out-of-state plates, or dodge basic questions, that is a major warning.</p>
            </div>
          </div>

          {/* Section 4 - Estimate Questions */}
          <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>The In-Person Estimate: Questions That Separate Pros from Hustlers</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>
            When they come for the free inspection, ask these questions directly:
          </p>
          <div className='bg-slate-900 rounded-2xl p-8 mb-8'>
            <ol className='space-y-4'>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>1</span>
                <span className='text-slate-300'>How long have you specifically been doing basement waterproofing?</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>2</span>
                <span className='text-slate-300'>Walk me through your recommended fix. Why this method over others? Interior French drain and sump? Exterior membrane? Why?</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>3</span>
                <span className='text-slate-300'>What is the full scope &mdash; materials, labor, permits if needed, cleanup, disposal, sump pump if required?</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>4</span>
                <span className='text-slate-300'>Warranty details: Lifetime and transferable? Covers labor and parts? Any exclusions like required annual maintenance?</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>5</span>
                <span className='text-slate-300'>Who does the work &mdash; your full-time crew or day laborers and subcontractors? How long have they been with you?</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>6</span>
                <span className='text-slate-300'>How do you handle surprises like hitting utilities or bad concrete?</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>7</span>
                <span className='text-slate-300'>Can I see a recent job nearby or photos and videos from start to finish?</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>8</span>
                <span className='text-slate-300'>What is the payment schedule? Legitimate companies take 10&ndash;30% deposit max. Balance on completion or inspection. Never full upfront or cash only.</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>9</span>
                <span className='text-slate-300'>Timeline and crew size? How many days? Will they protect floors and furniture?</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-teal-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0'>10</span>
                <span className='text-slate-300'>What if it leaks again? What is your follow-up policy?</span>
              </li>
            </ol>
          </div>
          <div className='bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8'>
            <p className='text-amber-900 font-semibold mb-2'>&#9888; Watch For</p>
            <p className='text-amber-800'>If they rush you, use fear tactics like &ldquo;your foundation will collapse,&rdquo; badmouth every competitor, or push a &ldquo;today only&rdquo; discount, that is high-pressure sales &mdash; a classic scam sign. Listen for clear, patient answers.</p>
          </div>

          {/* Section 5 - Red Flags */}
          <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Red Flags That Scream &ldquo;Run&rdquo; &mdash; Common in 2026</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>
            From recent complaints and reports, watch out for these warning signs:
          </p>
          <div className='grid md:grid-cols-2 gap-4 mb-8'>
            <div className='flex items-start bg-red-50 rounded-lg p-4'>
              <span className='text-red-500 mr-3 text-lg'>&#9888;</span>
              <span className='text-red-900 text-sm'>Door-to-door or &ldquo;we are in the neighborhood&rdquo; offers, especially after storms</span>
            </div>
            <div className='flex items-start bg-red-50 rounded-lg p-4'>
              <span className='text-red-500 mr-3 text-lg'>&#9888;</span>
              <span className='text-red-900 text-sm'>Huge upfront cash demands or &ldquo;cash discount&rdquo; to avoid taxes or paper trail</span>
            </div>
            <div className='flex items-start bg-red-50 rounded-lg p-4'>
              <span className='text-red-500 mr-3 text-lg'>&#9888;</span>
              <span className='text-red-900 text-sm'>Bait-and-switch: low quote then &ldquo;discover more work&rdquo; and raise price mid-job</span>
            </div>
            <div className='flex items-start bg-red-50 rounded-lg p-4'>
              <span className='text-red-500 mr-3 text-lg'>&#9888;</span>
              <span className='text-red-900 text-sm'>No written contract or vague one with no specifics on materials, warranty, or change orders</span>
            </div>
            <div className='flex items-start bg-red-50 rounded-lg p-4'>
              <span className='text-red-500 mr-3 text-lg'>&#9888;</span>
              <span className='text-red-900 text-sm'>Unrealistic promises: &ldquo;guaranteed dry forever&rdquo; or &ldquo;no future issues ever&rdquo;</span>
            </div>
            <div className='flex items-start bg-red-50 rounded-lg p-4'>
              <span className='text-red-500 mr-3 text-lg'>&#9888;</span>
              <span className='text-red-900 text-sm'>Unlicensed or fake license numbers</span>
            </div>
            <div className='flex items-start bg-red-50 rounded-lg p-4'>
              <span className='text-red-500 mr-3 text-lg'>&#9888;</span>
              <span className='text-red-900 text-sm'>&ldquo;We can start tomorrow, sign now&rdquo; pressure</span>
            </div>
            <div className='flex items-start bg-red-50 rounded-lg p-4'>
              <span className='text-red-500 mr-3 text-lg'>&#9888;</span>
              <span className='text-red-900 text-sm'>No references you can actually contact or bad online patterns</span>
            </div>
          </div>

          {/* Section 6 - Costs */}
          <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Realistic 2026 Costs</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>
            Expect these ranges when getting quotes for basement waterproofing work:
          </p>
          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-slate-900'>
                  <th className='text-left text-white p-4 font-bold'>Type of Work</th>
                  <th className='text-left text-white p-4 font-bold'>Cost Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Basic crack sealing &amp; interior sealing</td>
                  <td className='p-4 text-slate-900 font-semibold'>$3,000 &ndash; $7,000</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-4 text-slate-700'>Full interior drainage + sump pump</td>
                  <td className='p-4 text-slate-900 font-semibold'>$6,000 &ndash; $12,000</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-4 text-slate-700'>Exterior excavation &amp; membrane</td>
                  <td className='p-4 text-slate-900 font-semibold'>$15,000 &ndash; $30,000+</td>
                </tr>
                <tr className='bg-teal-50'>
                  <td className='p-4 text-teal-900 font-semibold'>Average solid job</td>
                  <td className='p-4 text-teal-900 font-bold'>$7,000 &ndash; $10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-600 leading-relaxed mb-8'>
            Get itemized quotes so you can compare exactly what is included. Legitimate companies often offer financing options without shady in-house lenders.
          </p>

          {/* Section 7 - Final Thoughts */}
          <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Trust but Verify, Then Sleep Easy</h2>
          <p className='text-slate-600 leading-relaxed mb-4'>
            Hiring a basement waterproofing contractor can feel overwhelming, but the process is straightforward if you take your time. Get multiple estimates, check credentials, ask hard questions, and trust your gut. If something feels pushy or off, it probably is.
          </p>
          <p className='text-slate-600 leading-relaxed mb-4'>
            The right contractor will explain clearly, respect your home, and stand behind their work with a real warranty. A dry basement protects your biggest investment from mold, pests, and resale issues.
          </p>
        </div>
      </article>

      {/* Related Guides */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-3xl font-black text-slate-900 mb-8'>Related Guides</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          <Link href='/articles/basement-waterproofing-cost' className='group block bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Basement Waterproofing Cost 2026</h4>
            <p className='text-slate-500 text-sm'>Interior vs exterior waterproofing costs and how to avoid getting overcharged.</p>
          </Link>
          <Link href='/articles/interior-vs-exterior-waterproofing' className='group block bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Interior vs. Exterior Waterproofing</h4>
            <p className='text-slate-500 text-sm'>Compare the two primary methods to dry your basement.</p>
          </Link>
          <Link href='/articles/french-drain-cost' className='group block bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>French Drain Installation Cost 2026</h4>
            <p className='text-slate-500 text-sm'>Full cost breakdown for yard and interior French drains.</p>
          </Link>
          <Link href='/articles/sump-pump-buying-guide' className='group block bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Sump Pump Buying Guide</h4>
            <p className='text-slate-500 text-sm'>Choose the right sump pump to complement your waterproofing.</p>
          </Link>
          <Link href='/articles/complete-basement-waterproofing-guide' className='group block bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Complete Basement Waterproofing Guide</h4>
            <p className='text-slate-500 text-sm'>Everything you need to know about keeping your basement dry.</p>
          </Link>
          <Link href='/articles/foundation-crack-repair-cost' className='group block bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Foundation Crack Repair Cost 2026</h4>
            <p className='text-slate-500 text-sm'>Epoxy injection vs. polyurethane foam pricing and methods.</p>
          </Link>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <div className='bg-slate-900 rounded-2xl p-10 text-center'>
          <h2 className='text-3xl font-black text-white mb-4'>Get Free Waterproofing Estimates</h2>
          <p className='text-slate-400 mb-8 max-w-xl mx-auto'>Connect with pre-vetted basement waterproofing contractors in your area. Compare quotes and hire with confidence.</p>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
