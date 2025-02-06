import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  FileText,
  Star,
  ChevronRight,
  Truck,
  Shield,
  Settings,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products, Review } from "@/constants/products";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetailsPage,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === params.productId);

    return { product };
  },
});

function calculateAverageRating(reviews: Review[]) {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round(sum / reviews.length);
}

function ProductDetailsPage() {
  const { product } = Route.useLoaderData();
  const [selectedImage, _] = useState(0);

  if (typeof product === "undefined") {
    return <div>Product not found</div>;
  }

  const productImages = [product.image, ...Array(3).fill(product.image)]; // Replace with actual product images

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background/95">

        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Product Main Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <motion.div
                className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/50 to-primary/20 p-[2px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="relative h-full rounded-3xl overflow-hidden">
                  <img
                    src={productImages[selectedImage]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </div>
              </motion.div>

              {/* Thumbnail Gallery */}
              {/* <div className="grid grid-cols-4 gap-4">
                {productImages.map((img, idx) => (
                  <button
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
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div> */}
            </div>

            {/* Product Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Product Type */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-medium">{product.type}</span>
              </div>

              {/* Title and Description */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                {product.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Settings className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="space-y-6 pt-4">
                {typeof product.price === "number" ? (
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">onwards</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <span className="text-sm text-muted-foreground">Price</span>
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg gap-2">
                    <Phone className="h-5 w-5" />
                    Request Callback
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg gap-2">
                    <Mail className="h-5 w-5" />
                    Email Inquiry
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Details Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Benefits Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Our Product
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Fast Installation",
                description:
                  "Professional installation service with quick turnaround time",
              },
              {
                icon: Shield,
                title: "2 Year Warranty",
                description:
                  "Comprehensive warranty with dedicated support team",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support and maintenance",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl bg-muted/50 space-y-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Details */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Technical Specifications</h2>
          <Accordion type="single" collapsible className="w-full">
            {product.specifications.map((specification, idx) => (
              <AccordionItem value={specification.id} key={idx}>
                <AccordionTrigger>{specification.heading}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {specification.specifications.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Reviews Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold">Customer Reviews</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={cn(
                        "h-5 w-5",
                        star <= calculateAverageRating(product.reviews)
                          ? "fill-primary text-primary"
                          : "fill-muted stroke-muted-foreground"
                      )}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews.length} reviews)
                </span>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              Write a Review
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {product.reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                className="p-6 rounded-2xl bg-muted/50 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{review.author}</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-4 w-4",
                          star <= review.rating
                            ? "fill-primary text-primary"
                            : "fill-muted stroke-muted-foreground"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
                  <span className="text-sm text-muted-foreground">
                  {review.date.toLocaleDateString()}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to="/products/$productId"
                params={{ productId: relatedProduct.id }}
                className="group"
              >
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
