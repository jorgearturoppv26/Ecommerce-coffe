"use client"

import { useEffect, useState } from "react"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatprice"
import CartItem from "./components/cart-item"
import { makePaymentRequest } from "@/api/payment"



export default function Page() {
    const { items, removeAll } = useCart()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])

    if (!mounted) return null

    const prices = items.map((product) => product.price)
    const totalPrice = prices.reduce((total, price) => total + price, 0)

    const buyStripe = async () => {
        try {
            const res = await makePaymentRequest.post("/api/orders", {
                products: items
            })
            window.location.href = res.data.stripeSession.url
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
                {items.length > 0 && (
                    <button
                        onClick={removeAll}
                        className="text-sm text-red-500 hover:text-red-700 transition"
                    >
                        Vaciar carrito
                    </button>
                )}
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 && (
                        <p>No hay productos en el carrito</p>
                    )}
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-800">
                        <p className="mb-3 text-lg font-semibold">Order Summary</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Order total</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-3">
                            <button
                                className="w-full bg-black text-white dark:bg-white dark:text-black py-3 text-lg font-semibold rounded-lg"
                                onClick={buyStripe}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}