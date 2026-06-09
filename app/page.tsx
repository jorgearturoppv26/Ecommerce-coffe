import BannerDiscount from "@/components/ui/banner-discount";
import BannerProduct from "@/components/ui/banner-product";
import CarouselTextBnner from "@/components/ui/carousel-text-banner";
import ChoseCategory from "@/components/ui/choose-category";
import FeaturedProducts from "@/components/ui/featured-products";

export default function Home() {
  return (
    <main>
     <CarouselTextBnner/>
     <FeaturedProducts/>
     <BannerDiscount />
     <ChoseCategory/>
     <BannerProduct/>
    </main>
  );
}
