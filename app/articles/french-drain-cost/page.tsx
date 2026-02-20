import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'French Drain Installation Cost 2026: Interior & Exterior Pricing',
  description: 'How much does a French drain cost in 2026? Average pricing for interior basement drains ($4k-$12k) and exterior yard drains ($10-$35 per linear foot).',
}

// JSON-LD Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a French drain cost to install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average cost for a French drain installation in 2026 is $5,000. Exterior yard drains typically range from $2,800 to $6,500 ($10–$35 per linear foot), while interior basement systems cost between $4,000 and $12,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an interior French drain better than exterior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interior French drains are more effective for managing hydrostatic pressure and rising water tables in existing homes. Exterior drains are better for preventing water from reaching the foundation but require significant excavation.',
      },
    },
  ],
}

export default function FrenchDrainCostPage() {
  return (
    <div className='bg-white min-h-screen'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/french-drain-trench.jpg'
          alt='French drain installation for cost guide'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-violet-500'></div>
            <span className='text-violet-400 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            French Drain<br />
            <span className='text-violet-400'>Cost Guide 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Protect your foundation and yard. Real price data from $10 to $85 per linear foot, with full breakdowns by installation type.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-purple-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated Feb 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>12 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-24'>
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline'>
          {/* Quick Answer Box */}
          <div className='bg-violet-50 border-l-4 border-violet-600 rounded-r-3xl p-8 mb-16 not-prose shadow-sm'>
            <p className='text-xs font-bold text-violet-700 uppercase tracking-widest mb-3'>Quick Answer</p>
            <p className='text-slate-900 text-2xl font-bold mb-4'>
              A French drain costs <span className='text-violet-600'>$5,000</span> on average in 2026.
            </p>
            <p className='text-slate-600 leading-relaxed font-medium'>
              Expect to pay <strong>$10–$35 per linear foot</strong> for exterior yard drains and <strong>$40–$85 per linear foot</strong> for interior basement systems.
            </p>
          </div>

          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-violet-500 pl-8'>
            Whether you're dealing with a swampy backyard or a basement that seeps during every storm, a French drain is the gold standard for water management. But the cost varies wildly depending on one factor: <strong>Location</strong>.
          </p>

          <h2 className='text-4xl mb-6'>2026 French Drain Price Breakdown</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose'>
            <div className='bg-slate-50 rounded-3xl p-8 border border-slate-100'>
              <div className='text-slate-900 font-black text-xl mb-4'>Interior (Basement)</div>
              <div className='text-3xl font-black text-violet-600 mb-2'>$4,000 – $12,000+</div>
              <div className='text-slate-500 text-sm mb-6 font-medium'>Typical for 1,000 sq. ft. basement</div>
              <ul className='space-y-3 text-slate-600 font-medium'>
                <li className='flex items-center'><span className='text-violet-500 mr-2'>✔</span> Concrete jackhammering</li>
                <li className='flex items-center'><span className='text-violet-500 mr-2'>✔</span> Perforated pipe & gravel</li>
                <li className='flex items-center'><span className='text-violet-500 mr-2'>✔</span> New sump pump & pit</li>
              </ul>
            </div>
            <div className='bg-slate-900 rounded-3xl p-8 text-white'>
              <div className='text-white font-black text-xl mb-4'>Exterior (Yard/Foundation)</div>
              <div className='text-3xl font-black text-violet-400 mb-2'>$2,800 – $6,500</div>
              <div className='text-slate-400 text-sm mb-6 font-medium'>Typical 100-foot installation</div>
              <ul className='space-y-3 text-slate-300 font-medium'>
                <li className='flex items-center'><span className='text-violet-400 mr-2'>✔</span> Trench excavation</li>
                <li className='flex items-center'><span className='text-violet-400 mr-2'>✔</span> Geotextile filter fabric</li>
                <li className='flex items-center'><span className='text-violet-400 mr-2'>✔</span> Drainage rock & topsoil</li>
              </ul>
            </div>
          </div>

          <h2 className='text-4xl mb-6'>Key Cost Factors</h2>
          <p>
            What makes one 50-foot drain cost twice as much as another?
          </p>
          <ul>
            <li><strong>Trench Depth:</strong> Shallow yard drains (12-18") are cheap. Deep foundation drains (6-8 feet) require heavy machinery and shoring.</li>
            <li><strong>Obstructions:</strong> Driveways, sidewalks, and utility lines add significantly to labor time.</li>
            <li><strong>Concrete Disposal:</strong> For interior drains, hauling away old concrete slabs adds $500–$1,000 to the bill.</li>
          </ul>

          <div className='bg-violet-600 rounded-3xl p-12 text-white my-20 shadow-xl shadow-violet-200 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get a Professional Quote</h2>
              <p className='text-violet-100 text-lg mb-10'>
                Get an accurate estimate for your specific yard or basement layout from local drainage experts.
              </p>
              <div className='bg-white rounded-2xl p-8 text-slate-900 shadow-2xl'>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
