'use client'

export default function GlobalError({ error }: { error: Error }) {
  console.error(error)

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
      <p className="text-gray-600 mt-2">Please refresh or go back to the homepage.</p>
      <a href="/" className="mt-4 px-4 py-2 bg-black text-white rounded">Go Home</a>
    </div>
  )
}
