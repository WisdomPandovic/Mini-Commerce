'use client'

import { useParams, notFound } from 'next/navigation'
import blogs from '@/data/blogs.json'

type Blog = {
  id: number
  slug: string
  title: string
  imageUrl: string
  date: string
  header: string
  content: string[]
}

export default function BlogDetail() {
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : ''

  const blog = (blogs as Blog[]).find((b) => b.slug === slug)

  if (!blog) return notFound()

  return (
    <div className="max-w-3xl mx-auto p-6 my-9">
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-4">{blog.header}</p>
      {blog.content.map((paragraph, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
