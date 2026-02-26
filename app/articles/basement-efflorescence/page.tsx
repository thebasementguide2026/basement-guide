import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Efflorescence: What That White Powder Really Means (2026) | The Basement Guide',
  description: 'Learn what causes white powder on basement walls, whether efflorescence is dangerous, how to clean it safely, and how to stop it from returning permanently.',
}

export default function BasementEfflorescenceArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/Efflorescence.jpg'
          alt='White powdery efflorescence deposits on basement concrete wall'
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
            Basement Efflorescence<br />
            <span className='text-teal-400'>The White Powder Explained</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            That chalky white coating on your walls is your concrete telling you water has been moving through it. Here is what it means and how to fix it.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-semibold'>The Basement Guide</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 &middot; 12 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <p className='text-lg text-slate-700 leading-relaxed mb-6'>
          If you have noticed a white, chalky, powdery coating on your basement walls, floor, or foundation, you are seeing efflorescence. It is one of the most common signs of moisture issues in basements, and while it looks harmless, it is actually your concrete telling you water has been moving through it.
        </p>
        <p className='text-lg text-slate-700 leading-relaxed mb-12'>
          This guide explains what efflorescence is, why it shows up, whether it is dangerous, how to clean it safely, and most importantly, how to stop it from returning. Simple, practical advice so you can decide your next steps.
        </p>

        {/* Section 1 - What Is Efflorescence */}
        <div className='mb-20'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Understanding</span>
            <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; The Science</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>What Is Efflorescence?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Efflorescence is a crystalline salt deposit that forms on porous surfaces like concrete, brick, block, or stone. It appears as white, grayish, or sometimes yellowish powder. The word comes from French, meaning &ldquo;to flower,&rdquo; because the salts bloom on the surface when water evaporates.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            It is not mold, though <Link href='/articles/how-to-prevent-basement-mold' className='text-teal-600 underline hover:text-teal-800'>mold can grow nearby</Link> in damp conditions. It is just mineral salts &mdash; mostly calcium carbonate, sodium carbonate, potassium carbonate, or similar compounds &mdash; that are naturally present in cement, mortar, soil, or groundwater.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            When water passes through the material, it dissolves these soluble salts. As the water reaches the surface and evaporates, the salts crystallize and leave the visible powder behind.
          </p>
        </div>

        {/* Section 2 - Why It Appears */}
        <div className='mb-20'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Causes</span>
            <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Root Issues</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>Why Does Efflorescence Appear in Basements?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Basements are especially prone because they are below ground level and constantly exposed to soil moisture. If the powder shows up after rain, reappears after cleaning, or gets worse in humid seasons, it is a strong sign of ongoing water movement.
          </p>

          <h3 className='text-xl font-bold text-slate-800 mb-6'>Common Triggers</h3>
          <div className='space-y-4 mb-8'>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>1</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Water Intrusion Through Porous Concrete</h4>
                  <p className='text-slate-600'>Moisture passes through <Link href='/articles/types-of-foundation-cracks' className='text-teal-600 underline hover:text-teal-800'>foundation cracks</Link>, pores, or areas with poor exterior grading.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>2</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Groundwater Seepage or Hydrostatic Pressure</h4>
                  <p className='text-slate-600'>Hydrostatic pressure pushes moisture inward through the foundation walls and floor.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>3</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Condensation From High Humidity</h4>
                  <p className='text-slate-600'>Warm, humid air meeting cold basement walls creates condensation that carries salts to the surface.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>4</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Poor Exterior Drainage</h4>
                  <p className='text-slate-600'>Soil sloping toward the house, downspouts dumping water nearby, and clogged gutters direct water at the foundation.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>5</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Newer Concrete or Recent Repairs</h4>
                  <p className='text-slate-600'>Fresh materials have more free lime and unhydrated particles that produce salts as they cure.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>6</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Missing or Failed Footer Drains</h4>
                  <p className='text-slate-600'>Without functioning perimeter drains, groundwater has no path away from the foundation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl'>
            <p className='font-bold text-amber-800 mb-1'>Key Indicator</p>
            <p className='text-amber-700'>If efflorescence appears after rain, returns after cleaning, or worsens in humid seasons, ongoing water movement is the cause.</p>
          </div>
        </div>

        {/* Section 3 - Is It Harmful */}
        <div className='mb-20'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Safety</span>
            <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Health Risks</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>Is Efflorescence Harmful?</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-6'>
            Efflorescence itself is not dangerous to your health. It is just harmless mineral salts, not toxic or mold-related. It will not make you sick or affect air quality on its own.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            However, the moisture causing it is the real concern. Think of efflorescence as an early warning light &mdash; address the moisture before it becomes a costly repair.
          </p>

          <h3 className='text-xl font-bold text-slate-800 mb-6'>What Ongoing Moisture Can Cause</h3>
          <ul className='space-y-3 mb-8'>
            <li className='flex items-start space-x-3'>
              <span className='text-red-500 font-bold mt-0.5'>&bull;</span>
              <span className='text-slate-700'>Encourage <Link href='/articles/how-to-prevent-basement-mold' className='text-teal-600 underline hover:text-teal-800'>mold growth</Link> behind walls or in corners</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-red-500 font-bold mt-0.5'>&bull;</span>
              <span className='text-slate-700'>Cause efflorescence to keep returning and spreading across larger areas</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-red-500 font-bold mt-0.5'>&bull;</span>
              <span className='text-slate-700'>Accelerate rust on rebar inside concrete, weakening the structure</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-red-500 font-bold mt-0.5'>&bull;</span>
              <span className='text-slate-700'>Weaken concrete over time as salts crystallize and expand within pores</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-red-500 font-bold mt-0.5'>&bull;</span>
              <span className='text-slate-700'>Indicate bigger problems like <Link href='/articles/types-of-foundation-cracks' className='text-teal-600 underline hover:text-teal-800'>foundation cracks</Link> or high groundwater levels</span>
            </li>
          </ul>

          <div className='bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl'>
            <p className='font-bold text-red-800 mb-1'>Important</p>
            <p className='text-red-700'>The powder is harmless, but the water behind it is not. Address moisture early to avoid structural damage and mold issues.</p>
          </div>
        </div>

        {/* Section 4 - How to Remove */}
        <div className='mb-20'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Action</span>
            <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Cleaning Steps</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>How to Remove Efflorescence Safely</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Cleaning is straightforward but temporary unless you fix the water source. Follow these steps in order.
          </p>

          <div className='space-y-4 mb-8'>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>1</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Dry Brushing</h4>
                  <p className='text-slate-600'>Use a stiff wire brush or broom to remove loose powder. Do this first for light buildup.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>2</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Wet Cleaning</h4>
                  <p className='text-slate-600'>Mix 1 part white vinegar to 5 parts water (mild acid dissolves salts). Scrub with a stiff brush, rinse thoroughly with clean water, and let the surface dry completely. For stubborn areas, use diluted muriatic acid (1:10 with water), but wear gloves, eye protection, and ventilate well.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>3</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Avoid Pressure Washing Indoors</h4>
                  <p className='text-slate-600'>Pressure washing can force water deeper into the pores, making the problem worse over time.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>4</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Seal After Cleaning (Optional)</h4>
                  <p className='text-slate-600'>Apply a breathable concrete sealer or <Link href='/articles/crystalline-waterproofing' className='text-teal-600 underline hover:text-teal-800'>crystalline waterproofing</Link> product to help prevent future deposits.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl'>
            <p className='font-bold text-amber-800 mb-1'>Key Rule</p>
            <p className='text-amber-700'>Never paint or seal over efflorescence without removing it first. The salts will push through and cause peeling or bubbling.</p>
          </div>
        </div>

        {/* Section 5 - Permanent Fixes */}
        <div className='mb-20'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Permanent</span>
            <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Long-Term Solutions</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>How to Stop Efflorescence From Coming Back</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Cleaning removes the symptom. Stopping water movement fixes the problem permanently.
          </p>

          <div className='space-y-4 mb-8'>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>1</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Improve Exterior Drainage (Start Here)</h4>
                  <p className='text-slate-600'>Often the cheapest fix. Regrade soil to slope away from the foundation (at least 6 inches drop over 10 feet), extend downspouts 10 feet from the house, and clean and repair gutters.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>2</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Seal Foundation Cracks</h4>
                  <p className='text-slate-600'>Use epoxy or polyurethane injections for hairline cracks to stop water from passing through.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>3</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Apply Crystalline Waterproofing</h4>
                  <p className='text-slate-600'><Link href='/articles/crystalline-waterproofing' className='text-teal-600 underline hover:text-teal-800'>Crystalline products</Link> penetrate concrete and grow self-healing crystals to block pores permanently.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>4</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Install Interior Drainage</h4>
                  <p className='text-slate-600'>Perimeter drains and a <Link href='/articles/sump-pump-buying-guide' className='text-teal-600 underline hover:text-teal-800'>sump pump</Link> collect seepage before it reaches your walls and floor surfaces.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>5</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Exterior Membrane (Severe Cases)</h4>
                  <p className='text-slate-600'>For serious water intrusion, dig around the foundation and apply a waterproof coating to the exterior wall surface.</p>
                </div>
              </div>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5'>6</div>
                <div>
                  <h4 className='font-bold text-slate-900 mb-1'>Control Humidity</h4>
                  <p className='text-slate-600'>Run a dehumidifier to keep basement air below 50% relative humidity, reducing condensation that contributes to salt deposits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 - When to Call a Pro */}
        <div className='mb-20'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Warning</span>
            <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Professional Help</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>When to Call a Professional</h2>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            If efflorescence keeps returning quickly, covers large areas, or comes with musty smells, bubbling paint, cracks, or visible mold, it is time to bring in the experts.
          </p>

          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div className='bg-slate-50 rounded-xl p-6 text-center border border-slate-100'>
              <p className='text-2xl font-bold text-teal-600 mb-2'>Often Free</p>
              <p className='font-bold text-slate-900 mb-1'>Waterproofing Inspection</p>
              <p className='text-slate-600 text-sm'>Many contractors offer free evaluations</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 text-center border border-slate-100'>
              <p className='text-2xl font-bold text-teal-600 mb-2'>$200&ndash;$500</p>
              <p className='font-bold text-slate-900 mb-1'>Moisture Testing</p>
              <p className='text-slate-600 text-sm'>Moisture meter or thermal imaging to find hidden sources</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 text-center border border-slate-100'>
              <p className='text-2xl font-bold text-teal-600 mb-2'>Varies</p>
              <p className='font-bold text-slate-900 mb-1'>Mold Testing</p>
              <p className='text-slate-600 text-sm'>Recommended if dampness is widespread</p>
            </div>
          </div>
        </div>

        {/* Quick Summary */}
        <div className='mb-20'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Summary</span>
            <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Key Takeaways</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>Quick Summary: What You Should Know</h2>
          <ul className='space-y-3 mb-8'>
            <li className='flex items-start space-x-3'>
              <span className='text-teal-500 font-bold mt-0.5'>&check;</span>
              <span className='text-slate-700'><strong>Efflorescence is harmless white salty powder</strong> from water moving through concrete and evaporating.</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-teal-500 font-bold mt-0.5'>&check;</span>
              <span className='text-slate-700'><strong>It is a clear sign of ongoing moisture</strong> &mdash; do not ignore it.</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-teal-500 font-bold mt-0.5'>&check;</span>
              <span className='text-slate-700'><strong>Clean with brushing and vinegar</strong> &mdash; never paint over it.</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-teal-500 font-bold mt-0.5'>&check;</span>
              <span className='text-slate-700'><strong>Fix the water source</strong> (grading, drainage, sealing) to stop recurrence.</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-teal-500 font-bold mt-0.5'>&check;</span>
              <span className='text-slate-700'><strong>In basements, it is usually an early warning</strong> of bigger moisture issues.</span>
            </li>
          </ul>

          <div className='bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-xl'>
            <p className='font-bold text-teal-800 mb-1'>Bottom Line</p>
            <p className='text-teal-700'>Efflorescence is your concrete sending a message. The powder is harmless, but the water behind it is not. Start by checking your exterior drainage and grab a hygrometer to monitor humidity.</p>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-20'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='text-teal-600 font-bold text-sm tracking-wider uppercase'>Reference</span>
            <span className='text-slate-300 font-bold text-sm tracking-wider uppercase'>&nbsp; Glossary</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>Glossary of Terms</h2>
          <div className='space-y-4'>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Efflorescence</h4>
              <p className='text-slate-600'>White, powdery salt deposits on concrete or masonry caused by water carrying soluble salts to the surface where they crystallize as the water evaporates.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Hydrostatic Pressure</h4>
              <p className='text-slate-600'>The force of groundwater pushing against foundation walls or floors, often forcing water through pores and cracks.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Porous Concrete</h4>
              <p className='text-slate-600'>Concrete with tiny open pores and capillaries that allow water and dissolved salts to pass through.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Crystalline Waterproofing</h4>
              <p className='text-slate-600'>A treatment that penetrates concrete and grows insoluble crystals to seal pores and self-heal small cracks.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
              <h4 className='font-bold text-slate-900 mb-1'>Footer Drains</h4>
              <p className='text-slate-600'>Perforated pipes installed at the base of the foundation to collect and redirect groundwater away from the structure.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <Link href='/articles/crystalline-waterproofing' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 mb-2'>Crystalline Waterproofing Guide</h3>
              <p className='text-slate-600 text-sm'>How crystalline coatings seal concrete from the inside out and prevent efflorescence.</p>
            </Link>
            <Link href='/articles/how-to-prevent-basement-mold' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 mb-2'>How to Prevent Basement Mold</h3>
              <p className='text-slate-600 text-sm'>Critical steps to stop mold before it starts in damp basement conditions.</p>
            </Link>
            <Link href='/articles/types-of-foundation-cracks' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 mb-2'>Types of Foundation Cracks</h3>
              <p className='text-slate-600 text-sm'>Diagnose whether your crack is cosmetic or a structural red flag.</p>
            </Link>
            <Link href='/articles/foundation-crack-repair-cost' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 mb-2'>Foundation Crack Repair Cost 2026</h3>
              <p className='text-slate-600 text-sm'>Epoxy injection vs polyurethane foam pricing and what to expect.</p>
            </Link>
            <Link href='/articles/musty-basement-smell' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 mb-2'>Musty Basement Smell Guide</h3>
              <p className='text-slate-600 text-sm'>Track down and eliminate that damp, earthy odor for good.</p>
            </Link>
            <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
              <h3 className='font-bold text-slate-900 mb-2'>Complete Waterproofing Guide</h3>
              <p className='text-slate-600 text-sm'>Everything you need to know about stopping basement leaks for good.</p>
            </Link>
                          <Link href='/articles/old-house-basements' className='block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all'>
                <h3 className='font-bold text-slate-900 mb-2'>Old House Basements Guide</h3>
                <p className='text-slate-600 text-sm'>Renovating and waterproofing basements in pre-1940 homes with historic foundations.</p>
              </Link>
          </div>
        </div>

        {/* Lead Form CTA */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Get Expert Help With Basement Efflorescence</h2>
          <p className='text-lg text-slate-600 mb-8'>Connect with pre-vetted waterproofing professionals in your area. Free assessments, no obligation.</p>
          <LeadForm />
        </div>
      </article>
    </div>
  )
}
