import { motion } from "framer-motion";
import {
  LucideFactory,
  LucideHardHat,
  LucideLeaf,
  LucideLightbulb,
  LucideSettings,
  LucideShip,
  LucideTruck,
} from "lucide-react";
import { Button } from "./ui/button";

const industries = [
  {
    icon: <LucideFactory className="w-10 h-10" />,
    name: "Manufacturing",
    description: "Metal fabrication and industrial manufacturing processes",
    expertise: ["Sheet Metal", "Steel Processing", "Metal Fabrication"],
  },
  {
    icon: <LucideShip className="w-10 h-10" />,
    name: "Marine",
    description: "Shipbuilding and marine equipment manufacturing",
    expertise: ["Ship Building", "Marine Equipment", "Offshore"],
  },
  {
    icon: <LucideHardHat className="w-10 h-10" />,
    name: "Construction",
    description: "Construction and infrastructure development",
    expertise: ["Steel Structure", "Heavy Equipment", "Infrastructure"],
  },
  {
    icon: <LucideTruck className="w-10 h-10" />,
    name: "Automotive",
    description: "Automotive parts and component manufacturing",
    expertise: ["Auto Parts", "Vehicle Components", "Chassis"],
  },
  {
    icon: <LucideLightbulb className="w-10 h-10" />,
    name: "Energy",
    description: "Power generation and energy sector equipment",
    expertise: ["Power Plants", "Energy Equipment", "Utilities"],
  },
  {
    icon: <LucideLeaf className="w-10 h-10" />,
    name: "Agriculture",
    description: "Agricultural machinery and equipment",
    expertise: ["Farm Equipment", "Processing Units", "Machinery"],
  },
];

export default function OurExpertise() {
  return (
    <section className="py-24 relative">
      {/* Decorative Background */}
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
            Industry{" "}
            <span className="text-primary font-normal">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Serving diverse industries with precision cutting solutions and
            technical excellence
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="relative h-full bg-background/50 backdrop-blur-sm rounded-2xl border p-6 hover:border-primary/50 transition-all duration-300">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 w-fit">
                    {industry.icon}
                  </div>

                  {/* Industry Info */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {industry.expertise.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LucideSettings className="w-5 h-5 text-primary/40 animate-spin-slow" />
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
            variant="outline"
            className="group relative px-8 overflow-hidden"
          >
            <span className="relative z-10">Explore Applications</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-primary/10"
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
