import { navLinks } from "@/constants/nav";
import { contantInfo } from "@/constants/utils";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  LucideArrowRight,
  LucideMail,
  LucideMenu,
  LucidePhone,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

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

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 px-4"
            >
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Quick Contact
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${contantInfo.phone}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="p-2 rounded-full bg-primary/10">
                        <LucidePhone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Call Us</p>
                        <p className="text-xs text-muted-foreground">
                          {contantInfo.phone}
                        </p>
                      </div>
                      <LucideArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                    </a>

                    <a
                      href={`mailto:${contantInfo.email}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="p-2 rounded-full bg-primary/10">
                        <LucideMail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Email Us</p>
                        <p className="text-xs text-muted-foreground">
                          {contantInfo.email}
                        </p>
                      </div>
                      <LucideArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                    </a>
                  </div>
                </div>

                {/* Request Callback Button */}
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Request Callback
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
