import type { Metadata } from 'next'
import Image from 'next/image'
import AuthorBio from '@/components/AuthorBio'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  "title": "How to Winterize a Basement Before the First Freeze",
  "description": "A fall basement checklist for cold climates. Protect pipes and the sump pump from freezing, get ready for snowmelt and outages, and set humidity, heat, and radon right for winter.",
  "alternates": {
    "canonical": "https://thebasement.guide/articles/how-to-winterize-a-basement"
  },
  "openGraph": {
    "title": "How to Winterize a Basement Before the First Freeze",
    "description": "A fall basement checklist for cold climates. Protect pipes and the sump pump from freezing, get ready for snowmelt and outages, and set humidity, heat, and radon right for winter.",
    "url": "https://thebasement.guide/articles/how-to-winterize-a-basement",
    "type": "article",
    "images": [
      {
        "url": "https://thebasement.guide/how-to-winterize-a-basement-hero.jpg",
        "width": 1200,
        "height": 800,
        "alt": "Basement with insulated pipes and a sump pump ready for winter."
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "How to Winterize a Basement Before the First Freeze",
    "description": "A fall basement checklist for cold climates. Protect pipes and the sump pump from freezing, get ready for snowmelt and outages, and set humidity, heat, and radon right for winter.",
    "images": [
      "https://thebasement.guide/how-to-winterize-a-basement-hero.jpg"
    ]
  }
}
const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Winterize a Basement Before the First Freeze",
    "description": "A fall basement checklist for cold climates. Protect pipes and the sump pump from freezing, get ready for snowmelt and outages, and set humidity, heat, and radon right for winter.",
    "author": {
      "@type": "Organization",
      "name": "The Basement Guide Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Basement Guide",
      "url": "https://thebasement.guide"
    },
    "datePublished": "2026-10-23",
    "dateModified": "2026-10-23",
    "image": "https://thebasement.guide/how-to-winterize-a-basement-hero.jpg",
    "url": "https://thebasement.guide/articles/how-to-winterize-a-basement",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://thebasement.guide/articles/how-to-winterize-a-basement"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When should I winterize my basement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In October or early November, before the first hard freeze. Do the outdoor faucets and exposed pipes first, since those cause the most expensive damage."
        }
      },
      {
        "@type": "Question",
        "name": "What's the most important thing to do before winter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shut off and drain outdoor faucets and disconnect hoses. Frozen outdoor faucet lines are among the most common winter plumbing failures."
        }
      },
      {
        "@type": "Question",
        "name": "Should I run a dehumidifier in the basement in winter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if humidity stays above 50%. Standard dehumidifiers work poorly below about 65°F, so in a cold basement you may be able to turn it off and store it until spring."
        }
      },
      {
        "@type": "Question",
        "name": "How do I keep my basement from freezing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seal the rim joist, insulate exposed pipes, keep the basement above about 55°F, and use a temperature sensor to warn you if it drops."
        }
      },
      {
        "@type": "Question",
        "name": "Can snow cause basement flooding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Snow piled against the foundation or packed into window wells melts all at once during a thaw, often while the ground is still frozen and can't absorb it."
        }
      },
      {
        "@type": "Question",
        "name": "How do I keep my sump pump from freezing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Make sure the discharge line's outdoor end is clear, slopes away from the house, and isn't buried under snow. Our frozen pipes guide covers freeze protection for the line."
        }
      },
      {
        "@type": "Question",
        "name": "Is winter a good time to test for radon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Levels are often higher when the house is closed up, and short-term tests are meant to be run with windows and doors closed."
        }
      },
      {
        "@type": "Question",
        "name": "What should I not store in an unheated basement in winter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anything that can be ruined by freezing, like latex paint, some cleaning products, and canned goods. Keep everything else off the floor and away from exterior walls."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "5-Minute Walk-Through: What Does Your Basement Need?",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Outdoor faucets: Is there a hose still connected? Is there a shutoff valve for each faucet inside the basement?"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Exposed pipes: Do any run along an exterior wall or near the rim joist? Do you feel a draft there?"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Sump pump: Where does the discharge line come out outside? Is the outdoor end clear, sloped away from the house, and free of buried sections?"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Window wells: Are they full of leaves? Do they have covers?"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "Downspouts: Do they dump water right at the foundation?"
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "text": "Humidity: What does your hygrometer read? If you don't have one, that's the first thing to buy."
      },
      {
        "@type": "HowToStep",
        "position": 7,
        "text": "Furnace and water heater: Is the area around them clear of boxes? Is there a CO alarm nearby?"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thebasement.guide"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://thebasement.guide/guides"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "How to Winterize a Basement",
        "item": "https://thebasement.guide/articles/how-to-winterize-a-basement"
      }
    ]
  }
]
const faqs = [
  {
    "question": "When should I winterize my basement?",
    "answer": "In October or early November, before the first hard freeze. Do the outdoor faucets and exposed pipes first, since those cause the most expensive damage."
  },
  {
    "question": "What's the most important thing to do before winter?",
    "answer": "Shut off and drain outdoor faucets and disconnect hoses. Frozen outdoor faucet lines are among the most common winter plumbing failures."
  },
  {
    "question": "Should I run a dehumidifier in the basement in winter?",
    "answer": "Only if humidity stays above 50%. Standard dehumidifiers work poorly below about 65°F, so in a cold basement you may be able to turn it off and store it until spring."
  },
  {
    "question": "How do I keep my basement from freezing?",
    "answer": "Seal the rim joist, insulate exposed pipes, keep the basement above about 55°F, and use a temperature sensor to warn you if it drops."
  },
  {
    "question": "Can snow cause basement flooding?",
    "answer": "Yes. Snow piled against the foundation or packed into window wells melts all at once during a thaw, often while the ground is still frozen and can't absorb it."
  },
  {
    "question": "How do I keep my sump pump from freezing?",
    "answer": "Make sure the discharge line's outdoor end is clear, slopes away from the house, and isn't buried under snow. Our frozen pipes guide covers freeze protection for the line."
  },
  {
    "question": "Is winter a good time to test for radon?",
    "answer": "Yes. Levels are often higher when the house is closed up, and short-term tests are meant to be run with windows and doors closed."
  },
  {
    "question": "What should I not store in an unheated basement in winter?",
    "answer": "Anything that can be ruined by freezing, like latex paint, some cleaning products, and canned goods. Keep everything else off the floor and away from exterior walls."
  }
]
const beforeForm = "<blockquote class=\"bg-teal-50 border-l-4 border-[#00A99D] rounded-r-xl p-5 mb-10\">\n<p class=\"text-gray-700 mb-4 leading-relaxed\"><strong>TL;DR</strong></p>\n<ul class=\"list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6\">\n<li>Winter brings different basement problems than spring: frozen pipes, frozen sump lines, snowmelt, power outages, a closed-up house, and pests looking for warmth.</li>\n<li>Do the outdoor jobs before the first hard freeze: drain outdoor faucets, clear gutters after the leaves drop, extend downspouts, and cover window wells.</li>\n<li>Inside, insulate exposed pipes, seal the rim joist, test the sump pump and its backup, and know where your main water shutoff is.</li>\n<li>Change how you run the dehumidifier. Most standard models struggle once the basement drops below about 65°F.</li>\n<li>Winter is the best time to test for radon, and the furnace running all season makes a working CO alarm in the basement essential.</li>\n</ul>\n</blockquote>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Spring maintenance is about rain. Fall maintenance is about cold. Once the ground freezes, water has fewer places to go, pipes near the rim joist are at risk, a power outage can take out your heat and your sump pump at the same time, and the house gets sealed up for months. This checklist covers what changes in winter. If you already did our <a class=\"text-[#00A99D] underline\" href=\"/articles/spring-basement-checklist\">spring basement checklist</a>, you won&#39;t repeat much of it here.</p>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Plan on one weekend in October or early November, before the first hard freeze.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">The First-Frost Rule</h2>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Not everything has to happen at once. Sort the jobs by deadline:</p>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable checklist or comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[640px] text-sm border-collapse border border-gray-200 rounded-lg\">\n<thead class=\"bg-[#1B2A3B] text-white\">\n<tr>\n<th class=\"text-left p-3 font-semibold\">Deadline</th>\n<th class=\"text-left p-3 font-semibold\">Jobs</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\"><strong>Before the first hard freeze</strong> (usually below about 25°F overnight)</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Drain and shut off outdoor faucets, insulate exposed pipes, check the sump discharge line, seal the rim joist</td>\n</tr>\n<tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\"><strong>Before the first snow</strong></td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Clear gutters, extend downspouts, cover window wells, test the sump pump backup</td>\n</tr>\n<tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\"><strong>Anytime in early winter</strong></td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Adjust the dehumidifier, test for radon, check CO alarms, organize storage, watch for pests</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">If you only get to the first row, you&#39;ve handled the jobs that cause the most expensive damage.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">5-Minute Walk-Through: What Does Your Basement Need?</h2>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Grab a flashlight and walk the basement and the outside of the house. Note anything you find.</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed mb-6\">\n<li><strong>Outdoor faucets:</strong> Is there a hose still connected? Is there a shutoff valve for each faucet inside the basement?</li>\n<li><strong>Exposed pipes:</strong> Do any run along an exterior wall or near the rim joist? Do you feel a draft there?</li>\n<li><strong>Sump pump:</strong> Where does the discharge line come out outside? Is the outdoor end clear, sloped away from the house, and free of buried sections?</li>\n<li><strong>Window wells:</strong> Are they full of leaves? Do they have covers?</li>\n<li><strong>Downspouts:</strong> Do they dump water right at the foundation?</li>\n<li><strong>Humidity:</strong> What does your hygrometer read? If you don&#39;t have one, that&#39;s the first thing to buy.</li>\n<li><strong>Furnace and water heater:</strong> Is the area around them clear of boxes? Is there a CO alarm nearby?</li>\n</ol>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Most basements come out of this with three to five real jobs. The rest of this guide covers each one.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Outside the House</h2>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Shut Off and Drain Outdoor Faucets</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">This is the single most common winter plumbing failure, and it starts in the basement. Disconnect every hose. Close the shutoff valve for each outdoor faucet inside the basement, then open the outdoor faucet to let the line drain, and leave it open for the winter. An insulated <a class=\"text-[#00A99D] underline\" href=\"https://link.amazon/B0hX3hBmk\" rel=\"sponsored nofollow\" target=\"_blank\">faucet cover</a> adds protection on the outside.</p>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">No interior shutoff? A plumber can add one or replace the faucet with a frost-free model. Our <a class=\"text-[#00A99D] underline\" href=\"/articles/frozen-pipes-in-basement\">frozen pipes guide</a> covers the details.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Clear Gutters After the Leaves Drop</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Timing matters here. Clean them too early and they fill right back up. Wait until most of the leaves are down, then clear them out. Clogged gutters in winter cause ice dams, and the water from a melting ice dam often ends up running down the foundation wall and into the basement.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Extend Downspouts and Plan Where Snow Goes</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Downspouts should carry water at least 6 feet from the foundation. In winter, that matters for snowmelt as much as rain. Add a <a class=\"text-[#00A99D] underline\" href=\"https://link.amazon/B03aFm4eB\" rel=\"sponsored nofollow\" target=\"_blank\">downspout extension</a> if yours dump at the foundation, and check that it won&#39;t sit in a low spot where water pools and freezes.</p>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">While you&#39;re out there, decide where shoveled snow will go. Piling it against the foundation, on top of window wells, or over the sump discharge outlet is one of the most common ways people flood their own basement in a February thaw.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Cover and Clear Window Wells</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Clear out the leaves first. Leaves block the well&#39;s drain, and snow packed in on top melts straight against the basement window. A cover keeps snow and ice out of the well entirely. Sloped or dome covers shed snow best. See our <a class=\"text-[#00A99D] underline\" href=\"/articles/best-window-well-covers-egress-ladders\">window well cover guide</a> for picks. If a window well is an emergency exit, make sure the cover can still be opened from inside.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Check the Sump Pump Discharge Line</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">The pipe that carries water from your sump pump outside can freeze at its outdoor end. When it does, the pump runs against a blocked line and can burn out. Make sure the outdoor end slopes away from the house so water drains out of it, isn&#39;t buried under mulch or snow, and isn&#39;t kinked. Our <a class=\"text-[#00A99D] underline\" href=\"/articles/frozen-pipes-in-basement\">frozen pipes guide</a> covers freeze protection for the discharge line.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Pipes and Water</h2>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Insulate Exposed Pipes</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Any pipe within a few feet of an exterior wall or the rim joist is at risk. <a class=\"text-[#00A99D] underline\" href=\"https://link.amazon/B03ZGr3vl\" rel=\"sponsored nofollow\" target=\"_blank\">Foam pipe insulation</a> costs a few dollars per section and goes on in minutes. For a pipe that has frozen before, add heat cable. Our <a class=\"text-[#00A99D] underline\" href=\"/articles/frozen-pipes-in-basement\">frozen pipes guide</a> explains which pipes need what.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Seal the Rim Joist</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">The rim joist is where the house framing sits on the foundation, and it&#39;s the leakiest spot in most basements. Cold air coming through it freezes pipes, chills the floor above, and gives mice a way in. Seal gaps with <a class=\"text-[#00A99D] underline\" href=\"https://link.amazon/B0dWe2ero\" rel=\"sponsored nofollow\" target=\"_blank\">Great Stuff Gaps &amp; Cracks</a> or another canned spray foam. For a full insulation job, see our <a class=\"text-[#00A99D] underline\" href=\"/articles/basement-insulation-guide\">basement insulation guide</a>.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Find and Test Your Main Water Shutoff</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">If a pipe bursts in January, every minute you spend hunting for the shutoff is more water on the floor. Find it now. It&#39;s usually on the wall where the water line enters the house. Turn it off and back on to make sure it moves. If it&#39;s stuck, have a plumber replace it while it&#39;s still a convenience, not an emergency. Tag it so anyone in the house can find it.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Add a Temperature Alert</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">A <a class=\"text-[#00A99D] underline\" href=\"https://link.amazon/B02NAJAHE\" rel=\"sponsored nofollow\" target=\"_blank\">Govee Wi-Fi thermometer</a> near your most exposed pipe sends a phone alert if the temperature drops, and it doubles as a hygrometer for tracking humidity. It&#39;s especially useful if you travel in winter. For leak alerts too, see our <a class=\"text-[#00A99D] underline\" href=\"/articles/best-water-leak-detectors\">best water leak detectors</a>.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Sump Pump and Power Outages</h2>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Winter storms knock out power, and the thaw that follows can push water toward the house while the ground is still frozen. That&#39;s a bad time to discover your sump pump doesn&#39;t work.</p>\n<ul class=\"list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6\">\n<li><strong>Test the pump.</strong> Pour a bucket of water into the pit and make sure the pump kicks on, empties it, and shuts off.</li>\n<li><strong>Test the backup.</strong> Battery backups need charged batteries. Water-powered backups need water pressure. Test whichever you have.</li>\n<li><strong>No backup?</strong> Fall is the time to add one. See our guides to <a class=\"text-[#00A99D] underline\" href=\"/articles/backup-power-sump-pumps\">backup power for sump pumps</a> and <a class=\"text-[#00A99D] underline\" href=\"/articles/battery-vs-water-powered-sump-pumps\">battery vs. water-powered backups</a>.</li>\n<li><strong>Refresh your emergency plan.</strong> Know what you&#39;ll do if the basement takes on water during an outage. Our <a class=\"text-[#00A99D] underline\" href=\"/articles/basement-emergency-water-plan\">basement emergency water plan</a> walks through it.</li>\n</ul>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Air, Humidity, and Safety</h2>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Change How You Run the Dehumidifier</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Winter air holds less moisture, so most basements need less dehumidifying. There&#39;s also a hardware issue: standard compressor dehumidifiers work poorly once the basement drops below about 65°F, and their coils can frost up. Many have an auto-defrost mode, but they still lose efficiency in the cold.</p>\n<ul class=\"list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6\">\n<li><strong>In a heated, finished basement:</strong> keep running it, but lower the runtime and target 30 to 50% humidity.</li>\n<li><strong>In a cold, unfinished basement:</strong> if humidity stays under 50% on its own, turn it off, clean the filter and bucket, and store it. If humidity stays high even in winter, you likely have a water problem worth fixing, or you may need a model rated for low temperatures.</li>\n</ul>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">See our <a class=\"text-[#00A99D] underline\" href=\"/articles/basement-humidity-guide\">basement humidity guide</a> and <a class=\"text-[#00A99D] underline\" href=\"/articles/best-basement-dehumidifiers\">best basement dehumidifiers</a>.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Watch for Winter Condensation</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">When warm, moist air from the house hits cold foundation walls, it can condense, especially behind furniture, boxes, and finished walls. Pull stored items a few inches away from exterior walls so air can circulate. If you see water on the walls, our <a class=\"text-[#00A99D] underline\" href=\"/articles/wet-basement-walls\">wet basement walls guide</a> explains how to tell condensation from a leak.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Test for Radon</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Radon levels are often higher in winter, when the house is closed up. That makes winter a good time to test, and short-term tests are meant to be run with the windows and doors kept shut anyway. Our <a class=\"text-[#00A99D] underline\" href=\"/articles/radon-testing-and-mitigation\">radon testing guide</a> covers kits and what the numbers mean.</p>\n<h3 class=\"text-xl font-bold text-[#1B2A3B] mb-3 mt-8\">Check CO Alarms Near the Furnace</h3>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">The furnace and water heater run hardest in winter. If either is in the basement, you need a working carbon monoxide alarm down there. A plug-in alarm with a battery backup like the <a class=\"text-[#00A99D] underline\" href=\"https://link.amazon/B07tcNN1S\" rel=\"sponsored nofollow\" target=\"_blank\">First Alert CO605</a> keeps working during an outage. Also clear storage away from the furnace and water heater. Most manufacturers call for at least a few feet of open space, and boxes stacked against a furnace are a fire risk.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Heat and Comfort</h2>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">If you use the basement in winter, plan your heat before the first cold snap, not after. A heater with an anti-freeze setting, like the <a class=\"text-[#00A99D] underline\" href=\"https://link.amazon/B03wKYCHp\" rel=\"sponsored nofollow\" target=\"_blank\">De&#39;Longhi oil-filled radiator</a>, also helps protect pipes in an unheated basement. Our guide on <a class=\"text-[#00A99D] underline\" href=\"/articles/how-to-heat-a-basement\">how to heat a basement</a> compares every option and what each costs to run.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Pests</h2>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Mice start looking for warm places as soon as nights turn cold. The rim joist sealing above blocks the biggest entry point. For the rest, including gaps around pipes, dryer vents, and utility lines, see our <a class=\"text-[#00A99D] underline\" href=\"/articles/basement-mice-pest-prevention\">basement mice and pest prevention guide</a>.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Storage</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6\">\n<li><strong>Get things off the floor.</strong> A shelf or pallet keeps boxes out of meltwater if the worst happens.</li>\n<li><strong>Switch to plastic bins.</strong> Cardboard soaks up moisture and invites mice.</li>\n<li><strong>Pull items away from exterior walls</strong> to prevent condensation and mold behind them.</li>\n<li><strong>In an unheated basement,</strong> move anything that can&#39;t freeze, like latex paint, some cleaning products, and canned goods, to a warmer spot.</li>\n</ul>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">The Complete Fall Basement Checklist</h2>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable checklist or comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[640px] text-sm border-collapse border border-gray-200 rounded-lg\">\n<thead class=\"bg-[#1B2A3B] text-white\">\n<tr>\n<th class=\"w-16 p-3 text-center font-semibold\">Done</th>\n<th class=\"text-left p-3 font-semibold\">Task</th>\n<th class=\"text-left p-3 font-semibold\">Deadline</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Disconnect hoses, shut off and drain outdoor faucets</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first freeze</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Insulate exposed pipes near exterior walls and the rim joist</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first freeze</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Seal rim joist gaps</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first freeze</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Check sump discharge line outlet</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first freeze</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Find, test, and tag the main water shutoff</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first freeze</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Clear gutters after the leaves drop</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first snow</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Extend downspouts 6 feet from the foundation</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first snow</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Clear and cover window wells</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first snow</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Test the sump pump and its backup</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first snow</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Decide where shoveled snow will go</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Before first snow</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Add a temperature and humidity sensor</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Early winter</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Adjust or store the dehumidifier</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Early winter</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Test for radon</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Early winter</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Check CO alarms and clear space around the furnace</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Early winter</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Move storage off the floor and away from walls</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Early winter</td>\n</tr>\n<tr>\n<td class=\"w-16 p-3 border-b border-gray-200 text-gray-700 text-center align-middle whitespace-nowrap text-xl leading-none\" style=\"font-family:Arial,Segoe UI Symbol,sans-serif\">☐</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Check for signs of mice</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Early winter</td>\n</tr>\n</tbody></table></div>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Cost Breakdown and 10-Year Total Cost of Ownership</h2>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">Most of this checklist is free or close to it. Here&#39;s what the paid parts typically cost, compared with what they prevent.</p>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable checklist or comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[640px] text-sm border-collapse border border-gray-200 rounded-lg\">\n<thead class=\"bg-[#1B2A3B] text-white\">\n<tr>\n<th class=\"text-left p-3 font-semibold\">Item</th>\n<th class=\"text-left p-3 font-semibold\">Typical cost</th>\n<th class=\"text-left p-3 font-semibold\">Lasts</th>\n<th class=\"text-left p-3 font-semibold\">10-year cost</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Foam pipe insulation</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$15 to $50</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Many years</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$15 to $50</td>\n</tr>\n<tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Spray foam for the rim joist</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$10 to $40 for gaps</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Many years</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$10 to $40</td>\n</tr>\n<tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Outdoor faucet covers</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$5 to $15 each</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Several winters</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$15 to $45 each</td>\n</tr>\n<tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Downspout extensions</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$10 to $30 each</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Several years</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$20 to $90 each</td>\n</tr>\n<tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Temperature and humidity sensor</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">About $35</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Several years</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$35 to $70</td>\n</tr>\n<tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Radon test kit</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">About $15 to $30</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">One test</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">$30 to $150, testing every few years</td>\n</tr>\n<tr>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Window well covers</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Varies by size and type</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">Many years</td>\n<td class=\"p-3 border-b border-gray-200 text-gray-700\">See our <a class=\"text-[#00A99D] underline\" href=\"/articles/best-window-well-covers-egress-ladders\">window well cover guide</a></td>\n</tr>\n</tbody></table></div>\n<p class=\"text-gray-700 mb-4 leading-relaxed\"><strong>What they prevent:</strong> a burst pipe often means $400 to $1,500 in plumbing repair plus water damage cleanup, and a burned-out sump pump has to be replaced right when you need it most. See our <a class=\"text-[#00A99D] underline\" href=\"/cost-guides/sump-pump-replacement-cost\">sump pump replacement cost guide</a>.</p>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">Common Mistakes</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6\">\n<li><strong>Leaving a hose connected.</strong> It traps water in the faucet, even a frost-free one, and splits it.</li>\n<li><strong>Cleaning gutters too early.</strong> Do it after the leaves fall, not before.</li>\n<li><strong>Shoveling snow against the foundation.</strong> It all melts at once during the first thaw.</li>\n<li><strong>Forgetting the sump discharge line.</strong> A frozen outlet can burn out a working pump.</li>\n<li><strong>Running a standard dehumidifier in a cold basement.</strong> It frosts up, runs constantly, and barely removes any moisture.</li>\n<li><strong>Stacking boxes against the furnace or water heater.</strong> That&#39;s a fire risk, and it blocks access when you need it.</li>\n<li><strong>Turning the heat way down when traveling.</strong> Keep the house at 55°F or higher, and use a sensor that alerts you if it drops.</li>\n<li><strong>Testing radon with the windows open.</strong> Short-term tests need closed-house conditions to give a real reading.</li>\n</ul>\n<h2 class=\"text-2xl font-bold text-[#1B2A3B] mb-4 mt-10\">When to Call a Pro</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6\">\n<li>An outdoor faucet has no interior shutoff and you want one added</li>\n<li>The main water shutoff is stuck or leaking</li>\n<li>The sump pump fails its test, or you want a backup system installed</li>\n<li>You find active water coming through walls or the floor, not just condensation</li>\n<li>Your radon test comes back at or above 4 pCi/L</li>\n<li>The furnace hasn&#39;t been serviced in more than a year</li>\n</ul>\n<p class=\"text-gray-700 mb-4 leading-relaxed\">DIY-friendly: almost everything else on this list. Most homeowners can finish it in a weekend.</p>\n"
const glossary = "<div><dt class=\"font-bold text-[#1B2A3B]\">Hard freeze:</dt><dd>Several hours below about 25°F, cold enough to freeze exposed pipes and plants.</dd></div>\n<div><dt class=\"font-bold text-[#1B2A3B]\">Rim joist:</dt><dd>The wood framing that sits on top of the foundation wall. The leakiest spot in most basements.</dd></div>\n<div><dt class=\"font-bold text-[#1B2A3B]\">Frost-free faucet:</dt><dd>An outdoor faucet with its shutoff inside the warm wall so it doesn't freeze.</dd></div>\n<div><dt class=\"font-bold text-[#1B2A3B]\">Sump discharge line:</dt><dd>The pipe that carries water from the sump pump to the outside.</dd></div>\n<div><dt class=\"font-bold text-[#1B2A3B]\">Ice dam:</dt><dd>A ridge of ice at the roof edge that traps melting snow, which can leak into walls and down to the foundation.</dd></div>\n<div><dt class=\"font-bold text-[#1B2A3B]\">Hygrometer:</dt><dd>A device that measures humidity.</dd></div>\n<div><dt class=\"font-bold text-[#1B2A3B]\">Condensation:</dt><dd>Water that forms when warm, moist air hits a cold surface like a foundation wall.</dd></div>\n<div><dt class=\"font-bold text-[#1B2A3B]\">Closed-house conditions:</dt><dd>Keeping windows and doors shut before and during a radon test.</dd></div>\n<div><dt class=\"font-bold text-[#1B2A3B]\">pCi/L:</dt><dd>Picocuries per liter, the unit used to measure radon.</dd></div>"
const related = "<ul class=\"space-y-2 text-sm\"><li><a href=\"/articles/spring-basement-checklist\" class=\"text-[#00A99D] hover:underline\">Spring Basement Checklist</a></li>\n<li><a href=\"/articles/frozen-pipes-in-basement\" class=\"text-[#00A99D] hover:underline\">Frozen Pipes in the Basement</a></li>\n<li><a href=\"/articles/how-to-heat-a-basement\" class=\"text-[#00A99D] hover:underline\">How to Heat a Basement</a></li>\n<li><a href=\"/articles/basement-mice-pest-prevention\" class=\"text-[#00A99D] hover:underline\">Basement Mice and Pest Prevention</a></li>\n<li><a href=\"/articles/backup-power-sump-pumps\" class=\"text-[#00A99D] hover:underline\">Backup Power for Sump Pumps</a></li>\n<li><a href=\"/articles/basement-humidity-guide\" class=\"text-[#00A99D] hover:underline\">Basement Humidity Guide</a></li>\n<li><a href=\"/articles/radon-testing-and-mitigation\" class=\"text-[#00A99D] hover:underline\">Radon Testing and Mitigation</a></li>\n<li><a href=\"/articles/best-window-well-covers-egress-ladders\" class=\"text-[#00A99D] hover:underline\">Best Window Well Covers</a></li></ul>"

