import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Sump Pumps & Leak Sensors: The 2026 Guide | The Basement Guide',
  description: 'IoT flood prevention systems that text you before disasters. Matter protocol, Thread networks, and predictive monitoring explained.',
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
            IoT flood prevention systems that text you before disasters. Matter protocol, Thread networks, and predictive monitoring explained.
          </p>

          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
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
      <main className='max-w-4xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline'>

          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-cyan-500 pl-8'>
            Your basement can flood while you sleep. A smart sump pump system doesn\'t just pump water—it sends you an alert before a disaster happens.
          </p>

          <h2 className='text-4xl mb-6'>Why Go Smart?</h2>
          <p>
            Traditional sump pumps are reactive: they run when water reaches a certain level. Smart systems are predictive: they monitor the water level continuously, send alerts when it rises faster than normal, and can even detect a pump failure before it causes a flood.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose'>
            <div className='bg-slate-50 rounded-3xl p-8 border border-slate-100'>
              <h4 className='text-xl font-black text-slate-900 mb-4'>Standard Pump</h4>
              <ul className='space-y-2 text-slate-600'>
                <li className='flex items-start gap-2'><span className='text-red-500 mt-1'>&#10007;</span><span>Runs only when float activates</span></li>
                <li className='flex items-start gap-2'><span className='text-red-500 mt-1'>&#10007;</span><span>No alerts on failure</span></li>
                <li className='flex items-start gap-2'><span className='text-red-500 mt-1'>&#10007;</span><span>No backup power notification</span></li>
                <li className='flex items-start gap-2'><span className='text-green-500 mt-1'>&#10003;</span><span>Low cost ($150-$400)</span></li>
              </ul>
            </div>
            <div className='bg-cyan-600 rounded-3xl p-8'>
              <h4 className='text-xl font-black text-white mb-4'>Smart System</h4>
              <ul className='space-y-2 text-cyan-100'>
                <li className='flex items-start gap-2'><span className='text-white mt-1'>&#10003;</span><span>Continuous water level monitoring</span></li>
                <li className='flex items-start gap-2'><span className='text-white mt-1'>&#10003;</span><span>Alerts before water reaches pump</span></li>
                <li className='flex items-start gap-2'><span className='text-white mt-1'>&#10003;</span><span>Pump failure detection</span></li>
                <li className='flex items-start gap-2'><span className='text-white mt-1'>&#10003;</span><span>Power outage notification</span></li>
              </ul>
            </div>
          </div>

          <h2 className='text-4xl mb-6'>What to Look For in 2026</h2>
          <p>
            The best smart sump systems in 2026 support <strong>Matter</strong>, the universal smart home protocol. This means they work natively with Apple Home, Google Home, and Amazon Alexa without proprietary bridges. Look for Thread networking support for the most reliable mesh connection.
          </p>

          <h2 className='text-4xl mb-6'>The Best Setup: A Layered Approach</h2>
          <p>
            The most reliable flood prevention combines three layers: a primary smart sump pump, a battery backup pump that activates automatically, and distributed leak sensors at the water heater, washing machine, and any basement bathroom. Each layer catches what the others might miss.
          </p>

          <div className='my-12 rounded-3xl overflow-hidden shadow-2xl not-prose'>
            <div className='bg-slate-900 px-8 py-10'>
              <h3 className='text-white text-2xl font-bold mb-8'>Smart System Cost Comparison</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                  <thead>
                    <tr className='border-b border-slate-700'>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Component</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Price Range</th>
                      <th className='pb-4 font-bold text-slate-400 uppercase text-xs tracking-widest'>Notes</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-800'>
                    <tr>
                      <td className='py-5 text-white font-medium'>Smart Primary Pump</td>
                      <td className='py-5 text-cyan-400 font-medium'>$400 - $800</td>
                      <td className='py-5 text-slate-300'>Wi-Fi + Matter support</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Battery Backup</td>
                      <td className='py-5 text-cyan-400 font-medium'>$250 - $600</td>
                      <td className='py-5 text-slate-300'>10,000+ gallons per charge</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Leak Sensors (3-pack)</td>
                      <td className='py-5 text-cyan-400 font-medium'>$50 - $150</td>
                      <td className='py-5 text-slate-300'>Thread-enabled recommended</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Professional Install</td>
                      <td className='py-5 text-cyan-400 font-medium'>$200 - $500</td>
                      <td className='py-5 text-slate-300'>Optional for DIY-capable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='bg-cyan-600 rounded-3xl p-12 text-white my-20 shadow-xl shadow-cyan-100 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Upgrade Your Sump System Today</h2>
              <p className='text-cyan-100 text-lg mb-10'>
                Get quotes from licensed plumbers who specialize in basement waterproofing systems.
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
