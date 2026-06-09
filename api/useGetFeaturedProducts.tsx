import { useEffect, useState } from "react"
import { ProductType } from "@/typez/response"

export function useGetFeaturedProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
    const [result, setResult] = useState<ProductType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (error: unknown) {
                setError(String(error))
                setLoading(false)
            }
        })()
    }, [url])

    return { loading, result, error }
}