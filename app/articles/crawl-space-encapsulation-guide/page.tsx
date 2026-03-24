import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crawl Space Encapsulation: Complete Guide (2026) | The Basement Guide',
  description: 'Complete guide to crawl space encapsulation in 2026. Learn costs, DIY vs pro installation, materials, step-by-step process, and maintenance tips for a dry, healthy crawl space.',
}

export default function CrawlSpaceEncapsulationGuide() {
  return (
    <div className='bg-white min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is crawl space encapsulation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Crawl space encapsulation is sealing up the space under your house with vapor barriers, insulation, and a dehumidifier to keep out moisture and improve your home.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does crawl space encapsulation cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Around $5,500 on average, ranging from $1,500 to $15,000 depending on the size of the space and extras needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is crawl space encapsulation worth it?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, if your crawl space is moist. It cuts energy costs up to 20 percent, prevents mold, and adds value to your home.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I encapsulate a crawl space myself?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simple encapsulation is possible DIY for $1,500-$3,000 in materials, but professional installation is recommended for tricky spaces and comes with warranties.',
                },
              },
            ],
          }),
        }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/images/crawl-space-encapsulation-guide/Crawl Space Encapsulation.jpg'
          alt='Crawl space encapsulation with vapor barrier installation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>Waterproofing</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Crawl Space Encapsulation<br />
            <span className='text-indigo-400'>Complete Guide</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed'>
            Everything you need to know about sealing your crawl space. Costs, step-by-step process, DIY vs pro, materials, and maintenance tips for 2026.
          </p>
          <div className='flex items-center space-x-4 text-sm text-slate-400'>
            <span className='bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium'>BG</span>
            <span className='font-medium'>The Basement Guide Staff</span>
            <span className='text-slate-600'>|</span>
            <span>Updated Feb 2026 &bull; 18 min read</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <article className='lg:col-span-8 space-y-12'>

            {/* Intro */}
            <section>
              <p className='text-lg text-slate-700 leading-relaxed mb-8'>Crawl space encapsulation is a comprehensive moisture control system that seals a vented crawl space from ground moisture and outside air by installing a continuous heavy-duty vapor barrier on the floor and walls, closing foundation vents, insulating the perimeter walls and rim joists, and maintaining controlled humidity with a dedicated dehumidifier. Unlike vented crawl spaces that rely on outside air circulation to manage moisture, an encapsulated crawl space is conditioned as part of the home&apos;s thermal envelope, eliminating the humid outdoor air that causes wood rot, mold growth, floor sagging, and pest infiltration in traditional vented designs. The system typically costs $3,000 to $15,000 professionally installed depending on crawl space size, existing conditions, and whether mold remediation or drainage is needed before encapsulation begins. A properly installed encapsulation system lasts 20 to 30 years, recoupts 70 to 90 percent of its cost at resale, and can reduce HVAC energy consumption by up to 20 percent by eliminating the largest source of uncontrolled air and moisture infiltration in most homes.</p>
              <p className='text-lg text-slate-700 leading-relaxed'>
                If you have a crawl space under your house that is always damp or musty, you are not alone. It can cause mold, sagging floors, and skyrocketing energy bills. Crawl space encapsulation seals off that area to keep out moisture, bugs, and cold drafts, turning it into a clean, controlled space that helps your home instead of hurting it.
              </p>
              <p className='text-slate-700 leading-relaxed mt-4'>
                In this guide we cover what encapsulation is, why it is worth it, how to do it step by step, what it costs, and tips on DIY versus calling in professionals. This is based on building codes like the International Residential Code (IRC) and real homeowner experiences.
              </p>
            </section>

            {/* What Is It */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>What Is Crawl Space Encapsulation?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Instead of letting damp soil and outside air mess with your home&#39;s foundation, encapsulation seals everything up tight. It is more than just laying down plastic&#8212;it is a full system that includes:
              </p>
              <ul className='space-y-3 text-slate-700 ml-4'>
                <li className='flex items-start gap-2'><span className='text-indigo-600 font-bold'>&#8226;</span> A heavy-duty <Link href='/articles/best-vapor-barriers' className='text-indigo-600 underline hover:text-indigo-800'>vapor barrier</Link> (10 to 20 mil) over the floor and up the walls</li>
                <li className='flex items-start gap-2'><span className='text-indigo-600 font-bold'>&#8226;</span> Closing off vents and plugging any gaps to make it airtight</li>
                <li className='flex items-start gap-2'><span className='text-indigo-600 font-bold'>&#8226;</span> Insulating the walls, rim joists, and sometimes the ceiling</li>
                <li className='flex items-start gap-2'><span className='text-indigo-600 font-bold'>&#8226;</span> A dehumidifier set to 45 to 50 percent humidity to pull out extra moisture</li>
                <li className='flex items-start gap-2'><span className='text-indigo-600 font-bold'>&#8226;</span> Sometimes a <Link href='/articles/sump-pump-buying-guide' className='text-indigo-600 underline hover:text-indigo-800'>sump pump</Link> or humidity sensors for added peace of mind</li>
              </ul>
              <p className='text-slate-700 leading-relaxed mt-4'>
                It is perfect for homes with old-school vented crawl spaces, especially in humid or cold climates. In some areas, it can qualify for energy rebates.
              </p>
            </section>

            {/* Benefits */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Benefits of Crawl Space Encapsulation</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-indigo-50 rounded-lg p-5 border border-indigo-200'>
                  <h3 className='font-bold text-indigo-900 mb-2'>Moisture &amp; Mold Prevention</h3>
                  <p className='text-slate-700 text-sm'>Stops wet air from rising up, <Link href='/articles/how-to-prevent-basement-mold' className='text-indigo-600 underline hover:text-indigo-800'>preventing mold growth</Link> and musty smells from reaching your living space.</p>
                </div>
                <div className='bg-indigo-50 rounded-lg p-5 border border-indigo-200'>
                  <h3 className='font-bold text-indigo-900 mb-2'>Better Indoor Air Quality</h3>
                  <p className='text-slate-700 text-sm'>Seals out dust, radon, and allergens. Many homeowners see a noticeable drop in allergy symptoms.</p>
                </div>
                <div className='bg-indigo-50 rounded-lg p-5 border border-indigo-200'>
                  <h3 className='font-bold text-indigo-900 mb-2'>Energy Savings</h3>
                  <p className='text-slate-700 text-sm'>A sealed space means less work for your HVAC&#8212;up to 20 percent off energy bills, saving $200 to $500 per year.</p>
                </div>
                <div className='bg-indigo-50 rounded-lg p-5 border border-indigo-200'>
                  <h3 className='font-bold text-indigo-900 mb-2'>Pest Prevention</h3>
                  <p className='text-slate-700 text-sm'>Blocks easy access for mice, spiders, termites, and other crawl space invaders.</p>
                </div>
                <div className='bg-indigo-50 rounded-lg p-5 border border-indigo-200'>
                  <h3 className='font-bold text-indigo-900 mb-2'>Structural Protection</h3>
                  <p className='text-slate-700 text-sm'>Prevents wood rot and floor warping by keeping moisture away from joists and beams.</p>
                </div>
                <div className='bg-indigo-50 rounded-lg p-5 border border-indigo-200'>
                  <h3 className='font-bold text-indigo-900 mb-2'>Home Value Boost</h3>
                  <p className='text-slate-700 text-sm'>Looks great in inspections and often pays back 70 to 90 percent when you sell your home.</p>
                </div>
              </div>
            </section>

            {/* Pros and Cons */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Pros and Cons of Crawl Space Encapsulation</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10003; Built to last 20 to 30 years or more</li>
                    <li>&#10003; Cuts down on future repairs like mold removal</li>
                    <li>&#10003; Makes your whole house more comfortable and efficient</li>
                    <li>&#10003; Often comes with warranties (10 to 25 years)</li>
                    <li>&#10003; May lower your insurance premiums</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&#10007; Not cheap up front ($1,500 to $15,000)</li>
                    <li>&#10007; Work can be messy and take 2 to 5 days</li>
                    <li>&#10007; Requires periodic maintenance on dehumidifier</li>
                    <li>&#10007; Very low or flooding spaces may need extra prep</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Step by Step */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>How to Encapsulate a Crawl Space: Step-by-Step</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>The whole process usually takes professionals 2 to 5 days, or longer if you are going solo. Here is how it breaks down:</p>
              <div className='space-y-4'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>1. Inspection and Prep</h3>
                  <p className='text-slate-700'>Check for water spots, mold, bugs, or weak spots. Clear out junk, remove old insulation, and fix any leaks. A <Link href='/articles/radon-and-basement-waterproofing' className='text-indigo-600 underline hover:text-indigo-800'>radon test</Link> is smart if you are in a hotspot area. This might run $100 to $300 but saves headaches later.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>2. Lay the Vapor Barrier</h3>
                  <p className='text-slate-700'>Roll out a sturdy 10 to 20 mil polyethylene sheet over the dirt, pushing it up the walls and around posts by 6 to 12 inches. Overlap edges by a foot and seal them with tape or sealant.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>3. Seal Up Vents and Gaps</h3>
                  <p className='text-slate-700'>Block exterior vents with foam or covers. Caulk around pipes, wires, and anything else poking through to make it airtight.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>4. Add Insulation</h3>
                  <p className='text-slate-700'>Install rigid <Link href='/articles/basement-insulation' className='text-indigo-600 underline hover:text-indigo-800'>foam boards</Link> (R-5 to R-10) on walls and rim joists. Spray foam fills tricky spots and keeps things efficient.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>5. Set Up Dehumidifier and Drainage</h3>
                  <p className='text-slate-700'>Install a quality <Link href='/articles/best-basement-dehumidifiers' className='text-indigo-600 underline hover:text-indigo-800'>dehumidifier</Link> set to 45 to 50 percent humidity with a drain line. Add a sump pump if water tends to collect in the space.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>6. Final Touches</h3>
                  <p className='text-slate-700'>Add an access door, <Link href='/articles/best-water-leak-detectors' className='text-indigo-600 underline hover:text-indigo-800'>humidity sensors</Link>, and test everything for a day or two. If there is bad mold, clean it up first&#8212;that could add $1,000 to $5,000.</p>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5 mt-6'>
                <p className='text-indigo-900 font-semibold mb-3'>Crawl Space Encapsulation and Moisture Control with Mike Rowe</p><div className='relative w-full' style={{paddingBottom: '56.25%'}}><iframe className='absolute top-0 left-0 w-full h-full rounded-lg' src='https://www.youtube.com/embed/kTMy_2fA3NE' title='Crawl Space Encapsulation and Moisture Control with Mike Rowe' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe></div>
              </div>
            </section>

            {/* Cost Breakdown */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Crawl Space Encapsulation Cost Breakdown</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>Expect to pay around $5,500 on average, but it can range from $1,500 to $15,000 depending on your space&#39;s size and condition.</p>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
                  <thead>
                    <tr className='bg-slate-800 text-white text-sm'>
                      <th className='p-3 text-left'>Component</th>
                      <th className='p-3 text-left'>Average Cost</th>
                      <th className='p-3 text-left'>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Vapor Barrier Materials</td>
                      <td className='p-3'>$500 to $2,000</td>
                      <td className='p-3'>10 to 20 mil poly for about 1,000 sq ft</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Insulation</td>
                      <td className='p-3'>$800 to $2,500</td>
                      <td className='p-3'>Foam for walls and joists</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Dehumidifier</td>
                      <td className='p-3'>$800 to $2,000</td>
                      <td className='p-3'>Solid unit with auto-drain</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Sump Pump (If Needed)</td>
                      <td className='p-3'>$500 to $1,500</td>
                      <td className='p-3'>For spaces that get wet</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Labor &amp; Install</td>
                      <td className='p-3'>$2,000 to $6,000</td>
                      <td className='p-3'>2 to 5 days from experts</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Mold Cleanup (Optional)</td>
                      <td className='p-3'>$1,000 to $5,000</td>
                      <td className='p-3'>If mold is already present</td>
                    </tr>
                    <tr className='bg-indigo-50'>
                      <td className='p-3 font-bold'>Total Average</td>
                      <td className='p-3 font-bold'>~$5,500</td>
                      <td className='p-3'>For a standard 800 to 1,200 sq ft area</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* DIY vs Pro */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>DIY vs Professional Encapsulation</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-3'>DIY Approach</h3>
                  <p className='text-slate-700 text-sm mb-3'>If you are handy and your crawl space is accessible, you can save $2,000 to $4,000 by doing it yourself. Total cost: $1,500 to $3,000 in materials.</p>
                  <p className='text-slate-700 text-sm'>However, it is hard work&#8212;crawling around in tight spaces, sealing everything perfectly. Mistakes can trap moisture instead of blocking it, and there is no warranty.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-3'>Professional Installation</h3>
                  <p className='text-slate-700 text-sm mb-3'>Recommended for most homeowners. Pros bring expertise for a true seal, plus warranties (10 to 25 years). It costs more but you avoid the hassle and risks.</p>
                  <p className='text-slate-700 text-sm'>Search for local crawl space encapsulation companies and get at least 3 quotes from certified teams.</p>
                </div>
              </div>
            </section>

            {/* Recommended Materials */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Best Materials and Recommendations</h2>
              <div className='space-y-4'>
                <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <div>
                    <p className='text-indigo-900 font-semibold'>Vapor Barrier: Stego Wrap 15-Mil</p>
                    <p className='text-slate-700 text-sm'>Tough against tears, great for floors and walls</p>
                  </div>
                  <a href='https://amzn.to/4qXjC7n' target='_blank' rel='noopener noreferrer sponsored' className='inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center'>Check Price on Amazon</a>
                </div>
                <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <div>
                    <p className='text-indigo-900 font-semibold'>Insulation: Reflectix Foil-Faced Bubble Wrap</p>
                    <p className='text-slate-700 text-sm'>Reflects heat, easy to install</p>
                  </div>
                  <a href='https://amzn.to/46rh764' target='_blank' rel='noopener noreferrer sponsored' className='inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center'>Check Price on Amazon</a>
                </div>
                <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <div>
                    <p className='text-indigo-900 font-semibold'>Dehumidifier: AprilAire E080</p>
                    <p className='text-slate-700 text-sm'>Covers up to 2,200 sq ft, super reliable</p>
                  </div>
                  <a href='https://amzn.to/46y2JsD' target='_blank' rel='noopener noreferrer sponsored' className='inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center'>Check Price on Amazon</a>
                </div>
                <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <div>
                    <p className='text-indigo-900 font-semibold'>Sump Pump: Zoeller M53</p>
                    <p className='text-slate-700 text-sm'>Quiet and powerful for drainage</p>
                  </div>
                  <a href='https://amzn.to/4rLf9Ga' target='_blank' rel='noopener noreferrer sponsored' className='inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center'>Check Price on Amazon</a>
                </div>
                <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <div>
                    <p className='text-indigo-900 font-semibold'>Seam Tape: Nashua 322</p>
                    <p className='text-slate-700 text-sm'>Sticks strong, waterproof</p>
                  </div>
                  <a href='https://amzn.to/46RZ8WH' target='_blank' rel='noopener noreferrer sponsored' className='inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center'>Check Price on Amazon</a>
                </div>
              </div>
            </section>

            {/* Maintenance */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Maintenance After Encapsulation</h2>
              <div className='space-y-4'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Check the Dehumidifier Monthly</h3>
                  <p className='text-slate-700'>Dump water if needed, clean filters, and make sure it is running. A professional tune-up runs $100 to $200 per year.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Annual Inspection</h3>
                  <p className='text-slate-700'>Crawl in or hire someone to spot rips in the barrier, water intrusion, or pest activity through the access door.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Track Humidity</h3>
                  <p className='text-slate-700'>A cheap hygrometer keeps tabs on moisture levels. Aim for under <Link href='/articles/basement-humidity-guide' className='text-indigo-600 underline hover:text-indigo-800'>50 percent relative humidity</Link> at all times.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Test the Sump Pump</h3>
                  <p className='text-slate-700'>Every few months, dump some water in to see if it kicks on. Replace the battery backup annually.</p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>What is crawl space encapsulation?</h3>
                  <p className='text-slate-700'>It is sealing up the space under your house with vapor barriers, insulation, and a dehumidifier to keep out dampness and improve your home&#39;s air quality and efficiency.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>How much does crawl space encapsulation cost?</h3>
                  <p className='text-slate-700'>Around $5,500 on average, from $1,500 to $15,000 depending on the size of your crawl space and extras like mold cleanup or sump pumps.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Is crawl space encapsulation worth it?</h3>
                  <p className='text-slate-700'>Yes&#8212;if your crawl space is moist, it cuts energy costs up to 20 percent, stops mold, prevents <Link href='/articles/complete-basement-waterproofing-guide' className='text-indigo-600 underline hover:text-indigo-800'>structural damage</Link>, and adds value to your home.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Can I encapsulate a crawl space myself?</h3>
                  <p className='text-slate-700'>Yes for simple installs. Clean it out, lay the barrier, seal vents, insulate, and add a dehumidifier. But professional installation is recommended for tricky spaces.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-2'>Does crawl space encapsulation stop radon?</h3>
                  <p className='text-slate-700'>It helps reduce radon levels, but you should test your levels and add dedicated venting if needed.</p>
                </div>
              </div>
            </section>

            {/* Final Advice */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Final Advice</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Crawl space encapsulation is one of those upgrades that just makes sense for a more comfortable, healthier house. Check your space for moisture signs, then decide if DIY or professional installation fits your situation. The energy savings and peace of mind are worth the investment.
              </p>
              <p className='text-slate-700 leading-relaxed'>
                For more on keeping moisture in check, see this <a href='https://basc.pnnl.gov/home-improvement-expert/checklists/vented-unvented-crawl-space' target='_blank' rel='noopener noreferrer' className='text-indigo-600 underline hover:text-indigo-800'>DOE guide on vented and unvented crawl spaces</a>.
              </p>
            </section>

          </article>

          {/* Sidebar */}
          <aside className='lg:col-span-4'>
            <div className='sticky top-8 space-y-8'>
              <LeadForm />
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
