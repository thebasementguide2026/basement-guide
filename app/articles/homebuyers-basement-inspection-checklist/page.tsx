import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Homebuyer\'s Basement Inspection Checklist: Don\'t Buy a Money Pit',
  description: 'A detailed 2026 homebuyer basement inspection checklist to spot red flags like hidden mold, fresh paint cover-ups, water damage, and foundation issues before you buy.',
}

export default function HomebuyersBasementInspectionChecklist() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/homebuyers checklist.jpg'
          alt='Homebuyer inspecting a basement during a house showing'
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
            Homebuyer's Basement<br />
            <span className='text-teal-400'>Inspection Checklist</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Don't buy a money pit. Spot hidden water damage, mold, foundation issues, and fresh-paint cover-ups before you sign.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center mr-3'>
                <span className='text-white font-black text-sm'>BG</span>
              </div>
              <div>
                <p className='text-white font-semibold text-sm'>The Basement Guide</p>
                <p className='text-slate-400 text-xs'>Updated Feb 2026 &middot; 25 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-20'>
        <div className='prose prose-lg prose-slate max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed'>
            Buying a home with a basement can add valuable space for storage, recreation, or even future living areas, but a problematic basement often becomes one of the most expensive regrets. Hidden water damage, <Link href="/articles/how-to-prevent-basement-mold" className="text-teal-400 underline hover:text-teal-300">mold growth</Link>, <Link href="/articles/types-of-foundation-cracks" className="text-teal-400 underline hover:text-teal-300">foundation issues</Link>, and poor drainage can turn a dream home into a costly money pit with repairs running tens of thousands of dollars.
          </p>
          <p>
            Sellers sometimes use quick fixes like fresh paint to mask serious problems, especially mold or water stains, hoping buyers overlook them during walkthroughs.
          </p>
          <p>
            In this comprehensive 2026 guide we provide a detailed homebuyer's basement inspection checklist focused on spotting red flags early. We emphasize how to detect fresh paint used to hide mold or water damage, explain common signs of trouble, and offer tips on what to do next. Use this during showings, open houses, or before your professional home inspection to protect your investment and negotiate effectively.
          </p>
          <p>
            Always hire a qualified home inspector for a full evaluation, but your own eyes and nose can catch issues that trigger deeper scrutiny. Basements are prone to moisture in many regions, so pay close attention.
          </p>

          {/* Why Basement Problems Matter */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>Why Basement Problems Are a Big Deal for Homebuyers</h2>
            <p>
              Basements account for hidden defects in many homes. Water intrusion leads to mold, structural damage, and health risks. A damp or moldy basement can <Link href="/articles/waterproofing-home-appraisal-value" className="text-teal-400 underline hover:text-teal-300">lower home value by 10 to 25 percent</Link>, require expensive <Link href="/articles/basement-waterproofing-cost" className="text-teal-400 underline hover:text-teal-300">waterproofing</Link> or <Link href="/articles/mold-remediation-cost" className="text-teal-400 underline hover:text-teal-300">remediation</Link>, and complicate financing or insurance. Spotting issues early lets you request repairs, credits, or walk away if problems are severe.
            </p>
            <div className='space-y-4 not-prose my-8'>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>&#9888;</span>
                <p className='text-slate-700'>Ongoing water entry causing repeated flooding or humidity.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>&#9888;</span>
                <p className='text-slate-700'>Mold affecting indoor air quality and respiratory health.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>&#9888;</span>
                <p className='text-slate-700'>Foundation cracks signaling settling or structural failure.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>&#9888;</span>
                <p className='text-slate-700'>Hidden damage behind finished walls or ceilings.</p>
              </div>
            </div>
          </div>

          {/* Essential Tools */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>Essential Tools for Your Basement Inspection</h2>
            <p>Bring these to showings for better observation:</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8'>
              <div className='bg-teal-50 border border-teal-200 rounded-2xl p-5'>
                <p className='text-slate-700'><strong>Flashlight</strong> with strong beam</p>
              </div>
              <div className='bg-teal-50 border border-teal-200 rounded-2xl p-5'>
                <p className='text-slate-700'><strong>Small level or marble</strong> to check for sloping floors</p>
              </div>
              <div className='bg-teal-50 border border-teal-200 rounded-2xl p-5'>
                <p className='text-slate-700'><strong>Phone camera</strong> for photos and documentation</p>
              </div>
              <div className='bg-teal-50 border border-teal-200 rounded-2xl p-5'>
                <p className='text-slate-700'><strong>Hygrometer</strong> if possible to measure humidity</p>
              </div>
              <div className='bg-teal-50 border border-teal-200 rounded-2xl p-5'>
                <p className='text-slate-700'><strong>Mask or respirator</strong> if suspecting mold</p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Checklist */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>Step-by-Step Basement Inspection Checklist</h2>
            <p>Follow this checklist systematically during your visit. Take notes and photos of anything suspicious.</p>

            {/* Step 1 */}
            <div className='bg-slate-50 rounded-2xl p-8 my-8 not-prose'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>1. Exterior and Grading First (Before Entering the Basement)</h3>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Walk around the house:</strong> Check that soil slopes away from the foundation at least 6 inches drop over 10 feet. Poor grading directs water toward the house.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Look at downspouts and gutters:</strong> Ensure they extend at least 5 to 10 feet from the foundation and direct water away.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Inspect window wells:</strong> They should have covers or gravel for drainage, no standing water or debris.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Note any cracks</strong> in exterior foundation walls or bowing.</p>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-6'>
                <p className='text-red-800'><strong>Red flag:</strong> Water pooling near the foundation or negative grading often causes interior basement issues.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className='bg-slate-50 rounded-2xl p-8 my-8 not-prose'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>2. Overall Basement Odor and Air Quality</h3>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Enter and stand quietly:</strong> Sniff for musty, earthy, damp, or mildew smells. This is often the first sign of moisture or mold, even if nothing is visible.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Feel the air:</strong> High humidity makes the space feel clammy. Ideal basement humidity is 30 to 50 percent.</p>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-6'>
                <p className='text-red-800'><strong>Red flag:</strong> Persistent musty odor despite fresh air or cleaning products indicates hidden mold or chronic dampness.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className='bg-slate-50 rounded-2xl p-8 my-8 not-prose'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>3. Walls, Floors, and Ceilings: Look for Moisture and Damage Signs</h3>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Examine concrete walls and floors:</strong> Check for efflorescence (white, powdery mineral deposits from water leaching through), water stains, discoloration, or damp spots.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Look for cracks:</strong> Hairline vertical cracks may be normal, but horizontal, stair-step, diagonal, or wide cracks over 1/4 inch signal foundation movement.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Inspect finished areas:</strong> Check drywall, paneling, or drop ceilings for bubbling, peeling paint, warped materials, or soft spots.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Test for sloping:</strong> Place a marble or level on the floor. Significant slope indicates settling.</p>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-6'>
                <p className='text-red-800'><strong>Red flag:</strong> Fresh, shiny paint on basement walls or ceilings, especially if the rest of the house paint looks older. Sellers often repaint to cover water stains, efflorescence, or mold patches.</p>
              </div>
            </div>

            {/* Step 4 - Fresh Paint */}
            <div className='bg-amber-50 border-2 border-amber-300 rounded-2xl p-8 my-8 not-prose'>
              <h3 className='text-2xl font-bold text-slate-900 mb-2'>4. Spotting Fresh Paint Used to Hide Mold or Water Damage</h3>
              <p className='text-amber-800 font-medium mb-6'>Sellers sometimes apply a quick coat of paint over problem areas to make the basement look clean. Here's how to detect it:</p>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-amber-600 font-bold text-lg mt-0.5'>&#128269;</span>
                  <p className='text-slate-700'><strong>Look for mismatched sheen or texture:</strong> Fresh paint may appear glossier, smoother, or brighter than surrounding areas. Check for roller marks, uneven coverage, or brush strokes in corners.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-amber-600 font-bold text-lg mt-0.5'>&#128269;</span>
                  <p className='text-slate-700'><strong>Check for bubbling, peeling, or cracking:</strong> If paint bubbles or lifts shortly after application, moisture is pushing from behind.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-amber-600 font-bold text-lg mt-0.5'>&#128269;</span>
                  <p className='text-slate-700'><strong>Inspect baseboards and trim:</strong> Paint overspray on floors, outlets, or adjacent areas can indicate hasty covering.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-amber-600 font-bold text-lg mt-0.5'>&#128269;</span>
                  <p className='text-slate-700'><strong>Feel surfaces:</strong> Press gently on painted drywall. Soft, spongy, or cool spots suggest moisture or mold behind.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-amber-600 font-bold text-lg mt-0.5'>&#128269;</span>
                  <p className='text-slate-700'><strong>Smell closely:</strong> Even under fresh paint, a faint musty odor may linger if mold is active.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-amber-600 font-bold text-lg mt-0.5'>&#128269;</span>
                  <p className='text-slate-700'><strong>Look behind obstacles:</strong> Move stored items or look under stairs for unpainted sections showing original stains or mold.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-amber-600 font-bold text-lg mt-0.5'>&#128269;</span>
                  <p className='text-slate-700'><strong>Note recent painting:</strong> If the basement was recently painted but other areas show wear, question why only the basement needed a refresh.</p>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-6'>
                <p className='text-red-800'><strong>Red flag:</strong> Uniform fresh paint on lower walls or ceilings in a basement with musty smells or high humidity. This is a classic cover-up for recurring moisture or black mold growth.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className='bg-slate-50 rounded-2xl p-8 my-8 not-prose'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>5. Mold and Mildew Specific Checks</h3>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Search for visible growth:</strong> Black, green, gray, or white fuzzy spots on walls, wood, or insulation.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Check hidden areas:</strong> Behind furniture, in corners, under stairs, around pipes, or in window wells.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Inspect sump pumps, drains, and utilities:</strong> Rust on metal, water rings, or dampness around these indicate leaks.</p>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-6'>
                <p className='text-red-800'><strong>Red flag:</strong> Any visible mold requires professional testing and remediation before purchase.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className='bg-slate-50 rounded-2xl p-8 my-8 not-prose'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>6. Structural and Mechanical Systems</h3>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Floor joists and beams:</strong> Look for sagging, cracks, rot, or insect damage.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Support columns:</strong> Check for rust, tilting, or settling.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong><Link href="/articles/sump-pump-buying-guide" className="text-teal-400 underline hover:text-teal-300">Sump pump</Link>:</strong> Test if possible, ask seller, listen for operation, and check discharge line.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>HVAC ducts and insulation:</strong> Look for rust, condensation, or mold on ducts.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                  <p className='text-slate-700'><strong>Windows and <Link href="/articles/egress-window-cost" className="text-teal-400 underline hover:text-teal-300">egress</Link>:</strong> Ensure windows open easily and have proper wells for emergency exit.</p>
                </div>
              </div>
              <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-6'>
                <p className='text-red-800'><strong>Red flag:</strong> Sagging joists or rusted supports often tie back to long-term moisture.</p>
              </div>
            </div>

            {/* Step 7 */}
            <div className='bg-slate-50 rounded-2xl p-8 my-8 not-prose'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>7. Additional Red Flags</h3>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-red-500 font-bold text-lg mt-0.5'>&#9888;</span>
                  <p className='text-slate-700'><strong>High <Link href="/articles/radon-and-basement-waterproofing" className="text-teal-400 underline hover:text-teal-300">radon</Link> potential:</strong> Basements are prime spots — ask about prior testing.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-red-500 font-bold text-lg mt-0.5'>&#9888;</span>
                  <p className='text-slate-700'><strong>Pest evidence:</strong> Droppings or chew marks near moisture sources.</p>
                </div>
                <div className='flex items-start space-x-3'>
                  <span className='text-red-500 font-bold text-lg mt-0.5'>&#9888;</span>
                  <p className='text-slate-700'><strong>Electrical hazards:</strong> Rust on panels or outlets from dampness.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Do */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mt-0 mb-6'>What to Do If You Spot Red Flags</h2>
            <div className='space-y-4 not-prose my-8'>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                <p className='text-slate-700'>Document everything with photos and notes.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                <p className='text-slate-700'>Request seller disclosures about past water issues, repairs, or mold.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                <p className='text-slate-700'>Insist on a professional home inspection with moisture meter, thermal imaging, and possible mold sampling.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                <p className='text-slate-700'>Negotiate repairs, credits, or price reductions based on findings.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-teal-500 font-bold text-lg mt-0.5'>&#10004;</span>
                <p className='text-slate-700'>Consider a specialized basement waterproofing or foundation inspection if issues appear serious.</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-red-500 font-bold text-lg mt-0.5'>&#9888;</span>
                <p className='text-slate-700'><strong>In severe cases</strong> (extensive mold, major cracks), walk away to avoid a money pit.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Frequently Asked Questions</h2>
            <div className='space-y-8 not-prose'>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>What if the basement smells musty but looks clean?</h4>
                <p className='text-slate-600 leading-relaxed'>Hidden mold or damp insulation is likely. Demand professional air quality and moisture testing.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Is fresh paint always suspicious?</h4>
                <p className='text-slate-600 leading-relaxed'>Not necessarily, but combined with musty smells, mismatched areas, or other signs, it often hides problems.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>How much could basement issues cost to fix?</h4>
                <p className='text-slate-600 leading-relaxed'><Link href="/articles/basement-waterproofing-cost" className="text-teal-400 underline hover:text-teal-300">Waterproofing averages $5,000 to $10,000</Link>, mold remediation $2,000 to $6,000+, and <Link href="/articles/foundation-crack-repair-cost" className="text-teal-400 underline hover:text-teal-300">foundation repairs $10,000</Link> or more.</p>
              </div>
              <div className='border-b border-slate-100 pb-8'>
                <h4 className='text-xl font-bold text-slate-900 mb-3'>Should I skip the professional inspection if the basement looks fine?</h4>
                <p className='text-slate-600 leading-relaxed'>Never. Many problems hide behind walls or under floors. Always hire a qualified inspector for a full evaluation.</p>
              </div>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>Final Thoughts</h2>
            <p>
              A thorough basement inspection during home buying prevents expensive surprises. Trust your senses — especially smell — and look beyond surface appearances like fresh paint. Use this checklist to spot potential money pits early, then rely on professionals for confirmation.
            </p>
            <p>
              Protect your future home by being vigilant. A dry, sound basement <Link href="/articles/waterproofing-home-appraisal-value" className="text-teal-400 underline hover:text-teal-300">adds value</Link> — a problematic one can drain your budget.
            </p>
          </div>

                    {/* Related Guides */}
          <div className='border-t border-slate-100 pt-16 mt-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 not-prose'>
              <Link href='/articles/how-to-prevent-basement-mold' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>How to Prevent Basement Mold</h4>
                <p className='text-slate-600 text-sm'>Learn the critical steps to prevent mold growth and protect your family.</p>
              </Link>
              <Link href='/articles/types-of-foundation-cracks' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Types of Foundation Cracks</h4>
                <p className='text-slate-600 text-sm'>Identify which cracks are cosmetic and which signal serious structural issues.</p>
              </Link>
              <Link href='/articles/radon-and-basement-waterproofing' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Radon & Basement Waterproofing</h4>
                <p className='text-slate-600 text-sm'>How sealing your home reduces radon risks and prevents water damage.</p>
              </Link>
              <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Complete Basement Waterproofing Guide</h4>
                <p className='text-slate-600 text-sm'>Everything you need to know about keeping your basement dry.</p>
              </Link>
              <Link href='/articles/mold-remediation-cost' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Mold Remediation Cost Guide</h4>
                <p className='text-slate-600 text-sm'>What to expect for professional mold removal pricing in 2026.</p>
              </Link>
              <Link href='/articles/sump-pump-buying-guide' className='block bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors border border-slate-200 hover:border-teal-300'>
                <h4 className='text-lg font-bold text-slate-900 mb-2'>Sump Pump Buying Guide</h4>
                <p className='text-slate-600 text-sm'>Choose the right sump pump to protect your basement from flooding.</p>
              </Link>
            </div>
          </div>

          {/* Lead Form CTA */}
          <div className='bg-slate-900 rounded-[2rem] p-12 text-white mt-20 relative overflow-hidden shadow-2xl not-prose'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl' />
            <div className='relative z-10 text-center max-w-2xl mx-auto'>
              <h2 className='text-3xl font-black text-white mb-4'>Get a Free Basement Inspection</h2>
              <p className='text-teal-100 text-lg mb-10'>
                Connect with certified basement waterproofing professionals to inspect and protect your future home.
              </p>
              <div className='bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl'>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
