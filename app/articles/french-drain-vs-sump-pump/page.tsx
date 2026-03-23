import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'French Drain vs Sump Pump: Which Basement Waterproofing System Is Best? | The Basement Guide',
  description: 'Compare French drain vs sump pump for basement waterproofing. Costs, pros, cons, installation, and why combining both gives the best protection in 2026.',
}

export default function FrenchDrainVsSumpPumpArticle() {
  return (
    <div className='bg-white min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Which is better, a French drain or a sump pump?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A French drain prevents water entry while a sump pump removes it. Both together form the best basement waterproofing system.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does a French drain cost vs a sump pump?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'French drains cost $3,000 to $15,000. Sump pumps cost $1,200 to $3,000 installed. A combined system runs $4,000 to $10,000.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do I need both a French drain and a sump pump?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, for full protection against hydrostatic pressure and flooding. The drain collects water and channels it to the sump pump for ejection.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long do French drains and sump pumps last?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'French drains last 20 to 30 years. Sump pumps last 8 to 12 years before needing replacement.',
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/images/french-drain-vs-sump-pump/frenchdrain%20vs%20sump%20pump.jpg'
          alt='French drain and sump pump basement waterproofing comparison'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>System Comparison</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            French Drain vs<br />
            <span className='text-indigo-400'>Sump Pump</span> (2026)
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed'>
            Which basement waterproofing system is best? We compare costs, installation, effectiveness, and why experts recommend combining both.
          </p>
          <div className='flex items-center space-x-4 text-sm text-slate-400'>
            <span className='bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium'>BG</span>
            <span className='font-medium'>The Basement Guide Staff</span>
            <span className='text-slate-600'>|</span>
            <span>Updated Feb 2026 &bull; 20 min read</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <article className='lg:col-span-8 space-y-12'>

            {/* Intro */}
            <section>
              <p className='text-lg text-slate-700 leading-relaxed mb-8'>A French drain and a sump pump are the two foundational components of a basement waterproofing system, each solving a different part of the water problem. A French drain is a passive perimeter drainage system, a gravel-filled trench with a perforated pipe that intercepts groundwater before it can build pressure against your foundation walls. A sump pump is an active mechanical device that sits in a pit at the basement&rsquo;s lowest point and ejects collected water out of the home through a discharge line. In most wet basement situations, the French drain collects and channels water while the sump pump removes it, making them complementary systems rather than competing alternatives.</p>
              <p className='text-lg text-slate-700 leading-relaxed'>
                When it comes to basement waterproofing, choosing between a French drain and a sump pump often comes down to your specific water issues. A French drain is a passive drainage system that redirects groundwater away from your foundation, while a sump pump is an active pump that removes standing water from a pit in your basement floor. Both are popular basement waterproofing methods, but they work best together for full protection against leaks, flooding, and hydrostatic pressure.
              </p>
              <p className='text-slate-700 leading-relaxed mt-4'>
                In this comparison, we dive into the pros, cons, costs, installation tips, and real-world recommendations. Many homeowners combine an interior French drain with a sump pump for the ultimate setup, but understanding each system&rsquo;s strengths is key to making the right decision for your home.
              </p>
            </section>

            {/* Quick Comparison Table */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Quick Comparison Table: French Drain vs Sump Pump</h2>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
                  <thead>
                    <tr className='bg-slate-800 text-white text-sm'>
                      <th className='p-3 text-left'>Feature</th>
                      <th className='p-3 text-left'>French Drain</th>
                      <th className='p-3 text-left'>Sump Pump</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Type</td>
                      <td className='p-3'>Passive drainage pipe in gravel trench</td>
                      <td className='p-3'>Active electric pump in basement pit</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>How It Works</td>
                      <td className='p-3'>Collects and redirects groundwater</td>
                      <td className='p-3'>Pumps out accumulated water</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Best For</td>
                      <td className='p-3'>Preventing water buildup around foundation</td>
                      <td className='p-3'>Removing standing water during floods</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Pros</td>
                      <td className='p-3'>Low maintenance, long-lasting</td>
                      <td className='p-3'>Fast action, handles heavy water</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Cons</td>
                      <td className='p-3'>Disruptive install, can clog</td>
                      <td className='p-3'>Needs power, regular checks</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Average Cost</td>
                      <td className='p-3'>$3,000&ndash;$8,000 interior / $5,000&ndash;$15,000 exterior</td>
                      <td className='p-3'>$1,200&ndash;$3,000 installed</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Lifespan</td>
                      <td className='p-3'>20&ndash;30 years</td>
                      <td className='p-3'>8&ndash;12 years (pump replacement)</td>
                    </tr>
                    <tr className='bg-indigo-50 font-semibold'>
                      <td className='p-3'>Maintenance</td>
                      <td className='p-3'>Annual cleaning</td>
                      <td className='p-3'>Quarterly tests, battery backup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-sm text-slate-500 mt-4'>National averages. Actual costs vary by region, home size, and soil conditions.</p>
            </section>

            {/* What Is a French Drain */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>What Is a French Drain and How Does It Work?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                A French drain &mdash; also called a perimeter drain or weeping tile &mdash; is a trench filled with gravel and a perforated pipe that collects groundwater and directs it away from your home&rsquo;s foundation. Interior versions run along the basement floor perimeter, while exterior ones sit outside the foundation walls.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros of French Drains</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Relieves hydrostatic pressure to prevent cracks and bowing walls</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Passive operation &ndash; no electricity needed</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Long-term solution that protects the entire foundation</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Pairs well with sump pumps for complete waterproofing</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons of French Drains</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> High upfront cost and labor-intensive install</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Can clog with silt over time if not filtered properly</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Exterior installs disrupt landscaping</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Not ideal for sudden heavy flooding without a sump pump</li>
                  </ul>
                </div>
              </div>
              <div className='bg-slate-50 border border-slate-200 rounded-lg p-6 mt-6'>
                <h3 className='font-bold text-slate-900 mb-2'>French Drain Cost Breakdown</h3>
                <p className='text-slate-700 text-sm'>Interior French drain installation averages <strong>$3,000&ndash;$8,000</strong> ($60&ndash;$120 per linear foot) for a typical 1,000 sq ft basement. Exterior costs <strong>$5,000&ndash;$15,000</strong> ($25&ndash;$60 per linear foot). DIY materials run $500&ndash;$2,000, but pros are recommended for proper slope and waterproofing.</p>
              </div>
            </section>

            {/* What Is a Sump Pump */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>What Is a Sump Pump and How Does It Work?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                A sump pump sits in a pit (sump basin) at your basement&rsquo;s lowest point. When water enters the pit, a float switch activates the pump to eject water outside through a discharge line. Common types include submersible (quiet and powerful) and pedestal (cheaper but louder). Battery backups or water-powered models add reliability during power outages.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros of Sump Pumps</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Handles large water volumes quickly during storms</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Affordable and easy to upgrade with smart alerts</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Essential for flood-prone areas or high water tables</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Works with French drains as the ejection point</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons of Sump Pumps</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Relies on electricity &ndash; fails in outages without backup</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Needs regular maintenance to avoid breakdowns</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Pump can burn out after 8&ndash;12 years</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Does not prevent water entry &ndash; just removes it</li>
                  </ul>
                </div>
              </div>
              <div className='bg-slate-50 border border-slate-200 rounded-lg p-6 mt-6'>
                <h3 className='font-bold text-slate-900 mb-2'>Sump Pump Cost Breakdown</h3>
                <p className='text-slate-700 text-sm'>Basic submersible sump pump installation averages <strong>$1,200&ndash;$3,000</strong> ($200&ndash;$600 for the unit plus $750&ndash;$1,200 labor). Add $100&ndash;$300 for a battery backup. Pedestal models start at $100&ndash;$300.</p>
              </div>
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-slate-700'><span className='mr-1'>&#128204;</span><strong>Top Pick:</strong> <a href='https://amzn.to/4jWsBrC' target='_blank' rel='noopener noreferrer sponsored' className='text-indigo-600 underline hover:text-indigo-800'>Zoeller M53 Submersible Sump Pump</a> &ndash; Trusted for reliability in high-volume applications.</p>
              </div>
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3'>
                <p className='text-sm text-slate-700'><span className='mr-1'>&#128204;</span><strong>Backup Pick:</strong> <a href='https://amzn.to/42r7u4V' target='_blank' rel='noopener noreferrer sponsored' className='text-indigo-600 underline hover:text-indigo-800'>Liberty Pumps SJ10 Water-Powered Backup</a> &ndash; No battery needed, runs on water pressure during outages.</p>
              </div>
            </section>

            {/* Head-to-Head */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Head-to-Head: Key Things to Consider</h2>
              <div className='space-y-6'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Effectiveness</h3>
                  <p className='text-slate-700 leading-relaxed'>French drains prevent water from reaching your foundation, while sump pumps remove it after entry. For best results, use an interior French drain that channels water to a sump pump.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Installation</h3>
                  <p className='text-slate-700 leading-relaxed'>French drains require digging (1&ndash;2 weeks), making them more disruptive. Sump pumps are installed in 1&ndash;2 days with minimal mess.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Cost and Value</h3>
                  <p className='text-slate-700 leading-relaxed'>French drains have higher upfront costs but lower long-term maintenance. Sump pumps are cheaper initially but need ongoing checks and eventual replacement.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Home Type</h3>
                  <p className='text-slate-700 leading-relaxed'>Sloped yards suit exterior French drains. Flat or finished basements favor interior drains with sump pumps.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Power and Reliability</h3>
                  <p className='text-slate-700 leading-relaxed'>Sump pumps need electricity &ndash; add a backup for outages. French drains work passively with zero power requirements.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Combined System</h3>
                  <p className='text-slate-700 leading-relaxed'>Many experts recommend both for comprehensive protection &ndash; the drain collects, the pump ejects. In flood-prone areas, this combo can boost home value by 5&ndash;10 percent during inspections.</p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Recommendations and Advice</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-bold text-slate-900 mb-3'>Choose a French Drain If&hellip;</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>You have ongoing groundwater issues or want long-term prevention</li>
                    <li>Ideal for new builds or major renovations</li>
                  </ul>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-bold text-slate-900 mb-3'>Choose a Sump Pump If&hellip;</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>Your basement floods during storms or you need quick water removal</li>
                    <li>Great starter option for minor water problems</li>
                  </ul>
                </div>
                <div className='bg-indigo-50 rounded-lg p-6 border border-indigo-200 shadow-sm'>
                  <h3 className='font-bold text-indigo-900 mb-3'>Go Combined If&hellip;</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>You want the best basement waterproofing system</li>
                    <li>Start with an interior French drain tied to a reliable sump pump</li>
                  </ul>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 rounded-lg p-5 mt-6'>
                <p className='text-red-800 font-semibold'>Fix external issues like gutters and grading first. Test soil for high water tables. Hire pros for permits and warranties. Add smart features like Wi-Fi alerts for peace of mind.</p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Which is better, a French drain or a sump pump?</h3>
                  <p className='text-slate-700'>A French drain prevents water entry, while a sump pump removes it. Both together form the best basement waterproofing system.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>How much does a French drain cost vs a sump pump?</h3>
                  <p className='text-slate-700'>French drains: $3,000&ndash;$15,000. Sump pumps: $1,200&ndash;$3,000. Combined: $4,000&ndash;$10,000.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Can I install a French drain or sump pump myself?</h3>
                  <p className='text-slate-700'>Sump pumps are DIY-friendly for handy homeowners. French drains need professionals to avoid structural issues.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Do I need both for basement waterproofing?</h3>
                  <p className='text-slate-700'>Yes, for full protection against hydrostatic pressure and flooding.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>How long do they last?</h3>
                  <p className='text-slate-700'>French drains: 20&ndash;30 years. Sump pumps: 8&ndash;12 years with maintenance.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>What if power goes out?</h3>
                  <p className='text-slate-700'>Add a battery or <a href='https://amzn.to/42r7u4V' target='_blank' rel='noopener noreferrer sponsored' className='text-indigo-600 underline hover:text-indigo-800'>water-powered backup</a> to your sump pump.</p>
                </div>
              </div>
            </section>

            {/* Glossary */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Quick Glossary of Basement Waterproofing Terms</h2>
              <div className='bg-slate-50 rounded-lg border border-slate-200 p-6'>
                <dl className='space-y-4'>
                  <div><dt className='font-semibold text-slate-900'>Hydrostatic Pressure</dt><dd className='text-slate-700'>Water force pushing against foundations.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>French Drain</dt><dd className='text-slate-700'>Gravel trench with perforated pipe for water redirection.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Sump Pump</dt><dd className='text-slate-700'>A device that ejects water from a basement pit.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Interior Drainage</dt><dd className='text-slate-700'>Systems installed inside the basement perimeter.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Battery Backup</dt><dd className='text-slate-700'>Secondary power source for sump pumps during outages.</dd></div>
                </dl>
              </div>
            </section>

            {/* Final Advice */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>Final Advice</h2>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-6'>
                <p className='text-slate-700 leading-relaxed'>
                  French drain vs sump pump is not an either-or choice &ndash; combining them gives the strongest defense against basement water. Assess your water issues, budget, and home layout before deciding. For more guidance, see our <Link href='/articles/french-drain-cost' className='text-indigo-600 underline hover:text-indigo-800'>French drain cost guide</Link>, <Link href='/articles/sump-pump-cost' className='text-indigo-600 underline hover:text-indigo-800'>sump pump cost guide</Link>, and <Link href='/articles/complete-basement-waterproofing-guide' className='text-indigo-600 underline hover:text-indigo-800'>complete waterproofing guide</Link>.
                </p>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className='lg:col-span-4 space-y-8'>
            <div className='bg-white rounded-lg p-6 border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-3'>Related Guides</h4>
              <ul className='space-y-3 text-sm'>
                <li><Link href='/articles/complete-basement-waterproofing-guide' className='text-indigo-600 hover:underline'>Complete Waterproofing Guide</Link></li>
                <li><Link href='/articles/french-drain-cost' className='text-indigo-600 hover:underline'>French Drain Cost 2026</Link></li>
                <li><Link href='/articles/sump-pump-cost' className='text-indigo-600 hover:underline'>Sump Pump Cost 2026</Link></li>
                <li><Link href='/articles/sump-pump-buying-guide' className='text-indigo-600 hover:underline'>Sump Pump Buying Guide</Link></li>
                <li><Link href='/articles/battery-vs-water-powered-sump-pumps' className='text-indigo-600 hover:underline'>Battery vs Water-Powered Sump Pumps</Link></li>
                <li><Link href='/articles/why-basement-floods-with-sump-pump' className='text-indigo-600 hover:underline'>Why Your Basement Still Floods</Link></li>
                <li><Link href='/articles/smart-sump-pumps-guide' className='text-indigo-600 hover:underline'>Smart Sump Pumps Guide</Link></li>
              </ul>
            </div>
          </aside>

        </div>
      </div>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>Get Expert Waterproofing Advice</h2>
          <p className='text-slate-300 mb-8 text-lg'>Not sure if you need a French drain, sump pump, or both? Connect with local waterproofing pros for a free assessment.</p>
          <LeadForm />
        </div>
      </section>

    </div>
  )
}
