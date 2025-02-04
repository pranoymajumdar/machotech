import HeroPng from "@/assets/hero.png";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonProps } from "@/components/ui/button";
import { heroData } from "@/constants/home/hero";
import { contantInfo } from "@/constants/utils";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideMail, LucidePhone } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeIn}>
              <Badge variant="secondary" className="px-4 py-2">
                <span className="text-sm font-medium">
                  {"GST No: "}
                  {contantInfo.gst}
                </span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {heroData.title1}
                <span className="text-primary relative inline-block">
                  {heroData.title2}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary/30"
                  />
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                {heroData.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              {heroData.cta.map((cta, index) => (
                <Button
                  key={cta.label}
                  size="lg"
                  variant={cta.variant as ButtonProps["variant"]}
                  className={cn(
                    "group",
                    index === 0 && "relative overflow-hidden"
                  )}
                >
                  <span className="relative z-10">{cta.label}</span>
                  {index === 0 && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-primary-foreground/10"
                    />
                  )}
                  {cta.icon}
                </Button>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <a
                href="tel:08048984333"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <LucidePhone className="h-4 w-4" />
                </div>
                <span className="font-medium">08048984333</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <LucideMail className="h-4 w-4" />
                </div>
                <span className="font-medium">Send Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative rounded-2xl bg-gradient-to-b from-primary/5 to-transparent p-2"
            >
              <img
                src={HeroPng}
                alt="Industrial Bandsaw Machine"
                className="w-full h-full object-cover rounded-xl"
                loading="eager"
              />

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 right-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    {heroData.trustBadge.icon}
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      {heroData.trustBadge.label}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {heroData.trustBadge.since}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
