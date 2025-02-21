import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "@/constants/utils";
import { toast } from "sonner";
import { ProductEditModal, type Product } from "@/components/ProductModal";
import { getAuthHeaders } from "@/lib/auth";
import {AuthProvider} from "@/contexts/AuthContext"
export const Route = createFileRoute("/dashboard/products")({
  component: RouteComponent,
});

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const apiUrl = new URL("/products", BASE_API_URL).toString();
      const response = await fetch(apiUrl, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to fetch products.", errorData);
        toast.error("Failed to fetch products");
        return;
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products.", error);
      toast.error("Failed to fetch products");
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      const apiUrl = new URL(`/products/${id}`, BASE_API_URL).toString();

      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || "Failed to delete product");
      }

      const { message } = await response.json();
      toast.success(message);
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to delete product"
      );
    }
  };

  const handleOpenEditModal = (product: Product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleProductUpdated = () => {
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AuthProvider>
      <Container className="p-4">
        <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
        <div className="mb-4">
          <Link className={cn(buttonVariants())} to="/dashboard/add/product">
            Add Product
          </Link>
        </div>
        <Table>
          <TableCaption>A list of your products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Hero</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>
                  {product.machineData.images?.[0] && (
                    <img
                      src={new URL(
                        product.machineData.images[0],
                        BASE_API_URL
                      ).toString()}
                      alt={product.name}
                      className="w-12 h-12 rounded object-contain bg-muted"
                    />
                  )}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {product.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {product.isContactForPrice ? (
                    <span className="text-muted-foreground">
                      Contact for price
                    </span>
                  ) : (
                    product.price || "N/A"
                  )}
                </TableCell>
                <TableCell>
                  {product.showInHero && (
                    <div className="text-sm">Index: {product.heroIndex}</div>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleOpenEditModal(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="ml-2"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ProductEditModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          product={selectedProduct}
          onSuccess={handleProductUpdated}
        />
      </Container>
    </AuthProvider>
  );
}
