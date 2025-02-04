import { navLinks } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const currentIndex = navLinks.findIndex((item) => item.href === pathname);
    if (currentIndex !== -1) {
      setActiveItem(currentIndex);
    }
  }, [pathname]);

  return (
    <nav className="relative">
      <motion.div 
        className="flex items-center gap-1 bg-muted/50 backdrop-blur-md rounded-full p-1.5 border border-border/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((item, index) => (
          <motion.div
            key={item.name}
            className="relative"
            onHoverStart={() => setHoveredItem(index)}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <Link
              to={item.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                activeItem === index 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveItem(index)}
            >
              {/* Link Content */}
              <span className="relative z-10">
                {item.name}
              </span>

              {/* Active Background */}
              <AnimatePresence>
                {activeItem === index && (
                  <motion.div
                    layoutId="active"
                    className="absolute inset-0 bg-background border border-border/50 rounded-full shadow-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>

              {/* Hover Glow Effect */}
              <AnimatePresence>
                {hoveredItem === index && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 rounded-full bg-primary/10 blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>

              {/* Active Dot */}
              <AnimatePresence>
                {activeItem === index && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          </motion.div>
        ))}

        {/* Animated Background for Hover */}
        <AnimatePresence>
          {hoveredItem !== null && (
            <motion.div
              layoutId="hover"
              className="absolute inset-0 rounded-full bg-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
