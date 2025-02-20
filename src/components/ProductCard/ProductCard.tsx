import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LucidePhoneCall } from "lucide-react";
import { BASE_API_URL } from "@/constants/utils";

interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

interface Product {
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
  categories: Category[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to="/products/$productId"
      params={{ productId: product.id.toString() }}
      className="group block"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-tr from-primary/30 dark:from-primary/20 dark:to-primary/0 to-primary/10 border p-[2px]"
      >
        <div className="absolute inset-0 backdrop-blur-sm rounded-3xl" />
        <div className="relative h-full rounded-3xl overflow-hidden">
          <img
            src={BASE_API_URL + product.machineData.images?.[0]}
            alt={product.name}
            className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-background/10 to-transparent" />
        </div>
      </motion.div>

      <div className="mt-6 space-y-2">
        <h3 className="text-2xl font-medium tracking-tight">{product.name}</h3>
        <p className="line-clamp-2 text-muted-foreground">{product.description}</p>
        {product.isContactForPrice || !product.price ? (
          <div className="flex items-center gap-2 text-primary">
            <LucidePhoneCall className="h-4 w-4" />
            <span>Contact for price</span>
          </div>
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">
              ₹{Number(product.price).toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">onwards</span>
          </div>
        )}
      </div>
    </Link>
  );
}
