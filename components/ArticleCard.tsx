import Link from 'next/link'

interface ArticleCardProps {
  title: string
  description: string
  slug: string
  category: string
  readTime: string
}

export default function ArticleCard({ title, description, slug, category, readTime }: ArticleCardProps) {
  return (
    <Link href={`/articles/${slug}`} className="group">
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-semibold text-brand-teal">{category}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 flex-grow">
          {description}
        </p>
        <div className="mt-4 text-brand-teal font-semibold flex items-center group-hover:gap-2 transition-all">
          Read More
          <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
