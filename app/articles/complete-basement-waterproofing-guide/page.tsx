import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Basement Waterproofing Guide 2026 | Stop Leaks for Good',
  description: 'Everything you need to know about basement waterproofing.',
}

export default function CompleteBasementWaterproofingGuide() {
  return (
    <div className='bg-white min-h-screen'>
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
            Everything you need to know about stopping basement leaks for good.
          </p>
        </div>
      </section>
      <main className='max-w-4xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none'>
          <h2>Protecting Your Home</h2>
          <p>A dry basement is essential for your home.</p>
          <LeadForm />
        </div>
      </main>
    </div>
  )
}
