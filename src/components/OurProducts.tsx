import { motion } from "framer-motion";
import { LucideArrowRight, LucideChevronRight, LucideEye } from "lucide-react";
import { Button } from "./ui/button";

// Fake product data
const products = [
  {
    id: 1,
    name: "Automatic Bandsaw Machine",
    category: "Heavy Duty",
    description: "High-precision cutting with advanced automation features",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    price: "Contact for Price",
  },
  {
    id: 2,
    name: "Semi-Automatic Bandsaw",
    category: "Medium Duty",
    description: "Efficient cutting solution for medium-scale operations",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    price: "Contact for Price",
  },
  {
    id: 3,
    name: "Manual Bandsaw Machine",
    category: "Standard",
    description: "Reliable and cost-effective cutting equipment",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000",
    price: "Contact for Price",
  },
  {
    id: 4,
    name: "Hydraulic Bandsaw",
    category: "Premium",
    description: "Advanced hydraulic system for precise cutting",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1000",
    price: "Contact for Price",
  },
];

export default function OurProducts() {
  return (
    <section className="relative py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      
      <div className="container relative px-4 mx-auto">
        {/* Section Header - Updated to match About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Our{" "}
            <span className="text-primary font-normal">
              Featured Products
            </span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our range of high-quality bandsaw machines designed for
            precision and reliability
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="relative bg-background rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                    >
                      View Details
                      <LucideEye className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/95 backdrop-blur-sm rounded-full text-xs font-medium z-20 shadow-sm">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {product.price}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-300"
                    >
                      <LucideArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
