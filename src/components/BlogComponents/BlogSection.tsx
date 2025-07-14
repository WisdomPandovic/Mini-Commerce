import React from 'react';

const BlogSection = () => {

  const blogs = [
    {
      id: 1,
      title: 'How to Style Your Wardrobe',
      description: 'Learn the latest trends and styling tips for your wardrobe.',
      imageUrl: '/images/cloth.jpg',
      date: 'January 25, 2025',
    },
    {
      id: 2,
      title: 'The Best Accessories for Fall',
      description: 'Discover must-have accessories for the upcoming fall season.',
      imageUrl: '/images/accessories.jpg',
      date: 'May 5, 2025',
    },
    {
      id: 3,
      title: 'Sustainable Fashion Matters',
      description: 'Explore the importance of sustainability in the fashion industry.',
      imageUrl: '/images/sustainable-fashion.jpg',
      date: 'June 10, 2025',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8 uppercase">Mini-Commerce Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="relative w-full h-48">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover rounded"
            />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-xs text-white bg-black py-1.5 px-3 w-fit rounded">
              {blog.date}
            </p>
          </div>
        
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-center">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">{blog.description}</p>
            <div className="flex justify-center mt-4">
              <button className="bg-white text-xs text-black border-2 border-yellow-500 py-2 px-6 hover:bg-black hover:text-white hover:border-black transition duration-300 cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
