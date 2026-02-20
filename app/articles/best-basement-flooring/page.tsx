import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Waterproof Flooring for Basements 2026: LVP vs Ceramic vs Engineered',
  description: 'Complete comparison of basement flooring options. LVP, ceramic tile, and engineered wood - with costs, pros, cons, and installation guides.',
};

export default function BestBasementFlooring() {
  return (
    <div className="bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden">
        <Image
          src="/basement-flooring-installation.jpg.png"
          alt="Basement flooring installation"
          fill
          className="object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-emerald-500" />
                <span className="text-emerald-400 text-sm font-black uppercase tracking-[0.3em]">
                  Flooring Guide
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                Best Waterproof <br className="hidden md:block" />
                Basement Flooring
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light">
                Luxury Vinyl Plank (LVP) vs. Ceramic Tile vs. Engineered Hardwood. We compare the durability, cost, and flood-resistance of the top 2026 choices.
              </p>
              
              <div className="flex items-center gap-6 p-1 pr-6 bg-white/5 backdrop-blur-md rounded-full w-fit border border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  BG
                </div>
                <div>
                  <div className="text-white font-bold tracking-wide">The Basement Guide Staff</div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span>Updated Feb 2026</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span>12 min read</span>
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
            <p className="text-xl leading-relaxed text-slate-600 italic border-l-4 border-emerald-500 pl-6 mb-12">
              In 2026, we no longer accept "water resistant" as a standard. If a floor cannot survive a sump pump failure or a burst pipe, it does not belong in your basement.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight font-black">1. Luxury Vinyl Plank (LVP): The 2026 Standard</h2>
            <p>
              Luxury Vinyl Plank (LVP) has evolved significantly. While early versions felt like thin plastic, the 2026 models are engineering marvels.
            </p>
          </div>

          {/* SPC Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest font-black">SPC (Stone Plastic)</h3>
              <p className="text-slate-600 text-sm mb-6">The 2026 recommendation for basements. 60% limestone core. Incredibly dense, rigid, and 100% waterproof.</p>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest">Recommended</span>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest font-black">WPC (Wood Plastic)</h3>
              <p className="text-slate-600 text-sm mb-6">Uses wood flour and foaming agents. Warmer underfoot but slightly less stable in flood conditions.</p>
              <span className="inline-block px-3 py-1 bg-slate-200 text-slate-500 rounded-full text-xs font-bold uppercase tracking-widest">Optional</span>
            </div>
          </div>

          {/* Cost Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight text-center font-black">Cost and Labor Comparison</h2>
            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest">Flooring Type</th>
                    <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest">Material ($/sqft)</th>
                    <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest text-right">Total Installed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { type: 'Luxury Vinyl (SPC)', material: '$3.50 – $7.00', total: '$5.50 – $11.00' },
                    { type: 'Porcelain Tile', material: '$4.00 – $12.00', total: '$12.00 – $27.00' },
                    { type: 'Engineered Wood', material: '$6.00 – $14.00', total: '$10.00 – $21.00' },
                    { type: 'Radiant Heat Add-on', material: '$5.00 – $8.00', total: '+$7.00 – $11.00' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-6 text-slate-900 font-bold">{row.type}</td>
                      <td className="p-6 text-slate-600">{row.material}</td>
                      <td className="p-6 text-slate-900 font-black text-right">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Radiant Heat Section */}
          <section className="bg-slate-900 rounded-[3rem] p-12 mb-20 relative overflow-hidden text-white text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight font-black">Solving the "Cold" Problem</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                The biggest complaint about tile is the temperature. In 2026, we solve this with Electric Radiant Heat systems and uncoupling membranes.
              </p>
              <div className="inline-flex items-center gap-4 p-6 bg-white/10 rounded-2xl border border-white/10">
                <div className="text-sm font-medium">
                  <span className="text-emerald-400 font-black block mb-1 uppercase tracking-widest font-black">Pro Tip</span>
                  Uncoupling membranes like Ditra allow moisture under the slab to migrate to the perimeter.
                </div>
              </div>
            </div>
          </section>

          {/* Pros & Cons Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: 'LVP (SPC)', 
                pros: ['100% Waterproof', 'DIY Friendly', 'Affordable'], 
                cons: ['Can scratch', 'Feels "fake" to some'],
                accent: 'emerald'
              },
              { 
                title: 'Porcelain Tile', 
                pros: ['Flood Proof', 'Most Durable', 'Highest Value'], 
                cons: ['Cold Surface', 'Expensive Labor'],
                accent: 'blue'
              },
              { 
                title: 'Engineered Wood', 
                pros: ['Real Wood Texture', 'Luxury Aesthetic', 'Stable Core'], 
                cons: ['Most Expensive', 'Not for Flood Zones'],
                accent: 'indigo'
              }
            ].map((col, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                <h3 className={`text-xl font-black text-slate-900 mb-6 uppercase tracking-widest font-black border-b-2 border-${col.accent}-500 pb-2 inline-block`}>
                  {col.title}
                </h3>
                <div className="mb-6">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Pros</div>
                  <ul className="space-y-2">
                    {col.pros.map((p, pi) => (
                      <li key={pi} className="text-slate-600 text-sm flex items-center gap-2">
                        <span className={`text-${col.accent}-500`}>✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Cons</div>
                  <ul className="space-y-2">
                    {col.cons.map((c, ci) => (
                      <li key={ci} className="text-slate-500 text-sm flex items-center gap-2 italic">
                        <span>–</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Lead Form CTA */}
          <div className="bg-emerald-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-black mb-6 font-black">Get Flooring Quotes</h2>
              <p className="text-emerald-100 text-xl mb-12 font-light">
                Ready to transform your basement floor? Compare quotes from licensed contractors who specialize in basement flooring.
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
