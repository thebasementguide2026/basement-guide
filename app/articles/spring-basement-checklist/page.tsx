import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spring Basement Checklist: Preparing for the Wet Season (2026)',
  description: 'Complete spring basement checklist with 13 steps to protect your basement from flooding, mold, and costly repairs. Gutters, sump pumps, cracks, dehumidifiers, and more.',
}

export default function SpringBasementChecklist() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/spring%20basement%20checklist.jpg'
          alt='Spring basement maintenance checklist preparation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>Seasonal Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Spring Basement<br />
            <span className='text-teal-400'>Checklist 2026</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Preparing for the wet season: 13 essential steps to keep your basement dry, safe, and problem-free all year.
          </p>
          <div className='flex items-center space-x-4 text-sm text-slate-400'>
            <span>The Basement Guide Staff</span>
            <span>&bull;</span>
            <span>Updated February 2026</span>
            <span>&bull;</span>
            <span>24 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* Intro */}
        <div className='prose prose-lg max-w-none'>
          <p className='text-xl leading-relaxed text-slate-700'>
            Spring is when basements get their biggest test of the year. Snowmelt, heavy rains, and thawing ground all push water toward your foundation at the same time. A focused spring basement checklist can save you from flooded floors, mold, and costly repairs later.
          </p>
          <p className='text-lg leading-relaxed text-slate-600'>
            This practical spring basement maintenance guide from The Basement Guide walks you through the exact steps that keep thousands of basements dry every year. Spend one weekend on these tasks, and you will feel a lot more confident when the next storm hits.
          </p>
        </div>

        {/* Section 1 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>1. Inspect and Clean Gutters and Downspouts</h2>
          <p className='text-lg text-slate-700 mb-4'>Clogged gutters are the number one cause of basement water problems in spring.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Remove all leaves, twigs, and winter debris.</li>
            <li>Flush each downspout with a garden hose to make sure water flows freely.</li>
            <li>Check for loose brackets, holes, or sagging sections.</li>
            <li>Add or extend downspout extensions so water lands at least 6 feet from the foundation.</li>
          </ul>
          <div className='bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-6'>
            <p className='text-teal-800 font-medium'>Pro tip: If your downspouts empty right next to the house, bury a French drain extension kit this spring. It makes a huge difference.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>2. Check and Improve Grading Around the Foundation</h2>
          <p className='text-lg text-slate-700 mb-4'>Water should always flow away from your house, never toward it.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Walk the entire perimeter after a rain or use a hose to simulate one.</li>
            <li>Look for any low spots or pooling within 10 feet of the foundation.</li>
            <li>Add soil or gravel so the ground slopes away at least 6 inches over the first 10 feet.</li>
            <li>Re-seed or mulch bare areas right away.</li>
          </ul>
          <div className='bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6'>
            <p className='text-amber-800 font-medium'>Even a small dip that collects water can send gallons into your basement over a weekend.</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>3. Test Your Sump Pump &mdash; Do This Every Spring</h2>
          <p className='text-lg text-slate-700 mb-4'>A sump pump that sat idle all winter can fail exactly when you need it most.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>Simple 5-minute test</h3>
          <ol className='list-decimal pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Locate the float switch inside the pit.</li>
            <li>Gently lift the float with a stick or gloved hand until the pump turns on.</li>
            <li>Listen for the motor and watch water shoot out the discharge line.</li>
            <li>Pour 5&ndash;10 gallons of water into the pit using a garden hose to confirm the float activates automatically.</li>
            <li>Check the battery backup system&mdash;unplug the main pump and test the backup.</li>
            <li>Clear any debris from the pit and make sure the discharge line is clear and points away from the house.</li>
          </ol>
          <div className='bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-6'>
            <p className='text-teal-800 font-medium'>Replace the battery every 3&ndash;5 years, even if it still works.</p>
          </div>
        </section>

        {/* Section 4 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>4. Inspect Foundation Walls and Floors for Cracks</h2>
          <p className='text-lg text-slate-700 mb-4'>Spring thaws and freeze cycles make small problems visible.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Use a strong flashlight and walk every wall and the floor slowly.</li>
            <li>Mark any new cracks wider than a dime or any old cracks that have grown.</li>
            <li>Look for white powdery efflorescence or damp spots that were not there in the fall.</li>
            <li>Measure and photograph cracks for your records.</li>
          </ul>
          <div className='bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6'>
            <p className='text-amber-800 font-medium'>Hairline cracks in poured concrete are often harmless, but stepped cracks in block or widening cracks in stone foundations need attention fast.</p>
          </div>
        </section>

        {/* Section 5 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>5. Clean and Protect Window Wells</h2>
          <p className='text-lg text-slate-700 mb-4'>Window wells collect leaves, snow, and debris all winter and become perfect entry points for water.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Remove all leaves, dirt, and standing water.</li>
            <li>Check that the drain at the bottom is clear&mdash;use a shop vac or hose.</li>
            <li>Make sure the plastic or metal cover is secure and angled to shed water.</li>
            <li>Add or replace gravel at the bottom if it has washed away.</li>
          </ul>
          <div className='bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6'>
            <p className='text-amber-800 font-medium'>A flooded window well can push hundreds of gallons through one small crack in a single storm.</p>
          </div>
        </section>

        {/* Section 6 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>6. Prepare Your Dehumidifier and Humidity Monitoring</h2>
          <p className='text-lg text-slate-700 mb-4'>Spring air is often damp, and a running dehumidifier keeps relative humidity below 50 percent.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Clean the coils and filter&mdash;most need a good vacuuming and wipe-down.</li>
            <li>Replace the filter if it is more than 6 months old.</li>
            <li>Test the unit and drain hose.</li>
            <li>Place or move digital hygrometers in 2&ndash;3 spots and note the readings.</li>
          </ul>
          <p className='text-slate-600'>A clean, working dehumidifier running 24/7 in April and May prevents that sticky, musty feeling and stops early mold.</p>
        </section>

        {/* Section 7 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>7. Assemble or Refresh Your Basement Emergency Kit</h2>
          <p className='text-lg text-slate-700 mb-4'>When water does enter, the first hour matters most.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>Must-have items to keep in one easy-to-grab bin</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Battery-powered shop vac or portable water pump</li>
            <li>Wet/dry towels and absorbent socks</li>
            <li>Flashlights with extra batteries</li>
            <li>Extension cords and heavy-duty extension for the sump pump</li>
            <li>Sandbags or flood barriers for doors</li>
            <li>Plastic sheeting and duct tape</li>
            <li>Gloves, masks, and basic first-aid supplies</li>
            <li>Contact list for your insurance agent and local restoration company</li>
          </ul>
          <p className='text-slate-600'>Check the kit every spring and replace any expired batteries or damaged items.</p>
        </section>

        {/* Section 8 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>8. Clean Your Dryer Vent and Exhaust Line</h2>
          <p className='text-lg text-slate-700 mb-4'>Basement dryers get heavy use all winter and lint buildup plus rising spring humidity is a dangerous combination.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Disconnect the vent hose behind the dryer and vacuum out the lint.</li>
            <li>Run a flexible vent brush through the full line to the outside wall.</li>
            <li>Check the exterior flap&mdash;make sure it opens freely and has no bird nests or debris.</li>
          </ul>
          <p className='text-slate-600'>A clean dryer vent reduces fire risk and prevents moist exhaust air from dumping back into the basement.</p>
        </section>

        {/* Section 9 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>9. Test All Smoke and Carbon Monoxide Detectors</h2>
          <p className='text-lg text-slate-700 mb-4'>These often get ignored in the basement until it is too late.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Press the test button on every unit.</li>
            <li>Replace batteries&mdash;switch to 10-year sealed lithium models if possible.</li>
            <li>Vacuum dust from the sensors.</li>
          </ul>
          <p className='text-slate-600'>Spring is also a good time to replace any units that are more than 10 years old.</p>
        </section>

        {/* Section 10 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>10. Inspect and Flush Your Water Heater</h2>
          <p className='text-lg text-slate-700 mb-4'>Most water heaters live in the basement and collect sediment over winter.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Check the base and connections for rust or leaks.</li>
            <li>Attach a garden hose to the drain valve and flush 2&ndash;3 gallons of sediment.</li>
            <li>Test the temperature and pressure relief valve.</li>
            <li>Note the age&mdash;if it is over 10 years old, start budgeting for replacement.</li>
          </ul>
        </section>

        {/* Section 11 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>11. Check Exposed Plumbing Pipes and Electrical Panels for Moisture</h2>
          <p className='text-lg text-slate-700 mb-4'>Winter condensation often shows up as rust or drips once things warm up.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Wipe down all visible pipes and look for green corrosion or wet spots.</li>
            <li>Inspect the main electrical panel for rust or water stains.</li>
            <li>Add pipe insulation on any cold pipes that sweat.</li>
          </ul>
        </section>

        {/* Section 12 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>12. Look for Signs of Pests and Seal Entry Points</h2>
          <p className='text-lg text-slate-700 mb-4'>Spring brings ants, spiders, rodents, and carpenter ants looking for moisture.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Walk walls and floors looking for droppings, chew marks, or webs.</li>
            <li>Seal gaps around pipes, wires, and vents with expanding foam and copper mesh.</li>
            <li>Place bait stations if you see activity.</li>
          </ul>
        </section>

        {/* Section 13 */}
        <section className='mt-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>13. Clean the Condensate Pump and Drain Line for Furnace/AC</h2>
          <p className='text-lg text-slate-700 mb-4'>If you have central air or a high-efficiency furnace in the basement, this line clogs easily in spring.</p>
          <h3 className='text-xl font-semibold text-slate-800 mb-3'>What to do</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-600 mb-6'>
            <li>Pour a cup of vinegar or condensate cleaner down the line.</li>
            <li>Test the pump by pouring water into the pan.</li>
            <li>Clean the float switch and filter screen.</li>
          </ul>
        </section>

        {/* Recommended Products */}
        <section className='mt-20'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Recommended Products for Your Spring Basement Checklist</h2>
          <p className='text-lg text-slate-600 mb-8'>These are the exact tools and supplies our readers buy most often when following this checklist. All are available on Amazon and make the tasks faster and safer.</p>
          <div className='grid gap-4'>
            <a href='https://amzn.to/4rHBg0f' target='_blank' rel='noopener noreferrer nofollow' className='flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl p-5 transition-all'>
              <div>
                <h3 className='font-bold text-slate-900'>Flexible Dryer Vent Cleaning Kit</h3>
                <p className='text-sm text-slate-500 mt-1'>Long flexible brush with vacuum attachments&mdash;perfect for reaching the full vent run from the basement dryer.</p>
              </div>
              <span className='bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap ml-4'>View on Amazon</span>
            </a>
            <a href='https://amzn.to/4cOMzPm' target='_blank' rel='noopener noreferrer nofollow' className='flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl p-5 transition-all'>
              <div>
                <h3 className='font-bold text-slate-900'>10-Year Sealed Lithium Smoke &amp; CO Detectors</h3>
                <p className='text-sm text-slate-500 mt-1'>No battery changes for a decade&mdash;ideal for hard-to-reach basement locations.</p>
              </div>
              <span className='bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap ml-4'>View on Amazon</span>
            </a>
            <a href='https://amzn.to/4aXAxAN' target='_blank' rel='noopener noreferrer nofollow' className='flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl p-5 transition-all'>
              <div>
                <h3 className='font-bold text-slate-900'>Water Heater Flush Kit with Valve</h3>
                <p className='text-sm text-slate-500 mt-1'>Includes everything you need to flush sediment safely and quickly.</p>
              </div>
              <span className='bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap ml-4'>View on Amazon</span>
            </a>
            <a href='https://amzn.to/3ZYF8O4' target='_blank' rel='noopener noreferrer nofollow' className='flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl p-5 transition-all'>
              <div>
                <h3 className='font-bold text-slate-900'>Foam Pipe Insulation Tubes + Tape</h3>
                <p className='text-sm text-slate-500 mt-1'>Pre-slit tubes that snap onto cold water pipes to stop sweating and corrosion.</p>
              </div>
              <span className='bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap ml-4'>View on Amazon</span>
            </a>
            <a href='https://amzn.to/4tXGNBa' target='_blank' rel='noopener noreferrer nofollow' className='flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl p-5 transition-all'>
              <div>
                <h3 className='font-bold text-slate-900'>Expanding Foam Sealant + Copper Mesh Pest Kit</h3>
                <p className='text-sm text-slate-500 mt-1'>Great Stuff foam plus copper mesh&mdash;the gold-standard combo for sealing basement penetrations.</p>
              </div>
              <span className='bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap ml-4'>View on Amazon</span>
            </a>
            <a href='https://amzn.to/4tUIgrU' target='_blank' rel='noopener noreferrer nofollow' className='flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl p-5 transition-all'>
              <div>
                <h3 className='font-bold text-slate-900'>Condensate Drain Cleaner Tablets</h3>
                <p className='text-sm text-slate-500 mt-1'>Drop-in tablets that prevent clogs in furnace and AC condensate lines all season long.</p>
              </div>
              <span className='bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap ml-4'>View on Amazon</span>
            </a>
          </div>
        </section>

        {/* Conclusion */}
        <section className='mt-20'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Spring Basement Maintenance Saves Money</h2>
          <p className='text-lg text-slate-700 mb-4'>Most basement flooding happens between April and June. One focused weekend on this checklist can easily save you thousands of dollars and weeks of headaches.</p>
          <p className='text-lg text-slate-700 mb-4'>If you spot anything concerning during your spring basement checklist&mdash;new cracks, poor grading, a weak sump pump, or pest activity&mdash;many readers at The Basement Guide find it helpful to share a few quick details about their home. Our team can send a short customized checklist and connect you with local pros who handle these exact spring issues. No pressure, just practical next steps.</p>
        </section>

        {/* FAQ */}
        <section className='mt-20'>
          <h2 className='text-3xl font-bold text-slate-900 mb-8'>FAQ: Spring Basement Maintenance</h2>
          <div className='space-y-6'>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h3 className='font-bold text-slate-900 mb-2'>How often should I do the full checklist?</h3>
              <p className='text-slate-600'>Once a year is enough for most homes. Add a quick visual walk-through after every heavy rain.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h3 className='font-bold text-slate-900 mb-2'>What is the single most important item?</h3>
              <p className='text-slate-600'>Gutters and grading&mdash;they keep 90 percent of water away from your foundation before it ever reaches the basement.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h3 className='font-bold text-slate-900 mb-2'>Do I need a professional for any of these?</h3>
              <p className='text-slate-600'>You can handle almost everything yourself. Call a pro for crack evaluation, sump pump replacement, or major grading work.</p>
            </div>
            <div className='bg-slate-50 rounded-xl p-6'>
              <h3 className='font-bold text-slate-900 mb-2'>When should I start?</h3>
              <p className='text-slate-600'>As soon as the snow is gone and the ground has thawed&mdash;usually mid-March to early April depending on your location.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='mt-20 bg-brand-navy rounded-2xl p-10 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Ready to Get Started?</h2>
          <p className='text-slate-300 text-lg mb-6'>Grab a notepad, put on some old clothes, and knock out the list this weekend. Your future self will thank you.</p>
          <LeadForm />
        </section>

      </article>
    </div>
  )
}
