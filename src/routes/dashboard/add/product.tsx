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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Dispatch, SetStateAction, useState } from "react";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

const productSchema = z.object({
  name: z.string().max(100),
  price: z.string().optional(),
  isContactForPrice: z.boolean().default(true),
  description: z.string().min(1),
  machineData: z.string(),
  showInHero: z.boolean(),
  heroIndex: z.number().int().default(0),
});

function ProductInfoSection() {
  const [productData, setProductData] = useState<z.infer<typeof productSchema>>(
    {
      name: "",
      price: "0",
      isContactForPrice: true,
      description: "",
      machineData: JSON.stringify({
        price: 100,
        hehe: 'Haha'
      }),
      showInHero: false,
      heroIndex: 0,
    }
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Product name"
          required
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Product description"
          value={productData.description}
          onChange={(e) =>
            setProductData({ ...productData, description: e.target.value })
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
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="isContactForPrice">Contact for Price</Label>
        <Select
          defaultValue={productData.isContactForPrice ? "yes" : "no"}
          onValueChange={(value) =>
            setProductData({
              ...productData,
              isContactForPrice: value === "yes",
            })
          }
        >
          <SelectTrigger className="w-full">
            {productData.isContactForPrice ? "Yes" : "No"}
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
          defaultValue={productData.showInHero ? "yes" : "no"}
          onValueChange={(value) =>
            setProductData({
              ...productData,
              showInHero: value === "yes",
            })
          }
        >
          <SelectTrigger className="w-full">
            {productData.showInHero ? "Yes" : "No"}
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
          type="number"
          id="heroIndex"
          placeholder="Hero Index"
          value={String(productData.heroIndex)}
          onChange={(e) =>
            setProductData({
              ...productData,
              heroIndex: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="grid gap-2 col-span-full">
        <Label htmlFor="machine-data">Machine Data</Label>
        <Textarea
          id="machine-data"
          className="w-full"
          rows={10}
          value={JSON.stringify(JSON.parse(productData.machineData), null, 2)}
          onChange={(e) =>
            setProductData({ ...productData, machineData: e.target.value })
          }
        />
      </div>
    </div>
  );
}



function UploadedImagesSection({
  uploadedImages,
}: {
  uploadedImages: string[];
}) {
  if (uploadedImages.length === 0) return null;
  return (
    <div className="grid gap-2 mt-4">
      <Label>Uploaded Images</Label>
      <div className="flex gap-2 flex-wrap">
        {uploadedImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Uploaded Image ${index}`}
            className="w-24 h-24 object-contain rounded-md"
          />
        ))}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/dashboard/add/product")({
  component: RouteComponent,
});

function RouteComponent() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  return (
    <div className="container flex justify-center items-center h-full py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
          <CardDescription>
            Enter the details for the new product below.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ProductInfoSection />
          <UploadedImagesSection uploadedImages={uploadedImages} />
          <Button>Add Product</Button>
        </CardContent>
      </Card>
    </div>
  );
}
