'use client'

import Link from 'next/link'
import blogs from '@/data/blogs.json'

export default function BlogPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center uppercase mb-10">Mini-Commerce Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover rounded" />
            <p className="text-xs text-gray-500 mt-2">{blog.date}</p>
            <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{blog.header}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="mt-4 inline-block text-sm text-yellow-600 hover:underline font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
