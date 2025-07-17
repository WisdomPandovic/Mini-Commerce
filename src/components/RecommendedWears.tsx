'use client'

import { Product } from '@/types/product'
import products from '@/data/products.json'
import Link from 'next/link'
import Image from 'next/image'

export default function RecommendedWears({ category, currentSlug }: { category: string; currentSlug: string }) {
  const recommended = (products as Product[]).filter(
    (p) => p.category === category && p.slug !== currentSlug
  )

  if (recommended.length === 0) return null

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Recommended Wears</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommended.map((item) => (
          <Link href={`/product/${item.slug}`} key={item.id} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="rounded object-cover w-full h-56"
            />
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1">${item.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
