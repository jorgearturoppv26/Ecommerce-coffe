"use client"

import { useGetCategories } from "@/api/getProduct"
import Link from "next/link"
import NextImage from "next/image"
import { CategoryType } from "@/typez/category"

const ChoseCategory = () => {
  const { result, loading } = useGetCategories()

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h1 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoría favorita</h1>
        <div className="grid gap-5 sm:grid-cols-3">
            {!loading && result !== null && (
              result.map((category: CategoryType) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    >
                        <NextImage
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.nameImage.url}`}
                            alt={category.categoryName}
                            width={270}
                            height={270}
                            className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                            priority
                        />
                        <p className="absolute w-full py-2 text-lg font-bold text-center 
                        text-white bottom-5 backdrop-blur-lg">{category.categoryName}
                        </p>
                    </Link>
                ))
            )}
        </div>
    </div>
  )
}

export default ChoseCategory