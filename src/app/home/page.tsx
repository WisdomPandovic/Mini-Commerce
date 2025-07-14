'use client'

import { useEffect, useState } from 'react';
import { Product } from '@/types/product'
import Link from 'next/link'
import Image from 'next/image'
import Catalogue from '@/components/Catalogue/Catalogue'
import { getProducts } from '@/utils/seed'
import HomeBanner from '@/components/HomeBanner/HomeBanner'
import BlogSection from '@/components/BlogComponents/BlogSection'
import ProductCategories from '@/components/ProductCategories/ProductCategories'
import { FaShippingFast, FaUndoAlt, FaHeadset, FaGift } from "react-icons/fa";

export default function HomePage() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            getProducts(); // Trigger the function if needed (e.g. to seed localStorage)
        }
    }, []);

    return (
        <main className="">
            <HomeBanner />
            <Catalogue />
            {/* Limted Offer  */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center bg-gray-200">
                    <Image
                        src="/images/1.jpg"
                        alt="banner"
                        width={800}
                        height={250}
                        className="w-full max-h-[250px] shadow-xl object-cover"
                    />
                </div>

                <div className="bg-black p-8">
                    <p className="text-white text-sm uppercase">Limted Offer</p>
                    <h2 className="text-white sm:text-3xl text-lg font-bold mt-4">35% Off only this Friday</h2>
                    <h2 className="text-white sm:text-3xl text-lg font-bold mt-2">and get special gift</h2>
                    <Link href="/stores/shop">
                        <button className="bg-white text-black text-sm my-4 px-4 py-2 rounded inline-flex items-center gap-2 cursor-pointer">
                            Grab it now
                            <span>&rarr;</span>
                        </button>
                    </Link>
                </div>
            </div>
            <ProductCategories />

            <div className='bg-[#f7f7f7] my-10 mx-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-9 ">
                    <div className="relative">
                        <Image
                            src="/images/smada-store.jpg"
                            alt="Mini-Commerce Store"
                            width={800}
                            height={300}
                            className="w-full h-[300px] object-cover shadow-md"
                        />
                    </div>

                    <div className="p-1">
                        <h2 className="text-3xl font-bold mb-4">About Mini-Commerce Store</h2>
                        <p className="mb-4">
                            Welcome to Mini-Commerce, where innovation meets excellence. Founded with a passion for delivering top-notch products and services, we are dedicated to creating solutions that make life easier, more enjoyable, and more fulfilling for our customers.
                        </p>
                        <Link href="/about">
                            <button className="bg-white text-black font-bold text-sm uppercase mt-5 py-3 px-4 shadow-md hover:bg-black hover:text-[white] transition duration-300 cursor-pointer">
                                Find Out More
                            </button>
                        </Link>
                    </div>
                </div>
                <hr className="border-white" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gray-100">

                    <div className="flex flex-col items-center text-center">
                        <FaShippingFast className="text-4xl text-yellow-500 mb-2" />
                        <h3 className="font-semibold text-lg">Fast Free Shipping</h3>
                        <p className="text-sm text-gray-600">Get your orders deliveyellow fast and free.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <FaUndoAlt className="text-4xl text-yellow-500 mb-2" />
                        <h3 className="font-semibold text-lg">30 Day Money Back</h3>
                        <p className="text-sm text-gray-600">Enjoy a risk-free shopping experience with our 30-day guarantee.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <FaHeadset className="text-4xl text-yellow-500 mb-2" />
                        <h3 className="font-semibold text-lg">24/7 Help Center</h3>
                        <p className="text-sm text-gray-600">We&apos;re here to help you any time of the day.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <FaGift className="text-4xl text-yellow-500 mb-2" />
                        <h3 className="font-semibold text-lg">Many Promotional Gifts</h3>
                        <p className="text-sm text-gray-600">Receive exclusive gifts with your purchases.</p>
                    </div>
                </div>
            </div>
            <BlogSection />
        </main>
    )
}
