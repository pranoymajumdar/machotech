import { Button } from "@/components/ui/button";
import { BASE_API_URL } from "@/constants/utils";
import type { Product } from "@/components/ProductModal";
import Breadcrumb from "./Breadcrumb";
import ProductImageSection from "./ProductImageSection";
import ProductInfo from "./ProductInfo";
import { normalizeProduct } from "@/lib/utils/product";

interface HeroSectionProps {
  product: Product;
  breadcrumb?: boolean;
}

export default function HeroSection({ product, breadcrumb = true }: HeroSectionProps) {
  const normalizedProduct = normalizeProduct(product);

  return (
    <div className="relative overflow-hidden bg-background/95">
      <div className="py-8">
        {breadcrumb && (
          <Breadcrumb 
            productId={normalizedProduct.id.toString()} 
            productName={normalizedProduct.name} 
          />
        )}
        <div className="grid lg:grid-cols-2 gap-12">
          <ProductImageSection product={normalizedProduct} />
          <ProductInfo product={normalizedProduct} />
        </div>
      </div>
    </div>
  );
}
