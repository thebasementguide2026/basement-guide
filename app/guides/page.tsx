import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Basement Guides | The Basement Guide',
  description: 'In-depth basement waterproofing, finishing, health & safety, and structural guides for homeowners.',
}

const sections = [
  {
    id: 'waterproofing',
    title: 'Waterproofing',
    description: 'Everything you need to keep your basement dry — from diagnosing leaks to full exterior systems.',
    slugs: ['complete-basement-waterproofing-guide', 'interior-vs-exterior-waterproofing', 'crystalline-waterproofing', 'crawl-space-encapsulation-guide', 'waterproof-basement-paint-sealers'],
    featured: ['complete-basement-waterproofing-guide'],
  },
  {
    id: 'finishing',
    title: 'Finishing Your Basement',
    description: 'Planning, permits, framing, and design — everything to turn raw space into livable square footage.',
    slugs: ['how-to-finish-a-basement', 'pre-finish-audit', 'basement-adu-rental-suite', 'basement-bathroom-guide', 'basement-home-gym', 'basement-permits-guide', 'drop-ceiling-vs-drywall'],
    featured: ['how-to-finish-a-basement'],
  },
  {
    id: 'sump-pumps',
    title: 'Sump Pumps & Drainage',
    description: 'Choosing, installing, and troubleshooting sump pumps and drainage systems.',
    slugs: ['sump-pump-buying-guide', 'smart-sump-pumps-guide', 'battery-vs-water-powered-sump-pumps', 'why-basement-floods-with-sump-pump'],
    featured: ['sump-pump-buying-guide'],
  },
  {
    id: 'health-safety',
    title: 'Health & Safety',
    description: 'Protect your family from mold, radon, high humidity, and poor air quality.',
    slugs: ['how-to-prevent-basement-mold', 'dehumidifier-myths', 'radon-and-basement-waterproofing', 'musty-basement-smell', 'basement-humidity-guide', 'mold-remediation-cost'],
    featured: ['how-to-prevent-basement-mold'],
  },
  {
    id: 'structural',
    title: 'Structural Issues',
    description: 'Understanding and addressing foundation cracks, bowing walls, and efflorescence.',
    slugs: ['bowing-basement-walls', 'types-of-foundation-cracks', 'basement-efflorescence'],
    featured: ['bowing-basement-walls'],
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Insurance',
    description: 'Buying, selling, and insuring homes with basement considerations.',
    slugs: ['homebuyers-basement-inspection-checklist', 'waterproofing-home-appraisal-value', 'basement-flooding-insurance'],
    featured: ['homebuyers-basement-inspection-checklist'],
  },
  {
    id: 'comparisons',
    title: 'Comparisons',
    description: "Side-by-side breakdowns to help you choose the right approach.",
    slugs: ['basement-vs-crawl-space-vs-slab', 'battery-vs-water-powered-sump-pumps', 'drylok-vs-radonseal', 'french-drain-vs-sump-pump', 'submersible-vs-pedestal-sump-pump', 'interior-vs-exterior-waterproofing', 'epoxy-vs-polyurethane-floor-coating'],
    featured: [],
  },
]

export default function GuidesPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="bg-brand-navy text-white py-12">
        <div className="container-custom">
          <nav className="text-sm text-slate-400 mb-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Guides</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Basement Guides</h1>
          <p className="text-slate-300 max-w-2xl">
            In-depth guides for every basement situation — waterproofing, finishing, health & safety, and more.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="container-custom py-12 space-y-16">
        {sections.map((section) => {
          const sectionArticles = section.slugs
            .map((slug) => articles.find((a) => a.slug === slug))
            .filter(Boolean) as typeof articles

          const featuredArticles = sectionArticles.filter((a) =>
            section.featured.includes(a.slug)
          )
          const regularArticles = sectionArticles.filter(
            (a) => !section.featured.includes(a.slug)
          )

          return (
            <div key={section.id} id={section.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
                <p className="text-gray-500 mt-1">{section.description}</p>
              </div>

              {/* Featured articles - larger cards */}
              {featuredArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {featuredArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group bg-white rounded-xl overflow-hidden border-2 border-brand-teal/20 hover:border-brand-teal hover:shadow-md transition-all flex flex-col"
                    >
                      {article.image && (
                        <div className="relative h-52 bg-gray-100">
                          <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                          <span className="absolute top-3 left-3 bg-brand-teal text-white text-xs font-bold px-2.5 py-1 rounded-full">FEATURED</span>
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="font-bold text-slate-800 text-base group-hover:text-brand-teal transition-colors">{article.title}</h3>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{article.description}</p>
                        <span className="text-brand-teal text-sm font-semibold mt-3 inline-block">Read Guide →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Regular card grid */}
              {regularArticles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {regularArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
                    >
                      {article.image && (
                        <div className="relative h-36 bg-gray-100">
                          <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-brand-teal transition-colors">{article.title}</h3>
                        <p className="text-gray-500 text-xs mt-1.5 line-clamp-2">{article.description}</p>
                        <span className="text-xs text-gray-400 mt-2 block">{article.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
