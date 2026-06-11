"use client"
import NextImage from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import SkeletonSchema from "@/components/ui/skeletonSchema"
import { ResponseType, ProductType } from "@/typez/response"
import { Card, CardContent } from "./card"
import { Expand,ShoppingCart } from "lucide-react"
import IconButton from "./icon-button"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"

const FeaturedProducts = () => {
    const { loading, result }: ResponseType = useGetFeaturedProducts()
        const router = useRouter ()
        const {addItem} = useCart()
        
       
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 px-14">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel className="px-8">
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result !== null && (
                        result.map((product: ProductType) => {
                            const { id, slug, images, productName, taste, origin } = product
                            return (
                                <CarouselItem key={id} className="basis-full md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-0 overflow-hidden ">
                                                <NextImage 
                                                   src={images[0].url.startsWith("http") ? images[0].url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                                                   alt="image featured"
                                                   width={400}
                                                   height={200}
                                                   className="object-contain w-auto"
                                                   priority
                                                />
                                            </CardContent>
                                            
                                            <div className ="transition duration-200 opacity-0 group-hover:opacity-100">
                                                <div className ="bg-background text-gray-700 flex justify-center gap-x-6 py-3">
                                                <IconButton onClick={() => router.push(`product/${slug}`)} 
                                                icon={ <Expand size={20}/>} 
                                                className="text-gray-600"
                                                />
                                                    <IconButton onClick={() => addItem(product)} 
                                                    icon={<ShoppingCart size={20}/>} 
                                                    className="text-gray-600"
                                                />
                                                </div>
                                            </div>
                                            <div className="flex justify-between gap-4 px-8">
                                                    <h3 className="text-lg font-bold">{productName}</h3>
                                                    <div className="flex items-center justify-between gap-3">
                                                    <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit ">{taste}</p>
                                                    <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit ">{origin}</p>
                                                    </div>   
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className=" hidden sm:flex"/>

            </Carousel>
        </div>
    )
}

export default FeaturedProducts