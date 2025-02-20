import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import { BASE_API_URL } from "@/constants/utils";
import { MultiSelect } from "@/components/ui/multi-select";
import type { Category } from "@/components/ProductModal";
import { Checkbox } from "@/components/ui/checkbox";


const productSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(100),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().optional(),
  isContactForPrice: z.boolean().optional(),
  machineData: z.string(),
  showInHero: z.boolean(),
  heroIndex: z.number().int(),
});

function ProductInfoSection({
  productData,
  setProductData,
  categories,
  selectedCategories,
  setSelectedCategories,
  isSubmitting
}: {
  productData: z.infer<typeof productSchema>;
  setProductData: (data: z.infer<typeof productSchema>) => void;
  categories: Category[];
  selectedCategories: number[];
  setSelectedCategories: (categories: number[]) => void;
  isSubmitting: boolean;
}) {
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
    countryOfOrigin: ''
  });

  const handleSpecChange = (key: string, value: string) => {
    setMachineSpecs(prev => {
      const updated = { ...prev, [key]: value };
      setProductData({
        ...productData,
        machineData: JSON.stringify({
          specifications: updated,
          categories: selectedCategories
        })
      });
      return updated;
    });
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div>
        <h3 className="text-lg font-medium">Basic Information</h3>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Product Name*</Label>
            <Input
              type="text"
              id="name"
              placeholder="Product name (min 3 characters)"
              required
              disabled={isSubmitting}
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              placeholder="Product price"
              value={productData.price}
              disabled={isSubmitting || productData.isContactForPrice}
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="description">Description*</Label>
            <Textarea
              id="description"
              placeholder="Product description (min 10 characters)"
              required
              disabled={isSubmitting}
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
              className="min-h-[100px]"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="grid gap-2">
          <MultiSelect
            options={categories.map(cat => ({
              value: String(cat.id),
              label: cat.name,
            }))}
            selected={selectedCategories.map(String)}
            onChange={(values) => setSelectedCategories(values.map(Number))}
            placeholder="Select product categories..."
          />
        </div>
      </div>

      {/* Pricing Options */}
      <div>
        <h3 className="text-lg font-medium mb-3">Pricing Options</h3>
        <div className="grid gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isContactForPrice"
              checked={productData.isContactForPrice}
              onCheckedChange={(checked) =>
                setProductData({
                  ...productData,
                  isContactForPrice: checked === true,
                  price: checked === true ? "" : productData.price
                })
              }
              disabled={isSubmitting}
            />
            <Label htmlFor="isContactForPrice">Hide price and show "Contact for Price"</Label>
          </div>
        </div>
      </div>

      {/* Hero Section Settings */}
      <div>
        <h3 className="text-lg font-medium mb-3">Hero Section Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="showInHero"
                checked={productData.showInHero}
                onCheckedChange={(checked) =>
                  setProductData({
                    ...productData,
                    showInHero: checked === true,
                    heroIndex: checked === true ? productData.heroIndex : 0
                  })
                }
                disabled={isSubmitting}
              />
              <Label htmlFor="showInHero">Show in Hero Section</Label>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="heroIndex">Hero Index</Label>
            <Input
              type="number"
              id="heroIndex"
              placeholder="Display order in hero section"
              value={productData.heroIndex}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  heroIndex: Number(e.target.value)
                })
              }
              disabled={isSubmitting || !productData.showInHero}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <h3 className="text-lg font-medium">Machine Specifications</h3>
        {Object.entries(machineSpecs).map(([key, value]) => (
          <div key={key} className="grid gap-2">
            <Label htmlFor={key}>
              {key.replace(/([A-Z])/g, ' $1')
                 .replace(/^./, str => str.toUpperCase())}
            </Label>
            <Input
              id={key}
              value={value}
              onChange={(e) => handleSpecChange(key, e.target.value)}
              disabled={isSubmitting}
              placeholder={`Enter ${key.toLowerCase()}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageUploadSection({
  images,
  setImages,
  isSubmitting
}: {
  images: File[];
  setImages: (files: File[]) => void;
  isSubmitting: boolean;
}) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    // Validate file count
    if (files.length > 10) {
      toast.error('Maximum 10 images allowed');
      return;
    }
    // Validate file sizes
    const oversizedFiles = files.filter(file => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      toast.error('Some files exceed the 5MB size limit');
      return;
    }
    setImages(files);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor="images">Product Images (Max 10 images, 5MB each)</Label>
      <Input
        type="file"
        id="images"
        multiple
        accept="image/jpeg,image/jpg,image/png,image/webp"
        onChange={handleFileChange}
        disabled={isSubmitting}
      />
      {images.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-2">
          {images.map((file, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index + 1}`}
                className="w-24 h-24 object-contain rounded-md"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                disabled={isSubmitting}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RouteComponent() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [productData, setProductData] = useState<z.infer<typeof productSchema>>({
    name: "",
    description: "",
    price: "",
    isContactForPrice: true,
    machineData: JSON.stringify({}),
    showInHero: false,
    heroIndex: 0,
  });

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate the data
      const validatedData = productSchema.parse(productData);

      // Create FormData
      const formData = new FormData();
      formData.append('name', validatedData.name);
      formData.append('description', validatedData.description);
      formData.append('price', validatedData.price || '');
      formData.append('isContactForPrice', String(validatedData.isContactForPrice));
      formData.append('showInHero', String(validatedData.showInHero));
      formData.append('heroIndex', String(validatedData.heroIndex));

      // Add machine data with specifications and categories
      const machineDataObj = {
        specifications: JSON.parse(validatedData.machineData).specifications,
        categories: selectedCategories
      };
      formData.append('machineData', JSON.stringify(machineDataObj));

      // Add category IDs
      formData.append('categoryIds', JSON.stringify(selectedCategories));

      // Append multiple images
      images.forEach((image) => {
        formData.append('images', image);
      });

      const response = await fetch(new URL('/products', BASE_API_URL).toString(), {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create product');
      }

      toast.success('Product created successfully');
      navigate({ to: '/dashboard/products' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ');
        toast.error(`Validation error: ${errors}`);
      } else {
        console.error(error);
        toast.error(error instanceof Error ? error.message : 'An error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container flex justify-center items-center h-full py-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
          <CardDescription>
            Fields marked with * are required. You can upload up to 10 images.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-6">
            <ProductInfoSection 
              productData={productData} 
              setProductData={setProductData}
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              isSubmitting={isSubmitting}
            />
            <ImageUploadSection 
              images={images} 
              setImages={setImages}
              isSubmitting={isSubmitting}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Add Product'}
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}

export const Route = createFileRoute("/dashboard/add/product")({
  component: RouteComponent,
});
