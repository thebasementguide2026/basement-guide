import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Battery Backup vs Water-Powered Sump Pumps: 2026 Comparison Guide',
  description: 'Complete comparison of battery backup and water-powered sump pump systems. Flow rates, costs, pros & cons to help you choose the right backup system.',
};

export default function BatteryVsWaterPoweredPumps() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/sump-pump-installation.jpg.png'
          alt='Sump pump backup system installation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>Reliability Comparison</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Power vs. Physics: <br />
            <span className='text-indigo-400'>Sump Pump Backup</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            When the power goes out during a storm, which backup system will save your basement?
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
                  <span>11 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline'>
          
          <p className='text-xl leading-relaxed text-slate-600 italic border-l-4 border-indigo-500 pl-6 mb-12'>
            When a severe storm rolls in and the power grid flickers out, your primary sump pump becomes nothing more than an expensive paperweight.
          </p>

          <h2 className='text-3xl uppercase tracking-tight'>The Battery Backup: The Modern Powerhouse</h2>
          <p>
            Battery backup systems have seen a massive leap in technology thanks to the "Solid State Revolution" of the mid-2020s. No longer are homeowners tethered to heavy, off-gassing lead-acid batteries.
          </p>

          <section className='my-16 not-prose'>
            <h2 className='text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight text-center'>Head-to-Head Comparison</h2>
            <div className='overflow-x-auto rounded-3xl border border-slate-200 shadow-sm'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='bg-slate-50'>
                    <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest'>Feature</th>
                    <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest'>Battery Backup (LiFePO4)</th>
                    <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest'>Water-Powered Pump</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-100'>
                  {[
                    { feat: 'Power Source', bat: 'Stored Chemical Energy', water: 'Municipal Water Pressure' },
                    { feat: 'Runtime', bat: '12 to 72 Hours', water: 'Infinite (w/ City Water)' },
                    { feat: 'Pumping Capacity', bat: 'Very High (3,500 GPH)', water: 'Moderate (1,500 GPH)' },
                    { feat: 'Installation', bat: 'DIY Friendly', water: 'Professional Plumbing' }
                  ].map((row, i) => (
                    <tr key={i} className='hover:bg-slate-50 transition-colors'>
                      <td className='p-6 text-slate-900 font-bold'>{row.feat}</td>
                      <td className='p-6 text-slate-600'>{row.bat}</td>
                      <td className='p-6 text-slate-600'>{row.water}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className='bg-slate-900 rounded-[3rem] p-12 mb-20 relative overflow-hidden text-white not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 max-w-2xl'>
              <h2 className='text-3xl font-black mb-6 uppercase tracking-tight'>The Infinite Fail-Safe: Water-Powered</h2>
              <p className='text-slate-300 text-lg leading-relaxed mb-8'>
                While battery systems rely on stored energy, water-powered pumps rely on physics. They use the energy of your home's pressurized municipal water supply to "venturi" groundwater out.
              </p>
              <div className='flex items-center gap-4 p-6 bg-white/10 rounded-2xl border border-white/10'>
                <div className='text-2xl'>💡</div>
                <div className='text-sm font-medium text-slate-200'>
                  <span className='text-indigo-400 font-black block mb-1 uppercase tracking-widest'>Unlimited Runtime</span>
                  As long as city water flows, your pump runs. Perfect for long blackouts or extended travel.
                </div>
              </div>
            </div>
          </section>

          <div className='grid md:grid-cols-2 gap-8 mb-20 not-prose'>
            <div className='bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200'>
              <h3 className='text-xl font-black text-slate-900 mb-6 uppercase tracking-widest'>Go Battery if:</h3>
              <ul className='space-y-4'>
                {['You are on a well', 'You need max volume (GPH)', 'You want a DIY project', 'You love smart alerts'].map((item, i) => (
                  <li key={i} className='flex items-center gap-3 text-slate-600 font-medium'>
                    <span className='text-indigo-500 font-bold'>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200'>
              <h3 className='text-xl font-black text-slate-900 mb-6 uppercase tracking-widest'>Go Water if:</h3>
              <ul className='space-y-4'>
                {['You have city water', 'You travel for weeks', 'You want zero maintenance', 'Reliability is priority #1'].map((item, i) => (
                  <li key={i} className='flex items-center gap-3 text-slate-600 font-medium'>
                    <span className='text-indigo-500 font-bold'>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-4xl font-black mb-6'>Protect Your Basement</h2>
              <p className='text-indigo-100 text-xl mb-12 font-light'>
                Ready to install a backup system? Get free quotes from sump pump installation experts in your area.
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
