import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wet Basement Walls: Causes, Fixes, and When to Worry (2026) | The Basement Guide',
  description: 'Wet basement walls have six different causes and six different fixes. Use the foil test to diagnose your problem, then follow the right fix — from free to $15,000.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the foil test and how do I do it?',
      acceptedAnswer: { '@type': 'Answer', text: 'The foil test is a simple diagnostic that determines whether basement wall moisture is coming through the wall from outside (seepage) or forming on the wall surface from humid indoor air (condensation). Tape a 12-inch square of aluminum foil flat against the wet area of the wall, pressing all edges tight so no air can get behind it, and leave it for 24 to 48 hours. If the outside face of the foil (room side) is wet when you remove it, the moisture is condensation from indoor air hitting the cool wall surface, and a dehumidifier is the fix. If the inside face (wall side) is wet, water is migrating through the wall from the soil side, and waterproofing is needed. If both sides are wet, you have both problems. This test saves homeowners from spending thousands on waterproofing when a $300 dehumidifier would have solved the problem, and from buying a dehumidifier when they have a genuine water intrusion issue that requires drainage.' },
    },
    {
      '@type': 'Question',
      name: 'Why are my basement walls wet when it has not rained?',
      acceptedAnswer: { '@type': 'Answer', text: 'Two common causes: condensation (humid indoor air meeting cool walls) and a high water table pushing moisture through the concrete via vapor diffusion. Do the foil test to determine which one. Condensation is solved with a dehumidifier. Vapor diffusion requires a vapor barrier or waterproofing treatment.' },
    },
    {
      '@type': 'Question',
      name: 'Is it normal for basement walls to be damp?',
      acceptedAnswer: { '@type': 'Answer', text: 'Slight coolness is normal. Visible moisture, water droplets, or wet patches are not. Concrete walls will always feel cooler than the air, but they should not feel wet. Any persistent dampness indicates a moisture source that should be identified and addressed.' },
    },
    {
      '@type': 'Question',
      name: 'Can I just paint over wet basement walls with waterproof paint?',
      acceptedAnswer: { '@type': 'Answer', text: 'Waterproof paint like DryLok can reduce minor vapor diffusion through porous concrete, but it cannot stop active water pressure from cracks, cove joints, or hydrostatic pressure. If water is actively entering your basement, paint will peel off within a year. Fix the water source first, then paint as a secondary barrier.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix wet basement walls?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on the cause. Extending downspouts costs $10-$30 each. A dehumidifier costs $200-$400. Crack injection runs $300-$600 per crack. An interior French drain system costs $3,000-$10,000. Exterior waterproofing runs $5,000-$15,000.' },
    },
    {
      '@type': 'Question',
      name: 'Should I buy a house with wet basement walls?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily a deal-breaker, but get a professional inspection before closing. The key question is what is causing the moisture and how much will it cost to fix. Condensation or poor drainage is very different from structural wall failure or a failed exterior waterproofing system.' },
    },
    {
      '@type': 'Question',
      name: 'Will wet basement walls cause mold?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, if the moisture persists. Mold can begin growing on damp surfaces within 24 to 48 hours in warm conditions. Concrete itself does not support mold well, but anything attached to or stored against a wet wall — drywall, wood framing, cardboard boxes, carpet — will grow mold quickly.' },
    },
    {
      '@type': 'Question',
      name: 'Can wet basement walls affect my home value?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Visible water damage, staining, efflorescence, and mold are red flags for buyers and home inspectors. Unresolved moisture issues can reduce your home value by 10 to 25 percent depending on severity. Conversely, a professionally waterproofed basement with documentation can actually increase value.' },
    },
    {
      '@type': 'Question',
      name: 'Do homes on septic systems have different basement moisture issues?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sometimes. If the septic system drainfield is located near the house, a saturated or failing drainfield can raise the local water table and increase hydrostatic pressure against basement walls. If your basement moisture coincides with septic system problems like slow drains, yard odor, or soggy ground over the drainfield, the septic system may be contributing.' },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wet Basement Walls: Causes, Fixes, and When to Worry',
  description: 'Wet basement walls have six different causes and six different fixes. Use the foil test to diagnose your problem, then follow the right fix.',
  image: 'https://thebasement.guide/wetwalls.jpg',
  author: { '@type': 'Organization', name: 'The Basement Guide', url: 'https://thebasement.guide' },
  publisher: { '@type': 'Organization', name: 'The Basement Guide', url: 'https://thebasement.guide' },
  datePublished: '2026-03-10',
  dateModified: '2026-03-10',
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Wet Basement Wall Fix Costs by Cause',
  description: 'Cost comparison of 6 common causes of wet basement walls with fix costs ranging from $0 to $15,000.',
  variableMeasured: ['Cause', 'DIY Cost', 'Pro Cost', 'DIY Feasible'],
  data: [
    { cause: 'Condensation', diyCost: '$200-$500', proCost: '$1,000-$3,000 (insulation)', diyFeasible: 'Yes' },
    { cause: 'Crack Seepage', diyCost: '$20-$60 per crack', proCost: '$300-$600 per crack', diyFeasible: 'Maybe' },
    { cause: 'Cove Joint Seepage', diyCost: 'Not recommended', proCost: '$3,000-$10,000', diyFeasible: 'No' },
    { cause: 'Efflorescence', diyCost: '$5-$20', proCost: '$100-$200', diyFeasible: 'Yes' },
    { cause: 'Poor Exterior Drainage', diyCost: '$10-$200', proCost: '$150-$1,500', diyFeasible: 'Yes' },
    { cause: 'Vapor Diffusion', diyCost: '$200-$500', proCost: '$1,000-$15,000', diyFeasible: 'Maybe' },
  ],
}

