import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Egress Window Cost Guide 2026 | The Basement Guide',
  description: 'How much does it cost to install a basement egress window in 2026? Full cost breakdown for materials, excavation, permits, and labor. National average $3,850 to $4,200.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need an egress window even if my basement was finished years ago?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if you are now using any room as a bedroom or plan to list it as a bedroom on a real estate disclosure, an egress window is required regardless of when the basement was finished. The IRC requirement applies to current use, not the date of construction. Inspectors and appraisers are trained to identify basement bedrooms without proper egress, and a room without it cannot legally be counted as a bedroom. The cost of adding egress retroactively ($2,700 to $5,900) is almost always recovered in the appraised value increase ($15,000 to $30,000) that comes from converting the space to a legal bedroom.' } },
    { '@type': 'Question', name: 'What is included in the egress window installation price and what adds extra cost?', acceptedAnswer: { '@type': 'Answer', text: 'A standard professionally installed egress window includes the window unit and frame ($800 to $2,000), the window well ($400 to $1,200), excavation and drainage ($800 to $2,000), concrete or block cutting and lintel installation ($600 to $1,500), waterproofing and flashing ($300 to $600), and permits and inspections ($150 to $600). Foundation type is the primary extra cost driver: poured concrete requires diamond-blade saw cutting that costs more than removing concrete block. Deep basements add $500 to $1,500. Interior finishing is almost always excluded and should be budgeted separately at $300 to $800.' } },
    { '@type': 'Question', name: 'Will I need a window well and ladder with my egress window?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, virtually every below-grade egress window installation requires a window well, and any well deeper than 44 inches from the basement floor requires a permanently mounted ladder or built-in steps. The window well must provide at least 9 square feet of total floor area, project at least 36 inches from the foundation wall, and be at least 36 inches wide. Plastic corrugated wells cost $400 to $800 installed, while galvanized steel wells cost $600 to $1,200. A ladder or steps adds $150 to $350.' } },
    { '@type': 'Question', name: 'How long does egress window installation take?', acceptedAnswer: { '@type': 'Answer', text: 'Most standard egress window installations complete in 1 to 3 days once the crew starts on-site work. Day 1 covers exterior excavation, concrete or block cutting, and lintel installation. Day 2 covers setting the window unit, installing the window well, backfilling, waterproofing, and flashing. The permit process itself typically takes 2 to 6 weeks before on-site work can begin.' } },
    { '@type': 'Question', name: 'Can I install a basement egress window myself to save money?', acceptedAnswer: { '@type': 'Answer', text: 'Egress window installation is technically within DIY capability for homeowners with masonry experience, but most who attempt it underestimate the scope. The concrete cutting phase is highest-risk: an incorrect cut can cause cracking that propagates through the foundation wall. Most jurisdictions require a licensed contractor for the permit. Realistic DIY savings are materials only ($1,200 to $2,800 versus $2,700 to $5,900 total), at the cost of significant physical labor, specialized tool rental, and structural risk.' } },
    { '@type': 'Question', name: 'Are there rebates or tax credits for egress window installation?', acceptedAnswer: { '@type': 'Answer', text: 'The most significant incentive in 2026 is the federal Energy Efficient Home Improvement Credit, covering up to 30 percent of the cost of qualifying energy-efficient windows up to $600 per year. The egress window must meet ENERGY STAR Most Efficient criteria. Some homeowners insurance carriers offer small premium discounts (1 to 5 percent) for adding code-compliant life-safety features. State and local rebate programs vary — check with your state energy office and local utility company.' } },
  ],
}

