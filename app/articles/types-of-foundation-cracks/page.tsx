import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Types of Foundation Cracks: What Each One Means | The Basement Guide',
  description: 'An expert diagnostic guide to foundation cracks. Learn the difference between vertical, horizontal, diagonal, and stair-step cracks.',
}

export default function FoundationCracksArticle() {
  return (
    <div className="bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative h-[60vh] min-h-[400px] bg-slate-900">
        <Image
          src="/foundation-crack-closeup.jpg.jpg"
          alt="Close up of a structural foundation crack"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
                Diagnostic Guide
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Types of Foundation Cracks: What Each One Means
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Not all cracks are created equal. Use this 2026 diagnostic guide to determine if your foundation crack is a minor cosmetic issue or a structural red flag.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">BG</div>
                <div className="text-white">
                  <p className="font-bold">The Basement Guide Staff</p>
                  <p className="text-slate-400 text-sm">Updated February 2026 • 15 min read</p>
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
                  Cracks are the "language" of your foundation. They tell the story of how your home is interacting with the soil, water, and weight of the structure.
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">The "When to Worry" Quick Guide</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center">
                    <div className="text-green-600 font-bold text-lg mb-2">Cosmetic</div>
                    <p className="text-sm text-slate-600">Hairline cracks (&lt;1/8 inch). Usually from drying concrete.</p>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 text-center">
                    <div className="text-amber-600 font-bold text-lg mb-2">Monitor</div>
                    <p className="text-sm text-slate-600">1/8 to 1/4 inch cracks. Mark the ends and re-check in 3 months.</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center">
                    <div className="text-red-600 font-bold text-lg mb-2">Critical</div>
                    <p className="text-sm text-slate-600">&gt;1/4 inch, horizontal, or stair-step patterns. Call an engineer.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">1. Vertical Cracks (The Common Settler)</h2>
                <p>
                  Vertical cracks run straight up and down (or within 30 degrees of vertical). In most cases, these are the least concerning types of cracks.
                </p>
                <ul>
                  <li><strong>The Cause:</strong> Concrete shrinkage during the curing process or minor "even" settlement of the structure.</li>
                  <li><strong>The Fix:</strong> Low-pressure polyurethane injection is usually enough to stop water seepage.</li>
                </ul>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">2. Horizontal Cracks (The Red Alert)</h2>
                <p>
                  Horizontal cracks run side-to-side across your foundation wall. If you see this, <strong>take it seriously</strong>.
                </p>
                <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
                  <h4 className="text-teal-400 font-bold mb-2">Why It's Dangerous</h4>
                  <p className="m-0 text-slate-300">
                    Horizontal cracks indicate that the wall is failing under lateral (side) pressure from the soil. The wall is essentially snapping in half under the weight of the earth outside. This often leads to bowing walls.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">3. Diagonal Cracks (Uneven Movement)</h2>
                <p>
                  Diagonal cracks often resemble a "V" or move across the wall at a 45-degree angle.
                </p>
                <ul>
                  <li><strong>The Cause:</strong> Differential settlement. One part of your house is sinking faster than the rest.</li>
                  <li><strong>Where to Look:</strong> Often found near the corners of windows or doors in the basement.</li>
                </ul>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">4. Stair-Step Cracks (Block Wall Failure)</h2>
                <p>
                  If you have a concrete block (CMU) foundation, you won't usually see smooth diagonal cracks. Instead, the cracks will follow the mortar joints in a zig-zag pattern.
                </p>
                <p>
                  In 2026, stair-step cracks are increasingly common in areas with expansive clay soils. When the clay gets wet and pushes, the mortar joints are the weakest point and will "pop" first.
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-8 text-slate-900">Summary Diagnostic Table</h2>
                <div className="overflow-x-auto my-10">
                  <table className="min-w-full border-collapse border border-slate-200 text-sm">
                    <thead>
                      <tr className="bg-slate-100 font-bold">
                        <th className="border border-slate-200 p-3 text-left">Crack Type</th>
                        <th className="border border-slate-200 p-3 text-left">Structural Risk</th>
                        <th className="border border-slate-200 p-3 text-left">Primary Cause</th>
                        <th className="border border-slate-200 p-3 text-left">Urgency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 p-3 font-bold">Vertical</td>
                        <td className="border border-slate-200 p-3">Low</td>
                        <td className="border border-slate-200 p-3">Concrete Shrinkage</td>
                        <td className="border border-slate-200 p-3 text-green-600">Monitor / Seal</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3 font-bold">Horizontal</td>
                        <td className="border border-slate-200 p-3 text-red-600">Extreme</td>
                        <td className="border border-slate-200 p-3">Hydrostatic Pressure</td>
                        <td className="border border-slate-200 p-3 text-red-600 font-bold uppercase">Immediate Action</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3 font-bold">Diagonal</td>
                        <td className="border border-slate-200 p-3 text-amber-600">Moderate</td>
                        <td className="border border-slate-200 p-3">Differential Settlement</td>
                        <td className="border border-slate-200 p-3 text-amber-600">Call Engineer</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3 font-bold">Stair-Step</td>
                        <td className="border border-slate-200 p-3 text-red-600">High</td>
                        <td className="border border-slate-200 p-3">Bowing / Settlement</td>
                        <td className="border border-slate-200 p-3 text-red-600 font-bold">Structural Audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 my-12">
                  <h3 className="text-teal-800 text-xl font-bold mb-4">Pro Tip: The Pencil Test</h3>
                  <p className="text-teal-900 m-0">
                    If you can fit the tip of a pencil into a crack, it’s no longer just cosmetic. If you can fit a nickel into the crack, it is a structural priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-xl mb-4">Next Steps</h3>
                  <div className="space-y-4">
                    <Link href="/articles/bowing-basement-walls" className="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                      <span className="text-blue-600 text-xs font-bold uppercase block mb-1">Structural Guide</span>
                      <span className="font-bold text-slate-800">Fixing Bowing Basement Walls</span>
                    </Link>
                    <Link href="/articles/foundation-crack-repair-cost" className="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-teal-600 text-xs font-bold uppercase block mb-1">Cost Guide</span>
                      <span className="font-bold text-slate-800">2026 Crack Repair Pricing</span>
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-2xl text-white">
                  <h3 className="font-bold text-xl mb-2 italic">"Don't ignore the cracks."</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Foundations don't heal themselves. Small cracks today are large structural failures tomorrow.
                  </p>
                  <button className="w-full bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-400 transition-colors">
                    Talk to a Specialist
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
