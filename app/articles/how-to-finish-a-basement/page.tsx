import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Finish a Basement: The Complete 2026 Guide',
  description: 'A comprehensive roadmap to transforming your basement into high-value habitable space. Permitting, moisture science, framing, and code compliance.',
}

export default function HowToFinishBasement() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/unfinished-basement-interior.jpg.jpg'
          alt='Basement finishing construction'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>The Definitive Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            How to Finish<br />
            <span className='text-teal-400'>A Basement 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Transform your lower level into a high-value asset. We provide the structural, legal, and aesthetic roadmap for a modern basement conversion.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div>
                <p className='text-white font-bold text-sm leading-none mb-1'>The Basement Guide Staff</p>
                <p className='text-slate-400 text-xs flex items-center'>
                  Updated Feb 2026 <span className='mx-2'>•</span> 35 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-6 py-20'>
        <div className='flex flex-col lg:flex-row gap-16'>

          {/* Left: Article Body */}
          <div className='lg:w-2/3'>
            <div className='prose prose-slate prose-lg max-w-none'>
              <p className='text-xl text-slate-600 leading-relaxed mb-12'>
                In 2026, the definition of home has expanded. With the rise of permanent remote work and the multi-generational housing squeeze, the basement is no longer just a place for the furnace and holiday decorations. It is a high-value asset.
              </p>

              <h2 className='text-3xl font-bold text-slate-800 mb-6'>Phase 1: Planning, Permitting, and the 2026 Legal Landscape</h2>
              <p className='mb-8'>Before a single hammer is swung, you must navigate the regulatory environment. In 2026, building departments have digitized and tightened their requirements, specifically regarding energy efficiency and life safety.</p>

              <div className='bg-slate-50 border-l-4 border-teal-500 p-8 rounded-r-2xl mb-12 shadow-sm'>
                <h3 className='text-xl font-bold text-slate-800 mb-4'>The Habitable Space Threshold</h3>
                <p className='text-slate-700 mb-6 italic'>Under the 2026 International Residential Code (IRC), \"Habitable Space\" is a legal designation. If you intend to have a bedroom, office, or gym, you must meet these metrics:</p>
                <ul className='space-y-4 text-slate-700'>
                  <li><strong>Ceiling Height:</strong> A minimum of 7 feet (2134 mm). For existing homes, many local codes allow a grandfathered height of 6 feet 8 inches.</li>
                  <li><strong>Obstructions:</strong> Beams, pipes, and ducts can drop to 6 feet 4 inches, provided they are not in the direct path of the emergency exit.</li>
                  <li><strong>Natural Light:</strong> Many 2026 jurisdictions require natural light equal to 8% of the floor area for any room designated as a bedroom.</li>
                </ul>
              </div>

              <h2 className='text-3xl font-bold text-slate-800 mb-6'>Phase 2: Moisture Science and the 48-Hour Audit</h2>
              <p className='mb-8'>Water is the only thing that can truly kill a basement project. In 2026, we no longer just stop leaks\u2014we manage the movement of molecules. Concrete is a sponge; it is constantly breathing water vapor from the soil into your home.</p>

              {/* Moisture Management Table */}
              <div className='mb-12 overflow-hidden rounded-2xl border border-slate-200'>
                <table className='w-full text-left border-collapse'>
                  <thead>
                    <tr className='bg-slate-800 text-white'>
                      <th className='p-4 font-semibold'>Test Result</th>
                      <th className='p-4 font-semibold'>Diagnosis</th>
                      <th className='p-4 font-semibold'>Required Action</th>
                    </tr>
                  </thead>
                  <tbody className='text-slate-600'>
                    <tr className='border-b border-slate-100'>
                      <td className='p-4 font-bold text-slate-800'>Condensation on Top</td>
                      <td className='p-4'>High interior humidity</td>
                      <td className='p-4 italic'>Dehumidifier or better ventilation</td>
                    </tr>
                    <tr>
                      <td className='p-4 font-bold text-slate-800'>Dampness Underneath</td>
                      <td className='p-4'>Capillary seepage through slab</td>
                      <td className='p-4 italic'>Crystalline sealer or exterior solution</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-3xl font-bold text-slate-800 mb-6'>Phase 5: Life Safety and Egress</h2>
              <p className='mb-8'>If a fire starts at the top of the basement stairs, how do people get out? If you do not follow egress codes, your basement is legally a storage crawlspace and cannot be sold as a bedroom.</p>

              {/* Video Integration */}
              <div className='my-12'>
                <div className='relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100'>
                  <iframe
                    className='absolute inset-0 w-full h-full'
                    src='https://www.youtube.com/embed/nU7_XN_lB9w'
                    title='DIY Basement Renovation Guide'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
                <p className='text-center text-sm text-slate-400 mt-4 italic'>
                  Visual walkthrough of insulation and subfloor systems for successful basement finishing.
                </p>
              </div>

              <h2 className='text-3xl font-bold text-slate-800 mb-6'>Phase 7: Flooring and the Thermal Break</h2>
              <p className='mb-8'>Your basement floor is the coldest surface in your house. 2026 flooring is about comfort and breathability. Pro tip: Never lay carpet or vinyl directly on concrete.</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
                <div className='bg-teal-50 p-8 rounded-3xl'>
                  <h4 className='font-bold text-teal-800 mb-2'>Dimpled Underlayment</h4>
                  <p className='text-teal-700 text-sm'>Creates an air gap that allows the slab to breathe and adds significant foot comfort/warmth.</p>
                </div>
                <div className='bg-indigo-50 p-8 rounded-3xl'>
                  <h4 className='font-bold text-indigo-800 mb-2'>Luxury Vinyl Plank (LVP)</h4>
                  <p className='text-indigo-700 text-sm'>The undisputed king. 100% waterproof. If you flood, you can dry it and click it back together.</p>
                </div>
              </div>

              <h2 className='text-3xl font-bold text-slate-800 mb-6'>Conclusion: Turning Potential into Equity</h2>
              <p className='mb-12 text-lg text-slate-600'>
                Finishing a basement is one of the most significant investments a homeowner can make in 2026. Beyond lifestyle benefits, a well-executed project offers an average **ROI of 70% to 75%** in increased property value. By prioritizing moisture control and legal codes, you ensure your new square footage remains a healthy part of your home for decades.
              </p>
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className='lg:w-1/3'>
            <div className='sticky top-24 space-y-8'>
              <LeadForm />

              <div className='bg-slate-900 rounded-3xl p-8 text-white shadow-2xl overflow-hidden relative'>
                <div className='absolute -top-10 -right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl'></div>
                <h3 className='text-xl font-bold mb-6 relative z-10'>Master Glossary</h3>
                <dl className='space-y-6 relative z-10'>
                  <div>
                    <dt className='text-teal-400 font-bold text-sm uppercase tracking-wider mb-1'>Egress</dt>
                    <dd className='text-slate-400 text-sm'>A legal path of exit (window or door) required for emergency escape in bedrooms.</dd>
                  </div>
                  <div>
                    <dt className='text-teal-400 font-bold text-sm uppercase tracking-wider mb-1'>Dew Point</dt>
                    <dd className='text-slate-400 text-sm'>The temperature at which water vapor turns into liquid (condensation).</dd>
                  </div>
                  <div>
                    <dt className='text-teal-400 font-bold text-sm uppercase tracking-wider mb-1'>Hydrostatic Pressure</dt>
                    <dd className='text-slate-400 text-sm'>The pressure exerted by groundwater against your foundation walls.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  )
}
