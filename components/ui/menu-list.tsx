"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger> Acerca de nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-400px lg:w-500px lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
                <NavigationMenuLink asChild>
                    <Link
                        href="/"className="flex h-full w-full select-none flex-col rounded-md bg-blue-50 p-5 no-underline outline-none transition-colors hover:bg-blue-100">
                        <div className="mb-2 text-lg font-bold">
                        AMARU
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                        Despierta tus sentidos, viaja por los mejores cafetales del mundo y encuentra ese sabor que te hace detenerte, cerrar los ojos y simplemente disfrutar, todo desde la comodidad de tu hogar.
                        </p>
                    </Link>
                </NavigationMenuLink>
            </li>
              <ListItem href="/shop" title="Tienda">
               Accede a toda la informacion, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Sección dedicada a a promociones y descuentos super especiales.
              </ListItem>
              <ListItem href="/" title="Accesorios">
                complementos: tazas, molinillos, prensas y mucho más.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-400px gap-2 md:w-500px md:grid-cols-2 lg:w-600px">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link  href="/accesories">Accesorios</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Cafe, Capsula",
    href: "/category/capsula",
    description:
      "Café listo para preparar en segundos, encapsulado herméticamente para preservar su frescura y aroma. Ideal para quienes buscan comodidad y consistencia en cada taza sin complicaciones.",
  },
  {
    title: "Cafe, Grano ",
    href: "/category/grano",
    description:
      "Café en su forma más pura y fresca, listo para moler en el momento de la preparación. Perfecto para los verdaderos amantes del café que disfrutan del ritual de extraer el máximo sabor y aroma de cada grano.",
  },
  {
    title: "Cafe, Molido",
    href: "/category/molido",
    description:
      "Café ya procesado y listo para preparar en cafetera, prensa francesa o filtro. Ofrece la frescura del café artesanal con la practicidad de no necesitar molino.",
  },
]

function ListItem({title,children,href,...props}
    : React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
export default MenuList
