import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foundation Crack Repair Cost 2026 | Price Guide',
  description: 'How much does foundation crack repair cost in 2026? Epoxy injection vs. polyurethane foam. Average $350–$1,500 per crack depending on severity and method.',
  alternates: { canonical: 'https://thebasement.guide/articles/foundation-crack-repair-cost' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does foundation crack repair cost in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most homeowners pay $350 to $1,500 per crack for interior injection repairs. Epoxy injection runs $350 to $800 per crack for dry structural cracks. Polyurethane foam injection runs $400 to $1,000 per crack for actively leaking cracks. Carbon fiber strap installation for bowing walls costs $800 to $1,500 per strap. Exterior excavation repairs run $2,000 to $7,000 per crack."
      }
    },
    {
      "@type": "Question",
      "name": "Are foundation cracks serious?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the type. Hairline vertical cracks under 1/8 inch with no displacement are common in poured concrete foundations and are usually the result of normal curing shrinkage. Cracks wider than 1/4 inch, diagonal cracks showing displacement, stair-step cracks in block walls, and any horizontal crack are all more serious and warrant professional evaluation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between epoxy and polyurethane crack repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epoxy injection is a rigid repair that bonds the two sides of the crack together and restores the tensile strength of the concrete. It requires a dry surface. Polyurethane foam injection is a flexible repair that expands to fill irregular voids and block water flow. It works on wet or actively leaking cracks where epoxy will not bond."
      }
    },
    {
      "@type": "Question",
      "name": "Can I repair a foundation crack myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For small, dry, hairline cracks with no displacement, yes. DIY polyurethane injection kits are available for minor leaking cracks. However, anything wider than 1/4 inch, showing displacement, or associated with any bowing or wall movement should be handled by a professional."
      }
    },
    {
      "@type": "Question",
      "name": "How long does foundation crack repair last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A properly done epoxy injection on a stable crack lasts 20 years or more. Polyurethane foam repairs typically last 10 to 20 years. Carbon fiber straps and steel I-beam bracing are considered permanent. Any repair will fail prematurely if the underlying moisture or drainage problem is not addressed."
      }
    },
    {
      "@type": "Question",
      "name": "Does fixing a foundation crack increase home value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, documented professional crack repairs increase resale value by removing a significant inspection red flag. A repair with a transferable warranty from a licensed contractor is particularly valuable because it gives the buyer assurance that the problem was handled correctly."
      }
    },
    {
      "@type": "Question",
      "name": "When should I call a structural engineer about a foundation crack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call a structural engineer when the crack is horizontal, shows any horizontal displacement, is wider than 1/4 inch, is associated with bowing or bulging of the wall, has changed in width or length since you first noticed it, or has been previously repaired and has reopened. A structural engineer evaluation costs $300 to $700."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my foundation crack is structural or cosmetic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three factors separate cosmetic from structural: direction, width, and displacement. Vertical hairline cracks under 1/8 inch with smooth edges and no displacement are almost always cosmetic shrinkage cracks. Horizontal cracks are always structural. Any crack where one side has shifted relative to the other is structural regardless of width."
      }
    }
  ]
};

