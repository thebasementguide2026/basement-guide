import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import { articles } from '@/lib/articles'

export default function Home() {
  const featuredArticle = articles.find(a => a.slug === 'complete-basement-waterproofing-guide')
  const costGuides = articles.filter(a => a.category === 'Cost Guide')
  const waterproofing = articles.filter(a => ['Waterproofing', 'Deep Dive', 'Technology'].includes(a.category))
  const healthSafety = articles.filter(a => a.category === 'Health & Safety')
  const finishing = articles.filter(a => a.category === 'Finishing')
  const reviews = articles.filter(a => ['Reviews', 'Buying Guide', 'Smart Home'].includes(a.category))
  const remaining = articles.filter(a => ![
    featuredArticle?.slug,
    ...costGuides.map(a => a.slug),
    ...waterproofing.map(a => a.slug),
    ...healthSafety.map(a => a.slug),
    ...finishing.map(a => a.slug),
    ...reviews.map(a => a.slug),
  ].includes(a.slug))

  return (
    <>
      {/* Hero Section - Full Width Featured Article */}
      <section className="relative bg-brand-navy">
        <div className="relative h-[500px] lg:h-[550px] w-full overflow-hidden">
          <Image
            src="/exterior-waterproofing-membrane.jpg.png"
            alt="Professional basement waterproofing"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto px-6">
              <span className="inline-block bg-brand-teal text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                Featured Guide
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The Complete Basement Waterproofing Guide for 2026
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Everything you need to know about stopping basement leaks for good. From hydrostatic pressure to sump pumps.
              </p>
              <Link
                href="/articles/complete-basement-waterproofing-guide"
                className="inline-flex items-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Read the Complete Guide
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles - Cards with Hero Images */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Latest Articles</h2>
          <p className="text-gray-500 mb-10 text-lg">Expert advice on waterproofing, finishing, and maintaining your basement</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 6).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {article.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guides Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Cost Guides</h2>
              <p className="text-gray-500 text-lg">Real pricing data for every basement project</p>
            </div>
            <Link href="/cost-guides" className="hidden md:inline-flex items-center gap-1 text-brand-teal font-semibold hover:text-brand-navy transition-colors">
              View All <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costGuides.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {article.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-gray-400 text-xs">{article.readTime}</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors mt-2 mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Waterproofing & Protection Section */}
      <section id="waterproofing" className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Waterproofing & Protection</h2>
              <p className="text-gray-500 text-lg">Deep dives into keeping your basement dry</p>
            </div>
            <Link href="/guides" className="hidden md:inline-flex items-center gap-1 text-brand-teal font-semibold hover:text-brand-navy transition-colors">
              View All <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waterproofing.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {article.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Buying Guides */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Reviews & Buying Guides</h2>
              <p className="text-gray-500 text-lg">Honest product reviews and smart buying advice</p>
            </div>
            <Link href="/reviews" className="hidden md:inline-flex items-center gap-1 text-brand-teal font-semibold hover:text-brand-navy transition-colors">
              View All <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {article.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section id="health-safety" className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Health & Safety</h2>
          <p className="text-gray-500 mb-10 text-lg">Protect your family from mold, radon, and moisture</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthSafety.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {article.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing & Renovation */}
      <section id="finishing" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Finishing & Renovation</h2>
          <p className="text-gray-500 mb-10 text-lg">Turn your basement into livable space</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishing.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {article.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Expert Guides */}
      {remaining.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">More Expert Guides</h2>
            <p className="text-gray-500 mb-10 text-lg">Explore our complete library of basement guides</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remaining.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  {article.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-2">{article.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead Form Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Free Quotes from Local Pros</h2>
          <p className="text-gray-300 text-center mb-12 text-lg max-w-2xl mx-auto">
            Compare quotes from vetted basement waterproofing contractors in your area. No obligation to hire, 100% free service.
                      </p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
