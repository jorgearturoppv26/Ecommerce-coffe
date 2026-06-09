import { Skeleton } from "@/components/ui/skeleton";

function SkeletonProduct() {
  return (
    <div className="grid gap-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-[200px] w-[200px] rounded-xl" />
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[200px]" />
    </div>
  );
}

export default SkeletonProduct;
