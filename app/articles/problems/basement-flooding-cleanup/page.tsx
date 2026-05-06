import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Flooding Cleanup: What to Do in the First 72 Hours | The Basement Guide',
  description: 'Basement flooded? This hour-by-hour guide covers exactly what to do in the first 72 hours — water removal, what to save vs throw out, insurance documentation, and mold prevention.',
  alternates: { canonical: 'https://thebasement.guide/articles/problems/basement-flooding-cleanup' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to clean up a flooded basement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water removal from a standard basement takes 2 to 6 hours with a submersible pump. Drying takes 3 to 5 days with commercial equipment or 7 to 14 days with consumer-grade equipment. Full reconstruction of finished surfaces after a severe flooding event takes 2 to 8 weeks. The minimum realistic timeline from flood to fully dry and disinfected basement is 4 to 7 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does homeowners insurance cover a flooded basement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the water source. Burst pipes are typically covered. Sewer backup and sump pump failure are not covered unless you have added a water backup endorsement (costs $50 to $250 per year). Surface flooding from outside requires separate NFIP flood insurance with a 30-day waiting period that cannot be purchased during a flood event.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I clean up a flooded basement myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes for minor flooding with clean water in an unfinished basement caught within a few hours. For any sewage contamination, any flooding in a finished basement, any visible mold, or water that has been sitting more than 48 hours, professional restoration is strongly recommended. The cost differential between DIY and professional is typically $2,000 to $4,000, less than the cost of mold remediation if DIY cleanup is inadequate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does professional basement flood cleanup cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional water extraction and drying costs $1,500 to $3,500. Adding disinfection brings the total to $2,500 to $5,000. Full restoration including drywall removal and rebuild costs $5,000 to $15,000 for a finished basement. Sewage backup cleanup costs $7,000 to $20,000. Responding quickly reduces cost significantly — delays of 48 hours or more add $1,000 to $2,000 to any professional job.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I throw away after basement flooding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remove all drywall, fiberglass insulation, cellulose insulation, and carpet padding that contacted floodwater. Discard cardboard boxes, paper items, and particleboard furniture that absorbed water. Mattresses and upholstered furniture that absorbed sewage should be discarded. Concrete, ceramic tile, metal, and solid wood can usually be cleaned and dried. Keep small samples of discarded flooring and carpet for insurance documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prevent mold after a basement flood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remove all standing water and begin aggressive drying within 48 hours. Remove all porous materials that cannot be dried within that window. Run commercial dehumidifiers and air movers continuously until a moisture meter confirms all structural materials read below 19 percent moisture content. Apply EPA-registered disinfectant to all surfaces that contacted floodwater. Monitor the basement for 10 days after drying for musty odors or visible mold growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a flooded basement from a burst pipe vs rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A burst pipe produces Category 1 clean water with no biological hazard, typically covered by standard homeowners insurance, and porous materials can potentially be saved if dried within 48 hours. Rain-driven basement flooding is usually not covered by standard homeowners insurance and requires flood insurance. Sewage backup produces Category 3 black water requiring professional biohazard cleanup protocols and mandatory discarding of all porous materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I call a professional instead of cleaning up myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call a professional immediately for: any sewage or Category 3 water, any flooding in a finished basement, any water sitting more than 48 hours, any visible mold growth, and any situation involving an insurance claim. For minor clean water flooding in an unfinished basement caught quickly, DIY cleanup with proper equipment is reasonable.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Basement Flooding Cleanup: What to Do in the First 72 Hours',
  description: 'Basement flooded? This hour-by-hour guide covers exactly what to do in the first 72 hours — water removal, what to save vs throw out, insurance documentation, and mold prevention.',
  url: 'https://thebasement.guide/articles/problems/basement-flooding-cleanup',
  publisher: {
    '@type': 'Organization',
    name: 'The Basement Guide',
    url: 'https://thebasement.guide',
  },
}