export default function FoundationCrackRepairCost() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/foundation-crack-closeup.jpg.jpg'
          alt='Foundation crack repair cost guide'
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
            Foundation Crack <br />
            <span className='text-violet-400'>Repair Cost 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            How much does foundation crack repair cost in 2026? We break down epoxy injection vs. polyurethane foam and exactly what drives the $350–$1,500 price tag.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-purple-400 flex items-center justify-center text-white font-bold text-sm mr-4'>
                BG
              </div>
              <div className='flex flex-col'>
                <span className='text-white font-bold text-sm'>The Basement Guide Staff</span>
                <div className='flex items-center text-slate-400 text-xs font-medium'>
                  <span>Updated March 2026</span>
                  <span className='mx-2 text-slate-600'>•</span>
                  <span>20 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-3xl mx-auto px-4 py-12'>

        {/* Entity Definition */}
        <p className='text-lg text-slate-700 leading-relaxed mb-8'>Foundation crack repair is the process of diagnosing, sealing, and stabilizing cracks in poured concrete or block foundation walls to stop water infiltration, restore structural integrity, and prevent progressive damage. Repair method and cost depend entirely on crack type: hairline shrinkage cracks are cosmetic, while stair-step, diagonal, and horizontal cracks can indicate settling, hydrostatic pressure, or active structural failure requiring professional intervention. Most interior repairs use epoxy injection to restore structural strength or polyurethane foam to stop active leaks, while exterior excavation is reserved for cracks with significant displacement or ongoing drainage problems that interior methods cannot address. Left unrepaired, foundation cracks allow water intrusion that leads to mold growth, efflorescence, insulation damage, and accelerating concrete deterioration.</p>

        {/* Intro */}
        <p className='text-slate-700 leading-relaxed mb-8'>Foundation cracks are one of the most common and most misunderstood home repair issues. Depending on crack type, width, location, and repair method, expect to pay $350 to $1,500 per crack for interior repairs or $2,000 to $7,000 per crack for exterior excavation repairs.</p>

        {/* How Much Does Foundation Crack Repair Cost in 2026? */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>How Much Does Foundation Crack Repair Cost in 2026?</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>The cost of repairing a foundation crack depends on three things: how bad the crack is, where it is, and which repair method is appropriate. Here is what homeowners are paying nationally in 2026.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Cost by Repair Method</h3>
          <div className='overflow-x-auto not-prose mb-8'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='p-3 text-left font-semibold'>Repair Method</th>
                  <th className='p-3 text-left font-semibold'>Cost Per Crack</th>
                  <th className='p-3 text-left font-semibold'>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Epoxy injection</td>
                  <td className='p-3 text-slate-700'>$350 to $800</td>
                  <td className='p-3 text-slate-700'>Structural cracks in dry walls. Restores concrete tensile strength.</td>
                </tr>
                <tr className='bg-gray-50 border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Polyurethane foam injection</td>
                  <td className='p-3 text-slate-700'>$400 to $1,000</td>
                  <td className='p-3 text-slate-700'>Actively leaking cracks. Expands to fill voids and block water.</td>
                </tr>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Carbon fiber straps</td>
                  <td className='p-3 text-slate-700'>$800 to $1,500 per strap</td>
                  <td className='p-3 text-slate-700'>Bowing or buckling walls with inward movement. Permanent stabilization.</td>
                </tr>
                <tr className='bg-gray-50 border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Steel I-beam bracing</td>
                  <td className='p-3 text-slate-700'>$1,000 to $3,000 per beam</td>
                  <td className='p-3 text-slate-700'>Severe bowing walls. More invasive than carbon fiber but stronger.</td>
                </tr>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Exterior excavation and membrane</td>
                  <td className='p-3 text-slate-700'>$2,000 to $7,000 per crack</td>
                  <td className='p-3 text-slate-700'>Cracks with significant displacement or drainage problems. Addresses root cause from outside.</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>Full foundation underpinning</td>
                  <td className='p-3 text-slate-700'>$10,000 to $30,000+</td>
                  <td className='p-3 text-slate-700'>Active settling or sinking foundation. Piering or helical pier installation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Cost by Crack Type</h3>
          <div className='overflow-x-auto not-prose mb-8'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='p-3 text-left font-semibold'>Crack Type</th>
                  <th className='p-3 text-left font-semibold'>Urgency</th>
                  <th className='p-3 text-left font-semibold'>Typical Repair Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Hairline shrinkage crack (under 1/16 inch)</td>
                  <td className='p-3 text-slate-700'>Low &mdash; monitor</td>
                  <td className='p-3 text-slate-700'>$0 to $300 if sealed</td>
                </tr>
                <tr className='bg-gray-50 border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Vertical crack (1/16 to 1/4 inch)</td>
                  <td className='p-3 text-slate-700'>Moderate &mdash; seal within season</td>
                  <td className='p-3 text-slate-700'>$350 to $800</td>
                </tr>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Diagonal crack at corner</td>
                  <td className='p-3 text-slate-700'>Moderate to high</td>
                  <td className='p-3 text-slate-700'>$400 to $1,000</td>
                </tr>
                <tr className='bg-gray-50 border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Stair-step crack in block wall</td>
                  <td className='p-3 text-slate-700'>High</td>
                  <td className='p-3 text-slate-700'>$500 to $1,500</td>
                </tr>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Horizontal crack</td>
                  <td className='p-3 text-slate-700'>Urgent &mdash; structural</td>
                  <td className='p-3 text-slate-700'>$1,500 to $15,000 depending on severity</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>Crack with displacement or bowing</td>
                  <td className='p-3 text-slate-700'>Urgent &mdash; structural</td>
                  <td className='p-3 text-slate-700'>$2,000 to $30,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What Factors Drive Cost */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>What Factors Drive Foundation Crack Repair Cost?</h2>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Crack Width and Displacement</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Width alone does not tell the whole story. A crack under 1/8 inch with no horizontal displacement is almost always a water concern, not a structural one. Any crack showing horizontal displacement &mdash; where one side has shifted relative to the other &mdash; requires a structural engineer evaluation before repair. Displacement changes a $600 injection job into a potentially five-figure stabilization project.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Crack Direction</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Vertical cracks are typically caused by normal concrete curing shrinkage or minor differential settling and are the least serious. Diagonal cracks running from window corners or at 45-degree angles suggest differential settling and need monitoring or repair depending on width. Horizontal cracks are the most serious because they indicate lateral soil pressure pushing the wall inward &mdash; this is a structural failure mode that requires immediate professional attention.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Interior vs Exterior Repair</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Interior injection repairs ($350 to $1,500) access the crack from inside the basement, fill the void with epoxy or polyurethane, and are completed in a few hours with no excavation. They are effective for most non-displaced cracks. Exterior repairs ($2,000 to $7,000) require excavating down to the footing, cleaning the crack, applying a waterproof membrane, and backfilling. Exterior work addresses the root cause more completely but costs significantly more and disrupts landscaping. Most contractors recommend interior injection first unless the crack is displaced, actively draining large volumes of water, or has failed a previous interior repair.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Number of Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Most contractors price per crack, though multiple repairs in one visit typically qualify for a discount of 10 to 20 percent per additional crack. A basement with five or six injection repairs may be quoted as a flat-rate project rather than per-crack pricing.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Active Water Infiltration</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>A dry crack uses epoxy injection, which is the cheaper option. An actively leaking crack requires polyurethane foam, which expands as it cures to fill irregular voids and block water flow. Polyurethane is slightly more expensive and cannot be substituted with epoxy on a wet crack since epoxy will not bond to a wet concrete surface.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Foundation Material</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Poured concrete foundations are the easiest to inject and repair. Block foundations are more complex because water can travel through the hollow cores of the blocks, meaning a visible crack on the surface may be the exit point for water entering several blocks away. Block wall repairs often require more investigation and may involve filling cores in addition to surface crack repair.</p>
        </section>

        {/* Epoxy vs Polyurethane */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Epoxy Injection vs Polyurethane Foam</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>The two most common interior repair methods work differently and are not interchangeable.</p>

          <div className='overflow-x-auto not-prose mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='p-3 text-left font-semibold'>Factor</th>
                  <th className='p-3 text-left font-semibold'>Epoxy Injection</th>
                  <th className='p-3 text-left font-semibold'>Polyurethane Foam</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Structural repair</td>
                  <td className='p-3 text-slate-700'>Yes &mdash; restores tensile strength</td>
                  <td className='p-3 text-slate-700'>No &mdash; flexible seal only</td>
                </tr>
                <tr className='bg-gray-50 border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Water stop</td>
                  <td className='p-3 text-slate-700'>Partial &mdash; requires dry surface</td>
                  <td className='p-3 text-slate-700'>Excellent &mdash; expands to fill wet cracks</td>
                </tr>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Flexibility after cure</td>
                  <td className='p-3 text-slate-700'>Rigid</td>
                  <td className='p-3 text-slate-700'>Flexible</td>
                </tr>
                <tr className='bg-gray-50 border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Best surface condition</td>
                  <td className='p-3 text-slate-700'>Dry or slightly damp</td>
                  <td className='p-3 text-slate-700'>Wet or actively leaking</td>
                </tr>
                <tr className='bg-white border-b border-slate-200'>
                  <td className='p-3 font-medium text-slate-900'>Average cost</td>
                  <td className='p-3 text-slate-700'>$350 to $800 per crack</td>
                  <td className='p-3 text-slate-700'>$400 to $1,000 per crack</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='p-3 font-medium text-slate-900'>Longevity</td>
                  <td className='p-3 text-slate-700'>20+ years on stable crack</td>
                  <td className='p-3 text-slate-700'>10 to 20 years, may need retreatment if crack moves</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed mb-6'>The rule of thumb: if the crack is dry and you want to restore structural strength, use epoxy. If the crack is wet or actively leaking, use polyurethane. A contractor who recommends epoxy on an actively leaking crack is either cutting corners or inexperienced.</p>
        </section>

        {/* DIY vs Professional */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>DIY vs Professional Foundation Crack Repair</h2>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>When DIY Makes Sense</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Hairline cracks under 1/8 inch with no displacement, no active leaking, and no signs of progression are reasonable DIY candidates. Hydraulic cement ($15 to $30) can fill small surface cracks as a temporary measure. DIY polyurethane injection kits ($50 to $150) are available and can work on minor leaking cracks if the instructions are followed carefully. DIY is appropriate when the crack is cosmetic, stable, and not associated with any bowing, displacement, or structural concern.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>When to Call a Professional</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Call a professional when the crack is wider than 1/4 inch, shows horizontal displacement, is horizontal in orientation, is accompanied by bowing or bulging, is actively leaking a significant volume of water, or has been previously repaired and has reopened. Any crack that has changed in width or length since you first noticed it warrants a professional evaluation. Foundation repair is not the place to cut corners &mdash; an incorrect repair on a structural crack can mask a worsening problem until it becomes a catastrophic failure.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Getting a Structural Engineer Involved</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>For cracks showing displacement or any sign of active structural movement, a structural engineer evaluation ($300 to $700) before repair is money well spent. An engineer will assess whether the crack is stable or actively progressing, recommend the appropriate repair method, and provide documentation that protects your home&rsquo;s value and insurability. Many foundation repair contractors can diagnose common crack types accurately, but an independent engineer has no financial stake in recommending a more expensive repair.</p>
        </section>

        {/* Insurance */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Does Homeowners Insurance Cover Foundation Crack Repair?</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Standard homeowners insurance does not cover foundation cracks caused by settling, soil movement, hydrostatic pressure, or normal wear &mdash; which describes the cause of most foundation cracks. Insurance may cover crack repair when the damage resulted from a sudden, covered peril such as an earthquake (with earthquake coverage), a burst pipe that caused soil washout, or a vehicle impact.</p>
          <p className='text-slate-700 leading-relaxed mb-6'>Even in covered scenarios, most policies exclude &ldquo;earth movement&rdquo; as a covered cause, which can include settling and soil pressure. Read your policy carefully and contact your insurer before beginning any repair work to understand what documentation they require. A structural engineer report and pre-repair photographs are essential for any insurance claim involving foundation damage.</p>
        </section>

        {/* Monitoring */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>How to Monitor a Crack Before Repairing It</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Not every crack needs immediate repair. For cracks that are hairline, dry, and showing no signs of displacement, monitoring for 60 to 90 days before repairing makes sense. A crack that is stable and not growing is a waterproofing concern. A crack that is actively widening is a structural concern.</p>
          <p className='text-slate-700 leading-relaxed mb-6'>To monitor a crack, draw pencil lines across the crack at both ends and note the date. Check monthly. If the crack extends beyond your marks or widens measurably, call a structural engineer. You can also use a crack monitor gauge ($20 to $50) for more precise tracking.</p>
        </section>

        {/* Prevention */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>How to Prevent Foundation Cracks</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Most foundation cracks are caused or worsened by water. The best prevention is managing moisture around your foundation.</p>
          <div className='space-y-4 not-prose mb-6'>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-600 font-bold mt-0.5'>&#9679;</span>
              <p className='text-slate-700 text-sm'>Keep gutters clean and extend downspouts at least 6 feet from the foundation</p>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-600 font-bold mt-0.5'>&#9679;</span>
              <p className='text-slate-700 text-sm'>Maintain positive grading away from the house &mdash; the soil should slope down at least 1 inch per foot for the first 6 feet</p>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-600 font-bold mt-0.5'>&#9679;</span>
              <p className='text-slate-700 text-sm'>Do not allow soil to become waterlogged against the foundation from irrigation or drainage</p>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-600 font-bold mt-0.5'>&#9679;</span>
              <p className='text-slate-700 text-sm'>Maintain a <a href='/articles/sump-pump-buying-guide' className='text-violet-600 underline'>working sump pump</a> with battery backup to prevent hydrostatic pressure buildup</p>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-600 font-bold mt-0.5'>&#9679;</span>
              <p className='text-slate-700 text-sm'>Address <a href='/articles/basement-efflorescence' className='text-violet-600 underline'>efflorescence</a> early &mdash; it signals water migration through the wall that will eventually find or create a crack</p>
            </div>
            <div className='flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100'>
              <span className='text-violet-600 font-bold mt-0.5'>&#9679;</span>
              <p className='text-slate-700 text-sm'>Keep large trees at least 20 feet from the foundation &mdash; root systems can exert significant pressure on foundation walls over time</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='mb-12 bg-violet-50 border border-violet-200 rounded-2xl p-8 text-center'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Get Foundation Crack Repair Quotes</h2>
          <p className='text-slate-700 mb-6'>Compare free estimates from local foundation specialists. Protect your home&rsquo;s value.</p>
          <LeadForm />
        </section>

        {/* FAQ */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>How much does foundation crack repair cost in 2026?</h4>
              <p className='text-slate-700'>Most homeowners pay $350 to $1,500 per crack for interior injection repairs. Epoxy injection runs $350 to $800 per crack for dry structural cracks. Polyurethane foam injection runs $400 to $1,000 per crack for actively leaking cracks. Carbon fiber strap installation for bowing walls costs $800 to $1,500 per strap. Exterior excavation repairs, which address the crack from outside the foundation, run $2,000 to $7,000 per crack. Severe structural failure requiring underpinning or piering can reach $10,000 to $30,000 or more depending on the number of piers required.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Are foundation cracks serious?</h4>
              <p className='text-slate-700'>It depends on the type. Hairline vertical cracks under 1/8 inch with no displacement are common in poured concrete foundations and are usually the result of normal curing shrinkage. They are a water concern but not a structural one. Cracks wider than 1/4 inch, diagonal cracks showing displacement, stair-step cracks in block walls, and any horizontal crack are all more serious and warrant professional evaluation. A horizontal crack in a basement wall is always a structural red flag &mdash; it indicates lateral soil pressure pushing the wall inward and should be evaluated immediately.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>What is the difference between epoxy and polyurethane crack repair?</h4>
              <p className='text-slate-700'>Epoxy injection is a rigid repair that bonds the two sides of the crack together and restores the tensile strength of the concrete. It requires a dry surface to bond properly and is the right choice for structural cracks that are not actively leaking. Polyurethane foam injection is a flexible repair that expands as it cures to fill irregular voids and block water flow. It works on wet or actively leaking cracks where epoxy will not bond. Polyurethane does not restore structural strength &mdash; it is a waterproofing repair, not a structural one. Using the wrong method for the crack condition is one of the most common foundation repair mistakes.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Can I repair a foundation crack myself?</h4>
              <p className='text-slate-700'>For small, dry, hairline cracks with no displacement, yes. DIY polyurethane injection kits are available for minor leaking cracks and can be effective if directions are followed carefully. However, anything wider than 1/4 inch, showing displacement, actively leaking significant water, or associated with any bowing or wall movement should be handled by a professional. Attempting to DIY a structural crack repair can mask a worsening problem and create liability issues when you eventually sell the home. A professional repair with documentation is also more reassuring to home inspectors and buyers than a DIY patch.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>How long does foundation crack repair last?</h4>
              <p className='text-slate-700'>A properly done epoxy injection on a stable crack lasts 20 years or more. Polyurethane foam repairs typically last 10 to 20 years and may need retreatment if the crack continues to move seasonally. Carbon fiber straps and steel I-beam bracing are considered permanent stabilization. Exterior excavation repairs with waterproof membrane application are the most durable option, lasting the life of the foundation when properly done. Any repair will fail prematurely if the underlying moisture or drainage problem driving crack formation is not addressed.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>Does fixing a foundation crack increase home value?</h4>
              <p className='text-slate-700'>Yes, documented professional crack repairs increase resale value by removing a significant inspection red flag. An unrepaired foundation crack &mdash; especially a horizontal one or one with displacement &mdash; can kill a sale or trigger a major price reduction. A repair with a transferable warranty from a licensed contractor is particularly valuable because it gives the buyer assurance that the problem was handled correctly. Buyers and their inspectors know the difference between a professionally repaired crack with documentation and a patched-over crack with no records.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>When should I call a structural engineer about a foundation crack?</h4>
              <p className='text-slate-700'>Call a structural engineer when the crack is horizontal, shows any horizontal displacement between the two sides, is wider than 1/4 inch, is associated with bowing or bulging of the wall, has changed in width or length since you first noticed it, or has been previously repaired and has reopened. A structural engineer evaluation costs $300 to $700 and is independent of any contractor who might benefit from recommending a more expensive repair. For any crack where you are uncertain about severity, an engineer evaluation is the right first step before spending money on repairs.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-2'>How do I know if my foundation crack is structural or cosmetic?</h4>
              <p className='text-slate-700'>Three factors separate cosmetic from structural: direction, width, and displacement. Vertical hairline cracks under 1/8 inch with smooth edges and no displacement are almost always cosmetic shrinkage cracks. Horizontal cracks are always structural. Diagonal cracks at 45-degree angles or stair-step cracks in block walls are structural indicators that require evaluation. Any crack where one side has shifted relative to the other &mdash; even slightly &mdash; is structural regardless of width. When in doubt, draw pencil lines across the ends of the crack, note the date, and monitor it monthly. A crack that grows is a crack that needs professional attention.</p>
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Foundation Crack</h4>
              <p className='text-slate-700 text-sm'>A fracture or separation in a poured concrete or masonry block foundation wall caused by curing shrinkage, differential settling, hydrostatic pressure, freeze-thaw cycles, or structural overload. Not all cracks are equal &mdash; type, direction, width, and displacement determine severity and repair method.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Epoxy Injection</h4>
              <p className='text-slate-700 text-sm'>A repair method that injects a two-part epoxy resin into a crack under low pressure to fill the void and bond the two sides together. Restores the tensile strength of the concrete and is appropriate for dry, stable structural cracks. Requires a dry surface and is not suitable for actively leaking cracks.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Polyurethane Foam Injection</h4>
              <p className='text-slate-700 text-sm'>A repair method that injects expanding polyurethane foam into a crack to fill voids and block water infiltration. Flexible after curing, allowing for minor seasonal movement. The correct method for wet or actively leaking cracks. Does not restore structural strength.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Hydrostatic Pressure</h4>
              <p className='text-slate-700 text-sm'>The force exerted by water-saturated soil against a foundation wall. As groundwater accumulates with no drainage path, pressure builds against the wall and floor slab, causing horizontal cracking, bowing, and seepage. Relieved by perimeter drainage systems and sump pumps. See our <a href='/articles/french-drain-vs-sump-pump' className='text-violet-600 underline'>French drain vs sump pump guide</a> for drainage solutions.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Carbon Fiber Straps</h4>
              <p className='text-slate-700 text-sm'>High-tensile-strength carbon fiber straps epoxied vertically to a bowing basement wall to prevent further inward movement. A permanent stabilization method that does not require excavation. Does not push the wall back to its original position but prevents further movement. Cost runs $800 to $1,500 per strap.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Horizontal Crack</h4>
              <p className='text-slate-700 text-sm'>A crack running horizontally across a foundation wall, typically at mid-height. Indicates lateral soil pressure pushing the wall inward and is always a structural concern requiring professional evaluation. The most serious common foundation crack type.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Differential Settling</h4>
              <p className='text-slate-700 text-sm'>Uneven sinking or movement of different sections of a foundation caused by variations in soil bearing capacity, moisture content, or load distribution. Produces diagonal cracks at corners and around window openings. Minor differential settling is common; progressive settling requires engineering evaluation and possible underpinning.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Efflorescence</h4>
              <p className='text-slate-700 text-sm'>White, chalky mineral deposits left on concrete or masonry surfaces when water migrates through the wall and evaporates, depositing dissolved salts. Not mold, but a reliable indicator of water infiltration through the foundation. Often appears near cracks or at mortar joints. See our <a href='/articles/basement-efflorescence' className='text-violet-600 underline'>efflorescence guide</a> for more detail.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Exterior Excavation Repair</h4>
              <p className='text-slate-700 text-sm'>A foundation crack repair approach that involves digging down to the footing on the outside of the foundation wall, cleaning and preparing the crack surface, applying a waterproof membrane or hydraulic cement, and backfilling. More expensive than interior injection but addresses the crack from the water-entry side and is more durable for severely displaced or high-volume leaking cracks.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Underpinning</h4>
              <p className='text-slate-700 text-sm'>A structural repair method used when a foundation is actively settling or sinking. Steel push piers or helical piers are driven into stable soil below the settling zone and attached to the foundation to transfer the load. The most expensive foundation repair category, ranging from $10,000 to $30,000 or more depending on the number of piers required.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <h3 className='text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4'>On TheBasement.Guide</h3>
          <div className='grid md:grid-cols-2 gap-4 mb-8'>
            <Link href='/articles/types-of-foundation-cracks' className='block bg-white rounded-2xl p-6 hover:bg-violet-50 transition-colors border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-1'>Types of Foundation Cracks</h4>
              <p className='text-slate-600 text-sm'>Diagnose whether your crack is cosmetic or a structural red flag.</p>
            </Link>
            <Link href='/articles/bowing-basement-walls' className='block bg-white rounded-2xl p-6 hover:bg-violet-50 transition-colors border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-1'>Bowing Basement Walls</h4>
              <p className='text-slate-600 text-sm'>Causes, repair methods, and costs for bowing and leaning walls.</p>
            </Link>
            <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-white rounded-2xl p-6 hover:bg-violet-50 transition-colors border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-1'>Complete Basement Waterproofing Guide</h4>
              <p className='text-slate-600 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
            </Link>
            <Link href='/articles/basement-efflorescence' className='block bg-white rounded-2xl p-6 hover:bg-violet-50 transition-colors border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-1'>Basement Efflorescence Explained</h4>
              <p className='text-slate-600 text-sm'>What that white powder on your walls really means and how to stop it.</p>
            </Link>
            <Link href='/articles/french-drain-vs-sump-pump' className='block bg-white rounded-2xl p-6 hover:bg-violet-50 transition-colors border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-1'>French Drain vs Sump Pump</h4>
              <p className='text-slate-600 text-sm'>Which drainage system do you need, and do you need both?</p>
            </Link>
            <Link href='/articles/basement-waterproofing-cost' className='block bg-white rounded-2xl p-6 hover:bg-violet-50 transition-colors border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-1'>Basement Waterproofing Cost</h4>
              <p className='text-slate-600 text-sm'>Full cost breakdown for interior and exterior waterproofing systems.</p>
            </Link>
            <Link href='/articles/interior-vs-exterior-waterproofing' className='block bg-white rounded-2xl p-6 hover:bg-violet-50 transition-colors border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-1'>Interior vs Exterior Waterproofing</h4>
              <p className='text-slate-600 text-sm'>Which approach is right for your basement and budget?</p>
            </Link>
          </div>
        </section>

      </article>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
