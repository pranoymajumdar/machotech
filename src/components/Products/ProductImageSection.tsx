import { Product } from "@/constants/products";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProductImageSection({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4 h-fit">
      <motion.div
        className="aspect-square rounded-3xl overflow-hidden transition-colors duration-300 dark:bg-gradient-to-br dark:from-primary/50 dark:to-primary/20 p-[2px] bg-[linear-gradient(199deg,rgba(255,255,255,1)0%,rgba(0,212,255,1)250%)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative h-full rounded-3xl overflow-hidden">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="h-full w-full object-contain"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-tr transition-colors duration-300 from-black/20 to-transparent" /> */}
        </div>
      </motion.div>
      <div className="grid grid-cols-4 gap-4">
        {product.images.map((image, idx) => (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={cn(
              "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
              selectedImage === idx
                ? "border-primary"
                : "border-transparent hover:border-primary/50"
            )}
          >
            <img
              src={image}
              alt={`${product.name} ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
