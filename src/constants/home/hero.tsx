import { LucideCheckCircle, LucideChevronRight } from "lucide-react";

import { LucideArrowRight } from "lucide-react";

export const heroData = {
  title1: "Industrial Excellence in ",
  title2: "Bandsaw Machines",
  description:
    "Leading manufacturer of precision bandsaw machines, delivering optimal functionality and durability for your industrial cutting needs.",
  cta: [
    {
      label: "View Products",
      href: "/products",
      icon: (
        <LucideArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      ),
      variant: "default",
    },
    {
      label: "Get Quote",
      href: "/quote",
      icon: (
        <LucideChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      ),
      variant: "outline",
    },
  ],
  trustBadge: {
    label: "TrustSEAL Verified",
    icon: (
      <LucideCheckCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    ),
    since: "Since 2017",
  },
};
