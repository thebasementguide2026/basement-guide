import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Basement Floods Even With a Sump Pump (2026)',
  description: 'Discover the real reasons your basement still floods even with a working sump pump and what you can do to fix it for good.',
};

export default function WhyBasementFloods() {
  return (
    <div className='bg-white min-h-screen'>
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/sump-pump-installation.jpg.png'
          alt='Flooded basement with sump pump'
          fill
          className='object-cover opacity-50 scale-105 transition-transform duration-700'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-red-500' />
            <span className='text-red-400 font-bold tracking-[0.2em] text-sm uppercase'>Troubleshooting Guide</span>
          </div>
          <h1 className='text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter max-w-4xl mb-8'>
            Still <span className='text-red-500'>Flooding?</span><br />Here's Why
          </h1>
          <p className='text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed'>
            Having a sump pump does not guarantee a dry basement. Here are the most common reasons it is still failing you.
          </p>
          <div className='mt-12 flex items-center gap-6'>
            <div className='w-12 h-12 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-white font-bold'>BG</div>
            <div>
              <p className='text-white font-bold'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 • 10 min read</p>
            </div>
          </div>
        </div>
      </section>

      <main className='max-w-7xl mx-auto px-6 py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-24'>
          <div className='lg:col-span-8 space-y-16'>
            <p className='text-2xl leading-relaxed text-slate-600 border-l-4 border-red-500 pl-8 italic'>
              A sump pump is only one piece of the puzzle. If your basement keeps flooding, the pump may be working perfectly fine.
            </p>

            <section className='space-y-8'>
              <h2 className='text-4xl font-black text-slate-900 tracking-tight'>1. The Pump is Undersized</h2>
              <p className='text-lg text-slate-600 leading-relaxed'>
                One of the most common issues is a pump that cannot keep up with the water entering your basement. If you live in a high-water-table area, a standard 1/3 HP pump may not be enough. Upgrading to 1/2 HP or higher can make a significant difference.
              </p>
            </section>

            <section className='space-y-8'>
              <h2 className='text-4xl font-black text-slate-900 tracking-tight'>2. No Backup System</h2>
              <p className='text-lg text-slate-600 leading-relaxed'>
                Most basement flooding happens during storms, and storms cause power outages. Your primary pump is useless without electricity. A battery backup or water-powered backup system is essential.
              </p>
            </section>

            <section className='space-y-8'>
              <h2 className='text-4xl font-black text-slate-900 tracking-tight'>3. Clogged or Frozen Discharge Line</h2>
              <p className='text-lg text-slate-600 leading-relaxed'>
                Your pump could be running fine, but if the discharge line is clogged with debris or frozen in winter, the water has nowhere to go. Inspect it regularly, especially after cold snaps.
              </p>
            </section>

            <section className='space-y-8'>
              <h2 className='text-4xl font-black text-slate-900 tracking-tight'>4. Wrong Float Switch Setting</h2>
              <p className='text-lg text-slate-600 leading-relaxed'>
                If the float switch is set too high, water enters your living space before the pump activates. Adjust it so the pump turns on before water reaches the floor level.
              </p>
            </section>

            <section className='space-y-8'>
              <h2 className='text-4xl font-black text-slate-900 tracking-tight'>5. Water Entering Through Walls</h2>
              <p className='text-lg text-slate-600 leading-relaxed'>
                A sump pump only removes water collected in the pit from the floor. If water seeps through foundation wall cracks, the pump will never catch it. This is a waterproofing issue.
              </p>
              <div className='bg-red-50 border border-red-100 rounded-3xl p-8'>
                <p className='text-slate-700 font-semibold'>Water entering through walls requires interior or exterior waterproofing, not a better pump.</p>
              </div>
            </section>

            <section className='space-y-8'>
              <h2 className='text-4xl font-black text-slate-900 tracking-tight'>6. The Pump is Old or Failing</h2>
              <p className='text-lg text-slate-600 leading-relaxed'>
                Most sump pumps last 7 to 10 years. If yours is older, test it annually by pouring a bucket of water into the pit to trigger the float.
              </p>
            </section>
          </div>

          <div className='lg:col-span-4'>
            <div className='sticky top-12 bg-indigo-600 rounded-[3rem] p-12 text-white'>
              <h2 className='text-3xl font-black mb-6'>Get a Free Waterproofing Quote</h2>
              <p className='text-indigo-100 mb-8'>Not sure what is causing your flooding? Connect with a local expert for a free diagnosis.</p>
              <div className='bg-white rounded-3xl p-6'>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
