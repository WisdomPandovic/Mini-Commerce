'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import products from '@/data/products.json'
import { Product } from '@/types/product'

export default function WomenWearPage() {
  const womenProducts = (products as Product[]).filter(
    (product) => product.category?.toLowerCase() === 'women'
  )

  if (womenProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/maintenance.jpg"
              alt="Under Construction"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
          <p className="text-lg mb-4">
            Sorry, the page you are looking for is currently under construction.
            Please check back later.
          </p>
          <Link href="/" className="text-blue-500 hover:underline">
            Go to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Women's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {womenProducts.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-64 mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover rounded"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
