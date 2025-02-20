import { Product } from "@/components/ProductModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BASE_API_URL } from "@/constants/utils";

export default function ProductImageSection({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Ensure images array exists
  const images = Array.isArray(product.machineData?.images) 
    ? product.machineData.images 
    : [];

  if (images.length === 0) {
    return (
      <div className="aspect-square rounded-3xl overflow-hidden bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 h-fit">
      <motion.div className="aspect-square rounded-3xl overflow-hidden">
        <img
          src={BASE_API_URL + images[selectedImage]}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </motion.div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={cn(
              "aspect-square rounded-2xl overflow-hidden border-2",
              selectedImage === idx
                ? "border-primary"
                : "border-transparent hover:border-primary/50"
            )}
          >
            <img
              src={BASE_API_URL + image}
              alt={`${product.name} ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
