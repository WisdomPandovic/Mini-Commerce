import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/utils/seed'; 
// import { Product } from '@/types/product'; 

const ProductCategoryGrid = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const [menCount, setMenCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);
  const [underwearCount, setUnderwearCount] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchedProducts = getProducts(); 

      // Calculate counts for each category
      const menProducts = fetchedProducts.filter(product => product.category === 'Men');
      const womenProducts = fetchedProducts.filter(product => product.category === 'Women');
      const underwearProducts = fetchedProducts.filter(product => product.category === 'Underwear');

      setMenCount(menProducts.length);
      setWomenCount(womenProducts.length);
      setUnderwearCount(underwearProducts.length);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 px-4 mt-3">
      <div className="relative">
      <Link href="/shop/men">
        <Image
          src="/images/men-fashion.jpg" 
          alt="Men Category"
          width={400} 
          height={300} 
          className="rounded-lg"
        />
       
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-white text-2xl font-bold">Men</h2>
          <p className="text-white text-lg">Items: {menCount}</p>
        </div>
        </Link>
      </div>

      <div className="relative">
      <Link href="/shop/women">
        <Image
          src="/images/women-fashion.jpg" 
          alt="Women Category"
          width={400} 
          height={300} 
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-white text-2xl font-bold">Women</h2>
          <p className="text-white text-lg">Items: {womenCount}</p>
        </div>
        </Link>
      </div>

      <div className="relative">
      <Link href="/shop/underwear">
      <div className="relative group cursor-pointer">
        <Image
          src="/images/underwear.jpg" 
          alt="Underwear Category"
          width={400} 
          height={300} 
          className="rounded-lg transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg transition-opacity duration-500 group-hover:bg-opacity-70">
          <h2 className="text-white text-2xl font-bold">Underwear</h2>
          <p className="text-white text-lg">Items: {underwearCount}</p>
        </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategoryGrid;
