import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basement Waterproofing Cost 2026: Average Interior & Exterior Pricing',
  description: 'How much does basement waterproofing cost in 2026? Average pricing for interior drainage ($3k-$8k), exterior membranes ($7k-$15k), and crack repair ($250-$800).',
};

export default function BasementWaterproofingCostPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden">
        <Image
          src="/foundation-waterproofing-construction.jpg.png"
          alt="Contractor installing basement waterproofing system"
          fill
          className="object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-teal-500" />
                <span className="text-teal-400 text-sm font-black uppercase tracking-[0.3em]">
                  2026 Cost Report
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                Basement <br className="hidden md:block" />
                Waterproofing Cost
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light">
                Basement waterproofing costs $5,231 on average in 2026. Most homeowners pay between $2,459 and $8,190.
              </p>
              
              <div className="flex items-center gap-6 p-1 pr-6 bg-white/5 backdrop-blur-md rounded-full w-fit border border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  BG
                </div>
                <div>
                  <div className="text-white font-bold tracking-wide">The Basement Guide Staff</div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span>Updated Feb 2026</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span>14 min read</span>
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
          {/* Quick Answer Box */}
          <div className="bg-teal-50 rounded-[2.5rem] p-10 mb-20 border border-teal-100 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-teal-600 font-black uppercase tracking-widest text-xs mb-4">The Short Answer</div>
              <p className="text-2xl text-slate-900 font-bold leading-tight mb-6">
                Expect to spend <span className="text-teal-600">$3,000–$8,000</span> for interior systems and <span className="text-teal-600">$7,000–$15,000+</span> for exterior excavation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="text-slate-400 text-[10px] uppercase font-black mb-1">National Avg</div>
                  <div className="text-slate-900 font-black text-xl">$5,231</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="text-slate-400 text-[10px] uppercase font-black mb-1">Minor Repair</div>
                  <div className="text-slate-900 font-black text-xl">$600+</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="text-slate-400 text-[10px] uppercase font-black mb-1">Interior System</div>
                  <div className="text-slate-900 font-black text-xl">$4k–$8k</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="text-slate-400 text-[10px] uppercase font-black mb-1">Exterior Dig</div>
                  <div className="text-slate-900 font-black text-xl">$15k+</div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none mb-20">
            <p className="text-xl leading-relaxed text-slate-600 italic border-l-4 border-teal-500 pl-6 mb-12">
              A wet basement is a threat to your home's structural integrity. This guide breaks down current market rates for every major waterproofing method.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight font-black">Cost by Method (2026)</h2>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-xl mb-20">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest">Method</th>
                  <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest text-center">Avg Range</th>
                  <th className="p-6 font-black text-slate-900 uppercase text-xs tracking-widest text-right">Typical Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { method: 'Crack Injection', cost: '$250 – $800', use: 'Minor seepage' },
                  { method: 'Interior Drain Tile', cost: '$3,000 – $8,000', use: 'Hydrostatic pressure' },
                  { method: 'Sump Pump System', cost: '$800 – $2,500', use: 'Active pumping' },
                  { method: 'Exterior Membrane', cost: '$7,000 – $15,000', use: 'Total prevention' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-6 text-slate-900 font-bold">{row.method}</td>
                    <td className="p-6 text-teal-600 font-black text-center">{row.cost}</td>
                    <td className="p-6 text-slate-500 text-sm text-right">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interior vs Exterior Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight font-black">Interior Systems</h3>
              <p className="text-teal-400 font-black text-3xl mb-6 font-black">$3,000 – $8,000</p>
              <ul className="space-y-4 mb-8">
                {['Managing water entry', 'No yard destruction', 'Fast install (2-4 days)'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 font-medium">
                    <span className="text-teal-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight font-black">Exterior Systems</h3>
              <p className="text-emerald-600 font-black text-3xl mb-6 font-black">$7,000 – $15,000+</p>
              <ul className="space-y-4">
                {['Preventing water entry', 'Long-term protection', 'Major excavation required'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 font-medium">
                    <span className="text-emerald-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Unit Costs Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight text-center font-black">Unit Costs (Per Foot)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'French Drain (Interior)', cost: '$40 – $85 / linear ft.' },
                { label: 'French Drain (Exterior)', cost: '$30 – $90 / linear ft.' },
                { label: 'Waterproof Membrane', cost: '$4 – $7 / sq. ft.' },
                { label: 'Foundation Sealing', cost: '$2 – $10 / sq. ft.' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <span className="font-bold text-slate-700">{item.label}</span>
                  <span className="text-teal-600 font-black">{item.cost}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight text-center font-black">Common Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Is it worth the money?', a: 'Yes. It protects your foundation from structural failure and prevents mold growth, significantly impacting home value.' },
                { q: 'How long does it last?', a: 'Interior systems last 10-15 years (pump life). Exterior membranes can last 20-40 years.' },
                { q: 'Does insurance cover it?', a: 'Usually not. Insurance covers sudden damage (burst pipe), not gradual seepage.' },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                  <h3 className="font-black text-slate-900 text-lg mb-3 uppercase tracking-widest font-black">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Lead Form CTA */}
          <div className="bg-teal-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-teal-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-black mb-6 font-black">Stop the Seepage</h2>
              <p className="text-teal-100 text-xl mb-12 font-light">
                Don't wait for the next heavy rain. Get free quotes from vetted basement waterproofing specialists in your area.
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
