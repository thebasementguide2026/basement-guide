import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'French Drain Cost 2026: Installation Prices Per Linear Foot & Full Project | The Basement Guide',
  description: 'French drain installation costs $10 to $50 per linear foot or $1,000 to $6,000 for a full project. Covers interior basement drains, exterior yard drains, and what drives the price difference.',
  alternates: { canonical: 'https://thebasement.guide/articles/french-drain-cost' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a French drain cost to install in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The average French drain installation cost is $5,000 in 2026. Exterior yard drains cost $2,800 to $6,500 for a typical 100-foot installation at $10 to $35 per linear foot. Interior basement perimeter drain systems cost $4,000 to $12,000 or more for a 1,000 square foot basement at $40 to $85 per linear foot. The single biggest cost variable is soil and site conditions, which can each add $500 to $2,000 to the base cost.' } },
    { '@type': 'Question', name: 'Is an interior French drain better than an exterior French drain for basement waterproofing?', acceptedAnswer: { '@type': 'Answer', text: 'Neither is universally better — they address different water problems. An interior basement perimeter drain intercepts water at the point of entry from the floor-wall joint or rising water table. An exterior French drain intercepts water before it reaches the foundation by capturing surface runoff or shallow groundwater. Many homes benefit from both systems working together.' } },
    { '@type': 'Question', name: 'Can I install a French drain myself to save money?', acceptedAnswer: { '@type': 'Answer', text: 'A shallow exterior yard French drain is achievable for DIY, with realistic savings of $1,000 to $2,500 in labor. Key requirements are maintaining 1 percent minimum slope, using proper geotextile filter fabric, and calling 811 before digging. Interior basement French drains are not appropriate DIY projects because they require jackhammering concrete, correctly sloping the drain channel, and integrating with a sump pit.' } },
    { '@type': 'Question', name: 'How long does a French drain last before it needs to be replaced?', acceptedAnswer: { '@type': 'Answer', text: 'A properly installed French drain lasts 20 to 40 years when correct filter fabric is used, gravel sizing is appropriate, and basic annual maintenance is performed. The primary cause of premature failure is clogging from fine soil particles migrating through undersized or missing filter fabric. Annual flushing with a garden hose pushes accumulated sediment toward the discharge end before it hardens.' } },
    { '@type': 'Question', name: 'Does a French drain increase home value?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, solving basement water and yard drainage problems with a documented French drain installation consistently improves home value by 5 to 15 percent compared to comparable homes with undocumented or problematic drainage. The value effect is strongest for interior basement perimeter drain systems that transform a wet basement into dry, usable space. Keep all contractor invoices, warranties, and inspection records as documentation.' } },
    { '@type': 'Question', name: 'Does a French drain need a sump pump to work?', acceptedAnswer: { '@type': 'Answer', text: 'Interior basement French drain systems almost always require a sump pump because there is typically no gravity discharge path available below floor level. Exterior French drains use gravity flow exclusively and do not require a pump as long as the discharge point is lower than the drain inlet and slope is maintained at minimum 1 percent. Exterior drains on flat properties may benefit from a pump in the collection basin.' } },
  ],
}

