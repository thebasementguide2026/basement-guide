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
                src="/exterior-waterproofing-membrane.jpg.png"
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
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  BG
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">The Basement Guide</p>
                  <p className="text-gray-500 text-xs">Expert Staff</p>
                </div>
              </div>
              <Link
                href="/articles/complete-basement-waterproofing-guide"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-teal-700 transition-colors shadow-md"
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
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Latest Articles</h2>
              <p className="text-gray-500">Expert advice on waterproofing, finishing, and maintenance.</p>
            </div>
            <Link href="/guides" className="text-teal-600 font-bold hover:underline flex items-center gap-1">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Finishing Cost */}
            <Link href="/articles/basement-finishing-cost" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
              <div className="relative h-48">
                <Image src="/unfinished-basement-interior.jpg.jpg" alt="Basement finishing cost guide" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-2 py-1 rounded">Cost Guide</span>
                  <span className="text-gray-400 text-xs">18 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">Basement Finishing Cost Guide 2026</h3>
                <p className="text-gray-500 text-sm">What you'll actually pay in 2026. From $20 to $75 per sq ft, full breakdowns by size and finish level.</p>
              </div>
            </Link>

            {/* Card 2: Smart Sump Pumps */}
            <Link href="/articles/smart-sump-pumps-guide" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
              <div className="relative h-48">
                <Image src="/smart-home-leak-sensors.jpg.jpg" alt="Smart sump pump with phone app" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded">Smart Home</span>
                  <span className="text-gray-400 text-xs">14 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">Smart Sump Pumps & Leak Sensors: The 2026 Guide</h3>
                <p className="text-gray-500 text-sm">IoT flood prevention systems that text you before disasters. Matter protocol, Thread networks, and predictive monitoring explained.</p>
              </div>
            </Link>

            {/* Card 3: Interior vs Exterior */}
            <Link href="/articles/interior-vs-exterior-waterproofing" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
              <div className="relative h-48">
                <Image src="/bitumen-waterproofing-membrane.png" alt="Bitumen waterproofing membrane application" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-teal-50 text-teal-700 text-xs font-semibold px-2 py-1 rounded">Deep Dive</span>
                  <span className="text-gray-400 text-xs">25 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">Interior vs. Exterior Waterproofing: The 2026 Comparison</h3>
                <p className="text-gray-500 text-sm">A 5,000-word deep dive into which method is best for your foundation, covering costs, longevity, and effectiveness.</p>
              </div>
            </Link>

            {/* Card 4: Insulation */}
            <Link href="/articles/basement-insulation-guide" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
              <div className="relative h-48">
                <Image src="/foundation-concrete-forms.jpg.png" alt="Basement foundation concrete forms" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-2 py-1 rounded">Insulation</span>
                  <span className="text-gray-400 text-xs">15 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">Basement Insulation: The 2026 Guide</h3>
                <p className="text-gray-500 text-sm">Rigid foam vs. spray foam vs. mineral wool. How to stop energy loss and prevent condensation issues.</p>
              </div>
            </Link>

            {/* Card 5: Foundation Cracks */}
            <Link href="/articles/foundation-crack-repair-cost" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
              <div className="relative h-48">
                <Image src="/foundation-crack-closeup.jpg.jpg" alt="Foundation crack closeup" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-2 py-1 rounded">Cost Guide</span>
                  <span className="text-gray-400 text-xs">12 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">Foundation Crack Repair Cost 2026</h3>
                <p className="text-gray-500 text-sm">Epoxy injection vs. polyurethane foam. Expect to pay $350–$1,500 per crack depending on severity and method.</p>
              </div>
            </Link>

            {/* Card 6: French Drains */}
            <Link href="/articles/french-drain-cost" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
              <div className="relative h-48">
                <Image src="/french-drain-trench.jpg" alt="French drain trench installation" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-2 py-1 rounded">Cost Guide</span>
                  <span className="text-gray-400 text-xs">10 min read</span>
                </div>
                <h3 className="font-bold text-slate-800 text-xl mb-2">French Drain Installation Cost 2026</h3>
                <p className="text-gray-500 text-sm">Full cost breakdown for yard and interior French drains. Average $1,000–$6,500 depending on length and type.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="get-quotes" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get Free Quotes from Local Pros</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Compare quotes from vetted basement waterproofing contractors in your area. No obligation to hire, 100% free service.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                    <span className="text-teal-400 font-bold">14</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Expert Guides</h4>
                    <p className="text-slate-400 text-sm">55,000+ words of engineer-reviewed content</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                    <span className="text-teal-400 font-bold">$0</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Free Quotes</h4>
                    <p className="text-slate-400 text-sm">No cost, no obligation to hire</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                    <span className="text-teal-400 font-bold">A+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Vetted Contractors</h4>
                    <p className="text-slate-400 text-sm">Licensed, insured, and background-checked pros</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 bg-white">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
