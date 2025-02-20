import { useState, useEffect } from "react";
import { BASE_API_URL } from "@/constants/utils";
import { ProductCard } from "../ProductCard/ProductCard";
import type { Product } from "@/routes/products/$productId";

interface RelatedProductsProps {
  productId: number;
  categoryIds: number[];
}

export default function RelatedProducts({ productId, categoryIds }: RelatedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRelatedProducts();
  }, [productId, categoryIds]);

  const fetchRelatedProducts = async () => {
    if (!categoryIds.length) {
      setProducts([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        new URL('/products', BASE_API_URL).toString()
      );

      if (!response.ok) {
        throw new Error('Failed to fetch related products');
      }

      const allProducts = await response.json();
      
      // Calculate relevance score for each product
      const productsWithScore = allProducts
        .filter((p: Product) => p.id !== productId) // Exclude current product
        .map((product: Product) => {
          const productCategoryIds = product.machineData.categories || [];
          
          // Calculate how many categories match
          const matchingCategories = productCategoryIds.filter(
              (cat: number) => categoryIds.includes(cat)
          ).length;

          // Calculate score based on:
          // 1. Number of matching categories
          // 2. Percentage of categories that match
          const score = matchingCategories > 0 
            ? (matchingCategories / categoryIds.length) + 
              (matchingCategories / productCategoryIds.length)
            : 0;

          return { product, score };
        })
        .filter(({ score }: { score: number }) => score > 0) // Only keep products with matching categories
        .sort((a: { score: number }, b: { score: number }) => b.score - a.score) // Sort by relevance score
        .slice(0, 4) // Take top 4 most relevant products
        .map(({ product }: { product: Product }) => product);

      setProducts(productsWithScore);
    } catch {
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-3xl bg-muted" />
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-8">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