export default function WinterizeABasementPage() {
  return (
    <main className="w-full min-w-0 max-w-4xl mx-auto px-4 py-10">
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
        <span className="bg-teal-50 text-[#00A99D] font-semibold px-2 py-1 rounded-full text-xs">Seasonal</span>
        <span>By The Basement Guide Editorial Team</span>
        <span>12 min read</span>
        <span>Updated October 23, 2026</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1B2A3B] mb-6 leading-tight">{"How to Winterize a Basement Before the First Freeze"}</h1>
      <div className="relative w-full aspect-[3/2] mb-10 rounded-xl overflow-hidden bg-slate-100">
        <Image src="/how-to-winterize-a-basement-hero.jpg" alt="Basement with insulated pipes and a sump pump ready for winter." fill sizes="(max-width: 768px) 100vw, 896px" className="object-cover" priority />
      </div>
      <div dangerouslySetInnerHTML={{ __html: beforeForm }} />
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#1B2A3B] mb-4">Get Free Basement Waterproofing Quotes</h2>
        <LeadForm defaultProjectType="393" />
      </div>
      <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6 mt-10">Frequently Asked Questions</h2>
      <div className="space-y-4 mb-10">{faqs.map(faq => <div key={faq.question} className="border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-[#1B2A3B] mb-2">{faq.question}</h3><p className="text-sm text-gray-600">{faq.answer}</p></div>)}</div>
      <h2 className="text-2xl font-bold text-[#1B2A3B] mb-4 mt-10">Glossary</h2>
      <dl className="space-y-3 text-sm text-gray-700 mb-10" dangerouslySetInnerHTML={{ __html: glossary }} />
      <div className="bg-[#F0FAFA] border border-teal-100 rounded-2xl p-6 mb-10">
        <h3 className="font-bold text-[#1B2A3B] mb-4">Related Guides</h3>
        <div dangerouslySetInnerHTML={{ __html: related }} />
      </div>
      <AuthorBio />
      <p className="text-xs text-gray-500 mt-8 leading-relaxed"><strong>Affiliate disclosure:</strong> As an Amazon Associate we earn from qualifying purchases. Links to Amazon on this page use our affiliate tag and may earn us a commission at no extra cost to you.</p>
    </main>
  )
}
