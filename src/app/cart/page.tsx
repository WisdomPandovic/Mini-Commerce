// src/app/cart/page.tsx
'use client'

import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
    const { items, removeFromCart, addToCart, clearCart } = useCartStore(state => state)

    const incrementQty = (itemId: string) => {
        const item = items.find(i => i.id === itemId)
        if (item) addToCart(item)
    }

    const decrementQty = (itemId: string) => {
        const item = items.find(i => i.id === itemId)
        if (item && item.quantity > 1) {
            useCartStore.setState({
                items: items.map(i =>
                    i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
                )
            })
        }
    }

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingCost = 10
    const total = subtotal + shippingCost

    return (
        <div className=" p-6">

            {items.length === 0 ? (
                <div className="col-span-full text-center">
                    <p className="text-gray-500 text-gray-500">🛒Your cart is empty.</p>
                    <p className="text-sm text-gray-500 mt-2">Start shopping and add items to your cart.</p>
                    <Link href="/shop"
                        className="mt-4 inline-block bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800">
                        Browse Products
                    </Link>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:[grid-template-columns:2fr_1fr] gap-6">
                        <div className="space-y-6">
                            <div className='flex justify-between items-center'>
                                <h1 className="text-black text-lg font-bold">Shopping Cart</h1>
                                <p className='text-black text-sm font-semibold'>{items.length} items</p>
                            </div>
                            {items.map(item => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center border-b pb-4"
                                >
                                    {/* Product Image */}
                                    <div className="w-24 h-24 relative mx-auto sm:mx-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>

                                    {/* Name */}
                                    <div className="text-center sm:text-left">
                                        <h2 className="text-black text-sm font-semibold">{item.name}</h2>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center sm:text-left">
                                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex justify-center sm:justify-start items-center gap-2">
                                        <button
                                            onClick={() => decrementQty(item.id)}
                                            className="px-2 py-1 border rounded"
                                        >
                                            -
                                        </button>
                                        <span className="text-sm">{item.quantity}</span>
                                        <button
                                            onClick={() => incrementQty(item.id)}
                                            className="px-2 py-1 border rounded"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <div className="text-center sm:text-right">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:underline text-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                            ))}
                        </div>

                        <div className="bg-gray-200 p-4">
                            <div className='flex justify-between items-center border-b'>
                                <h2 className="text-black text-lg font-bold my-5">Summary</h2>
                                <button
                                    onClick={clearCart}
                                    className="text-black px-4 py-2 rounded hover:bg-black hover:text-white transition cursor-pointer"
                                >
                                    X
                                </button>
                            </div>
                            <div className='flex justify-between items-center text-sm my-3'>
                                <p className='text-black text-sm font-semibold my-3 uppercase'>Items {items.length}</p>
                                <p className="text-black text-md font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-between items-center text-sm my-3 border-b'>
                                <p className='text-black font-semibold my-5'>Shipping</p>
                                <p className='text-black'>${shippingCost.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-between items-center text-sm my-3'>
                                <p className='text-black font-semibold my-5'>Total Price</p>
                                <p className='text-black'>${total.toFixed(2)}</p>
                            </div>

                            <button className="w-full py-3 rounded text-white font-bold bg-black relative overflow-hidden group uppercase">
                                <Link
                                    href="/checkout"
                                    className="bg-black text-sm text-white font-bold px-4 py-2 rounded hover:bg-gray-800 transition"
                                >
                                    <span className="absolute inset-0 bg-yellow-500 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                                    <span className="relative z-10 group-hover:text-black font-bold">Checkout</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
