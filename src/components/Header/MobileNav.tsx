import { LucideMenu, LucideX } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navLinks } from "@/constants/nav";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <LucideMenu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-0 pt-10">
        <SheetTitle />
        <div className="h-full flex flex-col">

          <motion.div className="flex-1 p-4">
            <AnimatePresence>
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}

                >
                  <Link
                    to={item.href}
                    onClick={() => {
                      setActiveItem(index);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "relative flex items-center gap-2 px-4 py-3 my-1 rounded-lg transition-all duration-200",
                      activeItem === index
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    )}
                  >
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                    </div>
                    {activeItem === index && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1 h-8 bg-primary rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="p-4 border-t mt-auto">
            <Button className="w-full" size="lg">
              Get Quote
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
