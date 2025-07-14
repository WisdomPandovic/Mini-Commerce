'use client'

import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

export default function CheckoutPage() {
    const items = useCartStore(state => state.items)
    const clearCart = useCartStore(state => state.clearCart)
    const router = useRouter()

    const shipping = 10
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const total = subtotal + shipping

    const handlePlaceOrder = () => {
        const orderId = uuidv4().split('-')[0]
        clearCart()
        router.push(`/success?orderId=${orderId}`)
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Order Summary</h1>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="space-y-4 mb-8">
                        {items.map(item => (
                            <li key={item.id} className="flex items-center gap-4">
                                <div className="w-20 h-20 relative">
                                    <Image src={item.image} alt={item.name} fill className="object-cover rounded" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                    <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className='border-b border-t my-5 py-7'>
                        <div className="mt-6 flex justify-between items-center text-sm">
                            <span className=' font-semibold'>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="mt-6 flex justify-between items-center text-sm">
                            <span className=' font-semibold'>Shipping:</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center text-sm">
                        <span className=' font-semibold'>Total (USD)</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full py-3 rounded text-white font-bold bg-black relative overflow-hidden group uppercase cursor-pointer mt-6"
                    >
                        <p className="bg-black text-sm text-white font-bold px-4 py-2 rounded hover:bg-gray-800 transition">
                            <span className="absolute inset-0 bg-yellow-500 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                            <span className="relative z-10 group-hover:text-black font-bold">Confirm Order</span>
                        </p>
                    </button>
                </>
            )}
        </div>
    )
}
