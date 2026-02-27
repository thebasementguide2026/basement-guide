import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Drylok vs RadonSeal: Which Basement Sealer Is Right for You? | The Basement Guide',
  description: 'Compare Drylok vs RadonSeal for basement waterproofing. Pros, cons, costs, radon protection, and real recommendations to help you choose the best basement wall sealer in 2026.',
}

export default function DrylokVsRadonsealArticle() {
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
                  name: 'Which is better for basement walls, Drylok or RadonSeal?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'RadonSeal is better for long-term sealing and radon control. Drylok is better for quick, affordable surface protection.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I use Drylok and RadonSeal together?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Apply RadonSeal first to penetrate, then Drylok for a surface barrier. Many users recommend this hybrid approach.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does Drylok vs RadonSeal cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Drylok costs $100\u2013$150 per 5-gallon bucket. RadonSeal costs $150\u2013$250 per 5-gallon bucket. Factor in coverage for true value.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is RadonSeal worth it over Drylok?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'If you want 20 years of protection without reapplying, yes. For short-term fixes, Drylok suffices.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does Drylok stop radon?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No, Drylok offers minimal radon blocking. RadonSeal is specifically designed for radon reduction.',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Drylok Extreme',
              description: 'Surface-coating waterproofing paint for basement walls with mildew-resistant formula.',
              review: {
                '@type': 'Review',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '4',
                  bestRating: '5',
                },
                author: { '@type': 'Organization', name: 'The Basement Guide' },
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'RadonSeal Plus',
              description: 'Deep-penetrating concrete sealer for long-term waterproofing and radon mitigation.',
              review: {
                '@type': 'Review',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                  bestRating: '5',
                },
                author: { '@type': 'Organization', name: 'The Basement Guide' },
              },
            },
          ]),
        }}
      />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
                        src='/images/drylok-vs-radonseal/drylockvsradonseal.jpg'
          alt='Drylok and RadonSeal basement sealers compared'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-indigo-500'></div>
            <span className='text-indigo-400 font-bold tracking-[0.3em] text-sm uppercase'>Product Comparison</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Drylok vs<br />
            <span className='text-indigo-400'>RadonSeal</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed'>
            Which basement sealer is right for you? We compare costs, effectiveness, radon protection, and real-world durability.
          </p>
          <div className='flex items-center space-x-4 text-sm text-slate-400'>
            <span className='bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium'>BG</span>
            <span className='font-medium'>The Basement Guide Staff</span>
            <span className='text-slate-600'>|</span>
            <span>Updated Feb 2026 &bull; 18 min read</span>
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
                Choosing the right sealer for your basement walls can make all the difference between a dry, usable space and ongoing battles with moisture, mold, and even radon gas. Drylok and RadonSeal are two popular options, but they work in very different ways. Drylok is a surface-coating waterproofing paint that creates a barrier on top of your concrete or block walls, while RadonSeal is a penetrating concrete sealer that soaks deep into the pores to seal from within.
              </p>
              <p className='text-slate-700 leading-relaxed mt-4'>
                In this comparison, we break down the pros, cons, key differences, costs, application tips, and real-world recommendations. Whether you are dealing with minor dampness, efflorescence, or full-on leaks, understanding Drylok vs RadonSeal will help you pick the best basement wall sealer for your needs.
              </p>
            </section>

            {/* Quick Comparison Table */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Quick Comparison Table: Drylok vs RadonSeal</h2>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse bg-white rounded-lg shadow-sm'>
                  <thead>
                    <tr className='bg-slate-800 text-white text-sm'>
                      <th className='p-3 text-left'>Feature</th>
                      <th className='p-3 text-left'>Drylok Extreme</th>
                      <th className='p-3 text-left'>RadonSeal Plus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Type</td>
                      <td className='p-3'>Surface coating (latex paint)</td>
                      <td className='p-3'>Penetrating silicate sealer</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Application</td>
                      <td className='p-3'>Brush, roller, or sprayer (2 coats)</td>
                      <td className='p-3'>Low-pressure sprayer (1&ndash;2 coats)</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Penetration Depth</td>
                      <td className='p-3'>Surface only (1/16 inch)</td>
                      <td className='p-3'>Up to 4 inches into concrete</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Lifespan</td>
                      <td className='p-3'>5&ndash;10 years</td>
                      <td className='p-3'>20+ years</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Waterproofing</td>
                      <td className='p-3'>Good for minor seepage</td>
                      <td className='p-3'>Excellent for hydrostatic pressure</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Radon Reduction</td>
                      <td className='p-3'>Minimal</td>
                      <td className='p-3'>Up to 99%</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Mold Resistance</td>
                      <td className='p-3'>Built-in biocide (Extreme)</td>
                      <td className='p-3'>Reduces efflorescence</td>
                    </tr>
                    <tr className='bg-white border-b border-slate-100'>
                      <td className='p-3 font-medium'>Cost (5-gal)</td>
                      <td className='p-3'>$100&ndash;$150</td>
                      <td className='p-3'>$150&ndash;$250</td>
                    </tr>
                    <tr className='bg-slate-50 border-b border-slate-100'>
                      <td className='p-3 font-medium'>Coverage per Gallon</td>
                      <td className='p-3'>75&ndash;100 sq ft</td>
                      <td className='p-3'>200&ndash;250 sq ft</td>
                    </tr>
                    <tr className='bg-indigo-50 font-semibold'>
                      <td className='p-3'>Best For</td>
                      <td className='p-3'>Quick DIY, painted look</td>
                      <td className='p-3'>Long-term, unfinished walls</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-sm text-slate-500 mt-4'>
                National average cost for a full basement application (500&ndash;1,000 sq ft): $500&ndash;$1,500 for materials plus labor if needed.
              </p>
            </section>

            {/* What Is Drylok */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>What Is Drylok and How Does It Work?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Drylok is a masonry waterproofing paint made by United Gilsonite Laboratories (UGL). It comes in versions like Drylok Original (basic) and Drylok Extreme (with added mildew resistance). You apply it like thick paint to interior basement walls, where it dries to form a flexible, watertight barrier. It is designed to withstand up to 10&ndash;15 psi of hydrostatic pressure, making it a solid choice for minor water issues.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros of Drylok</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Easy DIY application &ndash; no special tools needed</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Affordable and widely available at Home Depot</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Gives walls a clean, painted finish</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Mildew-resistant formula in Extreme version</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Quick drying &ndash; 2&ndash;3 hours between coats</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons of Drylok</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Surface-only protection &ndash; can peel under high pressure</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Needs reapplication every 5&ndash;10 years</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Does not block radon gas effectively</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Walls must be clean and dry for adhesion</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Not ideal for very porous or crumbling surfaces</li>
                  </ul>
                </div>
              </div>
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-slate-700'><span className='mr-1'>&#128204;</span><strong>Our Pick:</strong> <a href='https://amzn.to/46vRJfv' target='_blank' rel='noopener noreferrer sponsored' className='text-indigo-600 underline hover:text-indigo-800'>Drylok Extreme</a> &ndash; $120 per 5-gallon bucket on Amazon. Best for its built-in mildew fighter.</p>
              </div>
            </section>

            {/* What Is RadonSeal */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>What Is RadonSeal and How Does It Work?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                RadonSeal is a deep-penetrating concrete sealer from Novion Technologies. It is a silicate-based formula that reacts chemically with the concrete to fill pores and capillaries from the inside out. Available in Standard (for lighter use) and Plus (for tougher jobs), it hardens the surface while allowing vapor to escape, preventing trapped moisture.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-green-50 rounded-lg p-6 border border-green-200'>
                  <h3 className='font-bold text-green-800 mb-3'>Pros of RadonSeal</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Deep penetration up to 4 inches &ndash; permanent protection</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Strengthens weak concrete and reduces efflorescence</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Excellent radon mitigation &ndash; blocks up to 99% of gas. For more on radon risks, check this <a href='https://www.epa.gov/radon' target='_blank' rel='noopener noreferrer' className='text-indigo-600 underline hover:text-indigo-800'>EPA guide on radon</a>.</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Long-lasting &ndash; 20+ years with minimal maintenance</li>
                    <li className='flex items-start gap-2'><span className='text-green-600'>&#10003;</span> Higher coverage rate means less product needed</li>
                  </ul>
                </div>
                <div className='bg-red-50 rounded-lg p-6 border border-red-200'>
                  <h3 className='font-bold text-red-800 mb-3'>Cons of RadonSeal</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> More expensive upfront &ndash; requires pump sprayer</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> No painted finish &ndash; leaves walls natural</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Multiple coats needed on very porous block walls</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Not effective on painted/sealed surfaces without stripping</li>
                    <li className='flex items-start gap-2'><span className='text-red-500'>&#10007;</span> Strong odor during application &ndash; needs ventilation</li>
                  </ul>
                </div>
              </div>
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-slate-700'><span className='mr-1'>&#128204;</span><strong>Our Pick:</strong> <a href='https://amzn.to/4r0V91a' target='_blank' rel='noopener noreferrer sponsored' className='text-indigo-600 underline hover:text-indigo-800'>RadonSeal Plus</a> &ndash; $200 per 5-gallon bucket on Amazon. Best for long-term sealing and radon control.</p>
              </div>
            </section>

            {/* Head-to-Head */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Head-to-Head: Key Things to Consider</h2>
              <div className='space-y-6'>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Effectiveness Against Water</h3>
                  <p className='text-slate-700 leading-relaxed'>RadonSeal wins for severe hydrostatic pressure because it seals pores internally, reducing the chance of failure. Drylok is better for light dampness or as a quick barrier.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Radon and Health Concerns</h3>
                  <p className='text-slate-700 leading-relaxed'>If radon is a worry (test your home &ndash; levels over 4 pCi/L need action), RadonSeal is the clear choice. Drylok offers little radon blocking.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>DIY Friendliness</h3>
                  <p className='text-slate-700 leading-relaxed'>Drylok is easier for beginners &ndash; just paint it on. RadonSeal requires more prep (acid etching for smooth concrete) and a sprayer, but it is still DIY-able.</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Cost and Value</h3>
                  <p className='text-slate-700 leading-relaxed'>Drylok saves money short-term ($0.50&ndash;$1 per sq ft), but RadonSeal&rsquo;s longevity makes it cheaper over time ($0.75&ndash;$1.25 per sq ft with better coverage).</p>
                </div>
                <div className='bg-slate-50 rounded-lg p-6 border border-slate-200'>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>Aesthetics and Finishing</h3>
                  <p className='text-slate-700 leading-relaxed'>Drylok provides a smooth, paintable surface ready for finishing. RadonSeal keeps things raw but can be painted over once cured.</p>
                </div>
              </div>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6'>
                <p className='text-sm text-indigo-900'><strong>Pro tip:</strong> In wet climates or older homes with block walls, combining them works well. Apply RadonSeal first for deep sealing, then Drylok for a finished look.</p>
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Recommendations and Advice</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-bold text-slate-900 mb-3'>Choose Drylok If&hellip;</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>You want a budget-friendly, quick fix for minor dampness</li>
                    <li>You are prepping walls for paint or finishing</li>
                    <li>You need a small DIY project like sealing a utility room</li>
                  </ul>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-bold text-slate-900 mb-3'>Choose RadonSeal If&hellip;</h3>
                  <ul className='space-y-2 text-slate-700 text-sm'>
                    <li>You need long-term protection against leaks or radon</li>
                    <li>You have efflorescence or a high-moisture area</li>
                    <li>You have unfinished basement walls or plan a base layer before finishing</li>
                  </ul>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 rounded-lg p-5 mt-6'>
                <p className='text-red-800 font-semibold'>Always fix external issues first &ndash; gutters, grading &ndash; no sealer works if water pools outside. Test for radon and moisture before starting.</p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Which is better for basement walls, Drylok or RadonSeal?</h3>
                  <p className='text-slate-700'>RadonSeal for long-term sealing and radon control. Drylok for quick, affordable surface protection.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Can I use Drylok and RadonSeal together?</h3>
                  <p className='text-slate-700'>Yes &ndash; apply RadonSeal first to penetrate, then Drylok for a barrier. Many users recommend this.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>How much does Drylok vs RadonSeal cost?</h3>
                  <p className='text-slate-700'>Drylok: $100&ndash;$150 per 5-gal. RadonSeal: $150&ndash;$250 per 5-gal. Factor in coverage for true value.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Is RadonSeal worth it over Drylok?</h3>
                  <p className='text-slate-700'>If you want 20 years of protection without reapplying, yes. For short-term, Drylok suffices.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>Does Drylok stop radon?</h3>
                  <p className='text-slate-700'>No, minimally. RadonSeal is designed for it.</p>
                </div>
                <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                  <h3 className='font-semibold text-slate-900 mb-2'>What if my walls are already painted?</h3>
                  <p className='text-slate-700'>Strip paint before RadonSeal. Drylok can go over some surfaces but test adhesion first.</p>
                </div>
              </div>
            </section>

            {/* Glossary */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-6'>Quick Glossary of Basement Sealer Terms</h2>
              <div className='bg-slate-50 rounded-lg border border-slate-200 p-6'>
                <dl className='space-y-4'>
                  <div><dt className='font-semibold text-slate-900'>Hydrostatic Pressure</dt><dd className='text-slate-700'>Force from groundwater pushing against walls.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Efflorescence</dt><dd className='text-slate-700'>White mineral deposits from moisture passing through concrete.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Penetrating Sealer</dt><dd className='text-slate-700'>Soaks into concrete to block pores from within.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Surface Coating</dt><dd className='text-slate-700'>Barrier applied on top of the wall, like paint.</dd></div>
                  <div><dt className='font-semibold text-slate-900'>Radon Mitigation</dt><dd className='text-slate-700'>Reducing harmful radon gas levels in living spaces.</dd></div>
                </dl>
              </div>
            </section>

            {/* Final Advice */}
            <section>
              <h2 className='text-3xl font-bold text-slate-900 mb-4'>Final Advice</h2>
              <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-6'>
                <p className='text-slate-700 leading-relaxed'>
                  Drylok vs RadonSeal comes down to your needs &ndash; quick and cheap vs durable and deep. Start with a moisture test and fix drainage, then seal. For serious issues, combine them or consult a pro. Based on 2026 reviews, RadonSeal edges out for overall durability, but Drylok shines for ease of use. For more on keeping your basement dry, see our <Link href='/articles/complete-basement-waterproofing-guide' className='text-indigo-600 underline hover:text-indigo-800'>complete waterproofing guide</Link> and <Link href='/articles/basement-efflorescence' className='text-indigo-600 underline hover:text-indigo-800'>efflorescence guide</Link>.
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
                <li><Link href='/articles/basement-efflorescence' className='text-indigo-600 hover:underline'>Basement Efflorescence Explained</Link></li>
                <li><Link href='/articles/basement-waterproofing-cost' className='text-indigo-600 hover:underline'>Waterproofing Cost 2026</Link></li>
                <li><Link href='/articles/basement-humidity' className='text-indigo-600 hover:underline'>Basement Humidity Guide</Link></li>
                <li><Link href='/articles/basement-mold-prevention' className='text-indigo-600 hover:underline'>Mold Prevention Guide</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>Get Expert Waterproofing Advice</h2>
          <p className='text-slate-300 mb-8 text-lg'>Not sure which sealer is right for your basement? Connect with local waterproofing pros for a free assessment.</p>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
