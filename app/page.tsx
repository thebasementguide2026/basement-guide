import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import LeadForm from '@/components/LeadForm'

export default function Home() {
  const featuredArticles = [
    {
      title: "The Complete Basement Waterproofing Guide",
      description: "Everything you need to know about stopping basement leaks for good. From hydrostatic pressure to sump pumps.",
      slug: "complete-basement-waterproofing-guide",
      category: "Guides",
      readTime: "15 min read"
    },
    {
      title: "The Pre-Finish Audit: 7 Things Before Hanging Drywall",
      description: "Don't make costly mistakes. These 7 checkpoints will future-proof your basement finishing project.",
      slug: "pre-finish-audit",
      category: "Guides",
      readTime: "10 min read"
    },
    {
      title: "The Best Waterproof Flooring for Basements in 2026",
      description: "LVP vs. Ceramic vs. Engineered Wood. We break down the pros, cons, and costs of each option.",
      slug: "best-basement-flooring",
      category: "Reviews",
      readTime: "12 min read"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Expert Basement Advice for Homeowners
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Independent guides, reviews, and cost breakdowns to help you make smart decisions about basement waterproofing, finishing, and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/articles/complete-basement-waterproofing-guide" 
                className="bg-brand-teal hover:bg-brand-teal-light text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Start with Our Complete Guide
              </Link>
              <Link 
                href="/get-quotes" 
                className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Get Free Quotes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-navy mb-8">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-4 text-center">
              Get Free Quotes from Local Pros
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Compare quotes from vetted basement waterproofing contractors in your area.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-teal mb-2">50+</div>
              <div className="text-gray-600">Expert Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal mb-2">100%</div>
              <div className="text-gray-600">Independent Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal mb-2">2026</div>
              <div className="text-gray-600">Updated Pricing Data</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
