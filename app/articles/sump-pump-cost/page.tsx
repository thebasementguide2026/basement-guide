import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sump Pump Installation Cost 2026: What You Will Actually Pay',
  description: 'Sump pump installation costs $600-$2,500 in 2026. See cost breakdowns by pump type, what affects pricing, DIY vs. pro, and how to avoid overpaying.',
};

export default function SumpPumpCost() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/images/sumppump5.jpg'
          alt='Sump pump installation in a basement pit'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-cyan-500'></div>
            <span className='text-cyan-400 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Sump Pump <br />
            <span className='text-cyan-400'>Installation Cost 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl leading-relaxed'>
            Installing a sump pump typically costs $600&ndash;$2,500, with most homeowners paying around $1,200 for a standard submersible pump with professional installation.
          </p>
          <div className='flex items-center space-x-4 mt-8'>
            <div className='w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-medium'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated March 2026 &nbsp;&middot;&nbsp; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* Introduction */}
        <div className='prose prose-lg max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed mb-6'>
            If you&apos;re replacing an existing pump (pit already dug, electrical already run), expect to pay closer to $400&ndash;$700. A brand-new installation with pit excavation in a concrete floor will land on the higher end. This guide breaks down what drives those numbers so you can budget accurately and avoid overpaying.
          </p>
        </div>

        {/* How Much Does It Cost */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>How Much Does It Cost to Install a Sump Pump?</h2>
        <div className='prose prose-lg max-w-none'>
          <p className='text-slate-600 leading-relaxed mb-6'>
            Short answer: <strong>$600&ndash;$2,500 installed</strong> for most residential jobs. The national average lands around $1,200. That range exists because there&apos;s a massive difference between a simple swap (pull the old pump, drop in a new one) and a first-time installation that requires cutting through a concrete slab, digging a pit, running discharge lines, and adding electrical.
          </p>
        </div>

        <div className='overflow-x-auto mb-8'>
          <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm'>
            <thead>
              <tr className='bg-slate-900 text-white'>
                <th className='text-left p-4 font-bold'>Component</th>
                <th className='text-left p-4 font-bold'>Typical Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-slate-200'>
                <td className='p-4 text-slate-700 font-medium'>Pump unit only</td>
                <td className='p-4 text-slate-600'>$100&ndash;$800</td>
              </tr>
              <tr className='border-b border-slate-200 bg-slate-50'>
                <td className='p-4 text-slate-700 font-medium'>Labor (replacement)</td>
                <td className='p-4 text-slate-600'>$200&ndash;$500</td>
              </tr>
              <tr className='border-b border-slate-200'>
                <td className='p-4 text-slate-700 font-medium'>Labor (new installation)</td>
                <td className='p-4 text-slate-600'>$500&ndash;$1,700</td>
              </tr>
              <tr className='border-b border-slate-200 bg-slate-50'>
                <td className='p-4 text-slate-700 font-medium'>Sump pit excavation (concrete floor)</td>
                <td className='p-4 text-slate-600'>$500&ndash;$1,000</td>
              </tr>
              <tr className='border-b border-slate-200'>
                <td className='p-4 text-slate-700 font-medium'>Discharge line &amp; check valve</td>
                <td className='p-4 text-slate-600'>$50&ndash;$300</td>
              </tr>
              <tr className='bg-slate-50'>
                <td className='p-4 text-slate-700 font-medium'>Permit (if required)</td>
                <td className='p-4 text-slate-600'>$50&ndash;$200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg my-10'>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Key insight:</strong> Labor makes up 65&ndash;80% of most sump pump projects. The pump itself is usually the cheapest part.
          </p>
        </div>

        {/* Cost by Pump Type */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>How Much Does a Sump Pump Cost by Type?</h2>
        <p className='text-slate-600 leading-relaxed mb-8'>
          The type of pump you choose is the single biggest factor in your final bill (aside from whether a pit already exists).
        </p>

        <div className='grid md:grid-cols-2 gap-6 mb-12'>
          {/* Submersible */}
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-200'>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>Submersible Pumps</h3>
            <p className='text-2xl font-black text-cyan-600 mb-3'>$800&ndash;$2,000 Installed</p>
            <p className='text-slate-600 text-sm leading-relaxed mb-3'>
              Sit entirely inside the sump pit, submerged in water. They&apos;re the industry standard &mdash; quieter, more powerful, and hidden from view. If you&apos;re <Link href='/articles/how-to-finish-a-basement' className='text-cyan-600 underline hover:text-cyan-700'>finishing your basement</Link> or have a high water table, this is almost certainly what you want.
            </p>
            <p className='text-slate-500 text-sm'>Lifespan: 7&ndash;15 years</p>
          </div>

          {/* Pedestal */}
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-200'>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>Pedestal Pumps</h3>
            <p className='text-2xl font-black text-cyan-600 mb-3'>$400&ndash;$900 Installed</p>
            <p className='text-slate-600 text-sm leading-relaxed mb-3'>
              Mount the motor on a column above the pit, keeping it out of the water. Cheaper, last longer, and easier to service. The downside: noticeably louder and lower pumping power. Best for homes with mild water issues and unfinished basements. See our <Link href='/articles/submersible-vs-pedestal-sump-pump' className='text-cyan-600 underline hover:text-cyan-700'>submersible vs. pedestal comparison</Link>.
            </p>
            <p className='text-slate-500 text-sm'>Lifespan: 25&ndash;30 years</p>
          </div>

          {/* Water-Powered Backup */}
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-200'>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>Water-Powered Backup Pumps</h3>
            <p className='text-2xl font-black text-cyan-600 mb-3'>$300&ndash;$1,000 Installed</p>
            <p className='text-slate-600 text-sm leading-relaxed mb-3'>
              Use your home&apos;s municipal water pressure to create suction. No electricity, no batteries to replace. They&apos;re a backup only &mdash; not a primary pump. Require 40+ PSI water pressure, and some municipalities restrict them due to backflow concerns. See our <Link href='/articles/battery-vs-water-powered-sump-pumps' className='text-cyan-600 underline hover:text-cyan-700'>battery vs. water-powered comparison</Link>.
            </p>
            <p className='text-slate-500 text-sm'>Lifespan: 10&ndash;20 years</p>
          </div>

          {/* Battery Backup */}
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-200'>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>Battery Backup Systems</h3>
            <p className='text-2xl font-black text-cyan-600 mb-3'>$600&ndash;$2,000 Installed</p>
            <p className='text-slate-600 text-sm leading-relaxed mb-3'>
              A secondary pump connected to a deep-cycle battery that activates automatically when the power goes out or the primary pump fails. The battery needs replacement every 3&ndash;5 years ($100&ndash;$200). One of the smartest upgrades you can make.
            </p>
            <p className='text-slate-500 text-sm'>Lifespan: 5&ndash;7 years</p>
          </div>
        </div>

        <div className='bg-slate-900 text-white rounded-xl p-6 mb-12'>
          <p className='text-slate-300 leading-relaxed'>
            <strong className='text-white'>Our take:</strong> If you&apos;re spending money on a sump pump, adding a battery backup is almost always worth it. According to FEMA, just one inch of flooding can cause $25,000 in damage. A $600&ndash;$1,200 backup system is cheap insurance against that scenario.
          </p>
        </div>

        {/* Factors Affecting Cost */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>What Factors Affect Sump Pump Installation Cost?</h2>
        <p className='text-slate-600 leading-relaxed mb-8'>Beyond pump type, several factors can push your total higher or lower:</p>

        <div className='space-y-4 mb-12'>
          <div className='bg-slate-50 rounded-lg p-5 border border-slate-200'>
            <h4 className='font-bold text-slate-900 mb-2'>Existing pit vs. new excavation</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>If you already have a sump pit from a previous pump, you&apos;ll save $500&ndash;$1,000 right off the top. New installations in concrete-slab basements require cutting and jackhammering &mdash; the most labor-intensive and expensive part of the job.</p>
          </div>
          <div className='bg-slate-50 rounded-lg p-5 border border-slate-200'>
            <h4 className='font-bold text-slate-900 mb-2'>Floor type</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>Dirt-floor basements and <Link href='/articles/crawl-space-encapsulation-guide' className='text-cyan-600 underline hover:text-cyan-700'>crawl spaces</Link> are cheaper and faster to dig than concrete.</p>
          </div>
          <div className='bg-slate-50 rounded-lg p-5 border border-slate-200'>
            <h4 className='font-bold text-slate-900 mb-2'>Horsepower</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>Most homes do fine with a 1/3 HP pump. High water table areas may need 1/2 HP or 3/4 HP, which costs 20&ndash;30% more for the unit. Our <Link href='/articles/sump-pump-buying-guide' className='text-cyan-600 underline hover:text-cyan-700'>sump pump buying guide</Link> covers sizing in detail.</p>
          </div>
          <div className='bg-slate-50 rounded-lg p-5 border border-slate-200'>
            <h4 className='font-bold text-slate-900 mb-2'>Discharge line routing</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>The pump needs to push water somewhere &mdash; typically to the yard, a storm drain, or a dry well. Longer runs or tricky routing (through finished walls, under landscaping) add labor.</p>
          </div>
          <div className='bg-slate-50 rounded-lg p-5 border border-slate-200'>
            <h4 className='font-bold text-slate-900 mb-2'>Electrical work</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>Sump pumps need a dedicated GFCI outlet. If one doesn&apos;t exist near the pit, adding one runs $150&ndash;$400 depending on your panel and local codes.</p>
          </div>
          <div className='bg-slate-50 rounded-lg p-5 border border-slate-200'>
            <h4 className='font-bold text-slate-900 mb-2'>Local labor rates</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>A plumber in a major metro charges $100&ndash;$150/hour. In rural areas, $50&ndash;$80/hour is more typical. Most standard installations take 3&ndash;6 hours.</p>
          </div>
          <div className='bg-slate-50 rounded-lg p-5 border border-slate-200'>
            <h4 className='font-bold text-slate-900 mb-2'>Finished vs. unfinished basement</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>Working in a <Link href='/articles/basement-finishing-cost' className='text-cyan-600 underline hover:text-cyan-700'>finished basement</Link> means protecting existing flooring, drywall, and fixtures &mdash; or repairing them afterward. This can easily add $200&ndash;$500 to the project.</p>
          </div>
        </div>

        {/* DIY Section */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Can I Install a Sump Pump Myself?</h2>
        <p className='text-slate-600 leading-relaxed mb-8'>You can, but whether you should depends on the situation.</p>

        <div className='grid md:grid-cols-2 gap-6 mb-12'>
          <div className='bg-green-50 border border-green-200 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-green-800 mb-3'>Reasonable DIY Scenarios</h3>
            <p className='text-slate-600 text-sm leading-relaxed'>Replacing an existing submersible pump in a working pit. This is essentially: unplug the old pump, disconnect the discharge, lift it out, drop the new one in, reconnect. Materials run $150&ndash;$500, and you&apos;ll save $200&ndash;$500 in labor. If you&apos;re comfortable with basic plumbing connections and your pit is already wired, this is a manageable weekend project.</p>
          </div>
          <div className='bg-red-50 border border-red-200 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-red-800 mb-3'>Leave It to a Pro</h3>
            <p className='text-slate-600 text-sm leading-relaxed'>First-time installations that require cutting through concrete, digging a pit, running new discharge lines, or adding electrical circuits. Mistakes can lead to improper drainage, electrical hazards, or a pump that runs constantly. The cost of a botched DIY install (water damage, <Link href='/articles/mold-remediation-cost' className='text-cyan-600 underline hover:text-cyan-700'>mold remediation</Link>, or foundation issues) will far exceed what you&apos;d have paid a plumber. Professional <Link href='/articles/basement-waterproofing-cost' className='text-cyan-600 underline hover:text-cyan-700'>basement waterproofing</Link> to fix water problems can run $3,000&ndash;$10,000.</p>
          </div>
        </div>

        {/* How Long Does a Sump Pump Last */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>How Long Does a Sump Pump Last?</h2>
        <div className='prose prose-lg max-w-none'>
          <p className='text-slate-600 leading-relaxed mb-6'>
            Plan on <strong>7&ndash;10 years for a submersible pump</strong> and up to <strong>25&ndash;30 years for a pedestal pump</strong> with proper maintenance. Battery backup pumps typically last 5&ndash;7 years.
          </p>
          <p className='text-slate-600 leading-relaxed mb-6'>
            Signs it&apos;s time for a replacement include strange noises (grinding, rattling), the pump cycling on and off frequently, visible rust or corrosion, or the pump simply not keeping up during heavy rain. If your pump is over 7 years old and repairs would cost more than half the price of a new unit, replacement is the smarter move.
          </p>
          <p className='text-slate-600 leading-relaxed mb-6'>
            Annual maintenance costs run $100&ndash;$300 for a professional inspection, though basic upkeep (cleaning the inlet screen, testing the float switch, pouring water in to verify operation) is easy to do yourself each spring. Our <Link href='/articles/spring-basement-checklist' className='text-cyan-600 underline hover:text-cyan-700'>spring basement checklist</Link> walks through the full process.
          </p>
        </div>

        {/* Home Value */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Does a Sump Pump Increase Home Value?</h2>
        <div className='prose prose-lg max-w-none'>
          <p className='text-slate-600 leading-relaxed mb-6'>
            A sump pump won&apos;t dramatically increase your appraised value the way a kitchen renovation would, but it does something arguably more important &mdash; it prevents value-destroying damage and removes a red flag for buyers.
          </p>
          <p className='text-slate-600 leading-relaxed mb-6'>
            A home inspection that reveals no water management system in a flood-prone area is a deal-killer for many buyers. Conversely, a well-maintained sump pump with a battery backup signals that the homeowner has taken <Link href='/articles/complete-basement-waterproofing-guide' className='text-cyan-600 underline hover:text-cyan-700'>waterproofing</Link> seriously. Some insurance companies also offer premium discounts for homes with professionally installed sump pumps, according to the <a href='https://www.iii.org/' target='_blank' rel='noopener noreferrer' className='text-cyan-600 underline hover:text-cyan-700'>Insurance Information Institute</a>.
          </p>
          <p className='text-slate-600 leading-relaxed mb-6'>
            If you&apos;re considering a sump pump as part of a larger basement project, our <Link href='/articles/basement-finishing-cost' className='text-cyan-600 underline hover:text-cyan-700'>basement finishing cost guide</Link> covers how a dry, finished basement affects overall <Link href='/articles/waterproofing-home-appraisal-value' className='text-cyan-600 underline hover:text-cyan-700'>home value</Link>.
          </p>
        </div>

        {/* Sump Pump vs French Drain */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Sump Pump vs. French Drain: Do You Need Both?</h2>
        <div className='bg-slate-50 rounded-xl p-8 mb-12 border border-slate-200'>
          <p className='text-slate-600 leading-relaxed mb-4'>
            A sump pump and a <Link href='/articles/french-drain-cost' className='text-cyan-600 underline hover:text-cyan-700'>French drain</Link> solve different parts of the same problem. The French drain collects water from around your foundation and channels it to the sump pit. The sump pump then evacuates that water away from the house.
          </p>
          <p className='text-slate-600 leading-relaxed mb-4'>
            Without a drain, the pump only handles water that happens to reach the pit on its own. Without a pump, the drain has nowhere to send the water. In many <Link href='/articles/complete-basement-waterproofing-guide' className='text-cyan-600 underline hover:text-cyan-700'>waterproofing systems</Link>, you need both working together. See our <Link href='/articles/french-drain-vs-sump-pump' className='text-cyan-600 underline hover:text-cyan-700'>French drain vs. sump pump comparison</Link> for more detail.
          </p>
          <div className='bg-cyan-50 border border-cyan-200 rounded-lg p-4'>
            <p className='text-sm text-cyan-800'><strong>Cost note:</strong> A full interior French drain system with sump pump typically runs $4,000&ndash;$12,000. If you&apos;re getting quotes for a sump pump, ask the contractor whether your current drainage situation is adequate.</p>
          </div>
        </div>

        {/* How to Avoid Overpaying */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>How to Avoid Overpaying</h2>
        <div className='space-y-4 mb-12'>
          <div className='bg-green-50 border border-green-200 rounded-lg p-5'>
            <h4 className='font-bold text-green-800 mb-2'>Get 3 quotes minimum</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>Pricing varies wildly. We&apos;ve seen identical jobs quoted at $800 by one contractor and $2,200 by another. The low bid isn&apos;t always best, but the spread tells you what&apos;s reasonable in your area. <Link href='/articles/how-to-hire-basement-waterproofing-contractor' className='text-cyan-600 underline hover:text-cyan-700'>Request free quotes below</Link>.</p>
          </div>
          <div className='bg-green-50 border border-green-200 rounded-lg p-5'>
            <h4 className='font-bold text-green-800 mb-2'>Ask what&apos;s included</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>Some quotes bundle the pit, pump, discharge line, and check valve. Others price the pump separately and tack on extras. Make sure you&apos;re comparing apples to apples.</p>
          </div>
          <div className='bg-green-50 border border-green-200 rounded-lg p-5'>
            <h4 className='font-bold text-green-800 mb-2'>Don&apos;t skip the backup</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>It&apos;s tempting to save $600&ndash;$1,200 by passing on a battery backup. But your sump pump is most needed during storms, which are exactly when power outages happen. The math doesn&apos;t work in your favor if you skip it.</p>
          </div>
          <div className='bg-green-50 border border-green-200 rounded-lg p-5'>
            <h4 className='font-bold text-green-800 mb-2'>Check for permits</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>Some municipalities require a plumbing permit for sump pump installation. Your contractor should handle this, but ask. Unpermitted work can create problems when you sell.</p>
          </div>
          <div className='bg-green-50 border border-green-200 rounded-lg p-5'>
            <h4 className='font-bold text-green-800 mb-2'>Consider the whole system</h4>
            <p className='text-slate-600 text-sm leading-relaxed'>If you&apos;re already paying a contractor to cut concrete and install a pit, it may be worth adding a French drain at the same time. Bundling the work saves on labor since the most expensive part &mdash; breaking up the floor &mdash; only happens once.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-8'>Frequently Asked Questions</h2>

        <div className='space-y-6 mb-12'>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>How much does it cost to replace an existing sump pump?</h3>
            <p className='text-slate-600 leading-relaxed'>Replacing a pump in an existing pit costs $400&ndash;$700 on average, including the new unit and about an hour of labor. No excavation or new plumbing is needed.</p>
          </div>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>How much electricity does a sump pump use?</h3>
            <p className='text-slate-600 leading-relaxed'>A typical sump pump adds $30&ndash;$50 per year to your electric bill. During dry periods, it barely runs at all. During heavy rain, it may cycle frequently but still uses relatively little power.</p>
          </div>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Should I hire a plumber or a waterproofing company?</h3>
            <p className='text-slate-600 leading-relaxed'>For a simple replacement, a licensed plumber is fine and often cheaper. For a new installation &mdash; especially if you also need drainage work &mdash; a <Link href='/articles/how-to-hire-basement-waterproofing-contractor' className='text-cyan-600 underline hover:text-cyan-700'>waterproofing contractor</Link> may be a better fit since they understand the full water management picture.</p>
          </div>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Does homeowners insurance cover sump pump failure?</h3>
            <p className='text-slate-600 leading-relaxed'>Standard policies typically do not cover flooding from sump pump failure or backup. You usually need a specific water backup and sump pump overflow endorsement, which runs $40&ndash;$100/year. It&apos;s worth adding &mdash; ask your agent. See our <Link href='/articles/basement-flooding-insurance' className='text-cyan-600 underline hover:text-cyan-700'>basement flooding insurance guide</Link> for details.</p>
          </div>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>What size sump pump do I need?</h3>
            <p className='text-slate-600 leading-relaxed'>For most residential basements, a 1/3 HP submersible pump handles the job. If your water table is high, your discharge line is long, or you deal with heavy seasonal water, step up to 1/2 HP. Our <Link href='/articles/sump-pump-buying-guide' className='text-cyan-600 underline hover:text-cyan-700'>sump pump buying guide</Link> covers sizing in detail.</p>
          </div>
        </div>

      </article>

      {/* Related Guides */}
      <section className='bg-slate-50 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-black text-slate-900 mb-10'>Related Guides</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Link href='/articles/sump-pump-buying-guide' className='bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Sump Pump Buying Guide</h3>
              <p className='text-slate-500 text-sm'>How to choose the right sump pump for your home.</p>
            </Link>
            <Link href='/articles/french-drain-cost' className='bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>French Drain Cost Guide</h3>
              <p className='text-slate-500 text-sm'>Full cost breakdown for interior and exterior French drains.</p>
            </Link>
            <Link href='/articles/basement-waterproofing-cost' className='bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Basement Waterproofing Cost</h3>
              <p className='text-slate-500 text-sm'>What to expect for professional waterproofing pricing in 2026.</p>
            </Link>
            <Link href='/articles/best-sump-pumps-2026' className='bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Best Sump Pumps 2026</h3>
              <p className='text-slate-500 text-sm'>Top-rated submersible and pedestal sump pumps reviewed.</p>
            </Link>
            <Link href='/articles/french-drain-vs-sump-pump' className='bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>French Drain vs. Sump Pump</h3>
              <p className='text-slate-500 text-sm'>When you need one, the other, or both.</p>
            </Link>
            <Link href='/articles/why-basement-floods-with-sump-pump' className='bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Why Your Basement Still Floods</h3>
              <p className='text-slate-500 text-sm'>Common reasons your sump pump isn&apos;t keeping up.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='bg-slate-900 py-16'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-black text-white mb-4'>Get Your Sump Pump Installed Right</h2>
            <p className='text-slate-400 text-lg'>Get free quotes from vetted sump pump installation professionals in your area.</p>
          </div>
          <LeadForm />
        </div>
      </section>

    </div>
  );
}
