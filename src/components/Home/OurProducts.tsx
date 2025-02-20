import { motion } from "framer-motion";
import { LucideChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "@tanstack/react-router";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import { BASE_API_URL, Category } from "@/constants/utils";
import { toast } from "sonner";

export default function OurProducts() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(new URL('/categories', BASE_API_URL).toString());
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      <div className="container relative px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Our{" "}
            <span className="text-primary font-normal">Featured Products</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our range of high-quality bandsaw machines designed for
            precision and reliability
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, index) => (
              <div 
                key={index} 
                className="h-[300px] rounded-lg bg-muted animate-pulse"
              />
            ))
          ) : categories.length > 0 ? (
            categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <CategoryCard
                  id={category.id}
                  name={category.name}
                  description={category.description}
                  imageUrl={category.imageUrl}
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground">
              No categories found
            </div>
          )}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="group relative px-8 overflow-hidden"
            onClick={() =>
              router.navigate({
                to: "/products",
              })
            }
          >
            <span className="relative z-10">View All Products</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-primary/10"
            />
            <LucideChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
