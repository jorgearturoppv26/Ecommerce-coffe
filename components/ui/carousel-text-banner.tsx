"use client"
import { useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Card, CardContent } from "./card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop =[
    
    {
        id: 1,
        title:"Envio en 24/48 h",
        description:"Como cliente VIP, Obtienes beneficios en tus envios en 24/48 horas. Obtén más información y únete.",
        link: "#"
    },
    {
        id: 2,
        title:"Consigue hasta un 25% de descuento en compras superiores a 300MXN",
        description:"Como cliente VIP, Obtienes beneficios y super descuentos. Usa el codigo MYCOFFE y recibe tu primer descuento.",
        link: "#"
    },
    {
        id: 3,
        title:"Devoluciones y entregas gratuitas",
        description:"Registrate y obten el beneficio de envios internacionales gratuitos ",
        link: "#"
    },
    {
        id: 4,
        title:"Comprar novedades",
        description:"Todas las novedades al 50% de descuento, no te lo pierdas.",
        link: "#"
    }
]

const CarouselTextBanner = () => {
    const router = useRouter()

return (
<div className="bg-gray-200 dark:bg-primary">
    <Carousel className=" w-full max-w-4xl mx-auto"
        plugins={[
            Autoplay({
                 delay: 3500
            })

        ]}
        >
        <CarouselContent>


            {dataCarouselTop.map(({id, title, link, description}) => (
                <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">         
                    <div>
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                            <p className="sm:text-lg text-wrap text-gray-700 dark:text-black font-semibold">{title}</p>
                            <p className="text-xs sm:text-sm text-wrap text-gray-600 dark:text-black">{description}</p>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
         ))}
        </CarouselContent>
    </Carousel>
</div>
  )
}

export default CarouselTextBanner;