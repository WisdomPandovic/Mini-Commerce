'use client'

import { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { Button } from '@mui/material'
import { useCartStore } from '@/store/cartStore'
import products from '@/data/products.json'
import { Product } from '@/types/product'
import { FaStar } from 'react-icons/fa'

export default function ProductDetail() {
  const { slug } = useParams() as { slug: string }
  const product = (products as Product[]).find(p => p.slug === slug)
  const addToCart = useCartStore(state => state.addToCart)

  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (!product) return notFound()

  const rating = product.rating ?? 4
  const colors = ['black', 'white', 'red', 'blue', 'gray']
  const sizes = ['S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="bg-[#f7f7f7] p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-700">{product.header}</p>
            <p className="text-xl text-pink-600 font-semibold">${product.price.toFixed(2)}</p>

            {/* Color Options */}
            <div>
              <p className="text-black font-medium mb-1">Color:</p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full border cursor-pointer ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`text-lg ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </div>

            {/* Size Options */}
            <div>
              <h2 className="text-sm text-black font-semibold mb-2">Size Options</h2>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm rounded-lg border ${selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-black'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 mt-6">
              <button className="bg-black rounded text-white font-bold py-2 px-4 shadow-md hover:bg-white hover:text-black border border-black transition duration-300">
                Buy Product
              </button>

              <Button
                onClick={() => {
                  addToCart(product)
                  toast.success(`${product.name} added to cart!`)
                }}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontWeight: 'bold',
                  border: '1px solid black',
                  padding: '8px 16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'yellow',
                    color: 'black',
                  },
                }}
              >
                Add to Cart
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-7 text-sm text-gray-600">
              <p>
              {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
