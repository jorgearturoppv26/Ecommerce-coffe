/* eslint-disable @next/next/no-img-element */
"use client"

import { useCart } from "@/hooks/use-cart"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { ProductType } from "@/typez/product"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { formatPrice } from "@/lib/formatprice"
import { Button } from "@/components/ui/button"

interface LovedItemProductProps {
  product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
  const { product } = props
  const router = useRouter()
  const { removeLovedItem } = useLovedProducts()
  const { addItem } = useCart()
  const addToCheckout = () => {
    addItem(product) 
    removeLovedItem(product.id)
}
  return (
    <li className="flex py-6 border-b">
      <div
        onClick={() => router.push(`/product/${product.slug}`)}
        className="cursor-pointer"
      >
        <img
          src={product.images[0].url.startsWith("http") ? product.images[0].url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
          alt="Product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-contain"
        />
      </div>

      <div className="flex justify-between flex-1 px-6">
        <div>
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
            <Button
                className="mt-5 rounded-full"
                onClick={addToCheckout}
            >
                Añadir al carrito
            </Button>
          </div>
        </div>
        <div>
          <button
            onClick={() => removeLovedItem(product.id)}
            className="rounded-full flex items-center justify-center border p-1"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default LovedItemProduct