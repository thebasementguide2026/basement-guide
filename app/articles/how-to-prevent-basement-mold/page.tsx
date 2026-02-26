import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Prevent Basement Mold: The Definitive Guide | The Basement Guide',
  description: 'Learn the critical steps to prevent basement mold with science-based methods. The 5 pillars of mold prevention, recommended tools, seasonal checklists, and expert tips for 2026.',
}

export default function PreventMoldArticle() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/basement-mold-wall.jpg'
          alt='Basement mold on foundation wall'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-12 bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>Expanded Edition</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            How to Prevent Basement Mold<br />
            <span className='text-teal-400'>The Definitive Guide</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            Mold is more than an eyesore. It threatens your family's health and your home's value. Prevention is your best defense.
          </p>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold'>BG</div>
            <div className='text-white'>
              <p className='font-bold'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated Feb 2026 &nbsp;&middot;&nbsp; 25 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <div className='prose prose-lg prose-slate max-w-none'>
          <p className='text-xl text-slate-700 leading-relaxed mb-8'>
            Most homeowners spot basement mold only after the musty smell hits or fuzzy patches appear. By then spores have often spread. The good news? Consistent habits and the right tools prevent almost all of it.
          </p>

          {/* Why Basements Are Mold Factories */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Why Basements Are Mold Factories</h2>
          <p className='text-slate-700 mb-6'>
            Basements offer mold everything it needs: ground moisture, organic food like drywall and cardboard, and poor airflow. Concrete wicks water, and cool walls cause condensation when warm air arrives. But you do not have to live with it. The five pillars below give you a complete playbook.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose'>
            <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
              <p className='text-teal-700 font-bold text-sm uppercase tracking-wider mb-2'>Concrete Porosity</p>
              <p className='text-slate-600 text-sm'>Concrete looks solid but acts like a hard sponge, wicking moisture from the earth through capillary action.</p>
            </div>
            <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
              <p className='text-teal-700 font-bold text-sm uppercase tracking-wider mb-2'>Organic Food Sources</p>
              <p className='text-slate-600 text-sm'>Drywall paper, wood studs, cardboard boxes, and even dust are feasts for mold colonies.</p>
            </div>
            <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
              <p className='text-teal-700 font-bold text-sm uppercase tracking-wider mb-2'>The Dew Point Trap</p>
              <p className='text-slate-600 text-sm'>Cool basement walls meet warm, humid air, creating invisible condensation that kickstarts mold growth.</p>
            </div>
          </div>

          {/* The 5 Pillars */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>The 5 Pillars of Mold Prevention</h2>

          {/* Pillar 1 */}
          <div className='bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl p-6 my-8'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>1. Relative Humidity Control &mdash; The 45 Percent Rule</h3>
            <p className='text-slate-700 mb-4'>
              Keep humidity at 45 percent or lower year-round. Above 55 percent and mold feels welcome.
            </p>
            <p className='text-slate-700 font-semibold mb-2'>Action steps:</p>
            <ul className='list-disc pl-6 text-slate-600 space-y-1'>
              <li>Run a properly sized <Link href='/articles/dehumidifier-myths' className='text-teal-700 underline'>dehumidifier</Link> with humidistat and auto-drain hose 24/7 in humid seasons.</li>
              <li>Place it near the dampest spot and pair with central AC when possible.</li>
              <li>Clean coils monthly.</li>
              <li>Skip cheap undersized units &mdash; choose 50&ndash;70 pint capacity for most basements.</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className='bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl p-6 my-8'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>2. Exterior Water Management</h3>
            <p className='text-slate-700 mb-4'>
              Ninety percent of basement water issues start outside.
            </p>
            <p className='text-slate-700 font-semibold mb-2'>Action steps:</p>
            <ul className='list-disc pl-6 text-slate-600 space-y-1'>
              <li>Clean gutters and downspouts twice a year and add extensions that carry water six feet away.</li>
              <li>Re-grade soil to slope away from the foundation.</li>
              <li>Seal <Link href='/articles/types-of-foundation-cracks' className='text-teal-700 underline'>foundation cracks</Link> and keep window wells clear with covers.</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className='bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl p-6 my-8'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>3. Foundation Sealing &amp; Waterproofing</h3>
            <p className='text-slate-700 mb-4'>
              Even tiny cracks let vapor through.
            </p>
            <p className='text-slate-700 font-semibold mb-2'>What works:</p>
            <ul className='list-disc pl-6 text-slate-600 space-y-1'>
              <li>Seal minor cracks with masonry sealer or epoxy.</li>
              <li>Add interior sealants and vapor barrier paint on finished walls.</li>
              <li>Maintain a <Link href='/articles/sump-pump-guide' className='text-teal-700 underline'>sump pump</Link> with battery backup and test it monthly.</li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className='bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl p-6 my-8'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>4. Strategic Airflow</h3>
            <p className='text-slate-700 mb-4'>
              Stagnant air behind boxes is a mold magnet.
            </p>
            <p className='text-slate-700 font-semibold mb-2'>Easy wins:</p>
            <ul className='list-disc pl-6 text-slate-600 space-y-1'>
              <li>Keep furniture six inches from walls.</li>
              <li>Vent bathroom and kitchen fans outside.</li>
              <li>Run a ceiling fan or oscillating fans on low.</li>
              <li>Service HVAC yearly and change filters every 60&ndash;90 days.</li>
            </ul>
          </div>

          {/* Pillar 5 */}
          <div className='bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl p-6 my-8'>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>5. Smart Monitoring</h3>
            <p className='text-slate-700 mb-4'>
              Catch issues early.
            </p>
 <Link href='/articles/musty-basement-smell' className='text-teal-600 underline hover:text-teal-800'>Musty smell</Link>, small spots           <p className='text-slate-700 font-semibold mb-2'>Daily habit:</p>
            <ul className='list-disc pl-6 text-slate-600 space-y-1'>
              <li>Use digital hygrometers in two or three spots and check weekly.</li>
              <li>Install smart leak sensors near water sources.</li>
              <li>Walk the basement monthly with a flashlight, looking behind items.</li>
            </ul>
          </div>

          {/* What to Do If You Spot Early Signs */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>What to Do If You Spot Early Signs</h2>
          <p className='text-slate-700 mb-4'>
            Musty smell, small spots, or allergy symptoms that improve when you leave the basement? Fix the moisture source first. Treat light growth with a non-toxic product instead of bleach. Wipe hard surfaces, discard badly affected items, and improve ventilation.
          </p>
          <div className='bg-red-50 border border-red-200 rounded-2xl p-6 my-8 not-prose'>
            <p className='text-red-800 font-bold text-lg mb-2'>⚠️ When to Call a Pro</p>
            <p className='text-red-700'>
              For growth over ten square feet or health concerns, call a professional immediately. Check our <Link href='/articles/mold-remediation-cost' className='text-red-800 underline font-semibold'>mold remediation cost guide</Link> for pricing details.
            </p>
          </div>

          {/* Recommended Tools */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Recommended Tools &amp; Products</h2>
          <p className='text-slate-700 mb-8'>
            These four tools help thousands of readers stay ahead of mold. They are the ones we use ourselves.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose'>
            <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
              <p className='text-teal-700 font-bold text-sm uppercase tracking-wider mb-2'>Mold Test Kit</p>
              <p className='text-slate-900 font-bold text-lg mb-1'>My Mold Detective Mold Test Kit</p>
              <p className='text-slate-600 text-sm'>Includes air sampling plates and surface swabs with lab results in days. Perfect for checking after water events or every spring.</p>
              <a href='https://amzn.to/3MFyPvT' target='_blank' rel='noopener noreferrer' className='inline-block mt-3 px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-lg hover:bg-teal-700 transition-colors'>Check Price on Amazon →</a>
            </div>
            <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
              <p className='text-teal-700 font-bold text-sm uppercase tracking-wider mb-2'>Mold Control Spray</p>
              <p className='text-slate-900 font-bold text-lg mb-1'>Concrobium Mold Control Spray</p>
              <p className='text-slate-600 text-sm'>EPA-registered, bleach-free spray that kills mold and leaves a protective barrier. Odorless and safe around kids and pets once dry. Great for walls, joists, and furniture.</p>
              <a href='https://amzn.to/46nCgOy' target='_blank' rel='noopener noreferrer' className='inline-block mt-3 px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-lg hover:bg-teal-700 transition-colors'>Check Price on Amazon →</a>
            </div>
            <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
              <p className='text-teal-700 font-bold text-sm uppercase tracking-wider mb-2'>HEPA Air Purifier</p>
              <p className='text-slate-900 font-bold text-lg mb-1'>Levoit Core 600S True HEPA Air Purifier</p>
              <p className='text-slate-600 text-sm'>Handles large basements quietly with an app for real-time air quality. Captures 99.97 percent of mold spores. Run on auto and watch the musty smell vanish.</p>
              <a href='https://amzn.to/4kVbxP3' target='_blank' rel='noopener noreferrer' className='inline-block mt-3 px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-lg hover:bg-teal-700 transition-colors'>Check Price on Amazon →</a>
            </div>
            <div className='bg-slate-50 border border-slate-100 rounded-2xl p-6'>
              <p className='text-teal-700 font-bold text-sm uppercase tracking-wider mb-2'>Moisture Meter</p>
              <p className='text-slate-900 font-bold text-lg mb-1'>Klein Tools ET140 Pinless Moisture Meter</p>
              <p className='text-slate-600 text-sm'>Scans drywall, concrete, and wood without holes. Instant readings with clear alerts. Check suspect areas monthly to catch damp spots early.</p>
              <a href='https://amzn.to/4qXiocj' target='_blank' rel='noopener noreferrer' className='inline-block mt-3 px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-lg hover:bg-teal-700 transition-colors'>Check Price on Amazon →</a>
            </div>
          </div>

          {/* Seasonal Checklist */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Seasonal Prevention Checklist</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose'>
            <div className='bg-green-50 border border-green-100 rounded-2xl p-6'>
              <p className='text-green-800 font-bold text-lg mb-2'>🌱 Spring</p>
              <p className='text-slate-600 text-sm'>Deep clean, test humidity, clean gutters.</p>
            </div>
            <div className='bg-yellow-50 border border-yellow-100 rounded-2xl p-6'>
              <p className='text-yellow-800 font-bold text-lg mb-2'>☀️ Summer</p>
              <p className='text-slate-600 text-sm'>Run dehumidifier non-stop, keep windows closed on muggy days.</p>
            </div>
            <div className='bg-orange-50 border border-orange-100 rounded-2xl p-6'>
              <p className='text-orange-800 font-bold text-lg mb-2'>🍂 Fall</p>
              <p className='text-slate-600 text-sm'>Inspect grading and HVAC before rains.</p>
            </div>
            <div className='bg-blue-50 border border-blue-100 rounded-2xl p-6'>
              <p className='text-blue-800 font-bold text-lg mb-2'>❄️ Winter</p>
              <p className='text-slate-600 text-sm'>Watch for pipe condensation and use a small heater if needed.</p>
            </div>
          </div>

          {/* Conclusion */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Don't Negotiate with Mold</h2>
          <p className='text-slate-700 mb-4'>
            Prevention is simple and effective when you stay consistent. Address moisture first, monitor with the right tools, and protect your space. Thousands have turned damp basements into dry, usable areas with these steps.
          </p>
          <p className='text-slate-700 mb-8'>
            If the smell returns, act early. Prevention costs far less than remediation. The <Link href='/articles/musty-basement-smell' className='text-teal-600 underline hover:text-teal-800'>musty smell</Link> really is mold eating your home. Stop it before it starts.
          </p>

          {/* FAQ Section */}
          <h2 className='text-3xl font-bold text-slate-900 mt-16 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-6 my-8'>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>How often should I check for mold?</h4>
              <p className='text-slate-600'>Monthly visual walk-through plus weekly humidity checks is plenty.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>Can I use regular bleach?</h4>
              <p className='text-slate-600'>Only on non-porous surfaces for cleaning. It does not kill roots and can damage materials.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>Will a dehumidifier solve everything?</h4>
              <p className='text-slate-600'>It handles the biggest factor but works best with good drainage and airflow.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900 mb-2'>Are these products safe for kids and pets?</h4>
              <p className='text-slate-600'>Yes. Concrobium and the Levoit purifier are low-VOC and family-friendly once dry or installed.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Guides */}
      <section className='max-w-7xl mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold text-slate-900 mb-8'>Related Guides</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Link href='/articles/mold-remediation-cost' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Mold Remediation Cost Guide</h4>
            <p className='text-slate-500 text-sm'>What to expect for professional mold removal pricing in 2026.</p>
          </Link>
          <Link href='/articles/dehumidifier-myths' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Dehumidifier Myths &amp; Sizing Guide</h4>
            <p className='text-slate-500 text-sm'>Why your 30-pint unit is failing and the science of proper sizing.</p>
          </Link>
          <Link href='/articles/basement-waterproofing-cost' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Basement Waterproofing Cost Guide</h4>
            <p className='text-slate-500 text-sm'>What to expect for professional waterproofing pricing in 2026.</p>
          </Link>
          <Link href='/articles/sump-pump-guide' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Sump Pump Buying Guide</h4>
            <p className='text-slate-500 text-sm'>Choose the right sump pump to protect your basement from flooding.</p>
          </Link>
          <Link href='/articles/basement-insulation-guide' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Basement Insulation Guide</h4>
            <p className='text-slate-500 text-sm'>Proper insulation works hand-in-hand with humidity control.</p>
          </Link>
          <Link href='/articles/best-basement-flooring' className='group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2'>Best Basement Flooring Options</h4>
            <p className='text-slate-500 text-sm'>Choose moisture-resistant flooring for your basement.</p>
          </Link>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 pb-20'>
        <div className='bg-slate-900 rounded-3xl p-10 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Suspect a Mold Issue?</h2>
          <p className='text-slate-300 mb-8 max-w-2xl mx-auto'>
            Connect with local mold remediation and waterproofing professionals for a free assessment of your moisture problems.
          </p>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
