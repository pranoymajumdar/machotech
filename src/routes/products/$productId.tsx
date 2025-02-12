import HeroSection from "@/components/Products/HeroSection";
import RelatedProducts from "@/components/Products/RelatedProducts";
import Container from "@/components/ui/container";
import { products } from "@/constants/products";
import { createFileRoute } from "@tanstack/react-router";



export const Route = createFileRoute("/products/$productId")({
  component: RouteComponent,
  loader: async ({ params }) => products.find((p) => p.id === params.productId),
});

function RouteComponent() {
  const product = Route.useLoaderData();
  if (!product) return <h1>TODO: Not found error</h1>

  return (
    <Container className="min-h-screen my-10">
      <HeroSection product={product}/>
      <RelatedProducts productId={product.id}/>
    </Container>
  )
}
