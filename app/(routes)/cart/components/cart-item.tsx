"use client"

import { ProductType } from "@/typez/product"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatprice"
import { cn } from "@/lib/utils"
import NextImage from "next/image"

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props
    const router = useRouter()
    const { removeItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <div 
                onClick={() => router.push(`/product/${product.slug}`)} 
                className="cursor-pointer"
            >
                <NextImage
                    src={product.images[0].url.startsWith("http") ? product.images[0].url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                    alt="Product"
                    width={96}
                    height={-96}
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-contain"
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                            {product.taste}
                        </p>
                        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                            {product.origin}
                        </p>
                    </div>
                </div>
                <div>
                    <button
                        className={cn("rounded-full flex items-center justify-center border p-1")}
                    >
                        <X size={20} onClick={() => removeItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartItem