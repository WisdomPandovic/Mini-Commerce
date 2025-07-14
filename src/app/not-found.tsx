export default function NotFoundPage() {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, the page you're looking for doesn’t exist.</p>
        <a
          href="/"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Go Home
        </a>
      </div>
    )
  }
  