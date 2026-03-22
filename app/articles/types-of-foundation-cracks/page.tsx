import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Types of Foundation Cracks: What Each One Means (2026) | The Basement Guide',
  description: 'Not all foundation cracks are equal. Learn the four main types, what causes them, risk levels, when to DIY vs call a pro, and three proven repair products for 2026.',
}

export default function FoundationCracksArticle() {
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
                  name: 'Are cracks in a foundation normal?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Hairline and minor vertical cracks are normal and occur in nearly every concrete foundation. Concrete shrinks as it cures and loses moisture, which creates small cracks, usually within the first 1 to 3 years after construction.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When should I worry about a foundation crack?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Worry when a crack is wider than 1/4 inch, when one side is higher than the other indicating settlement, when the crack runs horizontally indicating wall bowing, when new cracks appear suddenly, or when water is actively leaking through the crack.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does it cost to repair a foundation crack?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Foundation crack repair costs range from $20 to $80 for a DIY epoxy injection kit to $250 to $800 per crack for professional repair. Structural repairs for severe cracks with settlement or bowing cost significantly more.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I fix a foundation crack myself?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can repair minor vertical cracks under 1/4 inch wide using a DIY epoxy or polyurethane injection kit costing $20 to $80. Do not attempt to repair stair-step cracks, horizontal cracks, settlement cracks with height differences, or any crack associated with wall bowing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the difference between a structural crack and a cosmetic crack?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A cosmetic crack is narrow under 1/4 inch, has no height difference between sides, is not growing, and does not indicate foundation movement. A structural crack indicates active foundation movement such as settlement, shifting, or wall bowing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do foundation cracks let radon into the basement?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Foundation cracks are one of the primary entry points for radon gas, which rises from the soil beneath and around the foundation. Even hairline cracks can allow radon to enter the basement.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Should I worry about foundation cracks when buying a home?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Minor vertical cracks are normal and should not deter you from purchasing, but horizontal cracks, stair-step cracks, settlement cracks, and any signs of wall bowing should be evaluated by a structural engineer before closing.',
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
          src='/foundation-crack-closeup.jpg'
          alt='Close up of a structural foundation crack on a basement wall'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-amber-500'></div>
            <span className='text-amber-400 font-bold tracking-[0.2em] text-sm uppercase'>Diagnostic Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter max-w-4xl'>
            Types of Foundation<br />
            <span className='text-amber-400'>Cracks 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            What each crack means, how serious it really is, and exactly what to do next. Plus three proven repair products for DIY fixes.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-medium'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 · 15 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <div className='prose prose-lg prose-slate max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed mb-8'>
            Nearly every concrete foundation develops cracks over time. Concrete shrinks as it cures, soil shifts with moisture changes, and water pressure pushes against basement walls from the outside. The question is not whether your foundation will crack. The question is whether the cracks you have are cosmetic&mdash;safe to monitor or seal yourself&mdash;or structural&mdash;requiring professional repair before they get worse and more expensive.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-8'>
            This guide explains the four main types of foundation cracks, what causes each one, how to tell whether a crack is serious, what each type of repair costs, and exactly what to do next.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Foundation cracks are fractures in the concrete or masonry of a basement wall or floor that form when the stress acting on the material exceeds its tensile strength, which concrete has very little of despite its compressive strength. The direction a crack runs is the most reliable diagnostic signal because it reflects the direction of the force that caused it: vertical cracks form when concrete shrinks or settles evenly, diagonal and stair-step cracks form when one section of the foundation moves more than another, and horizontal cracks form when lateral soil pressure pushes inward against the wall. Width and whether the crack is growing are the two secondary factors that determine urgency: a hairline crack that has been stable for years is a different problem than a 1/4-inch crack that has widened by 1/8 inch over the past month. The practical implication of this framework is that two cracks can look similar on the surface but require completely different responses depending on their orientation, width, and rate of change.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed mb-12'>
            If you already know your crack needs repair and want pricing, jump to our{' '}
            <Link href='/cost-guides/foundation-crack-repair' className='text-amber-600 hover:text-amber-700 underline'>foundation crack repair cost guide</Link>. If your wall is bowing inward rather than just cracked, see our{' '}
            <Link href='/guides/bowing-basement-walls' className='text-amber-600 hover:text-amber-700 underline'>bowing basement walls guide</Link>.
          </p>
        </div>

        {/* Quick Diagnosis Table */}
                <section>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Reference</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Quick Guide</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Quick Foundation Crack Diagnosis Table</h2>
          <div className='overflow-x-auto mb-12'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='px-6 py-4 text-left font-semibold'>Crack Type</th>
                  <th className='px-6 py-4 text-left font-semibold'>Direction</th>
                  <th className='px-6 py-4 text-left font-semibold'>Width</th>
                  <th className='px-6 py-4 text-left font-semibold'>Typical Cause</th>
                  <th className='px-6 py-4 text-left font-semibold'>Risk Level</th>
                  <th className='px-6 py-4 text-left font-semibold'>What to Do</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Hairline / Shrinkage</td>
                  <td className='px-6 py-4'>Vertical or random</td>
                  <td className='px-6 py-4'>Less than 1/16 inch</td>
                  <td className='px-6 py-4'>Normal concrete curing and drying</td>
                  <td className='px-6 py-4'><span className='bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium'>Low</span></td>
                  <td className='px-6 py-4'>Monitor. Seal if desired.</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Vertical</td>
                  <td className='px-6 py-4'>Straight up and down</td>
                  <td className='px-6 py-4'>1/16 to 1/4 inch</td>
                  <td className='px-6 py-4'>Concrete shrinkage or minor settlement</td>
                  <td className='px-6 py-4'><span className='bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium'>Low to Moderate</span></td>
                  <td className='px-6 py-4'>Monitor monthly. Seal with injection.</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Settlement</td>
                  <td className='px-6 py-4'>Vertical, one side higher</td>
                  <td className='px-6 py-4'>1/4 inch or wider</td>
                  <td className='px-6 py-4'>Uneven soil compaction or shifting</td>
                  <td className='px-6 py-4'><span className='bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-medium'>Moderate to High</span></td>
                  <td className='px-6 py-4'>Professional evaluation recommended.</td>
                </tr>
                <tr className='bg-white border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Stair-Step</td>
                  <td className='px-6 py-4'>Diagonal steps following mortar joints</td>
                  <td className='px-6 py-4'>Varies</td>
                  <td className='px-6 py-4'>Differential settlement in block/brick foundations</td>
                  <td className='px-6 py-4'><span className='bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-medium'>High</span></td>
                  <td className='px-6 py-4'>Professional evaluation required.</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Horizontal</td>
                  <td className='px-6 py-4'>Runs horizontally across the wall</td>
                  <td className='px-6 py-4'>1/8 inch or wider</td>
                  <td className='px-6 py-4'>Hydrostatic pressure or lateral soil pressure</td>
                  <td className='px-6 py-4'><span className='bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium'>Very High</span></td>
                  <td className='px-6 py-4'>Call a professional immediately.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 - Vertical Cracks */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Low Risk</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Most Common</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Vertical Foundation Cracks &mdash; The Most Common Type</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Vertical cracks run straight up and down or nearly so, within about 30 degrees of vertical. They are the most common type of foundation crack and are usually the least serious.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What Causes Vertical Foundation Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Vertical cracks form when concrete shrinks as it cures and dries. All concrete shrinks during the curing process, and this shrinkage creates internal tension that eventually produces cracks. These cracks typically appear within the first 1 to 3 years after a home is built, though they can develop at any time. Minor soil settlement can also produce vertical cracks when one section of the foundation settles slightly more than an adjacent section.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>How to Identify a Vertical Crack</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The crack runs from top to bottom or partway along the wall. Both sides of the crack are at the same level, meaning there is no height difference between the left and right sides. Width is typically 1/16 to 1/8 inch for shrinkage cracks, though settlement-related vertical cracks can be wider.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>When to Worry About Vertical Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Most vertical cracks under 1/4 inch wide with no height difference between sides are cosmetic and do not indicate structural problems. However, you should monitor any vertical crack and take action if it widens beyond 1/4 inch, one side becomes higher than the other indicating settlement, water begins leaking through the crack, or new vertical cracks appear suddenly.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            If water is entering through a vertical crack, sealing it prevents moisture problems, mold growth, and <Link href='/articles/basement-efflorescence' className='text-amber-600 hover:text-amber-700 underline'>efflorescence</Link> even if the crack itself is not structural.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>How to Repair Vertical Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Hairline cracks under 1/16 inch can be left alone or sealed with a surface-applied concrete sealant. Cracks 1/16 to 1/4 inch wide are best repaired with epoxy injection for dry, non-moving cracks or polyurethane injection for actively leaking or slightly moving cracks. Epoxy injection bonds the concrete back together and restores structural strength. Polyurethane injection creates a flexible, waterproof seal that can accommodate slight movement.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>DIY cost:</strong> $20 to $80 per crack using a consumer injection kit. <strong>Professional cost:</strong> $250 to $800 per crack. See our{' '}
            <Link href='/cost-guides/foundation-crack-repair' className='text-amber-600 hover:text-amber-700 underline'>foundation crack repair cost guide</Link>{' '}
            for a full pricing breakdown.
          </p>

          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
            <p className='text-sm text-slate-700'><span className='mr-1'>&#128204;</span> <strong>Recommended product:</strong>{' '}
              <a href='https://amzn.to/4sdUWJ2' target='_blank' rel='noopener noreferrer' className='text-amber-600 hover:text-amber-700 underline'>Emecole Metro DIY Basement Wall Crack Repair Kit</a>{' '}
              &mdash; one of the most popular epoxy kits available. Comes with everything you need and works well for cracks up to 1/4 inch wide.
            </p>
          </div>
        </section>

        {/* Section 2 - Settlement Cracks */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Moderate Risk</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Monitor</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Settlement Foundation Cracks &mdash; Vertical but More Serious</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Settlement cracks look similar to vertical shrinkage cracks at first glance, but there are key differences that indicate a more serious underlying problem.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What Causes Settlement Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Settlement cracks form when the soil beneath part of the foundation compacts, erodes, or shifts unevenly. This causes one section of the foundation to sink relative to the rest, creating stress that produces cracks. Causes include poorly compacted fill soil under the foundation, erosion from water flow beneath the slab, drought conditions that cause clay soils to shrink, and plumbing leaks that wash away soil under the foundation.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>How to Identify a Settlement Crack</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The crack runs vertically but is wider than a typical shrinkage crack&mdash;often 1/4 inch or more. The critical distinguishing feature is that one side of the crack is higher than the other, meaning the foundation has actually shifted. You may also notice doors or windows sticking upstairs, sloping floors, or gaps between walls and ceilings in the area above the affected foundation section.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>When to Worry About Settlement Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Any crack where one side is higher than the other warrants professional evaluation because it indicates active foundation movement. Even if the crack appears stable today, the soil conditions that caused it may still be changing. Settlement can be progressive, meaning it gets worse over time if the underlying cause is not addressed.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>How to Repair Settlement Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Minor settlement cracks can be sealed with epoxy or polyurethane injection to prevent water entry, but the seal alone does not fix the settlement. For active settlement, a foundation specialist may recommend underpinning&mdash;installing piers beneath the foundation to stabilize it on deeper, more stable soil&mdash;or mudjacking&mdash;injecting material beneath the slab to fill voids and raise sunken sections. These are professional repairs.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Professional crack sealing cost:</strong> $300 to $800 per crack. <strong>Underpinning cost:</strong> $1,000 to $3,000 per pier&mdash;most homes need 6 to 12 piers.
          </p>
        </section>

        {/* Section 3 - Stair-Step Cracks */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>High Risk</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Block Foundations</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Stair-Step Foundation Cracks &mdash; Common in Block and Brick Foundations</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Stair-step cracks follow the mortar joints in a block or brick foundation wall, creating a pattern that looks like a staircase going diagonally across the wall.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What Causes Stair-Step Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Stair-step cracks are caused by differential settlement, which means one section of the foundation is sinking faster than an adjacent section. The crack follows the mortar joints because mortar is weaker than the blocks or bricks themselves, so the stress concentrates along the joint lines. Common triggers include soil washout from poor drainage, tree root activity near the foundation, and seasonal soil expansion and contraction in clay-heavy areas.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>How to Identify a Stair-Step Crack</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The crack follows a diagonal path up the wall, stepping from one horizontal mortar joint to a vertical mortar joint and then to the next horizontal joint, creating the characteristic staircase appearance. The crack may be wider at one end than the other, indicating which direction the settlement is occurring.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>When to Worry About Stair-Step Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Stair-step cracks should always be evaluated by a professional. While a single short stair-step crack in an older block wall may be stable, these cracks often indicate ongoing differential settlement that will worsen over time. If the crack is wider than 1/4 inch, is growing, or is accompanied by wall bowing, the situation requires prompt attention. See our{' '}
            <Link href='/guides/bowing-basement-walls' className='text-amber-600 hover:text-amber-700 underline'>bowing basement walls guide</Link>{' '}
            for more on how wall bowing and cracking are related.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>How to Repair Stair-Step Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            For stable stair-step cracks, tuckpointing&mdash;removing damaged mortar and replacing it with new mortar&mdash;restores the joint and prevents water entry. For active settlement, the foundation may need structural stabilization through wall anchors, carbon fiber straps, or underpinning before the crack itself is repaired. Sealing the crack without addressing the settlement will result in the crack reopening.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Tuckpointing cost:</strong> $5 to $25 per square foot. <strong>Wall anchor cost:</strong> $150 to $400 per anchor&mdash;most walls need 3 to 5.
          </p>
        </section>

        {/* Section 4 - Horizontal Cracks */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Very High Risk</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Urgent</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Horizontal Foundation Cracks &mdash; The Most Serious Type</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A horizontal crack running across a basement wall is the most serious type of foundation crack and requires immediate professional attention. It indicates that the wall is under significant lateral pressure and is beginning to bow inward.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What Causes Horizontal Foundation Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Horizontal cracks are caused by hydrostatic pressure&mdash;the force of water-saturated soil pushing against the wall, expansive clay soils that swell when wet, frost heave in cold climates, or a combination of these forces. The crack typically appears at the midpoint of the wall height because that is where the wall is weakest relative to the lateral pressure being applied. Horizontal cracks are a direct warning sign that the wall is bowing, which can progress to structural failure if left unaddressed.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>How to Identify a Horizontal Crack</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The crack runs horizontally&mdash;parallel to the floor and ceiling&mdash;across the wall, usually at approximately the midpoint height. It is often 1/8 inch wide or more. You may also see inward displacement of the wall below or above the crack line. In concrete block walls, the crack typically follows a horizontal mortar joint.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>When to Worry About Horizontal Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Always. Every horizontal crack in a foundation wall is a structural concern. The wall is telling you that it cannot fully resist the lateral forces being applied to it. Even a thin horizontal crack indicates the onset of bowing. If the wall has already moved inward&mdash;you can check with a straightedge or plumb line&mdash;the problem is actively progressing.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>How to Repair Horizontal Cracks</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Horizontal cracks require structural repair, not just sealing. The most common repairs are carbon fiber straps for minor bowing under 2 inches (cost $2,000 to $5,000), wall anchors for moderate bowing (cost $3,000 to $8,000), or steel I-beams for severe bowing (cost $4,000 to $10,000). The repair must also address the source of the lateral pressure through improved drainage, grading, or waterproofing.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            See our{' '}
            <Link href='/guides/bowing-basement-walls' className='text-amber-600 hover:text-amber-700 underline'>bowing basement walls guide</Link>{' '}
            for a detailed breakdown of every repair method, and our{' '}
            <Link href='/guides/interior-vs-exterior-waterproofing' className='text-amber-600 hover:text-amber-700 underline'>interior vs exterior waterproofing guide</Link>{' '}
            for approaches to reducing hydrostatic pressure.
          </p>
        </section>

        {/* How to Monitor */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>DIY</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Monitoring</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>How to Monitor Foundation Cracks at Home</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Not every crack requires immediate professional attention, but every crack deserves monitoring. Here is a simple monitoring system you can set up in 5 minutes.
          </p>
          <div className='bg-white rounded-lg border border-slate-200 shadow-sm p-6'>
            <ul className='space-y-4 text-slate-700'>
              <li className='flex items-start gap-3'><span className='text-amber-600 font-bold'>Step 1</span> Photograph each crack. Hold a ruler or tape measure next to the crack and take a close-up photograph. This gives you a dated visual record with a scale reference.</li>
              <li className='flex items-start gap-3'><span className='text-amber-600 font-bold'>Step 2</span> Mark the ends. Use a pencil to draw a short line across the end of each crack and write the date next to it. If the crack grows past your mark, you know it is actively extending.</li>
              <li className='flex items-start gap-3'><span className='text-amber-600 font-bold'>Step 3</span> Measure the width. Measure the widest point of the crack. A credit card is approximately 1/32 inch thick, which can serve as a quick reference.</li>
              <li className='flex items-start gap-3'><span className='text-amber-600 font-bold'>Step 4</span> Recheck every 30 days. Compare current measurements and photos to your originals. Look for changes in width, length, or height difference between sides.</li>
            </ul>
          </div>
          <div className='bg-red-50 border-l-4 border-red-500 rounded-lg p-5 mt-6'>
            <p className='text-red-800 font-semibold'>Stop monitoring and call a professional if:</p>
            <ul className='mt-2 space-y-1 text-red-700 text-sm'>
              <li>&bull; The crack widens beyond 1/4 inch</li>
              <li>&bull; One side becomes higher than the other</li>
              <li>&bull; Water begins leaking through the crack</li>
              <li>&bull; New cracks appear suddenly</li>
              <li>&bull; The wall shows any inward displacement</li>
              <li>&bull; You see stair-step or horizontal cracking</li>
            </ul>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Prevention</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Protect Your Home</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>How to Prevent New Foundation Cracks</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            You cannot prevent all foundation cracks&mdash;concrete shrinkage cracks are inevitable&mdash;but you can prevent most of the serious structural cracks by controlling water and soil conditions around your foundation.
          </p>
          <ul className='space-y-4 text-slate-700 mb-6'>
            <li className='flex items-start gap-3'><span className='text-green-600 font-bold'>&bull;</span> <strong>Maintain gutters and downspouts.</strong> Clean gutters at least twice a year and extend downspouts so they discharge water 6 to 10 feet from the foundation.</li>
            <li className='flex items-start gap-3'><span className='text-green-600 font-bold'>&bull;</span> <strong>Grade soil away from the house.</strong> The ground surface should slope away from the foundation at a rate of at least 1 inch per foot for the first 6 to 10 feet.</li>
            <li className='flex items-start gap-3'><span className='text-green-600 font-bold'>&bull;</span> <strong>Fix water intrusion promptly.</strong> If water is entering your basement through walls or the floor, address it with proper <Link href='/guides/waterproofing' className='text-amber-600 hover:text-amber-700 underline'>waterproofing</Link> before cracks develop or worsen.</li>
            <li className='flex items-start gap-3'><span className='text-green-600 font-bold'>&bull;</span> <strong>Control interior humidity.</strong> Keep basement humidity below 50 percent with a properly sized dehumidifier.</li>
            <li className='flex items-start gap-3'><span className='text-green-600 font-bold'>&bull;</span> <strong>Schedule annual inspections for older homes.</strong> A professional foundation inspection costs $100 to $300 and catches early movement before it becomes expensive.</li>
          </ul>
        </section>

        {/* Cost Summary Table */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Costs</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>2026 Pricing</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Foundation Crack Repair Cost Summary 2026</h2>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='px-6 py-4 text-left font-semibold'>Crack Type</th>
                  <th className='px-6 py-4 text-left font-semibold'>DIY Repair Cost</th>
                  <th className='px-6 py-4 text-left font-semibold'>Professional Repair Cost</th>
                  <th className='px-6 py-4 text-left font-semibold'>Notes</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Hairline / Shrinkage</td>
                  <td className='px-6 py-4'>$10 to $30 (sealant)</td>
                  <td className='px-6 py-4'>$150 to $400</td>
                  <td className='px-6 py-4'>Often cosmetic. Sealing is optional unless water is entering.</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Vertical (1/16 to 1/4 inch)</td>
                  <td className='px-6 py-4'>$20 to $80 (injection kit)</td>
                  <td className='px-6 py-4'>$250 to $800 per crack</td>
                  <td className='px-6 py-4'>Epoxy for dry cracks. Polyurethane for leaking cracks.</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Settlement</td>
                  <td className='px-6 py-4'>Not recommended</td>
                  <td className='px-6 py-4'>$300 to $800 sealing + $6,000 to $30,000 underpinning</td>
                  <td className='px-6 py-4'>Professional evaluation required.</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Stair-Step</td>
                  <td className='px-6 py-4'>Not recommended</td>
                  <td className='px-6 py-4'>$500 to $2,500 tuckpointing or $3,000 to $8,000 wall anchors</td>
                  <td className='px-6 py-4'>Must address settlement cause, not just the crack.</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 font-medium'>Horizontal</td>
                  <td className='px-6 py-4'>Not recommended</td>
                  <td className='px-6 py-4'>$2,000 to $10,000 structural repair</td>
                  <td className='px-6 py-4'>Always structural. See <Link href='/guides/bowing-basement-walls' className='text-amber-600 hover:text-amber-700 underline'>bowing walls guide</Link>.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-600 text-sm'>
            For detailed pricing on every repair method, see our{' '}
            <Link href='/cost-guides/foundation-crack-repair' className='text-amber-600 hover:text-amber-700 underline'>foundation crack repair cost guide</Link>.
          </p>
        </section>

        {/* Repair Products Section */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Products</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>2026 Picks</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Three Proven Repair Products Available on Amazon (2026)</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Here are three highly rated, readily available products that actually work well for homeowners dealing with foundation cracks.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>1. Emecole Metro DIY Basement Wall Crack Repair Kit</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Best all-around epoxy kit for vertical and settlement cracks. Strong bond, easy to use, and comes with full instructions.
          </p>
          <a href='https://amzn.to/4sdUWJ2' target='_blank' rel='noopener noreferrer' className='inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors mb-6'>Check Price on Amazon &rarr;</a>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>2. Applied Technologies Polyurethane Foundation Crack Repair Kit</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Excellent for actively leaking cracks. The polyurethane expands when it meets water and creates a flexible, waterproof seal. 40 ft version.
          </p>
          <a href='https://amzn.to/3ZQWrRf' target='_blank' rel='noopener noreferrer' className='inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors mb-6'>Check Price on Amazon &rarr;</a>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>3. Loctite PL Premium Construction Adhesive</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Great for sealing the surface after injection or for small non-structural cracks. Bonds extremely well to concrete and stays flexible.
          </p>
          <a href='https://amzn.to/4s8EDwX' target='_blank' rel='noopener noreferrer' className='inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors mb-6'>Check Price on Amazon &rarr;</a>
        </section>

        {/* FAQ Section */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>FAQ</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions About Foundation Cracks</h2>

          <div className='space-y-6'>
            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Are cracks in a foundation normal?</h3>
              <p className='text-slate-700 leading-relaxed'>Yes. Hairline and minor vertical cracks are normal and occur in nearly every concrete foundation. Concrete shrinks as it cures and loses moisture, which creates small cracks, usually within the first 1 to 3 years after construction. These shrinkage cracks are typically less than 1/16 inch wide, run vertically, and have no height difference between sides. They are cosmetic, not structural.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>When should I worry about a foundation crack?</h3>
              <p className='text-slate-700 leading-relaxed'>Worry when a crack is wider than 1/4 inch, when one side is higher than the other indicating settlement, when the crack runs horizontally indicating wall bowing, when new cracks appear suddenly, or when water is actively leaking through the crack. Stair-step cracks in block or brick walls also warrant professional evaluation.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to repair a foundation crack?</h3>
              <p className='text-slate-700 leading-relaxed'>Foundation crack repair costs range from $20 to $80 for a DIY epoxy injection kit to $250 to $800 per crack for professional repair. Structural repairs for severe cracks with settlement or bowing cost significantly more&mdash;wall anchors run $3,000 to $8,000, carbon fiber straps cost $2,000 to $5,000, and underpinning for settlement costs $6,000 to $30,000. See our <Link href='/cost-guides/foundation-crack-repair' className='text-amber-600 hover:text-amber-700 underline'>foundation crack repair cost guide</Link> for a complete breakdown.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I fix a foundation crack myself?</h3>
              <p className='text-slate-700 leading-relaxed'>You can repair minor vertical cracks under 1/4 inch wide, both sides level, not leaking significantly, using a DIY epoxy or polyurethane injection kit. These kits cost $20 to $80 and are available at hardware stores and online. Do not attempt to repair stair-step cracks, horizontal cracks, settlement cracks with height differences, or any crack associated with wall bowing. These require professional structural evaluation and repair.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the difference between a structural crack and a cosmetic crack?</h3>
              <p className='text-slate-700 leading-relaxed'>A cosmetic crack is narrow (under 1/4 inch), has no height difference between sides, is not growing, and does not indicate foundation movement. Most vertical shrinkage cracks fall into this category. A structural crack indicates active foundation movement such as settlement, shifting, or wall bowing. Signs include width greater than 1/4 inch, height difference between sides, horizontal orientation, stair-step pattern, and visible wall displacement.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Do foundation cracks let radon into the basement?</h3>
              <p className='text-slate-700 leading-relaxed'>Yes. Foundation cracks are one of the primary entry points for radon gas, which rises from the soil beneath and around the foundation. Even hairline cracks can allow radon to enter. If you have foundation cracks and have not tested for radon, a test kit costs $10 to $30 and takes 48 hours. See our <Link href='/articles/radon-testing-mitigation' className='text-amber-600 hover:text-amber-700 underline'>basement radon testing and mitigation guide</Link>.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I worry about foundation cracks when buying a home?</h3>
              <p className='text-slate-700 leading-relaxed'>Foundation cracks are one of the most important things to evaluate during a home inspection. Minor vertical cracks are normal and should not deter you from purchasing, but horizontal cracks, stair-step cracks, settlement cracks, and any signs of wall bowing should be evaluated by a structural engineer before closing. See our <Link href='/guides/homebuyers-inspection-checklist' className='text-amber-600 hover:text-amber-700 underline'>homebuyers basement inspection checklist</Link>.</p>
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Glossary of Foundation Crack Terms</h2>
          <div className='space-y-6'>
            <div>
              <h4 className='font-bold text-slate-900'>Hairline Crack</h4>
              <p className='text-slate-700'>A very thin crack, typically less than 1/16 inch wide, caused by normal concrete shrinkage during the curing process. Hairline cracks are cosmetic and do not indicate structural problems.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Hydrostatic Pressure</h4>
              <p className='text-slate-700'>The lateral force exerted by water-saturated soil against a foundation wall or floor. Hydrostatic pressure is the primary cause of horizontal foundation cracks and wall bowing.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Differential Settlement</h4>
              <p className='text-slate-700'>A condition where one section of a foundation sinks or shifts more than an adjacent section, creating uneven stress across the structure. Causes stair-step cracks in block walls and wider vertical cracks with height differences.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Epoxy Injection</h4>
              <p className='text-slate-700'>A foundation crack repair method where liquid epoxy resin is injected under low pressure into a crack, filling it completely and bonding the concrete back together. Best used on dry, stable cracks.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Polyurethane Injection</h4>
              <p className='text-slate-700'>A foundation crack repair method where liquid polyurethane foam is injected into a crack. The foam expands on contact with water, filling the crack and creating a flexible, waterproof seal. Best used on actively leaking cracks.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Carbon Fiber Straps</h4>
              <p className='text-slate-700'>High-strength reinforcement strips made from carbon fiber fabric, bonded to the surface of a bowing or cracked foundation wall with structural epoxy. Used to stabilize walls with bowing of 2 inches or less.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Underpinning</h4>
              <p className='text-slate-700'>A structural repair method that extends the foundation&apos;s support to deeper, more stable soil. Steel push piers or helical piers are driven through the existing foundation to load-bearing soil or bedrock.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Tuckpointing</h4>
              <p className='text-slate-700'>The process of removing damaged or deteriorated mortar from the joints of a block or brick wall and replacing it with fresh mortar. Repairs stair-step cracks and prevents water entry.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Control Joint</h4>
              <p className='text-slate-700'>A groove cut or formed into a concrete surface during construction to create a deliberate weak point where shrinkage cracking can occur in a straight, predictable line rather than randomly. Cracks along control joints are intentional and not a structural concern.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/cost-guides/foundation-crack-repair' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Foundation Crack Repair Cost 2026</h3>
              <p className='text-slate-600 text-sm'>Epoxy injection vs. polyurethane foam. What to expect to pay per crack.</p>
            </Link>
            <Link href='/guides/bowing-basement-walls' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Bowing Basement Walls Guide</h3>
              <p className='text-slate-600 text-sm'>Causes, repair methods, and costs for bowing and leaning walls.</p>
            </Link>
            <Link href='/articles/wet-basement-walls' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Wet Basement Walls</h3>
              <p className='text-slate-600 text-sm'>Diagnose and fix water seeping through basement walls.</p>
            </Link>
            <Link href='/guides/waterproofing' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Complete Waterproofing Guide</h3>
              <p className='text-slate-600 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
            </Link>
            <Link href='/guides/interior-vs-exterior-waterproofing' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Interior vs. Exterior Waterproofing</h3>
              <p className='text-slate-600 text-sm'>Compare costs, methods, and lifespans for each waterproofing approach.</p>
            </Link>
            <Link href='/articles/basement-efflorescence' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Basement Efflorescence Explained</h3>
              <p className='text-slate-600 text-sm'>What that white powder on your walls really means and how to stop it.</p>
            </Link>
            <Link href='/articles/radon-testing-mitigation' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Radon Testing and Mitigation</h3>
              <p className='text-slate-600 text-sm'>Complete guide to testing for radon and reducing levels in your basement.</p>
            </Link>
            <Link href='/guides/homebuyers-inspection-checklist' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Homebuyers Inspection Checklist</h3>
              <p className='text-slate-600 text-sm'>Complete guide to evaluating a basement before purchase.</p>
            </Link>
            <Link href='/guides/how-to-hire-waterproofing-contractor' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>How to Hire a Waterproofing Contractor</h3>
              <p className='text-slate-600 text-sm'>Questions to ask, red flags to watch for, and how to compare quotes.</p>
            </Link>
            <Link href='/guides/old-house-basements' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Old House Basements Guide</h3>
              <p className='text-slate-600 text-sm'>Renovating and waterproofing basements in pre-1940 homes with historic foundations.</p>
            </Link>
            <Link href='/guides/best-vapor-barriers' className='block p-6 border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all'>
              <h3 className='font-bold text-slate-900 mb-1'>Best Vapor Barriers</h3>
              <p className='text-slate-600 text-sm'>Top-rated vapor barriers for basement moisture control.</p>
            </Link>
          </div>
        </section>

        {/* Network Cross-Links */}
        <section className='mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200'>
          <p className='text-slate-600 text-sm'>
            <strong>Our network:</strong>{' '}
            <a href='https://thegarage.guide' target='_blank' rel='noopener noreferrer' className='text-amber-600 hover:text-amber-700 underline'>The Garage Guide</a>{' '}
            covers cracked garage floors, which are caused by many of the same forces that crack basement foundation walls.{' '}
            <a href='https://theseptic.guide' target='_blank' rel='noopener noreferrer' className='text-amber-600 hover:text-amber-700 underline'>The Septic Guide</a>{' '}
            covers septic system inspections that should be coordinated with foundation inspections when buying a home.
          </p>
        </section>

      </article>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-white mb-4'>Get a Professional Foundation Inspection</h2>
          <p className='text-slate-300 mb-8 text-lg'>
            Not sure if your crack is serious? Connect with certified foundation repair specialists in your area for a free assessment.
          </p>
          <LeadForm />
        </div>
      </section>

    </div>
  )
}
