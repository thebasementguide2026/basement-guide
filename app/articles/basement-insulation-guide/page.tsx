import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Basement Insulation: The Complete 2026 Guide',
  description: 'Rigid foam vs. spray foam vs. mineral wool for basement walls. Learn how to stop energy loss, prevent condensation, and choose the right R-value for your climate.',
};

export default function BasementInsulationGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-teal-600 hover:underline">← Back to Guides</Link>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded">Insulation</span>
          <span className="text-gray-400 text-xs">15 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Basement Insulation: The 2026 Guide
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Proper basement insulation can cut heating and cooling costs by 20–30% and eliminate condensation problems that lead to mold. This guide covers every insulation type, R-value requirements, and the right method for your basement walls, rim joists, and ceiling.
        </p>
      </header>

      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12">
        <Image
          src="/foundation-waterproofing-construction.jpg.png"
          alt="Basement wall insulation installation"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Insulation Types Compared</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-2">Rigid Foam (XPS/EPS)</h3>
            <p className="text-2xl font-extrabold text-teal-600 mb-2">R-5 per inch</p>
            <p className="text-slate-600">Most popular for basement walls. Moisture-resistant, continuous coverage eliminates thermal bridging. XPS (blue/pink boards) offers slightly better moisture resistance than EPS.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-2">Closed-Cell Spray Foam</h3>
            <p className="text-2xl font-extrabold text-teal-600 mb-2">R-6.5 per inch</p>
            <p className="text-slate-600">Highest R-value per inch. Acts as both insulation and vapor barrier. Excellent for rim joists and irregular surfaces. Higher cost ($1–$2/sqft installed) but most complete solution.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-2">Mineral Wool (Rockwool)</h3>
            <p className="text-2xl font-extrabold text-teal-600 mb-2">R-3 to R-4 per inch</p>
            <p className="text-slate-600">Fire-resistant, vapor-permeable, and excellent soundproofing. Best for above-grade basement walls or finished spaces. Requires vapor barrier in cold climates.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-teal-50 p-8 rounded-2xl border border-teal-100">
        <h2 className="text-2xl font-bold text-teal-900 mb-4">R-Value Requirements by Climate Zone</h2>
        <ul className="space-y-4 text-slate-700">
          <li><strong>Zones 1–2 (South Florida, Gulf Coast):</strong> R-13 minimum for basement walls. Focus on vapor control — humidity is the primary issue, not heat loss.</li>
          <li><strong>Zones 3–4 (Mid-Atlantic, Pacific Northwest):</strong> R-15 to R-19 for walls. New York falls in Zone 5 — R-15 continuous or R-19 cavity required by code.</li>
          <li><strong>Zones 5–6 (Northeast, Upper Midwest):</strong> R-15 to R-20 walls. Rim joist insulation critical — often the largest source of heat loss in older homes.</li>
          <li><strong>Zones 7–8 (Northern Canada border, Alaska):</strong> R-20+ walls, R-38 rim joists. Thermal bridging must be eliminated through continuous exterior insulation.</li>
          <li><strong>New York State (Zone 5):</strong> IRC 2021 requires R-15 continuous or R-19 cavity + thermal break for new construction.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Where to Insulate in Your Basement</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left p-4 font-semibold text-slate-700">Location</th>
                <th className="text-left p-4 font-semibold text-slate-700">Best Method</th>
                <th className="text-left p-4 font-semibold text-slate-700">Target R-Value (Zone 5)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-medium">Foundation Walls</td>
                <td className="p-4">2" rigid foam + framing or spray foam</td>
                <td className="p-4 font-bold text-teal-600">R-15 continuous</td>
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50">
                <td className="p-4 font-medium">Rim Joists</td>
                <td className="p-4">Closed-cell spray foam (2")</td>
                <td className="p-4 font-bold text-teal-600">R-13 minimum</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-medium">Basement Ceiling (unheated)</td>
                <td className="p-4">Fiberglass batts between joists</td>
                <td className="p-4 font-bold text-teal-600">R-30 to R-38</td>
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50">
                <td className="p-4 font-medium">Slab Floor</td>
                <td className="p-4">1–2" EPS under subfloor</td>
                <td className="p-4 font-bold text-teal-600">R-5 to R-10</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Window Wells</td>
                <td className="p-4">Rigid foam cover</td>
                <td className="p-4 font-bold text-teal-600">R-5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Condensation Problem: Why It Matters</h2>
        <p className="text-lg text-slate-600 mb-4">
          The most common insulation mistake in basements is placing vapor-impermeable insulation on the warm side of the wall — trapping moisture inside the assembly and causing mold on the framing. In cold climates, the vapor retarder belongs on the interior (warm) side.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-900 mb-2">Key Rule: Keep the Dew Point Outside the Assembly</h3>
          <p className="text-amber-800">Rigid foam on the interior face of the foundation wall (between concrete and framing) keeps the framing warm and dry. Never place fiberglass batts directly against concrete — moisture will condense on the cold surface and cause mold.</p>
        </div>
      </section>

      <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get Insulation Quotes for Your Basement</h2>
        <p className="mb-8 opacity-90 max-w-lg mx-auto">
          A properly insulated basement pays for itself in energy savings. Get free quotes from local insulation contractors today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#get-quotes" className="bg-white text-teal-700 px-8 py-4 rounded-lg font-bold hover:bg-teal-50 transition shadow-lg">
            Get Free Quotes →
          </Link>
        </div>
      </div>
    </article>
  );
}
