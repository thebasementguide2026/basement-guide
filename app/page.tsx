import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'

export default function Home() {
  return (
    <>
      {/* Hero Section - Featured Article with Large Image */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              {/* IMAGE PLACEHOLDER */}
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="font-semibold text-slate-600 mb-2">Hero Image Needed</p>
                  <p className="text-sm text-slate-500 max-w-xs mx-auto">
                    Search: "modern basement renovation interior"<br/>
                    Size: 1200x800px<br/>
                    Source: Unsplash.com
                  </p>
                </div>
              </div>
              {/* When you have image, replace above div with:
              <Image 
                src="/images/hero-basement.jpg" 
                alt="Professional basement renovation"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>

            {/* Hero Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Featured Guide
                </span>
                <span className="text-gray-500 text-sm">15 min read</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
                The Complete Basement Waterproofing Guide for 2026
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Everything you need to know about stopping basement leaks for good. From hydrostatic pressure to sump pumps, this comprehensive guide covers all aspects of basement waterproofing.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold">
                    BG
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">The Basement Guide</p>
                    <p className="text-gray-500">Expert Staff</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/articles/complete-basement-waterproofing-guide"
                className="inline-block bg-brand-teal hover:bg-brand-teal-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Read the Complete Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-brand-navy">Latest Articles</h2>
            <Link href="/guides" className="text-brand-teal hover:text-brand-teal-light font-semibold">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Article Card 1 */}
            <Link href="/articles/smart-sump-pumps-guide" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-[240px] bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                {/* IMAGE PLACEHOLDER */}
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">📱</div>
                  <p className="text-xs text-slate-600 font-medium">Search: "smart home technology phone"</p>
                  <p className="text-xs text-slate-500">800x600px · Pexels.com</p>
                </div>
                {/* Replace with: <Image src="/images/smart-pumps.jpg" alt="Smart sump pump with phone app" fill className="object-cover" /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Smart Home</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs text-gray-500">14 min read</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
                  Smart Sump Pumps & Leak Sensors: The 2026 Guide
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  IoT flood prevention systems that text you before disasters. Matter protocol, Thread networks, and predictive monitoring explained.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-xs font-bold">
                    BG
                  </div>
                  <span className="text-gray-700 font-medium">The Basement Guide</span>
                </div>
              </div>
            </Link>

            {/* Article Card 2 */}
            <Link href="/articles/crystalline-waterproofing" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-[240px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                {/* IMAGE PLACEHOLDER */}
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🧱</div>
                  <p className="text-xs text-slate-600 font-medium">Search: "concrete wall texture close up"</p>
                  <p className="text-xs text-slate-500">800x600px · Unsplash.com</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Technology</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs text-gray-500">8 min read</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
                  What is Crystalline Waterproofing?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the self-healing concrete technology that's revolutionizing foundation protection. The invisible armor explained.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-xs font-bold">
                    BG
                  </div>
                  <span className="text-gray-700 font-medium">The Basement Guide</span>
                </div>
              </div>
            </Link>

            {/* Article Card 3 */}
            <Link href="/articles/battery-vs-water-powered-sump-pumps" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-[240px] bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                {/* IMAGE PLACEHOLDER */}
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🔋</div>
                  <p className="text-xs text-slate-600 font-medium">Search: "battery power backup system"</p>
                  <p className="text-xs text-slate-500">800x600px · Pexels.com</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Comparison</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs text-gray-500">11 min read</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
                  Battery vs Water-Powered Sump Pumps
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Power vs. physics: Which backup system is right for your home? Complete 2026 comparison with costs and flow rates.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-xs font-bold">
                    BG
                  </div>
                  <span className="text-gray-700 font-medium">The Basement Guide</span>
                </div>
              </div>
            </Link>

            {/* Article Card 4 */}
            <Link href="/articles/best-basement-flooring" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-[240px] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                {/* IMAGE PLACEHOLDER */}
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🏗️</div>
                  <p className="text-xs text-slate-600 font-medium">Search: "luxury vinyl plank flooring"</p>
                  <p className="text-xs text-slate-500">800x600px · Unsplash.com</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Reviews</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
                  Best Waterproof Flooring for Basements 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  LVP vs. Ceramic vs. Engineered Wood. We break down the pros, cons, and costs of each waterproof flooring option.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-xs font-bold">
                    BG
                  </div>
                  <span className="text-gray-700 font-medium">The Basement Guide</span>
                </div>
              </div>
            </Link>

            {/* Article Card 5 */}
            <Link href="/articles/pre-finish-audit" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-[240px] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                {/* IMAGE PLACEHOLDER */}
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">📋</div>
                  <p className="text-xs text-slate-600 font-medium">Search: "construction checklist clipboard"</p>
                  <p className="text-xs text-slate-500">800x600px · Pexels.com</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Guides</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs text-gray-500">10 min read</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
                  The Pre-Finish Audit: 7 Critical Checkpoints
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Don't make costly mistakes. These 7 checkpoints will future-proof your basement before you hang a single sheet of drywall.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white text-xs font-bold">
                    BG
                  </div>
                  <span className="text-gray-700 font-medium">The Basement Guide</span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Newsletter / Lead Form Section */}
      <section className="bg-brand-navy py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Free Quotes from Local Pros
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Compare quotes from vetted basement waterproofing contractors in your area. No obligation.
            </p>
            <div className="bg-white rounded-xl p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-brand-teal mb-2">6</div>
              <div className="text-gray-600 font-medium">Expert Guides</div>
              <div className="text-sm text-gray-500 mt-2">26,000+ words of content</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-brand-teal mb-2">100%</div>
              <div className="text-gray-600 font-medium">Independent Reviews</div>
              <div className="text-sm text-gray-500 mt-2">No paid placements</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-brand-teal mb-2">2026</div>
              <div className="text-gray-600 font-medium">Updated Pricing Data</div>
              <div className="text-sm text-gray-500 mt-2">Current market rates</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
