'use client'

import { useProducts } from '@/hooks/useProducts'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Ring } from '@uiball/loaders'

export default function ProductGrid() {
  const { data: products, isLoading, isError } = useProducts()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const uniqueCategories = Array.from(new Set(products?.map(p => p.category)))

  const normalized = (text: string) =>
    text.toLowerCase().replace(/\s+/g, '')
  
  const filtered = products?.filter(product => {
    const productName = normalized(product.name)
    const search = normalized(searchTerm)
  
    const matchesSearch = productName.includes(search)
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true
    return matchesSearch && matchesCategory
  }) || []  

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Ring size={60} lineWeight={5} speed={2} color="#d19163" />
        <p className="mt-4 text-center text-gray-600">Loading products...</p>
      </div>
    )
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Failed to load products. Please try refreshing the page.
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 my-8">
      {/* Filters */}
      <div className="flex justify-between items-center flex-wrap gap-3 mb-6">
        <h2 className="text-2xl font-bold">Product</h2>

        <div className="flex flex-wrap gap-2 items-center">
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="sm:w-auto w-full border px-3 py-1 rounded text-sm"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="sm:w-auto w-full border px-3 py-1 rounded text-sm"
          />
        </div>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No products match your filters.</p>
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
                <div className="flex flex-col items-center text-center">
                  <h2 className="font-semibold">{product.name}</h2>
                  <p className="text-pink-500 font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
