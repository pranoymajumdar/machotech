import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Container from "../ui/container";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 0);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm h-16"
          : "bg-transparent h-20"
      )}
    >
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <MobileNav />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Logo />
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <Nav />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />

            <div className="hidden lg:block">
              <Button size="sm" className="relative group overflow-hidden">
                <span className="relative z-10">Get Quote</span>
                <motion.div
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-primary-foreground/10"
                />
              </Button>
            </div>

            <div className="hidden lg:block absolute top-full right-0 mt-1 p-4 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
              <div className="space-y-2">
                <p className="text-sm font-medium">Contact Us</p>
                <div className="text-sm text-muted-foreground">
                  <p>Phone: +1234567890</p>
                  <p>Email: contact@example.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.header>
  );
}
