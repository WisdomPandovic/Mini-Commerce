'use client'

import React, { useEffect, useState } from 'react'
import { getProducts, seedProductsToLocalStorage } from '@/utils/seed'
import { Product } from '@/types/product'
import Link from 'next/link'
import Image from 'next/image'

interface ProductListProps {
  category: string
}

const CategoryList: React.FC<ProductListProps> = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return

    seedProductsToLocalStorage()

    const allProducts = getProducts()

    const filtered = allProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    )

    setFilteredProducts(filtered)
  }, [category])

  console.log(filteredProducts)

  return (
    <div className="m-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md bg-white"
            >
              <div className="relative w-full h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-sm text-[#b9baba] font-medium">
                  {product.name}
                </h2>
                <p className="text-sm mb-2">{product.header}</p>
                <p className="text-pink-500 text-sm font-semibold mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <Link
                  href={`/product/${product.slug}`}
                  className="text-black bg-[#f5f5f5] text-sm shawdow border border-black py-2 px-4 block w-full rounded hover:bg-black hover:text-white transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            No products found in the <strong>{category}</strong> category.
          </div>
        )}
      </div>

      <div className="flex justify-center items-center py-4">
        <Link
          href="/stores/shop"
          className="bg-white border border-yellow-500 text-black text-sm py-2 px-4 rounded shadow-md hover:bg-black hover:text-white transition duration-300"
        >
          More
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
