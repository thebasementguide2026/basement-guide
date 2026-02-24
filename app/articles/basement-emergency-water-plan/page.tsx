import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water in My Basement: Your Immediate Emergency Plan (2026)',
  description: 'If water is flooding your basement right now, follow this step-by-step emergency plan. Safety first, stop the source, remove water fast, and prevent mold.',
}

export default function BasementEmergencyWaterPlan() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/Flooded%20Basement.jpg'
          alt='Flooded basement with standing water'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-teal-500'></div>
            <span className='text-teal-400 font-bold tracking-[0.3em] text-sm uppercase'>Emergency Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Water in My Basement:<br />
            <span className='text-teal-400'>Your Emergency Plan</span>
          </h1>
          <p className='text-slate-300 text-xl max-w-2xl leading-relaxed'>
            Stay calm but act fast. Quick steps can save thousands in damage and stop mold from starting within 24 to 48 hours.
          </p>
          <div className='flex items-center space-x-4 mt-8'>
            <div className='flex items-center space-x-2 bg-slate-800/80 rounded-full px-4 py-2'>
              <span className='text-teal-400 font-bold text-sm'>BG</span>
            </div>
            <div>
              <p className='text-white font-semibold text-sm'>The Basement Guide</p>
              <p className='text-teal-400 text-xs'>Updated Feb 2026 &middot; 6 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-3xl mx-auto px-6 py-16'>
        <p className='text-xl text-slate-700 leading-relaxed mb-8'>
          If water is suddenly coming into your basement right now, stop and breathe. This is stressful, but quick, smart actions can cut damage by thousands of dollars and keep mold from taking over. Safety comes first, then stop the flow, then get water out. Follow these steps in order.
        </p>

        {/* Section 1 - Safety First */}
        <div className='mb-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full'>URGENT</span>
            <span className='text-slate-400 text-sm'>Step 1</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-800 mb-6'>Safety First: Do This in the First 1 to 5 Minutes</h2>

          <div className='bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6'>
            <p className='font-bold text-red-800 mb-3'>Do NOT enter the basement if any of these are true:</p>
            <ul className='space-y-2 text-red-700'>
              <li className='flex items-start space-x-2'><span>&#9888;</span><span>Water is deeper than a few inches</span></li>
              <li className='flex items-start space-x-2'><span>&#9888;</span><span>Water is touching electrical outlets, appliances, lights, or the breaker panel</span></li>
              <li className='flex items-start space-x-2'><span>&#9888;</span><span>You smell gas, sewage, or hear buzzing, sparking, or crackling</span></li>
              <li className='flex items-start space-x-2'><span>&#9888;</span><span>Ceiling is sagging, walls are bowing, or anything looks unstable</span></li>
            </ul>
            <p className='font-bold text-red-800 mt-4'>If any apply, evacuate everyone including pets and call 911.</p>
          </div>

          <div className='bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='font-bold text-slate-800 mb-3'>If safe to reach the main electrical panel (not flooded):</h3>
            <ul className='space-y-2 text-slate-600'>
              <li className='flex items-start space-x-2'><span className='text-teal-500'>&#10004;</span><span>Use a flashlight &mdash; never touch switches in the dark or wet</span></li>
              <li className='flex items-start space-x-2'><span className='text-teal-500'>&#10004;</span><span>Flip the breakers that control the basement or the whole-house main breaker if unsure</span></li>
              <li className='flex items-start space-x-2'><span className='text-teal-500'>&#10004;</span><span>If the panel is flooded or unreachable, call your electric utility company immediately</span></li>
            </ul>
          </div>

          <div className='bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg'>
            <p className='text-amber-800 text-sm'><strong>If you must go in briefly:</strong> Wear rubber boots, heavy gloves, eye protection, and a mask. Move slowly. Do not run or splash.</p>
          </div>
        </div>

        {/* Section 2 - Stop the Water Source */}
        <div className='mb-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full'>ACTION</span>
            <span className='text-slate-400 text-sm'>Step 2</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-800 mb-6'>Stop the Water Source: Next 5 to 10 Minutes</h2>
          <p className='text-slate-600 mb-6'>Find where the water is coming from and stop it if possible:</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-xl p-5 shadow-sm'>
              <h4 className='font-bold text-slate-800 mb-2'>Burst Pipe or Plumbing Leak</h4>
              <p className='text-slate-600 text-sm'>Locate your main water shutoff valve (near the water meter, basement utility area, or outside near the street). Turn it clockwise until it stops. For a single fixture leak, shut off the local valve first.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5 shadow-sm'>
              <h4 className='font-bold text-slate-800 mb-2'>Sump Pump Failed</h4>
              <p className='text-slate-600 text-sm'>Check that it is plugged in and the outlet has power (after turning off main power if needed). Try a different outlet or use a backup battery system or generator if available. If it is dead, you need professional help fast.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5 shadow-sm'>
              <h4 className='font-bold text-slate-800 mb-2'>Heavy Rain or Seepage</h4>
              <p className='text-slate-600 text-sm'>You cannot stop it completely during the storm, but from outside: clear leaves or debris from gutters and downspouts. Make sure downspouts direct water away from the foundation.</p>
            </div>
            <div className='bg-red-50 border border-red-200 rounded-xl p-5'>
              <h4 className='font-bold text-red-800 mb-2'>Sewage Backup (Dark/Black Water, Bad Smell)</h4>
              <p className='text-red-700 text-sm'>Do NOT pump or touch anything. Stop using all toilets, sinks, washing machine, and dishwasher. Call professionals immediately &mdash; this is highly contaminated.</p>
            </div>
          </div>

          <div className='bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mt-6'>
            <p className='text-teal-800 text-sm'><strong>Call a 24-hour water damage restoration company now.</strong> Search &ldquo;emergency water damage restoration near me&rdquo; or use services like SERVPRO, PuroClean, or local providers. They usually respond within hours and work directly with insurance.</p>
          </div>
        </div>

        {/* Section 3 - Remove Standing Water */}
        <div className='mb-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full'>ACTION</span>
            <span className='text-slate-400 text-sm'>Step 3</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-800 mb-6'>Get Standing Water Out as Fast as Possible</h2>
          <p className='text-slate-600 mb-6'>Start within the first hour if safe. The quicker water leaves, the less damage happens.</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-xl p-5 shadow-sm'>
              <h4 className='font-bold text-slate-800 mb-2'>Small Puddles or Shallow Water</h4>
              <p className='text-slate-600 text-sm'>Grab buckets, towels, mops, or a wet/dry shop vac. Remove as much as you can and dump it outside far from the foundation.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5 shadow-sm'>
              <h4 className='font-bold text-slate-800 mb-2'>Moderate to Deep Water</h4>
              <p className='text-slate-600 text-sm'>Get a submersible pump (available for emergency pickup at Home Depot, Lowes, or tool rental). Pump water outside through a hose, directing it away from the house.</p>
            </div>
          </div>

          <div className='bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-6'>
            <p className='text-amber-800 text-sm'><strong>Important:</strong> If floodwater is still high outside, pump slowly &mdash; remove about one-third at a time so you do not push basement walls inward or heave the slab from pressure difference.</p>
          </div>

          <div className='bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6'>
            <p className='text-slate-700 text-sm font-semibold'>Take photos and videos now of the water level, damaged items, and affected areas for insurance claims.</p>
          </div>
        </div>

        {/* Section 4 - Quick Salvage */}
        <div className='mb-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full'>ACTION</span>
            <span className='text-slate-400 text-sm'>Step 4</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-800 mb-6'>Quick Salvage While Pumping or Waiting for Help</h2>
          <ul className='space-y-3 text-slate-600'>
            <li className='flex items-start space-x-2'><span className='text-teal-500'>&#10004;</span><span><strong>Move important items to higher ground:</strong> Electronics, family photos, important documents, furniture legs on blocks or bricks if possible</span></li>
            <li className='flex items-start space-x-2'><span className='text-teal-500'>&#10004;</span><span><strong>Pull out wet porous materials quickly:</strong> Cardboard boxes, books, upholstered chairs or sofas, mattresses. Get them upstairs, to the garage, or outside if they can be saved</span></li>
            <li className='flex items-start space-x-2'><span className='text-teal-500'>&#10004;</span><span>Anything soaked through and heavily contaminated usually needs to be thrown away fast to stop mold</span></li>
            <li className='flex items-start space-x-2'><span className='text-teal-500'>&#10004;</span><span>If weather allows and no more rain is coming in, open doors and windows for airflow</span></li>
          </ul>
        </div>

        {/* Calls to Make */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-slate-800 mb-6'>Make These Calls While You Work</h2>
          <div className='space-y-3'>
            <div className='flex items-start space-x-3 bg-white border border-slate-200 rounded-xl p-4'>
              <span className='bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0'>1</span>
              <p className='text-slate-700'><strong>Your homeowners insurance company</strong> &mdash; report the claim immediately, even if after hours (leave a message if needed)</p>
            </div>
            <div className='flex items-start space-x-3 bg-white border border-slate-200 rounded-xl p-4'>
              <span className='bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0'>2</span>
              <p className='text-slate-700'><strong>Electrician</strong> &mdash; if power is off and you need safe restoration</p>
            </div>
            <div className='flex items-start space-x-3 bg-white border border-slate-200 rounded-xl p-4'>
              <span className='bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0'>3</span>
              <p className='text-slate-700'><strong>Plumber</strong> &mdash; if it is a pipe or fixture issue</p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className='bg-slate-900 text-white rounded-2xl p-8 mb-12'>
          <h2 className='text-2xl font-bold mb-4'>One Last Note</h2>
          <p className='text-slate-300 leading-relaxed'>
            Focus only on safety, stopping the source, and removing water right now. Do not worry about cleaning, drying walls, or long-term fixes until the water is gone and the space is safe. Pros will handle the rest. Once the immediate crisis is over, address why it happened so it does not repeat.
          </p>
          <p className='text-teal-400 font-semibold mt-4'>You are doing the right thing by acting quickly. Stay safe, avoid electrical risks, and get help on the way.</p>
        </div>
      </article>

      {/* Related Guides */}
      <section className='max-w-5xl mx-auto px-6 pb-16'>
        <h2 className='text-3xl font-bold text-slate-800 mb-8'>Related Guides</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Link href='/articles/complete-basement-waterproofing-guide' className='group block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-800 group-hover:text-teal-600 transition-colors mb-2'>Complete Basement Waterproofing Guide</h4>
            <p className='text-slate-500 text-sm'>Everything you need to know about keeping your basement dry permanently.</p>
          </Link>
          <Link href='/articles/why-basement-floods-with-sump-pump' className='group block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-800 group-hover:text-teal-600 transition-colors mb-2'>Why Your Basement Floods Even With a Sump Pump</h4>
            <p className='text-slate-500 text-sm'>Common reasons your sump pump is still failing you.</p>
          </Link>
          <Link href='/articles/sump-pump-buying-guide' className='group block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
            <h4 className='font-bold text-slate-800 group-hover:text-teal-600 transition-colors mb-2'>Sump Pump Buying Guide</h4>
            <p className='text-slate-500 text-sm'>Choose the right sump pump to protect your basement from flooding.</p>
          </Link>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='max-w-3xl mx-auto px-6 pb-20'>
        <div className='bg-slate-50 rounded-2xl p-8 text-center'>
          <h2 className='text-2xl font-bold text-slate-800 mb-3'>Get Free Waterproofing Estimates</h2>
          <p className='text-slate-500 mb-6'>Connect with pre-vetted basement waterproofing contractors in your area. Compare quotes and prevent future flooding.</p>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
