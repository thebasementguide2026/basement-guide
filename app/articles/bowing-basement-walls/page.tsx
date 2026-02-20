import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bowing Basement Walls: Causes, Repair Methods & Cost | The Basement Guide',
  description: 'A comprehensive 2026 guide to fixing bowing basement walls. Comparing carbon fiber straps, wall anchors, and piering for structural stability.',
}

export default function BowingWallsArticle() {
  return (
    <div className="bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative h-[60vh] min-h-[400px] bg-slate-900">
        <Image
          src="/foundation-concrete-forms.jpg.png" // Temporary placeholder
          alt="Bowing basement wall with structural cracks"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
                Pillar Guide: Structural
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Bowing Basement Walls: Causes, Repair Methods & Cost
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                A bowing wall is a structural emergency in slow motion. Learn how to diagnose the cause and choose the right repair method before the damage becomes irreversible.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">BG</div>
                <div className="text-white">
                  <p className="font-bold">The Basement Guide Staff</p>
                  <p className="text-slate-400 text-sm">Updated February 2026 • 18 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="lead text-2xl text-slate-700 font-medium mb-8">
                  If you’ve noticed a horizontal crack in your foundation or a slight inward curve in your basement wall, you are witnessing the effects of thousands of pounds of hydrostatic pressure.
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">The Physics of a Bowing Wall</h2>
                <p>
                  Most basement walls are designed to hold vertical weight (your house), not lateral weight (the soil). When the soil around your home becomes saturated with water—due to poor drainage or heavy rain—it expands. This is known as <strong>hydrostatic pressure</strong>.
                </p>
                <p>
                  In 2026, climate patterns have shifted toward more frequent "flash-flood" rain events, which put unprecedented stress on older foundations. When the pressure outside exceeds the strength of your concrete or block wall, the wall begins to deflect inward.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                  <h4 className="text-amber-800 font-bold mb-2 uppercase text-sm tracking-widest">The "Tipping Point"</h4>
                  <p className="text-amber-900 m-0">
                    Structural engineers generally consider a wall bowing more than <strong>2 inches</strong> to be in a state of advanced failure. At this stage, simple stabilization is no longer enough; you may need mechanical correction to pull the wall back into alignment.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">Repair Method 1: Carbon Fiber Straps</h2>
                <p>
                  Carbon fiber is the "space-age" solution to foundation repair. These straps are ten times stronger than steel in tensile strength but are as thin as a penny.
                </p>
                <ul>
                  <li><strong>Best For:</strong> Walls bowing less than 2 inches.</li>
                  <li><strong>How it Works:</strong> Straps are epoxied to the wall at 4-foot intervals. They fuse with the concrete to stop further movement.</li>
                  <li><strong>Pros:</strong> Non-invasive, no digging required, paintable, and cost-effective.</li>
                  <li><strong>Cons:</strong> Cannot "straighten" a wall; it only stabilizes it in its current position.</li>
                </ul>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">Repair Method 2: Wall Anchors</h2>
                <p>
                  Wall anchors are the heavy-duty mechanical choice. They utilize the stable soil away from your foundation to "pull" the wall back.
                </p>
                <ul>
                  <li><strong>Best For:</strong> Severe bowing (over 2 inches) and leaning walls.</li>
                  <li><strong>How it Works:</strong> An anchor plate is buried in your yard, connected by a steel rod to a plate on your interior wall. Over time, the rods are tightened to straighten the wall.</li>
                  <li><strong>Pros:</strong> Can actually restore the wall to its original vertical position.</li>
                  <li><strong>Cons:</strong> Requires exterior excavation in your yard; may not be possible if you have a deck or patio in the way.</li>
                </ul>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">Repair Method 3: Helical & Push Piering</h2>
                <p>
                  If your wall is bowing <em>and</em> sinking, you have a settlement issue. Piering transfers the weight of your home to deep, stable bedrock or load-bearing soil.
                </p>
                <ul>
                  <li><strong>Helical Piers:</strong> Large steel screws bored into the ground. Best for lighter structures or pre-construction.</li>
                  <li><strong>Push Piers:</strong> Steel tubes hydraulically driven into the ground using the house as a counterweight. Best for heavy, multi-story homes.</li>
                </ul>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">Cost Comparison Table (2026 Data)</h2>
                <div className="overflow-x-auto my-10">
                  <table className="min-w-full border-collapse border border-slate-200">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 p-4 text-left">Repair Method</th>
                        <th className="border border-slate-200 p-4 text-left">Avg. Cost Per Unit</th>
                        <th className="border border-slate-200 p-4 text-left">Typical Project Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 p-4">Carbon Fiber Straps</td>
                        <td className="border border-slate-200 p-4">$350 – $900</td>
                        <td className="border border-slate-200 p-4">$2,500 – $6,000</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-4">Wall Anchors</td>
                        <td className="border border-slate-200 p-4">$600 – $1,200</td>
                        <td className="border border-slate-200 p-4">$4,500 – $12,000</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-4">Steel I-Beams</td>
                        <td className="border border-slate-200 p-4">$700 – $1,500</td>
                        <td className="border border-slate-200 p-4">$5,000 – $15,000</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-4">Helical/Push Piers</td>
                        <td className="border border-slate-200 p-4">$1,500 – $2,500</td>
                        <td className="border border-slate-200 p-4">$15,000 – $35,000+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">Summary: Which Solution is Right for You?</h2>
                <p>
                  Choosing the right method depends entirely on the <strong>severity of the bow</strong> and your <strong>long-term plans</strong> for the home. If you plan to finish the basement, carbon fiber is the clear winner for its low profile. If the wall is structurally compromised, wall anchors are the gold standard.
                </p>
                <div className="bg-slate-800 text-white p-8 rounded-2xl my-12">
                  <h3 className="text-white text-2xl font-bold mb-4">Need a Professional Opinion?</h3>
                  <p className="text-slate-300 mb-6">
                    Bowing walls are not a DIY project. A single mistake can lead to catastrophic wall failure. We recommend getting at least three quotes from licensed foundation repair specialists.
                  </p>
                  <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
                    Find a Specialist Near You
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-xl mb-4">Related Foundation Guides</h3>
                  <div className="space-y-4">
                    <Link href="/articles/foundation-crack-repair-cost" className="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-teal-600 text-xs font-bold uppercase block mb-1">Cost Guide</span>
                      <span className="font-bold text-slate-800">Foundation Crack Repair Cost 2026</span>
                    </Link>
                    <Link href="/articles/types-of-foundation-cracks" className="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-blue-600 text-xs font-bold uppercase block mb-1">Diagnostic</span>
                      <span className="font-bold text-slate-800">Types of Foundation Cracks: What Each One Means</span>
                    </Link>
                    <Link href="/articles/basement-waterproofing-cost" className="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-teal-600 text-xs font-bold uppercase block mb-1">Waterproofing</span>
                      <span className="font-bold text-slate-800">Basement Waterproofing Cost 2026</span>
                    </Link>
                  </div>
                </div>

                <div className="bg-blue-600 p-8 rounded-2xl text-white">
                  <h3 className="font-bold text-xl mb-4">Free Structural Inspection</h3>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                    Most reputable foundation companies offer free inspections for homeowners. Don't let a "small" crack turn into a $30,000 nightmare.
                  </p>
                  <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Request Free Inspection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
