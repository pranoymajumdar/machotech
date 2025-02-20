import HeroSection from "@/components/Products/HeroSection";
import RelatedProducts from "@/components/Products/RelatedProducts";
import Container from "@/components/ui/container";
import { createFileRoute } from "@tanstack/react-router";
import { BASE_API_URL } from "@/constants/utils";

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string | null;
  isContactForPrice: boolean;
  machineData: {
    specifications?: Record<string, string>;
    images?: string[];
    categories?: number[];
  };
  showInHero: boolean;
  heroIndex: number;
  categories: Category[];
}

export const Route = createFileRoute("/products/$productId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    try {
      const response = await fetch(
        new URL(`/products/${params.productId}`, BASE_API_URL).toString()
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Product not found");
        }
        throw new Error("Failed to fetch product");
      }

      const product = await response.json();
      return product as Product;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Failed to fetch product");
    }
  },
  errorComponent: ({ error }) => (
    <Container className="min-h-screen my-10 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-destructive">Error</h1>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </Container>
  ),
});

function RouteComponent() {
  const product = Route.useLoaderData();

  return (
    <Container className="min-h-screen my-10">
      <HeroSection product={product} />
      <RelatedProducts 
        productId={product.id} 
        categoryIds={product.machineData.categories || []}
      />
    </Container>
  );
}
