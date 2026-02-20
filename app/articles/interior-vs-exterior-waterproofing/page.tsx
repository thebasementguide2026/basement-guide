import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior vs. Exterior Basement Waterproofing: The 2026 Comparison Guide',
  description: 'Should you waterproof your basement from the inside or outside? A deep dive into costs, methods, lifespan, and which is right for your home.',
}

export default function InteriorVsExteriorGuide() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/foundation-waterproofing-construction.jpg.png'
          alt='Basement waterproofing construction comparison'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>Comparison Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Interior vs. Exterior<br />
            <span className='text-teal-400'>Waterproofing 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Stopping water vs. managing it. We break down the costs, methods, and lifespan of the two primary ways to dry your basement.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>25 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline'>
          
          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-teal-500 pl-8'>
            If you have a wet basement, you're facing one of the most critical decisions a homeowner can make. Do you address the problem from the outside, stopping water before it touches your foundation, or manage it from the inside?
          </p>

          <h2 className='text-3xl mb-8 uppercase tracking-tight'>Comparison at a Glance</h2>
          <div className='overflow-x-auto rounded-3xl border border-slate-200 shadow-sm not-prose mb-16'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-slate-50'>
                  <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest'>Feature</th>
                  <th className='p-6 font-black text-teal-700 uppercase text-xs tracking-widest'>Interior</th>
                  <th className='p-6 font-black text-blue-700 uppercase text-xs tracking-widest'>Exterior</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Primary Goal</td>
                  <td className='p-6 text-slate-600'>Water Management</td>
                  <td className='p-6 text-slate-600'>Water Prevention</td>
                </tr>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Average Cost</td>
                  <td className='p-6 text-teal-600 font-black'>$3,000 – $8,000</td>
                  <td className='p-6 text-blue-600 font-black'>$15,000 – $35,000+</td>
                </tr>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Lifespan</td>
                  <td className='p-6 text-slate-600'>Lifetime (w/ pump)</td>
                  <td className='p-6 text-slate-600'>20 – 40 Years</td>
                </tr>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Invasiveness</td>
                  <td className='p-6 text-slate-600'>Moderate (Inside)</td>
                  <td className='p-6 text-slate-600'>High (Excavation)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='text-4xl mb-6'>The Science of Basement Water</h2>
          <p>
            To choose the right method, you first must understand the enemy. Your basement isn't just a room; it's a hollow box submerged in a sea of soil and groundwater.
          </p>
          
          <h3 className='text-2xl font-bold mt-10 mb-4'>Hydrostatic Pressure: The Driving Force</h3>
          <p>
            When it rains, the soil around your home becomes saturated. Water is heavy—a single cubic foot of saturated soil can weigh 120 pounds. As water levels rise, it creates <strong>hydrostatic pressure</strong> against your foundation walls and floor.
          </p>

          <div className='bg-teal-50 rounded-3xl p-12 my-16 border border-teal-100 not-prose'>
            <h2 className='text-3xl font-black text-teal-900 mb-6'>Interior Waterproofing</h2>
            <p className='text-lg text-slate-700 mb-8 font-medium'>
              Interior waterproofing is the most common solution for existing homes. Instead of trying to fight the massive force of the earth, it works <em>with</em> the water by giving it a controlled path to exit.
            </p>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-8 rounded-2xl shadow-sm border border-teal-200'>
                <h4 className='font-black text-teal-900 mb-4 uppercase tracking-widest text-sm'>The Advantages</h4>
                <ul className='space-y-3 text-slate-600 font-medium'>
                  <li className='flex gap-2'><span className='text-teal-500'>✔</span> Usually 1/3 the price</li>
                  <li className='flex gap-2'><span className='text-teal-500'>✔</span> Landscaping stays untouched</li>
                  <li className='flex gap-2'><span className='text-teal-500'>✔</span> Finished in 2–4 days</li>
                </ul>
              </div>
              <div className='bg-white p-8 rounded-2xl shadow-sm border border-slate-200'>
                <h4 className='font-black text-slate-400 mb-4 uppercase tracking-widest text-sm'>The Disadvantages</h4>
                <ul className='space-y-3 text-slate-500 font-medium'>
                  <li className='flex gap-2'><span>–</span> Water still touches walls</li>
                  <li className='flex gap-2'><span>–</span> Messy jackhammering</li>
                  <li className='flex gap-2'><span>–</span> Reliant on sump pump</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className='text-4xl mb-6'>Exterior Waterproofing</h2>
          <p>
            Exterior waterproofing is the gold standard for foundation protection. It involves physically sealing the foundation from the outside, ensuring that water never touches the concrete.
          </p>

          <div className='relative h-96 rounded-3xl overflow-hidden my-12 shadow-2xl not-prose'>
            <Image 
              src='/exterior-waterproofing-membrane.jpg.png' 
              alt='Exterior waterproofing membrane application' 
              fill 
              className='object-cover' 
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
            <div className='absolute bottom-8 left-8 text-white'>
              <p className='text-teal-400 font-black uppercase tracking-widest text-sm mb-2'>Full Prevention</p>
              <h4 className='text-3xl font-black'>Seal the Problem at the Source</h4>
            </div>
          </div>

          <div className='bg-slate-900 rounded-3xl p-12 text-white my-20 shadow-xl shadow-teal-900/20 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get a Professional Assessment</h2>
              <p className='text-teal-100 text-lg mb-10'>
                Compare estimates from local waterproofing experts to find the right solution for your specific foundation.
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
