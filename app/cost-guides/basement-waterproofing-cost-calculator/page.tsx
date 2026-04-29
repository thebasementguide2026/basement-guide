import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import LeadForm from '@/components/LeadForm'
import WaterproofingCostCalculator from './Calculator'
import RelatedGuides from './RelatedGuides'
import QuoteCtaWrapper from './QuoteCtaWrapper'

export const metadata: Metadata = {
  title: 'Basement Waterproofing Cost Calculator (2026)',
  description: 'Use this basement waterproofing cost calculator to estimate drainage, french drain, drain tile, sump pump, and waterproofing costs based on basement size, moisture severity, project scope, and local pricing.',
  alternates: { canonical: 'https://thebasement.guide/cost-guides/basement-waterproofing-cost-calculator' },
  openGraph: {
    title: 'Basement Waterproofing Cost Calculator (2026)',
    description: 'Estimate basement waterproofing, french drain, drain tile, and sump pump costs based on size, severity, scope, finish level, and region.',
    url: 'https://thebasement.guide/cost-guides/basement-waterproofing-cost-calculator',
    siteName: 'The Basement Guide',
    type: 'website',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Basement Waterproofing Cost Calculator',
  headline: 'Basement Waterproofing Cost Calculator',
  description: 'Estimate basement waterproofing, french drain, drain tile, and sump pump costs based on basement size, moisture severity, project scope, finish level, and local pricing.',
  url: 'https://thebasement.guide/cost-guides/basement-waterproofing-cost-calculator',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'The Basement Guide',
    url: 'https://thebasement.guide',
  },
  about: [
    { '@type': 'Thing', name: 'Basement waterproofing' },
    { '@type': 'Thing', name: 'French drain' },
    { '@type': 'Thing', name: 'Interior drain tile' },
    { '@type': 'Thing', name: 'Sump pump installation' },
  ],
  datePublished: '2026-04-28',
  dateModified: '2026-04-28',
  publisher: {
    '@type': 'Organization',
    name: 'The Basement Guide',
    url: 'https://thebasement.guide',
    parentOrganization: { '@type': 'Organization', name: 'The Home Guide Network', url: 'https://thehome.guide' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://thebasement.guide/cost-guides/basement-waterproofing-cost-calculator' },
}

const faqs = [
  {
    q: 'How much does basement waterproofing cost?',
    a: 'Basement waterproofing typically costs $3,000 to $15,000, with most projects landing in the $5,000 to $9,000 range. Smaller spot fixes run about $500 to $2,500, full interior drain tile and sump systems generally fall between $4,000 and $12,000, and exterior excavation projects can reach $15,000 to $30,000 or more on larger or harder to access foundations. Final cost depends on basement size, severity of water intrusion, scope of work, finish level, and local labor pricing.',
  },
  {
    q: 'What is the difference between waterproofing and drainage?',
    a: 'Drainage manages water that is already entering or moving along the foundation, while waterproofing tries to stop water at the foundation itself. Drainage systems usually include interior drain tile, a sump pump pit, and a discharge line. Waterproofing usually involves exterior membranes, crystalline coatings, or interior wall sealants. Most modern basement projects combine both, because drainage handles bulk water and waterproofing reduces dampness, vapor, and seepage through walls and floors.',
  },
  {
    q: 'How much does an interior french drain cost?',
    a: 'An interior french drain typically costs $50 to $100 per linear foot installed, which puts a typical full perimeter system between $4,000 and $12,000 for an average residential basement. Pricing depends on basement size, concrete thickness, whether finished walls or flooring need to be removed and replaced, and whether the project includes a new sump pump pit and discharge line.',
  },
  {
    q: 'Does a finished basement cost more to waterproof?',
    a: 'Yes. Finished basements usually cost more to waterproof because demolition and restoration work add labor and material costs. Contractors typically need to remove portions of drywall, baseboards, flooring, and sometimes built-ins to access the foundation. Most estimates add 8 to 16 percent to the base waterproofing cost on a partially or fully finished basement, plus a separate restoration allowance to put the finished space back together after the work is complete.',
  },
  {
    q: 'Is this calculator a quote?',
    a: 'No. This calculator gives a planning estimate, not a binding contractor quote. The range is based on national pricing data and the inputs you provide. Use it to set a realistic budget, then request 2 to 3 written quotes from licensed local waterproofing contractors before committing to a specific project.',
  },
  {
    q: 'What should I ask a contractor after using this calculator?',
    a: 'Ask each contractor for a written proposal with a clear scope of work, materials, drainage layout, sump pump model, discharge line plan, warranty terms, and total price. Ask whether the warranty is transferable, who is responsible for any future water entry, and how they handle finished surfaces during the project. Confirm licensing and insurance, and ask for local references on similar basement projects.',
  },
  {
    q: 'How long does a basement waterproofing project usually take?',
    a: 'Most basement waterproofing projects take one day to two weeks depending on scope. A spot fix or sump pump replacement is often completed in one day. A full interior drain tile and sump pump installation typically takes 2 to 4 days. Exterior excavation projects with a waterproof membrane can take 1 to 2 weeks depending on basement size, weather, and site access. Restoration of finished surfaces is a separate timeline.',
  },
  {
    q: 'What does basement drain tile cost?',
    a: 'Basement drain tile generally costs $50 to $100 per linear foot for interior installations and $100 to $200 per linear foot for exterior installations. Exterior is more expensive because it requires excavation and waterproof membrane work. Total cost on most homes ranges from $4,000 to $15,000 depending on the path length and whether one wall, several walls, or the full perimeter is treated.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const RELATED = [
  { href: '/articles/basement-waterproofing-cost', title: 'Basement Waterproofing Cost (2026)', desc: 'Full national pricing data for basement waterproofing projects, including interior drainage, exterior excavation, sealants, and finished basement repair costs.' },
  { href: '/articles/french-drain-cost', title: 'French Drain Cost', desc: 'How interior basement drainage and french drain pricing break down by linear foot, including drain tile labor and sump pump tie-in costs.' },
  { href: '/articles/sump-pump-cost', title: 'Sump Pump Cost', desc: 'Pricing for sump pump units, professional installation, battery backups, and discharge line work in a typical basement.' },
  { href: '/articles/interior-basement-drainage-systems', title: 'Interior Basement Drainage Systems', desc: 'How interior drain tile, sump pump pits, and perimeter drainage systems are designed and installed inside a basement.' },
  { href: '/articles/interior-vs-exterior-waterproofing', title: 'Interior vs Exterior Waterproofing', desc: 'How interior drainage and exterior excavation compare on cost, disruption, durability, and which scenarios each is best for.' },
  { href: '/articles/complete-basement-waterproofing-guide', title: 'Complete Basement Waterproofing Guide', desc: 'A homeowner reference covering diagnosis, repair methods, materials, and what a quality basement waterproofing project looks like.' },
  { href: '/articles/sump-pump-buying-guide', title: 'Sump Pump Buying Guide', desc: 'How to choose the right sump pump for your basement, including capacity, switch type, horsepower, and backup power options.' },
  { href: '/articles/why-basement-floods-with-sump-pump', title: 'Why a Basement Still Floods With a Sump Pump', desc: 'Common reasons a basement floods even when a sump pump is installed, and what drainage upgrades typically fix the problem.' },
  { href: '/articles/basement-flooding-insurance', title: 'Basement Flooding Insurance', desc: 'What homeowners and flood insurance policies cover when a basement floods, and how the cause of water entry affects your claim.' },
  { href: '/articles/how-to-hire-basement-waterproofing-contractor', title: 'How to Hire a Basement Waterproofing Contractor', desc: 'How to compare basement waterproofing contractors, evaluate quotes line by line, and avoid common hiring mistakes.' },
]

export default function BasementWaterproofingCostCalculatorPage() {
  return (
    <div className='bg-white min-h-screen'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[{ label: 'Cost Guides', href: '/cost-guides' }, { label: 'Basement Waterproofing Cost Calculator' }]} />

      <article className='max-w-4xl mx-auto px-4 py-12 md:py-16'>

        {/* Header */}
        <div className='mb-8'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Cost Calculator</span>
            <span className='text-slate-500 text-sm'>Updated April 2026</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6'>
            Basement Waterproofing Cost Calculator
          </h1>

          <div className='space-y-4 text-lg text-slate-700 leading-relaxed'>
            <p>
              Use this basement waterproofing cost calculator to estimate what a drainage or waterproofing project may cost based on basement size, moisture severity, repair scope, and local pricing.
            </p>
            <p>
              It is built for homeowners who want a fast planning estimate before comparing contractor quotes, budgeting repairs, or deciding between interior drainage improvements and larger waterproofing work.
            </p>
          </div>

          <div className='mt-6 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3'>
            <p className='text-sm text-slate-700'>
              <span className='font-semibold text-slate-900'>Heads up:</span> The result is a planning estimate, not a contractor bid. Use it to set a realistic budget before requesting written quotes from licensed local professionals.
            </p>
          </div>
        </div>

        {/* Calculator */}
        <section id='calculator' className='mb-10'>
          <WaterproofingCostCalculator />
        </section>

        <p className='text-sm text-slate-600 italic mb-14'>
          Homeowners often use this estimate to decide whether they likely need a spot fix, an interior drainage system, or a larger exterior waterproofing project.
        </p>

        {/* Cost by method */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>Basement Waterproofing Cost by Method</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Typical basement waterproofing costs vary by repair method, project access, and whether the work is done inside or outside the foundation.
          </p>

          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-50 text-slate-700'>
                <tr>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Method</th>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Typical use case</th>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Typical price range</th>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Note</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Crack injection</td>
                  <td className='px-4 py-3 align-top'>Single foundation cracks letting in water</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>About $250 to $800 per crack</td>
                  <td className='px-4 py-3 align-top'>Best when leaks are isolated to one or two visible cracks rather than a wider drainage problem.</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Waterproof coatings and sealers</td>
                  <td className='px-4 py-3 align-top'>Damp walls and minor seepage on bare concrete or block</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>About $1,500 to $4,000</td>
                  <td className='px-4 py-3 align-top'>Useful for surface dampness and vapor, but not a fix for active hydrostatic water entry.</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Interior french drain and sump pump</td>
                  <td className='px-4 py-3 align-top'>Recurring seepage along part of the basement perimeter</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>About $3,000 to $8,000</td>
                  <td className='px-4 py-3 align-top'>A common starter system covering one or two affected walls plus a sump pump pit.</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Interior full perimeter drain tile system</td>
                  <td className='px-4 py-3 align-top'>Standing water or chronic seepage on multiple walls</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>About $4,000 to $12,000</td>
                  <td className='px-4 py-3 align-top'>Drain tile around the full footing tied into a sump system, often paired with wall vapor management.</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Exterior waterproofing and excavation</td>
                  <td className='px-4 py-3 align-top'>Heavy water issues, foundation cracks, or pre-finishing protection</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>About $8,000 to $15,000+</td>
                  <td className='px-4 py-3 align-top'>Most thorough option. Cost grows with depth, soil type, and limited site access.</td>
                </tr>
                <tr className='bg-slate-50/50'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Sump pump replacement or discharge upgrades</td>
                  <td className='px-4 py-3 align-top'>Aging or failed pump, frozen or undersized discharge line</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>Several hundred to a few thousand dollars</td>
                  <td className='px-4 py-3 align-top'>Scope ranges from a basic pump swap to a new pit, battery backup, and reworked discharge line.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-sm text-slate-600 mt-4'>
            Interior systems usually cost less up front than exterior excavation, but the right solution depends on where the water is entering and how severe the moisture problem is.
          </p>
        </section>

        {/* What affects cost */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>What affects basement waterproofing cost</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Most basement projects share the same handful of cost drivers. Knowing how each one moves the price helps you read contractor quotes more carefully and spot estimates that are unusually high or low.
          </p>
          <ul className='space-y-3'>
            <li className='flex gap-3'>
              <span className='mt-2 block h-2 w-2 rounded-full bg-teal-600 flex-shrink-0' />
              <p className='text-slate-700 leading-relaxed'><span className='font-semibold text-slate-900'>Basement size.</span> Larger basements add linear footage of drainage and more wall area to treat, which raises material and labor cost.</p>
            </li>
            <li className='flex gap-3'>
              <span className='mt-2 block h-2 w-2 rounded-full bg-teal-600 flex-shrink-0' />
              <p className='text-slate-700 leading-relaxed'><span className='font-semibold text-slate-900'>Severity of water intrusion.</span> Recurring seepage and standing water typically require a full perimeter drain system, while minor dampness sometimes responds to a smaller fix.</p>
            </li>
            <li className='flex gap-3'>
              <span className='mt-2 block h-2 w-2 rounded-full bg-teal-600 flex-shrink-0' />
              <p className='text-slate-700 leading-relaxed'><span className='font-semibold text-slate-900'>Interior vs exterior work.</span> Interior drainage is generally less invasive and less expensive than exterior excavation, which involves digging around the foundation and installing a waterproof membrane.</p>
            </li>
            <li className='flex gap-3'>
              <span className='mt-2 block h-2 w-2 rounded-full bg-teal-600 flex-shrink-0' />
              <p className='text-slate-700 leading-relaxed'><span className='font-semibold text-slate-900'>Finished basement demolition and repair.</span> Removing and replacing drywall, flooring, and trim adds both demolition cost and a restoration allowance.</p>
            </li>
            <li className='flex gap-3'>
              <span className='mt-2 block h-2 w-2 rounded-full bg-teal-600 flex-shrink-0' />
              <p className='text-slate-700 leading-relaxed'><span className='font-semibold text-slate-900'>Sump pump and discharge line work.</span> A new sump pump pit, pump, check valve, and exterior discharge line can add several hundred to a few thousand dollars depending on the layout.</p>
            </li>
            <li className='flex gap-3'>
              <span className='mt-2 block h-2 w-2 rounded-full bg-teal-600 flex-shrink-0' />
              <p className='text-slate-700 leading-relaxed'><span className='font-semibold text-slate-900'>Local labor pricing.</span> Waterproofing labor varies widely by region. Higher cost markets can run 10 to 20 percent above national averages for the same scope.</p>
            </li>
          </ul>
        </section>

        {/* What this calculator includes */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>What this calculator includes</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            The estimate is built from a national baseline cost per square foot, then adjusted by your inputs. It is intended to capture the work most homeowners actually pay for on a basement waterproofing project.
          </p>
          <ul className='space-y-2 text-slate-700 leading-relaxed list-disc pl-6'>
            <li>Interior drainage along the affected portion or full perimeter of the basement</li>
            <li>French drain and drain tile assumptions for interior trench work</li>
            <li>Sump pump tie-in including a pit, pump, and basic discharge line</li>
            <li>A restoration allowance that adjusts based on whether the basement is unfinished, partially finished, or fully finished</li>
            <li>A market-based planning estimate that reflects lower, average, or higher cost regions</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-6'>Frequently asked questions</h2>
          <div className='space-y-5'>
            {faqs.map((f, i) => (
              <div key={i} className='rounded-lg border border-slate-200 bg-white p-5'>
                <h3 className='text-lg font-bold text-slate-900 mb-2'>{f.q}</h3>
                <p className='text-slate-700 leading-relaxed'>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-6'>Related basement guides</h2>
          <RelatedGuides items={RELATED} />
        </section>

        {/* Beehiiv */}
        <BeehiivEmailCapture />

        {/* Lead form */}
        <QuoteCtaWrapper ctaLocation='page_bottom_lead_form'>
          <section className='mt-12 bg-slate-900 rounded-2xl py-12 px-6 md:px-10'>
            <div className='max-w-3xl mx-auto'>
              <div className='text-center mb-8'>
                <h2 id='get-quotes' className='text-2xl md:text-3xl font-black text-white mb-3'>Get free basement waterproofing quotes</h2>
                <p className='text-slate-300'>Once you have a planning estimate, the next step is comparing actual quotes from vetted local waterproofing professionals.</p>
              </div>
              <LeadForm />
            </div>
          </section>
        </QuoteCtaWrapper>

      </article>
    </div>
  )
}
