import HeroSection from "@/components/Products/HeroSection";
import Container from "@/components/ui/container";
import { products } from "@/constants/products";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$categoryId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return products.filter((product) => product.type === params.categoryId);
  },
});

function RouteComponent() {
  const filteredProducts = Route.useLoaderData();
  if (!filteredProducts) return "No products found!";
  return (
    <Container className="my-10 space-y-36">
        {
            filteredProducts.map((product) => (
                <HeroSection product={product} breadcrumb={false}/>
            ))
        }
    </Container>
  )
}
