import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basement Guides | The Basement Guide',
  description: 'In-depth basement waterproofing, finishing, and maintenance guides for homeowners. Expert advice written in plain English.',
}

const guides = [
  {
    title: 'How to Prevent Basement Mold: The Definitive Guide',
    description: 'Mold isn\'t just an eyesore—it\'s a biological threat. Learn the 5 pillars of permanent mold prevention for your basement.',
    href: '/articles/how-to-prevent-basement-mold',
    image: '/basement-mold-wall.jpg',
    category: 'Health & Safety',
    readTime: '22 min read',
  },
  {
    title: 'The Complete Basement Waterproofing Guide for 2026',
    description: 'Everything you need to know about stopping basement leaks for good. From hydrostatic pressure to sump pumps, this comprehensive guide covers all aspects of basement waterproofing.',
    href: '/articles/complete-basement-waterproofing-guide',
    image: '/exterior-waterproofing-membrane.jpg.png',
    category: 'Waterproofing',
    readTime: '15 min read',
  },
  {
    title: 'Interior vs. Exterior Basement Waterproofing: The Ultimate 2026 Comparison',
    description: 'A 5,000-word deep dive into which method is best for your foundation, covering costs, longevity, and effectiveness.',
    href: '/articles/interior-vs-exterior-waterproofing',
    image: '/bitumen-waterproofing-membrane.png',
    category: 'Deep Dive',
    readTime: '25 min read',
  },
  {
    title: 'Basement Insulation: The 2026 Guide',
    description: 'Rigid foam vs. spray foam vs. mineral wool. How to stop energy loss and prevent condensation issues.',
    href: '/articles/basement-insulation-guide',
    image: '/foundation-concrete-forms.jpg.png',
    category: 'Insulation',
    readTime: '15 min read',
  },
  {
    title: 'Basement Finishing Cost Guide 2026: What You\'ll Actually Pay',
    description: 'How much does it cost to finish a basement in 2026? Real pricing from $20 to $75 per sq ft, full breakdowns by size, room type, and region.',
    href: '/articles/basement-finishing-cost',
    image: '/unfinished-basement-interior.jpg.jpg',
    category: 'Cost Guide',
    readTime: '18 min read',
  },
  {
    title: 'The Pre-Finish Audit: 7 Critical Checkpoints',
    description: "Don't make costly mistakes. These 7 checkpoints will future-proof your basement before you hang a single sheet of drywall.",
    href: '/articles/pre-finish-audit',
    image: '/foundation-waterproofing-construction.jpg.png',
    category: 'Finishing',
    readTime: '10 min read',
  },
  {
    title: 'Best Waterproof Flooring for Basements 2026',
    description: 'LVP vs. Ceramic vs. Engineered Wood. We break down the pros, cons, and costs of each waterproof flooring option for basements.',
    href: '/articles/best-basement-flooring',
    image: '/basement-flooring-installation.jpg.png',
    category: 'Reviews',
    readTime: '12 min read',
  },
  {
    title: 'Smart Sump Pumps & Leak Sensors: The 2026 Guide',
    description: 'IoT flood prevention systems that text you before disasters. Matter protocol, Thread networks, and predictive monitoring explained.',
    href: '/articles/smart-sump-pumps-guide',
    image: '/smart-home-leak-sensors.jpg.jpg',
    category: 'Smart Home',
    readTime: '14 min read',
  },
  {
    title: 'Battery vs Water-Powered Sump Pumps: 2026 Comparison',
    description: 'Power vs. physics: Which backup sump pump system is right for your home? Complete 2026 comparison with costs and flow rates.',
    href: '/articles/battery-vs-water-powered-sump-pumps',
    image: '/sump-pump-pit-closeup.jpg.png',
    category: 'Comparison',
    readTime: '11 min read',
  },
  {
    title: 'What is Crystalline Waterproofing? Self-Healing Concrete Technology',
    description: "Discover how crystalline waterproofing creates self-healing concrete foundations. The invisible armor that's revolutionizing basement protection.",
    href: '/articles/crystalline-waterproofing',
    image: '/foundation-exterior-membrane-wide.jpg.png',
    category: 'Technology',
    readTime: '8 min read',
  },
  {
    title: 'Foundation Crack Repair Cost 2026',
    description: 'Epoxy injection vs. polyurethane foam. Expect to pay $350–$1,500 per crack depending on severity and method.',
    href: '/articles/foundation-crack-repair-cost',
    image: '/foundation-crack-closeup.jpg.jpg',
    category: 'Cost Guide',
    readTime: '12 min read',
  },
  {
    title: 'French Drain Installation Cost 2026',
    description: 'Full cost breakdown for yard and interior French drains. Average $1,000–$6,500 depending on length and type.',
    href: '/articles/french-drain-cost',
    image: '/french-drain-trench.jpg',
    category: 'Cost Guide',
    readTime: '10 min read',
  },
  {
    title: 'Sump Pump Installation Cost 2026',
    description: 'Pedestal vs. submersible pump pricing, pit excavation, and battery backup costs explained.',
    href: '/articles/sump-pump-cost',
    image: '/sump-pump-installation.jpg',
    category: 'Cost Guide',
    readTime: '9 min read',
  },
  {
    title: 'Mold Remediation Cost 2026',
    description: 'Professional mold removal costs $500–$10,000+ by area size. What drives the price and when to call a pro.',
    href: '/articles/mold-remediation-cost',
    image: '/basement-mold-wall.jpg',
    category: 'Health & Safety',
    readTime: '8 min read',
  },
  {
    title: 'Basement Waterproofing Cost 2026',
    description: 'Interior vs exterior waterproofing costs, drainage system pricing, and how to avoid getting overcharged by contractors.',
    href: '/articles/basement-waterproofing-cost',
    image: '/dimple-mat-drainage-board.jpg.png',
    category: 'Cost Guide',
    readTime: '11 min read',
  },
]

export default function GuidesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">All Basement Guides</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            In-depth guides written for real homeowners — not contractors. Plain English, current data, honest advice.
          </p>
          <p className="text-teal-400 text-sm mt-3 font-medium">{guides.length} guides published</p>
        </div>
      </section>

      {/* Guides Grid */}
feat: add mold prevention article to guides listing        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
              >
                <div className="relative h-52">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-teal-50 text-teal-700 text-xs font-semibold px-2 py-1 rounded">
                      {guide.category}
                    </span>
                    <span className="text-gray-400 text-xs">{guide.readTime}</span>
                  </div>
                  <h2 className="font-bold text-slate-800 text-xl mb-2">{guide.title}</h2>
                  <p className="text-gray-500 text-sm flex-1">{guide.description}</p>
                  <p className="text-teal-600 font-semibold text-sm mt-4">Read Guide →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
