import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { BASE_API_URL } from "@/constants/utils";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { MultiSelect } from "./ui/multi-select";
import { z } from "zod";

export interface Category {
  id: string;
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
}

interface ProductEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onSuccess: () => void;
}

const machineSpecSchema = z.record(z.string().optional())
  .transform((data) => {
    return Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );
  });

const productUpdateSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().optional().nullable(),
  isContactForPrice: z.boolean(),
  showInHero: z.boolean(),
  heroIndex: z.number().int(),
  machineData: z.object({
    specifications: machineSpecSchema,
    categories: z.array(z.number()),
    images: z.array(z.string())
  }),
  categoryIds: z.array(z.number())
});

export function ProductEditModal({
  isOpen,
  onClose,
  product,
  onSuccess,
}: ProductEditModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>(product || {});
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    product?.machineData?.categories || []
  );

  const [machineSpecs, setMachineSpecs] = useState({
    brand: '',
    model: '',
    capacity: '',
    motorRotationSpeed: '',
    power: '',
    coolingType: '',
    chipConveyor: '',
    overallSize: '',
    weight: '',
    countryOfOrigin: '',
    ...product?.machineData?.specifications
  });

  useEffect(() => {
    if (isOpen) {
      fetchCategories();
    }
  }, [isOpen]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(new URL('/categories', BASE_API_URL).toString());
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
    }
  };

  const handleSpecChange = (key: string, value: string) => {
    setMachineSpecs(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    setIsSubmitting(true);
    try {
      const updatedMachineData = {
        ...product.machineData,
        specifications: Object.fromEntries(
          Object.entries(machineSpecs).filter(([_, value]) => value !== '')
        ),
        categories: selectedCategories
      };

      const updateData = {
        name: formData.name || '',
        description: formData.description || '',
        price: formData.price,
        isContactForPrice: formData.isContactForPrice || false,
        showInHero: formData.showInHero || false,
        heroIndex: formData.heroIndex || 0,
        machineData: updatedMachineData,
        categoryIds: selectedCategories,
      };

      // Validate data before sending
      const validatedData = productUpdateSchema.parse(updateData);

      const response = await fetch(
        new URL(`/products/${product.id}`, BASE_API_URL).toString(),
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...validatedData,
            machineData: JSON.stringify(validatedData.machineData),
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update product");
      }

      toast.success("Product updated successfully");
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
      if (error instanceof z.ZodError) {
        const errors = error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ');
        toast.error(`Validation error: ${errors}`);
      } else {
        toast.error(error instanceof Error ? error.message : "Failed to update product");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name || ""}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description || ""}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={formData.price || ""}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              disabled={isSubmitting || formData.isContactForPrice}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="isContactForPrice">Contact for Price</Label>
            <Select
              value={formData.isContactForPrice ? "yes" : "no"}
              onValueChange={(value) =>
                setFormData({ ...formData, isContactForPrice: value === "yes" })
              }
              disabled={isSubmitting}
            >
              <SelectTrigger>
                {formData.isContactForPrice ? "Yes" : "No"}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="showInHero">Show in Hero</Label>
            <Select
              value={formData.showInHero ? "yes" : "no"}
              onValueChange={(value) =>
                setFormData({ ...formData, showInHero: value === "yes" })
              }
              disabled={isSubmitting}
            >
              <SelectTrigger>
                {formData.showInHero ? "Yes" : "No"}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="heroIndex">Hero Index</Label>
            <Input
              id="heroIndex"
              type="number"
              value={formData.heroIndex || 0}
              onChange={(e) =>
                setFormData({ ...formData, heroIndex: Number(e.target.value) })
              }
              disabled={isSubmitting || !formData.showInHero}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="categories">Categories</Label>
            <MultiSelect
              options={categories.map(cat => ({
                value: String(cat.id),
                label: cat.name,
              }))}
              selected={selectedCategories.map(String)}
              onChange={(values) => setSelectedCategories(values.map(Number))}
            />
          </div>
          <div className="grid gap-4">
            <Label>Machine Specifications</Label>
            {Object.entries(machineSpecs)
              .filter(([key]) => !['images', 'categories'].includes(key))
              .map(([key, value]) => (
                <div key={key} className="grid gap-2">
                  <Label htmlFor={key}>
                    {key.replace(/([A-Z])/g, ' $1')
                       .replace(/^./, str => str.toUpperCase())}
                  </Label>
                  <Input
                    id={key}
                    value={value as string}
                    onChange={(e) => handleSpecChange(key, e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
              ))}
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 