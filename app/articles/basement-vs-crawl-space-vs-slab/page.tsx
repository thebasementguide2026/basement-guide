import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement vs. Crawl Space vs. Slab: Which Foundation is Right for You? | The Basement Guide',
  description: 'A comprehensive comparison of basement, crawl space, and slab foundations. Costs, pros/cons, and how to choose based on your climate and budget.',
}

export default function FoundationComparisonArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/foundation-types.jpg'
          alt='Comparison of basement, crawl space, and slab foundations'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>Master Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Basement vs. <br />
            <span className='text-indigo-400'>Crawl Space vs. Slab</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            The foundation is the most consequential decision in home construction. We break down the cost, longevity, and lifestyle impact of each major type.
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
                  <span>25 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline'>
          
          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-indigo-500 pl-8'>
            "Your home's foundation determines more than just how it sits on the ground. It influences your energy bills, your risk of flood damage, your storage capacity, and even your health."
          </p>

          <h2 className='text-3xl font-bold text-slate-900 mt-12 mb-6'>
            01. Concrete Slab Foundations
          </h2>
          <p>
            A slab-on-grade foundation is a thick layer of concrete poured directly onto the ground. It's the most common foundation for new construction in the Sunbelt due to its efficiency and cost-effectiveness.
          </p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose'>
            <div className='bg-emerald-50 border border-emerald-100 rounded-2xl p-6'>
              <p className='text-emerald-700 font-bold text-sm uppercase tracking-wider mb-2'>Best For</p>
              <p className='text-slate-700'>Warm climates, high water tables, and budgets prioritizing construction speed.</p>
            </div>
            <div className='bg-rose-50 border border-rose-100 rounded-2xl p-6'>
              <p className='text-rose-700 font-bold text-sm uppercase tracking-wider mb-2'>Major Risk</p>
              <p className='text-slate-700'>Plumbing leaks require jackhammering the entire floor.</p>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>
            02. Crawl Space Foundations
          </h2>
          <p>
            A crawl space is essentially a shallow basement. The home is elevated on short walls, creating a 2–4 foot gap between the ground and the floor joists.
          </p>

          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>
            03. Full Basement Foundations
          </h2>
          <p>
            A full basement involves digging deep (usually 8 feet or more) and pouring high walls. It offers the most utility but comes at the highest cost.
          </p>

          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Frequently Asked Questions</h2>
            <div className='space-y-8 not-prose'>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Is a basement or crawl space better for resale value?</h4>
                <p className='text-slate-600 leading-relaxed'>Generally, a finished basement adds significantly more value than a crawl space. In cold climates, a home without a basement may actually be harder to sell.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Which foundation is the most energy-efficient?</h4>
                <p className='text-slate-600 leading-relaxed'>Slabs are efficient because there is no air gap to heat or cool. However, a properly insulated basement can also be very efficient as the earth acts as natural insulation.</p>
              </div>
            </div>
          </div>

          <div className='bg-slate-900 rounded-[2rem] p-12 text-white mt-20 relative overflow-hidden shadow-2xl not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get a Foundation Estimate</h2>
              <p className='text-indigo-100 text-lg mb-10'>
                Compare free estimates from foundation specialists in your area. No obligation.
              </p>
              <div className='bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl'>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
