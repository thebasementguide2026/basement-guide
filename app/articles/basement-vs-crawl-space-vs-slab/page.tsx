import Link from 'next/link'
import Image from 'next/image'
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
                <div className='w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl'>BG</div>
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
      <section className='py-24 bg-slate-50/50'>
        <div className='container-custom'>
          <div className='flex flex-col lg:flex-row gap-16'>
            <div className='lg:w-[68%]'>
              <div className='prose prose-slate max-w-none 
                prose-headings:font-black prose-headings:tracking-tight 
                prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-slate-900
                prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-600
                prose-strong:text-slate-900 prose-strong:font-bold'>
                
                <p className='text-xl text-slate-700 leading-relaxed mb-12 font-medium italic border-l-4 border-indigo-500 pl-8'>
                  "Your home's foundation determines more than just how it sits on the ground. It influences your energy bills, your risk of flood damage, your storage capacity, and even your health."
                </p>

                <h2 id='slab'>01. Concrete Slab Foundations</h2>
                <p>
                  A slab-on-grade foundation is a thick layer of concrete poured directly onto the ground. It's the most common foundation for new construction in the Sunbelt due to its efficiency and cost-effectiveness.
                </p>
                
                <div className='my-12 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center'>
                  <div className='flex-1'>
                    <h4 className='text-indigo-600 font-black text-sm uppercase tracking-widest mb-2'>Best For:</h4>
                    <p className='text-slate-900 text-lg m-0 leading-snug font-semibold'>Warm climates, high water tables, and budgets prioritizing construction speed.</p>
                  </div>
                  <div className='h-12 w-px bg-slate-200 hidden md:block' />
                  <div className='flex-1'>
                    <h4 className='text-rose-600 font-black text-sm uppercase tracking-widest mb-2'>Major Risk:</h4>
                    <p className='text-slate-900 text-lg m-0 leading-snug font-semibold'>Plumbing leaks require jackhammering the entire floor.</p>
                  </div>
                </div>

                <h3>The Scenario: The Efficiency Build</h3>
                <p>
                  If you are building in Florida or Texas, a slab is likely your best bet. Because there is no space underneath the home, there's no risk of mold or radon buildup from a crawl space.
                </p>

                <h2 id='crawl'>02. Crawl Space Foundations</h2>
                <p>
                  A crawl space is essentially a shallow basement. The home is elevated on short walls, creating a 2-4 foot gap between the ground and the floor joists.
                </p>

                <h3>The Scenario: Damp Soil & Termites</h3>
                <p>
                  Crawl spaces are popular in the Southeast and Northwest. They protect the home from minor flooding and provide easy access to plumbing and HVAC. <strong>The Critical Warning:</strong> If not properly encapsulated, crawl spaces are breeding grounds for mold and wood rot.
                </p>

                <h2 id='basement'>03. Full Basement Foundations</h2>
                <p>
                  A full basement involves digging deep (usually 8 feet or more) and pouring high walls. It offers the most utility but comes at the highest cost.
                </p>

                <div className='bg-indigo-900 rounded-3xl p-10 text-white my-12 shadow-2xl'>
                  <h3 className='text-white mt-0 mb-6'>The Growing Family Scenario</h3>
                  <p className='text-indigo-100 text-lg mb-0'>
                    In the Northeast and Midwest, the frost line is deep, meaning you have to dig anyway. For a family needing a gym, a home theater, or a playroom, the basement provides the cheapest cost-per-square-foot for living space in the long run.
                  </p>
                </div>

                <h2 className='text-slate-900 mt-20'>The Decision Matrix: Which is Right for You?</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                  <div className='bg-white p-8 rounded-3xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5'>
                    <div className='w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6'>
                      <span className='text-indigo-600 font-black'>A</span>
                    </div>
                    <h4 className='font-black text-slate-900 text-xl mb-4'>Choose a Slab If:</h4>
                    <ul className='list-none p-0 m-0 space-y-4'>
                      {['Lowest construction cost', 'Ground doesn\'t freeze', 'No stairs / mobility issues'].map((item) => (
                        <li key={item} className='flex items-center gap-3 text-slate-600'>
                          <span className='w-1.5 h-1.5 rounded-full bg-indigo-500' />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='bg-slate-900 p-8 rounded-3xl shadow-xl'>
                    <div className='w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6'>
                      <span className='text-white font-black'>B</span>
                    </div>
                    <h4 className='font-black text-white text-xl mb-4'>Choose a Basement If:</h4>
                    <ul className='list-none p-0 m-0 space-y-4'>
                      {['Need extra living space', 'Tornado-prone area', 'Sloped land (Walk-out)'].map((item) => (
                        <li key={item} className='flex items-center gap-3 text-slate-300'>
                          <span className='w-1.5 h-1.5 rounded-full bg-indigo-400' />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2 className='mt-24'>Frequently Asked Questions</h2>
                <div className='space-y-12 mt-12'>
                  <div className='border-b border-slate-200 pb-12'>
                    <h4 className='font-black text-slate-900 text-xl mb-4'>Is a basement or crawl space better for resale value?</h4>
                    <p className='m-0'>Generally, a finished basement adds significantly more value than a crawl space. In cold climates, a home without a basement may actually be harder to sell.</p>
                  </div>
                  <div className='pb-12'>
                    <h4 className='font-black text-slate-900 text-xl mb-4'>Which foundation is the most energy-efficient?</h4>
                    <p className='m-0'>Slabs are efficient because there is no air gap to heat or cool. However, a properly insulated basement can also be very efficient as the earth acts as natural insulation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:w-[32%]'>
              <div className='sticky top-12 space-y-8'>
                <div className='bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden'>
                  <div className='absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16' />
                  <h3 className='text-white font-black text-2xl mb-8 leading-tight'>Foundation <br />Resources</h3>
                  <div className='space-y-8'>
                    <Link href='/articles/types-of-foundation-cracks' className='group block'>
                      <span className='text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block'>Diagnosis Guide</span>
                      <span className='text-white font-bold text-lg group-hover:text-indigo-400 transition-colors block leading-snug'>Foundation Crack Analysis</span>
                    </Link>
                    <Link href='/articles/bowing-basement-walls' className='group block'>
                      <span className='text-rose-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block'>Structural Alert</span>
                      <span className='text-white font-bold text-lg group-hover:text-rose-400 transition-colors block leading-snug'>Bowing Wall Repair Guide</span>
                    </Link>
                  </div>
                </div>

                <div className='bg-indigo-50 rounded-[2.5rem] p-10 border border-indigo-100'>
                  <h4 className='font-black text-indigo-900 mb-4'>Free Estimate</h4>
                  <p className='text-indigo-900/60 text-sm mb-6 leading-relaxed'>Get connected with top-rated foundation experts in your area today.</p>
                  <button className='w-full bg-indigo-600 text-white font-black py-4 rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200'>
                    Get Quotes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
