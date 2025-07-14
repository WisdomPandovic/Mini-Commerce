import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WomenWearPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4 flex justify-center">
          <Image
            src="/images/maintenance.jpg"
            alt="Under Construction"
            width={200}
            height={200} 
            className="rounded-lg" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
        <p className="text-lg mb-4">
          Sorry, the page you are looking for is currently under construction. 
          Please check back later.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">Go to Home</Link>
      </div>
    </div>
  );
};
