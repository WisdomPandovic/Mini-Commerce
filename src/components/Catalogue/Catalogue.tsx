'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts, seedProductsToLocalStorage } from '@/utils/seed'
import Image from 'next/image'
import Link from 'next/link'
import { Ring } from '@uiball/loaders'

export default function Catalogue() {
    useEffect(() => {
        seedProductsToLocalStorage()
    }, [])

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: async () => getProducts(),
    })

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-10">
                <Ring size={60} lineWeight={5} speed={2} color="#d19163" />
                <p className="mt-4 text-center text-gray-600">Loading products...</p>
            </div>
        )
    }

    if (isError || !products) return <p className="text-center text-red-500">Error loading products.</p>

    return (
        <div className='my-7'>
            <h2 className="text-2xl font-bold px-4">Recommended Wears</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
                {products.map((product) => (
                    <Link key={product.id} href={`/product/${product.slug}`} className="border rounded p-3 bg-white shadow">
                        <div className="relative w-full h-48 mb-2">
                            <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
                        </div>

                        <div className="flex flex-col items-center text-center">
                  <h2 className="text-black font-semibold">{product.name}</h2>
                  <p className="text-pink-500 font-bold">${product.price.toFixed(2)}</p>
                </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
