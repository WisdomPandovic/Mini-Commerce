import { Suspense } from 'react'
import SearchResults from '@/components/SearchResults'

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading search...</div>}>
      <SearchResults />
    </Suspense>
  )
}
