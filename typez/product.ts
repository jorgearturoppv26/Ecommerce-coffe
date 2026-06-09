export type ProductType = {
    id: number
    documentId: string
    productName: string
    slug: string
    description: string
    price: number
    origin: string
    taste: string
    isFeatured: boolean
    images: {
        id: number
        url: string
        formats: {
            thumbnail: { url: string }
            small: { url: string }
        }
    }[]
    category: {
        id: number
        categoryName: string
        slug: string
    }
}