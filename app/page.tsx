import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/foundation-exterior-membrane-wide.jpg.png"
                alt="Professional basement waterproofing - exterior membrane installation"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Featured Guide
                </span>
                <span className="text-gray-500 text-sm">15 min read</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                The Complete Basement Waterproofing Guide for 2026
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Everything you need to know about stopping basement leaks for good. From hydrostatic pressure to sump pumps, this comprehensive guide covers all aspects of basement waterproofing.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold">BG</div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">The Basement Guide</p>
                  <p className="text-gray-500 text-xs">Expert Staff</p>
                </div>
              </div>
              <Link
                href="/articles/complete-basement-waterproofing-guide"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Read the Complete Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Latest Articles</h2>
            <Link href="/guides" className="text-teal-600 font-semibold hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Link href="/articles/smart-sump-pumps-guide" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image src="/smart-home-leak-sensors.jpg.jpg" alt="Smart sump pump with phone app" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-teal-50 text-teal-700 text-xs font-semibold px-2 py-1 rounded">Smart Home</span>
                  <span className="text-gray-400 text-xs">14 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">Smart Sump Pumps & Leak Sensors: The 2026 Guide</h3>
                <p className="text-gray-500 text-sm">IoT flood prevention systems that text you before disasters. Matter protocol, Thread networks, and predictive monitoring explained.</p>
              </div>
            </Link>

            <Link href="/articles/crystalline-waterproofing" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image src="/foundation-waterproofing-construction.jpg.png" alt="Crystalline waterproofing on concrete foundation" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded">Technology</span>
                  <span className="text-gray-400 text-xs">8 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">What is Crystalline Waterproofing?</h3>
                <p className="text-gray-500 text-sm">Discover the self-healing concrete technology that's revolutionizing foundation protection. The invisible armor explained.</p>
              </div>
            </Link>

            <Link href="/articles/battery-vs-water-powered-sump-pumps" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image src="/sump-pump-installation.jpg.png" alt="Battery backup sump pump comparison" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-2 py-1 rounded">Comparison</span>
                  <span className="text-gray-400 text-xs">11 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">Battery vs Water-Powered Sump Pumps</h3>
                <p className="text-gray-500 text-sm">Power vs. physics: Which backup system is right for your home? Complete 2026 comparison with costs and flow rates.</p>
              </div>
            </Link>

            <Link href="/articles/best-basement-flooring" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image src="/basement-flooring-installation.jpg.png" alt="Best waterproof flooring for basements" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-2 py-1 rounded">Reviews</span>
                  <span className="text-gray-400 text-xs">12 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">Best Waterproof Flooring for Basements 2026</h3>
                <p className="text-gray-500 text-sm">LVP vs. Ceramic vs. Engineered Wood. We break down the pros, cons, and costs of each waterproof flooring option.</p>
              </div>
            </Link>

            <Link href="/articles/pre-finish-audit" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image src="/unfinished-basement-interior.jpg.jpg" alt="Pre-finish basement audit checklist" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded">Guides</span>
                  <span className="text-gray-400 text-xs">10 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">The Pre-Finish Audit: 7 Critical Checkpoints</h3>
                <p className="text-gray-500 text-sm">Don't make costly mistakes. These 7 checkpoints will future-proof your basement before you hang a single sheet of drywall.</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="get-quotes" className="bg-white py-12 border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Get Free Quotes from Local Pros</h2>
            <p className="text-gray-600">Compare quotes from vetted basement waterproofing contractors in your area. No obligation.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-600">6</p>
              <p className="text-sm font-semibold text-slate-800">Expert Guides</p>
              <p className="text-xs text-gray-500">26,000+ words of content</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-600">100%</p>
              <p className="text-sm font-semibold text-slate-800">Independent Reviews</p>
              <p className="text-xs text-gray-500">No paid placements</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-600">2026</p>
              <p className="text-sm font-semibold text-slate-800">Updated Pricing Data</p>
              <p className="text-xs text-gray-500">Current market rates</p>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
