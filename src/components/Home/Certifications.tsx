import { motion } from "framer-motion";
import {
  LucideAward,
  LucideCheckCircle,
  LucideMedal,
  LucideShieldCheck,
  LucideTrophy,
} from "lucide-react";
import { Button } from "../ui/button";

const certifications = [
  {
    icon: <LucideShieldCheck className="w-8 h-8" />,
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
    year: "Since 2015",
    issuer: "International Organization for Standardization",
  },
  {
    icon: <LucideMedal className="w-8 h-8" />,
    title: "CE Certified",
    description: "European Conformity Standards",
    year: "Since 2018",
    issuer: "European Commission",
  },
  {
    icon: <LucideAward className="w-8 h-8" />,
    title: "Best Manufacturer",
    description: "Excellence in Manufacturing Award",
    year: "2022",
    issuer: "Industrial Association of India",
  },
];

const achievements = [
  {
    metric: "500+",
    label: "Machines Installed",
  },
  {
    metric: "50+",
    label: "Countries Served",
  },
  {
    metric: "25+",
    label: "Years Experience",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 relative">
      {/* Background Elements */}
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
            Certifications & <span className="text-primary font-normal">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized for excellence in manufacturing and quality standards
          </p>
        </motion.div>

        {/* GST Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl border p-8 md:p-10 group hover:border-primary/50 transition-all duration-300">
            {/* Top Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="bg-primary px-4 py-1.5 rounded-full shadow-lg">
                <span className="text-sm font-medium text-primary-foreground flex items-center gap-2">
                  <LucideCheckCircle className="w-4 h-4" />
                  Verified Business
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
              {/* Left Side */}
              <div className="text-left space-y-1">
                <p className="text-sm text-muted-foreground font-medium">Government Registered</p>
                <h3 className="text-xl font-semibold">
                  GST Registration Number
                </h3>
              </div>

              {/* Divider for Mobile */}
              <div className="w-full h-px bg-border md:hidden" />

              {/* Right Side */}
              <div className="flex items-center gap-4">
                <div className="bg-primary/5 px-6 py-4 rounded-xl border border-primary/10">
                  <p className="text-2xl md:text-3xl font-mono font-bold text-primary tracking-wider">
                    23AABCI2856A1Z5
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="shrink-0 hover:bg-primary/5 hover:text-primary"
                  onClick={() => {
                    navigator.clipboard.writeText("23AABCI2856A1Z5");
                    // You might want to add a toast notification here
                  }}
                >
                  <LucideCheckCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute top-1/2 left-6 -translate-y-1/2 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute top-1/2 right-6 -translate-y-1/2 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            </div>

            {/* Bottom Info - Optional */}
            <div className="mt-6 pt-4 border-t flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <LucideCheckCircle className="w-4 h-4 text-primary" />
                Registered Since 2015
              </span>
              <span className="flex items-center gap-2">
                <LucideCheckCircle className="w-4 h-4 text-primary" />
                Active Status
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl border p-6 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {cert.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t mt-auto">
                    <span>{cert.year}</span>
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-background/50 backdrop-blur-sm rounded-2xl border p-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="space-y-2"
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  {achievement.metric}
                </div>
                <p className="text-muted-foreground text-lg">
                  {achievement.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
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
            <span className="relative z-10">Download Certificates</span>
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
