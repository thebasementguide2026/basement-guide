import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Egress Window Installation Cost 2026 | The Basement Guide',
  description: 'How much does it cost to install an egress window in 2026? Permits, excavation, drainage, and labor costs explained.',
}

export default function EgressWindowCost() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase">Cost Guide</span>
            <span className="text-slate-400 text-sm">12 min read</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Egress Window Installation Cost 2026: The Complete Breakdown
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Thinking about adding a bedroom to your basement? You'll need an egress window. In 2026, homeowners can expect to pay between $2,500 and $5,500 per window, depending on several critical factors.
          </p>
        </div>
      </header>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 prose prose-slate max-w-none">
            <p className="lead text-lg text-gray-600 mb-8">
              An egress window is more than just a source of natural light. It is a vital life-safety feature required by the International Residential Code (IRC) for any basement room intended for sleeping. In this guide, we break down the real-world costs you'll face in 2026.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">2026 Egress Window Cost Overview</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
              <ul className="space-y-3 m-0 list-none">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold">National Average:</span>
                  <span className="text-teal-600 font-bold">$3,850</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold">Typical Range:</span>
                  <span className="text-teal-600 font-bold">$2,500 – $5,500</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold">DIY Cost:</span>
                  <span className="text-teal-600 font-bold">$1,200 – $2,500</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Professional Installation:</span>
                  <span className="text-teal-600 font-bold">$2,500 – $3,500 (Labor only)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Cost Breakdown by Component</h2>
            <p className="mb-6">The total cost of an egress window is divided into four main categories: materials, excavation, structural work, and finishing.</p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">1. Materials ($1,000 – $2,200)</h3>
            <p className="mb-4">This includes the window itself (usually a casement or in-swing model), the window well, the safety cover, and the interior trim.</p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">2. Excavation & Drainage ($800 – $1,500)</h3>
            <p className="mb-4">Egress windows require a deep well. This involves significant digging and, crucially, a drain tied into your foundation's weeping tile system to prevent basement flooding.</p>

            <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">3. Structural Cutting ($600 – $1,200)</h3>
            <p className="mb-4">Professional concrete cutters use large diamond-blade saws to cut through your foundation wall. This is a high-precision job that should never be DIY-ed.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Critical Code Requirements</h2>
            <p className="mb-6">To be legal, an egress window must meet specific measurements:</p>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8">
              <ul className="space-y-2 m-0 text-teal-900">
                <li><strong>Minimum Opening Area:</strong> 5.7 square feet</li>
                <li><strong>Minimum Opening Height:</strong> 24 inches</li>
                <li><strong>Minimum Opening Width:</strong> 20 inches</li>
                <li><strong>Maximum Sill Height:</strong> 44 inches above the floor</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Is an Egress Window Worth the Cost?</h2>
            <p className="mb-6">For most homeowners, the answer is a resounding yes. Beyond the safety aspect, adding a legal bedroom can increase your home's value by $15,000 to $25,000, providing an ROI of over 300% on the installation cost.</p>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Get a Quote</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Ready to add an egress window? Connect with local pros for a custom quote.
                </p>
                <Link
                  href="/#get-quotes"
                  className="block w-full bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-3 rounded-lg transition-colors"
                >
                  Find Local Contractors
                </Link>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Related Guides</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  <li>
                    <Link href="/articles/basement-finishing-cost" className="text-teal-600 hover:underline font-medium text-sm">
                      Basement Finishing Cost Guide 2026
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles/pre-finish-audit" className="text-teal-600 hover:underline font-medium text-sm">
                      The 7-Point Pre-Finish Audit
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles/complete-basement-waterproofing-guide" className="text-teal-600 hover:underline font-medium text-sm">
                      Complete Waterproofing Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
