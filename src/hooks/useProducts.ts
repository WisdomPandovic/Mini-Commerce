'use client'

import { useQuery } from '@tanstack/react-query'
import { getProducts, seedProductsToLocalStorage } from '@/utils/seed'
import { Product } from '@/types/product'
import { useEffect } from 'react'

export function useProducts() {
  // Seed localStorage once on mount
  useEffect(() => {
    seedProductsToLocalStorage()
  }, [])

  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => Promise.resolve(getProducts()), // wrapped in promise for React Query compatibility
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
