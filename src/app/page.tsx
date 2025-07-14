'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Ring } from '@uiball/loaders'

export default function LoadingPage() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
      router.push('/home')
    }, 2000)

    return () => clearTimeout(loadingTimer)
  }, [router])

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && (
        <Ring size={60} lineWeight={5} speed={2} color="#d19163" />
      )}
    </div>
  )
}
