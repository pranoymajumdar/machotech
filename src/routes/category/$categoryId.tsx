import HeroSection from "@/components/Products/HeroSection";
import Container from "@/components/ui/container";
import { createFileRoute } from "@tanstack/react-router";
import { BASE_API_URL } from "@/constants/utils";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import type { Product } from "@/components/ProductModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { normalizeProduct } from "@/lib/utils/product";

export const Route = createFileRoute("/category/$categoryId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { categoryId } = Route.useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryId]);

  const fetchCategoryProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const productsResponse = await fetch(
        new URL(`/categories/${categoryId}/products`, BASE_API_URL).toString()
      );

      if (!productsResponse.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await productsResponse.json();
      setProducts(data.products.map(normalizeProduct));
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error instanceof Error ? error.message : 'Failed to load products');
      toast.error(error instanceof Error ? error.message : 'Failed to load products');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Container className="my-10 space-y-36">
        {/* Loading skeletons */}
        {Array(3).fill(0).map((_, index) => (
          <div 
            key={index}
            className="w-full h-[400px] rounded-lg bg-muted animate-pulse"
          />
        ))}
      </Container>
    );
  }

  if (!products.length) {
    return (
      <Container className="my-10">
        <div className="text-center text-muted-foreground">
          No products found in this category
        </div>
      </Container>
    );
  }

  return (
    <ErrorBoundary>
      <Container className="my-10 space-y-36">
        {products.map((product) => (
          <HeroSection 
            key={product.id} 
            product={product} 
            breadcrumb={false}
          />
        ))}
      </Container>
    </ErrorBoundary>
  );
}
