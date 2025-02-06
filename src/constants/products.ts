export type Review = {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date: Date;
};

type Specification = {
  id: string;
  heading: string;
  specifications: string[];
};

export type Product = {
  id: string;
  name: string;
  price: number | "contact for price";
  image: string;
  description: string;

  specs: string[];
  featured: boolean;
  type?: string;
  reviews: Review[];
  specifications: Specification[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "contact for price",
    image: "https://picsum.photos/400/400?random=1",
    description: "High-quality wireless headphones with noise cancellation.",
    specs: [
      "Noise Cancellation",
      "Bluetooth",
      "Long Battery Life",
      "Comfortable Fit",
    ],
    featured: true,
    type: "Bandsaw Machine",
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "Excellent machine, perfect for our manufacturing needs. The precision is outstanding.",
        author: "John Manufacturing Ltd.",
        date: new Date("2024-01-01"),
      },
      {
        id: "r2",

        rating: 4,
        comment:
          "Great performance and reliable. Support team is very helpful.",
        author: "Industrial Solutions Co.",
        date: new Date("2024-01-01"),
      },
      {
        id: "r3",
        rating: 5,
        comment:
          "Best investment we made this year. Significantly improved our production efficiency.",
        author: "Tech Industries",
        date: new Date("2024-01-01"),
      },
    ],
    specifications: [
      {
        id: "s1",
        heading: "Technical Specifications",
        specifications: [
          "Cutting Capacity: 400mm x 400mm",
          "Blade Speed: 20-120 m/min",
          "Motor Power: 1.5kW/2.2kW",
          "Table Height: 850mm",
          "Machine Weight: 800kg",
          "Voltage: 415V/3Ph/50Hz",
        ],
      },
      {
        id: "s2",
        heading: "Safety Features",
        specifications: [
          "Emergency Stop Button",
          "Blade Break Detection",
          "Safety Door Interlocking",
          "Overload Protection",
          "CE Certified Safety Standards",
        ],
      },
      {
        id: "s3",
        heading: "Additional Features",
        specifications: [
          "Digital Control Panel",
          "Automatic Material Feed",
          "Coolant System",
          "Work Light",
          "Material Length Stop",
          "Chip Collection Tray",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Smart Watch",
    price: "contact for price",
    image: "https://picsum.photos/400/400?random=2",
    description: "Feature-rich smartwatch with health tracking.",
    specs: [
      "Health Tracking",
      "Bluetooth",
      "Long Battery Life",
      "Comfortable Fit",
    ],
    featured: true,
    type: "CNC Machine",
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "The precision and speed of this CNC machine is remarkable. Excellent support team.",
        author: "Precision Engineering Ltd.",
        date: new Date("2024-01-01"),
      },
      {
        id: "r2",
        rating: 4,
        comment: "Very reliable machine. Minor learning curve but worth it.",
        author: "Advanced Manufacturing Co.",
        date: new Date("2024-01-01"),
      },
    ],
    specifications: [
      {
        id: "s1",
        heading: "Machine Specifications",
        specifications: [
          "Working Area: 1300 x 2500 x 200mm",
          "Spindle Speed: 24000 RPM",
          "Motor Power: 9kW",
          "Tool Changer: 12 positions",
          "Maximum Travel Speed: 30m/min",
          "Positioning Accuracy: ±0.03mm",
        ],
      },
      {
        id: "s2",
        heading: "Control System",
        specifications: [
          "Advanced DSP Controller",
          "7-inch Touch Screen",
          "USB Interface",
          "Network Capability",
          "Offline Working Mode",
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Laptop Pro",
    price: 23456,
    image: "https://picsum.photos/400/400?random=3",
    description: "Powerful laptop for professionals and creators.",
    specs: ["Powerful", "Bluetooth", "Long Battery Life", "Comfortable Fit"],
    featured: true,
    type: "Bandsaw Machine",
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "Perfect for our small workshop. Easy to operate and maintain.",
        author: "Small Industries Inc.",
        date: new Date("2024-01-01"),
      },
    ],

    specifications: [
      {
        id: "s1",
        heading: "Machine Details",
        specifications: [
          "Cutting Capacity: 300mm x 300mm",
          "Blade Speed: 15-90 m/min",
          "Motor Power: 1.1kW",
          "Table Height: 800mm",
          "Machine Weight: 600kg",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Wireless Earbuds",
    price: "contact for price",
    image: "https://picsum.photos/400/400?random=4",
    description: "Premium wireless earbuds with amazing sound quality.",
    specs: [
      "Sound Quality",
      "Bluetooth",
      "Long Battery Life",
      "Comfortable Fit",
    ],
    featured: true,
    type: "Bandsaw Machine",
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "Perfect for our small workshop. Easy to operate and maintain.",
        author: "Small Industries Inc.",
        date: new Date("2024-01-01"),
      },
    ],

    specifications: [
      {
        id: "s1",
        heading: "Machine Details",
        specifications: [
          "Cutting Capacity: 300mm x 300mm",
          "Blade Speed: 15-90 m/min",
          "Motor Power: 1.1kW",
          "Table Height: 800mm",
          "Machine Weight: 600kg",
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Bandsaw Machine",
    price: "contact for price",
    image: "https://picsum.photos/400/400?random=5",
    description: "Premium bandsaw machine with amazing sound quality.",
    specs: [
      "Sound Quality",
      "Bluetooth",
      "Long Battery Life",
      "Comfortable Fit",
    ],
    featured: false,
    type: "Bandsaw Machine",
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "Perfect for our small workshop. Easy to operate and maintain.",
        author: "Small Industries Inc.",
        date: new Date("2024-01-01"),
      },
    ],

    specifications: [
      {
        id: "s1",
        heading: "Machine Details",
        specifications: [
          "Cutting Capacity: 300mm x 300mm",
          "Blade Speed: 15-90 m/min",
          "Motor Power: 1.1kW",
          "Table Height: 800mm",
          "Machine Weight: 600kg",
        ],
      },
    ],
  },
  {
    id: "6",
    name: "CNC Machine",
    price: "contact for price",
    image: "https://picsum.photos/400/400?random=6",
    description: "Premium cnc machine with amazing sound quality.",
    specs: [
      "Sound Quality",
      "Bluetooth",
      "Long Battery Life",
      "Comfortable Fit",
    ],
    featured: false,
    type: "CNC Machine",
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "Perfect for our small workshop. Easy to operate and maintain.",
        author: "Small Industries Inc.",
        date: new Date("2024-01-01"),
      },
    ],

    specifications: [
      {
        id: "s1",
        heading: "Machine Details",
        specifications: [
          "Cutting Capacity: 300mm x 300mm",
          "Blade Speed: 15-90 m/min",
          "Motor Power: 1.1kW",
          "Table Height: 800mm",
          "Machine Weight: 600kg",
        ],
      },
    ],
  },
  {
    id: "7",
    name: "CNC Machine",
    price: "contact for price",
    image: "https://picsum.photos/400/400?random=7",
    description: "Premium cnc machine with amazing sound quality.",
    specs: [
      "Sound Quality",
      "Bluetooth",
      "Long Battery Life",
      "Comfortable Fit",
    ],
    featured: false,
    type: "CNC Machine",
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "Perfect for our small workshop. Easy to operate and maintain.",
        author: "Small Industries Inc.",
        date: new Date("2024-01-01"),
      },
    ],

    specifications: [
      {
        id: "s1",
        heading: "Machine Details",
        specifications: [
          "Cutting Capacity: 300mm x 300mm",
          "Blade Speed: 15-90 m/min",
          "Motor Power: 1.1kW",
          "Table Height: 800mm",
          "Machine Weight: 600kg",
        ],
      },
    ],
  },
  {
    id: "8",
    name: "CNC Machine",
    price: "contact for price",
    image: "https://picsum.photos/400/400?random=8",
    description: "Premium cnc machine with amazing sound quality.",
    specs: [
      "Sound Quality",
      "Bluetooth",
      "Long Battery Life",
      "Comfortable Fit",
    ],
    featured: false,
    type: "CNC Machine",
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "Perfect for our small workshop. Easy to operate and maintain.",
        author: "Small Industries Inc.",
        date: new Date("2024-01-01"),
      },
      {
        id: "r2",

        rating: 3,
        comment:
          "Perfect for our small workshop. Easy to operate and maintain.",
        author: "Small Industries Inc.",
        date: new Date("2024-01-01"),
      },
      {
        id: "r3",

        rating: 2,
        comment:
          "Perfect for our small workshop. Easy to operate and maintain.",
        author: "Small Industries Inc.",
        date: new Date("2024-01-01"),
      },
    ],

    specifications: [
      {
        id: "s1",
        heading: "Machine Details",
        specifications: [
          "Cutting Capacity: 300mm x 300mm",
          "Blade Speed: 15-90 m/min",
          "Motor Power: 1.1kW",
          "Table Height: 800mm",
          "Machine Weight: 600kg",
        ],
      },
    ],
  },
];
