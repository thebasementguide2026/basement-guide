import type { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import LeadForm from '@/components/LeadForm'
import SumpPumpReplacementCalculator from './Calculator'
import RelatedGuides from './RelatedGuides'
import QuoteCtaWrapper from './QuoteCtaWrapper'

const PAGE_URL = 'https://thebasement.guide/cost-guides/sump-pump-replacement-cost'

export const metadata: Metadata = {
  title: 'Sump Pump Replacement Cost 2026: Real Prices, Calculator, and When to Replace | The Basement Guide',
  description: 'See real 2026 sump pump replacement costs, compare common project scenarios, and use the calculator to estimate your installed price based on pump type, backup system, labor scope, and region.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Sump Pump Replacement Cost 2026: Real Prices, Calculator, and When to Replace',
    description: 'Real 2026 sump pump replacement costs plus a calculator that estimates your installed price by pump type, backup system, labor scope, and region.',
    url: PAGE_URL,
    siteName: 'The Basement Guide',
    type: 'article',
    images: [{ url: 'https://thebasement.guide/sumppumpcalculator.jpg', width: 1200, height: 630, alt: 'Sump pump replacement cost calculator hero showing a basement sump pump installation' }],
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sump Pump Replacement Cost 2026',
  headline: 'Sump Pump Replacement Cost 2026: What You Will Actually Pay',
  description: 'Real 2026 sump pump replacement costs by pump type, scope, and backup system, plus a calculator that estimates installed price for replacement in an existing pit.',
  url: PAGE_URL,
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'The Basement Guide', url: 'https://thebasement.guide' },
  primaryImageOfPage: { '@type': 'ImageObject', url: 'https://thebasement.guide/sumppumpcalculator.jpg' },
  about: [
    { '@type': 'Thing', name: 'Sump pump replacement' },
    { '@type': 'Thing', name: 'Battery backup sump pump' },
    { '@type': 'Thing', name: 'Submersible sump pump' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How sump pump replacement works in an existing pit',
  description: 'The five-step process a licensed plumber follows when replacing a sump pump in an existing sump pit.',
  totalTime: 'PT3H',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '900' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Power off and prep', text: 'Kill power at the breaker, lay down protection around the pit, and confirm the discharge line is clear.' },
    { '@type': 'HowToStep', position: 2, name: 'Disconnect and remove the old pump', text: 'Unplug the existing pump, separate it from the discharge line, and lift it out of the pit.' },
    { '@type': 'HowToStep', position: 3, name: 'Inspect and clean the pit and valve setup', text: 'Check the pit for sediment, inspect or replace the check valve, and correct any small pit issues before installing the new pump.' },
    { '@type': 'HowToStep', position: 4, name: 'Install and reconnect the new pump', text: 'Set the new pump in the pit, level it, fit it to the discharge line, and tie it into any alarm or backup system.' },
    { '@type': 'HowToStep', position: 5, name: 'Test with water and verify operation', text: 'Add water to confirm the float kicks on, the pump moves water cleanly, and the pump shuts off at the right level. Test any backup separately.' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sump Pump Replacement Cost 2026: What You Will Actually Pay',
  description: 'Real 2026 sump pump replacement costs by pump type, scope, and backup system, plus a calculator that estimates installed price for replacement in an existing pit.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'The Basement Guide', url: 'https://thebasement.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Basement Guide',
    url: 'https://thebasement.guide',
    parentOrganization: { '@type': 'Organization', name: 'The Home Guide Network', url: 'https://thehome.guide' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  about: [
    { '@type': 'Thing', name: 'Sump pump replacement' },
    { '@type': 'Thing', name: 'Battery backup sump pump' },
    { '@type': 'Thing', name: 'Submersible sump pump' },
  ],
  image: 'https://thebasement.guide/sumppumpcalculator.jpg',
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${PAGE_URL}#calculator`,
  name: 'Sump Pump Replacement Cost Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description: 'Free interactive calculator that estimates installed cost for sump pump replacement in an existing pit. Inputs cover pump type, replacement scope, backup protection, basement risk level, electrical or alarm work, and regional cost factor.',
  url: PAGE_URL,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thebasement.guide' },
    { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: 'https://thebasement.guide/cost-guides' },
    { '@type': 'ListItem', position: 3, name: 'Sump Pump Replacement Cost', item: PAGE_URL },
  ],
}

const faqs = [
  {
    q: 'How much does it cost to replace a sump pump?',
    a: 'Most homeowners pay about $650 to $1,200 to replace a sump pump in an existing pit. Pedestal replacements often start around $400 to $900, and higher-capacity submersibles or pumps installed alongside backup protection or discharge work can run $1,500 to $3,000 or more. The final number depends on pump type, backup system, valve and discharge work, electrical updates, and local labor pricing.',
  },
  {
    q: 'Is it cheaper to repair or replace a sump pump?',
    a: 'On a pump that is past 7 to 10 years old, replacement is usually the better value. Repair often makes sense for newer pumps with a single failed component, like a stuck float switch or bad check valve. Once you start replacing motor or impeller parts on an older pump, the labor cost approaches a full replacement and you do not get a fresh warranty or improved reliability.',
  },
  {
    q: 'How much does a battery backup add?',
    a: 'A new battery backup setup typically adds $350 to $900 on top of a standard pump replacement. Stronger setups with larger batteries, higher-output backup pumps, or smart controllers can push the add-on to $700 to $1,400. The exact number depends on the hardware tier and how much extra plumbing or electrical work is needed at the pit.',
  },
  {
    q: 'How long does sump pump replacement take?',
    a: 'A straightforward replacement in an existing pit usually takes 1 to 3 hours. Replacements that include check valve work, discharge line changes, a battery backup install, or electrical upgrades typically run 3 to 6 hours. A clean swap with no surprises is often a same-day job for a single plumber.',
  },
  {
    q: 'Should I replace a sump pump before it fails?',
    a: 'Yes, if the pump is older than about 7 years, runs frequently, or has shown warning signs like grinding noises, longer run times, or short cycling. Proactive replacement is cheaper than emergency replacement during a storm and avoids the risk of basement flooding while you wait for a service call.',
  },
  {
    q: 'Is a submersible pump worth the extra cost?',
    a: 'For most finished or moderately at-risk basements, yes. Submersible pumps are quieter, last longer in a wet pit, and handle higher water volumes than pedestal pumps. Pedestal pumps remain a reasonable choice for unfinished basements with lower water volumes and tight budgets, especially when easy serviceability matters more than noise.',
  },
  {
    q: 'Can I replace a sump pump myself?',
    a: 'A skilled DIY homeowner can usually handle a basic same-model swap if the existing electrical and discharge plumbing are in good shape. Hire a pro when the project involves a finished basement, a different pump type, new check valve or discharge work, battery backup wiring, or any electrical changes that need to meet local code.',
  },
  {
    q: 'How accurate is this calculator?',
    a: 'The calculator gives a planning-grade range, not a quote. It uses 2026 national replacement pricing for pump type, scope, backup protection, basement risk, electrical work, and a regional cost multiplier. Most homeowners find their actual contractor quote falls inside the range, but local pricing, code requirements, and pit condition can push real-world numbers higher or lower.',
  },
  {
    q: 'Does the estimate include labor?',
    a: 'Yes. Every option in the calculator is built as an installed cost, meaning it includes parts and the labor a licensed plumber would typically charge to do that work. There is no hidden labor line. Diagnostic visits, after-hours service calls, and unusual code or permit fees are not included.',
  },
  {
    q: 'When should I upgrade to backup protection?',
    a: 'Upgrade to backup protection if you have a finished basement, store anything valuable below grade, live in a flood-prone or high-water-table area, or lose power during the same storms that cause heavy water entry. A battery backup is the single most effective add-on for protecting a basement during the exact moment a primary pump is most likely to fail.',
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
  { href: '/articles/sump-pump-cost', title: 'Sump Pump Cost', desc: 'National pricing data for sump pump units, professional installation, and discharge line work in a typical basement.' },
  { href: '/articles/sump-pump-buying-guide', title: 'Sump Pump Buying Guide', desc: 'How to choose the right sump pump for your basement, including capacity, switch type, horsepower, and backup options.' },
  { href: '/articles/best-sump-pumps-2026', title: 'Best Sump Pumps 2026', desc: 'Top-rated primary and backup sump pumps for residential basements based on real reliability and value.' },
  { href: '/articles/submersible-vs-pedestal-sump-pump', title: 'Submersible vs Pedestal Sump Pump', desc: 'How submersible and pedestal pumps compare on cost, noise, lifespan, and basement type, so you pick the right replacement.' },
  { href: '/articles/battery-vs-water-powered-sump-pumps', title: 'Battery vs Water-Powered Sump Pumps', desc: 'Battery backups versus water-powered backups for sump pumps, with a clear breakdown of cost, performance, and tradeoffs.' },
  { href: '/articles/backup-power-sump-pumps', title: 'Backup Power for Sump Pumps', desc: 'How to keep a sump pump running during a power outage, from battery backups to whole-home generators.' },
  { href: '/articles/smart-sump-pumps-guide', title: 'Smart Sump Pumps Guide', desc: 'Smart sump pump controllers, alarms, and monitoring options that pair well with a replacement project.' },
  { href: '/articles/complete-basement-waterproofing-guide', title: 'Complete Basement Waterproofing Guide', desc: 'A homeowner reference covering basement waterproofing, drainage, and how a sump pump fits inside a larger water management plan.' },
]

export default function SumpPumpReplacementCostPage() {
  return (
    <div className='bg-white min-h-screen'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Cost Guides', href: '/cost-guides' }, { label: 'Sump Pump Replacement Cost' }]} />

      {/* Hero image */}
      <div className='relative w-full bg-slate-900 overflow-hidden'>
        <div className='aspect-[16/7] md:aspect-[16/6] relative'>
          <Image src='/sumppumpcalculator.jpg' alt='Sump pump replacement cost calculator hero showing a basement sump pump installation' fill priority className='object-cover' sizes='100vw' />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent' />
        </div>
      </div>

      <article className='max-w-4xl mx-auto px-4 py-12 md:py-16'>

        {/* Header */}
        <div className='mb-8'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Cost Guide</span>
            <span className='text-slate-500 text-sm'>Updated May 2026</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6'>
            Sump Pump Replacement Cost 2026: What You Will Actually Pay
          </h1>

          <div className='space-y-4 text-lg text-slate-700 leading-relaxed'>
            <p>
              Replacing a sump pump in an existing pit usually costs about <span className='font-semibold'>$650 to $1,200</span> installed. Pedestal replacements can start around <span className='font-semibold'>$400 to $900</span>, and more complex replacements with battery backup, finished-basement protection, or extra discharge and electrical work can run <span className='font-semibold'>$1,500 to $3,000</span> or more.
            </p>
            <p>
              The biggest cost drivers are pump type, whether you add or upgrade a backup system, any check valve or discharge line work, electrical or alarm updates at the pit, and the local labor market. Everything else, like pit access, finished flooring near the pit, and emergency timing, sits on top of those five.
            </p>
          </div>

          <div className='mt-6 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3'>
            <p className='text-sm text-slate-700'>
              <span className='font-semibold text-slate-900'>Heads up:</span> This page focuses on replacement in an existing sump pit, not first-time sump pit installation. The calculator and pricing are tuned for that scenario.
            </p>
          </div>
        </div>

        {/* Calculator intro */}
        <p className='text-slate-700 leading-relaxed mb-4'>
          Use the calculator below to estimate your installed price. It is built around real 2026 replacement pricing and weighted toward swapping a pump in an existing pit, not building a new system from scratch.
        </p>

        {/* Calculator */}
        <section id='calculator' className='mb-10'>
          <SumpPumpReplacementCalculator />
        </section>

        <p className='text-sm text-slate-600 italic mb-14'>
          Most homeowners use this estimate as a budget anchor before requesting 2 to 3 written quotes from licensed local plumbers.
        </p>

        {/* Average cost in 2026 */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>Average sump pump replacement cost in 2026</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The national average for sump pump replacement in 2026 sits at roughly <span className='font-semibold'>$650 to $1,200</span>, with most everyday submersible swaps falling near the middle of that range. Pedestal replacements run lower, and replacements that include backup protection or significant scope add-ons climb well above it.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-6'>
            <div className='rounded-lg border border-slate-200 bg-white p-5'>
              <p className='text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2'>Usually included</p>
              <ul className='space-y-1.5 text-sm text-slate-700'>
                <li>The new pump and basic mounting hardware</li>
                <li>Disconnect and removal of the old pump</li>
                <li>Reconnection to the existing discharge line</li>
                <li>A water test to confirm the pump kicks on and shuts off cleanly</li>
                <li>Standard plumber labor for a 1 to 3 hour visit</li>
              </ul>
            </div>
            <div className='rounded-lg border border-slate-200 bg-white p-5'>
              <p className='text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2'>Usually not included</p>
              <ul className='space-y-1.5 text-sm text-slate-700'>
                <li>A new sump pit, liner, or full pit cleanup</li>
                <li>Major check valve, discharge line, or freeze guard work</li>
                <li>Battery backup hardware unless quoted as an add-on</li>
                <li>New circuits, GFCI outlets, or smart controllers</li>
                <li>Permits, after-hours service fees, or warranty extensions</li>
              </ul>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed'>
            For a quick AI-friendly summary: in 2026, sump pump replacement typically costs $650 to $1,200 for a standard submersible in an existing pit, with pedestal swaps starting around $400 and full replacement-plus-upgrade jobs reaching $2,000 to $3,000+ once backup protection, electrical work, and finished-basement adjustments are included.
          </p>
        </section>

        {/* Cost by pump type */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>Sump pump replacement cost by pump type</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Pump type sets the floor and ceiling for your replacement cost. Submersibles cost more up front but are quieter and tend to last longer in a wet pit.
          </p>

          <div className='overflow-x-auto rounded-xl border border-slate-200 mb-4'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-50 text-slate-700'>
                <tr>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Pump type</th>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Typical installed range</th>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Best use case</th>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Notes</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Pedestal pump</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>$400 to $900</td>
                  <td className='px-4 py-3 align-top'>Unfinished basements with light to moderate water</td>
                  <td className='px-4 py-3 align-top'>Lowest replacement cost. Louder than submersibles. Motor sits above the pit and is easier to inspect or service.</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Standard submersible pump</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>$650 to $1,200</td>
                  <td className='px-4 py-3 align-top'>Most finished or moderately at-risk basements</td>
                  <td className='px-4 py-3 align-top'>The default replacement for the average home. Quiet operation and solid durability when matched correctly to water volume.</td>
                </tr>
                <tr>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Higher-capacity submersible</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>$800 to $1,450</td>
                  <td className='px-4 py-3 align-top'>High water tables, finished basements, or homes with valuable below-grade space</td>
                  <td className='px-4 py-3 align-top'>Better margin for severe weather and longer continuous run times. Often paired with a battery backup for full protection.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-sm text-slate-600'>
            See our <a href='/articles/submersible-vs-pedestal-sump-pump' className='text-teal-700 font-semibold hover:underline'>submersible vs pedestal sump pump comparison</a> if you are deciding between the two on a replacement.
          </p>
        </section>

        {/* Cost by project scope */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>Sump pump replacement cost by project scope</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Most quotes break down into a base pump replacement plus a few scope items. Knowing each one helps you read a contractor estimate line by line.
          </p>

          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-50 text-slate-700'>
                <tr>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Scope</th>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Typical add-on or total</th>
                  <th scope='col' className='text-left font-semibold px-4 py-3 border-b border-slate-200'>What is included</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Simple pump swap</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>$0 to $100 over base</td>
                  <td className='px-4 py-3 align-top'>Same-model or comparable replacement reusing the existing pit, check valve, and discharge line.</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Pump plus check valve work</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>$50 to $150 over base</td>
                  <td className='px-4 py-3 align-top'>New check valve, fresh fittings, and a clean reconnection above the pit. Common on older systems.</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Pump plus discharge line work</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>$150 to $350 over base</td>
                  <td className='px-4 py-3 align-top'>Repairs, rerouting, or upgrades to the discharge line, including freeze guards or longer exterior runs.</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50/50'>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Pump plus pit cleanup or minor rework</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>$150 to $300 over base</td>
                  <td className='px-4 py-3 align-top'>Sediment removal, basic pit liner repair, and small adjustments to make the new pump sit and run correctly.</td>
                </tr>
                <tr>
                  <td className='px-4 py-3 font-semibold text-slate-900 align-top'>Pump plus backup and electrical upgrades</td>
                  <td className='px-4 py-3 align-top whitespace-nowrap'>$1,500 to $3,000+ total</td>
                  <td className='px-4 py-3 align-top'>Replacement plus a battery backup tier and an alarm or dedicated electrical upgrade at the pit.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Backup systems */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>How backup systems affect replacement cost</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Backup protection is the single biggest add-on most homeowners decide on during a sump pump replacement. A new battery backup typically adds <span className='font-semibold'>$350 to $900</span>. A stronger setup with a larger battery, higher-output backup pump, or a smart controller can add <span className='font-semibold'>$700 to $1,400</span>.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Backup protection is most worth it when you have a finished basement, store anything valuable below grade, or live in an area where storms knock out power and dump water at the same time. For unfinished basements with low water volume, you can often skip the upgrade and put the savings toward a stronger primary pump.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            One important distinction: replacing a primary pump is a routine job. Building a layered system with a primary submersible, a battery backup, an alarm, and dedicated electrical is a different project. The calculator handles both, but pay attention to the project profile in the result so you understand which scenario your quote really reflects. For a deeper dive, read our notes on <a href='/articles/battery-vs-water-powered-sump-pumps' className='text-teal-700 font-semibold hover:underline'>battery vs water-powered backups</a> and <a href='/articles/backup-power-sump-pumps' className='text-teal-700 font-semibold hover:underline'>backup power options</a>.
          </p>
        </section>

        {/* Repair vs replace */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>Sump pump repair vs replacement</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Repair makes sense when you have a relatively young pump (under 5 to 7 years) with a clear, single point of failure: a stuck float switch, a failed check valve, or a clogged impeller. The fix is usually inexpensive and the rest of the system has plenty of life left.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Replacement is the smarter move when several signals stack up at once:
          </p>
          <ul className='space-y-2 text-slate-700 leading-relaxed list-disc pl-6 mb-4'>
            <li>The pump is older than 7 to 10 years</li>
            <li>You hear grinding, humming, or rattling that was not there before</li>
            <li>You see rust, corrosion, or visible wear on the housing</li>
            <li>The pump short-cycles or runs much longer than it used to</li>
            <li>It has failed or struggled during a recent storm or power event</li>
            <li>You have already paid for one or two service calls in the last year or two</li>
          </ul>
          <p className='text-slate-700 leading-relaxed'>
            Rule of thumb: if the repair quote is more than 50 percent of a full replacement and the pump is past 7 years old, replace it. You will get a fresh warranty, a known reliable unit, and a much lower chance of an emergency call during the next storm.
          </p>
        </section>

        {/* DIY vs pro */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>DIY vs professional replacement</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A skilled homeowner can usually handle a clean same-model swap in an existing pit. If the existing pump is the same horsepower and switch type, the discharge plumbing is in good shape, and the electrical at the pit is already correct, the job is mostly about disconnecting, lifting out, dropping in, and reconnecting.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Hire a professional when any of these are true:
          </p>
          <ul className='space-y-2 text-slate-700 leading-relaxed list-disc pl-6 mb-4'>
            <li>The basement is finished and water damage would be expensive</li>
            <li>You are switching pump type, capacity, or switch style</li>
            <li>The check valve or discharge line needs work</li>
            <li>You are adding battery backup wiring, an alarm, or a smart controller</li>
            <li>The electrical at the pit is not GFCI-protected, dedicated, or up to current code</li>
          </ul>
          <p className='text-slate-700 leading-relaxed'>
            A professional replacement also gives you a real warranty path if anything goes wrong in the next storm. For most homeowners, that peace of mind is worth the few hundred dollars in labor.
          </p>
        </section>

        {/* What replacement involves */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>What sump pump replacement actually involves</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            A professional replacement in an existing pit follows a predictable five-step pattern.
          </p>
          <ol className='space-y-4 list-decimal pl-6 text-slate-700 leading-relaxed'>
            <li>
              <span className='font-semibold text-slate-900'>Power off and prep.</span> The plumber kills power at the breaker, lays down protection around the pit, and confirms the discharge line is clear.
            </li>
            <li>
              <span className='font-semibold text-slate-900'>Disconnect and remove the old pump.</span> The existing pump is unplugged, separated from the discharge line, and lifted out of the pit.
            </li>
            <li>
              <span className='font-semibold text-slate-900'>Inspect and clean the pit and valve setup.</span> The pit is checked for sediment, the check valve is inspected or replaced, and any small pit issues are corrected before the new pump goes in.
            </li>
            <li>
              <span className='font-semibold text-slate-900'>Install and reconnect the new pump.</span> The new pump is set in the pit, leveled, fitted to the discharge line, and tied into the alarm or backup if one is included.
            </li>
            <li>
              <span className='font-semibold text-slate-900'>Test with water and verify operation.</span> The plumber adds water to confirm the float kicks on, the pump moves water cleanly, and the pump shuts off at the right level. A backup, if installed, is tested separately.
            </li>
          </ol>
        </section>

        {/* Lifespan */}
        <section className='mb-14'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>How long a new sump pump should last</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A quality submersible sump pump generally lasts <span className='font-semibold'>7 to 10 years</span>. Pedestal pumps often last <span className='font-semibold'>10 to 15 years</span> because the motor stays out of the water, but they tend to be louder and move less water.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Lifespan is shortened by frequent cycling, sediment-heavy pits, undersized pumps fighting heavy water, low-quality switches, and electrical issues at the pit. A pump in a high-water-table home running 50+ cycles a day will not last as long as the same pump in a home that runs it 5 times a week.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            Simple maintenance habits help: test the pump twice a year by pouring water in the pit, clear sediment annually, replace the check valve when it gets noisy, and inspect the discharge line before the rainy season. For long-term planning, see our <a href='/articles/sump-pump-cost' className='text-teal-700 font-semibold hover:underline'>full sump pump cost overview</a> and the <a href='/articles/sump-pump-buying-guide' className='text-teal-700 font-semibold hover:underline'>sump pump buying guide</a>.
          </p>
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
                <h2 id='get-quotes' className='text-2xl md:text-3xl font-black text-white mb-3'>Need a sump pump replacement quote you can act on?</h2>
                <p className='text-slate-300'>Once you have a planning estimate, the next step is comparing actual quotes from vetted local pros so you can choose pump, backup, and labor scope with confidence.</p>
              </div>
              <LeadForm />
            </div>
          </section>
        </QuoteCtaWrapper>

      </article>
    </div>
  )
}
