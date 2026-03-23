import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Basement Floods Even With a Sump Pump (And How to Fix It)',
  description: 'The 10 most common reasons basements flood despite having a sump pump, how to diagnose each one, and what to do about it. Organized from easy DIY checks to pro-level fixes.',
};

export default function WhyBasementFloods() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/sump-pump-installation.jpg.png'
          alt='Flooded basement with sump pump'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='h-px w-12 bg-red-500'></div>
            <span className='text-red-400 font-bold tracking-[0.3em] text-sm uppercase'>Troubleshooting Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Why Your Basement Floods <br />
            <span className='text-red-500'>With a Sump Pump</span> <br />
            <span className='text-slate-300 text-3xl md:text-5xl'>(And How to Fix It)</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl font-light leading-relaxed'>
            A sump pump doesn&rsquo;t guarantee a dry basement. Here are the 10 most common reasons it still floods&mdash;and how to fix each one.
          </p>
          <div className='flex items-center mt-8 space-x-4'>
            <div className='w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-medium'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated March 2026 &middot; 18 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-4xl mx-auto px-6 py-16'>

        {/* Back to Guides */}
        <div className='mb-12'>
          <Link href='/guides#sump-pumps' className='text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2'>
            &larr; Back to Guides
          </Link>
        </div>

        {/* Introduction */}
        <div className='prose prose-lg max-w-none mb-16'>
          <p className='text-xl text-slate-700 leading-relaxed'>
            Your sump pump is most likely to fail at the exact moment you need it most&mdash;during a heavy storm. A sump pump is one part of a water management system, and if any other part fails, or if the pump itself has a problem you don&rsquo;t know about, you can still wake up to standing water.
          </p>
          <p className='text-lg text-slate-600 leading-relaxed'>
            This guide covers the 10 most common reasons basements flood despite having a sump pump, how to diagnose each one, and what to do about it. We&rsquo;ve organized them from &ldquo;check this first&rdquo; (free, takes 5 minutes) to &ldquo;call a pro&rdquo; (requires professional diagnosis).
          </p>
        </div>

        {/* Why Is My Basement Flooding Section */}
        <div className='bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-6'>Why Is My Basement Flooding Even Though the Sump Pump Is Running?</h2>
          <p className='text-lg text-slate-700 mb-6'>If you can hear the pump running but water is still rising, the pump isn&rsquo;t the whole problem. There are two possible scenarios, and the fix for each is completely different.</p>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-xl p-6 border border-slate-200'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Scenario 1: The pump can&rsquo;t keep up</h3>
              <p className='text-slate-600'>Water is entering faster than the pump can evacuate it. This usually happens during extreme rain or rapid snowmelt. The pump may be undersized, the discharge line may be partially obstructed, or the volume of water is simply more than any single pump can handle.</p>
            </div>
            <div className='bg-white rounded-xl p-6 border border-slate-200'>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Scenario 2: Water bypasses the pump</h3>
              <p className='text-slate-600'>A sump pump only removes water that reaches the pit. If water is seeping through wall cracks, coming up through floor joints, or entering from the opposite side of the basement, the pump may be working perfectly&mdash;the water just never reaches it. This is a waterproofing problem, not a pump problem.</p>
            </div>
          </div>
        </div>

        {/* The 10 Most Common Causes */}
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tight'>The 10 Most Common Causes <span className='text-red-500'>&amp; What to Do</span></h2>

        {/* Cause 1 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>1</span>
            <h3 className='text-2xl font-bold text-slate-900'>Power Outage Killed the Pump</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>This is the number one reason basements flood with a sump pump installed. The heavy storm that sends water toward your foundation is the same storm that knocks out power. Your pump sits idle at the exact moment it&rsquo;s needed most.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>Look at your circuit breaker. Is the pump plugged in? Is the GFCI outlet tripped? After the storm, test by pouring water into the pit.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>Install a <Link href='/articles/backup-power-sump-pumps' className='text-teal-700 underline font-medium'>battery backup sump pump or a backup generator/power station</Link>. This is non-negotiable if you live anywhere that loses power during storms. A battery backup costs $600&ndash;$2,000 installed and activates automatically. According to <a href='https://www.fema.gov/sites/default/files/documents/fema_flood-protect-brochure_2023.pdf' target='_blank' rel='noopener noreferrer' className='text-teal-700 underline font-medium'>FEMA</a>, even one inch of flood water can cause $25,000 in damage.</p>
          </div>
        </div>

        {/* Cause 2 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>2</span>
            <h3 className='text-2xl font-bold text-slate-900'>The Pump Is Undersized for Your Water Table</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>A standard 1/3 HP pump handles moderate water intrusion just fine. But if your home sits on a high water table, or if your area gets heavy seasonal rain or rapid spring snowmelt, that pump may not have the gallons-per-hour capacity to keep up.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>During heavy rain, watch the pit. If the pump runs continuously without ever cycling off, and the water level stays high or keeps rising, the pump is overwhelmed.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>Upgrade to a 1/2 HP or 3/4 HP submersible pump. In severe cases, install a secondary pump in the same pit&mdash;one handles normal loads, the second kicks in for heavy events. Our <Link href='/articles/best-sump-pumps-2026' className='text-teal-700 underline font-medium'>sump pump buying guide</Link> covers sizing in detail.</p>
          </div>
        </div>

        {/* Cause 3 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>3</span>
            <h3 className='text-2xl font-bold text-slate-900'>Clogged or Frozen Discharge Line</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>The pump pulls water out of the pit and pushes it through a discharge pipe that exits the house. If that pipe is clogged with debris, frozen in winter, or has collapsed underground, water has nowhere to go. The pump runs, the pipe backs up, and water overflows the pit.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>Go outside and look at the discharge point. Is water actually coming out when the pump runs? In winter, check for ice buildup around the exit point. Listen for the pump cycling on and off rapidly (short-cycling), which often indicates a backed-up discharge.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>Clear the clog&mdash;a plumber&rsquo;s snake works for debris. For freezing, insulate the discharge line and make sure it slopes downward with no low spots where water can pool and freeze. Some homeowners install a freeze guard (a grated relief fitting near the foundation) that gives water an alternate exit if the main line freezes.</p>
          </div>
        </div>

        {/* Cause 4 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>4</span>
            <h3 className='text-2xl font-bold text-slate-900'>Stuck or Misadjusted Float Switch</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>The float switch tells the pump when to turn on. If the float is stuck against the side of the pit, tangled on the power cord, or set too high, the pump won&rsquo;t activate until water is already overflowing onto your floor.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>Open the pit cover and manually lift the float. The pump should turn on immediately. If it doesn&rsquo;t, the switch may be stuck or broken. Also check that the power cord isn&rsquo;t interfering with the float&rsquo;s range of motion&mdash;this is one of the most common installation mistakes.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>Reposition the float so it activates before water reaches floor level. If the switch is broken, replacing it costs $35&ndash;$70 in parts. If you have a tethered float switch (the kind that hangs on a cord), consider upgrading to a vertical float or electronic switch that&rsquo;s less prone to getting tangled.</p>
          </div>
        </div>

        {/* Cause 5 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>5</span>
            <h3 className='text-2xl font-bold text-slate-900'>Water Entering Through Foundation Wall Cracks</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>Here&rsquo;s the important thing most people miss: a sump pump only handles water that reaches the pit through the drainage system under your floor. If water is pushing through cracks in your foundation walls, the cove joint where the wall meets the floor, or through porous block walls, it enters the basement above the drainage system, and the pump never sees it.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>Look at where the water is entering. If it&rsquo;s coming through visible wall cracks, seeping at the wall-floor joint, or entering from areas far from the pit, the pump isn&rsquo;t the issue.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>This requires <Link href='/articles/complete-basement-waterproofing-guide' className='text-teal-700 underline font-medium'>waterproofing&mdash;either interior or exterior</Link>. Small cracks can be injected with epoxy or polyurethane ($300&ndash;$800 per crack). Seepage along the wall-floor joint usually requires an interior <Link href='/articles/french-drain-cost' className='text-teal-700 underline font-medium'>French drain system</Link> that intercepts the water and channels it to the sump pit. Significant wall cracks or bowing may indicate a structural issue that needs professional evaluation.</p>
          </div>
        </div>

        {/* Cause 6 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>6</span>
            <h3 className='text-2xl font-bold text-slate-900'>No French Drain or Inadequate Drainage System</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>A sump pump without a drainage system is like a bucket without a funnel. The pit only collects water that happens to flow to it naturally. In many basements&mdash;especially older homes&mdash;there&rsquo;s no perimeter drain tile directing groundwater to the pit.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>If your home was built before the 1970s, there may be no sub-floor drainage system at all. Even in newer homes, the original drain tile may be crushed, disconnected, or clogged with sediment and iron ochre after decades of use.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>Install an <Link href='/articles/french-drain-cost' className='text-teal-700 underline font-medium'>interior French drain system</Link> around the perimeter of your basement that channels water to the sump pit. This is the most common professional waterproofing solution, running $4,000&ndash;$12,000 depending on basement size. It&rsquo;s a significant investment, but it&rsquo;s often the actual fix when people blame the pump for a drainage problem.</p>
          </div>
        </div>

        {/* Cause 7 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>7</span>
            <h3 className='text-2xl font-bold text-slate-900'>The Pump Is Old and Losing Capacity</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>Sump pumps don&rsquo;t fail gracefully. They gradually lose pumping capacity as the impeller wears, the motor weakens, and seals degrade. A 9-year-old pump might still turn on and sound normal but only move half the water it did when new.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>Pour 5 gallons of water into the pit. A healthy pump should evacuate it in seconds and shut off. If it takes a long time, struggles, or makes grinding/rattling noises, it&rsquo;s losing capacity. Average lifespan is 7&ndash;10 years for a submersible, up to 25 years for a pedestal.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>Replace it. A <Link href='/articles/sump-pump-cost' className='text-teal-700 underline font-medium'>sump pump replacement</Link> runs $400&ndash;$700 with labor. Don&rsquo;t wait for a complete failure during a storm&mdash;if your pump is past 7 years, proactively replacing it is one of the cheapest insurance policies for your basement.</p>
          </div>
        </div>

        {/* Cause 8 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>8</span>
            <h3 className='text-2xl font-bold text-slate-900'>Discharge Line Dumps Water Too Close to the Foundation</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>This one is surprisingly common and easy to miss. The pump works, the water exits the house&hellip; and then flows right back toward the foundation. If the discharge line terminates too close to the house, or if the yard slopes back toward the foundation, you&rsquo;ve created a loop where the pump fights the same water over and over.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>Go outside while the pump is running. Where does the water exit? It should discharge at least 10 feet from the foundation, ideally into a downhill area, storm drain, or dry well. If it&rsquo;s dumping 3 feet from the house into flat or inward-sloping ground, that&rsquo;s your problem.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>Extend the discharge line with buried PVC or a flexible hose extension. Make sure the exit point is downhill from the house or connects to a proper drainage system. Also check that your gutters and downspouts aren&rsquo;t contributing to the same issue&mdash;improper grading and <a href='https://www.epa.gov/watersense/landscaping-tips' target='_blank' rel='noopener noreferrer' className='text-teal-700 underline font-medium'>gutter management</a> cause more basement water problems than most people realize.</p>
          </div>
        </div>

        {/* Cause 9 */}
        <div className='mb-12 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>9</span>
            <h3 className='text-2xl font-bold text-slate-900'>Sewer Backup Is Overwhelming the System</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>In some homes, the sump pump is connected to or near the sanitary sewer line. During heavy rain, municipal sewer systems can back up, sending sewage and stormwater back through the connection and into your basement. This isn&rsquo;t a pump failure&mdash;it&rsquo;s a completely different water source.</p>
          <div className='bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-amber-900 mb-1'>How to check:</p>
            <p className='text-amber-800'>If the water smells bad, is discolored, or comes up through floor drains or toilets rather than through the sump pit, you&rsquo;re dealing with sewer backup.</p>
          </div>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>Install a backwater valve on your sewer line ($200&ndash;$600 professionally installed). This prevents sewage from flowing back into your home. Also make sure your sump pump&rsquo;s discharge is not tied into the sanitary sewer&mdash;in many municipalities, this is actually illegal because it overwhelms the treatment system during storms.</p>
          </div>
        </div>

        {/* Cause 10 */}
        <div className='mb-16 pb-12 border-b border-slate-200'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='text-4xl font-black text-red-500'>10</span>
            <h3 className='text-2xl font-bold text-slate-900'>Multiple Small Problems Compounding</h3>
          </div>
          <p className='text-lg text-slate-700 mb-4'>Here&rsquo;s what actually happens in most real-world basement floods: it&rsquo;s not one catastrophic failure. It&rsquo;s three minor issues that individually would be fine but together overwhelm the system. The pump is 8 years old running at 70% capacity, the discharge line has a partial blockage, and the gutters are dumping water right at the foundation.</p>
          <div className='bg-teal-50 border border-teal-200 rounded-xl p-5'>
            <p className='font-semibold text-teal-900 mb-1'>The fix:</p>
            <p className='text-teal-800'>This is why annual maintenance matters. Fifteen minutes of seasonal maintenance prevents most floods: pump testing, discharge line inspection, gutter cleaning, grading check, and backup system verification.</p>
          </div>
        </div>

        {/* Emergency Section */}
        <div className='bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold text-red-900 mb-6'>What to Do Right Now if Your Basement Is Flooding</h2>
          <div className='space-y-4 text-red-800'>
            <div className='flex gap-3'>
              <span className='font-bold text-red-600 text-lg'>1.</span>
              <p><strong>Stay safe.</strong> If there&rsquo;s standing water and any possibility of electrical contact&mdash;submerged outlets, appliances in the water&mdash;do not enter the water. Shut off the breaker for the basement from your panel upstairs.</p>
            </div>
            <div className='flex gap-3'>
              <span className='font-bold text-red-600 text-lg'>2.</span>
              <p><strong>Check the obvious.</strong> Is the pump plugged in? Is the GFCI outlet tripped (push the reset button)? Is the circuit breaker flipped? A surprising number of basement floods are caused by something bumping the plug loose or a tripped outlet.</p>
            </div>
            <div className='flex gap-3'>
              <span className='font-bold text-red-600 text-lg'>3.</span>
              <p><strong>If the pump runs but can&rsquo;t keep up:</strong> A submersible utility pump (available at any hardware store) can help evacuate water while you figure out the root cause. A wet/dry shop vacuum handles smaller amounts.</p>
            </div>
            <div className='flex gap-3'>
              <span className='font-bold text-red-600 text-lg'>4.</span>
              <p><strong>Get water out fast.</strong> The longer water sits, the worse the damage. Every hour of standing water increases mold remediation costs and structural risk. Run fans and dehumidifiers continuously once water is removed.</p>
            </div>
            <div className='flex gap-3'>
              <span className='font-bold text-red-600 text-lg'>5.</span>
              <p><strong>Document everything</strong> before you clean up. Photograph the water level, the pump, the discharge point, and any damage. Note: standard homeowners insurance typically does not cover sump pump failure or groundwater flooding&mdash;you usually need a specific water backup endorsement.</p>
            </div>
          </div>
        </div>

        {/* Prevention Section */}
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight'>How to Prevent <span className='text-teal-600'>Future Flooding</span></h2>
        <div className='space-y-6 mb-16'>
          <div className='bg-white border border-slate-200 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Install a battery backup</h3>
            <p className='text-slate-600'>This is the single most impactful upgrade. A backup pump kicks in automatically during power outages or if the primary pump fails. $600&ndash;$2,000 installed. See our <Link href='/articles/backup-power-sump-pumps' className='text-teal-600 underline font-medium'>backup power guide</Link>.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Add a water alarm</h3>
            <p className='text-slate-600'>A simple leak detector placed near the pit sends an alert to your phone if water rises above normal levels. The <a href='https://amzn.to/4tZpI9Z' target='_blank' rel='noopener noreferrer nofollow' className='text-teal-600 underline font-medium'>YoLink Water Leak Sensor 4</a> is a solid pick&mdash;it works over LoRa (not just Wi-Fi), so it still sends alerts even if your router goes down during a storm. Costs around $20 and gives you advance warning before a minor issue becomes a flood.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Test your pump seasonally</h3>
            <p className='text-slate-600'>Pour a bucket of water into the pit and confirm the pump activates and the discharge flows freely. Check the backup battery charge level. Inspect the discharge exit point outside. This takes 10 minutes and should happen at minimum every spring and fall.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Maintain your gutters and grading</h3>
            <p className='text-slate-600'>More basement water comes from the surface than from the water table. Clean gutters, extended downspouts (10+ feet from the foundation), and proper yard grading that slopes away from the house prevent water from reaching the foundation in the first place.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Replace the pump proactively</h3>
            <p className='text-slate-600'>If your pump is past 7 years, don&rsquo;t wait for it to fail during the worst possible storm. A <Link href='/articles/sump-pump-cost' className='text-teal-600 underline font-medium'>planned replacement</Link> during dry weather costs $400&ndash;$700. An emergency replacement during a flood costs more&mdash;and the water damage costs much more than that.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight'>Frequently Asked Questions</h2>
        <div className='space-y-6 mb-16'>
          <div className='bg-slate-50 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Can a sump pump handle heavy rain?</h3>
            <p className='text-slate-600'>A properly sized pump with adequate drainage can handle most rain events. The problem occurs during extreme events (multiple inches per hour) or when drainage is inadequate. If your pump handles normal rain but floods during heavy storms, you likely need a larger pump, a secondary pump, or a better drainage system feeding the pit.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I know if my sump pump is working?</h3>
            <p className='text-slate-600'>Pour a bucket of water into the pit. The float should rise and the pump should activate within a few seconds, evacuating the water quickly. If it doesn&rsquo;t turn on, turns on but doesn&rsquo;t pump, or makes unusual noises, it needs attention. Make this test part of your seasonal routine.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I have two sump pumps?</h3>
            <p className='text-slate-600'>If you have a high water table, a large basement, or frequent heavy rain, a dual-pump system provides critical redundancy. The secondary pump can share the pit with the primary and activates if the first pump fails or can&rsquo;t keep up. Many waterproofing contractors recommend this as standard practice for high-risk homes.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Why does my sump pump run constantly?</h3>
            <p className='text-slate-600'>A pump that never shuts off usually indicates a high water table, an undersized pump, a stuck float switch, or a discharge line that&rsquo;s recycling water back toward the foundation. Constant running burns out the motor much faster. Diagnose the root cause rather than just replacing the pump, or the new one will burn out too.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Does homeowners insurance cover sump pump flooding?</h3>
            <p className='text-slate-600'>Standard policies usually do not cover flooding caused by sump pump failure or groundwater intrusion. Most insurers offer a water backup and sump pump overflow rider for $40&ndash;$100/year. If you have a sump pump, this endorsement is worth adding. Check your policy or ask your agent.</p>
          </div>
          <div className='bg-slate-50 rounded-xl p-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>My basement only floods in one specific area far from the sump pump. Why?</h3>
            <p className='text-slate-600'>This means water is entering through a localized source&mdash;a wall crack, a floor-wall joint, a window well, or poor drainage on that side of the house&mdash;that isn&rsquo;t connected to the drainage system feeding the pit. You likely need either targeted waterproofing (crack injection, window well drain) or an extension of the interior French drain to that area.</p>
          </div>
        </div>

        {/* Related Guides */}
        <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
        <div className='grid md:grid-cols-2 gap-4 mb-16'>
          <Link href='/articles/backup-power-sump-pumps' className='block bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-colors border border-slate-200'>
            <h3 className='font-bold text-slate-900 mb-1'>Best Backup Power for Sump Pumps</h3>
            <p className='text-sm text-slate-500'>Generators, power stations, and battery backups compared.</p>
          </Link>
          <Link href='/articles/french-drain-cost' className='block bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-colors border border-slate-200'>
            <h3 className='font-bold text-slate-900 mb-1'>French Drain Cost Guide</h3>
            <p className='text-sm text-slate-500'>Complete pricing for interior and exterior French drain installations.</p>
          </Link>
          <Link href='/articles/sump-pump-cost' className='block bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-colors border border-slate-200'>
            <h3 className='font-bold text-slate-900 mb-1'>Sump Pump Installation Cost</h3>
            <p className='text-sm text-slate-500'>Full cost breakdown for sump pump installation in 2026.</p>
          </Link>
          <Link href='/articles/complete-basement-waterproofing-guide' className='block bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-colors border border-slate-200'>
            <h3 className='font-bold text-slate-900 mb-1'>Complete Waterproofing Guide</h3>
            <p className='text-sm text-slate-500'>The full playbook for keeping your basement dry.</p>
          </Link>
          <Link href='/articles/best-sump-pumps-2026' className='block bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-colors border border-slate-200'>
            <h3 className='font-bold text-slate-900 mb-1'>Best Sump Pumps 2026</h3>
            <p className='text-sm text-slate-500'>Top-rated submersible and pedestal sump pumps reviewed.</p>
          </Link>
          <Link href='/articles/best-water-leak-detectors' className='block bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-colors border border-slate-200'>
            <h3 className='font-bold text-slate-900 mb-1'>Best Water Leak Detectors</h3>
            <p className='text-sm text-slate-500'>Smart leak sensors that alert you before disaster strikes.</p>
          </Link>
        </div>

        {/* Lead Form CTA */}
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>Get a Free Waterproofing Assessment</h2>
          <p className='text-slate-300 mb-8 text-lg'>Not sure what&rsquo;s causing your flooding? Connect with a vetted local waterproofing expert for a free diagnosis and quote.</p>
          <LeadForm />
        </div>

      </div>
    </div>
  );
}
