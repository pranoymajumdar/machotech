import { Product } from "@/components/ProductModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BASE_API_URL } from "@/constants/utils";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideArrowLeft } from "lucide-react";

export default function ProductImageSection({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = Array.isArray(product.machineData?.images) ? product.machineData.images : [];

  if (images.length === 0) {
    return (
      <div className="aspect-square rounded-3xl overflow-hidden bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  const handleNext = () => {
    if (selectedImage < images.length - 1) {
      setSelectedImage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImage > 0) {
      setSelectedImage((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-4 h-fit">
      {/* Main Image Display */}
      <div className="relative">
        <motion.div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
          <img
            src={BASE_API_URL + images[selectedImage]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300"
          />
        </motion.div>

        {/* Navigation Buttons */}
        {selectedImage > 0 && (
          <Button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2"
            variant="outline"
            size="icon"
            aria-label="Previous Image"
          >
            <LucideArrowLeft className="w-4 h-4" />
          </Button>
        )}

        {selectedImage < images.length - 1 && (
          <Button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2"
            variant="outline"
            size="icon"
            aria-label="Next Image"
          >
            <LucideArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex overflow-x-auto space-x-2 scrollbar-thin overflow-y-hidden">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={cn(
              "flex-shrink-0 aspect-square rounded-2xl overflow-hidden transition-transform duration-200 cursor-pointer",
              selectedImage === idx
                ? "border-primary scale-105"
                : "border-transparent hover:border-primary/50"
            )}
          >
            <img
              src={BASE_API_URL + image}
              alt={`${product.name} ${idx + 1}`}
              className="h-20 w-20 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
