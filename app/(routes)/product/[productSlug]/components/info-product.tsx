"use client"

import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatprice";
import { ProductType } from "@/typez/product";
import { Heart } from "lucide-react";
import { useState } from "react";

export type InfoProductProps = {
  product: ProductType
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props
  const [isLoved, setIsLoved] = useState(false)
  const { addItem } = useCart()
  const { addLovedItem } = useLovedProducts()

  return (
    <div className="px-5">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.productName}</h1>
        <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                {product.taste}
            </p>
            <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                {product.origin}
            </p>
        </div>
      </div>
      <Separator className="mt-4"/>
      <p>{product.description}</p>
      <Separator className="mt-4"/>
      <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
      <div className="flex items-center gap-4 mt-4">
          <button 
              className="w-full bg-black text-white dark:bg-white dark:text-black py-3 text-lg font-semibold rounded-lg" 
              onClick={() => addItem(product)}
          >
              Comprar
          </button>
          <Heart 
              width={30} 
              strokeWidth={1} 
              className={`transition duration-300 cursor-pointer ${isLoved ? "fill-red-500 stroke-red-500" : "hover:fill-black"}`}
              onClick={() => {
                addLovedItem(product)
                setIsLoved(!isLoved)
              }}
          />
      </div>
    </div>
  );
};

export default InfoProduct;