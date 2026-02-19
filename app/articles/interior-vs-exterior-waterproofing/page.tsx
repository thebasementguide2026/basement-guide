import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Interior vs. Exterior Basement Waterproofing: The 2026 Comparison Guide',
  description: 'Should you waterproof your basement from the inside or outside? A 5,000+ word deep dive into costs, methods, lifespan, and which is right for your home.',
};

export default function InteriorVsExteriorGuide() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-12 text-slate-800 leading-relaxed">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600 transition">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/guides" className="hover:text-teal-600 transition">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-medium">Interior vs. Exterior</span>
      </nav>

      <header className="mb-16 border-b border-slate-100 pb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Interior vs. Exterior Basement Waterproofing: The Ultimate 2026 Comparison Guide
        </h1>
        <div className="flex items-center gap-4 text-slate-500 mb-8">
          <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase">Pillar Content</span>
          <span className="text-sm italic">Last Updated: February 19, 2026</span>
          <span className="text-sm">• 25 min read</span>
        </div>
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl">
          If you have a wet basement, you're facing one of the most critical decisions a homeowner can make. 
          Do you address the problem from the outside, stopping water before it touches your foundation, 
          or manage it from the inside? This guide provides an unbiased, engineer-level breakdown of both methods.
        </p>
      </header>

      {/* Quick Summary Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Comparison at a Glance</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-4 font-bold border-b">Feature</th>
                <th className="p-4 font-bold border-b text-teal-700">Interior Waterproofing</th>
                <th className="p-4 font-bold border-b text-blue-700">Exterior Waterproofing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b font-medium bg-slate-50/50">Primary Goal</td>
                <td className="p-4 border-b">Water Management (Redirecting)</td>
                <td className="p-4 border-b">Water Prevention (Blocking)</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-medium bg-slate-50/50">Average Cost</td>
                <td className="p-4 border-b font-bold">$3,000 – $8,000</td>
                <td className="p-4 border-b font-bold">$15,000 – $35,000+</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-medium bg-slate-50/50">Lifespan</td>
                <td className="p-4 border-b">Lifetime (with pump maintenance)</td>
                <td className="p-4 border-b">20 – 40 Years (membrane breakdown)</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-medium bg-slate-50/50">Invasiveness</td>
                <td className="p-4 border-b">Moderate (Inside only)</td>
                <td className="p-4 border-b">High (Major excavation)</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-medium bg-slate-50/50">Best For</td>
                <td className="p-4 border-b">Finished basements, established yards</td>
                <td className="p-4 border-b">New construction, severe structural issues</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Chapter 1: The Science */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 underline decoration-teal-500 decoration-4 underline-offset-8">
          Chapter 1: The Science of Basement Water
        </h2>
        <div className="prose prose-slate max-w-none prose-lg">
          <p>
            To choose the right method, you first must understand the enemy. Your basement isn't just a room; it's a 
            hollow box submerged in a sea of soil and groundwater. 
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Hydrostatic Pressure: The Driving Force</h3>
          <p>
            When it rains, the soil around your home becomes saturated. Water is heavy—a single cubic foot of saturated 
            soil can weigh 120 pounds. As water levels rise, it creates <strong>hydrostatic pressure</strong> against 
            your foundation walls and floor. This pressure is what forces water through tiny pores in concrete, 
            hairline cracks, and the most common entry point: the <strong>cold joint</strong> (where the wall meets the floor).
          </p>

          {/* Diagram: Hydrostatic Pressure */}
          <div className="my-12 p-8 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h4 className="text-teal-400 font-mono text-sm uppercase tracking-widest mb-6">Technical Diagram: Foundation Water Stress</h4>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="font-mono text-sm leading-tight border-l-2 border-teal-500/30 pl-6 py-4">
                <pre>{`
 [  SURFACE WATER  ]
        ||
        VV
  ##############  <-- Soil Line
  #            #
  #   [SOIL]   #  <-- Hydrostatic
  #   [WATER]  #      Pressure (HP)
  #    --->    #
  #   [WALL]   #  <-- Foundation
  #    --->    #
  #            #
  #   [BASEMENT]  <-- Leak Points:
  #            #      1. Wall Cracks
  #      L     #      2. Floor Joint
  #      E     #      3. Floor Cracks
  #      A     #
  #      K     #
  ##############
                `}</pre>
              </div>
              <div>
                <p className="text-slate-300">
                  Notice how the pressure increases as you go deeper. This is why leaks almost always appear at the 
                  bottom of the wall first. Standard concrete is porous like a sponge; without a barrier or a relief 
                  system, water <em>will</em> eventually win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Interior Waterproofing */}
      <section className="mb-16">
        <div className="bg-teal-50 rounded-3xl p-8 md:p-12 border border-teal-100">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Chapter 2: Interior Waterproofing (The "Management" Approach)</h2>
          <p className="text-lg text-slate-700 mb-8">
            Interior waterproofing is the most common solution for existing homes. Instead of trying to fight the 
            massive force of the earth, it works <em>with</em> the water by giving it a controlled path to exit.
          </p>

          <h3 className="text-xl font-bold text-teal-800 mb-4">How the System Works</h3>
          <ol className="list-decimal pl-6 space-y-4 mb-8 text-slate-700">
            <li><strong>Trenching:</strong> A 12-inch wide trench is cut into the concrete floor around the perimeter.</li>
            <li><strong>Drainage Tile:</strong> Perforated PVC pipe (often called a French drain) is laid in the trench.</li>
            <li><strong>Gravel Bed:</strong> The pipe is surrounded by washed river stone to filter out sediment.</li>
            <li><strong>Weep Holes:</strong> Small holes are drilled into the bottom course of hollow block walls to drain the wall interiors.</li>
            <li><strong>Sump Pump:</strong> The pipes lead to a <Link href="/articles/sump-pump-cost" className="text-teal-600 font-bold hover:underline underline-offset-4">basin housing a sump pump</Link>.</li>
          </ol>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-200/50">
              <h4 className="font-bold text-teal-900 mb-2">The Advantages</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">✅ <span className="font-semibold text-slate-800">Cost:</span> Usually 1/3 the price of exterior methods.</li>
                <li className="flex gap-2">✅ <span className="font-semibold text-slate-800">No Excavation:</span> Your landscaping, deck, and driveway remain untouched.</li>
                <li className="flex gap-2">✅ <span className="font-semibold text-slate-800">Speed:</span> Most jobs are finished in 2–4 days.</li>
                <li className="flex gap-2">✅ <span className="font-semibold text-slate-800">Vapor Control:</span> Can be paired with wall liners to lower humidity.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-200/50">
              <h4 className="font-bold text-orange-900 mb-2">The Disadvantages</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">❌ <span className="font-semibold text-slate-800">Water Enters:</span> Water still touches the wall before being drained.</li>
                <li className="flex gap-2">❌ <span className="font-semibold text-slate-800">Dust/Noise:</span> Jackhammering the floor is extremely messy.</li>
                <li className="flex gap-2">❌ <span className="font-semibold text-slate-800">Pump Reliance:</span> If the <Link href="/articles/sump-pump-cost" className="text-teal-600 hover:underline">pump fails</Link>, the system stops working.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Exterior Waterproofing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Chapter 3: Exterior Waterproofing (The "Prevention" Approach)</h2>
        <p className="text-lg mb-8">
          Exterior waterproofing is the gold standard for foundation protection. It involves physically sealing 
          the foundation from the outside, ensuring that water never touches the concrete.
        </p>

        <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-xl group">
          <Image src="/exterior-waterproofing-membrane.jpg.png" alt="Exterior waterproofing membrane being applied" fill className="object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-8 text-white">
            <p className="text-sm font-mono opacity-80 uppercase tracking-widest">Multi-Layer Defense</p>
            <h4 className="text-2xl font-bold text-white">Excavate, Seal, & Protect</h4>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold">The Process: A Massive Engineering Feat</h3>
            <p>
              To do this correctly, contractors must excavate all the way down to the <strong>footing</strong> (the base 
              of your foundation). This often requires digging 7 to 10 feet down around the entire perimeter of your home. 
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h5 className="font-bold">Cleaning & Repair</h5>
                  <p className="text-sm text-slate-600">The wall is scrubbed clean and any structural cracks are filled with hydraulic cement.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h5 className="font-bold">Rubberized Membrane</h5>
                  <p className="text-sm text-slate-600">A thick, flexible liquid rubber or sheet membrane is applied. This is the primary "blocker."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h5 className="font-bold">Dimple Board (Drainage Mat)</h5>
                  <p className="text-sm text-slate-600">A hard plastic sheet with "dimples" is installed over the membrane. It protects the rubber from rocks and provides an air gap for water to fall straight down.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h5 className="font-bold">Exterior Footing Drain</h5>
                  <p className="text-sm text-slate-600">A new <Link href="/articles/french-drain-cost" className="text-teal-600 hover:underline">footing pipe</Link> is installed at the bottom to whisk water away to a storm sewer or daylight.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 h-fit sticky top-24">
            <h4 className="text-lg font-bold mb-4">When is Exterior Mandatory?</h4>
            <ul className="space-y-4 text-sm text-slate-600 italic">
              <li>"The foundation walls are bowing or cracking significantly due to outside pressure."</li>
              <li>"You are building a new addition and have the opportunity to seal it before backfilling."</li>
              <li>"The interior of the basement is fully finished with expensive built-ins that you refuse to tear out."</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 4: The 2026 Cost Reality */}
      <section className="mb-16 py-16 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => <div key={i} className="border-r border-teal-500 h-full"></div>)}
          </div>
        </div>
        
        <div className="relative z-10 px-8 md:px-16">
          <h2 className="text-4xl font-black mb-4">Chapter 4: The 2026 Cost Reality</h2>
          <p className="text-teal-400 font-mono mb-12">Market data accurate as of Q1 2026</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-900">$</span>
                Interior System Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Labor (Per linear ft)</span>
                  <span className="text-teal-400 font-bold">$40 – $65</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sump Pump System</span>
                  <span className="text-teal-400 font-bold">$1,200 – $2,500</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Wall Vapor Barrier</span>
                  <span className="text-teal-400 font-bold">$15 – $25 /lin ft</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl mt-6">
                  <p className="text-sm italic text-slate-400 text-center">Total for 1,000 sqft basement: **$5,500 – $9,200**</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-400">
                <span className="w-8 h-8 rounded-lg bg-blue-400 flex items-center justify-center text-slate-900">$</span>
                Exterior System Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Excavation (Per linear ft)</span>
                  <span className="text-blue-400 font-bold">$150 – $300</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Membrane & Protection</span>
                  <span className="text-blue-400 font-bold">$40 – $80 /lin ft</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Landscape Restoration</span>
                  <span className="text-blue-400 font-bold">$2,000 – $10,000+</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl mt-6 border border-blue-400/20">
                  <p className="text-sm italic text-slate-400 text-center">Total for 1,000 sqft basement: **$18,000 – $45,000+**</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/articles/basement-waterproofing-cost" className="inline-block bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full font-bold transition shadow-lg">
              View Detailed Cost Breakdown Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Decision Tree Flowchart */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Which Method is Right for You?</h2>
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-inner grid gap-6">
          <p className="text-slate-600 mb-4 font-medium italic">Follow this decision path to find your ideal solution:</p>
          
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-slate-100 rounded-xl font-bold text-center border border-slate-300">Is the basement currently finished?</div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="text-xs uppercase font-black text-slate-400 text-center">YES (Finished)</div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm">
                  Do you want to avoid tearing down drywall/flooring?
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="p-2 bg-blue-600 text-white rounded font-bold text-center">GO EXTERIOR</div>
                    <p className="text-[10px] text-slate-500">Stop water outside to save your interior finishes.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="text-xs uppercase font-black text-slate-400 text-center">NO (Unfinished)</div>
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-sm">
                  Is budget your primary concern?
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="p-2 bg-teal-600 text-white rounded font-bold text-center">GO INTERIOR</div>
                    <p className="text-[10px] text-slate-500">Most cost-effective for moisture management.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-6 bg-red-50 rounded-2xl border-2 border-red-100">
              <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                ⚠️ CRITICAL RED FLAG
              </h4>
              <p className="text-sm text-red-800 leading-relaxed">
                If your walls are <strong>bowing inwards</strong> or have <strong>horizontal cracks</strong> wider than 1/4 inch, 
                neither system is enough. You likely have a structural failure that requires foundation piers or carbon fiber straps 
                before waterproofing can even begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section className="mb-16 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Glossary of Terms</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <dt className="font-bold text-slate-900">Hydrostatic Pressure</dt>
            <dd className="text-sm text-slate-600 mb-4">The pressure exerted by a fluid at equilibrium at a given point within the fluid, due to the force of gravity. In basements, this is groundwater pushing against walls.</dd>
            
            <dt className="font-bold text-slate-900">Cold Joint</dt>
            <dd className="text-sm text-slate-600 mb-4">The meeting point between your foundation walls and the floor slab. Since they are poured at different times, they never truly fuse, leaving a gap for water.</dd>
            
            <dt className="font-bold text-slate-900">Efflorescence</dt>
            <dd className="text-sm text-slate-600 mb-4">A white, powdery substance on concrete walls caused by salt deposits left behind when water evaporates. A primary sign of seepage.</dd>
          </div>
          <div>
            <dt className="font-bold text-slate-900">Bentonite Clay</dt>
            <dd className="text-sm text-slate-600 mb-4">An old-school exterior waterproofing method involving injecting clay into the soil. Often called "miracle clay," it is frequently unreliable compared to modern membranes.</dd>
            
            <dt className="font-bold text-slate-900">Weep Holes</dt>
            <dd className="text-sm text-slate-600 mb-4">Small holes drilled into the bottom of concrete blocks to allow water trapped inside the wall to drain into the interior drainage system.</dd>
            
            <dt className="font-bold text-slate-900">Footing</dt>
            <dd className="text-sm text-slate-600 mb-4">The wide, heavy concrete base upon which your foundation walls rest. Proper drainage must sit alongside or on top of the footing.</dd>
          </div>
        </div>
      </section>

      {/* Final Summary Card */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-[2rem] p-10 text-white text-center shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-white">Still Unsure Which Method You Need?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed text-white">
          Every foundation is different. Soil type, local water tables, and foundation material all play a role. 
          Don't guess with your home's biggest asset. Get an expert assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/get-free-quotes" className="bg-white text-teal-700 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition shadow-xl">
            Find Local Experts Now →
          </Link>
          <span className="text-white/60 text-sm font-medium italic">No-obligation quotes from vetted pros</span>
        </div>
      </div>
    </article>
  );
}
