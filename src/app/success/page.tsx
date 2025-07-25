'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Thank You!</h1>
      <p className="text-black text-lg mb-2">Your order has been placed successfully.</p>
      <p className="text-sm text-gray-600">Order ID: <strong>{orderId}</strong></p>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-black text-center py-10">Loading order details...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