export default function FrenchDrainCostPage() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/french-drain-trench.jpg'
          alt='French drain installation for cost guide'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-violet-500'></div>
            <span className='text-violet-400 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            French Drain<br />
            <span className='text-violet-400'>Cost Guide 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Protect your foundation and yard. Real price data from $10 to $85 per linear foot, with full breakdowns by installation type, DIY savings, and recommended products.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-purple-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>&middot;</span>
                  <span>18 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline'>

          
          {/* Quick Answer Box */}
          <div className='bg-violet-50 border-l-4 border-violet-600 rounded-r-3xl p-8 mb-16 not-prose shadow-sm'>
            <p className='text-xs font-bold text-violet-700 uppercase tracking-widest mb-3'>Quick Answer</p>
            <p className='text-slate-900 text-2xl font-bold mb-4'>
              A French drain costs <span className='text-violet-600'>$5,000</span> on average in 2026.
            </p>
            <p className='text-slate-600 leading-relaxed font-medium'>
              Expect to pay <strong>$10 to $35 per linear foot</strong> for exterior yard drains and <strong>$40 to $85 per linear foot</strong> for interior basement systems. DIY installations can save 40 to 60 percent on labor.
            </p>
          </div>

          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-violet-500 pl-8'>
            Whether you are dealing with a swampy backyard or a basement that seeps during every storm, a French drain is the gold standard for residential water management. A French drain is a gravel-filled trench containing a perforated pipe that collects and redirects groundwater or surface water away from a foundation, basement, or low-lying yard area. French drain installation costs $10 to $35 per linear foot for exterior yard drains and $40 to $85 per linear foot for interior basement perimeter systems, with the national average project cost at approximately $5,000 in 2026. The total price depends primarily on whether the drain is installed inside the basement (requiring concrete removal and a sump pump) or outside in the yard (requiring excavation and grading).
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            A French drain is a passive, gravity-fed drainage system with no mechanical components that works by creating a preferential pathway for groundwater and surface water to follow, collecting water in a gravel-filled trench and directing it through a perforated pipe to a lower discharge point. Despite sharing a name, an interior basement French drain and an exterior yard French drain are fundamentally different projects in scope, cost, and purpose. An exterior French drain intercepts water before it reaches the foundation by capturing surface runoff or shallow groundwater in the yard and redirecting it away from the structure, while an interior basement perimeter drain intercepts water after it has already entered or is actively entering the foundation assembly and routes it to a sump pump for removal. Understanding which type your property needs is the most important decision in this project because the two systems solve different problems, and installing the wrong type wastes the entire budget without resolving the underlying water issue. For a complete project estimate that combines french drain installation with sump pump tie-in and any associated waterproofing, try our <Link href='/cost-guides/basement-waterproofing-cost-calculator' className='text-violet-700 underline hover:text-violet-900'>basement waterproofing cost calculator</Link>.
          </p>

          {/* 2026 French Drain Price Breakdown */}
          <h2 className='text-4xl mb-6'>2026 French Drain Price Breakdown</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose'>
            <div className='bg-slate-50 rounded-3xl p-8 border border-slate-100'>
              <div className='text-slate-900 font-black text-xl mb-4'>Interior (Basement)</div>
              <div className='text-3xl font-black text-violet-600 mb-2'>$4,000  to  $12,000+</div>
              <div className='text-slate-500 text-sm mb-6 font-medium'>Typical for 1,000 sq. ft. basement</div>
              <ul className='space-y-3 text-slate-600 font-medium'>
                <li className='flex items-center'><span className='text-violet-500 mr-2'>&#10004;</span> Concrete jackhammering</li>
                <li className='flex items-center'><span className='text-violet-500 mr-2'>&#10004;</span> Perforated pipe &amp; gravel</li>
                <li className='flex items-center'><span className='text-violet-500 mr-2'>&#10004;</span> New <Link href='/articles/sump-pump-cost' className='text-violet-600 hover:underline'>sump pump</Link> &amp; pit</li>
              </ul>
            </div>
            <div className='bg-slate-900 rounded-3xl p-8 text-white'>
              <div className='text-white font-black text-xl mb-4'>Exterior (Yard/Foundation)</div>
              <div className='text-3xl font-black text-violet-400 mb-2'>$2,800  to  $6,500</div>
              <div className='text-slate-400 text-sm mb-6 font-medium'>Typical 100-foot installation</div>
              <ul className='space-y-3 text-slate-300 font-medium'>
                <li className='flex items-center'><span className='text-violet-400 mr-2'>&#10004;</span> Trench excavation</li>
                <li className='flex items-center'><span className='text-violet-400 mr-2'>&#10004;</span> Geotextile filter fabric</li>
                <li className='flex items-center'><span className='text-violet-400 mr-2'>&#10004;</span> Drainage rock &amp; topsoil</li>
              </ul>
            </div>
          </div>

          {/* Detailed Cost Table */}
          <h2 className='text-4xl mb-6'>Cost by Drain Type</h2>
          <p>
            Not all French drains are created equal. Here is what each type typically costs and when it makes sense to choose one over the other.
          </p>

          <div className='overflow-x-auto my-8 not-prose'>
            <table className='w-full border-collapse text-left'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='p-4 font-bold text-slate-900'>Drain Type</th>
                  <th className='p-4 font-bold text-slate-900'>Cost per Linear Foot</th>
                  <th className='p-4 font-bold text-slate-900'>Total Range</th>
                  <th className='p-4 font-bold text-slate-900'>Best For</th>
                </tr>
              </thead>
              <tbody className='text-slate-600'>
                <tr className='border-b border-slate-100'>
                  <td className='p-4 font-medium'>Shallow Yard Drain</td>
                  <td className='p-4'>$10  to  $25</td>
                  <td className='p-4'>$1,000  to  $2,500</td>
                  <td className='p-4'>Surface water, soggy lawns</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-4 font-medium'>Deep Exterior Drain</td>
                  <td className='p-4'>$25  to  $50</td>
                  <td className='p-4'>$2,500  to  $6,500</td>
                  <td className='p-4'>Foundation protection, hillside lots</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-4 font-medium'>Interior Perimeter Drain</td>
                  <td className='p-4'>$40  to  $85</td>
                  <td className='p-4'>$4,000  to  $12,000</td>
                  <td className='p-4'>Basement <Link href='/articles/complete-basement-waterproofing-guide' className='text-violet-600 hover:underline'>waterproofing</Link></td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-4 font-medium'>Curtain Drain</td>
                  <td className='p-4'>$12  to  $30</td>
                  <td className='p-4'>$1,200  to  $4,000</td>
                  <td className='p-4'>Intercepting hillside runoff</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Cost Factors */}
          <h2 className='text-4xl mb-6'>Key Cost Factors</h2>
          <p>
            What makes one 50-foot drain cost twice as much as another? These are the variables that matter most.
          </p>

          <div className='space-y-4 not-prose'>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Trench Depth:</strong> Shallow yard drains (12 to 18 inches) are cheap to dig. Deep foundation drains (6 to 8 feet) require heavy machinery and shoring, adding $15 to $30 per linear foot.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Obstructions:</strong> Driveways, sidewalks, patios, and utility lines add significantly to labor time. Expect $500 to $2,000 extra for each major obstruction.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Concrete Disposal:</strong> For interior drains, jackhammering and hauling away old concrete slabs adds $500 to $1,000 to the total.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Soil Conditions:</strong> Clay-heavy soil drains slowly and may require additional gravel or wider trenches. Rocky soil increases excavation costs by 20 to 40 percent.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Pipe Material:</strong> Standard corrugated pipe runs $1 to $3 per foot. Rigid PVC or heavy-duty options cost $3 to $8 per foot but last longer.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Sump Pump Addition:</strong> Interior systems almost always need a <Link href='/articles/sump-pump-buying-guide' className='text-violet-600 hover:underline'>sump pump</Link> ($800 to $2,500 installed) to move collected water out of the basement.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Permits:</strong> Some municipalities require permits for drainage work, especially near property lines. Budget $50 to $200 for permit fees.</span>
            </div>
          </div>

          {/* Interior vs Exterior */}
          <h2 className='text-4xl mb-6'>Interior vs. Exterior: Which Do You Need?</h2>
          <p>
            This is the single biggest decision and it determines your final price. Interior and exterior French drains solve different problems, and choosing the wrong one wastes money.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 text-lg mb-3'>Choose Interior When:</h3>
              <ul className='space-y-2 text-slate-600'>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10004;</span> Water seeps through floor or wall joints</li>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10004;</span> High water table pushes water up</li>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10004;</span> Exterior excavation is not practical</li>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10004;</span> You are finishing or <Link href='/articles/how-to-finish-a-basement' className='text-violet-600 hover:underline'>remodeling</Link> the basement</li>
              </ul>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 text-lg mb-3'>Choose Exterior When:</h3>
              <ul className='space-y-2 text-slate-600'>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10004;</span> Surface water pools near the foundation</li>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10004;</span> Yard stays soggy days after rain</li>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10004;</span> New construction or major landscaping</li>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10004;</span> Downspouts need a proper discharge point</li>
              </ul>
            </div>
          </div>

          <p>
            Many homes benefit from both. A complete <Link href='/articles/interior-vs-exterior-waterproofing' className='text-violet-600 hover:underline'>interior and exterior waterproofing</Link> approach catches water from all directions. If budget is tight, start with whichever side is causing the active problem.
          </p>

          {/* DIY vs Professional */}
          <h2 className='text-4xl mb-6'>DIY French Drain: Can You Do It Yourself?</h2>
          <p>
            A shallow exterior yard drain is one of the more achievable DIY drainage projects. You can save 40 to 60 percent on labor costs by doing the digging and assembly yourself. Interior basement drains, however, require jackhammering concrete and installing a sump pump system, which is best left to licensed <Link href='/articles/how-to-hire-basement-waterproofing-contractor' className='text-violet-600 hover:underline'>waterproofing contractors</Link>.
          </p>

          <div className='bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6 my-8 not-prose'>
            <p className='text-sm font-bold text-amber-700 uppercase tracking-widest mb-2'>DIY Cost Savings</p>
            <p className='text-slate-700 font-medium'>
              A 50-foot exterior French drain that costs $2,500 to $4,000 professionally can be completed DIY for $500 to $1,500 in materials. The trade-off is 1 to 3 weekends of hard labor and the need to rent a trencher ($200 to $400 per day).
            </p>
          </div>

          <h3 className='text-2xl font-bold text-slate-900 mb-4'>DIY Steps for an Exterior French Drain</h3>
          <div className='space-y-3 not-prose'>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl'>
              <span className='flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5'>1</span>
              <span className='text-slate-700'><strong>Plan the route.</strong> Identify where water collects and map a path to a suitable discharge point (street, dry well, or low area). Maintain a 1 percent slope minimum.</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl'>
              <span className='flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5'>2</span>
              <span className='text-slate-700'><strong>Call 811.</strong> Always call before you dig to mark underground utilities. This is free and required by law in most states.</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl'>
              <span className='flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5'>3</span>
              <span className='text-slate-700'><strong>Dig the trench.</strong> Standard depth is 18 to 24 inches, width 6 to 12 inches. Rent a trencher for long runs.</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl'>
              <span className='flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5'>4</span>
              <span className='text-slate-700'><strong>Line with landscape fabric.</strong> Drape filter fabric along the entire trench with extra material on each side to wrap over the top later.</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl'>
              <span className='flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5'>5</span>
              <span className='text-slate-700'><strong>Add gravel base.</strong> Pour 2 to 3 inches of washed drainage gravel in the bottom.</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl'>
              <span className='flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5'>6</span>
              <span className='text-slate-700'><strong>Lay the pipe.</strong> Place perforated pipe with holes facing down on the gravel bed. Connect to a pop-up emitter or discharge point.</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl'>
              <span className='flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5'>7</span>
              <span className='text-slate-700'><strong>Backfill with gravel.</strong> Cover the pipe with 4 to 6 inches of gravel, then fold the fabric over the top to keep soil out.</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl'>
              <span className='flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5'>8</span>
              <span className='text-slate-700'><strong>Top with soil and sod.</strong> Replace the topsoil and reseed or sod as needed.</span>
            </div>
          </div>

          {/* Recommended Products */}
          <h2 className='text-4xl mb-6'>Recommended Products &amp; Tools</h2>
          <p>
            These are the drainage products we recommend based on durability, value, and real-world performance. Whether you are tackling a DIY install or just want to understand what your contractor should be using.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose'>

            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <div className='text-xs font-bold text-violet-600 uppercase tracking-widest mb-2'>Downspout Extension</div>
              <h3 className='font-black text-slate-900 text-lg mb-2'>French Drain Man Downspout Extension Kit</h3>
              <p className='text-slate-600 text-sm mb-4'>
                Professional-grade downspout adapter that connects gutters to underground drainage lines. Eliminates surface water pooling near the foundation. Easy snap-fit connection with no special tools required.
              </p>
              <a href='https://amzn.to/4iFFVjJ' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors'>
                Check Price on Amazon &rarr;
              </a>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <div className='text-xs font-bold text-violet-600 uppercase tracking-widest mb-2'>Channel Drain</div>
              <h3 className='font-black text-slate-900 text-lg mb-2'>NDS Channel Drain Kit</h3>
              <p className='text-slate-600 text-sm mb-4'>
                Pre-sloped channel drain system ideal for driveways, patios, and pool decks. Includes grate covers and connects directly to French drain pipe runs. Handles heavy water flow from hardscape areas.
              </p>
              <a href='https://amzn.to/4kSDXdN' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors'>
                Check Price on Amazon &rarr;
              </a>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <div className='text-xs font-bold text-violet-600 uppercase tracking-widest mb-2'>Drain Pipe</div>
              <h3 className='font-black text-slate-900 text-lg mb-2'>NDS 4-Inch Corrugated Perforated Pipe</h3>
              <p className='text-slate-600 text-sm mb-4'>
                The industry standard for French drain installations. Flexible corrugated design conforms to trench contours while perforations collect groundwater from all directions. Available in 100-foot rolls.
              </p>
              <a href='https://amzn.to/4aPIXtN' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors'>
                Check Price on Amazon &rarr;
              </a>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <div className='text-xs font-bold text-violet-600 uppercase tracking-widest mb-2'>Discharge Point</div>
              <h3 className='font-black text-slate-900 text-lg mb-2'>Pop-Up Drainage Emitters</h3>
              <p className='text-slate-600 text-sm mb-4'>
                Automatic pop-up emitters that open when water pressure builds and close when flow stops. Keeps debris out and provides a clean discharge point at the end of your drain line. Mounts flush with the lawn.
              </p>
              <a href='https://amzn.to/4qXyOBt' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors'>
                Check Price on Amazon &rarr;
              </a>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <div className='text-xs font-bold text-violet-600 uppercase tracking-widest mb-2'>Water Collection</div>
              <h3 className='font-black text-slate-900 text-lg mb-2'>Catch Basins and Grates</h3>
              <p className='text-slate-600 text-sm mb-4'>
                Collect surface water at low points in your yard and route it into your French drain system. Essential for areas where water pools after rain. Multiple grate styles to match landscaping.
              </p>
              <a href='https://amzn.to/4s5wFVb' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors'>
                Check Price on Amazon &rarr;
              </a>
            </div>

            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <div className='text-xs font-bold text-violet-600 uppercase tracking-widest mb-2'>Filter Fabric</div>
              <h3 className='font-black text-slate-900 text-lg mb-2'>Landscape Fabric for Drainage</h3>
              <p className='text-slate-600 text-sm mb-4'>
                Non-woven geotextile fabric that wraps the gravel bed to prevent soil and sediment from clogging the pipe. The single most important factor in long-term French drain performance. Use on every install.
              </p>
              <a href='https://amzn.to/4aVIKp7' target='_blank' rel='noopener noreferrer nofollow' className='inline-flex items-center bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors'>
                Check Price on Amazon &rarr;
              </a>
            </div>

          </div>

          {/* Pros and Cons */}
          <h2 className='text-4xl mb-6'>Pros and Cons of French Drains</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
            <div className='bg-green-50 rounded-2xl p-6 border border-green-100'>
              <h3 className='font-bold text-green-800 text-lg mb-4'>Advantages</h3>
              <ul className='space-y-3 text-slate-700'>
                <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span> Highly effective at managing both surface and subsurface water</li>
                <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span> Long lifespan of 20 to 40 years when properly installed</li>
                <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span> Passive system with no moving parts (exterior) means low maintenance</li>
                <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span><span> Protects foundation from <a href='/articles/types-of-foundation-cracks' className='text-violet-600 hover:underline'>cracking</a> and settling</span></li>
                <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span> Can increase property value by solving drainage issues</li>
              </ul>
            </div>
            <div className='bg-red-50 rounded-2xl p-6 border border-red-100'>
              <h3 className='font-bold text-red-800 text-lg mb-4'>Disadvantages</h3>
              <ul className='space-y-3 text-slate-700'>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span> Interior systems require jackhammering and significant disruption</li>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span> Can clog over time without proper filter fabric</li>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span> Exterior installation disrupts landscaping temporarily</li>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span> Does not solve roof or plumbing leaks</li>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span> Needs a proper discharge point or sump pump to work</li>
              </ul>
            </div>
          </div>

          {/* When to Hire */}
          <h2 className='text-4xl mb-6'>When to Hire a Professional</h2>
          <p>
            Call a licensed drainage contractor for any of these situations:
          </p>
          <div className='space-y-3 not-prose'>
            <div className='flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'>Trenches deeper than 3 feet or any work near the foundation footing</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'>Driveway, patio, or sidewalk crossings that require cutting and repair</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'>Interior basement drain systems with concrete removal</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'>Properties with known utility lines, septic systems, or well water</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'>Persistent <Link href='/articles/how-to-prevent-basement-mold' className='text-violet-600 hover:underline'>mold</Link> or <Link href='/articles/musty-basement-smell' className='text-violet-600 hover:underline'>musty smell</Link> issues linked to drainage failure</span>
            </div>
            <div className='flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'>Grading or slope problems that require engineering assessment</span>
            </div>
          </div>

          <div className='bg-red-50 rounded-2xl p-6 border border-red-200 my-8 not-prose'>
            <h3 className='font-bold text-red-800 text-lg mb-4'>Common Contractor Red Flags</h3>
            <ul className='space-y-3 text-slate-700 text-sm'>
              <li className='flex items-start gap-2'><span className='text-red-500'>&#10006;</span> No written contract or warranty</li>
              <li className='flex items-start gap-2'><span className='text-red-500'>&#10006;</span> Demands full payment upfront</li>
              <li className='flex items-start gap-2'><span className='text-red-500'>&#10006;</span> Skips filter fabric to save money</li>
              <li className='flex items-start gap-2'><span className='text-red-500'>&#10006;</span> Uses smooth pipe instead of perforated where perforated is needed</li>
              <li className='flex items-start gap-2'><span className='text-red-500'>&#10006;</span> Cannot explain their drainage plan or discharge point</li>
            </ul>
          </div>

          {/* Maintenance */}
          <h2 className='text-4xl mb-6'>Maintenance Tips</h2>
          <p>
            A French drain is not completely maintenance-free. These simple habits keep your system working for decades.
          </p>
          <div className='space-y-4 not-prose'>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Flush the line once a year</strong> with a garden hose inserted at the highest point. This pushes out sediment before it hardens.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Keep the outlet clear</strong> of leaves, debris, and soil buildup. Check pop-up emitters after heavy storms.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Re-grade the surface</strong> every couple of years so water keeps flowing downhill toward the drain trench.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Inspect catch basins</strong> quarterly and remove accumulated debris from grates and sumps.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Watch for settling</strong> over the trench line. Depressions can indicate pipe collapse or gravel compaction.</span>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-500 mt-0.5 text-lg'>&#9679;</span>
              <span className='text-slate-700'><strong>Test your sump pump</strong> monthly if your interior drain connects to one. Pour a bucket of water into the pit to verify it activates. See our <Link href='/articles/why-basement-floods-with-sump-pump' className='text-violet-600 hover:underline'>troubleshooting guide</Link> if it fails.</span>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className='text-4xl mb-6'>Frequently Asked Questions</h2>

          <div className='space-y-6 my-8 not-prose'>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>How much does a French drain cost to install in 2026?</h4>
              <p className='text-slate-600'>The average French drain installation cost is $5,000 in 2026, but the range is wide because interior and exterior systems are fundamentally different projects. Exterior yard drains cost $2,800 to $6,500 for a typical 100-foot installation at $10 to $35 per linear foot, depending on trench depth, soil conditions, and whether hardscape crossings are involved. Interior basement perimeter drain systems cost $4,000 to $12,000 or more for a 1,000 square foot basement at $40 to $85 per linear foot, with the higher cost driven by concrete jackhammering, sump pump installation, and the complexity of working inside an occupied home. The single biggest cost variable within each type is soil and site conditions &mdash; clay soil, rocky ground, and obstructions like utilities, tree roots, and existing hardscaping can each add $500 to $2,000 to the base cost. Always get at least three written quotes that specify the drain type, pipe material, filter fabric, discharge point, and warranty before committing to a contractor.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Is an interior French drain better than an exterior French drain for basement waterproofing?</h4>
              <p className='text-slate-600'>Neither is universally better &mdash; they address different water problems, and choosing between them depends on where your water is coming from rather than which system is more expensive or comprehensive. An interior basement perimeter drain is the right choice when water is entering through the floor-wall joint, rising from below due to a high water table, or seeping through the lower wall sections under hydrostatic pressure, because it intercepts water at the point of entry and removes it before it can spread across the floor. An exterior French drain at the foundation footing is the right choice when water is saturating the soil adjacent to the foundation wall and driving hydrostatic pressure against it from outside, because it relieves that pressure at the source before water reaches the wall. Many homes with chronic basement water problems benefit from both systems working together: the exterior drain reduces the volume of water pressing against the foundation, and the interior drain manages any residual water that does enter. See our <Link href='/articles/interior-vs-exterior-waterproofing' className='text-violet-600 hover:underline'>interior vs exterior waterproofing guide</Link> for the full decision framework.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Can I install a French drain myself to save money?</h4>
              <p className='text-slate-600'>A shallow exterior yard French drain is one of the more achievable DIY drainage projects for a homeowner comfortable with physical labor and basic excavation work. The realistic DIY savings on a 50-foot exterior drain are $1,000 to $2,500 in labor, with materials running $500 to $1,500 versus a professional installation cost of $2,500 to $4,000. The key requirements for a successful DIY exterior drain are maintaining a consistent 1 percent minimum slope toward the discharge point, using proper non-woven geotextile filter fabric wrapped completely around the gravel bed, and calling 811 before digging to mark underground utilities. Interior basement French drains are not appropriate DIY projects for most homeowners because they require jackhammering reinforced concrete, correctly sloping the drain channel under the slab, integrating the system with a sump pit, and pouring new concrete over the completed drain &mdash; all of which require specialized equipment and experience to do correctly. An improperly installed interior drain that does not slope correctly or connect properly to the sump will fail immediately and require professional repair at greater total cost than hiring correctly from the start. See our <Link href='/articles/diy-vs-hiring-pro-basement-projects' className='text-violet-600 hover:underline'>DIY vs hiring a pro guide</Link> for how to evaluate this decision honestly.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>How long does a French drain last before it needs to be replaced?</h4>
              <p className='text-slate-600'>A properly installed French drain lasts 20 to 40 years when the correct filter fabric is used, gravel sizing is appropriate for the soil type, and basic annual maintenance is performed. The primary cause of premature French drain failure is clogging: fine soil particles migrate through undersized or missing filter fabric over time and fill the gravel voids and pipe perforations, reducing the system&apos;s ability to collect and move water. Clay-heavy soils are the most aggressive at clogging French drains because clay particles are small enough to pass through low-quality filter fabrics and dense enough to compact within the gravel bed. Annual flushing of the drain line with a garden hose from the highest access point pushes accumulated sediment toward the discharge end before it hardens into a permanent clog. Interior basement drain systems that incorporate a sump pump have the additional maintenance requirement of pump testing and battery backup replacement, which affects the functional lifespan of the complete system independent of the drain tile itself. See our <Link href='/articles/why-basement-floods-with-sump-pump' className='text-violet-600 hover:underline'>why does my basement still flood guide</Link> for the signs that a French drain is failing or underperforming.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Does a French drain increase home value?</h4>
              <p className='text-slate-600'>Yes, solving basement water and yard drainage problems with a documented French drain installation consistently improves home value and marketability, particularly in regions where basement water issues are common and buyers are conditioned to ask about drainage history. A dry basement with documented waterproofing work including a French drain and sump pump system can increase appraised value by 5 to 15 percent compared to a comparable home with undocumented or problematic drainage, because buyers and appraisers treat unresolved water history as a material risk that discounts the offer price. The value effect is strongest for interior basement perimeter drain systems that transform a wet basement into a dry, usable space, because the square footage becomes genuinely livable and can be legally finished. Exterior yard drains that eliminate standing water near the foundation add value by removing a visible drainage problem that would otherwise show up in a home inspection report as a recommended repair item. Keep all contractor invoices, warranties, and inspection records as part of the home&apos;s documentation package, because documented drainage work is significantly more valuable to buyers and appraisers than undocumented improvements. See our <Link href='/articles/waterproofing-home-appraisal-value' className='text-violet-600 hover:underline'>waterproofing and home appraisal value guide</Link> for data on how drainage improvements affect appraised outcomes.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Does a French drain need a sump pump to work?</h4>
              <p className='text-slate-600'>Interior basement French drain systems almost always require a sump pump because the drain channel collects water at the lowest point in the basement and there is typically no gravity discharge path available below floor level. The perimeter drain channels water to a sump pit at the lowest point, and the pump then removes it through a discharge line to a point well away from the foundation. Without the pump, the sump pit would fill and overflow, defeating the entire purpose of the drain system. Exterior French drains use gravity flow exclusively and do not require a pump as long as the discharge point is lower than the drain inlet and the slope is maintained at a minimum of 1 percent throughout the run. However, exterior drains on flat properties or those discharging into a dry well rather than a daylight outlet may benefit from a pump in the collection basin when gravity alone is insufficient to move the collected water fast enough during heavy rain events. See our <Link href='/articles/sump-pump-buying-guide' className='text-violet-600 hover:underline'>sump pump buying guide</Link> and <Link href='/articles/backup-power-sump-pumps' className='text-violet-600 hover:underline'>backup power for sump pumps guide</Link> for how to choose and protect the pump that pairs with any interior French drain system.</p>
            </div>
          </div>

          {/* Decision Table */}
          <h2 className='text-4xl mb-6'>Which French Drain Does Your Property Need?</h2>
          <div className='overflow-x-auto not-prose mb-12'>
            <table className='w-full border-collapse text-sm'>
              <thead><tr className='bg-slate-800 text-white'><th className='px-4 py-3 text-left font-semibold'>Your Situation</th><th className='px-4 py-3 text-left font-semibold'>Drain Type Needed</th><th className='px-4 py-3 text-left font-semibold'>Estimated Cost</th></tr></thead>
              <tbody className='divide-y divide-gray-200'>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Water seeping through basement floor or cove joint</td><td className='px-4 py-3 text-slate-600'>Interior perimeter drain plus sump pump</td><td className='px-4 py-3 text-slate-600'>$4,000 to $12,000</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>High water table pushing water up through floor cracks</td><td className='px-4 py-3 text-slate-600'>Interior perimeter drain plus sump pump</td><td className='px-4 py-3 text-slate-600'>$4,000 to $12,000</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Water entering through lower wall sections under pressure</td><td className='px-4 py-3 text-slate-600'>Interior perimeter drain plus sump pump</td><td className='px-4 py-3 text-slate-600'>$4,000 to $12,000</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Yard stays soggy days after rain, no basement involvement</td><td className='px-4 py-3 text-slate-600'>Shallow exterior yard drain</td><td className='px-4 py-3 text-slate-600'>$1,000 to $2,500</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Surface water pooling near foundation after rain</td><td className='px-4 py-3 text-slate-600'>Exterior foundation drain or regrading plus downspout extensions</td><td className='px-4 py-3 text-slate-600'>$500 to $3,000</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Hillside or slope directing runoff toward foundation</td><td className='px-4 py-3 text-slate-600'>Curtain drain uphill of foundation</td><td className='px-4 py-3 text-slate-600'>$1,200 to $4,000</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Water saturating soil adjacent to foundation wall</td><td className='px-4 py-3 text-slate-600'>Deep exterior foundation drain at footing level</td><td className='px-4 py-3 text-slate-600'>$2,800 to $6,500</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Basement flooding despite existing interior drain</td><td className='px-4 py-3 text-slate-600'>Inspect pump, check drain slope, consider exterior supplemental drain</td><td className='px-4 py-3 text-slate-600'>$500 to $3,000</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>New construction, foundation not yet backfilled</td><td className='px-4 py-3 text-slate-600'>Exterior footing drain during construction</td><td className='px-4 py-3 text-slate-600'>$1,500 to $4,000</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Flat yard, no natural gravity discharge point available</td><td className='px-4 py-3 text-slate-600'>Interior drain with sump pump or exterior drain to dry well</td><td className='px-4 py-3 text-slate-600'>$3,000 to $8,000</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Water entering through one specific wall section only</td><td className='px-4 py-3 text-slate-600'>Targeted exterior drain on that wall plus crack injection</td><td className='px-4 py-3 text-slate-600'>$1,500 to $4,000</td></tr>
                <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Both yard drainage and basement seepage problems</td><td className='px-4 py-3 text-slate-600'>Combination exterior plus interior system</td><td className='px-4 py-3 text-slate-600'>$6,000 to $15,000</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>DIY budget under $1,500, exterior problem only</td><td className='px-4 py-3 text-slate-600'>DIY shallow yard drain</td><td className='px-4 py-3 text-slate-600'>$500 to $1,500 in materials</td></tr>
              </tbody>
            </table>
          </div>

          {/* Glossary */}
          <h2 className='text-4xl mb-6'>Glossary</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose'>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>French Drain (Drain Tile)</h4>
              <p className='text-slate-600 text-sm'>A passive gravity-fed drainage system consisting of a gravel-filled trench containing a perforated pipe that collects groundwater or surface water and redirects it through gravity flow to a lower discharge point, with no mechanical components or electricity required for exterior applications. The system works by creating a preferential pathway for water to follow: water in the surrounding soil moves toward the low-pressure zone created by the gravel void space, enters the perforated pipe, and flows downhill to the discharge outlet. Interior basement applications pair the drain tile with a sump pump to remove collected water when no gravity discharge path exists below floor level. See our <a href='/articles/complete-basement-waterproofing-guide' className='text-violet-600 hover:underline'>complete basement waterproofing guide</a> for how French drains fit into a complete waterproofing system.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Interior Perimeter Drain</h4>
              <p className='text-slate-600 text-sm'>A French drain system installed beneath the basement floor along the base of the foundation walls, consisting of a jackhammered trench, perforated drain pipe surrounded by gravel, and a connection to a sump pit that pumps collected water out of the basement. Interior perimeter drains are the most widely installed professional waterproofing solution for existing homes because they intercept water at the floor-wall joint and sub-slab level where hydrostatic pressure most commonly drives water entry. A complete interior perimeter drain system with sump pump typically costs $4,000 to $12,000 for a standard basement and carries 25-year warranties from reputable contractors. See our <a href='/articles/french-drain-vs-sump-pump' className='text-violet-600 hover:underline'>French drain vs sump pump guide</a> for how the two components work together.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Exterior French Drain (Curtain Drain)</h4>
              <p className='text-slate-600 text-sm'>A French drain installed outside the foundation at or near the footing level to intercept groundwater before it reaches the foundation wall, relieving hydrostatic pressure at its source rather than managing water after it has entered the foundation assembly. Exterior foundation drains require excavating down to the footing level (typically 6 to 8 feet), installing perforated pipe in a gravel bed wrapped in filter fabric, and backfilling with gravel before restoring landscaping. A curtain drain is a variation installed uphill of the foundation to intercept surface runoff and shallow groundwater moving down a slope before it reaches the foundation perimeter. See our <a href='/articles/interior-vs-exterior-waterproofing' className='text-violet-600 hover:underline'>interior vs exterior waterproofing guide</a> for when exterior drainage is warranted versus interior systems.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Hydrostatic Pressure</h4>
              <p className='text-slate-600 text-sm'>The lateral and upward force exerted by water-saturated soil against a foundation wall or floor, which increases with soil moisture content and depth and is the primary driver of water intrusion through foundation walls, the cove joint, and floor cracks. French drains reduce hydrostatic pressure by intercepting and removing the groundwater that would otherwise saturate the soil adjacent to the foundation, lowering the water table around the structure and reducing the force pushing against the foundation walls. Interior perimeter drains manage hydrostatic pressure by giving the water a controlled exit route rather than attempting to block it under sustained pressure. See our <a href='/articles/bowing-basement-walls' className='text-violet-600 hover:underline'>bowing basement walls guide</a> for how unchecked hydrostatic pressure eventually causes structural wall movement.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Geotextile Filter Fabric</h4>
              <p className='text-slate-600 text-sm'>A non-woven or woven synthetic fabric wrapped around the gravel bed of a French drain to prevent fine soil and sediment particles from migrating into the gravel voids and perforated pipe over time, which is the primary cause of French drain clogging and premature system failure. Non-woven needle-punched geotextile is the standard for most residential French drain applications because it allows water to pass freely while filtering out fine particles from clay, silt, and sandy soils. Using undersized or missing filter fabric is the most common contractor shortcut that leads to drain failure within 5 to 10 years rather than the 20 to 40 year lifespan a properly installed system achieves.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Perforated Pipe</h4>
              <p className='text-slate-600 text-sm'>A drainage pipe with holes or slots along its length that allow groundwater from the surrounding gravel bed to enter the pipe and flow by gravity toward the discharge point or sump pit. Corrugated polyethylene perforated pipe is the most common residential choice at $1 to $3 per linear foot due to its flexibility, light weight, and ease of installation, while rigid PVC perforated pipe costs $3 to $8 per linear foot but provides greater structural rigidity and longer service life in applications where soil loading or vehicle traffic above the drain is a concern. The pipe is installed with perforations facing down in most interior applications so that water enters from the gravel bed below rather than from above where sediment would accumulate in the pipe.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Sump Pump</h4>
              <p className='text-slate-600 text-sm'>An electrically powered pump installed in a pit at the lowest point of the basement floor that automatically activates when the collected water level reaches a set threshold, pumping water through a discharge line to a location well away from the foundation. Every interior French drain system requires a sump pump to function because collected water has no gravity path out of the basement, and every sump pump must be paired with a battery backup unit to maintain operation during the power outages that most commonly occur during the storms generating the most water. See our <a href='/articles/sump-pump-buying-guide' className='text-violet-600 hover:underline'>sump pump buying guide</a> and <a href='/articles/backup-power-sump-pumps' className='text-violet-600 hover:underline'>backup power for sump pumps guide</a> for selection and backup guidance.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Discharge Point</h4>
              <p className='text-slate-600 text-sm'>The location where a French drain system releases collected water, which must be at a lower elevation than the drain inlet and positioned well away from the foundation to prevent the discharged water from re-entering the soil near the structure. Common discharge points include a pop-up emitter that releases water at a lower point in the yard, a dry well that allows water to percolate into deep soil away from the foundation, a storm drain connection where permitted by local ordinance, or in the case of interior systems, a sump pump discharge line that typically runs 10 to 20 feet from the foundation before releasing above grade. An improperly located discharge point that releases water too close to the foundation negates the entire drainage benefit of the system.</p>
            </div>
          </div>

          {/* Related Guides */}
          <h2 className='text-4xl mb-6'>Related Guides</h2>

          <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 not-prose'>
            <Link href='/articles/complete-basement-waterproofing-guide' className='group block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='font-bold text-violet-700 mb-1'>Complete Waterproofing Guide</h3>
              <p className='text-sm text-slate-600'>The full playbook for keeping your basement dry in 2026.</p>
            </Link>
            <Link href='/articles/sump-pump-cost' className='group block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='font-bold text-violet-700 mb-1'>Sump Pump Installation Cost</h3>
              <p className='text-sm text-slate-600'>What to expect for professional sump pump pricing in 2026.</p>
            </Link>
            <Link href='/articles/interior-vs-exterior-waterproofing' className='group block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='font-bold text-violet-700 mb-1'>Interior vs. Exterior Waterproofing</h3>
              <p className='text-sm text-slate-600'>Understand which approach works best for your situation.</p>
            </Link>
            <Link href='/articles/basement-waterproofing-cost' className='group block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='font-bold text-violet-700 mb-1'>Waterproofing Cost Guide</h3>
              <p className='text-sm text-slate-600'>What to expect for professional waterproofing pricing in 2026.</p>
            </Link>
            <Link href='/articles/foundation-crack-repair-cost' className='group block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='font-bold text-violet-700 mb-1'>Foundation Crack Repair Cost</h3>
              <p className='text-sm text-slate-600'>Pricing for fixing cracks before they lead to water intrusion.</p>
            </Link>
            <Link href='/articles/mold-remediation-cost' className='group block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='font-bold text-violet-700 mb-1'>Mold Remediation Cost Guide</h3>
              <p className='text-sm text-slate-600'>What to expect for professional mold removal pricing in 2026.</p>
            </Link>
            <Link href='/articles/basement-insulation-guide' className='group block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'>
              <h3 className='font-bold text-violet-700 mb-1'>Basement Insulation Guide</h3>
              <p className='text-sm text-slate-600'>R-values, materials, and installation methods for below-grade walls.</p>
            </Link>
          </section>

          {/* Lead Form CTA */}
          <div className='bg-violet-600 rounded-3xl p-12 text-white my-20 shadow-xl shadow-violet-200 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get a Professional Quote</h2>
              <p className='text-violet-100 text-lg mb-10'>
                Get an accurate estimate for your specific yard or basement layout from local drainage experts.
              </p>
              <div className='bg-white rounded-2xl p-8 text-slate-900 shadow-2xl'>
                <LeadForm />
              </div>
            </div>
          </div>

        </div>
      </main>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  )
}
