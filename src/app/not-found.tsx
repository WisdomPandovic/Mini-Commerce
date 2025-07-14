
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Go Home</Link>
    </div>
  )
}
