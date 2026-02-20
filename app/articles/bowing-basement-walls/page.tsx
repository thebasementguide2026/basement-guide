import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bowing Basement Walls: Causes, Repair Methods & Cost | The Basement Guide',
  description: 'A comprehensive 2026 guide to bowing basement walls. Learn to diagnose how bad the damage is, compare repair options, and understand true costs.',
}

export default function BowingWallsArticle() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Article Hero */}
      <section className="relative h-[70vh] min-h-[400px] bg-slate-900 overflow-hidden">
        <Image
          src="/bowed-wall.jpg"
          alt="Bowing basement wall with structural cracks"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
                Structural Pillar Guide
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Bowing Basement Walls: The 2026 Homeowner's Guide
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                A bowing wall is a structural emergency in slow motion. This guide covers how to diagnose the cause, measure the deflection, and choose the most cost-effective repair.
              </p>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">BG</div>
                  <span>By The Basement Guide Editorial Team</span>
                </div>
                <span>•</span>
                <span>Last Updated: February 19, 2026</span>
                <span>•</span>
                <span>18 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Article Body */}
            <div className="lg:col-span-8">
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="lead text-xl text-slate-600 mb-12">
                  If you've noticed your basement walls are no longer plumb, you aren't just looking at a cosmetic issue. You're looking at the failure of your home's foundation. Left unaddressed, a bowing wall can eventually collapse, leading to catastrophic structural failure and massive repair bills.
                </p>

                <div className="bg-slate-50 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl">
                  <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Comparison at a Glance: Repair Methods
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 text-left">
                          <th className="py-3 font-bold">Method</th>
                          <th className="py-3 font-bold">Best For</th>
                          <th className="py-3 font-bold">Avg. Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 font-medium">Carbon Fiber Straps</td>
                          <td className="py-3">Bowing &lt; 2 inches</td>
                          <td className="py-3">$500 – $1,200 per strap</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 font-medium">Steel I-Beams</td>
                          <td className="py-3">Severe bowing/Shearing</td>
                          <td className="py-3">$1,500 – $3,000 per beam</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 font-medium">Wall Anchors</td>
                          <td className="py-3">Straightening the wall</td>
                          <td className="py-3">$1,000 – $2,500 per anchor</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h2>Chapter 1: Why Basement Walls Bow</h2>
                <p>
                  Foundations bow because of external pressure. While concrete is incredibly strong in compression (holding up the house), it is relatively weak in <strong>tension</strong> (resisting lateral force from the side).
                </p>

                <h3>Hydrostatic Pressure &amp; Expansive Clay</h3>
                <p>
                  When soil becomes saturated with water, it expands. In areas with high clay content, this expansion is massive. This creates <strong>hydrostatic pressure</strong> that pushes against the wall. Think of it like a giant hydraulic jack slowly crushing your foundation.
                </p>

                <div className="bg-slate-900 text-blue-400 p-6 rounded-lg font-mono text-sm my-8">
                  <p className="text-white mb-2">// TECHNICAL DIAGRAM: LATERAL FORCE</p>
                  <pre>
{`[ HOUSE WEIGHT ]
 ||
 VV
############## <-- Soil Line (Rain/Snow)
# [SOIL] # <-- Expansive Clay
# ---> # <-- Hydrostatic Pressure
# ---> # <-- [LATERAL FORCE]
# [WALL] # <-- Bowing begins here
# ( ) # <-- Center point deflection
# #
############## <-- Footing`}
                  </pre>
                </div>

                <h2>Chapter 2: Diagnosing the Severity</h2>
                <p>
                  Not all bowing walls require the same fix. The amount of "deflection" (how far the wall has moved from its original position) determines the repair method.
                </p>
                <ul>
                  <li><strong>Minor ( &lt; 2 inches ):</strong> Usually fixable with carbon fiber reinforcement. Non-invasive and fast.</li>
                  <li><strong>Moderate ( 2 – 4 inches ):</strong> Requires steel I-beams or wall anchors to stop further movement.</li>
                  <li><strong>Severe ( &gt; 4 inches ):</strong> The wall may be beyond simple reinforcement and may require partial or full replacement.</li>
                </ul>

                <h2>Chapter 3: The Best Repair Methods for 2026</h2>
                <p>
                  In modern foundation repair, there are three primary ways to address a bowing wall.
                </p>

                <h3>1. Carbon Fiber Straps</h3>
                <p>
                  Carbon fiber is 10 times stronger than steel in tension. Contractors apply these high-tech straps to the inside of the wall using industrial-strength epoxy.
                </p>
                <div className="flex flex-wrap gap-4 my-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-bold">✅ Low Profile (Can be painted over)</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-bold">✅ No Excavation Required</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-bold">❌ Cannot straighten the wall</span>
                </div>

                <h3>2. Steel I-Beams (PowerBraces)</h3>
                <p>
                  Vertical steel beams are bolted to the floor and the floor joists above. This creates a "cage" that prevents the wall from moving inward any further.
                </p>

                <h3>3. Wall Anchors</h3>
                <p>
                  This involves burying an "anchor" plate in your yard and connecting it to a plate on your basement wall via a long steel rod. By tightening the nut inside, you can actually pull the wall back toward its original position over time.
                </p>

                <h2>Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-4">
                    <h4 className="font-bold text-slate-900">Can I ignore a bowing wall?</h4>
                    <p className="text-slate-600">Absolutely not. Once a wall starts bowing, the structural integrity of the concrete is compromised. It will only get worse, never better, on its own.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-4">
                    <h4 className="font-bold text-slate-900">How long does repair take?</h4>
                    <p className="text-slate-600">Most strap or beam installations take 1–2 days. Wall anchors may take slightly longer if excavation is required in the yard.</p>
                  </div>
                </div>

                <div className="bg-blue-900 text-white p-10 rounded-2xl mt-12">
                  <h2 className="text-white mt-0">Get a Professional Assessment</h2>
                  <p className="text-blue-100 mb-8">
                    Structural repairs are not a DIY project. A mistake here can lead to home collapse or massive liability issues. Get a free, no-obligation quote from a structural specialist.
                  </p>
                  <Link href="/get-free-quotes" className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-block">
                    Find Foundation Pros Near Me →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-8">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Structural Glossary</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="font-bold block">Deflection</span>
                      <span className="text-slate-600">The distance a wall has moved from its original plumb position.</span>
                    </div>
                    <div>
                      <span className="font-bold block">Expansive Clay</span>
                      <span className="text-slate-600">Soil that grows in volume when wet, putting pressure on foundations.</span>
                    </div>
                    <div>
                      <span className="font-bold block">Shearing</span>
                      <span className="text-slate-600">When the bottom of the wall slides inward over the floor slab.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-900 mb-4">Cost Summary</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>Strap System: $4k – $8k</li>
                    <li>Beam System: $6k – $12k</li>
                    <li>Anchor System: $5k – $15k</li>
                  </ul>
                  <Link href="/articles/foundation-repair-cost" className="text-blue-600 font-bold mt-4 block hover:underline">
                    Full Cost Breakdown →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
