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
          className='object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent' />
        <div className='absolute inset-0 flex items-center'>
          <div className='container-custom w-full'>
            <div className='max-w-4xl'>
              <div className='flex items-center gap-3 mb-8'>
                <span className='h-px w-12 bg-indigo-500' />
                <span className='text-indigo-400 text-sm font-black uppercase tracking-[0.3em]'>
                  Master Guide
                </span>
              </div>
              <h1 className='text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight'>
                Basement vs. <br className='hidden md:block' />
                Crawl Space vs. Slab
              </h1>
              <p className='text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light'>
                The foundation is the most consequential decision in home construction. We break down the cost, longevity, and lifestyle impact of each major type.
              </p>
              <div className='flex items-center gap-6 p-1 pr-6 bg-white/5 backdrop-blur-md rounded-full w-fit border border-white/10'>
                <div className='w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                  BG
                </div>
                <div>
                  <p className='text-white font-semibold'>The Basement Guide Staff</p>
                  <div className='flex items-center gap-3 text-sm text-slate-400'>
                    <span>Updated Feb 2026</span>
                    <span className='w-1 h-1 bg-slate-600 rounded-full' />
                    <span>25 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className='py-20 bg-white'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span-8'>
              <blockquote className='border-l-4 border-indigo-500 pl-6 py-2 mb-12'>
                <p className='text-xl text-slate-700 italic leading-relaxed font-light'>
                  "Your home's foundation determines more than just how it sits on the ground. It influences your energy bills, your risk of flood damage, your storage capacity, and even your health."
                </p>
              </blockquote>

              <h2 className='text-3xl font-bold text-slate-900 mt-12 mb-6'>
                <span className='text-indigo-500 font-black mr-3'>01.</span>
                Concrete Slab Foundations
              </h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                A slab-on-grade foundation is a thick layer of concrete poured directly onto the ground. It's the most common foundation for new construction in the Sunbelt due to its efficiency and cost-effectiveness.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
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
                <span className='text-indigo-500 font-black mr-3'>02.</span>
                Crawl Space Foundations
              </h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                A crawl space is essentially a shallow basement. The home is elevated on short walls, creating a 2–4 foot gap between the ground and the floor joists.
              </p>

              <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>
                <span className='text-indigo-500 font-black mr-3'>03.</span>
                Full Basement Foundations
              </h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                A full basement involves digging deep (usually 8 feet or more) and pouring high walls. It offers the most utility but comes at the highest cost.
              </p>

              <div className='border-t border-slate-100 pt-16 mt-8'>
                <h2 className='text-3xl font-bold text-slate-900 mb-8'>Frequently Asked Questions</h2>
                <div className='space-y-8'>
                  <div>
                    <h4 className='text-xl font-bold text-slate-900 mb-2'>Is a basement or crawl space better for resale value?</h4>
                    <p className='text-slate-600 leading-relaxed'>Generally, a finished basement adds significantly more value than a crawl space. In cold climates, a home without a basement may actually be harder to sell.</p>
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-slate-900 mb-2'>Which foundation is the most energy-efficient?</h4>
                    <p className='text-slate-600 leading-relaxed'>Slabs are efficient because there is no air gap to heat or cool. However, a properly insulated basement can also be very efficient as the earth acts as natural insulation.</p>
                  </div>
                </div>
              </div>

              <div className='bg-indigo-600 rounded-[2rem] p-12 text-white mt-20 relative overflow-hidden shadow-2xl not-prose'>
                <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl' />
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

            <div className='lg:col-span-4'>
              <div className='sticky top-8 space-y-8'>
                <div className='bg-slate-900 rounded-2xl p-8 text-white'>
                  <h3 className='text-xl font-bold mb-6'>Foundation Resources</h3>
                  <div className='space-y-4'>
                    <Link href='/articles/french-drain-cost' className='block p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors'>
                      <p className='text-indigo-400 text-xs uppercase tracking-wider font-bold mb-1'>Cost Guide</p>
                      <p className='text-white font-semibold'>French Drain Installation</p>
                    </Link>
                    <Link href='/articles/bowing-basement-walls' className='block p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors'>
                      <p className='text-rose-400 text-xs uppercase tracking-wider font-bold mb-1'>Structural Alert</p>
                      <p className='text-white font-semibold'>Bowing Wall Repair Guide</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
