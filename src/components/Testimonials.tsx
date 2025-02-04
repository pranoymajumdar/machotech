import { motion } from "framer-motion";
import { LucideQuote, LucideBuilding2, LucideStar } from "lucide-react";

const testimonials = [
  {
    quote:
      "The bandsaw machines from Indotech have significantly improved our production efficiency. Their precision and reliability are unmatched.",
    author: "Robert Chen",
    position: "Production Manager",
    company: "TechMech Industries",
    rating: 5,
    logo: (
      <div className="flex items-center gap-2 font-bold text-primary">
        <LucideBuilding2 className="w-5 h-5" />
        <span>TechMech</span>
      </div>
    ),
  },
  {
    quote:
      "Outstanding support team and excellent machine quality. We've been using their products for over 5 years with minimal maintenance required.",
    author: "Sarah Williams",
    position: "Operations Director",
    company: "Marine Systems Co.",
    rating: 5,
    logo: (
      <div className="flex items-center gap-2 font-bold text-primary">
        <LucideBuilding2 className="w-5 h-5" />
        <span>MarineSys</span>
      </div>
    ),
  },
  {
    quote:
      "The precision and cut quality of Indotech machines have helped us maintain our high manufacturing standards. Highly recommended.",
    author: "Michael Kumar",
    position: "Technical Head",
    company: "AutoParts Global",
    rating: 5,
    logo: (
      <div className="flex items-center gap-2 font-bold text-primary">
        <LucideBuilding2 className="w-5 h-5" />
        <span>AutoParts</span>
      </div>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container relative px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Client <span className="text-primary font-normal">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our clients have to say about their experience with our
            machines and services
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="relative h-full bg-background/50 backdrop-blur-sm rounded-2xl border p-6 hover:border-primary/50 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <LucideQuote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 pt-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                      >
                        <LucideStar className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="pt-4 mt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                      {testimonial.logo}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Gradient */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-br-2xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <LucideBuilding2 className="w-4 h-4" />
              500+ Installations
            </span>
            <span className="flex items-center gap-2">
              <LucideStar className="w-4 h-4" />
              4.9/5 Average Rating
            </span>
            <span className="flex items-center gap-2">
              <LucideQuote className="w-4 h-4" />
              98% Satisfied Clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