export default function EgressWindowCost() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/egresswindow.jpg'
          alt='Basement egress window installation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-orange-500'></div>
            <span className='text-orange-400 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Egress Window <br />
            <span className='text-orange-400'>Cost Guide 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Thinking about turning part of your basement into a legal bedroom? Here is the complete 2026 breakdown of every dollar from window units to permits and labor.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-red-400 flex items-center justify-center text-white font-bold text-sm mr-4'>BG</div>
              <div>
                <p className='text-white font-semibold text-sm'>The Basement Guide Staff</p>
                <p className='text-slate-400 text-xs'>Updated Feb 2026 &middot; 18 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='max-w-4xl'>

          {/* Intro */}
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            In 2026, the average cost for a professionally installed basement egress window sits right around <strong>$3,850 to $4,200</strong> nationally, with most homeowners paying between <strong>$2,700 and $5,900</strong>. This guide breaks down every dollar so you know exactly what you are paying for, what adds extra, and how to get the best value.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            A basement egress window installation is a structural modification to the foundation rather than a standard window replacement, which is why the cost range is wider than most homeowners expect. The project requires cutting through a concrete or block foundation wall to create a structural opening, installing a lintel to carry the load above the opening, excavating the exterior soil to create the window well, and then setting the window unit itself &mdash; with waterproofing and drainage at every stage. Foundation type is the primary cost driver: poured concrete requires diamond-blade saw cutting at significantly higher labor cost than concrete block, which can be removed block by block. The sequencing relationship to other basement work matters too: egress window installation should happen before interior finishing because the concrete cutting and excavation disturb the floor and wall perimeter, and the new opening must be properly waterproofed before any drywall or insulation goes in around it.
          </p>

          {/* What Is an Egress Window */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>What Exactly Is an Egress Window and Why Do You Need One?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            An egress window is a specially sized emergency escape opening required by code for any basement room used as a bedroom or sleeping area. It gives people a quick way out and lets firefighters get in fast. Without one the room cannot legally be called a bedroom. That hurts your resale value and safety.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Even if your basement was finished years ago, converting a space into a bedroom means you need to add proper egress now.
          </p>

          {/* Cost Breakdown Table */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>2026 Egress Window Cost Breakdown</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Here is where every dollar goes in a typical below-grade basement install.
          </p>

          <div className='overflow-x-auto mb-10'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='text-left px-6 py-4 font-bold'>Component</th>
                  <th className='text-left px-6 py-4 font-bold'>National Cost 2026</th>
                  <th className='text-left px-6 py-4 font-bold'>What It Covers</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Window unit, frame, casement</td>
                  <td className='px-6 py-4 text-slate-700'>$800 &ndash; $2,000</td>
                  <td className='px-6 py-4 text-slate-600'>Vinyl or fiberglass, low-E glass</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Window well (plastic/corrugated)</td>
                  <td className='px-6 py-4 text-slate-700'>$400 &ndash; $1,200</td>
                  <td className='px-6 py-4 text-slate-600'>Keeps dirt out and gives exit space</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Excavation, drainage, gravel</td>
                  <td className='px-6 py-4 text-slate-700'>$800 &ndash; $2,000</td>
                  <td className='px-6 py-4 text-slate-600'>Digging, stone base, pump if needed</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Concrete or block cutting, lintel</td>
                  <td className='px-6 py-4 text-slate-700'>$600 &ndash; $1,500</td>
                  <td className='px-6 py-4 text-slate-600'>Structural opening through the foundation</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Ladder or steps</td>
                  <td className='px-6 py-4 text-slate-700'>$100 &ndash; $350</td>
                  <td className='px-6 py-4 text-slate-600'>Required if well deeper than 44 inches</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Waterproofing, flashing, trim</td>
                  <td className='px-6 py-4 text-slate-700'>$300 &ndash; $600</td>
                  <td className='px-6 py-4 text-slate-600'>Keeps water out and finishes the look</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>Permit, inspections</td>
                  <td className='px-6 py-4 text-slate-700'>$150 &ndash; $600</td>
                  <td className='px-6 py-4 text-slate-600'>Local requirements</td>
                </tr>
                <tr className='bg-orange-50 font-bold'>
                  <td className='px-6 py-4 text-slate-900'>Total Professional Install</td>
                  <td className='px-6 py-4 text-orange-600'>$2,700 &ndash; $5,900</td>
                  <td className='px-6 py-4 text-slate-700'>Everything turnkey</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>National average</td>
                  <td className='px-6 py-4 text-slate-700'>$3,850 &ndash; $4,200</td>
                  <td className='px-6 py-4 text-slate-600'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='px-6 py-4 font-medium text-slate-900'>DIY materials only</td>
                  <td className='px-6 py-4 text-slate-700'>$1,200 &ndash; $2,800</td>
                  <td className='px-6 py-4 text-slate-600'>You still need tools, disposal, and usually a permit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-10'>
            <p className='text-amber-900 font-semibold mb-1'>Common Cost Drivers</p>
            <p className='text-amber-800'>Deeper basements, poured concrete foundations, and any extra drainage or grading work will push costs toward the higher end of the range.</p>
          </div>

          {/* How Long */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>How Long Does the Job Take?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Most standard installs finish in <strong>1 to 3 days</strong>. Day 1 is usually excavation and cutting. Day 2 is setting the window, well, and finishing. Rain or unexpected utilities can stretch it to a third day.
          </p>

          {/* Best Window Type */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>What Kind of Window Is Best for a Basement?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Casement crank-out windows are the clear winner in 2026. They give the largest clear opening and meet code the easiest. Horizontal sliders work too. Avoid hopper or awning styles as they rarely open wide enough for the full 5.7 square feet requirement.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Choose low-E glass and vinyl or fiberglass frames for better energy efficiency in a damp basement.
          </p>

          {/* Window Well and Ladder */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Do You Need a Window Well and Ladder?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Yes, for almost every basement. The well must be at least <strong>9 square feet</strong> total area, project 36 inches from the wall, and be 36 inches wide. If the well is deeper than 44 inches, you must add a permanent ladder or steps &mdash; an easy $150 to $300 add-on and a huge safety upgrade.
          </p>

          {/* DIY */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Can You Install an Egress Window Yourself?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Technically yes if you have masonry experience and the right tools. But most homeowners who start DIY end up calling a pro. Cutting a structural hole in your foundation is risky &mdash; one mistake can cause cracks or new water problems. Most towns require a licensed contractor for the permit anyway.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Save the DIY route for above-grade windows only.
          </p>

          {/* Home Value */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Will It Increase Your Home's Value?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Absolutely. Turning a basement space into a legal bedroom usually adds <strong>$15,000 to $30,000</strong> in appraised value. That is often 3 to 5 times what you spend. Buyers and appraisers love seeing code-compliant bedrooms.
          </p>

          {/* Permits */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Do You Need a Permit?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Yes, almost always. Check with your local building department before you start. Expect a few weeks for approval in most areas. The permit proves the work was done to code when you sell or refinance.
          </p>

          {/* Rebates */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Are There Any Rebates or Tax Credits in 2026?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Not many direct rebates, but energy-efficient low-E egress windows can qualify for the <strong>federal Energy Efficient Home Improvement Credit</strong> &mdash; up to $600. Some insurance companies give a small discount for adding life-safety features.
          </p>

          {/* Code Requirements */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>2026 Egress Window Code Requirements</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            The International Residential Code, still the standard in most states, requires:
          </p>
          <ul className='space-y-3 mb-10'>
            <li className='flex items-start gap-3'>
              <span className='text-teal-500 mt-1'>&#10003;</span>
              <span className='text-slate-700'><strong>Minimum clear opening:</strong> 5.7 sq ft (5.0 sq ft if at grade)</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-teal-500 mt-1'>&#10003;</span>
              <span className='text-slate-700'><strong>Minimum height:</strong> 24 inches</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-teal-500 mt-1'>&#10003;</span>
              <span className='text-slate-700'><strong>Minimum width:</strong> 20 inches</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-teal-500 mt-1'>&#10003;</span>
              <span className='text-slate-700'><strong>Maximum sill height:</strong> 44 inches from floor</span>
            </li>
          </ul>

          {/* FAQ Section */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-8'>Frequently Asked Questions About Basement Egress Windows</h2>

          <div className='space-y-8 mb-12'>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Do I need an egress window even if my basement was finished years ago?</h3>
              <p className='text-slate-700 leading-relaxed'>Yes, if you are now using any room as a bedroom or plan to list it as a bedroom on a real estate disclosure, an egress window is required regardless of when the basement was finished. The IRC requirement applies to current use, not the date of construction, which means a basement bedroom finished in 2005 without egress is still non-compliant today and will be flagged during any future permit pull, home inspection, or appraisal. Inspectors and appraisers are trained to identify basement bedrooms without proper egress, and a room without it cannot legally be counted as a bedroom in the home&apos;s square footage or listing. The cost of adding egress retroactively ($2,700 to $5,900) is almost always recovered in the appraised value increase ($15,000 to $30,000) that comes from converting the space to a legal bedroom. Address it before listing the home rather than after, because a buyer&apos;s inspector discovering the violation gives the buyer significant negotiating leverage. See our <Link href='/articles/basement-permits-guide' className='text-teal-600 underline hover:text-teal-800'>basement permits guide</Link> for how retroactive permits work in most jurisdictions.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>What is included in the egress window installation price and what adds extra cost?</h3>
              <p className='text-slate-700 leading-relaxed'>A standard professionally installed egress window includes the window unit and frame ($800 to $2,000), the window well ($400 to $1,200), excavation and drainage ($800 to $2,000), concrete or block cutting and lintel installation ($600 to $1,500), waterproofing and flashing ($300 to $600), and permits and inspections ($150 to $600). What adds significant cost beyond the standard scope is foundation type: poured concrete requires diamond-blade saw cutting that costs meaningfully more than removing concrete block unit by unit, and this difference alone can push a mid-range project to the high end of the range. Deep basements (9 feet or more below grade) require more extensive excavation and larger window wells, adding $500 to $1,500. Any unexpected utilities, tree roots, or existing drainage systems in the excavation path add both time and cost. Interior finishing around the new opening (drywall, trim, painting) is almost always excluded from contractor quotes and should be budgeted separately at $300 to $800 depending on finish level.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Will I need a window well and ladder with my egress window?</h3>
              <p className='text-slate-700 leading-relaxed'>Yes, virtually every below-grade egress window installation requires a window well, and any well deeper than 44 inches from the basement floor requires a permanently mounted ladder or built-in steps. The window well must provide at least 9 square feet of total floor area, project at least 36 inches from the foundation wall, and be at least 36 inches wide to meet IRC requirements, giving occupants enough room to open the window fully and climb out in an emergency. Plastic corrugated wells are the most common and affordable option at $400 to $800 installed, while galvanized steel wells are more durable and cost $600 to $1,200. A permanently mounted ladder or built-in steps adds $150 to $350 and is required by code when the well depth exceeds 44 inches, which is common in basements with 9-foot or deeper floor-to-ceiling heights. Every well should also have a drainage layer of 6 to 12 inches of gravel at the base connected to the footing drain or a dedicated dry well, because a window well that fills with water during rain pushes water directly through the window frame into the basement.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How long does egress window installation take?</h3>
              <p className='text-slate-700 leading-relaxed'>Most standard egress window installations complete in 1 to 3 days once the crew starts on-site work. Day 1 typically covers exterior excavation, concrete or block cutting, and lintel installation. Day 2 covers setting the window unit, installing the window well, backfilling, waterproofing, and flashing. A third day is sometimes needed for final grading, drainage connection, interior patching around the opening, and cleanup. Delays most commonly occur from unexpected utilities in the excavation path, rock or dense clay soil that slows digging, rain that makes concrete work impractical, or permit inspection scheduling that requires an inspection before backfilling. The permit process itself typically takes 2 to 6 weeks before on-site work can begin, which is the longer part of the overall project timeline for most homeowners.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Can I install a basement egress window myself to save money?</h3>
              <p className='text-slate-700 leading-relaxed'>Egress window installation is technically within DIY capability for homeowners with masonry experience and access to a concrete cutting saw, but most who attempt it underestimate the scope and end up hiring a contractor partway through. The concrete cutting phase is the highest-risk step: an incorrect cut or missing rebar can cause cracking that propagates through the foundation wall, and improperly sized openings that require widening after the fact cost more to fix than hiring correctly from the start. Most jurisdictions require a licensed contractor for the permit, and an unpermitted egress window installation that is later discovered during a home sale or refinance must be retroactively permitted or removed. The realistic DIY savings are in materials only ($1,200 to $2,800 versus $2,700 to $5,900 total), and those savings come at the cost of significant physical labor, specialized tool rental, permit complications, and structural risk. If you have genuine masonry and concrete experience and can pull a permit in your jurisdiction as an owner-builder, the savings are real. Otherwise, the professional installation cost is worth it for a structural project with this level of consequence. See our <Link href='/articles/diy-vs-hiring-pro-basement-projects' className='text-teal-600 underline hover:text-teal-800'>DIY vs hiring a pro guide</Link> for how to evaluate this decision.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Are there rebates or tax credits for egress window installation?</h3>
              <p className='text-slate-700 leading-relaxed'>The most significant financial incentive available in 2026 is the federal Energy Efficient Home Improvement Credit, which covers up to 30 percent of the cost of qualifying energy-efficient windows up to a maximum credit of $600 per year. To qualify, the egress window must meet ENERGY STAR Most Efficient criteria, which requires specific U-factor and solar heat gain coefficient ratings &mdash; ask your contractor or window supplier to confirm the specific unit qualifies before purchasing. Some homeowners insurance carriers offer small premium discounts (typically 1 to 5 percent) for adding code-compliant life-safety features including egress windows, particularly on policies in states where basement egress is mandated. State and local rebate programs vary significantly &mdash; check with your state energy office and local utility company for any available incentives that apply to your specific window installation. Document all receipts, contractor invoices, and window specifications carefully, as the tax credit requires IRS Form 5695 and proof of qualifying product specs at filing.</p>
            </div>
          </div>

          {/* Glossary */}
          <h2 className='text-3xl font-extrabold text-slate-900 mt-16 mb-6'>Glossary of Egress Window Terms</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Clear Opening</h4>
              <p className='text-slate-600 text-sm'>The actual usable open space when an egress window is fully opened, measured in square feet and calculated by multiplying the clear opening height by the clear opening width. The IRC requires a minimum clear opening of 5.7 square feet (or 5.0 square feet for windows at grade level) to ensure an adult can exit and a firefighter with equipment can enter in an emergency. Clear opening is distinct from the rough opening cut in the foundation wall &mdash; the window frame, sash, and hardware all reduce the clear opening below the rough opening dimensions, which is why window selection must be verified against the clear opening requirement rather than the overall window size.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Window Well</h4>
              <p className='text-slate-600 text-sm'>The dug-out semicircular or rectangular area excavated directly outside an egress window that keeps surrounding soil from pressing against the window, provides the physical space needed to open the window fully, and gives occupants room to climb out safely. IRC code requires the window well to have a minimum floor area of 9 square feet, project at least 36 inches from the foundation wall, and be at least 36 inches wide. Every window well should include a drainage layer of 6 to 12 inches of gravel at the base connected to the footing drain or a dry well to prevent water accumulation that would otherwise push directly through the window frame into the basement.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Sill Height</h4>
              <p className='text-slate-600 text-sm'>The vertical distance measured from the finished basement floor surface to the bottom interior edge of the egress window opening, which the IRC limits to a maximum of 44 inches to ensure occupants can reach and operate the window without assistance during an emergency. Sill height is one of the most commonly violated egress requirements in older finished basements, particularly where small hopper windows were installed high on the wall to maximize light while minimizing foundation penetration depth. If existing windows are above 44 inches sill height, the only compliant solution is a new window installation at the correct height rather than modifying the existing opening.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Casement Window</h4>
              <p className='text-slate-600 text-sm'>A window hinged on one vertical side that swings outward like a door when operated by a crank mechanism, making it the most popular egress window style for basements because the entire sash swings clear to provide the maximum possible clear opening. Unlike double-hung or slider windows where only half the window area opens at any time, a casement window opens the full sash area, making it easier to meet the 5.7 square foot clear opening requirement with a smaller overall window unit. Low-E glass casement windows in vinyl or fiberglass frames are the recommended specification for basement egress applications because they resist moisture, require minimal maintenance, and improve basement energy efficiency.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Lintel</h4>
              <p className='text-slate-600 text-sm'>A structural horizontal beam installed directly above a window or door opening in a foundation or load-bearing wall to transfer the weight of the wall and structure above the opening to the sides of the opening rather than allowing it to bear down on the window frame. In egress window installations, the lintel is one of the most critical structural elements because it must be sized by an engineer or experienced contractor to carry the specific load of the foundation wall and floor framing above the opening at that location. Lintel installation is included in standard egress window contractor quotes and is one of the primary reasons egress window installation should not be attempted as a DIY project without structural engineering knowledge.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Low-E Glass</h4>
              <p className='text-slate-600 text-sm'>A type of window glass coated with a microscopically thin metallic oxide layer that reflects infrared heat while allowing visible light to pass through, reducing heat loss in winter and heat gain in summer to improve the energy efficiency of the basement space. Low-E egress windows may qualify for the federal Energy Efficient Home Improvement Credit (up to $600) when they meet ENERGY STAR Most Efficient U-factor and solar heat gain coefficient thresholds. For basement applications specifically, low-E glass also reduces condensation on the interior glass surface by keeping the glass warmer, which helps prevent the moisture accumulation that leads to mold growth around window frames in below-grade spaces.</p>
            </div>
          </div>

          {/* Final Advice */}
          <div className='bg-teal-50 border border-teal-200 rounded-2xl p-8 mb-12'>
            <h2 className='text-2xl font-extrabold text-slate-900 mb-4'>Final Advice for 2026</h2>
            <p className='text-lg text-slate-700 leading-relaxed'>
              An egress window is one of the smartest safety and value upgrades you can make to a basement. Spend the money on a quality casement unit, proper well, and a licensed local crew and you will sleep better knowing your family is protected. Ready to move forward? Grab free local quotes from vetted basement pros at the top of the page. They know local codes inside out and can give you an exact number for your foundation and lot.
            </p>
          </div>

          {/* Related Articles */}
          <section className='mt-16 mb-12'>
            <h2 className='text-2xl font-extrabold text-slate-900 mb-8'>Related Guides</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <Link href='/articles/basement-adu-rental-suite' className='group block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Basement ADU & Rental Suite Guide</h3>
                <p className='text-slate-500 text-sm'>Egress windows are a must for basement ADUs. Learn the full process.</p>
              </Link>
              <Link href='/articles/how-to-finish-a-basement' className='group block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>How to Finish a Basement</h3>
                <p className='text-slate-500 text-sm'>The complete roadmap to transforming your basement into livable space.</p>
              </Link>
              <Link href='/articles/basement-waterproofing-guide' className='group block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2'>Basement Waterproofing Guide</h3>
                <p className='text-slate-500 text-sm'>Protect your investment before finishing with proper waterproofing.</p>
              </Link>
            </div>
          </section>

          {/* Lead Form */}
          <section className='mt-12'>
            <LeadForm />
          </section>

        </div>
      </div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  )
}
