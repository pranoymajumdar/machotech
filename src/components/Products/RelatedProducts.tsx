import { Product, products } from "@/constants/products";
import { ProductCard } from "../ProductCard/ProductCard";

export default function RelatedProducts({
  productId,
}: {
  productId: Product["id"];
}) {
  return (
    <div className="grid gap-6">
        <h2 className="font-semibold text-3xl">Related Products</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {products
          .filter((product) => product.id !== productId)
          .map((product, index) => {
            if (index >= 6) return;
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}
