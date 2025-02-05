import { motion } from "framer-motion";
import {
  LucideAward,
  LucideCog,
  LucideHeartHandshake,
  LucideShieldCheck,
  LucideTimer,
  LucideWrench,
} from "lucide-react";
import { Button } from "../ui/button";

const features = [
  {
    icon: <LucideShieldCheck className="w-8 h-8" />,
    title: "Japanese Technology",
    description:
      "Built with precision engineering and advanced Japanese manufacturing techniques",
  },
  {
    icon: <LucideTimer className="w-8 h-8" />,
    title: "Long Lasting",
    description:
      "Durable construction ensuring years of reliable performance and minimal maintenance",
  },
  {
    icon: <LucideAward className="w-8 h-8" />,
    title: "Quality Assured",
    description:
      "ISO 9001:2015 certified manufacturing process with rigorous quality controls",
  },
  {
    icon: <LucideCog className="w-8 h-8" />,
    title: "Advanced Features",
    description:
      "Cutting-edge automation and precision control for optimal performance",
  },
  {
    icon: <LucideWrench className="w-8 h-8" />,
    title: "Easy Maintenance",
    description:
      "Simple maintenance procedures and readily available spare parts",
  },
  {
    icon: <LucideHeartHandshake className="w-8 h-8" />,
    title: "Expert Support",
    description:
      "Dedicated technical support team providing prompt assistance when needed",
  },
];

export default function KeyFeatures() {
  return (
    <section className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="container relative px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Why Choose{" "}
            <span className="text-primary font-normal">Our Machines</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the perfect blend of Japanese technology and Indian
            manufacturing excellence
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl border p-6 hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Content */}
                <div className="relative space-y-4 flex flex-col h-full">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 w-fit">
                    {feature.icon}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button 
            size="lg" 
            className="group relative px-8 overflow-hidden"
          >
            <span className="relative z-10">Request Technical Details</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-primary-foreground/10"
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
