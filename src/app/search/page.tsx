'use client'

import { useSearchParams } from 'next/navigation'
import { useProducts } from '@/hooks/useProducts'
import Link from 'next/link'
import Image from 'next/image'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''
  const { data: products = [] } = useProducts()

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  )

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Results for &apos;{query}&apos;</h1>

      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-pink-500 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
