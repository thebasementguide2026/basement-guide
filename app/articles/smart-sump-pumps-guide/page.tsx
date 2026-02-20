import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Sump Pumps & Leak Sensors: The 2026 Guide | The Basement Guide',
  description: 'Everything you need to know about smart sump pumps, IoT leak sensors, and Wi-Fi flood monitoring systems. Matter protocol, battery backups, and top picks for 2026.',
}

export default function SmartSumpPumpsGuide() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
                    src='/smart-home-leak-sensors.jpg.jpg'
          alt='Smart sump pump system with IoT monitoring'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-cyan-500'></div>
            <span className='text-cyan-400 font-bold tracking-[0.3em] text-sm uppercase'>Smart Home Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Smart Sump Pumps<br />
            <span className='text-cyan-400'>&amp; Leak Sensors 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            IoT flood prevention systems that alert you before disaster strikes. The complete 2026 guide to smart pumps, leak sensors, battery backups, and Matter protocol.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-3'>
                <span className='text-white text-xs font-bold'>BG</span>
              </div>
              <span className='text-white font-semibold text-sm'>The Basement Guide Staff</span>
            </div>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50'>
              <span className='text-slate-300 text-sm'>Updated Feb 2026</span>
              <span className='text-slate-500 mx-3'>•</span>
              <span className='text-slate-300 text-sm'>16 min read</span>
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
              <p className='text-xl text-slate-700 leading-relaxed mb-6'>
                Your basement can flood while you sleep. A burst pipe, a failed pump, or a slow leak behind the drywall can cause tens of thousands in damage before you ever notice. Smart sump pump systems and IoT leak sensors exist for exactly this reason: they monitor your basement 24/7 and alert you the moment something goes wrong.
              </p>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                In 2026, smart flood prevention has matured dramatically. Matter protocol has standardized how these devices communicate, battery backup technology has improved, and leak sensors have gotten cheaper and smarter. This guide covers everything you need to know to protect your basement intelligently.
              </p>
              <div className='bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl'>
                <p className='text-cyan-900 font-semibold text-lg mb-1'>The core problem with traditional sump pumps</p>
                <p className='text-cyan-800'>Traditional pumps are reactive. They only run when water already reaches the float switch. Smart systems are predictive — they watch the water level rise, detect abnormal patterns, and alert you while there&apos;s still time to act.</p>
              </div>
            </section>

            {/* Smart vs Standard */}
            <section>
              <h2 className='text-3xl font-black text-slate-900 mb-4 tracking-tight'>Smart vs. Standard Sump Pumps</h2>
              <p className='text-slate-600 mb-8 text-lg'>The price gap between a standard and smart sump pump is roughly $200-$400. Here is what you get for that investment:</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-red-50 border border-red-200 rounded-2xl p-6'>
                  <h3 className='text-xl font-bold text-red-800 mb-4'>Standard Pump</h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start'><span className='text-red-500 font-bold mr-3 mt-0.5'>✗</span><span className='text-slate-700'>Runs only when float switch activates</span></li>
                    <li className='flex items-start'><span className='text-red-500 font-bold mr-3 mt-0.5'>✗</span><span className='text-slate-700'>No alerts on failure or high water</span></li>
                    <li className='flex items-start'><span className='text-red-500 font-bold mr-3 mt-0.5'>✗</span><span className='text-slate-700'>No power outage notification</span></li>
                    <li className='flex items-start'><span className='text-red-500 font-bold mr-3 mt-0.5'>✗</span><span className='text-slate-700'>No run cycle logging or history</span></li>
                    <li className='flex items-start'><span className='text-green-600 font-bold mr-3 mt-0.5'>✓</span><span className='text-slate-700'>Low cost ($150–$400)</span></li>
                  </ul>
                </div>
                <div className='bg-green-50 border border-green-200 rounded-2xl p-6'>
                  <h3 className='text-xl font-bold text-green-800 mb-4'>Smart System</h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start'><span className='text-green-600 font-bold mr-3 mt-0.5'>✓</span><span className='text-slate-700'>Continuous water level monitoring</span></li>
                    <li className='flex items-start'><span className='text-green-600 font-bold mr-3 mt-0.5'>✓</span><span className='text-slate-700'>Phone alerts before water reaches pump</span></li>
                    <li className='flex items-start'><span className='text-green-600 font-bold mr-3 mt-0.5'>✓</span><span className='text-slate-700'>Pump failure detection</span></li>
                    <li className='flex items-start'><span className='text-green-600 font-bold mr-3 mt-0.5'>✓</span><span className='text-slate-700'>Power outage & battery backup alerts</span></li>
                    <li className='flex items-start'><span className='text-green-600 font-bold mr-3 mt-0.5'>✓</span><span className='text-slate-700'>Run cycle data & maintenance reminders</span></li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Best Setup Layered Approach */}
            <section>
              <h2 className='text-3xl font-black text-slate-900 mb-4 tracking-tight'>The Best Setup: A Layered Approach</h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-8'>
                The most reliable flood prevention strategy in 2026 isn&apos;t just one device; it&apos;s a layered defense system that protects against multiple failure points:
              </p>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='bg-cyan-100 text-cyan-600 w-10 h-10 rounded-xl flex items-center justify-center font-bold mr-6 shrink-0'>1</div>
                  <div>
                    <h4 className='text-xl font-bold text-slate-900 mb-1'>Primary Smart Pump</h4>
                    <p className='text-slate-600'>A high-capacity (1/2 or 3/4 HP) Wi-Fi enabled pump. This handles 99% of the work and provides the core data on water levels and pump health.</p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='bg-cyan-100 text-cyan-600 w-10 h-10 rounded-xl flex items-center justify-center font-bold mr-6 shrink-0'>2</div>
                  <div>
                    <h4 className='text-xl font-bold text-slate-900 mb-1'>Battery Backup System</h4>
                    <p className='text-slate-600'>Essential for power outages or if the primary pump fails. Modern backups like the Basement Watchdog or Wayne Smart systems can pump 10,000+ gallons on a single charge.</p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='bg-cyan-100 text-cyan-600 w-10 h-10 rounded-xl flex items-center justify-center font-bold mr-6 shrink-0'>3</div>
                  <div>
                    <h4 className='text-xl font-bold text-slate-900 mb-1'>Distributed Leak Sensors</h4>
                    <p className='text-slate-600'>Place these near water heaters, washing machines, and in the far corners of the basement. They detect water from sources other than the sump pit (like a burst pipe).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Matter & Thread Section */}
            <section className='bg-slate-900 rounded-3xl p-10 text-white'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='px-3 py-1 bg-cyan-500 text-xs font-bold uppercase tracking-wider rounded-md'>2026 Update</div>
                <h2 className='text-2xl font-bold'>Matter &amp; Thread Support</h2>
              </div>
              <p className='text-slate-400 text-lg leading-relaxed mb-6'>
                In 2026, we recommend only buying leak sensors and smart pumps that support **Matter over Thread**. This ensures:
              </p>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <li className='flex items-center space-x-3'><span className='w-1.5 h-1.5 bg-cyan-500 rounded-full'></span><span className='text-slate-300'>No proprietary bridges required</span></li>
                <li className='flex items-center space-x-3'><span className='w-1.5 h-1.5 bg-cyan-500 rounded-full'></span><span className='text-slate-300'>Local control (works without internet)</span></li>
                <li className='flex items-center space-x-3'><span className='w-1.5 h-1.5 bg-cyan-500 rounded-full'></span><span className='text-slate-300'>Ultra-low battery drain for sensors</span></li>
                <li className='flex items-center space-x-3'><span className='w-1.5 h-1.5 bg-cyan-500 rounded-full'></span><span className='text-slate-300'>Instant response times</span></li>
              </ul>
            </section>

            {/* Cost Table */}
            <section>
              <h2 className='text-3xl font-black text-slate-900 mb-6 tracking-tight'>Smart System Cost Comparison</h2>
              <div className='overflow-hidden border border-slate-200 rounded-2xl'>
                <table className='w-full text-left border-collapse'>
                  <thead className='bg-slate-50 border-b border-slate-200'>
                    <tr>
                      <th className='px-6 py-4 text-sm font-bold text-slate-900 uppercase tracking-wider'>Component</th>
                      <th className='px-6 py-4 text-sm font-bold text-slate-900 uppercase tracking-wider'>Price Range</th>
                      <th className='px-6 py-4 text-sm font-bold text-slate-900 uppercase tracking-wider'>Best For</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-200'>
                    <tr>
                      <td className='px-6 py-4 text-slate-900 font-semibold'>Smart Primary Pump</td>
                      <td className='px-6 py-4 text-slate-600'>$400 – $850</td>
                      <td className='px-6 py-4 text-slate-600'>High-water table areas</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 text-slate-900 font-semibold'>Wi-Fi Retrofit Controller</td>
                      <td className='px-6 py-4 text-slate-600'>$150 – $250</td>
                      <td className='px-6 py-4 text-slate-600'>Existing healthy pumps</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 text-slate-900 font-semibold'>Leak Sensors (3-pack)</td>
                      <td className='px-6 py-4 text-slate-600'>$60 – $180</td>
                      <td className='px-6 py-4 text-slate-600'>Whole-basement monitoring</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 text-slate-900 font-semibold'>Matter Border Router</td>
                      <td className='px-6 py-4 text-slate-600'>$50 – $100</td>
                      <td className='px-6 py-4 text-slate-600'>System connectivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* DIY vs Pro */}
            <section>
              <div className='bg-slate-50 rounded-3xl p-8 border border-slate-200'>
                <h3 className='text-2xl font-bold text-slate-900 mb-4'>Can you install a smart system yourself?</h3>
                <p className='text-slate-600 text-lg leading-relaxed mb-6'>
                  Installing leak sensors and Wi-Fi controllers is a simple DIY task. However, replacing a primary sump pump involves plumbing (PVC cutting and gluing) and electrical work. If you are not comfortable with pipe fitting, we recommend a professional installation to ensure your discharge lines are perfectly sealed.
                </p>
                <Link href='/articles/sump-pump-installation-cost' className='inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors'>
                  View Sump Pump Installation Cost Guide
                  <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='<ctrl42> 17 8l4 4m0 0l-4 4m4-4H3'></path></svg>
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className='space-y-12'>
            <div className='sticky top-12 space-y-12'>
              {/* CTA Form */}
              <div className='bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16 blur-3xl'></div>
                <h3 className='text-2xl font-bold mb-4 relative z-10'>Protect Your Basement</h3>
                <p className='text-slate-400 mb-8 relative z-10 text-sm leading-relaxed'>
                  Get connected with local waterproofing experts to install a smart flood prevention system.
                </p>
                <LeadForm />
              </div>

              {/* Related Articles */}
              <div className='space-y-6'>
                <h4 className='text-sm font-bold text-slate-900 uppercase tracking-widest px-2'>Related Resources</h4>
                <div className='space-y-4'>
                  {[
                    { title: 'Sump Pump Buying Guide', slug: 'sump-pump-buying-guide' },
                    { title: 'Battery vs Water Powered Backups', slug: 'battery-vs-water-powered-sump-pumps' },
                    { title: 'Why Sump Pumps Fail', slug: 'why-basement-floods-with-sump-pump' }
                  ].map((article) => (
                    <Link key={article.slug} href={`/articles/${article.slug}`} className='group block p-4 bg-white border border-slate-100 rounded-2xl hover:border-cyan-200 hover:shadow-md transition-all'>
                      <p className='text-slate-900 font-bold group-hover:text-cyan-600 transition-colors'>{article.title}</p>
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
