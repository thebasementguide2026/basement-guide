import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Complete Basement Waterproofing Guide for 2026',
  description: 'Identify water sources, compare interior vs. exterior methods, and explore smart monitoring systems. The definitive roadmap for a dry basement.',
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
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
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
            Protect your foundation from hydrostatic pressure and extreme weather. Expert comparisons, costs, and step-by-step solutions for a dry home.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div>
                <p className='text-white font-semibold text-sm'>The Basement Guide Staff</p>
                <p className='text-slate-400 text-xs'>Updated Feb 20, 2026 &bull; 35 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16'>

        {/* Left: Article Body */}
        <article className='prose prose-slate max-w-none'>

          <p className='text-xl text-slate-600 leading-relaxed mb-10 font-medium border-l-4 border-teal-500 pl-6 italic'>
            In 2026, with rising extreme weather events, basement waterproofing is more essential than ever. It is not just about keeping things dry&mdash;it is about protecting your home&apos;s structural integrity and your family&apos;s health.
          </p>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Why Waterproof Your Basement?</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>Proactive waterproofing can boost your home&apos;s value by 10-15% and prevent multi-thousand dollar foundation repairs. Key benefits in 2026 include:</p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-10'>
            <div className='bg-slate-50 p-6 rounded-xl border border-slate-100'>
              <h4 className='font-bold text-slate-800 mb-2'>Health Hazards</h4>
              <p className='text-slate-500 text-sm'>Reduces humidity below 60%, the threshold for mold and allergen growth.</p>
            </div>
            <div className='bg-slate-50 p-6 rounded-xl border border-slate-100'>
              <h4 className='font-bold text-slate-800 mb-2'>Structural Integrity</h4>
              <p className='text-slate-500 text-sm'>Prevents hydrostatic pressure from eroding foundations and causing cracks.</p>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Latest Advancements in 2026</h2>
          <ul className='space-y-6 mb-12'>
            <li className='flex gap-4'>
              <div className='flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' /></svg>
              </div>
              <div>
                <h4 className='font-bold text-slate-800'>Smart Monitoring Systems</h4>
                <p className='text-slate-500 text-sm'>IoT-enabled pumps and sensors detect leaks via apps, providing real-time alerts before failure.</p>
              </div>
            </li>
            <li className='flex gap-4'>
              <div className='flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' /></svg>
              </div>
              <div>
                <h4 className='font-bold text-slate-800'>Crystalline Technology</h4>
                <p className='text-slate-500 text-sm'>Chemicals that penetrate concrete to form insoluble crystals, self-healing micro-cracks over time.</p>
              </div>
            </li>
          </ul>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Methods Compared: Interior vs. Exterior</h2>
          <div className='overflow-x-auto mb-10 border border-slate-200 rounded-xl shadow-sm'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='px-6 py-4 font-semibold'>Method</th>
                  <th className='px-6 py-4 font-semibold text-center'>Avg. Cost</th>
                  <th className='px-6 py-4 font-semibold'>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-bold text-slate-700'>Interior Drainage</td>
                  <td className='px-6 py-4 text-center text-slate-600 font-mono'>$3,000&ndash;$12,000</td>
                  <td className='px-6 py-4 text-slate-500 text-sm'>Minor leaks and ongoing seepage management.</td>
                </tr>
                <tr className='bg-slate-50/50 border-b border-slate-100'>
                  <td className='px-6 py-4 font-bold text-slate-700'>Exterior Membranes</td>
                  <td className='px-6 py-4 text-center text-slate-600 font-mono'>$8,000&ndash;$15,000</td>
                  <td className='px-6 py-4 text-slate-500 text-sm'>New builds or severe hydrostatic pressure.</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 font-bold text-slate-700'>Sump Pump Systems</td>
                  <td className='px-6 py-4 text-center text-slate-600 font-mono'>$500&ndash;$2,000</td>
                  <td className='px-6 py-4 text-slate-500 text-sm'>Flood-prone basements needing active pumping.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>DIY vs. Professional Installation</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
            <div>
              <h4 className='font-bold text-teal-600 mb-3'>DIY-Friendly Tasks</h4>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li>&bull; Sealing minor hairline cracks with epoxy</li>
                <li>&bull; Improving yard grading (1 in/ft slope)</li>
                <li>&bull; Applying waterproof coatings (e.g. Drylok)</li>
                <li>&bull; Extending downspouts at least 10ft</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold text-slate-800 mb-3'>Hire a Pro For</h4>
              <ul className='space-y-2 text-sm text-slate-600'>
                <li>&bull; Foundation excavation and membrane install</li>
                <li>&bull; Interior French drain & sumps</li>
                <li>&bull; Structural crack stabilization</li>
                <li>&bull; Thermal imaging leak detection</li>
              </ul>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Conclusion: ROI and Peace of Mind</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>Waterproofing typically pays for itself in 3-5 years through energy savings and avoided repair costs. In 2026, an energy-efficient, dry basement is a high-performance asset that ensures your home remains a healthy environment for decades.</p>

        </article>

        {/* Right: Sidebar */}
        <aside className='space-y-8'>

          <LeadForm />

          <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
            <h3 className='font-bold text-slate-800 text-lg mb-4'>Warning Signs</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <span className='text-red-500 mt-1'>&bull;</span>
                <p className='text-slate-500 text-sm'>Musty odors or visible mold growth.</p>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-red-500 mt-1'>&bull;</span>
                <p className='text-slate-500 text-sm'>Efflorescence (white powder on walls).</p>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-red-500 mt-1'>&bull;</span>
                <p className='text-slate-500 text-sm'>Humidity levels consistently above 50%.</p>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-red-500 mt-1'>&bull;</span>
                <p className='text-slate-500 text-sm'>Puddles after rain or damp spots on slab.</p>
              </li>
            </ul>
          </div>

        </aside>

      </div>

    </div>
  )
}
