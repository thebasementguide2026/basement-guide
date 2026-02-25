import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basement Waterproofing Cost 2026: Average Interior & Exterior Pricing',
  description: 'How much does basement waterproofing cost in 2026? Average pricing for interior drainage ($3k-$8k), exterior membranes ($7k-$15k), and crack repair ($250-$800).',
};

export default function BasementWaterproofingCostPage() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/foundation-waterproofing-construction.jpg.png'
          alt='Contractor installing basement waterproofing system'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>2026 Cost Report</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Basement <br />
            <span className='text-indigo-400'>Waterproofing Cost</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Basement waterproofing costs $5,231 on average in 2026. Most homeowners pay between $2,459 and $8,190.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>14 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline'>
          
          <div className='bg-indigo-50 rounded-[2.5rem] p-10 mb-20 border border-indigo-100 relative overflow-hidden not-prose'>
            <div className='relative z-10'>
              <div className='text-indigo-600 font-black uppercase tracking-widest text-xs mb-4'>The Short Answer</div>
              <p className='text-2xl text-slate-900 font-bold leading-tight mb-6'>
                Expect to spend <span className='text-indigo-600'>$3,000–$8,000</span> for interior systems and <span className='text-indigo-600'>$7,000–$15,000+</span> for exterior excavation.
              </p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-white p-4 rounded-2xl shadow-sm'>
                  <div className='text-slate-400 text-[10px] uppercase font-black mb-1'>National Avg</div>
                  <div className='text-slate-900 font-black text-xl'>$5,231</div>
                </div>
                <div className='bg-white p-4 rounded-2xl shadow-sm'>
                  <div className='text-slate-400 text-[10px] uppercase font-black mb-1'>Minor Repair</div>
                  <div className='text-slate-900 font-black text-xl'>$600+</div>
                </div>
                <div className='bg-white p-4 rounded-2xl shadow-sm'>
                  <div className='text-slate-400 text-[10px] uppercase font-black mb-1'>Interior System</div>
                  <div className='text-slate-900 font-black text-xl'>$4k–$8k</div>
                </div>
                <div className='bg-white p-4 rounded-2xl shadow-sm'>
                  <div className='text-slate-400 text-[10px] uppercase font-black mb-1'>Exterior Dig</div>
                  <div className='text-slate-900 font-black text-xl'>$15k+</div>
                </div>
              </div>
            </div>
          </div>

          <p className='text-xl leading-relaxed text-slate-600 italic border-l-4 border-indigo-500 pl-6 mb-12'>
            A wet basement is a threat to your home's structural integrity. This guide breaks down current market rates for every major waterproofing method. For a full comparison of approaches, see our <Link href='/articles/interior-vs-exterior-waterproofing' className='text-indigo-600 hover:underline'>interior vs. exterior waterproofing guide</Link>.
          </p>

          <h2 className='text-3xl uppercase tracking-tight'>Cost by Method (2026)</h2>
          
          <div className='overflow-x-auto rounded-[2rem] border border-slate-200 shadow-xl mb-20 not-prose'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-slate-50 border-b border-slate-200'>
                  <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest'>Method</th>
                  <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest text-center'>Avg Range</th>
                  <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest text-right'>Typical Use</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                {[
                  { method: 'Crack Injection', cost: '$250 – $800', use: 'Minor seepage' },
                  { method: 'Interior Drain Tile', cost: '$3,000 – $8,000', use: 'Hydrostatic pressure' },
                  { method: 'Sump Pump System', cost: '$800 – $2,500', use: 'Active pumping' },
                  { method: 'Exterior Membrane', cost: '$7,000 – $15,000', use: 'Total prevention' }
                ].map((row, i) => (
                  <tr key={i} className='hover:bg-slate-50 transition-colors group'>
                    <td className='p-6 text-slate-900 font-bold'>{row.method}</td>
                    <td className='p-6 text-indigo-600 font-black text-center'>{row.cost}</td>
                    <td className='p-6 text-slate-500 text-sm text-right'>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mb-20 not-prose'>
            <div className='bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden'>
              <h3 className='text-2xl font-black mb-6 uppercase tracking-tight'>Interior Systems</h3>
              <p className='text-indigo-400 font-black text-3xl mb-6'>$3,000 – $8,000</p>
              <ul className='space-y-4 mb-8'>
                {['Managing water entry', 'No yard destruction', 'Fast install (2-4 days)'].map((item, i) => (
                  <li key={i} className='flex gap-3 text-slate-300 font-medium'>
                    <span className='text-indigo-500 font-bold'>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-slate-50 p-10 rounded-[3rem] border border-slate-200'>
              <h3 className='text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight'>Exterior Systems</h3>
              <p className='text-indigo-600 font-black text-3xl mb-6'>$7,000 – $15,000+</p>
              <ul className='space-y-4'>
                {['Preventing water entry', 'Long-term protection', 'Major excavation required'].map((item, i) => (
                  <li key={i} className='flex gap-3 text-slate-600 font-medium'>
                    <span className='text-indigo-500 font-bold'>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className='mb-20 not-prose'>
            <h2 className='text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight text-center'>Unit Costs (Per Foot)</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {[
                { label: 'French Drain (Interior)', cost: '$40 – $85 / linear ft.' },
                { label: 'French Drain (Exterior)', cost: '$30 – $90 / linear ft.' },
                { label: 'Waterproof Membrane', cost: '$4 – $7 / sq. ft.' },
                { label: 'Foundation Sealing', cost: '$2 – $10 / sq. ft.' },
              ].map((item, i) => (
                <div key={i} className='flex justify-between items-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm'>
                  <span className='font-bold text-slate-700'>{item.label}</span>
                  <span className='text-indigo-600 font-black'>{item.cost}</span>
                </div>
              ))}
            </div>
          </section>

          <section className='mb-20 not-prose'>
            <h2 className='text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight text-center'>Common Questions</h2>
            <div className='space-y-4'>
              {[
                { q: 'Is it worth the money?', a: 'Yes. It protects your foundation from structural failure and prevents mold growth, significantly impacting home value.' },
                { q: 'How long does it last?', a: 'Interior systems last 10-15 years (pump life). Exterior membranes can last 20-40 years.' },
                { q: 'Does insurance cover it?', a: 'Usually not. Insurance covers sudden damage (burst pipe), not gradual seepage.' },
              ].map((faq, i) => (
                <div key={i} className='bg-slate-50 p-8 rounded-[2rem] border border-slate-200'>
                  <h3 className='font-black text-slate-900 text-lg mb-3 uppercase tracking-widest'>{faq.q}</h3>
                  <p className='text-slate-600 leading-relaxed text-sm'>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className='bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-4xl font-black mb-6'>Stop the Seepage</h2>
              <p className='text-indigo-100 text-xl mb-12 font-light'>
                Don't wait for the next heavy rain. Get free quotes from vetted basement waterproofing specialists in your area.
              </p>
              <div className='bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl'>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