export default function WetBasementWalls() {
  return (
    <div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />

      {/* Article Hero */}
      <div className='relative h-96 w-full overflow-hidden'>
        <Image
          src='/wetwalls.jpg'
          alt='Wet basement wall with water seepage and efflorescence'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex flex-col justify-end p-8'>
          <span className='mb-3 inline-block w-fit rounded bg-teal-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white'>Waterproofing Guide</span>
          <h1 className='text-4xl font-bold text-white md:text-5xl'>
            Wet Basement Walls<br />
            <span className='text-teal-400'>Causes, Fixes & When to Worry</span>
          </h1>
          <p className='mt-3 max-w-2xl text-lg text-gray-200'>Six types of wet walls. Six different fixes. Costs from $0 to $15,000. Start with the foil test.</p>
          <div className='mt-4 flex items-center gap-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white'>BG</div>
            <div>
              <p className='text-sm font-semibold text-white'>The Basement Guide</p>
              <p className='text-xs text-gray-300'>Updated Mar 2026 &middot; 22 min read</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='mx-auto max-w-3xl px-4 py-10'>
        <p className='text-lg text-gray-700 leading-relaxed'>Wet basement walls are a symptom of one or more distinct moisture problems, each with a different cause, fix, and cost: condensation forming on cool wall surfaces from humid indoor air, water seeping through cracks under hydrostatic pressure, groundwater entering at the cove joint where wall meets footing, vapor diffusing slowly through porous concrete, or surface water from poor exterior drainage reaching the foundation. Diagnosing which problem you have before spending money is the most important step, because the correct fix for condensation (a dehumidifier) is completely different from the correct fix for cove joint seepage (an interior drainage system), and applying the wrong solution wastes both time and money. The foil test described in this guide takes two minutes to set up and reliably distinguishes between moisture coming through the wall from outside and moisture condensing on the wall surface from inside, which is the single most important diagnostic distinction in basement moisture management. Treatment costs range from free (extending a downspout) to $15,000 (exterior waterproofing excavation), making accurate diagnosis the highest-value action a homeowner can take before contacting a contractor.</p>
        <p className='text-lg text-gray-700 leading-relaxed mt-4'>Wet basement walls are not all the same problem. Water streaming through a crack during a rainstorm is a different issue than a wall that feels damp to the touch year-round, and both are different from white, crusty deposits appearing on the surface. Each has a different cause, a different fix, and a different price tag.</p>
        <p className='mt-4 text-lg text-gray-700 leading-relaxed'>The guides that treat them all the same lead homeowners to either overpay for a problem they could fix themselves or underpay for a band-aid that fails in six months. This guide walks through every type of wet basement wall, how to diagnose which one you have, what each fix actually costs, and when you need a professional versus when you can handle it yourself.</p>
        <p className='mt-4 text-gray-600'>If your basement has standing water on the floor rather than wet walls, see our <Link href='/articles/water-coming-up-through-basement-floor' className='text-teal-600 underline'>guide on water coming up through the basement floor</Link>. If the smell is the main problem, see our <Link href='/articles/basement-smells-like-sewage' className='text-teal-600 underline'>sewage smell guide</Link> or <Link href='/articles/musty-basement-smell' className='text-teal-600 underline'>musty smell guide</Link>.</p>

        {/* Foil Test */}
        <div className='my-8 rounded-xl border-2 border-teal-500 bg-teal-50 p-6'>
          <h2 className='text-2xl font-bold text-teal-800'>The Foil Test: Is It Seepage or Condensation?</h2>
          <p className='mt-2 text-gray-700'>Before doing anything else, figure out whether the moisture is coming through the wall from outside or forming on the surface from humid indoor air. This determines everything.</p>
          <div className='mt-4'>
            <p className='font-semibold text-gray-800'>How to do it:</p>
            <p className='mt-1 text-gray-700'>Tape a 12-inch square of aluminum foil flat against the wet area of the wall. Press the edges tight so no air gets behind it. Leave it for 24 to 48 hours, then remove it.</p>
          </div>
          <div className='mt-4 grid gap-3 md:grid-cols-3'>
            <div className='rounded-lg bg-yellow-100 p-4'>
              <p className='font-bold text-yellow-800'>Outside of foil is wet</p>
              <p className='mt-1 text-sm text-yellow-700'>You have <strong>condensation</strong>. Humid indoor air is meeting the cool wall. Dehumidifier, not waterproofing.</p>
            </div>
            <div className='rounded-lg bg-blue-100 p-4'>
              <p className='font-bold text-blue-800'>Inside of foil is wet</p>
              <p className='mt-1 text-sm text-blue-700'>You have <strong>seepage</strong>. Water is moving through the wall from the soil side. Waterproofing needed.</p>
            </div>
            <div className='rounded-lg bg-orange-100 p-4'>
              <p className='font-bold text-orange-800'>Both sides are wet</p>
              <p className='mt-1 text-sm text-orange-700'>You have <strong>both problems</strong>. Fix the seepage first, then address the humidity.</p>
            </div>
          </div>
          <p className='mt-3 text-sm text-gray-600'>This test takes two minutes to set up and saves you from spending $5,000 on waterproofing when you needed a $300 dehumidifier.</p>
        </div>

        {/* Diagnosis Table */}
        <h2 className='mt-10 text-3xl font-bold text-gray-900'>Types of Wet Basement Walls and What Each One Means</h2>
        <div className='mt-4 overflow-x-auto'>
          <table className='min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden'>
            <thead className='bg-gray-800 text-white'>
              <tr>
                <th className='px-4 py-3 text-left'>What You See</th>
                <th className='px-4 py-3 text-left'>What It Means</th>
                <th className='px-4 py-3 text-left'>Severity</th>
                <th className='px-4 py-3 text-left'>Likely Fix</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              <tr className='bg-white'><td className='px-4 py-3'>Uniform dampness across entire wall</td><td className='px-4 py-3'>Condensation or vapor diffusion through porous concrete</td><td className='px-4 py-3'>Low to moderate</td><td className='px-4 py-3'>Dehumidifier, ventilation, vapor barrier</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>Water seeping through a visible crack</td><td className='px-4 py-3'>Hydrostatic pressure forcing water through a structural crack</td><td className='px-4 py-3'>Moderate to high</td><td className='px-4 py-3'>Crack injection DIY or pro; address drainage</td></tr>
              <tr className='bg-white'><td className='px-4 py-3'>Water entering where wall meets floor</td><td className='px-4 py-3'>Hydrostatic pressure at the footing &mdash; #1 most common leak location</td><td className='px-4 py-3'>Moderate to high</td><td className='px-4 py-3'>Interior French drain + sump pump</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>White powdery deposits (efflorescence)</td><td className='px-4 py-3'>Mineral salts left as water passes through and evaporates</td><td className='px-4 py-3'>Low (cosmetic)</td><td className='px-4 py-3'>Clean deposits, address moisture source, seal wall</td></tr>
              <tr className='bg-white'><td className='px-4 py-3'>Wet streaks from window wells</td><td className='px-4 py-3'>Window well drainage failure</td><td className='px-4 py-3'>Moderate</td><td className='px-4 py-3'>Clean drain, add gravel, install cover</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>Damp patches only after rain</td><td className='px-4 py-3'>Surface water not draining away from foundation</td><td className='px-4 py-3'>Moderate</td><td className='px-4 py-3'>Fix grading, extend downspouts</td></tr>
              <tr className='bg-red-50'><td className='px-4 py-3 font-semibold text-red-700'>Wall is wet AND bowing inward</td><td className='px-4 py-3 text-red-700'>Hydrostatic pressure causing structural failure</td><td className='px-4 py-3 font-bold text-red-700'>HIGH &mdash; URGENT</td><td className='px-4 py-3'>Structural repair first, waterproofing second</td></tr>
            </tbody>
          </table>
        </div>
        <div className='mt-3 rounded-lg bg-red-50 border border-red-200 p-4'>
          <p className='font-semibold text-red-800'>If your wall is both wet AND bowing, that is a structural emergency.</p>
          <p className='mt-1 text-red-700'>See our <Link href='/articles/bowing-basement-walls' className='text-red-600 underline font-semibold'>guide on bowing basement walls</Link> before addressing the water. The structural problem must be stabilized first.</p>
        </div>

        {/* 6 Causes */}
        <h2 className='mt-12 text-3xl font-bold text-gray-900'>6 Causes of Wet Basement Walls (and How to Fix Each One)</h2>

        {/* Cause 1: Condensation */}
        <div className='mt-8'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white font-bold text-lg'>1</span>
            <h3 className='text-2xl font-bold text-gray-900'>Condensation</h3>
            <span className='ml-2 rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700'>Fix: $200&ndash;$500</span>
          </div>
          <p className='text-gray-700'>Condensation is the most misdiagnosed basement wall problem. Homeowners see wet walls and assume water is coming through the concrete. In many cases &mdash; especially in summer &mdash; the moisture is forming on the surface because warm, humid air from the house meets the naturally cool basement walls (typically 55&ndash;60&deg;F year-round).</p>
          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-800'>Clues it is condensation:</p>
            <ul className='mt-2 list-disc pl-5 text-gray-700 space-y-1'>
              <li>Walls are uniformly damp, not just in one spot</li>
              <li>Moisture is worse in summer than winter</li>
              <li>The foil test shows water on the room-facing side</li>
              <li>Cold water pipes in the basement are also sweating</li>
              <li>You can see or feel humidity in the air</li>
            </ul>
          </div>
          <div className='mt-4 space-y-3'>
            <p className='font-semibold text-gray-800'>How to fix it:</p>
            <p className='text-gray-700'><strong>Step 1 &mdash; Run a dehumidifier.</strong> A basement dehumidifier rated for your square footage is the primary fix. Set it to maintain 30&ndash;50% relative humidity. For a full rundown on sizing and models, see our <Link href='/articles/best-basement-dehumidifiers' className='text-teal-600 underline'>best basement dehumidifiers guide</Link>. Cost: $200&ndash;$400 for a quality unit.</p>
            <p className='text-gray-700'><strong>Step 2 &mdash; Improve air circulation.</strong> Stagnant air makes condensation worse. A simple box fan or HVAC air circulation keeps air moving and reduces the temperature differential that causes condensation.</p>
            <p className='text-gray-700'><strong>Step 3 &mdash; Insulate cold surfaces.</strong> Wrapping cold water pipes with foam insulation eliminates pipe sweating. Insulating basement walls with rigid foam or spray foam reduces the temperature differential. See our <Link href='/articles/basement-insulation-guide' className='text-teal-600 underline'>basement insulation guide</Link> for material options and costs.</p>
            <p className='text-gray-700'><strong>Step 4 &mdash; Check your dryer vent.</strong> A clothes dryer vented into the basement instead of to the outside pumps massive amounts of moisture into the air. This single issue causes more basement condensation problems than most homeowners realize. Make sure the dryer vent exits the building completely.</p>
          </div>
          <p className='mt-3 text-sm text-gray-500'>Cost: $200&ndash;$500 for a dehumidifier and pipe insulation. $1,000&ndash;$3,000 if adding wall insulation.</p>
        </div>

        {/* Cause 2: Crack Seepage */}
        <div className='mt-10'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white font-bold text-lg'>2</span>
            <h3 className='text-2xl font-bold text-gray-900'>Water Seeping Through Wall Cracks</h3>
            <span className='ml-2 rounded bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700'>Fix: $20&ndash;$600</span>
          </div>
          <p className='text-gray-700'>Concrete cracks. Every poured concrete wall develops cracks over time as the concrete cures, the house settles, and soil pressure shifts. Most cracks are cosmetic. But when a crack goes all the way through the wall, water under pressure from the soil side pushes through and enters your basement.</p>
          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-800'>Clues it is crack seepage:</p>
            <ul className='mt-2 list-disc pl-5 text-gray-700 space-y-1'>
              <li>Water appears at a specific crack, not uniformly across the wall</li>
              <li>Worse during and immediately after rain</li>
              <li>The crack may be vertical (most common in poured walls), horizontal (structural concern), or stair-step pattern (block walls)</li>
              <li>You can see the water actively flowing during heavy rain</li>
            </ul>
          </div>
          <div className='mt-4 space-y-3'>
            <p className='text-gray-700'><strong>For hairline to moderate cracks (&lt;1/4 inch) in poured concrete walls:</strong> Polyurethane or epoxy crack injection seals the crack from inside. The material is injected under pressure and fills the entire crack through the wall thickness. DIY kits cost $20&ndash;$60 per crack. Professional injection costs $300&ndash;$600 per crack and includes a warranty. This is a permanent fix for non-structural cracks.</p>
            <p className='text-gray-700'><strong>For cracks in block walls:</strong> Block walls are harder to inject because the crack pattern follows mortar joints. Exterior waterproofing membrane or an interior drainage system is typically more effective than injection for block wall leaks.</p>
            <p className='text-gray-700'><strong>For horizontal cracks or cracks with wall displacement:</strong> These indicate structural movement from soil pressure. The crack is a symptom, not the cause. See our <Link href='/articles/types-of-foundation-cracks' className='text-teal-600 underline'>guide on types of foundation cracks</Link> to determine severity, and our <Link href='/articles/foundation-crack-repair-cost' className='text-teal-600 underline'>foundation crack repair cost guide</Link> for pricing.</p>
          </div>
          <p className='mt-3 text-sm text-gray-500'>Cost: $20&ndash;$60 DIY per crack. $300&ndash;$600 professional per crack. $1,000&ndash;$5,000 if structural repair is needed.</p>
        </div>

        {/* Cause 3: Cove Joint */}
        <div className='mt-10'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white font-bold text-lg'>3</span>
            <h3 className='text-2xl font-bold text-gray-900'>Cove Joint Seepage: Where Wall Meets Floor</h3>
            <span className='ml-2 rounded bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700'>Fix: $3,000&ndash;$10,000</span>
          </div>
          <p className='text-gray-700'>The cove joint is where the basement wall sits on the footing. In poured concrete basements, the wall and footing are separate pours, creating a natural cold joint that is not watertight. This is <strong>the single most common location for basement water entry</strong>. When the soil around the foundation becomes saturated, hydrostatic pressure pushes water through this joint.</p>
          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-800'>Clues it is cove joint seepage:</p>
            <ul className='mt-2 list-disc pl-5 text-gray-700 space-y-1'>
              <li>Water appears along the base of the wall, sometimes the entire perimeter</li>
              <li>Worse during or after heavy rain or snowmelt</li>
              <li>No visible crack above the waterline</li>
              <li>Water may pool along the wall-floor junction</li>
            </ul>
          </div>
          <p className='mt-4 text-gray-700'>Cove joint seepage <strong>cannot be fixed</strong> by sealing the joint from inside with caulk or hydraulic cement. The water pressure will push through any surface-applied patch. The correct fix is an interior perimeter French drain system that intercepts the water before it reaches the floor and channels it to a sump pump.</p>
          <p className='mt-3 text-gray-700'>An interior French drain involves cutting a narrow trench along the inside perimeter of the basement floor, installing perforated drain pipe in gravel, and covering it with new concrete. Water that enters at the cove joint drops into the drain and flows to the sump pit. The sump pump discharges it outside and away from the house.</p>
          <p className='mt-3 text-sm text-gray-500'>Cost: $3,000&ndash;$10,000 depending on linear footage. See our <Link href='/articles/french-drain-cost' className='text-teal-600 underline'>French drain cost guide</Link> and <Link href='/articles/basement-waterproofing-cost' className='text-teal-600 underline'>basement waterproofing cost guide</Link> for detailed pricing. This is a professional job.</p>
        </div>

        {/* Cause 4: Efflorescence */}
        <div className='mt-10'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white font-bold text-lg'>4</span>
            <h3 className='text-2xl font-bold text-gray-900'>Efflorescence: White Deposits on Walls</h3>
            <span className='ml-2 rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700'>Fix: $5&ndash;$20 (cleaning)</span>
          </div>
          <p className='text-gray-700'>Efflorescence is the white, powdery, or crystalline deposit that appears on concrete and masonry walls. It is not mold. It is mineral salt &mdash; primarily calcium carbonate &mdash; left behind when water passes through the concrete, dissolves the calcium, and evaporates on the surface.</p>
          <div className='mt-4 rounded-lg bg-blue-50 border border-blue-200 p-4'>
            <p className='font-semibold text-blue-800'>What it means:</p>
            <p className='mt-1 text-blue-700'>Efflorescence itself is cosmetic and harmless. But it is proof that water is moving through your wall. Where there is efflorescence, there is moisture &mdash; even if the wall does not feel wet to the touch.</p>
          </div>
          <p className='mt-4 text-gray-700'>Clean the deposits with a stiff brush and a solution of white vinegar and water (1:1 ratio). For heavy deposits, a muriatic acid wash (follow safety precautions) removes them completely. Then address the underlying moisture source using the diagnostic approach in this guide. For a deeper dive, see our <Link href='/articles/basement-efflorescence' className='text-teal-600 underline'>basement efflorescence guide</Link>.</p>
          <p className='mt-3 text-sm text-gray-500'>Cost: $5&ndash;$20 for cleaning supplies. The underlying moisture fix varies by cause.</p>
        </div>

        {/* Cause 5: Poor Exterior Drainage */}
        <div className='mt-10'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white font-bold text-lg'>5</span>
            <h3 className='text-2xl font-bold text-gray-900'>Poor Exterior Drainage</h3>
            <span className='ml-2 rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700'>Fix: $10&ndash;$1,500</span>
          </div>
          <p className='text-gray-700'>Sometimes, wet walls are not a basement problem at all. They are a grading, gutter, and downspout problem. Water is being delivered directly to your foundation wall from the surface, and gravity does the rest.</p>
          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-800'>Clues it is a drainage problem:</p>
            <ul className='mt-2 list-disc pl-5 text-gray-700 space-y-1'>
              <li>Walls get wet only after rain, not during dry periods</li>
              <li>The wet areas correspond to where downspouts discharge near the foundation</li>
              <li>The soil around the foundation slopes toward the house instead of away</li>
              <li>Gutters are clogged, overflowing, or missing</li>
              <li>Window wells fill with water during storms</li>
            </ul>
          </div>
          <div className='mt-4 space-y-3'>
            <p className='text-gray-700'><strong>Extend downspouts.</strong> Discharge water at least 4&ndash;6 feet from the foundation. Underground extensions with pop-up emitters are the cleanest solution. Cost: $10&ndash;$30 per downspout DIY or $150&ndash;$300 per downspout professionally installed with underground pipe.</p>
            <p className='text-gray-700'><strong>Fix the grading.</strong> The soil around your foundation should slope away from the house at a minimum of 1 inch per foot for the first 6 feet. Add topsoil and regrade if needed. Cost: $500&ndash;$1,500 for professional regrading around the full perimeter.</p>
            <p className='text-gray-700'><strong>Clean and repair gutters.</strong> Overflowing gutters dump water directly against the foundation wall. Clean them twice a year (spring and fall) and repair any leaking joints. Cost: $100&ndash;$250 for professional gutter cleaning.</p>
            <p className='text-gray-700'><strong>Install window well covers and drains.</strong> If window wells fill with water, add 6&ndash;12 inches of clean gravel at the bottom for drainage and install a clear plastic cover on top to keep rain out. Cost: $20&ndash;$50 per window well.</p>
          </div>
          <div className='mt-4 rounded-lg bg-yellow-50 border border-yellow-200 p-4'>
            <p className='text-yellow-800 font-semibold'>This is the cheapest category of fixes and should always be addressed first.</p>
            <p className='mt-1 text-yellow-700'>Many homeowners spend $5,000 on a French drain when $200 in downspout extensions and an afternoon of regrading would have solved the problem.</p>
          </div>
        </div>

        {/* Cause 6: Vapor Diffusion */}
        <div className='mt-10'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white font-bold text-lg'>6</span>
            <h3 className='text-2xl font-bold text-gray-900'>Vapor Diffusion Through Porous Concrete</h3>
            <span className='ml-2 rounded bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700'>Fix: $200&ndash;$15,000</span>
          </div>
          <p className='text-gray-700'>Concrete is not waterproof. It is porous. Even without cracks, water vapor can slowly migrate through intact concrete walls from the wet soil side to the dry interior side. This is called vapor diffusion, and it produces walls that feel perpetually damp without any visible water flow or specific wet spots.</p>
          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            <p className='font-semibold text-gray-800'>Clues it is vapor diffusion:</p>
            <ul className='mt-2 list-disc pl-5 text-gray-700 space-y-1'>
              <li>Walls feel uniformly cool and clammy</li>
              <li>No visible cracks or entry points</li>
              <li>The foil test shows moisture on the wall side</li>
              <li>The problem persists year-round regardless of the weather</li>
              <li>Worse in basements with high water tables</li>
            </ul>
          </div>
          <div className='mt-4 space-y-3'>
            <p className='text-gray-700'><strong>Interior vapor barrier.</strong> A heavy-duty 6&ndash;20 mil polyethylene vapor barrier attached to the wall surface blocks vapor from entering the living space. The barrier is typically installed with a drainage mat behind it that channels any water that does come through down to the perimeter drain. See our <Link href='/articles/best-vapor-barriers' className='text-teal-600 underline'>best vapor barriers guide</Link> for product recommendations.</p>
            <p className='text-gray-700'><strong>Exterior waterproofing membrane.</strong> Applied to the outside of the foundation wall during excavation, this is the most permanent solution but also the most expensive ($5,000&ndash;$15,000). See our <Link href='/articles/interior-vs-exterior-waterproofing' className='text-teal-600 underline'>interior vs exterior waterproofing comparison</Link> for when each approach makes sense.</p>
            <p className='text-gray-700'><strong>Crystalline waterproofing.</strong> A penetrating treatment that reacts with moisture inside the concrete to form crystals that block the pores. Effective for vapor diffusion but not for active water flow. See our <Link href='/articles/crystalline-waterproofing' className='text-teal-600 underline'>crystalline waterproofing guide</Link> for details.</p>
          </div>
          <p className='mt-3 text-sm text-gray-500'>Cost: $500&ndash;$2,000 for interior vapor barrier. $5,000&ndash;$15,000 for exterior membrane. $200&ndash;$500 for crystalline treatment DIY.</p>
        </div>

        {/* When to Worry */}
        <h2 className='mt-12 text-3xl font-bold text-gray-900'>When to Worry: Warning Signs That Need Professional Help</h2>
        <p className='mt-2 text-gray-600'>Most wet basement walls are manageable. But some situations require immediate professional assessment.</p>
        <div className='mt-4 overflow-x-auto'>
          <table className='min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden'>
            <thead className='bg-red-700 text-white'>
              <tr>
                <th className='px-4 py-3 text-left'>Warning Sign</th>
                <th className='px-4 py-3 text-left'>What It Means</th>
                <th className='px-4 py-3 text-left'>Urgency</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              <tr className='bg-red-50'><td className='px-4 py-3 font-semibold'>Wall is bowing, leaning, or tilting inward</td><td className='px-4 py-3'>Structural failure from soil pressure. Water is a symptom, not the primary problem.</td><td className='px-4 py-3 font-bold text-red-700'>Immediate. Call a structural engineer.</td></tr>
              <tr className='bg-red-50'><td className='px-4 py-3 font-semibold'>Horizontal crack across the middle of the wall</td><td className='px-4 py-3'>Soil pressure exceeding wall capacity.</td><td className='px-4 py-3 font-bold text-red-700'>Immediate. See our <Link href='/articles/bowing-basement-walls' className='text-red-600 underline'>bowing walls guide</Link>.</td></tr>
              <tr className='bg-yellow-50'><td className='px-4 py-3'>Stair-step cracks in block walls widening over time</td><td className='px-4 py-3'>Progressive structural movement.</td><td className='px-4 py-3 font-semibold text-yellow-700'>Soon. Get a professional evaluation.</td></tr>
              <tr className='bg-yellow-50'><td className='px-4 py-3'>Active water flowing through the wall during rain</td><td className='px-4 py-3'>Significant hydrostatic pressure. Interior drainage system likely needed.</td><td className='px-4 py-3 font-semibold text-yellow-700'>Soon. Will not improve on its own.</td></tr>
              <tr className='bg-yellow-50'><td className='px-4 py-3'>Sewage or foul odor accompanying the water</td><td className='px-4 py-3'>Sewer line damage or septic system failure.</td><td className='px-4 py-3 font-semibold text-yellow-700'>Soon. Health hazard. Call a plumber.</td></tr>
              <tr className='bg-orange-50'><td className='px-4 py-3'>Mold growth visible on walls</td><td className='px-4 py-3'>Moisture has persisted long enough for mold to colonize.</td><td className='px-4 py-3'>Moderate. Address moisture source, then remediate mold. See our <Link href='/articles/how-to-prevent-basement-mold' className='text-teal-600 underline'>mold prevention guide</Link>.</td></tr>
            </tbody>
          </table>
        </div>

        {/* DIY vs Pro Table */}
        <h2 className='mt-12 text-3xl font-bold text-gray-900'>DIY vs. Professional: Which Fixes Can You Handle?</h2>
        <div className='mt-4 overflow-x-auto'>
          <table className='min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden'>
            <thead className='bg-gray-800 text-white'>
              <tr>
                <th className='px-4 py-3 text-left'>Fix</th>
                <th className='px-4 py-3 text-left'>DIY?</th>
                <th className='px-4 py-3 text-left'>Cost DIY</th>
                <th className='px-4 py-3 text-left'>Cost Pro</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              <tr className='bg-white'><td className='px-4 py-3'>Extend downspouts</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$10&ndash;$30 each</td><td className='px-4 py-3'>$150&ndash;$300 each</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>Clean gutters</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>Free (your time)</td><td className='px-4 py-3'>$100&ndash;$250</td></tr>
              <tr className='bg-white'><td className='px-4 py-3'>Regrade soil around foundation</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes (if minor)</td><td className='px-4 py-3'>$50&ndash;$200 in topsoil</td><td className='px-4 py-3'>$500&ndash;$1,500</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>Install dehumidifier</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$200&ndash;$400</td><td className='px-4 py-3'>N/A</td></tr>
              <tr className='bg-white'><td className='px-4 py-3'>Install window well covers</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$20&ndash;$50 each</td><td className='px-4 py-3'>$50&ndash;$100 each</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>Clean efflorescence</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$5&ndash;$20</td><td className='px-4 py-3'>$100&ndash;$200</td></tr>
              <tr className='bg-white'><td className='px-4 py-3'>Apply waterproof paint or sealant</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$50&ndash;$150</td><td className='px-4 py-3'>$300&ndash;$600</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>Inject a wall crack (poured concrete)</td><td className='px-4 py-3 text-yellow-700 font-semibold'>Maybe</td><td className='px-4 py-3'>$20&ndash;$60 per crack</td><td className='px-4 py-3'>$300&ndash;$600 per crack</td></tr>
              <tr className='bg-white'><td className='px-4 py-3'>Install vapor barrier</td><td className='px-4 py-3 text-yellow-700 font-semibold'>Maybe</td><td className='px-4 py-3'>$200&ndash;$500</td><td className='px-4 py-3'>$1,000&ndash;$3,000</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>Interior French drain + sump pump</td><td className='px-4 py-3 text-red-700 font-semibold'>No</td><td className='px-4 py-3'>N/A</td><td className='px-4 py-3'>$3,000&ndash;$10,000</td></tr>
              <tr className='bg-white'><td className='px-4 py-3'>Exterior waterproofing membrane</td><td className='px-4 py-3 text-red-700 font-semibold'>No</td><td className='px-4 py-3'>N/A</td><td className='px-4 py-3'>$5,000&ndash;$15,000</td></tr>
              <tr className='bg-gray-50'><td className='px-4 py-3'>Structural wall repair (anchors, beams, carbon fiber)</td><td className='px-4 py-3 text-red-700 font-semibold'>No</td><td className='px-4 py-3'>N/A</td><td className='px-4 py-3'>$3,000&ndash;$15,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className='mt-3 text-gray-600'>For a complete breakdown of when to DIY and when to hire, see our <Link href='/articles/diy-vs-hiring-pro-basement-projects' className='text-teal-600 underline'>DIY vs hiring a pro guide</Link>. For guidance on finding and vetting contractors, see <Link href='/articles/how-to-hire-basement-waterproofing-contractor' className='text-teal-600 underline'>how to hire a basement waterproofing contractor</Link>.</p>

        {/* Glossary */}
        <h2 className='mt-12 text-3xl font-bold text-gray-900'>Glossary</h2>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-xl border border-gray-200 p-6'>
            <h4 className='font-bold text-gray-900 mb-1'>Hydrostatic Pressure</h4>
            <p className='text-gray-600'>The force exerted by water in saturated soil against a basement wall and floor slab. Increases with soil saturation depth and proximity to the water table. The primary driver of water entry through cove joints, wall cracks, and porous concrete. Cannot be stopped by surface sealing alone &mdash; requires drainage to relieve the pressure before it reaches the wall.</p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6'>
            <h4 className='font-bold text-gray-900 mb-1'>Cove Joint</h4>
            <p className='text-gray-600'>The junction where the basement wall sits on the footing, formed as a cold joint between two separate concrete pours. Never fully watertight by design. The single most common water entry point in poured concrete basements because hydrostatic pressure channels groundwater upward along this perimeter gap. Cannot be permanently sealed from inside with caulk or hydraulic cement &mdash; requires an interior drainage system to intercept water at this point.</p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6'>
            <h4 className='font-bold text-gray-900 mb-1'>Efflorescence</h4>
            <p className='text-gray-600'>White, powdery, or crystalline mineral deposits on concrete or masonry surfaces caused by water dissolving calcium and other salts inside the concrete and depositing them on the surface as it evaporates. Not mold and not structurally harmful, but reliable evidence that water is actively migrating through the wall. Must be removed mechanically before applying any sealer or paint. See our <Link href='/articles/basement-efflorescence' className='text-teal-600 underline'>efflorescence guide</Link>.</p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6'>
            <h4 className='font-bold text-gray-900 mb-1'>Vapor Diffusion</h4>
            <p className='text-gray-600'>The slow migration of water vapor through porous materials like concrete from the high-moisture side (soil) to the low-moisture side (interior), driven by vapor pressure differential rather than liquid water movement. Produces walls that feel uniformly damp without visible cracks or water flow. Addressed with penetrating sealers, crystalline waterproofing, or a vapor barrier with drainage mat rather than crack injection or a French drain.</p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6'>
            <h4 className='font-bold text-gray-900 mb-1'>French Drain (Interior)</h4>
            <p className='text-gray-600'>A perforated drain pipe installed in a gravel-filled trench cut along the interior perimeter of the basement floor. Intercepts water entering at the cove joint and through the lower wall before it reaches the living space, channeling it to a sump pump pit. The standard professional solution for persistent cove joint seepage and high water table conditions. Costs $3,000 to $10,000 for a full perimeter installation. See our <Link href='/articles/french-drain-cost' className='text-teal-600 underline'>French drain cost guide</Link>.</p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6'>
            <h4 className='font-bold text-gray-900 mb-1'>Vapor Barrier</h4>
            <p className='text-gray-600'>A polyethylene sheet, typically 6 to 20 mil thickness, attached to basement walls to block water vapor from reaching interior surfaces and building materials. Often installed with a drainage mat behind it that channels any water coming through the wall downward to the perimeter drain rather than letting it wet the wall surface. See our <Link href='/articles/best-vapor-barriers' className='text-teal-600 underline'>best vapor barriers guide</Link>.</p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6'>
            <h4 className='font-bold text-gray-900 mb-1'>Hydraulic Cement</h4>
            <p className='text-gray-600'>A fast-setting cement compound that expands slightly as it cures, used to plug active drips and small holes in concrete walls. Effective for stopping visible water flow at a specific point as a temporary measure. Not a long-term solution for structural cracks, persistent hydrostatic pressure, or cove joint seepage, as the pressure will eventually find another path or push the patch out.</p>
          </div>
          <div className='rounded-xl border border-gray-200 p-6'>
            <h4 className='font-bold text-gray-900 mb-1'>Crack Injection</h4>
            <p className='text-gray-600'>A professional repair method where two-part polyurethane foam or epoxy resin is injected into a wall crack under low pressure through a series of ports set at intervals along the crack. Fills the crack through the full thickness of the wall, blocking water infiltration. Epoxy restores structural strength and requires a dry surface. Polyurethane foam expands to fill irregular voids and works on wet or actively seeping cracks. The standard repair for non-structural cracks in poured concrete walls. See our <Link href='/articles/foundation-crack-repair-cost' className='text-teal-600 underline'>foundation crack repair cost guide</Link>.</p>
          </div>
        </div>

        {/* FAQ */}
        <h2 className='mt-12 text-3xl font-bold text-gray-900'>Frequently Asked Questions</h2>
        <div className='mt-6 space-y-6'>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>What is the foil test and how do I do it?</h3>
            <p className='mt-2 text-gray-700'>The foil test is a simple diagnostic that determines whether basement wall moisture is coming through the wall from outside (seepage) or forming on the wall surface from humid indoor air (condensation). Tape a 12-inch square of aluminum foil flat against the wet area of the wall, pressing all edges tight so no air can get behind it, and leave it for 24 to 48 hours. If the outside face of the foil (room side) is wet when you remove it, the moisture is condensation from indoor air hitting the cool wall surface, and a dehumidifier is the fix. If the inside face (wall side) is wet, water is migrating through the wall from the soil side, and waterproofing is needed. If both sides are wet, you have both problems. This test saves homeowners from spending thousands on waterproofing when a $300 dehumidifier would have solved the problem, and from buying a dehumidifier when they have a genuine water intrusion issue that requires drainage.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>Why are my basement walls wet when it has not rained?</h3>
            <p className='mt-2 text-gray-700'>Two common causes: condensation (humid indoor air meeting cool walls) and a high water table pushing moisture through the concrete via vapor diffusion. Do the foil test to determine which one. Condensation is solved with a dehumidifier. Vapor diffusion requires a vapor barrier or waterproofing treatment.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>Is it normal for basement walls to be damp?</h3>
            <p className='mt-2 text-gray-700'>Slight coolness is normal. Visible moisture, water droplets, or wet patches are not. Concrete walls will always feel cooler than the air, but they should not feel wet. Any persistent dampness indicates a moisture source that should be identified and addressed.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>Can I just paint over wet basement walls with waterproof paint?</h3>
            <p className='mt-2 text-gray-700'>Waterproof paint like DryLok or Kilz Basement can reduce minor vapor diffusion through porous concrete, but it cannot stop active water pressure from cracks, cove joints, or hydrostatic pressure. If water is actively entering your basement, paint will peel off within a year. Fix the water source first, then paint as a secondary barrier. See our <Link href='/articles/waterproof-basement-paint-sealers' className='text-teal-600 underline'>waterproof paint and sealers guide</Link>.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>How much does it cost to fix wet basement walls?</h3>
            <p className='mt-2 text-gray-700'>It depends entirely on the cause. Extending downspouts costs $10&ndash;$30 each. A dehumidifier costs $200&ndash;$400. Crack injection runs $300&ndash;$600 per crack. An interior French drain system costs $3,000&ndash;$10,000. Exterior waterproofing runs $5,000&ndash;$15,000. See our complete <Link href='/articles/basement-waterproofing-cost' className='text-teal-600 underline'>waterproofing cost guide</Link> for the full breakdown.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>Should I buy a house with wet basement walls?</h3>
            <p className='mt-2 text-gray-700'>Not necessarily a deal-breaker, but get a professional inspection before closing. The key question is what is causing the moisture and how much will it cost to fix. Condensation or poor drainage (cheap fixes) is very different from structural wall failure or a failed exterior waterproofing system (expensive fixes). Use the inspection findings to negotiate the price or request repairs before closing. See our <Link href='/articles/homebuyers-basement-inspection-checklist' className='text-teal-600 underline'>homebuyers basement inspection checklist</Link>.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>Will wet basement walls cause mold?</h3>
            <p className='mt-2 text-gray-700'>Yes, if the moisture persists. Mold can begin growing on damp surfaces within 24 to 48 hours in warm conditions. Concrete itself does not support mold well, but anything attached to or stored against a wet wall &mdash; drywall, wood framing, cardboard boxes, carpet &mdash; will grow mold quickly. Address the moisture source promptly and see our <Link href='/articles/how-to-prevent-basement-mold' className='text-teal-600 underline'>mold prevention guide</Link>.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>Can wet basement walls affect my home&apos;s value?</h3>
            <p className='mt-2 text-gray-700'>Yes. Visible water damage, staining, efflorescence, and mold are red flags for buyers and home inspectors. Unresolved moisture issues can reduce your home&apos;s value by 10 to 25% depending on severity. Conversely, a professionally waterproofed basement with documentation can actually increase value. See our guide on <Link href='/articles/waterproofing-home-appraisal-value' className='text-teal-600 underline'>how waterproofing affects home appraisal value</Link>.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-800'>Do homes on septic systems have different basement moisture issues?</h3>
            <p className='mt-2 text-gray-700'>Sometimes. If the septic system&apos;s drainfield is located near the house, a saturated or failing drainfield can raise the local water table and increase hydrostatic pressure against basement walls. If your basement moisture coincides with septic system problems like slow drains, yard odor, or soggy ground over the drainfield, the septic system may be contributing to the issue. See <a href='https://theseptic.guide' className='text-teal-600 underline' target='_blank' rel='noopener noreferrer'>The Septic Guide</a> for septic-specific help.</p>
          </div>
        </div>

        {/* Related Guides */}
        <h2 className='mt-12 text-3xl font-bold text-gray-900'>Related Guides</h2>
        <div className='mt-4 grid gap-4 sm:grid-cols-2'>
          <Link href='/articles/complete-basement-waterproofing-guide' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>Complete Basement Waterproofing Guide</p>
            <p className='mt-1 text-sm text-gray-600'>Everything you need to know about stopping basement leaks for good.</p>
          </Link>
          <Link href='/articles/interior-vs-exterior-waterproofing' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>Interior vs. Exterior Waterproofing</p>
            <p className='mt-1 text-sm text-gray-600'>Which approach is right for your situation and budget.</p>
          </Link>
          <Link href='/articles/basement-waterproofing-cost' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>Basement Waterproofing Cost</p>
            <p className='mt-1 text-sm text-gray-600'>Full pricing breakdown for every type of waterproofing system.</p>
          </Link>
          <Link href='/articles/french-drain-cost' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>French Drain Cost Guide</p>
            <p className='mt-1 text-sm text-gray-600'>Interior and exterior French drain pricing by type and region.</p>
          </Link>
          <Link href='/articles/types-of-foundation-cracks' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>Types of Foundation Cracks</p>
            <p className='mt-1 text-sm text-gray-600'>Which cracks are cosmetic and which need immediate attention.</p>
          </Link>
          <Link href='/articles/bowing-basement-walls' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>Bowing Basement Walls</p>
            <p className='mt-1 text-sm text-gray-600'>Causes, repair methods, and what it costs to fix.</p>
          </Link>
          <Link href='/articles/best-basement-dehumidifiers' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>Best Basement Dehumidifiers</p>
            <p className='mt-1 text-sm text-gray-600'>Top-rated models sized for every basement.</p>
          </Link>
          <Link href='/articles/how-to-prevent-basement-mold' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>How to Prevent Basement Mold</p>
            <p className='mt-1 text-sm text-gray-600'>Stop mold before it starts with these proven strategies.</p>
          </Link>
          <Link href='/articles/basement-efflorescence' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>Basement Efflorescence Guide</p>
            <p className='mt-1 text-sm text-gray-600'>What the white powder means and how to get rid of it.</p>
          </Link>
          <Link href='/articles/waterproofing-home-appraisal-value' className='rounded-xl border border-gray-200 p-4 hover:border-teal-400 hover:shadow transition-all'>
            <p className='font-bold text-gray-900'>Waterproofing and Home Value</p>
            <p className='mt-1 text-sm text-gray-600'>How basement waterproofing affects your home appraisal.</p>
          </Link>
        </div>

        {/* Lead Form CTA */}
        <div className='mt-12'>
          <h2 className='text-2xl font-bold text-gray-900'>Get Expert Help With Your Wet Basement Walls</h2>
          <p className='mt-2 text-gray-600'>Connect with pre-vetted waterproofing professionals in your area. Free assessments, no obligation.</p>
          <LeadForm />
        </div>

      </div>
    </div>
  )
}
