import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Basement Waterproofing Guide 2026 | Stop Leaks for Good',
  description: 'Everything you need to know about basement waterproofing. From hydrostatic pressure to sump pumps, drainage systems, and sealants. Expert guidance for homeowners.',
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
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-blue-500'></div>
            <span className='text-blue-400 font-bold tracking-[0.3em] text-sm uppercase'>Master Guide</span>
          </div>
          
          <h1 className='text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter'>
            The Complete <br />
            <span className='text-blue-500'>Waterproofing Guide</span>
          </h1>
          
          <p className='text-xl md:text-2xl text-slate-300 max-w-3xl mb-10 font-medium leading-relaxed'>
            Everything you need to know about stopping basement leaks for good. From hydrostatic pressure to smart sump systems.
          </p>
          
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm mr-4 shadow-inner'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm tracking-tight'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-strong:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline'>
          
          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-blue-500 pl-8'>
            A dry basement isn't just about comfort—it's about protecting your home's structural integrity and your family's health. In this comprehensive guide, we'll walk you through everything you need to know about basement waterproofing.
          </p>

          <h2 className='text-4xl mb-8'>Understanding Hydrostatic Pressure: The Root Cause</h2>
          <p>
            Before we dive into solutions, let's understand the enemy. Hydrostatic pressure is the force exerted by water in the soil surrounding your foundation. After heavy rain or snowmelt, the water table rises, and gravity pushes that water against your basement walls with incredible force.
          </p>

          <div className='my-16 bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-sm'>
            <h3 className='text-xl font-bold mb-8 text-center text-slate-900'>How Hydrostatic Pressure Works</h3>
            <div className='relative aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-2xl bg-white shadow-inner border border-slate-200'>
              <svg viewBox=\"0 0 800 500\" className=\"w-full h-full\">
                <defs>
                  <linearGradient id=\"groundGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">
                    <stop offset=\"0%\" stopColor=\"#8B7355\" />
                    <stop offset=\"100%\" stopColor=\"#654321\" />
                  </linearGradient>
                  <linearGradient id=\"waterGrad\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">
                    <stop offset=\"0%\" stopColor=\"#1E40AF\" />
                    <stop offset=\"100%\" stopColor=\"#60A5FA\" />
                  </linearGradient>
                  <marker id=\"arrowRed\" markerWidth=\"10\" markerHeight=\"10\" refX=\"9\" refY=\"3\" orient=\"auto\">
                    <polygon points=\"0 0, 10 3, 0 6\" fill=\"#EF4444\" />
                  </marker>
                </defs>
                <rect x=\"0\" y=\"0\" width=\"800\" height=\"200\" fill=\"url(#groundGrad)\" />
                <rect x=\"0\" y=\"200\" width=\"800\" height=\"300\" fill=\"url(#waterGrad)\" opacity=\"0.7\" />
                <rect x=\"300\" y=\"150\" width=\"200\" height=\"300\" fill=\"#D1D5DB\" stroke=\"#6B7280\" strokeWidth=\"4\" />
                <text x=\"400\" y=\"300\" fontSize=\"20\" fontWeight=\"600\" textAnchor=\"middle\" fill=\"#374151\">Basement Wall</text>
                <path d=\"M 150 300 L 280 300\" stroke=\"#EF4444\" strokeWidth=\"4\" markerEnd=\"url(#arrowRed)\" />
                <path d=\"M 520 300 L 650 300\" stroke=\"#EF4444\" strokeWidth=\"4\" markerEnd=\"url(#arrowRed)\" />
                <text x=\"200\" y=\"340\" fontSize=\"14\" fill=\"#DC2626\" fontWeight=\"600\">Hydrostatic Pressure →</text>
                <text x=\"520\" y=\"340\" fontSize=\"14\" fill=\"#DC2626\" fontWeight=\"600\">→ Hydrostatic Pressure</text>
              </svg>
            </div>
          </div>

          <h2 className='text-4xl mb-8'>The Multi-Layer Defense Strategy</h2>
          <p>
            Professional waterproofing isn't about one silver bullet—it's about creating multiple layers of defense. Here's the proven approach used by the best contractors:
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-16'>
            <div className='bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold mb-6'>1</div>
              <h4 className='text-xl font-bold mb-4'>Exterior Drainage</h4>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Intercepts water before it reaches your walls. Perforated pipes at the base of your foundation carry water away to a safe discharge point.
              </p>
            </div>
            <div className='bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold mb-6'>2</div>
              <h4 className='text-xl font-bold mb-4'>Sump Pump Systems</h4>
              <p className='text-slate-600 text-sm leading-relaxed'>
                The heart of your system. Automatically removes water that accumulates in a dedicated pit. Modern systems feature WiFi alerts and battery backups.
              </p>
            </div>
          </div>

          <h3 className='text-3xl mb-6'>The Science of Concrete Permeability</h3>
          <p>
            Concrete is naturally porous. As it cures, excess water evaporates, leaving behind millions of microscopic capillary tunnels. This is why modern builders are increasingly turning to <Link href=\"/articles/crystalline-waterproofing\">crystalline waterproofing technology</Link> as a preventive measure.
          </p>

          <div className='my-16 rounded-3xl overflow-hidden shadow-2xl'>
            <div className='bg-slate-900 px-8 py-10'>
              <h3 className='text-white text-2xl font-bold mb-8'>Cost Comparison: 2026 Estimates</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                  <thead>
                    <tr className='border-b border-slate-700'>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>System Type</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Average Cost</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-800'>
                    <tr>
                      <td className='py-6 text-white font-bold'>Exterior Drainage</td>
                      <td className='py-6 text-slate-300'>$5,000 - $15,000</td>
                      <td className='py-6 text-blue-400 font-medium'>30+ Years</td>
                    </tr>
                    <tr>
                      <td className='py-6 text-white font-bold'>Interior Drainage</td>
                      <td className='py-6 text-slate-300'>$3,000 - $8,000</td>
                      <td className='py-6 text-blue-400 font-medium'>20-25 Years</td>
                    </tr>
                    <tr>
                      <td className='py-6 text-white font-bold'>Sump Pump + Backup</td>
                      <td className='py-6 text-slate-300'>$800 - $2,000</td>
                      <td className='py-6 text-blue-400 font-medium'>7-10 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='bg-blue-600 rounded-3xl p-12 text-white my-20 shadow-xl shadow-blue-200 relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-6'>Ready to Waterproof Your Basement?</h2>
              <p className='text-blue-100 text-lg mb-10'>
                Get free, no-obligation quotes from licensed waterproofing contractors in your area today.
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
