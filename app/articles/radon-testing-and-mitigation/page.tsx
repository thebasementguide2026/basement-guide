import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Radon Testing and Mitigation: The Complete Homeowner\u2019s Guide 2026',
  description: 'Radon is the second leading cause of lung cancer. Learn how to test for radon, understand results, choose a mitigation system, and find qualified contractors. Costs from $15 to $5,000.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to fix a radon problem in a basement?', acceptedAnswer: { '@type': 'Answer', text: 'Most homes pay $1,000 to $2,500 for a professionally installed active sub-slab depressurization system, including pre- and post-mitigation testing. Homes with crawl spaces or complex foundations may pay $2,500 to $5,000 or more. The annual operating cost for electricity is $50 to $150.' } },
    { '@type': 'Question', name: 'What radon level is dangerous in a basement?', acceptedAnswer: { '@type': 'Answer', text: 'The EPA recommends taking action at 4 pCi/L or above. The World Health Organization recommends a lower action threshold of 2.7 pCi/L. There is no truly safe level of radon exposure, but risk increases significantly above 4 pCi/L. Levels at or above 8 pCi/L carry substantial risk and should be addressed promptly.' } },
    { '@type': 'Question', name: 'How long does radon mitigation installation take?', acceptedAnswer: { '@type': 'Answer', text: 'Professional installation of a standard active sub-slab depressurization system takes 3 to 5 hours for most homes. Post-installation radon testing requires an additional 48 hours at minimum. You can use your basement normally during the testing period.' } },
    { '@type': 'Question', name: 'Does a radon mitigation system decrease home value?', acceptedAnswer: { '@type': 'Answer', text: 'No. A documented, working radon mitigation system increases marketability. Homes with professional radon systems and low post-mitigation test results are more attractive to buyers than homes with unknown radon levels.' } },
    { '@type': 'Question', name: 'Should I mitigate if my radon level is 3 pCi/L?', acceptedAnswer: { '@type': 'Answer', text: 'The EPA recommends considering mitigation for radon levels between 2 and 4 pCi/L. Given that a mitigation system costs $1,000 to $2,000 and eliminates a meaningful long-term lung cancer risk, we recommend mitigation at this level.' } },
    { '@type': 'Question', name: 'Can radon levels in a basement change over time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Radon levels fluctuate seasonally (typically higher in winter and lower in summer), vary daily (often higher at night), and can change permanently due to nearby construction, soil disturbance, water table changes, or home renovations.' } },
    { '@type': 'Question', name: 'What should I do if my sump pump pit is open and unsealed?', acceptedAnswer: { '@type': 'Answer', text: 'An open sump pit is a direct pathway for radon gas to enter your basement. A radon mitigation contractor will seal the pit with an airtight cover as part of the system installation. Sealing the sump pit on its own is still a worthwhile step to reduce radon entry.' } },
    { '@type': 'Question', name: 'Is radon worse in certain parts of the country?', acceptedAnswer: { '@type': 'Answer', text: 'The EPA divides the United States into three radon zones. Zone 1 (highest potential, average above 4 pCi/L) includes large portions of the Midwest, Northern Plains, Appalachian region, and parts of the Northeast and Rocky Mountain states. However, elevated radon levels have been found in all 50 states.' } },
    { '@type': 'Question', name: 'What is the best time of year to test for radon?', acceptedAnswer: { '@type': 'Answer', text: 'Winter is generally the best time to test for radon because levels tend to be highest during cold months. Closed windows, increased heating, and stronger stack effect all contribute to higher radon concentrations. However, any time of year is better than not testing at all.' } },
    { '@type': 'Question', name: 'How does radon testing work during a home inspection?', acceptedAnswer: { '@type': 'Answer', text: 'A certified radon tester places a continuous electronic monitor in the lowest livable level of the home for a minimum of 48 hours under closed-house conditions. The monitor logs hourly readings and produces a tamper-evident report.' } },
  ],
}

const testingMethodsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Radon Testing Methods Comparison',
  description: 'Comparison of radon testing methods with cost, duration, best use cases, and accuracy levels.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Short-term test kit (charcoal canister)', value: 'Cost: $10-$30. Duration: 2-7 days. Best for: Quick screening. Accuracy: Moderate.' },
    { '@type': 'PropertyValue', name: 'Long-term test kit (alpha track detector)', value: 'Cost: $20-$50. Duration: 90 days to 12 months. Best for: Definitive annual average. Accuracy: High.' },
    { '@type': 'PropertyValue', name: 'Continuous radon monitor (digital plug-in)', value: 'Cost: $100-$250 to purchase. Duration: Ongoing. Best for: Year-round monitoring. Accuracy: High.' },
    { '@type': 'PropertyValue', name: 'Professional radon test (certified inspector)', value: 'Cost: $150-$400. Duration: 48 hours. Best for: Real estate transactions. Accuracy: Highest.' },
  ],
}

const mitigationSystemsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Radon Mitigation System Comparison',
  description: 'Comparison of radon mitigation system types with installation costs, radon reduction rates, and best use cases.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Active sub-slab depressurization (ASD)', value: 'Cost: $800-$2,500. Reduction: 90-99%. Best for: Homes with poured concrete or block basement floors.' },
    { '@type': 'PropertyValue', name: 'Passive sub-slab depressurization', value: 'Cost: $500-$1,000 at construction. Reduction: 30-70%. Best for: New construction.' },
    { '@type': 'PropertyValue', name: 'Drain-tile suction', value: 'Cost: $800-$1,800. Reduction: 80-99%. Best for: Homes with existing french drain.' },
    { '@type': 'PropertyValue', name: 'Sub-membrane depressurization', value: 'Cost: $1,500-$5,000. Reduction: 80-99%. Best for: Dirt-floor crawl spaces.' },
    { '@type': 'PropertyValue', name: 'Block-wall depressurization', value: 'Cost: $1,800-$3,000. Reduction: 70-95%. Best for: Hollow block foundations.' },
    { '@type': 'PropertyValue', name: 'Energy recovery ventilator (ERV)', value: 'Cost: $1,500-$3,000. Reduction: 25-75%. Best for: Supplement or standalone for levels slightly above 4 pCi/L.' },
    { '@type': 'PropertyValue', name: 'Water radon removal', value: 'Cost: $1,200-$5,000. Reduction: 85-99% from water. Best for: Homes on private well water.' },
  ],
}

const costBreakdownSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Radon Mitigation Cost Breakdown 2026',
  description: 'Detailed cost breakdown for radon mitigation components including testing, installation, and ongoing maintenance.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Professional radon test (pre-mitigation)', value: '$150-$400' },
    { '@type': 'PropertyValue', name: 'Standard ASD system installation', value: '$800-$2,500 (most homes $1,000-$1,800)' },
    { '@type': 'PropertyValue', name: 'Additional suction points', value: '$200-$500 each' },
    { '@type': 'PropertyValue', name: 'Sump pit sealing', value: '$100-$300' },
    { '@type': 'PropertyValue', name: 'Crack sealing (supplemental)', value: '$100-$500' },
    { '@type': 'PropertyValue', name: 'Crawl space encapsulation add-on', value: '$1,500-$5,000' },
    { '@type': 'PropertyValue', name: 'Post-mitigation radon test', value: '$100-$300 pro or $15-$30 DIY' },
    { '@type': 'PropertyValue', name: 'Annual electricity cost', value: '$50-$150/year' },
    { '@type': 'PropertyValue', name: 'Fan replacement (every 5-15 years)', value: '$150-$400' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Basement Radon Testing and Mitigation: The Complete Homeowner\u2019s Guide 2026',
  description: 'Radon is the second leading cause of lung cancer. Learn how to test for radon, understand results, choose a mitigation system, and find qualified contractors.',
  image: 'https://thebasement.guide/images/Basement Radon Testing.jpg',
  datePublished: '2026-03-10',
  dateModified: '2026-03-10',
  author: { '@type': 'Organization', name: 'The Basement Guide', url: 'https://thebasement.guide' },
  publisher: { '@type': 'Organization', name: 'The Basement Guide', url: 'https://thebasement.guide' },
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
              <span className='text-teal-400 font-bold tracking-widest uppercase text-sm'>Health &amp; Safety Guide</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight max-w-5xl'>
              Basement Radon Testing &amp; Mitigation<br />
              <span className='text-teal-400'>The Complete Homeowner&apos;s Guide</span>
            </h1>
            <p className='text-xl text-slate-300 max-w-2xl mb-10 mt-8'>Radon is the second leading cause of lung cancer. Testing takes 48 hours and costs under $20. Mitigation reduces levels by up to 99%.</p>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold'>BG</div>
              <div>
                <p className='text-white font-semibold text-sm'>The Basement Guide</p>
                <p className='text-slate-400 text-xs'>Updated Mar 2026 &middot; 30 min read</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <div className='max-w-4xl mx-auto px-4 py-12'>
          {/* Intro */}
          <p className='text-lg text-slate-700 mb-4'>Radon in basements is the second leading cause of lung cancer in the United States. The EPA estimates radon exposure causes 21,000 lung cancer deaths per year, making it the number one cause of lung cancer among non-smokers. Radon is a colorless, odorless, radioactive gas that seeps into homes through the soil beneath the foundation, and basements are where it concentrates most because they sit closest to the source.</p>
          <p className='text-slate-700 mb-4'>The good news is that radon testing takes 48 hours and costs under $20. A radon mitigation system reduces radon levels by up to 99 percent in most homes. The bad news is that most homeowners never test, and the ones who do often do not know what their radon test results mean or what radon mitigation system they need.</p>
          <p className='text-slate-700 mb-6'>This guide covers everything from buying your first radon test kit to choosing a mitigation system, understanding radon mitigation costs, and maintaining the system long-term. If you are specifically interested in how basement waterproofing reduces radon entry, see our dedicated <Link href='/articles/radon-and-basement-waterproofing' className='text-teal-600 hover:underline font-medium'>radon and waterproofing guide</Link>, which covers the overlap between sealing your foundation and lowering radon levels.</p>

          {/* What Is Radon */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>What Is Radon and How Does It Get Into Your Basement?</h2>
            <p className='text-slate-700 mb-4'>Radon is a naturally occurring radioactive gas produced by the decay of uranium in soil, rock, and groundwater. It rises through the ground and enters your home through any opening where the foundation meets the soil. Basements have the highest radon concentrations in most homes because they are surrounded by soil on multiple sides and sit directly above the radon source.</p>
            <p className='text-slate-700 mb-6'>The EPA reports that roughly 1 in 15 homes in the United States has radon levels at or above the 4 pCi/L action level.</p>

            <h3 className='text-xl font-bold text-slate-900 mb-3'>Common Radon Entry Points in Basements</h3>
            <div className='space-y-3 mb-6'>
              <div className='flex gap-3 items-start bg-red-50 border border-red-200 rounded-lg p-4'><span className='text-red-500 font-bold'>&#9888;</span><p className='text-slate-700 text-sm'>Cracks in the floor slab &mdash; even hairline cracks can allow radon gas through (see our <Link href='/articles/types-of-foundation-cracks' className='text-teal-600 hover:underline font-medium'>foundation crack guide</Link> for more)</p></div>
              <div className='flex gap-3 items-start bg-red-50 border border-red-200 rounded-lg p-4'><span className='text-red-500 font-bold'>&#9888;</span><p className='text-slate-700 text-sm'>The cove joint where the floor meets the wall</p></div>
              <div className='flex gap-3 items-start bg-red-50 border border-red-200 rounded-lg p-4'><span className='text-red-500 font-bold'>&#9888;</span><p className='text-slate-700 text-sm'>Gaps around pipes, conduits, and utility penetrations</p></div>
              <div className='flex gap-3 items-start bg-red-50 border border-red-200 rounded-lg p-4'><span className='text-red-500 font-bold'>&#9888;</span><p className='text-slate-700 text-sm'>Open or poorly sealed sump pump pits and floor drains</p></div>
              <div className='flex gap-3 items-start bg-red-50 border border-red-200 rounded-lg p-4'><span className='text-red-500 font-bold'>&#9888;</span><p className='text-slate-700 text-sm'>Porous concrete block walls &mdash; hollow block is especially permeable to soil gas</p></div>
              <div className='flex gap-3 items-start bg-red-50 border border-red-200 rounded-lg p-4'><span className='text-red-500 font-bold'>&#9888;</span><p className='text-slate-700 text-sm'>Exposed soil in unfinished crawl spaces</p></div>
            </div>

            <h3 className='text-xl font-bold text-slate-900 mb-3'>Why Basements Act as Radon Collectors</h3>
            <p className='text-slate-700 mb-4'>Your home acts like a slight vacuum relative to the surrounding soil. Warm air rises inside the house (this is called the stack effect), creating lower pressure at the basement level. That pressure difference pulls soil gases, including radon, inward through every foundation opening. This effect is strongest in winter when the temperature difference between indoors and outdoors is greatest, which is why radon levels in basements are typically highest during cold months.</p>
            <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
              <p className='text-amber-800 font-semibold'>Important:</p>
              <p className='text-amber-700 text-sm'>Your neighbor&apos;s radon level tells you nothing about yours. Radon varies dramatically from house to house based on soil uranium content, foundation condition, and home pressurization. The only way to know your radon level is to test.</p>
            </div>
          </section>
          
          {/* How to Test for Radon */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>How to Test for Radon in Your Basement</h2>
            <p className='text-slate-700 mb-6'>Radon testing is simple, inexpensive, and something every homeowner with a basement should do. There are four testing approaches, and each one answers a different question.</p>

            <h3 className='text-xl font-bold text-slate-900 mb-3'>Radon Testing Methods Compared</h3>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>Method</th><th className='px-4 py-3 text-left'>Cost</th><th className='px-4 py-3 text-left'>Duration</th><th className='px-4 py-3 text-left'>Best For</th><th className='px-4 py-3 text-left'>Accuracy</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Short-term test kit (charcoal canister)</td><td className='px-4 py-3'>$10 &ndash; $30</td><td className='px-4 py-3'>2 &ndash; 7 days</td><td className='px-4 py-3'>Quick screening to see if you have a potential radon problem</td><td className='px-4 py-3'>Moderate &mdash; provides a snapshot, not an annual average</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Long-term test kit (alpha track detector)</td><td className='px-4 py-3'>$20 &ndash; $50</td><td className='px-4 py-3'>90 days &ndash; 12 months</td><td className='px-4 py-3'>Definitive measurement of your actual annual average radon exposure</td><td className='px-4 py-3'>High &mdash; accounts for seasonal variation</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Continuous radon monitor (digital plug-in)</td><td className='px-4 py-3'>$100 &ndash; $250 to purchase</td><td className='px-4 py-3'>Ongoing</td><td className='px-4 py-3'>Year-round radon monitoring, especially useful after mitigation</td><td className='px-4 py-3'>High &mdash; provides real-time readings and long-term trending</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Professional radon test (certified inspector with active monitor)</td><td className='px-4 py-3'>$150 &ndash; $400</td><td className='px-4 py-3'>48 hours</td><td className='px-4 py-3'>Real estate transactions, legal documentation, and dispute resolution</td><td className='px-4 py-3'>Highest &mdash; tamper-resistant and court-admissible results</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className='text-xl font-bold text-slate-900 mb-3'>How to Run a Short-Term Radon Test Step by Step</h3>
            <div className='space-y-4 mb-6'>
              <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>1</div><div><h4 className='font-bold text-slate-900'>Buy a radon test kit</h4><p className='text-slate-700 text-sm'>These are available at hardware stores, online retailers, or free and discounted through many state radon programs. Look for kits that include lab analysis in the price.</p></div></div>
              <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>2</div><div><h4 className='font-bold text-slate-900'>Choose the right location</h4><p className='text-slate-700 text-sm'>Place the kit in the lowest lived-in level of your home, which is usually the basement. Set it at least 20 inches off the floor, away from exterior walls, and away from drafts, humidity sources, and direct sunlight.</p></div></div>
              <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>3</div><div><h4 className='font-bold text-slate-900'>Establish closed-house conditions</h4><p className='text-slate-700 text-sm'>Keep all windows and exterior doors closed for 12 hours before the test begins and during the entire test period. Normal entry and exit through doors is fine. Do not run whole-house fans during the test.</p></div></div>
              <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>4</div><div><h4 className='font-bold text-slate-900'>Leave the kit undisturbed</h4><p className='text-slate-700 text-sm'>Do not move the kit during the test period. Most kits require a minimum of 48 hours, and leaving the kit for the full 7 days provides better accuracy.</p></div></div>
              <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>5</div><div><h4 className='font-bold text-slate-900'>Mail it to the lab</h4><p className='text-slate-700 text-sm'>Seal the kit according to the instructions and mail it to the analysis lab listed on the package. Results typically come back within 1 to 2 weeks by email or mail.</p></div></div>
              <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>6</div><div><h4 className='font-bold text-slate-900'>Read your results</h4><p className='text-slate-700 text-sm'>See the Understanding Your Radon Test Results section below for what the numbers mean and when to take action.</p></div></div>
            </div>

            <h3 className='text-xl font-bold text-slate-900 mb-3'>When to Use a Long-Term Radon Test</h3>
            <p className='text-slate-700 mb-4'>Short-term tests are useful for initial screening, but radon levels fluctuate with the seasons. A home might test at 3.5 pCi/L in summer and 7 pCi/L in winter. If your short-term radon test result falls between 2 and 4 pCi/L (the gray zone), a long-term test running 90 days or more gives a much more accurate picture of your actual annual radon exposure by averaging out seasonal swings.</p>

            <h3 className='text-xl font-bold text-slate-900 mb-3'>When You Need a Professional Radon Test</h3>
            <p className='text-slate-700 mb-4'>Professional radon testing is required or strongly recommended in four situations: real estate transactions where most lenders and buyers require certified results, post-mitigation verification to confirm the system is working, legal disputes or insurance claims, and any situation where test tampering is a concern.</p>
            <p className='text-slate-700 mb-4'>Professional testers use active continuous monitors that log radon readings every hour and produce tamper-evident results. When hiring a radon tester, ask for certification from NRPP (National Radon Proficiency Program) or NRSB (National Radon Safety Board).</p>
          </section>
          
          {/* Understanding Your Radon Test Results */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Understanding Your Radon Test Results</h2>
            <p className='text-slate-700 mb-6'>Radon is measured in picocuries per liter (pCi/L) in the United States. Here is what each radon level means and what action to take.</p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>Your Radon Level</th><th className='px-4 py-3 text-left'>Risk Level</th><th className='px-4 py-3 text-left'>Recommended Action</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-green-50'><td className='px-4 py-3 font-medium'>Below 2 pCi/L</td><td className='px-4 py-3 font-semibold text-green-700'>Low risk</td><td className='px-4 py-3'>No action required. Retest every 2 to 5 years or after major renovations to your foundation.</td></tr>
                  <tr className='bg-yellow-50'><td className='px-4 py-3 font-medium'>2 to 3.9 pCi/L</td><td className='px-4 py-3 font-semibold text-yellow-700'>Moderate risk</td><td className='px-4 py-3'>The EPA says to consider mitigation at this range. We recommend it because mitigation is inexpensive relative to the long-term lung cancer risk. If your initial test was short-term, confirm with a long-term test before deciding.</td></tr>
                  <tr className='bg-orange-50'><td className='px-4 py-3 font-medium'>4 pCi/L or higher</td><td className='px-4 py-3 font-semibold text-orange-700'>High risk &mdash; EPA action level</td><td className='px-4 py-3'>Mitigate. The EPA recommends taking action at 4 pCi/L. Run a confirmation test (another short-term or a long-term test), then install a radon mitigation system.</td></tr>
                  <tr className='bg-red-50'><td className='px-4 py-3 font-medium'>8 pCi/L or higher</td><td className='px-4 py-3 font-semibold text-red-700'>Very high risk</td><td className='px-4 py-3'>Mitigate immediately. At this level, the lung cancer risk is roughly equivalent to smoking half a pack of cigarettes per day. Do not wait for a confirmation test before contacting a radon mitigation contractor.</td></tr>
                  <tr className='bg-red-100'><td className='px-4 py-3 font-medium'>20 pCi/L or higher</td><td className='px-4 py-3 font-semibold text-red-800'>Extremely high risk</td><td className='px-4 py-3'>Mitigate urgently. Take temporary measures such as opening basement windows and running fans to reduce levels while scheduling professional radon system installation.</td></tr>
                </tbody>
              </table>
            </div>
            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4'>
              <p className='text-blue-800 font-semibold'>Important Context on Safe Radon Levels</p>
              <p className='text-blue-700 text-sm'>There is no truly safe level of radon exposure. The EPA action level of 4 pCi/L is a practical threshold, not a safety guarantee. The World Health Organization recommends a lower action level of 2.7 pCi/L (100 Bq/m&sup3;). Lifetime exposure at 4 pCi/L carries roughly a 1-in-60 chance of developing lung cancer for non-smokers. For smokers exposed to the same level, the risk rises to roughly 1 in 7.</p>
            </div>
          </section>
          
          {/* Types of Radon Mitigation Systems */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Types of Radon Mitigation Systems for Basements</h2>
            <p className='text-slate-700 mb-6'>If your radon test results call for mitigation, a certified radon professional will recommend a system based on your foundation type, home layout, and radon concentration.</p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>System Type</th><th className='px-4 py-3 text-left'>How It Works</th><th className='px-4 py-3 text-left'>Best For</th><th className='px-4 py-3 text-left'>Installed Cost</th><th className='px-4 py-3 text-left'>Radon Reduction</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Active sub-slab depressurization (ASD)</td><td className='px-4 py-3'>A pipe through the basement floor connects to a fan that pulls radon from beneath the slab and vents it above the roofline</td><td className='px-4 py-3'>Homes with poured concrete or block basement floors. Most common system, used in over 80% of installations.</td><td className='px-4 py-3'>$800 &ndash; $2,500</td><td className='px-4 py-3 font-semibold text-green-700'>90 &ndash; 99%</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Passive sub-slab depressurization</td><td className='px-4 py-3'>Same pipe system as ASD but without a fan. Relies on natural convection.</td><td className='px-4 py-3'>New construction where the system is pre-installed during building.</td><td className='px-4 py-3'>$500 &ndash; $1,000 at construction</td><td className='px-4 py-3 font-semibold text-yellow-700'>30 &ndash; 70%</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Drain-tile suction</td><td className='px-4 py-3'>Fan pulls radon from an existing perimeter drain (french drain) system and vents it outside</td><td className='px-4 py-3'>Homes that already have an interior french drain system installed</td><td className='px-4 py-3'>$800 &ndash; $1,800</td><td className='px-4 py-3 font-semibold text-green-700'>80 &ndash; 99%</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Sub-membrane depressurization</td><td className='px-4 py-3'>A vapor barrier is sealed over exposed dirt in a crawl space, then a fan depressurizes the space beneath the barrier</td><td className='px-4 py-3'>Homes with dirt-floor crawl spaces. Cost includes <Link href='/articles/crawl-space-encapsulation-guide' className='text-teal-600 hover:underline'>crawl space encapsulation</Link>.</td><td className='px-4 py-3'>$1,500 &ndash; $5,000</td><td className='px-4 py-3 font-semibold text-green-700'>80 &ndash; 99%</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Block-wall depressurization</td><td className='px-4 py-3'>Fan pulls radon from the hollow cores within concrete block foundation walls</td><td className='px-4 py-3'>Homes with hollow block foundations where sub-slab depressurization alone is not sufficient</td><td className='px-4 py-3'>$1,800 &ndash; $3,000</td><td className='px-4 py-3 font-semibold text-yellow-700'>70 &ndash; 95%</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Energy recovery ventilator (ERV)</td><td className='px-4 py-3'>Exchanges stale indoor air for fresh outdoor air while recovering heat energy to minimize energy loss</td><td className='px-4 py-3'>Supplement to other systems, or standalone for homes with levels slightly above 4 pCi/L</td><td className='px-4 py-3'>$1,500 &ndash; $3,000</td><td className='px-4 py-3 font-semibold text-yellow-700'>25 &ndash; 75%</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Water radon removal (aeration or carbon filtration)</td><td className='px-4 py-3'>Removes radon dissolved in well water before it enters the home plumbing system</td><td className='px-4 py-3'>Homes on private well water with confirmed radon in the water supply</td><td className='px-4 py-3'>$1,200 &ndash; $5,000</td><td className='px-4 py-3 font-semibold text-green-700'>85 &ndash; 99% from water</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className='text-xl font-bold text-slate-900 mb-3'>How Active Sub-Slab Depressurization Works (The Most Common System)</h3>
            <p className='text-slate-700 mb-4'>Active sub-slab depressurization is the standard radon mitigation system installed in most homes with basements. Here is how each component works.</p>
            <div className='space-y-4 mb-6'>
              <div className='bg-white border border-slate-200 rounded-xl p-5'><h4 className='font-bold text-slate-900 mb-1'>The suction pipe</h4><p className='text-slate-700 text-sm'>A 3-inch or 4-inch PVC pipe is inserted through a hole cored in the basement floor slab. The pipe connects to a sealed suction point beneath the slab where a pocket of gravel or the natural air space under the concrete allows the fan to draw soil gas from a wide area beneath the foundation.</p></div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'><h4 className='font-bold text-slate-900 mb-1'>The radon fan</h4><p className='text-slate-700 text-sm'>A radon-specific fan (typically drawing 20 to 90 watts and running continuously) is installed on the pipe. The fan is usually located in the attic, garage, or on the exterior of the home. It creates negative pressure beneath the slab, pulling radon-laden soil gas away from the foundation before it can enter the living space.</p></div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'><h4 className='font-bold text-slate-900 mb-1'>The exhaust point</h4><p className='text-slate-700 text-sm'>The pipe extends above the roofline and discharges radon gas into the outdoor air, where it disperses harmlessly. The exhaust must be above the roofline and positioned away from windows and air intakes to prevent re-entry.</p></div>
              <div className='bg-white border border-slate-200 rounded-xl p-5'><h4 className='font-bold text-slate-900 mb-1'>The system monitor</h4><p className='text-slate-700 text-sm'>A manometer (a simple U-tube gauge filled with colored fluid) is installed on the pipe where you can see it. It shows at a glance whether the fan is creating suction. If the fluid levels are equal on both sides, the system is not working and needs attention.</p></div>
            </div>
            <p className='text-slate-700 mb-4'>The entire radon system installation takes 3 to 5 hours for a standard home. There is no major demolition, minimal mess, and you can use your basement immediately after the installation is complete.</p>
          </section>
          
          {/* Radon Mitigation Cost Breakdown */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Radon Mitigation Cost Breakdown 2026</h2>
            <p className='text-slate-700 mb-6'>Here is what each component of a radon mitigation project typically costs.</p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>Cost Component</th><th className='px-4 py-3 text-left'>Typical Range</th><th className='px-4 py-3 text-left'>Notes</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Professional radon test (pre-mitigation)</td><td className='px-4 py-3'>$150 &ndash; $400</td><td className='px-4 py-3'>Required to confirm radon levels and help the contractor design the right system</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Standard ASD system installation</td><td className='px-4 py-3'>$800 &ndash; $2,500</td><td className='px-4 py-3'>Most homes fall in the $1,000 to $1,800 range for a single suction point system</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Additional suction points</td><td className='px-4 py-3'>$200 &ndash; $500 each</td><td className='px-4 py-3'>Needed for larger homes, additions built on separate foundations, or complex layouts</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Sump pit sealing</td><td className='px-4 py-3'>$100 &ndash; $300</td><td className='px-4 py-3'>Required if your sump pit is unsealed and acting as a radon entry point</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Crack sealing (supplemental)</td><td className='px-4 py-3'>$100 &ndash; $500</td><td className='px-4 py-3'>Sealing major foundation cracks improves system performance and efficiency</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Crawl space encapsulation add-on</td><td className='px-4 py-3'>$1,500 &ndash; $5,000</td><td className='px-4 py-3'>Required for dirt-floor crawl spaces. See our <Link href='/articles/crawl-space-encapsulation-guide' className='text-teal-600 hover:underline'>crawl space encapsulation guide</Link>.</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Permits</td><td className='px-4 py-3'>$50 &ndash; $200</td><td className='px-4 py-3'>Required in some jurisdictions. Your contractor should handle this.</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Post-mitigation radon test</td><td className='px-4 py-3'>$100 &ndash; $300 (pro) or $15 &ndash; $30 (DIY kit)</td><td className='px-4 py-3'>Required to verify the system achieved target radon levels</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Annual electricity cost</td><td className='px-4 py-3'>$50 &ndash; $150 per year</td><td className='px-4 py-3'>The fan runs 24/7, consuming roughly the same energy as a standard light bulb</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Fan replacement (every 5 &ndash; 15 years)</td><td className='px-4 py-3'>$150 &ndash; $400</td><td className='px-4 py-3'>Fans are the only component with a limited lifespan</td></tr>
                </tbody>
              </table>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4'>
              <p className='text-teal-800 font-semibold'>Total radon mitigation cost for most homes: $1,000 to $2,500 all-in</p>
              <p className='text-teal-700 text-sm'>For a standard active sub-slab system with pre- and post-testing. For context, radon mitigation is one of the most cost-effective health interventions in home ownership. The lifetime lung cancer risk reduction from mitigating a home at 6 pCi/L is comparable in scale to wearing a seatbelt, except the seatbelt is free and the radon system is a one-time cost of about $1,500.</p>
            </div>
          </section>

          {/* DIY vs Professional */}
          <section className='mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>DIY Radon Mitigation vs Hiring a Professional</h2>
            <p className='text-slate-700 mb-4'>Can you install a radon mitigation system yourself? Technically, yes. There is no federal law requiring professional radon installation, though some states do require licensed radon contractors. DIY radon fan kits are available online for $200 to $600.</p>
            <p className='text-slate-700 mb-6'>Should you install it yourself? In almost all cases, no. Here is the comparison.</p>
            <div className='overflow-x-auto rounded-xl border border-slate-200 mb-6'>
              <table className='w-full text-sm'>
                <thead className='bg-slate-800 text-white'>
                  <tr><th className='px-4 py-3 text-left'>Factor</th><th className='px-4 py-3 text-left'>DIY Radon System</th><th className='px-4 py-3 text-left'>Professional Radon Installation</th></tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Cost</td><td className='px-4 py-3'>$200 &ndash; $600 for materials</td><td className='px-4 py-3'>$800 &ndash; $2,500 fully installed</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Effectiveness guarantee</td><td className='px-4 py-3'>None. If the system does not reduce radon levels, you have spent money and still have a problem.</td><td className='px-4 py-3'>Most professionals guarantee results below 4 pCi/L, and many guarantee below 2 pCi/L.</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Suction point placement</td><td className='px-4 py-3'>Based on guesswork without diagnostic equipment</td><td className='px-4 py-3'>Professionals use diagnostic pressure tests to find the optimal suction point location</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Building code compliance</td><td className='px-4 py-3'>You are responsible for researching and meeting local codes</td><td className='px-4 py-3'>The contractor handles permits and inspections</td></tr>
                  <tr className='bg-white'><td className='px-4 py-3 font-medium'>Real estate value</td><td className='px-4 py-3'>DIY installation may not satisfy home buyers or mortgage lenders</td><td className='px-4 py-3'>Professional installation with documentation adds resale value</td></tr>
                  <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Risk if done incorrectly</td><td className='px-4 py-3'>System could be ineffective, or could create backdrafting of combustion appliances</td><td className='px-4 py-3'>Professional systems are engineered to avoid negative interactions with existing HVAC and combustion equipment</td></tr>
                </tbody>
              </table>
            </div>
            <p className='text-slate-700 mb-4'>The price difference between DIY and professional radon mitigation is typically $500 to $1,500. Given that radon is a confirmed carcinogen and the system needs to work correctly around the clock for decades, professional installation is strongly recommended for nearly every homeowner. For more on this topic, see our <Link href='/articles/diy-vs-hiring-pro-basement-projects' className='text-teal-600 hover:underline font-medium'>DIY vs hiring a pro guide</Link>.</p>
          </section>

                  {/* How to Choose a Radon Contractor */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>How to Choose a Qualified Radon Contractor</h2>
          <p className='text-slate-700 mb-4'>Not all radon contractors are equal. Here is what to look for when hiring a radon mitigation professional.</p>

          <div className='space-y-4 mb-6'>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Check for NRPP or NRSB Certification</h3>
              <p className='text-slate-700'>The National Radon Proficiency Program (NRPP) and National Radon Safety Board (NRSB) are the two nationally recognized certification bodies. Your contractor should hold an active certification from one of them. Ask for their certification number and verify it online.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Ask About Their Guarantee</h3>
              <p className='text-slate-700'>A reputable radon contractor will guarantee their system reduces radon levels below 4 pCi/L, and many guarantee below 2 pCi/L. Get this in writing before work begins. If they will not guarantee results, that is a red flag.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Verify Insurance and Licensing</h3>
              <p className='text-slate-700'>Confirm the contractor carries general liability insurance and workers compensation. Some states require specific radon contractor licensing. Check your state health department website for requirements.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Get Multiple Quotes</h3>
              <p className='text-slate-700'>Get at least three written estimates. Be cautious of quotes significantly below market rate, as they may indicate shortcuts in installation. A standard single suction point system should cost between $800 and $2,500 in most markets.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Ask About Post-Installation Testing</h3>
              <p className='text-slate-700'>The contractor should include or recommend a post-installation radon test within 24 to 30 days after installation. This confirms the system is working. A follow-up long-term test at 3 to 12 months is also recommended.</p>
            </div>
          </div>
        </section>

                  {/* Radon in Real Estate */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Radon in Real Estate Transactions</h2>
          <p className='text-slate-700 mb-4'>Radon testing has become a standard part of real estate transactions in many states. Whether you are buying or selling a home, understanding how radon affects the process can save you time and money.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>If You Are Buying a Home</h3>
          <div className='space-y-3 mb-6'>
            <div className='flex items-start gap-3'>
              <span className='text-teal-600 font-bold text-lg'>✔</span>
              <p className='text-slate-700'>Always request a radon test during the inspection period. A short-term test of 48 hours minimum is standard for real estate transactions.</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-teal-600 font-bold text-lg'>✔</span>
              <p className='text-slate-700'>If radon levels are above 4 pCi/L, you can negotiate with the seller to install a mitigation system before closing or to credit you the cost of installation.</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-teal-600 font-bold text-lg'>✔</span>
              <p className='text-slate-700'>Do not skip radon testing because the home looks new or the neighborhood seems low-risk. Radon levels vary house to house regardless of age or location.</p>
            </div>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>If You Are Selling a Home</h3>
          <div className='space-y-3 mb-6'>
            <div className='flex items-start gap-3'>
              <span className='text-teal-600 font-bold text-lg'>✔</span>
              <p className='text-slate-700'>Consider testing and mitigating before listing. A home with a radon system and documentation showing safe levels is more attractive to buyers.</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-teal-600 font-bold text-lg'>✔</span>
              <p className='text-slate-700'>Some states require radon disclosure. Even where not legally required, proactively addressing radon avoids last-minute negotiation surprises.</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='text-teal-600 font-bold text-lg'>✔</span>
              <p className='text-slate-700'>A professionally installed radon mitigation system can add value to your home and speed up the closing process.</p>
            </div>
          </div>
        </section>

                  {/* Long-Term Maintenance */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Long-Term Radon System Maintenance</h2>
          <p className='text-slate-700 mb-4'>Once your radon mitigation system is installed, maintaining it properly ensures it continues to protect your home for decades. The good news is that maintenance requirements are minimal.</p>

          <div className='space-y-4 mb-6'>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Check the Manometer Regularly</h3>
              <p className='text-slate-700'>Your system should have a U-tube manometer or pressure indicator on the pipe. This shows whether the fan is creating suction. Check it monthly. If the fluid levels are equal, your fan may have failed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Listen for Fan Noise Changes</h3>
              <p className='text-slate-700'>A healthy radon fan produces a low, consistent hum. If you hear rattling, grinding, or silence, the fan may need replacement. Most radon fans last 5 to 15 years depending on the model and operating conditions.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Retest Every Two Years</h3>
              <p className='text-slate-700'>The EPA recommends retesting your home every two years even with an active mitigation system. Soil conditions, foundation settling, and home modifications can all change radon entry patterns over time.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Fan Replacement</h3>
              <p className='text-slate-700'>When the fan eventually fails, replacement costs $150 to $400 including labor. This is typically the only significant maintenance expense over the life of the system. Keep your original contractor contact information for easy scheduling.</p>
            </div>
          </div>
        </section>

                  {/* FAQ Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to fix a radon problem?</h3>
              <p className='text-slate-700'>Most homes can be mitigated for $1,000 to $2,500 using an active sub-slab depressurization system. This includes installation, materials, and post-testing. Complex homes with multiple foundation types may cost more.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What radon level is dangerous in a basement?</h3>
              <p className='text-slate-700'>The EPA recommends taking action at 4 pCi/L or higher. However, there is no truly safe level of radon exposure. Many health organizations recommend considering mitigation at levels between 2 and 4 pCi/L, especially if you spend significant time in your basement.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How long does radon mitigation installation take?</h3>
              <p className='text-slate-700'>A standard active sub-slab depressurization system can be installed in 3 to 5 hours for most homes. More complex installations involving multiple suction points or crawl space encapsulation may take a full day.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Does a radon mitigation system decrease home value?</h3>
              <p className='text-slate-700'>No. A properly installed radon mitigation system with documentation showing safe radon levels actually increases buyer confidence and can add value to your home. It removes a potential deal-breaker during inspections.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I mitigate if my radon level is 3 pCi/L?</h3>
              <p className='text-slate-700'>While the EPA action level is 4 pCi/L, they also state that any radon exposure carries some risk. At 3 pCi/L, mitigation is a personal decision. Many homeowners choose to mitigate at this level, especially if they have children or spend significant time in the basement.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can radon levels in a basement change over time?</h3>
              <p className='text-slate-700'>Yes. Radon levels fluctuate seasonally, with winter months typically showing higher levels due to closed windows and heating system stack effects. Foundation settling, new cracks, and changes to landscaping or drainage can also affect radon entry over time.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What should I do if my sump pump pit is open?</h3>
              <p className='text-slate-700'>An open sump pit is a major radon entry point. It should be sealed with an airtight cover as part of any radon mitigation effort. Many radon contractors install the suction point directly through the sealed sump lid, which is an efficient approach.</p>
            </div>
          </div>
        </section>

                  {/* Final Thoughts */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Final Thoughts</h2>
          <p className='text-slate-700 mb-4'>Radon is a serious but solvable problem. Testing is inexpensive and takes minimal effort. If your levels are elevated, professional mitigation systems are highly effective, affordable, and require almost no ongoing maintenance. The health risk of ignoring radon far outweighs the cost of addressing it.</p>
          <p className='text-slate-700 mb-4'>Start with a test. If your results come back above 4 pCi/L, contact a certified radon contractor for an assessment. If you are between 2 and 4 pCi/L, consider mitigation, especially if you have a finished basement or young children in the home.</p>
          <p className='text-slate-700'>For most homeowners, radon mitigation is a one-time investment of $1,000 to $2,500 that protects your family for decades. It is one of the most cost-effective health improvements you can make to your home.</p>
        </section>

                  {/* Related Guides */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Link href='/articles/radon-and-basement-waterproofing' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Radon &amp; Basement Waterproofing</h3>
              <p className='text-slate-600 text-sm'>How sealing your basement reduces radon risks and prevents water damage.</p>
            </Link>
            <Link href='/articles/basement-waterproofing-cost-guide' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Basement Waterproofing Cost Guide</h3>
              <p className='text-slate-600 text-sm'>What to expect for professional waterproofing pricing in 2026.</p>
            </Link>
            <Link href='/articles/sump-pump-guide' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Sump Pump Buying Guide</h3>
              <p className='text-slate-600 text-sm'>Choose the right sump pump to protect your basement from flooding.</p>
            </Link>
            <Link href='/articles/homebuyer-basement-inspection-checklist' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
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
