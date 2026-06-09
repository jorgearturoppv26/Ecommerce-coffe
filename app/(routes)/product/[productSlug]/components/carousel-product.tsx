"use client"

import { ProductType } from "@/typez/response"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import NextImage from "next/image"


interface CarouselProductProps {
  images: ProductType["images"]
}


const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props
  return (
    <div className="sm:px-16">
        <Carousel>
            <CarouselContent>
                {images.map((image) => (
                    <CarouselItem key={image.id}>
                        <NextImage
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                            alt="Image product"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain"
                            priority
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    </div>
  )
}

export default CarouselProduct