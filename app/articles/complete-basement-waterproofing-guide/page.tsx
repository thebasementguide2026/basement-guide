import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Complete Basement Waterproofing Guide for 2026',
  description: 'Learn why basements leak, compare interior vs. exterior methods, understand 2026 costs, and follow step-by-step planning to protect your home from water damage.',
}

export default function CompleteBasementWaterproofingGuide() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[600px] bg-slate-900 overflow-hidden'>
        <Image
          src='/foundation-exterior-membrane-wide.jpg.png'
          alt='Professional basement waterproofing installation'
          fill
          className='object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>2026 Protection Standards</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Complete Waterproofing<br />
            <span className='text-teal-400'>Guide for 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Why basements leak, interior vs. exterior methods, 2026 costs, and a step-by-step planning roadmap for a dry, protected home.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-semibold'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 &nbsp;&middot;&nbsp; 20 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-16'>
        <div className='prose prose-lg prose-slate max-w-none'>

          <p className='text-xl text-slate-700 leading-relaxed'>
            Basement water issues are increasingly common in 2026, with heavier rains and aging homes making leaks more frequent. A wet basement leads to <Link href="/articles/how-to-prevent-basement-mold" className="text-teal-600 hover:underline font-semibold">mold</Link>, structural damage, ruined finishes, health risks, and lower home value. Proper waterproofing creates a dry, usable space that adds real value and peace of mind.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mt-4'>
            This guide covers why basements leak, <Link href="/articles/interior-vs-exterior-waterproofing" className="text-teal-600 hover:underline font-semibold">interior vs. exterior methods</Link>, pros and cons, 2026 costs, planning steps, and choosing the right system for your home.
          </p>

          {/* Why Waterproofing Matters */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Why Waterproofing Matters</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8'>
            <div className='bg-teal-50 border border-teal-200 rounded-2xl p-6'>
              <div className='text-2xl mb-2'>🛡️</div>
              <h4 className='font-bold text-slate-900 mb-1'>Prevents Mold</h4>
              <p className='text-slate-600 text-sm'>Improves air quality by eliminating moisture that breeds mold and allergens.</p>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-2xl p-6'>
              <div className='text-2xl mb-2'>🏗️</div>
              <h4 className='font-bold text-slate-900 mb-1'>Protects the Foundation</h4>
              <p className='text-slate-600 text-sm'>Guards against hydrostatic pressure and long-term structural damage.</p>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-2xl p-6'>
              <div className='text-2xl mb-2'>📈</div>
              <h4 className='font-bold text-slate-900 mb-1'>Boosts Resale Value</h4>
              <p className='text-slate-600 text-sm'>Increases usable space and <Link href="/articles/waterproofing-home-appraisal-value" className="text-teal-600 hover:underline font-semibold">resale value</Link> &mdash; often a 5&ndash;15% boost.</p>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-2xl p-6'>
              <div className='text-2xl mb-2'>💡</div>
              <h4 className='font-bold text-slate-900 mb-1'>Lowers Energy Bills</h4>
              <p className='text-slate-600 text-sm'>Reduces humidity and the workload on HVAC systems, cutting energy costs.</p>
            </div>
          </div>

          <div className='bg-red-50 border border-red-200 rounded-2xl p-6 not-prose mb-8'>
            <h4 className='font-bold text-red-800 mb-2'>⚠️ The Cost of Doing Nothing</h4>
            <p className='text-red-700 text-sm'>Avoiding waterproofing can lead to expensive future repairs ranging from $10,000 to $50,000 or more for major foundation fixes.</p>
          </div>

          {/* Common Causes of Basement Leaks */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Common Causes of Basement Leaks</h2>

          <div className='space-y-3 not-prose mb-8'>
            <div className='flex items-start space-x-3 bg-slate-50 rounded-xl p-4 border border-slate-200'>
              <span className='text-red-500 font-bold mt-0.5'>⚠</span>
              <p className='text-slate-700'>Poor grading and downspouts dumping water near the foundation.</p>
            </div>
            <div className='flex items-start space-x-3 bg-slate-50 rounded-xl p-4 border border-slate-200'>
              <span className='text-red-500 font-bold mt-0.5'>⚠</span>
              <p className='text-slate-700'>Groundwater pressure through pores and <Link href="/articles/types-of-foundation-cracks" className="text-teal-600 hover:underline font-semibold">foundation cracks</Link>.</p>
            </div>
            <div className='flex items-start space-x-3 bg-slate-50 rounded-xl p-4 border border-slate-200'>
              <span className='text-red-500 font-bold mt-0.5'>⚠</span>
              <p className='text-slate-700'>Foundation cracks or missing footer drains.</p>
            </div>
            <div className='flex items-start space-x-3 bg-slate-50 rounded-xl p-4 border border-slate-200'>
              <span className='text-red-500 font-bold mt-0.5'>⚠</span>
              <p className='text-slate-700'>Clogged gutters and window wells without covers.</p>
            </div>
            <div className='flex items-start space-x-3 bg-slate-50 rounded-xl p-4 border border-slate-200'>
              <span className='text-red-500 font-bold mt-0.5'>⚠</span>
              <p className='text-slate-700'>High water table or seasonal flooding.</p>
            </div>
          </div>

          <div className='bg-blue-50 border border-blue-200 rounded-2xl p-6 not-prose mb-8'>
            <h4 className='font-bold text-blue-800 mb-2'>💡 Quick Diagnostic Tip</h4>
            <p className='text-blue-700 text-sm'>Start with a simple exterior check after rain: look for pooling water, soil sloping toward the house, or clogged drains. These exterior issues account for the majority of basement water problems.</p>
          </div>

          {/* Interior vs. Exterior Waterproofing */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Interior vs. Exterior Waterproofing</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8'>
            <div className='bg-white border-2 border-teal-300 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-teal-700 mb-3'>Interior Waterproofing</h3>
              <p className='text-slate-600 text-sm mb-4'>Collects and removes water after it enters the basement.</p>
              <h4 className='font-semibold text-slate-800 text-sm mb-2'>Methods</h4>
              <ul className='space-y-1 text-sm text-slate-600 mb-4'>
                <li>Perimeter <Link href="/articles/french-drain-cost" className="text-teal-600 hover:underline font-semibold">French drains</Link> + <Link href="/articles/sump-pump-buying-guide" className="text-teal-600 hover:underline font-semibold">sump pump</Link></li>
                <li>Wall and floor sealants (e.g., <Link href="/articles/crystalline-waterproofing" className="text-teal-600 hover:underline font-semibold">crystalline coatings</Link>)</li>
                <li>Dimpled membranes for air gap drainage</li>
              </ul>
              <h4 className='font-semibold text-green-700 text-sm mb-1'>Pros</h4>
              <ul className='space-y-1 text-sm text-slate-600 mb-3'>
                <li>Less invasive, faster install</li>
                <li>Lower cost</li>
                <li>Easy access for maintenance</li>
                <li>Great for seepage and moderate pressure</li>
              </ul>
              <h4 className='font-semibold text-red-700 text-sm mb-1'>Cons</h4>
              <ul className='space-y-1 text-sm text-slate-600'>
                <li>Does not stop water from reaching walls</li>
                <li>Pump needs power (add battery backup)</li>
              </ul>
              <div className='mt-4 bg-teal-50 rounded-lg p-3'>
                <p className='text-teal-800 text-xs font-semibold'>Best For: Existing homes, budget-friendly fixes</p>
              </div>
            </div>
            <div className='bg-white border-2 border-slate-300 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-slate-700 mb-3'>Exterior Waterproofing</h3>
              <p className='text-slate-600 text-sm mb-4'>Stops water before it hits the foundation.</p>
              <h4 className='font-semibold text-slate-800 text-sm mb-2'>Methods</h4>
              <ul className='space-y-1 text-sm text-slate-600 mb-4'>
                <li>Excavation + dimpled membrane or liquid coating</li>
                <li>New footer drains and gravel</li>
              </ul>
              <h4 className='font-semibold text-green-700 text-sm mb-1'>Pros</h4>
              <ul className='space-y-1 text-sm text-slate-600 mb-3'>
                <li>Prevents water contact entirely</li>
                <li>Long-lasting: 20&ndash;50 years</li>
                <li>Reduces pressure on walls</li>
              </ul>
              <h4 className='font-semibold text-red-700 text-sm mb-1'>Cons</h4>
              <ul className='space-y-1 text-sm text-slate-600'>
                <li>Disruptive and expensive</li>
                <li>Weather-dependent installation</li>
                <li>Not feasible on tight lots</li>
              </ul>
              <div className='mt-4 bg-slate-100 rounded-lg p-3'>
                <p className='text-slate-800 text-xs font-semibold'>Best For: Severe leaks, new builds, high water tables</p>
              </div>
            </div>
          </div>

          <div className='bg-amber-50 border border-amber-200 rounded-2xl p-6 not-prose mb-8'>
            <h4 className='font-bold text-amber-800 mb-2'>Pro Tip</h4>
            <p className='text-amber-700 text-sm'>Many homeowners combine both interior and exterior methods for maximum protection, especially in areas with high water tables or heavy rainfall.</p>
          </div>

          {/* Quick Comparison Table */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Quick Comparison: 2026 Estimates</h2>

          <div className='overflow-x-auto not-prose mb-8'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='text-left p-4 font-semibold'>Feature</th>
                  <th className='text-left p-4 font-semibold'>Interior</th>
                  <th className='text-left p-4 font-semibold'>Exterior</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='p-4 font-medium'>Goal</td>
                  <td className='p-4'>Remove Water</td>
                  <td className='p-4'>Prevent Entry</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='p-4 font-medium'>Avg. Cost</td>
                  <td className='p-4'>$4,000&ndash;$12,000</td>
                  <td className='p-4'>$15,000&ndash;$35,000</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-4 font-medium'>Install Time</td>
                  <td className='p-4'>3&ndash;10 days</td>
                  <td className='p-4'>2&ndash;6 weeks</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='p-4 font-medium'>Disruption</td>
                  <td className='p-4'>Low</td>
                  <td className='p-4'>High</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-4 font-medium'>Lifespan</td>
                  <td className='p-4'>Lifetime w/ maintenance</td>
                  <td className='p-4'>20&ndash;50 years</td>
                </tr>
                <tr>
                  <td className='p-4 font-medium'>Best For</td>
                  <td className='p-4'>Moderate issues</td>
                  <td className='p-4'>Severe flooding</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Step-by-Step Planning */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Step-by-Step Planning</h2>

          <div className='space-y-4 not-prose mb-8'>
            <div className='flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm'>
              <div className='w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0'>1</div>
              <div>
                <h4 className='font-bold text-slate-900 mb-1'>Inspect</h4>
                <p className='text-slate-600 text-sm'>Hire a pro for moisture tests and source identification ($200&ndash;$500). A <Link href="/articles/pre-finish-audit" className="text-teal-600 hover:underline font-semibold">pre-finish audit</Link> can uncover hidden issues before they worsen.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm'>
              <div className='w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0'>2</div>
              <div>
                <h4 className='font-bold text-slate-900 mb-1'>Fix Exterior Basics</h4>
                <p className='text-slate-600 text-sm'>Regrade soil, extend downspouts at least 10 feet, and clean gutters. These low-cost fixes solve most minor water problems.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm'>
              <div className='w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0'>3</div>
              <div>
                <h4 className='font-bold text-slate-900 mb-1'>Choose Your System</h4>
                <p className='text-slate-600 text-sm'>Select based on severity, access, and budget. Interior for moderate issues, exterior for severe leaks, or both for maximum protection.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm'>
              <div className='w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0'>4</div>
              <div>
                <h4 className='font-bold text-slate-900 mb-1'>Install</h4>
                <p className='text-slate-600 text-sm'>Clear the basement space, then have professionals add drains, pumps, sealants, and membranes according to your chosen system.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm'>
              <div className='w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0'>5</div>
              <div>
                <h4 className='font-bold text-slate-900 mb-1'>Test and Monitor</h4>
                <p className='text-slate-600 text-sm'>Run water tests to verify the system works. Add <Link href="/articles/smart-sump-pumps-guide" className="text-teal-600 hover:underline font-semibold">smart sensors</Link> for real-time leak detection and alerts.</p>
              </div>
            </div>
            <div className='flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm'>
              <div className='w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0'>6</div>
              <div>
                <h4 className='font-bold text-slate-900 mb-1'>Finish</h4>
                <p className='text-slate-600 text-sm'>Include a <Link href="/articles/dehumidifier-myths" className="text-teal-600 hover:underline font-semibold">dehumidifier</Link> and vapor barriers. If <Link href="/articles/how-to-finish-a-basement" className="text-teal-600 hover:underline font-semibold">finishing the basement</Link>, waterproofing must be completed first.</p>
              </div>
            </div>
          </div>

          {/* 2026 Costs Breakdown */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>2026 Costs Breakdown</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6'>
            <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
              <h4 className='font-bold text-slate-900 mb-2'>Interior Drainage + Sump</h4>
              <p className='text-3xl font-black text-teal-600'>$4,000&ndash;$12,000</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-2xl p-6 shadow-sm'>
              <h4 className='font-bold text-slate-900 mb-2'>Exterior Membrane + Excavation</h4>
              <p className='text-3xl font-black text-teal-600'>$15,000&ndash;$35,000</p>
            </div>
          </div>

          <div className='overflow-x-auto not-prose mb-8'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='text-left p-4 font-semibold'>Add-On</th>
                  <th className='text-left p-4 font-semibold'>Cost Range</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='p-4'>Battery backup for sump pump</td>
                  <td className='p-4 font-semibold'>$800&ndash;$2,000</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='p-4'>Smart monitoring system</td>
                  <td className='p-4 font-semibold'>$500&ndash;$1,500</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='p-4'>Average full system</td>
                  <td className='p-4 font-semibold'>$7,000&ndash;$15,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='bg-teal-50 border border-teal-200 rounded-2xl p-6 not-prose mb-8'>
            <h4 className='font-bold text-teal-800 mb-2'>Get Multiple Quotes</h4>
            <p className='text-teal-700 text-sm'>Always get 3&ndash;5 quotes from certified contractors. Pricing varies significantly by region and home conditions. See our full <Link href="/articles/basement-waterproofing-cost" className="text-teal-600 hover:underline font-semibold">waterproofing cost guide</Link> for detailed breakdowns.</p>
          </div>

          {/* DIY vs. Professional */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>DIY vs. Professional Installation</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8'>
            <div className='bg-white border border-slate-200 rounded-2xl p-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-4'>DIY-Friendly Tasks</h3>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li className='flex items-start space-x-2'>
                  <span className='text-green-500 mt-0.5 font-bold'>&#10003;</span>
                  <span>Sealing minor hairline cracks with epoxy</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-green-500 mt-0.5 font-bold'>&#10003;</span>
                  <span>Improving yard grading (1 in/ft slope away from house)</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-green-500 mt-0.5 font-bold'>&#10003;</span>
                  <span>Applying waterproof coatings to walls</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-green-500 mt-0.5 font-bold'>&#10003;</span>
                  <span>Extending downspouts at least 10 feet from foundation</span>
                </li>
              </ul>
            </div>
            <div className='bg-slate-900 text-white rounded-2xl p-6'>
              <h3 className='text-lg font-bold mb-4'>Hire a Pro For</h3>
              <ul className='space-y-2 text-sm text-slate-300'>
                <li className='flex items-start space-x-2'>
                  <span className='text-teal-400 mt-0.5 font-bold'>&#10003;</span>
                  <span>Foundation excavation and membrane install</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-teal-400 mt-0.5 font-bold'>&#10003;</span>
                  <span>Interior French drain and sump systems</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-teal-400 mt-0.5 font-bold'>&#10003;</span>
                  <span>Structural <Link href="/articles/foundation-crack-repair-cost" className="text-teal-400 hover:underline font-semibold">crack stabilization</Link></span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-teal-400 mt-0.5 font-bold'>&#10003;</span>
                  <span>Electrical and plumbing work for sump systems</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-teal-400 mt-0.5 font-bold'>&#10003;</span>
                  <span>Thermal imaging leak detection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Thoughts */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Final Thoughts</h2>

          <p className='text-lg text-slate-700 leading-relaxed'>
            Waterproofing is one of the best ROI home improvements, paying for itself in avoided repairs, energy savings, and <Link href="/articles/waterproofing-home-appraisal-value" className="text-teal-600 hover:underline font-semibold">resale value</Link>. In 2026, with more extreme weather patterns, it is essential protection for any homeowner.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mt-4'>
            Start with an inspection, fix easy exterior issues first, then choose a system that fits your needs and budget. Most homeowners see significant wins from proper grading and gutters combined with a reliable interior drainage system.
          </p>

        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-100 pt-16 mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose'>
            <Link href='/articles/interior-vs-exterior-waterproofing' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
              <h4 className='text-lg font-bold text-slate-900 mb-2'>Interior vs. Exterior Waterproofing</h4>
              <p className='text-slate-600 text-sm'>A deep-dive comparison of methods to find the best solution for your home.</p>
            </Link>
            <Link href='/articles/basement-waterproofing-cost' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
              <h4 className='text-lg font-bold text-slate-900 mb-2'>Basement Waterproofing Cost Guide</h4>
              <p className='text-slate-600 text-sm'>Detailed pricing breakdowns for every waterproofing method in 2026.</p>
            </Link>
            <Link href='/articles/sump-pump-buying-guide' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
              <h4 className='text-lg font-bold text-slate-900 mb-2'>Sump Pump Buying Guide</h4>
              <p className='text-slate-600 text-sm'>Choose the right sump pump to protect your basement from flooding.</p>
            </Link>
            <Link href='/articles/homebuyers-basement-inspection-checklist' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
              <h4 className='text-lg font-bold text-slate-900 mb-2'>Homebuyer&#39;s Basement Inspection Checklist</h4>
              <p className='text-slate-600 text-sm'>Spot hidden water damage, mold, and foundation issues before you buy.</p>
            </Link>
            <Link href='/articles/french-drain-cost' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
              <h4 className='text-lg font-bold text-slate-900 mb-2'>French Drain Cost Guide</h4>
              <p className='text-slate-600 text-sm'>Everything you need to know about interior and exterior French drain pricing.</p>
            </Link>
            <Link href='/articles/how-to-hire-basement-waterproofing-contractor' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
              <h4 className='text-lg font-bold text-slate-900 mb-2'>How to Hire a Waterproofing Contractor</h4>
              <p className='text-slate-600 text-sm'>Red flags, questions to ask, and tips for finding the right professional.</p>
            </Link>
                          <Link href='/articles/basement-adu-rental-suite' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Basement ADU & Rental Suite Guide</h4>
                <p className='text-slate-600 text-sm'>Convert your basement into a legal, profitable rental apartment.</p>
              </Link>
                          <Link href='/articles/types-of-foundation-cracks' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Types of Foundation Cracks</h4>
                <p className='text-slate-600 text-sm'>Diagnose whether your crack is cosmetic or a structural red flag.</p>
              </Link>
              <Link href='/articles/basement-home-gym' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Basement Home Gym Guide</h4>
                <p className='text-slate-600 text-sm'>Build a great workout space below ground with the right waterproofing, flooring, and ventilation.</p>
              </Link>
                          <Link href='/articles/mold-remediation-cost' className='block bg-slate-50 rounded-2xl p-6'>
                                            <h4 className='text-lg font-bold text-slate-900 mb-2'>Mold Remediation Cost Guide</h4>
                                            <p className='text-slate-600 text-sm'>What to expect for professional mold removal pricing in 2026.</p>
                                          </Link>
                                    <Link href='/articles/old-house-basements' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                          <h4 className='text-lg font-bold text-slate-900 mb-2'>Old House Basements Guide</h4>
                          <p className='text-slate-600 text-sm'>Waterproofing and insulating basements in older homes built before 1950.</p>
                        </Link>
          </div>
        </div>

        {/* Lead Form CTA */}
        <div className='bg-teal-600 rounded-[3rem] p-12 text-white my-20 relative overflow-hidden shadow-2xl not-prose'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl' />
          <div className='relative z-10 text-center max-w-2xl mx-auto'>
            <h2 className='text-3xl font-black text-white mb-4'>Get Your Free Waterproofing Assessment</h2>
            <p className='text-teal-100 text-xl mb-12 font-light'>
              Connect with certified waterproofing professionals for a free assessment of your home.
            </p>
            <div className='bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl'>
              <LeadForm />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
