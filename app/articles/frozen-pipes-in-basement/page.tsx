import Link from 'next/link'
import Image from 'next/image'
import AuthorBio from '@/components/AuthorBio'
import LeadForm from '@/components/LeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frozen Pipes in the Basement: How to Prevent Them and What to Do If One Freezes',
  description: 'Which basement pipes freeze, how to protect them for under $100, how to thaw a frozen pipe in a finished ceiling, and what a burst pipe really costs.',
  alternates: { canonical: 'https://thebasement.guide/articles/frozen-pipes-in-basement' },
  openGraph: {
    title: 'Frozen Pipes in the Basement: How to Prevent Them and What to Do If One Freezes',
    description: 'Which basement pipes freeze, how to protect them for under $100, how to thaw a frozen pipe in a finished ceiling, and what a burst pipe really costs.',
    url: 'https://thebasement.guide/articles/frozen-pipes-in-basement',
    type: 'article',
    images: [{ url: 'https://thebasement.guide/frozen-pipes-in-basement-hero.jpg', width: 1200, height: 800, alt: 'Foam insulation on basement pipes near the rim joist' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frozen Pipes in the Basement: How to Prevent Them and What to Do If One Freezes',
    description: 'Which basement pipes freeze, how to protect them for under $100, how to thaw a frozen pipe in a finished ceiling, and what a burst pipe really costs.',
    images: ['https://thebasement.guide/frozen-pipes-in-basement-hero.jpg'],
  },
}

export default function FrozenPipesInBasement() {
  return (
    <main className='max-w-4xl mx-auto px-4 py-10'>
      {/* Structured Data */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Frozen Pipes in the Basement: How to Prevent Them and What to Do If One Freezes',
        description: 'Which basement pipes freeze, how to protect them for under $100, how to thaw a frozen pipe in a finished ceiling, and what a burst pipe really costs.',
        author: { '@type': 'Organization', name: 'The Basement Guide Editorial Team' },
        publisher: { '@type': 'Organization', name: 'The Basement Guide', url: 'https://thebasement.guide' },
        datePublished: '2026-10-21',
        dateModified: '2026-10-21',
        url: 'https://thebasement.guide/articles/frozen-pipes-in-basement',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://thebasement.guide/articles/frozen-pipes-in-basement' },
        image: 'https://thebasement.guide/frozen-pipes-in-basement-hero.jpg',
      }) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'At what temperature do pipes freeze?', acceptedAnswer: { '@type': 'Answer', text: 'Water freezes at 32°F, but the commonly cited threshold for pipes in unheated spaces is an outdoor temperature of about 20°F. Pipes near exterior walls and the rim joist freeze first.' } },
          { '@type': 'Question', name: 'Can pipes freeze in a basement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The basement may feel warm overall, but pipes along exterior walls, near the rim joist, or running to outdoor faucets can sit in pockets of freezing air.' } },
          { '@type': 'Question', name: 'Should I drip my faucets to prevent frozen pipes?', acceptedAnswer: { '@type': 'Answer', text: 'On the coldest nights, yes. A slow drip from the faucet farthest from the main shutoff keeps water moving and relieves pressure if ice forms.' } },
          { '@type': 'Question', name: 'How do I know if a pipe is frozen?', acceptedAnswer: { '@type': 'Answer', text: 'A faucet that won\'t run or only trickles, frost on the outside of a pipe, or a bulge in the pipe are the usual signs.' } },
          { '@type': 'Question', name: 'How long does it take to thaw a frozen pipe?', acceptedAnswer: { '@type': 'Answer', text: 'An exposed pipe usually thaws in 30 minutes to a couple of hours with a hair dryer or space heater. Pipes inside walls can take much longer and may need a plumber.' } },
          { '@type': 'Question', name: 'Can PEX pipe freeze and burst?', acceptedAnswer: { '@type': 'Answer', text: 'PEX can freeze, but it usually stretches instead of splitting. The brass fittings and valves connecting it are the weak points, and repeated freezes weaken the tubing. Copper and galvanized pipe split much more easily.' } },
          { '@type': 'Question', name: 'Does homeowners insurance cover frozen pipes?', acceptedAnswer: { '@type': 'Answer', text: 'Many policies cover sudden damage from a burst pipe, but may deny claims if the home wasn\'t kept reasonably heated. Check your policy and see our basement flooding insurance guide at https://thebasement.guide/articles/basement-flooding-insurance.' } },
          { '@type': 'Question', name: 'Is heat tape safe?', acceptedAnswer: { '@type': 'Answer', text: 'Self-regulating heat cable that\'s UL-listed, plugged into a GFCI outlet, and installed per the instructions is safe. Most problems come from old constant-wattage tape that\'s overlapped or covered with the wrong insulation.' } },
        ],
      }) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'What to Do If a Pipe Freezes',
        description: 'How to thaw a frozen pipe safely, from opening the faucet to inspecting the thawed section for cracks.',
        step: [
          { '@type': 'HowToStep', name: 'Open the faucet the pipe feeds', text: 'Moving water helps melt the ice and relieves pressure.' },
          { '@type': 'HowToStep', name: 'Find the frozen section', text: 'It\'s usually where the pipe runs closest to an exterior wall or the rim joist.' },
          { '@type': 'HowToStep', name: 'Apply heat from the faucet side first', text: 'Work from the faucet end back toward the frozen spot so melting water has somewhere to go. Use a hair dryer, a heating pad, towels soaked in hot water, or a space heater pointed at the area.' },
          { '@type': 'HowToStep', name: 'Keep going until full water pressure returns', text: 'Then check every faucet in the house for other frozen spots.' },
          { '@type': 'HowToStep', name: 'Inspect for cracks', text: 'Look closely at the thawed section. Pipes often split while frozen and leak only once they thaw.' },
        ],
      }) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thebasement.guide' },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://thebasement.guide/guides' },
          { '@type': 'ListItem', position: 3, name: 'Frozen Pipes in the Basement', item: 'https://thebasement.guide/articles/frozen-pipes-in-basement' },
        ],
      }) }} />

      {/* Title & Meta */}
      <div className='mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500'>
        <span className='bg-teal-50 text-[#00A99D] font-semibold px-2 py-1 rounded-full text-xs'>Problems</span>
        <span>By The Basement Guide Editorial Team</span>
        <span>11 min read</span>
        <span>Updated October 2026</span>
      </div>
      <h1 className='text-3xl md:text-4xl font-bold text-[#1B2A3B] mb-6 leading-tight'>
        Frozen Pipes in the Basement: How to Prevent Them and What to Do If One Freezes
      </h1>

      {/* Hero Image */}
      <div className='relative w-full aspect-[3/2] mb-10 rounded-xl overflow-hidden bg-slate-100'>
        <Image
          src='/frozen-pipes-in-basement-hero.jpg'
          alt='Foam insulation on basement pipes near the rim joist'
          fill
          sizes='(max-width: 768px) 100vw, 896px'
          className='object-cover'
          priority
        />
      </div>

      {/* TL;DR */}
      <div className='bg-teal-50 border-l-4 border-[#00A99D] rounded-r-xl p-5 mb-10'>
        <p className='text-gray-800 font-bold mb-2'>TL;DR</p>
        <ul className='text-gray-800 leading-relaxed space-y-2 list-disc pl-5'>
          <li>Basement pipes freeze where they run near the rim joist, along exterior walls, or out to an outdoor faucet. Those spots can fall below freezing even when the rest of the basement feels fine.</li>
          <li>A commonly cited threshold: pipes in unheated spaces become at risk once outdoor temperatures drop to about 20°F.</li>
          <li>Copper and galvanized pipe split when frozen. PEX usually stretches and survives, but its fittings can still fail.</li>
          <li>Foam pipe insulation and air sealing protect most basement pipes for under $50. Heat cable is for the pipes that have frozen before.</li>
          <li>If a pipe freezes, open the faucet and thaw from the faucet end back toward the frozen spot with a hair dryer or space heater. Never use an open flame.</li>
          <li>Know where your main water shutoff is before you need it.</li>
        </ul>
      </div>

      {/* Intro */}
      <p className='text-gray-700 mb-4 leading-relaxed'>
        A frozen pipe is a slow problem until it isn't. Water expands as it freezes, pressure builds between the ice and the closed faucet, and the pipe splits. You usually don't find out until it thaws and starts spraying. In a basement, that means water on the floor, in the walls, and under any finished flooring before anyone notices.
      </p>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        The good news: basement pipes are some of the easiest in the house to protect, because you can usually see and reach them.
      </p>

      <p className='text-gray-700 mb-6 leading-relaxed'>This is one part of getting ready for winter. See our full <Link href='/articles/how-to-winterize-a-basement' className='text-[#00A99D] underline'>fall basement checklist</Link>.</p>

      {/* Reach-and-Risk Rule */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>The Reach-and-Risk Rule</h2>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Match the fix to how exposed the pipe is and whether you can get to it:
      </p>
      <div className='overflow-x-auto mb-6'>
        <table className='w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-[#1B2A3B] text-white'>
            <tr>
              <th className='p-3 text-left'>Pipe situation</th>
              <th className='p-3 text-left'>What to do</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'><td className='p-3'>Exposed pipe in a heated basement, away from exterior walls</td><td className='p-3'>Nothing. Indoor heat protects it.</td></tr>
            <tr className='bg-gray-50'><td className='p-3'>Exposed pipe within a few feet of the rim joist or an exterior wall</td><td className='p-3'>Seal the rim joist and add foam pipe insulation</td></tr>
            <tr className='bg-white'><td className='p-3'>Pipe that has frozen before, or runs through an unheated space</td><td className='p-3'>Self-regulating heat cable, then insulate over it if the cable is rated for it</td></tr>
            <tr className='bg-gray-50'><td className='p-3'>Pipe you can't reach (behind finished walls or a ceiling)</td><td className='p-3'>Keep the space above 55°F, open cabinet or access doors, and drip the faucet on the coldest nights</td></tr>
            <tr className='bg-white'><td className='p-3'>Outdoor faucet line</td><td className='p-3'>Shut off and drain the line from inside, or replace with a frost-free sillcock</td></tr>
          </tbody>
        </table>
      </div>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        The rule of thumb: the closer a pipe is to the outside, the more protection it needs.
      </p>

      {/* 5-Minute Diagnostic */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>5-Minute Diagnostic: Which of Your Pipes Are at Risk?</h2>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Do this on a cold day with a flashlight and a cheap digital thermometer.
      </p>
      <ol className='list-decimal pl-6 text-gray-700 mb-4 space-y-2'>
        <li><strong>Find your main shutoff.</strong> It's usually on the foundation wall where the water line enters the house. Make sure the valve turns. If it's stuck, call a plumber now, not during an emergency.</li>
        <li><strong>Trace every pipe near the rim joist.</strong> Look where the floor framing meets the top of the foundation. Pipes running through or along this area are the most likely to freeze.</li>
        <li><strong>Check the outdoor faucet lines.</strong> Follow each line from the outdoor spigot back into the basement. Look for an interior shutoff valve on that line.</li>
        <li><strong>Feel for drafts.</strong> Run your hand along the rim joist near the pipes. Cold air hitting a pipe is how most basement pipes freeze.</li>
        <li><strong>Take a temperature reading next to the pipes.</strong> If the air around a pipe reads under 45°F while it's cold outside, that pipe is at risk.</li>
      </ol>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        Note every at-risk pipe and what it's made of. That's your project list.
      </p>

      {/* PEX vs Copper */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>PEX vs. Copper: How Worried Should You Be?</h2>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        What your pipes are made of changes the risk.
      </p>
      <div className='overflow-x-auto mb-6'>
        <table className='w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-[#1B2A3B] text-white'>
            <tr>
              <th className='p-3 text-left'>Pipe material</th>
              <th className='p-3 text-left'>How it looks</th>
              <th className='p-3 text-left'>What happens when it freezes</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'><td className='p-3 font-medium'>Copper</td><td className='p-3'>Shiny or tarnished orange-brown metal</td><td className='p-3'>Splits. The crack often shows up only after thawing.</td></tr>
            <tr className='bg-gray-50'><td className='p-3 font-medium'>Galvanized steel</td><td className='p-3'>Dull gray metal with threaded joints</td><td className='p-3'>Splits, and older pipe is already weakened by corrosion.</td></tr>
            <tr className='bg-white'><td className='p-3 font-medium'>CPVC</td><td className='p-3'>Rigid cream or tan plastic</td><td className='p-3'>Brittle in the cold. Cracks easily.</td></tr>
            <tr className='bg-gray-50'><td className='p-3 font-medium'>PEX</td><td className='p-3'>Flexible red, blue, or white plastic tubing</td><td className='p-3'>Usually stretches and survives. Brass fittings, valves, and connections can still crack.</td></tr>
          </tbody>
        </table>
      </div>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        PEX is freeze-resistant, not freeze-proof. Repeated freezing weakens it, and the metal fittings between sections are the weak point. If your basement is copper or galvanized and a pipe has frozen more than once, rerouting that section to the warm side of the basement or replacing it with PEX is worth a plumber's quote.
      </p>

      {/* Prevention */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>Prevention: Protect Pipes Before the First Freeze</h2>

      <h3 className='text-xl font-bold text-[#1B2A3B] mb-3 mt-6'>Seal the Rim Joist First</h3>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Cold air leaking through the rim joist is the main reason basement pipes freeze. Insulating a pipe while a draft blows on it only slows things down. Seal gaps with canned spray foam like <a href='https://link.amazon/B0dWe2ero' target='_blank' rel='nofollow sponsored noopener' className='text-[#00A99D] underline'>Great Stuff Gaps & Cracks</a>, and cover the full cavity with rigid foam board. Our <Link href='/articles/spray-foam-vs-rigid-foam-insulation' className='text-[#00A99D] underline'>spray foam vs. rigid foam guide</Link> covers which goes where.
      </p>

      <h3 className='text-xl font-bold text-[#1B2A3B] mb-3 mt-6'>Insulate Exposed Pipes</h3>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Foam pipe sleeves like <a href='https://link.amazon/B03ZGr3vl' target='_blank' rel='nofollow sponsored noopener' className='text-[#00A99D] underline'>HEATIT Pipe Insulation</a> are the cheapest protection you can buy. Measure the pipe's outside diameter (most supply lines are 1/2 or 3/4 inch), buy matching sleeves, and tape the seams and joints. Cover elbows and valves too, since they freeze first.
      </p>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Insulation slows heat loss. It doesn't create heat. On a pipe that sits in a truly cold space, insulation alone may only buy you time.
      </p>

      <h3 className='text-xl font-bold text-[#1B2A3B] mb-3 mt-6'>Add Heat Cable to Problem Pipes</h3>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        For a pipe that has frozen before, heat cable is the fix. Buy <strong>self-regulating</strong> cable, which adjusts its output to the temperature and is safer than older constant-wattage tape. Run it along the pipe per the instructions, plug it into a GFCI outlet, and insulate over it only if the manufacturer says that's allowed.
      </p>

      <h3 className='text-xl font-bold text-[#1B2A3B] mb-3 mt-6'>Shut Off and Drain Outdoor Faucets</h3>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Every outdoor faucet should have a shutoff valve on the line inside the basement. Before the first freeze, close it, open the outdoor faucet to drain the line, and disconnect the hose. Leave the outdoor faucet open all winter, and add an insulated cover outside for extra protection. If there's no interior shutoff, a plumber can install one or swap the faucet for a frost-free sillcock, which shuts the water off inside the warm wall.
      </p>

      <h3 className='text-xl font-bold text-[#1B2A3B] mb-3 mt-6'>Keep the Basement Warm Enough</h3>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        A basement that stays above 55°F protects most pipes on its own. If yours runs colder, a heater with an anti-freeze setting like the <a href='https://link.amazon/B03wKYCHp' target='_blank' rel='nofollow sponsored noopener' className='text-[#00A99D] underline'>De'Longhi oil-filled radiator</a> switches on automatically near 41°F. See our full guide on <Link href='/articles/how-to-heat-a-basement' className='text-[#00A99D] underline'>how to heat a basement</Link>.
      </p>

      <h3 className='text-xl font-bold text-[#1B2A3B] mb-3 mt-6'>Get an Alert Before It Freezes</h3>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        A Wi-Fi temperature sensor placed next to your most exposed pipe will alert your phone when the temperature drops, which matters most when you're traveling. Set the alert at 40°F so you have time to act. For leak alerts too, see our picks for the <Link href='/articles/best-water-leak-detectors' className='text-[#00A99D] underline'>best water leak detectors</Link>.
      </p>

      <h3 className='text-xl font-bold text-[#1B2A3B] mb-3 mt-6'>On the Coldest Nights</h3>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        When temperatures head toward the single digits, let the faucet farthest from the main shutoff drip slowly, hot and cold. Moving water relieves pressure even if ice starts to form. Open any cabinet or access panels in front of pipes so warm air reaches them.
      </p>

      {/* What to Buy */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>What to Buy</h2>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Everything here costs less than a plumber's service call.
      </p>
      <div className='overflow-x-auto mb-6'>
        <table className='w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-[#1B2A3B] text-white'>
            <tr>
              <th className='p-3 text-left'>Product</th>
              <th className='p-3 text-left'>What it does</th>
              <th className='p-3 text-left'>Where it goes</th>
              <th className='p-3 text-left'>Price tier</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'><td className='p-3'><a href='https://link.amazon/B03ZGr3vl' target='_blank' rel='nofollow sponsored noopener' className='text-[#00A99D] underline'>HEATIT Pipe Insulation</a></td><td className='p-3'>Slows heat loss on exposed pipe</td><td className='p-3'>Every pipe near the rim joist or an exterior wall</td><td className='p-3'>$</td></tr>
            <tr className='bg-gray-50'><td className='p-3'><a href='https://link.amazon/B0489OwII' target='_blank' rel='nofollow sponsored noopener' className='text-[#00A99D] underline'>Easy Heat Freeze Free Self-Regulating Heat Cable</a></td><td className='p-3'>Adds heat to pipes that have frozen before</td><td className='p-3'>Your one or two worst pipes</td><td className='p-3'>$$</td></tr>
            <tr className='bg-white'><td className='p-3'><a href='https://link.amazon/B0hX3hBmk' target='_blank' rel='nofollow sponsored noopener' className='text-[#00A99D] underline'>Frost King Insulated Faucet Cover</a></td><td className='p-3'>Shields the outdoor faucet from wind and cold</td><td className='p-3'>Every outdoor faucet</td><td className='p-3'>$</td></tr>
            <tr className='bg-gray-50'><td className='p-3'><a href='https://link.amazon/B02NAJAHE' target='_blank' rel='nofollow sponsored noopener' className='text-[#00A99D] underline'>Govee Wi-Fi Thermometer (H5179)</a></td><td className='p-3'>Sends a phone alert when temperature drops</td><td className='p-3'>Next to your most exposed pipe</td><td className='p-3'>$</td></tr>
            <tr className='bg-white'><td className='p-3'><a href='https://link.amazon/B0dWe2ero' target='_blank' rel='nofollow sponsored noopener' className='text-[#00A99D] underline'>Great Stuff Gaps & Cracks</a></td><td className='p-3'>Seals drafts that freeze pipes</td><td className='p-3'>Rim joist gaps</td><td className='p-3'>$</td></tr>
          </tbody>
        </table>
      </div>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        <strong>If you only buy two things:</strong> foam pipe insulation and the Govee sensor. Insulation handles most basements, and the sensor tells you when it isn't enough.
      </p>

      {/* Finished Basement */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>Frozen Pipe in a Finished Basement Ceiling or Wall</h2>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Pipes hidden behind drywall are harder to protect and harder to thaw. They also freeze more often than exposed pipes, because finishing a basement often traps them against the cold rim joist or exterior wall.
      </p>
      <p className='text-gray-700 mb-2 leading-relaxed'><strong>How to find the frozen section:</strong></p>
      <ul className='list-disc pl-6 text-gray-700 mb-4 space-y-2'>
        <li>Turn on each faucet and note which ones don't run. The frozen section is somewhere between the last working fixture and the first dead one.</li>
        <li>Feel the ceiling and walls along that route. The coldest spot, usually near an exterior wall, is the likely location.</li>
        <li>Look for frost, a damp patch, or a bulge in the drywall.</li>
      </ul>
      <p className='text-gray-700 mb-2 leading-relaxed'><strong>How to thaw it without opening the wall:</strong></p>
      <ol className='list-decimal pl-6 text-gray-700 mb-4 space-y-2'>
        <li>Open the faucet the pipe feeds.</li>
        <li>Raise the temperature in the room. Turn up the heat and point a space heater at the wall or ceiling section, keeping 3 feet of clearance.</li>
        <li>If there's a recessed light, register, or access panel near the frozen spot, remove the cover so warm air can reach inside.</li>
        <li>Give it time. Thawing through drywall can take hours.</li>
      </ol>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        <strong>When to cut an access panel:</strong> if the pipe doesn't thaw within a few hours, if you see water staining, or if the same spot freezes every winter. A small square cut between joists can be finished with a removable access panel, which lets you insulate the pipe properly and check it in the future. If the pipe sits against the rim joist with insulation on the room side, that's the root cause. The pipe needs to be on the warm side of the insulation, so plan on fixing it once the weather allows.
      </p>

      {/* Leaving the House */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>Leaving the House for the Winter</h2>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        For a trip of a few days, keep the heat at 55°F or higher, open the cabinet doors in front of pipes, and leave the Wi-Fi sensor running.
      </p>
      <p className='text-gray-700 mb-2 leading-relaxed'>For a long absence or a vacant house:</p>
      <ol className='list-decimal pl-6 text-gray-700 mb-4 space-y-2'>
        <li>Shut off the main water valve.</li>
        <li>Turn off the water heater, or set it to vacation mode.</li>
        <li>Open every faucet, starting from the top floor, and let them drain. Open the lowest faucet or drain valve in the basement last.</li>
        <li>Flush toilets to empty the tanks.</li>
        <li>Leave the faucets open.</li>
        <li>Keep the heat on at a low setting if you can. Draining protects the pipes, but heat protects the rest of the house.</li>
      </ol>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        A home with a well, a boiler, or a sprinkler system needs more steps. For those, have a plumber winterize it.
      </p>

      {/* Sump Pump Discharge */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>Don't Forget the Sump Pump Discharge Line</h2>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        The pipe that carries water from your sump pump to the yard can freeze at its outdoor end, especially if it drains into a buried line. When it freezes, the pump runs against a blocked line and can burn out. Keep the outdoor end clear of snow, make sure it slopes away from the house so water doesn't sit in it, and consider an anti-freeze discharge fitting that lets water escape if the line blocks. See our <Link href='/articles/sump-pump-buying-guide' className='text-[#00A99D] underline'>sump pump buying guide</Link> for more.
      </p>

      {/* What to Do If a Pipe Freezes */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>What to Do If a Pipe Freezes</h2>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Signs of a frozen pipe: a faucet that trickles or won't run, frost on the outside of a pipe, or a section of pipe that's bulging.
      </p>
      <ol className='list-decimal pl-6 text-gray-700 mb-4 space-y-2'>
        <li><strong>Open the faucet the pipe feeds.</strong> Moving water helps melt the ice and relieves pressure.</li>
        <li><strong>Find the frozen section.</strong> It's usually where the pipe runs closest to an exterior wall or the rim joist.</li>
        <li><strong>Apply heat from the faucet side first.</strong> Work from the faucet end back toward the frozen spot so melting water has somewhere to go. Use a hair dryer, a heating pad, towels soaked in hot water, or a space heater pointed at the area.</li>
        <li><strong>Keep going until full water pressure returns.</strong> Then check every faucet in the house for other frozen spots.</li>
        <li><strong>Inspect for cracks.</strong> Look closely at the thawed section. Pipes often split while frozen and leak only once they thaw.</li>
      </ol>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        <strong>Never use a torch, propane heater, or any open flame.</strong> Besides the fire risk, a torch can boil water inside the pipe and make it burst.
      </p>

      <h3 className='text-xl font-bold text-[#1B2A3B] mb-3 mt-6'>If the Pipe Has Burst</h3>
      <ol className='list-decimal pl-6 text-gray-700 mb-8 space-y-2'>
        <li>Shut off the main water valve immediately.</li>
        <li>Turn off power to the basement if water is near outlets, cords, or appliances.</li>
        <li>Open faucets to drain the remaining water out of the lines.</li>
        <li>Call a plumber.</li>
        <li>Photograph everything for your insurance claim, then start drying out right away. Our guides on <Link href='/articles/how-to-dry-out-basement-after-flooding' className='text-[#00A99D] underline'>drying out a basement after flooding</Link> and <Link href='/articles/basement-flooding-insurance' className='text-[#00A99D] underline'>basement flooding insurance</Link> cover the next steps.</li>
      </ol>

      {/* Cost Breakdown */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>Cost Breakdown and 10-Year Total Cost of Ownership</h2>
      <p className='text-gray-700 mb-4 leading-relaxed'>
        Estimates for protecting a typical basement with a handful of at-risk pipes. Electricity at about 18 cents per kWh.
      </p>
      <div className='overflow-x-auto mb-6'>
        <table className='w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-[#1B2A3B] text-white'>
            <tr>
              <th className='p-3 text-left'>Option</th>
              <th className='p-3 text-left'>Upfront cost</th>
              <th className='p-3 text-left'>Ongoing cost</th>
              <th className='p-3 text-left'>10-year total cost</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'><td className='p-3 font-medium'>Foam pipe insulation (DIY)</td><td className='p-3'>$15 to $50</td><td className='p-3'>None</td><td className='p-3'>$15 to $50</td></tr>
            <tr className='bg-gray-50'><td className='p-3 font-medium'>Rim joist air sealing (DIY)</td><td className='p-3'>$30 to $150</td><td className='p-3'>None</td><td className='p-3'>$30 to $150</td></tr>
            <tr className='bg-white'><td className='p-3 font-medium'>Self-regulating heat cable, one run</td><td className='p-3'>$50 to $120</td><td className='p-3'>About $10 to $20 a year in electricity</td><td className='p-3'>$150 to $320</td></tr>
            <tr className='bg-gray-50'><td className='p-3 font-medium'>Wi-Fi temperature sensor</td><td className='p-3'>$25 to $60</td><td className='p-3'>Batteries</td><td className='p-3'>$40 to $90</td></tr>
            <tr className='bg-white'><td className='p-3 font-medium'>Interior shutoff or frost-free sillcock (plumber)</td><td className='p-3'>$150 to $400 per faucet</td><td className='p-3'>None</td><td className='p-3'>$150 to $400</td></tr>
            <tr className='bg-gray-50'><td className='p-3 font-medium'>Burst pipe, one event</td><td className='p-3'>Plumbing repair often $400 to $1,500</td><td className='p-3'>Plus water damage cleanup that commonly runs into the thousands</td><td className='p-3'>Often several times every prevention option on this list combined</td></tr>
          </tbody>
        </table>
      </div>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        The math isn't close. Everything above the last row together typically costs less than a single burst pipe.
      </p>

      {/* Common Mistakes */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>Common Mistakes</h2>
      <ul className='list-disc pl-6 text-gray-700 mb-8 space-y-2'>
        <li><strong>Insulating the pipe but not the draft.</strong> Cold air through the rim joist will freeze an insulated pipe. Seal first.</li>
        <li><strong>Insulating the wrong side of a pipe.</strong> When finishing a basement, putting wall insulation between the pipe and the heated room traps the pipe on the cold side. Pipes should sit on the warm side of the insulation.</li>
        <li><strong>Leaving hoses connected.</strong> A connected hose traps water in the outdoor faucet, even a frost-free one, and can split it.</li>
        <li><strong>Using constant-wattage heat tape wrong.</strong> Overlapping it or covering it with insulation it isn't rated for is a fire risk. Self-regulating cable avoids most of this.</li>
        <li><strong>Thawing with a torch.</strong> It's a fire hazard and can burst the pipe.</li>
        <li><strong>Not knowing where the main shutoff is.</strong> Every minute you spend looking for it during a burst is more water on the floor.</li>
        <li><strong>Turning the heat way down when traveling.</strong> Keep the house at 55°F or higher, and use a sensor that alerts you if it drops.</li>
      </ul>

      {/* When to Call a Pro */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>When to Call a Pro</h2>
      <ul className='list-disc pl-6 text-gray-700 mb-4 space-y-2'>
        <li>The pipe has burst or you see a crack</li>
        <li>You can't find or reach the frozen section</li>
        <li>The frozen pipe runs behind a finished wall or ceiling and doesn't thaw within a few hours</li>
        <li>The main shutoff is stuck or missing</li>
        <li>You're winterizing a house with a well, boiler, or sprinkler system</li>
        <li>You want an interior shutoff or frost-free sillcock installed</li>
        <li>Pipes keep freezing even after insulation and sealing, which can mean they need to be rerouted</li>
      </ul>
      <p className='text-gray-700 mb-8 leading-relaxed'>
        DIY-friendly: air sealing, foam pipe insulation, heat cable on exposed pipe, draining outdoor faucets, and thawing an exposed pipe with a hair dryer. For more on what to take on yourself, see <Link href='/articles/diy-vs-hiring-pro-basement-projects' className='text-[#00A99D] underline'>DIY vs. hiring a pro</Link>.
      </p>

      {/* Lead Form */}
      <div className='mb-10'>
        <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4'>Get Free Plumbing Quotes</h2>
        <p className='text-gray-700 mb-6 leading-relaxed'>Connect with vetted local plumbers for frozen or burst pipes, shutoff valve replacement, and winterization work.</p>
        <LeadForm />
      </div>

      {/* FAQs */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-6 mt-10'>Frequently Asked Questions</h2>
      <div className='space-y-4 mb-10'>
        <div className='border border-gray-200 rounded-xl p-5'>
          <h3 className='font-bold text-[#1B2A3B] mb-2'>At what temperature do pipes freeze?</h3>
          <p className='text-sm text-gray-600'>Water freezes at 32°F, but the commonly cited threshold for pipes in unheated spaces is an outdoor temperature of about 20°F. Pipes near exterior walls and the rim joist freeze first.</p>
        </div>
        <div className='border border-gray-200 rounded-xl p-5'>
          <h3 className='font-bold text-[#1B2A3B] mb-2'>Can pipes freeze in a basement?</h3>
          <p className='text-sm text-gray-600'>Yes. The basement may feel warm overall, but pipes along exterior walls, near the rim joist, or running to outdoor faucets can sit in pockets of freezing air.</p>
        </div>
        <div className='border border-gray-200 rounded-xl p-5'>
          <h3 className='font-bold text-[#1B2A3B] mb-2'>Should I drip my faucets to prevent frozen pipes?</h3>
          <p className='text-sm text-gray-600'>On the coldest nights, yes. A slow drip from the faucet farthest from the main shutoff keeps water moving and relieves pressure if ice forms.</p>
        </div>
        <div className='border border-gray-200 rounded-xl p-5'>
          <h3 className='font-bold text-[#1B2A3B] mb-2'>How do I know if a pipe is frozen?</h3>
          <p className='text-sm text-gray-600'>A faucet that won't run or only trickles, frost on the outside of a pipe, or a bulge in the pipe are the usual signs.</p>
        </div>
        <div className='border border-gray-200 rounded-xl p-5'>
          <h3 className='font-bold text-[#1B2A3B] mb-2'>How long does it take to thaw a frozen pipe?</h3>
          <p className='text-sm text-gray-600'>An exposed pipe usually thaws in 30 minutes to a couple of hours with a hair dryer or space heater. Pipes inside walls can take much longer and may need a plumber.</p>
        </div>
        <div className='border border-gray-200 rounded-xl p-5'>
          <h3 className='font-bold text-[#1B2A3B] mb-2'>Can PEX pipe freeze and burst?</h3>
          <p className='text-sm text-gray-600'>PEX can freeze, but it usually stretches instead of splitting. The brass fittings and valves connecting it are the weak points, and repeated freezes weaken the tubing. Copper and galvanized pipe split much more easily.</p>
        </div>
        <div className='border border-gray-200 rounded-xl p-5'>
          <h3 className='font-bold text-[#1B2A3B] mb-2'>Does homeowners insurance cover frozen pipes?</h3>
          <p className='text-sm text-gray-600'>Many policies cover sudden damage from a burst pipe, but may deny claims if the home wasn't kept reasonably heated. Check your policy and see our <Link href='/articles/basement-flooding-insurance' className='text-[#00A99D] underline'>basement flooding insurance guide</Link>.</p>
        </div>
        <div className='border border-gray-200 rounded-xl p-5'>
          <h3 className='font-bold text-[#1B2A3B] mb-2'>Is heat tape safe?</h3>
          <p className='text-sm text-gray-600'>Self-regulating heat cable that's UL-listed, plugged into a GFCI outlet, and installed per the instructions is safe. Most problems come from old constant-wattage tape that's overlapped or covered with the wrong insulation.</p>
        </div>
      </div>

      {/* Glossary */}
      <h2 className='text-2xl font-bold text-[#1B2A3B] mb-4 mt-10'>Glossary</h2>
      <dl className='space-y-3 mb-10 text-sm text-gray-700'>
        <div><dt className='font-bold text-[#1B2A3B]'>Rim joist</dt><dd>The wood framing that sits on top of the foundation wall. The most common spot for drafts that freeze pipes.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>Main shutoff valve</dt><dd>The valve that stops all water entering the house, usually on the foundation wall where the line comes in.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>Frost-free sillcock</dt><dd>An outdoor faucet with its valve set inside the wall, where it stays warm enough not to freeze.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>PEX</dt><dd>Flexible plastic water supply tubing that resists splitting when frozen.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>Self-regulating heat cable</dt><dd>Heat cable that automatically puts out more heat as temperatures drop and less as they rise.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>Constant-wattage heat tape</dt><dd>Older heat tape that puts out the same heat at all times and can overheat if overlapped.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>Pipe sleeve</dt><dd>A tube of foam insulation that slips over a pipe.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>GFCI outlet</dt><dd>An outlet that cuts power when it detects a ground fault. Required for heat cable.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>Sump pump discharge line</dt><dd>The pipe that carries water from the sump pump to the outside.</dd></div>
        <div><dt className='font-bold text-[#1B2A3B]'>Thermal envelope</dt><dd>The boundary of insulation and air sealing that separates heated space from the outdoors. Pipes should stay inside it.</dd></div>
      </dl>

      {/* Related Guides */}
      <div className='bg-[#F0FAFA] border border-teal-100 rounded-2xl p-6 mb-10'>
        <h3 className='font-bold text-[#1B2A3B] mb-4'>Related Guides</h3>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/articles/how-to-winterize-a-basement' className='text-[#00A99D] hover:underline'>How to Winterize a Basement</Link></li>
          <li><Link href='/articles/how-to-heat-a-basement' className='text-[#00A99D] hover:underline'>How to Heat a Basement</Link></li>
          <li><Link href='/articles/basement-insulation-guide' className='text-[#00A99D] hover:underline'>Basement Insulation Guide</Link></li>
          <li><Link href='/articles/spray-foam-vs-rigid-foam-insulation' className='text-[#00A99D] hover:underline'>Spray Foam vs. Rigid Foam Insulation</Link></li>
          <li><Link href='/articles/best-water-leak-detectors' className='text-[#00A99D] hover:underline'>Best Water Leak Detectors</Link></li>
          <li><Link href='/articles/how-to-dry-out-basement-after-flooding' className='text-[#00A99D] hover:underline'>How to Dry Out a Basement After Flooding</Link></li>
          <li><Link href='/articles/basement-flooding-insurance' className='text-[#00A99D] hover:underline'>Basement Flooding Insurance</Link></li>
          <li><Link href='/articles/basement-emergency-water-plan' className='text-[#00A99D] hover:underline'>Basement Emergency Water Plan</Link></li>
          <li><Link href='/articles/sump-pump-buying-guide' className='text-[#00A99D] hover:underline'>Sump Pump Buying Guide</Link></li>
        </ul>
      </div>

      {/* About the Author */}
      <AuthorBio />

      <p className='text-xs text-gray-500 mt-8 leading-relaxed'>
        <strong>Affiliate disclosure:</strong> As an Amazon Associate we earn from qualifying purchases. Links to Amazon on this page use our affiliate tag and may earn us a commission at no extra cost to you.
      </p>
    </main>
  )
}
