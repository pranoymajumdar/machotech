import type { Product } from "@/constants/products";
import { Link } from "@tanstack/react-router";
import { LucideChevronRight } from "lucide-react";

export default function Breadcrumb({
  productId,
  productName,
}: {
  productId: Product["id"];
  productName: Product["name"];
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      <Link className="hover:text-foreground transition-all duration-300 ease-in-out" to="/">Home</Link>
      <LucideChevronRight className="h-4 w-4" />
      <Link className="hover:text-foreground transition-all duration-300 ease-in-out" to="/products">Products</Link>
      <LucideChevronRight className="h-4 w-4" />
      <Link className="hover:text-foreground transition-all duration-300 ease-in-out" params={{
        productId: productId
      }} to="/products/$productId">
        {productName}
      </Link>
    </div>
  );
}
