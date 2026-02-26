'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { searchArticles } from '@/lib/articles'
import SearchBar from '@/components/SearchBar'

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = query ? searchArticles(query) : []

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Guides</h1>

        <div className="mb-8">
          <SearchBar />
        </div>

        {query && (
          <p className="text-sm text-gray-500 mb-6">
            {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
          </p>
        )}

        <div className="space-y-4">
          {results.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-gray-300 transition-all group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors mb-1">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
            </Link>
          ))}
        </div>

        {query && results.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No guides found</h2>
            <p className="text-gray-500 mb-4">Try a different search term or browse all guides.</p>
            <Link href="/guides" className="text-teal-600 font-medium hover:text-teal-700">
              Browse all guides &rarr;
            </Link>
          </div>
        )}

        {!query && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Search our guides</h2>
            <p className="text-gray-500">Type a keyword above to find basement waterproofing, finishing, and maintenance guides.</p>
          </div>
        )}
      </div>
    </div>
  )
}
