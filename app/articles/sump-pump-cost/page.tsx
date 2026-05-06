import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sump Pump Installation Cost 2026: What You Will Actually Pay',
  description: 'Sump pump installation costs $600-$2,500 in 2026. See cost breakdowns by pump type, what affects pricing, DIY vs. pro, and how to avoid overpaying.',
  alternates: { canonical: 'https://thebasement.guide/articles/sump-pump-cost' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does sump pump installation cost in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Sump pump installation costs $650 to $2,500 for most residential projects in 2026, with the national average for a complete new system sitting around $1,200 to $1,800. A simple pump replacement in an existing pit runs $650 to $1,200 including labor and the pump unit. A full new installation including concrete cutting, pit excavation, pump, discharge line, and battery backup runs $1,500 to $3,500. The single biggest cost variable is whether a sump pit already exists — new pit installation adds $500 to $1,000 to any project.' } },
    { '@type': 'Question', name: 'How much does it cost to replace a sump pump vs install a new one?', acceptedAnswer: { '@type': 'Answer', text: 'Replacing an existing sump pump in an established pit typically costs $650 to $1,200 including the new pump unit and 1 to 2 hours of labor. A brand new installation with no existing pit costs $1,200 to $2,500 because it adds $500 to $1,000 for concrete cutting, pit excavation, liner installation, and concrete patching around the new pit.' } },
    { '@type': 'Question', name: 'Is a battery backup sump pump worth the cost?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, a battery backup sump pump is one of the highest-return additions available for any basement waterproofing system. Power outages most frequently occur during heavy storms that generate the most water, leaving a primary pump without electricity exactly when needed most. A battery backup unit costs $300 to $800 installed and provides 7 to 10 hours of pumping capacity.' } },
    { '@type': 'Question', name: 'How long does sump pump installation take?', acceptedAnswer: { '@type': 'Answer', text: 'A pump replacement in an existing pit typically takes 1 to 2 hours. A new full installation including pit excavation takes 4 to 6 hours for a standard basement with straightforward discharge routing. Complex installations can take a full day.' } },
    { '@type': 'Question', name: 'What size sump pump do I need for my basement?', acceptedAnswer: { '@type': 'Answer', text: 'For most residential basements up to approximately 1,500 square feet with a normal water table, a 1/3 HP submersible pump provides sufficient capacity at 2,500 to 3,000 gallons per hour. Basements with high water tables or square footage above 1,500 benefit from a 1/2 HP pump rated at 3,500 to 4,500 gallons per hour.' } },
    { '@type': 'Question', name: 'Can I install a sump pump myself to save money?', acceptedAnswer: { '@type': 'Answer', text: 'Replacing an existing sump pump in an established pit is a manageable DIY project that saves $150 to $300 in labor. New pit installation is not a realistic DIY project for most homeowners because it requires a concrete cutting saw, proper pit sizing and liner installation, and electrical work that requires a permit and licensed electrician in most jurisdictions.' } },
  ],
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
              <p className='text-slate-400 text-sm'>Updated March 2026 &nbsp;&middot;&nbsp; 18 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* Entity Definition / Opening */}
        <div className='prose prose-lg max-w-none'>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Sump pump installation cost depends on three variables that most pricing guides collapse into a single number: whether a pit already exists, which pump type and horsepower the application requires, and whether a battery backup system is included. A simple pump swap in an existing pit runs $650 to $1,200. A new system installed from scratch including concrete cutting, pit excavation, pump, discharge line, and battery backup runs $1,500 to $3,500. Understanding what drives your specific cost requires knowing where you fall on each of those three variables before you call a contractor.
          </p>
          <p className='text-xl text-slate-700 leading-relaxed mb-6'>
            The average cost to install a sump pump in 2026 is <strong>$1,200 to $1,800</strong> for a complete new system professionally installed, with most homeowners paying between <strong>$650 and $2,500</strong> depending on system complexity. Replacing an existing pump in an established pit is the lower end of that range. A full new installation with pit, primary pump, discharge line, check valve, and battery backup sits at the higher end.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            If sump pump installation is part of a larger basement waterproofing project, our <Link href='/cost-guides/basement-waterproofing-cost-calculator' className='text-teal-700 underline hover:text-teal-900'>cost calculator</Link> estimates the full project including drainage and waterproofing scope.
          </p>
        </div>

        {/* Replacement Cost Calculator Callout */}
        <div className='not-prose my-10 rounded-2xl border-l-4 border-cyan-500 bg-gradient-to-br from-cyan-50 to-slate-50 p-6 md:p-8 shadow-sm'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white font-bold text-sm'>$</span>
            <h3 className='text-xl font-black text-slate-900 m-0'>Quick estimate</h3>
          </div>
          <p className='text-slate-700 leading-relaxed m-0'>
            If you are replacing an existing sump pump rather than installing one for the first time, use our <Link href='/cost-guides/sump-pump-replacement-cost' className='text-cyan-700 font-semibold underline hover:text-cyan-900'>sump pump replacement cost calculator</Link>. The calculator is tuned for replacement scenarios and factors pump type, backup system, labor scope, and region for an instant installed price range.
          </p>
        </div>

        {/* 2026 Sump Pump Cost Breakdown */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>2026 Sump Pump Cost Breakdown</h2>

        <h3 className='text-xl font-bold text-slate-900 mb-4'>Complete Cost by Scenario</h3>
        <div className='overflow-x-auto not-prose mb-10'>
          <table className='w-full border-collapse text-sm'>
            <thead><tr className='bg-slate-800 text-white'><th className='px-4 py-3 text-left font-semibold'>Scenario</th><th className='px-4 py-3 text-left font-semibold'>Estimated Cost</th><th className='px-4 py-3 text-left font-semibold'>What Is Included</th></tr></thead>
            <tbody className='divide-y divide-gray-200'>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Pump replacement, existing pit</td><td className='px-4 py-3 text-slate-600'>$650 to $1,200</td><td className='px-4 py-3 text-slate-600'>New pump, installation labor, check valve</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>New pump, new pit (no existing system)</td><td className='px-4 py-3 text-slate-600'>$1,200 to $2,500</td><td className='px-4 py-3 text-slate-600'>Concrete cutting, pit excavation, liner, pump, discharge line</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Complete system with battery backup</td><td className='px-4 py-3 text-slate-600'>$1,500 to $3,500</td><td className='px-4 py-3 text-slate-600'>All of the above plus battery backup unit</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Battery backup only (existing primary pump)</td><td className='px-4 py-3 text-slate-600'>$300 to $800</td><td className='px-4 py-3 text-slate-600'>Backup pump, battery, installation</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Pedestal pump replacement</td><td className='px-4 py-3 text-slate-600'>$400 to $900</td><td className='px-4 py-3 text-slate-600'>Pedestal unit, installation labor</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Submersible pump replacement</td><td className='px-4 py-3 text-slate-600'>$600 to $1,500</td><td className='px-4 py-3 text-slate-600'>Submersible unit, installation labor</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>High-capacity system (1/2 HP or 3/4 HP)</td><td className='px-4 py-3 text-slate-600'>$1,500 to $4,000</td><td className='px-4 py-3 text-slate-600'>Larger pump, larger pit if needed, discharge line upgrade</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Smart sump pump with WiFi monitoring</td><td className='px-4 py-3 text-slate-600'>$800 to $2,000</td><td className='px-4 py-3 text-slate-600'>Smart pump unit, app setup, installation</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className='text-xl font-bold text-slate-900 mb-4'>Cost by Pump Type</h3>
        <div className='overflow-x-auto not-prose mb-12'>
          <table className='w-full border-collapse text-sm'>
            <thead><tr className='bg-slate-800 text-white'><th className='px-4 py-3 text-left font-semibold'>Pump Type</th><th className='px-4 py-3 text-left font-semibold'>Unit Cost</th><th className='px-4 py-3 text-left font-semibold'>Installed Cost</th><th className='px-4 py-3 text-left font-semibold'>Best For</th></tr></thead>
            <tbody className='divide-y divide-gray-200'>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Pedestal (1/3 HP)</td><td className='px-4 py-3 text-slate-600'>$80 to $200</td><td className='px-4 py-3 text-slate-600'>$400 to $900</td><td className='px-4 py-3 text-slate-600'>Shallow pits, occasional use, tight budgets</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Submersible (1/3 HP)</td><td className='px-4 py-3 text-slate-600'>$150 to $400</td><td className='px-4 py-3 text-slate-600'>$600 to $1,500</td><td className='px-4 py-3 text-slate-600'>Most residential basements, finished spaces</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Submersible (1/2 HP)</td><td className='px-4 py-3 text-slate-600'>$200 to $500</td><td className='px-4 py-3 text-slate-600'>$800 to $1,800</td><td className='px-4 py-3 text-slate-600'>High water table, larger basements</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Submersible (3/4 HP)</td><td className='px-4 py-3 text-slate-600'>$300 to $700</td><td className='px-4 py-3 text-slate-600'>$1,000 to $2,500</td><td className='px-4 py-3 text-slate-600'>Severe flooding, commercial-grade residential</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Battery backup unit</td><td className='px-4 py-3 text-slate-600'>$150 to $500</td><td className='px-4 py-3 text-slate-600'>$300 to $800</td><td className='px-4 py-3 text-slate-600'>Secondary protection during power outages</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Water-powered backup</td><td className='px-4 py-3 text-slate-600'>$200 to $400</td><td className='px-4 py-3 text-slate-600'>$400 to $700</td><td className='px-4 py-3 text-slate-600'>Unlimited runtime where municipal water available</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Smart WiFi pump</td><td className='px-4 py-3 text-slate-600'>$300 to $600</td><td className='px-4 py-3 text-slate-600'>$800 to $2,000</td><td className='px-4 py-3 text-slate-600'>Remote monitoring, alert-based maintenance</td></tr>
            </tbody>
          </table>
        </div>

        {/* Key Cost Factors */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Key Cost Factors</h2>
        <p className='text-slate-600 leading-relaxed mb-8'>What drives your sump pump installation cost up or down:</p>
        <div className='space-y-4 not-prose mb-12'>
          <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
            <span className='text-cyan-500 mt-0.5 text-lg'>&#9679;</span>
            <span className='text-slate-700'><strong>Existing pit or new pit:</strong> This is the single biggest cost variable. If a sump pit already exists, a pump swap is 1 to 2 hours of labor at $75 to $150 per hour plus the pump unit cost. If no pit exists, the installer must cut through the concrete floor, excavate 2 to 3 cubic feet of soil, install a pit liner, and patch the concrete around the liner. Pit installation adds $500 to $1,000 to the total project cost.</span>
          </div>
          <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
            <span className='text-cyan-500 mt-0.5 text-lg'>&#9679;</span>
            <span className='text-slate-700'><strong>Pump horsepower:</strong> Standard 1/3 HP submersible pumps handle the vast majority of residential basements up to approximately 1,500 square feet with normal water table conditions. Basements with high water tables, chronic flooding, or larger square footage benefit from 1/2 HP or 3/4 HP pumps that cost 20 to 40 percent more. Oversizing the pump is not harmful but wastes money; undersizing means the pump cannot keep up during peak inflow events.</span>
          </div>
          <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
            <span className='text-cyan-500 mt-0.5 text-lg'>&#9679;</span>
            <span className='text-slate-700'><strong>Discharge line routing:</strong> The discharge pipe that carries pumped water away from the foundation must exit through the basement wall and terminate at least 10 feet from the foundation. A straightforward discharge run of 20 to 30 feet adds $100 to $300 in materials and labor. Complex routing through finished walls, around obstacles, or underground adds $300 to $800. The discharge line must be insulated in cold climates where it passes through unheated spaces to prevent freezing.</span>
          </div>
          <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
            <span className='text-cyan-500 mt-0.5 text-lg'>&#9679;</span>
            <span className='text-slate-700'><strong>Battery backup inclusion:</strong> A battery backup sump pump is the most important add-on for any installation and should be considered mandatory rather than optional. Power outages most frequently occur during the heavy storms that generate the most water, leaving the primary pump unable to run exactly when it is needed most. Battery backup units add $300 to $800 to the installed cost and provide 7 to 10 hours of pumping capacity on a full charge. Battery replacement every 3 to 5 years costs $50 to $150.</span>
          </div>
          <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
            <span className='text-cyan-500 mt-0.5 text-lg'>&#9679;</span>
            <span className='text-slate-700'><strong>Labor rates by region:</strong> Plumber and waterproofing contractor rates run $75 to $150 per hour nationally. Most pump installations take 2 to 4 hours for a swap in an existing pit or 4 to 6 hours for a new pit installation. Regional labor rates vary by 20 to 30 percent, with the Northeast and Pacific Northwest at the higher end and the Midwest and Southeast at the lower end.</span>
          </div>
          <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
            <span className='text-cyan-500 mt-0.5 text-lg'>&#9679;</span>
            <span className='text-slate-700'><strong>Foundation type:</strong> Cutting through poured concrete to install a new pit is faster and less expensive than cutting through concrete block, which must be removed block by block and requires more careful structural consideration.</span>
          </div>
        </div>

        {/* What Is Included */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>What Is Included in a Professional Sump Pump Installation</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose'>
          <div className='bg-green-50 rounded-2xl p-6 border border-green-100'>
            <h3 className='font-bold text-green-800 text-lg mb-4'>Included in a Complete Installation</h3>
            <ul className='space-y-3 text-slate-700'>
              <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span><span>Pit excavation and liner installation (if no pit exists)</span></li>
              <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span><span>Submersible or pedestal pump unit</span></li>
              <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span><span>Discharge pipe from pit through basement wall to exterior</span></li>
              <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span><span>Check valve on the discharge line to prevent backflow</span></li>
              <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span><span>Electrical connection to a dedicated circuit (GFCI protected)</span></li>
              <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span><span>Discharge line termination at least 10 feet from foundation</span></li>
              <li className='flex items-start gap-2'><span className='text-green-500 font-bold'>+</span><span>Testing and verification before the installer leaves</span></li>
            </ul>
          </div>
          <div className='bg-red-50 rounded-2xl p-6 border border-red-100'>
            <h3 className='font-bold text-red-800 text-lg mb-4'>Typically NOT Included in a Base Quote</h3>
            <ul className='space-y-3 text-slate-700'>
              <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span><span>Battery backup unit (quoted separately, strongly recommended)</span></li>
              <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span><span>Discharge line insulation for cold climate installations</span></li>
              <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span><span>Smart monitoring equipment</span></li>
              <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span><span>Permits (required in some jurisdictions)</span></li>
              <li className='flex items-start gap-2'><span className='text-red-500 font-bold'>&minus;</span><span>Interior concrete patching around a new pit (sometimes extra)</span></li>
            </ul>
          </div>
        </div>

        {/* DIY vs Professional */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>DIY vs Professional Installation</h2>
        <p className='text-slate-600 leading-relaxed mb-6'>
          <strong>What you can realistically do yourself:</strong> Replacing an existing submersible pump in an established pit is a manageable DIY project for a homeowner comfortable with basic plumbing and electrical work. The process involves disconnecting the discharge pipe union fitting and unplugging the power cord, lifting the old pump out, lowering the new pump into position, reconnecting the discharge union, and plugging in. Most pump swaps take 1 to 2 hours and require no special tools. DIY savings on a pump swap run $150 to $300 in labor.
        </p>
        <p className='text-slate-600 leading-relaxed mb-8'>
          <strong>What to hire a professional for:</strong> New pit installation requires concrete cutting with a diamond-blade saw, excavation, pit liner installation, and concrete patching &mdash; work that requires specialized equipment and experience. Electrical work connecting the pump to a dedicated GFCI circuit should be done by a licensed electrician in most jurisdictions. Discharge line routing through finished walls or underground requires planning that a professional can execute more reliably than most DIYers.
        </p>
        <div className='overflow-x-auto not-prose mb-12'>
          <table className='w-full border-collapse text-sm'>
            <thead><tr className='bg-slate-800 text-white'><th className='px-4 py-3 text-left font-semibold'>Task</th><th className='px-4 py-3 text-left font-semibold'>DIY Feasibility</th><th className='px-4 py-3 text-left font-semibold'>Estimated DIY Savings</th></tr></thead>
            <tbody className='divide-y divide-gray-200'>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Pump swap in existing pit</td><td className='px-4 py-3 text-slate-600'>Yes</td><td className='px-4 py-3 text-slate-600'>$150 to $300</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Battery backup installation</td><td className='px-4 py-3 text-slate-600'>Yes</td><td className='px-4 py-3 text-slate-600'>$100 to $200</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>New pit installation</td><td className='px-4 py-3 text-slate-600'>No</td><td className='px-4 py-3 text-slate-600'>Not recommended</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Discharge line routing (simple)</td><td className='px-4 py-3 text-slate-600'>Possible</td><td className='px-4 py-3 text-slate-600'>$100 to $200</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Electrical connection</td><td className='px-4 py-3 text-slate-600'>No (permit required)</td><td className='px-4 py-3 text-slate-600'>Not recommended</td></tr>
            </tbody>
          </table>
        </div>

        {/* How Long Does a Sump Pump Last */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>How Long Does a Sump Pump Last</h2>
        <p className='text-slate-600 leading-relaxed mb-6'>
          A submersible sump pump typically lasts 7 to 10 years under normal use conditions, with cast-iron models like the Zoeller M53 lasting toward the upper end and entry-level thermoplastic models in high-use applications lasting toward the lower end. Pedestal pumps last 10 to 25 years because the motor stays dry above the pit and does not experience the corrosion that shortens submersible motor life.
        </p>
        <p className='text-slate-600 leading-relaxed mb-6'>
          The most reliable indicator that a pump needs replacement is increased cycling frequency, unusual noise, or a pump that runs but does not move water effectively. Do not wait for complete failure &mdash; a pump that fails during a heavy storm with no backup in place can result in thousands of dollars of flood damage.
        </p>
        <p className='text-slate-600 leading-relaxed mb-12'>
          Budget $500 to $1,500 for pump replacement every 7 to 10 years as an ongoing maintenance cost of basement waterproofing.
        </p>

        {/* Does Homeowners Insurance Cover */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Does Homeowners Insurance Cover Sump Pump Replacement</h2>
        <p className='text-slate-600 leading-relaxed mb-6'>
          Standard homeowners insurance does not cover sump pump replacement as routine maintenance or equipment failure. However, some policies include water backup and sump pump failure endorsements that cover water damage resulting from a sump pump failure during a storm event. These endorsements typically cost $50 to $150 per year to add to a standard policy and provide $5,000 to $25,000 in coverage for water damage caused by pump failure or drain backup.
        </p>
        <p className='text-slate-600 leading-relaxed mb-12'>
          Check your policy specifically for a water backup endorsement. If you do not have one, adding it is worth the cost given that sump pump failure during a power outage is one of the most common causes of basement flooding. See our <Link href='/articles/basement-flooding-insurance' className='text-cyan-600 hover:underline'>basement flooding insurance guide</Link> for full coverage details.
        </p>

        {/* Decision Table */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>What Will Your Sump Pump Installation Cost?</h2>
        <div className='overflow-x-auto not-prose mb-12'>
          <table className='w-full border-collapse text-sm'>
            <thead><tr className='bg-slate-800 text-white'><th className='px-4 py-3 text-left font-semibold'>Your Situation</th><th className='px-4 py-3 text-left font-semibold'>What You Need</th><th className='px-4 py-3 text-left font-semibold'>Estimated Cost</th></tr></thead>
            <tbody className='divide-y divide-gray-200'>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Existing pump failed, pit in good condition</td><td className='px-4 py-3 text-slate-600'>Submersible pump replacement</td><td className='px-4 py-3 text-slate-600'>$650 to $1,200</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Existing pump working but 7 to 10 years old</td><td className='px-4 py-3 text-slate-600'>Proactive pump replacement</td><td className='px-4 py-3 text-slate-600'>$650 to $1,200</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>No sump pump or pit, basement has water issues</td><td className='px-4 py-3 text-slate-600'>New pit plus submersible pump</td><td className='px-4 py-3 text-slate-600'>$1,200 to $2,500</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Existing pump but no battery backup</td><td className='px-4 py-3 text-slate-600'>Battery backup unit added to existing system</td><td className='px-4 py-3 text-slate-600'>$300 to $800</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Complete new system from scratch</td><td className='px-4 py-3 text-slate-600'>Pit, pump, discharge line, battery backup</td><td className='px-4 py-3 text-slate-600'>$1,500 to $3,500</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>High water table, basement floods during storms</td><td className='px-4 py-3 text-slate-600'>1/2 HP or 3/4 HP high-capacity submersible</td><td className='px-4 py-3 text-slate-600'>$800 to $2,500</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Finished basement, quiet operation required</td><td className='px-4 py-3 text-slate-600'>Submersible pump with sealed pit cover</td><td className='px-4 py-3 text-slate-600'>$650 to $1,500</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Shallow pit under 18 inches</td><td className='px-4 py-3 text-slate-600'>Pedestal pump (submersible will not fit)</td><td className='px-4 py-3 text-slate-600'>$400 to $900</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Flat yard, no gravity discharge point</td><td className='px-4 py-3 text-slate-600'>Pump plus buried discharge line to street or dry well</td><td className='px-4 py-3 text-slate-600'>$1,000 to $2,500</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Want remote monitoring and flood alerts</td><td className='px-4 py-3 text-slate-600'>Smart WiFi sump pump</td><td className='px-4 py-3 text-slate-600'>$800 to $2,000</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>DIY pump swap, have basic plumbing skills</td><td className='px-4 py-3 text-slate-600'>Pump unit only, self-install</td><td className='px-4 py-3 text-slate-600'>$150 to $500 in materials</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3 font-medium text-slate-900'>Power outages common in your area</td><td className='px-4 py-3 text-slate-600'>Primary pump plus battery backup</td><td className='px-4 py-3 text-slate-600'>$1,500 to $3,500</td></tr>
              <tr className='bg-white'><td className='px-4 py-3 font-medium text-slate-900'>Primary pump failed during storm, emergency service</td><td className='px-4 py-3 text-slate-600'>Emergency call premium applies</td><td className='px-4 py-3 text-slate-600'>$900 to $2,000</td></tr>
            </tbody>
          </table>
        </div>

        {/* Glossary */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Glossary</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose'>
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Sump Pit (Sump Basin)</h4>
            <p className='text-slate-600 text-sm'>The cylindrical or rectangular excavated basin installed below the basement floor at the lowest point of the drainage system where water collects before the pump removes it, typically 18 to 24 inches in diameter and 24 to 36 inches deep for residential applications. The pit must be large enough to accommodate the pump unit with clearance, allow the float switch to operate through its full range of motion without obstruction, and hold enough water volume to prevent the pump from short-cycling on and off too rapidly. Installing a new pit in an existing basement requires cutting through the concrete floor and excavating 2 to 3 cubic feet of soil, adding $500 to $1,000 to the total installation cost.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Submersible Pump</h4>
            <p className='text-slate-600 text-sm'>A sealed pump unit that sits at the bottom of the sump pit fully submerged in water when active, using a float switch to detect rising water and pump it out through a discharge line. Submersible pumps are the standard choice for most residential basements because they operate quietly (the water muffles motor noise), handle higher flow rates than pedestal models, and fit entirely within the pit with no components above the floor surface. They cost more than pedestal pumps upfront ($150 to $700 for the unit) and have a shorter lifespan (7 to 10 years) due to continuous water exposure, but their performance and installation footprint advantages make them the preferred choice for most applications. See our <a href='/articles/best-sump-pumps-2026' className='text-cyan-600 hover:underline'>best sump pumps 2026 guide</a> for current top-rated submersible models.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Pedestal Pump</h4>
            <p className='text-slate-600 text-sm'>A pump design where the motor is mounted on a tall shaft above the pit with only the impeller extending into the water, keeping the motor dry and accessible without removing it from the pit. Pedestal pumps are less expensive upfront ($80 to $200 for the unit), last longer (10 to 25 years) because the motor stays dry, and are easier to service and inspect since the motor is visible above the floor. The tradeoffs are higher noise levels (the exposed motor runs at 55 to 65 decibels versus 45 to 50 for submersibles), lower flow capacity, and a tall shaft extending 3 to 4 feet above the pit that is incompatible with finished basement spaces. See our <a href='/articles/submersible-vs-pedestal-sump-pump' className='text-cyan-600 hover:underline'>submersible vs pedestal sump pump guide</a> for a full comparison.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Float Switch</h4>
            <p className='text-slate-600 text-sm'>The sensor mechanism that activates and deactivates a sump pump by detecting the water level in the pit, rising with the water to trigger the pump on and dropping as the pit empties to shut it off. Tethered float switches hang from the pump body and activate when the float rises to the end of the tether, while vertical float switches activate at a fixed height and are more reliable in narrow pits where a tethered float might catch on the pit wall. Float switch failure is one of the most common causes of sump pump performance problems, and testing the float for freedom of movement should be part of every annual pump test.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Check Valve</h4>
            <p className='text-slate-600 text-sm'>A one-way valve installed on the discharge line above the pump that prevents water from flowing back down into the pit after the pump shuts off, avoiding the short-cycling that occurs when backflow water immediately re-triggers the float switch. Without a check valve, the pump runs in short repeated cycles that waste energy, accelerate motor wear, and prevent the pit from fully emptying between cycles. Check valves cost $10 to $30 and should be installed as part of any sump pump installation or replacement. A check valve that is not functioning properly is one of the first things to inspect when a pump seems to be running more frequently than expected.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Battery Backup Pump</h4>
            <p className='text-slate-600 text-sm'>A secondary pump system powered by a dedicated sealed lead-acid or lithium battery that activates automatically when the primary pump loses power or fails, providing continued water removal during power outages and primary pump failures. Standard battery backup systems provide 7 to 10 hours of pumping capacity on a fully charged battery, with the battery requiring replacement every 3 to 5 years. Water-powered backup systems use municipal water pressure to operate without a battery and provide unlimited runtime, but consume significant municipal water in the process. See our <a href='/articles/backup-power-sump-pumps' className='text-cyan-600 hover:underline'>backup power for sump pumps guide</a> for a full comparison of backup options.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Discharge Line</h4>
            <p className='text-slate-600 text-sm'>The pipe that carries water pumped out of the sump pit to a discharge point well away from the foundation, typically 1.5 to 2 inch diameter PVC running from the pump through the basement wall and terminating at least 10 feet from the foundation at grade level or connected to a storm drain where permitted. The discharge line must maintain a continuous slope away from the pump to prevent water from draining back into the pit when the pump is off, and must be insulated where it passes through unheated spaces to prevent freezing during winter operation. An improperly located discharge point that terminates too close to the foundation can cause the pumped water to re-enter the soil and cycle back into the pit, increasing pump run time and wear.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className='text-3xl font-black text-slate-900 mt-16 mb-6'>Frequently Asked Questions</h2>

        <div className='space-y-6 my-8 not-prose'>
          <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>How much does sump pump installation cost in 2026?</h4>
            <p className='text-slate-600'>Sump pump installation costs $650 to $2,500 for most residential projects in 2026, with the national average for a complete new system sitting around $1,200 to $1,800. A simple pump replacement in an existing pit at the lower end runs $650 to $1,200 including labor and the pump unit. A full new installation including concrete cutting, pit excavation, pump, discharge line, and battery backup runs $1,500 to $3,500. The single biggest cost variable is whether a sump pit already exists &mdash; new pit installation adds $500 to $1,000 to any project. Always get at least three written quotes that specify the pump model, horsepower, discharge routing, and whether battery backup is included before committing to a contractor. See our <Link href='/articles/sump-pump-buying-guide' className='text-cyan-600 hover:underline'>sump pump buying guide</Link> for how to choose the right pump before pricing installation.</p>
          </div>
          <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>How much does it cost to replace a sump pump vs install a new one?</h4>
            <p className='text-slate-600'>Replacing an existing sump pump in an established pit is significantly less expensive than a new installation because the most labor-intensive part of the project, the pit excavation and concrete cutting, has already been done. A pump replacement in an existing pit typically costs $650 to $1,200 including the new pump unit and 1 to 2 hours of labor. A brand new installation with no existing pit costs $1,200 to $2,500 because it adds $500 to $1,000 for concrete cutting, pit excavation, liner installation, and concrete patching around the new pit. If your existing pump is 7 to 10 years old and showing signs of wear, proactive replacement before it fails completely avoids the emergency service premium that contractors charge for same-day or after-hours calls. See our <Link href='/articles/best-sump-pumps-2026' className='text-cyan-600 hover:underline'>best sump pumps 2026 guide</Link> for current top-rated replacement models.</p>
          </div>
          <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Is a battery backup sump pump worth the cost?</h4>
            <p className='text-slate-600'>Yes, a battery backup sump pump is one of the highest-return additions available for any basement waterproofing system and should be considered mandatory rather than optional. Power outages most frequently occur during the heavy thunderstorms and hurricanes that generate the most water, leaving a primary pump without electricity exactly when it is needed most. A battery backup unit costs $300 to $800 installed and provides 7 to 10 hours of pumping capacity on a full charge, which covers the duration of most storm events. The cost of a backup unit is a fraction of the average basement flood damage claim, which runs $3,000 to $10,000 for water extraction, drying, and content replacement. Batteries require replacement every 3 to 5 years at $50 to $150, making the ongoing cost minimal relative to the protection provided. See our <Link href='/articles/backup-power-sump-pumps' className='text-cyan-600 hover:underline'>backup power for sump pumps guide</Link> and <Link href='/articles/battery-vs-water-powered-sump-pumps' className='text-cyan-600 hover:underline'>battery vs water-powered backup comparison</Link> for full guidance.</p>
          </div>
          <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>How long does sump pump installation take?</h4>
            <p className='text-slate-600'>A pump replacement in an existing pit typically takes 1 to 2 hours for a professional installer including disconnecting the old pump, installing the new unit, reconnecting the discharge line, and testing. A new full installation including pit excavation takes 4 to 6 hours for a standard basement with straightforward discharge routing. Complex installations involving new pit cutting through thick poured concrete, long discharge line routing through finished walls, or simultaneous battery backup installation can take a full day. DIY pump swaps in existing pits typically take 1 to 3 hours for a homeowner comfortable with basic plumbing. The permit process, where required, adds 1 to 4 weeks to the overall timeline before on-site work can begin.</p>
          </div>
          <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>What size sump pump do I need for my basement?</h4>
            <p className='text-slate-600'>For most residential basements up to approximately 1,500 square feet with a normal water table, a 1/3 HP submersible pump provides sufficient capacity at 2,500 to 3,000 gallons per hour. Basements with high water tables, chronic flooding during heavy rain, or square footage above 1,500 square feet benefit from a 1/2 HP pump rated at 3,500 to 4,500 gallons per hour. Severe flooding situations, very large basements, or properties in flood-prone areas may require a 3/4 HP pump. The key sizing metric is whether the pump can remove water faster than it enters during a peak inflow event &mdash; an undersized pump that runs continuously without lowering the water level in the pit needs to be replaced with a higher horsepower model. See our <Link href='/articles/submersible-vs-pedestal-sump-pump' className='text-cyan-600 hover:underline'>submersible vs pedestal sump pump guide</Link> for the full sizing and type selection framework.</p>
          </div>
          <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
            <h4 className='font-bold text-slate-900 mb-2'>Can I install a sump pump myself to save money?</h4>
            <p className='text-slate-600'>Replacing an existing sump pump in an established pit is a manageable DIY project that saves $150 to $300 in labor for a homeowner comfortable with basic plumbing. The process involves disconnecting the discharge union fitting, unplugging the power cord, lifting out the old pump, lowering the new pump into position, reconnecting the discharge line, and testing by pouring water into the pit. New pit installation is not a realistic DIY project for most homeowners because it requires a concrete cutting saw, proper pit sizing and liner installation, and electrical work that requires a permit and licensed electrician in most jurisdictions. An incorrectly installed pit that is too small, too shallow, or improperly positioned relative to the floor drain system will underperform and may require professional correction at greater total cost than hiring correctly from the start. See our <Link href='/articles/diy-vs-hiring-pro-basement-projects' className='text-cyan-600 hover:underline'>DIY vs hiring a pro guide</Link> for an honest assessment of which basement projects fall within DIY capability.</p>
          </div>
        </div>

      </article>

      {/* Related Guides */}
      <section className='bg-slate-50 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-black text-slate-900 mb-4'>Related Guides</h2>

          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mt-8 mb-4'>On thebasement.guide</h3>
          <div className='grid md:grid-cols-3 gap-4 not-prose mb-10'>
            <Link href='/articles/sump-pump-buying-guide' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Sump Pump Buying Guide</h3>
              <p className='text-slate-500 text-sm'>How to choose the right sump pump before pricing installation, including horsepower sizing, float switch types, pit sizing, and what features matter for long-term reliability.</p>
            </Link>
            <Link href='/articles/best-sump-pumps-2026' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Best Sump Pumps 2026</h3>
              <p className='text-slate-500 text-sm'>Top-rated submersible and pedestal pump reviews with honest performance assessments, pricing, and recommendations by use case and budget.</p>
            </Link>
            <Link href='/articles/backup-power-sump-pumps' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Backup Power for Sump Pumps</h3>
              <p className='text-slate-500 text-sm'>Why battery backup is essential and how to choose between battery-powered and water-powered backup systems, the most important add-on for any sump pump installation.</p>
            </Link>
            <Link href='/articles/battery-vs-water-powered-sump-pumps' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Battery vs Water-Powered Sump Pump Backup</h3>
              <p className='text-slate-500 text-sm'>A head-to-head comparison of the two backup power options including runtime, cost, and which is appropriate for different basement situations.</p>
            </Link>
            <Link href='/articles/submersible-vs-pedestal-sump-pump' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Submersible vs Pedestal Sump Pump</h3>
              <p className='text-slate-500 text-sm'>The full comparison of both pump types across cost, noise, lifespan, pit depth requirements, and which is right for your specific basement.</p>
            </Link>
            <Link href='/articles/smart-sump-pumps-guide' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Smart Sump Pumps Guide</h3>
              <p className='text-slate-500 text-sm'>How WiFi-connected sump pumps with remote monitoring provide early warning of pump failure and water intrusion before flooding occurs.</p>
            </Link>
            <Link href='/articles/french-drain-cost' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>French Drain Cost 2026</h3>
              <p className='text-slate-500 text-sm'>What interior perimeter drain systems cost, the drainage infrastructure that routes water to the sump pit the pump removes.</p>
            </Link>
            <Link href='/articles/french-drain-vs-sump-pump' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>French Drain vs Sump Pump</h3>
              <p className='text-slate-500 text-sm'>How interior drain tile and sump pumps work together as a complete system rather than competing alternatives.</p>
            </Link>
            <Link href='/articles/basement-waterproofing-cost' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Basement Waterproofing Cost 2026</h3>
              <p className='text-slate-500 text-sm'>Full pricing for complete waterproofing systems where a sump pump is one component alongside interior drainage and wall sealing.</p>
            </Link>
            <Link href='/articles/why-basement-floods-with-sump-pump' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Why Is My Basement Still Flooding With a Sump Pump?</h3>
              <p className='text-slate-500 text-sm'>The most common reasons a functioning sump pump fails to prevent basement flooding, including undersizing, float switch problems, and discharge line issues.</p>
            </Link>
            <Link href='/articles/complete-basement-waterproofing-guide' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Complete Basement Waterproofing Guide</h3>
              <p className='text-slate-500 text-sm'>How sump pumps fit into a complete waterproofing system alongside interior drainage, wall sealing, and exterior water management.</p>
            </Link>
            <Link href='/articles/basement-flooding-insurance' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Basement Flooding Insurance</h3>
              <p className='text-slate-500 text-sm'>What homeowners insurance covers when a sump pump fails during a storm event and water damages the basement, including the water backup endorsement.</p>
            </Link>
            <Link href='/articles/best-water-leak-detectors' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Best Water Leak Detectors</h3>
              <p className='text-slate-500 text-sm'>Sensors that provide early warning of sump pump failure or unexpected water entry before flooding becomes severe.</p>
            </Link>
          </div>

          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mt-8 mb-4'>From Our Network</h3>
          <div className='grid md:grid-cols-3 gap-4 not-prose mb-10'>
            <a href='https://theseptic.guide/reviews/best-septic-system-alarms' target='_blank' rel='noopener noreferrer' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Septic System Alarms</h3>
              <p className='text-slate-500 text-sm'>For homes with both a sump pump and a septic system, monitoring both systems with dedicated alarms provides early warning of failure in either.</p>
            </a>
            <a href='https://theseptic.guide/problems/septic-overflow-after-rain' target='_blank' rel='noopener noreferrer' className='bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:bg-cyan-50 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Septic Overflow After Rain</h3>
              <p className='text-slate-500 text-sm'>The same heavy rain events that trigger sump pump activation can simultaneously overflow the septic system on properties with on-site wastewater systems.</p>
            </a>
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

      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}