export default function BasementFloodingCleanupPage() {
  return (
    <div className='bg-white min-h-screen'>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, articleSchema]) }}
      />

      <Breadcrumbs items={[
        { label: 'Problems', href: '/articles/problems/basement-water-after-rain' },
        { label: 'Basement Flooding Cleanup' },
      ]} />

      {/* Article Hero */}
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image
          src='/flooded basement.jpg'
          alt='Flooded residential basement with murky water covering floor, water heater and furnace visible, cardboard boxes sitting in floodwater'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px w-12 bg-amber-500'></div>
            <span className='text-amber-400 font-bold tracking-[0.2em] text-sm uppercase'>Troubleshooting Guide</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter max-w-4xl'>
            Basement Flooding<br />
            <span className='text-amber-400'>Cleanup</span>
          </h1>
          <p className='text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>
            What to do in the first 72 hours&mdash;water removal, what to save vs throw out, insurance documentation, and mold prevention.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm'>BG</div>
            <div>
              <p className='text-white font-medium'>The Basement Guide Staff</p>
              <p className='text-slate-400 text-sm'>Updated April 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-6 py-16'>
        <div className='prose prose-lg prose-slate max-w-none'>

          {/* TL;DR */}
          <div className='not-prose bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg p-6 mb-10'>
            <p className='text-emerald-800 font-bold text-sm mb-2'>TL;DR</p>
            <p className='text-slate-700 text-sm leading-relaxed'>You have 24 to 48 hours before mold starts growing. The first action is always safety. Do not enter the basement if the electrical panel is submerged or if you smell gas. Once safe to enter, document everything with photos and video before touching a single item. Then remove water as fast as possible. Every hour water sits, damage compounds and restoration costs increase. Professional water damage restoration costs $3,500 to $12,000 for a typical basement. DIY cleanup with rented equipment costs $500 to $1,500 in equipment and supplies. The decision between the two depends on water depth, water category (clean vs sewage), and whether finished materials are involved. Standard homeowners insurance does not cover most basement flooding. Coverage depends entirely on the water source and what endorsements you carry.</p>
          </div>

          <p className='text-lg text-slate-700 leading-relaxed'>You walked downstairs and found water. The floor is wet. The carpet is soaked. The drywall at the base of the wall is swelling. Maybe there is two inches of standing water. Maybe the furnace is sitting in it.</p>

          <p className='text-lg text-slate-700 leading-relaxed'>The next 72 hours determine whether this is a $1,500 cleanup or a $15,000 gut and rebuild. The difference comes down almost entirely to how fast you move and whether you move in the right sequence.</p>

          <p className='text-lg text-slate-700 leading-relaxed mb-12'>This guide gives you the exact sequence: what to do first, what to do in the first hour, the first 24 hours, and the first 72 hours. It also tells you what your insurance covers (and what it does not), exactly which materials to discard and which to dry, and when the job is beyond DIY.</p>
        </div>

        {/* The 48-Hour Rule */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>The 48-Hour Rule</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>The principle that governs every decision in this guide is <strong>The 48-Hour Rule</strong>: any porous material that remains wet for more than 48 hours will almost certainly grow mold. Once mold establishes inside a wall cavity, under flooring, or in insulation, the cleanup cost multiplies. FEMA, the CDC, and the EPA all use this 48-hour window as the threshold for salvage versus discard decisions on porous materials.</p>
          <p className='text-slate-700 leading-relaxed mb-4'>Everything in the first 72 hours is a race against this clock.</p>

          {/* Safety Callout Box */}
          <div className='bg-red-50 border-l-4 border-red-500 rounded-lg p-5 mt-6'>
            <p className='text-red-800 font-semibold mb-3'>Before you enter the basement, do three safety checks:</p>
            <div className='space-y-3 text-sm text-red-700'>
              <p><strong>1. Electricity:</strong> If your electrical panel, water heater, furnace, or any outlets are submerged or within inches of standing water, do not enter. Call your utility company to disconnect power at the meter before anyone goes downstairs. Water and live electrical current in the same space kills people.</p>
              <p><strong>2. Gas:</strong> If you smell gas or suspect a line was damaged, leave the building immediately and call your gas utility from outside. Do not use any switches, phones, or lights inside.</p>
              <p><strong>3. Sewage:</strong> If the water is brown or black, smells of sewage, or came from a drain backup, it is Category 3 water, meaning black water, containing pathogens that cause serious illness. Do not enter without rubber boots, waterproof gloves, eye protection, and an N95 mask at minimum. Sewage contamination may require professional biohazard cleanup.</p>
            </div>
          </div>
        </section>

        {/* Hour-by-Hour Action Timeline */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Hour-by-Hour Action Timeline</h2>
          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='px-6 py-4 text-left font-semibold'>Time Window</th>
                  <th className='px-6 py-4 text-left font-semibold'>Priority Actions</th>
                  <th className='px-6 py-4 text-left font-semibold'>What You Are Preventing</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Before entering</td>
                  <td className='px-6 py-4'>Electricity check, gas check, water category assessment</td>
                  <td className='px-6 py-4'>Electrocution, explosion, pathogen exposure</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>First 30 minutes</td>
                  <td className='px-6 py-4'>Document everything with photos and video</td>
                  <td className='px-6 py-4'>Insurance claim denial</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Hours 1 to 3</td>
                  <td className='px-6 py-4'>Begin water removal with pump or wet-dry vac</td>
                  <td className='px-6 py-4'>Structural saturation, material loss</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Hours 3 to 6</td>
                  <td className='px-6 py-4'>Remove soaked rugs, carpet, cardboard, paper items</td>
                  <td className='px-6 py-4'>Mold substrate in 24 hours</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Hours 6 to 12</td>
                  <td className='px-6 py-4'>Set up fans and dehumidifiers, open windows</td>
                  <td className='px-6 py-4'>Mold growth timeline extended</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Hours 12 to 24</td>
                  <td className='px-6 py-4'>Assess walls and drywall, remove baseboards</td>
                  <td className='px-6 py-4'>Hidden moisture in wall cavities</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Hours 24 to 48</td>
                  <td className='px-6 py-4'>Cut flood-damaged drywall, remove wet insulation</td>
                  <td className='px-6 py-4'>Mold inside walls</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Hours 48 to 72</td>
                  <td className='px-6 py-4'>Continue drying, disinfect all surfaces, moisture check</td>
                  <td className='px-6 py-4'>Residual mold spores</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 font-medium'>Day 4 and beyond</td>
                  <td className='px-6 py-4'>Final moisture meter check, reconstruction planning</td>
                  <td className='px-6 py-4'>Rebuilding over hidden moisture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Step 1: Document Before You Touch Anything */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Step 1: Document Before You Touch Anything</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Before moving a single item, removing any water, or opening any windows, document the entire scene. Insurance adjusters require photographic evidence of the damage as it was found. Cleaning up before documenting is the most common reason insurance claims are reduced or denied.</p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What to photograph and video:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700 mb-6'>
            <li>Every room from multiple angles before anything is moved</li>
            <li>The water line on walls and the depth of standing water</li>
            <li>Every damaged item including furniture, appliances, flooring, and stored belongings</li>
            <li>Make, model, and serial number of every affected appliance (furnace, water heater, washer, dryer, dehumidifier)</li>
            <li>The exterior of the home including the source of water if visible (overflowing window well, seeping wall, drain backup)</li>
            <li>Samples of damaged building materials. FEMA specifically recommends keeping small samples of carpet, flooring, wallpaper, and drapes before discarding them, as adjusters use these to verify the materials and calculate replacement costs</li>
          </ul>

          <p className='text-slate-700 leading-relaxed'><strong>Call your insurance company before starting cleanup if possible.</strong> Some insurers require authorization before cleanup begins for covered events. If you cannot reach them immediately, document thoroughly and begin cleanup. Waiting causes more damage, and courts have sided with homeowners who proceeded with reasonable emergency cleanup while attempting to contact their insurer.</p>
        </section>

        {/* Step 2: Remove Water */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Step 2: Remove Water as Fast as Possible</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Water removal speed is the single most important variable in total cleanup cost. Every additional hour of saturation increases the depth of moisture penetration into concrete, wood, drywall, and insulation.</p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>Water depth determines your equipment:</h3>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>Under 1 inch:</strong> A standard wet-dry vacuum handles this. Run it continuously, emptying as needed. Move furniture to dry ground while vacuuming underneath.</p>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>1 to 6 inches:</strong> A submersible pump or utility pump is faster and more effective than a wet-dry vac for this depth. Submersible pumps run $50 to $150 to purchase or $30 to $60 per day to rent. They discharge through a garden hose run to a floor drain, utility sink, or outside.</p>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>Over 6 inches:</strong> A truck-mounted pump or professional extraction unit is the most effective option. Professional water extraction costs $500 to $1,500 for a standard basement. Attempting to remove several inches of standing water with a wet-dry vac is possible but takes hours longer than a proper pump, increasing total saturation time.</p>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>One critical rule for flooded basements:</strong> If the ground outside is still saturated or the water table is still elevated from an ongoing storm, do not pump the basement faster than 2 to 3 feet per day. Pumping too fast when soil outside is fully saturated creates a pressure differential that can crack or bow the foundation walls inward. Wait for the exterior water level to drop before aggressive pumping.</p>

          <p className='text-slate-700 leading-relaxed'><strong>After standing water is removed:</strong> The floor and lower walls will still hold significant moisture. Run wet-dry vac passes over the floor to remove surface water, then move immediately to the drying phase.</p>
        </section>

        {/* Step 3: Remove Materials */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Step 3: Remove Materials That Will Not Dry in Time</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Once standing water is removed, the 48-hour clock for porous materials is running. The following materials cannot be reliably dried within 48 hours once saturated and must be removed immediately:</p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>Remove and discard:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700 mb-6'>
            <li>Carpet and carpet padding: carpet can sometimes be dried if cleaned within 24 hours and the flood was clean water, but carpet padding absorbs and holds water that cannot be extracted and must be discarded</li>
            <li>Fiberglass batt insulation: saturated fiberglass loses its R-value permanently and holds moisture against wood framing, creating a mold substrate. FEMA guidance states fibrous wall insulation saturated by floodwater should be removed completely</li>
            <li>Cellulose insulation: discard and replace, same reasoning as fiberglass</li>
            <li>Drywall saturated above the waterline. If drywall has been wet for more than 48 hours or absorbed sewage water, remove it. The industry standard is a flood cut: cut drywall 12 inches above the visible water line to expose the wall cavity for drying</li>
            <li>Cardboard boxes: every cardboard box that contacted water is a mold substrate within 24 hours. Empty contents, photograph, and discard the boxes</li>
            <li>Paper documents, books: discard non-valuable items. For important documents, place in sealed plastic bags and freeze in a frost-free freezer to halt deterioration until they can be professionally freeze-dried</li>
            <li>Particleboard and MDF furniture: these materials swell, delaminate, and cannot be reliably dried. Solid wood furniture can often be salvaged if dried quickly</li>
          </ul>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>May be salvageable with rapid response:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700 mb-6'>
            <li>Solid hardwood flooring: if dried within 24 to 48 hours with professional equipment, hardwood can sometimes be saved. After 48 hours, cupping and warping become permanent</li>
            <li>Drywall that is only slightly damp: if the lower section is damp but not saturated, drilling weep holes at the baseboard and running fans into the wall cavity can dry it without removal. Use a moisture meter to confirm</li>
            <li>Upholstered furniture: valuable pieces may be salvageable if a restoration professional can extract water and dry them quickly. Standard upholstered items that sat in water for more than a day are generally not worth salvaging due to mold risk</li>
          </ul>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>Always salvage:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700'>
            <li>Concrete, masonry, ceramic tile: these can be cleaned and dried without replacement</li>
            <li>Metal components: clean, dry, and inspect for rust</li>
            <li>Solid wood framing: dry thoroughly and treat with antimicrobial solution, inspect for structural damage after drying</li>
          </ul>
        </section>

        {/* Water Category */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Water Category: Clean vs Gray vs Black</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>The water source determines how aggressively you must handle contamination and what you must discard regardless of drying timeline.</p>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>Category 1 (Clean water):</strong> Burst pipe, rainwater intrusion, supply line failure. No inherent biological hazard. Standard cleanup procedures apply. Porous materials can potentially be salvaged if dried within 48 hours.</p>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>Category 2 (Gray water):</strong> Dishwasher overflow, washing machine discharge, toilet overflow without feces. Contains some biological contaminants. All porous materials that absorbed gray water should be treated as contaminated. Disinfection required on all surfaces after drying.</p>

          <p className='text-slate-700 leading-relaxed'><strong>Category 3 (Black water):</strong> Sewage backup, toilet backup with feces, rising floodwater from outside (which picks up sewage and agricultural runoff), any water that has been sitting for more than 48 hours (which degrades to Category 3 regardless of original source). All porous materials that contacted black water must be discarded regardless of drying timeline. This includes drywall, insulation, carpet, flooring, and any soft goods. Professional biohazard cleanup is strongly recommended. Do not attempt to clean Category 3 contamination without proper personal protective equipment and professional-grade disinfectants.</p>
        </section>

        {/* Step 4: Dry the Basement */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Step 4: Dry the Basement Aggressively</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>After water removal and material removal, the drying phase begins. Professional restoration companies target complete drying within 3 to 5 days using industrial equipment. DIY drying with consumer equipment takes longer and carries more mold risk.</p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>Equipment for drying:</h3>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>Dehumidifiers:</strong> The most important drying tool. A standard 70-pint residential dehumidifier removes 70 pints of moisture per day from the air. A flooded basement requires more capacity. Rent commercial dehumidifiers that remove 150 to 200 pints per day for significantly faster drying. Commercial dehumidifier rental costs $50 to $100 per day. Run continuously, emptying the reservoir or connecting a drain hose.</p>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>Air movers and fans:</strong> Directional fans accelerate surface evaporation. Position fans at wall and floor surfaces to move air across wet materials. Standard box fans help but industrial air movers (available to rent for $25 to $50 per day each) move significantly more air volume. Do not use fans without dehumidifiers. Fans evaporate moisture into the air but dehumidifiers are required to remove it from the space.</p>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>Heat:</strong> Moderate heat (65 to 85 degrees Fahrenheit) accelerates drying. Do not use high heat. Temperatures above 85 degrees accelerate microbial growth. Never use heat on a space that cannot also be dehumidified.</p>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>Ventilation:</strong> Open windows and doors when outdoor humidity is lower than indoor humidity. Close them when outdoor humidity is higher. In most flood scenarios, the basement humidity is extremely high and outdoor air helps, but check with a hygrometer before assuming ventilation helps.</p>

          <p className='text-slate-700 leading-relaxed'><strong>Moisture meter:</strong> A moisture meter ($20 to $60 to purchase) measures the moisture content of wood framing, subfloor, and drywall. Drying is complete when wood reads below 19 percent moisture content. Do not begin reconstruction until the moisture meter confirms all structural materials are dry. Building over wet framing creates a mold problem inside the walls.</p>
        </section>

        {/* Disinfection After Drying */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Disinfection After Drying</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Once surfaces are dry, disinfect everything that contacted floodwater. The EPA recommends a solution of no more than one cup of bleach per gallon of water for disinfecting hard surfaces after flooding. Apply, allow 10 minutes of contact time, and wipe dry.</p>
          <p className='text-slate-700 leading-relaxed mb-4'>For Category 2 and Category 3 water events, professional-grade antimicrobial treatments are more effective than household bleach solutions. Restoration companies apply EPA-registered antimicrobials to all exposed surfaces including wall cavities before closing them up.</p>
          <p className='text-slate-700 leading-relaxed'>Do not apply disinfectant before drying is complete. Bleach applied to wet surfaces dilutes rapidly and does not provide adequate contact time for effective disinfection.</p>
        </section>

        {/* Insurance Coverage */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Insurance Coverage: What Is and Is Not Covered</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>This is where most homeowners get surprised. The source of the flooding determines coverage, and most basement flooding sources are excluded from standard homeowners insurance.</p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What standard homeowners insurance covers:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700 mb-6'>
            <li>Burst pipe or supply line failure: typically covered as sudden and accidental water damage</li>
            <li>Water heater failure: typically covered</li>
          </ul>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What standard homeowners insurance does NOT cover:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700 mb-6'>
            <li>Surface flooding from outside: requires separate NFIP flood insurance (30-day waiting period to activate, cannot be purchased during a flood event)</li>
            <li>Sump pump failure: not covered unless you have a water backup endorsement</li>
            <li>Sewer or drain backup: not covered unless you have a water backup endorsement</li>
            <li>Groundwater seepage: not covered</li>
            <li>Flooding from any external water source: not covered without separate flood insurance</li>
          </ul>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What a water backup endorsement covers:</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>A water backup and sump pump overflow endorsement can be added to most homeowners policies for $50 to $250 per year. It covers damage from sewer backup, drain backup, and sump pump failure. Coverage limits range from $5,000 to $25,000 depending on the endorsement. This endorsement does not cover flood damage from external water sources.</p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>What flood insurance covers:</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>NFIP flood insurance covers damage from rising water, surface flooding, and storm surge. It does not cover sewer backup or sump pump failure. Average annual premium is $700 to $1,000 for residential properties in moderate-risk zones. There is a mandatory 30-day waiting period before coverage activates.</p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>Insurance claim documentation checklist:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700'>
            <li>Photos and video of all damage before cleanup</li>
            <li>Itemized list of damaged belongings with estimated replacement values</li>
            <li>Samples of building materials (carpet, flooring, wallpaper)</li>
            <li>All repair and cleanup receipts</li>
            <li>Contractor estimates for restoration work</li>
            <li>Records of the water source (plumber invoice for burst pipe, weather service data for flood event)</li>
          </ul>
        </section>

        {/* Professional vs DIY */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Professional vs DIY Cleanup</h2>
          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200'>
              <thead>
                <tr className='bg-slate-800 text-white'>
                  <th className='px-6 py-4 text-left font-semibold'>Scenario</th>
                  <th className='px-6 py-4 text-left font-semibold'>DIY Appropriate</th>
                  <th className='px-6 py-4 text-left font-semibold'>Professional Required</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Less than 1 inch of clean water, unfinished basement</td>
                  <td className='px-6 py-4'>Yes</td>
                  <td className='px-6 py-4'>No</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>1 to 3 inches of clean water, unfinished basement</td>
                  <td className='px-6 py-4'>Possible with rented equipment</td>
                  <td className='px-6 py-4'>Recommended</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Any depth of clean water, finished basement</td>
                  <td className='px-6 py-4'>Possible but risky</td>
                  <td className='px-6 py-4'>Strongly recommended</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Any sewage (Category 3) water</td>
                  <td className='px-6 py-4'>No</td>
                  <td className='px-6 py-4'>Yes</td>
                </tr>
                <tr className='border-b border-slate-100'>
                  <td className='px-6 py-4 font-medium'>Any depth, mold already visible</td>
                  <td className='px-6 py-4'>No</td>
                  <td className='px-6 py-4'>Yes</td>
                </tr>
                <tr className='border-b border-slate-100 bg-slate-50'>
                  <td className='px-6 py-4 font-medium'>Insurance claim involved</td>
                  <td className='px-6 py-4'>Possible but document thoroughly</td>
                  <td className='px-6 py-4'>Insurer may require professional assessment</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 font-medium'>Water has been sitting more than 48 hours</td>
                  <td className='px-6 py-4'>No</td>
                  <td className='px-6 py-4'>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>Professional water damage restoration costs:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700'>
            <li>Water extraction and drying only: $1,500 to $3,500</li>
            <li>Extraction, drying, and disinfection: $2,500 to $5,000</li>
            <li>Full restoration including drywall removal and rebuild: $5,000 to $15,000</li>
            <li>Sewage backup cleanup and restoration: $7,000 to $20,000</li>
          </ul>
          <p className='text-slate-700 leading-relaxed mt-4'>Responding late adds roughly $1,000 to $2,000 to any professional restoration job due to the additional mold risk and deeper material saturation.</p>
        </section>

        {/* Mold Prevention */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Mold Prevention: The 10-Day Watch</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Even after thorough drying, mold can still establish in areas that were not fully dried or in materials with residual moisture. Monitor the basement for 10 days after the flood event.</p>

          <h3 className='text-xl font-bold text-slate-900 mt-6 mb-2'>Signs of developing mold:</h3>
          <ul className='list-disc pl-6 space-y-2 text-slate-700 mb-6'>
            <li>Musty odor that was not present before the flood</li>
            <li>Visible discoloration on walls, floor, or framing (black, green, white, or gray patches)</li>
            <li>Recurrence of visible moisture on surfaces after drying</li>
          </ul>

          <p className='text-slate-700 leading-relaxed mb-4'><strong>If mold appears:</strong> If mold coverage is less than 10 square feet, the EPA states a homeowner can clean it using appropriate protective equipment and an EPA-registered disinfectant. If mold covers more than 10 square feet, if it is in HVAC systems, or if it is in walls that were not opened during the flood cleanup, professional mold remediation is required.</p>

          <p className='text-slate-700 leading-relaxed'>Professional mold remediation costs $1,500 to $9,000 depending on extent and location. See our <Link href='/articles/mold-remediation-cost' className='text-emerald-700 underline hover:text-emerald-900'>mold remediation cost guide</Link> for a full breakdown.</p>

          <p className='text-slate-700 leading-relaxed mt-4'>If a failing or undersized sump pump contributed to the flooding, replacement is often the smartest investment to prevent recurrence. Use our <Link href='/cost-guides/sump-pump-replacement-cost' className='text-emerald-700 underline hover:text-emerald-900'>sump pump replacement cost guide</Link> to estimate the project.</p>
        </section>

        {/* FAQ */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>How long does it take to clean up a flooded basement?</h3>
              <p className='text-slate-700 leading-relaxed'>Water removal from a standard basement takes 2 to 6 hours with a submersible pump or professional extraction unit. Drying the basement thoroughly takes 3 to 5 days with commercial drying equipment or 7 to 14 days with consumer-grade equipment. Material removal, disinfection, and debris disposal add 1 to 2 days. Full reconstruction of finished surfaces after a severe flooding event takes 2 to 8 weeks depending on scope. The minimum realistic timeline from flood to fully dry and disinfected basement is 4 to 7 days.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Does homeowners insurance cover a flooded basement?</h3>
              <p className='text-slate-700 leading-relaxed'>It depends entirely on the water source. Burst pipes and supply line failures are typically covered by standard homeowners insurance. Sewer backup, sump pump failure, and drain overflow are not covered unless you have added a water backup endorsement (costs $50 to $250 per year). Surface flooding from outside requires separate NFIP flood insurance, which cannot be purchased during a flood event and has a 30-day waiting period. Check your policy declarations page for water backup endorsements and call your insurer before beginning cleanup if time allows.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Can I clean up a flooded basement myself?</h3>
              <p className='text-slate-700 leading-relaxed'>Yes for minor flooding with clean water in an unfinished basement caught within a few hours. You need a submersible pump or wet-dry vacuum, commercial dehumidifiers, fans, protective equipment, and a moisture meter. For any sewage contamination, any flooding in a finished basement, any situation where mold is already visible, or any water that has been sitting more than 48 hours, professional restoration is strongly recommended. The cost differential between DIY and professional is typically $2,000 to $4,000, which is less than the cost of mold remediation if DIY cleanup is inadequate.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>How much does professional basement flood cleanup cost?</h3>
              <p className='text-slate-700 leading-relaxed'>Professional water extraction and drying for a standard basement costs $1,500 to $3,500. Adding disinfection brings the total to $2,500 to $5,000. Full restoration including drywall removal, insulation removal, and rebuild costs $5,000 to $15,000 for a finished basement. Sewage backup cleanup with biohazard protocols costs $7,000 to $20,000. Responding quickly reduces cost significantly. Delays of 48 hours or more add $1,000 to $2,000 to any professional job due to deeper saturation and mold risk.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>What should I throw away after basement flooding?</h3>
              <p className='text-slate-700 leading-relaxed'>FEMA guidance is clear on this: remove all drywall, fiberglass insulation, cellulose insulation, and carpet padding that contacted floodwater. Carpet can sometimes be saved if it absorbed clean water and is dried within 24 hours. Cardboard boxes, paper items, and particleboard furniture that absorbed floodwater should be discarded. Mattresses, upholstered furniture, and pillows that absorbed sewage or gray water should be discarded. Concrete, ceramic tile, metal, and solid wood can usually be cleaned and dried. Keep small samples of discarded flooring, carpet, and wallpaper for insurance documentation before throwing them out.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>How do I prevent mold after a basement flood?</h3>
              <p className='text-slate-700 leading-relaxed'>The 48-hour rule governs mold prevention: remove all standing water and begin aggressive drying within 48 hours of the flood event. Remove all porous materials that cannot be dried within that window (insulation, carpet padding, saturated drywall). Run commercial dehumidifiers and air movers continuously until a moisture meter confirms all structural materials read below 19 percent moisture content. Apply EPA-registered disinfectant to all surfaces that contacted floodwater. Monitor the basement for 10 days after drying for musty odors or visible mold growth. See our <Link href='/articles/complete-basement-waterproofing-guide' className='text-emerald-700 underline hover:text-emerald-900'>complete basement waterproofing guide</Link> to prevent the next event.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>What is the difference between a flooded basement from a burst pipe vs rain?</h3>
              <p className='text-slate-700 leading-relaxed'>The source determines insurance coverage, water category, and cleanup requirements. A burst pipe produces Category 1 clean water with no biological hazard, typically covered by standard homeowners insurance, and porous materials can potentially be saved if dried within 48 hours. Rain-driven basement flooding is usually Category 1 or 2 water, not covered by standard homeowners insurance (requires flood insurance), and cleanup requirements are similar to burst pipe flooding. Sewage backup produces Category 3 black water, a biological hazard requiring personal protective equipment, professional biohazard cleanup protocols, and mandatory discarding of all porous materials regardless of drying timeline.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>When should I call a professional instead of cleaning up myself?</h3>
              <p className='text-slate-700 leading-relaxed'>Call a professional immediately for: any sewage or Category 3 water, any flooding in a finished basement with drywall and insulation, any water that has been sitting more than 48 hours, any visible mold growth, any flooding where the water source is unclear, and any situation involving an insurance claim where professional documentation may be required. For minor clean water flooding in an unfinished basement caught quickly, DIY cleanup with proper equipment is reasonable. When in doubt, the cost of professional assessment ($200 to $400) is worth knowing what you are dealing with before committing to a DIY cleanup that may be inadequate.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-lg p-6 shadow-sm border border-slate-200'>
              <Link href='/articles/complete-basement-waterproofing-guide' className='text-emerald-700 underline hover:text-emerald-900 font-semibold'>Complete Basement Waterproofing Guide</Link>
              <p className='text-slate-600 text-sm mt-1'>Permanent solutions to prevent the next flood event</p>
            </div>
            <div className='bg-white rounded-lg p-6 shadow-sm border border-slate-200'>
              <Link href='/articles/sump-pump-buying-guide' className='text-emerald-700 underline hover:text-emerald-900 font-semibold'>Sump Pump Guide</Link>
              <p className='text-slate-600 text-sm mt-1'>Replacing or upgrading the sump pump that failed</p>
            </div>
            <div className='bg-white rounded-lg p-6 shadow-sm border border-slate-200'>
              <Link href='/articles/mold-remediation-cost' className='text-emerald-700 underline hover:text-emerald-900 font-semibold'>Mold Remediation Cost</Link>
              <p className='text-slate-600 text-sm mt-1'>What professional mold removal costs if cleanup was delayed</p>
            </div>
            <div className='bg-white rounded-lg p-6 shadow-sm border border-slate-200'>
              <Link href='/articles/problems/basement-water-after-rain' className='text-emerald-700 underline hover:text-emerald-900 font-semibold'>Water in Basement After Rain</Link>
              <p className='text-slate-600 text-sm mt-1'>Diagnosing why flooding keeps happening</p>
            </div>
            <div className='bg-white rounded-lg p-6 shadow-sm border border-slate-200'>
              <Link href='/articles/interior-basement-drainage-systems' className='text-emerald-700 underline hover:text-emerald-900 font-semibold'>Interior Basement Drainage Systems</Link>
              <p className='text-slate-600 text-sm mt-1'>Long-term drainage solutions after repeated flooding</p>
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='text-xl font-semibold text-slate-800 mb-4'>External Resource</h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-white rounded-lg p-6 shadow-sm border border-slate-200'>
                <a href='https://www.fema.gov/blog/stay-safe-cleaning-after-flood' target='_blank' rel='noopener noreferrer' className='text-emerald-700 underline hover:text-emerald-900 font-semibold'>FEMA: Stay Safe Cleaning Up After a Flood</a>
                <p className='text-slate-600 text-sm mt-1'>Federal guidance on personal safety, cleaning procedures, and health precautions during flood cleanup</p>
              </div>
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className='mt-16 pt-8 border-t border-slate-100'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h4 className='font-bold text-slate-900'>Category 1 Water</h4>
              <p className='text-slate-700'>Clean water from a sanitary source such as a burst supply pipe, rainwater, or appliance supply line. Contains no significant biological contamination at the time of loss. Porous materials can potentially be salvaged if dried within 48 hours. Can degrade to Category 2 or 3 if left standing more than 24 to 48 hours.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Category 3 Water (Black Water)</h4>
              <p className='text-slate-700'>Grossly contaminated water containing pathogens and toxigenic agents. Sources include sewage backup, toilet overflow with feces, rising floodwater from outside, and any water that has been standing more than 48 hours. All porous materials that contacted Category 3 water must be discarded regardless of drying timeline. Professional biohazard cleanup protocols required.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Flood Cut</h4>
              <p className='text-slate-700'>The industry standard technique of cutting drywall 12 inches above the visible water line to expose the wall cavity for drying and inspection. Allows verification that insulation has been removed and framing has been dried before drywall replacement. Named for its use in flood restoration specifically.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Moisture Meter</h4>
              <p className='text-slate-700'>An instrument that measures the moisture content of building materials such as wood framing, drywall, and subfloor. Essential for confirming complete drying before reconstruction. Wood should read below 19 percent moisture content before being closed up in walls or covered with flooring. Costs $20 to $60 for a consumer-grade instrument, $100 to $300 for professional-grade.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Water Backup Endorsement</h4>
              <p className='text-slate-700'>An optional add-on to a standard homeowners insurance policy that covers damage from sewer backup, drain backup, and sump pump failure. Costs $50 to $250 per year. Coverage limits range from $5,000 to $25,000. Does not cover surface flooding from outside, which requires separate NFIP flood insurance.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>NFIP (National Flood Insurance Program)</h4>
              <p className='text-slate-700'>The federal program administered by FEMA that provides flood insurance to residential and commercial property owners. Covers damage from rising water, surface flooding, and storm surge. Does not cover sewer backup or sump pump failure. Average annual premium for residential properties in moderate-risk zones is $700 to $1,000. Has a mandatory 30-day waiting period before coverage activates. It cannot be purchased during an active flood event.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Dehumidifier Capacity (Pints Per Day)</h4>
              <p className='text-slate-700'>The volume of moisture a dehumidifier removes from the air in 24 hours. Standard residential dehumidifiers remove 50 to 70 pints per day. Commercial restoration dehumidifiers remove 150 to 200 pints per day. A flooded basement requires commercial-capacity dehumidification for timely drying within the 48-hour mold prevention window.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Air Mover</h4>
              <p className='text-slate-700'>A directional fan designed specifically for water damage restoration that moves high volumes of air across wet surfaces to accelerate evaporation. More effective than standard household fans for drying flooded spaces because they direct airflow at low angles across floors and walls rather than circulating room air. Available to rent from equipment rental companies for $25 to $50 per day each. Most professional restoration companies deploy multiple air movers simultaneously with commercial dehumidifiers to achieve drying within 3 to 5 days.</p>
            </div>
            <div>
              <h4 className='font-bold text-slate-900'>Hydrostatic Pressure</h4>
              <p className='text-slate-700'>The force exerted by water-saturated soil against foundation walls. Relevant during basement flooding because pumping water from the basement too rapidly when outside soil is fully saturated can create a pressure differential that cracks or bows foundation walls. The recommended maximum pumping rate during active flooding is 2 to 3 feet of water depth removed per day.</p>
            </div>
          </div>
        </section>

      </article>

      {/* Newsletter */}
      <BeehiivEmailCapture />

      {/* Lead Form CTA */}
      <section className='max-w-4xl mx-auto px-6 py-16'>
        <div className='bg-slate-900 rounded-2xl p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-white mb-4'>Get Expert Help With Your Flooded Basement</h2>
          <p className='text-slate-300 mb-8 text-lg'>
            Connect with pre-vetted water damage restoration professionals in your area. Free assessments, no obligation.
          </p>
          <LeadForm />
        </div>
      </section>

    </div>
  )
}
