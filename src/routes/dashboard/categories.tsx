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
import { BASE_API_URL, Category } from "@/constants/utils";
import { toast } from "sonner";
import { CategoryEditModal } from "@/components/CategoryModal";
import {AuthProvider} from "@/contexts/AuthContext"
import { getAuthHeaders } from "@/lib/auth";
export const Route = createFileRoute("/dashboard/categories")({
  component: RouteComponent,
});

function RouteComponent() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleOpenEditModal = (category: Category) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    // Allow animation to complete before clearing selection
    setTimeout(() => setSelectedCategory(null), 300);
  };

  const handleCategoryUpdated = async () => {
    // Refresh categories list
    fetchCategories();
  };
  const fetchCategories = async () => {
    try {
      const apiUrl = new URL("/categories", BASE_API_URL).toString();
      const response = await fetch(apiUrl);
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Failed to fetch categories.", errorData);
        toast.error("Failed to fetch categories.");
      }

      setCategories(await response.json());
      toast.success("Categories successfully fetched!");
    } catch (error) {
      console.log("Failed to fetch categories.", error);
      toast.error("Failed to fetch categories.");
    }
  };

  const deleteCategory = async (id: number) => {
    try {
      const apiUrl = new URL(`/categories/${id}`, BASE_API_URL).toString();

      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to delete category.");
      }

      const { message } = await response.json();
      toast.success(message);
      await fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error(
        error instanceof Error ? error.message : "Unexpected error occurred."
      );
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <AuthProvider>
      <Container className="p-4">
        <h1 className="text-2xl font-bold mb-4">Manage Categories</h1>
        <div className="mb-4">
          <Link className={cn(buttonVariants())} to="/dashboard/add/category">
            Add Category
          </Link>
        </div>
        <Table>
          <TableCaption>A list of your categories.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.id}</TableCell>
                <TableCell>
                  <img
                    src={new URL(category.imageUrl!, BASE_API_URL).toString()}
                    alt={category.name}
                    className="w-8 h-8 rounded object-contain"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{category.name}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {category.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleOpenEditModal(category)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="ml-2"
                    onClick={() => deleteCategory(Number(category.id))}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CategoryEditModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          category={selectedCategory}
          onSuccess={handleCategoryUpdated}
        />
      </Container>
    </AuthProvider>
  );
}
