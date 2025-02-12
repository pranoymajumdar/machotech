import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { products } from "@/constants/products";
import Container from "@/components/ui/container";
export const Route = createFileRoute("/products/")({
  component: RouteComponent,
});



const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}
function RouteComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="my-10">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <Container className="relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-light tracking-tight"
            >
              Our <span className="text-primary font-normal">Products</span>
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="h-1 w-20 bg-primary rounded mx-auto"
            />
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground"
            >
              Leading manufacturer of precision bandsaw machines, delivering
              excellence since 1995
            </motion.p>
            <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
          </motion.div>
        </Container>
      </section>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground py-8">
            No products found matching your search.
          </p>
        )}
      </motion.div>
    </Container>
  );
}
