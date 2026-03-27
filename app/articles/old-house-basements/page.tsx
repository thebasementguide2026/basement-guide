import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Old House Basements: Complete Guide to Renovating, Waterproofing & Insulating Older Homes (2026) | The Basement Guide',
  description: 'Expert guide to renovating basements in pre-1940 homes. Waterproofing stone and brick foundations, insulation strategies, historic preservation tips, and 2026 cost estimates.',
  alternates: { canonical: 'https://thebasement.guide/articles/old-house-basements' },
}

export default function OldHouseBasementsArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/old-house-basement-hero.jpg'
          alt='Stone foundation basement in an older home with exposed masonry walls'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>Expanded Edition</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Old House Basements<br />
            <span className='text-teal-400'>The Complete Renovation Guide</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-8'>
            Everything you need to know about renovating, waterproofing, and insulating basements in homes built before 1950. Work with the original materials, not against them.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center'>
              <span className='text-teal-400 font-bold text-sm'>BG</span>
            </div>
            <div>
              <p className='text-white font-semibold'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 &middot; 42 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <p className='text-xl text-slate-700 leading-relaxed mb-6'>
          Renovating an old house basement requires a different mindset than working on newer construction. The goal is not to fight the original materials but to work with them. Whether your house dates from the 1800s with hand-laid stone foundations or the 1920s with brick or early cinder block, these spaces often hold surprising potential.
        </p>
        <p className='text-lg text-slate-600 leading-relaxed mb-12'>
          This guide pulls together building-science best practices, historic preservation principles, and lessons from hundreds of successful older-home projects to give you clear, actionable steps.
        </p>

        {/* Section 1 - What Makes Old Basements Different */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Understanding</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>By Era</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>What Makes Basements in Old Houses Different</h2>
          <p className='text-slate-700 mb-8'>Homes built before World War II followed very different construction standards. Here is what typically sets them apart by era.</p>

          <div className='space-y-6 mb-8'>
            <div className='bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl'>
              <h3 className='font-bold text-slate-900 mb-2'>Pre-1900: Victorian, Colonial, Farmhouse</h3>
              <p className='text-slate-700'>Fieldstone or rubble foundations with lime-based mortar. These walls are thick, often 18 to 24 inches, and surprisingly stable but highly porous.</p>
            </div>
            <div className='bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl'>
              <h3 className='font-bold text-slate-900 mb-2'>1900 to 1930: Craftsman, Four-Square, Early Tudor</h3>
              <p className='text-slate-700'>Brick or mixed stone-and-brick walls, sometimes with early poured concrete footings. Mortar is still lime-rich and breathable.</p>
            </div>
            <div className='bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl'>
              <h3 className='font-bold text-slate-900 mb-2'>1930s to 1940s</h3>
              <p className='text-slate-700'>Cinder block or early concrete block that is more uniform but still lacks modern damp-proofing.</p>
            </div>
          </div>

          <p className='text-slate-700 mb-4'>Common traits across all eras include dirt or thin gravel floors, low or uneven ceiling heights (often 6 ft 4 in to 7 ft), minimal or no perimeter drainage, and grading that frequently directs water toward the house.</p>

          <div className='bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl'>
            <p className='font-bold text-teal-800 mb-1'>The Good News</p>
            <p className='text-teal-700'>These older foundations were built to last centuries when moisture is managed properly.</p>
          </div>
        </div>

        {/* Section 2 - Hidden Opportunities */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Potential</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Hidden Value</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Hidden Opportunities Most People Miss</h2>
          <p className='text-slate-700 mb-6'>Old house basements often have advantages that newer ones lack.</p>
          <ul className='space-y-4 mb-6'>
            <li className='flex items-start space-x-3'><span className='text-teal-500 mt-1 font-bold'>&#10003;</span><span className='text-slate-700'>Thick stone or brick walls provide natural thermal mass, helping stabilize temperatures once insulated.</span></li>
            <li className='flex items-start space-x-3'><span className='text-teal-500 mt-1 font-bold'>&#10003;</span><span className='text-slate-700'>Exposed ceiling joists or original beams can become beautiful design features in a finished space.</span></li>
            <li className='flex items-start space-x-3'><span className='text-teal-500 mt-1 font-bold'>&#10003;</span><span className='text-slate-700'>Original coal chutes or root cellars can be creatively repurposed as wine storage or built-in shelving.</span></li>
            <li className='flex items-start space-x-3'><span className='text-teal-500 mt-1 font-bold'>&#10003;</span><span className='text-slate-700'>The character of raw stone or brick can be left partially exposed as an accent wall, giving the basement a warmth that drywall alone cannot match.</span></li>
          </ul>
        </div>

        {/* Section 3 - Common Problems */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Diagnosis</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Common Issues</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Common Problems in Old House Basements</h2>
          <p className='text-slate-700 mb-8'>The biggest issues usually trace back to age and original construction methods.</p>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 mb-2'>Moisture and <Link href='/articles/basement-efflorescence' className='text-teal-600 underline hover:text-teal-800'>Efflorescence</Link></h3>
              <p className='text-slate-600 text-sm'>White powdery deposits on walls signal ongoing water movement through porous masonry.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 mb-2'>Crumbling Mortar and Spalling</h3>
              <p className='text-slate-600 text-sm'>Lime mortar erodes over decades. Stones or bricks can flake when water freezes inside them.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 mb-2'>Settling and <Link href='/articles/types-of-foundation-cracks' className='text-teal-600 underline hover:text-teal-800'>Foundation Cracks</Link></h3>
              <p className='text-slate-600 text-sm'>Decades of soil movement create stepped cracks in stone walls or horizontal cracks in block.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h3 className='font-bold text-slate-900 mb-2'><Link href='/articles/how-to-prevent-basement-mold' className='text-teal-600 underline hover:text-teal-800'>Mold</Link> and <Link href='/articles/musty-basement-smell' className='text-teal-600 underline hover:text-teal-800'>Musty Air</Link></h3>
              <p className='text-slate-600 text-sm'>Poor ventilation plus organic debris like old coal dust and wood scraps feeds mold growth.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 md:col-span-2'>
              <h3 className='font-bold text-slate-900 mb-2'>Safety Concerns</h3>
              <p className='text-slate-600 text-sm'>Asbestos in old ceiling tiles or insulation, lead paint, <Link href='/articles/radon-and-basement-waterproofing' className='text-teal-600 underline hover:text-teal-800'>radon</Link>, knob-and-tube wiring, and cast-iron drains that may be failing.</p>
            </div>
          </div>

          <div className='bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl'>
            <p className='font-bold text-blue-800 mb-1'>Quick Diagnostic Test</p>
            <p className='text-blue-700'>Tape clear plastic sheets to walls and floor for 48 to 72 hours. Condensation on the room side means interior humidity. On the concrete side means seepage.</p>
          </div>
        </div>

        {/* Section 4 - Waterproofing */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Critical</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Waterproofing</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Waterproofing an Old House Basement</h2>

          <div className='bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8'>
            <p className='font-bold text-red-800 mb-1'>Golden Rule for Historic Masonry</p>
            <p className='text-red-700'>Let the walls breathe. Trapping moisture behind modern impermeable coatings can cause more damage than it prevents.</p>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Essential First Steps (Do These Before Anything Else)</h3>
          <ul className='space-y-3 mb-8'>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>1</span><span className='text-slate-700'>Re-grade soil to slope away from the foundation.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>2</span><span className='text-slate-700'>Extend downspouts and add splash blocks or buried extensions.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>3</span><span className='text-slate-700'>Clear and improve window-well drainage.</span></li>
          </ul>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Proven Methods for Older Foundations</h3>
          <div className='space-y-6 mb-8'>
            <div className='bg-white rounded-2xl border border-slate-200 p-6'>
              <h4 className='font-bold text-slate-900 mb-2'>Interior Perimeter <Link href='/articles/french-drain-cost' className='text-teal-600 underline hover:text-teal-800'>French Drain</Link> with Dimple Mat</h4>
              <p className='text-slate-600'>Collects water without sealing the masonry shut. The dimple mat creates an air gap on walls while directing water to perimeter drains.</p>
            </div>
            <div className='bg-white rounded-2xl border border-slate-200 p-6'>
              <h4 className='font-bold text-slate-900 mb-2'><Link href='/articles/crystalline-waterproofing' className='text-teal-600 underline hover:text-teal-800'>Crystalline or Silicate Penetrating Sealers</Link></h4>
              <p className='text-slate-600'>React inside the pores to block liquid water while still allowing vapor transmission. Ideal for porous stone, brick, and early concrete.</p>
            </div>
            <div className='bg-white rounded-2xl border border-slate-200 p-6'>
              <h4 className='font-bold text-slate-900 mb-2'><Link href='/articles/sump-pump-buying-guide' className='text-teal-600 underline hover:text-teal-800'>Sump Pump</Link> with Battery Backup</h4>
              <p className='text-slate-600'>A reliable discharge line is essential. Test it monthly and replace the battery every 3 to 5 years.</p>
            </div>
          </div>

          <p className='text-slate-700'>Exterior excavation and membrane installation can be ideal for severe cases but is often cost-prohibitive in tight older neighborhoods. Many successful projects combine modest exterior grading improvements with a robust interior drainage system.</p>
        </div>

        {/* Section 5 - Insulation */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Comfort</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'><Link href='/articles/basement-insulation-guide' className='text-slate-600 hover:text-teal-700'>Insulation</Link></span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Insulating an Old House Basement</h2>
          <p className='text-slate-700 mb-6'>Insulation transforms comfort levels, but the assembly must stay vapor-permeable.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Recommended Approach</h3>
          <ol className='space-y-3 mb-8'>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>1</span><span className='text-slate-700'>Clean walls thoroughly.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>2</span><span className='text-slate-700'>Apply 1.5 to 2 inches of rigid XPS foam board directly to the masonry. Taped seams create an air barrier.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>3</span><span className='text-slate-700'>Install furring strips over the foam for a service chase.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>4</span><span className='text-slate-700'>Fill cavities with mineral wool if extra R-value is desired.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>5</span><span className='text-slate-700'>Finish with mold-resistant drywall.</span></li>
          </ol>
          <p className='text-slate-700 mb-4'>Rim joists and the floor above get the same rigid foam treatment. For the floor, use sleepers over rigid foam with a capillary break.</p>

          <div className='bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-4'>
            <p className='font-bold text-red-800 mb-1'>Never Do This</p>
            <p className='text-red-700'>Never install fiberglass batts directly against old masonry. They hold moisture too easily.</p>
          </div>
          <div className='bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl'>
            <p className='font-bold text-teal-800 mb-1'>Pro Tip</p>
            <p className='text-teal-700'>A properly sized <Link href='/articles/dehumidifier-myths' className='text-teal-600 underline hover:text-teal-800'>dehumidifier</Link> running at 45 percent relative humidity or lower makes the biggest difference in how the space feels and performs.</p>
          </div>
        </div>

        {/* Section 6 - Preserving Historic Character */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Design</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Character</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Preserving Historic Character While Modernizing</h2>
          <p className='text-slate-700 mb-6'>One of the most rewarding parts of an old house basement renovation is keeping the soul of the space intact.</p>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-2'>Exposed Accent Walls</h4>
              <p className='text-slate-600 text-sm'>Leave one stone or brick wall exposed and light it dramatically for stunning character.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-2'>Open-Beam Ceilings</h4>
              <p className='text-slate-600 text-sm'>Incorporate original ceiling joists into an open-beam design that celebrates the home&apos;s age.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-2'>Reclaimed Materials</h4>
              <p className='text-slate-600 text-sm'>Use reclaimed wood or period-style trim for built-ins that match the home&apos;s era.</p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200'>
              <h4 className='font-bold text-slate-900 mb-2'>Period Lighting</h4>
              <p className='text-slate-600 text-sm'>Choose fixtures that echo the home&apos;s era: cage lights, schoolhouse pendants, or industrial sconces.</p>
            </div>
          </div>
        </div>

        {/* Section 7 - Step by Step */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Process</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Step by Step</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Step-by-Step Renovation Process</h2>
          <ol className='space-y-4 mb-8'>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>1</span><span className='text-slate-700'><strong>Thorough inspection and testing:</strong> moisture meter, radon, asbestos, and lead.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>2</span><span className='text-slate-700'><strong>Complete all exterior water management</strong> and structural repairs.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>3</span><span className='text-slate-700'><strong>Waterproof and insulate</strong> using breathable methods suited to historic masonry.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>4</span><span className='text-slate-700'><strong>Run mechanicals</strong> on the warm side of insulation.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>5</span><span className='text-slate-700'><strong>Frame, finish, and add proper egress</strong> where needed.</span></li>
            <li className='flex items-start space-x-3'><span className='bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>6</span><span className='text-slate-700'><strong>Final lighting, flooring, and character details.</strong></span></li>
          </ol>
          <div className='bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl'>
            <p className='font-bold text-amber-800 mb-1'>Budget for Surprises</p>
            <p className='text-amber-700'>Older homes almost always reveal something unexpected once walls or floors are opened. A 15 to 25 percent contingency is standard.</p>
          </div>
        </div>

        {/* Section 8 - Cost Overview */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Budget</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>2026 Costs</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>2026 Cost Overview for Old House Basement Projects</h2>
          <p className='text-slate-700 mb-6'>For a typical 800 to 1,000 sq ft space in a pre-1940 home:</p>
          <div className='space-y-4 mb-8'>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 flex justify-between items-center'>
              <div>
                <h4 className='font-bold text-slate-900'>Basic Waterproofing and Dehumidification</h4>
                <p className='text-slate-500 text-sm'>Drainage, sump pump, and humidity control</p>
              </div>
              <span className='text-teal-600 font-bold text-lg'>$5,000 &ndash; $14,000</span>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 flex justify-between items-center'>
              <div>
                <h4 className='font-bold text-slate-900'>Full Moisture Control Plus Insulation</h4>
                <p className='text-slate-500 text-sm'>Waterproofing, insulation, and vapor management</p>
              </div>
              <span className='text-teal-600 font-bold text-lg'>$10,000 &ndash; $22,000</span>
            </div>
            <div className='bg-slate-50 rounded-2xl p-6 border border-slate-200 flex justify-between items-center'>
              <div>
                <h4 className='font-bold text-slate-900'>Complete Finished Living Space</h4>
                <p className='text-slate-500 text-sm'>Including structural and hazard remediation</p>
              </div>
              <span className='text-teal-600 font-bold text-lg'>$20,000 &ndash; $70,000</span>
            </div>
          </div>
          <div className='bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl'>
            <p className='font-bold text-amber-800 mb-1'>Expect Higher Costs Than Newer Homes</p>
            <p className='text-amber-700'>Costs run 25 to 50 percent higher than newer homes because of repairs to original materials and potential hazard abatement. A 15 to 25 percent contingency is standard.</p>
          </div>
        </div>

        {/* Section 9 - DIY vs Pro */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Decision</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>DIY vs Pro</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>DIY vs Professional Work in Older Homes</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-teal-50 rounded-2xl p-6 border border-teal-200'>
              <h3 className='font-bold text-teal-900 mb-3'>DIY-Friendly Tasks</h3>
              <ul className='space-y-2'>
                <li className='flex items-start space-x-2'><span className='text-teal-500 font-bold'>&#10003;</span><span className='text-teal-800 text-sm'>Painting and basic cosmetic finishes</span></li>
                <li className='flex items-start space-x-2'><span className='text-teal-500 font-bold'>&#10003;</span><span className='text-teal-800 text-sm'>Installing floating floors</span></li>
                <li className='flex items-start space-x-2'><span className='text-teal-500 font-bold'>&#10003;</span><span className='text-teal-800 text-sm'>Basic dehumidifier setup</span></li>
                <li className='flex items-start space-x-2'><span className='text-teal-500 font-bold'>&#10003;</span><span className='text-teal-800 text-sm'>Exterior grading and gutter maintenance</span></li>
              </ul>
            </div>
            <div className='bg-red-50 rounded-2xl p-6 border border-red-200'>
              <h3 className='font-bold text-red-900 mb-3'>Hire a Professional</h3>
              <ul className='space-y-2'>
                <li className='flex items-start space-x-2'><span className='text-red-500 font-bold'>&times;</span><span className='text-red-800 text-sm'>Drainage and waterproofing systems</span></li>
                <li className='flex items-start space-x-2'><span className='text-red-500 font-bold'>&times;</span><span className='text-red-800 text-sm'>Structural repairs to walls or footings</span></li>
                <li className='flex items-start space-x-2'><span className='text-red-500 font-bold'>&times;</span><span className='text-red-800 text-sm'>Electrical, plumbing, and HVAC</span></li>
                <li className='flex items-start space-x-2'><span className='text-red-500 font-bold'>&times;</span><span className='text-red-800 text-sm'>Hazardous material removal (asbestos, lead)</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 10 - Products */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Recommended</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Products</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Materials Commonly Used in Old House Basement Projects</h2>
          <p className='text-slate-700 mb-8'>These products appear frequently in successful older-home renovations and are available through major retailers.</p>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-2'>Sump Pumps with Battery Backup</h4>
              <p className='text-slate-600 text-sm mb-3'>Reliable units for interior drainage in older foundations.</p>
              {/* Affiliate link placeholder */}
            </div>
            <div className='bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-2'>Crystalline Masonry Sealers</h4>
              <p className='text-slate-600 text-sm mb-3'>Penetrating treatments ideal for porous stone, brick, and early concrete.</p>
              {/* Affiliate link placeholder */}
            </div>
            <div className='bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-2'>Rigid Foam Insulation Boards</h4>
              <p className='text-slate-600 text-sm mb-3'>Moisture-resistant panels for direct application to historic walls.</p>
              {/* Affiliate link placeholder */}
            </div>
            <div className='bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-2'>Dimple Mat Drainage Membranes</h4>
              <p className='text-slate-600 text-sm mb-3'>Create air gaps on walls while directing water to perimeter drains.</p>
              {/* Affiliate link placeholder */}
            </div>
            <div className='bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-2'>High-Capacity Basement Dehumidifiers</h4>
              <p className='text-slate-600 text-sm mb-3'>Sized for the square footage to maintain proper humidity.</p>
              {/* Affiliate link placeholder */}
            </div>
            <div className='bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
              <h4 className='font-bold text-slate-900 mb-2'>French Drain Kits and Perforated Pipe</h4>
              <p className='text-slate-600 text-sm mb-3'>Tailored for uneven older floors and foundations.</p>
              {/* Affiliate link placeholder */}
            </div>
          </div>
        </div>

        {/* Section 11 - Maintenance */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Ongoing</span>
            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide'>Maintenance</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Maintenance Tips for Long-Term Success</h2>
          <ul className='space-y-4'>
            <li className='flex items-start space-x-3'><span className='text-teal-500 mt-1 font-bold'>&#10003;</span><span className='text-slate-700'>Test the sump pump twice a year and replace the battery every 3 to 5 years.</span></li>
            <li className='flex items-start space-x-3'><span className='text-teal-500 mt-1 font-bold'>&#10003;</span><span className='text-slate-700'>Keep gutters clean and grading intact.</span></li>
            <li className='flex items-start space-x-3'><span className='text-teal-500 mt-1 font-bold'>&#10003;</span><span className='text-slate-700'>Monitor humidity seasonally with a digital hygrometer.</span></li>
            <li className='flex items-start space-x-3'><span className='text-teal-500 mt-1 font-bold'>&#10003;</span><span className='text-slate-700'>Walk the space each spring, looking for new efflorescence or cracks.</span></li>
          </ul>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>Can you safely finish a basement in a 100-year-old house?</h4>
              <p className='text-slate-600'>Yes. Thousands of pre-1940 homes now have comfortable finished basements once moisture and structure are properly addressed.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>How do you waterproof a stone or brick foundation without trapping moisture?</h4>
              <p className='text-slate-600'>Use interior drainage plus breathable crystalline sealers. Never apply a full vapor barrier directly to the masonry.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>Is it worth exposing the original stone or brick walls?</h4>
              <p className='text-slate-600'>Many owners say the character walls become their favorite feature of the entire renovation.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>What about low ceilings in old basements?</h4>
              <p className='text-slate-600'>Strategic lighting, painted ceilings, and creative flooring choices make 6 ft 6 in feel surprisingly spacious.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>Will renovating an old house basement increase home value?</h4>
              <p className='text-slate-600'>It can be significant, especially when the finished space respects the home&apos;s historic character. See our <Link href='/articles/waterproofing-home-appraisal-value' className='text-teal-600 underline hover:text-teal-800'>waterproofing and home value guide</Link> for details.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Guides */}
      <section className='bg-slate-50 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/articles/complete-basement-waterproofing-guide' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all'>
              <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Complete Waterproofing Guide</h4>
              <p className='text-slate-500 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
            </Link>
            <Link href='/articles/basement-efflorescence' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all'>
              <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Basement Efflorescence Guide</h4>
              <p className='text-slate-500 text-sm'>What that white powder on your walls really means and how to fix it.</p>
            </Link>
            <Link href='/articles/types-of-foundation-cracks' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all'>
              <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Types of Foundation Cracks</h4>
              <p className='text-slate-500 text-sm'>Diagnose whether your crack is cosmetic or a structural red flag.</p>
            </Link>
            <Link href='/articles/basement-insulation-guide' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all'>
              <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Basement Insulation Guide</h4>
              <p className='text-slate-500 text-sm'>Rigid foam vs spray foam vs mineral wool for basement walls.</p>
            </Link>
            <Link href='/articles/basement-waterproofing-cost' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all'>
              <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Waterproofing Cost Guide 2026</h4>
              <p className='text-slate-500 text-sm'>Interior vs exterior waterproofing costs and what to expect.</p>
            </Link>
            <Link href='/articles/how-to-prevent-basement-mold' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all'>
              <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>How to Prevent Basement Mold</h4>
              <p className='text-slate-500 text-sm'>Critical steps to stop mold before it starts in damp basements.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-slate-900 rounded-[2rem] p-12 text-white mt-20 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32' />
          <div className='relative z-10 text-center max-w-2xl mx-auto'>
            <h2 className='text-3xl font-black text-white mb-4'>Get Expert Help With Your Old House Basement</h2>
            <p className='text-slate-300 mb-8 max-w-2xl mx-auto'>
              Connect with contractors experienced in historic construction and older foundations. Free assessments, no obligation.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  )
}
