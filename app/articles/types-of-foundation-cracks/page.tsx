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
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/foundation-crack-closeup.jpg'
          alt='Close up of a structural foundation crack'
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
                  Diagnostic Guide
                </span>
              </div>
              <h1 className='text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight'>
                Types of Foundation <br className='hidden md:block' />
                Cracks: 2026 Manual
              </h1>
              <p className='text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light'>
                Not all cracks are created equal. We break down which ones are cosmetic and which ones signal a structural emergency.
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
                    <span>22 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-20 bg-white'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span-8'>
              <p className='text-xl text-slate-600 leading-relaxed mb-8 font-light'>
                Finding a crack in your foundation is a stressful moment for any homeowner. Your mind immediately jumps to expensive repairs and structural failure. However, concrete is a material that naturally cracks as it cures and settles. The key is knowing which cracks require a simple DIY fix and which require an engineer.
              </p>

              <div className='bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12'>
                <h3 className='text-2xl font-bold text-slate-900 mb-6'>Quick Diagnosis Table</h3>
                <div className='overflow-x-auto'>
                  <table className='w-full text-left'>
                    <thead>
                      <tr className='border-b border-slate-200'>
                        <th className='pb-4 font-bold text-slate-900'>Crack Type</th>
                        <th className='pb-4 font-bold text-slate-900'>Direction</th>
                        <th className='pb-4 font-bold text-slate-900'>Risk Level</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-100'>
                      <tr>
                        <td className='py-4 text-slate-600'>Hairline / Shrinkage</td>
                        <td className='py-4 text-slate-600'>Vertical/Random</td>
                        <td className='py-4 font-semibold text-emerald-600'>Low (Cosmetic)</td>
                      </tr>
                      <tr>
                        <td className='py-4 text-slate-600'>Settlement</td>
                        <td className='py-4 text-slate-600'>Vertical</td>
                        <td className='py-4 font-semibold text-amber-600'>Moderate (Monitor)</td>
                      </tr>
                      <tr>
                        <td className='py-4 text-slate-600'>Structural / Bowing</td>
                        <td className='py-4 text-slate-600'>Horizontal</td>
                        <td className='py-4 font-semibold text-rose-600'>High (Immediate Action)</td>
                      </tr>
                      <tr>
                        <td className='py-4 text-slate-600'>Stair-Step</td>
                        <td className='py-4 text-slate-600'>Diagonal (in block)</td>
                        <td className='py-4 font-semibold text-rose-600'>High (Settling/Pressure)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>1. Vertical Cracks (The Good News)</h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Vertical cracks are the most common type found in residential basements. They typically occur within the first few years of a home being built as the foundation "cures" and shrinks.
              </p>
              <h4 className='text-xl font-bold text-slate-900 mb-4'>Why they happen:</h4>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Minor settling of the footing or shrinkage of the concrete as it dries. If they are less than 1/8 inch wide, they are rarely a structural concern.
              </p>

              <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>2. Horizontal Cracks (The Red Flag)</h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                <strong>If you see a horizontal crack, do not wait.</strong> These cracks are a sign that the wall is failing under the pressure of the earth outside.
              </p>
              <h4 className='text-xl font-bold text-slate-900 mb-4'>The Danger:</h4>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Horizontal cracks indicate that the wall is bowing inward. If left unaddressed, the wall can snap, leading to a complete collapse of the foundation. This is usually caused by <strong>hydrostatic pressure</strong> or expansive clay soil.
              </p>

              <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>3. Stair-Step Cracks (Brick & Block Only)</h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Common in concrete block foundations, these cracks follow the mortar joints in a "stair-step" pattern. They indicate that one corner or section of the foundation is sinking faster than the rest.
              </p>

              <div className='bg-slate-900 rounded-2xl p-8 my-12 font-mono text-sm text-indigo-300 leading-none overflow-x-auto'>
                <pre>{`| [BLOCK] | [BLOCK] |
|___________|___________|
|      |____|      |
|______|    |______|
| [BLOCK] | [BLOCK] |
|      |____|      |
|___________|      |______|`}</pre>
              </div>

              <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>4. Diagonal Cracks</h2>
              <p className='text-lg text-slate-600 leading-relaxed mb-6'>
                Diagonal cracks often start near the corners of windows or doors. They are usually caused by "differential settlement"—where one part of the house is moving while the other stays still.
              </p>

              <div className='bg-indigo-600 rounded-3xl p-8 md:p-12 text-white mt-20'>
                <h2 className='text-3xl font-bold mb-4'>When to Worry: The 1/4 Inch Rule</h2>
                <p className='text-indigo-100 text-lg mb-8'>
                  While any crack should be monitored, those that meet the following criteria need immediate professional attention:
                </p>
                <ul className='space-y-4 text-indigo-50'>
                  <li className='flex items-center gap-3'><span>•</span> <strong>Width:</strong> Wider than 1/4 inch.</li>
                  <li className='flex items-center gap-3'><span>•</span> <strong>Active:</strong> The crack is visibly getting wider or longer.</li>
                  <li className='flex items-center gap-3'><span>•</span> <strong>Water:</strong> The crack is actively leaking water.</li>
                  <li className='flex items-center gap-3'><span>•</span> <strong>Offset:</strong> One side is pushing further in than the other.</li>
                </ul>
                <Link href='/find-pros' className='bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg inline-block hover:bg-indigo-50 transition-colors mt-8'>
                  Find Foundation Specialists →
                </Link>
              </div>
            </div>

            <div className='lg:col-span-4'>
              <div className='sticky top-8 space-y-8'>
                <div className='bg-slate-900 rounded-2xl p-8 text-white'>
                  <h3 className='text-xl font-bold mb-6'>The "Is it Bad?" Checklist</h3>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-6 h-6 border-2 border-indigo-500 rounded flex items-center justify-center text-indigo-500 font-bold'></div>
                      <span className='text-slate-300'>Is it horizontal?</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-6 h-6 border-2 border-indigo-500 rounded flex items-center justify-center text-indigo-500 font-bold'></div>
                      <span className='text-slate-300'>Can you fit a nickel in it?</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-6 h-6 border-2 border-indigo-500 rounded flex items-center justify-center text-indigo-500 font-bold'></div>
                      <span className='text-slate-300'>Is water coming through?</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-6 h-6 border-2 border-indigo-500 rounded flex items-center justify-center text-indigo-500 font-bold'></div>
                      <span className='text-slate-300'>Is the wall bowing inward?</span>
                    </div>
                  </div>
                  <p className='text-xs text-slate-500 mt-6 italic'>If you checked any of these, call a professional immediately.</p>
                </div>

                <div className='bg-indigo-900 rounded-2xl p-8 text-white'>
                  <h3 className='font-bold text-white mb-6'>Estimated Repair Costs</h3>
                  <ul className='space-y-6 text-sm'>
                    <li className='flex flex-col gap-1 border-b border-white/10 pb-4'>
                      <span className='text-slate-400 uppercase text-xs font-bold tracking-wider'>Epoxy Injection</span>
                      <span className='font-bold text-xl text-blue-400'>$300 – $800</span>
                    </li>
                    <li className='flex flex-col gap-1 border-b border-white/10 pb-4'>
                      <span className='text-slate-400 uppercase text-xs font-bold tracking-wider'>Wall Anchors</span>
                      <span className='font-bold text-xl text-blue-400'>$5k – $15k</span>
                    </li>
                    <li className='flex flex-col gap-1'>
                      <span className='text-slate-400 uppercase text-xs font-bold tracking-wider'>Foundation Piering</span>
                      <span className='font-bold text-xl text-blue-400'>$10k – $30k+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
