import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Basement Guides | The Basement Guide',
  description: 'In-depth basement waterproofing, finishing, and maintenance guides for homeowners. Expert advice written in plain English.',
}
const guides = [
  {
    title: 'Bowing Basement Walls: Causes, Repair Methods & Cost',
    description: 'A comprehensive guide to diagnosing and fixing bowing basement walls. Comparing carbon fiber straps, wall anchors, and piering.',
    href: '/articles/bowing-basement-walls',
    image: '/bowed%20walled.jpg',
    category: 'Structural',
    readTime: '18 min read',
  },
  {
    title: 'Types of Foundation Cracks: What Each One Means',
    description: 'Not all cracks are created equal. Use this 2026 diagnostic guide to determine if your foundation crack is a minor cosmetic issue or a structural red flag.',
    href: '/articles/types-of-foundation-cracks',
    image: '/cracked%20foundation.jpg',
    category: 'Diagnosis',
    readTime: '15 min read',
  },
  {
    title: 'Basement vs. Crawl Space vs. Slab: Which Foundation is Right for You?',
    description: 'Choosing a foundation is the most consequential decision in home construction. We compare the three major types on cost, longevity, and lifestyle.',
    href: '/articles/basement-vs-crawl-space-vs-slab',
    image: '/crawlspace.jpg',
    category: 'Comparison',
    readTime: '25 min read',
  },
  {
    title: 'How to Prevent Basement Mold: The Definitive Guide',
    description: "Mold isn't just an eyesore\u2014it's a biological threat. Learn the 5 pillars of permanent mold prevention for your basement.",
    href: '/articles/how-to-prevent-basement-mold',
    image: '/mold3.png',
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
    title: "Basement Finishing Cost Guide 2026: What You'll Actually Pay",
    description: "How much does it cost to finish a basement in 2026? Real pricing from $20 to $75 per sq ft, full breakdowns by size, room type, and region.",
    href: '/articles/basement-finishing-cost',
    image: '/unfinished-basement-interior.jpg.jpg',
    category: 'Cost Guide',
    readTime: '18 min read',
  },
  {
    title: 'Egress Window Installation Cost 2026',
    description: 'How much does it cost to install an egress window in 2026? Permits, excavation, drainage, and labor costs explained. Average $2,500\u2013$5,500 fully installed.',
    href: '/articles/egress-window-cost',
    image: '/unfinished-basement-interior.jpg.jpg',
    category: 'Cost Guide',
    readTime: '12 min read',
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
    image: '/tile-flooring-installation.jpg.png',
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
    description: 'Epoxy injection vs. polyurethane foam. Expect to pay $350\u20131,500 per crack depending on severity and method.',
    href: '/articles/foundation-crack-repair-cost',
    image: '/foundation-crack-closeup.jpg.jpg',
    category: 'Cost Guide',
    readTime: '12 min read',
  },
  {
    title: 'French Drain Installation Cost 2026',
    description: 'Full cost breakdown for yard and interior French drains. Average $1,000\u20136,500 depending on length and type.',
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
    description: 'Professional mold removal costs $500\u2013$10,000+ by area size. What drives the price and when to call a pro.',
    href: '/articles/mold-remediation-cost',
    image: '/dimple-mat-drainage-board.jpg.png',
    category: 'Health & Safety',
    readTime: '8 min read',
  },
  {
    title: 'Basement Waterproofing Cost 2026',
    description: 'Interior vs exterior waterproofing costs, drainage system pricing, and how to avoid getting overcharged by contractors.',
    href: '/articles/basement-waterproofing-cost',
    image: '/basement-flooring-installation.jpg.png',
    category: 'Cost Guide',
    readTime: '11 min read',
  },
  {
    title: 'Sump Pump Buying Guide: How to Choose the Right One (2026)',
    description: 'From horsepower to pump types, everything you need to know to choose the right sump pump and protect your basement from flooding.',
    href: '/articles/sump-pump-buying-guide',
    image: '/sump-pump-installation.jpg.png',
    category: 'Buying Guide',
    readTime: '12 min read',
  },
  {
    title: 'Why Your Basement Floods Even With a Sump Pump',
    description: 'Having a sump pump does not guarantee a dry basement. Here are the most common reasons it is still failing you\u2014and what to do about each one.',
    href: '/articles/why-basement-floods-with-sump-pump',
    image: '/basement-flooding.jpg',
    category: 'Troubleshooting',
    readTime: '10 min read',
  },
  {
    title: 'How to Finish a Basement: The Complete 2026 Guide',
    description: 'From permits and moisture science to framing, egress, and lighting. The complete structural, legal, and aesthetic roadmap for finishing your basement in 2026.',
    href: '/articles/how-to-finish-a-basement',
    image: '/finishing%20a%20basement%20guide.jpg',
    category: 'Finishing',
    readTime: '35 min read',
  },
    {
    title: 'Dehumidifier Myths: Why Your 30-Pint Unit Is Failing',
    description: 'Why your 30-pint unit is failing and the science-based guidelines to choose the right dehumidifier for your space.',
    href: '/articles/dehumidifier-myths',
    image: '/Dehumidifier%20Myths-hero%20image.jpg',
    category: 'Health & Safety',
    readTime: '30 min read',
  },
  {
    title: 'Radon and Basement Waterproofing: How Sealing Reduces Radon Risks',
    description: 'How sealing your home reduces radon risks and prevents water damage — your complete 2026 guide.',
    href: '/articles/radon-and-basement-waterproofing',
    image: '/Radon%20and%20waterproofing.jpg',
    category: 'Health & Safety',
    readTime: '28 min read',
  },
  {
    title: 'How Much Value Does Waterproofing Add to Your Home Appraisal?',
    description: 'A professionally waterproofed basement protects your home and boosts its market appeal — here\'s what the numbers say for 2026.',
    href: '/articles/waterproofing-home-appraisal-value',
    image: '/Home%20apprasial%20.jpg',
    category: 'Home Value',
    readTime: '22 min read',
  },
]
export default function GuidesPage() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Hero Section */}
      <section className='bg-slate-900 py-20 px-6'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>All Basement Guides</h1>
          <p className='text-slate-300 text-xl mb-6'>In-depth guides written for real homeowners — not contractors. Plain English, current data, honest advice.</p>
          <p className='text-teal-400 font-semibold'>{guides.length}&nbsp;<span className='text-slate-400 font-normal'>guides published</span></p>
        </div>
      </section>
      {/* Guides Grid */}
      <section className='max-w-5xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className='group block rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300'>
              <div className='relative h-52'>
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6 flex flex-col flex-1'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full'>{guide.category}</span>
                  <span className='text-gray-400 text-xs'>{guide.readTime}</span>
                </div>
                <h2 className='font-bold text-slate-800 text-xl mb-2'>{guide.title}</h2>
                <p className='text-gray-500 text-sm flex-1'>{guide.description}</p>
                <span className='text-teal-600 font-semibold text-sm mt-4'>Read Guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
