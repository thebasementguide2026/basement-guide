import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Radon Testing and Mitigation: The Complete Guide (2026)',
  description: 'Radon is the second leading cause of lung cancer. Learn how to test your home, understand your results, choose a mitigation system, and find certified contractors. Costs from $15 to $5,000.',
}

export default function RadonTestingMitigationGuide() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/images/Basement Radon Testing.jpg'
          alt='Basement radon testing and mitigation system installation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-110'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-widest uppercase text-sm'>Health & Safety</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight max-w-5xl'>
            Basement Radon Testing &amp; Mitigation<br />
            <span className='text-teal-400'>The Complete 2026 Guide</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 mt-8'>Everything you need to know to test your home, understand your results, and fix a radon problem for good.</p>
          <div className='flex items-center gap-4'>
            <div className='w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>BG</span>
            </div>
            <div>
              <p className='text-white font-semibold'>The Basement Guide</p>
              <p className='text-slate-400 text-sm'>Updated March 2026 &nbsp;&bull;&nbsp; 30 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-12'>
        <article>

                    {/* Intro */}
          <p className='text-xl text-slate-600 mb-8 leading-relaxed'>Radon is a radioactive gas that forms naturally in soil and rock. It seeps into homes through foundation cracks, sump pits, and utility penetrations. It is colorless, odorless, and tasteless. The only way to know if your home has a radon problem is to test for it.</p>
          <p className='text-xl text-slate-600 mb-10 leading-relaxed'>This guide covers everything you need to know: how radon enters homes, how to test for it, how to interpret your results, and what it costs to fix a radon problem permanently.</p>

          {/* What Is Radon */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>What Is Radon and Why Does It Matter?</h2>
            <p className='text-slate-700 mb-4'>Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil, rock, and groundwater. It is present everywhere in the environment at low levels, but it can accumulate to dangerous concentrations inside homes, particularly in basements and lower levels.</p>
            <p className='text-slate-700 mb-4'>When radon is inhaled, its radioactive decay products can become lodged in lung tissue, where they continue to emit radiation and damage DNA. Over years of exposure, this damage increases the risk of lung cancer.</p>
            <div className='bg-red-50 border border-red-200 rounded-lg p-5 mb-6'>
              <h3 className='text-red-800 font-bold mb-2'>The Health Risk Is Real</h3>
              <p className='text-red-700'>Radon is the second leading cause of lung cancer in the United States, responsible for approximately 21,000 deaths annually according to the EPA. It is the leading cause of lung cancer among non-smokers. Smokers exposed to elevated radon face up to 10 times the lung cancer risk of non-smokers at the same radon levels.</p>
            </div>
          </section>

                    {/* How Radon Enters */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>How Radon Enters Your Basement</h2>
            <p className='text-slate-700 mb-6'>Radon moves from soil into homes through pressure differentials. The interior of a home is typically at slightly lower pressure than the surrounding soil, especially during heating season when warm air rises and escapes through the upper levels. This negative pressure pulls soil gases, including radon, upward through any opening in the foundation.</p>
            <div className='space-y-3 mb-6'>
              <div className='flex items-start gap-3 p-3 bg-slate-50 rounded-lg'>
                <span className='text-orange-500 font-bold text-lg mt-0.5'>&#x26A0;</span>
                <p className='text-slate-700'>Cracks in poured concrete floors and walls</p>
              </div>
              <div className='flex items-start gap-3 p-3 bg-slate-50 rounded-lg'>
                <span className='text-orange-500 font-bold text-lg mt-0.5'>&#x26A0;</span>
                <p className='text-slate-700'>The joint between the floor slab and foundation walls (called the cove joint)</p>
              </div>
              <div className='flex items-start gap-3 p-3 bg-slate-50 rounded-lg'>
                <span className='text-orange-500 font-bold text-lg mt-0.5'>&#x26A0;</span>
                <p className='text-slate-700'>Gaps around pipes, utility lines, and drains that penetrate the slab</p>
              </div>
              <div className='flex items-start gap-3 p-3 bg-slate-50 rounded-lg'>
                <span className='text-orange-500 font-bold text-lg mt-0.5'>&#x26A0;</span>
                <p className='text-slate-700'>Unsealed sump pits</p>
              </div>
              <div className='flex items-start gap-3 p-3 bg-slate-50 rounded-lg'>
                <span className='text-orange-500 font-bold text-lg mt-0.5'>&#x26A0;</span>
                <p className='text-slate-700'>Hollow block foundation walls</p>
              </div>
              <div className='flex items-start gap-3 p-3 bg-slate-50 rounded-lg'>
                <span className='text-orange-500 font-bold text-lg mt-0.5'>&#x26A0;</span>
                <p className='text-slate-700'>Crawl spaces with exposed soil floors</p>
              </div>
            </div>
          </section>

                    {/* Testing Types */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Types of Radon Tests</h2>
            <p className='text-slate-700 mb-6'>There are three main categories of radon tests: short-term, long-term, and continuous electronic monitors. Here is when to use each one.</p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>Test Type</th><th className='px-4 py-3 text-left'>Duration</th><th className='px-4 py-3 text-left'>Cost</th><th className='px-4 py-3 text-left'>Best For</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Short-term charcoal canister</td><td className='px-4 py-3'>2 to 7 days</td><td className='px-4 py-3'>$15 to $30</td><td className='px-4 py-3'>Initial screening, real estate transactions</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Long-term alpha track</td><td className='px-4 py-3'>90 days to 12 months</td><td className='px-4 py-3'>$20 to $50</td><td className='px-4 py-3'>Most accurate annual average for mitigation decisions</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Continuous electronic monitor (DIY)</td><td className='px-4 py-3'>Ongoing</td><td className='px-4 py-3'>$100 to $250 device</td><td className='px-4 py-3'>Year-round monitoring, post-mitigation verification</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Professional certified test</td><td className='px-4 py-3'>48 hours minimum</td><td className='px-4 py-3'>$150 to $400</td><td className='px-4 py-3'>Real estate transactions, highest accuracy</td></tr>
                </tbody>
              </table>
            </div>
          </section>

                    {/* How to Test */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>How to Test Your Home for Radon</h2>
            <p className='text-slate-700 mb-4'>Testing your home for radon is straightforward. Here is the step-by-step process for a DIY short-term test.</p>
            <div className='space-y-4 mb-6'>
              <div className='flex gap-4'>
                <span className='w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold shrink-0'>1</span>
                <div><h3 className='font-bold text-slate-900'>Buy a test kit</h3><p className='text-slate-700'>Purchase an EPA-listed radon test kit from a hardware store or online. Charcoal canister kits typically cost $15 to $30 and include a prepaid lab analysis envelope.</p></div>
              </div>
              <div className='flex gap-4'>
                <span className='w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold shrink-0'>2</span>
                <div><h3 className='font-bold text-slate-900'>Place the kit in the lowest livable level</h3><p className='text-slate-700'>Put the kit in the lowest level of your home that you use regularly. For most homes this is the basement. Place it at least 20 inches above the floor, away from drafts, exterior walls, and high humidity areas.</p></div>
              </div>
              <div className='flex gap-4'>
                <span className='w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold shrink-0'>3</span>
                <div><h3 className='font-bold text-slate-900'>Keep windows closed</h3><p className='text-slate-700'>For accurate results, keep windows and exterior doors closed as much as possible for 12 hours before and during the test. Normal entry and exit is fine.</p></div>
              </div>
              <div className='flex gap-4'>
                <span className='w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold shrink-0'>4</span>
                <div><h3 className='font-bold text-slate-900'>Leave for 2 to 7 days</h3><p className='text-slate-700'>Leave the kit undisturbed for the duration specified in the instructions. Most short-term tests run 48 to 96 hours.</p></div>
              </div>
              <div className='flex gap-4'>
                <span className='w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold shrink-0'>5</span>
                <div><h3 className='font-bold text-slate-900'>Send to the lab and wait for results</h3><p className='text-slate-700'>Seal the kit and mail it to the included lab address. Results typically arrive in 1 to 2 weeks. Many labs also offer rush processing for an additional fee.</p></div>
              </div>
            </div>
          </section>

                    {/* Interpreting Results */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Understanding Your Radon Test Results</h2>
            <p className='text-slate-700 mb-4'>Radon is measured in picocuries per liter of air (pCi/L). The EPA has established guidelines based on the health risk at different levels.</p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>Radon Level</th><th className='px-4 py-3 text-left'>EPA Recommendation</th><th className='px-4 py-3 text-left'>Action</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-green-50'><td className='px-4 py-3 font-medium'>Below 2 pCi/L</td><td className='px-4 py-3'>Below average indoor levels</td><td className='px-4 py-3'>No action required. Retest in 2 years.</td></tr>
                  <tr className='bg-yellow-50'><td className='px-4 py-3 font-medium'>2 to 4 pCi/L</td><td className='px-4 py-3'>Above outdoor average, below action level</td><td className='px-4 py-3'>Consider mitigation. Risk is low but real.</td></tr>
                  <tr className='bg-orange-50'><td className='px-4 py-3 font-medium'>4 to 8 pCi/L</td><td className='px-4 py-3'>Above EPA action level</td><td className='px-4 py-3'>Mitigate within a few months.</td></tr>
                  <tr className='bg-red-50'><td className='px-4 py-3 font-medium'>Above 8 pCi/L</td><td className='px-4 py-3'>Significantly elevated</td><td className='px-4 py-3'>Mitigate as soon as possible.</td></tr>
                </tbody>
              </table>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4'>
              <p className='text-teal-800 font-semibold'>The EPA action level is 4 pCi/L, but there is no truly safe level of radon exposure. The World Health Organization recommends action at 2.7 pCi/L. Many radon professionals target below 2 pCi/L for their clients.</p>
            </div>
          </section>

                    {/* Mitigation Systems */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Radon Mitigation Systems Explained</h2>
            <p className='text-slate-700 mb-4'>The most effective and widely used radon mitigation method is Active Sub-Slab Depressurization (ASD). It works by drilling a hole through the basement floor slab, inserting a suction pipe, and using a continuously running fan to pull radon from under the slab and vent it to the exterior above the roofline.</p>
            <div className='space-y-4 mb-6'>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Active Sub-Slab Depressurization (ASD) - Most Common</h3>
                <p className='text-slate-700'>Works on homes with poured concrete or block basement floors. Reduces radon levels by 90 to 99 percent in most homes. Costs $800 to $2,500 installed. This is the standard system for the vast majority of homes.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Sub-Membrane Depressurization</h3>
                <p className='text-slate-700'>Used for crawl spaces with dirt floors. A heavy polyethylene membrane is installed over the soil, and suction is applied beneath it. Costs $1,500 to $5,000 including membrane installation.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Drain-Tile Suction</h3>
                <p className='text-slate-700'>Used for homes with existing interior or exterior drain tile systems. The suction is applied to the drain tile network rather than directly under the slab. Effective when drain tile is present.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Block Wall Suction</h3>
                <p className='text-slate-700'>Used for homes with hollow concrete block foundation walls. Suction is applied to the interior of the hollow block cores. Required when block walls are a primary radon entry point.</p>
              </div>
            </div>
          </section>

                    {/* Costs */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Radon Mitigation Cost Breakdown 2026</h2>
            <p className='text-slate-700 mb-6'>Here is what each component of a radon mitigation project typically costs.</p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>Cost Component</th><th className='px-4 py-3 text-left'>Typical Range</th><th className='px-4 py-3 text-left'>Notes</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Professional radon test (pre-mitigation)</td><td className='px-4 py-3'>$150 - $400</td><td className='px-4 py-3'>Required to confirm radon levels</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Standard ASD system installation</td><td className='px-4 py-3'>$800 - $2,500</td><td className='px-4 py-3'>Most homes fall in the $1,000 to $1,800 range</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Additional suction points</td><td className='px-4 py-3'>$200 - $500 each</td><td className='px-4 py-3'>Needed for larger homes or complex layouts</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Sump pit sealing</td><td className='px-4 py-3'>$100 - $300</td><td className='px-4 py-3'>Required if sump pit is unsealed</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Post-mitigation radon test</td><td className='px-4 py-3'>$100 - $300 (pro) or $15 - $30 (DIY)</td><td className='px-4 py-3'>Required to verify the system worked</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Annual electricity cost</td><td className='px-4 py-3'>$50 - $150 per year</td><td className='px-4 py-3'>Fan runs 24/7</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Fan replacement (every 5-15 years)</td><td className='px-4 py-3'>$150 - $400</td><td className='px-4 py-3'>Only component with limited lifespan</td></tr>
                </tbody>
              </table>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4'>
              <p className='text-teal-800 font-semibold'>Total radon mitigation cost for most homes: $1,000 to $2,500 all-in</p>
              <p className='text-teal-700 text-sm'>For a standard active sub-slab system with pre- and post-testing.</p>
            </div>
          </section>

                    {/* DIY vs Professional */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>DIY Radon Mitigation vs Hiring a Professional</h2>
            <p className='text-slate-700 mb-4'>Can you install a radon mitigation system yourself? Technically, yes. There is no federal law requiring professional installation, though some states do require licensed radon contractors. DIY radon fan kits are available online for $200 to $600.</p>
            <p className='text-slate-700 mb-6'>Should you install it yourself? In almost all cases, no. Here is the comparison.</p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>Factor</th><th className='px-4 py-3 text-left'>DIY Radon System</th><th className='px-4 py-3 text-left'>Professional Radon Installation</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Cost</td><td className='px-4 py-3'>$200 - $600 for materials</td><td className='px-4 py-3'>$800 - $2,500 fully installed</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Effectiveness guarantee</td><td className='px-4 py-3'>None. If the system does not reduce radon levels, you have spent money and still have a problem.</td><td className='px-4 py-3'>Most professionals guarantee results below 4 pCi/L, and many guarantee below 2 pCi/L.</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Suction point placement</td><td className='px-4 py-3'>Based on guesswork without diagnostic equipment</td><td className='px-4 py-3'>Professionals use diagnostic pressure tests to find the optimal suction point location</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Real estate value</td><td className='px-4 py-3'>DIY installation may not satisfy home buyers or mortgage lenders</td><td className='px-4 py-3'>Professional installation with documentation adds resale value</td></tr>
                </tbody>
              </table>
            </div>
            <p className='text-slate-700 mb-4'>The price difference between DIY and professional radon mitigation is typically $500 to $1,500. Given that radon is a confirmed carcinogen and the system needs to work correctly around the clock for decades, professional installation is strongly recommended.</p>
          </section>

                    {/* FAQ Section */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
            <div className='space-y-4'>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to fix a radon problem?</h3>
                <p className='text-slate-700'>Most homes can be mitigated for $1,000 to $2,500 using an active sub-slab depressurization system. This includes installation, materials, and post-testing.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>What radon level is dangerous in a basement?</h3>
                <p className='text-slate-700'>The EPA recommends taking action at 4 pCi/L or higher. However, there is no truly safe level of radon exposure. Many health organizations recommend considering mitigation at levels between 2 and 4 pCi/L.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>How long does radon mitigation installation take?</h3>
                <p className='text-slate-700'>A standard active sub-slab depressurization system can be installed in 3 to 5 hours for most homes. More complex installations may take a full day.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Does a radon mitigation system decrease home value?</h3>
                <p className='text-slate-700'>No. A properly installed radon mitigation system with documentation showing safe radon levels actually increases buyer confidence and can add value to your home.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I mitigate if my radon level is 3 pCi/L?</h3>
                <p className='text-slate-700'>While the EPA action level is 4 pCi/L, they also state that any radon exposure carries some risk. At 3 pCi/L, mitigation is a personal decision. Many homeowners choose to mitigate at this level, especially if they have children or spend significant time in the basement.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Can radon levels in a basement change over time?</h3>
                <p className='text-slate-700'>Yes. Radon levels fluctuate seasonally, with winter months typically showing higher levels due to closed windows and heating system stack effects.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>What should I do if my sump pump pit is open?</h3>
                <p className='text-slate-700'>An open sump pit is a major radon entry point. It should be sealed with an airtight cover as part of any radon mitigation effort.</p>
              </div>
            </div>
          </section>

                    {/* Final Thoughts */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Final Thoughts</h2>
            <p className='text-slate-700 mb-4'>Radon is a serious but solvable problem. Testing is inexpensive and takes minimal effort. If your levels are elevated, professional mitigation systems are highly effective, affordable, and require almost no ongoing maintenance.</p>
            <p className='text-slate-700 mb-4'>Start with a test. If your results come back above 4 pCi/L, contact a certified radon contractor for an assessment. For most homeowners, radon mitigation is a one-time investment of $1,000 to $2,500 that protects your family for decades.</p>
          </section>

          {/* Related Guides */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>Related Guides</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <Link href='/articles/radon-and-basement-waterproofing' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Radon &amp; Basement Waterproofing</h3>
                <p className='text-slate-600 text-sm'>How sealing your basement reduces radon risks and prevents water damage.</p>
              </Link>
              <Link href='/articles/basement-waterproofing-cost' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Basement Waterproofing Cost Guide</h3>
                <p className='text-slate-600 text-sm'>What to expect for professional waterproofing pricing in 2026.</p>
              </Link>
              <Link href='/articles/sump-pump-buying-guide' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Sump Pump Buying Guide</h3>
                <p className='text-slate-600 text-sm'>Choose the right sump pump to protect your basement from flooding.</p>
              </Link>
              <Link href='/articles/homebuyers-basement-inspection-checklist' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Homebuyer Basement Inspection Checklist</h3>
                <p className='text-slate-600 text-sm'>Spot hidden water damage, mold, and foundation issues before you buy.</p>
              </Link>
              <Link href='/articles/how-to-prevent-basement-mold' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>How to Prevent Basement Mold</h3>
                <p className='text-slate-600 text-sm'>Critical steps to prevent mold growth and protect your family.</p>
              </Link>
              <Link href='/articles/crawl-space-encapsulation-guide' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>Crawl Space Encapsulation Guide</h3>
                <p className='text-slate-600 text-sm'>Complete guide to sealing and protecting your crawl space.</p>
              </Link>
            </div>
          </section>

          {/* Lead Form CTA */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Get Expert Radon Testing &amp; Mitigation Advice</h2>
            <p className='text-slate-700 mb-6'>Connect with certified radon testing and mitigation professionals in your area for a free assessment of your home.</p>
            <LeadForm />
          </section>

        </article>
      </main>
    </div>
  )
}
