import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bowing Basement Walls: Causes, Repair Methods & Cost | The Basement Guide',
  description: 'A comprehensive 2026 guide to fixing bowing basement walls. Comparing carbon fiber straps, wall anchors, and piering for structural stability.',
}

export default function BowingWallsArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[60vh] min-h-[400px] bg-slate-900'>
        <Image
          src='/bowed%20walled.jpg'
          alt='Bowing basement wall with structural cracks'
          fill
          className='object-cover opacity-60'
          priority
        />
        <div className='absolute inset-0 flex items-center'>
          <div className='container-custom'>
            <div className='max-w-3xl'>
              <span className='bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block'>
                Pillar Guide: Structural
              </span>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                Bowing Basement Walls: Causes, Repair Methods & Cost
              </h1>
              <p className='text-xl text-slate-200 mb-8 leading-relaxed'>
                A bowing wall is a structural emergency in slow motion. Learn how to diagnose the cause and choose the right repair method before the damage becomes irreversible.
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold'>BG</div>
                <div className='text-white'>
                  <p className='font-bold'>The Basement Guide Staff</p>
                  <p className='text-slate-400 text-sm'>Updated February 2026 • 18 min read</p>
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
                If your basement walls are leaning inward, even by as little as an inch, you are witnessing the power of <strong>hydrostatic pressure</strong>. Left unchecked, a bowing wall can eventually lead to total foundation failure, costing upwards of $50,000 to replace.
              </p>

              <h2 className='text-3xl font-bold text-slate-800 mt-12 mb-6'>What Causes Basement Walls to Bow?</h2>
              <p>
                The primary culprit is expansive clay soil. When it rains, clay soil absorbs water like a sponge and expands, exerting thousands of pounds of pressure against your foundation walls.
              </p>
              
              <div className='bg-indigo-50 p-8 rounded-2xl mb-10 border-l-4 border-indigo-500'>
                <h4 className='font-bold text-indigo-800 mb-2'>The 2-Inch Rule</h4>
                <p className='text-indigo-900 mb-0'>
                  Structural engineers generally agree: if a wall is bowing less than 2 inches, carbon fiber straps are the best fix. More than 2 inches often requires wall anchors or I-beams.
                </p>
              </div>

              <h2 className='text-3xl font-bold text-slate-800 mt-12 mb-6'>Top 3 Repair Methods Compared</h2>
              
              <h3>1. Carbon Fiber Straps (Best for Mild Bowing)</h3>
              <p>
                These are high-tensile strength straps epoxied directly to the wall. They are non-invasive and can be painted over, making them the most popular choice for finished basements.
              </p>

              <h3>2. Wall Anchors (Best for Severe Bowing)</h3>
              <p>
                Anchors involve digging into the yard and connecting a steel plate in the soil to a plate on the inside of the wall using a long steel rod. They can actually pull the wall back to its original position over time.
              </p>

              <div className='my-12 overflow-hidden rounded-xl border border-slate-200 shadow-sm'>
                <table className='min-w-full divide-y divide-slate-200'>
                  <thead className='bg-slate-50'>
                    <tr>
                      <th className='px-6 py-4 text-left text-sm font-bold text-slate-900'>Method</th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-slate-900'>Avg. Cost</th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-slate-900'>Invasiveness</th>
                      <th className='px-6 py-4 text-left text-sm font-bold text-slate-900'>Correction?</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-200 bg-white'>
                    <tr>
                      <td className='px-6 py-4 text-sm font-medium text-slate-900'>Carbon Fiber</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>$5,000 - $12,000</td>
                      <td className='px-6 py-4 text-sm text-green-600 font-bold'>Low</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Stabilization Only</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 text-sm font-medium text-slate-900'>Wall Anchors</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>$8,000 - $25,000</td>
                      <td className='px-6 py-4 text-sm text-orange-600 font-bold'>High</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Can Straighten</td>
                    </tr>
                    <tr>
                      <td className='px-6 py-4 text-sm font-medium text-slate-900'>I-Beams</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>$10,000 - $30,000</td>
                      <td className='px-6 py-4 text-sm text-orange-600 font-bold'>Moderate</td>
                      <td className='px-6 py-4 text-sm text-slate-600'>Permanent Bracing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='mt-12'>
                <Link href='/contact' className='bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block'>
                  Get a Structural Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:w-1/3'>
            <div className='sticky top-8 space-y-8'>
              <div className='bg-slate-50 p-8 rounded-2xl border border-slate-100'>
                <h3 className='font-bold text-xl mb-4'>Foundation Resources</h3>
                <div className='space-y-4'>
                  <Link href='/articles/types-of-foundation-cracks' className='block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                    <span className='text-teal-600 text-xs font-bold uppercase tracking-wider'>Diagnosis</span>
                    <span className='block font-bold text-slate-800'>Foundation Crack Diagnostic Guide</span>
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
