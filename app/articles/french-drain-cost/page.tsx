import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'French Drain Installation Cost 2026: Interior & Exterior Pricing | The Basement Guide',
  description: 'How much does a French drain cost in 2026? Complete pricing guide covering interior basement drains ($40 to $85/ft), exterior yard drains ($10 to $35/ft), DIY tips, recommended products, and when to hire a pro.',
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
            Whether you are dealing with a swampy backyard or a basement that seeps during every storm, a French drain is the gold standard for water management. But the cost varies wildly depending on one critical factor: <strong>where the drain goes</strong>.
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

          <ul>
            <li><strong>Trench Depth:</strong> Shallow yard drains (12 to 18 inches) are cheap to dig. Deep foundation drains (6 to 8 feet) require heavy machinery and shoring, adding $15 to $30 per linear foot.</li>
            <li><strong>Obstructions:</strong> Driveways, sidewalks, patios, and utility lines add significantly to labor time. Expect $500 to $2,000 extra for each major obstruction.</li>
            <li><strong>Concrete Disposal:</strong> For interior drains, jackhammering and hauling away old concrete slabs adds $500 to $1,000 to the total.</li>
            <li><strong>Soil Conditions:</strong> Clay-heavy soil drains slowly and may require additional gravel or wider trenches. Rocky soil increases excavation costs by 20 to 40 percent.</li>
            <li><strong>Pipe Material:</strong> Standard corrugated pipe runs $1 to $3 per foot. Rigid PVC or heavy-duty options cost $3 to $8 per foot but last longer.</li>
            <li><strong>Sump Pump Addition:</strong> Interior systems almost always need a <Link href='/articles/sump-pump-buying-guide' className='text-violet-600 hover:underline'>sump pump</Link> ($800 to $2,500 installed) to move collected water out of the basement.</li>
            <li><strong>Permits:</strong> Some municipalities require permits for drainage work, especially near property lines. Budget $50 to $200 for permit fees.</li>
          </ul>

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

          <h3>DIY Steps for an Exterior French Drain</h3>
          <ol>
            <li><strong>Plan the route.</strong> Identify where water collects and map a path to a suitable discharge point (street, dry well, or low area). Maintain a 1 percent slope minimum.</li>
            <li><strong>Call 811.</strong> Always call before you dig to mark underground utilities. This is free and required by law in most states.</li>
            <li><strong>Dig the trench.</strong> Standard depth is 18 to 24 inches, width 6 to 12 inches. Rent a trencher for long runs.</li>
            <li><strong>Line with landscape fabric.</strong> Drape filter fabric along the entire trench with extra material on each side to wrap over the top later.</li>
            <li><strong>Add gravel base.</strong> Pour 2 to 3 inches of washed drainage gravel in the bottom.</li>
            <li><strong>Lay the pipe.</strong> Place perforated pipe with holes facing down on the gravel bed. Connect to a pop-up emitter or discharge point.</li>
            <li><strong>Backfill with gravel.</strong> Cover the pipe with 4 to 6 inches of gravel, then fold the fabric over the top to keep soil out.</li>
            <li><strong>Top with soil and sod.</strong> Replace the topsoil and reseed or sod as needed.</li>
          </ol>

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
                <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span> Protects foundation from <Link href='/articles/types-of-foundation-cracks' className='text-violet-600 hover:underline'>cracking</Link> and settling</li>
                <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span> Can increase property value by solving drainage issues</li>
              </ul>
            </div>
            <div className='bg-red-50 rounded-2xl p-6 border border-red-100'>
              <h3 className='font-bold text-red-800 text-lg mb-4'>Disadvantages</h3>
              <ul className='space-y-3 text-slate-700'>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'> to </span> Interior systems require jackhammering and significant disruption</li>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'> to </span> Can clog over time without proper filter fabric</li>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'> to </span> Exterior installation disrupts landscaping temporarily</li>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'> to </span> Does not solve roof or plumbing leaks</li>
                <li className='flex items-start gap-2'><span className='text-red-500 font-bold'> to </span> Needs a proper discharge point or sump pump to work</li>
              </ul>
            </div>
          </div>

          {/* When to Hire */}
          <h2 className='text-4xl mb-6'>When to Hire a Professional</h2>
          <p>
            Call a licensed drainage contractor for any of these situations:
          </p>
          <ul>
            <li>Trenches deeper than 3 feet or any work near the foundation footing</li>
            <li>Driveway, patio, or sidewalk crossings that require cutting and repair</li>
            <li>Interior basement drain systems with concrete removal</li>
            <li>Properties with known utility lines, septic systems, or well water</li>
            <li>Persistent <Link href='/articles/how-to-prevent-basement-mold' className='text-violet-600 hover:underline'>mold</Link> or <Link href='/articles/musty-basement-smell' className='text-violet-600 hover:underline'>musty smell</Link> issues linked to drainage failure</li>
            <li>Grading or slope problems that require engineering assessment</li>
          </ul>

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
          <ul>
            <li><strong>Flush the line once a year</strong> with a garden hose inserted at the highest point. This pushes out sediment before it hardens.</li>
            <li><strong>Keep the outlet clear</strong> of leaves, debris, and soil buildup. Check pop-up emitters after heavy storms.</li>
            <li><strong>Re-grade the surface</strong> every couple of years so water keeps flowing downhill toward the drain trench.</li>
            <li><strong>Inspect catch basins</strong> quarterly and remove accumulated debris from grates and sumps.</li>
            <li><strong>Watch for settling</strong> over the trench line. Depressions can indicate pipe collapse or gravel compaction.</li>
            <li><strong>Test your sump pump</strong> monthly if your interior drain connects to one. Pour a bucket of water into the pit to verify it activates. See our <Link href='/articles/why-basement-floods-with-sump-pump' className='text-violet-600 hover:underline'>troubleshooting guide</Link> if it fails.</li>
          </ul>

          {/* FAQ Section */}
          <h2 className='text-4xl mb-6'>Frequently Asked Questions</h2>

          <div className='space-y-6 my-8 not-prose'>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>How much does a French drain cost to install?</h4>
              <p className='text-slate-600'>The average cost is $5,000 in 2026. Exterior yard drains typically run $2,800 to $6,500, while interior basement systems cost $4,000 to $12,000 or more depending on basement size and complexity.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Is an interior French drain better than exterior?</h4>
              <p className='text-slate-600'>Interior drains are better for managing hydrostatic pressure and rising water tables in existing homes. Exterior drains prevent water from reaching the foundation but require significant excavation. Many homes benefit from both.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Can I install a French drain myself?</h4>
              <p className='text-slate-600'>Simple exterior yard drains are a feasible DIY project, typically saving 40 to 60 percent on labor. Interior basement drains involving concrete removal and sump pumps are best left to professionals.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>How long does a French drain last?</h4>
              <p className='text-slate-600'>A properly installed French drain lasts 20 to 40 years. Longevity depends on quality filter fabric, correct gravel sizing, and regular maintenance like annual flushing.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Does a French drain increase home value?</h4>
              <p className='text-slate-600'>Yes. Solving basement water and yard drainage issues removes a major concern for buyers. A dry basement with documented drainage work can increase your <Link href='/articles/waterproofing-home-appraisal-value' className='text-violet-600 hover:underline'>home appraisal value</Link> significantly.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Do French drains need a sump pump?</h4>
              <p className='text-slate-600'>Interior French drains almost always connect to a <Link href='/articles/sump-pump-cost' className='text-violet-600 hover:underline'>sump pump</Link>. Exterior drains use gravity to discharge water downhill and typically do not need a pump unless the yard is flat.</p>
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
    </div>
  )
}
