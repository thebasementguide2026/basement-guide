import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Pre-Finish Audit: 7 Things Before Hanging Basement Drywall | The Basement Guide',
  description: 'Don\'t make costly mistakes. These 7 checkpoints will future-proof your basement finishing project before you hang a single sheet of drywall.',
}

export default function PreFinishAudit() {
  return (
    <article className="py-12">
      <div className="container-custom max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-brand-teal">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-brand-teal">Guides</Link>
          <span className="mx-2">/</span>
          <span>Pre-Finish Audit</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
              Guides
            </span>
            <span className="text-gray-500">10 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            The Pre-Finish Audit: 7 Things You Must Do Before Hanging Basement Drywall
          </h1>
          <p className="text-xl text-gray-600">
            You have done it. The leaks are stopped, the vision is clear, and you are ready to turn that concrete cavern into a high end living space. But finishing without a rigorous audit is the single biggest mistake a homeowner can make.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-navy mb-4">7 Critical Checkpoints</h2>
          <ul className="space-y-2">
            <li><a href="#breathability" className="text-brand-teal hover:underline">1. The Concrete Breathability Test</a></li>
            <li><a href="#cove-joint" className="text-brand-teal hover:underline">2. Future-Proofing the Cove Joint</a></li>
            <li><a href="#vapor" className="text-brand-teal hover:underline">3. The Modern Vapor Management System</a></li>
            <li><a href="#wood" className="text-brand-teal hover:underline">4. No Wood to Concrete Contact</a></li>
            <li><a href="#plumbing" className="text-brand-teal hover:underline">5. Plumbing and Electrical Redundancy</a></li>
            <li><a href="#sump" className="text-brand-teal hover:underline">6. Sump Pump 2.0</a></li>
            <li><a href="#hvac" className="text-brand-teal hover:underline">7. The Mechanical Room and HVAC Balance</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose-custom">
          <p className="lead text-lg mb-6">
            Once that drywall is up, you lose the ability to see what your foundation is doing. You are essentially burying your home's most vulnerable systems behind a layer of paper and gypsum. In this guide, we are going to walk through the seven essential checkpoints to future proof your basement.
          </p>

          <h2 id="breathability">1. The Concrete Breathability Test (The 24 Hour Plastic Test)</h2>
          
          <p>
            Before you buy a single 2x4, you need to ensure the concrete is not "breathing" excessive moisture. Even a bone dry wall can be a source of high humidity through a process called vapor drive.
          </p>

          <h3>The Science</h3>
          <p>
            Concrete is a porous material. Moisture from the soil outside moves through the wall as a vapor. If you trap this vapor behind an airtight wall without a plan, it will condense into liquid water and grow mold.
          </p>

          <h3>The Test</h3>
          <p>
            Cut several 2-foot by 2-foot squares of clear 6 mil polyethylene plastic. Tape them to different sections of the floor and walls using high-tack duct tape. Ensure the edges are completely airtight.
          </p>

          {/* SVG Diagram - Plastic Test */}
          <div className="my-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">24-Hour Plastic Test</h3>
            <svg viewBox="0 0 500 300" className="w-full max-w-xl mx-auto">
              <rect x="50" y="50" width="400" height="200" fill="#8B8B8B" stroke="#000" strokeWidth="2"/>
              <rect x="150" y="100" width="200" height="100" fill="#E0F2F7" fillOpacity="0.6" stroke="#000" strokeWidth="2" strokeDasharray="5,5"/>
              
              {/* Water droplets */}
              <circle cx="200" cy="150" r="4" fill="#4A90E2"/>
              <circle cx="250" cy="140" r="4" fill="#4A90E2"/>
              <circle cx="280" cy="160" r="4" fill="#4A90E2"/>
              <circle cx="310" cy="145" r="4" fill="#4A90E2"/>
              
              <text x="235" y="90" fontSize="14" fontWeight="bold" fill="#000" textAnchor="middle">PLASTIC SHEET</text>
              <text x="250" y="240" fontSize="12" fill="#000" textAnchor="middle">CONCRETE WALL/FLOOR</text>
              
              <text x="100" y="280" fontSize="11" fill="#E74C3C" fontWeight="bold">If you see water droplets = TOO WET</text>
              
              {/* Tape corners */}
              <rect x="150" y="100" width="30" height="10" fill="#FFD700"/>
              <rect x="320" y="100" width="30" height="10" fill="#FFD700"/>
              <rect x="150" y="190" width="30" height="10" fill="#FFD700"/>
              <rect x="320" y="190" width="30" height="10" fill="#FFD700"/>
              
              <text x="180" y="75" fontSize="10" fill="#666">Duct tape all edges</text>
            </svg>
          </div>

          <h3>The Diagnosis</h3>
          <p>
            Wait 24 to 48 hours. If you see fogging or water droplets on the underside of the plastic, your foundation is still actively wicking moisture.
          </p>

          <h3>The 2026 Fix</h3>
          <p>
            You must apply a penetrating silicate sealer. Unlike "waterproof paint" that sits on the surface, silicates sink two inches into the concrete and crystallize, physically blocking the pores while still allowing the wall to stay structurally sound.
          </p>

          <h2 id="cove-joint">2. Future-Proofing the Cove Joint</h2>
          
          <p>
            As we established in our main guide, the cove joint is where the wall meets the floor. It is a structural weak point. Even if it is dry today, a 100-year storm could change that.
          </p>

          <h3>The Strategy</h3>
          <p>
            Install a cove joint drainage "kick out" or a baseboard drainage channel. These are low-profile plastic tracks that sit at the base of the wall before the framing goes up.
          </p>

          <h3>The Mechanism</h3>
          <p>
            If the wall ever seeps in the future, the water is caught by the track and channeled into your sump pit rather than soaking into your carpet or wall studs.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="font-semibold text-yellow-900">⚠️ Critical Warning</p>
            <p className="text-yellow-800">
              Do not seal the cove joint with caulk. This can trap hydrostatic pressure and cause the floor to crack. Use a drainage approach instead of a blockage approach.
            </p>
          </div>

          <h2 id="vapor">3. The Modern Vapor Management System</h2>
          
          <p>
            Building codes in 2026 have moved away from the "plastic sheet" method. Old school 6 mil poly stapled to studs often creates a "moisture sandwich" that rots wood.
          </p>

          <h3>The 2026 Standard</h3>
          <p>
            Use Rigid Foam Insulation (XPS or EPS) directly against the concrete.
          </p>

          <h3>Why it Works</h3>
          <p>
            Rigid foam acts as a vapor retarder and a thermal break. It keeps the interior side of the foam warm. When the warm, humid air of your finished basement hits the foam, it does not condense because the surface is not cold.
          </p>

          {/* SVG Diagram - Foam Insulation Layers */}
          <div className="my-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Proper Vapor Management Layers</h3>
            <svg viewBox="0 0 600 300" className="w-full max-w-2xl mx-auto">
              {/* Concrete wall */}
              <rect x="50" y="50" width="50" height="200" fill="#8B8B8B" stroke="#000" strokeWidth="2"/>
              <text x="75" y="270" fontSize="11" fill="#000" textAnchor="middle">Concrete</text>
              
              {/* Rigid foam */}
              <rect x="100" y="50" width="60" height="200" fill="#FFA500" stroke="#000" strokeWidth="2"/>
              <text x="130" y="270" fontSize="11" fill="#000" textAnchor="middle">Rigid Foam</text>
              <text x="130" y="285" fontSize="10" fill="#666" textAnchor="middle">(XPS/EPS)</text>
              
              {/* Stud wall */}
              <rect x="160" y="50" width="15" height="200" fill="#8B4513" stroke="#000" strokeWidth="1"/>
              <rect x="195" y="50" width="15" height="200" fill="#8B4513" stroke="#000" strokeWidth="1"/>
              <rect x="230" y="50" width="15" height="200" fill="#8B4513" stroke="#000" strokeWidth="1"/>
              <text x="190" y="270" fontSize="11" fill="#000" textAnchor="middle">Studs</text>
              
              {/* Drywall */}
              <rect x="245" y="50" width="15" height="200" fill="#F5F5DC" stroke="#000" strokeWidth="2"/>
              <text x="252" y="270" fontSize="11" fill="#000" textAnchor="middle">Drywall</text>
              
              {/* Vapor tape seams */}
              <line x1="100" y1="150" x2="160" y2="150" stroke="#E74C3C" strokeWidth="3"/>
              <text x="130" y="145" fontSize="10" fill="#E74C3C" fontWeight="bold">Vapor tape</text>
              <text x="130" y="160" fontSize="9" fill="#E74C3C">on all seams</text>
              
              {/* Temperature gradient */}
              <text x="350" y="100" fontSize="12" fill="#4A90E2" fontWeight="bold">COLD SIDE →</text>
              <text x="350" y="200" fontSize="12" fill="#E74C3C" fontWeight="bold">← WARM SIDE</text>
              
              {/* Arrows showing moisture */}
              <path d="M 30 150 L 50 150" stroke="#4A90E2" strokeWidth="2" markerEnd="url(#arrowblue2)"/>
              <text x="20" y="140" fontSize="10" fill="#4A90E2">Moisture</text>
              
              <defs>
                <marker id="arrowblue2" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#4A90E2" />
                </marker>
              </defs>
            </svg>
          </div>

          <h3>The Installation</h3>
          <p>
            Glue the foam boards to the concrete using a foam compatible adhesive. Seal every seam with high-quality vapor tape (like Mylar tape). This creates a seamless, airtight cocoon around your basement.
          </p>

          {/* AdSense Placeholder */}
          <div className="my-10 bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 text-sm">Advertisement</p>
            {/* Google AdSense code will go here */}
          </div>

          <h2 id="wood">4. No Wood to Concrete Contact (The Capillary Break)</h2>
          
          <p>
            Wood is food for mold. Concrete is a sponge. If you put them together, the wood will eventually rot.
          </p>

          <h3>The Bottom Plate</h3>
          <p>
            Every wall you build must have a pressure treated (PT) bottom plate. This is required by code, but we go a step further.
          </p>

          <h3>The Sill Sealer</h3>
          <p>
            Place a thin strip of closed cell foam (sill sealer) between the PT wood and the concrete floor. This provides a "capillary break" that stops moisture from wicking up even into the treated wood.
          </p>

          <h3>Fastener Choice</h3>
          <p>
            When shooting nails into the floor, ensure you use galvanized or stainless steel fasteners. The chemicals in pressure treated wood will eat through standard steel nails in a matter of months.
          </p>

          <h2 id="plumbing">5. Plumbing and Electrical Redundancy</h2>
          
          <p>
            Once the walls are closed, your ability to fix a leak or upgrade your tech drops to zero.
          </p>

          <h3>Pipe Insulation</h3>
          <p>
            Wrap every cold water pipe in foam sleeves. This prevents the pipes from "sweating" and dripping water onto the back of your new drywall.
          </p>

          <h3>Access Panels</h3>
          <p>
            You must install access panels for every shut off valve, clean out, and junction box. In 2026, we recommend using "hidden" magnetic panels that can be painted or wallpapered to match the room.
          </p>

          <h3>Conduit Runs</h3>
          <p>
            Run a 1-inch PVC conduit from your utility room to your TV area. If you want to upgrade to 16K resolution or fiber optics in five years, you can just pull the new wire through the wall without cutting a hole.
          </p>

          <h2 id="sump">6. Sump Pump 2.0 (The Smart Upgrade)</h2>
          
          <p>
            A finished basement is an investment of $30,000 to $100,000. It is madness to protect that investment with a $150 pump from a big box store.
          </p>

          <h3>The Battery Backup</h3>
          <p>
            This is non-negotiable. Most floods happen during storms when the power goes out. Your backup system should be able to run for at least 24 hours on battery power.
          </p>

          <h3>Smart Monitoring</h3>
          <p>
            In 2026, your pump should be connected to your Wi-Fi. It should text you if the water level rises too high, if the battery is low, or if the primary pump has failed.
          </p>

          <h3>Dual Pumps</h3>
          <p>
            The best "pro level" pits now feature two primary pumps side by side. If Pump A fails, Pump B automatically kicks in and notifies you.
          </p>

          {/* Product Recommendation */}
          <div className="bg-brand-teal bg-opacity-10 border-l-4 border-brand-teal p-6 my-8">
            <h3 className="text-lg font-bold text-brand-navy mb-3">💡 Recommended Sump Pump Systems</h3>
            <ul>
              <li className="mb-2">
                <strong>Best Smart System:</strong>{' '}
                <a href="#" className="text-brand-teal hover:underline" rel="nofollow sponsored">
                  Wayne WSS30V Wireless System
                </a>
                {' '}- WiFi alerts, battery backup included
              </li>
              <li className="mb-2">
                <strong>Best Dual Pump:</strong>{' '}
                <a href="#" className="text-brand-teal hover:underline" rel="nofollow sponsored">
                  Liberty Pumps SJ10A ProVore
                </a>
                {' '}- Commercial-grade reliability
              </li>
              <li>
                <strong>Best Budget Backup:</strong>{' '}
                <a href="#" className="text-brand-teal hover:underline" rel="nofollow sponsored">
                  Superior Pump 92900 Battery Backup
                </a>
                {' '}- Affordable peace of mind
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              * Affiliate links - we may earn a commission at no cost to you
            </p>
          </div>

          <h2 id="hvac">7. The Mechanical Room and HVAC Balance</h2>
          
          <p>
            Basements are naturally colder and more humid than the rest of the house. Your HVAC system needs to be adjusted to compensate.
          </p>

          <h3>Return Air</h3>
          <p>
            Most people forget to add return air vents to their basements. Without them, the air stays stagnant, which leads to that "basement smell."
          </p>

          <h3>Combustion Air</h3>
          <p>
            If you are enclosing your furnace or water heater, you must ensure they have enough "make up air" to burn fuel safely. Use louvered doors or dedicated air intake pipes.
          </p>

          <h3>The Dehumidifier</h3>
          <p>
            A finished basement needs a dedicated, high capacity dehumidifier that is hard piped into the sump pit. Relying on a small portable unit that you have to empty by hand is a recipe for failure.
          </p>

          {/* Checklist Summary */}
          <div className="bg-gray-50 border-l-4 border-brand-teal p-6 my-10">
            <h3 className="text-lg font-bold text-brand-navy mb-4">✓ Pre-Finish Audit Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-brand-teal mr-3 text-xl">☐</span>
                <span>Passed 24-hour plastic test (no moisture)</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal mr-3 text-xl">☐</span>
                <span>Cove joint drainage installed</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal mr-3 text-xl">☐</span>
                <span>Rigid foam insulation applied with vapor-sealed seams</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal mr-3 text-xl">☐</span>
                <span>Sill sealer under all PT bottom plates</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal mr-3 text-xl">☐</span>
                <span>Access panels installed for all valves/junctions</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal mr-3 text-xl">☐</span>
                <span>Smart sump pump with battery backup installed</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-teal mr-3 text-xl">☐</span>
                <span>HVAC return vents and dehumidifier planned</span>
              </li>
            </ul>
          </div>

          {/* Glossary */}
          <div className="border-t border-gray-300 pt-8 mt-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Glossary</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-brand-navy">Capillary Break</dt>
                <dd className="text-gray-600 ml-4">A material that stops moisture from wicking from one surface to another.</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Conduit</dt>
                <dd className="text-gray-600 ml-4">A pipe or tube used to protect and route electrical wiring.</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Cove Joint</dt>
                <dd className="text-gray-600 ml-4">The structural seam where the wall and floor meet.</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">PT Wood</dt>
                <dd className="text-gray-600 ml-4">Pressure-treated lumber, designed to resist rot and insects.</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Rigid Foam (XPS)</dt>
                <dd className="text-gray-600 ml-4">Extruded Polystyrene, a dense foam board ideal for basement insulation.</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Sill Sealer</dt>
                <dd className="text-gray-600 ml-4">A foam gasket used between wood and concrete.</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Vapor Drive</dt>
                <dd className="text-gray-600 ml-4">The movement of moisture vapor through a material due to differences in humidity.</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy">Vapor Retarder</dt>
                <dd className="text-gray-600 ml-4">A material that slows the rate at which water vapor can pass through a wall.</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Lead Form CTA */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4 text-center">
            Ready to Finish Your Basement Right?
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Get free quotes from experienced basement finishing contractors.
          </p>
          <LeadForm />
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-gray-300 pt-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/articles/complete-basement-waterproofing-guide" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-brand-navy mb-2 hover:text-brand-teal">
                Complete Basement Waterproofing Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Everything you need to know about stopping basement leaks for good.
              </p>
            </Link>
            <Link href="/articles/best-basement-flooring" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-brand-navy mb-2 hover:text-brand-teal">
                The Best Waterproof Flooring for Basements
              </h3>
              <p className="text-gray-600 text-sm">
                LVP vs. Ceramic vs. Engineered Wood - complete comparison with costs.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
