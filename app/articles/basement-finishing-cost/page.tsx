import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Finishing Cost Guide 2026: Breakdowns & ROI | The Basement Guide',
  description: 'How much does it cost to finish a basement in 2026? National averages from $20,000 to $60,000. Detailed breakdowns by sq ft, finish level, and ROI insights.',
}

export default function BasementFinishingCost() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/unfinished-basement-interior.jpg.jpg'
          alt='Basement finishing construction and costs'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-violet-500'></div>
            <span className='text-violet-400 font-bold tracking-[0.3em] text-sm uppercase'>Finishing Cost Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Basement Finishing<br />
            <span className='text-violet-400'>Cost Guide 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            From basic budget remodels to luxury custom suites. We break down the national averages, component costs, and the 2026 ROI for finishing your basement.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center mr-3'>
                <span className='text-white text-xs font-bold'>BG</span>
              </div>
              <span className='text-white font-semibold text-sm'>The Basement Guide Staff</span>
            </div>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50'>
              <span className='text-slate-300 text-sm'>Updated Feb 2026</span>
              <span className='text-slate-500 mx-3'>•</span>
              <span className='text-slate-300 text-sm'>35 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
          {/* Article Body */}
          <div className='lg:col-span-2 space-y-16'>
            
            {/* Intro */}
            <section>
              <p className='text-xl text-slate-700 leading-relaxed mb-6 font-medium'>
                Finishing your basement remains one of the highest-ROI home improvement projects in 2026. It transforms underused space into valuable living areas without the expense of adding square footage above ground.
              </p>
              <p className='text-lg text-slate-600 leading-relaxed'>
                Nationally, the average cost to finish a basement ranges from <strong>$20,000 to $60,000</strong> for a typical 800–1,200 sq ft space. Per-square-foot costs generally fall between <strong>$20 and $75</strong>, though high-end custom projects can exceed $100 per sq ft.
              </p>
            </section>

            {/* Benefits Grid */}
            <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-8 bg-slate-50 rounded-3xl border border-slate-100'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>Higher Home Value</h3>
                <p className='text-slate-600 leading-relaxed'>Mid-range projects typically add $20,000–$60,000 to the resale price, recouping 65–80% of investment.</p>
              </div>
              <div className='p-8 bg-slate-50 rounded-3xl border border-slate-100'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>Energy Savings</h3>
                <p className='text-slate-600 leading-relaxed'>Proper insulation and air sealing can reduce total household heating and cooling costs by 10–25%.</p>
              </div>
            </section>

            {/* Cost by Finish Level */}
            <section>
              <h2 className='text-3xl font-black text-slate-900 mb-8 tracking-tight uppercase'>2026 Cost by Finish Level</h2>
              <div className='overflow-hidden border border-slate-200 rounded-3xl'>
                <table className='w-full text-left'>
                  <thead className='bg-slate-900 text-white'>
                    <tr>
                      <th className='px-6 py-4 font-bold uppercase tracking-wider text-sm'>Finish Level</th>
                      <th className='px-6 py-4 font-bold uppercase tracking-wider text-sm'>Cost / Sq Ft</th>
                      <th className='px-6 py-4 font-bold uppercase tracking-wider text-sm'>Typical Total</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-200 bg-white text-slate-700 font-medium'>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-6 py-5'><span className='text-slate-900 font-bold'>Basic Budget</span><br /><span className='text-xs font-normal'>Drywall, basic lighting, carpet</span></td>
                      <td className='px-6 py-5'>$15 – $30</td>
                      <td className='px-6 py-5 text-slate-900'>$15,000 – $30,000</td>
                    </tr>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-6 py-5'><span className='text-slate-900 font-bold'>Mid-Range</span><br /><span className='text-xs font-normal'>LVP, recessed lights, half bath</span></td>
                      <td className='px-6 py-5'>$35 – $65</td>
                      <td className='px-6 py-5 text-slate-900'>$35,000 – $65,000</td>
                    </tr>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-6 py-5'><span className='text-slate-900 font-bold'>High-End Custom</span><br /><span className='text-xs font-normal'>Theater, bar, tile, smart home</span></td>
                      <td className='px-6 py-5'>$70 – $120+</td>
                      <td className='px-6 py-5 text-slate-900'>$70,000 – $120,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Detailed Component Table */}
            <section>
              <h2 className='text-3xl font-black text-slate-900 mb-8 tracking-tight uppercase text-center'>Component Cost Breakdown</h2>
              <p className='text-slate-600 mb-8 text-center italic'>Averaged for a 1,000 sq ft basement project</p>
              <div className='grid grid-cols-1 gap-4'>
                {[
                  { name: 'Waterproofing & Moisture', budget: '$2k-$8k', mid: '$5k-$12k', high: '$10k-$20k' },
                  { name: 'Framing & Partition Walls', budget: '$1.5k-$4k', mid: '$4k-$7k', high: '$7k-$12k' },
                  { name: 'Insulation', budget: '$1k-$3k', mid: '$3k-$6k', high: '$6k-$10k' },
                  { name: 'Drywall & Finishing', budget: '$2.5k-$5k', mid: '$5k-$9k', high: '$9k-$15k' },
                  { name: 'Flooring (Installed)', budget: '$2k-$5k', mid: '$6k-$12k', high: '$12k-$25k' },
                  { name: 'Electrical & Lighting', budget: '$3k-$6k', mid: '$6k-$10k', high: '$12k-$20k' },
                  { name: 'Plumbing (Half/Full Bath)', budget: '$4k-$8k', mid: '$8k-$15k', high: '$15k-$25k' },
                  { name: 'Egress Windows', budget: '$3k-$6k', mid: '$5k-$10k', high: '$8k-$15k' }
                ].map((item, i) => (
                  <div key={i} className='flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl shadow-sm'>
                    <div className='mb-4 md:mb-0'>
                      <h4 className='font-black text-slate-900 text-lg'>{item.name}</h4>
                    </div>
                    <div className='flex items-center space-x-4 text-sm font-bold'>
                      <div className='text-center px-3 py-1 bg-slate-50 rounded-lg'><p className='text-[10px] text-slate-400 uppercase'>Budget</p><p className='text-slate-600'>{item.budget}</p></div>
                      <div className='text-center px-3 py-1 bg-violet-50 rounded-lg'><p className='text-[10px] text-violet-400 uppercase'>Mid</p><p className='text-violet-700'>{item.mid}</p></div>
                      <div className='text-center px-3 py-1 bg-slate-900 rounded-lg'><p className='text-[10px] text-slate-500 uppercase'>High</p><p className='text-white'>{item.high}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hidden Costs */}
            <section>
              <h2 className='text-3xl font-black text-slate-900 mb-8 tracking-tight'>Hidden Expenses to Watch For</h2>
              <div className='space-y-4'>
                <div className='p-6 border border-red-100 bg-red-50/30 rounded-2xl'>
                  <h4 className='font-bold text-slate-900'>Ceiling Height Issues</h4>
                  <p className='text-slate-600 text-sm'>Lowering a floor or raising joists to meet the 7ft habitable code can add $8,000–$25,000.</p>
                </div>
                <div className='p-6 border border-slate-100 rounded-2xl'>
                  <h4 className='font-bold text-slate-900'>Asbestos & Lead Abatement</h4>
                  <p className='text-slate-600 text-sm'>Common in pre-1980s homes; testing and removal can cost $500–$5,000.</p>
                </div>
                <div className='p-6 border border-slate-100 rounded-2xl'>
                  <h4 className='font-bold text-slate-900'>Radon Mitigation</h4>
                  <p className='text-slate-600 text-sm'>If finishing encloses high radon levels, expect $800–$2,500 for a mitigation system.</p>
                </div>
              </div>
            </section>

            {/* DIY vs Pro */}
            <section className='bg-slate-50 rounded-3xl p-10 border border-slate-200'>
              <h2 className='text-3xl font-black text-slate-900 mb-6 tracking-tight'>DIY vs. Professional Finishing</h2>
              <p className='text-lg text-slate-600 mb-8 leading-relaxed'>
                Handling tasks like framing, insulation, and painting yourself can save <strong>30–50% on labor</strong> (roughly $15,000–$25,000 on a mid-range project). However, we recommend hiring licensed pros for:
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 font-bold'>
                <div className='flex items-center space-x-3'><span className='text-violet-500'>●</span><span>Electrical & Plumbing (Code Safety)</span></div>
                <div className='flex items-center space-x-3'><span className='text-violet-500'>●</span><span>HVAC Modifications</span></div>
                <div className='flex items-center space-x-3'><span className='text-violet-500'>●</span><span>Egress Window Installation</span></div>
                <div className='flex items-center space-x-3'><span className='text-violet-500'>●</span><span>Waterproofing & Structural Work</span></div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-3xl font-black text-slate-900 mb-10 tracking-tight text-center uppercase'>Cost FAQ</h2>
              <div className='space-y-8'>
                {[
                  { q: 'How much does a basement bathroom addition cost?', a: '$10,000–$35,000 depending on plumbing proximity and finish quality.' },
                  { q: 'Can I finish a basement for under $20,000?', a: 'Yes, if the space is under 600 sq ft and you handle the majority of framing and cosmetic labor yourself.' },
                  { q: 'How long does a finishing project take?', a: '6–12 weeks on average, assuming permits are approved and materials are on-site.' }
                ].map((faq, i) => (
                  <div key={i} className='border-b border-slate-100 pb-8'>
                    <h4 className='text-xl font-bold text-slate-900 mb-3'>{faq.q}</h4>
                    <p className='text-slate-600 leading-relaxed'>{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className='space-y-12'>
            <div className='sticky top-12 space-y-12'>
              {/* CTA Form */}
              <div className='bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full -mr-16 -mt-16 blur-3xl'></div>
                <h3 className='text-2xl font-bold mb-4 relative z-10'>Get a Finishing Quote</h3>
                <p className='text-slate-400 mb-8 relative z-10 text-sm leading-relaxed'>
                   Connect with licensed basement finishing contractors in your area for a detailed cost estimate.
                </p>
                <LeadForm />
              </div>

              {/* Internal Links */}
              <div className='space-y-6'>
                <h4 className='text-sm font-bold text-slate-900 uppercase tracking-widest px-2'>Planning Resources</h4>
                <div className='space-y-4'>
                  {[
                    { title: 'The Complete Finishing Guide', slug: 'how-to-finish-a-basement' },
                    { title: 'Basement Insulation Guide', slug: 'basement-insulation-guide' },
                    { title: 'Egress Window Cost Guide', slug: 'egress-window-cost' },
                      { title: 'Basement Bathroom Guide', slug: 'basement-bathroom-guide' },
                  ].map((article) => (
                    <Link key={article.slug} href={`/articles/${article.slug}`} className='group block p-4 bg-white border border-slate-100 rounded-2xl hover:border-violet-200 hover:shadow-md transition-all'>
                      <p className='text-slate-900 font-bold group-hover:text-violet-600 transition-colors'>{article.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
