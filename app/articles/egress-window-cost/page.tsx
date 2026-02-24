import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Egress Window Installation Cost 2026 | The Basement Guide',
  description: 'How much does it cost to install an egress window in 2026? Permits, excavation, drainage, and labor costs explained.',
};

export default function EgressWindowCost() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/unfinished-basement-interior.jpg.jpg'
          alt='Basement egress window installation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-orange-500'></div>
            <span className='text-orange-400 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Egress Window <br />
            <span className='text-orange-400'>Cost Guide 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Thinking about adding a bedroom to your basement? You\'ll need an egress window. Here\'s the complete 2026 breakdown of costs, permits, and labor.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-red-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
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
        <div className='prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline'>
          <p className='text-2xl font-medium text-slate-800 leading-relaxed mb-12 border-l-4 border-orange-500 pl-8'>
            An egress window is a vital life-safety feature required for any basement room intended for sleeping. In 2026, homeowners can expect to pay between $2,500 and $5,500 per window.
          </p>

          <h2>2026 Egress Window Cost Overview</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-16 not-prose'>
            <div className='bg-slate-50 rounded-3xl p-8 text-center border border-slate-100'>
              <div className='text-3xl font-black text-slate-900 mb-2'>$3,850</div>
              <div className='text-slate-500 text-sm font-medium mb-3'>National Average</div>
              <div className='text-orange-600 font-bold'>Standard Install</div>
            </div>
            <div className='bg-orange-600 rounded-3xl p-8 text-center shadow-xl shadow-orange-100'>
              <div className='text-3xl font-black text-white mb-2'>$2,500 - $5,500</div>
              <div className='text-orange-200 text-sm font-medium mb-3'>Typical Range</div>
              <div className='text-white font-bold'>Fully Installed</div>
            </div>
            <div className='bg-slate-900 rounded-3xl p-8 text-center'>
              <div className='text-3xl font-black text-white mb-2'>$1,200 - $2,500</div>
              <div className='text-slate-400 text-sm font-medium mb-3'>DIY Materials Only</div>
              <div className='text-orange-400 font-bold'>Kit + Well</div>
            </div>
          </div>

          <h2>Cost Breakdown by Component</h2>
          <p>The total cost of an egress window is divided into four main categories: materials, excavation, structural work, and finishing.</p>
          
          <div className='my-12 rounded-3xl overflow-hidden shadow-2xl not-prose'>
            <div className='bg-slate-900 px-8 py-10'>
              <h3 className='text-white text-2xl font-bold mb-8'>Itemized Estimates</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                  <tbody className='divide-y divide-slate-800'>
                    <tr>
                      <td className='py-5 text-white font-medium'>Window & Well Materials</td>
                      <td className='py-5 text-orange-400 font-medium'>$1,000 – $2,200</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Excavation & Drainage</td>
                      <td className='py-5 text-orange-400 font-medium'>$800 – $1,500</td>
                    </tr>
                    <tr>
                      <td className='py-5 text-white font-medium'>Structural Concrete Cutting</td>
                      <td className='py-5 text-orange-400 font-medium'>$600 – $1,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h2>Critical Code Requirements</h2>
          <p>To be legal, an egress window must meet specific measurements according to the International Residential Code (IRC):</p>
          <div className="bg-orange-50 border border-orange-100 rounded-[2rem] p-8 my-12 not-prose">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 mr-4 mt-1">✓</div>
                <p className="text-slate-700"><strong>Minimum Opening Area:</strong> 5.7 square feet</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 mr-4 mt-1">✓</div>
                <p className="text-slate-700"><strong>Minimum Opening Height:</strong> 24 inches</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 mr-4 mt-1">✓</div>
                <p className="text-slate-700"><strong>Minimum Opening Width:</strong> 20 inches</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 mr-4 mt-1">✓</div>
                <p className="text-slate-700"><strong>Maximum Sill Height:</strong> 44 inches above floor</p>
              </li>
            </ul>
          </div>

          <h2>Is an Egress Window Worth the Cost?</h2>
          <p>For most homeowners, the answer is a resounding yes. Beyond the safety aspect, adding a legal bedroom can increase your home\'s value by $15,000 to $25,000, providing an ROI of over 300% on the installation cost.</p>

          <div className='bg-teal-600 rounded-[3rem] p-12 text-white my-20 relative overflow-hidden not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-4xl font-black text-white mb-6 font-black'>Get Professional Installation</h2>
              <p className='text-teal-100 text-xl mb-12 font-light'>
                Don\'t risk structural issues. Get free quotes from vetted egress window specialists in your area.
              </p>
              <div className='bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl'>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

                  {/* Related Guides */}
          <div className='max-w-3xl mx-auto px-6 mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
            <div className='grid md:grid-cols-2 gap-6'>
              <Link href='/articles/basement-adu-rental-suite' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Basement ADU & Rental Suite Guide</h3>
                <p className='text-slate-600 text-sm'>Egress windows are a must for basement ADUs — learn the full process.</p>
              </Link>
              <Link href='/articles/how-to-finish-a-basement' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>How to Finish a Basement</h3>
                <p className='text-slate-600 text-sm'>The complete roadmap to transforming your basement into livable space.</p>
              </Link>
            </div>
          </div>
      </main>
    </div>
  );
}
