import Link from "next/link"
import { buttonVariants } from "./button"

const BannerProduct = () => {
  return (
    <>
        <div className="mt-4 text-center">
            <p>Sumérgete en una experiencia única y deliciosa</p>
            <h4 className="mt-2 text-5xl font-extrabold uppercase">Café Exquisito</h4>
            <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
            <Link href={"#"} className={buttonVariants()}>Comprar</Link>
        </div>
        <div className="h-[350px] bg-cover lg:h-[900px] bg-[url('/slider-cafe.jpg')] bg-center bg-cover mt-5"></div>
    </>
  )
}

export default BannerProduct