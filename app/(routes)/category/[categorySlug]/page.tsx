"use client"

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ProductType, ResponseType } from "@/typez/response"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import FilterControlsCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/ui/skeletonSchema"
import ProductCard from "./components/product-card"

export default function Page() {
    const params = useParams()
    const { categorySlug } = params

    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug as string)
    const [filterOrigin, setFilterOrigin] = useState('')
    const router = useRouter()

    console.log(filterOrigin)

    const filteredProducts = result !== null && !loading
        ? (filterOrigin === '' ? result : result.filter((product: ProductType) => product.origin === filterOrigin))
        : []

    console.log(filteredProducts)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && result.length > 0 && (
                <>
                    <h1 className="text-3xl font-medium">
                        Café {result[0].category.categoryName}
                    </h1>
                    <Separator/>
                </>
            )}
            <div className="sm:flex sm:justify-between">
                <FilterControlsCategory setFilterOrigin={setFilterOrigin}/>
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {Array.isArray(filteredProducts) && filteredProducts.map((product: ProductType) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                  {Array.isArray(filteredProducts) && !loading && filteredProducts.length === 0 && (
                  <p>No hay productos con este filtro.</p>
                  )}  
                </div>
            </div>
        </div>
    )
}