import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basement Insulation: The Complete 2026 Guide',
  description: 'Rigid foam vs. spray foam vs. mineral wool for basement walls. Learn how to stop energy loss, prevent condensation, and choose the right R-value for your climate.',
};

export default function BasementInsulationGuide() {
  return (
    <div className="bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden">
        <Image
          src="/foundation-waterproofing-construction.jpg.png"
          alt="Basement wall insulation installation"
          fill
          className="object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-orange-500" />
                <span className="text-orange-400 text-sm font-black uppercase tracking-[0.3em]">
                  Efficiency Masterclass
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                Basement Insulation: <br className="hidden md:block" />
                The 2026 Guide
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light">
                Proper basement insulation can cut heating and cooling costs by 20–30% and eliminate condensation problems that lead to mold.
              </p>
              
              <div className="flex items-center gap-6 p-1 pr-6 bg-white/5 backdrop-blur-md rounded-full w-fit border border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  BG
                </div>
                <div>
                  <div className="text-white font-bold tracking-wide">The Basement Guide Staff</div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span>Updated Feb 2026</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span>15 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Intro Section */}
          <div className="prose prose-slate prose-lg max-w-none mb-20">
            <p className="text-xl leading-relaxed text-slate-600 italic border-l-4 border-orange-500 pl-6 mb-12">
              This guide covers every insulation type, R-value requirements, and the right method for your basement walls, rim joists, and ceiling.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Insulation Types Compared</h2>
            <p>To choose the right material, you must understand the trade-offs between cost, R-value, and moisture resistance.</p>
          </div>

          {/* Types Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: 'Rigid Foam (XPS/EPS)', 
                r: 'R-5', 
                desc: 'Most popular for basement walls. Moisture-resistant, continuous coverage eliminates thermal bridging.',
                color: 'bg-blue-500' 
              },
              { 
                title: 'Spray Foam', 
                r: 'R-6.5', 
                desc: 'Highest R-value per inch. Acts as both insulation and vapor barrier. Excellent for rim joists.',
                color: 'bg-orange-500' 
              },
              { 
                title: 'Mineral Wool', 
                r: 'R-4', 
                desc: 'Fire-resistant, vapor-permeable, and excellent soundproofing. Best for above-grade walls.',
                color: 'bg-emerald-500' 
              }
            ].map((type, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className={`w-12 h-12 ${type.color} rounded-2xl mb-6 flex items-center justify-center text-white font-bold shadow-lg`}>
                  {type.r}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{type.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{type.desc}</p>
              </div>
            ))}
          </div>

          {/* R-Value Requirements */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">R-Value Requirements by Climate Zone</h2>
            <div className="space-y-4">
              {[
                { zone: 'Zones 1–2', area: 'South Florida, Gulf Coast', spec: 'R-13 minimum', color: 'border-yellow-200' },
                { zone: 'Zones 3–4', area: 'Mid-Atlantic, PNW', spec: 'R-15 to R-19', color: 'border-orange-200' },
                { zone: 'Zones 5–6', area: 'Northeast, Upper Midwest', spec: 'R-15 to R-20', color: 'border-red-200' },
                { zone: 'Zones 7–8', area: 'Northern Border, Alaska', spec: 'R-20+', color: 'border-purple-200' }
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between p-6 bg-white border ${item.color} rounded-2xl shadow-sm hover:shadow-md transition-shadow`}>
                  <div>
                    <span className="font-black text-slate-900 block">{item.zone}</span>
                    <span className="text-slate-500 text-sm">{item.area}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900">{item.spec}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Location Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight text-center">Where to Insulate</h2>
            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest">Location</th>
                    <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest">Best Method</th>
                    <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest text-right">Target R-Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { loc: 'Foundation Walls', method: '2" rigid foam + framing', r: 'R-15+' },
                    { loc: 'Rim Joists', method: 'Closed-cell spray foam', r: 'R-13' },
                    { loc: 'Basement Ceiling', method: 'Fiberglass batts', r: 'R-30+' },
                    { loc: 'Slab Floor', method: '1–2" EPS under subfloor', r: 'R-5 to R-10' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-6 text-slate-900 font-bold">{row.loc}</td>
                      <td className="p-6 text-slate-600">{row.method}</td>
                      <td className="p-6 text-slate-900 font-black text-right">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Condensation Section */}
          <section className="bg-slate-900 rounded-[3rem] p-12 mb-20 relative overflow-hidden text-white">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">The Condensation Problem</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                The most common insulation mistake in basements is placing vapor-impermeable insulation on the warm side of the wall — trapping moisture inside the assembly and causing mold on the framing.
              </p>
              <div className="flex items-center gap-4 p-6 bg-white/10 rounded-2xl border border-white/10">
                <div className="text-2xl">⚠️</div>
                <div className="text-sm font-medium">
                  <span className="text-orange-400 font-black block mb-1 uppercase tracking-widest">Key Rule</span>
                  Keep the Dew Point Outside the Assembly. Rigid foam between concrete and framing is essential.
                </div>
              </div>
            </div>
          </section>

          {/* Lead Form CTA */}
          <div className="bg-orange-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-orange-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-black mb-6">Get Insulation Quotes</h2>
              <p className="text-orange-100 text-xl mb-12 font-light">
                A properly insulated basement pays for itself in energy savings. Compare quotes from licensed contractors who specialize in basement insulation.
              </p>
              <div className="bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
