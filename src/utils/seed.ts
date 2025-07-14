import products from '@/data/products.json'
import { Product } from '@/types/product'

const STORAGE_KEY = 'mini-commerce-products'

export function seedProductsToLocalStorage() {
  if (typeof window === 'undefined') return

  const existing = localStorage.getItem(STORAGE_KEY)
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  }
}

export function getProducts(): Product[] {
  if (typeof window === 'undefined') return []

  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}
