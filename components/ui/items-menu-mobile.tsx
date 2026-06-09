import {  Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
            <PopoverTrigger> 
                <Menu  />
            </PopoverTrigger>
            <PopoverContent>

                <Link href="/categories/cafe-molido" className="block">Café molido</Link>
                <Link href="/categories/Café-grano" className="block">Café en grano</Link>
                <Link href="/categories/Cafe-capsula" className="block">Café en cápsulas</Link>

        </PopoverContent>
    </Popover>
  );
}
export default ItemsMenuMobile;