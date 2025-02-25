import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import GetQuoteModal from "../GetQuoteModal";
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

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const currentProduct = products[currentIndex];

  useEffect(() => {
    fetchHeroProducts();
  }, []);

  const fetchHeroProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        new URL('/products', BASE_API_URL).toString()
      );

      if (!response.ok) {
        throw new Error('Failed to fetch hero products');
      }

      const data = await response.json();
      
      // Filter hero products and sort by heroIndex
      const heroProducts = data
        .filter((product: Product) => product.showInHero)
        .sort((a: Product, b: Product) => {
          // If heroIndex is 0 or undefined, put at the end
          if (!a.heroIndex && !b.heroIndex) return 0;
          if (!a.heroIndex) return 1;
          if (!b.heroIndex) return -1;
          return a.heroIndex - b.heroIndex;
        });

      // Validate heroIndex uniqueness and sequence
      const validatedProducts = heroProducts.map((product: Product, index: number) => {
        // If heroIndex is missing or duplicate, assign new index + 1
        if (!product.heroIndex || 
            heroProducts.filter((p: Product) => p.heroIndex === product.heroIndex).length > 1) {
          return {
            ...product,
            heroIndex: index + 1
          };
        }
        return product;
      });

      setProducts(validatedProducts);
    } catch {
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (products.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length]);

  const handleNavigation = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? products.length - 1 : prev - 1;
      }
      return (prev + 1) % products.length;
    });
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading || !currentProduct) {
    return (
      <div className="relative md:pt-10 bg-background/95 flex items-center overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-small-black/[0.15] -z-10" />
          <div className="absolute h-full w-full">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
        </div>
        <div className="container flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="relative md:pt-10 bg-background/95 flex items-center overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-small-black/[0.15] -z-10" />
        <div className="absolute h-full w-full">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
      </div>

      <div className="container px-4 mx-auto py-12">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Content Section */}
              <div className="relative order-2 lg:order-1">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {/* Product Navigation */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                      {products.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDotClick(idx)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            currentIndex === idx
                              ? "bg-primary w-6"
                              : "bg-primary/30 hover:bg-primary/50"
                          )}
                          aria-label={`View product ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {String(currentIndex + 1).padStart(2, "0")}/
                      {String(products.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-6">
                    <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                      {/* <TextScramble
                        text={currentProduct.name}
                        className="block"
                      /> */}

                      <h1 className="block">
                        {currentProduct.name}
                      </h1>
                    </div>

                    <motion.p
                      className="text-xl text-primary font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentProduct.description}
                    </motion.p>
                  </div>


                  {/* Price and CTA */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Price Display */}
                    {!currentProduct.isContactForPrice && currentProduct.price ? (
                      <div className="space-y-1">
                        <span className="text-sm text-muted-foreground">Starting from</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold">
                            ₹{Number(currentProduct.price).toLocaleString()}
                          </span>
                          <span className="text-muted-foreground">onwards</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-lg font-medium text-primary">
                              Contact for Price
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="text-lg group relative overflow-hidden"
                      >
                        <Link params={{ productId: currentProduct.id.toString() }} to="/products/$productId">
                          View Product
                          <motion.div
                            className="absolute inset-0 bg-primary/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                      <GetQuoteModal>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="text-lg"
                        >
                          Contact Sales
                        </Button>
                      </GetQuoteModal>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="relative order-1 lg:order-2">
                <motion.div
                  className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square w-full max-w-[500px] lg:max-w-[600px] mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  {/* Image Container */}
                  <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/30 dark:from-primary/20 dark:to-primary/0 to-primary/10 border p-[2px] shadow-2xl">
                    <div className="absolute inset-0 backdrop-blur-sm rounded-3xl" />
                    <div className="relative h-full rounded-3xl overflow-hidden group">
                      <img
                        src={BASE_API_URL + currentProduct.machineData.images?.[0]}
                        alt={currentProduct.name}
                        className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                      />
                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-background/10 to-transparent" />

                      {/* Subtle Shine Effect */}
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          maskImage:
                            "linear-gradient(45deg, transparent 40%, white 60%, transparent 80%)",
                          WebkitMaskImage:
                            "linear-gradient(45deg, transparent 40%, white 60%, transparent 80%)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Navigation Arrows - Repositioned */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleNavigation("prev")}
                      className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleNavigation("next")}
                      className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Product Count Indicator */}
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                    {currentIndex + 1} / {products.length}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
