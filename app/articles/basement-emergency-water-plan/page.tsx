import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Water in My Basement: Emergency Plan and Recovery Guide 2026 | The Basement Guide',
  description: 'Step-by-step basement water emergency plan covering safety, source shutoff, water removal, salvage, and 24-72 hour recovery. Includes FAQs on insurance, mold timing, and when to call a professional.',
  alternates: { canonical: 'https://thebasement.guide/articles/basement-emergency-water-plan' },
  openGraph: {
    title: 'Water in My Basement: Emergency Plan and Recovery Guide 2026',
    description: 'Step-by-step basement water emergency plan covering safety, source shutoff, water removal, salvage, and 24-72 hour recovery.',
    url: 'https://thebasement.guide/articles/basement-emergency-water-plan',
    siteName: 'The Basement Guide',
    type: 'article',
    images: [{ url: 'https://thebasement.guide/Flooded%20Basement.jpg', width: 1200, height: 630, alt: 'Flooded residential basement with standing water visible on the floor and around stored items, illustrating an active basement water emergency' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Water in My Basement: Emergency Plan and Recovery Guide',
  description: 'Step-by-step basement water emergency plan covering safety, source shutoff, water removal, salvage, and 24-72 hour recovery.',
  image: 'https://thebasement.guide/Flooded%20Basement.jpg',
  datePublished: '2024-09-01',
  dateModified: '2026-04-27',
  author: { '@type': 'Organization', name: 'The Basement Guide Editorial Team', url: 'https://thebasement.guide' },
  publisher: {
    '@type': 'Organization',
    name: 'The Basement Guide',
    url: 'https://thebasement.guide',
    logo: { '@type': 'ImageObject', url: 'https://thebasement.guide/logo.png' },
    parentOrganization: { '@type': 'Organization', name: 'The Home Guide Network', url: 'https://thehome.guide' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://thebasement.guide/articles/basement-emergency-water-plan' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the first thing I should do if I find water in my basement?', acceptedAnswer: { '@type': 'Answer', text: 'The first thing is to assess electrical safety before doing anything else. Do not enter a basement with standing water if water is touching outlets, appliances, lights, or the breaker panel; the entire space could be electrified. Use a flashlight to check the panel from a dry area; if you can safely reach it, flip the breakers controlling the basement or shut off the whole-house main breaker. If the panel is flooded or unreachable, call your electric utility company immediately and ask them to cut power at the meter. Once power is confirmed off, the next priority is identifying and stopping the water source (main water shutoff for plumbing leaks, sump pump check for pump failures). Only after safety and source control should you begin removing water. The "Safety, Source, Removal" sequence is non-negotiable; skipping ahead to water removal in an electrified basement can be fatal.' } },
    { '@type': 'Question', name: 'How long until mold starts growing in a wet basement?', acceptedAnswer: { '@type': 'Answer', text: 'Mold begins growing on porous materials within 24 to 48 hours of water exposure under typical residential conditions. Wet drywall, carpet, upholstered furniture, cardboard, and books are highest-risk because they absorb water deeply and provide cellulose food sources for mold. By 48 to 72 hours, mold is typically visible. By one week, mold colonies have spread and remediation requires professional intervention rather than DIY cleanup. The 24 to 48 hour window is why every hour of the first day matters in basement water emergencies. Aggressive water extraction within the first 6 hours, combined with commercial dehumidifiers and air movers running continuously for 72 hours, can prevent most mold growth. Delays beyond 24 hours typically convert a $1,000 to $4,500 cleanup into a $5,000 to $20,000 mold remediation. The mold timing is also why insurance companies often cover the initial water damage but limit coverage on mold from delayed response.' } },
    { '@type': 'Question', name: 'Will my homeowners insurance cover basement flooding?', acceptedAnswer: { '@type': 'Answer', text: 'Standard homeowners insurance typically covers sudden and accidental water damage from internal sources (burst pipes, washing machine failures, water heater leaks) but does NOT cover flood damage from external sources (heavy rain, river flooding, groundwater seepage, sewer backup). For external flooding, you need separate coverage: a National Flood Insurance Program (NFIP) policy for flood events, and a sewer backup rider for backed-up drains. Standard policies also typically exclude damage from unmaintained equipment (failed sump pump that was not regularly tested) and gradual damage (slow leaks that were not detected). Coverage decisions hinge on the cause of water entry and timing of your claim notification. To maximize coverage: report the claim within 24 to 72 hours, document damage with photos before any cleanup, save receipts for emergency mitigation expenses, and keep damaged items until the adjuster physically inspects them. See our basement flooding insurance guide for full coverage details and claim procedures.' } },
    { '@type': 'Question', name: 'Can I use a regular shop vac to clean up basement flooding?', acceptedAnswer: { '@type': 'Answer', text: 'A wet/dry shop vacuum works for clean water (Category 1 from supply line breaks or rain) up to small puddles totaling 5 to 10 gallons. Most 6-gallon shop vacs extract approximately 5 gallons per minute when dipping properly. For deeper water (over 1 inch covering significant floor area), shop vacs are too slow; rent a submersible pump that moves 25 to 60 gallons per minute. For Category 2 water (gray water from washing machines, dishwashers) and Category 3 water (sewage, contaminated floodwater), do NOT use a shop vac because the motor distributes pathogens and the unit becomes very difficult to decontaminate. Category 2 and 3 cleanup requires professional equipment with proper containment and disposal. The general rule: shop vac for under 5 gallons of clean water, rented submersible pump for moderate clean water, professional restoration for any contaminated water or anything deeper than 6 inches.' } },
    { '@type': 'Question', name: 'What is the difference between Category 1, 2, and 3 water damage?', acceptedAnswer: { '@type': 'Answer', text: 'The Institute of Inspection, Cleaning and Restoration Certification (IICRC) classifies water damage into three categories based on contamination level. Category 1 (clean water) is from sanitary sources like supply lines, faucets, or rainwater; it requires standard drying but no special PPE or disinfection. Category 2 (gray water) is from used sources like washing machines, dishwashers, or aquariums; it contains some contaminants and requires moderate disinfection plus PPE during handling. Category 3 (black water) is from highly contaminated sources like sewage backups, river flooding, or standing water that has sat for over 48 hours; it contains pathogens including E. coli, hepatitis A, and other dangerous organisms requiring professional remediation with full PPE, EPA-registered disinfectants, and disposal of all soft materials. The category determines both the cleanup method and the materials that can be saved. Category 1 water often allows drying carpet and upholstery; Category 3 water requires discarding all soft materials regardless of how thoroughly they appear cleaned.' } },
    { '@type': 'Question', name: 'Should I pump water out of my basement if it is still flooding outside?', acceptedAnswer: { '@type': 'Answer', text: 'Pump slowly if floodwater is still high outside the foundation. Remove approximately one-third of the water at a time, then wait 4 to 6 hours before continuing. The reasoning is hydrostatic pressure. Removing all interior water while water is still pressing on the outside of the foundation walls can push the walls inward (causing bowing or cracking) or even cause the slab to heave. This is one of the most expensive mistakes in flood response, easily causing $10,000 to $30,000 in foundation damage. The technical reason is that water inside the basement counterbalances some of the pressure from saturated soil outside; remove the interior water too fast and the unbalanced pressure damages the structure. When the storm has passed and outside soil is draining (typically 24 to 48 hours), full extraction becomes safe. If you are unsure about the timing, call a professional restoration company before fully draining; their expertise on this specific decision often pays for itself in avoided foundation repair.' } },
    { '@type': 'Question', name: 'How fast does professional water damage restoration arrive?', acceptedAnswer: { '@type': 'Answer', text: 'National restoration companies (SERVPRO, PuroClean, Servicemaster) typically respond within 1 to 4 hours for emergency calls; many advertise 60-minute response times in major metropolitan areas. Local independent restoration companies often respond faster (30 minutes to 2 hours) but may have less crew capacity for severe events. During major regional flood events (large storms, hurricanes), response times stretch to 6 to 24 hours because demand exceeds capacity; this is why having an emergency contact list pre-identified before a flood matters. To minimize wait time during an emergency: call multiple companies simultaneously, ask each for an honest ETA before committing, verify licensing and insurance over the phone before they arrive, and have someone at the property to grant access when they arrive. Most reputable companies will provide their license number and proof of insurance immediately on request; companies that hesitate or refuse this information should be skipped.' } },
    { '@type': 'Question', name: 'What should I do if the basement floods at night?', acceptedAnswer: { '@type': 'Answer', text: 'A nighttime basement flood follows the same Safety-Source-Removal sequence as a daytime flood, but with additional considerations. Most homeowners insurance hotlines operate 24 hours; report the claim immediately even if the office is closed (leave a detailed message with your callback number). Most water damage restoration companies operate 24 hours but may have reduced overnight crew capacity; expect slower response between 11 PM and 6 AM. Use battery-powered flashlights and lanterns rather than relying on overhead lights, which may be unsafe to switch on in flooded conditions. Do NOT plug in submersible pumps to outlets in or near the wet area; use extension cords from upstairs outlets routed safely. Take photos with your phone (timestamps in metadata are valuable for insurance). If the basement is unsafe to enter, monitor water levels by looking down the basement stairs and call professionals for arrival at first light if not before. The primary risk of nighttime floods is reduced visibility leading to safety mistakes; act with extra caution and prioritize safety assessment over speed of response.' } },
  ],
}

export default function BasementEmergencyWaterPlan() {
  return (
    <div className='bg-white min-h-screen'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className='max-w-4xl mx-auto px-4 py-12 md:py-16'>

        {/* Title & metadata */}
        <div className='mb-8'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Emergency Guide</span>
            <span className='text-slate-500 text-sm'>Updated April 2026 &middot; 12 min read</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4'>
            Water in My Basement: Emergency Plan and Recovery Guide
          </h1>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-slate-900 font-semibold text-sm'>The Basement Guide Editorial Team</p>
              <p className='text-slate-500 text-xs'>Category: Article</p>
            </div>
          </div>
        </div>

        {/* Inline Hero Image */}
        <div className='mb-10 rounded-xl overflow-hidden shadow-sm border border-slate-200'>
          <div className='relative w-full' style={{ aspectRatio: '16/9' }}>
            <Image
              src='/Flooded%20Basement.jpg'
              alt='Flooded residential basement with standing water visible on the floor and around stored items, illustrating an active basement water emergency'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>

        {/* TL;DR */}
        <div className='bg-teal-50 border border-teal-200 rounded-xl p-6 mb-10'>
          <h2 className='text-xl font-bold text-slate-900 mb-3'>TL;DR</h2>
          <p className='text-slate-700 leading-relaxed'>
            If water is coming into your basement right now, the order of operations is non-negotiable: safety first, stop the source second, remove water third. Do not enter a basement with water deeper than a few inches if water is touching electrical outlets or the breaker panel. Shut off the main electrical breaker and the main water shutoff valve before anything else. Pump water out within the first hour to prevent mold (which can begin growing within 24 to 48 hours). Take photos before moving anything for insurance claims. Most basement water emergencies cost $1,000 to $4,500 in restoration if handled within 24 hours; delayed response often pushes costs to $5,000 to $25,000 due to mold and structural damage. Call a 24-hour water damage restoration company for moderate to severe flooding.
          </p>
        </div>

        {/* The Safety-Source-Removal Rule */}
        <div className='bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10'>
          <p className='text-amber-700 font-bold text-xs tracking-[0.2em] uppercase mb-2'>Decision Rule</p>
          <h2 className='text-2xl font-bold text-slate-900 mb-3'>The Safety-Source-Removal Rule</h2>
          <p className='text-slate-700 leading-relaxed'>
            Every basement water emergency follows the same hierarchy: safety first, stop the source second, remove water third. Do not skip ahead. Pumping water out of an electrified basement can kill you. Removing water before stopping the source means you will be pumping the same water repeatedly. Touching contaminated sewage backup without protective equipment exposes you to E. coli, hepatitis A, and other pathogens. The Safety-Source-Removal sequence is not bureaucratic process; it is the order in which mistakes hurt you. Follow it even when adrenaline is telling you to skip ahead.
          </p>
        </div>

        {/* Step 1: Safety First */}
        <section className='mb-16'>
          <div className='flex items-center space-x-2 mb-3'>
            <span className='bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Urgent &middot; Step 1</span>
            <span className='text-slate-500 text-sm font-medium'>First 1 to 5 Minutes</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Safety First</h2>
          <p className='text-slate-700 leading-relaxed mb-5'>Stop and breathe. Active basement water is stressful, but quick smart actions save thousands in damage and keep mold from taking hold. Before doing anything else, assess whether the basement is safe to enter.</p>

          <div className='bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg mb-6'>
            <p className='text-red-900 font-bold mb-3'>Do NOT enter the basement if any of these are true:</p>
            <ul className='space-y-2 list-disc pl-6 text-slate-800'>
              <li>Water is deeper than a few inches</li>
              <li>Water is touching electrical outlets, appliances, lights, or the breaker panel</li>
              <li>You smell gas, sewage, or hear buzzing, sparking, or crackling</li>
              <li>The ceiling is sagging, walls are bowing, or anything looks structurally unstable</li>
              <li>Water has a dark color or strong odor (likely sewage backup)</li>
            </ul>
            <p className='text-slate-800 mt-3'>If any of these conditions apply, evacuate everyone (including pets) and call 911. Do not assume the situation will improve on its own.</p>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>If safe to reach the main electrical panel:</h3>
          <ol className='space-y-2 list-decimal pl-6 text-slate-700 leading-relaxed mb-6'>
            <li>Use a flashlight rather than overhead lights or switches; never touch any switch in the dark or in wet conditions</li>
            <li>Flip off the breakers controlling the basement, or shut off the whole-house main breaker if you are unsure which breakers control which circuits</li>
            <li>If the panel is flooded or unreachable, call your electric utility company immediately and ask them to cut power at the meter</li>
          </ol>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>If you must enter briefly:</h3>
          <ul className='space-y-2 list-disc pl-6 text-slate-700 leading-relaxed mb-6'>
            <li>Wear rubber boots, heavy gloves, eye protection, and an N95 or KN95 mask</li>
            <li>Move slowly. Do not run or splash water that may be electrified or contaminated</li>
            <li>Have someone else on standby in case of emergency</li>
            <li>Do not touch any metal pipes, appliances, or electrical fixtures even if power is off (capacitors can hold charge)</li>
          </ul>

          <p className='text-slate-700 leading-relaxed'>The safety phase is the most overlooked step in basement water emergencies because it produces no visible result. But every year, dozens of homeowners die from electrocution while trying to save belongings from flooded basements. The 5 minutes spent on safety assessment is the single most important 5 minutes of the entire emergency response.</p>
        </section>

        {/* Step 2: Stop the Source */}
        <section className='mb-16'>
          <div className='flex items-center space-x-2 mb-3'>
            <span className='bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Action &middot; Step 2</span>
            <span className='text-slate-500 text-sm font-medium'>Next 5 to 10 Minutes</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Stop the Water Source</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>Once the basement is safe to enter (or you have confirmed it is not safe and called for help), identify and stop the source of incoming water. The fastest way to limit damage is to stop adding to the problem.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Burst Pipe or Plumbing Leak</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Locate your main water shutoff valve. It is typically near the water meter, in the basement utility area, or outside near the street. Turn it clockwise until it stops. For a single fixture leak (like a washing machine hose or toilet supply line), shut off the local valve under that fixture first. If the local valve fails or you cannot find it, shut off the main.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Sump Pump Failed</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Verify the pump is plugged in and the outlet has power (after your main electrical safety check). Common failure modes include a tripped GFCI outlet, blown fuse, stuck float switch, or motor burnout. Try a different outlet if the original is wet or non-functional. Use a battery backup pump or a portable pump connected to a generator if available. If the primary pump is dead and you have no backup, you need professional help immediately because water will continue rising. See our <Link href='/articles/why-basement-floods-with-sump-pump' className='text-teal-700 underline hover:text-teal-900'>why basement floods even with sump pump guide</Link> for diagnosis after the emergency.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Heavy Rain or Groundwater Seepage</h3>
          <p className='text-slate-700 leading-relaxed mb-3'>You cannot fully stop groundwater intrusion during an active storm, but you can reduce inflow:</p>
          <ul className='space-y-2 list-disc pl-6 text-slate-700 leading-relaxed mb-6'>
            <li>Clear leaves or debris from gutters and downspouts (from outside, not from a flooded basement)</li>
            <li>Make sure downspouts direct water at least 6 feet from the foundation</li>
            <li>Place sandbags or flood barriers at known entry points if available</li>
            <li>Place towels or absorbent material at floor-wall junctions where water is entering</li>
          </ul>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Sewage Backup (Dark or Black Water with Strong Odor)</h3>
          <div className='bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg mb-6'>
            <p className='text-slate-800 leading-relaxed'><strong className='text-red-900'>Stop. Do not pump, do not touch anything, do not enter.</strong> Sewage backup contains pathogens including E. coli, hepatitis A, salmonella, and dozens of other dangerous organisms. Stop using all toilets, sinks, washing machine, and dishwasher in the entire house. Call a professional restoration company immediately and tell them you have a Category 3 (black water) emergency. The IICRC classifies sewage as the highest contamination category, and DIY cleanup is not safe at this level.</p>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>When to Call Professional Restoration Now</h3>
          <p className='text-slate-700 leading-relaxed mb-3'>Call a 24-hour water damage restoration company immediately if:</p>
          <ul className='space-y-2 list-disc pl-6 text-slate-700 leading-relaxed mb-4'>
            <li>Water is deeper than 6 inches anywhere in the basement</li>
            <li>Sewage backup or contaminated water is present</li>
            <li>The water source cannot be stopped or identified</li>
            <li>The basement contains finished living space, finished walls, or carpet</li>
            <li>You have any electrical safety concerns</li>
          </ul>
          <p className='text-slate-700 leading-relaxed'>Search &quot;emergency water damage restoration near me&quot; for local providers. National companies like SERVPRO and PuroClean typically respond within 1 to 4 hours and work directly with most homeowner insurance policies. Local restoration companies often respond faster but verify licensing and insurance before committing.</p>
        </section>

        {/* Step 3: Remove Standing Water */}
        <section className='mb-16'>
          <div className='flex items-center space-x-2 mb-3'>
            <span className='bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Action &middot; Step 3</span>
            <span className='text-slate-500 text-sm font-medium'>First Hour and Beyond</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Get Standing Water Out</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>Start pumping or extracting water within the first hour if it is safe to enter. Mold begins growing within 24 to 48 hours of water exposure on porous materials, and every hour of delay extends the mold risk window.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Small Puddles or Shallow Water (Under 1 Inch)</h3>
          <p className='text-slate-700 leading-relaxed mb-5'>Use buckets, towels, mops, and a wet/dry shop vacuum. Empty water outside, away from the foundation (not into floor drains, which may be backed up). A 6-gallon shop vac extracts roughly 5 gallons per minute when dipping properly. For a 200 square foot basement with shallow water, expect 1 to 2 hours of manual extraction.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Moderate Water (1 to 6 Inches)</h3>
          <p className='text-slate-700 leading-relaxed mb-5'>Get a submersible pump from Home Depot, Lowes, or a tool rental company. Most models pump 25 to 60 gallons per minute and rent for $30 to $80 per day. Connect a discharge hose and route water at least 20 feet from the foundation, ideally to a storm drain or sloped ground area.</p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Deep Water (Over 6 Inches)</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>Call professional water damage restoration. Their truck-mounted extractors pump 100 to 300 gallons per minute and can clear a flooded basement in hours rather than days. The cost ($800 to $3,500 typically) is far less than the mold and structural damage from delayed extraction.</p>

          <div className='bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-6'>
            <p className='text-amber-700 font-bold text-xs tracking-[0.2em] uppercase mb-2'>Critical</p>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>Pump Slowly If Floodwater Is Outside</h3>
            <p className='text-slate-700 leading-relaxed'>If floodwater is still high outside the foundation, pump slowly. Remove approximately one-third of the water at a time, then wait 4 to 6 hours before continuing. The reasoning is hydrostatic pressure: removing all the water from inside while water is still pressing on the outside of the foundation can push basement walls inward or even cause the slab to heave. This is one of the most expensive mistakes in flood response, easily causing $10,000 to $30,000 in foundation damage. When in doubt, ask a professional restoration company before fully draining.</p>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Document Everything Before Moving Items</h3>
          <p className='text-slate-700 leading-relaxed mb-3'>Take photos and videos before you move anything. Capture:</p>
          <ul className='space-y-2 list-disc pl-6 text-slate-700 leading-relaxed mb-4'>
            <li>Water depth at multiple locations (place a ruler against the wall for scale)</li>
            <li>All damaged items in their current location</li>
            <li>The water source if visible</li>
            <li>Damaged walls, flooring, and contents</li>
            <li>Your basement utility area, water heater, HVAC equipment</li>
          </ul>
          <p className='text-slate-700 leading-relaxed'>Insurance claims require evidence of damage extent and cause. Photos taken before cleanup are the single most important documentation for a successful claim. Email or text the photos to yourself immediately so they are time-stamped and backed up. See our <Link href='/articles/basement-flooding-insurance' className='text-teal-700 underline hover:text-teal-900'>basement flooding insurance guide</Link> for full claim documentation guidance.</p>
        </section>

        {/* Step 4: Quick Salvage */}
        <section className='mb-16'>
          <div className='flex items-center space-x-2 mb-3'>
            <span className='bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Action &middot; Step 4</span>
            <span className='text-slate-500 text-sm font-medium'>While Pumping or Waiting</span>
          </div>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Quick Salvage While Pumping or Waiting for Help</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>While water removal is in progress, prioritize salvage of items that will be ruined within hours:</p>

          <div className='border border-slate-200 rounded-lg p-5 mb-4'>
            <p className='text-slate-900 font-bold mb-3'>Move to higher ground immediately:</p>
            <ul className='space-y-1 list-disc pl-6 text-slate-700 leading-relaxed'>
              <li>Electronics, computers, gaming systems</li>
              <li>Family photos, photo albums, important documents</li>
              <li>Furniture (place legs on blocks or bricks if you cannot move the furniture itself)</li>
              <li>Artwork, paper records, books</li>
            </ul>
          </div>

          <div className='border border-slate-200 rounded-lg p-5 mb-4'>
            <p className='text-slate-900 font-bold mb-3'>Pull out wet porous materials quickly:</p>
            <ul className='space-y-1 list-disc pl-6 text-slate-700 leading-relaxed'>
              <li>Cardboard boxes (will collapse and contaminate everything)</li>
              <li>Books, paper records, magazines</li>
              <li>Upholstered chairs and sofas (mold begins in fabric within 24 hours)</li>
              <li>Mattresses, bedding, soft furniture</li>
              <li>Anything made of particle board (collapses when wet)</li>
            </ul>
          </div>

          <div className='border border-slate-200 rounded-lg p-5 mb-4'>
            <p className='text-slate-900 font-bold mb-3'>Throw away if heavily contaminated:</p>
            <ul className='space-y-1 list-disc pl-6 text-slate-700 leading-relaxed'>
              <li>Items soaked through with sewage water (Category 3) cannot be safely cleaned</li>
              <li>Insulation that has gotten wet (replace, do not dry)</li>
              <li>Drywall below the water line (cut and remove the wet portion)</li>
            </ul>
          </div>

          <div className='border border-slate-200 rounded-lg p-5 mb-4'>
            <p className='text-slate-900 font-bold mb-3'>Increase airflow if weather permits:</p>
            <ul className='space-y-1 list-disc pl-6 text-slate-700 leading-relaxed'>
              <li>Open doors and windows if no rain is incoming</li>
              <li>Run any fans you have on dry parts of the basement</li>
              <li>Avoid HVAC use until you confirm equipment is dry and safe</li>
            </ul>
          </div>
        </section>

        {/* Make These Calls */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-5'>Make These Calls While You Work</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>In order of priority:</p>
          <ol className='space-y-3 list-decimal pl-6 text-slate-700 leading-relaxed'>
            <li><strong className='text-slate-900'>911 if anyone is in danger.</strong> Do not assume an electrical or structural risk will resolve.</li>
            <li><strong className='text-slate-900'>Your homeowners insurance company.</strong> Report the claim immediately, even if it is after hours. Most insurance companies have 24-hour claims hotlines. Get a claim number and the adjuster contact information.</li>
            <li><strong className='text-slate-900'>24-hour water damage restoration company.</strong> SERVPRO, PuroClean, or local providers. Most respond within 1 to 4 hours.</li>
            <li><strong className='text-slate-900'>Electrician.</strong> If the panel was flooded or you needed to cut power, hire an electrician to inspect and certify the system safe before restoring power.</li>
            <li><strong className='text-slate-900'>Plumber.</strong> If a pipe or fixture caused the leak.</li>
            <li><strong className='text-slate-900'>Foundation contractor.</strong> If walls bowed, cracked, or shifted during the event. Schedule an inspection within 1 to 2 weeks.</li>
          </ol>
        </section>

        {/* Common Mistakes */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-5'>Common Mistakes During Basement Water Emergencies</h2>
          <div className='space-y-4'>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Skipping the safety check to save belongings.</strong> Several homeowners die each year from electrocution in flooded basements. No belonging is worth your life.</p></div>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Pumping water too fast when the ground outside is saturated.</strong> This is the most expensive technical mistake. Slow extraction protects the foundation; rapid extraction can cause structural damage costing more than the original flood.</p></div>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Using a wet vac on sewage water.</strong> Category 3 contaminated water requires professional equipment and PPE. Wet vacs distribute pathogens through their motors and are very difficult to decontaminate afterward.</p></div>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Not documenting damage before cleanup.</strong> Insurance adjusters need photographic evidence of pre-cleanup conditions. Items moved or thrown away without documentation often produce reduced or denied claims.</p></div>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Throwing away items without listing them for insurance.</strong> Make a written inventory of everything destroyed, with approximate replacement values, before disposal. Even fast-moving recovery should pause for documentation.</p></div>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Trying to dry contaminated water with fans and dehumidifiers without remediation.</strong> Sewage and floodwater require professional disinfection before drying. Skipping the disinfection phase guarantees mold within days.</p></div>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Restoring electrical power before professional inspection.</strong> Even if the panel was not visibly flooded, moisture can cause arcing and fires hours or days later. Always have an electrician verify the system before restoring power.</p></div>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Waiting to call insurance until you &quot;know the full damage.&quot;</strong> Most policies have notification requirements (often 24 to 72 hours) and delayed reporting can reduce or void coverage. Call immediately even if you cannot quantify the damage yet.</p></div>
            <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg'><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Hiring the first restoration company that returns your call.</strong> In emergencies it is tempting to accept any help. Verify the company is licensed, bonded, and insured before signing anything. Reputable companies will provide their license number and proof of insurance immediately.</p></div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-5'>Cost Breakdown by Severity</h2>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='px-4 py-3 text-left font-bold'>Severity</th>
                  <th className='px-4 py-3 text-left font-bold'>Typical Cost</th>
                  <th className='px-4 py-3 text-left font-bold'>Insurance Coverage</th>
                  <th className='px-4 py-3 text-left font-bold'>Recovery Time</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'><td className='px-4 py-3 text-slate-700'>Minor (under 1 inch, clean water)</td><td className='px-4 py-3 text-slate-700'>$200 to $1,000 (DIY)</td><td className='px-4 py-3 text-slate-700'>Often covered</td><td className='px-4 py-3 text-slate-700'>1 to 3 days</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 text-slate-700'>Moderate (1 to 6 inches, clean water)</td><td className='px-4 py-3 text-slate-700'>$1,000 to $4,500</td><td className='px-4 py-3 text-slate-700'>Usually covered</td><td className='px-4 py-3 text-slate-700'>3 to 7 days</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 text-slate-700'>Severe (6+ inches, clean water)</td><td className='px-4 py-3 text-slate-700'>$4,500 to $15,000</td><td className='px-4 py-3 text-slate-700'>Usually covered</td><td className='px-4 py-3 text-slate-700'>1 to 3 weeks</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 text-slate-700'>Sewage backup (any depth)</td><td className='px-4 py-3 text-slate-700'>$3,000 to $15,000</td><td className='px-4 py-3 text-slate-700'>Sometimes covered (sewer backup rider)</td><td className='px-4 py-3 text-slate-700'>2 to 4 weeks</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 text-slate-700'>Foundation damage from improper extraction</td><td className='px-4 py-3 text-slate-700'>$10,000 to $30,000</td><td className='px-4 py-3 text-slate-700'>Often denied (homeowner error)</td><td className='px-4 py-3 text-slate-700'>4 to 12 weeks</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 text-slate-700'>Mold remediation (post-emergency)</td><td className='px-4 py-3 text-slate-700'>$1,500 to $20,000</td><td className='px-4 py-3 text-slate-700'>Limited coverage typically</td><td className='px-4 py-3 text-slate-700'>2 to 6 weeks</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4'>The financial difference between same-day response ($1,000 to $4,500 typical) and delayed response (often $5,000 to $25,000+ once mold and structural damage compound) explains why every hour of the first 24 hours matters. Insurance often covers the immediate water damage but limits or excludes mold caused by delayed response, which means slow action can leave you paying out-of-pocket for the secondary damage.</p>
          <p className='text-slate-700 leading-relaxed'>For full cost details, see our <Link href='/articles/problems/basement-flooding-cleanup' className='text-teal-700 underline hover:text-teal-900'>basement flooding cleanup guide</Link>, <Link href='/articles/mold-remediation-cost' className='text-teal-700 underline hover:text-teal-900'>mold remediation cost guide</Link>, and <Link href='/articles/basement-flooding-insurance' className='text-teal-700 underline hover:text-teal-900'>basement flooding insurance guide</Link>.</p>
        </section>

        {/* After the Emergency */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-5'>After the Emergency: 24 to 72 Hours</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>Once standing water is removed, the recovery phase begins. The first 72 hours after extraction determine whether you face $1,000 in cleanup or $20,000 in mold remediation.</p>

          <div className='border border-slate-200 rounded-xl p-6 mb-5'>
            <div className='flex items-center space-x-2 mb-3'>
              <span className='bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Hours 0 to 24</span>
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>Drying Setup</h3>
            <ul className='space-y-2 list-disc pl-6 text-slate-700 leading-relaxed mb-3'>
              <li>Set up commercial-grade dehumidifiers (40 to 70 pints per day capacity for most basements)</li>
              <li>Run high-volume air movers (axial fans) directing air across wet surfaces</li>
              <li>Keep the basement closed off from the rest of the house to prevent moisture migration upstairs</li>
              <li>If the weather is cold and dry, opening windows can help; if humid outside, keep windows closed and rely on dehumidifiers</li>
            </ul>
            <p className='text-slate-700 leading-relaxed'>For drying equipment recommendations, see our <Link href='/articles/best-basement-dehumidifiers' className='text-teal-700 underline hover:text-teal-900'>best basement dehumidifiers review</Link> and <Link href='/articles/how-to-dry-out-basement-after-flooding' className='text-teal-700 underline hover:text-teal-900'>how to dry out basement after flooding guide</Link>.</p>
          </div>

          <div className='border border-slate-200 rounded-xl p-6 mb-5'>
            <div className='flex items-center space-x-2 mb-3'>
              <span className='bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Hours 24 to 48</span>
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>Material Decisions</h3>
            <p className='text-slate-700 leading-relaxed mb-3'>By 24 hours, you have to make hard decisions about what is salvageable:</p>
            <ul className='space-y-2 list-disc pl-6 text-slate-700 leading-relaxed'>
              <li><strong className='text-slate-900'>Carpet and pad:</strong> Almost always discard if soaked. Drying carpet rarely succeeds and mold grows underneath.</li>
              <li><strong className='text-slate-900'>Drywall:</strong> Cut out at least 12 inches above the water line. Drywall wicks moisture upward.</li>
              <li><strong className='text-slate-900'>Insulation:</strong> Replace any insulation that got wet. Cellulose and fiberglass cannot be effectively dried.</li>
              <li><strong className='text-slate-900'>Wood framing:</strong> Can usually be saved if dried within 48 hours. Use moisture meters to verify dryness before closing walls.</li>
              <li><strong className='text-slate-900'>Concrete:</strong> Will dry but takes weeks. Continue dehumidification until moisture readings normalize.</li>
              <li><strong className='text-slate-900'>Personal items:</strong> Sort into clean (rinse and dry), sanitize (wash with bleach solution), and discard piles.</li>
            </ul>
          </div>

          <div className='border border-slate-200 rounded-xl p-6 mb-5'>
            <div className='flex items-center space-x-2 mb-3'>
              <span className='bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Hours 48 to 72</span>
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>Mold Prevention</h3>
            <p className='text-slate-700 leading-relaxed mb-3'>Mold becomes visible at 48 to 72 hours of moisture exposure. To prevent it:</p>
            <ul className='space-y-2 list-disc pl-6 text-slate-700 leading-relaxed'>
              <li>Continue running dehumidifiers and air movers</li>
              <li>Apply EPA-registered antimicrobial treatment to remaining surfaces</li>
              <li>Maintain humidity below 50% RH (see our <Link href='/articles/basement-humidity-guide' className='text-teal-700 underline hover:text-teal-900'>basement humidity guide</Link> for measurement)</li>
              <li>Inspect all wet areas daily for early mold signs (musty smell, dark spots, fuzzy growth)</li>
              <li>Document moisture levels with a hygrometer to prove proper drying for insurance</li>
            </ul>
          </div>

          <div className='border border-slate-200 rounded-xl p-6 mb-5'>
            <div className='flex items-center space-x-2 mb-3'>
              <span className='bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>Day 4 to Week 3</span>
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>Restoration</h3>
            <p className='text-slate-700 leading-relaxed mb-3'>Full restoration timelines depend on damage severity:</p>
            <ul className='space-y-2 list-disc pl-6 text-slate-700 leading-relaxed mb-3'>
              <li>Minor events: complete in 1 week including dry-out, sanitation, and material replacement</li>
              <li>Moderate events: 2 to 3 weeks for full restoration including drywall replacement and any flooring</li>
              <li>Severe events: 4 to 8 weeks for full restoration with potential structural repair</li>
            </ul>
            <p className='text-slate-700 leading-relaxed'>Throughout the restoration phase, document every contractor visit, every receipt, and every conversation with insurance. Keep all damaged items in a designated location (garage, driveway, or storage shed) until the insurance adjuster has personally seen them.</p>
          </div>
        </section>

        {/* When to Call a Professional */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-5'>When to Call a Professional</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>For active basement water emergencies, professional intervention is essential rather than optional in these scenarios:</p>
          <div className='space-y-4 mb-6'>
            <div><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Any electrical safety concern.</strong> Flooded outlets, panel exposure, or any sparking or buzzing. Call your electric utility first, then a licensed electrician.</p></div>
            <div><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Sewage backup.</strong> Category 3 contamination requires professional remediation with proper PPE and EPA-registered disinfectants.</p></div>
            <div><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Water deeper than 6 inches.</strong> Truck-mounted extraction is dramatically faster than DIY equipment and prevents the secondary mold damage from prolonged exposure.</p></div>
            <div><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Structural concerns.</strong> Bowing walls, ceiling sagging, or visible cracks during or after a flood event. Foundation contractors should inspect within 1 to 2 weeks.</p></div>
            <div><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Finished basements with significant water exposure.</strong> Drywall, flooring, and insulation removal in finished spaces is professional work; DIY attempts often miss hidden moisture pockets that grow mold.</p></div>
            <div><p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Any insurance claim above $5,000 in expected damage.</strong> Restoration companies work directly with insurance and document properly. Homeowner-led recoveries on large claims often face denial or reduction due to documentation gaps.</p></div>
          </div>

          <div className='bg-teal-50 border border-teal-200 rounded-xl p-6'>
            <p className='text-slate-900 font-bold text-lg mb-2'>Need a basement water emergency professional?</p>
            <p className='text-slate-700 leading-relaxed mb-4'>Water damage compounds by the hour. Licensed restoration professionals respond 24/7, work directly with insurance, and have the equipment to extract and dry far faster than homeowner-grade tools.</p>
            <a href='/#get-quotes' className='inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition-colors'>Get free quotes from licensed water damage specialists near you &rarr;</a>
          </div>
        </section>

        {/* Authoritative Resources */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-5'>Authoritative Resources</h2>
          <div className='bg-slate-50 border border-slate-200 rounded-xl p-6'>
            <p className='text-slate-700 leading-relaxed mb-4'>For additional emergency guidance from federal sources:</p>
            <ul className='space-y-3 list-disc pl-6 text-slate-700 leading-relaxed mb-4'>
              <li>The <a href='https://www.ready.gov/floods' target='_blank' rel='noopener' className='text-teal-700 underline hover:text-teal-900 font-semibold'>FEMA flooding safety guidance</a> covers comprehensive flood preparedness, response, and recovery for residential properties.</li>
              <li>The <a href='https://www.epa.gov/mold/mold-cleanup-your-home' target='_blank' rel='noopener' className='text-teal-700 underline hover:text-teal-900 font-semibold'>EPA&apos;s mold cleanup guidance</a> covers the science of mold prevention and remediation following water damage.</li>
            </ul>
            <p className='text-slate-700 leading-relaxed'>These resources complement the residential-focused emergency steps in this article and are worth bookmarking for future reference even after the immediate emergency passes.</p>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/complete-basement-waterproofing-guide' className='text-teal-700 underline hover:text-teal-900 font-semibold'>Complete Basement Waterproofing Guide</Link><p className='text-slate-600 text-sm mt-1'>Long-term waterproofing strategies after the emergency passes.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/why-basement-floods-with-sump-pump' className='text-teal-700 underline hover:text-teal-900 font-semibold'>Why Your Basement Floods Even With a Sump Pump</Link><p className='text-slate-600 text-sm mt-1'>Diagnose pump failures so the next storm does not become the next emergency.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/sump-pump-buying-guide' className='text-teal-700 underline hover:text-teal-900 font-semibold'>Sump Pump Buying Guide</Link><p className='text-slate-600 text-sm mt-1'>Selection and sizing for primary, backup, and battery sump pumps.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/how-to-dry-out-basement-after-flooding' className='text-teal-700 underline hover:text-teal-900 font-semibold'>How to Dry Out Basement After Flooding</Link><p className='text-slate-600 text-sm mt-1'>The 72-hour dry-out protocol that prevents most post-flood mold.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/problems/basement-flooding-cleanup' className='text-teal-700 underline hover:text-teal-900 font-semibold'>Basement Flooding Cleanup</Link><p className='text-slate-600 text-sm mt-1'>Step-by-step cleanup procedures for clean and contaminated water events.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/basement-flooding-insurance' className='text-teal-700 underline hover:text-teal-900 font-semibold'>Basement Flooding Insurance Guide</Link><p className='text-slate-600 text-sm mt-1'>Coverage rules, NFIP, sewer backup riders, and claim documentation.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/mold-remediation-cost' className='text-teal-700 underline hover:text-teal-900 font-semibold'>Mold Remediation Cost</Link><p className='text-slate-600 text-sm mt-1'>What professional mold remediation costs and when DIY is appropriate.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/basement-humidity-guide' className='text-teal-700 underline hover:text-teal-900 font-semibold'>Basement Humidity Guide</Link><p className='text-slate-600 text-sm mt-1'>Post-emergency humidity targets, hygrometers, and mold prevention.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/how-to-prevent-basement-mold' className='text-teal-700 underline hover:text-teal-900 font-semibold'>How to Prevent Basement Mold</Link><p className='text-slate-600 text-sm mt-1'>The layered moisture management system that keeps mold from establishing.</p></div>
            <div className='bg-white rounded-lg p-5 border border-slate-200 shadow-sm'><Link href='/articles/best-basement-dehumidifiers' className='text-teal-700 underline hover:text-teal-900 font-semibold'>Best Basement Dehumidifiers</Link><p className='text-slate-600 text-sm mt-1'>Top-rated dehumidifiers for the post-emergency drying phase.</p></div>
          </div>
        </section>

        {/* FAQ */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-8'>
            {faqSchema.mainEntity.map((faq: any, index: number) => (
              <div key={index}>
                <h3 className='text-xl font-semibold text-slate-900 mb-3'>{faq.name}</h3>
                <p className='text-slate-700 leading-relaxed'>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Category 1, 2, 3 Water (IICRC Classification)</h3>
              <p className='text-slate-700 leading-relaxed'>The Institute of Inspection, Cleaning and Restoration Certification classifies water damage by contamination level to determine cleanup procedures. Category 1 (clean water) comes from sanitary sources like supply lines and rainwater; standard drying and minimal PPE required. Category 2 (gray water) comes from used sources like washing machines or dishwashers; moderate disinfection and PPE required. Category 3 (black water) is highly contaminated water from sewage backups, river flooding, or standing water more than 48 hours old; requires professional remediation with full PPE and disposal of all porous materials. The classification determines both safe cleanup methods and what can be salvaged. A Category 1 event allows drying carpet and upholstery; a Category 3 event requires discarding all soft materials regardless of cleaning attempts. Insurance coverage and remediation costs vary significantly by category, with Category 3 cleanup typically costing 3 to 5 times more than equivalent Category 1 events.</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Hydrostatic pressure</h3>
              <p className='text-slate-700 leading-relaxed'>Hydrostatic pressure is the force exerted by water against a surface, increasing with depth. In basement flooding contexts, hydrostatic pressure refers specifically to water in saturated soil pressing against the outside of foundation walls. During a flood event, water inside the basement counterbalances some of the external pressure; rapid extraction of interior water without similar drainage outside can cause foundation walls to bow inward or the floor slab to heave upward as unbalanced pressure damages the structure. The practical guidance is to extract water in stages (approximately one-third at a time, with 4 to 6 hours between stages) when external soil is still saturated. Foundation damage from improper extraction often costs $10,000 to $30,000 to repair, often more than the original water damage. Hydrostatic pressure is also a major cause of basement water entry through foundation cracks during heavy rain, regardless of the building&apos;s age or construction.</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Sump pump</h3>
              <p className='text-slate-700 leading-relaxed'>A sump pump is an electric pump installed in a pit (sump basin) at the lowest point of a basement floor, designed to automatically remove groundwater that collects in the pit before it can rise into the basement. Sump pumps activate via float switches when water reaches a set level and pump water through a discharge pipe to the exterior of the home, away from the foundation. During a basement water emergency, sump pump failure is a common cause of flooding; check that the pump is plugged in, the GFCI outlet has not tripped, and the float switch is moving freely before assuming the pump is dead. Battery backup sump pumps continue operating during power outages, which is critical because storm-related power outages often coincide with the heaviest rain events. See our <Link href='/articles/sump-pump-buying-guide' className='text-teal-700 underline hover:text-teal-900'>sump pump buying guide</Link> for selection guidance and our <Link href='/articles/why-basement-floods-with-sump-pump' className='text-teal-700 underline hover:text-teal-900'>why basement floods even with sump pump article</Link> for failure mode diagnosis.</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Restoration company (water damage)</h3>
              <p className='text-slate-700 leading-relaxed'>A water damage restoration company provides emergency response services for residential and commercial flooding events, including water extraction, structural drying, antimicrobial treatment, content cleanup, and rebuild coordination. National companies (SERVPRO, PuroClean, Servicemaster) operate 24-hour emergency lines with typical response times of 1 to 4 hours in metropolitan areas. Local restoration companies often respond faster but may have less crew capacity for major events. Most reputable companies are IICRC certified, work directly with homeowner insurance, and provide free initial damage assessment. Cost ranges from $800 to $25,000 depending on damage severity, with typical residential events falling in the $1,500 to $4,500 range. Verify licensing, insurance, and IICRC certification before signing any contract; reputable companies provide this information immediately on request.</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Wet/dry shop vacuum vs submersible pump</h3>
              <p className='text-slate-700 leading-relaxed'>A wet/dry shop vacuum is a household tool capable of extracting small volumes of clean water (under 5 to 10 gallons total) at rates of approximately 5 gallons per minute. A submersible pump is a more powerful tool that sits in standing water and pumps continuously at rates of 25 to 60 gallons per minute (rental units) up to 100+ gallons per minute (professional grade). The decision rule is simple: shop vac for puddles under 1 inch deep covering small areas, submersible pump for any depth over 1 inch or larger affected areas. Neither tool is appropriate for Category 2 or Category 3 contaminated water (washing machine failures, sewage backups, prolonged flooding) because both spread pathogens and become difficult to decontaminate. For contaminated water, professional restoration equipment with truck-mounted extractors and proper containment is required.</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>National Flood Insurance Program (NFIP)</h3>
              <p className='text-slate-700 leading-relaxed'>The National Flood Insurance Program is a federal program administered by FEMA that provides flood insurance to property owners in participating communities. Standard homeowners insurance does NOT cover flood damage from external sources (heavy rain, river flooding, storm surge, groundwater seepage); separate NFIP or private flood insurance is required. NFIP policies cost $400 to $4,000 annually depending on flood zone, building elevation, and coverage limits. Coverage is purchased through licensed insurance agents and through some homeowners insurance companies that act as Write-Your-Own (WYO) participants. There is typically a 30-day waiting period before NFIP coverage takes effect, so policies cannot be purchased mid-storm. Properties in high-risk flood zones (typically marked on FEMA flood maps) often have NFIP coverage required by mortgage lenders. For homeowners outside high-risk zones, NFIP coverage is voluntary but can be valuable in regions with hurricane, hurricane remnant, or heavy seasonal rain risk.</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Mold remediation</h3>
              <p className='text-slate-700 leading-relaxed'>Mold remediation is the professional process of identifying, containing, removing, and preventing return of mold growth in residential or commercial spaces. Standard remediation includes containment of the affected area (plastic sheeting and negative air pressure), HEPA filtration of air, removal of all contaminated porous materials, antimicrobial treatment of remaining surfaces, post-remediation testing to verify clearance, and rebuild of removed materials. Costs typically run $1,500 to $20,000 depending on affected area size and contamination severity. Insurance coverage for mold remediation varies significantly by policy; many policies have caps ($5,000 to $10,000) or exclusions for mold caused by delayed water damage response. The best mold remediation strategy is preventing mold in the first place through aggressive water extraction within 24 hours, professional drying within 72 hours, and continuous humidity monitoring after the emergency. See our <Link href='/articles/mold-remediation-cost' className='text-teal-700 underline hover:text-teal-900'>mold remediation cost guide</Link> for full pricing and process details.</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>EPA-registered antimicrobial</h3>
              <p className='text-slate-700 leading-relaxed'>EPA-registered antimicrobial products are disinfectants and sanitizers tested and approved by the U.S. Environmental Protection Agency for specific microorganism kill claims. In water damage contexts, EPA-registered antimicrobials are used during professional remediation to disinfect surfaces after water extraction and before drying. Common products include quaternary ammonium compounds (quats), chlorine-based solutions, and hydrogen peroxide formulations. Use of EPA-registered products (rather than household cleaners) is required for insurance documentation in most claim contexts because the kill claims are scientifically verified and product documentation supports the remediation report. DIY cleanup with bleach and water may be acceptable for Category 1 water exposures, but Category 2 and Category 3 situations require professional-grade EPA-registered products applied with proper PPE and containment. Improper disinfectant use (mixing bleach with ammonia, inadequate dilution, insufficient contact time) can be ineffective or dangerous; professional remediation provides documentation of correct product use.</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Insurance claim documentation</h3>
              <p className='text-slate-700 leading-relaxed'>Insurance claim documentation is the photographic, written, and material evidence required to support a water damage insurance claim. Required documentation typically includes: photos and videos of damage taken before any cleanup or item removal, written inventory of damaged items with approximate replacement values, receipts for emergency mitigation expenses (pump rental, restoration company deposits, hotel stays if displaced), records of conversations with insurance adjusters and contractors (date, time, names, content), and proof of pre-loss condition (photos of the basement before the event are valuable if available). Adjusters generally arrive 24 to 72 hours after the claim is reported; keeping damaged items in a designated location until the adjuster physically inspects them is critical. Claims with strong documentation typically settle 40 to 60 percent higher than poorly documented claims, and the documentation effort during the first 48 hours of the emergency directly determines the financial outcome of the claim weeks or months later.</p>
            </div>
          </div>
        </section>

      </article>

      {/* Lead Form CTA */}
      <section className='bg-slate-900 py-16'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Need Professional Water Damage Help?</h2>
          <p className='text-slate-300 mb-8 text-lg'>Connect with local water damage restoration, mold remediation, and basement waterproofing professionals for a free emergency assessment.</p>
          <BeehiivEmailCapture />
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
