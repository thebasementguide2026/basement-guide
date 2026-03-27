import { Suspense } from 'react'
import type { Metadata } from 'next'
import SearchResults from '@/components/SearchResults'

export const metadata: Metadata = {
  title: 'Search Guides | The Basement Guide',
  description: 'Search our library of basement waterproofing, finishing, and maintenance guides.',
  alternates: { canonical: 'https://thebasement.guide/search' },
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Guides</h1>
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 rounded-lg" />
            <div className="h-24 bg-gray-100 rounded-lg" />
            <div className="h-24 bg-gray-100 rounded-lg" />
          </div>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}
