"use client"
import { useCart } from "@/hooks/use-cart"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Page() {
    const { removeAll } = useCart()
    const router = useRouter()

    useEffect(() => {
        removeAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex justify-center sm:min-w-100">
                    <Image
                        src="/success.jpg"
                        alt="Success"
                        width={250}
                        height={500}
                        loading="eager"
                        className="rounded-lg"
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>
                <div>
                    <h1 className="text-3xl mb-4">¡Gracias por tu compra!</h1>
                    <p className="my-3">
                        Tu pedido ha sido confirmado y procesado exitosamente. Nuestro equipo comenzará a preparar tu selección de café de especialidad en las próximas horas, garantizando que cada grano sea cuidadosamente empacado para preservar su frescura y aroma.
                    </p>
                    <p className="my-3">
                        Recibirás una notificación con los detalles de tu envío en cuanto tu pedido esté en camino. Agradecemos tu preferencia y confianza en AMARU Café.
                    </p>
                    <p className="my-3 font-medium">
                        El equipo de AMARU Café te desea una excelente experiencia.
                    </p>
                    <p className="my-3 font-bold">¡Disfruta del café!</p>
                    <button
                        onClick={() => router.push("/")}
                        className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-semibold mt-4 w-full sm:w-auto"
                    >
                        Volver a la tienda
                    </button>
                </div>
            </div>
        </div>
    )
}