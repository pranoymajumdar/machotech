import { LucideBuilding2, LucideUsers2, LucideBook } from "lucide-react";

export const statsCard = [
  {
    icon: <LucideBuilding2 className="w-6 h-6 text-primary" />,
    title: "Since",
    value: "1995",
    suffix: "",
  },
  {
    icon: <LucideUsers2 className="w-6 h-6 text-primary" />,
    title: "Annual Turnover",
    value: "100",
    suffix: "Cr+",
  },
  {
    icon: <LucideBook className="w-6 h-6 text-primary" />,
    title: "ISO Certified",
    value: "9001",
    suffix: ":2015",
  },
];

export const aboutData = {
  heading: [
    "About",
    " ",
    <span className="text-primary font-normal">Indotech Industries</span>,
  ],
  title: [
    "Leading Manufacturer of High-Quality",
    " ",
    <span className="text-primary block mt-2 font-normal">
      Bandsaw Machines
    </span>,
  ],
  description: [
    "With decades of expertise in manufacturing cutting-edge bandsaw machines, we've established ourselves as a pioneer in the metal cutting industry. Our commitment to innovation and quality has made us a trusted partner for businesses worldwide.",
  ],
  features: [
    "State-of-the-art facility",
    "Quality control systems",
    "Expert technical team",
    "Global export network",
  ],
  bottomCards: [
    {
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes ensure top-notch products",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            className="stroke-current"
            strokeWidth="1.5"
          />
          <path
            d="M7.5 12.5L10.5 15.5L16.5 9.5"
            className="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Technical Support",
      description:
        "24/7 expert technical assistance and maintenance services",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99997 4 5.99997C3.79277 5.99997 3.58678 5.99472 3.38213 5.98434C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
            className="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Global Reach",
      description:
        "Serving customers across multiple countries with reliable solutions",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            className="stroke-current"
            strokeWidth="1.5"
          />
          <path
            d="M2 12H22M12 2C14.5013 4.73835 16 8.29203 16 12C16 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8 15.708 8 12C8 8.29203 9.49872 4.73835 12 2Z"
            className="stroke-current"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ]
};
