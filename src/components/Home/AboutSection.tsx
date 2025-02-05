import { aboutData, statsCard } from "@/constants/home/about";
import { motion } from "framer-motion";
import { LucideBuilding2, LucideChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";


export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            {aboutData.heading.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-4xl font-light leading-relaxed">
              {aboutData.title.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h3>

            {/* Stats Section */}
            <div ref={ref} className="grid grid-cols-3 gap-4 py-8 border-y">
              {statsCard.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center mb-3">
                    {stat.icon}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-2xl md:text-3xl font-medium text-foreground"
                  >
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.title}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">{aboutData.description}</p>

            {/* Features List */}
            <ul className="grid grid-cols-2 gap-4">
              {aboutData.features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}

                  className="flex items-center space-x-2 text-sm"
                >
                  <LucideChevronRight className="text-primary" size={16} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5"
          >
            {/* Add your image here */}
            <div className="absolute inset-0 flex items-center justify-center text-primary/20">
              <LucideBuilding2 className="w-32 h-32" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.bottomCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />

              <div className="relative h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50">
                <div className="space-y-4">
                  {/* Icon with circle background */}
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping-slow" />
                    <div className="relative bg-background/50 backdrop-blur-sm rounded-full p-3">
                      {card.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
