import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sump Pump Buying Guide: How to Choose the Right Sump Pump for Your Basement (2026)',
  description: 'Complete 2026 sump pump buying guide. Submersible vs pedestal, sizing by HP and flow rate, critical features, backup systems, pricing, installation, and maintenance.'
}

export default function SumpPumpBuyingGuide() {
  return (
    <div className='bg-white min-h-screen'>

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/sump-pump-installation.jpg.png'
          alt='Sump pump installation and selection'
          fill
          className='object-cover opacity-50 scale-105 transition-transform duration-700'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-indigo-500' />
            <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Buyer&apos;s Guide</span>
          </div>
          <h1 className='text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter max-w-4xl mb-8'>
            Choose the <span className='text-indigo-500'>Right</span><br />Sump Pump
          </h1>
          <p className='text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed'>
            From horsepower to pump types, everything you need to know to protect your basement.
          </p>
        </div>
      </section>

      {/* Author & Intro */}
      <section className='max-w-4xl mx-auto px-6 pt-16 pb-8'>
        <div className='flex items-center gap-4 mb-12'>
          <div className='w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg'>BG</div>
          <div>
            <p className='font-semibold text-slate-900'>The Basement Guide Staff</p>
            <p className='text-slate-500 text-sm'>Updated March 2026 · 28 min read</p>
          </div>
        </div>

        <div className='prose prose-lg max-w-none'>
          <p>A sump pump is the last line of defense between your basement and water damage. It sits in a pit at the lowest point of your basement floor, automatically activates when water rises to a certain level, and ejects the water outside before it can flood your living space. Every basement with a history of water intrusion, an interior drainage system, or a high water table needs a sump pump. Most basements benefit from one even without a history of flooding because conditions change over time.</p>
          <p className='mt-6'>Choosing the wrong sump pump means either a pump that cannot keep up with water volume during a heavy storm resulting in flooding or an oversized pump that short-cycles, burns out prematurely, and wastes money. This guide covers every factor that matters including pump types, sizing by horsepower and flow rate, critical features, backup systems, pricing, installation, and maintenance. By the end, you will know exactly what to buy and why.</p>
          <p className='mt-6'>For specific product recommendations with pricing and reviews, see our <Link href='/articles/best-sump-pumps' className='text-indigo-600 hover:text-indigo-700 underline'>best sump pumps 2026 roundup</Link>. For installation and replacement pricing, see our <Link href='/articles/sump-pump-cost' className='text-indigo-600 hover:text-indigo-700 underline'>sump pump cost guide</Link>. For backup power options, see our <Link href='/articles/backup-power-sump-pumps' className='text-indigo-600 hover:text-indigo-700 underline'>backup power for sump pumps guide</Link>.</p>
        </div>
      </section>

      {/* Section 1 - Why Your Basement Needs a Sump Pump */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Basics</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Why It Matters</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Why Your Basement Needs a Sump Pump</h2>
        <div className='prose prose-lg max-w-none'>
          <p>Basements sit below ground level, which means they are surrounded by soil that holds water. When it rains, when snow melts, or when the water table rises seasonally, that water exerts hydrostatic pressure against your foundation walls and floor, pushing moisture through every crack, joint, and pore in the concrete.</p>
          <p className='mt-6'>A sump pump works with your interior drainage system (French drain or perimeter drain) to manage this water. The drainage system collects water at the perimeter of the basement and channels it to the sump pit. The pump then ejects the water outside through a discharge pipe that routes it away from the foundation. Without a working sump pump, water collected by the drainage system has nowhere to go and will back up onto the basement floor.</p>
          <p className='mt-6'>Even basements without drainage systems benefit from a sump pump because the pit acts as the lowest point where groundwater naturally collects before it spreads across the floor.</p>
          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Signs Your Basement Needs a Sump Pump (or a Better One)</h3>
          <ul className='space-y-2 list-disc pl-5'>
            <li>You see water on the floor after rain</li>
            <li>Your current pump runs constantly during storms</li>
            <li>Your pump makes grinding or rattling noises</li>
            <li>The pump is more than 10 years old</li>
            <li>You have visible <Link href='/articles/basement-efflorescence' className='text-indigo-600 hover:text-indigo-700 underline'>efflorescence</Link> or <Link href='/articles/wet-basement-walls' className='text-indigo-600 hover:text-indigo-700 underline'>wet walls</Link></li>
            <li>You smell musty odors that indicate moisture</li>
            <li><Link href='/articles/water-coming-up-through-basement-floor' className='text-indigo-600 hover:text-indigo-700 underline'>Water is coming up through the floor</Link></li>
          </ul>
        </div>
      </section>

      {/* Section 2 - Submersible vs Pedestal */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Types</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Comparison</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Submersible vs Pedestal Sump Pumps: Which Type Is Best?</h2>
        <div className='prose prose-lg max-w-none'>
          <p>There are two main types of sump pumps. The type you choose affects noise, lifespan, power, and cost.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Submersible Sump Pumps</h3>
          <p>A submersible sump pump sits entirely inside the sump pit, submerged in water during operation. The motor is sealed in a waterproof housing. This is the most popular type for residential basements.</p>
          <p className='mt-4'><strong>How it works:</strong> The entire unit (motor and impeller) sits at the bottom of the sump pit. When water rises to the activation level, the float switch triggers the motor, which spins the impeller and pushes water up through the discharge pipe and out of the basement.</p>
          <p className='mt-4'><strong>Advantages:</strong> Significantly quieter than pedestal pumps because the motor is underwater and the pit lid muffles sound. More powerful, handling higher water volumes. Longer lifespan of 10 to 15 years with proper maintenance. The sealed pit lid keeps debris, odors, and humidity from escaping the pit. Better for finished basements where noise and appearance matter.</p>
          <p className='mt-4'><strong>Disadvantages:</strong> More expensive upfront ($150 to $500 for the pump alone). Harder to access for service because the pump must be pulled from the pit. The motor runs hotter because it is enclosed, though water cooling offsets this.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Pedestal Sump Pumps</h3>
          <p>A pedestal sump pump has the motor mounted on a shaft above the sump pit, with only the impeller and intake at the bottom of the pit submerged in water.</p>
          <p className='mt-4'><strong>How it works:</strong> The motor sits above the water line on a pedestal. A long shaft connects the motor to an impeller at the base of the pit. When the float switch activates, the motor spins the impeller via the shaft.</p>
          <p className='mt-4'><strong>Advantages:</strong> Less expensive upfront ($60 to $200 for the pump). Easier to access for service and repair because the motor is above the pit. Works in shallow pits where a submersible pump would not fit (pits less than 12 inches deep).</p>
          <p className='mt-4'><strong>Disadvantages:</strong> Significantly louder because the motor is in the open air. Shorter lifespan of 5 to 10 years. Less powerful than submersible models. The open pit allows odors and humidity to escape into the basement. Not ideal for finished basements.</p>
        </div>

        {/* Comparison Table */}
        <div className='mt-10 overflow-x-auto'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-indigo-50'>
                <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-900'>Feature</th>
                <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-900'>Submersible</th>
                <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-900'>Pedestal</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className='border border-slate-300 px-4 py-2'>Motor location</td><td className='border border-slate-300 px-4 py-2'>Inside the pit, underwater</td><td className='border border-slate-300 px-4 py-2'>Above the pit, in the open</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Noise level</td><td className='border border-slate-300 px-4 py-2'>Low (motor submerged and pit sealed)</td><td className='border border-slate-300 px-4 py-2'>High (motor exposed)</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2'>Typical lifespan</td><td className='border border-slate-300 px-4 py-2'>10 to 15 years</td><td className='border border-slate-300 px-4 py-2'>5 to 10 years</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Pump cost</td><td className='border border-slate-300 px-4 py-2'>$150 to $500</td><td className='border border-slate-300 px-4 py-2'>$60 to $200</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2'>Power range</td><td className='border border-slate-300 px-4 py-2'>1/3 HP to 1 HP</td><td className='border border-slate-300 px-4 py-2'>1/3 HP to 1/2 HP</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Best for</td><td className='border border-slate-300 px-4 py-2'>Most basements, especially finished spaces</td><td className='border border-slate-300 px-4 py-2'>Shallow pits, budget situations, crawl spaces</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2'>Pit depth required</td><td className='border border-slate-300 px-4 py-2'>12 inches minimum (18 to 24 inches ideal)</td><td className='border border-slate-300 px-4 py-2'>Can work in pits as shallow as 8 to 10 inches</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Maintenance access</td><td className='border border-slate-300 px-4 py-2'>Must pull pump from pit</td><td className='border border-slate-300 px-4 py-2'>Easy access above pit</td></tr>
            </tbody>
          </table>
        </div>

        <div className='bg-indigo-50 border-l-4 border-indigo-500 p-6 mt-8 rounded-r-lg'>
          <p className='font-semibold text-indigo-900'>Our Recommendation</p>
          <p className='text-indigo-800 mt-2'>Choose a <strong>submersible pump</strong> for most basements. The quieter operation, longer lifespan, and sealed pit design make it the better investment. Choose a pedestal only if your pit is too shallow for a submersible or if you are on a very tight budget. For a deeper comparison, see our <Link href='/articles/submersible-vs-pedestal-sump-pump' className='text-indigo-700 underline'>submersible vs pedestal sump pump guide</Link>.</p>
        </div>
      </section>

      {/* Section 3 - Sizing */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Sizing</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Get It Right</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>How to Size a Sump Pump: Horsepower and Flow Rate</h2>
        <div className='prose prose-lg max-w-none'>
          <p>Buying the right size pump is critical. Too small and it cannot keep up during heavy rain. Too large and it short-cycles (turns on and off rapidly), which burns out the motor prematurely and wastes electricity.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Horsepower (HP) Selection Guide</h3>
        </div>

        <div className='mt-4 overflow-x-auto'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-indigo-50'>
                <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-900'>Horsepower</th>
                <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-900'>Flow Rate (GPH at 10 ft head)</th>
                <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-900'>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className='border border-slate-300 px-4 py-2'>1/4 HP</td><td className='border border-slate-300 px-4 py-2'>1,500 to 2,500 GPH</td><td className='border border-slate-300 px-4 py-2'>Light water, very small basements, laundry or utility pits</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>1/3 HP</td><td className='border border-slate-300 px-4 py-2'>2,500 to 3,500 GPH</td><td className='border border-slate-300 px-4 py-2'>Average rainfall areas with normal water tables. Good for most standard basements.</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2 font-bold'>1/2 HP</td><td className='border border-slate-300 px-4 py-2 font-bold'>3,500 to 5,000 GPH</td><td className='border border-slate-300 px-4 py-2 font-bold'>The best choice for most homes. Handles moderate to heavy water with a comfortable margin of safety.</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>3/4 HP</td><td className='border border-slate-300 px-4 py-2'>5,000 to 6,500 GPH</td><td className='border border-slate-300 px-4 py-2'>Wet basements, high water tables, large homes, or long discharge runs</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2'>1 HP</td><td className='border border-slate-300 px-4 py-2'>6,500+ GPH</td><td className='border border-slate-300 px-4 py-2'>Very wet basements, commercial applications, or homes with extremely high water volume</td></tr>
            </tbody>
          </table>
        </div>

        <div className='bg-indigo-50 border-l-4 border-indigo-500 p-6 mt-8 rounded-r-lg'>
          <p className='font-semibold text-indigo-900'>Our Recommendation for Most Homeowners: 1/2 HP</p>
          <p className='text-indigo-800 mt-2'>A 1/2 HP submersible pump provides enough power for moderate to heavy water situations while leaving a safety margin for unusually heavy storms. It costs only $50 to $100 more than a 1/3 HP model but provides significantly more capacity when you need it most.</p>
        </div>

        <div className='prose prose-lg max-w-none mt-8'>
          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Understanding Flow Rate and Head Pressure</h3>
          <p>Flow rate (GPH) is how many gallons of water the pump can move per hour. This number decreases as the pump has to push water higher (more head pressure).</p>
          <p className='mt-4'>Head pressure is the vertical distance from the water level in the pit to the highest point in the discharge pipe. A typical basement sump pump lifts water 8 to 12 feet vertically. Every pump is rated at a specific head height (usually 10 feet), and the GPH rating drops as head height increases.</p>
          <p className='mt-4'><strong>How to estimate your needs:</strong> During a heavy rain, note how fast the water level rises in your sump pit. If the pit fills from empty to the pump activation level in less than 1 minute, you need a 1/2 HP or larger pump. If it takes 3 to 5 minutes, a 1/3 HP pump is sufficient. If you are unsure, go with 1/2 HP because the cost difference is small and the capacity difference is significant.</p>
        </div>
      </section>

      {/* Section 4 - Critical Features */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Features</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>What Matters</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Critical Sump Pump Features to Look For</h2>
        <div className='prose prose-lg max-w-none'>
          <p>Not all sump pumps at the same horsepower are equal. These features separate reliable pumps from ones that fail when you need them most.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Float Switch Type</h3>
          <p>The float switch is the mechanism that turns the pump on when water rises and off when it drops. This is the most failure-prone component of any sump pump.</p>
          <p className='mt-4'><strong>Vertical float switch:</strong> Moves up and down on a rod. Less likely to get stuck against the pit wall than a tethered float. Good reliability. Most common type on mid-range pumps.</p>
          <p className='mt-4'><strong>Tethered float switch:</strong> Hangs on a cord and swings upward as water rises. Works well in larger pits but can get tangled or stuck against the pit wall in smaller pits. Avoid in pits under 18 inches diameter.</p>
          <p className='mt-4'><strong>Electronic (solid-state) float switch:</strong> Uses water-sensing probes with no moving parts. Most reliable type because there is nothing mechanical to fail, stick, or tangle. Found on premium pumps. Worth the extra cost.</p>
          <p className='mt-4'><strong>Our recommendation:</strong> Electronic or vertical float switch. Avoid tethered floats in pits under 18 inches in diameter.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Pump Housing Material</h3>
          <p><strong>Cast iron</strong> is the best material for pump housings. It is heavy, durable, dissipates motor heat effectively, and lasts 10 to 15 years. The added weight also keeps the pump stable in the pit during operation.</p>
          <p className='mt-4'><strong>Thermoplastic</strong> (engineered plastic) is lighter, less expensive, and corrosion-resistant. However, it does not dissipate heat as well as cast iron, which can shorten motor life under heavy use. Acceptable for light-duty applications but not recommended for primary basement pumps.</p>
          <p className='mt-4'><strong>Stainless steel</strong> is corrosion-proof and durable but significantly more expensive. Found on premium models.</p>
          <p className='mt-4'><strong>Our recommendation:</strong> Cast iron housing for any primary basement sump pump. The price difference over thermoplastic is $50 to $100 and the lifespan difference is years.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Discharge Size</h3>
          <p>Most residential sump pumps have a 1.5-inch discharge outlet, which is standard and sufficient for most homes. Larger pumps (3/4 HP and above) may have 2-inch discharge outlets that handle higher water volume. Make sure the discharge pipe from your pump matches the existing discharge pipe in your installation, or plan to adapt.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Check Valve</h3>
          <p>A check valve prevents water in the discharge pipe from flowing back into the pit after the pump shuts off. Without a check valve, 2 to 5 gallons of water drain back into the pit every cycle, causing the pump to activate again immediately. This short-cycling wastes energy and dramatically shortens pump life. Every installation needs a check valve. If your pump does not include one, buy one separately ($15 to $40).</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Thermal Overload Protection</h3>
          <p>This built-in safety feature shuts the pump off automatically if the motor overheats, preventing permanent motor damage. The pump restarts automatically once it cools down. Found on quality pumps from reputable brands. Do not buy a pump without thermal protection.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Alarm System</h3>
          <p>An audible or smart alarm that alerts you when the water level in the pit exceeds the normal activation point, indicating the pump has failed or cannot keep up. Some alarms are built into the pump. Others are standalone devices mounted on the pit. <Link href='/articles/smart-sump-pumps-guide' className='text-indigo-600 hover:text-indigo-700 underline'>Smart sump pump monitors</Link> connect to Wi-Fi and send alerts to your phone, which is especially valuable if you travel or own a second property.</p>
        </div>
      </section>

      {/* Section 5 - Backup Systems */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Backup</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Essential Protection</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Backup Sump Pump Systems: Why You Need One</h2>
        <div className='prose prose-lg max-w-none'>
          <p>A primary sump pump is useless during a power outage, which is exactly when you need it most. Heavy storms cause both flooding and power failures simultaneously. Every basement with a sump pump should have a backup system.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Battery Backup Sump Pump</h3>
          <p>A separate pump powered by a rechargeable battery that activates automatically when the primary pump fails or loses power. Battery backups typically run for 5 to 12 hours of intermittent pumping on a full charge, depending on the battery size and water volume.</p>
          <p className='mt-4'><strong>Cost:</strong> $300 to $900 for the pump and battery. $600 to $1,500 installed as part of a complete system.</p>
          <p className='mt-4'><strong>Maintenance:</strong> Test quarterly by unplugging the primary pump and running the backup. Replace the battery every 3 to 5 years ($100 to $200).</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Water-Powered Backup Sump Pump</h3>
          <p>Uses your home&apos;s municipal water pressure to create suction that pumps water out of the pit. Runs indefinitely during a power outage as long as you have water pressure. Uses approximately 1 gallon of city water for every 2 gallons pumped out.</p>
          <p className='mt-4'><strong>Cost:</strong> $400 to $1,200 installed.</p>
          <p className='mt-4'><strong>Limitations:</strong> Only works if you are connected to municipal water (not well water). Increases your water bill during extended use. Lower pumping capacity than battery backups. Some municipalities restrict or prohibit water-powered pumps.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Dual System (Primary Plus Battery Backup)</h3>
          <p>The most reliable configuration. A primary submersible pump handles day-to-day water removal, and a battery backup pump sits alongside it ready to activate during power outages or if the primary pump fails. Some manufacturers sell integrated dual systems as a single unit.</p>
        </div>

        <div className='bg-indigo-50 border-l-4 border-indigo-500 p-6 mt-8 rounded-r-lg'>
          <p className='font-semibold text-indigo-900'>Our Recommendation</p>
          <p className='text-indigo-800 mt-2'>Every basement should have at minimum a primary pump plus a battery backup. The $300 to $600 cost of a battery backup is insignificant compared to the $5,000 to $25,000 cost of water damage from a single flooding event. For a detailed comparison of backup options, see our <Link href='/articles/battery-vs-water-powered-sump-pumps' className='text-indigo-700 underline'>battery vs water-powered backup sump pump guide</Link>. For whole-house backup power options including generators, see our <Link href='/articles/backup-power-sump-pumps' className='text-indigo-700 underline'>backup power for sump pumps guide</Link>.</p>
        </div>
      </section>

      {/* Section 6 - Pricing */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Costs</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>2026 Pricing</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Sump Pump Cost and Pricing 2026</h2>

        <div className='overflow-x-auto'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-indigo-50'>
                <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-900'>Item</th>
                <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-900'>Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className='border border-slate-300 px-4 py-2'>Basic 1/3 HP submersible pump</td><td className='border border-slate-300 px-4 py-2'>$120 to $250</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Quality 1/2 HP cast iron submersible</td><td className='border border-slate-300 px-4 py-2'>$250 to $450</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2'>Premium 1/2 to 3/4 HP with smart features</td><td className='border border-slate-300 px-4 py-2'>$450 to $750</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Pedestal pump (1/3 HP)</td><td className='border border-slate-300 px-4 py-2'>$60 to $200</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2'>Battery backup pump and battery</td><td className='border border-slate-300 px-4 py-2'>$300 to $900</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Water-powered backup pump</td><td className='border border-slate-300 px-4 py-2'>$400 to $1,200</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2'>Check valve</td><td className='border border-slate-300 px-4 py-2'>$15 to $40</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Sump pit and basin (if new installation)</td><td className='border border-slate-300 px-4 py-2'>$50 to $200</td></tr>
              <tr><td className='border border-slate-300 px-4 py-2'>Professional installation (pump only, existing pit)</td><td className='border border-slate-300 px-4 py-2'>$300 to $800</td></tr>
              <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-2'>Professional installation (new pit, pump, discharge line)</td><td className='border border-slate-300 px-4 py-2'>$1,000 to $2,500</td></tr>
              <tr className='font-bold'><td className='border border-slate-300 px-4 py-2'>Complete system (primary pump, battery backup, installation)</td><td className='border border-slate-300 px-4 py-2'>$1,200 to $3,000</td></tr>
            </tbody>
          </table>
        </div>

        <div className='prose prose-lg max-w-none mt-8'>
          <p>For a detailed cost breakdown with regional pricing variations, see our <Link href='/articles/sump-pump-cost' className='text-indigo-600 hover:text-indigo-700 underline'>sump pump cost guide</Link>. For how sump pump costs fit into a broader waterproofing project, see our <Link href='/articles/basement-waterproofing-cost' className='text-indigo-600 hover:text-indigo-700 underline'>basement waterproofing cost guide</Link>.</p>
        </div>
      </section>

      {/* Section 7 - Installation */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Installation</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>DIY vs Professional</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Sump Pump Installation: DIY vs Professional</h2>
        <div className='prose prose-lg max-w-none'>
          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>When DIY Installation Makes Sense</h3>
          <p>Replacing an existing pump in a working sump pit is a manageable DIY project for a handy homeowner. You disconnect the old pump, connect the new pump to the existing discharge pipe, set it in the pit, and plug it in. The job takes 30 to 60 minutes and saves $300 to $800 in installation labor.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>When to Hire a Professional</h3>
          <p>Hire a professional for new installations where no sump pit exists (requires cutting concrete, excavating, and installing a basin), situations requiring a new discharge line routed through the foundation wall, any installation involving electrical work beyond plugging into an existing outlet, installations that include a battery backup system or <Link href='/articles/interior-basement-drainage-systems' className='text-indigo-600 hover:text-indigo-700 underline'>interior drainage system</Link>, and any installation in a finished basement where drywall, flooring, or fixtures need to be worked around.</p>
          <p className='mt-4'>For guidance on finding a qualified installer, see our <Link href='/articles/how-to-hire-waterproofing-contractor' className='text-indigo-600 hover:text-indigo-700 underline'>how to hire a waterproofing contractor guide</Link>.</p>
        </div>
      </section>

      {/* Section 8 - Top Brands */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Brands</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>2026 Picks</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Top Recommended Brands and Models in 2026</h2>
        <div className='grid gap-6'>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-slate-900'>Zoeller</h3>
            <p className='text-slate-600 mt-2'>Widely considered the most reliable residential sump pump brand by both homeowners and waterproofing professionals. Their cast iron submersible pumps are the industry standard for durability and quiet operation.</p>
            <a href='https://amzn.to/4cOcGWF' target='_blank' rel='noopener noreferrer' className='inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-semibold'>Check Price on Amazon →</a>
          </div>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-slate-900'>Wayne</h3>
            <p className='text-slate-600 mt-2'>Excellent value with strong performance at a lower price point.</p>
            <a href='https://amzn.to/4kUZXU7' target='_blank' rel='noopener noreferrer' className='inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-semibold'>Check Price on Amazon →</a>
          </div>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-slate-900'>Liberty Pumps</h3>
            <p className='text-slate-600 mt-2'>Leads in smart features and monitoring capabilities.</p>
            <a href='https://amzn.to/4aPywXn' target='_blank' rel='noopener noreferrer' className='inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-semibold'>Check Price on Amazon →</a>
          </div>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-slate-900'>Superior Pump</h3>
            <p className='text-slate-600 mt-2'>Solid budget-friendly option.</p>
            <a href='https://amzn.to/4aYIhCO' target='_blank' rel='noopener noreferrer' className='inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-semibold'>Check Price on Amazon →</a>
          </div>
          <div className='border border-slate-200 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-slate-900'>Basement Watchdog</h3>
            <p className='text-slate-600 mt-2'>Best battery backup systems on the market.</p>
            <a href='https://amzn.to/40q94Ts' target='_blank' rel='noopener noreferrer' className='inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-semibold'>Check Price on Amazon →</a>
          </div>
        </div>
        <p className='text-slate-600 mt-6'>See our <Link href='/articles/best-sump-pumps' className='text-indigo-600 hover:text-indigo-700 underline'>best sump pumps 2026 roundup</Link> for specific model recommendations and pricing.</p>
      </section>

      {/* Section 9 - Maintenance */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Maintenance</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Keep It Running</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Sump Pump Maintenance: How to Keep Your Pump Running</h2>
        <div className='prose prose-lg max-w-none'>
          <p>A sump pump that is never maintained will fail exactly when you need it. These maintenance tasks take 15 minutes per quarter and can extend your pump&apos;s life by years.</p>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Quarterly (Every 3 Months)</h3>
          <ul className='space-y-2'>
            <li>Pour a bucket of water into the sump pit and confirm the pump activates, ejects the water, and shuts off automatically</li>
            <li>Listen for unusual noises (grinding, rattling, humming without pumping)</li>
            <li>Check that the float switch moves freely and is not stuck against the pit wall or tangled on the discharge pipe</li>
            <li>Verify the check valve is holding (the pump should not cycle on again immediately after shutting off)</li>
          </ul>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Annually (Before the Rainy Season)</h3>
          <ul className='space-y-2'>
            <li>Clean debris from the sump pit (gravel, dirt, and small objects can clog the intake screen)</li>
            <li>Inspect the discharge pipe for leaks, clogs, or ice damage</li>
            <li>Test the battery backup by unplugging the primary pump and triggering the backup</li>
            <li>Check the battery charge level and replace the battery if it is more than 3 years old</li>
            <li>Verify the discharge outlet outside is clear and water flows freely away from the foundation</li>
          </ul>

          <h3 className='text-xl font-bold text-slate-800 mt-8 mb-4'>Every 7 to 10 Years</h3>
          <p>Replace the primary pump proactively, even if it is still working. Sump pumps do not give much warning before failure. A pump that ran reliably for 9 years can fail completely during the next heavy rain. Replacing proactively on a schedule is far cheaper than emergency replacement plus flood damage cleanup.</p>
          <p className='mt-4'>See our <Link href='/articles/best-sump-pumps' className='text-indigo-600 hover:text-indigo-700 underline'>best sump pumps 2026</Link> for current replacement recommendations. For more maintenance details, see our <Link href='/articles/spring-basement-checklist' className='text-indigo-600 hover:text-indigo-700 underline'>spring basement checklist</Link> which includes a full sump pump inspection protocol.</p>
        </div>
      </section>

      {/* Section 10 - How a Sump Pump Works With Your Waterproofing System */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <div className='flex items-center gap-3 mb-6'>
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>System</span>
          <div className='h-px flex-1 bg-slate-200' />
          <span className='text-indigo-400 font-bold tracking-[0.2em] text-sm uppercase'>Big Picture</span>
        </div>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>How a Sump Pump Works With Your Waterproofing System</h2>
        <div className='prose prose-lg max-w-none'>
          <p>A sump pump does not work in isolation. It is one component of a larger basement waterproofing system. Understanding how the pieces fit together helps you make better purchasing decisions.</p>
          <ul className='space-y-4 mt-6'>
            <li><strong>Interior drainage system:</strong> <Link href='/articles/french-drain-cost' className='text-indigo-600 hover:text-indigo-700 underline'>French drain</Link> or engineered channel system collects water at the perimeter of the basement where the wall meets the floor (the cove joint). This water flows by gravity through the drainage channel to the sump pit.</li>
            <li><strong>Sump pit and pump:</strong> Collect water from the drainage system and eject it outside through the discharge pipe.</li>
            <li><strong>Discharge line:</strong> Carries water from the pump through the foundation wall to an exterior exit point that routes water away from the house (at least 10 feet from the foundation). Some systems include a freeze-resistant discharge line that prevents ice blockage in winter.</li>
            <li><strong>Backup pump:</strong> Activates if the primary pump fails or loses power.</li>
            <li><strong>Dehumidifier:</strong> Controls residual humidity in the air after the drainage and pumping system has removed the liquid water. See our <Link href='/articles/best-basement-dehumidifiers' className='text-indigo-600 hover:text-indigo-700 underline'>best basement dehumidifiers guide</Link>.</li>
          </ul>
          <p className='mt-6'>For the complete picture, see our <Link href='/articles/complete-basement-waterproofing-guide' className='text-indigo-600 hover:text-indigo-700 underline'>complete basement waterproofing guide</Link> and our <Link href='/articles/interior-vs-exterior-waterproofing' className='text-indigo-600 hover:text-indigo-700 underline'>interior vs exterior waterproofing comparison</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <h2 className='text-4xl font-bold text-slate-900 mb-8'>Frequently Asked Questions About Sump Pumps</h2>
        <div className='space-y-8'>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>What size sump pump do I need for my basement?</h3>
            <p className='text-slate-600'>A 1/2 HP submersible sump pump is the best choice for most homes. It provides 3,500 to 5,000 gallons per hour of pumping capacity at a 10-foot head, which handles moderate to heavy water situations with a comfortable safety margin. Choose 1/3 HP only if your water volume is light and consistent. Choose 3/4 HP or 1 HP for very wet basements, high water tables, large homes, or long discharge pipe runs.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>How long does a sump pump last?</h3>
            <p className='text-slate-600'>A quality submersible sump pump lasts 10 to 15 years with proper maintenance. Pedestal pumps last 5 to 10 years. Battery backup pumps last 5 to 7 years, with the battery itself needing replacement every 3 to 5 years. The most common cause of premature pump failure is lack of maintenance. Replace your pump proactively on schedule rather than waiting for it to fail during a storm.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>How much does a sump pump cost to install?</h3>
            <p className='text-slate-600'>A pump-only replacement in an existing pit costs $300 to $800 for professional installation, or free if you DIY. A complete new installation (pit excavation, pump, discharge line, and electrical) costs $1,000 to $2,500 professionally installed. Adding a battery backup adds $300 to $900 for the equipment. A complete primary-plus-backup system costs $1,200 to $3,000 installed. See our <Link href='/articles/sump-pump-cost' className='text-indigo-600 hover:text-indigo-700 underline'>sump pump cost guide</Link> for detailed pricing.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>Do I need a battery backup sump pump?</h3>
            <p className='text-slate-600'>Yes. Power outages frequently coincide with heavy storms, which is exactly when your sump pump needs to run. A battery backup sump pump activates automatically when the primary pump loses power and can run for 5 to 12 hours of intermittent pumping. At $300 to $600, a battery backup is the cheapest insurance against a flooding event that could cost $5,000 to $25,000 in water damage and mold remediation. See our <Link href='/articles/battery-vs-water-powered-sump-pumps' className='text-indigo-600 hover:text-indigo-700 underline'>battery vs water-powered backup comparison</Link> for help choosing between backup types.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>What is the best sump pump brand?</h3>
            <p className='text-slate-600'>Zoeller is widely considered the most reliable residential sump pump brand by both homeowners and waterproofing professionals. Wayne offers excellent value. Liberty Pumps leads in smart features. Superior Pump provides solid budget-friendly options. Basement Watchdog makes the best battery backup systems. See our <Link href='/articles/best-sump-pumps' className='text-indigo-600 hover:text-indigo-700 underline'>best sump pumps 2026 roundup</Link> for specific model recommendations.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>Should I get a submersible or pedestal sump pump?</h3>
            <p className='text-slate-600'>Choose a submersible pump for most basements. Submersible pumps are quieter, more powerful, longer-lasting, and keep the pit sealed to prevent odors and humidity from escaping. Choose a pedestal pump only if your sump pit is too shallow for a submersible (less than 12 inches deep) or if you need the lowest possible upfront cost. For a detailed comparison, see our <Link href='/articles/submersible-vs-pedestal-sump-pump' className='text-indigo-600 hover:text-indigo-700 underline'>submersible vs pedestal guide</Link>.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>How often should I test my sump pump?</h3>
            <p className='text-slate-600'>Test your sump pump at least every 3 months by pouring a bucket of water into the pit and confirming the pump activates and shuts off properly. Test before the start of every rainy season. Test the battery backup by unplugging the primary pump at least once a year. If your pump did not activate or made unusual noises during any test, address the issue immediately.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>Can I install a sump pump myself?</h3>
            <p className='text-slate-600'>Replacing an existing pump in a working pit is a straightforward DIY project that takes 30 to 60 minutes. However, new installations requiring pit excavation, concrete cutting, discharge line routing, or electrical work should be done by a professional. Improper installation can result in a pump that does not activate when needed or a discharge that routes water back toward the foundation.</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-800 mb-3'>Why does my sump pump keep running?</h3>
            <p className='text-slate-600'>A sump pump that runs constantly or cycles on and off rapidly usually indicates one of four problems: the check valve is missing or failed, the float switch is stuck in the on position, the pump is undersized for the water volume, or there is a plumbing problem feeding water into the pit continuously. A missing check valve is the most common cause and costs $15 to $40 to fix. See our <Link href='/articles/why-basement-floods-with-sump-pump' className='text-indigo-600 hover:text-indigo-700 underline'>why basement floods with sump pump guide</Link> for more troubleshooting.</p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <h2 className='text-3xl font-bold text-slate-900 mb-8'>Glossary of Sump Pump Terms</h2>
        <div className='space-y-4'>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Submersible sump pump</h4>
            <p className='text-slate-600 text-sm'>A pump designed to operate fully submerged in water inside the sump pit. The motor is sealed in a waterproof housing. Quieter, more powerful, and longer-lasting than pedestal pumps. Recommended for most residential basements.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Pedestal sump pump</h4>
            <p className='text-slate-600 text-sm'>A pump with the motor mounted above the sump pit on a shaft, with only the impeller submerged. Less expensive and easier to service but louder and shorter-lived. Best for shallow pits or budget installations.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Sump pit (sump basin)</h4>
            <p className='text-slate-600 text-sm'>A hole in the basement floor, typically 18 to 24 inches in diameter and 22 to 36 inches deep, lined with a plastic or fiberglass basin. Collects water from the interior drainage system and houses the sump pump. A sealed lid prevents debris, odors, and humidity from escaping.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Float switch</h4>
            <p className='text-slate-600 text-sm'>The mechanism that activates the sump pump when water rises to a set level and deactivates it when water drops. Can be tethered, vertical, or electronic (solid-state). Electronic switches are the most reliable.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Check valve</h4>
            <p className='text-slate-600 text-sm'>A one-way valve installed on the discharge pipe above the pump that prevents water from flowing back into the pit after the pump shuts off. Without a check valve, the pump short-cycles, wasting energy and reducing lifespan.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Head pressure</h4>
            <p className='text-slate-600 text-sm'>The vertical distance from the water level in the sump pit to the highest point of the discharge pipe. Higher head pressure reduces the pump&apos;s effective flow rate. Most residential installations have 8 to 12 feet of head pressure.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>GPH (gallons per hour)</h4>
            <p className='text-slate-600 text-sm'>The volume of water a sump pump can move in one hour at a specified head pressure. A typical 1/2 HP pump moves 3,500 to 5,000 GPH at 10 feet of head. Always compare pump ratings at the same head pressure for an accurate comparison.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Discharge pipe (discharge line)</h4>
            <p className='text-slate-600 text-sm'>The pipe that carries water from the sump pump through the foundation wall to an exterior exit point. Should route water at least 10 feet from the foundation. Standard diameter is 1.5 inches.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Short-cycling</h4>
            <p className='text-slate-600 text-sm'>A condition where the sump pump turns on and off rapidly in quick succession, usually caused by a missing or failed check valve, an oversized pump, or a stuck float switch. Dramatically reduces pump lifespan and increases energy consumption.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Battery backup sump pump</h4>
            <p className='text-slate-600 text-sm'>A secondary pump powered by a rechargeable battery that activates automatically when the primary pump fails or loses electrical power. Provides 5 to 12 hours of intermittent pumping capacity. Battery should be replaced every 3 to 5 years.</p>
          </div>
          <div className='border-l-4 border-indigo-200 pl-4'>
            <h4 className='font-bold text-slate-800'>Thermal overload protection</h4>
            <p className='text-slate-600 text-sm'>A built-in safety feature that automatically shuts off the pump motor if it overheats, preventing permanent damage. The pump restarts automatically once it cools to a safe temperature. Found on quality pumps from reputable manufacturers.</p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Link href='/articles/best-sump-pumps' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Best Sump Pumps 2026</h3>
          </Link>
          <Link href='/articles/sump-pump-cost' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Sump Pump Cost</h3>
          </Link>
          <Link href='/articles/submersible-vs-pedestal-sump-pump' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Submersible vs Pedestal Sump Pump</h3>
          </Link>
          <Link href='/articles/battery-vs-water-powered-sump-pumps' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Battery vs Water-Powered Backup</h3>
          </Link>
          <Link href='/articles/backup-power-sump-pumps' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Backup Power for Sump Pumps</h3>
          </Link>
          <Link href='/articles/smart-sump-pumps-guide' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Smart Sump Pumps Guide</h3>
          </Link>
          <Link href='/articles/why-basement-floods-with-sump-pump' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Why Basement Floods With Sump Pump</h3>
          </Link>
          <Link href='/articles/french-drain-cost' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>French Drain Cost</h3>
          </Link>
          <Link href='/articles/french-drain-vs-sump-pump' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>French Drain vs Sump Pump</h3>
          </Link>
          <Link href='/articles/interior-basement-drainage-systems' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Interior Basement Drainage Systems</h3>
          </Link>
          <Link href='/articles/complete-basement-waterproofing-guide' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Complete Waterproofing Guide</h3>
          </Link>
          <Link href='/articles/interior-vs-exterior-waterproofing' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Interior vs Exterior Waterproofing</h3>
          </Link>
          <Link href='/articles/basement-waterproofing-cost' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Basement Waterproofing Cost</h3>
          </Link>
          <Link href='/articles/how-to-prevent-basement-mold' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>How to Prevent Basement Mold</h3>
          </Link>
          <Link href='/articles/wet-basement-walls' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Wet Basement Walls</h3>
          </Link>
          <Link href='/articles/water-coming-up-through-basement-floor' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Water Coming Up Through Floor</h3>
          </Link>
          <Link href='/articles/basement-efflorescence' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Basement Efflorescence</h3>
          </Link>
          <Link href='/articles/best-basement-dehumidifiers' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Best Basement Dehumidifiers</h3>
          </Link>
          <Link href='/articles/how-to-hire-waterproofing-contractor' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>How to Hire a Waterproofing Contractor</h3>
          </Link>
          <Link href='/articles/spring-basement-checklist' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Spring Basement Checklist</h3>
          </Link>
          <Link href='/articles/basement-waterproofing-finances-insurance-taxes' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Basement Flooding Insurance</h3>
          </Link>
          <Link href='/articles/how-to-finish-a-basement' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>How to Finish a Basement</h3>
          </Link>
          <Link href='/articles/basement-finishing-cost' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <h3 className='font-bold text-slate-900'>Basement Finishing Cost</h3>
          </Link>
        </div>
      </section>

      {/* Our Network */}
      <section className='max-w-4xl mx-auto px-6 py-12'>
        <h2 className='text-3xl font-bold text-slate-900 mb-6'>Our Network</h2>
        <div className='grid md:grid-cols-2 gap-4'>
          <a href='https://thegarage.guide/articles/water-leaking-into-garage' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <p className='font-bold text-slate-900'>The Garage Guide</p>
            <p className='text-slate-600 text-sm mt-1'>Water leaking into garage — where a sump pump is sometimes the solution for garages with chronic water intrusion from groundwater or poor drainage.</p>
          </a>
          <a href='https://theseptic.guide/articles/septic-overflow-after-rain' target='_blank' rel='noopener noreferrer' className='block p-4 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition'>
            <p className='font-bold text-slate-900'>The Septic Guide</p>
            <p className='text-slate-600 text-sm mt-1'>Septic overflow after rain — which can compound basement flooding problems in homes where both the septic system and the basement drainage are overwhelmed by the same heavy rain events.</p>
          </a>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Get a Professional Sump Pump Installation</h2>
          <p className='text-slate-300 mb-8 max-w-2xl mx-auto'>Not sure which pump to choose? Connect with pre-vetted waterproofing professionals in your area. Free assessments, no obligation.</p>
          <LeadForm />
        </div>
      </section>

    </div>
  )
}