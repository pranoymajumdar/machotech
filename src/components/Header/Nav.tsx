import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { navLinks } from "@/constants/nav";

export default function Nav() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <nav className="relative">
      <ul className="flex items-center gap-1">
        {navLinks.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <a
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm transition-colors duration-200",
                "hover:text-primary",
                activeItem === index ? "text-primary" : "text-muted-foreground"
              )}
              onClick={() => setActiveItem(index)}
            >
              {item.name}
              {activeItem === index && (
                <motion.div
                  layoutId="activeTab"

                  className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
