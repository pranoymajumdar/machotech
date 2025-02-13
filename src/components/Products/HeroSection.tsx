import type { Product } from "@/constants/products";
import Breadcrumb from "./Breadcrumb";
import ProductImageSection from "./ProductImageSection";
import ProductInfo from "./ProductInfo";

export default function HeroSection({ product, breadcrumb = true }: { product: Product, breadcrumb?: boolean }) {
  return (
    <div className="relative overflow-hidden bg-background/95">
      <div className="py-8">
        {breadcrumb && <Breadcrumb productId={product.id} productName={product.name} />}
        <div className="grid lg:grid-cols-2 gap-12">
          <ProductImageSection product={product}/>
          <ProductInfo productName={product.name} productPrice={product.price} />
        </div>
      </div>
    </div>
  );
}
