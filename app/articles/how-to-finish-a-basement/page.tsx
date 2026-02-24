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
                    src='/finishing%20a%20basement%20guide.jpg'
          alt='Basement finishing construction'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-4'>
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
                <p className='text-white font-semibold text-sm'>The Basement Guide Staff</p>
                <p className='text-slate-400 text-xs'>Updated Feb 2026 &bull; 35 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16'>

        {/* Left: Article Body */}
        <article className='prose prose-slate max-w-none'>

          <p className='text-xl text-slate-600 leading-relaxed mb-10 font-medium border-l-4 border-teal-500 pl-6 italic'>
            In 2026, the definition of home has expanded. With the rise of permanent remote work and the multi-generational housing squeeze, the basement is no longer just a place for the furnace and holiday decorations. It is a high-value asset.
          </p>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Phase 1: Planning, Permitting, and the 2026 Legal Landscape</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>Before a single hammer is swung, you must navigate the regulatory environment. In 2026, building departments have digitized and tightened their requirements, specifically regarding energy efficiency and life safety.</p>

          <h3 className='text-2xl font-bold text-slate-800 mb-4'>The Habitable Space Threshold</h3>
          <p className='text-slate-600 leading-relaxed mb-4'>Under the 2026 International Residential Code (IRC), &quot;Habitable Space&quot; is a legal designation. If you intend to have a bedroom, office, or gym, you must meet these metrics:</p>
          <ul className='space-y-3 mb-8'>
            <li className='flex items-start gap-3'><span className='text-teal-500 font-bold mt-1'>&#10003;</span><span className='text-slate-600'><strong>Ceiling Height:</strong> A minimum of 7 feet (2134 mm). For existing homes, many local codes allow a grandfathered height of 6 feet 8 inches.</span></li>
            <li className='flex items-start gap-3'><span className='text-teal-500 font-bold mt-1'>&#10003;</span><span className='text-slate-600'><strong>Obstructions:</strong> Beams, pipes, and ducts can drop to 6 feet 4 inches, provided they are not in the direct path of the emergency exit.</span></li>
            <li className='flex items-start gap-3'><span className='text-teal-500 font-bold mt-1'>&#10003;</span><span className='text-slate-600'><strong>Natural Light:</strong> Many 2026 jurisdictions require natural light equal to 8% of the floor area for any room designated as a bedroom.</span></li>
          </ul>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Phase 2: Moisture Science and the 48-Hour Audit</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>Water is the only thing that can truly kill a basement project. In 2026, we no longer just stop leaks&mdash;we manage the movement of molecules. Concrete is a sponge; it is constantly breathing water vapor from the soil into your home.</p>

          {/* Moisture Management Table */}
          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse bg-white shadow-sm rounded-xl overflow-hidden'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='px-6 py-4 text-left font-semibold'>Test Result</th>
                  <th className='px-6 py-4 text-left font-semibold'>Diagnosis</th>
                  <th className='px-6 py-4 text-left font-semibold'>Required Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 text-slate-700'>Condensation on Top</td>
                  <td className='px-6 py-4 text-slate-600'>High interior humidity</td>
                  <td className='px-6 py-4 text-slate-600'>Dehumidifier or better ventilation</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='px-6 py-4 text-slate-700'>Dampness Underneath</td>
                  <td className='px-6 py-4 text-slate-600'>Capillary seepage through slab</td>
                  <td className='px-6 py-4 text-slate-600'>Crystalline sealer or exterior solution</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Phase 5: Life Safety and Egress</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>If a fire starts at the top of the basement stairs, how do people get out? If you do not follow egress codes, your basement is legally a storage crawlspace and cannot be sold as a bedroom.</p>

          {/* Video Integration */}
          <div className='my-10 rounded-2xl overflow-hidden shadow-lg'>
            <div className='bg-slate-800 px-6 py-4'>
              <h3 className='text-white font-bold text-lg'>DIY Basement Renovation Guide</h3>
              <p className='text-slate-400 text-sm mt-1'>Visual walkthrough of insulation and subfloor systems for successful basement finishing.</p>
            </div>
            <div className='relative w-full' style={{paddingBottom: '56.25%'}}>
              <iframe
                className='absolute top-0 left-0 w-full h-full'
                src='https://www.youtube.com/embed/4WlZaw1b9bI'
                title='DIY Basement Renovation Guide'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Phase 7: Flooring and the Thermal Break</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>Your basement floor is the coldest surface in your house. 2026 flooring is about comfort and breathability. Pro tip: Never lay carpet or vinyl directly on concrete.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-teal-50 border border-teal-200 rounded-xl p-6'>
              <h4 className='font-bold text-teal-800 mb-2'>Dimpled Underlayment</h4>
              <p className='text-teal-700 text-sm'>Creates an air gap that allows the slab to breathe and adds significant foot comfort/warmth.</p>
            </div>
            <div className='bg-teal-50 border border-teal-200 rounded-xl p-6'>
              <h4 className='font-bold text-teal-800 mb-2'>Luxury Vinyl Plank (LVP)</h4>
              <p className='text-teal-700 text-sm'>The undisputed king. 100% waterproof. If you flood, you can dry it and click it back together.</p>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-slate-800 mb-6 mt-12'>Conclusion: Turning Potential into Equity</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>Finishing a basement is one of the most significant investments a homeowner can make in 2026. Beyond lifestyle benefits, a well-executed project offers an average <strong>ROI of 70% to 75%</strong> in increased property value. By prioritizing moisture control and legal codes, you ensure your new square footage remains a healthy part of your home for decades.</p>

        </article>

        {/* Right: Sidebar */}
        <aside className='space-y-8'>

          <LeadForm />

          <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
            <h3 className='font-bold text-slate-800 text-lg mb-4'>Master Glossary</h3>
            <dl className='space-y-4'>
              <div>
                <dt className='font-semibold text-slate-700'>Egress</dt>
                <dd className='text-slate-500 text-sm mt-1'>A legal path of exit (window or door) required for emergency escape in bedrooms.</dd>
              </div>
              <div>
                <dt className='font-semibold text-slate-700'>Dew Point</dt>
                <dd className='text-slate-500 text-sm mt-1'>The temperature at which water vapor turns into liquid (condensation).</dd>
              </div>
              <div>
                <dt className='font-semibold text-slate-700'>Hydrostatic Pressure</dt>
                <dd className='text-slate-500 text-sm mt-1'>The pressure exerted by groundwater against your foundation walls.</dd>
              </div>
            </dl>
          </div>

        </aside>

                  {/* Related Guides */}
          <div className='mb-20'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <Link href='/articles/basement-adu-rental-suite' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Basement ADU & Rental Suite Guide</h3>
                <p className='text-slate-600 text-sm'>Convert your finished basement into a legal, profitable rental apartment.</p>
              </Link>
              <Link href='/articles/basement-finishing-cost' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Basement Finishing Cost Guide</h3>
                <p className='text-slate-600 text-sm'>Full breakdown of costs to finish your basement from start to move-in.</p>
              </Link>
            </div>
          </div>

      </div>

    </div>
  )
}
