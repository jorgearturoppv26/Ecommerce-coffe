import { ProductType } from "./product"

export type { ProductType }

export type ResponseType = {
    result: ProductType[]
    loading: boolean
    error: string
}
