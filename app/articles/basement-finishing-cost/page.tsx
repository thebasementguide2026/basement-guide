import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Finishing Cost Guide 2026: What You\'ll Actually Pay | The Basement Guide',
  description: 'How much does it cost to finish a basement in 2026? Real price data from $20 to $75 per sq ft with full breakdowns.',
}

export default function BasementFinishingCost() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/unfinished-basement-interior.jpg.jpg'
          alt='Basement being finished for cost guide'
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
            Basement Finishing<br />
            <span className='text-violet-400'>Cost Guide 2026</span>
          </h1>

          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            What you\'ll actually pay in 2026. Real price data from $20 to $75 per sq ft, with full breakdowns by size and finish level.
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
                  <span className='mx-2 text-slate-600'>•</span>
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

          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-violet-500 pl-8'>
            Finishing a basement is one of the highest-ROI home improvement projects you can do. But the cost range is enormous. Here\'s what you\'ll actually pay in 2026.
          </p>

          {/* Cost Summary Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-16 not-prose'>
            <div className='bg-slate-50 rounded-3xl p-8 text-center border border-slate-100'>
              <div className='text-3xl font-black text-slate-900 mb-2'>$20-30</div>
              <div className='text-slate-500 text-sm font-medium mb-3'>Per Sq Ft</div>
              <div className='text-violet-600 font-bold'>Budget Finish</div>
              <p className='text-slate-500 text-sm mt-3'>Basic paint, carpet, drop ceiling. Functional but no luxury.</p>
            </div>
            <div className='bg-violet-600 rounded-3xl p-8 text-center shadow-xl shadow-violet-100'>
              <div className='text-3xl font-black text-white mb-2'>$40-55</div>
              <div className='text-violet-200 text-sm font-medium mb-3'>Per Sq Ft</div>
              <div className='text-white font-bold'>Mid-Range Finish</div>
              <p className='text-violet-100 text-sm mt-3'>LVP flooring, drywall, recessed lighting. Most common choice.</p>
            </div>
            <div className='bg-slate-900 rounded-3xl p-8 text-center'>
              <div className='text-3xl font-black text-white mb-2'>$60-75+</div>
              <div className='text-slate-400 text-sm font-medium mb-3'>Per Sq Ft</div>
              <div className='text-violet-400 font-bold'>High-End Finish</div>
              <p className='text-slate-400 text-sm mt-3'>Custom built-ins, full bath, home theater. Contractor-grade.</p>
            </div>
          </div>

          <h2 className='text-4xl mb-6'>What Drives the Cost?</h2>
          <p>
            The biggest cost variables in a basement finish are: square footage, ceiling height, bathroom inclusion, egress windows, and finish level. A 1,000 sq ft basement with a bathroom at mid-range finishes runs approximately $45,000-$55,000.
          </p>

          <h2 className='text-4xl mb-6'>Detailed Cost Breakdown</h2>

          <div className='my-12 rounded-3xl overflow-hidden shadow-2xl not-prose'>
            <div className='bg-slate-900 px-8 py-10'>
              <h3 className='text-white text-2xl font-bold mb-8'>Cost by Project Component</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                  <thead>
                    <tr className='border-b border-slate-700'>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Component</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Budget</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Mid-Range</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>High-End</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-800'>
                    <tr>
                      <td className='py-5 text-white font-medium'>Framing</td>
                      <td className='py-5 text-slate-300'>$1,500</td>
                      <td className='py-5 text-violet-400 font-medium'>$3,000</td>
                      <td className='py-5 text-slate-300'>$5,000+</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Insulation</td>
                      <td className='py-5 text-slate-300'>$800</td>
                      <td className='py-5 text-violet-400 font-medium'>$2,500</td>
                      <td className='py-5 text-slate-300'>$5,000+</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Drywall</td>
                      <td className='py-5 text-slate-300'>$2,000</td>
                      <td className='py-5 text-violet-400 font-medium'>$4,000</td>
                      <td className='py-5 text-slate-300'>$6,000+</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Flooring</td>
                      <td className='py-5 text-slate-300'>$1,500</td>
                      <td className='py-5 text-violet-400 font-medium'>$5,000</td>
                      <td className='py-5 text-slate-300'>$12,000+</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Electrical</td>
                      <td className='py-5 text-slate-300'>$2,500</td>
                      <td className='py-5 text-violet-400 font-medium'>$5,000</td>
                      <td className='py-5 text-slate-300'>$10,000+</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Full Bathroom Add</td>
                      <td className='py-5 text-slate-300'>$8,000</td>
                      <td className='py-5 text-violet-400 font-medium'>$15,000</td>
                      <td className='py-5 text-slate-300'>$30,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h2 className='text-4xl mb-6'>DIY vs. Contractor</h2>
          <p>
            A skilled DIYer can save 30-40% by doing framing, painting, and flooring themselves. However, electrical, plumbing, and HVAC should always be done by licensed contractors to meet code. Trying to save on these trades is the number one cause of expensive rework.
          </p>

          <h2 className='text-4xl mb-6'>Does Finishing a Basement Add Value?</h2>
          <p>
            According to Remodeling Magazine\'s 2025 Cost vs. Value report, a basement finishing project returns approximately 70% of its cost at resale in most markets. In cold-climate markets (Midwest, Northeast), where basements are universal, the return can exceed 80%.
          </p>

          <div className='bg-violet-600 rounded-3xl p-12 text-white my-20 shadow-xl shadow-violet-200 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get Quotes for Your Basement Finish</h2>
              <p className='text-violet-100 text-lg mb-10'>
                Compare free estimates from licensed contractors in your area. No obligation.
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
