import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basement Insulation: The Complete 2026 Guide',
  description: 'Learn about R-values, vapor barriers, and the best insulation materials for your basement. A comprehensive 2026 roadmap for efficiency and comfort.',
};

export default function BasementInsulationGuide() {
  return (
    <div className="bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden">
        <Image
          src="/foundation-concrete-forms.jpg.png"
          alt="Basement wall insulation installation"
          fill
          className="object-cover opacity-50 scale-105 transition-transform duration-700 hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-teal-500"></div>
            <span className="text-teal-400 font-bold tracking-[0.3em] text-sm uppercase">2026 Structural Standards</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
            Basement<br />
            <span className="text-teal-400">Insulation Guide</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed">
            Improve efficiency and stop energy loss. We break down R-values, moisture science, and the best materials for a dry, warm basement.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-slate-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700/50 shadow-2xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white font-bold text-sm mr-4">
                BG
              </div>
              <div>
                <p className="text-white font-semibold text-sm">The Basement Guide Staff</p>
                <p className="text-slate-400 text-xs">Updated Feb 20, 2026 &bull; 25 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
        {/* Left: Article Body */}
        <article className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium border-l-4 border-teal-500 pl-6 italic">
            Insulating your basement is one of the smartest home improvement projects you can undertake in 2026. Beyond energy efficiency, proper insulation manages the critical intersection of moisture control and thermal comfort.
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Why Insulate Your Basement?</h2>
          <p className="text-slate-600 leading-relaxed mb-6">Basements often account for up to 25% of a home&apos;s heat loss. In 2026, with rising energy costs and stricter building codes, proper insulation is no longer optional.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Energy Savings', desc: 'Reduce HVAC costs by 20-30% by stopping heat transfer through foundation walls.' },
              { title: 'Moisture Control', desc: 'Prevent condensation and mold by keeping foundation surfaces above the dew point.' },
              { title: 'Comfort', desc: 'Transform a &quot;dungeon&quot; into a cozy home office, gym, or family living space.' },
              { title: 'Property Value', desc: 'Energy-efficient homes sell faster and command higher prices in the 2026 market.' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Understanding R-Values and Climate Zones</h2>
          <p className="text-slate-600 leading-relaxed mb-6">R-value measures thermal resistance. In 2026, the International Energy Conservation Code (IECC) requirements vary by climate zone:</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4">
              <span className="bg-teal-100 text-teal-700 font-bold px-2 py-1 rounded text-xs mt-1">ZONE 1-2</span>
              <span className="text-slate-600"><strong>R-13 Minimum:</strong> Focus on moisture control over extreme cold resistance.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-teal-100 text-teal-700 font-bold px-2 py-1 rounded text-xs mt-1">ZONE 3-4</span>
              <span className="text-slate-600"><strong>R-15 to R-19:</strong> Balancing heat retention with summer humidity management.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-teal-100 text-teal-700 font-bold px-2 py-1 rounded text-xs mt-1">ZONE 5-6</span>
              <span className="text-slate-600"><strong>R-15 to R-20:</strong> Priority on continuous insulation to prevent thermal bridging.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Insulation Materials Compared</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse bg-white shadow-sm rounded-xl overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="px-6 py-4 text-left font-semibold border-b border-slate-700">Type</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-slate-700">R-Value / Inch</th>
                  <th className="px-6 py-4 text-left font-semibold border-b border-slate-700">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4 font-bold text-slate-800 uppercase text-xs tracking-wider">Rigid Foam (XPS/EPS)</td>
                  <td className="px-6 py-4 text-slate-600 italic">R-4 to R-5</td>
                  <td className="px-6 py-4 text-slate-600">Direct application to foundation walls.</td>
                </tr>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <td className="px-6 py-4 font-bold text-slate-800 uppercase text-xs tracking-wider">Closed-Cell Spray Foam</td>
                  <td className="px-6 py-4 text-slate-600 italic">R-6.5</td>
                  <td className="px-6 py-4 text-slate-600">Rim joists and irregular wall surfaces.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4 font-bold text-slate-800 uppercase text-xs tracking-wider">Mineral Wool (Rockwool)</td>
                  <td className="px-6 py-4 text-slate-600 italic">R-4</td>
                  <td className="px-6 py-4 text-slate-600">Framed walls needing fire resistance.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-800 uppercase text-xs tracking-wider">Fiberglass Batts</td>
                  <td className="px-6 py-4 text-slate-600 italic">R-3.2</td>
                  <td className="px-6 py-4 text-slate-600">Unfinished ceilings (not for walls).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Step-by-Step Foundation Wall Walkthrough</h2>
          <div className="space-y-8 my-10 border-l-2 border-slate-100 pl-8">
            {[
              { step: '01', title: 'Preparation', desc: 'Clean and dry concrete walls. Address any active leaks or efflorescence before starting.' },
              { step: '02', title: 'Adhere Foam', desc: 'Apply rigid foam boards directly to concrete with construction adhesive. Seal all seams with specialized tape.' },
              { step: '03', title: 'Framing', desc: 'Build 2x4 stud walls over the foam. This creates a thermal break and a plumbing/electrical chase.' },
              { step: '04', title: 'Secondary Insulation', desc: 'Add mineral wool batts between studs if additional R-value is needed for your climate zone.' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[53px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">{step.step}</div>
                <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">The &quot;Golden Rule&quot; of Basement Condensation</h2>
          <p className="text-slate-600 leading-relaxed mb-6">Condensation occurs when warm, moist air hits cold surfaces. The biggest mistake in 2026 is installing an interior vapor barrier (like plastic sheeting) without exterior foam, which traps moisture against the studs.</p>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 mb-12">
            <h4 className="font-bold text-teal-800 mb-2">Pro Tip: Keep the Dew Point Outside</h4>
            <p className="text-teal-700 text-sm italic font-medium leading-relaxed">
              Always place rigid foam directly against the concrete foundation. This warms the concrete surface and prevents the air temperature from reaching the dew point inside your wall assembly.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Conclusion: ROI and Energy Gains</h2>
          <p className="text-slate-600 leading-relaxed mb-6">With an average investment of $1,500 to $5,000 for a standard basement, the ROI is high. Most homeowners recoup the cost through energy savings in just 3 to 7 years. In 2026, an energy-efficient basement is a high-performance asset.</p>
        </article>

        {/* Right: Sidebar */}
        <aside className="space-y-8">
          <LeadForm />

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg mb-4 underline decoration-teal-500/30">Common Pitfalls</h3>
            <ul className="space-y-4">
              <li className="text-slate-500 text-sm">
                <strong className="text-slate-700 block mb-1 underline decoration-slate-300">Ignoring Rim Joists</strong>
                The &quot;rim&quot; is where the floor meets the foundation. Use spray foam here to stop 40% of air leaks.
              </li>
              <li className="text-slate-500 text-sm">
                <strong className="text-slate-700 block mb-1 underline decoration-slate-300">Using Fiberglass on Walls</strong>
                Fiberglass batts act as filters for mold spores and lose R-value when damp. Use Rockwool or foam instead.
              </li>
              <li className="text-slate-500 text-sm">
                <strong className="text-slate-700 block mb-1 underline decoration-slate-300">Skipping Air Sealing</strong>
                Insulation stops heat flow; it doesn&apos;t stop air leaks. Seal cracks with caulk before insulating.
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
