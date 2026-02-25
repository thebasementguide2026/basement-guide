import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foundation Crack Repair Cost 2026 | Price Guide',
  description: 'How much does foundation crack repair cost in 2026? Epoxy injection vs. polyurethane foam. Average $350–$1,500 per crack depending on severity and method.',
}

export default function FoundationCrackRepairCost() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/foundation-crack-closeup.jpg.jpg'
          alt='Foundation crack repair cost guide'
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
            Foundation Crack <br />
            <span className='text-violet-400'>Repair Cost 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            How much does foundation crack repair cost in 2026? We break down epoxy injection vs. polyurethane foam and exactly what drives the $350–$1,500 price tag.
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
                  <span>12 min read</span>
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
            Foundation cracks are one of the most common — and most misunderstood — home repair issues. Depending on crack type, width, and repair method, expect to pay $350 to $1,500 per crack.
          </p>

          <h2 className='text-4xl mb-6'>Cost by Repair Method</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-16 not-prose'>
            <div className='bg-slate-50 rounded-3xl p-8 text-center border border-slate-100'>
              <div className='text-3xl font-black text-slate-900 mb-2'>$350–800</div>
              <div className='text-slate-500 text-sm font-medium mb-3'>Per Crack</div>
              <div className='text-violet-600 font-bold'>Epoxy Injection</div>
              <p className='text-slate-500 text-sm mt-3'>Best for structural cracks. Restores concrete strength.</p>
            </div>
            <div className='bg-violet-600 rounded-3xl p-8 text-center shadow-xl shadow-violet-100'>
              <div className='text-3xl font-black text-white mb-2'>$400–1,000</div>
              <div className='text-violet-200 text-sm font-medium mb-3'>Per Crack</div>
              <div className='text-white font-bold'>Polyurethane Foam</div>
              <p className='text-violet-100 text-sm mt-3'>Best for leaking cracks. Expands to stop water.</p>
            </div>
            <div className='bg-slate-900 rounded-3xl p-8 text-center'>
              <div className='text-3xl font-black text-white mb-2'>$800–1,500+</div>
              <div className='text-slate-400 text-sm font-medium mb-3'>Per Crack</div>
              <div className='text-violet-400 font-bold'>Carbon Fiber Straps</div>
              <p className='text-slate-400 text-sm mt-3'>For bowing walls. Permanent stabilization.</p>
            </div>
          </div>

          <h2 className='text-4xl mb-6'>Key Cost Factors</h2>
          <ul>
            <li><strong>Crack Width:</strong> Hairline cracks under 1/16\" are typically cosmetic. Cracks wider than 1/4\" or with horizontal displacement require professional attention.</li>
            <li><strong>Crack Direction:</strong> Vertical cracks are usually settling. Horizontal cracks indicate soil pressure and signal structural failure.</li>
            <li><strong>Access:</strong> Interior repairs ($350–$800) are significantly cheaper than exterior excavation ($2,000–$7,000).</li>
            <li><strong>Number of Cracks:</strong> Most contractors charge per crack, though multiple repairs in one visit may qualify for a discount.</li>
            <li><strong>Water Infiltration:</strong> If cracks are actively leaking, polyurethane foam is required to expand and block the flow.</li>
          </ul>

          <h2 className='text-4xl mb-6'>Epoxy vs. Polyurethane Comparison</h2>
          <div className='my-12 rounded-3xl overflow-hidden shadow-2xl not-prose'>
            <div className='bg-slate-900 px-8 py-10'>
              <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                  <thead>
                    <tr className='border-b border-slate-700'>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Factor</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Epoxy</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Polyurethane</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-800'>
                    <tr>
                      <td className='py-5 text-white font-medium'>Structural Repair</td>
                      <td className='py-5 text-violet-400 font-medium'>✓ Yes</td>
                      <td className='py-5 text-slate-300'>✗ No</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Water Stop</td>
                      <td className='py-5 text-slate-300'>Partial</td>
                      <td className='py-5 text-violet-400 font-medium'>✓ Excellent</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Average Cost</td>
                      <td className='py-5 text-slate-300'>$350 – $800</td>
                      <td className='py-5 text-slate-300'>$400 – $1,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

                    {/* Related Guides */}
          <section className='mt-16 mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
            <div className='grid md:grid-cols-2 gap-4'>
              <Link href='/articles/types-of-foundation-cracks' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h3 className='font-bold text-slate-900 mb-2'>Types of Foundation Cracks</h3>
                <p className='text-slate-600 text-sm'>Diagnose whether your crack is cosmetic or a structural red flag.</p>
              </Link>
              <Link href='/articles/bowing-basement-walls' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h3 className='font-bold text-slate-900 mb-2'>Bowing Basement Walls Guide</h3>
                <p className='text-slate-600 text-sm'>Causes, repair methods, and costs for bowing and leaning walls.</p>
              </Link>
              <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h3 className='font-bold text-slate-900 mb-2'>Complete Waterproofing Guide</h3>
                <p className='text-slate-600 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
              </Link>
              <Link href='/articles/basement-efflorescence' className='block bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors'>
                <h3 className='font-bold text-slate-900 mb-2'>Basement Efflorescence Explained</h3>
                <p className='text-slate-600 text-sm'>What that white powder on your walls really means and how to stop it.</p>
              </Link>
            </div>
          </section>

          <div className='bg-violet-600 rounded-3xl p-12 text-white my-20 shadow-xl shadow-violet-200 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get Foundation Crack Repair Quotes</h2>
              <p className='text-violet-100 text-lg mb-10'>
                Compare free estimates from local foundation specialists. Protect your home\'s value.
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
