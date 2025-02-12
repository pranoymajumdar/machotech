import { contantInfo } from "@/constants/utils";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import { LucideChevronDown, LucideMail, LucidePhone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Container from "../ui/container";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

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
      className="sticky top-0 z-50"
    >
      <div className={cn(
        "relative transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"
      )}>
        <Container className="max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Left Section */}
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

            {/* Center Navigation */}
            <div className="hidden lg:block">
              <Nav />
            </div>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <ThemeToggle />

              {/* Contact Button with Dropdown */}
              <div className="hidden lg:block relative">
                <Button 
                  size="sm" 
                  className="relative group"
                  onClick={() => setShowContactInfo(!showContactInfo)}
                >
                  <span>Contact</span>
                  <LucideChevronDown 
                    className={cn(
                      "ml-2 h-4 w-4 transition-transform duration-200",
                      showContactInfo && "rotate-180"
                    )} 
                  />
                </Button>

                {/* Contact Dropdown */}
                <motion.div
                  initial={false}
                  animate={showContactInfo ? {
                    opacity: 1,
                    y: 0,
                    pointerEvents: "auto",
                  } : {
                    opacity: 0,
                    y: 10,
                    pointerEvents: "none",
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-64 p-4 bg-background border rounded-lg shadow-lg"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Quick Contact</h3>
                      <div className="space-y-3">
                        <a 
                          href={`tel:${contantInfo.phone}`}
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <div className="p-2 rounded-full bg-primary/10">

                            <LucidePhone className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Call Us</p>
                            <p className="text-xs">{contantInfo.phone}</p>
                          </div>
                        </a>
                        <a 
                          href={`mailto:${contantInfo.email}`}
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >

                          <div className="p-2 rounded-full bg-primary/10">
                            <LucideMail className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Email Us</p>
                            <p className="text-xs">{contantInfo.email}</p>
                          </div>
                        </a>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </motion.header>
  );
}
