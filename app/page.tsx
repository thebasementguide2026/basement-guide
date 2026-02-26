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
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                Everything you need to know about stopping basement leaks for good. From hydrostatic pressure to sump pumps.
              </p>
              <Link
                href="/articles/complete-basement-waterproofing-guide"
                className="inline-flex items-center bg-brand-teal hover:bg-white hover:text-brand-navy text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 shadow-lg"
              >
                Read the Complete Guide
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles - Clean Card Grid */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">Latest Articles</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Expert advice on waterproofing, finishing, and maintaining your basement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 6).map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <article className="bg-white rounded-lg border border-gray-200 p-6 hover:border-brand-teal hover:shadow-md transition-all duration-200 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-teal transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guides Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Cost Guides</h2>
              <p className="text-gray-500 mt-1">Real pricing data for every basement project</p>
            </div>
            <Link href="/cost-guides" className="hidden md:inline-flex items-center text-brand-teal hover:text-brand-navy font-semibold transition-colors">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costGuides.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <article className="bg-white rounded-lg border border-gray-200 p-6 hover:border-brand-teal hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-brand-teal">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Waterproofing & Protection Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Waterproofing & Protection</h2>
              <p className="text-gray-500 mt-1">Deep dives into keeping your basement dry</p>
            </div>
            <Link href="/guides" className="hidden md:inline-flex items-center text-brand-teal hover:text-brand-navy font-semibold transition-colors">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {waterproofing.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <article className="flex gap-5 bg-white rounded-lg border border-gray-200 p-5 hover:border-brand-teal hover:shadow-md transition-all duration-200">
                  <div className="flex-shrink-0 w-2 rounded-full bg-brand-teal/20 group-hover:bg-brand-teal transition-colors" />
                  <div>
                    <span className="text-xs text-brand-teal font-semibold uppercase tracking-wide">{article.category}</span>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-teal transition-colors mt-1 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{article.description}</p>
                    <span className="text-xs text-gray-400 mt-2 inline-block">{article.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Product Guides */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Reviews & Buying Guides</h2>
              <p className="text-gray-500 mt-1">Honest product reviews and smart buying advice</p>
            </div>
            <Link href="/reviews" className="hidden md:inline-flex items-center text-brand-teal hover:text-brand-navy font-semibold transition-colors">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <article className="bg-white rounded-lg border border-gray-200 p-6 hover:border-brand-teal hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-brand-teal font-semibold uppercase tracking-wide">{article.category}</span>
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-teal transition-colors mt-2 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{article.description}</p>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Health & Safety</h2>
              <p className="text-gray-500 mt-1">Protect your family from mold, radon, and moisture</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthSafety.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <article className="bg-white rounded-lg border border-gray-200 p-5 hover:border-brand-teal hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-brand-teal font-semibold uppercase tracking-wide">{article.category}</span>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-brand-teal transition-colors mt-2 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-2">{article.description}</p>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing & Renovation */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Finishing & Renovation</h2>
              <p className="text-gray-500 mt-1">Turn your basement into livable space</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishing.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                <article className="bg-white rounded-lg border border-gray-200 p-6 hover:border-brand-teal hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-brand-teal font-semibold uppercase tracking-wide">{article.category}</span>
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-teal transition-colors mt-2 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{article.description}</p>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Expert Guides */}
      {remaining.length > 0 && (
        <section className="bg-white py-16 border-t border-gray-200">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">More Expert Guides</h2>
              <p className="text-gray-500 mt-1">Explore our complete library of basement guides</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remaining.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
                  <article className="bg-white rounded-lg border border-gray-200 p-6 hover:border-brand-teal hover:shadow-md transition-all duration-200">
                    <span className="text-xs text-brand-teal font-semibold uppercase tracking-wide">{article.category}</span>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-teal transition-colors mt-2 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{article.description}</p>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead Form Section */}
      <section className="bg-brand-navy py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get Free Quotes from Local Pros</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Compare quotes from vetted basement waterproofing contractors in your area. No obligation to hire, 100% free service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-1">14</div>
              <h4 className="font-semibold text-white">Expert Guides</h4>
              <p className="text-gray-400 text-sm">55,000+ words of engineer-reviewed content</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-1">$0</div>
              <h4 className="font-semibold text-white">Free Quotes</h4>
              <p className="text-gray-400 text-sm">No cost, no obligation to hire</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-1">A+</div>
              <h4 className="font-semibold text-white">Vetted Contractors</h4>
              <p className="text-gray-400 text-sm">Licensed, insured, and background-checked pros</p>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
