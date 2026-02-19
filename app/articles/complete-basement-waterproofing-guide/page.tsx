import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Complete Basement Waterproofing Guide 2026 | Stop Leaks for Good',
  description: 'Everything you need to know about basement waterproofing. From hydrostatic pressure to sump pumps, drainage systems, and sealants. Expert guidance for homeowners.',
}

export default function CompleteBasementWaterproofingGuide() {
  return (
    <article className="py-12">
      <div className="container-custom max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-brand-teal">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-brand-teal">Guides</Link>
          <span className="mx-2">/</span>
          <span>Complete Waterproofing Guide</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
              Guides
            </span>
            <span className="text-gray-500">15 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            The Complete Basement Waterproofing Guide
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about stopping basement leaks for good
          </p>
        </header>

        {/* Hero Image Placeholder */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <div className="w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">💧</div>
              <p className="font-semibold text-slate-600 mb-2">Hero Image Needed</p>
              <p className="text-sm text-slate-500 max-w-xs mx-auto">
                Search: "basement foundation waterproofing exterior"<br/>
                Size: 1200x600px<br/>
                Source: Unsplash.com
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose-custom">
          <p className="lead text-lg mb-6">
            A dry basement isn't just about comfort—it's about protecting your home's structural integrity and your family's health. In this comprehensive guide, we'll walk you through everything you need to know about basement waterproofing, from understanding the science behind water intrusion to choosing the right solutions for your home.
          </p>

          <h2>Understanding Hydrostatic Pressure: The Root Cause</h2>

          <p>
            Before we dive into solutions, let's understand the enemy. Hydrostatic pressure is the force exerted by water in the soil surrounding your foundation. After heavy rain or snowmelt, the water table rises, and gravity pushes that water against your basement walls with incredible force—sometimes exceeding 60 pounds per square foot.
          </p>

          <p>
            Think of it like this: Your basement is a concrete box sitting in potentially saturated soil. Without proper waterproofing and drainage, that water will find every microscopic crack, pore, and weak point to seep through. This is why even "solid" concrete foundations can develop moisture problems over time.
          </p>

          {/* Hydrostatic Pressure Diagram - keeping existing SVG */}
          <div className="my-10 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
            <h3 className="text-lg font-semibold mb-6 text-center">How Hydrostatic Pressure Works</h3>
            <svg viewBox="0 0 800 500" className="w-full max-w-3xl mx-auto">
              {/* SVG content from original article - keeping as is */}
              <defs>
                <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8B7355" />
                  <stop offset="100%" stopColor="#654321" />
                </linearGradient>
                <linearGradient id="waterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#1E40AF" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="800" height="200" fill="url(#groundGrad)" />
              <rect x="0" y="200" width="800" height="300" fill="url(#waterGrad)" opacity="0.7" />
              <rect x="300" y="150" width="200" height="300" fill="#D1D5DB" stroke="#6B7280" strokeWidth="4" />
              <text x="400" y="300" fontSize="20" fontWeight="600" textAnchor="middle" fill="#374151">
                Basement Wall
              </text>
              <path d="M 150 300 L 280 300" stroke="#EF4444" strokeWidth="4" markerEnd="url(#arrowRed)" />
              <path d="M 520 300 L 650 300" stroke="#EF4444" strokeWidth="4" markerEnd="url(#arrowRed)" />
              <text x="200" y="340" fontSize="14" fill="#DC2626" fontWeight="600">Hydrostatic Pressure →</text>
              <text x="520" y="340" fontSize="14" fill="#DC2626" fontWeight="600">→ Hydrostatic Pressure</text>
              <defs>
                <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#EF4444" />
                </marker>
              </defs>
            </svg>
          </div>

          <h2>The Multi-Layer Defense Strategy</h2>

          <p>
            Professional waterproofing isn't about one silver bullet—it's about creating multiple layers of defense. Here's the proven approach used by the best contractors:
          </p>

          <h3>Layer 1: Exterior Foundation Drainage</h3>

          <p>
            The first line of defense happens outside your foundation. A properly installed exterior drainage system (often called a "French drain" or "footing drain") intercepts water before it ever reaches your walls.
          </p>

          <p>
            This system consists of perforated pipes laid at the base of your foundation, surrounded by gravel. As water accumulates in the soil, it flows into the gravel bed and the pipes, which then carry it away to a safe discharge point—either to daylight if your lot slopes, or to a sump pit if you're on flat land.
          </p>

          <p>
            For advanced protection, many homeowners are now integrating <Link href="/articles/crystalline-waterproofing" className="text-brand-teal hover:underline font-semibold">crystalline waterproofing</Link> treatments directly into the foundation concrete, creating a self-healing barrier at the molecular level.
          </p>

          <h3>Layer 2: The Sump Pump System</h3>

          <p>
            Your sump pump is the heart of your waterproofing system. It sits in a specially designed pit (typically 18-24 inches deep) and automatically activates when water accumulates. Modern <Link href="/articles/smart-sump-pumps-guide" className="text-brand-teal hover:underline font-semibold">smart sump pump systems</Link> have evolved dramatically, offering WiFi alerts, predictive monitoring, and integration with your smart home ecosystem.
          </p>

          <p>
            But here's the critical question most homeowners overlook: What happens when the power goes out during the very storm that's flooding your basement? This is where choosing between a <Link href="/articles/battery-vs-water-powered-sump-pumps" className="text-brand-teal hover:underline font-semibold">battery backup or water-powered backup system</Link> becomes essential. Battery systems offer high flow rates but finite runtime, while water-powered systems can run indefinitely as long as you have city water pressure.
          </p>

          {/* Sump Pump Diagram - keeping existing SVG */}
          <div className="my-10 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold mb-6 text-center">Interior Perimeter Drain System</h3>
            <svg viewBox="0 0 800 400" className="w-full max-w-3xl mx-auto">
              {/* Keep existing SVG from original */}
              <rect x="50" y="200" width="700" height="150" fill="#E5E7EB" stroke="#6B7280" strokeWidth="3" rx="4" />
              <rect x="100" y="150" width="600" height="50" fill="#9CA3AF" stroke="#4B5563" strokeWidth="2" />
              <text x="400" y="180" fontSize="16" fontWeight="600" textAnchor="middle" fill="#1F2937">Foundation Wall</text>
              <rect x="150" y="300" width="150" height="80" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" opacity="0.3" />
              <rect x="200" y="290" width="50" height="90" fill="#6B7280" stroke="#374151" strokeWidth="2" />
              <circle cx="225" cy="335" r="15" fill="#EF4444" />
              <text x="225" y="395" fontSize="12" textAnchor="middle" fill="#374151" fontWeight="600">Sump Pit</text>
            </svg>
          </div>

          <h3>Layer 3: Vapor Barriers and Sealants</h3>

          <p>
            Even with excellent drainage and pumping, some moisture can still penetrate through the concrete itself via capillary action. This is where interior treatments come in.
          </p>

          <p>
            High-quality masonry sealers create a chemical barrier that blocks water molecules while still allowing water vapor to escape (this "breathability" is crucial—you don't want to trap moisture inside the wall). For homes with persistent issues, professional-grade epoxy injections can seal hairline cracks from the inside.
          </p>

          <h2>The Science of Concrete Permeability</h2>

          <p>
            Here's something most homeowners don't realize: concrete is naturally porous. As it cures, excess water evaporates, leaving behind millions of microscopic capillary tunnels. These passages, though invisible to the naked eye, create pathways for water intrusion.
          </p>

          <p>
            This is why modern builders are increasingly turning to <Link href="/articles/crystalline-waterproofing" className="text-brand-teal hover:underline font-semibold">crystalline waterproofing technology</Link> as a preventive measure. When mixed into concrete as an admixture or applied as a topical slurry, these crystalline compounds react with moisture and unhydrated cement particles to grow needle-like crystals deep into the concrete matrix. The result? A foundation that can actually heal its own cracks over time.
          </p>

          {/* AdSense Placeholder */}
          <div className="my-10 bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 text-sm">Advertisement</p>
          </div>

          <h2>Common Waterproofing Mistakes (And How to Avoid Them)</h2>

          <h3>Mistake #1: Only Treating the Inside</h3>

          <p>
            Many homeowners try to solve water problems with interior sealants alone. While these can help with minor dampness, they don't address the root cause: water pressure from outside. It's like trying to stop a flood by painting your walls—you're fighting physics.
          </p>

          <p>
            The proper approach is to manage water at the source. Exterior drainage systems remove the hydrostatic pressure before it becomes a problem, while interior systems catch any water that does make it through.
          </p>

          <h3>Mistake #2: Ignoring Grading and Gutters</h3>

          <p>
            Before you spend thousands on drainage systems, check your home's grading. The soil should slope away from your foundation at a rate of at least 6 inches over the first 10 feet. This simple fix can redirect thousands of gallons away from your basement.
          </p>

          <p>
            Similarly, clogged or improperly positioned gutters can dump roof runoff right next to your foundation. That's like building a river alongside your basement wall. Clean your gutters, extend your downspouts at least 6 feet from the foundation, and consider adding splash blocks or underground drainage pipes.
          </p>

          <h3>Mistake #3: Skipping the Backup Pump</h3>

          <p>
            Your primary sump pump will eventually fail. It's not a matter of if, but when. Motors burn out, float switches stick, and power outages happen during the very storms that cause flooding. A backup system is not optional—it's insurance for your home's most valuable asset.
          </p>

          <h2>Cost Breakdown: What to Expect</h2>

          <div className="my-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>System Type</th>
                  <th>Average Cost</th>
                  <th>Lifespan</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Exterior Drainage</strong></td>
                  <td>$5,000 - $15,000</td>
                  <td>30+ years</td>
                  <td>New construction, severe issues</td>
                </tr>
                <tr className="bg-gray-50">
                  <td><strong>Interior Drainage</strong></td>
                  <td>$3,000 - $8,000</td>
                  <td>20-25 years</td>
                  <td>Existing homes, moderate issues</td>
                </tr>
                <tr>
                  <td><strong>Sump Pump + Backup</strong></td>
                  <td>$800 - $2,000</td>
                  <td>7-10 years</td>
                  <td>All basements below grade</td>
                </tr>
                <tr className="bg-gray-50">
                  <td><strong>Crack Injection</strong></td>
                  <td>$300 - $800 per crack</td>
                  <td>10-15 years</td>
                  <td>Isolated structural cracks</td>
                </tr>
                <tr>
                  <td><strong>Crystalline Treatment</strong></td>
                  <td>$2 - $5 per sq ft</td>
                  <td>Lifetime of concrete</td>
                  <td>New construction, proactive protection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Remember: the cost of waterproofing is always less than the cost of flood damage. The average basement flood costs $10,000-$20,000 to remediate, not counting the loss of irreplaceable items like family photos or finished living space.
          </p>

          <h2>DIY vs. Professional Installation</h2>

          <p>
            Some waterproofing tasks are DIY-friendly: applying interior sealants, extending downspouts, improving grading, and even installing a basic sump pump if you're handy with PVC and electrical work.
          </p>

          <p>
            However, exterior drainage systems require excavation, proper drainage plane installation, and backfilling—all of which need to meet code and be done correctly the first time. For these projects, hire a licensed contractor with references and a solid warranty (look for lifetime transferable warranties on workmanship).
          </p>

          <h2>Maintenance: The Often-Forgotten Step</h2>

          <p>
            Even the best waterproofing system needs regular maintenance:
          </p>

          <ul>
            <li>Test your sump pump quarterly by pouring water into the pit</li>
            <li>Check the discharge line for clogs or freezing (in winter)</li>
            <li>Clean gutters twice a year (spring and fall)</li>
            <li>Inspect foundation walls annually for new cracks</li>
            <li>Monitor humidity levels with a hygrometer (keep below 50%)</li>
          </ul>

          <p>
            Modern <Link href="/articles/smart-sump-pumps-guide" className="text-brand-teal hover:underline font-semibold">smart monitoring systems</Link> can automate much of this vigilance, sending you alerts before small issues become expensive disasters.
          </p>

          <div className="bg-gray-50 border-l-4 border-brand-teal p-6 my-10">
            <h3 className="text-lg font-bold text-brand-navy mb-2">Your Next Steps</h3>
            <p className="mb-4">
              Ready to protect your basement? Here's your action plan:
            </p>
            <ol className="space-y-2">
              <li>1. Inspect your current drainage and identify problem areas</li>
              <li>2. Get 3 quotes from licensed waterproofing contractors</li>
              <li>3. Verify warranties and references</li>
              <li>4. Schedule work during dry weather (if possible)</li>
              <li>5. Consider <Link href="/articles/pre-finish-audit" className="text-brand-teal hover:underline font-semibold">preventive measures before finishing your basement</Link></li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-10">
            <h3 className="text-lg font-bold text-blue-900 mb-3">📖 Continue Your Research</h3>
            <p className="text-blue-800 mb-4">Explore related topics:</p>
            <ul className="space-y-2">
              <li>
                <Link href="/articles/crystalline-waterproofing" className="text-brand-teal hover:underline font-semibold">
                  → What is Crystalline Waterproofing?
                </Link>
                <span className="text-blue-700 text-sm ml-2">Learn about self-healing concrete technology</span>
              </li>
              <li>
                <Link href="/articles/smart-sump-pumps-guide" className="text-brand-teal hover:underline font-semibold">
                  → Smart Sump Pumps & Leak Sensors Guide
                </Link>
                <span className="text-blue-700 text-sm ml-2">IoT flood prevention systems explained</span>
              </li>
              <li>
                <Link href="/articles/battery-vs-water-powered-sump-pumps" className="text-brand-teal hover:underline font-semibold">
                  → Battery vs Water-Powered Backup Pumps
                </Link>
                <span className="text-blue-700 text-sm ml-2">Which backup system is right for you?</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lead Form CTA */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4 text-center">
            Ready to Waterproof Your Basement?
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Get free quotes from licensed waterproofing contractors in your area.
          </p>
          <LeadForm />
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-gray-300 pt-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/articles/pre-finish-audit" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-brand-navy mb-2 hover:text-brand-teal">
                The Pre-Finish Audit: 7 Critical Checkpoints
              </h3>
              <p className="text-gray-600 text-sm">
                Don't finish your basement before checking these 7 essential items.
              </p>
            </Link>
            <Link href="/articles/best-basement-flooring" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-brand-navy mb-2 hover:text-brand-teal">
                Best Waterproof Flooring for Basements 2026
              </h3>
              <p className="text-gray-600 text-sm">
                LVP vs. Ceramic vs. Engineered Wood - complete comparison.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
