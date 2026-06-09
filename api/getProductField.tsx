import { useEffect, useState } from "react"

export function useGetProductField() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`
    const [result, setResult] = useState<string[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                const origins: string[] = json.data.schema.attributes.origin.enum as string[]
                setResult(origins)
                setLoading(false)
            } catch (error: unknown) {
                setError(String(error))
                setLoading(false)
            }
        })()
    }, [url])

    return { loading, result, error }
}