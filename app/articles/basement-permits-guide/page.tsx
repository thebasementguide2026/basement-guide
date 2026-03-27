import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Permits Guide: Navigating the Process for Finishing, Renovations, and Conversions | The Basement Guide',
  description: 'Complete guide to basement finishing permits in 2026. Learn when you need a permit, the step-by-step process, code requirements, costs, and tips to avoid fines and delays.',
  alternates: { canonical: 'https://thebasement.guide/articles/basement-permits-guide' },
}

export default function BasementPermitsGuideArticle() {
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
                  name: 'Do I need a permit to finish my basement?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, for most structural, electrical, or plumbing changes. Cosmetic updates like painting or carpeting typically do not require permits. Check your local building department for specifics.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does a basement permit cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Basement permit costs average $100 to $1,500 nationally, depending on location and project scope. Basic finishing permits run $200 to $500, with separate trade permits adding $50 to $200 each.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What happens if I finish my basement without a permit?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You may face fines up to $1,000, stop-work orders, forced removal of work, insurance denial, and complications when selling your home.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long does the basement permit process take?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The process generally takes 1 to 8 weeks depending on your location and project complexity, plus additional time for inspections.',
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
          src='/images/basement-permits-guide/permits.jpg'
          alt='Basement renovation with building permits and blueprints'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>Finishing & Renovation</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Basement Permits<br />
            <span className='text-indigo-400'>Guide</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed'>
            Navigating the permit process for finishing, renovations, and conversions. Avoid fines, stay code-compliant, and protect your investment.
          </p>
          <div className='flex items-center space-x-4 text-sm text-slate-400'>
            <span className='bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium'>BG</span>
            <span className='font-medium'>The Basement Guide Staff</span>
            <span className='text-slate-600'>|</span>
            <span>Updated Feb 2026 &bull; 15 min read</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <article className='lg:col-span-8 space-y-12'>

            {/* Intro */}
            <section>
              <p className='text-lg text-slate-700 leading-relaxed'>
                Turning your basement into a functional space like a home office, gym, or guest room can add valuable square footage to your home. But before you start framing walls or installing flooring, understanding basement finishing permit requirements is crucial to avoid fines, safety issues, or problems during resale.
              </p>
              <p className='text-slate-700 leading-relaxed mt-4'>
                In the United States, basement renovation permits vary widely by local jurisdiction, often at the city or county level, but most follow the International Residential Code (IRC) as a base with local amendments. This guide walks you through when you need permits, the step-by-step application process, common code requirements, costs, and practical tips.
              </p>
            </section>

            {/* When Do You Need a Permit */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>When Do You Need a Permit for Basement Work?</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>
                Not every basement project requires a permit, but most involving changes to structure, utilities, or habitability do. Skipping one can lead to stop-work orders, penalties up to $1,000, or having to undo completed work entirely.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>No Permit Typically Needed</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Cosmetic updates like painting or wallpaper</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Carpeting over existing floors</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Adding non-structural shelving</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Minor repairs under local threshold (often $500&ndash;$1,000)</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Permit Required</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Structural changes (removing load-bearing walls)</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Electrical additions (new outlets, lighting)</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Plumbing or HVAC modifications</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Framing walls or adding habitable space</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Creating sleeping areas (requires egress)</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Installing egress windows</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Adding bathrooms</li>
                  </ul>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-indigo-900'><strong>Pro tip:</strong> If your basement is in a flood-prone area, additional floodplain permits may apply. Always check with your local building department first.</p>
              </div>
            </section>

            {/* Step-by-Step Permit Process */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Step-by-Step Basement Permit Process</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>
                The process generally takes 1&ndash;8 weeks, depending on your location and project complexity. Here is a typical flow.
              </p>
              <div className='space-y-6'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>1. Research Local Requirements</h3>
                  <p className='text-slate-700 leading-relaxed'>Contact your local building department, often via their website or phone. Search for &ldquo;basement finishing permit + your city/county&rdquo; to find forms and checklists. Some areas have online portals for submissions.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>2. Prepare Plans and Documents</h3>
                  <p className='text-slate-700 leading-relaxed mb-3'>Submit detailed drawings showing the layout, dimensions, materials, and changes. For larger projects, hire an architect or engineer &ndash; many jurisdictions require stamped plans for structural work.</p>
                  <ul className='space-y-1 text-slate-700 text-sm'>
                    <li>&bull; Floor plan with room labels, window/door sizes, and egress details</li>
                    <li>&bull; Cross-sections for ceiling heights, insulation, and framing</li>
                    <li>&bull; Electrical, plumbing, and HVAC schematics if applicable</li>
                  </ul>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>3. Apply for the Permit</h3>
                  <p className='text-slate-700 leading-relaxed'>Fill out the application online or in-person and pay fees. Include proof of property ownership and contractor licenses if using pros. Separate permits may be needed for electrical, plumbing, or mechanical work.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>4. Review and Approval</h3>
                  <p className='text-slate-700 leading-relaxed'>The department reviews your plans for code compliance, typically taking 1&ndash;4 weeks. You may need revisions or inspections from specialists, such as for energy efficiency.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>5. Pay Fees and Start Work</h3>
                  <p className='text-slate-700 leading-relaxed'>Once approved, post the permit visibly at the job site and schedule inspections at key stages such as rough-in and final.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>6. Inspections and Certificate of Occupancy</h3>
                  <p className='text-slate-700 leading-relaxed'>Inspectors check work during construction at scheduled milestones. A final Certificate of Occupancy (CO) or approval confirms the work is safe and compliant &ndash; essential for insurance coverage and when selling your home.</p>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-indigo-900'><strong>Pro tip:</strong> If hiring a contractor, they often handle permits, but verify they are licensed and pulling permits in your name to avoid liability.</p>
              </div>
            </section>

            {/* Common Code Requirements */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Common Basement Code Requirements</h2>
              <p className='text-slate-700 leading-relaxed mb-6'>
                While varying by location, most US areas adopt the 2021 IRC or later versions with local tweaks. Here are the key elements for basement finishing.
              </p>
              <div className='space-y-6'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Ceiling Height</h3>
                  <p className='text-slate-700 leading-relaxed'>Habitable spaces (bedrooms, living rooms) need at least 7 feet of finished ceiling height. Non-habitable areas like storage can be 6 feet 8 inches minimum. Beams or ducts can drop to 6 feet 4 inches in limited spots.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Emergency Egress</h3>
                  <p className='text-slate-700 leading-relaxed mb-3'>Every basement and sleeping room must have at least one emergency escape opening (window or door) per IRC R310:</p>
                  <ul className='space-y-1 text-slate-700 text-sm'>
                    <li>&bull; Minimum 5.7 square feet clear opening (5.0 if at grade)</li>
                    <li>&bull; 24 inches minimum height, 20 inches minimum width</li>
                    <li>&bull; Sill no higher than 44 inches from the finished floor</li>
                    <li>&bull; Window wells (if below grade) need 9 square feet area, 36-inch projection</li>
                    <li>&bull; Ladders required if window well is deeper than 44 inches</li>
                  </ul>
                  <p className='text-slate-700 leading-relaxed mt-3'>For the full IRC details on building planning, see this <a href='https://codes.iccsafe.org/content/IRC2021P1/chapter-3-building-planning' target='_blank' rel='noopener noreferrer' className='text-indigo-600 underline hover:text-indigo-800'>ICC overview of Chapter 3</a>.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Smoke and CO Alarms</h3>
                  <p className='text-slate-700 leading-relaxed'>Hardwired, interconnected smoke alarms are required in bedrooms, hallways, and on each level. CO alarms must be within 15 feet of bedrooms if fuel-burning appliances are present.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Insulation and Ventilation</h3>
                  <p className='text-slate-700 leading-relaxed'>Basements often require R-15 continuous or R-19 cavity wall insulation for energy efficiency per IECC. Natural or mechanical ventilation (windows or fans) is needed to prevent moisture buildup.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Electrical and Lighting</h3>
                  <p className='text-slate-700 leading-relaxed'>Outlets are required every 12 feet along walls with GFCI protection in wet areas. Adequate lighting (at least one fixture per room) is mandatory.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Plumbing and Bathrooms</h3>
                  <p className='text-slate-700 leading-relaxed'>Minimum clearances include 21 inches in front of the toilet and a 30x30 inch shower area. Ventilation fans must exhaust outdoors.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Stairs and Handrails</h3>
                  <p className='text-slate-700 leading-relaxed'>Minimum 36-inch width, 7-3/4 inch maximum riser height, 10-inch minimum tread depth, and handrails on at least one side.</p>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 rounded-lg p-5 mt-6'>
                <p className='text-red-800 font-semibold'>Flood zones may require elevated utilities or dry floodproofing. Always confirm requirements with your local code enforcer before starting work.</p>
              </div>
            </section>

            {/* Costs and Timelines */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Basement Permit Costs and Timelines</h2>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
                  <thead>
                    <tr className='bg-slate-800 text-white text-sm'>
                      <th className='p-3 text-left'>Item</th>
                      <th className='p-3 text-left'>Typical Cost</th>
                      <th className='p-3 text-left'>Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Basic finishing permit</td>
                      <td className='p-3'>$200&ndash;$500</td>
                      <td className='p-3'>1&ndash;2 weeks approval</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Electrical permit</td>
                      <td className='p-3'>$50&ndash;$200</td>
                      <td className='p-3'>1&ndash;2 weeks</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Plumbing permit</td>
                      <td className='p-3'>$50&ndash;$200</td>
                      <td className='p-3'>1&ndash;2 weeks</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Engineering review</td>
                      <td className='p-3'>$300&ndash;$1,000</td>
                      <td className='p-3'>2&ndash;4 weeks</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Each inspection</td>
                      <td className='p-3'>Included in permit fee</td>
                      <td className='p-3'>1&ndash;3 days scheduling</td>
                    </tr>
                    <tr className='bg-indigo-50 font-semibold'>
                      <td className='p-3'>Total (typical project)</td>
                      <td className='p-3'>$100&ndash;$1,500</td>
                      <td className='p-3'>1&ndash;8 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Tips */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Tips for a Smooth Basement Permit Process</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-bold text-slate-900 mb-3'>Planning</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&bull; Start early and get quotes from contractors who know local codes</li>
                    <li>&bull; Document everything with photos of pre-work conditions</li>
                    <li>&bull; Budget for surprises &ndash; older homes may need upgrades to meet current codes</li>
                  </ul>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-bold text-slate-900 mb-3'>Execution</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>&bull; DIY is possible in many areas, but pros ensure compliance</li>
                    <li>&bull; Permitted work adds resale value &ndash; unpermitted can scare buyers</li>
                    <li>&bull; Test for radon and moisture before starting &ndash; permits may require mitigation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Do I need a permit to finish my basement?</h3>
                  <p className='text-slate-700'>Yes, for most structural, electrical, or plumbing changes. Cosmetic updates like painting or carpeting are typically exempt. Check your local building department for specifics.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>What are the basement ceiling height requirements?</h3>
                  <p className='text-slate-700'>Typically 7 feet for habitable spaces under the IRC. Non-habitable areas can be 6 feet 8 inches.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>How much does a basement permit cost?</h3>
                  <p className='text-slate-700'>$100&ndash;$1,500 nationally, varying by location and scope. Basic finishing permits run $200&ndash;$500.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>What happens if I finish my basement without a permit?</h3>
                  <p className='text-slate-700'>Fines, forced removal of work, insurance denial, and complications when selling your home. It can also affect your property value negatively.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Do I need an egress window for a basement bedroom?</h3>
                  <p className='text-slate-700'>Yes. The IRC requires emergency escape openings for all sleeping areas with a minimum of 5.7 square feet of clear opening.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>How long does the basement permit process take?</h3>
                  <p className='text-slate-700'>1&ndash;8 weeks for approval, plus additional time for inspections during construction.</p>
                </div>
              </div>
            </section>

            {/* Glossary */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Quick Glossary of Basement Permit Terms</h2>
              <div className='bg-slate-50 rounded-lg border border-slate-200 p-6'>
                <dl className='space-y-4'>
                  <div><dt className='font-semibold text-slate-900'>IRC (International Residential Code)</dt><dd className='text-slate-700'>National standard for residential building, adopted locally with amendments.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Egress</dt><dd className='text-slate-700'>Emergency escape route, such as windows or doors meeting minimum size requirements.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Habitable Space</dt><dd className='text-slate-700'>Areas designated for living or sleeping, subject to stricter building codes.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Certificate of Occupancy (CO)</dt><dd className='text-slate-700'>Final approval from the building department proving your work is code-compliant.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Load-Bearing Wall</dt><dd className='text-slate-700'>Structural wall supporting weight from above. Requires engineer review if altered.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>GFCI</dt><dd className='text-slate-700'>Ground Fault Circuit Interrupter. Required for electrical outlets in wet or damp locations.</dd></div>
                </dl>
              </div>
            </section>

            {/* Final Advice */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>Final Advice</h2>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-6'>
                <p className='text-slate-700 leading-relaxed'>
                  Basement permits ensure your project is safe, up to code, and worth the effort for long-term value. Contact your local building department early to avoid delays, and remember that permitted work protects your investment at resale. For more on basement finishing, see our <Link href='/articles/how-to-finish-a-basement' className='text-indigo-600 underline hover:text-indigo-800'>complete finishing guide</Link> and <Link href='/articles/basement-adu-rental-suite' className='text-indigo-600 underline hover:text-indigo-800'>ADU and rental suite guide</Link>.
                </p>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className='lg:col-span-4 space-y-8'>
            <div className='bg-white rounded-lg p-6 border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-3'>Related Guides</h4>
              <ul className='space-y-3 text-sm'>
                <li><Link href='/articles/how-to-finish-a-basement' className='text-indigo-600 hover:underline'>How to Finish a Basement 2026</Link></li>
                <li><Link href='/articles/basement-adu-rental-suite' className='text-indigo-600 hover:underline'>Basement ADU & Rental Suite Guide</Link></li>
                <li><Link href='/articles/complete-basement-waterproofing-guide' className='text-indigo-600 hover:underline'>Complete Waterproofing Guide</Link></li>
                <li><Link href='/articles/types-of-foundation-cracks' className='text-indigo-600 hover:underline'>Types of Foundation Cracks</Link></li>
                <li><Link href='/articles/basement-mold-prevention' className='text-indigo-600 hover:underline'>Mold Prevention Guide</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>Need Help With Your Basement Project?</h2>
          <p className='text-slate-300 mb-8 text-lg'>Connect with licensed contractors who handle permits and code compliance in your area. Free quotes, no obligation.</p>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
