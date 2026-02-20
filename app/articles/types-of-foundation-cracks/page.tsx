import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Types of Foundation Cracks: What Each One Means | The Basement Guide',
  description: 'An expert diagnostic guide to foundation cracks. Learn the difference between vertical, horizontal, diagonal, and stair-step cracks.',
}

export default function FoundationCracksArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[60vh] min-h-[400px] bg-slate-900'>
        <Image
          src='/foundation-crack-closeup.jpg'
          alt='Close up of a structural foundation crack'
          fill
          className='object-cover opacity-60'
          priority
        />
        <div className='absolute inset-0 flex items-center'>
          <div className='container-custom'>
            <div className='max-w-3xl'>
              <span className='bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block'>
                Diagnostic Guide
              </span>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                Types of Foundation Cracks: What Each One Means
              </h1>
              <p className='text-xl text-slate-200 mb-8 leading-relaxed'>
                Not all cracks are created equal. Use this 2026 diagnostic guide to determine if your foundation crack is a minor cosmetic issue or a structural red flag.
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold'>BG</div>
                <div className='text-white'>
                  <p className='font-bold'>The Basement Guide Staff</p>
                  <p className='text-slate-400 text-sm'>Updated February 2026 • 20 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-24'>
        <div className='container-custom flex flex-col lg:flex-row gap-12'>
          {/* Main Content */}
          <div className='lg:w-2/3'>
            <div className='prose prose-slate prose-lg max-w-none'>
              <p className='lead text-xl text-gray-600 mb-10'>
                When you see a crack in your basement wall, your first thought is usually, "Is my house falling down?" Most of the time, the answer is no—but some cracks are legitimate structural emergencies. Understanding the <strong>direction</strong> and <strong>width</strong> of the crack is the first step in diagnosis.
              </p>

              <h2 className='text-3xl font-bold text-slate-800 mt-12 mb-6'>1. Vertical Cracks: Usually Non-Structural</h2>
              <p>
                Vertical cracks are very common in poured concrete foundations. They typically run straight up and down (or slightly diagonal) and are often the result of the concrete shrinking as it cures.
              </p>
              
              <div className='bg-green-50 p-8 rounded-2xl mb-10 border-l-4 border-green-500'>
                <h4 className='font-bold text-green-800 mb-2'>Diagnosis</h4>
                <p className='text-green-900 mb-0'>
                  If the crack is thinner than 1/8 inch and doesn't leak, it's likely just a settlement crack. Monitor it for changes.
                </p>
              </div>

              <h2 className='text-3xl font-bold text-slate-800 mt-12 mb-6'>2. Horizontal Cracks: The Red Flag</h2>
              <p>
                Horizontal cracks are almost always a sign of serious structural pressure. They are caused by hydrostatic pressure (soil weight and water pressure) pushing against the outside of your foundation walls.
              </p>

              <h2 className='text-3xl font-bold text-slate-800 mt-12 mb-6'>3. Stair-Step Cracks: Differential Settlement</h2>
              <p>
                Found in block or brick foundations, these cracks follow the mortar joints in a "stair-step" pattern. They indicate that one corner of the foundation is sinking faster than the rest.
              </p>

              <div className='my-12 overflow-hidden rounded-xl border border-slate-200 shadow-sm'>
                <table className='min-w-full divide-y divide-slate-200'>
                  <thead className='bg-slate-50'>
                    <tr>
                      <th className='px-6 py-4 text-left text-sm font-bold text-slate-900'>Crack Type</th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-slate-900'>Likely Cause</th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-slate-900'>Severity</th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-slate-900'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-200 bg-white'>
                    <tr>
                      <td className='px-6 py-4 text-sm font-medium text-slate-900'>Vertical</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Concrete Shrinkage</td>
                      <td className='px-6 py-4 text-sm text-green-600 font-bold'>Low</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Seal with Epoxy</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 text-sm font-medium text-slate-900'>Horizontal</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Hydrostatic Pressure</td>
                      <td className='px-6 py-4 text-sm text-red-600 font-bold'>Critical</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Call Structural Engineer</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 text-sm font-medium text-slate-900'>Stair-Step</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Sinking Corner</td>
                      <td className='px-6 py-4 text-sm text-orange-600 font-bold'>High</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Piering/Underpinning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className='mt-12'>
                <Link href='/contact' className='bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block'>
                  Schedule a Foundation Inspection
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:w-1/3'>
            <div className='sticky top-8 space-y-8'>
              <div className='bg-slate-50 p-8 rounded-2xl border border-slate-100'>
                <h3 className='font-bold text-xl mb-4'>More Foundation Resources</h3>
                <div className='space-y-4'>
                  <Link href='/articles/bowing-basement-walls' className='block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                    <span className='text-indigo-600 text-xs font-bold uppercase tracking-wider'>Repair</span>
                    <span className='block font-bold text-slate-800'>Bowing Basement Walls Guide</span>
                  </Link>
                  <Link href='/articles/basement-vs-crawl-space-vs-slab' className='block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                    <span className='text-blue-600 text-xs font-bold uppercase tracking-wider'>Comparison</span>
                    <span className='block font-bold text-slate-800'>Basement vs. Crawl Space vs. Slab</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
