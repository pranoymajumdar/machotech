import { Button } from "./ui/button";
import {
  LucideArrowUpRight,
  LucideBuilding2,
  LucideMail,
  LucideMapPin,
  LucidePhone,
} from "lucide-react";
import Container from "./ui/container";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

const products = [
  { name: "Automatic Bandsaw", href: "/products/automatic" },
  { name: "Semi-Automatic Bandsaw", href: "/products/semi-automatic" },
  { name: "Manual Bandsaw", href: "/products/manual" },
  { name: "Hydraulic Bandsaw", href: "/products/hydraulic" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t mt-auto">
      {/* Main Footer */}
      <Container className="px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Takes 4 columns on large screens */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Indotech Industries</h2>
              <p className="text-muted-foreground leading-relaxed">
                Leading manufacturer of high-quality bandsaw machines,
                delivering precision and reliability since 1995.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2.5 rounded-full bg-background hover:bg-primary/10 hover:text-primary transition-colors border"
                >
                  <LucideArrowUpRight className="w-4 h-4" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:08048984333"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <LucidePhone className="w-4 h-4 shrink-0" />
                  <span>08048984333</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <LucideMail className="w-4 h-4 shrink-0" />
                  <span>contact@example.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground py-1">
                <LucideMapPin className="w-4 h-4 shrink-0 mt-1" />
                <span>123 Industrial Area, City, State, India</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t bg-background/50">
        <Container className="px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <LucideBuilding2 className="w-4 h-4" />
              <span>GST No: 23AABCI2856A1Z5</span>
            </div>
            <p>© 2024 Indotech Industries. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
