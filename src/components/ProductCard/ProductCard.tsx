import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Product } from "@/constants/products";
import { Phone, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden border border-border/40 bg-card h-full flex flex-col group">
        {/* Large Image Container */}
        <div className="aspect-[16/9] overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          {/* Hover Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Product Type Tag */}
          {product.type && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
              {product.type}
            </div>
          )}
        </div>

        <div className="flex flex-col flex-grow p-6">
          <CardContent className="p-0 flex-grow space-y-4">
            {/* Title and Description */}
            <div>
              <h3 className="font-semibold text-xl mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
            </div>

            {/* Specs/Features List */}
            {product.specs && (
              <div className="flex flex-wrap gap-2">
                {product.specs.slice(0, 3).map((spec, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="p-0 pt-6 flex items-end justify-between gap-4">
            {typeof product.price === "number" ? (
              <>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">
                    Starting at
                  </span>
                  <div className="text-2xl font-bold">
                    ₹{product.price.toLocaleString()}
                  </div>
                </div>
                <Button
                  variant="default"
                  size="lg"
                  className="group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Product
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Price</span>
                  <div className="text-primary font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Contact for Details
                  </div>
                </div>
                <Link
                  params={{ productId: product.id }}
                  to="/products/$productId"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                      className: "group/btn relative overflow-hidden",
                    })
                  )}
                >
                  <span className="relative z-10">View Product</span>
                  <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
                </Link>
              </>
            )}
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
