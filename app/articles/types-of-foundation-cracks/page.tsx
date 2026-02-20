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
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-500'></div>
            <span className='text-amber-400 font-bold tracking-[0.3em] text-sm uppercase'>Diagnostic Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Foundation Crack<br />
            <span className='text-amber-400'>Manual 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Not all cracks are created equal. We break down which ones are cosmetic and which ones signal a structural emergency.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-orange-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>22 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-5xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline'>
          
          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-amber-500 pl-8'>
            Finding a crack in your foundation is a stressful moment. However, concrete naturally cracks as it cures and settles. The key is knowing which cracks require a simple DIY fix and which require an engineer.
          </p>

          <h2 className='text-3xl mb-8 uppercase tracking-tight'>Quick Diagnosis Table</h2>
          <div className='overflow-x-auto rounded-3xl border border-slate-200 shadow-sm not-prose mb-16'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-slate-50'>
                  <th className='p-6 font-black text-slate-900 uppercase text-xs tracking-widest'>Crack Type</th>
                  <th className='p-6 font-black text-amber-700 uppercase text-xs tracking-widest'>Direction</th>
                  <th className='p-6 font-black text-amber-900 uppercase text-xs tracking-widest'>Risk Level</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Hairline / Shrinkage</td>
                  <td className='p-6 text-slate-600'>Vertical/Random</td>
                  <td className='p-6 text-emerald-600 font-black'>Low (Cosmetic)</td>
                </tr>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Settlement</td>
                  <td className='p-6 text-slate-600'>Vertical</td>
                  <td className='p-6 text-amber-600 font-black'>Moderate (Monitor)</td>
                </tr>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Structural / Bowing</td>
                  <td className='p-6 text-slate-600'>Horizontal</td>
                  <td className='p-6 text-rose-600 font-black'>High (Action Required)</td>
                </tr>
                <tr>
                  <td className='p-6 font-bold text-slate-900 bg-slate-50/50'>Stair-Step</td>
                  <td className='p-6 text-slate-600'>Diagonal (in block)</td>
                  <td className='p-6 text-rose-600 font-black'>High (Settling)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='text-4xl mb-6'>1. Vertical Cracks (The Good News)</h2>
          <p>
            Vertical cracks are the most common type found in residential basements. They typically occur within the first few years of a home being built as the foundation \"cures\" and shrinks.
          </p>

          <h2 className='text-4xl mb-6'>2. Horizontal Cracks (The Red Flag)</h2>
          <p>
            <strong>If you see a horizontal crack, do not wait.</strong> These cracks are a sign that the wall is failing under the pressure of the earth outside. They indicate that the wall is bowing inward and can lead to a complete collapse.
          </p>

          <h2 className='text-4xl mb-6'>3. Stair-Step Cracks (Brick & Block)</h2>
          <p>
            Common in concrete block foundations, these cracks follow the mortar joints in a \"stair-step\" pattern. They indicate that one corner or section of the foundation is sinking faster than the rest.
          </p>

          <div className='bg-slate-900 rounded-3xl p-12 my-12 font-mono text-sm text-amber-300 leading-none overflow-x-auto not-prose shadow-2xl'>
            <pre>{`| [BLOCK] | [BLOCK] |
|___________|___________|
| |____| |
|______| |______|
| [BLOCK] | [BLOCK] |
| |____| |
|___________| |______|`}</pre>
          </div>

          <h2 className='text-4xl mb-6'>4. Diagonal Cracks</h2>
          <p>
            Diagonal cracks often start near the corners of windows or doors. They are usually caused by \"differential settlement\"—where one part of the house is moving while the other stays still.
          </p>

          <div className='bg-amber-50 rounded-3xl p-12 my-16 border border-amber-100 not-prose'>
            <h2 className='text-3xl font-black text-amber-900 mb-6'>When to Worry: The 1/4 Inch Rule</h2>
            <p className='text-lg text-slate-700 mb-8 font-medium'>
              While any crack should be monitored, those that meet these criteria need immediate professional attention:
            </p>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-8 rounded-2xl shadow-sm border border-amber-200'>
                <ul className='space-y-4 text-slate-600 font-medium'>
                  <li className='flex gap-2'><span className='text-amber-500'>✔</span> Wider than 1/4 inch</li>
                  <li className='flex gap-2'><span className='text-amber-500'>✔</span> Visibly getting wider</li>
                </ul>
              </div>
              <div className='bg-white p-8 rounded-2xl shadow-sm border border-amber-200'>
                <ul className='space-y-4 text-slate-600 font-medium'>
                  <li className='flex gap-2'><span className='text-amber-500'>✔</span> Actively leaking water</li>
                  <li className='flex gap-2'><span className='text-amber-500'>✔</span> One side pushing in</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-slate-900 rounded-3xl p-12 text-white my-20 shadow-xl shadow-amber-900/20 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Professional Inspection Required?</h2>
              <p className='text-amber-100 text-lg mb-10'>
                Don't guess with your foundation. Get a expert assessment of your cracks today.
              </p>
              <Link href='/find-pros' className='bg-white text-amber-600 px-12 py-4 rounded-full font-black text-lg inline-block hover:bg-amber-50 transition-all hover:scale-105'>
                Find Foundation Specialists →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
