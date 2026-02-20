import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Types of Foundation Cracks: What Each One Means | The Basement Guide',
  description: 'An expert diagnostic guide to foundation cracks. Learn the difference between settling cracks and structural threats, and when to call a pro.',
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
              <span className='bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block'>
                Diagnostic Pillar Guide
              </span>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                Types of Foundation Cracks: The 2026 Homeowner's Manual
              </h1>
              <p className='text-xl text-slate-200 mb-8 leading-relaxed'>
                Not all cracks are created equal. Some are just cosmetic signs of aging, while others indicate your home is in immediate danger. Learn how to tell the difference.
              </p>
              <div className='flex items-center gap-4 text-white/80 text-sm'>
                <div className='flex items-center gap-2'>
                  <span className='w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold'>BG</span>
                  <span>By The Basement Guide Editorial Team</span>
                </div>
                <span>•</span>
                <span>Last Updated: February 19, 2026</span>
                <span>•</span>
                <span>22 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-20'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span-8'>
              <div className='prose prose-slate prose-lg max-w-none'>
                <p className='lead text-xl text-slate-600 mb-12'>
                  Finding a crack in your foundation is a stressful moment for any homeowner. Your mind immediately jumps to expensive repairs and structural failure. However, concrete is a material that naturally cracks as it cures and settles. The key is knowing which cracks require a simple DIY fix and which require an engineer.
                </p>

                <div className='bg-slate-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl'>
                  <h3 className='text-blue-900 font-bold mb-4 flex items-center gap-2'>
                    <svg className=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2\"></path></svg>
                    Quick Diagnosis Table
                  </h3>
                  <div className='overflow-x-auto'>
                    <table className='min-w-full text-sm'>
                      <thead>
                        <tr className='border-b border-slate-200 text-left'>
                          <th className='py-3 font-bold'>Crack Type</th>
                          <th className='py-3 font-bold'>Direction</th>
                          <th className='py-3 font-bold'>Risk Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border-b border-slate-100'>
                          <td className='py-3 font-medium'>Hairline / Shrinkage</td>
                          <td className='py-3'>Vertical/Random</td>
                          <td className='py-3'><span className='text-green-600 font-bold'>Low</span> (Cosmetic)</td>
                        </tr>
                        <tr className='border-b border-slate-100'>
                          <td className='py-3 font-medium'>Settlement</td>
                          <td className='py-3'>Vertical</td>
                          <td className='py-3'><span className='text-yellow-600 font-bold'>Moderate</span> (Monitor)</td>
                        </tr>
                        <tr className='border-b border-slate-100'>
                          <td className='py-3 font-medium'>Structural / Bowing</td>
                          <td className='py-3'>Horizontal</td>
                          <td className='py-3'><span className='text-red-600 font-bold'>High</span> (Immediate Action)</td>
                        </tr>
                        <tr className='border-b border-slate-100'>
                          <td className='py-3 font-medium'>Stair-Step</td>
                          <td className='py-3'>Diagonal (in block)</td>
                          <td className='py-3'><span className='text-orange-600 font-bold'>High</span> (Settling/Pressure)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h2>1. Vertical Cracks (The Good News)</h2>
                <p>
                  Vertical cracks are the most common type found in residential basements. They typically occur within the first few years of a home being built as the foundation \"cures\" and shrinks.
                </p>
                <div className='bg-green-50 p-6 rounded-lg border border-green-100 my-6'>
                  <h4 className='text-green-900 font-bold mt-0'>Why they happen:</h4>
                  <p className='text-green-800 mb-0'>Minor settling of the footing or shrinkage of the concrete as it dries. If they are less than 1/8 inch wide, they are rarely a structural concern.</p>
                </div>

                <h2>2. Horizontal Cracks (The Red Flag)</h2>
                <p>
                  <strong>If you see a horizontal crack, do not wait.</strong> These cracks are a sign that the wall is failing under the pressure of the earth outside.
                </p>
                <div className='bg-red-50 p-6 rounded-lg border border-red-100 my-6'>
                  <h4 className='text-red-900 font-bold mt-0'>The Danger:</h4>
                  <p className='text-red-800 mb-0'>Horizontal cracks indicate that the wall is bowing inward. If left unaddressed, the wall can snap, leading to a complete collapse of the foundation. This is usually caused by <strong>hydrostatic pressure</strong> or expansive clay soil.</p>
                </div>

                <h2>3. Stair-Step Cracks (Brick & Block Only)</h2>
                <p>
                  Common in concrete block foundations, these cracks follow the mortar joints in a \"stair-step\" pattern. They indicate that one corner or section of the foundation is sinking faster than the rest.
                </p>

                <div className='bg-slate-900 text-blue-400 p-6 rounded-lg font-mono text-sm my-8'>
                  <p className='text-white mb-2'>// DIAGRAM: STAIR-STEP CRACK</p>
                  <pre>
{\`|  [BLOCK]  |  [BLOCK]  |
|___________|___________|
|      |____|           |
|______|    |___________|
|  [BLOCK]  |  [BLOCK]  |
|           |____|      |
|___________|    |______|\`}
                  </pre>
                </div>

                <h2>4. Diagonal Cracks</h2>
                <p>
                  Diagonal cracks often start near the corners of windows or doors. They are usually caused by \"differential settlement\"—where one part of the house is moving while the other stays still.
                </p>

                <h2>When to Worry: The 1/4 Inch Rule</h2>
                <p>
                  While any crack should be monitored, those that meet the following criteria need immediate professional attention:
                </p>
                <ul>
                  <li><strong>Width:</strong> Wider than 1/4 inch.</li>
                  <li><strong>Active:</strong> The crack is visibly getting wider or longer over time.</li>
                  <li><strong>Water:</strong> The crack is actively leaking water during rain.</li>
                  <li><strong>Offset:</strong> One side of the crack is pushing further in than the other side (shearing).</li>
                </ul>

                <div className='bg-blue-900 text-white p-10 rounded-2xl mt-12'>
                  <h2 className='text-white mt-0'>Crack Assessment & Repair</h2>
                  <p className='text-blue-100 mb-8'>
                    Don't guess with your foundation. Small cracks can often be fixed with simple epoxy injection for a few hundred dollars, but waiting can turn that into a $20,000 structural repair.
                  </p>
                  <Link href='/get-free-quotes' className='bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-block'>
                    Find Foundation Specialists →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-4'>
              <div className='sticky top-8 space-y-8'>
                <div className='bg-slate-50 p-8 rounded-xl border border-slate-200'>
                  <h3 className='font-bold text-slate-900 mb-4'>The \"Is it Bad?\" Checklist</h3>
                  <ul className='space-y-4 text-sm text-slate-700'>
                    <li className='flex items-start gap-2'>
                      <span className='text-red-500 font-bold'>[ ]</span>
                      Is it horizontal?
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-red-500 font-bold'>[ ]</span>
                      Can you fit a nickel in it?
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-red-500 font-bold'>[ ]</span>
                      Is water coming through?
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-red-500 font-bold'>[ ]</span>
                      Is the wall bowing inward?
                    </li>
                  </ul>
                  <p className='text-xs text-slate-500 mt-4 italic'>If you checked any of these, call a professional immediately.</p>
                </div>
                
                <div className='bg-blue-50 p-8 rounded-xl border border-blue-100'>
                  <h3 className='font-bold text-blue-900 mb-4'>Estimated Repair Costs</h3>
                  <div className='space-y-3 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-slate-600'>Epoxy Injection</span>
                      <span className='font-bold'>$300-$800</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-slate-600'>Wall Anchors</span>
                      <span className='font-bold'>$5k-$15k</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-slate-600'>Foundation Piering</span>
                      <span className='font-bold'>$10k-$30k+</span>
                    </div>
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
